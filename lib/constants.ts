export type EventItem = {
    image: string;
    title: string;
    slug: string;
    location: string;
    date: string;
    time: string;
};
export const events: EventItem[] = [
    {image:"/images/event1.png" ,
        title: "React Summit US 2026",
        slug: "react-summit-us-2026",
        location: "San Francisco, CA, USA",
        date: "07/11/2026",
        time: "09:00 AM",
    },
    {image: "/images/event2.png",
        title: "KubeCon + CloudNativeCon Europe 2026",
        slug: "kube-con-cloud-native-con-Europe-2026",
        location: "Vienna, Austria",
        date: "07/04/2026",
        time: "09:00 AM",
    },
    {image:"/images/event3.png",
        title: "AWS re:Invent 2026",
        slug: "aws-re:invent-2026",
        location: "Las Vegas, NV, USA ",
        date: "07/04/2026",
        time: "09:00 AM",
    },
    {image:"/images/event4.png" ,
        title: "Next.js Conf 2026",
        slug: "next.js-conf-2026",
        location: "Los Angeles, CA, USA (Hybrid)",
        date: "07/04/2026",
        time: "09:00 AM",
    },
    {image: "/images/event5.png",
        title: "GOOGLE CLOUD NEXT 2026",
        slug: "google-cloud-next-2026",
        location: "San Jose, CA, USA",
        date: "07/04/2026",
        time: "09:00 AM",
    },


]