const web_link=document.getElementById('web_link');
const python_link = document.getElementById('python_link');
const java_link = document.getElementById('java_link');
const data_link = document.getElementById('data_link');
const web_personal_projects_link = document.getElementById('web_personal_projects_link');
const web_society_link = document.getElementById('web_society_link');
const web_university_link = document.getElementById('web_university_link');
const web_options = document.querySelector('.web_options');
const python_content = document.querySelector('.Python');
const web_uni_content = document.querySelector(".first_year_web");
const society_content = document.querySelector(".Society");
const web_personal_projects_content = document.querySelector(".web_personal_projects");
const java_content = document.querySelector(".Java");
const data_content = document.querySelector(".Data");



web_link.onclick = function (){
	web_options.classList.toggle("not_hidden")
	web_personal_projects_content.setAttribute('class','web_personal_projects')
	society_content.setAttribute('class','Society')
	web_uni_content.setAttribute('class','first_year_web')
	java_content.setAttribute('class','Java')	
	data_content.setAttribute('class','Data')
	python_content.setAttribute('class', 'Python')

}

python_link.onclick =function(){
	python_content.classList.toggle("not_hidden")
	java_content.setAttribute('class','Java')	
	data_content.setAttribute('class','Data')
	web_personal_projects_content.setAttribute('class','web_personal_projects')
	society_content.setAttribute('class','Society')
	web_uni_content.setAttribute('class','first_year_web')

}

java_link.onclick = function(){
	java_content.classList.toggle("not_hidden")
	data_content.setAttribute('class','Data')
	web_personal_projects_content.setAttribute('class','web_personal_projects')
	society_content.setAttribute('class','Society')
	web_uni_content.setAttribute('class','first_year_web')
	python_content.setAttribute('class', 'Python')
}

data_link.onclick = function(){
	data_content.classList.toggle("not_hidden")
	web_personal_projects_content.setAttribute('class','web_personal_projects')
	society_content.setAttribute('class','Society')
	web_uni_content.setAttribute('class','first_year_web')
	python_content.setAttribute('class', 'Python')
	java_content.setAttribute('class','Java')	
}

web_personal_projects_link.onclick=function(){
	web_personal_projects_content.classList.toggle("not_hidden")
	society_content.setAttribute('class','Society')
	web_uni_content.setAttribute('class','first_year_web')
	python_content.setAttribute('class', 'Python')
	java_content.setAttribute('class','Java')
	data_content.setAttribute('class','Data')
}

web_society_link.onclick=function(){
	society_content.classList.toggle("not_hidden")
	web_uni_content.setAttribute('class','first_year_web')
	python_content.setAttribute('class', 'Python')
	java_content.setAttribute('class','Java')
	data_content.setAttribute('class','Data')
	web_personal_projects_content.setAttribute('class','web_personal_projects')
}

web_university_link.onclick=function(){
	web_uni_content.classList.toggle("not_hidden")
	python_content.setAttribute('class', 'Python')
	java_content.setAttribute('class','Java')
	data_content.setAttribute('class','Data')
	web_personal_projects_content.setAttribute('class','web_personal_projects')
	society_content.classList.toggle("not_hidden")
}



