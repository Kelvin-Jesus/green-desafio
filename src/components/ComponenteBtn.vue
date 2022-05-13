<template>
  <router-link
    :to="{name: link.name}"
    :class="className"
    tag="button"
  >
    {{ textoBtn }}
  </router-link>
</template>

<script>
export default {
    name: 'ComponenteBtn',
    props: ['textoBtn', 'link', 'className'],
    created() {
        console.debug(this.textoBtn)
    }
    
}
</script>

<style>

button {
    background: #000;
    font-size: 1rem;
    color: #fff;
    border: none;
    padding: 1rem 2rem;
    border-radius: .3rem;
    transition: all ease .3s;
    cursor: pointer;
}
button:hover,
button:focus {
  /* background: #363636; */
  box-shadow: 0 0 0 3px #303030, 0 0 0 4px #4d4d4d;
  outline: none;
}

button:active {
  box-shadow: 0 0 0 3px #2c2c2c, 0 0 0 4px #4d4d4d;
}

button:disabled {
  opacity: 0.5;
  cursor: wait;
}

@media only screen and (max-width: 335px) {
    button {
        padding: .8rem 1.25rem;
        font-size: .8rem;
    }
}

</style>