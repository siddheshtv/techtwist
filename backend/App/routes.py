from App import app, db, bcrypt, login_manager
from flask import request, jsonify
from flask_login import UserMixin, login_user, logout_user, current_user, login_required
from bson import ObjectId
import smtplib
from random import randint
from werkzeug.utils import secure_filename
import os
import json
import time

from pymongo import MongoClient
import json
from datetime import timedelta
from datetime import datetime
import uuid
import jwt
import imaplib
import email
from email.mime.text import MIMEText
from functools import wraps

import io
import pandas as pd
from flask import Flask, request, jsonify, send_file


# ================================================= Auth ================================================

UPLOAD_FOLDER = '/var/www/html/Renoadmin'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower()() in ALLOWED_EXTENSIONS


@app.route("/addcategoryList", methods=["POST"])
def addcategoryList():
    try:
        user_db = db["categoryList"]
        category_id = int(round(time.time() * 1000))
        category_id = str(category_id)

        if request.method == 'POST':
            if 'pic_url' not in request.files:
                    return 'No file part'
            pic_url = request.files['pic_url']
            if pic_url.filename == '':
                return 'No selected file'
            if pic_url and allowed_file(pic_url.filename):
                ofn = pic_url.filename
                a = ofn.split('.')
                ext = a[-1]
                fn = str(category_id)+"."+ext
                filename = secure_filename(fn)
                UPLOAD_FOLDER_NAME = UPLOAD_FOLDER+"/categoryList"
                pic_url.save(os.path.join(UPLOAD_FOLDER_NAME, filename))

        if user_db.find_one({"category_name": request.form['category_name']}):
            return f"Categoty already exists for {request.form['category_name']}"
        
        data = {
            "category_name": request.form['category_name'],
            "pic_url": "http://139.59.236.50/Renoadmin/categoryList/"+filename,
            "category_id":str(category_id)
        }

        user_db.insert_one(data)
        return json.dumps({'success':True}), 200, {'ContentType':'application/json'}
    except Exception as e:
         return json.dumps({'success':False, "msg":"Something Went Wrong.", "reason":str(e)}), 402, {'ContentType':'application/json'}
    

