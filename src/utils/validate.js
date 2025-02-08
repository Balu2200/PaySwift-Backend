
const validate = (req) =>{

    const{firstName, lastName, email, password}= req.body
    if (firstName === "" || lastName === "") {
      throw new Error("Name is not valid");
    } else if (!validator.isEmail(email)) {
      throw new Error("Enter the correct email");
    } else if (!validator.isStrongPassword(password)) {
      throw new Error("Please enter strong password");
    }
    return { firstName, lastName, email, password };
}

module.exports = {validate};