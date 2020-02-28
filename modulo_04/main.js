//modulo 04.1(Requisições ajax)
/*
var xhr = new XMLHttpRequest();//da acesso a funcionalidade ao AJAX de recuperar informações do servidor
xhr.open('GET', 'https://api.github.com/users/victorloiola0/');//busca informações por meio do metodo get
xhr.send(null);

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){//resposta voltou
        console.log(JSON.parse(xhr.responseText));//retorna o corpo da requisição
    }
}
*/
//modulo 04.2(Promisses)

var minhaPromise = function(){
    return new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest();
            xhr.open('GET','https://api.github.com/users/victorloiola0');
            xhr.send(null);

            xhr.onreadystatechange = function(){

                if(xhr.readyState === 4){
                    if(xhr.status===200){
                        resolve(JSON.parse(xhr.responseText));
                    }else{
                        reject('Erro na requisição');
                    }
                }
            }
        
    });
}

minhaPromise()
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });
