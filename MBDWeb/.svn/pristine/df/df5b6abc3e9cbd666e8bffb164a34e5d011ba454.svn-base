
/**
 * Theme: Moltran Admin Template
 * Author: Coderthemes
 * SweetAlert -
 * Usage: $.SweetAlert.methodname
 */

!function($) {
    "use strict";

    var SweetAlert = function() {};

    //examples 
    SweetAlert.prototype.init = function() {

        $('body').on("click",".save-swal",function(){
            swal({
                title: "保存成功",//提示框标题
                text: "",//提示框内容
                type: "success",//提示类型
                showCancelButton: false,//是否显示"取消"按钮
                showConfirmButton: false,
                timer:1000
            })
        });

        //删除
        $('body').on("click",".sa-warning",function(){
            swal({
                title: "你确定要删除吗?",//提示框标题
                text: "删除后，你将无法恢复这个文件信息!",//提示框内容
                type: "warning",//提示类型
                showCancelButton: true,//是否显示"取消"按钮
                cancelButtonText:"取消",//取消按钮的文本内容定义
                confirmButtonColor: "#00aced",//确定按钮的背景颜色
                confirmButtonText: "确认",//确定按钮的文本内容
                closeOnConfirm: false //点击确认删除之后的页面样式
            }, function(){
                swal({
                    title: "已删除!",//提示框标题
                    text: "你的信息已删除完成.",//提示框内容
                    type: "success",//提示类型
                    timer: 800,
                    showConfirmButton: true,
                    confirmButtonColor: "#00aced"
                });
            });
        });
        //整箱----发布信息弹出框
        $('.fabu-warning').click(function(){
            swal({
                title: "确认发布?",//提示框标题
                text: "确定要发布选中的信息吗？",//提示框内容
                type: "warning",//提示类型
                showCancelButton: true,//是否显示"取消"按钮
                cancelButtonText:"取消",//取消按钮的文本内容定义
                confirmButtonColor: "#00aced",//确定按钮的背景颜色
                confirmButtonText: "确认",//确定按钮的文本内容
                closeOnConfirm: false , //点击确认删除之后的页面样式
                time:1000
            },function(){
                swal({
                    title: "已发布!",//提示框标题
                    text: "你的信息已发布完成.",//提示框内容
                    type: "success",//提示类型
                    timer: 800,
                    showConfirmButton: true,
                    confirmButtonColor: "#00aced"
                });
            });
        });

        //整箱----取消发布信息弹出框
        $('.fabuCancel-warning').click(function(){
            swal({
                title: "取消发布?",//提示框标题
                text: "确定取消发布选中的信息吗？",//提示框内容
                type: "warning",//提示类型
                showCancelButton: true,//是否显示"取消"按钮
                cancelButtonText:"取消",//取消按钮的文本内容定义
                confirmButtonColor: "#00aced",//确定按钮的背景颜色
                confirmButtonText: "确认",//确定按钮的文本内容
                closeOnConfirm: false , //点击确认删除之后的页面样式
                time:1000
            },function(){
                swal({
                    title: "已取消发布!",//提示框标题
                    text: "你的信息已取消发布完成.",//提示框内容
                    type: "success",//提示类型
                    timer: 800,
                    showConfirmButton: true,
                    confirmButtonColor: "#00aced"
                });
            });
        });

        //运价订阅----取消订阅信息弹出框
        $('.qxdingyue-warning').click(function(){
            swal({
                title: "取消订阅?",//提示框标题
                text: "确定取消订阅选中的信息吗？",//提示框内容
                type: "warning",//提示类型
                showCancelButton: true,//是否显示"取消"按钮
                cancelButtonText:"取消",//取消按钮的文本内容定义
                confirmButtonColor: "#00aced",//确定按钮的背景颜色
                confirmButtonText: "确认",//确定按钮的文本内容
                closeOnConfirm: false , //点击确认删除之后的页面样式
                time:1000
            },function(){
                swal({
                    title: "已取消!",//提示框标题
                    text: "你的信息已取消完成.",//提示框内容
                    type: "success",//提示类型
                    timer: 800,
                    showConfirmButton: true,
                    confirmButtonColor: "#00aced"
                });
            });
        });

        //整箱----设为特价信息弹出框
        $('.tejia-warning').click(function(){
            swal({
                title: "确定设为特价?",//提示框标题
                text: "确定将选中的信息设为特价吗？",//提示框内容
                type: "warning",//提示类型
                showCancelButton: true,//是否显示"取消"按钮
                cancelButtonText:"取消",//取消按钮的文本内容定义
                confirmButtonColor: "#00aced",//确定按钮的背景颜色
                confirmButtonText: "确认",//确定按钮的文本内容
                closeOnConfirm: false , //点击确认删除之后的页面样式
                time:1000
            },function(){
                swal({
                    title: "已设为特价!",//提示框标题
                    text: "你的信息已设为特价完成.",//提示框内容
                    type: "success",//提示类型
                    timer: 800,
                    showConfirmButton: true,
                    confirmButtonColor: "#00aced"
                });
            });
        });

        //整箱----设为特价信息弹出框
        $('.tejiacancel-warning').click(function(){
            swal({
                title: "取消特价?",//提示框标题
                text: "确定要将选中的信息取消特价吗？",//提示框内容
                type: "warning",//提示类型
                showCancelButton: true,//是否显示"取消"按钮
                cancelButtonText:"取消",//取消按钮的文本内容定义
                confirmButtonColor: "#00aced",//确定按钮的背景颜色
                confirmButtonText: "确认",//确定按钮的文本内容
                closeOnConfirm: false , //点击确认删除之后的页面样式
                time:1000
            },function(){
                swal({
                    title: "已取消特价!",//提示框标题
                    text: "你的信息已取消特价完成.",//提示框内容
                    type: "success",//提示类型
                    timer: 800,
                    showConfirmButton: true,
                    confirmButtonColor: "#00aced"
                });
            });
        });
        //清空信息弹出框
        $('.sa-remove').click(function(){
            swal({
                title: "取消清空?",//提示框标题
                text: "确定要清空所有信息吗？",//提示框内容
                type: "warning",//提示类型
                showCancelButton: true,//是否显示"取消"按钮
                cancelButtonText:"取消",//取消按钮的文本内容定义
                confirmButtonColor: "#00aced",//确定按钮的背景颜色
                confirmButtonText: "确认",//确定按钮的文本内容
                closeOnConfirm: false , //点击确认删除之后的页面样式
                time:1000
            },function(){
                swal({
                    title: "已清空所有!",//提示框标题
                    text: "你的信息已全部清空完成.",//提示框内容
                    type: "success",//提示类型
                    timer: 800,
                    showConfirmButton: true,
                    confirmButtonColor: "#00aced"
                });
            });
        });

        //网站管理-设为推荐
        $('.sw_warning').click(function(){
            swal({
                title: "你确定要设为推荐吗?",//提示框标题
                text: "推荐后，该条信息将置顶!",//提示框内容
                type: "warning",//提示类型
                showCancelButton: true,//是否显示"取消"按钮
                cancelButtonText:"取消",//取消按钮的文本内容定义
                confirmButtonColor: "#00aced",//确定按钮的背景颜色
                confirmButtonText: "确认",//确定按钮的文本内容
                closeOnConfirm: false //点击确认删除之后的页面样式
            }, function(){
                swal({
                    title: "已推荐!",//提示框标题
                    text: "你的信息已推荐完成.",//提示框内容
                    type: "success",//提示类型
                    timer: 800,
                    showConfirmButton: true,
                    confirmButtonColor: "#00aced"
                });
            });
        });
        //网站管理-取消推荐
        $('.qx_warning').click(function(){
            swal({
                title: "你确定要取消推荐吗?",//提示框标题
                text: "取消后，你将无法推荐该信息!",//提示框内容
                type: "warning",//提示类型
                showCancelButton: true,//是否显示"取消"按钮
                cancelButtonText:"取消",//取消按钮的文本内容定义
                confirmButtonColor: "#00aced",//确定按钮的背景颜色
                confirmButtonText: "确认",//确定按钮的文本内容
                closeOnConfirm: false //点击确认删除之后的页面样式
            }, function(){
                swal({
                    title: "已取消!",//提示框标题
                    text: "你的信息已取消推荐.",//提示框内容
                    type: "success",//提示类型
                    timer: 800,
                    showConfirmButton: true,
                    confirmButtonColor: "#00aced"
                });
            });
        });
        //会员管理-客户管理-冻结popup
        $('.dj_warning').click(function(){
            swal({
                title: "你确定要冻结选中的客户吗?",//提示框标题
//                text: "取消后，你将无法推荐该信息!",//提示框内容
                type: "warning",//提示类型
                showCancelButton: true,//是否显示"取消"按钮
                cancelButtonText:"取消",//取消按钮的文本内容定义
                confirmButtonColor: "#00aced",//确定按钮的背景颜色
                confirmButtonText: "确认",//确定按钮的文本内容
                closeOnConfirm: false //点击确认删除之后的页面样式
            }, function(){
                swal({
                    title: "已冻结!",//提示框标题
                    text: "你的客户已冻结.",//提示框内容
                    type: "success",//提示类型
                    timer: 800,
                    showConfirmButton: true,
                    confirmButtonColor: "#00aced"
                });
            });
        });
        //会员管理-客户管理-解冻popup
        $('.jd_warning').click(function(){
            swal({
                title: "你确定要解冻选中的客户吗?",//提示框标题
//                text: "取消后，你将无法推荐该信息!",//提示框内容
                type: "warning",//提示类型
                showCancelButton: true,//是否显示"取消"按钮
                cancelButtonText:"取消",//取消按钮的文本内容定义
                confirmButtonColor: "#00aced",//确定按钮的背景颜色
                confirmButtonText: "确认",//确定按钮的文本内容
                closeOnConfirm: false //点击确认删除之后的页面样式
            }, function(){
                swal({
                    title: "已解冻!",//提示框标题
                    text: "你的客户已解冻.",//提示框内容
                    type: "success",//提示类型
                    timer: 800,
                    showConfirmButton: true,
                    confirmButtonColor: "#00aced"
                });
            });
        });
        //会员管理-客户管理-黑名单popup
        $('.balck_warning').click(function(){
            swal({
                title: "你确定要将选中的客户放入黑名单吗?",//提示框标题
//                text: "取消后，你将无法推荐该信息!",//提示框内容
                type: "warning",//提示类型
                showCancelButton: true,//是否显示"取消"按钮
                cancelButtonText:"取消",//取消按钮的文本内容定义
                confirmButtonColor: "#00aced",//确定按钮的背景颜色
                confirmButtonText: "确认",//确定按钮的文本内容
                closeOnConfirm: false //点击确认删除之后的页面样式
            }, function(){
                swal({
                    title: "黑名单!",//提示框标题
                    text: "你的客户已放入黑名单.",//提示框内容
                    type: "success",//提示类型
                    timer: 800,
                    showConfirmButton: true,
                    confirmButtonColor: "#00aced"
                });
            });
        });
        //会员管理-popup-用户信息-重置密码
        $('.resetpassword_warning').click(function(){
            swal({
                title: "提示信息",//提示框标题
                text: "确认要将XXX的登录密码重置为000000吗？",//提示框内容
                type: "warning",//提示类型
                showCancelButton: true,//是否显示"取消"按钮
                cancelButtonText:"取消",//取消按钮的文本内容定义
                confirmButtonColor: "#00aced",//确定按钮的背景颜色
                confirmButtonText: "确认",//确定按钮的文本内容
                closeOnConfirm: false //点击确认删除之后的页面样式
            }, function(){
                swal({
                    title: "已重置密码!",//提示框标题
                    text: "你的密码已重置.",//提示框内容
                    type: "success",//提示类型
                    timer: 800,
                    showConfirmButton: true,
                    confirmButtonColor: "#00aced"
                });
            });
        });
        //会员管理-popup-用户信息-设置
        $('.reset_warning').click(function(){
            swal({
                title: "设置XXX的数据权限?",//提示框标题
                text: ' <div class="radio radio-inline khgl_type"><input type="radio" name="radio2" value="option1" checked> <label>公司 </label> </div> <div class="radio radio-inline khgl_type"> <input type="radio" name="radio2" value="option2"> <label>个人 </label> </div>',//提示框内容
                type: "warning",//提示类型
                html:true,
                showCancelButton: true,//是否显示"取消"按钮
                cancelButtonText:"取消",//取消按钮的文本内容定义
                confirmButtonColor: "#00aced",//确定按钮的背景颜色
                confirmButtonText: "确认",//确定按钮的文本内容
                closeOnConfirm: false //点击确认删除之后的页面样式
            }, function(){
                swal({
                    title: "已设置!",//提示框标题
                    text: "你的客户已设置.",//提示框内容
                    type: "success",//提示类型
                    timer: 800,
                    showConfirmButton: true,
                    confirmButtonColor: "#00aced"
                });
            });
        });
        //系统设置-组织架构-禁用-popup
        $('.jy_warning').click(function(){
            swal({
                title: "你确定要禁用选中的员工吗?",//提示框标题
//                text: "取消后，你将无法推荐该信息!",//提示框内容
                type: "warning",//提示类型
                showCancelButton: true,//是否显示"取消"按钮
                cancelButtonText:"取消",//取消按钮的文本内容定义
                confirmButtonColor: "#00aced",//确定按钮的背景颜色
                confirmButtonText: "确认",//确定按钮的文本内容
                closeOnConfirm: false //点击确认删除之后的页面样式
            }, function(){
                swal({
                    title: "已禁用!",//提示框标题
                    text: "你的客户已禁用.",//提示框内容
                    type: "success",//提示类型
                    timer: 800,
                    showConfirmButton: true,
                    confirmButtonColor: "#00aced"
                });
            });
        });
        //系统设置-组织架构-激活-popup
        $('.jh_warning').click(function(){
            swal({
                title: "你确定要激活选中的员工吗?",//提示框标题
//                text: "取消后，你将无法推荐该信息!",//提示框内容
                type: "warning",//提示类型
                showCancelButton: true,//是否显示"取消"按钮
                cancelButtonText:"取消",//取消按钮的文本内容定义
                confirmButtonColor: "#00aced",//确定按钮的背景颜色
                confirmButtonText: "确认",//确定按钮的文本内容
                closeOnConfirm: false //点击确认删除之后的页面样式
            }, function(){
                swal({
                    title: "已激活!",//提示框标题
                    text: "你的客户已激活.",//提示框内容
                    type: "success",//提示类型
                    timer: 800,
                    showConfirmButton: true,
                    confirmButtonColor: "#00aced"
                });
            });
        });


    },
        //init
        $.SweetAlert = new SweetAlert, $.SweetAlert.Constructor = SweetAlert
}(window.jQuery),

//initializing 
    function($) {
        "use strict";
        $.SweetAlert.init()
    }(window.jQuery);