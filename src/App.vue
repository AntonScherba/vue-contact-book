<template>
  <div id="app">
    <nav>
      <router-link to="/vue-contact-book">Contacts</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
}

.remove-btn {
  background-color: red;
  color: #fff;
  outline: none;
  border: none;
  border-radius: 50%;
}

.edit-btn {
  margin-right: 1rem;
}
a {
  color: #42b983;
}
</style>
