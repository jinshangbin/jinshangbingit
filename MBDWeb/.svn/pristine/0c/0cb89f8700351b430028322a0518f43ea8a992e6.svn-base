$(function(){
    var tableinfo = $('.maintable').DataTable( {
        "dom": '<"top"f >rt<"bottom"lp><"clear">',//dom定位
        "dom": 'trli',//自定义显示项
        "columnDefs": [
            {
                orderable: false,
                targets: 0 }
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

    $('#datatable').dataTable();
    $('#datatable-keytable').DataTable( { keys: true } );
    $('#datatable-responsive').DataTable();
    $('#datatable-scroller').DataTable( { ajax: "assets/plugins/datatables/json/scroller-demo.json", deferRender: true, scrollY: 380, scrollCollapse: true, scroller: true } );
    var table = $('#datatable-fixed-header').DataTable( { fixedHeader: true } );
    //自定义搜索
    $('.dsearch').on('keyup click', function () {
        var tsval = $(".dsearch").val();
        tableinfo.search(tsval, false, false).draw();
    });

    //全选功能

    //checkbox全选
    $(".checkAll input").on("click", function () {
        if ($(this).prop("checked") === true) {
            $("input[name='checkList']").prop("checked", $(this).prop("checked"));
        } else {
            $("input[name='checkList']").prop("checked", false);
        }
    });

    //删除选中行
    $('.table tbody').on('click', 'tr input[name="checkList"]', function () {
        var $tr = $(this).parents('tr');
        $tr.toggleClass('selected');
        var $tmp = $('[name=checkList]:checkbox');
        $('.checkAll input').prop('checked', $tmp.length == $tmp.filter(':checked').length);
    });
});