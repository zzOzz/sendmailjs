jQuery(document).ready(function() {
	jQuery("#nxw\\_sendEmail\\_form").click(function() {

		var documentTitle = jQuery("#document\\_header\\_layout\\_form h1").text().trim();
		var currentDocument = location.protocol + '//' + location.host + location.pathname;

		var mailtoSubject = "Partage de document(s)";
		var mailtoBody = "Bonjour,%0D%0A%0D%0AVeuillez trouver ci-dessous le(s) lien(s) vers le(s) document(s) de la plateforme Nuxeo :%0D%0A%0D%0ADocument Nuxeo%0D%0ATitre: " + documentTitle + "%0D%0ALien: " + currentDocument + "%0D%0A%0D%0A";
		var mailtoLink = "mailto:?subject=" + mailtoSubject + "&body=" + mailtoBody;
		window.location.href = mailtoLink;
		
	});
});
