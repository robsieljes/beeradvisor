Vue.component('advisor-user', {
  template: `
    <div>
      <div>Your Username: {{ username}}</div>
      <input type="text">
      <button v-on:click="getUserName">Get username</button>
    </div>
  `,
  data: function () {
    return {
      menuItems: [],
    }
  },
  created() {
    this.apiRequest('/api/menu', (menuItems) => {
      this.menuItems = menuItems;
    })
  },
  render: function (getUsername) {
    return getUsername(
      console.log("hello")
    )
  }

});