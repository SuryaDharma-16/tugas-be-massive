import express from "express";
import {addNotes, getNotes, getNotesById, updateNotes, deleteNotes} from "../notes.js";
const router = express.Router();

router.get("/notes", getNotes);
router.post("/notes", addNotes);
router.get("/notes/:id", getNotesById);
router.put("/notes/:id", updateNotes);
router.delete("/notes/:id", deleteNotes);

export default router;