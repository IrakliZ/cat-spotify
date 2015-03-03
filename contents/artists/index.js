var artists = {

    searchByName: function(name) {

        var name = name || "Tania Bowra"
        
        name.replace(" ", "%20")
        
        $.get("https://api.spotify.com/v1/search?q="+ name +"&type=artist", function(data) {
            console.log(data)
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
            $("#searchdiv").html(html)
        })

        // default search results
        artists.searchByName('Tania Bowra')

    }

}
