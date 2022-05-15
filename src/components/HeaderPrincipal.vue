<template>
  <section>
    <header>
      <h1>Usuários</h1>
      <button
        v-show="!mostrarFormulario"
        @click="mostrarFormulario = !mostrarFormulario"
      >
        Novo usuário
      </button>
      <button
        v-show="mostrarFormulario"
        class="grey-btn"
        @click="mostrarFormulario = !mostrarFormulario"
      >
        Cancelar
      </button>
    </header>
    <section>
      <CadastrarUsuario
        v-show="mostrarFormulario"
        :modal-aberto="mostrarFormulario"
      >
        <input
          id=""
          type="date"
          name=""
        >
      </CadastrarUsuario>
    </section>
  </section>
</template>

<script>
import CadastrarUsuario from './usuario/CadastrarUsuario.vue'

export default {
    name: 'HeaderPrincipal',
    components: {
        CadastrarUsuario
    },
    data() {
        return {
            mostrarFormulario: false
        }
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