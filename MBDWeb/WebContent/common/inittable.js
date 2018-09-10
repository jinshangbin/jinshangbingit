$(function() {
//	tablesFun(false);
//    widthVal();
//    tableinfo.destroy();
//    if (panel_width < table_width)
//    {
//        tablesFun(true);
//        $(".dataTables_scrollBody table.dataTable thead .sorting").addClass("removeOpacity");
//    }
//    else{
//        tablesFun(false);
//    }
    
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
	
	//重置查询参数：
	orderColumn=null;
	pageNo=1;
	pageSize=10;
//	$("th").bind("click",function(e){
//		 if($(e.target).hasClass("table-df")){
//			 if($(e.target).hasClass("tableHead_desc")){
//				 $(e.target).addClass("tableHead_asc").removeClass("tableHead_desc");
//			 }else if($(e.target).hasClass("tableHead_asc")){
//				 $(e.target).addClass("tableHead_desc").removeClass("tableHead_asc");
//			 }else{
//				 $(e.target).addClass("tableHead_desc");
//			 }
//				$.each($(e.target).siblings("th"),function(i,o){
//					$(o).removeClass("tableHead_desc").removeClass("tableHead_asc");
//				});
//			 
//			orderColumn = $(this).attr("orderColumn");
//			orderColumn = orderColumn==null?"":"convert("+orderColumn+" using  gbk) "+$(this).attr("class").split("_")[1];
//			findNode($(e.target),".searchAll").click();
//		}
//	});
	
	/**
	 * 自定义菜单的点击事件
	 */
	$('.toggle-vis').unbind('change');
	   $('.toggle-vis').on('change', function (e) {
		  showTable($(e.target));
		  e.preventDefault();
	   });
	   if($.fn.modal!=null){
		   $.fn.modal.Constructor.prototype.enforceFocus = function () {};
	   }

//------------------mf
    $('.zxyj-dropdown-menu li').unbind('change');
        $('.zxyj-dropdown-menu li').on('change', function (e) {
        showTable($(e.target));
        e.preventDefault();
    });
    if($.fn.modal!=null){
        $.fn.modal.Constructor.prototype.enforceFocus = function () {};
    }

//    自定义列表点击事件mf
    $('.btn_toggle').click(function(event) {
        $(this).siblings('.role_list').slideToggle();
        event.stopPropagation();
    });
    $('.role_list li').click(function(event){
        $(this).parent().stop().slideDown();
        event.stopPropagation();
    });
   $('body').click(function(event){
        $('.role_list').stop().slideUp();
     //  event.stopPropagation();
    });


});

/*表格和panel的宽度计算*/
var panel_width=0;
var table_width=0;
function widthVal(){
    panel_width=$(".jisuan_panel").width();
    table_width=$(".maintable").width();
}

function inittablenew() {
//	tablesFun(false);
//    widthVal();
//    tableinfo.destroy();
//    if (panel_width < table_width)
//    {
//        tablesFun(true);
//        $(".dataTables_scrollBody table.dataTable thead .sorting").addClass("removeOpacity");
//    }
//    else{
//        tablesFun(false);
//    }
    
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
	
	//重置查询参数：
	orderColumn=null;
	pageNo=1;
	pageSize=10;
	$("th").bind("click",function(e){
		 if($(e.target).hasClass("table-df")){
			 if($(e.target).hasClass("tableHead_desc")){
				 $(e.target).addClass("tableHead_asc").removeClass("tableHead_desc");
			 }else if($(e.target).hasClass("tableHead_asc")){
				 $(e.target).addClass("tableHead_desc").removeClass("tableHead_asc");
			 }else{
				 $(e.target).addClass("tableHead_desc");
			 }
				$.each($(e.target).siblings("th"),function(i,o){
					$(o).removeClass("tableHead_desc").removeClass("tableHead_asc");
				});
			 
			orderColumn = $(this).attr("orderColumn");
			orderColumn = orderColumn==null?"":"convert("+orderColumn+" using  gbk) "+$(this).attr("class").split("_")[1];
			findNode($(e.target),".searchAll").click();
		}
	});
	
	/**
	 * 自定义菜单的点击事件
	 */
	$('.toggle-vis').unbind('change');
	   $('.toggle-vis').on('change', function (e) {
		  showTable($(e.target));
		  e.preventDefault();
	   });
	   if($.fn.modal!=null){
		   $.fn.modal.Constructor.prototype.enforceFocus = function () {};
	   }

//------------------mf
    $('.zxyj-dropdown-menu li').unbind('change');
        $('.zxyj-dropdown-menu li').on('change', function (e) {
        showTable($(e.target));
        e.preventDefault();
    });
    if($.fn.modal!=null){
        $.fn.modal.Constructor.prototype.enforceFocus = function () {};
    }

//    自定义列表点击事件mf
    $('.btn_toggle').click(function(event) {
        $(this).siblings('.role_list').slideToggle();
        event.stopPropagation();
    });
    $('.role_list li').click(function(event){
        $(this).parent().stop().slideDown();
        event.stopPropagation();
    });
   $('body').click(function(event){
        $('.role_list').stop().slideUp();
     //  event.stopPropagation();
    });


};
