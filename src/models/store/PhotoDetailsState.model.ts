import type { Photo } from "@/models/Photo.model";

export type SelectedPhoto = Photo | null;

export interface PhotoDetailsState {
  selectedPhoto: SelectedPhoto;
}