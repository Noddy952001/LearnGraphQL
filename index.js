const {ApolloServer} = require("apollo-server")
const mongoose = require('mongoose')
const {typeDefs} = require('./schema/type-defs')
const {resolvers} = require('./schema/resolvers')
const server = new ApolloServer({typeDefs, resolvers});
// var cron = require('node-cron');



mongoose.connect(`
        mongodb+srv://vikas:vikas_123@cluster0.aflw8.mongodb.net/GraphQL?retryWrites=true&w=majority
    `, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    server.listen({ port: process.env.PORT || 4000 }).then(({url})=> {
        console.log(`Server is running: ${url}`)
    })
}).catch(err => {
    console.log(err);
});

