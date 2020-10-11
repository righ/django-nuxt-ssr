import { NuxtAxiosInstance } from "@nuxtjs/axios";
import { Store } from 'vuex'
import Router, { RouteConfig, Route } from 'vue-router';
import { StateType } from '../store/index';


type Props = {
  app: { $axios: NuxtAxiosInstance};
  store: Store<StateType>;
  route: Route;
  redirect(path: string): void;
};

export default async function ({ app, store, route, redirect }: Props) {
  const { state } = store;
  console.log("debug:", state.token, store.getters.token);

  let { token } = state;
  if (route.path.match(/\/api\//)) {
    return;
  }

  if (typeof token === "undefined") {
    try {
      const res = await app.$axios.$get<{token: string}>("/api/accounts/token/");
      token = res.token;
    } catch {
      redirect('/');
    }
  }

  if(typeof token === "undefined") {
    redirect('/');
  } else {
    store.commit("setToken", token);
  }
};
