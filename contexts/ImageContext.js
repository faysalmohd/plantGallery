import React, { createContext, useState } from "react";

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
    const [uploadData, setUploadData] = useState([{
        id: 20251739105176234,
        date: "Sun, 26 Jan 2023 9:00",
        img: "https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?q=80&w=387",
        description: "Rooted in nature, growing with grace. Rooted in nature, growing with grace. Rooted in nature, growing with grace. Rooted in nature, growing with grace",
        owner: "planter_the_plant",
        name: "House plant"
    },
    {
        id: 20251739105248039,
        date: "Wed, 06 Feb 2024 9:24",
        img: "https://images.unsplash.com/photo-1618389012029-c372140c0e82?q=80&w=387",
        description: "In every leaf, there's a story waiting to unfold.",
        owner: "forest_the_forester",
        name: "Early Rose"
    },
    {
        id: 20251739105276428,
        date: "Thu, 17 Feb 2020 17:36",
        img: "https://images.unsplash.com/photo-1618389011785-3e12e42831f4?q=80&w=387",
        description: "Planting seeds of hope and watching them bloom.",
        owner: "planter_the_plant",
        name: "Name of plant"
    },
    {
        id: 20251739105283853,
        date: "Sat, 23 Jun 2023 19:15",
        img: "https://images.unsplash.com/photo-1623178618310-ca324830f872?q=80&w=387",
        description: "Nature's beauty is always in full bloom.",
        owner: "planter_the_plant",
        name: "Sunflower"
    },
    {
        id: 20251739105290793,
        date: "Fri, 13 Feb 2019 00:12",
        img: "https://images.unsplash.com/photo-1601986575302-d7a92196abbf?q=80&w=387",
        description: "Let your dreams blossom like flowers.",
        owner: "forest_the_forester",
        name: "Water Lilies"
    }]);

    return (
        <ImageContext.Provider value={{ uploadData, setUploadData }}>
            {children}
        </ImageContext.Provider>
    );
};
