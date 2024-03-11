import state from "./state";
import * as mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';
import type { PhotoDetailsState } from "@/models/store/PhotoDetailsState.model";
import type { AppStore } from "@/models/store/AppStore";


const photoDetailsStore = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

export default photoDetailsStore;