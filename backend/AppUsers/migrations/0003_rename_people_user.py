# Generated by Django 5.0.2 on 2024-02-25 14:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('AppUsers', '0002_rename_users_people'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='People',
            new_name='User',
        ),
    ]
