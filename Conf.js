const conf = {
    appwriteProjectId: process.env.NEXT_APPWRITE_PROJECT_ID,
    appwriteUrl: process.env.NEXT_APPWRITE_URL,
    appwriteDatabaseId: process.env.NEXT_APPWRITE_DATABASE_ID,
    appwriteCollections: {
        OrgCollectionId: process.env.NEXT_APPWRITE_ORG_COLLECTION_ID,
        ContestCollectionId: process.env.NEXT_APPWRITE_CONTEST_COLLECTION_ID,
    },
    appwriteBucketId: process.env.NEXT_APPWRITE_BUCKET_ID,
};

export default conf;