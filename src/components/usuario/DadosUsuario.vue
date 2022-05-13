<template>
  <section class="user__data">
    <div class="user__data-container">
      <img
        :src="dadosUsuario.data.avatar"
        alt=""
        class="user__avatar"
      >
      <div>
        <p class="user-data__subtitle">
          Primeiro Nome
        </p>
        <p class="user__first-name">
          {{ dadosUsuario.data.first_name }}
        </p>
      </div>
      <div>
        <p class="user-data__subtitle">
          Último Nome
        </p>
        <p class="user__last-name">
          {{ dadosUsuario.data.last_name }}
        </p>
      </div>
    </div>
    <ul class="user-links">
      <li class="user-link">
        <p class="user-link__title">
          Endereço de e-mail:
        </p>
        <p class="user-link__item">
          {{ dadosUsuario.data.email }}
        </p>
      </li>
      <li class="user-link">
        <p class="user-link__title">
          Link do avatar:
        </p>
        <p class="user-link__item">
          {{ dadosUsuario.data.avatar }}
        </p>
      </li>
      <li class="user-link">
        <p class="user-link__title">
          Link de suporte:
        </p>
        <p class="user-link__item">
          {{ dadosUsuario.support.url }}
        </p>
      </li>
      <li class="user-link">
        <p class="user-link__title">
          Descrição do usuário:
        </p>
        <p class="user-link__item">
          {{ dadosUsuario.support.text }}
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
    name: 'DadosUsario',
    props: ['dadosUsuario'],
    created() {
        console.debug(this.dadosUsuario)
    }
}
</script>

<style>

.user__data-container {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin: 2.5rem 0;
}

.user__avatar {
    width: 120px;
    height: 120px;
    border-radius: var(--radius);
    object-fit: cover;
}

.user-data__subtitle {
    font-size: .8rem;
    color: var(--bg-grey-2);
}
.user__first-name, .user__last-name {
    font-weight: 700
}

.user-links {
    display: grid;
}

.user-link {
    margin-bottom: .8rem;
}

.user-link__title {
    font-size: .8rem;
    color: var(--bg-grey-2);
    margin-bottom: .3rem;
}

.user-link__item  {
    font-weight: 600;
}

</style>