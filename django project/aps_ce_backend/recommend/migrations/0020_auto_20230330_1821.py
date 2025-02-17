# Generated by Django 3.2.16 on 2023-03-30 18:21

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('recommend', '0019_auto_20230301_1752'),
    ]

    operations = [
        migrations.RenameField(
            model_name='careermodel',
            old_name='encode_class',
            new_name='train_set_cols',
        ),
        migrations.AlterField(
            model_name='careermodel',
            name='create_date',
            field=models.DateTimeField(default=datetime.datetime(2023, 3, 30, 18, 20, 49, 733065, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='careermodel',
            name='update_date',
            field=models.DateTimeField(default=datetime.datetime(2023, 3, 30, 18, 20, 49, 733094, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='csv_file',
            name='update_date',
            field=models.DateTimeField(default=datetime.datetime(2023, 3, 30, 18, 20, 49, 733973, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='csv_file',
            name='upload_date',
            field=models.DateTimeField(default=datetime.datetime(2023, 3, 30, 18, 20, 49, 733945, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='surprisemodel',
            name='create_date',
            field=models.DateTimeField(default=datetime.datetime(2023, 3, 30, 18, 20, 49, 732051, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='surprisemodel',
            name='update_date',
            field=models.DateTimeField(default=datetime.datetime(2023, 3, 30, 18, 20, 49, 732102, tzinfo=utc)),
        ),
    ]
