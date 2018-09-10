/**
 * @author jinshangbin
 * 初始化页面元素
 */
function initSys(){
	
	render("to_r", "pages/client/client_r2.html", null, null, "callback_initSys");
	
}

/**
 * initSys的回调函数 
 * @param res
 */
function callback_initSys(res){
	$('.file').fileinput({
	    language: 'zh',
	    showCaption: true,
	    showUpload: false,
	    showRemove: true,
	    showClose: true,
	    layoutTemplates:{
	        actionDelete: ''
	    },
	    browseClass: 'btn btn-primary'
	});
}

function clientSubmit(){
	var formData = new FormData();              //定义formData对象 添加参数及上传的文件
	
	var newVersion = $("#newVersion").val();
	formData.append("newVersion",newVersion);
	
	var androidPackage = $("#androidPackage")[0].files[0];
	formData.append("androidPackage",androidPackage);
	
	var windowsPackage = $("#windowsPackage")[0].files[0];
	formData.append("windowsPackage",windowsPackage);
	
	var macPackage = $("#macPackage")[0].files[0];
	formData.append("macPackage",macPackage);
	
	var iPhonePackage = $("#iPhonePackage")[0].files[0];
	formData.append("iPhonePackage",iPhonePackage);
	
	var upLevelFlag = 0;
	if($("input[type='checkbox']").is(':checked')){
		upLevelFlag = 1;
	}
	formData.append("upLevelFlag",upLevelFlag);
	
	$.ajax({  
         url: servicesUrl + 'upload/clientUpload' ,  
         type: 'post',  
         data: formData,  
         cache: false,
         processData: false,
         contentType: false,
         async: false
    }).done(function(res) {
        if(res.code == 0){
        	layer.msg("文件上传完成");
        }
    }).fail(function(res) {
    	layer.msg("文件上传失败");
    });
}

