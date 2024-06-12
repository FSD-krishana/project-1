const express = require('express');
const app = express();
const port = 3000;

// About Us data
const aboutUsInfo = {
    title: "About Us",
    content: "We are a company dedicated to providing the best services to our customers. Our team is committed to excellence and innovation.",
    team: [
        { name: "John Doe", role: "CEO" },
        { name: "Jane Smith", role: "CTO" },
        { name: "Emily Johnson", role: "CFO" }
    ],
    history: "Founded in 2020, our company has rapidly grown to become a leader in the industry. Our mission is to innovate and lead the market with our cutting-edge solutions."
};

// Endpoint to get About Us data
app.get('/aboutus', (req, res) => {
    res.json(aboutUsInfo);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
