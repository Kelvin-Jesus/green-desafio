<template>
  <section>
    <header>
      <h1>Usuários</h1>
      <button
        v-show="!mostrarFormulario"
        @click="mostrarFormulario = !mostrarFormulario;mostrarFormularioAtualizar = false"
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
      <AtualizarUsuario
        v-show="mostrarFormularioAtualizar"
      />
    </section>
  </section>
</template>

<script>
import CadastrarUsuario from './usuario/CadastrarUsuario.vue'
import AtualizarUsuario from './usuario/AtualizarUsuario.vue'
import EventBus from './../EventBus'

export default {
    name: 'HeaderPrincipal',
    components: {
        CadastrarUsuario,
        AtualizarUsuario
    },
    data() {
        return {
            mostrarFormulario: false,
            mostrarFormularioAtualizar: false,
        }
    },

    created() {
        EventBus.$on('click', () => this.mostraFormularioAtualizar())
        EventBus.$on('close', () => this.mostrarFormularioAtualizar = false)
    },
    methods: {
        mostraFormularioAtualizar() {
            this.mostrarFormularioAtualizar = true;
            this.mostrarFormulario = false;
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