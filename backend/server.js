import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import path from 'path';
//import favoriteRoutes from './routes/favorite.route.js'

const app = express();
const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();

dotenv.config();
app.use(express.json()); // to accept JSON data in the body

//app.use("/api/favorite", favoriteRoutes);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req,res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  })
}

app.listen(PORT, () => {
  connectDB()
  console.log('Server is running on http://localhost:' + PORT);
});



// Example of post request not using the routing
/*
app.post("/favorite", async (req, res) => {
  const sentItem = req.body; // user sends this data

  if(!sentItem.name || !sentItem.description || !sentItem.rating || !sentItem.image) {
      return res.status(400).json({success: false, message: "Please provide all required fields"});
  }

  const newFavoriteItem = new favoriteItem(sentItem);
  try {
      await newFavoriteItem.save();
      res.status(201).json({success: true, data: newFavoriteItem});
      console.log("Favorite item created successfully: ", newFavoriteItem);
  } catch (error) {
      console.log("Error in creating favorite item: ", error.message);
      res.status(500).json({success: false, message: error.message});
  }
})
*/


