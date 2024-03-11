<script setup lang="ts">

import type { Photo } from "@/models/Photo.model";
import { computed } from "vue";


type Props = {
  selectedPhoto: Photo | undefined;
  showDetails: boolean;
  hasNext: boolean;
  hasPrevious: boolean;
}

const props = defineProps<Props>();
const selectedPhoto = computed(() => props.selectedPhoto);
const shouldShowDetails = computed(() => props.showDetails && selectedPhoto.value !== undefined);
const hasNext = computed(() => props.hasNext);
const hasPrevious = computed(() => props.hasPrevious);

const emit = defineEmits(['hideDetails', 'nextPhoto', 'previousPhoto']);

const closeDialog = () => {
  emit('hideDetails');
}

const nextPhoto = () => {
  emit('nextPhoto', selectedPhoto.value);
}

const previousPhoto = () => {
  emit('previousPhoto', selectedPhoto.value);
}

</script>

<template>
  <section class="details" :class="shouldShowDetails ? 'show-details' : ''">
    <div class="details__close" @click="closeDialog"></div>
    <div class="details__navegation-controls details__control-back" v-if="hasPrevious">
      <span @click="previousPhoto">{{ '<' }}</span>
    </div>
    <h2 class="details__photo-title">{{ selectedPhoto?.alt }}</h2>
    <div class="details__photo-image-container">
      <img :src=selectedPhoto?.url alt={photo.alt} class="details__photo">
    </div>
    <p class="details__photo-description" v-html="selectedPhoto?.description"></p>

    <div class="details__navegation-controls details__control-forward" v-if="hasNext">
      <span @click="nextPhoto">{{ '>' }}</span>
    </div>
  </section>
</template>

<style scoped>

.details {
  --title-size: 1rem;
  --text-size: 1rem;
  --background-color-opacity: #AAAAAABC;
  --photo-controls-width: fit-content;
  --photo-controls-padding: 2rem;
  --container-display: none;
  --detail-animation: details-show 0.5s ease-in-out both;
  --popup-background-color: #000000D7;
}

.details {
  color: var(--color-text);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--popup-background-color);
  padding: 1rem;

  display: none;
  grid-template-rows: repeat(3, min-content);
  grid-template-columns: 1fr;
  place-items: center;
  grid-template-areas:
    "photo-title"
    "photo-container"
    "photo-description";
  gap: 1rem;
  overflow: auto;
}

.show-details {
  display: grid;
  animation: details-show 0.5s ease-in-out;
}

@keyframes details-show {
  from {
    transform: scale(0.3);
  }
  to {
    transform: scale(1);
  }
}


.details__close {
  --close-color: var(--color-text);
  --color-transition: background-color 0.3s ease-in-out;
  --x-thickness: 2px;

  grid-area: photo-container;
  position: relative;

  place-self: start end;
  width: 1rem;
  height: 1rem;
  background-color: var(--background-color-opacity);
}

.details__close::before {
  content: "";
  position: absolute;
  top: 5%;
  left: 10%;
  width: 115%;
  height: var(--x-thickness);
  background-color: var(--close-color);
  transform: rotate(40deg);
  transform-origin: 0 0;
  transition: var(--color-transition);
}

.details__close::after {
  content: "";
  position: absolute;
  top: 5%;
  right: 10%;
  width: 115%;
  height: var(--x-thickness);
  background-color: var(--close-color);
  transform: rotate(-40deg);
  transform-origin: 100% 0;
  transition: var(--color-transition);
}

.details__close:hover {
  cursor: pointer;
  --close-color: darkred;
}


.details__photo-title {
  grid-area: photo-title;

  text-align: center;
  font-size: var(--title-size);
  text-transform: uppercase;
  letter-spacing: 0.4rem;
}

.details__navegation-controls {
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 0.3rem;
  padding: 0.5rem;
  transition: background-color 0.3s ease-in-out;
  user-select: none;
  z-index: 1;
  background-color: var(--background-color-opacity);
}

.details__navegation-controls:hover {
  background-color: var(--background-color-opacity);
}


.details__control-back {
  grid-area: photo-container;
  place-self: center start;
  background-color: var(--background-color-opacity);
}

.details__control-forward {
  grid-area: photo-container;
  place-self: center end;
}

.details__photo-image-container {
  grid-area: photo-container;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  user-select: none;
}

.details__photo-description {
  grid-area: photo-description;
  place-self: start;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  font-size: var(--text-size);
}

.details__photo {
  width: 100%;
  display: block;
}



@media (min-width: 768px) {
  .details {
    --title-size: 2rem;
    --text-size: 1.3rem;
  }


  .details {

    grid-template-rows: 3rem 1fr 8rem;
    grid-template-columns: var(--photo-controls-width) 1fr var(--photo-controls-width);
    place-items: center;
    gap: 1rem;
    grid-template-areas:
        ".    photo-title close"
        "back photo-container forward"
        ".    photo-description .";
  }

  .details__close {
    --x-thickness: 3px;

    grid-area: close;
    background-color: unset;
  }

  .details__control-back {
    grid-area: back;
  }

  .details__control-forward {
    grid-area: forward;
  }

  .details__navegation-controls {
    background-color: unset;
  }

}



</style>