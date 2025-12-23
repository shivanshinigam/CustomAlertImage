# Custom Points Alert

A lightweight, customizable toast notification system for web applications. This project demonstrates a stylish "Points Earned" alert with support for images, animations, and auto-dismissal.

![Alert Screenshot](screenshot.png)

## Features

-   **Stylish UI**: Dark mode aesthetic with neon green accents.
-   **Animations**: Smooth fade-in and slide-up entrance animations.
-   **Auto-Dismiss**: Alerts automatically disappear after a specified duration (default: 4 seconds).
-   **Interactive**:
    -   Manual close button.
    -   Hover effects on buttons and alerts.
-   **Flexible Content**: Supports custom messages and optional images.

## Structure

-   `index.html`: Main entry point containing the HTML structure and styles.
-   `app.js`: Logic for triggering and managing the alert notifications.

## Usage

1.  Open `index.html` in your web browser.
2.  Click the **Earn 20 Points** button to test the alert.

### Code Example

You can trigger the alert programmatically using the `pointsAlert` function:

```javascript
// Signature
pointsAlert(message, imageUrl, duration);

// Example
pointsAlert(
    "🎉 Task Completed!",
    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    3000 // 3 seconds
);
```

## Setup

No build step required. Just open the files in a browser.
-   Requires jQuery (included via CDN in `index.html`).

## Customization

-   **Styles**: Edit the CSS in the `<style>` block in `index.html` to change colors or animations.
-   **Logic**: Modify `app.js` to change default durations or animation speeds.
