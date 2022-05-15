<template>
  <ul class="users-list">
    <li 
      v-for="user in users.data"
      :key="user.id"
      class="users-list__item"
    >
      <img
        class="user-item__img"
        :src="user.avatar"
        :alt="user.first_name + ' ' + user.last_name + ' Avatar'"
      >

      <div class="user-item__content">
        <p class="user-content__id">
          #{{ user.id }}
        </p>
        <p class="user-content__name">
          {{ user.first_name + user.last_name }}
        </p>
        <p class="user-content__email">
          {{ user.email }}
        </p>
      </div>

      <div class="user-item__actions">
        <i
          class="fa-solid fa-pencil"
          @click="atualizarUsuario(user)"
        />
        <router-link
          :to="{name: 'deletar-usuario', params: {id: user.id}}"
        >
          <i
            class="fa-solid fa-trash"
            @click="mostrarModal"
          />
        </router-link>
        
        <router-link
          :to="{name: 'listar-usuario', params: {id: user.id}}"
          :user="user.id"
        >
          <i class="fa-solid fa-eye" />
        </router-link>
      </div>
    </li>
    <div
      v-if="modalAberto"
      class="modal-wrapper"
    >
      <div class="modal">
        <div class="modal-header">
          <h2 class="modal-titulo">
            Tem certeza que deseja deletar este usuário?
          </h2>
        </div>
        <div class="modal-conteudo">
          {{ mesangemDeletar }}
        </div>
        <div class="modal-acoes">
          <button
            class="modal-btn__cancelar"
            @click="modalAberto = false"
          >
            Cancelar
          </button>
          <button
            class="modal-btn__confirmar"
            @click.once="deletarUsuario"
          >
            Deletar usuário
          </button>
        </div>
      </div>
    </div>
  </ul>
</template>

<script>

import axios from 'axios';
import EventBus from './../EventBus';

export default {
    name: 'ListaUsuarios',
    data() {
        return {
            users: {},
            modalAberto: false,
            url: window.location.toString().split('/'),
            mesangemDeletar: ''
        };
    },
    beforeCreate() {
        axios.get('https://reqres.in/api/users')
            .then(response => this.users = response.data)
    },
    methods: {
        mostrarModal() {
            this.mesangemDeletar = ''
            this.modalAberto = true;
        },
        atualizarUsuario(usuario) {
            EventBus.$emit('click', usuario)
        },
        deletarUsuario() {
            axios
                .delete(`https://reqres.in/api/users/${this.url[this.url.length - 1]}`)
                .then(response => {

                    let msg = 'Usuário deletado com sucesso!';
                    if ( response.status != 204 ) {
                        msg = 'Erro ao deletar este usuário'
                    }

                    this.mesangemDeletar = msg;
                    setTimeout(() => {
                        this.modalAberto = false
                    }, 3000)
                    return;
                })
        }
    }
}
</script>

<style>

.users-list {
    display: grid;
    gap: 15px;
    width: 100%;
    margin-top: 2rem;
    position: relative;
}

.users-list__item {
    display: grid;
    grid-template-columns: .5fr 2fr .5fr;
    width: 100%;
    gap: 1.5rem;
    align-items: center;
    background: var(--bg-grey-1);
    border-radius: var(--radius);
    position: relative;
    padding: 1.25rem 1.875rem;
    transition: all ease .3s;
}

.users-list__item::before {
    position: absolute;
    left: -6px;
    top: 2rem;
    content: '';
    background: var(--bg-dark);
    height: 20px;
    width: 4px;
}

.users-list__item:hover, .users-list__item:focus {
    transform: scale(1.05);
}

.user-item__img {
    border-radius: var(--radius);
    width: 5rem;
    height: 5rem;
}

.user-item__content {
    margin-left: 1.25rem;
}

.user-content__id {
    color: var(--bg-grey-2);
    font-size: 1rem;
    margin-bottom: .8rem;
}

.user-content__name {
    font-weight: bold;
    font-size: 1.25rem;
    margin-bottom: .3rem;
}

.user-content__email {
    color: var(--bg-grey-2);
}

.user-item__actions {
    display: flex;
    gap: 1rem;
}

i {
    cursor: pointer;
    color: var(--bg-grey-2);
    transition: opacity ease .3s;
}

i:hover, i:focus {
    opacity: .6;
}

.modal-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    /* transform: translate(-50%, -50%); */
    background: #000000ab;
}

.modal {
    display: grid;
    width: min(max(300px, 380px + 10vw), 600px);
    background: var(--bg-white);
    padding: 1.5rem;
    border-radius: var(--radius);
}

.modal-header {
    margin: 0 0 4rem;
}

.modal-titulo {
    font-size: 1.25rem;
    font-weight: 400;
}

.modal-acoes {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
}

.modal-btn__cancelar {
    box-shadow: 0px 0px 0px 2px #e43f3f inset;
    background: none;
    color: #e43f3f;
}

.modal-btn__confirmar {
    background: #54aa51;
}

@media only screen and (max-width: 501px) {
    h1 {
        font-size: 2rem;
    }
    .users-list__item {
        grid-template-columns: .6fr 1fr;
        gap: 1rem;
    }

    .user-item__content {
        margin: auto;
    }
}

@media only screen and (max-width: 380px) {
    .users-list__item {
        padding: 1rem 1rem;
    }
}

</style>