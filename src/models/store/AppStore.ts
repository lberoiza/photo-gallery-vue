import type { Module } from "vuex";
import type { PhotoDetailsState } from "@/models/store/PhotoDetailsState.model";

export interface RootState {}


export interface AppStore {
  PhotoDetails: PhotoDetailsState;
}