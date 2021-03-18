from social_core.backends.line import LineOAuth2


class MyLineOAuth2(LineOAuth2):
    def get_scope(self):
        return ["profile", "openid", "email"]

    def auth_params(self, state=None):
        return {
            **super().auth_params(state),
            "bot_prompt": "aggressive",
        }
