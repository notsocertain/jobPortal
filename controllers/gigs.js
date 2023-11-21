const Gig = require('../models/Gig');

const Gigs = async (req, res) => {
    try {
        const gigs = await Gig.findAll();

        if (gigs.length > 0) {
            const gigsData = gigs.map(gig => gig.get()); // Convert Sequelize instances to plain objects
            res.render('gigs', {
                gigs: gigsData
            });
        } else {
            res.status(200).send('No gigs available.');
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = Gigs;
