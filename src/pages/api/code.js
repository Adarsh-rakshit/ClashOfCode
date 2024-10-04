import appwriteService from "./appwrite/config"; // Adjust the path if needed

export default async function getcontest(req, res) {
    const now = new Date();

    // Get Monday of this week at 12 AM
    const thisday = new Date(now);
    thisday.setDate(thisday.getDate() - thisday.getDay() + 1); // Monday
    thisday.setHours(0, 0, 0, 0);

    // Get Sunday of this week at 11:59 PM
    const lastday = new Date(now);
    lastday.setDate(lastday.getDate() - lastday.getDay() + 7); // Sunday
    lastday.setHours(23, 59, 59, 999);

    // Get Monday of next week at 12 AM
    const nextthisday = new Date(now);
    nextthisday.setDate(nextthisday.getDate() - nextthisday.getDay() + 8); // Next Monday
    nextthisday.setHours(0, 0, 0, 0);

    // Get Sunday of next week at 11:59 PM
    const nextlastday = new Date(now);
    nextlastday.setDate(nextlastday.getDate() - nextlastday.getDay() + 14); // Next Sunday
    nextlastday.setHours(23, 59, 59, 999);


    try {
        // Fetch contests from Appwrite service
        const responsethisweek = await appwriteService.getContests(thisday.getTime(), lastday.getTime());
        const responsenextweek = await appwriteService.getContests(nextthisday.getTime(), nextlastday.getTime());
        // Extract documents array
        // Default to an empty array if undefined
        responsethisweek.sort((a, b) => new Date(a.Schedule) - new Date(b.Schedule));
        responsenextweek.sort((a, b) => new Date(a.Schedule) - new Date(b.Schedule));
        const response = { responsethisweek, responsenextweek };
        res.status(200).json(response);

    } catch (error) {
        // Send error response
        console.error(error);
        res.status(500).json({ error: "Error fetching contests" });
    }
}
