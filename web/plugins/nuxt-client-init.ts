import { Context } from '@nuxt/types';

export default async (context: Context) => {
  return await context.store.dispatch("nuxtClientInit", context);
};
