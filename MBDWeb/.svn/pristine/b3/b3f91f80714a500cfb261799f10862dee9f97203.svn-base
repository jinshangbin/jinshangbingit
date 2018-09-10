/**
 * @author jinshangbin 初始化页面元素
 */
function initSys() {

	render("to_r", "pages/download/downLoad_r2.html", null, null,
			"callback_initSys");

}

/**
 * initSys的回调函数
 * 
 * @param res
 */
function callback_initSys(res) {
	makeCode();
}

function makeCode() {
	var qrcode = new QRCode(document.getElementById("qrcode"), {
		width : 150,
		height : 150
	});

	qrcode.makeCode(baseUrl + "pages/download/downMobile.html");
}

function submit(system) {
	$.get(servicesUrl + "getVersion", {
		"system" : system,
		"version" : "V1.0.0"
	}, function(res) {
		window.location.href = res.data.fileUrl;
	});
}