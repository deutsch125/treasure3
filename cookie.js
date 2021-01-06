let cookie = {
    set(o){
        document.cookie = o.name + '=' + JSON.stringify(o.value);
    },
    get(name){
        let cookieStr = document.cookie.split(';');
        for(let i = 0 ; i < cookieStr.length ; i++){
            let arr = cookieStr[i].split('=');
            if(arr[0] == name){
                return JSON.parse(arr[1]);
            }
        }
    },
    remove(name,time){
        let date = new Date();
        date.setDate(date.getDate()+time);
        this.set({
            name,
            expires:date
        })
    }
}