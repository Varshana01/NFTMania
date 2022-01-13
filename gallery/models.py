from django.db import models
# from datetime import datetime


# Create your models here.

class Collection1(models.Model):
    title = models.CharField(max_length= 200)
    photo = models.ImageField(upload_to='photos/%Y/%m/%d/', blank = True)
    description = models.CharField(max_length=500)

    def __str__(self):
        return self.title

class Collection2(models.Model):
    title = models.CharField(max_length= 200)
    photo = models.ImageField(upload_to='photos/%Y/%m/%d/', blank = True)
    description = models.CharField(max_length=500)

    def __str__(self):
        return self.title

class Collection3(models.Model):
    title = models.CharField(max_length= 200)
    photo = models.ImageField(upload_to='photos/%Y/%m/%d/', blank = True)
    description = models.CharField(max_length=500)

    def __str__(self):
        return self.title