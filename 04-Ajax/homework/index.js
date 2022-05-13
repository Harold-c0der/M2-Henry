const mostraramigos = () => {
    $.get('http://localhost:5000/amigos', function(arr) {
        $('#lista').empty()
        arr.forEach(e => {
            $(`<li>${e.name}</li>`).appendTo('ul')
        });
    })
}



    $('#boton').click(function(){
        $.get('http://localhost:5000/amigos', function(arr) {
            arr.forEach(e => {
                $(`<li>${e.name}</li>`).appendTo('ul')
            });
        })
    });

    $('#search').click(function(){
        let value = $('#input').val()
        let amigoText = document.querySelector('#amigo')
        $.get('http://localhost:5000/amigos', function(arr) {
            let con = arr.find( elem => elem.id == value);
            (con) ? amigoText.innerText = `Tu amigo numero ${value} es : ${con.name}` 
            : amigoText.innerText = `No encontramos tu amigo numero : ${value}` ; 
        })
    });


    $('#delete').click(function(){
        let value = $('#inputDelete').val()
        if (value) {
            $.ajax({
                url : 'http://localhost:5000/amigos/' + value,
                type: 'DELETE',
                success : function(respuesta){
                    $('#success').text('Tu amigo fue eliminado con exito')
                    mostraramigos()
                }
            })
        } else {
            alert('debees ingresar un ID')
        }
        
    });
