/**
 * @param saveuri
 *            保存的uri
 * @param deleteuri
 *            删除的uri
 */
function initEditAbleTable(deleteuri,saveuri,saveparams, callback) {
	function initUnits(tr){
		$.each(tr.find("select.select1"), function(i, o) {
			if ($(o).data('select2') != null) {
				$(o).select2("destroy");
			}
			querySelect2NoSearch($(o), '请选择', $(o).attr("datauri"), $(o).attr("optionuri"), $(o).attr("queryname"), $(o).attr("showname"), $(o).attr("initval"), $(o).attr("inittext"),true);
		});
		
		$.each(tr.find("input"), function(i, o) {
			if($(o).attr("type")!="hidden"){
				$(o).val($(o).siblings(".output").text());
			}
		});
		$.each(tr.find("select.select2"), function(i, o) {
			if ($(o).data('select2') != null) {
				$(o).select2("destroy");
			}
			querySelect2BySearch($(o), '请选择', $(o).attr("datauri"), $(o).attr("optionuri"), $(o).attr("queryname"), $(o).attr("showname"), $(o).attr("initval"), $(o).attr("inittext"),true);
		});
		$.each(tr.find("select.select3"), function(i, o) {
			if ($(o).data('select2') != null) {
				$(o).select2("destroy");
			}
			querySelect2multiple($(o), '请选择', $(o).attr("datauri"), $(o).attr("optionuri"), $(o).attr("queryname"), $(o).attr("showname"), $(o).attr("initval"), $(o).attr("inittext"),true);
		});
		$.each(tr.find("select.select4"), function(i, o) {
			if ($(o).data('select2') != null) {
				$(o).select2("destroy");
			}
			$(o).select2({
				minimumResultsForSearch : -1,
				allowClear : true,
				placeholder : '请选择'
			});
		});
		$.each(tr.find("select.select5"), function(i, o) {
			if ($(o).data('select2') != null) {
				$(o).select2("destroy");
			}
			$(o).select2({
				minimumResultsForSearch : -1,
				allowClear : true,
				placeholder : '请选择',
				tags : true
			});
		});
	}
	 //日历插件
    $('.form_date').datetimepicker({
        language:  'zh-CN',
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0,
        format : 'yyyy/mm/dd',
        pickerPosition: "bottom-left"
    });
	$($("a.save-row")).on("click", function(e) {
		var tr = $($(e.target).parents("tr")[0]);
		var params = (saveparams==null?"":saveparams);
		$.each(tr.find("select"), function(i, o) {
			if ($(o).attr("name") != null) {
				var vals = $(o).val();
				if(typeof(vals) =="object"){					
					if (vals != null) {
						for (var i = 0; i < vals.length; i++) {
							params = params + "&" + $(o).attr("name") + "=" + (vals[i] == null ? '' : vals[i]);
						}
					}
				}else{
					params = params + "&" + $(o).attr("name") + "=" + (vals == null ? '' : vals);
				}
			}
		});
		$.each(tr.find("input"), function(i, o) {
			if ($(o).attr("name") != null && $(o).val() != "") {
				params = params + "&" + $(o).attr('name') + "=" + ($(o).val() == null ? '' : $(o).val());
			}
		});
		if(params.indexOf("&")==0){
			params = params.substr(1);
		}
		post(saveuri, params,"callback_forsave",tr,e);
		
	});
	$($("a.cancel-row")).on("click", function(e) {
		var tr = $($(e.target).parents("tr")[0]);
		
		var id = $(tr.find("input")[0]).val();
		if(id==null || id==""){
			tr.remove();
			return false;
		}
		
		$.each(tr.find("select.select1"), function(i, o) {
			if ($(o).data('select2') != null) {
				$(o).select2("destroy");
			}
			querySelect2NoSearch($(o), '请选择', $(o).attr("datauri"), $(o).attr("optionuri"), $(o).attr("queryname"), $(o).attr("showname"), $(o).attr("initval"), $(o).attr("inittext"),true);
		});
		
		$.each(tr.find("input"), function(i, o) {
			if($(o).attr("type")!="hidden"){
				$(o).val($(o).siblings(".output").text());
			}
		});
		$.each(tr.find("select.select2"), function(i, o) {
			if ($(o).data('select2') != null) {
				$(o).select2("destroy");
			}
			querySelect2BySearch($(o), '请选择', $(o).attr("datauri"), $(o).attr("optionuri"), $(o).attr("queryname"), $(o).attr("showname"), $(o).attr("initval"), $(o).attr("inittext"),true);
		});
		$.each(tr.find("select.select3"), function(i, o) {
			if ($(o).data('select2') != null) {
				$(o).select2("destroy");
			}
			querySelect2multiple($(o), '请选择', $(o).attr("datauri"), $(o).attr("optionuri"), $(o).attr("queryname"), $(o).attr("showname"), $(o).attr("initval"), $(o).attr("inittext"),true);
		});
		$.each(tr.find("select.select4"), function(i, o) {
			if ($(o).data('select2') != null) {
				$(o).select2("destroy");
			}
			$(o).select2({
				minimumResultsForSearch : -1,
				allowClear : true,
				placeholder : '请选择'
			});
		});
		$.each(tr.find("select.select5"), function(i, o) {
			if ($(o).data('select2') != null) {
				$(o).select2("destroy");
			}
			$(o).select2({
				minimumResultsForSearch : -1,
				allowClear : true,
				placeholder : '请选择',
				tags : true
			});
		});
		
		tr.find("input").css("display", "none");
		tr.find("select").css("display", "none");
		tr.find(".output").css("display", "");
		tr.find(".select2").css("display", "none");

		var td = $($(e.target).parents("td")[0]);
		td.find("a.save-row").addClass("hidden");
		td.find("a.cancel-row").addClass("hidden");
		td.find("a.edit-row").removeClass("hidden");
		td.find("a.remove-row").removeClass("hidden");
		
		return false;
	});
	$("a.edit-row").on("click", function(e) {
		var tr = $($(e.target).parents("tr")[0]);
		initUnits(tr);
		tr.find("input").css("display", "");
		tr.find("select").css("display", "");
		tr.find("span").css("display", "");
		tr.find(".output").css("display", "none");
		var td = $($(e.target).parents("td")[0]);
		td.find("a.save-row").removeClass("hidden");
		td.find("a.cancel-row").removeClass("hidden");
		td.find("a.edit-row").addClass("hidden");
		td.find("a.remove-row").addClass("hidden");
		return false;
	});
	$($("a.remove-row")).on("click", function(e) {
		var tr = $($(e.target).parents("tr")[0]);
		var id = $(tr.find("input")[0]).val();
		
		layer.confirm($.i18n.prop("i18n.customer.message.delete"), 
			function(){
				post(deleteuri,"id="+id,"callback_fordelete",tr, callback);
			}, function() {
			}
		);
		return false;
	});
	
}
function callback_fordelete(result,tr, callback){
	if(result.code == 1) {
		tr.remove();
		layer.msg($.i18n.prop("i18n.common.layer.deletesuccess"));
		if(callback != ""){
			eval(callback);
		}
	} else {
		layer.alert(result.message);
	}
}
function callback_forsave(result,tr,e){
	if (result.code == "1") {
		tr.find("input").css("display", "none");
		tr.find("select").css("display", "none");
		tr.find("span").css("display", "none");
		tr.find(".output").css("display", "");

		var td = $($(e.target).parents("td")[0]);
		td.find("a.save-row").addClass("hidden");
		td.find("a.cancel-row").addClass("hidden");
		td.find("a.edit-row").removeClass("hidden");
		td.find("a.remove-row").removeClass("hidden");
		
		/**
		 * 成功后处理：1.提示保存成功2.给class=output的span赋值 3.给select填充initVale
		 */
		layer.alert($.i18n.prop("i18n.common.layer.save"));
		 
		findNode(td, ".searchAll", 5).click();
	} else {
		layer.alert(result.message);
	}
}