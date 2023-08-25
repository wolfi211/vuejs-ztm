const vm = Vue.createApp({
  data() {
    return {
      firstName: "Dan",
      middleName: "",
      lastName: "Wolf",
      url: "https://google.com",
      rawUrl: '<a href="https://google.com" target="_blank">Google</a>',
      age: 20,
    };
  },
  methods: {
    increment() {
      this.age++;
    },
    updateLastName(message, event) {
      console.log(message);
      this.lastName = event.target.value;
    },
    updateMiddleName(event) {
      this.middleName = event.target.value
    }
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`;
    },
  }
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
