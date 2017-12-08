

var head = document.createElement('h1');
for ( var i in sessionStorage){
	if(i!=="memberData"){
head.innerHTML = i;}
}

var eElement = document.getElementById('headInfo') ; // some E DOM instance
var newFirstElement = head; //element which should be first in E
eElement.insertBefore(newFirstElement, eElement.firstChild);

if(head.innerHTML==="username"){
	document.getElementById('userimage').src = "../images/me.png";
	var unpackArr = JSON.parse(localStorage.getItem("memberData"));
document.getElementById('myCity').innerHTML = unpackArr[0].FirstName;
document.getElementById('myWriters').innerHTML = unpackArr[0].LastName;
document.getElementById('myBooks').innerHTML = unpackArr[0].MemberId;
}
else{
	 document.getElementById('userimage').src = "../images/123.jpg";
	var unpackArr = JSON.parse(localStorage.getItem("adminData"));
document.getElementById('myCity').innerHTML = unpackArr[0].FirstName;
document.getElementById('myWriters').innerHTML = unpackArr[0].LastName;
document.getElementById('myBooks').innerHTML = unpackArr[0].MemberId;
  
}

 

// localStorage.clear();

// console.log(unpackArr[0].FirstName);
// console.log(localStorage.getItem("memberData"));



 // for (var i = 0; i < 3; i++) {
 //                row = $('<tr></tr>');
 //                for (var j = 0; j < 2; j++) {
 //                  if(i==0){
 //                    var rowData = $('<td></td>').addClass('bar').text($('#fname').val() + j);
 //                  }
 //                  if(i==1){
 //                    var rowData = $('<td></td>').addClass('bar').text($('#lname').val() + j);
 //                }
 //                if(i==2){
 //                    var rowData = $('<td></td>').addClass('bar').text($('#mId').val() + j);
 //                }

 //                row.append(rowData);
 //                $("#dataTable").find('tbody').append(row);
 //           }}




