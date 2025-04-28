# List Creation Application

A modern React application that allows users to manage and create lists by combining items from existing lists. Built with React.js and Tailwind CSS.

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

## 🔧 Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd [project-directory]
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

## 📱 Usage Guide

### Viewing Lists

1. The application loads with two lists displayed
2. Each list shows items with their names and descriptions
3. Lists are responsive and adapt to screen size

### Creating New Lists

1. Select exactly two lists using the checkboxes
2. Click "Create a new list" button
3. Use arrow buttons to move items:
   - Right arrow (→) to move items to the new list
   - Left arrow (←) to move items back to source lists
4. Click "Update" to save changes or "Cancel" to discard

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

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- React.js team
- Tailwind CSS team
- CCBP.in for the API
