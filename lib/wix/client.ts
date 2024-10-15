import { OAuthStrategy, createClient } from '@wix/sdk';

import Cookies from 'js-cookie';
import { items } from '@wix/data';

const _wixClient = createClient({
  modules: { items },
  auth: OAuthStrategy({
    clientId: process.env.WIX_CLIENT_ID as string,
    // tokens: JSON.parse((Cookies.get('session') || null) as string),
  }),
});

export { _wixClient };
