const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/api/blog')
        .then(function(response){
            res.render('index', { blog : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.add_user = (req, res) =>{
    res.render('add_blog');
}

exports.update_user = (req, res) =>{
    axios.get('http://localhost:3000/api/blog', { params : { id : req.query.id }})
        .then(function(blogdata){
            res.render("update_blog", { blog : blogdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}