
export default ({ env }) =>( {
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 15,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },

    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID'),
        },
        settings: {
          defaultFrom: 'dev@techethio.com',
          defaultReplyTo: 'dev@techethio.com',
          testAddress: 'dev@techethio.com',
        },
      },
    },

  });