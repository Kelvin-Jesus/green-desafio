<template>
  <div id="app">
    <HeaderPrincipal />
    <UsersList />
  </div>
</template>

<script>
import HeaderPrincipal from './HeaderPrincipal.vue';
import UsersList from './UsersList.vue';

export default {
    name: 'HomeApp',
    components: {
        HeaderPrincipal,
        UsersList
    }
};
</script>