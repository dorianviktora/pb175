# Generated by Django 5.0.2 on 2024-02-26 11:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0006_alter_restaurant_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='fooditem',
            name='image',
            field=models.CharField(default='', max_length=1000),
        ),
        migrations.AddField(
            model_name='fooditem',
            name='price',
            field=models.DecimalField(decimal_places=2, default=0.0, max_digits=10),
        ),
    ]
