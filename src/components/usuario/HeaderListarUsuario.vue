<template>
  <header>
    <h1>#{{ id }}</h1>
    <ComponenteBtn
      :texto-btn="'Voltar'"
      :link="{name: 'home'}"
      class="grey-btn"
    />
  </header>
</template>

<script>

import ComponenteBtn from './../ComponenteBtn.vue'

export default {
    components: {
        ComponenteBtn
    },
    props: ['id']
}
</script>