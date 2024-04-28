from django.shortcuts import render

def home(request):
    return render(request, 'index.html')

def loading_page(request):
    return render(request, 'loading.html')

def main_page(request):
    return render(request,'main.html')