var albums = {

    searchByAlbum: function(title) {

        title.replace(" ", "%20")

        $.get("https://api.spotify.com/v1/search?q="+title+"&type=album", function(data) {

            console.log(data.albums.items)
            if (data){
                $.get("/cat-spotify/albums/list.jade", function(template) {
                    var html = jade.render(template, {
                        data: data
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
            $("#searchdiv").html(html)
        })

        // default search results
        albums.searchByAlbum('Babel')

    }

}