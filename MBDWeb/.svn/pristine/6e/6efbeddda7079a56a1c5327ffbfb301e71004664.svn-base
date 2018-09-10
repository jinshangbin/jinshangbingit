/*
* @Author: Administrator
* @Date:   2016-05-14 15:40:11
* @Last Modified by:   Administrator
* @Last Modified time: 2016-05-17 14:19:42
*/
function PreviewImage(fileObj,imgPreviewId,divPreviewId){
    var allowExtention=".jpg,.bmp,.gif,.png";
    var extention=fileObj.value.substring(fileObj.value.lastIndexOf(".")+1).toLowerCase();            
    var browserVersion= window.navigator.userAgent.toUpperCase();
    if(allowExtention.indexOf(extention)>-1){ 
        if(fileObj.files){
            if(window.FileReader){
                var reader = new FileReader(); 
                reader.onload = function(e){
                    document.getElementById(imgPreviewId).setAttribute("src",e.target.result);
                }  
                reader.readAsDataURL(fileObj.files[0]);
            }else if(browserVersion.indexOf("SAFARI")>-1){
                alert("");
            }
        }else if (browserVersion.indexOf("MSIE")>-1){
            if(browserVersion.indexOf("MSIE 6")>-1){//ie6
                document.getElementById(imgPreviewId).setAttribute("src",fileObj.value);
            }else{//ie[7-9]
                fileObj.select();
                if(browserVersion.indexOf("MSIE 9")>-1)
                    fileObj.blur();
                var newPreview =document.getElementById(divPreviewId+"New");
                if(newPreview==null){
                    newPreview =document.createElement("div");
                    newPreview.setAttribute("id",divPreviewId+"New");
                    newPreview.style.width = document.getElementById(imgPreviewId).width+"px";
                    newPreview.style.height = document.getElementById(imgPreviewId).height+"px";
                    newPreview.style.border="solid 1px #d2e2e2";
                }
                newPreview.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale',src='" + document.selection.createRange().text + "')";                            
                var tempDivPreview=document.getElementById(divPreviewId);
                tempDivPreview.parentNode.insertBefore(newPreview,tempDivPreview);
                tempDivPreview.style.display="none";                    
            }
        }else if(browserVersion.indexOf("FIREFOX")>-1){//firefox
            var firefoxVersion= parseFloat(browserVersion.toLowerCase().match(/firefox\/([\d.]+)/)[1]);
            if(firefoxVersion<7){//firefox7ÒÔÏÂ°æ±¾
                document.getElementById(imgPreviewId).setAttribute("src",fileObj.files[0].getAsDataURL());
            }else{//firefox7.0+                    
                document.getElementById(imgPreviewId).setAttribute("src",window.URL.createObjectURL(fileObj.files[0]));
            }
        }else{
            document.getElementById(imgPreviewId).setAttribute("src",fileObj.value);
        }         
    }else{
        layer.alert("请上传图片！");
        fileObj.value="";
        if(browserVersion.indexOf("MSIE")>-1){
            fileObj.select();
            document.selection.clear();
        }                
        fileObj.outerHTML=fileObj.outerHTML;
    }
}

var imgType = ["JPG", "PNG"];
var txtType = ["DOCX", "XLSX", "PDF"];
var fileSize = 3;

/**
 * 文件上传共通方法
 * @param obj 文件选择框对象
 * @param flag 文件类型flag标识(1:图片)
 * @param size 文件大小
 */
function fileUpload(obj, flag, size) {
	obj.fileupload({
		autoUpload: true,//是否自动上传
		dataType : 'json',
		url:servicesUrl+"common/uploadfile",//上传地址
		submit: function(e, data) {
			var check = true;
			if(data.files != null && data.files.length > 0) {
				$.each(data.files, function(i, file) {
					var fileName = file.name;
					var suffix = fileName.substring(fileName.lastIndexOf(".") + 1).toUpperCase();
					if(flag == 1 && $.inArray(suffix, imgType) < 0) {
						layer.alert($.i18n.prop("i18n.customer.freLevel.select") + imgType.join(",") + $.i18n.prop("i18n.customer.freLevel.selectType"));
						check = false;
						return;
					} else if(flag == 2 && $.inArray(suffix, txtType) < 0) {
						layer.alert($.i18n.prop("i18n.customer.freLevel.select") + txtType.join(",") + $.i18n.prop("i18n.customer.freLevel.selectType"));
						check = false;
						return;
					}
					
					var uploadSize = file.size;
					size = size == null ? fileSize : size;
					if(uploadSize > (size * 1024 * 1024)) {
						layer.alert($.i18n.prop("i18n.customer.freLevel.selectMax") + size + "M");
						check = false;
					}
				});
			} else {
				check = false;
			}
			
			return check;
		},
		done : function(e,data) {//设置文件上传完毕事件的回调函数
			if(data.result.code==1){
				$(this).siblings("input").val(data.result.validateMap.fileName);
				if($(this).parents("a").siblings("div").find("img")!=undefined){
					$(this).parents("a").siblings("div").find("img").attr("src",data.result.validateMap.fileUrl);
				}
			}else{
				layer.alert($.i18n.prop("i18n.customer.freLevel.selecterr"));
			}
		}
//	,
//		progressall: function (e, data) {
//			alert(data.result.validateMap.total);
//            var progress = parseInt(data.loaded / data.total * 100, 10);
//            $('.progress .bar').css(
//                'width',
//                progress + '%'
//            );
//            $('.progress .bar').text(progress + '%');
//        }
	});
}



/**
 * 发post请求的文件上传 
 * @param file  文件
 * 
 */
function fileUploadPost(file) {
	 data = new FormData();
     data.append("file", file);
     $.ajax({
         data: data,
         type: "POST",
         url: servicesUrl+"common/uploadfile",
         cache: false,
         contentType: false,
         processData: false,
         success: function(res) {
        	 var obj = jQuery.parseJSON(res);
        	 var imageurl= obj.validateMap.fileUrl;
        	 $('.summernote').summernote('editor.insertImage',imageurl);
         }
     });
}
