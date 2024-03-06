import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = `mongodb://admin:password@localhost:27017/threats?authSource=admin`;

let client: Promise<MongoClient> | undefined;

export const getClient = async (
): Promise<MongoClient> => {
  if (client) return client;

  const p = (async () => {
    try {
      const newClient = new MongoClient(uri, {
        serverApi: ServerApiVersion.v1,
      });
      await newClient.connect();

      return newClient;
    } catch (e) {
      client = undefined;
      throw e;
    }
  })();

  client = p;

  return p;
};
