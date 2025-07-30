# Voxper AI - Quick Setup Guide

## 🚀 Quick Start

### 1. Environment Setup
Copy the example environment file and configure your variables:
```bash
cp .env.example .env.local
```

Update `.env.local` with your actual values:
```env
# app
NEXT_PUBLIC_APP_NAME=Voxper
NEXT_PUBLIC_APP_DOMAIN=voxper-ai.vercel.app

# database (MongoDB connection string)
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/voxper?retryWrites=true&w=majority"

# auth (Clerk authentication)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
CLERK_SECRET_KEY=sk_test_your_secret_here
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/signin"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/signup"
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_URL="/"
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_URL="/"
```

### 2. Install Dependencies
```bash
pnpm install
```

### 3. Database Setup
```bash
# Generate Prisma client
npx prisma generate

# Push database schema (for development)
npx prisma db push

# Or run migrations (for production)
npx prisma migrate deploy
```

### 4. Run Development Server
```bash
pnpm dev
```

Visit `http://localhost:3000` to see your Voxper AI call center platform!

## 🔧 Configuration Services

### MongoDB Database
1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get your connection string
4. Add it to `DATABASE_URL` in your `.env.local`

### Clerk Authentication
1. Create a Clerk account at https://clerk.com
2. Create a new application
3. Copy your publishable key and secret key
4. Add them to your `.env.local`

### Deployment
The application is ready to deploy on Vercel:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 🎯 Key Features Transformed

- **Hero Section**: Now focuses on AI call center agents
- **Features**: Updated for call handling, analytics, CRM integration
- **Pricing**: Tailored for call center services (Free, Pro, Enterprise)
- **Reviews**: Customer testimonials about AI call center experience
- **CTA**: Encourages free trial for call center transformation

## 📱 Next Steps

1. Customize the AI voice agent personalities
2. Integrate with your existing CRM system
3. Set up call routing and queue management
4. Configure sentiment analysis parameters
5. Train custom voice models for your brand

## 🆘 Support

For questions or issues, please create an issue in the GitHub repository or contact support.