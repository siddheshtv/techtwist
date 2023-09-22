from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
from flask import Flask
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from flask_pymongo import PyMongo
from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017')
app.config['MONGO_URI'] = 'mongodb://localhost:27017'
app.config['SECRET_KEY'] = 'a6d217d048fdcd227661b755'
db = client['TechTwist']
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)

from App import routes 
