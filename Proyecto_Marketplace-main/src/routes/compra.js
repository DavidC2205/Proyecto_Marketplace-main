const express = require('express');
const router = express.Router();

router.get('/',(req, res) => {
    res.render('compra')
}); 
/*router.get('/community', isLoggedIn, async (req, res) => {
    const data = await pool.query('SELECT * FROM data')
    res.render('community', {data});
});
*/

router.post('/compra:id', async(req, res) => {
    const {id} = req.params;
    const { title, description, image } = req.body;
    const newData = {
        title,
        description,
        image
    }

});

module.exports = router;