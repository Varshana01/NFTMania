from django.contrib import admin
from .models import Collection1,Collection2,Collection3


# Register your models here.
@admin.register(Collection1, Collection2,Collection3)
class Collection1Admin(admin.ModelAdmin):
    list_display = ('id','title','photo')
    List_display_links = ('id', 'title')
    list_per_page = 20

class Collection2Admin(admin.ModelAdmin):
    list_display = ('id','title','photo')
    List_display_links = ('id', 'title')
    list_per_page = 20

class Collection3Admin(admin.ModelAdmin):
    list_display = ('id','title','photo')
    List_display_links = ('id', 'title')
    list_per_page = 20
