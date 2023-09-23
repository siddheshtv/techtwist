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
    

@app.route("/getScore", methods=["POST"])
def getScore():
    try:
        users_db = db["users_db"]
        ans = request.form
        uid = str(ans.get('uid'))

        # print(ans)
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
            
            if str(ans.get('0210')).lower() == "t" and str(ans.get('0310')).lower() == "e" and str(ans.get('0410')).lower() == "n" and str(ans.get('0510')).lower() == "s" and str(ans.get('0610')).lower() == "o" and str(ans.get('0710')).lower() == "r" and str(ans.get('0810')).lower() == "f" and str(ans.get('0910')).lower() == "l" and str(ans.get('1010')).lower() == "o" and str(ans.get('1110')).lower() == "w":
                total_marks = total_marks+10
            
            if str(ans.get('0204')).lower() == "a" and str(ans.get('0304')).lower() == "n" and str(ans.get('0404')).lower() == "n" and str(ans.get('0504')).lower() == "o" and str(ans.get('0604')).lower() == "t" and str(ans.get('0704')).lower() == "a" and str(ans.get('0804')).lower() == "t" and str(ans.get('0904')).lower() == "i" and str(ans.get('1004')).lower() == "o" and str(ans.get('1104')).lower() == "a":
                total_marks = total_marks+10
            
            if str(ans.get('0206')).lower() == "c" and str(ans.get('0306')).lower() == "s" and str(ans.get('0406')).lower() == "s":
                total_marks = total_marks+10

            if str(ans.get('0503')).lower() == "g" and str(ans.get('0603')).lower() == "i" and str(ans.get('0703')).lower() == "t":
                total_marks = total_marks+10
            
            if str(ans.get('0605')).lower() == "e" and str(ans.get('0705')).lower() == "x" and str(ans.get('0805')).lower() == "p" and str(ans.get('0905')).lower() == "r" and str(ans.get('1005')).lower() == "e" and str(ans.get('1105')).lower() == "s" and str(ans.get('1205')).lower() == "s":
                total_marks = total_marks+10
            
            if str(ans.get('0902')).lower() == "l" and str(ans.get('1002')).lower() == "a" and str(ans.get('1102')).lower() == "m" and str(ans.get('1202')).lower() == "b" and str(ans.get('1302')).lower() == "d" and str(ans.get('1402')).lower() == "a":
                total_marks = total_marks+10
            
            if str(ans.get('1111')).lower() == "s" and str(ans.get('1211')).lower() == "e" and str(ans.get('1311')).lower() == "o":
                total_marks = total_marks+10
            
            if str(ans.get('1601')).lower() == "f" and str(ans.get('1701')).lower() == "l" and str(ans.get('1801')).lower() == "a" and str(ans.get('1901')).lower() == "s" and str(ans.get('2001')).lower() == "k":
                total_marks = total_marks+10
            
            if str(ans.get('1607')).lower() == "r" and str(ans.get('1707')).lower() == "e" and str(ans.get('1807')).lower() == "a" and str(ans.get('1907')).lower() == "c" and str(ans.get('2007')).lower() == "t":
                total_marks = total_marks+10
            
            if str(ans.get('1313')).lower() == "s" and str(ans.get('1413')).lower() == "o" and str(ans.get('1513')).lower() == "l" and str(ans.get('1613')).lower() == "i" and str(ans.get('1713')).lower() == "d" and str(ans.get('1813')).lower() == "i" and str(ans.get('1913')).lower() == "t" and str(ans.get('2013')).lower() == "y":
                total_marks = total_marks+10
            
            if str(ans.get('0515')).lower() == "d" and str(ans.get('0615')).lower() == "i" and str(ans.get('0715')).lower() == "c" and str(ans.get('0815')).lower() == "t" and str(ans.get('0915')).lower() == "i" and str(ans.get('1015')).lower() == "o" and str(ans.get('115')).lower() == "n" and str(ans.get('1215')).lower() == "a" and str(ans.get('1315')).lower() == "r" and str(ans.get('1415')).lower() == "y":
                total_marks = total_marks+10
            
            if str(ans.get('0520')).lower() == "m" and str(ans.get('0620')).lower() == "e" and str(ans.get('0720')).lower() == "t" and str(ans.get('0820')).lower() == "a":
                total_marks = total_marks+10

            if str(ans.get('0617')).lower() == "m" and str(ans.get('0717')).lower() == "e" and str(ans.get('0817')).lower() == "r" and str(ans.get('0917')).lower() == "n":
                total_marks = total_marks+10
            
            if str(ans.get('1117')).lower() == "k" and str(ans.get('1217')).lower() == "o" and str(ans.get('1317')).lower() == "t" and str(ans.get('1417')).lower() == "l" and str(ans.get('1517')).lower() == "i" and str(ans.get('1617')).lower() == "n":
                total_marks = total_marks+10
            
            if str(ans.get('1615')).lower() == "m" and str(ans.get('1715')).lower() == "o" and str(ans.get('1815')).lower() == "n" and str(ans.get('1915')).lower() == "g" and str(ans.get('2015')).lower() == "o":
                total_marks = total_marks+10
            
            if str(ans.get('1319')).lower() == "h" and str(ans.get('1419')).lower() == "t" and str(ans.get('1519')).lower() == "m" and str(ans.get('1619')).lower() == "l":
                total_marks = total_marks+10

            if str(ans.get('0607')).lower() == "a" and str(ans.get('0707')).lower() == "s" and str(ans.get('0807')).lower() == "c" and str(ans.get('0907')).lower() == "i" and str(ans.get('1007')).lower() == "i":
                total_marks = total_marks+10

            if str(ans.get('1403')).lower() == "t" and str(ans.get('1503')).lower() == "u" and str(ans.get('1603')).lower() == "p" and str(ans.get('1703')).lower() == "l" and str(ans.get('1803')).lower() == "e":
                total_marks = total_marks+10


            #--------------------------------------------------------------------------------------


            if str(ans.get('0201')).lower() == "j" and str(ans.get('0202')).lower() == "a" and str(ans.get('0203')).lower() == "v" and str(ans.get('0204')).lower() == "a" and str(ans.get('0205')).lower() == "s" and str(ans.get('0206')).lower() == "c" and str(ans.get('0207')).lower() == "r" and str(ans.get('0208')).lower() == "i" and str(ans.get('0209')).lower() == "p" and str(ans.get('0210')).lower() == "t":
                total_marks = total_marks+10

            if str(ans.get('0603')).lower() == "i" and str(ans.get('0604')).lower() == "t" and str(ans.get('0605')).lower() == "e" and str(ans.get('0606')).lower() == "r" and str(ans.get('0607')).lower() == "a" and str(ans.get('0608')).lower() == "t" and str(ans.get('0609')).lower() == "i" and str(ans.get('0610')).lower() == "o" and str(ans.get('0611')).lower() == "n":
                total_marks = total_marks+10

            if str(ans.get('0111')).lower() == "p" and str(ans.get('0112')).lower() == "i" and str(ans.get('0113')).lower() == "p":
                total_marks = total_marks+10

            if str(ans.get('0115')).lower() == "c" and str(ans.get('0116')).lower() == "h" and str(ans.get('0117')).lower() == "r" and str(ans.get('0118')).lower() == "o" and str(ans.get('0119')).lower() == "m" and str(ans.get('0120')).lower() == "e":
                total_marks = total_marks+10

            if str(ans.get('0315')).lower() == "d" and str(ans.get('0316')).lower() == "o" and str(ans.get('0317')).lower() == "c" and str(ans.get('0318')).lower() == "k" and str(ans.get('0319')).lower() == "e" and str(ans.get('0320')).lower() == "r":
                total_marks = total_marks+10

            if str(ans.get('0518')).lower() == "n" and str(ans.get('0519')).lower() == "p" and str(ans.get('0520')).lower() == "m":
                total_marks = total_marks+10

            if str(ans.get('0912')).lower() == "d" and str(ans.get('0913')).lower() == "e" and str(ans.get('0914')).lower() == "b" and str(ans.get('0915')).lower() == "i" and str(ans.get('0916')).lower() == "a" and str(ans.get('0917')).lower() == "n":
                total_marks = total_marks+30

            if str(ans.get('1109')).lower() == "a" and str(ans.get('1110')).lower() == "w" and str(ans.get('1111')).lower() == "s":
                total_marks = total_marks+10

            if str(ans.get('1401')).lower() == "m" and str(ans.get('1402')).lower() == "a" and str(ans.get('1403')).lower() == "t" and str(ans.get('1404')).lower() == "p" and str(ans.get('1405')).lower() == "l" and str(ans.get('1406')).lower() == "o" and str(ans.get('1407')).lower() == "t" and str(ans.get('1408')).lower() == "l" and str(ans.get('1409')).lower() == "i" and str(ans.get('1410')).lower() == "b":
                total_marks = total_marks+10

            if str(ans.get('1609')).lower() == "e" and str(ans.get('1610')).lower() == "m" and str(ans.get('1611')).lower() == "o" and str(ans.get('1612')).lower() == "j" and str(ans.get('1613')).lower() == "i":
                total_marks = total_marks+10

            if str(ans.get('1805')).lower() == "s" and str(ans.get('1806')).lower() == "t" and str(ans.get('1807')).lower() == "a" and str(ans.get('1808')).lower() == "c" and str(ans.get('1809')).lower() == "k":
                total_marks = total_marks+10

            if str(ans.get('1817')).lower() == "j" and str(ans.get('1818')).lower() == "s" and str(ans.get('1819')).lower() == "o" and str(ans.get('1820')).lower() == "n" :
                total_marks = total_marks+10

            if str(ans.get('2003')).lower() == "s" and str(ans.get('2004')).lower() == "w" and str(ans.get('2005')).lower() == "i" and str(ans.get('2006')).lower() == "f" and str(ans.get('2007')).lower() == "t":
                total_marks = total_marks+10

            if str(ans.get('2015')).lower() == "o" and str(ans.get('2016')).lower() == "r" and str(ans.get('2017')).lower() == "a" and str(ans.get('2018')).lower() == "c" and str(ans.get('2019')).lower() == "l" and str(ans.get('2020')).lower() == "e":
                total_marks = total_marks+10

            if str(ans.get('1313')).lower() == "s" and str(ans.get('1314')).lower() == "c" and str(ans.get('1315')).lower() == "r" and str(ans.get('1315')).lower() == "a" and str(ans.get('1317')).lower() == "t" and str(ans.get('1318')).lower() == "c" and str(ans.get('1319')).lower() == "h":
                total_marks = total_marks+30

        except Exception as e:
            total_marks = users_db["score"]
            print("Error : ",str(e))

        end_time = time.time()
        
        # users_db.update_one({"uid":uid},{"$set":{"score":total_marks}})
        # users_db.update_one({"uid":uid},{"$set":{"end_time":end_time}})

        start_time = usr_obj["start_time"]

        total_time = end_time - start_time
        total_time = time.strftime("%H:%M:%S", time.gmtime(total_time))

        users_db.update_one({"uid":uid},{"$set":{"end_time":end_time,"total_time":total_time, "score":total_marks}})

        return json.dumps({"success":True, "marks":total_marks, "uid":uid, "total_time":total_time})
        

    except Exception as e:
        return json.dumps({'success':False, "msg":"Something Went Wrong.", "reason":str(e)}), 402, {'ContentType':'application/json'}


