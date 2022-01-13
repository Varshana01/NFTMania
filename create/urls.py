from django.urls import path, include #path function
from . import views # . is shorthand for the current directory


urlpatterns=[
    path('/create',views.create, name='create'),
    # path('about/', views.about, name='about')
]