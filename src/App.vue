<script setup lang="ts">
import {galleryInformation} from "@/data/data";
import PhotoCard from "@/components/PhotoCard.vue";
import PhotoDetails from "@/components/PhotoDetails.vue";

const photos = galleryInformation.photos;

</script>

<template>
  <main>
    <h1 class="main__title">{{ galleryInformation.title }}</h1>
    <div class="main__imagecontainer">
      <PhotoCard v-for="photo in photos" :photo=photo :key=photo.id  />
    </div>
    <PhotoDetails />
  </main>
</template>

<style>
main {
  margin: 0 auto;
  padding: 1rem;
  width: 90%;
  max-width: 1400px;
  display: grid;
  gap: 2rem;
  place-items: center;
}

.main__title {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.7rem;
  text-shadow: black 0.5rem 0.5rem 1rem 1rem;
  position: relative;

}

.main__title::after {
  content: "";
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  width: 100%;
  height: 0.5rem;
  background-color: var(--color-text);
}

.main__imagecontainer {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}
</style>
