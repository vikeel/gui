;(function() {
  // 1.通用函数
  var _g = function(prop) {
    if(prop == '') return false;
    if(prop.substr(0,1) == '.') {
    	return document.getElementsByClassName(prop.substr(1));
    }
    return document.getElementById(prop);
  };
  // 2.监听函数
  var on = function(element, type, fn) {
    if(element.addEventListener) {
    	element.addEventListener(type, fn, false);
    }else {
    	element.attachEvent('on' + type, fn);
    }
  };
  // 3.获取页面和菜单
  var page = _g('pages').children;
  var	menu = _g('menus').children;
  // 4.遍历菜单
  for(var j=0; j<menu.length; j++) {
    on(menu[j], 'click', function(num) {
      console.log('...')
    	// 使用闭包获取正确的j值
    	return function() {
        for(var i=0; i<menu.length; i++) {
          menu[i].className = menu[i].className.replace(' m_active', '');
          page[i].className = page[i].className.replace(' p_active', '');
        };
        menu[num].className += ' m_active';
        page[num].className += ' p_active';
    	}
    }(j));
  }

}());
// // 3.切换页面
// function switchPage(n) {
//   console.log(menu[n])
//   // // 获取当前要展现的页面
//   // let page = _g('p_' + n);
//   // // 获取当前菜单
//   // let menu = _g('m_' + n);
//   // // 获取要清除的page样式
//   // let clear_page = _g('.page');
//   // // 获取要清除的menu样式
//   // let clear_menu = _g('.menu')
//   for(var i=0; i<menu.length; i++) {
//   	menu[i].className = menu[i].className.replace(' m_active', '');
//   	page[i].className = page[i].className.replace(' p_active', '');
//   }
//   menu[n].className += ' m_active';
//   page[n].className += ' p_active';
// }
