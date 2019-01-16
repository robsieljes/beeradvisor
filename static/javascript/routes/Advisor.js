import '../components/Advisor.js';

export let Advisor = {
  template: `
  <div class="advisor">
    <p>{{ username }}</p>
    <input type="text" v-model="username">
    <button @click="test()">Test</button>
  </div>`,
  data: function() {
    return{
      username: ""
    }

  },
  methods: {
    test: function(){
      this.apiRequest('/api/user/' + this.username, (test) => {
        console.log(test);
      })
    }
  }
};