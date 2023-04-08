
export default async function handler(req, res) {

    const badgelist = [
        {
            "subject": "Technology & Information",
            "badgeTitle": "APA Style Citations: Introduction",
            "creator": "Victoria Raish"
        },
        {
            "subject": "Education",
            "badgeTitle": "IST Career Resources",
            "creator": "Cassie Rosas-Carson"
        },
        {
            "subject": "Professional Skills",
            "badgeTitle": "IST Careers - Meet a Coach - level 2",
            "creator": "Rita Griffith"
        },
        {
            "subject": "Agriculture & Natural Resources",
            "badgeTitle": "Treat Yourself",
            "creator": "Allain Daigle"
        }
    ];

    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MDS, Content-Type, Date, X-Api-Version");
    res.json(badgelist);
}