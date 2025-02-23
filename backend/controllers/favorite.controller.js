import favoriteItem from "../models/favorite.model.js";
import mongoose from "mongoose";


export const createFavorite = async (req, res) => {
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
}