// 应用全局对象
var myWeb = new cmyWeb();
function cmyWeb(){   
    this.Storage = new cAppStorage();
}
// 本地存储
function cAppStorage() {
	//保存对象到本地存储
	this.setObject = function(key, obj) {
			var str = null;

			if (obj != null && obj != undefined) {
				str = JSON.stringify(obj);
			}
			localStorage.setItem(key, str);
		}
	//保存对象到session
	this.setObjectSession = function(key, obj) {
		var str = null;

		if (obj != null && obj != undefined) {
			str = JSON.stringify(obj);
		}

		sessionStorage.setItem(key, str);
	}
	//清空session
	this.getObjectSessionclear = function() {
			sessionStorage.clear();
		}
		//保存字符串到本地存储
	this.setValuelocal = function(key, str) {
		localStorage.setItem(key, str);
	};

	//获取本地存储的字符串，如果找不到返回''
	this.getValuelocal = function(key) {
		var str = localStorage.getItem(key);
		if (str == undefined || str == null) str = '';
		return str;
	};

	//保存字符串到session
	this.setValueSession = function(key, str) {
		sessionStorage.setItem(key, str);
	};

	//获取session的字符串，如果找不到返回
	this.getValueSession = function(key) {
		var str = sessionStorage.getItem(key);
		if (str == undefined || str == null) str = '';
		return str;
	};
	//bool工具
	this.getBool = function(key) {
		var str = this.getValue(key).toLowerCase();
		if (str == '1' || str == 'true' || str == 't' || str == 'yes') return true;
		return false;
	}

	//获取本地存储的对象
	this.getObject = function(key) {
		var str = localStorage.getItem(key);
		if (str == undefined || str == null || str.length == 0) return null;

		try {
			var obj = eval('(' + str + ')');
			return obj;
		} catch (e) {
			return null;
		}
	};

	//获取session存储的对象
	this.getObjectSession = function(key) {
		var str = sessionStorage.getItem(key);
		if (str == undefined || str == null || str.length == 0) return null;

		try {
			var obj = eval('(' + str + ')');
			return obj;
		} catch (e) {
			return null;
		}
	};

	//移除指定的本地存储
	this.remove = function(key) {
		localStorage.removeItem(key);
	};

	//清空本地存储
	this.clear = function() {
		localStorage.clear();
	};

	this.getDefaultLoginUsr = function() {
		return this.getValue('DefaultUsrCode');
	};

	this.getDefaultLoginPassword = function() {
		return this.getValue('DefaultPassword');
	};
};