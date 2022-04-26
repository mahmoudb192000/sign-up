function showform(){
    document.getElementById('fo1').style.display='block';
     document.getElementById('bh1').style.display='block';
     document.getElementById('bs1').style.display='none';
  }
  function hiform(){
    document.getElementById('fo1').style.display='none';
     document.getElementById('bh1').style.display='none';
     document.getElementById('bs1').style.display='block';
  }
  function he1(){ 
      
      document.getElementById('se1').style.display='none';
  }
  
  function he2(){ 
      
      document.getElementById('se2').style.display='none';
  }
  
  function he3(){ 
      
      document.getElementById('se3').style.display='none';
  }
    
  
     $(document).ready(function(){
  
    var username= 0;
     var email=0;
    var password=0;   
    
  
  
  $('#in1').focusin(function(){
    
   $(this).attr('placeholder','');
    
    
    if($(this).val().length>10 || $(this).val().length<20){
        
    document.getElementById('se1').style.display='none';
        username=1;
     
    }
    
    
     
    
    
  });
  
  $('#in2').focusin(function(){
    
   $(this).attr('placeholder','');
    
    
    
  });
  
  $('#in3').focusin(function(){
    
   $(this).attr('placeholder','');
    
    if($(this).val().length>10 || $(this).val().length<15){
        
    document.getElementById('se3').style.display='none';
      password=1;
    }
    
    
    
  });
  
    
    
    
    
    
  $('#in1').focusout(function(){
    
    
   $(this).attr('placeholder','User name');
    
    
   if($(this).val().length<10 || $(this).val().length>20){
        
    document.getElementById('se1').style.display='block';
     username=0;
    }
   
  
  });
  
  $('#in2').focusout(function(){
    
    
   $(this).attr('placeholder','Email');
  
   
   
  var rxe=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      
    
    if($('#in2').val().match(rxe)){
   
          document.getElementById('se2').style.display='none';
        
        email=1;
          
      }
         else{
          
    
          document.getElementById('se2').style.display='block';
        
        email=0;
          
      }
    
    
    
    
    
  });
  
  $('#in3').focusout(function(){
    
    $(this).attr('placeholder','Password');
    
    if($(this).val().length<10 || $(this).val().length>15 ){
        
    document.getElementById('se3').style.display='block';
         
    password=0;
    }
  
  });
    
  
    
  
   $('#fo1').submit(function(s){
       
   
       if(username===0 || password===0 || email===0){
           
          s.preventDefault();
           $('#in1').focusout();
          $('#in2').focusout();
           $('#in3').focusout();
       
       }  
   });
         }); 