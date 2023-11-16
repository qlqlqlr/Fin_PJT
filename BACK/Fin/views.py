from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.conf import settings
from .serializers import DepositProductSerializer, DepositOptionSerializer
from .models import DepositOptions, DepositProducts
from rest_framework import status
import requests

# Create your views here.

@api_view(['GET'])
def save(request):
    API_KEY = settings.API_KEY

    # url = f'http://finlife.fss.or.kr/finlifeapi/depositProductsSearch.json?auth={API_KEY}&topFinGrpNo=020000&pageNo=1'
    url = f'http://finlife.fss.or.kr/finlifeapi/savingProductsSearch.json?auth={API_KEY}&topFinGrpNo=020000&pageNo=1'
    response = requests.get(url).json()


    for prdt in response.get('result').get('baseList'):
        status = False
        for value in DepositProducts.objects.all():
            if value.fin_prdt_cd == prdt.get('fin_prdt_cd'):
                status = True
        if status:
            continue
        
        prdt_data = {
            'fin_prdt_cd' : prdt.get('fin_prdt_cd'),
            'kor_co_nm' : prdt.get('kor_co_nm'),
            'fin_prdt_nm': prdt.get('fin_prdt_nm'),
            'etc_note': prdt.get('etc_note'),
            'join_deny': prdt.get('join_deny'),
            'join_member': prdt.get('join_member'),
            'join_way': prdt.get('join_way'),
            'spcl_cnd': prdt.get('spcl_cnd'),
        }

        serializer = DepositProductSerializer(data=prdt_data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()


    for opt in response.get('result').get('optionList'):
        prdt_cd = opt.get('fin_prdt_cd')

        prdt = DepositProducts.objects.get(fin_prdt_cd=prdt_cd)

        rate = -1
        if opt.get('intr_rate'):
            rate = opt.get('intr_rate')
        
        opt_data = {
            'fin_prdt_cd': opt.get('fin_prdt_cd'),
            'intr_rate_type_nm': opt.get('intr_rate_type_nm'),
            'intr_rate': rate,
            'intr_rate2': opt.get('intr_rate2'),
            'save_trm': opt.get('save_trm'),
        }
        
        serializer2 = DepositOptionSerializer(data=opt_data)
        if serializer2.is_valid(raise_exception=True):
            serializer2.save(product=prdt)

    return Response({ "message": "okay" })





@api_view(['GET', 'POST'])
def deposit_products(request):
    if request.method == 'GET': 
        products = DepositProducts.objects.all()
        serializer = DepositProductSerializer(products, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = DepositProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def deposit_product_options(request, fin_prdt_cd):
    product = DepositProducts.objects.get(fin_prdt_cd=fin_prdt_cd)

    options = product.products.all()
    serializer = DepositOptionSerializer(options, many=True)
    return Response(serializer.data)




@api_view(['GET'])
def top_rate(request):
    options = DepositOptions.objects.all()

    max_rate = 0
    max_option = None
    for option in options:
        rate = option.intr_rate2
        if max_rate < rate:
            max_rate = rate
            max_option = option
    
    max_product = max_option.product

    serializer1 = DepositProductSerializer(max_product)
    serializer2 = DepositOptionSerializer(max_option)

    result = {
        "deposit_product": serializer1.data,
        "options": serializer2.data,
    }

    return Response(result)