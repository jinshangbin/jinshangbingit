var version="1.0";
var author = myWeb.Storage.getValueSession('userId');
var pathname = window.location.pathname;
var	sys_source=pathname.substring(1,pathname.lastIndexOf("/"));
var pageNo = 1;
var pageSize = 10;
var serviceFlag = 0;
var pageFlag = 1;
var baseUrl;
var baseUrlwebsite;
var servicesUrl;
var _load;
jQuery.support.cors = true;
if(!window.location.origin){
	var base = location.protocol + "//" + location.hostname + ( location.port ? ':' + window.location.port: '');
	 baseUrl = base+"/"+sys_source+"/";
	 servicesUrl = base+"/MBDServer/";
}else{
	baseUrl = window.location.origin+"/"+sys_source+"/";
	servicesUrl = window.location.origin+"/MBDServer/";
}
//baseUrl = "http://192.168.1.199:8080/ekang/";
var permissions = null;
/**
 * 工具方法，禁止调用
 */
String.prototype.replaceAll = function(s1, s2) {
	var resultstr = s1;
	var arr=new Array();
	arr.push("\?");
	arr.push("\$");
	arr.push("\.");
	arr.push("\+");
	arr.push("\*");
	arr.push("\[");
	arr.push("\]");
	arr.push("\(");
	arr.push("\)");
	arr.push("\|");
	
	$.each(arr,function(i,o){
		resultstr = resultstr.replace(new RegExp("\\"+arr[i], "gm"), "\\"+o);
	});
	return this.replace(new RegExp(resultstr, "gm"), s2);
}

/**
 * 工具方法，禁止调用
 */
function cal(a, opt, b) {
	if (!isNaN(a)) {
		a = Number(a);
	}
	if (!isNaN(b)) {
		b = Number(b);
	}
	switch (opt) {
	case "+":
		return a + b;
	case "-":
		return a - b;
	case "*":
		return a * b;
	case "/":
		return a / b;
	default:
		return "";
	}
}

function showTable(obj, columns,newtrs) {
	var table = findNode(obj, "table");
	if (table == null)
		return;
	if (columns == null) {
		columns = new Array();
		var newtext = null;
		$.each($($(obj.parents("li")[0]).parents("ul")[0]).children("li"), function(a, b) {
			if ($($(b).children("label")[0]).children("input")[0].checked) {
				newtext = $($(b).children("label")[0]).text();
				if (newtext != null && newtext != '') {
					columns.push(a + 1);
				}
			}
		});
	} else {
		columns = columns.split(",");
		var inputs = $($(obj.parents("li")[0]).parents("ul")[0]).find("input:checkbox");
		inputs.prop("checked", false);
		for (var i = 0; i < columns.length; i++) {
			$(inputs[columns[i] - 1]).prop("checked", true);
		}
	}
	$.cookie("table_menu_" + table.attr("id"), columns);
	var trs = table.find("tr");
	
	$.each(trs, function(i, o) {
		var tds = $(trs[i]).children();
		tds.css("display", "none");
		$(tds[0]).css("display", "");
		$.each(columns, function(j, b) {
			$(tds[columns[j]]).css("display", "");
		});
	});
	return columns;
}

/**
 * 
 * @param obj
 *            jquery 节点对象
 * @param deskId
 *            要找的最近的节点名
 * @param i
 *            向上最多跳几层查找
 * @returns null 或者jquery对象
 */
function findNode(obj, deskName, i) {
	if (obj.length == 0)
		return;
	if (i == null) {
		i = 15;
	}
	if (i <= 0) {
		return;
	}
	if (obj.parent().find(deskName).length == 0) {
		return findNode(obj.parent(), deskName, --i);
	} else {
		return obj.parent().find(deskName);
	}
}


function renderByDiv(div, data) {
	/**
	 * list
	 */
	var reg = /<list([\s\S]*?)<\/list>/gm;
	var matcharray = div.match(reg);
	var tocopy = "";
	var result = "";
	for (var i = 0; matcharray != null && i < matcharray.length; i++) {
		result = "";
		var keyname = $(matcharray[i]).attr("item");
		var varname = $(matcharray[i]).attr("var");
		var data2;
		if(data==null||data==""){
			data2 = data;
		} else if (keyname == null || keyname == "") {
			data2 = data;
		} else {
			data2 = data[keyname];
		}
		eval("var regStr = /({[a-zA-Z0-9\.\_]+})/g");
		for (var j = 0; data2 != null && j < data2.length; j++) {
			tocopy = matcharray[i].replace(/<list([\s\S]*?)>/g, '').replace(/<\/list>/g, '');
			var regStrArray = matcharray[i].match(regStr);
			for (var k = 0; regStrArray != null && k < regStrArray.length; k++) {
				var str = regStrArray[k];
				str = str.substring(1, str.length - 1);
				var strarray = str.split(".");
				var val;
				if (str == varname + "\.index") {
					val = j + 1;
				} else if (strarray.length == 1 && strarray[0] == varname) {
					val = data2[j];
				} else if (strarray[0] == varname) {
					val = data2[j][strarray[1]];
				} else {
					val = data[strarray[0]];
				}
				val = (val == null ? '' : val);
				tocopy = tocopy.replace(regStrArray[k], val);
			}
			result = result + tocopy;
		}
		div = div.replaceAll(matcharray[i], result);
	}

	/**
	 * 普通赋值：
	 */
	reg = /{([\s\S]*?)}/g;
	matcharray = div.match(reg);
	for (var i = 0; matcharray != null && i < matcharray.length; i++) {
		var name = matcharray[i];
		if (name == null || name == '' || name == "{}")
			continue;
		var key = name.substring(1, name.length - 1);
		if (data == null) {
			div = div.replaceAll(name, '');
		} else {
			if(typeof  data[key]=="string" && data[key].indexOf(">")==-1){
				div = div.replaceAll(name,data[key] == null ? '' : data[key].replaceAll('\'', '&apos;').replaceAll('\"', '&quot;'));
			}else{
				div = div.replaceAll(name,data[key] == null ? '' : data[key]);
			}
		}

	}

	/**
	 * if处理：
	 */
	reg = /<if([\s\S]*?)<\/if>/gm;
	matcharray = div.match(reg);
	for (var i = 0; matcharray != null && i < matcharray.length; i++) {
		if (eval($(matcharray[i]).attr("test"))) {
			div = div.replaceAll(matcharray[i], matcharray[i].replace(/<if([\s\S]*?)>/g, '').replace(/<\/if>/g, ''));
		} else {
			div = div.replaceAll(matcharray[i], "");
		}
	}
	return div;
}

