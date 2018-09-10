﻿function SelCity(obj,e) {
    var ths = obj;
    var dal = '<div class="_citys"><span title="关闭" id="cColse" >×</span><ul id="_citysheng" class="_citys0"><li class="citySel">省份</li><li>城市</li><li>区县</li></ul><div id="_citys0" class="_citys1"></div><div style="display:none" id="_citys1" class="_citys1"></div><div style="display:none" id="_citys2" class="_citys1"></div></div>';
    Iput.show({ id: ths, event: e, content: dal,width:"470"});
    $("#cColse").click(function () {
        Iput.colse();
    });
    var tb_province = [];
    var data = post('area/querylist','pid=0');//取出省份列表数据
    var b =data;
    for (var i = 0, len = b.length; i < len; i++) {
        tb_province.push('<a data-level="0" data-id="' + b[i].id + '" data-name="' + b[i].nameCn + '">' + b[i].nameCn + '</a>');
    }
    $("#_citys0").append(tb_province.join(""));
    $("#_citys0 a").click(function () {
        var g = getCity($(this));
        $("#_citys1 a").remove();
        $("#_citys1").append(g);
        $("._citys1").hide();
        $("._citys1:eq(1)").show();
        $("#_citys0 a,#_citys1 a,#_citys2 a").removeClass("AreaS");
        $(this).addClass("AreaS");
        var lev = $(this).data("name");
        ths.value = $(this).data("name");
        if (document.getElementById("hcity") == null) {
            var hcitys = $('<input>', {
                type: 'hidden',
                name: "hcity",
                "data-id": $(this).data("id"),
                id: "hcity",
                val: lev
            });
            var proIds = $('<input>', {
                type: 'hidden',
                id: "proIds",
                val: $(this).data("id")
            });
            $(ths).after(proIds);
            $(ths).after(hcitys);
        }
        else {
            $("#hcity").val(lev);
            $("#hcity").attr("data-id", $(this).data("id"));
        }
        $("#_citys1 a").click(function () {
            $("#_citys1 a,#_citys2 a").removeClass("AreaS");
            $(this).addClass("AreaS");
            var lev =  $(this).data("name");
            if (document.getElementById("hproper") == null) {
                var hcitys = $('<input>', {
                    type: 'hidden',
                    name: "hproper",
                    "data-id": $(this).data("id"),
                    id: "hproper",
                    val: lev
                });
                var cityIds = $('<input>', {
                    type: 'hidden',
                    id: "cityIds",
                    val: $(this).data("id")
                });
                $(ths).after(cityIds);
                $(ths).after(hcitys);
            }
            else {
                $("#hproper").attr("data-id", $(this).data("id"));
                $("#hproper").val(lev);
            }
            var bc = $("#hcity").val();
            ths.value = bc+ "-" + $(this).data("name");

            var ar = getArea($(this));

            $("#_citys2 a").remove();
            $("#_citys2").append(ar);
            $("._citys1").hide();
            $("._citys1:eq(2)").show();

            $("#_citys2 a").click(function () {
                $("#_citys2 a").removeClass("AreaS");
                $(this).addClass("AreaS");
                var lev = $(this).data("name");
                if (document.getElementById("harea") == null) {
                    var hcitys = $('<input>', {
                        type: 'hidden',
                        name: "harea",
                        "data-id": $(this).data("id"),
                        id: "harea",
                        val: lev
                    });
                    var disIds = $('<input>', {
                        type: 'hidden',
                        id: "disIds",
                        val: $(this).data("id")
                    });
                    $(ths).after(disIds);
                    $(ths).after(hcitys);
                }
                else {
                    $("#harea").val(lev);
                    $("#harea").attr("data-id", $(this).data("id"));
                }
                var bc = $("#hcity").val();
                var bp = $("#hproper").val();
                ths.value = bc + "-" + bp + "-" + $(this).data("name");
                Iput.colse();
            });

        });
    });
    $("#_citysheng li").click(function () {
        $("#_citysheng li").removeClass("citySel");
        $(this).addClass("citySel");
        var s = $("#_citysheng li").index(this);
        $("._citys1").hide();
        $("._citys1:eq(" + s + ")").show();
    });
}



