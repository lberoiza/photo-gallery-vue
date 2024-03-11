import type { PhotoDetailsState, SelectedPhoto } from "@/models/store/PhotoDetailsState.model";
import type { ActionTree } from "vuex";
import type { RootState } from "@/models/store/AppStore";

export const setSelectedPhoto = ({commit}, photo: SelectedPhoto) => {
  return commit('setSelectedPhoto', photo);
}


// export const actions: ActionTree<PhotoDetailsState, RootState> = {
//   setSelectedPhoto({commit}, photo: SelectedPhoto) {
//     return commit('setSelectedPhoto', photo);
//   }
// }