function initCheckBox(checkboxname, data) {
	var checkboxs = $("input[name='" + checkboxname + "']");
	$.each(checkboxs, function(index, obj) {
		if (data == null || data.length == null) {
			if (data == $(obj).val()) {
				$(obj).prop("checked", true);
			} else {
				$(obj).prop("checked", false);
			}
		} else {
			$(obj).prop("checked", false);
			$.each(data, function(j, val) {
				if (val == $(obj).val()) {
					$(obj).prop("checked", true);
				}
			});
		}
	});
}


/**
 * 取得表格中选中checkbox的value列表
 */
function getCheckedCheckbox(tableId) {
	var selArray = new Array();
	var objs = $("#" + tableId).find("tbody input[type='checkbox']:checked");
	$.each(objs, function(i, obj) {
		selArray[i] = $(obj).attr("value");
	});
	return selArray;
}

/**
 * 处理401报错方法
 * @param errcode
 */
function doerrfun(errcode){
	if(errcode == "01"){
		loginOut();
	}else if(errcode == "02"){
		toLoginPage();
	}else{
		toLoginPage();
	}
}

/**
 * 退出登录
 */
function loginOut(){
	post("web/operator/loginOut", "","callback_loginOut");
}

function callback_loginOut(){
	myWeb.Storage.setValueSession('userId',"");
	myWeb.Storage.setValueSession("type", "");
	myWeb.Storage.setValueSession("insurerName", "");
	myWeb.Storage.setValueSession("sysFlag","");
	window.location.href = baseUrl+"login.html";
}

/**
 * 退出登录直接跳转到登录页面并且清理内存
 */
function toLoginPage(){
	
	myWeb.Storage.setValueSession("catgosysApiKey","");
	myWeb.Storage.setValueSession("companyName","");
	myWeb.Storage.setValueSession("logoUrl","");
	
	var loginSys = myWeb.Storage.getValueSession('loginSys');
	if(loginSys != null && loginSys != ""){
		if(loginSys == "webCh"){
			window.location.href = baseUrlwebsite+"websiteCh/login/employees_login.html";
		}else if(loginSys == "webEn"){
			window.location.href = baseUrlwebsite+"/websiteEn/login/employees_login.html";
		}
		myWeb.Storage.setValueSession("loginSys","");
	}else{
		window.location.href = baseUrl+"login.html";
	}
}


/***************************************不可调用方法(开始)*****************************************/

function loadi18n(){
	var i18nEle = $(".i18n");
	 i18nEle.each(function() {
	        // 根据i18n元素的 name 获取内容写入
			 var type = $(this).attr("type");
			 //console.log("3333");
			 if(type != undefined && type == "text"){
				 $(this).attr("placeholder",$.i18n.prop($(this).attr('i18n')));
			 }else{
				 var htmlValue = "";
				 var textValue = $.trim($(this).html());
				 if(textValue.indexOf("：")>=0){
					 htmlValue = $.i18n.prop($(this).attr('i18n'))+"：";
				 }else{
					 htmlValue = $.i18n.prop($(this).attr('i18n'));
				 }
		         // 根据i18n元素的 name 获取内容写入
				 if(textValue.indexOf("*")>=0&&textValue.indexOf("<span")<0){
					 htmlValue += "<i class='errorFont'>*</i>";
				 }else if(textValue.indexOf("<span")>=0){
					 //console.log("111");
					 htmlValue += "&nbsp;"+textValue.substring(textValue.indexOf("<span"));
				 }
		         $(this).html(htmlValue);
			 }
	});
}

function common_callback_ajaxPage2(body){
	$("body").append(body);
}


function common_callback_ajaxPage(right,uritobody){
	$("#wrapper").find("div.content-page").remove();
	var obj = $("body").find("div.end");
	
	while(obj.next().length>0){
		obj.next().remove();
	}
	$("#wrapper").append(right);
	if (uritobody != null && uritobody != "") {
		getPage(uritobody,"common_callback_ajaxPage2");
	}
}
/**
 * 
 * @param data :数据
 * @param tableid ：tableid
 * @param templateuri :tr的uri
 * @param pageFlag : 是否需要分页
 * @param pageinfouri ： 分页模板的uri
 * @param callbackFunction : 回调函数，固定第一位为数据，之后支持5个自定义参数，为funcparam1-5
 * @param funcparam1
 * @param funcparam2
 * @param funcparam3
 * @param funcparam4
 * @param funcparam5
 */
function callback_rendertable(data,tableid, templateuri, pageFlag, pageinfouri,callbackFunction,funcparam1,funcparam2,funcparam3,funcparam4,funcparam5){
	getPage(templateuri,"callback_rendertable2",data,tableid, pageFlag, pageinfouri,callbackFunction,funcparam1,funcparam2,funcparam3,funcparam4,funcparam5);
}
/**
 * 
 * @param data :数据
 * @param tableid ：tableid
 * @param templateuri :tr的uri
 * @param pageFlag : 是否需要分页
 * @param pageinfouri ： 分页模板的uri
 * @param callbackFunction : 回调函数，固定第一位为数据，之后支持5个自定义参数，为funcparam1-5
 * @param funcparam1
 * @param funcparam2
 * @param funcparam3
 * @param funcparam4
 * @param funcparam5
 */
