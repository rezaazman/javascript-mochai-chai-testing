var expect = require('chai').expect;


function checkString(input){
	return input;
}


describe('kali', function() {
	var input = "kalimat."

	it('Should return type of string', function(){
		expect(checkString(input)).to.be.a('string');
	});

	it('Should return length of input', function(){
		expect(checkString(input)).to.have.lengthOf(input.length);
	});

});