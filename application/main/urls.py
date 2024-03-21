from django.urls import path
from . import views

urlpatterns = [
    # Mar: It is recommended to have backup paths for the same view
    path("", views.index, name="index"),
    path("dashboard", views.dashboard, name="dashboard"),
    path("about", views.about, name="about"),
    path("contact", views.contact, name="contact"),
    # path('create/', views.create, name='create'),
    # path('update/<int:pk>/', views.update, name='update'),
    # path('delete/<int:pk>/', views.delete, name='delete'),
]
