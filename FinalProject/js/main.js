
 var config = {
        // easing: 'hustle',
        reset:  true,
        // delay:  'onload',
        // vFactor: 0.90
      }
window.sr = ScrollReveal(config);
	
	sr.reveal('.carousel-item:first-child',{
		duration:1200,
		delay:200,
		origin:'bottom',
		distance: '500px'	
	});


	
	

	var rev = function (name2, dir, del) {
		sr.reveal(name2,{
		duration:1000,
		delay:del,		
		origin:dir,
		distance: '300px',
		viewFactor:0.2
	});
	}
	rev('#nav', 'top', 200);
	rev('.arrow', 'top', 400)
	rev('#left', 'left', 400);
	rev('#bottom', 'bottom',600);
	rev('#right', 'right',400);
	// rev('.container .texto', 'left',0);
	// rev('.container .pict', 'right',0);







///////////////////////////////////////////////////////////
var head;
for ( var i in sessionStorage){
	if(i!=="memberData"){
		if(i=="username"){
			document.getElementById('profileimage').src = "../images/photo.jpg";
		}
		else{
			document.getElementById('profileimage').src = "../images/k3.jpg";
		}
head = i;
console.log(i);}}

var eElement = document.getElementById('profilename') ; // some E DOM instance

eElement.innerHTML = head;

function clear() {
	sessionStorage.clear();
}