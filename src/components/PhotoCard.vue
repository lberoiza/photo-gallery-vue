<script setup lang="ts">

import { ref, defineProps } from "vue";
import type { Photo } from "@/models/Photo.model.ts";


type Props = {
  photo: Photo;
}

const props = defineProps<Props>();
const photo = props.photo;
const emit = defineEmits(['setSelectedPhoto']);



const imageClicked = () => {
  emit('setSelectedPhoto', photo);
}


</script>

<template>
  <article class="card" @click="imageClicked">
    <figure class="card__picture">
      <div class="card__img-container">
        <img class="card__img" :src=photo.url :alt=photo.alt />
      </div>
      <figcaption class="card__info">{{ photo.alt }}</figcaption>
    </figure>
  </article>
</template>

<style scoped>

.card {
  --card-max-width: 25rem;
  --card-max-height: 25rem;
  --transition-time: 0.1s;

  margin: 0 auto;
  width: 100%;
  max-height: var(--card-max-height);
  max-width: var(--card-max-width);
  overflow: hidden;
  border-radius: 1rem;
  cursor: pointer;
  box-shadow: 0.5rem 0.5rem 1rem 0.5rem #00000090;
  transition: transform var(--transition-time) ease-in-out,
  box-shadow var(--transition-time) ease-in-out;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 1rem 1rem 2rem 1rem #00000090;
}

.card__picture {
  width: 100%;
  height: 100%;

  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-areas:
        "photo"
}

.card__img-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  grid-area: photo;
}

.card__img {
  width: 100%;
  height: inherit;
  object-fit: cover;
  object-position: center bottom;
  display: block;
}

.card__info {
  grid-area: photo;
  place-self: end center;
  max-width: 90%;
  font-size: 1.5rem;
  background-color: #00000090;
  border-radius: 0.5rem;
  text-align: center;
  padding: 1rem;
  text-shadow: 2px 2px 2px #000000;
  letter-spacing: 0.2rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}


</style>