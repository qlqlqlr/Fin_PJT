from django.urls import path
from . import views

urlpatterns = [
   path('save/', views.save),
   path('deposit-products/', views.deposit_products),
   path('Generaldeposit-products', views.Generaldeposit_products),
   path('deposit-product-options/<str:fin_prdt_cd>/', views.deposit_product_options),
   path('deposit-products/top_rate/', views.top_rate),
]
