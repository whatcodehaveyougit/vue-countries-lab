import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el:"#app",
    // data: {
    //   countries: [
    //     { name:"" }
    //   ]
    // },
    data: {
      countries: [],
      country: null,
      countriesFlag: [],
      favouriteCountries: []
    },
    mounted(){
      this.fetchCountry();
    },
    methods: {
      fetchCountry: function() {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(countries => this.countries = countries)
      }, fetchFlag: function() {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(countries => this.countriesFlag = countries[0].flag)
      },
      addItemToFavourites: function(index) {
        // fetch("https://restcountries.eu/rest/v2/all")
        // .then(response => response.json())
        // .then(countries => this.favouriteCountries = countries[index])
        return.log(this.countries[index].name)
      }
    }
  });
});
