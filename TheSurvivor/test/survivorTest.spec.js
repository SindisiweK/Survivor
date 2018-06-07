describe("Survivor", function(){
    describe("Getsurvivor", function(){
        describe("Given that the circle has 1 person and step is 0", function(){
            it("Should return 1 survior", function(){
                //Arrange
                let sut = new Survivor();
                let person=1;
                let step=1;
                //Act
                let actual=sut.GetSurvivor(person,step);
                //Assert
                expect(actual).toEqual([1]);
            })
        })

         describe("Given that the circle has 2 people and step is 1", function(){
            it("Should return 1 survior", function(){
                //Arrange
                let sut = new Survivor();
                let person = 2;
                let step = 1;
                //Act
                let actual=sut.GetSurvivor(person,step);
                //Assert
                expect(actual).toEqual([2]);
            })
        })

        describe("Given that the circle has 4 people and step is 2", function(){
            it("Should return 1 survior", function(){
                //Arrange
                let sut = new Survivor();
                let person = 4;
                let step = 2;
                //Act
                let actual=sut.GetSurvivor(person,step);
                //Assert
                expect(actual).toEqual([1]);
            })
        })
        describe("Given that the circle has 4 people and step is 2", function(){
            it("Should return 1 survior", function(){
                //Arrange
                let sut = new Survivor();
                let person = 5;
                let step = 3;
                //Act
                let actual=sut.GetSurvivor(person,step);
                //Assert
                expect(actual).toEqual([4]);
            })
        })

        describe("Given that the circle has 4 people and step is 2", function(){
            it("Should return 1 survior", function(){
                //Arrange
                let sut = new Survivor();
                let person = 6;
                let step = 2;
                //Act
                let actual=sut.GetSurvivor(person,step);
                //Assert
                expect(actual).toEqual([5]);
            })
        })


        describe("Given that the circle has 7 people and step is 3", function(){
          
            it("Should return 1 survior", function(){
                //Arrange
                let sut = new Survivor();
                let person=7;
                let step=3;
                //Act
                let actual=sut.GetSurvivor(person,step);
                //Assert
                expect(actual).toEqual([4]);
            })
        })
    })
})