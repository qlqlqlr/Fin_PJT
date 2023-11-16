from rest_framework import serializers
from .models import DepositProducts, DepositOptions


class DepositProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = DepositProducts
        fields = '__all__'


class DepositOptionSerializer(serializers.ModelSerializer):
    # product = serializers.ReadOnlyField(source='DepositOptions.product')
    class Meta:
        model = DepositOptions
        fields = '__all__'
        read_only_fields = ('product',)