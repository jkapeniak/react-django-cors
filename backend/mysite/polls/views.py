from django.shortcuts import render

# Create your views here.

from django.views import View
from django.http import JsonResponse




def index(request):
    return JsonResponse({'message': 'Hello, World!'})
    