
export default async function handler(request, res) {

    const badges = [
        {
            "subject": "Technology & Information",
            "title": "APA Style Citations: Introduction",
            "creator": "Victoria Raish"
        },
        {
            "subject": "Education",
            "title": "IST Career Resources",
            "creator": "Cassie Rosas-Carson"
        },
        {
            "subject": "Professional Skills",
            "title": "IST Careers - Meet a Coach - level 2",
            "creator": "Rita Griffith"
        },
        {
            "subject": "Agriculture & Natural Resources",
            "title": "Treat Yourself",
            "creator": "Allain Daigle"
        }
    ];

    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MDS, Content-Type, Date");
}