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

	console.log(full_name, role, about, mail_address, phone_number, website_url, education_data, work_data);
}
