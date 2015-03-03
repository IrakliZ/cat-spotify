var album = {

    searchByAlbum: function(title) {

        $.get("https://api.spotify.com/v1/search?q="+title+"&type=album" + zipcode, function(data) {

            console.log('got ' + data)
            if (data.items){

                $.get("/cat-spotify/albums/list.jade", function(template) {
                    var html = jade.render(template, {
                        data: data.items
                    })
                    console.log(html)
                    $("#list").html(html)
                })

            }

        })

    },

    load: function() {

        $.get("/cat-spotify/albums/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })

        // default search results
        album.searchByAlbum('Babel')

    }

}