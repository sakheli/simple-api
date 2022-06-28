import './pre-start'; // Must be the first import
import logger from 'jet-logger';
import server from './server';
import mongoose  from "mongoose";


// Constants
const serverStartMsg = 'Express server started on port: ',
        port = (process.env.PORT || 3000);

mongoose.connect(process.env.MONGODB_CONNECTION??"").then(() => {
    // Start server
    server.listen(port, () => {
        logger.info(serverStartMsg + port);
    });
}).catch((err) => {
    console.log(err)
})


