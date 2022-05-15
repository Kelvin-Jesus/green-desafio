<template>
  <div id="app">
    <HeaderPrincipal />
    <ListaUsuarios />
  </div>
</template>

<script>
import HeaderPrincipal from './HeaderPrincipal.vue';
import ListaUsuarios from './ListaUsuarios.vue';

export default {
    name: 'HomeApp',
    components: {
        HeaderPrincipal,
        ListaUsuarios
    }
};
</script>