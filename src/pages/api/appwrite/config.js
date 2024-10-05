import conf from "../../../../Conf";
import {Client,Databases,Storage,Query} from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    async getContests(startDate,EndDate){
        try{
            const queries = [
                Query.lessThanEqual("Schedule", new Date(EndDate).toISOString()),
                Query.greaterThanEqual("Schedule", new Date(startDate).toISOString())
              ]
              ;
            const response =  await this.databases.listDocuments(conf.appwriteDatabaseId,conf.appwriteCollections.ContestCollectionId,queries);
            return response.documents;
        }
        catch(error){
            console.log("Appwrite Database Service :: "+ "getContests :: " + error);
        }
    }
    async getAllOrgsWithPreviews() {
    try {
        // Fetch all documents from the OrgCollection
        const response = await this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollections.OrgCollectionId);

        // Initialize an empty object to store the organizationId: imagePreviewUrl pairs
        const orgImagePreviews = {};

        // Loop through each organization document
        for (const org of response.documents) {
            const imageFileId = org.fileId; // Assuming the field storing the image file ID is `imageFileId`

            // Fetch the image preview URL
            const imagePreviewUrl = this.bucket.getFilePreview(
                conf.appwriteBucketId,
                imageFileId
            );

            // Store the organization ID and image preview URL in the object
            orgImagePreviews[org.$id] = imagePreviewUrl;
        }
        return orgImagePreviews; // Return the object containing all org IDs and their respective image previews
    } catch (error) {
        console.log("Error fetching organizations and image previews: ", error);
        return {};
    }
}
};

const appwriteService = new Service();
export default appwriteService;