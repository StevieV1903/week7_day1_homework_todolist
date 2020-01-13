import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",

    data: {
          chores: [
            {name:"Buy Shopping", isComplete: false},
            {name: "Clean Bathroom", isComplete: false},
            {name: "Cars MOT", isComplete: true}
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
