$(function(){

     $('.news_zeng').click(function(){
            var input = $(this).siblings('.news_input');
            if(input.hasClass('hidden')){
                // alert(1)
                input.removeClass('hidden');    //如果元素为隐藏,则将它显现
            }else{
                // alert(2)
                input.addClass('hidden');    //如果元素为显现,则将其隐藏
            }
        });
         $('.actions .edit-row').click(function(event) {
            var parent_show=$(this).parents(".actions");
            if(parent_show.hasClass("hidden"))
            {
                $(this).parents(".col-md-2").siblings('.show_input').find('input').prop("disabled",true); 
            }
            else{
                 $(this).parents(".col-md-2").siblings('.show_input').find('input').prop("disabled",false); 
                 parent_show.addClass('hidden');
                 parent_show.siblings('.actions').removeClass('hidden');
            }
        });
         $('.actions .save-row').click(function(event) {
            var parent_show=$(this).parents(".actions");
            if(parent_show.hasClass("hidden"))
            {
                $(this).parents(".col-md-2").siblings('.show_input').find('input').prop("disabled",false); 
            }
            else{
                 $(this).parents(".col-md-2").siblings('.show_input').find('input').prop("disabled",true); 
                 parent_show.addClass('hidden');
                 parent_show.siblings('.actions').removeClass('hidden');
            }
        });

         $('.remove-row').click(function(event) {
            $(this).parent().parent().siblings('.show_input').find('input').val("");
         });
        $('.cancel-row').click(function(event) {
            $(this).parent().parent().siblings('.show_input').find('input').val("");
         });
		 
		 
	// index-js-start	
	window.setTimeout("login()",1000); 
});



		
// index-js-start定时器
function login(){
	$('.login').hide(1000);
	$('.loginer').fadeIn(1500);
	$('.anim').hover(function() {
		$(this).stop().animate({'top': '-20px'},500);
	}, function() {
		$(this).stop().animate({'top': '0'},500);
	});

	document.onkeydown=function(e){
        if(!e)e=window.event;
        if((e.keyCode||e.which)==13){
           doLogin();
        	
        }
    }
    
}