$(function(){
    $.ajax({
        method: "GET",
        url: "http://localhost:3000/users",
        dataType: "json",
        data: {
        },
    }).done(function(res){
        console.log(res)
        $('#users').empty()
        res.forEach(function(user){
            $('#users').append('<li>' + user.id + ". " +  user.name + '</li>');
        });
    })
    .fail(function(err){
        console.log(err)
    })

    $('#create a').on('click',function(){
        let name = $('#create > input').val().trim()
        if (!name) return false
        $.ajax({
            method: "post",
            url: "http://localhost:3000/users",
            dataType: "json",
            data: {
                name: name
            }
        }).done(function(res){
            $('.Create').val().empty()
        })
    })

    $('#delete a').on('click',function(){
        let id = $('#delete > input').val().trim()
        if (!id) return false
        $.ajax({
            method: "delete",
            url: "http://localhost:3000/users/" + id,
            dataType: "json",

        }).done(function(res){
            console.log(res)
            $('#users').empty()
            res.forEach(function(user){
                console.log(user)
            });
            $('.Delete').val().empty()
        })
        .fail(function(err){
            console.log(err)
        })
    })
    $('#update a').on('click',function(){
        let id = $('#update > input[name=id]').val().trim()
        if (!id) return false
        let name = $('#update > input[name=name]').val().trim()
        if (!name) return false
        $.ajax({
            method: "put",
            url: "http://localhost:3000/users/" + id,
            dataType: "json",
            data:{
                name: name
            }
        }).done(function(res){
            $('.Update').val().empty()
        })
    })
})