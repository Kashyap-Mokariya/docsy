# Docsy 📝

Docsy is a modern collaborative document editor built with **Next.js**, **TypeScript**, **Liveblocks**, and **Convex**, providing real-time collaboration features similar to Google Docs. It enables users to create, edit, and share documents with live collaboration capabilities.

## ✨ Features

- 📝 **Rich Text Editor** – Powered by TipTap with full formatting capabilities
- 🤝 **Real-time Collaboration** – Multiple users can edit documents simultaneously
- 💬 **Live Comments & Threads** – Add comments and reply to discussions in real-time
- 👥 **User Presence** – See who's currently viewing and editing documents
- 🎨 **Rich Formatting** – Support for headings, lists, tables, images, links, and more
- 🔍 **Document Search** – Quickly find documents with search functionality
- 📏 **Document Ruler** – Adjust margins and formatting with visual rulers
- 🏢 **Organization Support** – Manage documents within teams and organizations
- 🔐 **Authentication** – Secure login via **Clerk**
- 📱 **Responsive Design** – Works seamlessly on desktop and mobile devices
- 🎨 **Modern UI** – Built with **TailwindCSS** and **Radix UI** components

## 🌐 Live Demo

🔗 **Deployed Project:** [Docsy Live](https://docsy-virid.vercel.app/)  
⚠️ **Note:** Real-time features are powered by Liveblocks and Convex for optimal performance.

## 🏗 Tech Stack

| Frontend | Backend | Real-time | Authentication |
| -------- | ------- | --------- | -------------- |
| Next.js 15 | Convex | Liveblocks | Clerk |
| React 19 | TypeScript | WebSockets | Organization Support |
| TailwindCSS | TipTap Editor | Live Presence | User Management |
| Radix UI | Zustand | Comments API | Secure Auth |

## 🚀 Installation & Setup

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v18 or later)
- **npm/yarn/pnpm** (Package Manager)
- **Clerk Account** (Authentication)
- **Liveblocks Account** (Real-time collaboration)
- **Convex Account** (Backend database)

### 1️⃣ Clone the Repository

```
git clone https://github.com/Kashyap-Mokariya/docsy.git
cd docsy
```

### 2️⃣ Install Dependencies

```
npm install

OR

yarn install

OR

pnpm install
```

### 3️⃣ Set Up Environment Variables

Create a `.env.local` file in the root directory and add the following:

Clerk Authentication
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```
Convex Backend
```
NEXT_PUBLIC_CONVEX_URL=your_convex_url
CONVEX_DEPLOY_KEY=your_convex_deploy_key
```

Liveblocks Real-time
```
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=your_liveblocks_public_key
LIVEBLOCKS_SECRET_KEY=your_liveblocks_secret_key
```

### 4️⃣ Set Up Convex Database

Initialize and deploy your Convex backend:
```
npx convex dev
```

### 5️⃣ Start the Development Server

```
npm run dev

OR

yarn dev

OR

pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🧑💻 Project Structure

```
docsy/
├── src/
│ ├── app/ # Next.js App Router
│ │ ├── (home)/ # Home page components
│ │ ├── documents/ # Document pages
│ │ │ └── [documentId]/ # Dynamic document routes
│ │ ├── api/ # API routes
│ │ ├── globals.css # Global styles
│ │ └── layout.tsx # Root layout
│ │
│ ├── components/ # Reusable UI components
│ │ ├── ui/ # Shadcn/UI components
│ │ ├── ToolBarButtons/ # Editor toolbar buttons
│ │ ├── NavbarComponents/ # Navigation components
│ │ └── Dialogs/ # Modal dialogs
│ │
│ ├── hooks/ # Custom React hooks
│ ├── lib/ # Utility functions
│ ├── store/ # Zustand state management
│ ├── constants/ # App constants
│ └── extensions/ # TipTap editor extensions
│
├── convex/ # Convex backend
│ ├── documents.ts # Document CRUD operations
│ ├── schema.ts # Database schema
│ └── auth.config.ts # Authentication config
│
├── public/ # Static assets
├── components.json # Shadcn/UI config
├── tailwind.config.ts # TailwindCSS config
├── liveblocks.config.ts # Liveblocks configuration
└── next.config.ts # Next.js configuration
```


## 📌 Key Features Implementation

### Real-time Collaboration
- **Live Cursors** – See other users' cursors in real-time
- **Presence Indicators** – Visual indicators of active users
- **Conflict Resolution** – Automatic handling of simultaneous edits

### Document Features
- **Rich Text Editing** – Full formatting toolbar with TipTap
- **Document Templates** – Pre-built templates for common document types
- **Auto-save** – Documents are automatically saved as you type
- **Version History** – Track changes and document evolution

### Collaboration Tools
- **Comments System** – Add contextual comments to any part of the document
- **User Management** – Invite users and manage permissions
- **Organization Support** – Team-based document management

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npx convex dev` | Start Convex development |
| `npx convex deploy` | Deploy Convex backend |

## 🤝 Contributing

- Fork the repository
- Create a feature branch (`git checkout -b feature/amazing-feature`)
- Commit your changes (`git commit -m 'Add amazing feature'`)
- Push to the branch (`git push origin feature/amazing-feature`)
- Open a Pull Request


## 🙏 Acknowledgments

- **TipTap** - For the excellent rich text editor
- **Liveblocks** - For real-time collaboration infrastructure
- **Convex** - For the backend-as-a-service platform
- **Clerk** - For authentication and user management
- **Vercel** - For deployment and hosting
