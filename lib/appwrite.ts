"use server";

import { Client, Account, Databases, Storage } from "node-appwrite";

/**
 * SERVER ADMIN CLIENT
 * Used ONLY in server routes (API, webhooks, admin tasks)
 */
export async function createAdminClient() {
  if (!process.env.APPWRITE_API_KEY) {
    throw new Error("Missing APPWRITE_API_KEY");
  }

  const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT!)
    .setProject(process.env.APPWRITE_PROJECT_ID!)
    .setKey(process.env.APPWRITE_API_KEY!);

  return {
    get account() {
      return new Account(client);
    },
    get databases() {
      return new Databases(client);
    },
    get storage() {
      return new Storage(client);
    },
  };
}
