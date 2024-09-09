import mongoose from "mongoose"

const ConnectMongodb = async () => {
  
  await mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB")) //Added
  .catch(err => console.error("Failed to connect to MongoDB", err)); //Added
    
}

export default ConnectMongodb