AFRAME.registerComponent("comic-container", {
    schema: {
        state: {
            type: 'string',
            default: 'place_list'
        },
        selected_card: {
            type: 'string',
            default: ''
        }
    },
    init: function () {
        this.placesContainer = this.el
        this.createCards()
    },
    showtxt: function () {
        fadebg = document.querySelector('#fadebackground')
        fadebg.setAttribute('visible', true)
        titleremove = document.querySelector('#titles')
        titleremove.setAttribute('visible', false)
        cursor_image = document.querySelector('#circle_cursor')
        cursor_image.setAttribute('visible', false)
        img_el = document.querySelector('#img_plane')
        info_el = document.querySelector('#info_plane')
        bg_el = document.querySelector('#bg_plane')
        img_el.setAttribute('visible', true)
        info_el.setAttribute('visible', true)
        bg_el.setAttribute('visible', true)
        places_container_main = document.querySelector('#places-container')
        comic_values = places_container_main.getAttribute('comic-container')
        details_id = comic_values.selected_card
        img_id_upload = `images_movies/i_${details_id}.png`
        img_el.setAttribute('material',{src:img_id_upload})
        places_container_main.setAttribute('position',{x:0,y:0,z:-32})
        data_list = {
            doctorstrange:'Doctor Strange In The Multierse Of Madness Is A Movie Where The Hero Doctor Srange, A Sorceror Protects A Multiverse Traveller America Chavez And Fights Scarlet Witch, The Owner Of A Dark Hold Which Is A Book That Teaches Magic Of Multiversal Level. The Film Was Made In An Impressive Budget Of $350.6 million And Grossed $955.8 Million Worldwide, Making It One Of The Highest-Grossing Films Of 2022. “Doctor Strange In The Multiverse Of Madness” Combines Superhero Action, Multiverse Exploration, And Horror Elements, Making It A Captivating Addition To The MCU!',
            spiderman:'“Spider-Man: No Way Home” Is A Thrilling Addition To The Marvel Cinematic Universe. Featuring Tom Holland As The Main Character Spider Man, Doctor Strange Is Again Helping It Link To The Multiverse Saga. Spider Man Of MCU Collaborates With And Takes Help Of The Ultimate Spider Man And The Amazing Spider Man Of Different Universes To Fight Against Multiple Villians From The Multiverse. Its Budget Was $200 Million But Achieved A Remarkable Success Of Grossing $1.92 Billion Worldwide Making It One Of The Highest Grossing Films Of Its Time.',
            infinitywar:"“Avengers: Infinity War” Unleashed An Unprecedented Cinematic Journey Across The MCU.The Film's Production Budget Was A Staggering $321 Million, Reflecting Its Ambitious Scope. It Brought All The MCU Superheroes, Which Itself Is A Mind-Blowing Fact. It Brought Together Marvel Superheroes Across The Universe In A Battle Against The Mad Titan Thanos, Who At The End Of The Movie Won And Was Successful In Vanishing Half Of The Universe's Population. It Grossed An Astounding $2.05 Billion Which Is A Testament To Its Popularity. It Was One Of The Highest Grossing Films Of All Time.",
            endgame:'“Avengers: Endgame” Stands As A Monumental Conclusion To The Infinity Saga Within The MCU. The Film’s Production Budget Soared To An Epic $356 Million, Reflecting Its Grand Scale And Ambitious Visuals. It Gathered Heroes From Across The MCU For A Final Stand Against Thanos. It Grossed A Whopping $2.8 Billion, Surpassing All Expectations And Securing Its Legacy As One Of The Most Successful Films In Cinema History. It Emphasized The Comeback Of Heroes And Victory Of Good Over Evil. “Avengers: Endgame” Is The Culmination Of A Series Of 22 Interconnected Marvel Films, Offering A Stunning Conclusion To The Epic Narrative Arc Known As The Infinity Saga.'
        }
        info_el.setAttribute('text',{value:data_list[details_id]})
    },
    tick: function () {
        var state_var = document.querySelector('#places-container')
        state_value = state_var.getAttribute('comic-container')
        console.log(state_value.state)
        if (state_value.state == 'view') {
            this.showtxt()
        }
    },

    createCards: function () {
        const thumbNailsRef = [{
                id: "doctorstrange",
                title: "Doctor Strange In The Multiverse Of Madness",
                url: "Doctor_Strange.png",
            },
            {
                id: "spiderman",
                title: "Spiderman No Way Home",
                url: "Spiderman.png",
            },
            {
                id: "infinitywar",
                title: "Avengers Infinity War",
                url: "Infinity_War.png",
            },
            {
                id: "endgame",
                title: "Avengers End Game",
                url: "End_Game.png",
            }
        ]
        let previousXPosition = -60;

        for (var item of thumbNailsRef) {
            const posX = previousXPosition + 25
            const posY = 10
            const posZ = -40
            const position = {
                x: posX,
                y: posY,
                z: posZ
            };
            previousXPosition = posX

            // Border Element
            const borderEl = this.createBorder(position, item.id)
            console.log(borderEl)

            // Thumbnail Element
            const thumbnailEl = this.createThumbnail(position, item)

            // Title Text Element
            textEl = this.createText(item, position)

            this.placesContainer.appendChild(borderEl)
            borderEl.appendChild(thumbnailEl)
            borderEl.appendChild(textEl)
        }
    },
    createBorder: function (position, id) {
        border = document.createElement('a-entity')
        border.setAttribute('geometry', {
            primitive: 'plane',
            width: 21,
            height: 29
        })
        border.setAttribute('material', 'color', 'blue')
        border.setAttribute('id', id)
        border.setAttribute('position', position)
        border.setAttribute('cursor-event', {})
        return border
    },
    createThumbnail: function (position, item) {
        thumbnail = document.createElement('a-entity')
        thumbnail.setAttribute('id', item.id)
        thumbnail.setAttribute('geometry', {
            primitive: 'plane',
            height: 28,
            width: 20
        })
        thumbnail.setAttribute('material', {
            src: item.url
        })
        thumbnail.setAttribute('position', {
            x: 0,
            y: 0,
            z: 0.11
        })
        return thumbnail
    },
    createText: function (item, position) {
        text = document.createElement('a-entity')
        text.setAttribute('text', {
            value: item.title,
            font: 'kelsonsans',
            width: 60,
            color: 'red',
            align: 'center',
        })
        text.setAttribute('id', item.id)
        var position_1 = position
        position_1.y = -28
        text.setAttribute('position', position_1)
        console.log(position)
        return text
    }


});