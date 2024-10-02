import appwriteService from "./appwrite/config"; // Adjust the path if needed

export default async function getcontest(req, res) {
    const now = new Date();
    
    // Get Monday of this week at 12 AM
    const thisday = new Date(now.setDate(now.getDate() - now.getDay() + 1));
    thisday.setHours(0, 0, 0, 0);
    console.log(thisday);

    // Get Sunday of this week at 11:59 PM
    const lastday = new Date(now.setDate(now.getDate() - now.getDay() + 7));
    lastday.setHours(23, 59, 59, 999);
    
    try {
        // Fetch contests from Appwrite service
        const response = await appwriteService.getContests(thisday.getTime(), lastday.getTime());
        
        // Extract documents array
        // Default to an empty array if undefined
        response.sort((a, b) => new Date(a.Schedule) - new Date(b.Schedule));
        console.log(response);
        res.status(200).json(response);

    } catch (error) {
        // Send error response
        console.error(error);
        res.status(500).json({ error: "Error fetching contests" });
    }
}
