<template>
  <router-link
    :to="{name: link.name}"
    :class="className"
    tag="button"
    evento
  >
    {{ textoBtn }}
  </router-link>
</template>

<script>
export default {
    name: 'ComponenteBtn',
    props: ['textoBtn', 'link', 'className', 'evento'],
    
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
button:focus,
button:active {
  opacity: .6;
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