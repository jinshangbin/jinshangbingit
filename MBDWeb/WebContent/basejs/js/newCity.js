
function initCity(){
    //会员管理省市区
    $(".city_box").on("click","input",function(e){
        $(this).siblings('.selectList').find(".ulArea").hide();
        $(this).siblings('.selectList').find(".ulArea").eq(0).show();
        $(this).siblings('.selectList').find(".ulhdDown li").eq(0).addClass("currentLi").siblings("li").removeClass("currentLi");
        $(this).siblings('.selectList').stop().slideDown();
        $(findNode($(this),".ulhdDown li")[0]).click();
    
    });


  //运价查询省市区tab切换
  $(".city_box").on("click",".ulhdDown li",function(e) {
      var index=$(this).index();
      $(this).addClass('currentLi').siblings().removeClass('currentLi');
      if(index==0){
        $(this).parents().siblings(".ulArea").hide().siblings(".ulArea0").show();
      	post('area/querylist','pid=0',"callback_clickprovince",$(this));
      }else if(index==1){
        $(this).parents().siblings(".ulArea").hide().siblings(".ulArea1").show();
      	var pval = $(findNode($(e.target),".provinceval",2)[0]).val();
      	if(pval==null || pval==''){
      	}else{
      		post('area/querylist','pid='+pval,"callback_clickcity",$(this));
      	}
      }else if(index==2){
        $(this).parents().siblings(".ulArea").hide().siblings(".ulArea2").show();
      	var pval = $(findNode($(e.target),".cityval",2)[0]).val();
    	if(pval==null || pval==''){
      	}else{
      		post('area/querylist','pid='+pval,"callback_clickarea",$(this));
      	}
      }
  });
  
  $(".city_box").click(function(e){
	  e.stopPropagation();
  });

    //// --------事件冒泡
    $("body").click(function(){
        $(".selectList").stop().slideUp();
    });
    
}


function  callback_clickprovince(data,thisobj){
	var ul = $(findNode(thisobj,"ul.ulArea0",3)[0]);
	if(ul.children().length==0){
		ul.empty();
		$.each(data,function(i,o){
			ul.append("<li value='"+o.id+"' onclick=\"clicktoCity(this,'"+o.id+"','"+o.nameCn+"');return false;\">"+o.nameCn+"</li>");
		});
	}
	
}
function  callback_clickcity(data,thisobj){
	var ul = $(findNode(thisobj,"ul.ulArea1",3)[0]);
		ul.empty();
		$.each(data,function(i,o){
			ul.append("<li value='"+o.id+"' onclick=\"clicktoArea(this,'"+o.id+"','"+o.nameCn+"');return false;\">"+o.nameCn+"</li>");
		});
}
function  callback_clickarea(data,thisobj){
	var ul = $(findNode(thisobj,"ul.ulArea2",3)[0]);
		ul.empty();
		$.each(data,function(i,o){
			ul.append("<li value='"+o.id+"' onclick=\"clickArea(this,'"+o.id+"','"+o.nameCn+"');return false;\">"+o.nameCn+"</li>");
		});
}

function clicktoCity(thisobj,id,name){
	var ulp = $(thisobj).parent().parent();
	var p = ulp.find(".provinceval");
	p.val(id);
	p.attr("inittext",name);
	findNode(ulp,".cityval",3).val("")
	findNode(ulp,".cityval",3).attr("inittext",'');
	$(findNode($(thisobj),".city_box",4).find("input")[0]).val(getText(thisobj));
	$(findNode(ulp,".ulhdDown li",4)[1]).click();
}

function clicktoArea(thisobj,id,name){
	var ulp = $(thisobj).parent().parent();
	var p = ulp.find(".cityval");
	p.val(id);
	p.attr("inittext",name);
	findNode(ulp,".areaval",3).val("");
	findNode(ulp,".areaval",3).attr("inittext",'');
	$(findNode($(thisobj),".city_box",4).find("input")[0]).val(getText(thisobj));
	$(findNode(ulp,".ulhdDown li",4)[2]).click();
}

function clickArea(thisobj,id,name){
	var ulp = $(thisobj).parent().parent();
	var p = ulp.find(".areaval");
	p.val(id);
	p.attr("inittext",name);
	$(findNode($(thisobj),".city_box",4).find("input")[0]).val(getText(thisobj));
	 $(".selectList").stop().slideUp();
}

function getText(thisobj){
	var proval = findNode($(thisobj),".provinceval",3).attr("inittext");
	var resu="";
	if(proval==null || proval==''){
		return '';
	}else{
		resu = proval;
	}
	var cityval = findNode($(thisobj),".cityval",3).attr("inittext");
	if(cityval==null || cityval==''){
		return resu;
	}else{
		resu = resu+"-"+cityval;
	}
	var areaval = findNode($(thisobj),".areaval",3).attr("inittext");
	if(areaval==null || areaval==''){
		return resu;
	}else{
		resu = resu+"-"+areaval;
	}
	return resu;
}