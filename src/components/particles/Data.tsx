import { completeGymName, email, location } from "../../utils/data";
import { phoneNumber } from "../../utils/data";
export const NavLinks = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "About Us",
        url: "/about"
    },
    {
        name: "Schedule",
        url: "/schedule"
    },
    {
        name: "Gallery",
        url: "/gallery"
    },
    {
        name: "News",
        url: "/news"
    },
    {
        name: "Contacts",
        url: "/contact"
    },
];



export const HeroTexts = [
    {
        Heading: "Unleash Your Inner Strength!",
        Paragraph: `Welcome to ${completeGymName}, where fitness meets fun! Get ready to unleash your inner strength and transform your life!`,
        Button: "Join Now!"
    },
    {
        Heading: "New Heights of Fitness!",
        Paragraph: "Push your limits and achieve greatness at our gym! Join our supportive community and embark on a journey of self-improvement and empowerment!",
        Button: "Sign Up Today!"
    },
    {
        Heading: "Fitness is Fun with Us!",
        Paragraph: "At our gym, fitness is not just a routine; it's an enjoyable adventure! Join us in this fitness expedition, where fun and results go hand in hand!",
        Button: "Enroll Now!"
    }
]


export const AboutTexts = {
    firstText: `About ${completeGymName}`,
    secondText: "Welcome",
    caption: `Welcome to ${completeGymName}, where fitness meets community and transformation happens!`,
    paragraph1: `At ${completeGymName}, we are more than just a gym; we are a passionate and supportive fitness family dedicated to helping you achieve your health and wellness goals. Our mission is to create a positive and empowering environment that inspires you to challenge yourself, embrace a healthy lifestyle, and discover the best version of yourself.`,
}

export const OfferTexts = {
    firstText: "What we do",
    secondText: "All Our Offer",
    list: [
        {
            listCaption: "Weight Loose Programs",
            text: "Our personalized approach, expert guidance, and proven results will help you achieve your fitness goals. Take the first step towards a transformed body and lifestyle today.",
        },
        {
            listCaption: "Body Building Programs",
            text: "Our expert trainers will guide you through tailored workouts, helping you achieve your bodybuilding goals efficiently and safely.",
        }
        , {
            listCaption: "Different Special Classes",
            text: "Take your workout to new heights with our high and intense Special Class, where you'll push your limits and achieve remarkable fitness results.",
        }
    ],
}

export const MembershipPlans = {
    firstText: "Pricing Tables",
    secondText: "Membership Plans",
    cards: [
        {
            amount: 2000,
            duration: "day",
            caption: "One-Day Pass",
            benefits: [
                "Full access to gym equipment",
                "Access to one group fitness class",
                "Guidance from on-duty trainers",
                "Basic workout plan for the day"
            ]
        },
        {
            amount: 35000,
            duration: "year",
            caption: "Annual Membership",
            benefits: [
                "Unlimited gym access for 12 months",
                "Free personalized fitness assessment",
                "Access to all group workout sessions",
                "Discounts on personal training sessions"
            ]
        },
        {
            amount: 7000,
            duration: "month",
            caption: "Monthly Subscription",
            benefits: [
                "Unlimited gym access for 30 days",
                "Join any group fitness class",
                "General workout guidance from trainers",
                "Progress tracking and fitness tips"
            ]
        }
    ]
};


export const ContactTexts = {
    firstText: "call us today",
    phone: phoneNumber,
    paragraph: "At our gym, you can reach out to any of our trainers to schedule a session. Home services is also within the scope of out services. Your fitness is our concern! Health is wealth!",
    button: "Schedule A Meet"
}

export const TestimonialTexts = {
    firstText: "our testimonials",
    secondText: "What Clients Say",
    feedBacks: [
        {
            text: "This gym is top-notch! In just six months, I've seen real results. The trainers sabi their work, and the vibe here keeps me going!",
            person: "Darlington Okafor",
            type: "Member"
        },
        {
            text: "These Yoga classes na the best! My body feels lighter, my mind dey calm, and I just dey enjoy every session well well.",
            person: "Ngozi Adeyemi",
            type: "Member"
        },
        {
            text: "That Special Class no be child's play, but if you wan see real fitness results, na the way forward. I don recommend am give all my guys!",
            person: "Collins Adewale",
            type: "Member"
        }
    ],
    
}

export const BlogTexts = {
    firstText: "Get informed",
    secondText: "Our Latest News",
    blogNews: [
        {
            title: "Why Does Your Fitness Motivation Fade So Fast?",
            paragraph: "Staying consistent with your fitness goals can be challenging, but yoga helps you build both physical and mental strength. It improves flexibility, reduces stress, and keeps you focused. Whether you're a beginner or an expert, our yoga classes will help you find balance. Don’t wait—join us today and experience the transformation!"
        },
        {
            title: "Small Efforts Make a Big Difference!",
            paragraph: "When it comes to fitness, consistency is what brings results. Our experienced trainers are here to guide you every step of the way, ensuring you get the best out of every workout. Plus, we have top-quality gym equipment to take your training to the next level. If you're looking for the best place to work out, this is it!"
        },
        {
            title: "Stop Delaying, Start Your Fitness Journey Today!",
            paragraph: "Procrastination is one of the biggest obstacles to success. Whether your goal is weight loss, muscle gain, or just staying active, the best time to start is now. We’ll help you stay motivated, manage your time effectively, and achieve real results. Don’t wait—let’s smash those fitness goals together!"
        }
    ]
    
}

export const FooterTexts = {
    underLogoText: "We are more than just a gym; we are a passionate and supportive fitness family dedicated to helping you achieve your health and wellness goals. Our mission is to create a positive and empowering environment that inspires you to challenge yourself, embrace a healthy lifestyle, and discover the best version of yourself.",
    quickLinks: {
        caption: "Quick Links",
        links: [
            {
                name: "Home",
                url: "/"
            },
            {
                name: "About Us",
                url: "/about"
            },
            {
                name: "Schedule",
                url: "/schedule"
            },
            {
                name: "Gallery",
                url: "/gallery"
            },
            {
                name: "News",
                url: "/news"
            },
            {
                name: "Contacts",
                url: "/contact"
            },
        ]
    },
    contacts: {
        caption: "Quick Contacts",
        names: [
            {
                name: location,
            },
            {
                name: email
            },
            {
                name: phoneNumber,
            }
        ]
    },
    copyright: "Copyright 2025. All Right Reserved"
}