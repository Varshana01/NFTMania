from django.urls import path, include #path function
from . import views # . is shorthand for the current directory


urlpatterns=[
    path('\index',views.index, name='home'),
    # path('about/', views.about, name='about')
]