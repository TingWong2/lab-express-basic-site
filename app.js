const express = require('express'); 
const app = express();
const hbs = require('hbs');

app.set('view engine', 'hbs')
app.use(express.static('public'))

hbs.registerPartials(__dirname + "/views/partials")

app.get("/",(req, res)=>{
    res.render("home", {
		css: ["home.css"],
		town: {
			name: "Annecy",
			picture: [
                "/images/annecy/IMG_0918.jpg",
                "/images/annecy/IMG_0932.jpg",
                "/images/annecy/IMG_0938.jpg",
                "/images/annecy/IMG_0982.jpg"
            ] 
		},
	});
});

app.get("/about",(req, res)=>{
    res.render("about", {
        css:["about.css"],
        picture: [
            "/images/montain/IMG_0842.jpg",
            "/images/montain/IMG_0843.jpg",
            "/images/montain/IMG_0845.jpg"
        ]
    }
    )
}); 

app.get("/works",(req, res)=> {
    console.log("hello!")
    res.render("works", {
    css:["works.css"],
    picture: [
        "/images/work/IMG_1005.jpg",
        "/images/work/IMG_1007.jpg",
        "/images/work/IMG_1008.jpg"
    ]
    })
});


app.listen(5000);