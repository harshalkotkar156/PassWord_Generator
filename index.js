

function updateValue(value){
    document.querySelector("#len").innerHTML=value;
}

let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower = "abcdefghijklmnopqrstuvwxyz";
let nums = "0123456789";
let sym ="!@#$%^&*()_+[]{}|;:,.<>?'";
let lu = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let ln ="abcdefghijklmnopqrstuvwxyz0123456789";
let un = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let ls = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+[]{}|;:,.<>?'";
let lun ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let lus = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+[]{}|;:,.<>?'";
let luns ="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+[]{}|;:,.<>?'";
let lns = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+[]{}|;:,.<>?'";
let us ="ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+[]{}|;:,.<>?'";
let uns = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+[]{}|;:,.<>?'";
let ns ="0123456789!@#$%^&*()_+[]{}|;:,.<>?'";






function generatePass()
{
    // let num = Math.random();
    // console.log(num);
    // console.log(Math.floor(num * 100000));
    let u=document.querySelector("#Uchars").checked;
    let l =document.querySelector("#Lchars").checked;
    let n = document.querySelector("#nums").checked;
    let s = document.querySelector("#sym").checked;
    let len = document.querySelector("#slider").value;
    // console.log(len);
    let pass="";
    // console.log(Math.random() * upper.length);
    if((u && !l && !n && !s) || (!u && !l && !n && !s)  ){//u
       

        for(let i=0;i<len;i++){
            pass+=upper[Math.floor(Math.random() * upper.length)];
        }

        console.log(pass);


    }else if(!u && l && !n && !s){//l

        for(let i=0;i<len;i++){
            pass+=lower[Math.floor(Math.random() * lower.length)];
        }

        console.log(pass);



    }else if(!u && !l && n && !s){//n
        
        for(let i=0;i<len;i++){
            pass+=nums[Math.floor(Math.random() * nums.length)];
        }

        console.log(pass);

    }else if(!u && !l && !n && s){//s
        
        for(let i=0;i<len;i++){
            pass+=sym[Math.floor(Math.random() * sym.length)];
        }

        console.log(pass);



    }else if(u && l && !n && !s){//lu
        
        for(let i=0;i<len;i++){
            pass+=lu[Math.floor(Math.random() * lu.length)];
        }

        console.log(pass);




    }else if(!u && l && n && !s){//ln


        for(let i=0;i<len;i++){
            pass+=ln[Math.floor(Math.random() * ln.length)];
        }

        console.log(pass);

    }else if(!u && l && !n && s){//ls
       
        for(let i=0;i<len;i++){
            pass+=ls[Math.floor(Math.random() * ls.length)];
        }

        console.log(pass);



    }else if(u && !l && !n && s){//us
        for(let i=0;i<len;i++){
            pass+=us[Math.floor(Math.random() * us.length)];
        }

        console.log(pass);



    }else if(!u && !l && n && s){//ns
        for(let i=0;i<len;i++){
            pass+=ns[Math.floor(Math.random() * ns.length)];
        }

        console.log(pass);



    }else if(u && l && n && !s){//lun
        for(let i=0;i<len;i++){
            pass+=lun[Math.floor(Math.random() * lun.length)];
        }

        console.log(pass);


    }else if(u && l && !n && s){//lus
        for(let i=0;i<len;i++){
            pass+=lus[Math.floor(Math.random() * lus.length)];
        }

        console.log(pass);


    }else if(u && !l && n && s){//uns
        for(let i=0;i<len;i++){
            pass+=uns[Math.floor(Math.random() * uns.length)];
        }

        console.log(pass);



    }else if((u && l && n && s)){//luns
        for(let i=0;i<len;i++){
            pass+=luns[Math.floor(Math.random() * luns.length)];
        }

        console.log(pass);



    }else if(!u && l && n && s){//lns
        for(let i=0;i<len;i++){
            pass+=lns[Math.floor(Math.random() * lns.length)];
        }

        console.log(pass);



    }else{//un

        for(let i=0;i<len;i++){
            pass+=un[Math.floor(Math.random() * un.length)];
        }

        console.log(pass);
    }


    document.querySelector("#password").textContent=pass;
    if(len<=8){
        let y = document.querySelector("#strength");
        // y.style
        document.querySelector("#strength").style.backgroundColor ="green";
    }else if(len<13){
        document.querySelector("#strength").style.backgroundColor ="orange";
    }else{
        document.querySelector("#strength").style.backgroundColor ="red";
    }

}

function copyToClipboard(){
    console.log(document.querySelector("#password").textContent);
    navigator.clipboard.writeText(document.querySelector("#password").textContent);

}