const formidable = require('formidable');
const _= require('lodash');
const fs = require('fs');

const Product = require('../models/Product');
const { errorHandler } = require('../helpers/dberrorHandler');

exports.create = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if(err) {
            return res.status(400).json({
                error: "imagen no Cargada"
            })
        }

        const { name, description, price, category, quantity } = fields;
        let product = new Product(fields);

        if(files.photo) {
            if (files.photo.size > 1000000) {
                return res.status(400).json({
                    error: "Imagen muy pesada, máximo 1MB"
                })
            }
            product.photo.data = fs.readFileSync(files.photo.path);
            product.photo.contentType = files.photo.type;
        }

        product.save((err, result) => {
            if(err) {
                return res.status(400).json({
                    error: errorHandler(error)
                })
            }
            res.json(result);
        })
    })
}

exports.list = (req, res) => {
    let order = req.query.order ? req.query.order : 'asc';
    let sortby = req.query.sortby ? req.query.sortby : 'name';

    Product.find()
        .select("-photo")
        .populate("category")
        .sort([[sortby, order]])
        .exec((err, product) => {
            if (err) {
                return res.status(400).json({
                    error: "Producto no encontrado"
                })
            }
            res.json(product);
        })
}

exports.remove = (req, res) =>{
    let product = req.product
    product.remove((err, deletedProduct) => {
        if(err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({
            message: "Producto borrado"
        })
    })
}

exports.productById = (req, res, next, id) => {
    Product.findById(id)
        .populate("category")
        .exec((err, product) => {
            if (err || !product) {
                return res.status(400).json({
                    error: "Producto no encontrado"
                });
            }
            req.product = product;
            next();
        })
}

exports.photo = (req, res, next) => {
    if (req.product.photo.data) {
        res.set('Content-Type', req.product.photo.contentType);
        return res.send(req.product.product.photo.data);
    }
    next();
}