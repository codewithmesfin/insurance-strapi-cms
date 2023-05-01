
export default ({ env }) =>( {
    //
    graphql: {
      config: {
        endpoint: '/graphql',
        shadowCRUD: true,
        playgroundAlways: true,
        depthLimit: 7,
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