const express = require('express');
const router = express.Router();
const { Case } = require("../models/Case");

//const { auth } = require("../middleware/auth");

//=================================
//             Case
//=================================


router.post("/", (req, res) => { // /upload

    //save all the data we got from the client into the DB 
    const case1 = new Case(req.body)

    case1.save((err) => {
        if (err) return res.status(400).json({ success: false, err })
        return res.status(200).json({ success: true })
    })

});

router.post("/cases", (req, res) => { 

    //db의 collection에 저장한 판례들을 가져오기
    Case.find()
        .populate("writer")
        .exec((err, caseInfo) => {
            if (err) return res.status(400).json({ success: false, err })
            return res.status(200).json({ success: true, caseInfo })
        })

});


/*
router.post("/getProducts", (req, res) => {

    let order = req.body.order ? req.body.order : "desc";
    let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
    let limit = req.body.limit ? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip);

    let findArgs = {};
    let term = req.body.searchTerm;

    for (let key in req.body.filters) {

        if (req.body.filters[key].length > 0) {
            if (key === "price") {
                findArgs[key] = {
                    $gte: req.body.filters[key][0],
                    $lte: req.body.filters[key][1]
                }
            } else {
                findArgs[key] = req.body.filters[key];
            }
        }
    }

    console.log(findArgs)

    if (term) {
        Product.find(findArgs)
            .find({ $text: { $search: term } })
            .populate("writer")
            .sort([[sortBy, order]])
            .skip(skip)
            .limit(limit)
            .exec((err, products) => {
                if (err) return res.status(400).json({ success: false, err })
                res.status(200).json({ success: true, products, postSize: products.length })
            })
    } else {
        Product.find(findArgs)
            .populate("writer")
            .sort([[sortBy, order]])
            .skip(skip)
            .limit(limit)
            .exec((err, products) => {
                if (err) return res.status(400).json({ success: false, err })
                res.status(200).json({ success: true, products, postSize: products.length })
            })
    }

});


//?id=${productId}&type=single
//id=12121212,121212,1212121   type=array 
router.get("/products_by_id", (req, res) => {
    let type = req.query.type
    let productIds = req.query.id

    console.log("req.query.id", req.query.id)

    if (type === "array") {
        let ids = req.query.id.split(',');
        productIds = [];
        productIds = ids.map(item => {
            return item
        })
    }

    console.log("productIds", productIds)


    //we need to find the product information that belong to product Id 
    Product.find({ '_id': { $in: productIds } })
        .populate('writer')
        .exec((err, product) => {
            if (err) return res.status(400).send(err)
            return res.status(200).send(product)
        })
});

*/

module.exports = router;
