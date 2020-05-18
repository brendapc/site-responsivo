document.addEventListener("DOMContentLoaded", function(event){
	const headerSize = document.getElementById('header').clientHeight;/*pega altura do elemento*/
	document.getElementById('container-background').style.height = (window.innerHeight - headerSize) + "px"; /*a altura total da janela precisa ser o x pixels com o header descontado*/
});