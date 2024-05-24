import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    storage;

    constructor(){
        this.client
        .setEndpoint("https://cloud.appwrite.io/v1")
        .setProject("6641b3d4002d6696ea5f");
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }
     
    async createPost({tittle, slug,price ,size,bhk,location,description,images,type,furnished,bathroom,userid,independent}) {
        try {
            return await this.databases.createDocument(
                "6641b491001661845cef",
                "6641b5130020728ed199",
                slug,
                 {
                tittle,
                price,
                size,
                bhk,
                location,
                description,
                images,
                type,
                furnished,
                bathroom,
               userid,
               independent
            });
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }

    async  updatePost(slug,{tittle,price ,size,bhk,location,description,images,type,furnished,bathroom,independent}) {
        try {
            return await this.databases.updateDocument(
                "6641b491001661845cef",
                "6641b5130020728ed199",
                slug,
                {
                    tittle,
                    price,
                    size,
                    bhk,
                    location,
                    description,
                    images,
                    type,
                    furnished,
                    bathroom,
                    independent
                });
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
            return false
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                "6641b491001661845cef",
                "6641b5130020728ed199",
                slug
            );
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }

    async getPost(quries=[Query.sort("price", "DESC")]) {
        try {
            return await this.databases.listDocuments(
                "6641b491001661845cef",
                "6641b5130020728ed199",
                quries
            );
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }
     
    async uploadFile(file) {
        try {
            return await this.storage.createFile(
                "6641b5620025770a8bc9",
                ID.unique(),
                file
            )
            
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
           
            return false
        }
    }
    async deleteFile(fileId){
        try {
            await this.storage.deleteFile(
                "6641b5620025770a8bc9",
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.storage.getFilePreview(
            "6641b5620025770a8bc9",
            fileId
        )
    }
}

const service = new Service()
export default service