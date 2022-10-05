const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Student = require("../models/student")
// const bcrypt = require("bcryptjs");

const resolvers = {
  Query: {
    //get all users
    getAllUsers: async () => {
      return await User.find();
    },

    getAllStudents: async () => {
      return await Student.find();
    },

  },

  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Mutation ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  Mutation: {
    //create User
    createUser: async (parent, args) => {
      // const userr = await User.findOne({
      //   email: args.UserInput.email,
      // });

      // if (userr) {
      //   throw new Error("This Email already Exits");
      // }
      // const hashpasswod = await bcrypt.hash(args.UserInput.password, 12);

      // let date = new Date();

      const newUser = new User({
        fName: args.UserInput.fName,
        lName: args.UserInput.lName,

      });

     

      return newUser.save()
    },

    //create StudentUser
    createStudent: async (parent, args) => {
     
      const studerUser = new Student({
        school: args.StudentInput.school,
        class: args.StudentInput.class,
      });

     

      return  studerUser.save()
    },


  }
};

module.exports = { resolvers };
