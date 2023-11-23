function check(){
    const inpObj =  document.getElementById("id1"&&"id2")

    inpObj.checkValidity();
    inpObj.validationMessage;
    

    if(inpObj.validationMessage == "Insira um número."|| inpObj.validationMessage == "Preencha este campo." ){
        document.getElementById("content").innerHTML = `<h5 class="msg2">Um ou mais valores digitados estão incorretos, verifique e digite novamente!</h5>` 

        var b = document.querySelector("button");
        b.setAttribute("id","button2");
        b.setAttribute("onclick","window.location.reload()");
        document.getElementById("button2").innerHTML = "Recarregar Página"
        
    }else{
       function points(){
            const nVictories = document.querySelector("#id1");
            const value = nVictories.value;

            const nDefeats = document.querySelector("#id2");
            const value1 = nDefeats.value;
            
            let result = value - value1
            return result
       }
       function rank(){
        let rankPoints = points()
        let level = ""

        if(rankPoints <= 10){
            level = "Ferro"
        }else if(rankPoints >= 11 && rankPoints <= 20){
            level = "Bronze"
        }else if(rankPoints >= 21 && rankPoints <= 50){
            level = "Prata"
        }else if(rankPoints >= 51 && rankPoints <= 80){
            level = "Ouro"
        }else if(rankPoints >= 81 && rankPoints <= 90){
            level = "Diamante"
        }else if(rankPoints >= 91 && rankPoints <= 100){
            level = "Lendário"
        }else if(rankPoints >= 101){
            level = "Imortal"
        }


        return `<h5 class="msg2">O Herói tem de saldo de ${rankPoints} vitórias e está no nível ${level}!</h5>`
    }

    document.getElementById("content").innerHTML = rank()
    var b = document.querySelector("button");
    b.setAttribute("id","button2");
    b.setAttribute("onclick","window.location.reload()");
    document.getElementById("button2").innerHTML = "Recarregar Página"
    }    

    
}









