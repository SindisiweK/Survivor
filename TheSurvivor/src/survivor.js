function Survivor() {
    return {

        GetSurvivor: function (person, step) {
            let peopleInCircle = [];
            let index = 0;
            step--;
            for (let x = 0; x < person; x++) {
                peopleInCircle.push(x + 1);
            }
            while(peopleInCircle.length>1){
                index= index + step;
                index= index % peopleInCircle.length;
                peopleInCircle.splice(index,1);   
            }
            return peopleInCircle;
        }
    }
    function GetPeople(index,peopleInCircle){
        
    }
}