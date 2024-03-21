from django.http import HttpResponseNotFound
from django.shortcuts import render
from .controllers.function import try_me


def index(request):
    context = {"data": "content value", "function_data": try_me()}
    return render(request, "main/index.html", context)


def about(request):
    return render(request, "about/index.html")


def contact(request):
    return render(request, "contact/index.html")


def dashboard(request):
    context = {"data": "hello this is main page", "function_data": try_me()}
    pk = 1
    if pk == 1:
        return render(request, "main/dashboard/index.html", context)
    else:
        return HttpResponseNotFound("<h1>Page not found</h1>")
