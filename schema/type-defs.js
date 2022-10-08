const { gql } = require('apollo-server');

const typeDefs = gql`

        type user {
            id:ID!
            fName: String
            lName: String      

        }
        input userInput {
            fName: String      
            lName: String      
        }

        input userUpdateInput {
            id:ID
            fName: String
            lName: String
        }


        type student {
            id:ID!
            school: String
            class: String      

        }
        input studentInput {
            school: String      
            class: String      
        }


        type Query {
            getAllUsers:[user]
            getAllStudents:[student]

        }

        type Mutation {
            createUser(UserInput:userInput):user
            updateUser(UserUpdateInput:userUpdateInput):user

            createStudent(StudentInput:studentInput):student
        }

`;

module.exports = { typeDefs }
