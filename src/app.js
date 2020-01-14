import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",

    data: {
      chores: [
        {name:"Buy Shopping", isComplete: true},
        {name: "Clean Bathroom", isComplete: false},
        {name: "Cars MOT", isComplete: false},
        {name: "Bath Dog", isComplete: false},
        {name: "Gardening", isComplete: false}
      ],
      newChore: { name: ""}
    },
    methods: {
      saveNewChore: function() {
        this.chores.push(this.newChore);
        this.newChore = {name: "", isComplete: false};
      },
      completeChore: function(index) {
        this.chores[index].isComplete = true;
      }
    }
  });
});
