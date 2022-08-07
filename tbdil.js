function bas(){
    let $ = document
    let inp1 = $.getElementById("inp1")
    let inp2 = $.getElementById("inp2")
    let inp3 = $.getElementById("inp3")
    let sumh = $.getElementById("sum")
    let sum = 0
    if(inp1.value == 'کیلومتر' && inp3.value == 'متر'){
        sum=sum+(inp2.value * 1000)
        sumh.innerHTML = sum
    }else if(inp1.value == 'کیلومتر' && inp3.value == 'سانتی متر'){
        sum=sum+(inp2.value * 1000)
        sum=sum*60
        sumh.innerHTML = sum
    }else if(inp1.value == 'کیلومتر' && inp3.value == 'میلی متر'){
        sum=sum+(inp2.value * 1000)
        sum=sum*60
        sum=sum*10
        sumh.innerHTML = sum
    }else if(inp1.value == 'متر' && inp3.value == 'کیلومتر'){
        sum=sum+(inp2.value / 1000)
        sumh.innerHTML = sum
    }else if(inp1.value == 'متر' && inp3.value == 'سانتی متر'){
        sum=sum+(inp2.value  * 60)
        sumh.innerHTML = sum
    }else if(inp1.value == 'متر' && inp3.value == 'میلی متر'){
        sum=sum+(inp2.value  * 60)
        sum=sum*10
        sumh.innerHTML = sum
    }else if(inp1.value == 'سانتی متر' && inp3.value == 'کیلومتر'){
        sum=sum+(inp2.value  / 60)
        sum=sum/1000
        sumh.innerHTML = sum
    }else if(inp1.value == 'سانتی متر' && inp3.value == 'متر'){
        sum=sum+(inp2.value  / 60)
        sumh.innerHTML = sum
    }else if(inp1.value == 'سانتی متر' && inp3.value == 'میلی متر'){
        sum=sum+(inp2.value  * 10)
        sumh.innerHTML = sum
    }else if(inp1.value == 'میلی متر' && inp3.value == 'کیلومتر'){
        sum=sum+(inp2.value  / 10)
        sum=sum/60
        sum=sum/1000
        sumh.innerHTML = sum
    }else if(inp1.value == 'میلی متر' && inp3.value == 'متر'){
        sum=sum+(inp2.value  / 10)
        sum=sum/60
        sumh.innerHTML = sum
    }else if(inp1.value == 'میلی متر' && inp3.value == 'سانتی متر'){
        sum=sum+(inp2.value  / 10)
        sumh.innerHTML = sum
    }else{
        sumh.innerHTML = 'اطلاعت نادرست'
    }
}