@app.route("/getScore", methods=["GET"])
def getScore():
    try:
        users_db = db["users_db"]
        ans = request.form
        uid = str(ans.get('uid')
)
        usr_obj = users_db.find_one({"uid": uid})

        if not usr_obj:
            return jsonify({"success":False, "reason":"user with uid not found"})

        total_marks = 0

        try:
            
            if str(ans.get('0101')).lower() == "d" and str(ans.get('0201')).lower() == "j" and str(ans.get('0301')).lower() == "a" and str(ans.get('0401')).lower() == "n" and str(ans.get('0501')).lower() == "g" and str(ans.get('0601')).lower() == "o":
                total_marks = total_marks+10
            
            if str(ans.get('0108')).lower() == "b" and str(ans.get('0208')).lower() == "i" and str(ans.get('0308')).lower() == "t" :
                total_marks = total_marks+10
            
            if str(ans.get('0113')).lower() == "p" and str(ans.get('0213')).lower() == "y" and str(ans.get('0313')).lower() == "t" and str(ans.get('0413')).lower() == "h" and str(ans.get('0513')).lower() == "o" and str(ans.get('0613')).lower() == "n":
                total_marks = total_marks+10
            
            # if str(ans.get('0101')).lower() == "d" and str(ans.get('0201')).lower() == "j" and str(ans.get('0301')).lower() == "a" and str(ans.get('0401')).lower() == "n" and str(ans.get('0501')).lower() == "g" and str(ans.get('0601')).lower() == "o":
            #     total_marks = total_marks+10
            
            # if str(ans.get('0101')).lower() == "d" and str(ans.get('0201')).lower() == "j" and str(ans.get('0301')).lower() == "a" and str(ans.get('0401')).lower() == "n" and str(ans.get('0501')).lower() == "g" and str(ans.get('0601')).lower() == "o":
            #     total_marks = total_marks+10
            
            # if str(ans.get('0101')).lower() == "d" and str(ans.get('0201')).lower() == "j" and str(ans.get('0301')).lower() == "a" and str(ans.get('0401')).lower() == "n" and str(ans.get('0501')).lower() == "g" and str(ans.get('0601')).lower() == "o":
            #     total_marks = total_marks+10
            
            # if str(ans.get('0101')).lower() == "d" and str(ans.get('0201')).lower() == "j" and str(ans.get('0301')).lower() == "a" and str(ans.get('0401')).lower() == "n" and str(ans.get('0501')).lower() == "g" and str(ans.get('0601')).lower() == "o":
            #     total_marks = total_marks+10
            
            # if str(ans.get('0101')).lower() == "d" and str(ans.get('0201')).lower() == "j" and str(ans.get('0301')).lower() == "a" and str(ans.get('0401')).lower() == "n" and str(ans.get('0501')).lower() == "g" and str(ans.get('0601')).lower() == "o":
            #     total_marks = total_marks+10
            
            # if str(ans.get('0101')).lower() == "d" and str(ans.get('0201')).lower() == "j" and str(ans.get('0301')).lower() == "a" and str(ans.get('0401')).lower() == "n" and str(ans.get('0501')).lower() == "g" and str(ans.get('0601')).lower() == "o":
            #     total_marks = total_marks+10
            
            # if str(ans.get('0101')).lower() == "d" and str(ans.get('0201')).lower() == "j" and str(ans.get('0301')).lower() == "a" and str(ans.get('0401')).lower() == "n" and str(ans.get('0501')).lower() == "g" and str(ans.get('0601')).lower() == "o":
            #     total_marks = total_marks+10
            
            # if str(ans.get('0101')).lower() == "d" and str(ans.get('0201')).lower() == "j" and str(ans.get('0301')).lower() == "a" and str(ans.get('0401')).lower() == "n" and str(ans.get('0501')).lower() == "g" and str(ans.get('0601')).lower() == "o":
            #     total_marks = total_marks+10
            
            # if str(ans.get('0101')).lower() == "d" and str(ans.get('0201')).lower() == "j" and str(ans.get('0301')).lower() == "a" and str(ans.get('0401')).lower() == "n" and str(ans.get('0501')).lower() == "g" and str(ans.get('0601')).lower() == "o":
            #     total_marks = total_marks+10
            
            # if str(ans.get('0101')).lower() == "d" and str(ans.get('0201')).lower() == "j" and str(ans.get('0301')).lower() == "a" and str(ans.get('0401')).lower() == "n" and str(ans.get('0501')).lower() == "g" and str(ans.get('0601')).lower() == "o":
            #     total_marks = total_marks+10
            
            # if str(ans.get('0101')).lower() == "d" and str(ans.get('0201')).lower() == "j" and str(ans.get('0301')).lower() == "a" and str(ans.get('0401')).lower() == "n" and str(ans.get('0501')).lower() == "g" and str(ans.get('0601')).lower() == "o":
            #     total_marks = total_marks+10
            
            # if str(ans.get('0101')).lower() == "d" and str(ans.get('0201')).lower() == "j" and str(ans.get('0301')).lower() == "a" and str(ans.get('0401')).lower() == "n" and str(ans.get('0501')).lower() == "g" and str(ans.get('0601')).lower() == "o":
            #     total_marks = total_marks+10
            
            # if str(ans.get('0101')).lower() == "d" and str(ans.get('0201')).lower() == "j" and str(ans.get('0301')).lower() == "a" and str(ans.get('0401')).lower() == "n" and str(ans.get('0501')).lower() == "g" and str(ans.get('0601')).lower() == "o":
            #     total_marks = total_marks+10
            
            # if str(ans.get('0101')).lower() == "d" and str(ans.get('0201')).lower() == "j" and str(ans.get('0301')).lower() == "a" and str(ans.get('0401')).lower() == "n" and str(ans.get('0501')).lower() == "g" and str(ans.get('0601')).lower() == "o":
            #     total_marks = total_marks+10
            
            # if str(ans.get('0101')).lower() == "d" and str(ans.get('0201')).lower() == "j" and str(ans.get('0301')).lower() == "a" and str(ans.get('0401')).lower() == "n" and str(ans.get('0501')).lower() == "g" and str(ans.get('0601')).lower() == "o":
            #     total_marks = total_marks+10
            
            # if str(ans.get('0101')).lower() == "d" and str(ans.get('0201')).lower() == "j" and str(ans.get('0301')).lower() == "a" and str(ans.get('0401')).lower() == "n" and str(ans.get('0501')).lower() == "g" and str(ans.get('0601')).lower() == "o":
            #     total_marks = total_marks+10

            # if str(ans.get('0101')).lower() == "d" and str(ans.get('0201')).lower() == "j" and str(ans.get('0301')).lower() == "a" and str(ans.get('0401')).lower() == "n" and str(ans.get('0501')).lower() == "g" and str(ans.get('0601')).lower() == "o":
            #     total_marks = total_marks+10

            # if str(ans.get('0101')).lower() == "d" and str(ans.get('0201')).lower() == "j" and str(ans.get('0301')).lower() == "a" and str(ans.get('0401')).lower() == "n" and str(ans.get('0501')).lower() == "g" and str(ans.get('0601')).lower() == "o":
            #     total_marks = total_marks+10

        except Exception as e:
            total_marks = users_db["score"]
            print("Error : ",str(e))
        
        users_db.update_one({"uid":uid},{"$set":{"score":total_marks}})
        return json.dumps({"success":True, "marks":total_marks, "uid":uid})
        

    except Exception as e:
        return json.dumps({'success':False, "msg":"Something Went Wrong.", "reason":str(e)}), 402, {'ContentType':'application/json'}
    

