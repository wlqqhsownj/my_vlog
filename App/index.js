const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;
const config = require("./server/config/key.js");

app.use(express.static(path.join(__dirname, "./client/build")));
// app.use("/image", express.static("./image"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/post", require(".//serverRouter/post.js"));
app.use("/api/user", require(".//serverRouter/user.js"));
app.use("/api/reple", require(".//serverRouter/reple.js"));

app.listen(port, () => {
    mongoose
        .connect("mongodb+srv://lucy020610:yeji020610@cluster0.bleqqom.mongodb.net/Board?retryWrites=true&w=majority")
        .then(() => {
            console.log(`Example app listening at http://localhost:${port}`);
            console.log("Connecting MongoDB...");
        })
        .catch((err) => {
            console.log(`${err}`);
        });
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.use((req, res) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:5000");
});

// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const path = require("path");
// const port = 5000;

// //mongodb+srv://newmind68:<sksk2739>@cluster0.aysns8l.mongodb.net/?retryWrites=true&w=majority
// app.use(express.static(path.join(__dirname, "../client/build")));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// const { Post } = require("./Model/Post.js");
// const { Counter } = require("./Model/Counter.js");

// app.listen(port, () => {
//     mongoose
//         .connect("mongodb+srv://newmind68:sksk2739@cluster0.aysns8l.mongodb.net/Board?retryWrites=true&w=majority")
//         .then(() => {
//             console.log(`Example app listening on port ${port}`);
//             console.log("Connecting MongoDB...");
//         })
//         .catch((err) => {
//             console.log(`${err}`);
//         });
// });

// app.get("/", (req, rep) => {
//     rep.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// app.get("*", (req, rep) => {
//     rep.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// app.post("/api/post/submit", (req, rep) => {
//     let temp = req.body;
//     console.log(temp);
//     const CommunityPost = new Post(temp);
//     CommunityPost.save()
//         .then(() => {
//             rep.status(200).json({ sucess: true });
//         })
//         .catch((err) => {
//             rep.status(400).json({ sucess: false });
//         });
// });

// app.post("/api/post/list", (req, rep) => {
//     Post.find()
//         .exec()
//         .then((doc) => {
//             rep.status(200).json({ sucess: true, postList: doc });
//         })
//         .catch((err) => {
//             rep.status(400).json({ sucess: false });
//         });
// });