function callback_rendertable2(trhtml,data,tableid, pageFlag, pageinfouri,callbackFunction,funcparam1,funcparam2,funcparam3,funcparam4,funcparam5){
	var table = $("#" + tableid);
	var tbody = $(table.find(".tbody")[0]);
	var pagediv = findNode(table, "div.public_page",3);
	var tr = trhtml;
	var tbodyhtml = renderByDiv(tr, data);

	var uls = findNode(table, "ul.zxyj-dropdown-menu",3);
	if (uls != null) {
		/**
		 * 装载页面数据
		 */
		var columns = showTable($(uls.find(".toggle-vis")[0]), $.cookie("table_menu_" + $(table).attr("id")), tbodyhtml);
		if (tbodyhtml != null) {
			trs = $(tbodyhtml);
			tbodyhtml = "";
			$.each(trs, function(i, o) {
				if ($(o).prop('outerHTML') != null) {
					var tds = $(trs[i]).children();
					tds.css("display", "none");
					$(tds[0]).css("display", "");
					$.each(columns, function(j, b) {
						$(tds[columns[j]]).css("display", "");
					});
					tbodyhtml = tbodyhtml + $(o).prop('outerHTML');
				}
			});
		}
	}

	tbody.html(tbodyhtml);

	table = $("#" + tableid);

	/**
	 * 分页条
	 */
	if (pageFlag != false) {
		/**
		 * 12345页
		 */
		var numarray = new Array();

		if (data["pageNo"] < 4) {
			for (var i = 1; i <= data["totalPage"]; i++) {
				if (numarray.length < 5) {
					numarray.push(i);
				}
			}
		} else {
			for (var i = data["pageNo"] - 4; i <= data["totalPage"]; i++) {
				if (i < 1) {
					continue;
				}
				if (numarray.length < 7) {
					numarray.push(i);
				}
			}
			if (numarray.length == 7) {
				numarray.shift();
				numarray.shift();
			} else if (numarray.length == 6) {
				numarray.shift();
			}
		}
		var arr = {
			"numarray" : numarray
		}
		data["numarray"] = numarray;
		/**
		 * 处理分页条：1.获取分页的页面，2-渲染 3.删除旧的分页 4.显示新的分页条
		 */
		getPage(pageinfouri, "callback_rendertable3", trhtml, data, tableid, pageFlag, callbackFunction, funcparam1, funcparam2, funcparam3, funcparam4, funcparam5);
	}else{
		//无需分页
		if (callbackFunction != null) {
			var func = eval(callbackFunction);
			func.call(this, data,funcparam1,funcparam2,funcparam3,funcparam4,funcparam5);
		}
	}
	if(_load !=null){
		layer.close(_load);
	};
	
	var i18nEle = $(".i18n");
	 i18nEle.each(function() {
        // 根据i18n元素的 name 获取内容写入
		 var type = $(this).attr("type");
		 if(type != undefined && type == "text"){
			 $(this).attr("placeholder",$.i18n.prop($(this).attr('i18n')));
		 }else if(type != undefined && (type == "checkbox" || type == "radio")){
			//console.log("111");
			var parentHtml = $(this).parent();
			parentHtml.html(parentHtml.html().substring(parentHtml.html().indexOf("<input"),parentHtml.html().indexOf(">")+1)+$.i18n.prop($(this).attr('i18n')));
		 }else{
			 var htmlValue = "";
			 var textValue = $.trim($(this).html());
			 if(textValue.indexOf("：")>=0){
				 htmlValue = $.i18n.prop($(this).attr('i18n'))+"：";
			 }else{
				 htmlValue = $.i18n.prop($(this).attr('i18n'));
			 }
	         // 根据i18n元素的 name 获取内容写入
			 if(textValue.indexOf("*")>=0&&textValue.indexOf("<span")<0){
				 htmlValue += "<i class='errorFont'>*</i>";
			 }else if(textValue.indexOf("<span")>=0){
				 //console.log("111");
				 htmlValue += "&nbsp;"+textValue.substring(textValue.indexOf("<span"));
			 }
	         $(this).html(htmlValue);
		 }
    });
	 
}

/**
 * 
 * @param data :数据
 * @param tableid ：tableid
 * @param templateuri :tr的uri
 * @param pageFlag : 是否需要分页
 * @param pageinfouri ： 分页模板的uri
 * @param callbackFunction : 回调函数，固定第一位为数据，之后支持5个自定义参数，为funcparam1-5
 * @param funcparam1
 * @param funcparam2
 * @param funcparam3
 * @param funcparam4
 * @param funcparam5
 */
function callback_rendertable3(pageDiv,trhtml,data,tableid, pageFlag,callbackFunction,funcparam1,funcparam2,funcparam3,funcparam4,funcparam5){
	var table = $("#" + tableid);
	var tbody = $(table.find(".tbody")[0]);
	pageDiv = renderByDiv(pageDiv, data);
	pageDiv = pageDiv.replace("显示",$.i18n.prop("i18n.common.page.display")).replace("条目",$.i18n.prop("i18n.common.page.bar"))
	.replace("第",$.i18n.prop("i18n.common.page.no")).replace("页",$.i18n.prop("i18n.common.page.page"))
	.replace("共",$.i18n.prop("i18n.common.page.total")).replace("条",$.i18n.prop("i18n.common.page.bar"))
	.replace("跳至",$.i18n.prop("i18n.common.page.skip")).replace("页",$.i18n.prop("i18n.common.page.page"))
	.replace("上一页",$.i18n.prop("i18n.common.page.prepage")).replace("下一页",$.i18n.prop("i18n.common.page.nextpage"));
	var olddiv = findNode(table, "div.public_page", 3);
	if (olddiv != null && olddiv.length > 0) {
		olddiv.remove();
	}
	table.parent().after(pageDiv);
	var div = findNode(table, "div.public_page",3);
	if(div==null){
		return;
	}
	/**
	 * 绑定事件:每页显示多少条
	 */
	div.find("select").on("change", function(e) {
		findNode(table, ".searchAll").click();
	});

	/**
	 * go第N页
	 */
	$(div.find("input")[0]).on("blur", function(e) {
		var val = $.trim($(e.target).val());
		if (/^[1-9][\d]*$/.test(val)) {
			pageNo = val;
			findNode(table, ".searchAll").click();
			pageNo = 1;
		} else {
			$(e.target).val("");
		}
	});

	/**
	 * 上一页下一页
	 */
	div.find("a").bind("click", function(e) {
		pageNo = $(e.target).attr("num");
		findNode(table, ".searchAll").click();
		pageNo = 1;
	});
 
	if (callbackFunction != null) {
		var func = eval(callbackFunction);
		func.call(this, data,funcparam1,funcparam2,funcparam3,funcparam4,funcparam5);
	}
}
/**
 * 禁止手动调用，内部方法
 * 
 * @param obj
 * @returns
 */
