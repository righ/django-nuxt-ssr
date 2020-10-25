import {
  Store,
  GetterTree,
  ActionTree,
  MutationTree,
} from 'vuex';
import { NuxtAxiosInstance } from "@nuxtjs/axios";

export type UserType = {
  id: string;
  name: string;
  token: string;
};

export type StateType = {
  token?: string;
  user?: UserType;
  csrfToken?: string;
}

export const state = (): StateType => ({
  // token: "a04d1a4ba52dc854d7f727e6831a3238d36c114d",
  token: undefined,
  user: undefined,
  csrfToken: undefined,
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  user: state => state.user,
  token: state => state.token,
};

export const mutations: MutationTree<RootState> = {
  SET_TOKEN(state, token: string) {
    state.token = token;
  },
  SET_USER(state, user: UserType) {
    state.user = user;
  }
};

export const actions: ActionTree<RootState, RootState> = {
  setUser() {

  },
  async nuxtClientInit({ commit }, { app }: {app: { $axios: NuxtAxiosInstance}}) {
    const resToken = await app.$axios.$get<{token: string}>("/api/accounts/token/");
    if (resToken.token) {
      commit('SET_TOKEN', resToken.token);
    }
    const resUser = await app.$axios.$get<UserType>("/api/accounts/profile");
    if (resUser) {
      commit('SET_USER', resUser);
    }
  },
};

// https://qiita.com/shindex/items/a90217b9e4c03c5b5215
