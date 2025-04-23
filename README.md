<!-- @format -->

# README

## Project Overview

This project aims to create an online clothing store, providing users with a seamless shopping experience. The application features product listings, filtering options, and sorting capabilities to enhance user navigation and product discovery.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Styling](#styling)
- [Contributing](#contributing)
- [License](#license)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   git clone <repository-url>
   cd <repository-directory>

2. Install dependencies:

   npm install

3. Run the development server:

   npm run dev

4. Open your browser and navigate to:

   http://localhost:3000

## Usage

The main entry point of the application is the Home component, which renders the main layout of the online store. It includes a title, a top navigation bar, and sections for filtering and displaying products.

### Home Component

The Home component is structured as follows:

- Title: Displays the main heading "All Products".
- TopBar: Contains navigation links for easy access to different sections of the store.
- Filters: Allows users to filter products based on various criteria.
- Product List: Displays the list of products available for purchase.

## Components

The following components are utilized within the Home component:

- Container: A layout component that provides consistent spacing and alignment for child elements.
- Title: Renders a heading with customizable text and size.
- TopBar: A navigation bar that provides links to different sections of the application.
- Filters: A component that allows users to filter products based on selected criteria.
- SortPopup: A component for sorting products based on user preferences (not currently used in the provided code).
- Image: An optimized image component from Next.js for displaying product images (not currently used in the provided code).

## Styling

The application uses Tailwind CSS for styling. The classes applied to components ensure responsive design and consistent spacing. For example:

- mt-10: Applies a top margin of 10 units.
- pb-14: Applies a bottom padding of 14 units.
- flex: Enables flexbox layout for child elements.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/YourFeature).
3. Make your changes and commit them (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature/YourFeature).
5. Open a pull request.
