//get_form_values is being used in the index.html to get the values inserted in the input fields.
function get_form_values() {	
	const full_name = document.getElementById("fullname").value;
	const role = document.getElementById("role").value;
	const about = document.getElementById("about").value;
	const mail_address = document.getElementById("mail").value;
	const phone_number = document.getElementById("phone").value;
	const website_url = document.getElementById("website").value;
	
	//Getting education and experience values
	let education_section = document.getElementById("education-section");
	let education_inputs = education_section.getElementsByClassName("education-input");

	let education_data = [];

	for (let i = 0; i < education_inputs.length; i++){
		education_data.push(education_inputs[i].value);
		
	}

	let work_section = document.getElementById("work-section");
	let work_inputs = work_section.getElementsByClassName("work-input");

	let work_data = [];

	for (let i = 0; i < education_inputs.length; i++){
		work_data.push(work_inputs[i].value);
	}

	save_user_data_to_local_storage(full_name, role, about, mail_address, phone_number, website_url, education_data, work_data);
}


//Since I'm using vanilla JavaScript, localStorage will be responsible to transmit data between HTML pages.
function save_user_data_to_local_storage(full_name, role, about_me, mail_address, phone_number, web_url, education, work_experience){

	education = JSON.stringify(education);
	work_experience = JSON.stringify(education);

	localStorage.setItem('full_name', full_name);
	localStorage.setItem('user_role', role);
	localStorage.setItem('about_me', about_me);
	localStorage.setItem('user_mail', mail_address);
	localStorage.setItem('user_phone', phone_number);
	localStorage.setItem('user_website', web_url);
	localStorage.setItem('user_education', education);
	localStorage.setItem('user_work', work_experience);
}
