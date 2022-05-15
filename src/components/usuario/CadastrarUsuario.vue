<template>
  <form action="">
    <div class="form-container">
      {{ mensagem }}
      <label for="nome">Nome do usuário</label>
      <input
        id="nome"
        v-model="nomeUsuario"
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
      @click.prevent="cadastrarUsuario"
    >
      Salvar dados do usuário
    </button>
  </form>
</template>

<script>

import axios from 'axios'

export default {
    name: 'CadastrarUsuario',
    props: ['mostrarFormulario'],
    data() {
        return {
            nomeUsuario: '',
            funcaoUsuario: '',
            mensagem: ''
        }
    },
    watch: {
        mensagem() {
            return setTimeout(() => {
                return this.mensagem = ''
            }, 4000);
        }
    },
    methods: {
        cadastrarUsuario(e) {
            const usuario = {
                name: this.nomeUsuario,
                job: this.funcaoUsuario
            }
            if ( usuario.name == '' || usuario.job == '') return;
            e.target.innerText = 'Salvando...'
            e.target.setAttribute('disabled', '')
            axios
                .post('https://reqres.in/api/users', usuario)
                .then(response => {
                    if (response.status != 201) {
                        return this.mensagem = 'Ouve um erro ao cadastrar este usuário'
                    }
                    e.target.innerText = 'Salvando dados do usuário'
                    e.target.removeAttribute('disabled')
                    return this.mensagem = 'Usuário cadastrado com sucesso'
                })
        }
    }
}
</script>

<style>

.form-container {
    margin: 1rem 0;
}

label {
    margin: .5rem 0;
    font-weight: 700;
    display: block;
}

input, select {
    background: #fff;
    border: 1px solid #ccc;
    padding: .8rem .5rem;
    border-radius: var(--radius);
    width: 100%;
}

.cadastrar-btn {
    width: 100%;
}

</style>