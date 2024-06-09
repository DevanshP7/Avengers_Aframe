AFRAME.registerComponent('cursor-event',{
    schema:{
        selectedItemId : {type:'string',default:''}
    },
    init:function(){
        this.handleMouseEnterEvent()
        this.handleMouseExitEvent()
        this.handeMouseClickEvent()
    },
    getPlacesReverse:function(){
        var id = this.el.getAttribute('id')
        var id_array = ['doctorstrange','spiderman','infinitywar','endgame']
        if(id_array.includes(id)){
            var placesContainer = document.querySelector('#places-container')
            placesContainer.setAttribute('cursor-event',{selectedItemId:id})
            this.el.setAttribute('material','color','blue')
        }
    },
    getPlaces:function(){
        var id = this.el.getAttribute('id')
        var id_array = ['doctorstrange','spiderman','infinitywar','endgame']
        if(id_array.includes(id)){
            var placesContainer = document.querySelector('#places-container')
            placesContainer.setAttribute('cursor-event',{selectedItemId:id})
            this.el.setAttribute('material','color','red')
        }
    },
    handleMouseEnterEvent:function(){
        this.el.addEventListener('mouseenter',(e)=>{
            this.getPlaces()
        })
    },
    handleMouseExitEvent:function(){
        this.el.addEventListener('mouseleave',(e)=>{
            this.getPlacesReverse()
        })
    },
    handeMouseClickEvent:function(){
        this.el.addEventListener('click',(e)=>{
            var place_container = document.querySelector('#places-container')
            var {state} = place_container.getAttribute('comic-container')
            if(state=='place_list'){
                var id = this.el.getAttribute('id')
                id_array = ['doctorstrange','spiderman','infinitywar','endgame']
                if(id_array.includes(id)){
                    place_container.setAttribute('comic-container',{state:'view',selected_card:id})
                }
            }
        })
    }
})