AI Agent Information Retrieval Project
🚀 Overview
This project is an AI-powered information retrieval system that takes in a dataset (CSV or Google Sheets) and performs web searches to extract specified information for each entity. It leverages large language models (LLMs) to process search results, offering structured outputs for end-users through a simple, intuitive dashboard.

🌟 Features
File Upload & Google Sheets Integration: Supports uploading CSV files or connecting to Google Sheets.
Dynamic Query Builder: Allows users to customize search queries with placeholders for specific entities.
Automated Web Search: Uses APIs to perform searches for each entity and retrieves relevant results.
LLM-Based Information Extraction: Extracts specific information from search results based on user-defined prompts.
Downloadable Results: Users can download extracted data in CSV format.
🛠️ Setup Instructions
1. Clone the Repository
bash
Copy code
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
2. Install Dependencies
Ensure you have Node.js installed, then run:

bash
Copy code
npm install
3. Run the Development Server
Start the application in development mode:

bash
Copy code
npm run dev
Visit http://localhost:3000 to view the project in the browser.

4. Build for Production
Generate an optimized production build:

bash
Copy code
npm run build
5. Environment Variables
Create a .env file in the root directory with the following variables:

plaintext
Copy code
VITE_API_KEY=your-api-key-here
VITE_GOOGLE_SHEETS_API_KEY=your-google-sheets-api-key
🎨 Usage Guide
Upload Data: Use the File Upload section to upload a CSV file or connect a Google Sheet.
Create Query: Enter a custom query template in the Query Builder. Use {entity} as a placeholder for dynamic data.
Run & View Results: The AI agent retrieves and processes data. Results are displayed in a table format.
Download Data: Export the results as a CSV file for further use.
📦 Dependencies
Key dependencies for the project:

React: Core library for building user interfaces.
Vite: Frontend tooling for fast builds.
TypeScript: Adds type safety to JavaScript.
Tailwind CSS: Utility-first CSS framework for styling.
Axios: For handling API requests.
SerpAPI/ScraperAPI: Used for performing web searches.
🌐 Deployment
Deploy on Vercel
Import Project: In Vercel, import the GitHub repository.
Configure Settings: Set the build command to npm run build and the output directory to dist.
Environment Variables: Add any required environment variables in the Vercel dashboard.
Deploy: Vercel will automatically deploy your project. You’ll get a live URL upon success.
Deploy on Netlify
Link GitHub Repository: Import your project to Netlify from GitHub.
Configure Build Settings: Use npm run build as the build command and dist as the output folder.
Deploy: Netlify will provide a live URL.
GitHub Pages
If deploying with GitHub Pages:

Install gh-pages:
bash
Copy code
npm install gh-pages --save-dev
Add the following scripts in package.json:
json
Copy code
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
Deploy:
bash
Copy code
npm run deploy
# AI Agent Information Retrieval Project

### 🚀 Overview
This project is an AI-powered information retrieval system that takes in a dataset (CSV or Google Sheets) and performs web searches to extract specified information for each entity. It leverages large language models (LLMs) to process search results, offering structured outputs for end-users through a simple, intuitive dashboard.

### 🌟 Features
- **File Upload & Google Sheets Integration**: Supports uploading CSV files or connecting to Google Sheets.
- **Dynamic Query Builder**: Allows users to customize search queries with placeholders for specific entities.
- **Automated Web Search**: Uses APIs to perform searches for each entity and retrieves relevant results.
- **LLM-Based Information Extraction**: Extracts specific information from search results based on user-defined prompts.
- **Downloadable Results**: Users can download extracted data in CSV format.

---
