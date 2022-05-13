<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import HeaderPrincipal from './components/HeaderPrincipal.vue';
// import UsersList from './components/UsersList.vue';

export default {
    components: {
        // HeaderPrincipal,
        // UsersList
    }
};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    font-size: 16px;
    --bg-white: hsla(0, 0%, 100%, 1);
    --bg-dark: hsla(0, 0%, 0%, 1);

    --bg-grey-1: hsla(0, 0%, 97%, 1);
    --bg-grey-2: hsla(0, 0%, 47%, 1);
    --radius: .3rem;


}

body {
    margin: 4rem auto 0;
    font-family: 'Montserrat', sans-serif;
    background: var(--bg-white);
}

#app {
    max-width: 37.5rem;
    width: min(max(300px, 100vw), 37.5rem);
    margin: 0 auto;
}

ul {
    list-style: none;
}

.grey-btn {
    background: var(--bg-grey-1);
    color: var(--bg-dark);
}

@media only screen and (max-width: 620px) {
    #app {
        width: min(max(300px, 100vw), calc(100% - 1rem));
    }
}

</style>
