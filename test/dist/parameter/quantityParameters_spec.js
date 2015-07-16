describe('Quantity Parameter', function() {
  var parameters;
  beforeEach(function() {
    parameters = new gw2Api.params.QuantityParams();
  });
  function act(thisArg, func, args){
    try{
      func.apply(thisArg, args);
    } catch(e)
    {
      throw e.message;
    }
  }
  it('should be able to enumerate its parameter properties', function(){
    var prop;
    expect(parameters.hasOwnProperty('lang')).toBe(true);
    expect(parameters.hasOwnProperty('page')).toBe(true);
    expect(parameters.hasOwnProperty('pageSize')).toBe(true);
    expect(parameters.hasOwnProperty('quantity')).toBe(true);
  });
  it('should throw when page and page size set to non numbers', function() {
    expect(function(){act(this, set, ['a']);}).toThrow('value must be a number');
    expect(function(){act(this, setSize, ['a']);}).toThrow('value must be a number');
    function set(value){
      parameters.page = value;
    }
    function setSize(value){
      parameters.pageSize = value;
    }
  });

  it('should be able to set quantity to a string', function() {
    var quantity = '1';
    parameters.quantity = quantity;
    expect(parameters.quantity).toBe(quantity);
  });
  it('should be able to set quantity to a number', function() {
    var quantity = 1;
    parameters.quantity = quantity;
    expect(parameters.quantity).toBe(quantity);
  });
  it('should set quantity to null when set to empty value', function() {
    parameters.quantity = '';
    expect(parameters.quantity).toBe(null);

    parameters.quantity = null;
    expect(parameters.quantity).toBe(null);

    parameters.quantity = undefined;
    expect(parameters.quantity).toBe(null);
  });

  it('should throw id set to non string or number', function() {
     expect(function(){act(this, set, [[]]);}).toThrow('value must be a number');
    expect(function(){act(this, set, [function(){}]);}).toThrow('value must be a number');

    function set(value){
      parameters.quantity = value;
    }
  });
  it('should return a formatted query string', function() {
    parameters.page = 1;
    parameters.quantity = 2;
    expect(parameters.getQueryString()).toBe('page=1&quantity=2');
  });
});
