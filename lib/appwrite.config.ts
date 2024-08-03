import * as sdk from "node-appwrite";

export const {
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;

console.log(ENDPOINT,"break", PROJECT_ID,"break",API_KEY)

// Log environment variables for debugging
console.log(`ENDPOINT: '${ENDPOINT}'`,ENDPOINT);
console.log(`PROJECT_ID: '${PROJECT_ID}'`);
console.log(`API_KEY: '${API_KEY}'`);

// if (!ENDPOINT || !PROJECT_ID || !API_KEY) {
//   throw new Error("Missing or invalid environment variables!");
// }
const client = new sdk.Client();
client
.setEndpoint("https://cloud.appwrite.io/v1")
.setProject("669e154d0019cb82c694")
.setKey("648cbbf5cde16a1218dc7a65f13ee065a6c06449305e9c5c28d2ce9f8a01dad503d99eb4a4b2fdbae07051aec3277018b4d3a84a4cf6e8d454116bb5c1dc2881acc912ca14cac7b6d20d1d1c73e6daa2a016493bc30ec2ebcdaa46d6100628825b1413eb88835f68abf46e7c125e388e272eae0811eb0f9cd714fba531c13079");

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);
