from django.shortcuts import render
from .models import Collection1,Collection2,Collection3

# Create your views here

def gallery(request):
    return render(request, 'gallery/gallery.html')

def collection1(request):
    collection1 = Collection1.objects.all()
    context = {
        'collection1' : collection1
    }
    return render(request, 'gallery/collection1.html', context)

def collection2(request):
    collection2 = Collection2.objects.all()
    context = {
        'collection2' : collection2
    }
    return render(request, 'gallery/collection2.html', context)

def collection3(request):
    collection3 = Collection3.objects.all()
    context = {
        'collection3' : collection3
    }
    return render(request, 'gallery/collection3.html', context)
