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

SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = '846141039915-ejcvqb78ud6cr30l3g2e45hfagkf2a9c.apps.googleusercontent.com'
SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = 'UIYSjS8OQPYj4IMUpHCdKCbg'

LOGIN_REDIRECT_URL = 'http://localhost:3000/home/'
LOGOUT_REDIRECT_URL = 'http://localhost:3000/'

DJOSER["SOCIAL_AUTH_ALLOWED_REDIRECT_URIS"] = ["http://localhost:3000/home/"]

CORS_ORIGIN_WHITELIST = [
    'http://localhost:8001',
    'http://localhost:3000',
]

CORS_ALLOW_CREDENTIALS = True
