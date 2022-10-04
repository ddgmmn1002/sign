import Post from "../model/post";

export const home = (req, res) => {
    res.render("home",{
        User: "이동민"
    })
}

export const getPosting = (req, res) => {
    res.render("post");
}

export const postPosting = async (req, res) => {
    const {title, body} = req.body;
    console.log(title, body)
    await Post.create({
        title: title,
        body: body
    })
    res.redirect("/read");
}

export const readPosting = async(req, res) => {
    try{
        const poster = await Post.find({})
        return res.render("allpost", { poster: poster });
    }catch(error){
        console.log("error");
    }
}

export const readOnePosting = async (req, res) => {
    try{
        const { id } = req.params;
        const one = await Post.findOne({_id:id})
        return res.render("onePost", {one: one})
    }catch(error){
        console.log("error");
    }
}

export const deletePosting = async (req, res) => {
    try{
        const {id} = req.params;
        await Post.deleteOne({_id: id})
        res.redirect("/read");
    }catch(error){
        console.log("error");
    }
}

export const getEditPosting = async (req, res) => {
    const {id} = req.params
    try{
        const one = await Post.findOne({ _id : id });
        return res.render("editPost", { one: one })
    }catch(error){
        console.log("error")
    }
}

export const postEditPosting = async(req, res) => {
    const {id} = req.params
    const {title, body} = req.body;
    try{
        await Post.findByIdAndUpdate(id, {
            title: title,
            body: body
        })
        return res.redirect("/read")
    }catch(error){
        console.log("error")
    }
}