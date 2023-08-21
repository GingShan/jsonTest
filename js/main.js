$(function(){
    $.ajax({
        method: "get",
        url: "https://gingshan.github.io/jsonTest/data/data.json",
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
            url: "https://gingshan.github.io/jsonTest/data/data.json",
            dataType: "json",
            data: {
                name: name
            }
        });
    })

    $('#delete a').on('click',function(){
        let id = $('#delete > input').val().trim()
        if (!id) return false
        $.ajax({
            method: "delete",
            url: "https://gingshan.github.io/jsonTest/data/data.json/" + id,
            dataType: "json",

        }).done(function(res){
            console.log(res)
            $('#users').empty()
            res.forEach(function(user){
                console.log(user)
            });
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
            url: "https://gingshan.github.io/jsonTest/data/data.json/" + id,
            dataType: "json",
            data:{
                name: name
            }
        });
    })
})