<template>
  <form action="">
    <div class="form-container">
      {{ mensagem }}
      <label for="nome">Nome do usuário</label>
      <input
        id="nome"
        v-model="nomeCompleto"
        type="text"
        name="nome"
        required="true"
      >
    </div>
    <div class="form-container">
      <label for="funcao">Função do usário:</label>
      <select
        id="funcao"
        v-model="funcaoUsuario"
        required="true"
      >
        <option
          value=""
          selected
          disabled
        >
          Selecione uma função
        </option>
        <option value="Desenvolvedor">
          Desenvolvedor
        </option>
        <option value="Gerente de Projetos">
          Gerente de Projetos
        </option>
        <option value="Tech Lead">
          Tech Lead
        </option>
        <option value="UI/UX Designer">
          UI/UX Designer
        </option>      
      </select>
    </div>
    <button
      type="submit"
      class="cadastrar-btn"
      @click.prevent="atualizarUsuario"
    >
      Salvar dados do usuário
    </button>
  </form>
</template>

<script>
import axios from 'axios'
import EventBus from './../../EventBus'


export default {
    name: 'AtualizarUsuario',
    data() {
        return {
            usuario: null,
            mensagem: '',
            funcaoUsuario: ''
        }
    },
    computed: {
        nomeCompleto: {
            get() {
                return this.usuario?.first_name + ' ' + this.usuario?.last_name
            },
            set(nome) {
                [this.usuario.first_name, this.usuario.last_name] = nome.split(' ')
            } 
        }
    },
    created() {
        EventBus.$on('click', (usuario) => this.usuario = usuario)
    },
    methods:{
        atualizarUsuario() {
            const dadosUsuario = {
                name: this.nomeCompleto,
                job: this.funcaoUsuario
            }
            axios
                .put(`https://reqres.in/api/users/${this.usuario.id}`, dadosUsuario)
                .then(response => {
                    let msg = 'Usuário atualizado com sucesso!';
                    if (response.status != 200) {
                        msg = 'Erro ao atualizar usuário!'
                        return;    
                    }
                    this.mensagem = msg
                    return;
                });
            setTimeout(() => {
                EventBus.$emit('close')
                this.mensagem = ''
            }, 3000)
            
        }
    }
}

</script>

<style>

</style>