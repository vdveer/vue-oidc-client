import Vue from 'vue'
import { createOidcAuth, SignInType, LogLevel } from 'vue-oidc-client'

const loco = window.location
const appRootUrl = `${loco.protocol}//${loco.host}${process.env.BASE_URL}`

var mainOidc = createOidcAuth(
  'main',
  SignInType.Popup,
  appRootUrl,
  {
    authority: 'https://demo.identityserver.io/',
    client_id: 'implicit.shortlived', // 'implicit.shortlived',
    response_type: 'id_token token',
    scope: 'openid profile email api',
    // test use
    prompt: 'login',
    login_hint: 'bob'
  },
  console,
  LogLevel.Info
)
Vue.prototype.$oidc = mainOidc
export default mainOidc
