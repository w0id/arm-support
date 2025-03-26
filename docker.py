import eel


@eel.expose
def get_title():
    return "Docker"

@eel.expose
def push_btn():
    return "Button pushed!"