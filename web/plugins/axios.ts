import axios, { AxiosRequestConfig } from 'axios';
import { StateType } from '../store/index';

type AxiosType = typeof axios;

interface Axios extends AxiosType {
  onRequest(callback: (config: AxiosRequestConfig) => void): void,
}

export default function({ $axios, store: { state } }: { $axios: Axios, store: { state: StateType }} ) {
  $axios.onRequest((config) => {
    config.headers.common['Authorization'] = `Token ${state.token}`;
  });
}
