type PLAN = {
    id: string;
    title: string;
    desc: string;
    monthlyPrice: number;
    yearlyPrice: number;
    badge?: string;
    buttonText: string;
    features: string[];
    link: string;
};

export const PLANS: PLAN[] = [
    {
        id: "free",
        title: "Free",
        desc: "Get started with essential AI call center features for small businesses",
        monthlyPrice: 0,
        yearlyPrice: 0,
        buttonText: "Get Started",
        features: [
            "Basic AI voice agent",
            "50 calls per month",
            "Community support",
            "1 phone number",
            "Standard call analytics",
            "Basic transcription"
        ],
        link: "https://stripe.com/free-plan-link"
    },
    {
        id: "pro",
        title: "Pro",
        desc: "Unlock advanced AI capabilities for growing call centers",
        monthlyPrice: 49,
        yearlyPrice: 490,
        badge: "Most Popular",
        buttonText: "Upgrade to Pro",
        features: [
            "Advanced AI voice agents",
            "1,000 calls per month",
            "Priority email support",
            "5 phone numbers",
            "Advanced analytics & insights",
            "Real-time sentiment analysis",
            "CRM integrations",
            "Custom voice training"
        ],
        link: "https://stripe.com/pro-plan-link"
    },
    {
        id: "enterprise",
        title: "Enterprise",
        desc: "Tailored solutions for large call centers and enterprises",
        monthlyPrice: 199,
        yearlyPrice: 1990,
        badge: "Contact Sales",
        buttonText: "Upgrade to Enterprise",
        features: [
            "Unlimited AI voice agents",
            "Unlimited calls",
            "Dedicated account manager",
            "Unlimited phone numbers",
            "Custom analytics & reporting",
            "Enterprise-grade security",
            "Multi-language support",
            "24/7 priority support"
        ],
        link: "https://stripe.com/enterprise-plan-link"
    }
];
