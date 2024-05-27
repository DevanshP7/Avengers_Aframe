AFRAME.registerComponent("comic-container",{

    init: function () {
        this.placesContainer = this.el
        this.createCards()
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
            },
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
            const thumbnailEl = this.createThumbnail(position,item)

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
            primitive:'plane',
            width:21,
            height:29
        })
        border.setAttribute('material', 'color', 'blue')
        border.setAttribute('id', id)
        border.setAttribute('position', position)
        border.setAttribute('cursor-event',{})
        return border
    },
    createThumbnail: function (position,item) {
        thumbnail = document.createElement('a-entity')
        thumbnail.setAttribute('id', item.id)
        thumbnail.setAttribute('geometry', {
            primitive: 'plane',
            height:28,
            width:20
        })
        thumbnail.setAttribute('material', {
            src: item.url
        })
        thumbnail.setAttribute('position',{x:0,y:0,z:0.1})
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