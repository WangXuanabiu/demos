console.log('----------数组去重方法1--------');
console.log('--------双重循环、splice--------');
//缺点：占用内存高
var array = [1,2,1,3,4,6,2,3,5,3,4,6,2,3,4];
console.log('去重复前：'+array);
var len = array.length;
for(var i = 0 ; i < len ; i++){
	for(var j = i+1; j<len;j++){
		if(array[i] ==array[j]){
			array.splice(j,1);
			j--;
			len--;
		}
	}
}
console.log('去重复后：'+array);

console.log('----------数组去重方法2--------');
console.log('---------双重循环、新数组-------');
var array = [1,2,1,3,4,6,2,3,5,3,4,6,2,3,4];
var distinct = [];
var len = array.length;
var i,j;
for(i=0;i<len;i++){
	for(j=i+1;j<len;j++){
		if(array[i]==array[j]){
			//break;
			j = ++i;
		}
	}
	/*if(j==len){
		distinct.push(array[i]);
	}*/
	distinct.push(array[i]);
}
console.log('去重复前：'+array);
console.log('去重复后：'+distinct);

console.log('----------数组去重方法3--------');
console.log('---------利用对象属性唯一-------');
var array = [1,2,1,3,4,6,2,3,5,3,4,6,2,3,4];
var len = array.length;
var obj = {};
var result = [];
for (var i = 0; i < len; i++) {
	if(!obj[array[i]]){
		obj[array[i]]=1;
		result.push(array[i]);
	}
}
console.log('去重复前：'+array);
console.log('去重复后：'+result);

console.log('----------数组去重方法4--------');
console.log('----------先排序，后去重--------');
var array = [1,2,1,3,4,6,2,3,5,3,4,6,2,3,4];
console.log('去重复前：'+array);
array.sort(function(a,b) {
	return a-b;
});
var len = array.length;
for (var i = 1; i < len; i++) {
	if(array[i]==array[i-1]){
		array.splice(i,1);
		i--;
		len--;
	}
}
console.log('去重复后：'+array);

console.log('----------数组去重方法5--------');
console.log('-------利用foreach和indexOf-----');
var array = [1,2,1,3,4,6,2,3,5,3,4,6,2,3,4];
console.log('去重复前：'+array);
var result = [];
array.forEach(function(item,index,arr){
	if(arr.indexOf(item,index+1)==-1){
		result.push(item);
	}
});
console.log('去重复后：'+result);

console.log('----------数组去重方法6--------');
console.log('------利用ES6新特性：SET-------');
var array = [1,2,1,3,4,6,2,3,5,3,4,6,2,3,4];
console.log('去重复前：'+array);
var set = new Set(array);
var result = Array.from(set);
console.log('去重复后：'+result);