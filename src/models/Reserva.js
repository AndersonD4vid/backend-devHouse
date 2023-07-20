import { model, Schema } from "mongoose";

const ReservaSchema = new Schema({
   data: String,
   user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
   },
   house: {
      type: Schema.Types.ObjectId,
      ref: 'House'
   }
});

export default model('Reserva', ReservaSchema);