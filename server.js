const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
// const AdminBro = require("admin - bro");
// const AdminBroExpress = require("@admin-bro / express");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const postRoutes = require("./routes/posts");
// const commentRoutes = require("./routes/comments");
const amountRoutes = require("./routes/amounts")
const dotenv = require("dotenv")

// Passport config
require("./config/passport")(passport);

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });


//Database connection
require("./config/database")
//Connect To Database
connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("listening for requests");
  })
});

//Using EJS for views
app.set("view engine", "ejs");

//Static Folder
app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
// app.use(adminBro.options.rootPath, router)

//Use flash messages for errors, info, ect...
app.use(flash());

//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);
app.use("/post", postRoutes);
// app.use("/comment", commentRoutes);
app.use("/amount", amountRoutes)
// app.set('PORT', (process.env.PORT))
// app.set('host', `0.0.0.0`)
// app.listen(process.env.PORT), () => {
//   console.log(`Server is running on port 2121, you better catch it!`)
// }


