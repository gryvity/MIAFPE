// Knowledge Base Configuration
// Customize this file to add your own sections and articles

window.KB_CONFIG = {
    // Site information
    siteTitle: "Knowledge Base",
    version: "1.0.0",

    // Default article to load on page load (optional)
    defaultArticle: "content/introduction/01_introduction.html",

    // Navigation structure
    sections: [
        {
            title: "Introduction",
            articles: [
                {
                    title: "Introduction",
                    path: "content/introduction/01_introduction.html"
                },
                {
                    title: "MIAPPE",
                    path: "content/introduction/02_miappe.html"
                },
                {
                    title: "Semantic Sensor Network",
                    path: "content/introduction/03_Semantic_Sensor_Network.html"
                }
            ]
        },
        {
            title: "Ontology",
            articles: [
                {
                    title: "MIAPPExSOSA",
                    path: "content/ontology/01_miappexsosa.html"
                },
                {
                    title: "Classes",
                    path: "content/ontology/02_classes.html"
                },
                {
                    title: "Properties",
                    path: "content/ontology/03_properties.html"
                }
            ]
        },
        {
            title: "Metadata",
            articles: [
                {
                    title: "Getting Started",
                    path: "content/metadata/01_getting-started.html"
                }
            ]
        }
    ]
};