/**
 * Single place for every URL that points outside the website.
 * When the portal URL or Play Store listing changes, update it here only.
 */
export const EXTERNAL_LINKS = {
  /** Web portal base URL (Firebase Hosting). */
  portalBase: 'https://srivaricatering-59071.web.app',

  /** Customer sign-in / registration page on the web portal. */
  get portalCustomerLogin(): string {
    return `${this.portalBase}/customer/login`;
  },

  /** Admin sign-in page on the web portal. */
  get portalAdminLogin(): string {
    return `${this.portalBase}/login`;
  },

  /** Play Store listing for the Android app. */
  playStore:
    'https://play.google.com/store/apps/details?id=com.srivari.srivaricatering',

  /**
   * Set to true once the app is live on the Play Store.
   * While false, the download banner shows a "Coming soon" state
   * instead of a broken store link.
   */
  appPublished: false,
} as const;
