//get_form_values is being used in the index.html to get the values inserted in the input fields.
function get_form_values() {	
	const full_name = document.getElementById("fullname").value;
	const role = document.getElementById("role").value;
	const about = document.getElementById("about").value;
	const mail_address = document.getElementById("mail").value;
	const phone_number = document.getElementById("phone").value;
	const website_url = document.getElementById("website").value;
	const tech_stack = document.getElementById("tech").value;
	const education = document.getElementById("education").value;	
	const work = document.getElementById("work").value;	
	
	save_user_data_to_local_storage(full_name, role, about, mail_address, phone_number, website_url, tech_stack, education, work);
	window.location.href='../pages/cv.html'
}


//Since I'm using vanilla JavaScript, localStorage will be responsible to transmit data between HTML pages.
function save_user_data_to_local_storage(full_name, role, about_me, mail_address, phone_number, web_url, tech_stack, education, work_experience){
	document.cookie = `full_name=${encodeURIComponent(full_name)}; path=/`;
    document.cookie = `user_role=${encodeURIComponent(role)}; path=/`;
    document.cookie = `about_me=${encodeURIComponent(about_me)}; path=/`;
    document.cookie = `user_mail=${encodeURIComponent(mail_address)}; path=/`;
    document.cookie = `user_phone=${encodeURIComponent(phone_number)}; path=/`;
    document.cookie = `user_website=${encodeURIComponent(web_url)}; path=/`;
    document.cookie = `user_tech_stack=${encodeURIComponent(tech_stack)}; path=/`;
    document.cookie = `user_education=${encodeURIComponent(education)}; path=/`;
    document.cookie = `user_work=${encodeURIComponent(work_experience)}; path=/`;
}

