/**
 * This is auto generated metadata file, generated at: Fri Jul 26 2024 06:35:04 GMT+0000 (Coordinated Universal Time)
 * Prevent making any changes here
 */

export interface Metadata {
  github: {
    repository: string;
    branch: string;
  };
  pwa: {
    logs: boolean;
    oneSignalEnabled: boolean;
    oneSignalSDK: string;
    oneSignalConfig: {
      appId: string;
      allowLocalhostAsSecureOrigin: boolean;
    };
    serviceWorker: {
      source: string;
      scope: string;
    };
  };
  build: {
    hash: string;
  };
}

export const metadata = JSON.parse(
  '{"github":{"repository":"modsmatrix/blogger-pwa","branch":"main"},"pwa":{"oneSignalEnabled":true,"oneSignalSDK":"https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js","oneSignalConfig":{"appId":"43fdf9fd-c794-4d7c-8e3a-299eed0055c5","allowLocalhostAsSecureOrigin":true},"logs":true,"serviceWorker":{"source":"/app/serviceworker.js","scope":"/"}},"build":{"hash":"aqi0nMd-Z6jOjnoloJQaY"}}',
) as Metadata;
