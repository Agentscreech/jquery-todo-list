console.log('woo');
$(document).ready(function(){
    $("#targetForm").submit(function(e){
        return false;
    });

});

function addItem() {
    $('#theList').append("<li>"+$('#entry').val() + '<img src="img/red_close_button.png" class="remove">'+"</li>");
    $('li').children('img').click(removeItem);
}

function removeItem() {
    $(this).parent('li').remove();
}
