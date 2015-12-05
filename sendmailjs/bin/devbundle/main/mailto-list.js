jQuery(document).ready(function() {
	setInterval(function() {
		assignClickToEmailListButton();
	}, 100);
});

function assignClickToEmailListButton() {

	jQuery("#document_content_buttons\\:nxw_sendEmailList\\_form").unbind('click');
	
	jQuery("#document_content_buttons\\:nxw_sendEmailList\\_form").bind('click', function() {

		//We have to disable the submit button before doing any redirection. 
		jQuery("#document\\_content\\_buttons\\:nxw\\_sendEmailList\\_form\\:nxw_sendEmailList").prop("type", "button");
			
		var mailtoSubject = "Partage de document(s)";
		var mailtoBody = "Bonjour,%0D%0A%0D%0AVeuillez trouver ci-dessous le(s) lien(s) vers le(s) document(s) de la plateforme Nuxeo :%0D%0A%0D%0A";

        var docSelected = false;
        
        var docCount = 0;
		
		jQuery(".dataOutput tr").each(function(i, row) {
			
			docSelected = false;
			
			if(i > 0) {
				
				jQuery(this).children().each(function (u, cell) {

                    if(u === 0) {
                        jQuery(this).find('input:checkbox:first').each(function(){ 
						    if(this.checked){
						        docSelected = true;
						    }
						});
                    }

					if(u === 2 && docSelected) {
						var docTitle = jQuery(this).text().trim();
						var docLink = jQuery(this).find("a:first").prop("href");

						docLink = docLink.split("?");
						docLink = docLink[0];
						mailtoBody += "Document Nuxeo%0D%0ATitre: " + docTitle + "%0D%0ALien: " + docLink + "%0D%0A%0D%0A";
						
						docCount++;
					}
				})
			}

		});
		
		
		if(docCount == 0) {
			//If no document has been selected, we will send the current location.
			var currentDocument = location.protocol + '//' + location.host + location.pathname;
			mailtoBody += "Document Nuxeo%0D%0ALien: " + currentDocument + "%0D%0A%0D%0A";
		}
		
		var mailtoLink = "mailto:?subject=" + mailtoSubject + "&body=" + mailtoBody
		window.location.href = mailtoLink;
		
	});
	
}