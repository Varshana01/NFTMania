from django.urls import path, include #path function
from . import views # . is shorthand for the current directory


urlpatterns=[
    path('',views.gallery, name='gallery'),
    path('collection1/', views.collection1, name='collection1'),
    path('collection2/', views.collection2, name='collection2'),
    path('collection3/', views.collection3, name='collection3'),

]