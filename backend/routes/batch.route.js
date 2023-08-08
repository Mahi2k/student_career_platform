const express = require('express');
const batchrouter = express.Router();
const { createBatch,getBatchdetailbyid,updateBatch,deleteBatch,addStudenttoBatch,deleteStudentfromBatch,getAllbatches} = require("../controllers/batch.controller")
const authenticateJWT =require('../utils/middleware')
batchrouter.post('/create',authenticateJWT, createBatch);
batchrouter.get('/all', getAllbatches);
batchrouter.get('/:id',authenticateJWT, getBatchdetailbyid);
batchrouter.put('/:id',authenticateJWT, updateBatch);
batchrouter.post('/:id/students',authenticateJWT, addStudenttoBatch);
batchrouter.delete('/:id', authenticateJWT,deleteBatch);
batchrouter.delete('/:id/students/:studentId',authenticateJWT, deleteStudentfromBatch);


module.exports = batchrouter;