$(document).ready(function(){
    var orderList=[];
    $('.orderButton').click(function(){
        let foodName = $(this).siblings("h4").html();
        
        
        let foodPrice=$(this).siblings("span").html();
        
        let foodImage= $(this).closest(".card").find("img").attr('src');
        
        var pickUpFood= " <div class='addOrderFood'>"+
        "<h6 style='color:white; margin-left: 15px;'>"+foodName+"</h6>"+
        "<img src='"+foodImage+"' class='image-fluid' style='display:inline-block; width: 50px; height: 50px; margin-left: 2px;'>"+
        "<button id='minus' style='display: inline-block; border: none; margin-left:10px;'>-</button>"+
        "<p class='counter' style='display: inline-block;margin-left:10px;'> 1 </p>"+
        "<button id='plus' style='display: inline-block; border: none;margin-left:10px;'>+</button>"+
        "<button class='deleteOrder' style='display: inline-block; border: none; margin-left:10px; background-color: rgb(193, 58, 58); color:white'>"+
        "<span class='material-icons'>delete</span></button></div>";
        
        if(!orderList.filter(v => v==foodName).toString()){
            orderList.push(foodName);
            $("#orderFood").append(pickUpFood);
            $("#placeYourOrder").show();
        }
        

    });
    
    $('body').on('click', '.deleteOrder', function(){
        
        let foodName = $(this).siblings("h6").html();
        orderList=orderList.filter(v => v!=foodName);
        let test= $(this).parents('.addOrderFood').remove();
        if(orderList.length == 0){
            $("#placeYourOrder").hide();
        }
      
    });

    $('body').on('click', '#plus', function(){

        let counter=parseInt($(this).siblings("p").html());
        $(this).siblings("p").html((counter+1).toString());
       
     });

     $('body').on('click', '#minus', function(){

        
        let counter=parseInt($(this).siblings("p").html());
        if(counter-1==0){
            let foodName = $(this).siblings("h6").html();
            orderList=orderList.filter(v => v!=foodName);
            $(this).parents('.addOrderFood').remove();
            if(orderList.length == 0){
                $("#placeYourOrder").hide();
            }
        }else{
            $(this).siblings("p").html((counter-1).toString());
        }
        
       
     });
   
   

});
function doit(){
    alert('order submited')
}
