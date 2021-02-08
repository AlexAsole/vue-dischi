new Vue({
  el: '#root',
  data: {
    diskList: [],
    genre: [],
    selected: ''
  },
  methods: {
    filterGenre: function(e) {
      if (e.genre !== this.selected && this.selected !== '') {
        return false
      } else {
        return true
      }
    }
  },
  mounted() {
    const self = this;
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then(function(resp) { /* funziona anche un foreach con cui pusho ogni item in disklist, ma così e più snello,
        senza ciclare la lista */
        const disks = resp.data.response
        self.diskList = disks
        disks.forEach((item) => {
          if(!self.genre.includes(item.genre)){
            self.genre.push(item.genre)
          }
        });
      })
  }
})
Vue.config.devtools = true;
