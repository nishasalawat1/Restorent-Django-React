from django.db import models

from django.db import models
from django.contrib.auth.models import User


class Restorant(models.Model):
    name = models.CharField(max_length=255, null=True, blank=True)
    address = models.TextField(null=True, blank=True)
    email = models.CharField(max_length=255, null=True, blank=True)
    rating = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return '"{name}" by {id}'.format(name=self.name, id=self.id)
