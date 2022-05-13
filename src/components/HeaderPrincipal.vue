<template>
  <header>
    <h1>Usuários</h1>
    <ComponenteBtn
      :link="{ name: 'home' }"
      :class-name="dark"
      :texto-btn="'Novo usuário'"
    />
  </header>
</template>

<script>
import ComponenteBtn from './ComponenteBtn.vue'

export default {
    name: 'HeaderPrincipal',
    components: {
        ComponenteBtn
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