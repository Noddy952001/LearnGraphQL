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

    //get all students
    getAllStudents: async () => {
      return await Student.find();
    },

  },

  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Mutation ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  Mutation: {
    //create User
    createUser: async (parent, args) => {
      
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

    updateUser: async (_, args) => {

      const filter = { _id: args.UserUpdateInput.id }
      const update = {
        fName: args.UserUpdateInput.fName,
        lName: args.UserUpdateInput.lName,
      }
      return await User.findOneAndUpdate(filter, update, { new: true })
  },


  }
};

module.exports = { resolvers };
