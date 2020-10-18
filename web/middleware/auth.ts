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

  let { token } = state;
  console.log("token:", token);
};
