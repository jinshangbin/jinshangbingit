

var imgType = ["JPG", "PNG"];
var txtType = ["DOCX", "XLSX", "PDF"];
var exeType = ["EXE"];
var zipType = ["ZIP", "RAR"];
var fileSize = 3;


/**
 * 客户端上传
 * @param obj 文件选择框对象
 * @param flag 文件类型flag标识
 * @param size 文件大小
 */
function fileUploadEXE(obj, flag, size) {
	obj.fileupload({
		autoUpload: true,//是否自动上传
		dataType : 'json',
		url:servicesUrl+"common/uploadfileclient",//上传地址
		submit: function(e, data) {
			_load = layer.load(1, {
				shade : [ 0.4, '#fff' ]
			});
			var check = true;
			if(data.files != null && data.files.length > 0) {
				$.each(data.files, function(i, file) {
					var fileName = file.name;
					var suffix = fileName.substring(fileName.lastIndexOf(".") + 1).toUpperCase();
					if(flag == 3 && $.inArray(suffix, zipType) < 0) {
						layer.close(_load);
						layer.alert("请选择" + zipType.join(",") + "类型的文件");
						check = false;
						return;
					}
					var uploadSize = file.size;
					size = size == null ? fileSize : size;
					if(uploadSize > (size * 1024 * 1024)) {
						layer.close(_load);
						layer.alert("上传文件不能大于" + size + "M");
						check = false;
					}
				});
			} else {
				layer.close(_load);
				check = false;
			}
			
			return check;
		},
		done : function(e,data) {//设置文件上传完毕事件的回调函数
			if(data.result.code==1){
				layer.close(_load);
				$(this).siblings("input").val(data.result.validateMap.fileName);
				$("#pcSoftUrl").val(data.result.validateMap.fileUrl);
				if($(this).parent("a").siblings("div").find("img")!=undefined){
					$(this).parent("a").siblings("div").find("img").attr("src",data.result.validateMap.fileUrl);
				}
				$("input[name = 'pcSoft']").val(data.result.validateMap.fileName);
				var inputval = $("input[name = 'pcSoft']").val();
				if(inputval != ''){
					$(".load_btn").html("下载客户端");
				}
			}else{
				layer.close(_load);
				layer.alert("上传失败!");
			}
		}
	});
}
