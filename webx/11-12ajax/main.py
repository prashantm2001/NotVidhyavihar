from typing import Optional
import re
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

class Person(BaseModel):
    name: str
    email: str
    superheroAlias: str

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def validate_name(name: str) -> str:
    if name == "":
        return "Name is required"
    elif len(name) < 3:
       return  "Name must be at least 3 characters long"
    else:
      return None;            
def validate_email(email: str) -> str:
  regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
  if email == "":
    return "Email is required"
  elif not re.search(regex, email):
    return "Email is not valid"
  else:
    return None;
@app.post("/")
def read_root(person : Person):
    data = {
      "success" : False,
      "message" : ""
    }
    errors = {
      "name": "",
      "email": "",
      "superheroAlias": "",
    }
    errors["name"]= validate_name(person.name)
    errors["email"]= validate_email(person.email)
    errors["superheroAlias"]= validate_name(person.superheroAlias)
    print(errors)
    if errors["name"] or errors["email"] or errors["superheroAlias"]:
      print("errors")
      data["success"] = False
      data["errors"] = errors
    else:
      data["success"] = True
      data["message"] = person
      
      
    return data