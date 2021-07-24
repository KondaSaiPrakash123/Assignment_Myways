var Blogdb = require('../model/model');

// create and save new user
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new blog
    const blog = new Blogdb({
        title : req.body.title,
        imagelink : req.body.imagelink,
        comment: req.body.comment,
    })

    // save blog in the database
    blog
        .save(blog)
        .then(data => {
            //res.send(data)
            res.redirect('/add-blog');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}

// retrieve and return all blogs/ retrive and return a single blog
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Blogdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found blog "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Error retrieving blog" + id})
            })

    }else{
        Blogdb.find()
            .then(blog => {
                res.send(blog)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving blog" })
            })
    }

    
}

// Update a new idetified user by user id
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Blogdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}

// Delete a user with specified user id in the request
exports.delete = (req, res)=>{
    const id = req.params.id;

    Blogdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "Blog was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete blog with id=" + id
            });
        });
        <button>PUBLISH</button>
}