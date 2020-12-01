// Descrizione:
// Facciamo una chiamata ajax all’api di boolean al seguente indirizzo.
// https://flynn.boolean.careers/exercises/api/array/music
// L’api ci restituirà una decina di dischi musicali che dovremo stampare a schermo con Vue.

var app = new Vue({
    el: '#app',
    data: {
      dischi: []
    },
    mounted: function () {
      for (let i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then(risposta => {
            this.dischi=risposta.data.response;
        })}
        console.log(this.dischi)
      }
      //this.faiqualcosa();
    // methods: {
    //   generaNumero: function (indice) {
    //     axios.get(randNUm)
    //     .then(risposta => {
    //       let pushedNum = risposta.data.response;
    //       //this.numbers[0] = pushedNum;
    //       this.$set(this.numbers, indice, pushedNum);
    //       // console.log(pushedNum);
    //       console.log(this.numbers);
    //     })
    //   },
    //   faiqualcosa: function () {
    //     alert("ho fatto qualcosa!");
    //   }
  
    // }
  
  });
  