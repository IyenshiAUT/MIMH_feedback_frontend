# Retro 2025 - Project Feedback Application

A modern, responsive web application for collecting feedback on two projects during Retro 2025.

## Features

- **Dual Project Feedback**: Review Project 1, Project 2, or both
- **Star Rating System**: Interactive 5-star rating for each project
- **Comprehensive Feedback Fields**:
  - Overall rating
  - Project strengths
  - Areas for improvement
  - Innovation level assessment
  - Additional comments
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Local Storage**: Automatically saves all feedback submissions
- **Modern UI**: Beautiful gradient design with smooth animations
- **Form Validation**: Ensures all required fields are completed

## How to Use

1. **Open the Application**: Open `index.html` in any modern web browser
2. **Fill in Reviewer Information**: Enter your name, email, and optional role
3. **Select Project(s)**: Choose which project(s) to review
4. **Provide Feedback**: 
   - Rate the project(s) using the star system
   - Describe strengths and areas for improvement
   - Select innovation level
   - Add any additional comments
5. **Submit**: Click "Submit Feedback" to save your response
6. **Review**: See a summary of your submitted feedback

## Files

- `index.html` - Main HTML structure
- `styles.css` - Styling and responsive design
- `script.js` - Interactive functionality and data management

## Technical Details

- **No Dependencies**: Pure HTML, CSS, and JavaScript
- **Browser Storage**: Uses localStorage to persist feedback data
- **Export Capability**: Data can be exported as JSON for analysis
- **Validation**: Client-side form validation for data integrity

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Future Enhancements

- Backend integration for centralized data storage
- Analytics dashboard for feedback visualization
- Email notifications for new submissions
- PDF export of feedback reports

## License

© 2025 Retro Project Feedback System

---

**Note**: To export all feedback data, open the browser console and run:
```javascript
exportFeedback()
```
This will download all submissions as a JSON file.
