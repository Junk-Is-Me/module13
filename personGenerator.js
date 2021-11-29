const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Елизавета",
            "id_3": "Мария",
            "id_4": "Виктория",
            "id_5": "Дарья",
            "id_6": "Софья",
            "id_7": "Анна",
            "id_8": "Анастасия",
            "id_9": "Валерия",
            "id_10": "Евгения"
        }
    }`,
    
    middleNameJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Артемович",
            "id_5": "Дмитриевич",
            "id_6": "Никитович",
            "id_7": "Андреевич",
            "id_8": "Валерьевич",
            "id_9": "Егорович",
            "id_10": "Сергеевич"
        }
    }`,

   professionMaleJson: `{
        "count": 15,
        "list": {     
            "id_1": "Врач",
            "id_2": "Оффициант",
            "id_3": "Повар",
            "id_4": "Программист",
            "id_5": "Бармен",
            "id_6": "Бухгалтер",
            "id_7": "Солдат",
            "id_8": "Шахтер",
            "id_9": "Слесарь",
            "id_10": "Менеджер",
            "id_11": "Водитель",
            "id_12": "Сварщик",
            "id_13": "Дизайнер",
            "id_14": "Архитектор",
            "id_15": "Строитель"
        }
    }`,
    professionFemaleJson: `{
        "count": 15,
        "list": {     
            "id_1": "Врач",
            "id_2": "Оффициант",
            "id_3": "Повар",
            "id_4": "Программист",
            "id_5": "Бармен",
            "id_6": "Бухгалтер",
            "id_7": "Стюардесса",
            "id_8": "Веб-камщица",
            "id_9": "Певица",
            "id_10": "Швея",
            "id_11": "Актриса",
            "id_12": "Няня",
            "id_13": "Дизайнер",
            "id_14": "Архитектор",
            "id_15": "HR"
        }
    }`,

    birthmonthJson: `{
        "count": 12,
        "list": {     
            "id_1": "Января",
            "id_2": "Февраля",
            "id_3": "Марта",
            "id_4": "Апреля",
            "id_5": "Мая",
            "id_6": "Июня",
            "id_7": "Июля",
            "id_8": "Августа",
            "id_9": "Сентября",
            "id_10": "Октября",
            "id_11": "Ноября",
            "id_12": "Декабря"
          
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function(){
        return this.randomIntNumber(1, 0) === 0 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },


    randomFirstName: function() {

        if(this.person.gender =="Мужчина"){

        return this.randomValue(this.firstNameMaleJson);
        }
        else{
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

     randomSurname: function() {

        if(this.person.gender =="Мужчина"){

        return this.randomValue(this.surnameJson);
        }
        else {
            return this.randomValue(this.surnameJson) + 'a';
        }

    },

    randomMiddleName: function() {

        if(this.person.gender =="Мужчина"){

        return this.randomValue(this.middleNameJson);
        }
        else{
            return this.randomValue(this.middleNameJson).slice(0, -2) + "на";
        }
    },

    
    randomProfession: function() {
        if (this.person.gender =="Мужчина"){
            return this.randomValue(this.professionMaleJson);
    
        }
        else {
            return this.randomValue(this.professionFemaleJson);
        }
    
    },


    randombirthYear: function(){

        return this.randomIntNumber(2005, 1970);
    },

    randombirthDay: function(){

        return this.randomIntNumber(1, 31);
    },

    randombirthMonth: function(){
        
        if(this.person.birthMonth =="Февраль"){
            this.person.birthDay > 28
            
        } else if(this.person.birthMonth =="Сентябрь") {
            this.person.birthDay > 31
        }
        else if(this.person.birthMonth =="Июнь") {
            this.person.birthDay > 31
        }
        else if(this.person.birthMonth =="Ноябрь") {
            this.person.birthDay > 31
        }
        else if (this.person.birthMonth =="Апрель") {
            this.person.birthDay > 31
        }
        return this.randomValue(this.birthmonthJson);
    },
    
    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurname();
        this.person.birthYear = this.randombirthYear();
        this.person.middleName = this.randomMiddleName();
        this.person.profession = this.randomProfession();
        this.person.birthMonth = this.randombirthMonth();
        this.person.birthDay = this.randombirthDay();
        return this.person;
    }
};
