describe('Id Parameter', function() {
  var parameters;
  beforeEach(function() {
    parameters = new gw2Api.params.IdParams();
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
    expect(parameters.hasOwnProperty('token')).toBe(true);
    expect(parameters.hasOwnProperty('page')).toBe(true);
    expect(parameters.hasOwnProperty('pageSize')).toBe(true);
    expect(parameters.hasOwnProperty('id')).toBe(true);
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

  it('should be able to set id to a string', function() {
    var id = '1';
    parameters.id = id;
    expect(parameters.id).toBe(id);
  });
  it('should be able to set id to a number', function() {
    var id = 1;
    parameters.id = id;
    expect(parameters.id).toBe(id);
  });
  it('should set id to null when set to empty value', function() {
    parameters.id = '';
    expect(parameters.id).toBe(null);

    parameters.id = null;
    expect(parameters.id).toBe(null);

    parameters.id = undefined;
    expect(parameters.id).toBe(null);
  });

  it('should throw id set to non string or number', function() {
    expect(function(){act(this, set, [[]]);}).toThrow('value must be a number or string');
    expect(function(){act(this, set, [function(){}]);}).toThrow('value must be a number or string');

    function set(value){
      parameters.id = value;
    }
  });
  it('should return a formatted query string', function() {
    parameters.page = 1;
    parameters.id = 2;
    expect(parameters.getQueryString()).toBe('page=1&id=2');
  });
});
