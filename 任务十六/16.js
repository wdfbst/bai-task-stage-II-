// JavaScript Document
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
 function $(id){
	 return document.getElementById(id);
	 }
var city_input  = $("aqi-city-input") ;
var value_input = $("aqi-value-input");
var addBtn = $("add-btn");
var table  = $("aqi-table");
var delBtn = table.getElementsByTagName("button");
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	//trim去掉首尾空格
	var city=city_input.value.trim();
	var value=value_input.value.trim();
	//标识 当都为真时才能进行添加操作
	var cityFlag=false;
	var valueFlag=false;
	//正则表达式
	var Regcity=/^[a-zA-Z\u4E00-\u9FA5]+$/ ;
	var Regvalue=/[\d*]/;
	//判断
	if(!Regcity.test(city)){
		alert("城市名称必须为中文和数字");
		city_input.value="";
		}
		else{cityFlag=true;};
	if(!Regvalue.test(value)){
		alert("空气质量指数必须为数字");
		value_input.value="";
		}
		else{valueFlag=true;};
	if(cityFlag&&valueFlag){
		aqiData[city]  = value ; 
		}
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	    var tr="<tr>"+"<td>"+"城市"+"</td>"+"<td>"+"空气质量"+"</td>"+"<td>"+"操作"+"</td>"+"</tr>";
		for(var x in aqiData){
			tr+="<tr>"+"<td>"+x+"</td>"+"<td>"+aqiData[x]+"</td>"+"<td>"+"<button onclick='delBtnHandle(\""+x+"\")'>"+"删除"+"</button>"+"</td>"+"</tr>";
			}
		table.innerHTML=tr;
}


/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
  // do sth.
  
  delete aqiData[city] ;
  renderAqiList();
}

//function init() {
//
//  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
//  addEvent(addBtn,'click',addBtnHandle);
//  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
//	//addEvent(delBtn,'click',delBtnHandle);
//}
//
//init();
window.onload = function () {
  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  addBtn.addEventListener("click",addBtnHandle);//addEventListener() 方法用于向指定元素添加事件句柄。
}