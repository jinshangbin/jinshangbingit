$(function() {
    tablesFun(false);
    widthVal();
    tableinfo.destroy();
    if (panel_width < table_width)
    {
        tablesFun(true);
        $(".dataTables_scrollBody table.dataTable thead .sorting").addClass("removeOpacity");
    }
    else{
        tablesFun(false);
    }
    //checkbox全选
    $(".checkAll input").on("click", function () {
        if ($(this).prop("checked") === true) {
            $("input[name='checkList']").prop("checked", $(this).prop("checked"));
        } else {
            $("input[name='checkList']").prop("checked", false);
        }
    });

    //删除选中行
    $('.maintable tbody').on('click', 'tr input[name="checkList"]', function () {
        var $tr = $(this).parents('tr');
        $tr.toggleClass('selected');
        var $tmp = $('[name=checkList]:checkbox');
        $('.checkAll input').prop('checked', $tmp.length == $tmp.filter(':checked').length);
    });

    //显示隐藏列
    $('.toggle-vis').on('change', function (e) {
        e.preventDefault();
        var column = tableinfo.column($(this).attr('data-column'));
        column.visible(!column.visible());
    });

});

/*表格和panel的宽度计算*/
var panel_width=0;
var table_width=0;
function widthVal(){
    panel_width=$(".jisuan_panel").width();
    table_width=$(".maintable").width();
}


/*表格自定义样式函数*/
var tableinfo ="";
function tablesFun(scrollxVal){
    tableinfo = $('.maintable').DataTable( {
        "scrollX": scrollxVal,
        "dom": '<"top"f >rt<"bottom"lp><"clear">',//dom定位
        "dom": 'tprli',//自定义显示项
        "columnDefs": [
            {
                orderable: false,
                targets: 0,
            },
            {
                "targets": [13],
                "visible": false,
                "searchable": false
            },
            {
                "targets": [14],
                "visible": false,
                "searchable": false
            }
        ],//第一列禁止排序
        "order": [
            [0, null]
        ],//第一列排序图标改为默认
        'language': {
            'emptyTable': '没有数据',
            'loadingRecords': '加载中...',
            'processing': '查询中...',
            'search': '搜索:',
            'lengthMenu': '显示 _MENU_ 条目',
            'zeroRecords': '没有数据',
            'placeholder':'123',
            'paginate': {
                'first':      '第一页',
                'last':       '最后一页',
                'next':       '下一页',
                'previous':   '上一页'
            },
            'info': '第 _PAGE_ 页 / 总 _PAGES_ 页',
            'infoEmpty': '没有数据',
            'infoFiltered': '(过滤总件数 _MAX_ 条)'
        }
    });
    return tableinfo;
}