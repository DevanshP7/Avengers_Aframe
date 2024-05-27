AFRAME.registerComponent('cursor-event',{
    schema:{
        selectedItemId : {type:'string',default:''}
    },
    init:function(){
        this.handleMouseEnterEvent()
        this.handleMouseExitEvent()
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
    }
})