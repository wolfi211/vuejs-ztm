const vm = Vue.createApp({
  data() {
    return {
      firstName: "Dan",
      lastName: "Wolf",
      url: "https://google.com",
      rawUrl: '<a href="https://google.com" target="_blank">Google</a>',
      age: 20,
    };
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`;
    },
    increment() {
      this.age++;
    },
    updateLastName(message, event) {
      console.log(message);
      this.lastName = event.target.value;
    },
  },
}).mount("#app");

// setTimeout(() => {
//   vm.firstName = "Reka";
// }, 2000);

// Vue.createApp({
//   data() {
//     return {
//       firstName: "Reka",
//       lastName: "Wolf",
//     };
//   },
// }).mount("#app2");
