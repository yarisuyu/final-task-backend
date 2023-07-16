import mongoose from 'mongoose';
import { PORT } from './constants';

import * as serverService from './services/server.service';

const userName = 'lisinaeg';
const password = 'uiaq6V8YrwUGiaoW';
const clusterInfo = 'clusterpm';

(async () => {
  try {
    await mongoose.connect(`mongodb+srv://${userName}:${password}@${clusterInfo}.fzhfeov.mongodb.net/?retryWrites=true&w=majority`);
    serverService.server.listen(process.env.PORT || PORT, function () {
      console.log('Сервер ожидает подключения...');
    })
  } catch (error) {
    console.log(error);
  }
})();



process.on('SIGINT', async () => {
  await mongoose.disconnect();
  process.exit();
});
