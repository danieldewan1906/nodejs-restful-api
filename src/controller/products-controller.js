const productService = require("../service/product-service.js");

const create = async (req, res, next) => {
    try {
        const result = await productService.createProduct(req.body);
        req.data = result;
        next();
    } catch (e) {
        next(e);
    }
}

const update = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await productService.updateProduct(id, req.body);
        req.data = result;
        next();
    } catch (e) {
        next(e);
    }
}

const getProductById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await productService.getById(id);
        req.data = result;
        next();
    } catch (e) {
        next(e);
    }
}

const getAllProduct = async (req, res, next) => {
    try {
        const result = await productService.getAll();
        req.data = result;
        next();
    } catch (e) {
        next(e);
    }
}

const esTextSearch = async (req, res, next) => {
    try {
        const name = req.query.name
        const result = await productService.esTextSearch(name);
        req.data = result;
        next();
    } catch (e) {
        next(e);
    }
}

module.exports = {
    create,
    update,
    getProductById,
    getAllProduct,
    esTextSearch
}