from django.contrib import admin
from .models import Questions
from.models import Tags
from .models import Tests
from .models import User

admin.site.register(Questions)
admin.site.register(Tags)
admin.site.register(Tests)
admin.site.register(User)

