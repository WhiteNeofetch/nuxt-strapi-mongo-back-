module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: "mongodb://root:root@cluster0-shard-00-00.ddt5e.mongodb.net:27017,cluster0-shard-00-01.ddt5e.mongodb.net:27017,cluster0-shard-00-02.ddt5e.mongodb.net:27017/nuxt?ssl=true&replicaSet=atlas-tcpoc6-shard-0&authSource=admin&retryWrites=true&w=majority"
      },
      options: {
        ssl: true,
      },
    },
  },
});
