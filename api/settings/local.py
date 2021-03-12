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

# https://python-social-auth.readthedocs.io/en/latest/backends/google.html
SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = '846141039915-ejcvqb78ud6cr30l3g2e45hfagkf2a9c.apps.googleusercontent.com'
SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = 'pPcrjcqAoFyy_WVBd3YllvgA'

# https://python-social-auth.readthedocs.io/en/latest/backends/line.html
SOCIAL_AUTH_LINE_KEY = '1655750589'
SOCIAL_AUTH_LINE_SECRET = '2863e22d8207d87045bd9d1b61882e44'

LOGIN_REDIRECT_URL = 'http://localhost:8033/home/'
LOGOUT_REDIRECT_URL = 'http://localhost:8033/'

# DJOSER["SOCIAL_AUTH_ALLOWED_REDIRECT_URIS"] = ["http://localhost:8033/home/"]

CORS_ORIGIN_WHITELIST = [
    'http://localhost:8032',
    'http://localhost:8033',
]

# CORS_ALLOW_CREDENTIALS = True
