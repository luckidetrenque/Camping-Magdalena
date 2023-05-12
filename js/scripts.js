$(function(){
    var $toggleMenu = $('.toggle-menu');
    var $menu = $('.ed-menu');
    $toggleMenu.on('click',function(){
        $menu.toggleClass('mostrar');
    });
    //Abrir links en una nueva ventana
	$('a[rel="_blank"]').click(function(){
		window.open($(this).attr('href'));
		return false;
	});
});