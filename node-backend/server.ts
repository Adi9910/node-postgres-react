process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'; // Disable SSL certificate validation for local development
import app from "./src/app";
import * as dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//npx ts-node server.ts
