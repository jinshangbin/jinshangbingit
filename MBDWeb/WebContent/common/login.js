$(document).ready(function() {
	var userName = myWeb.Storage.getValueSession('loginname');
	var password = myWeb.Storage.getValueSession('password');
	var rememberMe = myWeb.Storage.getValueSession('rememberMe');
	$("#loginname").val(userName);
	//$("#password").val(password);
	if(rememberMe != null){
		if(rememberMe == "1"){
			$("#rememberMe").attr("checked", true);
		}else{
			$("#rememberMe").attr("checked", false);
		}
	}
	
});


/**
 * 易康管理员登录
 */
function doLogin() {
	// 验证表单数据
	if (Validator.Validate('loginFrm', 1)) {
	
		var password = hex_md5($("#password").val());
		var params = {
				loginname : $("#loginname").val(),
				password : password
			}
		post("operator/login", params,"callback_login");
	}
	
}

/**
 * 回调函数
 */
function callback_login(res){
		var result = res;
		if(result.errorCode == 0){
			myWeb.Storage.setValueSession("userId", result.data.id);
			myWeb.Storage.setValueSession("loginname", result.data.loginName);
			myWeb.Storage.setValueSession("password", result.data.password);
			myWeb.Storage.setValueSession("sysFlag", result.data.sysFlag);
			
			myWeb.Storage.setValueSession("menus", result.data.menuString);
			
			if(result.data.sysFlag == 2){
				myWeb.Storage.setValueSession("insurerName", result.data.currInsurerName);
				myWeb.Storage.setValueSession("insurerId", result.data.currInsurerId);
			}
			window.location.href = baseUrl + "index.html";
		}else{
			layer.alert(result.errormsg);
			
		}
}
