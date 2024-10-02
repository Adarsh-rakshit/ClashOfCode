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
    async getOrg(fileId){
        try {
            return await this.databases.getDocument(
                conf.appwriteBucketId,
                conf.appwriteCollections.OrgCollectionId,
                fileId
            );
        } catch (error) {
            console.log("Appwrite Storage Service :: "+ "getOrg :: " + error);            
            return false;
        }
    }
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        ).href;
    };
};

const appwriteService = new Service();
export default appwriteService;