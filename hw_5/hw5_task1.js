if (typeof Function.prototype.myBind !== 'undefined') {
  Function.prototype.myBind = function(context){
    newArgs = Array.prototype.slice.call(arguments);  //, 1)
    //newArgs.forEach(function(val) {console.log(val);})
    this.apply(context, newArgs);
  };
}

/*
var App = function(){
  return {
    init: function() {
      this.nodes = document.querySelectorAll('.node');
      this.setListeners();
    },
    
    setListeners: function() {
      [].slice.call(this.nodes).forEach(function(n){
        n.onclick = this.onClick.myBind(this);
      }, this);
    },
    
    onClick: function(e) {
      e = e || window.event;
      var node = e.target || e.srcElement;
      // this - should be the main context - instance of App
      // node - should be the node, that fires event
    }
  };
};
 
(new App()).init();
*/