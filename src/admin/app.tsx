export default {
  config: {
    locales: ["en"],
    translations: {
      en: {
        'app.components.LeftMenu.navbrand.title': 'Custom name',
      }
    },
  },
  bootstrap(app) {
    console.log(app);
  },
};
