import {
  Store,
  GetterTree,
  ActionTree,
  MutationTree,
} from 'vuex';
import { NuxtAxiosInstance } from "@nuxtjs/axios";

export type UserType = {
  name?: string;
  token?: string;
};

export type StateType = {
  token?: string;
  user?: UserType;
}

export const state = (): StateType => ({
  // token: "a04d1a4ba52dc854d7f727e6831a3238d36c114d",
  token: undefined,
  user: undefined,
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  user: state => state.user,
  token: state => state.token,
};

export const mutations: MutationTree<RootState> = {
  setToken(state, token: string) {
    state.token = token;
  },
};

export const actions: ActionTree<RootState, RootState> = {
  setUser() {

  },
  async nuxtServerInit({ commit }, { app }: {app: { $axios: NuxtAxiosInstance}}) {
    const res = await app.$axios.$get<{token: string}>("/api/accounts/token/");
    if (res.token) {
      commit('setToken', res.token);
    }
  },
};

// https://qiita.com/shindex/items/a90217b9e4c03c5b5215
