let person = function(firstname,lastname){
    this.firstname = firstname;
    this.lastname = lastname;
    this.fullname = function(){
        return firstname + " " + lastname;
    };
}

module.exports = person;
