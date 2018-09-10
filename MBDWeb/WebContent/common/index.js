/*var userId = myWeb.Storage.getValueSession("userId");
if(userId == null || userId == ""){
	window.location.href = baseUrl + "login.html";
}*/

function initIndex(uri,execfunction) {
	if(uri.indexOf("?")>=0){
		uri = uri+"&_="+version;
	}else{
		uri = uri+"?_="+version;
	}
	$.ajax({
		url :  uri,
		type : 'get',
		async : true,
		success : function(result) {
			var obj = result.toString();
			obj = obj.replaceAll("\.css",".css?_="+version);
			$($('head')[0]).html(obj);
			if(execfunction!=null && execfunction!=""){
				var func = eval(execfunction);
				func.call(this,execfunction);
			}
		},
		error : function(result) {
			if (result.status == 401) {
				window.location.href = window.location.protocol + "//" + window.location.hostname + ( window.location.port ? ':' + window.location.port: '')+"/cargosys/login.html";
			} else {
				layer.msg('网络连接异常，请刷新页面或稍后重试！');
			}
		}
	});
}

function initbody(){
	
	getPage("index_b.html","callback_initbody");
	
}


function callback_initbody(bodyhtml){
	$('body').prepend(bodyhtml);
	
	/*//菜单数据渲染
	var menus = myWeb.Storage.getValueSession("menus");
	
	var menutree = eval("("+menus+")");
	
	
	
	var treehtml = "";
	$.each(menutree,function(i,item){
		
		var one = ""
		
		if(item.URL != undefined && item.URL != ""){
			
			var url = item.URL.split(",");
			var body = url[1];
			var right = url[0];
			var clickString = "onclick=ajaxPage('"+right+"','"+body+"');return false;";
			one = "<li class='has_sub'><a href='javascript:void(0);' "+clickString+"  class='waves-effect waves-light'> <i><img src='basedark/images/icon/tongjifenxi.png'></i><span>"+item.name+"</span>";
		}else{
			one = "<li class='has_sub'><a href='javascript:void(0);'class='waves-effect waves-light'> <i><img src='basedark/images/icon/tongjifenxi.png'></i><span>"+item.name+"</span>";
		}
		
		var two = "<span class='pull-right'><i class='md md-add'></i></span></a>";
		
		
		var three = "";
		if(item.downMenuList == undefined){
		}else{
			three += "<ul class='list-unstyled'>";
			$.each(item.downMenuList,function(j,jtem){
				var url = jtem.URL.split(",");
				var body = url[1];
				var right = url[0];
				var clickString = "onclick=ajaxPage('"+right+"','"+body+"');return false;";
				var li = "<li><a href='javascript:void(0)' "+clickString+" >"+jtem.name+"</a></li>";
				three += li;
				
			});
			three +=  "</ul>";
		}
		var four = '</li>';
		
		var completeMenu = one + two + three + four;
		
		treehtml += completeMenu;	
	});
		
	$("#MainHome").append(treehtml);*/
	
	
	var language = myWeb.Storage.getValueSession("languagevalue");
	 if(language == "en"){
		$("#i18n_English").attr("class","active");
		$("#i18n_Chinese").attr("class","");
	 }else{
		$("#i18n_Chinese").attr("class","active");
		$("#i18n_English").attr("class","");
	 }
	 //post("common/changelanguagevalue","languagevalue="+language+"&sysSource="+sys_source,null);
	 var strings = []; 
	 jQuery.i18n.properties({//加载资浏览器语言对应的资源文件
			name:strings, //资源文件名称
			path:'i18n/', //资源文件路径
			mode:'map', //用Map的方式使用资源文件中的值
			language : language,
			cache : true ,
			callback: function() {//加载成功后设置显示内容
				 var i18nEle = $(".menui18n");
				 i18nEle.each(function() {
			         // 根据i18n元素的 name 获取内容写入
			         $(this).html($.i18n.prop($(this).attr('menui18n')));
			     });
			}
	});
}



 initIndex("head.html","initbody");
 

