import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import moment from 'moment';

moment().format();

const dateOrderSchema = new mongoose.Schema({
  startDate: {
    type: Date,
    default: Date.now,
  },
  endDate: {
    type: String,
  },
  idRoom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  iduser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  chair: {
    type: String,
  },
});

dateOrderSchema.plugin(mongoosePaginate);

const dateOrder = mongoose.model('dateOrder', dateOrderSchema);

export default dateOrder;
