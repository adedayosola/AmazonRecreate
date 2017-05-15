	//Window Status scroller.
	var pat="St Patrick's Day"
	var str = "Welcome to Amazon Clone!!!   "
	function scroller (){
			 	str = str.substring(1, str.length) + str.substring(0,1)	 ;
	 	document.title = str;
	 	window.status= str; 
	 	setTimeout(scroller,300);
	 }

	function colour(){
	 	var newColor = document.getElementById('patrick');
	 	console.log(newColor);
	 	newColor.style.color="green";
	 	
	 	
	 }

	 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//departments
/*
function showMenu(id){
	var drop= document.getElementById(id);
	drop.style.visibility="visible";
	
	
}

function hideMenu(id){
	var drop= document.getElementById(id);
	drop.style.visibility="hidden";

}*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
var that= document.getElementById("departments1")
console.log(that);
that.addEventListener("mouseover",showMenu);
that.addEventListener("mouseout",hideMenu);
function showMenu(){
	var drop= document.getElementById(departments);
	drop.style.visibility="visible";}
	function hideMenu(){
	var drop= document.getElementById(departments);
	drop.style.visibility="hidden";}
*/

	var i;
	var timeout; 

	function preLoadImages(){
		if (document.images){
			carousel = new Array(); 
			carousel[0]= new Image();
			carousel[0]= "images/slide1.jpg";
			carousel[1]= new Image();
			carousel[1]="images/slide2.jpg";
			carousel[2]= new Image();
			carousel[2]="images/slide3.jpg";
			carousel[3]= new Image();
			carousel[3]="images/slide4.jpg";
			carousel[4]= new Image();
			carousel[4]="images/slide5.jpg";
			
		}
		else{
			alert("No more  to Load.")
		}
	}
	function startSlideShow(){
		if (i<carousel.length){
			document.images["carousel-img"].src= carousel[i];
			i++;
		}
		else{
			i=0;
			document.images["carousel-img"].src= carousel[i];
		}
		timeout= setTimeout('startSlideShow()', 3000);
	}
	function stopSlideShow(){
		clearTimeout(timeout);
	}


function changeDisplay(id){
	 	var newDisp = document.getElementById(id);
	 	console.log(newDisp);
	 	newDisp.style.display="block"
	 };
	 function changeDisplay2(id){
	 	var newDisp = document.getElementById(id);
	 	console.log(newDisp);
	 	newDisp.style.display="none"
	 };
