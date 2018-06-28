if (!navigator.serviceWorker) {
  console.log('ServiceWorker not Supported');
}

navigator.serviceWorker.register('/alc_currency_converter/sw.js').then((reg) => {
  console.log('ServiceWorker Registration Successful. Scope : ' + reg.scope);
}).catch((error) => {
  console.log('ServiceWorker Registration failed. Error : ' + error);
});
