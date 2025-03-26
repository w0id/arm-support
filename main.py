import eel
import tkinter as tk

root = tk.Tk()
screen_width = root.winfo_screenwidth()
screen_height = root.winfo_screenheight()

eel.init("web")

@eel.expose
def getRoutes():
    return [
        {"title": "Accounts", "uri": "/accounts", "path": "./Accounts.js"},
        {"title": "Certificates", "uri": "/certs", "path": "./Certificates.js"},
        {"title": "Kubernetes", "uri": "/k8s", "path": "./K8S.js"},
        {"title": "Docker", "uri": "/docker", "path": "./Docker.js", "data": "get_title"}
    ]

import docker

eel.start('index.html', size=(screen_width//2,screen_height), position=(0,0))

