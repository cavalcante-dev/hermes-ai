from flask import Flask 
from text_processing import text_processing

def create_api():
    api = Flask(__name__)
    api.register_blueprint(text_processing.blueprintText)
    return api