# Register Member
@app.route("/register", methods=["POST"])
def register():
    try:
        # Get data from the request
        uname = request.form.get('uname')
        email = request.form.get('email')
        pwd = request.form.get('pwd')
        start_time = time.time()

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
            "score":0,
            "start_time":start_time
        }

        # Insert the new member into the database
        users_db.insert_one(new_member)

        return jsonify({'success': True, 'msg': 'Member registered successfully', 'uid': uid, "uname" : uname}), 201

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
            return jsonify({'success': True, 'msg': 'Login successful', 'uid': member["uid"], 'jwt': jwt_token, "uname":uname}), 200
        else:
            return jsonify({'success': False, 'msg': 'Invalid password'}), 401

    except Exception as e:
        return jsonify({'success': False, 'msg': 'Something went wrong.', 'reason': str(e)}), 500
    
@app.route("/getAllUsers", methods=["GET"])
def getAllUsers():
    try:

        # Fetch member data from the database
        users_db = db["users_db"]
        member = users_db.find({}, {"_id": 0})
        data = []

        for dt in member:
            data.append(dt)

        return jsonify({'success': True, 'msg': 'Successful', "data":data}), 200

    except Exception as e:
        return jsonify({'success': False, 'msg': 'Something went wrong.', 'reason': str(e)}), 500
    
@app.route("/getScoreBoard", methods=["GET"])
def getScoreBoard():
    try:

        # Fetch member data from the database
        users_db = db["users_db"]
        member = users_db.find({}, {"_id": 0})
        data = []

        for dt in member:
            data.append(dt)

        return jsonify({'success': True, 'msg': 'Successful', "data":data}), 200

    except Exception as e:
        return jsonify({'success': False, 'msg': 'Something went wrong.', 'reason': str(e)}), 500
    
@app.route("/deleteUser", methods=["GET"])
def deleteUser():
    try:
        uid = request.args.get("uid")
        # Fetch member data from the database
        users_db = db["users_db"]
        member = users_db.find_one_and_delete({"uid":uid})
        data = []

        for dt in member:
            data.append(dt)

        return jsonify({'success': True, 'msg': 'Deleted Successful'}), 200

    except Exception as e:
        return jsonify({'success': False, 'msg': 'Something went wrong.', 'reason': str(e)}), 500