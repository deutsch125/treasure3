//获取value值
function getAllData(){
    return cookie.get('data');
}
//检查cookie
function checkData(pid){
    let list = getAllData();
    let flag = true;
    for(let i in list){
        if(list[i].pid == pid){
            flag = false;
        }
    }
    return flag;
}
//改变库存
function addData(pid,num){
    let list = getAllData();
    for(let i in list){
        if(list[i].pid == pid){
            list[i].pCount += num;
        }
    }
    return renewData(list);
}
//更新库存
function renewData(arr){
    cookie.set({
        name:'data',
        value:arr
    })
    return getAllData();
}
//删除商品
function deletData(pid){
    let list = getAllData();
    for(let i in list){
        if(list[i].pid == pid){
            list.splice(i,1);
        }
    }
    return renewData(list);
}
//购物车总数量
function allGoods(){
    let list = getAllData(),
        all = 0;
    for(let i in list){
        all += list[i].pCount;
    }
    return all;
}