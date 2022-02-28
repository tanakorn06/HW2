
let students : [Number, String, Number, Number, Number, Number, Number][]
students = [
    [1,"ธนกร",25,32,31,0,0],
    [2,"ก้องภพ",18,15,20,0,0],
    [3,"หิรัญ",16,22,40,0,0],
    [4,"วศค",18,18,24,0,0],
    [5,"อนุรักษ์",19,14,35,0,0],
]
students.forEach((s)=>{
    s[5] = s[2]+s[3]+s[4];
    if(s[5]<50){
        s[6] = 1
    }else if(s[5]<=55){
        s[6] = 1.5
    }else if(s[5]<=60){
        s[6] = 2
    }else if(s[5]<=65){
        s[6] = 2.5
    }else if(s[5]<=70){
        s[6] = 3
    }else if(s[5]<=75){
        s[6] = 3.5
    }else if(s[5]<=80){
        s[6] = 4
    }else{
        s[6] = 4
    }
    console.log(`${s[0]} : ${s[1]}, Total: ${s[5]}, Grade: ${s[6]}`)
});