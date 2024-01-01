function get_cookie_value(cookie_name) {
	const document_cookies = document.cookie.split('; ');
	for(let cookie of document_cookies){
		const [name, value] = cookie.split('=');
		if (name == cookie_name){
			return decodeURIComponent(value);
		}
	}

	return null;
}


function replace_cv_info(){
	let full_name = get_cookie_value('full_name');
	let role = get_cookie_value('user_role');
	let about = get_cookie_value('about_me');
	let mail = get_cookie_value('user_mail');
	let phone = get_cookie_value('user_phone');
	let tech_stack = get_cookie_value('user_tech_stack');
	let education = get_cookie_value('user_education');
	let work_experience = get_cookie_value('user_work');
	
	let full_name_field = document.getElementById('full-name');
	let role_field = document.getElementById('role');
	let about_me_field = document.getElementById('about-me');
	let mail_field = document.getElementById('email');
	let phone_field = document.getElementById('phone');
	let tech_field = document.getElementById('tech');
	let education_field = document.getElementById('education');
	let work_field = document.getElementById('work');

	full_name_field.innerText = full_name;
	role_field.innerText = role;
	about_me_field.innerText = about;
	mail_field.innerText = mail;
	phone_field.innerText = phone;
	tech_field.innerText = tech_stack;
	education_field.innerText = education;
	work_field.innerText = work_experience;
}

function prompt_for_print(){
	window.print();
}

