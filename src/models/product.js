import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        image: {
            type: Array
        },
        price: {
            type: Number,
        },
        categoryId: {
            type: mongoose.Types.ObjectId,
            ref: "Category",
        },
    },
    { timestamps: true, versionKey: false }

);

productSchema.plugin(mongoosePaginate)
export default mongoose.model("Product", productSchema);