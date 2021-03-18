from social_core.backends.line import LineOAuth2


class MyLineOAuth2(LineOAuth2):
    DEFAULT_SCOPE = ["profile", "openid", "email"]

    def auth_params(self, state=None):
        return {
            **super().auth_params(state),
            "bot_prompt": "normal",
        }
