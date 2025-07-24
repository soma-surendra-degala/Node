const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Blog = require('./models/blog')

// Set EJS as view engine
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

const dbURI = 'mongodb+srv://surendra:Suri1234@surendra.irg39h8.mongodb.net/blog?retryWrites=true&w=majority&appName=Surendra';
mongoose.connect(dbURI).then(()=> {
    console.log("Database is connected")}).catch((err)=> {console.log(err)});



// Listen on port
app.listen(2500, () => {
    console.log('Server is started');
})


// app.get('/add-blog',(req,res)=>{

//     const blog =new Blog({
//         title:'New Blog',
//         snippet:'About me',
//         body:'More about my new blog'
//     })

//     blog.save().then((result)=>{
//         res.send(result)
//     }).catch((err)=>{
//         console.log(err);
//     })

// })

// Home route
app.get('/', (req, res) => {
   res.redirect('/blogs')
});

// About route
app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

// Create blog route
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create Blog' });
});

app.get('/blogs',(req,res)=>{
    Blog.find().sort({createdAt:-1}).then((result)=>{
        res.render('index',{title:'All Blogs',blogs:result})
    })
})


app.post('/blogs',(req,res)=>{
    const blog = new Blog(req.body); 

    blog.save().then((result)=>{
        res.redirect('/blogs')
    })
    .catch((err)=>{
        console.log(err)
    })

})


app.get('/blogs/:id',(req,res)=>{
    const id = req.params.id;
    Blog.findById(id)
    .then(result=>{
       res.render('details',{blog:result,title:'Create a new blog'});
    }).catch(err=>{console.log(err)})
})

app.delete('/blogs/:id',(req,res)=>{
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then(result=>{
        res.json({redirect:'blogs'})
    })
})


// 404 - catch-all route (should always be last)
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});