function getCity(obj) {
    var c = obj.data('id');//获取省份ID
    var citydata = post('area/querylist','pid='+c);//取出城市列表数据
    var f = citydata;
    var g = '';
    for (var j = 0, clen = f.length; j < clen; j++) {
        g += '<a data-level="1" data-id="' + f[j].id + '" data-name="' + f[j].nameCn + '" title="' + f[j].nameCn + '">' + f[j].nameCn + '</a>'
    }
    $("#_citysheng li").removeClass("citySel");
    $("#_citysheng li:eq(1)").addClass("citySel");
    return g;
}
function getArea(obj) {
    var c = obj.data('id');
    var g = '';
    var disdata = post('area/querylist','pid='+c);//取出区县列表数据
    var f = disdata;
    for (var j = 0, clen = f.length; j < clen; j++) {
        g += '<a data-level="1" data-id="' + f[j].id + '" data-name="' + f[j].nameCn + '" title="' + f[j].nameCn + '">' + f[j].nameCn + '</a>'
    }
    $("#_citysheng li").removeClass("citySel");
    $("#_citysheng li:eq(2)").addClass("citySel");
    return g;
}

function selCity_one(obj) {
	var ths = obj;
	$("#_citys").show(); //打开
	$('#_citys0').html('');
	$("#cColse").click(function() {
		$("#_citys").hide();		//关闭
	});
	/*tal 切换*/
	$("#_citysheng li").click(function() {
		$("#_citysheng li").removeClass("citySel");
		$(this).addClass("citySel");
		var s = $("#_citysheng li").index(this);
		$("._citys1").hide();
		$("._citys1:eq(" + s + ")").show();
	});
	 var tb_province = [];
	    var data = post('area/querylist','pid=0');//取出省份列表数据
	    var b =data;
	    for (var i = 0, len = b.length; i < len; i++) {
	        tb_province.push('<a data-level="0" data-id="' + b[i].id + '" data-name="' + b[i].nameCn + '">' + b[i].nameCn + '</a>');
	    }
	    $("#_citys0").append(tb_province.join(""));
	    $("#_citys0 a").click(function () {
	        var g = getCity($(this));
	        $("#_citys1 a").remove();
	        $("#_citys1").append(g);
	        $("._citys1").hide();
	        $("._citys1:eq(1)").show();
	        $("#_citys0 a,#_citys1 a,#_citys2 a").removeClass("AreaS");
	        $(this).addClass("AreaS");
	        var lev = $(this).data("name");
	        ths.value = $(this).data("name");
	        if (document.getElementById("hcity") == null) {
	            var hcitys = $('<input>', {
	                type: 'hidden',
	                name: "hcity",
	                "data-id": $(this).data("id"),
	                id: "hcity",
	                val: lev
	            });
	            var proId = $('<input>', {
                    type: 'hidden',
                    name: "proId",
                    val: $(this).data("id")
                });
                $(ths).after(proId);
	            $(ths).after(hcitys);
	        }
	        else {
	            $("#hcity").val(lev);
	            $("#hcity").attr("data-id", $(this).data("id"));
	        }
	        $("#_citys1 a").click(function () {
	            $("#_citys1 a,#_citys2 a").removeClass("AreaS");
	            $(this).addClass("AreaS");
	            var lev =  $(this).data("name");
	            if (document.getElementById("hproper") == null) {
	                var hcitys = $('<input>', {
	                    type: 'hidden',
	                    name: "hproper",
	                    "data-id": $(this).data("id"),
	                    id: "hproper",
	                    val: lev
	                });
	                var cityId = $('<input>', {
                        type: 'hidden',
                        name: "cityId",
                        val: $(this).data("id")
                    });
                    $(ths).after(cityId);
	                $(ths).after(hcitys);
	            }
	            else {
	                $("#hproper").attr("data-id", $(this).data("id"));
	                $("#hproper").val(lev);
	            }
	            var bc = $("#hcity").val();
	            ths.value = bc+ "-" + $(this).data("name");

	            var ar = getArea($(this));

	            $("#_citys2 a").remove();
	            $("#_citys2").append(ar);
	            $("._citys1").hide();
	            $("._citys1:eq(2)").show();

	            $("#_citys2 a").click(function () {
	                $("#_citys2 a").removeClass("AreaS");
	                $(this).addClass("AreaS");
	                var lev = $(this).data("name");
	                if (document.getElementById("harea") == null) {
	                    var hcitys = $('<input>', {
	                        type: 'hidden',
	                        name: "harea",
	                        "data-id": $(this).data("id"),
	                        id: "harea",
	                        val: lev
	                    });
	                    var disId = $('<input>', {
	                        type: 'hidden',
	                        name: "disId",
	                        val: $(this).data("id")
	                    });
	                    $(ths).after(disId);
	                    $(ths).after(hcitys);
	                }
	                else {
	                    $("#harea").val(lev);
	                    $("#harea").attr("data-id", $(this).data("id"));
	                }
	                var bc = $("#hcity").val();
	                var bp = $("#hproper").val();
	                ths.value = bc + "-" + bp + "-" + $(this).data("name");
	                $("#_citys").hide();
	            });

	        });
	    });
}