import mongoose from "mongoose";

// Estados do ciclo de vida do pedido (secao Tracking do README).
export const ORDER_STATUSES = [
  "Recebido",
  "Em preparacao",
  "Pronto",
  "Recolhido",
  "A caminho",
  "Entregue",
  "Rejeitado"
];

// Nome e preco sao copiados no momento do pedido, para o historico nao mudar
// se o restaurante alterar o menu depois.
const orderItemSchema = new mongoose.Schema(
  {
    menuItemId: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    quantity: { type: Number, required: true, min: 1 }
  },
  { _id: false }
);

const orderSchema = new mongoose.Schema(
  {
    restaurant: { type: String, ref: "Restaurant", required: true, index: true },
    restaurantName: { type: String, required: true },
    items: {
      type: [orderItemSchema],
      validate: (items) => items.length > 0
    },
    subtotal: { type: Number, required: true, min: 0 },
    deliveryFee: { type: Number, required: true, min: 0 },
    total: { type: Number, required: true, min: 0 },
    status: { type: String, enum: ORDER_STATUSES, default: "Recebido" },
    eta: { type: String }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform: (_doc, ret) => {
        delete ret._id;
        return ret;
      }
    }
  }
);

export const Order = mongoose.model("Order", orderSchema);
