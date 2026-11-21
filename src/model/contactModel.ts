import { InferSchemaType, Model, Schema, model, models } from "mongoose";

const contactSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 200 },
    mobile: { type: String, trim: true, maxlength: 20, default: "" },
    message: { type: String, required: true, trim: true, maxlength: 5000 },
  },
  { timestamps: true }
);

export type ContactDocument = InferSchemaType<typeof contactSchema>;

// Reuse the existing model during dev hot-reloads to avoid OverwriteModelError.
export const Contact: Model<ContactDocument> =
  (models.Contact as Model<ContactDocument>) || model<ContactDocument>("Contact", contactSchema);

export default Contact;
