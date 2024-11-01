const baseUrl = process.env.NODE_ENV === 'production' ? "" : "http://localhost:3000";
const host = process.env.NODE_ENV === 'production' ? "" : "localhost:3000";

export const setting = {
    logo: "Media-Downloader",
    name: "Ahmad Said Husirami",
    Delay: 1,
    url: baseUrl,
    host,
    links: [
        {
            name: "github",
            url: "https://github.com/AhmadHusirami",
        },
        {
            name: "mail",
            url: "mailto:ahmadhusirami@gmail.com",
        },
    ],
}
