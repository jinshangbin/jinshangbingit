1. basejs\plugins\select2\dist\js\select2.min.js,版本更换到4.0
2. common.js里的url到项目名称+"/"结束
3.页面中的../../批量替换为空
4. common.js方法调用清单：
    getPage(uri)：根据uri获取页面，返回对应的html
    ajaxPage(righturi,bodyuri):ajax加载右边显示区域和body新增区域的页面，无返回值
    postform(formid, uriPath):form提交,返回提交结果
    post(urlPath, params):post提交，params： a=1&c=2
    get(urlPath) :get提交
	renderTable(datauri, params, tableid, templateuri) :列表显示 ,参数(数据uri,获取数据的参数,tableid,tr模板的uri) 
    querySelect2BySearch(objid, nodataname, datauri, optionuri, queryname,
		showname, setValue, setText)
		:初始化模糊搜索框,参数(搜索框id,选择为空时显示的内容，数据来源(返回数组),option所在的uri,输入值查询时对应的参数名,点选后框里显示文本对应的属性名,初始化值，初始化值对应的显示文本);
     querySelect2NoSearch(objid, nodataname, datauri, optionuri, queryname,
		showname, setValue, setText)
	 querySelect2multiple(objid, nodataname, datauri, optionuri, queryname,
		showname, setValue, setText)
	
	 renderTable('applyport/queryportlist?pageNo=1',"a=b", 'mytable','common/test/tr.html');
  		：装载table数据：参数(数据源uri,附加参数,tableid,tr的uri);
  
5.多选框：在select标签加上multiple,如：<select id="line" multiple class="select2 form-control" data-placeholder="Choose a Country...">
6.模糊查询框的data-placeholder属性无脑去除
7.主页搜索按钮的id都是searchAll
8.每个table要有自己的id,且所有table的id不可以相同,命名可用前缀+_table
9.排序的table，每列都要有columnname属性值为排序字符串名,每列都要有min-width属性，缺的自己补上
10.有table的，需要在end标签后引入<script src="common/inittable.js"></script>
11.tr中td要有min-width属性
12 th要有min-width属性
13.table上一层div 添加style="overflow: auto;"
14.无可编辑列表时引入：<script src="basejs/edite_layer/zhengxiang_tables.js"></script>
				<script src="common/inittable.js"></script>
       有可编辑列表时追加引入：<script src="common/initedittable.js"></script>
15. href="#" 的  都换成href="javascript:;"


可编辑列表：
1.主名_edit_tr.html分离
2.每个td两个元素，input(或select) + output 标签。
3.在table的父标签加上style="overflow: auto;"
4.需要ajax的单下拉框（不要输入框）:class用select1
5.需要ajax的单下拉框:class用select2
6.需要ajax的多下拉框:class用select3
7.不需要ajax的单下拉框:class用select4
8.不需要ajax的多下拉框:class用select5
9.select1,2,3都要有id, datauri,optionuri,queryname,showname,initval,inittext属性，
	对应的意义分别是：id,数据源uri,option的uri,查询输入值对应后台接收的属性名,点击选择时选择框中显示的字段名,初始化值,初始化显示
10.每行都增加一个存放id的地方<td style="display:none;"><input  name="id" value="{it.id}" /></td>
	
	
	
	