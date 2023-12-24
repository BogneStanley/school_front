import { BsListCheck } from "@react-icons/all-files/bs/BsListCheck";
import { FaBookOpen } from "@react-icons/all-files/fa/FaBookOpen";

export const sideItems = [
    {
        name: "Group 1",
        items: [
            {
                path: "/attributs",
                name: "Attrabuts",
                icon: <BsListCheck />
            },
            {
                path: "/epreuves",
                name: "Epreuves",
                icon: <FaBookOpen />
            },
            {
                path: "/services",
                name: "Services",
                icon: <FaBookOpen />
            },
            {
                path: "/assistances",
                name: "Assistances",
                icon: <FaBookOpen />
            },
            {
                path: "/medias",
                name: "Médias",
                icon: <FaBookOpen />
            },
            {
                path: "/live",
                name: "Live",
                icon: <FaBookOpen />
            },

        ],
    },
    {
        name: "Group 2",
        items: [
            {
                path: "/dashboard",
                name: "Dashboard",
                icon: <FaBookOpen />
            },
            {
                path: "/administrateur",
                name: "Administrateur",
                icon: <FaBookOpen />
            },
            {
                path: "/superviseur",
                name: "Superviseur",
                icon: <FaBookOpen />
            },
            {
                path: "/faq",
                name: "FAQ",
                icon: <FaBookOpen />
            },
        ]
    }

];