function revertPage(div,execfunction,funcparam1,funcparam2,funcparam3,funcparam4,funcparam5,funcparam6,funcparam7,funcparam8,funcparam9,funcparam10) {
	/**
	 * shiro处理：
	 */
	//所有shiro标记url的获取
	var reg = /<shiro[^>]+>/ig;
	var shirobegin;
	var flag=true;
	var permissionarray = new Array();
		
	while(flag){//循环处理每套shiro
		shirobegin=reg.exec(div);
		if(shirobegin==null){
			flag=false;
		}else{
			permissionarray.push($(shirobegin[0]).attr("url"));
		}
	}
	div.replaceAll("{version}",version);
	if(permissionarray.length>0){
		var permissionresult = null;
		$.ajax({
			url : servicesUrl + "syspermission/hasPermission?permissions=" + permissionarray,
			type : 'post',
			dataType : 'json',
			async : true,
			beforeSend : function(xhr) {
				xhr.setRequestHeader('Authorization', author), 
				xhr.setRequestHeader('sys_source', sys_source)
			},
			success : function(result) {
				var permissions = new Array();
				if (result != null && result.code == 1) {
					permissionresult = result.message;
					if(permissionresult!=null && permissionresult!=""){
						permissions = eval("(" + permissionresult + ")");
					}
					//访问index.html  如果没有登陆，直接返回到login.html 页面从新登陆
					if(permissions.length == 0){
						doerrfun(result.code);
					}
				}	
				var validateflag;
				var if_begin_patt = /<shiro[^>]+>/;
				var if_end_patt = /<\/shiro>/ig;
				var begin_ret;
				var end_ret;
				var if_begin_str;
				var if_end_str;
				var test_str;
				var tempcontent;
				var end;
				var content_begin="";
				var content_end;
				var flag=true;
				while(flag){//循环处理每套shiro
					begin_ret=if_begin_patt.exec(div);
					if(begin_ret!=null){
						if_begin_str = begin_ret[0];
						
						//找结束标记
						if_end_patt.lastIndex=0;
						for(var j=0;j<300;j++){
							end_ret=if_end_patt.exec(div);
							tempcontent=div.substring(begin_ret.index+begin_ret[0].length,end_ret.index);
							content_begin=tempcontent.match(/<shiro[^>]+>/g);
							content_end=tempcontent.match(/<\/shiro>/g);
							if(content_begin==null||(content_end!=null && content_begin.length==content_end.length)){
								j=300;
							}
						}
						test_str=$(if_begin_str).attr("url");
						var okflag=false;
						
						if(permissions!=null&&permissions.length>0){
								for(var j=0;j<permissions.length;j++){
									if(permissions[j]==test_str){
										okflag=true;
										j=permissions.length;
									}
								}
						}
						if(okflag){
							div = div.substring(0,begin_ret.index)+div.substring(begin_ret.index+begin_ret[0].length,end_ret.index)+div.substring(end_ret.index+end_ret[0].length);
						}else{
							div = div.substring(0,begin_ret.index)+div.substring(end_ret.index+end_ret[0].length);
						}
					}else{
						flag=false;
					}
				}
				
				if(execfunction!=null && execfunction!=""){
					var func = eval(execfunction);
					func.call(this, div,funcparam1,funcparam2,funcparam3,funcparam4,funcparam5,funcparam6,funcparam7,funcparam8,funcparam9,funcparam10);
				}
			},
			error : function(result) {
				if (result.status == 401) {
					doerrfun(result.code);
				} else {
					layer.msg('网络连接异常，请刷新页面或稍后重试！');
				}
			}
		});
		}else{
			if(execfunction!=null && execfunction!=""){
				var func = eval(execfunction);
				func.call(this, div,funcparam1,funcparam2,funcparam3,funcparam4,funcparam5,funcparam6,funcparam7,funcparam8,funcparam9,funcparam10);
			}
		}
}

function renderByDiv(div, data) {
	/**
	 * list
	 */
	var reg = /<list([\s\S]*?)<\/list>/gm;
	var matcharray = div.match(reg);
	var tocopy = "";
	var result = "";
	for (var i = 0; matcharray != null && i < matcharray.length; i++) {
		result = "";
		var keyname = $(matcharray[i]).attr("item");
		var varname = $(matcharray[i]).attr("var");
		var data2;
		if(data==null||data==""){
			data2 = data;
		} else if (keyname == null || keyname == "") {
			data2 = data;
		} else {
			data2 = data[keyname];
		}
		eval("var regStr = /({[a-zA-Z0-9\.\_]+})/g");
		for (var j = 0; data2 != null && j < data2.length; j++) {
			tocopy = matcharray[i].replace(/<list([\s\S]*?)>/g, '').replace(/<\/list>/g, '');
			var regStrArray = matcharray[i].match(regStr);
			for (var k = 0; regStrArray != null && k < regStrArray.length; k++) {
				var str = regStrArray[k];
				str = str.substring(1, str.length - 1);
				var strarray = str.split(".");
				var val;
				if (str == varname + "\.index") {
					val = j + 1;
				} else if (strarray.length == 1 && strarray[0] == varname) {
					val = data2[j];
				} else if (strarray[0] == varname) {
					val = data2[j][strarray[1]];
				} else {
					val = data[strarray[0]];
				}
				val = (val == null ? '' : val);
				tocopy = tocopy.replace(regStrArray[k], val);
			}
			result = result + tocopy;
		}
		div = div.replaceAll(matcharray[i], result);
	}

	/**
	 * 普通赋值：
	 */
	reg = /{([\s\S]*?)}/g;
	matcharray = div.match(reg);
	for (var i = 0; matcharray != null && i < matcharray.length; i++) {
		var name = matcharray[i];
		if (name == null || name == '' || name == "{}")
			continue;
		var key = name.substring(1, name.length - 1);
		if (data == null) {
			div = div.replaceAll(name, '');
		} else {
			if(typeof  data[key]=="string"){
				div = div.replaceAll(name,data[key] == null ? '' : data[key].replaceAll('\'', '&apos;').replaceAll('\"', '&quot;'));
			}else{
				div = div.replaceAll(name,data[key] == null ? '' : data[key]);
			}
		}

	}

	/**
	 * if处理：
	 */
	reg = /<if([\s\S]*?)<\/if>/gm;
	matcharray = div.match(reg);
	for (var i = 0; matcharray != null && i < matcharray.length; i++) {
		if (eval($(matcharray[i]).attr("test"))) {
			div = div.replaceAll(matcharray[i], matcharray[i].replace(/<if([\s\S]*?)>/g, '').replace(/<\/if>/g, ''));
		} else {
			div = div.replaceAll(matcharray[i], "");
		}
	}
	return div;
}
/**
 * render方法的回调函数1,禁止调用
 * @param div
 * @param rootid
 * @param datauri
 * @param params
 * @param execfunction
 * @param funcparam1
 * @param funcparam2
 * @param funcparam3
 * @param funcparam4
 * @param funcparam5
 */
function callback_render1(div,rootid, datauri, params,execfunction,funcparam1,funcparam2,funcparam3,funcparam4,funcparam5){
	post(datauri, params,"callback_render2",div,rootid,execfunction,funcparam1,funcparam2,funcparam3,funcparam4,funcparam5);
}
/**
 * render方法的回调函数2,禁止调用
 * @param div
 * @param rootid
 * @param datauri
 * @param params
 * @param execfunction
 * @param funcparam1
 * @param funcparam2
 * @param funcparam3
 * @param funcparam4
 * @param funcparam5
 */
