const Gig = require('../models/Gig');


const addGigs = async (req, res) => {
    try {
        // Destructure values from request body
        let { title, technologies, budget, description, contact } = req.body;

        // Array to store validation errors
        let errors = [];

        // Validate fields
        if (!title) {
            errors.push({ text: 'Please add a title' });
        }

        if (!technologies) {
            errors.push({ text: 'Please add some technologies' });
        }

        if (!description) {
            errors.push({ text: 'Please add a description' });
        }

        if (!contact) {
            errors.push({ text: 'Please add a contact email' });
        }

        // Check for errors
        if (errors.length > 0) {
            // If there are errors, render the 'add' page with error messages and previously entered values
            res.render('add', {
                errors,
                title,
                technologies,
                budget,
                description,
                contact
            });
        } else {
            // If no errors, process the data

            // Set budget to 'Unknown' if not provided, otherwise format it as a string with a dollar sign
            budget = !budget ? 'Unknown' : `$${budget}`;

            // Make technologies lowercase and remove space after comma
            technologies = technologies.toLowerCase().replace(/,[ ]+/g, ',');

            // Use await for Gig.create() to ensure it completes before sending a response
            await Gig.create({
                title,
                technologies,
                budget,
                contact,
                description
            });

            // Send a success message
            //res.status(200).send('ALL GOOD HOPEFULLY');
            res.redirect('/gigs');
        }
    } catch (error) {
        // Handle any unexpected errors and send a 500 Internal Server Error response
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = addGigs;
