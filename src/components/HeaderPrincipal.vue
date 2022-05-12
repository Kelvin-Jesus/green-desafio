<template>
  <header>
    <h1>Usuários</h1>
    <CadastrarBtn />
  </header>
</template>

<script>
import CadastrarBtn from './CadastrarBtn.vue'

    export default {
        name: 'HeaderPrincipal',
        components: {
            CadastrarBtn
        }
    };

</script>

<style>

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

h1 {
    font-size: 48px;
}

</style>