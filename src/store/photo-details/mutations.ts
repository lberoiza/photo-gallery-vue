import type { PhotoDetailsState, SelectedPhoto } from "@/models/store/PhotoDetailsState.model";

export const setSelectedPhoto = (state: PhotoDetailsState, photo: SelectedPhoto) => {
  state.selectedPhoto = photo;
}
