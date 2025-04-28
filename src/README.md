# List Creation Application

A modern React application that allows users to manage and create lists by combining items from existing lists. Built with React.js and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Local Development Setup

1. Clone the repository:

```bash
git clone https://github.com/Ravi8264/list-creation-app.git
cd list-creation-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit:

```
http://localhost:5173
```

## 📦 Deployment

### Option 1: Deploy to GitHub Pages

1. Install gh-pages:

```bash
npm install gh-pages --save-dev
```

2. Update package.json:

```json
{
  "homepage": "https://Ravi8264.github.io/list-creation-app",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy:

```bash
npm run deploy
```

### Option 2: Deploy to Vercel

1. Install Vercel CLI:

```bash
npm install -g vercel
```

2. Deploy:

```bash
vercel
```

### Option 3: Deploy to Netlify

1. Install Netlify CLI:

```bash
npm install -g netlify-cli
```

2. Deploy:

```bash
netlify deploy
```

## 🔧 Environment Setup

1. Create a `.env` file in the root directory:

```env
VITE_API_URL=https://apis.ccbp.in/list-creation/lists
```

2. Update the API URL in your code:

```javascript
const API_URL = import.meta.env.VITE_API_URL;
```

## 🛠️ Build Process

1. Build the application:

```bash
npm run build
```

2. Preview the build:

```bash
npm run preview
```

## 📱 Production Deployment

### Using GitHub Actions (Recommended)

1. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Install Node.js
        uses: actions/setup-node@v2
        with:
          node-version: "16"

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. Push to GitHub:

```bash
git add .
git commit -m "Add GitHub Actions workflow"
git push origin main
```

## 🔍 Troubleshooting

### Common Issues

1. **Build Fails**

   - Clear node_modules and reinstall:

   ```bash
   rm -rf node_modules
   npm install
   ```

2. **Deployment Fails**

   - Check GitHub token permissions
   - Verify build output directory
   - Check for environment variables

3. **API Connection Issues**
   - Verify API endpoint
   - Check network connectivity
   - Verify CORS settings

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React.js team
- Tailwind CSS team
- CCBP.in for the API
- GitHub for hosting

## 🚀 Features

### 1. List Management

- View multiple lists of items with their details
- Select lists using intuitive checkboxes
- Create new lists by combining items from selected lists
- Move items between lists using arrow controls

### 2. User Interface

- Clean and modern design with gradient effects
- Responsive layout that works on all devices
- Interactive hover effects and transitions
- Loading states and error handling
- Intuitive drag-and-drop like interface

### 3. State Management

- Efficient state handling using React hooks
- Optimized re-rendering
- Proper error state management
- Loading state indicators

## 🛠️ Technical Stack

- **Frontend Framework**: React.js
- **Styling**: Tailwind CSS
- **API Integration**: Fetch API
- **State Management**: React Hooks (useState, useEffect)
- **Build Tool**: Vite

## 📦 Project Structure

```
src/
├── App.jsx                 # Main application component
├── main.jsx                # Application entry point
├── App.css                 # Global styles
├── component/              # React components
│   ├── AllListsView.jsx    # Main view showing all lists
│   ├── CreateListView.jsx  # Interface for creating new lists
│   ├── ListContainer.jsx   # Container for individual lists
│   ├── ListItem.jsx        # Component for list items
│   ├── Loader.jsx          # Loading animation
│   └── FailureView.jsx     # Error display component
```

## 🎯 Component Details

### 1. App.jsx

- Main application component
- Manages API calls and data fetching
- Handles list selection and creation
- Controls view switching between list display and creation

### 2. AllListsView.jsx

- Displays all available lists
- Handles list selection via checkboxes
- Shows error messages
- Provides "Create New List" button

### 3. CreateListView.jsx

- Interface for creating new lists
- Allows moving items between lists
- Shows three lists: two source lists and one new list
- Provides update and cancel options

### 4. ListContainer.jsx

- Container for individual lists
- Shows list title and selection checkbox
- Displays list items
- Handles item movement controls

### 5. ListItem.jsx

- Displays individual list items
- Shows item name and description
- Provides left/right movement controls
- Includes hover effects and transitions

### 6. Loader.jsx

- Shows loading animation
- Displays during data fetching
- Clean and minimal design

### 7. FailureView.jsx

- Displays error messages
- Provides retry option
- User-friendly error handling

## 🎨 Styling Features

- Modern gradient backgrounds
- Smooth hover transitions
- Responsive design
- Custom scrollbars
- Shadow effects
- Border animations
- Color transitions

## 🔄 API Integration

The application uses the following API endpoint:

```
GET https://apis.ccbp.in/list-creation/lists
```

Response format:

```json
{
  "lists": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "list_number": number
    }
  ]
}
```

## 🛡️ Error Handling

- API failure handling
- Network error detection
- User-friendly error messages
- Retry functionality
- Loading state management

## 📱 Responsive Design

- Mobile-first approach
- Responsive grid layout
- Adaptive font sizes
- Flexible container widths
- Touch-friendly controls

## 🔍 Best Practices

- Component-based architecture
- Proper state management
- Efficient re-rendering
- Clean code structure
- Proper error handling
- Responsive design
- Accessibility considerations

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
