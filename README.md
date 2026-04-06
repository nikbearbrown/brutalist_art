# Brutalist.art

## Prerequisites

Before you begin, ensure you have the following installed on your system:

### Required Software
- **Node.js and npm**
  - Download from [Node.js official website](https://nodejs.org/)
  - Choose the LTS (Long Term Support) version
  - The installer includes both Node.js and npm

- **Git** (for version control)
  - Download from [Git's official website](https://git-scm.com/downloads)

### System Requirements
- Operating System: Windows, macOS, or Linux
- RAM: At least 4GB recommended
- Disk Space: At least 1GB free space
- Internet connection for downloading packages

### Installation by Operating System

#### Windows
1. Download and run the Node.js installer from [Node.js website](https://nodejs.org/)
2. Download and run the Git installer from [Git website](https://git-scm.com/downloads)
3. Restart your computer after installation

#### macOS
```bash
# Using Homebrew
brew install node
brew install git
```

#### Linux (Ubuntu/Debian)
```bash
sudo apt update
sudo apt install nodejs npm
sudo apt install git
```

### Verifying Installation
After installation, verify that everything is set up correctly:
```bash
node --version
npm --version
git --version
```

## Getting Started

First, install dependencies:

```bash
npm install --legacy-peer-deps
```

then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Troubleshooting

If you encounter any issues during installation:

1. **npm install fails**
   - Clear npm cache: `npm cache clean --force`
   - Try using `--legacy-peer-deps` flag if there are dependency conflicts
   - Ensure you're using a compatible Node.js version

2. **Permission errors**
   - Windows: Run terminal as administrator
   - Mac/Linux: Use `sudo` for system-wide installations

3. **Network issues**
   - Check your internet connection
   - If behind a proxy, configure npm accordingly
   - Try using a different npm registry: `npm config set registry https://registry.npmjs.org/`

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
