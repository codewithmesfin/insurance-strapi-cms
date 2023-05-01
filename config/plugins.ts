//gmailapi CLINET_ID:105390029512-8jo979d2mtcl55hdi63hmepsaj250q99.apps.googleusercontent.com
export default {
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
          apiKey: "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",
        },
        settings: {
          defaultFrom: 'dev@techethio.com',
          defaultReplyTo: 'dev@techethio.com',
          testAddress: 'dev@techethio.com',
        },
      },
    },

  };