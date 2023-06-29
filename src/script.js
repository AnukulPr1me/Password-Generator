function generate(){
    let dictionary = '';

    if(document.getElementById('lowercaseCb').checked){
        dictionary = +'qwertyuiopasdfghjklzxcvbnm';
    }
    
    document.querySelector('input[type = "text"]').value = 'test 2'
}

generate();