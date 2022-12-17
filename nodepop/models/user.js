class users{
    constructor(id, name, mail){
        this.id = id;
        this.name = name;
        this.mail = mail;
    };

    getUserInfo(){
        return {name: this.name, id: this.id};
    };

};

module.exports = users;