const express = require("express");
const path = require("path");
const multer = require("multer");
const docxtopdf = require("docx-pdf");
const fs = require("fs");
require("dotenv").config();

const app = express();

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (path.extname(file.originalname).toLowerCase() === ".docx") {
      cb(null, true);
    } else {
      cb(new Error("Only .docx files are allowed"));
    }
  },
});

// Serve the main HTML page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Handle POST request for converting DOCX to PDF
app.post("/docxtopdf", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded or invalid file type.");
  }

  console.log("File path:", req.file.path);

  const outputFilePath = path.join(
    __dirname,
    "outputs",
    Date.now() + "output.pdf"
  );

  docxtopdf(req.file.path, outputFilePath, (err, result) => {
    if (err) {
      console.error("Conversion error:", err);
      return res.status(500).send("Error converting file.");
    }

    res.download(outputFilePath, "converted.pdf", (err) => {
      if (err) {
        console.error("Download error:", err);
      }

      // Clean up files after download
      fs.unlink(req.file.path, () => {});
      fs.unlink(outputFilePath, () => {});
    });
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).send("File upload error: " + err.message);
  } else if (err) {
    return res.status(500).send("Server error: " + err.message);
  }
  next();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
