var express = require('express');
var router = express.Router();
const orderController = require('../controllers/orderController');
const checkToken = require('../middelwares/checkToken').checkToken;
const upload = require('../config/multer.js');

router.post('/:store_idx/file', checkToken, upload.single('file'), orderController.registerFile);
router.put('/:file_idx/options', checkToken, orderController.registerOptions);
router.put('/:order_idx/payment', checkToken, orderController.completePayment);

module.exports = router;