from flask import Flask, render_template, request
import json

app = Flask(__name__)

@app.route("/", methods = ['GET', 'POST'])
def contact():
    if(request.method=='POST'):
        name = request.form.get('name')
        email = request.form.get('email')
        contact = request.form.get('contact')
        feedback = request.form.get('feedback')
        experience = request.form.get('experience')
        service = request.form.get('service')
        print("Name: ",name,
               "\nEmail: ",email,
               "\nContact: ",contact,
               "\nFeedback: ",feedback,
               "\nExperience: ",experience,
               "\nService: ",service)
        return render_template('thankyou.html')
    return render_template('index.html')

app.run(debug=True)