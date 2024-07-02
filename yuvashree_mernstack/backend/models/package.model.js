import mongoose from "mongoose";

const packageSchema = new mongoose.Schema(
  {
    packageName: {
      type: String,
      required: true,
    },
    packageDescription: {
      type: String,
      required: true,
    },
    packageDestination: {
      type: String,
      required: true,
    },
    packageDays: {
      type: Number,
      required: true,
    },
    packageNights: {
      type: Number,
      required: false,
    },
    packageAccommodation: {
      type: String,
      required: false,
    },
    packageTransportation: {
      type: String,
      required: false,
    },
    packageMeals: {
      type: String,
      required: true,
    },
    packageActivities: {
      type: String,
      required: true,
    },
    packagePrice: {
      type: Number,
      required: true,
    },
    packageDiscountPrice: {
      type: Number,
      required: true,
    },
    packageOffer: {
      type: Boolean,
      required: true,
    },
    packageRating: {
      type: Number,
      default: 0,
    },
    packageTotalRatings: {
      type: Number,
      default: 0,
    },
    packageImages: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

const Package = mongoose.model("Package", packageSchema);

export default Package;
