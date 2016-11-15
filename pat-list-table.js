// window.onload = function () {
//     $("#myTable").dataTable({
     
//     });
// }
$(document).ready(function(){

	$.getJSON("patients.json?format=json", jsonMenu);
	function jsonMenu(myTableJSON){
		var output = "";	
		$.each(myTableJSON.patients, function(i,item){
			output += "<tr class=\"row\">" + 
			"<td class=\"col-md-2\" \\> " + item.firstname +"<\\td>"+ 
			"<td class=\"col-md-3\" \\> " +item.lastname+"<\\td>"+
			"<td class=\"col-md-2\" \\> "+item.patientID+"<\\td>"+
			"<td class=\"col-md-2\" \\> "+item.room+"<\\td>"+
			"<td class=\"col-md-3\" \\> "+item.primary+"<\\td>"+
			"<//tr>";
		});
		$("#myTable.tabBody").html(output);

	}

	var invocation = new XMLHttpRequest();
	var url = 'https://ide.c9.io/thornb/deloitte-front-end/pat-list.html';
   
	function callOtherDomain() {
  		if(invocation) {    
    		invocation.open('GET', url, true);
    		invocation.onreadystatechange = handler;
    		invocation.send(); 
  		}
	}

});				
		