@app.route("/editCategoryList", methods=["PUT"])
def editCategoryList():
    categoryList = db["categoryList"]

    category_id = request.form['category_id']

    if categoryList.find_one({"category_id": category_id}) is None:
        return f"Category with category_id {category_id} does not exists in the database"
    
    category_info_obj = categoryList.find_one({"category_id": category_id})

    if request.method == 'POST' or request.method == 'PUT':
        if 'pic_url' not in request.files:
            pic_url_str = category_info_obj["pic_url"]
        else:
            pic_url = request.files['pic_url']
            if pic_url.filename == '':
                return 'No selected file'
            if pic_url and allowed_file(pic_url.filename):
                ofn = pic_url.filename
                a = ofn.split('.')
                ext = a[-1]
                fn = str(category_id)+"."+ext
                filename = secure_filename(fn)
                UPLOAD_FOLDER_NAME = UPLOAD_FOLDER+"/categoryList"
                pic_url.save(os.path.join(UPLOAD_FOLDER_NAME, filename))
                pic_url_str = "http://139.59.236.50/Renoadmin/categoryList/"+filename

        if 'category_name' not in request.form:
            category_name = category_info_obj["category_name"]
        else:
            category_name = request.form['category_name']
    data = {
        "pic_url" : pic_url_str,
        "category_name" : category_name
    }
    new_values = {"$set": data}
    categoryList.update_one({"category_id": category_id}, new_values)
    return json.dumps({'success':True}), 200, {'ContentType':'application/json'}


# Register Member
@app.route("/register", methods=["POST"])
def register():
    try:
        # Get data from the request
        uname = request.form.get('uname')
        email = request.form.get('email')
        pwd = request.form.get('pwd')

        # Check if email is already in use
        users_db = db["users_db"]
        existing_email = users_db.find_one({"email": email})
        if existing_email:
            return jsonify({'success': False, 'msg': 'Email already in use'}), 400

        # Check if username is already in use
        existing_uname = users_db.find_one({"uname": uname})
        if existing_uname:
            return jsonify({'success': False, 'msg': 'Username already in use'}), 400

        # Generate a unique uid using uuid hex
        uid = uuid.uuid4().hex

        # Hash the password
        hashed_pwd = bcrypt.generate_password_hash(pwd).decode('utf-8')

        # Create the new member object
        new_member = {
            "uid": uid,
            "uname": uname,
            "email": email,
            "pwd": hashed_pwd,
            "score":0
        }

        # Insert the new member into the database
        users_db.insert_one(new_member)

        return jsonify({'success': True, 'msg': 'Member registered successfully', 'uid': uid}), 201

    except Exception as e:
        return jsonify({'success': False, 'msg': 'Something went wrong.', 'reason': str(e)}), 500

# ...

@app.route("/login", methods=["POST"])
def login():
    try:
        # Get data from the request
        uname = request.form.get('uname')
        pwd = request.form.get('pwd')

        # Fetch member data from the database
        users_db = db["users_db"]
        member = users_db.find_one({"uname": uname})

        if not member:
            return jsonify({'success': False, 'msg': 'Member not found'}), 404

        # Check if password matches using bcrypt
        if bcrypt.check_password_hash(member["pwd"], pwd):
            jwt_token = jwt.encode({
                'uname': uname,
                'uid': member["uid"],
                'exp': datetime.utcnow()  # Token expiration time
            }, app.config['SECRET_KEY'], algorithm='HS256')
            return jsonify({'success': True, 'msg': 'Login successful', 'uid': member["uid"], 'jwt': jwt_token}), 200
        else:
            return jsonify({'success': False, 'msg': 'Invalid password'}), 401

    except Exception as e:
        return jsonify({'success': False, 'msg': 'Something went wrong.', 'reason': str(e)}), 500