function callback_render2(data,div,rootid,execfunction,funcparam1,funcparam2,funcparam3,funcparam4,funcparam5){
	$("#" + rootid).html(renderByDiv(div, data));
	if (execfunction != null && execfunction != "") {
		var func = eval(execfunction);
		func.call(this, data, funcparam1, funcparam2, funcparam3, funcparam4, funcparam5);
	}
	 var i18nEle = $("#"+rootid).find(".i18n");
	 i18nEle.each(function() {
	        // 根据i18n元素的 name 获取内容写入
			 var type = $(this).attr("type");
			 console.log("2222");
			 if(type != undefined && type == "text"){
				 $(this).attr("placeholder",$.i18n.prop($(this).attr('i18n')));
			 }else{
				 var outerHTML = $(this).prop("outerHTML");
				 if(outerHTML.indexOf("textarea")>=0){
					 $(this).attr("placeholder",$.i18n.prop($(this).attr('i18n')));
				 }else{
					 var htmlValue = "";
					 var textValue = $.trim($(this).html());
					 if(textValue.indexOf("：")>=0){
						 htmlValue = $.i18n.prop($(this).attr('i18n'))+"：";
					 }else{
						 htmlValue = $.i18n.prop($(this).attr('i18n'));
					 }
			         // 根据i18n元素的 name 获取内容写入
					 if(textValue.indexOf("*")>=0&&textValue.indexOf("<span")<0){
						 htmlValue += "<i class='errorFont'>*</i>";
					 }else if(textValue.indexOf("<span")>=0){
						 //console.log("111");
						 var spanHtml = textValue.substring(textValue.indexOf("<span"));
						 if(spanHtml.indexOf("i18n")>=0){
							 htmlValue += "&nbsp;"+spanHtml.substring(spanHtml.indexOf("<span"),spanHtml.indexOf(">")+1)+$.i18n.prop($(spanHtml).attr("i18n"))+"</span>";
						 }else{
							 htmlValue += "&nbsp;"+textValue.substring(textValue.indexOf("<span"));
						 }
					 }
			         $(this).html(htmlValue);
				 }
			 }
	});
}

/**
 * 
 * @param obj
 *            待变成下拉框的jquery对象
 * @param nodataname
 *            未选择数据时下拉框里显示的值
 * @param datauri
 *            数据源uri
 * @param optionuri
 *            select里option的uri
 * @param queryname
 *            模糊查询时的变量名，比如nameCn
 * @param showname
 *            select框里显示的属性名，比如nameCn
 * @param setValue
 *            初始化赋值：如1，2，3
 * @param setText
 *            初始化显示文本：如 abc
 * @param boolflag:
 *            true:传入的就是jquery对象 null||false:传入的是id
 * @param noSearchValue: 0-有查询框 -1-无查询框
 */
function callback_querySelect2BySearch(options,objid, nodataname, datauri, queryname, showname, setValue, setText, boolflag,noSearchValue) {
	var thisobj = objid;
	if (boolflag == null || boolflag == false) {
		thisobj = $("#" + objid);
	}

	if (datauri.indexOf("?") > -1) {
		datauri = datauri + "&Authorization=" + author+"&sys_source="+sys_source;
//		datauri = datauri + "&sys_source="+sys_source;
	} else {
		datauri = datauri + "?Authorization=" + author+"&sys_source="+sys_source;
//		datauri = datauri +"?sys_source="+sys_source;
	}
	var param_name = queryname + "=";
	if (setValue != null && setValue != '') {
		thisobj.find("option").remove();
		thisobj.append($("<option value='" + setValue + "'>" + setText + "</option>").prop("selected", true));
	}else if (setText != null && setText != '') {
		thisobj.find("option").remove();
		thisobj.append($("<option>" + setText + "</option>").prop("selected", true));
	}
	
	var i18n = thisobj.attr("i18n");
	if(i18n != undefined && i18n != ""){
		nodataname =  $.i18n.prop(i18n);
	}
	var ddd = thisobj.select2({
		placeholder : nodataname,
		allowClear : true,
		minimumResultsForSearch : noSearchValue,
		ajax : {
			url : servicesUrl + datauri,
			dataType : 'json',
			type : 'post',
			delay : 250,
			data : function(params) {
				return param_name + $.trim(params.term);
			},
			beforeSend : function(xhr) {
				xhr.setRequestHeader('Authorization',author),
				xhr.setRequestHeader('sys_source', sys_source)
			},
			processResults : function(data, params) {
				if (data.length > 0) { // 如果没有查询到数据，将会返回空串
					var dataObj = eval(data); // 将接收到的JSON格式的字符串转换成JSON数据
					return {
						results : dataObj,
						more : false
					};
				} else {
					return {
						results : ""
					};
				}
			},
			cache : false
		},
		escapeMarkup : function(markup) {
			return markup;
		}, // let our custom formatter work
		minimumInputLength : 0,
		templateResult : formatAsText, // omitted for brevity, see the source
		// of this page
		templateSelection : resultFormatSelection
	// omitted for brevity, see the source of this page
	});
	//格式化查询结果,将查询回来的id跟name放在两个div里并同行显示，后一个div靠右浮动
	function formatAsText(item) {
		var option = renderByDiv(options, item);
//		var itemFmt ="<div style='display:inline;'>"+$(option).text()+"</div><div style='float:right;color:#4F4F4F;display:inline'>"+item.name+"</div>"  
		return	$(option).html();	
	}
	// 格式化选择结果
	function resultFormatSelection(medata) {
		return medata[showname];
	}
}


/**
 * 
 * @param obj
 *            待变成下拉框的jquery对象
 * @param nodataname
 *            未选择数据时下拉框里显示的值
 * @param datauri
 *            数据源uri
 * @param optionuri
 *            select里option的uri
 * @param queryname
 *            模糊查询时的变量名，比如nameCn
 * @param showname
 *            select框里显示的属性名，比如nameCn
 * @param setValue
 *            初始化赋值：如1，2，3
 * @param setText
 *            初始化显示文本：如 abc
 */
