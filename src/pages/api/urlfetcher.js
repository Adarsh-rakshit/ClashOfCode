import appwriteService from "./appwrite/config"; // Adjust the path if needed

export default async function(req,res){
    try {
        const ans = await appwriteService.getAllOrgsWithPreviews();
        res.status(200).json(ans);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "problem in urlfetcher" });
    }
}