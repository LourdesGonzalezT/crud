const { Schema, model } = require("mongoose");

const festivalSchema = new Schema(
  {
    name: {
      type: String,
      // required: [true, 'El nombre del festival es obligatorio']
    },
    // music: [{
    //   type: Schema.Types.ObjectId,
    //   ref: 'musicStyle',
    //   default: []
    // }],
    // artistsInvited: [{
    //   type: Schema.Types.ObjectId,
    //   ref: 'artist',
    //   default: []
    // }],
    musicStyle: [{
      type: Array,
      enum: ['Rock', 'Blues', 'Flamenco', 'Latin', 'Jazz', 'Pop', 'Electrónica', 'Hip Hop', 'Urban', 'Reggaeton', 'Indie', 'Pop', 'Alternativo', 'Metal', 'Punk', 'Multigénero', 'Fusión', 'World Music'],
      default: [],
    }],
    artistsInvited: [{
      type: Array,
      default: []
    }],
    date: {
      type: String,
    },
    edition: {
      type: Number,
    },
    venue: {
      type: String,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    webSite: {
      type: String,
    },
    image: {
      type: String,
    },
    contactName: {
      type: String,
    },
    contactPhone: {
      type: Number,
    },
    contactEmail: {
      type: String,
    },
    observations: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

const Festival = model("Festival", festivalSchema);

module.exports = Festival;

