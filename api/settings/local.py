from .base import *  # NOQA

DEBUG = True

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'django',
        'USER': 'django',
        'PASSWORD': 'django',
        'HOST': 'postgres',
        'PORT': '5432',
        # 'ATOMIC_REQUESTS': True,
    }
}
