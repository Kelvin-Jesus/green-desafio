<template>
  <ul class="users-list">
    <li class="users-list__item">
      <img
        class="user-item__img"
        src=""
        alt=""
        style="background: black"
        width="100"
        height="100"
      >

      <div class="user-item__content">
        <p class="user-content__id">
          #1
        </p>
        <p class="user-content__name">
          George Bluth
        </p>
        <p class="user-content__email">
          george.bluth@reqres.in
        </p>
      </div>

      <div class="user-item__actions">
        <i class="fa-solid fa-pencil" />
        <i class="fa-solid fa-trash" />
        <i class="fa-solid fa-eye" />
      </div>
    </li>
  </ul>
</template>

<script>
export default {
    name: 'UsersList'
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
    max-height: 7.5rem;
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


</style>