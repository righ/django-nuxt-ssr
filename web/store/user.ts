export const state = () => ({
  token: "test",
});

export const mutate = {
  setToken(state: any, token: string) {
    state.token = token;
  }
};
