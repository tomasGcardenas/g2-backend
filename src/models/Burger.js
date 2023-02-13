const { model, default: mongoose } = require('mongoose');
const extendSchema = require('mongoose-extend-schema');
const { ProductSchema }  = require('./Product');

const BurgerSchema = extendSchema(ProductSchema, {
    ingredients: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ingredient'
        },
    ],
},{
    versionKey: false
})

const Burger = model('Burger', BurgerSchema);

module.exports = {
    Burger,
};
