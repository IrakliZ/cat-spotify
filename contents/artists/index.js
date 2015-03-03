var artists = {

    searchByName: function(name) {

        var name = name || "Tania Bowra"

        $.get("https://api.spotify.com/v1/search?q="+ name +"&type=artist", function(data) {

            $.get("/cat-spotify/artists/list.jade", function(template) {
                var html = jade.render(template, {
                    data: data
                })
                $("#list").html(html)
            })

        })


    },

    load: function() {

        $.get("/cat-spotify/artists/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })

        // default search results
        artists.searchByName('Tania Bowra')

    }

}
