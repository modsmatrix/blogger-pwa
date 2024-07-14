import type { Config } from './types';

export default {
  version: '1.0',
  id: '/',
  name: 'MODs Matrix',
  shortName: 'MODs Matrix',
  description: 'Daily Updated Cookies & Templates',
  direction: 'auto',
  language: 'en-US',
  backgroundColor: '#fff',
  themeColor: '#fff',
  display: 'standalone',
  orientation: 'any',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'Cookies',
      shortName: 'Cookies',
      description: 'Latest Updated Cookies...',
      url: '/search/label/_Cookies?utm_source=homescreen',
    },
    {
      name: 'Templates',
      shortName: 'Templates',
      description: 'Latest Updated wordpress and blogger templates',
      url: '/search/label/_Templates?utm_source=homescreen',
    },
  ],
  pwa: {
    logs: true,
    // OneSignal is not available if you are not using cloudflare workers
    oneSignalEnabled: false,
    oneSignalConfig: {
      appId: '********-****-****-****-************',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://www.modsmatrix.com',
} satisfies Config;