function callback_querySelect2multiple(options,objid, nodataname, datauri,queryname, showname, setValue, setText, boolflag) {
	var thisobj = objid;
	if (boolflag == null || boolflag == false) {
		thisobj = $("#" + objid);
	}
	if (datauri.indexOf("?") > -1) {
		datauri = datauri + "&Authorization=" + author+"&sys_source="+sys_source;
//		datauri = datauri + "&sys_source="+sys_source;
	} else {
		datauri = datauri + "?Authorization=" + author+"&sys_source="+sys_source;
//		datauri = datauri +"?sys_source="+sys_source;
	}
	var param_name = queryname + "=";
	if (setValue != null && setValue != '') {
		thisobj.find("option").remove();
		var vals = setValue.split(",");
		var tes = setText.split(",");
		for (var i = 0; i < vals.length; i++) {
			thisobj.append($("<option value='" + vals[i] + "' text='" + 123 + "'>" + tes[i] + "</option>").attr("selected", true));
		}
	}
	var ddd = thisobj.select2({
		tags : true,
		width:"90%",
		maximumSelectionLength : 100, // 最多能够选择的个数
		language : 'zh-CN',
		placeholder : nodataname,// 文本框的提示信息
		minimumInputLength : 0, // 至少输入n个字符，才去加载数据
		cache : false,
		ajax : {
			url : servicesUrl + datauri,
			dataType : 'json',
			type : 'post',
			delay : 250,
			data : function(params) {
				return param_name + $.trim(params.term);
			},
			beforeSend : function(xhr) {
				xhr.setRequestHeader('Authorization',author),
				xhr.setRequestHeader('sys_source', sys_source)
			},
			processResults : function(data, params) {
				if (data.length > 0) { // 如果没有查询到数据，将会返回空串
					var dataObj = eval(data); // 将接收到的JSON格式的字符串转换成JSON数据
					return {
						results : dataObj,
						more : false
					};
				} else {
					return {
						results : ""
					};
				}
			},
			cache : true
		},
		formatSearching : "查询中...",
		escapeMarkup : function(markup) {
			return markup;
		}, // let our custom formatter work
		templateResult : formatAsText, // omitted for brevity, see the source
		// of this page
		templateSelection : resultFormatSelection
	// omitted for brevity, see the source of this page
	});
	//格式化查询结果,将查询回来的id跟name放在两个div里并同行显示，后一个div靠右浮动
	function formatAsText(item) {
		var option = renderByDiv(options, item);
		return	$(option).html();	
	}
	// 格式化选择结果
	function resultFormatSelection(medata) {
		return medata[showname];
	}
	
};
/***************************************不可调用方法(结束)*****************************************/




/***************************************可调用方法(开始)*****************************************/

/**
 * 只获取页面
 * @param uri ：页面的路径
 * @param execfunction :获取到页面之后执行的回调函数
 * @param funcparam1 : 回调函数但第一位参数固定为返回值result,之后支持自定义参数10个，依次为funcparam1-10
 * @param funcparam2 : 
 * @param funcparam3
 * @param funcparam4
 * @param funcparam5
 * @param funcparam6
 * @param funcparam7
 * @param funcparam8
 * @param funcparam9
 * @param funcparam10
 */

function getPage(uri,execfunction,funcparam1,funcparam2,funcparam3,funcparam4,funcparam5,funcparam6,funcparam7,funcparam8,funcparam9,funcparam10) {
	if(uri.indexOf("?")>=0){
		uri = uri+"&_="+version;
	}else{
		uri = uri+"?_="+version;
	}
	$.ajax({
		url : baseUrl + uri,
		type : 'get',
		async : true,
		success : function(result) {
			if (result != null && result != '') {
				if(typeof(result) == "object"){
					if(execfunction!=null){
						var func = eval(execfunction);
						func.call(this, result,funcparam1,funcparam2,funcparam3,funcparam4,funcparam5,funcparam6,funcparam7,funcparam8,funcparam9,funcparam10);
					}
				}else{
					revertPage(result,execfunction,funcparam1,funcparam2,funcparam3,funcparam4,funcparam5,funcparam6,funcparam7,funcparam8,funcparam9,funcparam10);
				}
			}
		},
		error : function(result) {
			if (result.status == 401) {
				doerrfun(result.code);
			} else {
				layer.msg('网络连接异常，请刷新页面或稍后重试！');
			}
		}
	});
}

/**
 * 异步加载右边和body页面
 * @param uritowrapper:wrapper内容uri
 * @param uritobody:body内容uri
 */
function ajaxPage(uritowrapper, uritobody) {
	getPage(uritowrapper,"common_callback_ajaxPage",uritobody);
}

/**
 * 表单提交
 * @param formid ：对应form的id
 * @param uriPath ： 提交到的路径
 * @param execfunction ：提交完成后自定义的回调函数，固定第一个参数为返回的结果，之后支持自定义10个参数
 * @param funcparam1
 * @param funcparam2
 * @param funcparam3
 * @param funcparam4
 * @param funcparam5
 * @param funcparam6
 * @param funcparam7
 * @param funcparam8
 * @param funcparam9
 * @param funcparam10
 */
function postform(formid, uriPath, execfunction,funcparam1,funcparam2,funcparam3,funcparam4,funcparam5,funcparam6,funcparam7,funcparam8,funcparam9,funcparam10) {
	var returndata;
	$("#" + formid).ajaxSubmit({
		url : servicesUrl + uriPath,
		type : 'post',
		dataType : 'json',
		async : true,
		beforeSend : function(xhr) {
			xhr.setRequestHeader('Authorization',author),
			xhr.setRequestHeader('sys_source', sys_source)
		},
		success : function(result) {
			var func = eval(execfunction);
			func.call(this, result,funcparam1,funcparam2,funcparam3,funcparam4,funcparam5,funcparam6,funcparam7,funcparam8,funcparam9,funcparam10);
		},
		error : function(result) {
			if (result.status == 401) {
				doerrfun(result.code);
			} else {
				layer.msg('网络连接异常，请刷新页面或稍后重试！');
			}
		}
	});
}


/**
 * 获取数据
 * @param urlPath :posturi
 * @param params :参数 例："a=1&b=2&c=3"
 * @param execfunction :回调函数,第一个参数固定为result,之后支持自定义参数10个，依次为funcparam1-10
 * @param funcparam1
 * @param funcparam2
 * @param funcparam3
 * @param funcparam4
 * @param funcparam5
 * @param funcparam6
 * @param funcparam7
 * @param funcparam8
 * @param funcparam9
 * @param funcparam10
 * @returns
 */
