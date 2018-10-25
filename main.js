let previousBarItem = null; 
$(document).ready(function(){
	if(previousBarItem == null) previousBarItem = $('ul li:first'); 
	$('.bar').on('click', '.barItem', function (){
		// bold the selected menu item in the bar 
		let activeBarItem = $(this).closest('li');
		if(activeBarItem.hasClass('active')){
			return; 
		} else {
			activeBarItem.addClass('active');
			previousBarItem.removeClass('active');
			$('#recipe' + (activeBarItem.index() + 1)).toggle(); 
			$('#recipe' + (previousBarItem.index() + 1)).toggle(); 
			previousBarItem = activeBarItem;
		}
	})
});