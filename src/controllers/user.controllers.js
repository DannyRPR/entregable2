const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async(req, res) => {
    const users = await User.findAll();
    return res.json(users);
});

const create = catchError(async(req,res) => {
    const result = await User.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req,res) => {
    const {id} = req.params;
    const one = await User.findByPk(id);
    return res.json(one);
})

const remove = catchError(async(req,res) => {
    const { id } = req.params;
    await User.destroy({ where: {id}});
    return res.sendStatus(204);
});

const update = catchError(async(req,res) => {
    const { id } = req.params;
    const upd = await User.update( req.body, { where: {id}, returning: true});
    return res.json(upd[1][0]);
 })

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}