function post(urlPath, params, execfunction,funcparam1,funcparam2,funcparam3,funcparam4,funcparam5,funcparam6,funcparam7,funcparam8,funcparam9,funcparam10) {
	var returndata;
	if (urlPath == null || urlPath == "") {
		if (execfunction != null && execfunction != "") {
			var func = eval(execfunction);
			func.call(this, null, funcparam1, funcparam2, funcparam3, funcparam4, funcparam5, funcparam6, funcparam7, funcparam8, funcparam9, funcparam10);
		}
		return null;
	}
	if (params == null || params == "") {
		parmas = {}
	}

	$.ajax({
		url : servicesUrl + urlPath,
		type : 'post',
		data : params,
		dataType : 'json',
		async : true,
		beforeSend : function(xhr) {
			xhr.setRequestHeader('Authorization', author), 
			xhr.setRequestHeader('sys_source', sys_source)
		},
		success : function(result) {
			if (execfunction != null && execfunction != "") {
				var func = eval(execfunction);
				func.call(this, result, funcparam1, funcparam2, funcparam3, funcparam4, funcparam5, funcparam6, funcparam7, funcparam8, funcparam9, funcparam10);
			}
		},
		error : function(result) {
			if(_load!=null){
				layer.close(_load);
			}
			if (result!=null && result.status == 200) {
				if(execfunction!=null && execfunction !=""){
					var func = eval(execfunction);
					func.call(this, result,funcparam1,funcparam2,funcparam3,funcparam4,funcparam5,funcparam6,funcparam7,funcparam8,funcparam9,funcparam10);
				}
			} else if (result!=null && result.status == 401) {
				doerrfun(result.code);
			} else {
 				layer.msg('网络连接异常，请刷新页面或稍后重试！');
			}
		}
	});
}

/**
 * 表格展示(分页模板1，全元素)
 * @param datauri :表格数据来源uri
 * @param params :获取数据的参数
 * @param tableid : 目标表格的id
 * @param templateuri ： 行元素html的uri
 * @param pageFlag : 是否需要分页
 * @param callbackFunction ：回调函数，第一位为datauri获取的数据，之后支持5个自定义参数，为funcparam1-5
 * @param funcparam1
 * @param funcparam2
 * @param funcparam3
 * @param funcparam4
 * @param funcparam5
 */
function renderTable(datauri, params, tableid, templateuri, pageFlag,callbackFunction,funcparam1,funcparam2,funcparam3,funcparam4,funcparam5) {
		_load = layer.load(1, {
			shade: [0.4,'#fff'] //0.1透明度的白色背景
		});
	realRenderTable(datauri, params, tableid, templateuri, pageFlag, "common/pageinfo.html",callbackFunction,funcparam1,funcparam2,funcparam3,funcparam4,funcparam5);
}
/**
 * 表格展示(分页模板2)
 * @param datauri :表格数据来源uri
 * @param params :获取数据的参数
 * @param tableid : 目标表格的id
 * @param templateuri ： 行元素html的uri
 * @param pageFlag : 是否需要分页
 * @param callbackFunction ：回调函数，第一位为datauri获取的数据，之后支持5个自定义参数，为funcparam1-5
 * @param funcparam1
 * @param funcparam2
 * @param funcparam3
 * @param funcparam4
 * @param funcparam5
 */
function renderTableNoPageSize(datauri, params, tableid, templateuri, pageFlag,callbackFunction,funcparam1,funcparam2,funcparam3,funcparam4,funcparam5) {
	realRenderTable(datauri, params, tableid, templateuri, pageFlag, "common/pageinfo2.html",callbackFunction,funcparam1,funcparam2,funcparam3,funcparam4,funcparam5);
}

function realRenderTable(datauri, params, tableid, templateuri, pageFlag, pageinfouri,callbackFunction,funcparam1,funcparam2,funcparam3,funcparam4,funcparam5) {
	$("#" + tableid+' input').removeAttr("checked");
	var table = $("#" + tableid);
	var tbody = $(table.find(".tbody")[0]);
	var pagediv = findNode(table, "div.public_page",3);
	var tempparams="";
	var orderColumn = "";
	var c = $(table.find("th.tableHead_desc")[0]);
	
	
	if(c!=null && c.length>0){
		if((c.attr("ordercolumn").indexOf("PRICE") >= 0 ) || (c.attr("ordercolumn").indexOf("price") >= 0 )){
			orderColumn="orderColumn= "+c.attr("ordercolumn")+" desc &";
		}else{
			orderColumn="orderColumn= convert(  "+c.attr("ordercolumn")+" USING gbk ) desc &";
		}
	}else{
		c = $(table.find("th.tableHead_asc")[0]);
		if(c!=null && c.length>0){
			if(c.attr("ordercolumn").indexOf("PRICE") >= 0 || (c.attr("ordercolumn").indexOf("price") >= 0 )){
				orderColumn="orderColumn= "+c.attr("ordercolumn")+" asc &";
			}else{
				orderColumn="orderColumn=CONVERT(  "+c.attr("ordercolumn")+" USING gbk ) asc &";
			}
		}
	}
 
	tempparams = orderColumn;
	if(pagediv!=null && pagediv.length>0){
		var size = pagediv.find("select").val();
		if(size!=null && size.length>0){
			tempparams = tempparams+"pageSize="+size+"&";
		}
	}
	if(params==null || params==""){
		params=tempparams+"pageNo="+pageNo+"&"+"pageSize="+pageSize;
	}else{
		params=params+"&"+tempparams+"pageNo="+pageNo;
	}
	post(datauri, params,"callback_rendertable",tableid, templateuri, pageFlag, pageinfouri,callbackFunction,funcparam1,funcparam2,funcparam3,funcparam4,funcparam5);
}




/**
 * 
 * @param rootid :要渲染的id节点
 * @param divuri ：用于渲染的html
 * @param datauri ： 用于渲染的数据uri
 * @param params :取数据时需要的参数
 * @param callbackFunction ：渲染后的回调函数，第一位置固定为data,之后支持5个自定义参数
 * @param funcparam1
 * @param funcparam2
 * @param funcparam3
 * @param funcparam4
 * @param funcparam5
 */
function render(rootid, divuri, datauri, params,callbackFunction,funcparam1,funcparam2,funcparam3,funcparam4,funcparam5) {
	getPage(divuri,"callback_render1",rootid, datauri, params,callbackFunction,funcparam1,funcparam2,funcparam3,funcparam4,funcparam5);
}


/**
 * 
 * @param obj
 *            待变成下拉框的jquery对象
 * @param nodataname
 *            未选择数据时下拉框里显示的值
 * @param datauri
 *            数据源uri
 * @param optionuri
 *            select里option的uri
 * @param queryname
 *            模糊查询时的变量名，比如nameCn
 * @param showname
 *            select框里显示的属性名，比如nameCn
 * @param setValue
 *            初始化赋值：如1，2，3
 * @param setText
 *            初始化显示文本：如 abc
 * @param boolflag:
 *            true:传入的就是jquery对象 null||false:传入的是id
 */
