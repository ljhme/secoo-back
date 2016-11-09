/**
 * Created by Administrator on 2016/9/22.
 */
var flag;
var localKey = [];
var flag;
var webStorageUtil = {
    //参数的说明：
    /*
     1.key：为键值，即storage的名字
     2.value:设置storage的值，可以是各种类型
     3.lIsS:是localstorage  还是sessionstorage   local：为localstorage，session：为还是sessionstorage
     */


    /*三个参数时为设置，两个参数时为读取。参数key和lIsS是必须参数，value为*/
    setAndGetStorage:function (key,value,lIsS) {
        if(value=='local'||value=='session'){
            lIsS = value;
            value = '';
        }
         if(key=='local'||key=='session'){
            lIsS = key;
            key = '';
        }
        if(value){    //设置值
            if(lIsS=="local"){   //设置localStorage的值
                toString();
                if(key!="oldId"){
                    var localKeys = window.localStorage.getItem('localIndex');
                    if(localKeys){
                        localKey = localKeys.split(',');
                    }
                    for(var i=0;i<localKey.length;i++){
                        if(localKey[i]!=key){
                            flag = true;
                        }else{
                            flag = false;
                        }
                    }
                    if(flag){
                        localKey.push(key);  
                    }
                    window.localStorage.setItem('localIndex',localKey);
                }
                window.localStorage.setItem(key,value);
            }else{
                toString();
                window.sessionStorage.setItem(key,value);
                sessionKey.push(key);
            }
            function toString() {
                var valueType = typeof(value);
                switch(valueType){
                    case 'string':
                        value = value;
                        flag = valueType;
                        break;
                    case 'object':
                        value = JSON.stringify(value);
                        flag = valueType;
                        break;
                    case 'number':
                        value = value.toString();
                        flag = valueType;
                        break;
                    case 'boolean':
                        value = value.toString();
                        flag = valueType;
                        break;
                }
            }
        }else{    //读取值
            if(key){
                if(lIsS=="local"){
                    var res = window.localStorage.getItem(key);
                    return toType(res);
                }else{
                    var res =  window.sessionStorage.getItem(key);
                    return toType(res);
                }
            }else{
                if(lIsS=="local"){
                    console.log(localStorage);
                    // var res = localStorage;
                    var res = {};
                    var localKeyss = window.localStorage.getItem('localIndex').split(',');
                    console.log(localKeyss);
                    for( var i =0 ;i < localKeyss.length;i++){
                        res[localKeyss[i]] = JSON.parse(localStorage[localKeyss[i]]);
                    }
                    console.log(res);
                    return res;
                }else{
                    var res = sessionStorage.valueOf();
                    return toType(res);
                }
            }
            function toType(res) {
                var useRes;
                if(flag=='object'){
                    useRes = JSON.parse(res);
                }else if(flag=='number'){
                    useRes = Number(res);
                }else if(flag=='boolean'){
                    useRes = Boolean(res);
                }else {
                    useRes = res;
                }
                //console.log(res);
                //console.log(useRes);
                //console.log(typeof(useRes));
                return useRes;
            }
        }
    },

    removeAndClearStorage:function (key,lIsS) {
        if(key=='local'||key=='session'){
            lIsS = key;
            key = '';
        }
        if(key){
            if(lIsS=='local'){
                window.localStorage.removeItem(key);
            }else{
                window.sessionStorage.removeItem(key);
            }
        }else{
            if(lIsS=='local'){
                window.localStorage.clear();
            }else{
                window.sessionStorage.clear();
            }
        }
    }
};