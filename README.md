# DOCXPDF Converter

DOCXPDF Converter is a web application that allows users to easily convert Microsoft Word documents (.docx files) to PDF format. Built with Node.js and Express, this application provides a simple and intuitive interface for quick document conversions.

## Features

- User-friendly web interface
- Drag-and-drop file upload
- Supports conversion of .docx files to PDF
- Real-time file name display
- Immediate download of converted PDF files
- Error handling for invalid file types

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v12.0.0 or higher)
- npm (usually comes with Node.js)

## Installation

To install DOCXPDF Converter, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/subx6789/docxpdf-converter.git
   ```

2. Navigate to the project directory:

   ```
   cd docxpdf-converter
   ```

3. Install the required dependencies:

   ```
   npm install
   ```

4. Create `uploads` and `outputs` directories in the project root:
   ```
   mkdir uploads outputs
   ```

## Usage

To run DOCXPDF Converter, follow these steps:

1. Start the server:

   ```
   node server.js
   ```

2. Open your web browser and navigate to `http://localhost:3000`

3. Click on "Choose DOCX File" to select a .docx file or drag and drop a file onto the button

4. Click "Convert to PDF" to start the conversion process

5. Once complete, the converted PDF will automatically download

## Contributing

Contributions to DOCXPDF Converter are welcome. To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details.

## Contact

If you have any questions or feedback, please reach out to us at [subhajits956@gmail.com](mailto:subhajits956@gmail.com).

## Acknowledgements

- [Express.js](https://expressjs.com/)
- [Multer](https://github.com/expressjs/multer)
- [docx-pdf](https://www.npmjs.com/package/docx-pdf)
