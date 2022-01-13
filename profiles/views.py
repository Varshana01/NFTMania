from django.shortcuts import render

# Create your views here

def profiles(request):
    return render(request, 'accounts/profiles.html')

def mynft(request):
    return render(request, 'accounts/mynft.html')
