const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const brands=require('./brands.json')

require('dotenv').config()



const app=express()
const port= process.env.PORT||5000

app.use(express.json())
const corsOptions ={
  origin:'*', 
  credentials:true,
  optionSuccessStatus:200,
}
app.use(cors(corsOptions))




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yreqqti.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    const googleCollaction = client.db("googleDB").collection("google")
    const appleCollaction = client.db("appleDB").collection("apple")
    const samsungCollaction = client.db("samsungDB").collection("samsung")
    const intelCollaction = client.db("intelDB").collection("intel")
    const sonyCollaction = client.db("sonyDB").collection("sony")
    const acerCollaction = client.db("acergDB").collection("acer")
    
    app.get('/',(req,res)=>{
      res.send(brands)
    })

    app.get('/google',async(req,res)=>{
      const cursor= googleCollaction.find()
      const result=await cursor.toArray()
      res.send(result)
    })

    app.get(`/google/:id`,async(req,res)=>{
      const id= req.params.id
      const query={_id: new ObjectId(id)}
      const result=await googleCollaction.findOne(query)
      res.send(result)
    })

    app.post('/google',async(req,res)=>{
      const googleproduct=req.body
      console.log(googleproduct);
      const result=await googleCollaction.insertOne(googleproduct)
      res.send(result)
    })

    app.put('/google/:id',async(req,res)=>{
      const id=req.params.id
      const updategoogle=req.body
      const updatedoct={
        $set:{
          name:updategoogle.name,
          brandName:updategoogle.brandName,
          types:updategoogle.types,
          rating:updategoogle.rating,
          price:updategoogle.price,
          photo:updategoogle.photo,
          driscription:updategoogle.driscription,
        }
      }
      const filter={_id:new ObjectId(id)}
      const options = { upsert: true };
      const result=await googleCollaction.updateOne(filter,updatedoct,options)
      res.send(result)

    });


    app.get('/apple',async(req,res)=>{
      const cursor= appleCollaction.find()
      const result=await cursor.toArray()
      res.send(result)
    })

    app.get(`/apple/:id`,async(req,res)=>{
      const id= req.params.id
      const query={_id: new ObjectId(id)}
      const result=await appleCollaction.findOne(query)
      res.send(result)
    })

    app.post('/apple',async(req,res)=>{
      const googleproduct=req.body
      console.log(googleproduct);
      const result=await appleCollaction.insertOne(googleproduct)
      res.send(result)
    })

    
    app.put('/apple/:id',async(req,res)=>{
      const id=req.params.id
      const updategoogle=req.body
      const updatedoct={
        $set:{
          name:updategoogle.name,
          brandName:updategoogle.brandName,
          types:updategoogle.types,
          rating:updategoogle.rating,
          price:updategoogle.price,
          photo:updategoogle.photo,
          driscription:updategoogle.driscription,
        }
      }
      const filter={_id:new ObjectId(id)}
      const options = { upsert: true };
      const result=await appleCollaction.updateOne(filter,updatedoct,options)
      res.send(result)

    });

    app.get('/samsung',async(req,res)=>{
      const cursor= samsungCollaction.find()
      const result=await cursor.toArray()
      res.send(result)
    })

    app.get(`/samsung/:id`,async(req,res)=>{
      const id= req.params.id
      const query={_id: new ObjectId(id)}
      const result=await samsungCollaction.findOne(query)
      res.send(result)
    })

    app.post('/samsung',async(req,res)=>{
      const googleproduct=req.body
      console.log(googleproduct);
      const result=await samsungCollaction.insertOne(googleproduct)
      res.send(result)
    })

    
    app.put('/samsung/:id',async(req,res)=>{
      const id=req.params.id
      const updategoogle=req.body
      const updatedoct={
        $set:{
          name:updategoogle.name,
          brandName:updategoogle.brandName,
          types:updategoogle.types,
          rating:updategoogle.rating,
          price:updategoogle.price,
          photo:updategoogle.photo,
          driscription:updategoogle.driscription,
        }
      }
      const filter={_id:new ObjectId(id)}
      const options = { upsert: true };
      const result=await samsungCollaction.updateOne(filter,updatedoct,options)
      res.send(result)

    });

    app.get('/sony',async(req,res)=>{
      const cursor= sonyCollaction.find()
      const result=await cursor.toArray()
      res.send(result)
    })

    app.get(`/sony/:id`,async(req,res)=>{
      const id= req.params.id
      const query={_id: new ObjectId(id)}
      const result=await sonyCollaction.findOne(query)
      res.send(result)
    })

    app.post('/sony',async(req,res)=>{
      const googleproduct=req.body
      console.log(googleproduct);
      const result=await sonyCollaction.insertOne(googleproduct)
      res.send(result)
    })

    
    app.put('/sony/:id',async(req,res)=>{
      const id=req.params.id
      const updategoogle=req.body
      const updatedoct={
        $set:{
          name:updategoogle.name,
          brandName:updategoogle.brandName,
          types:updategoogle.types,
          rating:updategoogle.rating,
          price:updategoogle.price,
          photo:updategoogle.photo,
          driscription:updategoogle.driscription,
        }
      }
      const filter={_id:new ObjectId(id)}
      const options = { upsert: true };
      const result=await sonyCollaction.updateOne(filter,updatedoct,options)
      res.send(result)

    });
    app.get('/intel',async(req,res)=>{
      const cursor= intelCollaction.find()
      const result=await cursor.toArray()
      res.send(result)
    })

    app.get(`/intel/:id`,async(req,res)=>{
      const id= req.params.id
      const query={_id: new ObjectId(id)}
      const result=await intelCollaction.findOne(query)
      res.send(result)
    })

    app.post('/intel',async(req,res)=>{
      const googleproduct=req.body
      console.log(googleproduct);
      const result=await intelCollaction.insertOne(googleproduct)
      res.send(result)
    })

    
    app.put('/intel/:id',async(req,res)=>{
      const id=req.params.id
      const updategoogle=req.body
      const updatedoct={
        $set:{
          name:updategoogle.name,
          brandName:updategoogle.brandName,
          types:updategoogle.types,
          rating:updategoogle.rating,
          price:updategoogle.price,
          photo:updategoogle.photo,
          driscription:updategoogle.driscription,
        }
      }
      const filter={_id:new ObjectId(id)}
      const options = { upsert: true };
      const result=await intelCollaction.updateOne(filter,updatedoct,options)
      res.send(result)

    });
    app.get('/acer',async(req,res)=>{
      const cursor= acerCollaction.find()
      const result=await cursor.toArray()
      res.send(result)
    })

    app.get(`/acer/:id`,async(req,res)=>{
      const id= req.params.id
      const query={_id: new ObjectId(id)}
      const result=await acerCollaction.findOne(query)
      res.send(result)
    })

    app.post('/acer',async(req,res)=>{
      const googleproduct=req.body
      console.log(googleproduct);
      const result=await acerCollaction.insertOne(googleproduct)
      res.send(result)
    })

    
    app.put('/acer/:id',async(req,res)=>{
      const id=req.params.id
      const updategoogle=req.body
      const updatedoct={
        $set:{
          name:updategoogle.name,
          brandName:updategoogle.brandName,
          types:updategoogle.types,
          rating:updategoogle.rating,
          price:updategoogle.price,
          photo:updategoogle.photo,
          driscription:updategoogle.driscription,
        }
      }
      const filter={_id:new ObjectId(id)}
      const options = { upsert: true };
      const result=await acerCollaction.updateOne(filter,updatedoct,options)
      res.send(result)

    });



    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/',async(req,res)=>{
    res.send("server site running....")
})

app.listen(port,()=>{
    console.log(`running port ${port}`);
})

