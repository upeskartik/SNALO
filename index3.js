$(document).ready(function(){
    var player1_name=prompt("NAME", "Player1");
    
   while(1){
    if(player1_name==""){
        alert("please select a valid name");
        player1_name=prompt("NAME", "Player1");
    }
       else
    break;
}
    var player2_name= "second Computer"
    var player3_name= "third Computer"
    $("#p1").html(player1_name);
    $("#p2").html(player2_name);
    $("#p3").html(player3_name);
    var player1 = 1;
    var player2 = 1;
    var player3 = 1;
    var player1_bites = 0;
    var player2_bites = 0;
    var player3_bites = 0;
    var player1_climb = 0;
    var player2_climb = 0;
    var player3_climb = 0;
    snake_bites=[17,52,57,62,88,95,97]
    ladder_climbs=[3,8,28,58,80,75,90]
    var pos = "#b";
    var posp = "";
    var posn = "";
    $("#welcome").hide(7000);

    $("#res4").hide();
    //$("#turn").html(player1_name+"'s turn!");
    function dice_roll(dice_no, plyno){
        var player = "player"+plyno;
        posp = pos + eval(player) ;
        var final_val;
        $(posp).removeClass(player) ;
        posn = pos+(eval(player)+dice_no);
        
        if(plyno == 1)
           { 
            final_val=player1;

               if(player1+dice_no<=101){
               player1+=dice_no;
            //if(player1 > 100)0
              //  player1-=dice_no;
            //else
             //   {
                    if(player1 > 100)
                    {
                        win(1,player1_bites,player1_climb);
                    }
                    else
                    {
                        snake(player1, 1);
                        ladder(player1, 1);
                        posn = pos+player1;
                    }
               }
            
            
           }
        else if (plyno == 2)
        {
            final_val=player2;
            if(player2+dice_no<=101){
            player2+=dice_no;
           // if(player2>100)
             //   player2-=dice_no;
            //else
              //  {
                     if(player2 > 100)
                     {
                         win(2,player2_bites,player2_climb);
                     }
                    else
                    {
                        snake(player2, 2);
                        ladder(player2, 2);
                        posn = pos +player2;
                    }
                    
                }
           
        }
        else if (plyno == 3)
        {
            final_val=player3;
            if(player3+dice_no<=101){
            player3+=dice_no;
           // if(player2>100)
             //   player2-=dice_no;
            //else
              //  {
                     if(player3 > 100)
                     {
                         win(3,player3_bites,player3_climb);
                     }
                    else
                    {
                        snake(player3, 3);
                        ladder(player3, 3);
                        posn = pos +player3;
                    }
                    
                }
           
        }
        $(posn).addClass(player);
        return final_val;
    }
    
    function snake(position, plyno){
        if($.inArray(position, snake_bites)==-1){}
        else{
            $("#res4").show();
            $("#res4").hide(8000,"swing");
        if(plyno==1)
            player1_bites+=1;
        else if(plyno==2)
            player2_bites+=1;
        else if(plyno==3)
            player3_bites+=1;
            
        switch(position)
            {
                case 17: if(plyno == 1)
                    player1=13;
                    else if(plyno==2)
                        player2=13;
                    else
                        player3=13;    
                    
                    break;
                
                case 52: if(plyno ==1)
                    player1=29;
                    else if(plyno==2)
                        player2=29;
                    else
                        player3=29;
                    break;
                    
                case 57:
                    if(plyno ==1 )
                        player1=40;
                    else if(plyno==2)
                        player2=40;
                    else
                        player3=40;
                    break;
                    
                    
                case 62: 
                    if(plyno == 1)
                        player1=22;
                    else if(plyno==2)
                        player2=22;
                    else
                        player3=22;
                    
                    break;
                case 88: 
                    if(plyno == 1)
                        player1=18;
                    else if(plyno==2)
                        player2=18;
                    
                    else
                        player3=18;
                    break;  
                case 95: 
                    if(plyno == 1)
                        player1=51;
                    else if(plyno==2)
                        player2=51;
                    
                    else
                        player3=51;
                    break;     
                case 97: 
                    if(plyno == 1)
                        player1=79;
                    else if(plyno==2)
                        player2=79;
                    
                    else
                        player3=79;
                    break;   
            }
       } 
    }
    function ladder(position, plyno){
        if($.inArray(position, ladder_climbs)==-1){}
        else{
            alert("IT's A LADDER")
        if(plyno==1)
            player1_climb+=1;
        else if(plyno==2)
            player2_climb+=1;
        else if(plyno==3)
            player3_climb+=1;
        switch(position)
            {
                case 3: 
                    if(plyno == 1)
                        player1=21;
                    else if(plyno==2)
                        player2=21;
                    else
                        player3=21;
                    break;
                
                case 8:
                    if(plyno == 1)
                        player1=30;
                    else if(plyno==2)
                        player2=30;
                    else
                        player3=30;
                    break;
                
                case 28: 
                    if(plyno == 1)
                        player1=84;
                    else if(plyno==2)
                        player2=84;
                    else
                        player3=84;
                    break;
                case 58: 
                    if(plyno == 1)
                        player1=77;
                    else if(plyno==2)
                        player2=77;
                    else
                        player3=77;
                    break; 
                case 80: 
                    if(plyno == 1)
                        player1=100;
                    else if(plyno==2)
                        player2=100;
                    else
                        player3=100;
                    break;       
                case 75: 
                    if(plyno == 1)
                        player1=86;
                    else if(plyno==2)
                        player2=86;
                    else
                        player3=86;
                    break; 
                case 90: 
                    if(plyno == 1)
                        player1=91;
                    else if(plyno==2)
                        player2=91;
                    else
                        player3=91;
                    break;       
            }
        }
    }
    function win(plyno,bites,climbs)
    {
        var ch;
        if(plyno == 1)
        alert(player1_name+" is the winner! with "+climbs+" :Climbs and "+bites+" :Bites");
        else if(plyno == 2)
        alert(player2_name+" is the winner! with "+climbs+" :Climbs and "+bites+" :Bites");
        else if(plyno == 3)
        alert(player3_name+" is the winner! with "+climbs+" :Climbs and "+bites+" :Bites");
   
        alert("Thank you for playing!!! we are very glad that you came.")
        ch = prompt("Please let us know if you want any changes in this Website.","");
        
    }
    $(".selector").click(function(){
        if($(this).val() == 2)
            {
                player2_name = prompt("Enter your Name","Player2");
                while(1){
    if(player2_name==""){
        alert("please select a valid name");
        player2_name=prompt("NAME", "Player2");
    }
    else
    break;
}
                $("#p2").html(player2_name);
                //to hide radio button
            }
                
        
        
    });
    $(".selector").click(function(){
        if($(this).val() == 3)
            {
                player3_name = prompt("Enter your Name","Player3");
                while(1){
    if(player3_name==""){
        alert("please select a valid name");
        player3_name=prompt("NAME", "Player1");
    }
    else
    break;
}
                $("#p3").html(player3_name);
                //to hide radio button
            }
                
        
        
    });
    var count = 1;
    
            $("#main_dice").click(function(){
                if($("#play3").is(':checked')){
                    var dice_result = dice_no_generate();
                    var a = dice_roll(dice_result, count);
                    
                    if(count == 1)
                        {
                            if(a+dice_result<=101){
                            $("#res1").show();
                            $("#res1").html(dice_result);
                         
                         $("#res1").hide(8000);
                        }
                        count=2;
                        }
                    else if(count ==2)
                            {
                                if(a+dice_result<=101){
                                $("#res2").show();
                                $("#res2").html(dice_result);
                                //changebeenmade
                                
                                $("#res2").hide(8000);
                            }
                            count=3;
                        }
                    else if(count == 3){
                        if(a+dice_result<=101){
                        $("#res2").show();
                        $("#res2").html(dice_result);
                                //changebeenmade
                        
                        
                        $("#res3").hide(8000);
                    }
                    count=1;
                }
                    toggle_dice();
                    toggle_players();
                    $("#res1").html()
                }
                else
                    if($("#play2").is(':checked')){
                        var dice_result = dice_no_generate();
                        var a = dice_roll(dice_result, count);
                    
                    if(count == 1)
                        {
                            if(a+dice_result<=101){
                            $("#res1").show();
                            $("#res1").html(dice_result);
                         
                         $("#res1").hide(8000);
                        }
                        count=2;
                        }
                    else if(count ==2)
                            {
                                if(a+dice_result<=101){
                                $("#res2").show();
                             
                                $("#res2").html(dice_result);
                                //changebeenmade
                                
                                $("#res2").hide(8000);
                            }
                            count=1;
                        }
                    toggle_dice();
                    toggle_players();
                    $("#res1").html();
                }
              else if($("#play1").is(':checked')){
                        var dice_result= dice_no_generate();
                        var a = dice_roll(dice_result, 1);
                        if(a+dice_result<=101){
                        toggle_dice();
                        toggle_players();
                        $("#res1").show();
                        $("#res1").html(dice_result);
                        $("#res1").hide(8000);
                    }
                        dice_result = Math.floor(Math.random()*6)+1;
                        dice_roll(dice_result, 2);
                        toggle_players();
                        $("#res2").show();
                        $("#res2").html(dice_result);
                        $("#res2").hide(8000);
                    
                    
                }        
               
        });
    
            
            function dice_no_generate(){
                 $("#moving_dice").show(2000);
                    $("#moving_dice").hide(4000);
                    var dice = Math.floor(Math.random()*6)+1;
                    alert(dice);
                    var res = "#dice"+dice;
                    $(res).show(6000);
                    $(res).hide(7000);
                return dice;
            }
        
   
        
        
    setTimeout(hide_options, 10000);
    function hide_options()
    {
        $("#numberp").hide(10000);
    }
    function toggle_dice()
    {
        setTimeout(disable_dice, 10);
        setTimeout(enable_dice, 100);
    }
    function disable_dice()
    {
        $("#main_dice").attr("disabled", "disabled");
    }
    function enable_dice()
    {
        $("#main_dice").removeAttr("disabled");
    }
    function toggle_players()
    {
        if($("#turn").html()== player1_name+"'s turn!")
            $("#turn").html(player2_name+"'s turn!");
        else if($("#turn").html()==player2_name+"'s turn!")
            $("#turn").html(player2_name+"'s turn!");
        else if($("#turn").html()==player3_name+"'s turn")
            $("#turn").html(player3_name+"'s turn!");
            
    }
    
 
});
