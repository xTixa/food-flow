import mongoose from "mongoose";

// Converte o documento para o formato que o frontend ja usa: `id` em vez de `_id`, sem `__v`.
const toJSON = {
  virtuals: true,
  versionKey: false,
  transform: (_doc, ret) => {
    delete ret._id;
    return ret;
  }
};

// O menu fica dentro do restaurante (subdocumentos), porque e sempre lido em conjunto.
const menuItemSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    name: { type: String, required: true, trim: true },
    description: { type: String, default: "" },
    price: { type: Number, required: true, min: 0 },
    popular: { type: Boolean, default: false },
    available: { type: Boolean, default: true }
  },
  { toJSON }
);

const restaurantSchema = new mongoose.Schema(
  {
    // Slug legivel (ex: "sushi-rio") usado diretamente nos URLs do frontend.
    _id: { type: String, required: true },
    name: { type: String, required: true, trim: true },
    category: { type: String, required: true, index: true },
    rating: { type: Number, default: 0, min: 0, max: 5 },
    deliveryTime: { type: String, required: true },
    deliveryFee: { type: Number, required: true, min: 0 },
    minimumOrder: { type: Number, default: 0, min: 0 },
    image: { type: String },
    featured: { type: Boolean, default: false },
    menu: [menuItemSchema]
  },
  { timestamps: true, toJSON }
);

export const Restaurant = mongoose.model("Restaurant", restaurantSchema);
