import axios, { AxiosRequestConfig } from 'axios';
import { StateType } from '../store/index';
import Cookies from 'js-cookie'

type AxiosType = typeof axios;

interface Axios extends AxiosType {
  onRequest(callback: (config: AxiosRequestConfig) => void): void,
}

export default function({ $axios, store: { state } }: { $axios: Axios, store: { state: StateType }} ) {
  if (typeof window === "undefined") {
    return;
  }
  $axios.onRequest((config) => {
    if (state.user) {
      config.headers.common['Authorization'] = `Token ${state.user.token}`;
    }

    const csrfToken = Cookies.get("csrftoken");
    if (csrfToken) {
      config.headers.common['csrftoken'] = csrfToken;
      config.headers.common['X-CSRFToken'] = csrfToken;
    }
  });
}
