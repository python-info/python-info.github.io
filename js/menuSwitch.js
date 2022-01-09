function menuSwitch(str){
const menuItem = document.querySelectorAll('nav ul li a');
const menuLength = menuItem.length;
	for(let i=0; i<menuLength; i++){
		if(menuItem[i].id===str) menuItem[i].className = "active";
		else menuItem[i].className = "";
	}
}
