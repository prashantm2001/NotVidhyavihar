type contact = {
  number: string;
  email: string;
  address: string;
  github: string;
}

type experience = {
  company: string;
  position: string; 
  description: string;
}

type education = {
  school: string;
  degree: string;
  description: string;  
}

type resume = {
  name: string;
  title: string;
  description: string;
  skills: string;
  contact: contact;
  experience?: experience[];
  education?: education[];
}

const getdata = () => {
  const name = document.getElementById('inputname') as HTMLInputElement;
  const title = document.getElementById('inputtitle') as HTMLInputElement;
  const description = document.getElementById('inputabout') as HTMLInputElement;
  const skills = document.getElementById('inputskills') as HTMLInputElement;

  const number = document.getElementById('contactnumber') as HTMLInputElement;
  const email = document.getElementById('contactemail') as HTMLInputElement;
  const address = document.getElementById('contactaddress') as HTMLInputElement;
  const github = document.getElementById('contactgithub') as HTMLInputElement;
  const data: resume = {
    name: name.value,
    title: title.value,
    description: description.value,
    skills: skills.value,
    contact: {
      number: number.value,
      email: email.value,
      address: address.value,
      github: github.value,
    }}
    return data;
}

const setdata = (data: resume) => {
  const namedis: HTMLElement = document.getElementById('disname') as HTMLElement;
  namedis.innerHTML = data.name;
  const titledis: HTMLElement = document.getElementById('distitle') as HTMLElement;
  titledis.innerHTML = data.title;
  const descriptiondis: HTMLElement = document.getElementById('disdescription') as HTMLElement;
  descriptiondis.innerHTML = data.description;
  const numberdis: HTMLElement = document.getElementById('disnumber') as HTMLElement;
  numberdis.innerHTML = data.contact.number;
  const addressdis: HTMLElement = document.getElementById('disaddress') as HTMLElement;
  addressdis.innerHTML = data.contact.address;
  const githubdis: HTMLElement = document.getElementById('disgithub') as HTMLElement;
  githubdis.innerHTML = data.contact.github;
  const emaildis: HTMLElement = document.getElementById('disemail') as HTMLElement;
  emaildis.innerHTML = data.contact.email;
  const skillsdis: HTMLElement = document.getElementById('disskills') as HTMLElement;
  skillsdis.innerHTML = data.skills;
}

const click = () => {
  const data = getdata();
  console.log('data',data);
  setdata(data);
}

const button = document.getElementById('clickme') as HTMLElement;
button.addEventListener('click', click);