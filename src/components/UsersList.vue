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
          george.bluth@reqres.in
        </p>
      </div>

      <div class="user-item__actions">
        <i class="fa-solid fa-pencil" />
        <i class="fa-solid fa-trash" />
        <router-link
          :to="{name: 'listar-usuario', params: {id: user.id}}"
          :user="user.id"
        >
          <i class="fa-solid fa-eye" />
        </router-link>
      </div>
    </li>
  </ul>
</template>

<script>

import axios from 'axios';

export default {
    name: 'UsersList',
    data() {
        return {
            users: {}
        };
    },
    beforeCreate() {
        axios.get('https://reqres.in/api/users')
            .then(response => this.users = response.data)
    }
}
</script>

<style>

.users-list {
    display: grid;
    gap: 15px;
    width: 100%;
    margin-top: 2rem;
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