function querySelect2BySearch(objid, nodataname, datauri, optionuri, queryname, showname, setValue, setText, boolflag) {
	getPage(optionuri,"callback_querySelect2BySearch",objid, nodataname, datauri, queryname, showname, setValue, setText, boolflag,0);
}

/**
 * 
 * @param obj
 *            待变成下拉框的jquery对象
 * @param nodataname
 *            未选择数据时下拉框里显示的值
 * @param datauri
 *            数据源uri
 * @param optionuri
 *            select里option的uri
 * @param queryname
 *            模糊查询时的变量名，比如nameCn
 * @param showname
 *            select框里显示的属性名，比如nameCn
 * @param setValue
 *            初始化赋值：如1，2，3
 * @param setText
 *            初始化显示文本：如 abc
 */
function querySelect2NoSearch(objid, nodataname, datauri, optionuri, queryname, showname, setValue, setText, boolflag) {
	getPage(optionuri,"callback_querySelect2BySearch",objid, nodataname, datauri, queryname, showname, setValue, setText, boolflag,-1);
};

/**
 * 
 * @param obj
 *            待变成下拉框的jquery对象
 * @param nodataname
 *            未选择数据时下拉框里显示的值
 * @param datauri
 *            数据源uri
 * @param optionuri
 *            select里option的uri
 * @param queryname
 *            模糊查询时的变量名，比如nameCn
 * @param showname
 *            select框里显示的属性名，比如nameCn
 * @param setValue
 *            初始化赋值：如1，2，3
 * @param setText
 *            初始化显示文本：如 abc
 */
function querySelect2multiple(objid, nodataname, datauri, optionuri, queryname, showname, setValue, setText, boolflag) {
	getPage(optionuri,"callback_querySelect2multiple",objid, nodataname, datauri, queryname, showname, setValue, setText, boolflag);
};
function openUrl(url){
	if(url!=null && url!=""){
		var newwindow = window.open();
		if(url.indexOf("http:")!=0){
			url=servicesUrl+url;
		}
		if(author==null){
			author="";
		}
		if(sys_source==null){
			sys_source="";
		}
		var newform = "<form action=\""+url+"\" method=\"post\">"
			+"<input type=\"text\" style=\"display:none;\" name=\"Authorization\" value=\""+author+"\">"
			+"<input type=\"text\" style=\"display:none;\"  name=\"sys_source\" value=\""+sys_source+"\">"
			+"<button type=\"submit\" style=\"display:none;\" value=\"提交\"></button>"
			+"</form>";
		$(newwindow.document).find("body").append(newform);
		$(newwindow.document).find("button").click();
	}
}

function initcheckAll(){
	// 全选按钮
	$(".checkAll input").unbind("click");
	$(".checkAll input").on("click",function(e) {
				var trs = $($(this).parents("table")[0]).find("tbody").find("tr");
				$.each(trs,function(i,o){
					$($(o).children("td")[0]).find('input:checkbox').prop('checked',$(e.target).prop("checked"));
					if($(e.target).prop("checked"))
					{
						$(o).addClass("info");
					}
					else{
						$(o).removeClass("info");
					}
					
				});
			});
}

function initSingTrClick(){
	// 单行选中
	$('.maintable tbody').unbind('click');
	$('.maintable tbody').on('click',
			function(e) {
				var $tr = $($(e.target).parents('tr')[0]);
				$tr.toggleClass("info");
				if($(e.target).attr("type")!=null && $(e.target).attr("type")=="checkbox"){
					var $tmp = $(this).parent("table").find(
					'[name=checkList]:checkbox');
					$(this).parent("table").find('.checkAll input:checkbox').prop(
							'checked',$tmp.length == $tmp.filter(':checked').length);
					return true;
				}
//				var $tr = $($(e.target).parents('td')[0]);
//				$tr.toggleClass('info');
				var checkbox = $tr.find('[name=checkList]:checkbox');
				checkbox.prop('checked',
						checkbox.prop('checked') == true ? false : true);
				var $tmp = $(this).parent("table").find(
						'[name=checkList]:checkbox');
				$(this).parent("table").find('.checkAll input:checkbox').prop(
						'checked',$tmp.length == $tmp.filter(':checked').length);
			});
}


/**
 * 富文本初始化
 */

function initToolbarBootstrapBindings() {
	var fonts = [ 'Serif', 'Sans', 'Arial', 'Arial Black', 'Courier',
			'Courier New', 'Comic Sans MS', 'Helvetica', 'Impact',
			'Lucida Grande', 'Lucida Sans', 'Tahoma', 'Times',
			'Times New Roman', 'Verdana' ], fontTarget = $('[title=Font]')
			.siblings('.dropdown-menu');
	$
			.each(
					fonts,
					function(idx, fontName) {
						fontTarget
								.append($('<li><a data-edit="fontName ' + fontName +'" style="font-family:\''+ fontName +'\'">'
										+ fontName + '</a></li>'));
					});
	$('a[title]').tooltip({
		container : 'body'
	});
	$('.dropdown-menu input').click(function() {
		return false;
	}).change(
			function() {
				$(this).parent('.dropdown-menu').siblings(
						'.dropdown-toggle').dropdown('toggle');
			}).keydown('esc', function() {
		this.value = '';
		$(this).change();
	});

	$('[data-role=magic-overlay]').each(
			function() {
				var overlay = $(this), target = $(overlay.data('target'));
				overlay.css('opacity', 0).css('position', 'absolute')
						.offset(target.offset()).width(target.outerWidth())
						.height(target.outerHeight());
			});
	if ("onwebkitspeechchange" in document.createElement("input")) {
		var editorOffset = $('#editor').offset();
		$('#voiceBtn').css('position', 'absolute').offset({
			top : editorOffset.top,
			left : editorOffset.left + $('#editor').innerWidth() - 35
		});
	} else {
		$('#voiceBtn').hide();
	}
};

function showErrorAlert(reason, detail) {
	var msg = '';
	if (reason === 'unsupported-file-type') {
		msg = "Unsupported format " + detail;
	} else {
		console.log("error uploading file", reason, detail);
	}
	$(
			'<div class="alert"> <button type="button" class="close" data-dismiss="alert">&times;</button>'
					+ '<strong>File upload error</strong> '
					+ msg
					+ ' </div>').prependTo('#alerts');
};


function open_modal() {
	setTimeout(function() {
		$('body').addClass('modal-open');
	}, 500);
}
/***************************************可调用方法(结束)*****************************************/
