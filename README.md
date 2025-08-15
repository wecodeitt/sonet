# Admin Dashboard

A modern Angular admin dashboard with Material Design components. This project provides a clean, responsive interface for administrative tasks with authentication, navigation, and dashboard widgets.

## 🚀 Features

- **Modern Angular**: Built with Angular 20+ and TypeScript
- **Material Design**: Professional UI components using Angular Material
- **Responsive Layout**: Mobile-friendly design with flexbox and CSS Grid
- **Authentication**: Login page with form validation
- **Dashboard Widgets**: Statistics cards, activity feed, and chart placeholders
- **Navigation**: Sidebar menu with routing support
- **GitHub Pages**: Configured for easy deployment

## 📦 Components

- **Header Component**: Top navigation bar with user menu
- **Sidebar Component**: Navigation menu with dashboard links
- **Dashboard Component**: Main dashboard with stats and activity widgets
- **Login Component**: Authentication form with validation

## 🛠 Development

### Prerequisites
- Node.js 20+ and npm
- Angular CLI 20+

### Installation

```bash
# Clone the repository
git clone https://github.com/wecodeitt/sonet.git
cd sonet

# Install dependencies
npm install

# Start development server
npm start
```

The application will be available at `http://localhost:4200/`

## 🏗 Building

### Development Build
```bash
npm run build
```

### Production Build for GitHub Pages
```bash
npm run build:gh-pages
```

## 🚢 Deployment

The project is configured for automatic deployment to GitHub Pages. Push to the main branch to trigger deployment.

## 📱 Screenshots

- **Dashboard**: Statistics overview with widgets and charts
- **Login**: Secure authentication form
- **Responsive**: Mobile-friendly layout

## 🎨 Technology Stack

- **Frontend**: Angular 20, TypeScript, SCSS
- **UI Library**: Angular Material
- **Build Tool**: Angular CLI with Webpack
- **Deployment**: GitHub Pages with GitHub Actions

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
