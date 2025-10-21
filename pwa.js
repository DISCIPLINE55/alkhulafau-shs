// PWA functionality
class PWAHandler {
  constructor() {
    this.registerServiceWorker();
    this.setupInstallPrompt();
  }

  async registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      try {
        await navigator.serviceWorker.register('/sw.js');
        console.log('Service Worker registered successfully');
      } catch (error) {
        console.log('Service Worker registration failed:', error);
      }
    }
  }

  setupInstallPrompt() {
    let deferredPrompt;
    
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      
      // Show install prompt
      this.showInstallPrompt();
    });

    window.addEventListener('appinstalled', () => {
      console.log('PWA was installed');
      deferredPrompt = null;
    });
  }

  showInstallPrompt() {
    // Implementation for showing install prompt
  }
}

// Initialize PWA features
document.addEventListener('DOMContentLoaded', () => {
  new PWAHandler();
});
