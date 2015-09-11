var JsCore = {
    clear : function(){
        $("#alert-message").hide();
        $("#lista").empty();
        $("#text").val("");
        $("#Lname").val("");
        $("#txtArea").val("");
        $("#ListHeader").empty();
    },
    setListName : function(){
        $("#ListHeader").empty().html($("#Lname").val());
    },
    fillList : function(){
        var txt = $("#text").val();

        if(txt.length == 0){
          return false;
        }
    
        if($("#lista li").length == 1000000){
          $("#alert-message").html("no puede haber mas de "+$("#lista li").length+" elementos en la lista");
          $("#alert-message").show();
          return false;
        }
    
        $("#lista").append("<li class='item'>"+txt+"</li>");
        $("#text").val("");      
        $("#text").focus();
    },
    downloadListTxtFile : function(e){
        $("#txtArea").html($("#Lname").val()+'\r');
        var $lis = $('ol li');
    
        for(var i=0; i < $lis.length; i++)
        {
            $("#txtArea").html($('#txtArea').val()+' \r '+(i+1)+'.- '+$('ol li:eq(' + i + ')').text());
        }
      	
          $.generateFile({
		                  filename	: 'Lista-'+$("#Lname").val()+'.txt',
			              content		: $('#txtArea').val(),
			              script		: './core/core.php'
		  });
		
	//	e.preventDefault();
        
        this.clear();
    },
    initialize : function(){
        $("#alert-message").hide();
        $("#txtArea").hide();
    },
    fillListOnEnter : function (e){
        
               if (e.keyCode == 13) {
                    this.fillList();
        
                 }
    }   
}

 