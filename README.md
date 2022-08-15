# React Django Template with Simple CORS Setup

Simple react Django React project with Cross-Origin Resource Sharing (CORS)
working. Get right into backend/frontend communication without scouring the web for setting up cors.

## Clone the repo

```bash
git clone https://github.com/jkapeniak/react-django-cors
```


## Django Setup


```bash

#go to the backend folder
cd backend

#install virtualenv
pip install virtualenv

#create a new virtual environment called venv in the current directory
python -m venv ./venv 

#active the virtual environment
source ./venv/bin/activate

#install the requirements.txt into your virtual environment
pip install -r requirements.txt



```

## Run Django Server

```bash

#navigate into the mysite folder 
cd mysite

#run the django server
python manage.py runserver 8080

```




## Frontend Setup

```bash
import foobar

#navigate to the frontend repo and install the node modules
cd frontend && npm install

```

## Run Frontend

```bash

#start node server and run frontend
npm start

```


## What Was Done To Enable CORS(for reference)

```bash

pip install django-cors-headers
```

```python

#in settings.py add the following line

CORS_ALLOW_ALL_ORIGINS = True

#in settings.py add corsheaders to the installed apps

INSTALLED_APPS = [
    'corsheaders',

    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

#in settings.py add corsheaders.middleware.CorsMiddleware to middleware

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',

    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]


```



