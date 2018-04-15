// JavaScript Document

// 禁用右键菜单
document.onselectstart = document.oncontextmenu = function() { 	return false;
} 

// 禁用ctrl + c
document.oncopy = function(){
    return  false;
}

// 禁止拖拽
document.ondragstart = function() {
	return false;
}

// 禁用ctrl + x
document.oncut = function(){
    return  false;
}

// ban f12
document.onkeydown = function() {
 if(window.event && window.event.keyCode == 123) {
	window.event.keyCode = 505;
}
}

