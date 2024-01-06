function translate_index_to_portuguese(){

	// Section for product-info class
	let title_info_section = document.querySelector('.product-info h1');
	let list_info_section = document.querySelectorAll('.product-info li');	

	title_info_section.textContent = "📝Crie seu próprio seu CV";
	list_info_section[0].textContent = "🖨️ Atualize seu CV sempre que precisar, é um PDF";
	list_info_section[1].textContent = "⚙️ Leve, customizável e com um layout limpo";
	list_info_section[2].textContent = "🤳 Use o QR Code para redirecionar pessoas para seu website";
	list_info_section[3].textContent = "🙋‍♂️ Feito por @marcot.duenas";

	//Section for user-info-form class
	let title_form_section = document.querySelector('.user-info-form h6');
	let form_labels = document.querySelectorAll('.user-info-form label');
	let submit_button_form_section = document.querySelector('.user-info-form button');

	title_form_section.textContent = "PREENCHA SEU CV";
	form_labels.forEach(function(label){
		switch (label.textContent){
			case "Full name":
				label.textContent = "Nome completo";
                break;
			case "Role":
				label.textContent = "Cargo";
                break;
			case "About you":
				label.textContent = "Sobre você";
                break;
			case "Phone":
				label.textContent = "Telefone";
                break;
			case "Softwares/technologies that you know or use (ONE item per line)":
                label.textContent = "Softwares/tecnologias que você conhece ou usa (UM item por linha)";
                break;
            case "Education (ONE item per line)":
                label.textContent = "Educação (UM item por linha)";
                break;
            case "Professional experience (ONE item per line)":
                label.textContent = "Experiência Profissional (UM item por linha)";
                break;
		}
	});
	submit_button_form_section.textContent = "Enviar";

	//Section for save-user-cv class
	let title_save_cv_section = document.querySelector('.save-user-cv h6');
	let save_cv_info = document.querySelector('.save-user-cv p');

	title_save_cv_section.textContent = "SALVE/EDITE SEU CV";
	save_cv_info.textContent = "O documento será salvo como um .pdf, você não deverá ter problemas para modificá-lo";




}

function return_index_to_english(){
	location.reload();	
}
