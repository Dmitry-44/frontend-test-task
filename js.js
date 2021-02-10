//  GETTING LOCAL TIME IN SECONDS
let getSeconds = function() {
  return new Date().getSeconds()
} ;


//VUE TEAMPLATE

 let vue1 = new Vue({
    el: '#content',
    data: {
        element:'',
        dataThoughts: [],
    },

    methods: {
      addElement: function(){
          this.dataThoughts.push(this.element + " - " + getSeconds());
          this.element = ''
      }
    },
    
    computed: {
      canCreate(){
        if (this.element.trim())
        return true
      },
    },

});  
       


 


 