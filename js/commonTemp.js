var TempRun = function(){
	//简单模拟jquery选择器
	var find = function(str,parEle){ 
		str = str.split(" ");
		var par = [];
		parEle = parEle||document;
		var retn = [ parEle ] ;
		for( var i in str ){ if(str[i].length!=0) par.push(str[i]) } //去掉重复空格
		for( var i in par ){ 
			if( retn.length==0 ) return false;
			var _retn = [];
			for ( var r in retn )
			{
				if( par[i][0] =="#" ) _retn.push( document.getElementById( par[i].replace("#","") ) );
				else if( par[i][0] =="." ){
					var tag = retn[r].getElementsByTagName('*');
					for( var j=0; j<tag.length; j++ ){
						var cln = tag[j].className;
						if( cln && cln.search(new RegExp("\\b" + par[i].replace(".","") + "\\b"))!=-1 ){ _retn.push( tag[j] ); }
					}
				}
				else { var tag = retn[r].getElementsByTagName( par[i] ); for( var j=0; j<tag.length; j++ ){ _retn.push( tag[j] ) } }
			}
			retn =_retn;
		}
		
		return retn.length==0 || retn[0] == parEle ? false:retn;
	}// obj('.wrap').[0];

	// class处理
	var addClass =function(ele, className){
		 if (!ele || !className || (ele.className && ele.className.search(new RegExp("\\b" + className + "\\b")) != -1)) return;
		 ele.className += (ele.className ? " " : "") + className;
	}

	var removeClass = function(ele, className){
		 if (!ele || !className || (ele.className && ele.className.search(new RegExp("\\b" + className + "\\b")) == -1)) return;
		 ele.className = ele.className.replace(new RegExp("\\s*\\b" + className + "\\b", "g"), "");
	}

	var hasClass = function(ele, className) {  
    	return ele.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));  
	} 

	//write here

	find('.head_nav .menu')[0].onclick = function(){ //导航栏显示隐藏
		var this_next = find('.head_nav ul')[0];
		if(hasClass(this_next,'show')){
			removeClass(this_next,'show');
		}else{
			addClass(this_next,'show');
		}
	}
	
	
}
TempRun();//执行
