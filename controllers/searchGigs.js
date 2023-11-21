const Gig = require('../models/Gig');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const searchGigs = async (req, res) => {
    try {
        const { term } = req.query;

        // Correct Sequelize query syntax
        const gigs = await Gig.findAll({
            where: {
                technologies: {
                    [Op.iLike]: `%${term}%`  // Use square brackets for dynamic keys
                }
            }
        });
            // Convert Sequelize instances to plain objects
        const gigsData = gigs.map(gig => gig.get());

        res.render('gigs', { gigs: gigsData });

        console.log(gigs);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = searchGigs;
