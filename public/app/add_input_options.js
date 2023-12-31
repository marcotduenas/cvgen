function add_education(){
	let education_section = document.getElementById("education-section");

	let new_education_field = document.createElement("div");
	new_education_field.className = "education";

	let new_education_input = document.createElement("input");
	new_education_input.setAttribute("type", "text");
	new_education_input.className = "education-input";
	new_education_input.setAttribute("placeholder", "Institution: course");
	new_education_input.setAttribute("required", "true");

	new_education_field.appendChild(new_education_input);

	education_section.insertBefore(new_education_field, education_section.children[1]);
}

// Yeah I know that they are very simillar functions


function add_work(){
	let work_section = document.getElementById("work-section");
	let new_work_field = document.createElement("div");
	new_work_field.className = "work";

	let new_work_input =   document.createElement("input");
	new_work_input.setAttribute("type", "text");
	new_work_input.className = "work-input";
	new_work_input.setAttribute("placeholder", "Company: role (1999-2000)");
	new_work_input.setAttribute("required", "true");

	let line_break =  document.createElement("br");

	let new_work_textarea = document.createElement("textarea");
	new_work_textarea.setAttribute("placeholder", "Achievements, activities, things you did...");
	new_work_textarea.setAttribute("required", "true");

	new_work_field.appendChild(new_work_input);
	new_work_field.appendChild(line_break);
	new_work_field.appendChild(new_work_textarea);

	work_section.insertBefore(new_work_field, work_section.children[1]);
}
