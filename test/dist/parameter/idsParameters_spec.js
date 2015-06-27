describe('Ids Parameter', function() {
  var parameters;
  beforeEach(function() {
    parameters = new gw2Api.params.IdsParams();
  });

  function act(thisArg, func, args){
    try{
      func.apply(thisArg, args);
    } catch(e)
    {
      throw e.message;
    }
  }
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

  it('should be able to set ids to an array', function() {
    var ids = [1];
    parameters.ids = ids;
    expect(parameters.ids).toBe(ids);
  });
  it('should be able to set ids to null', function() {
      parameters.ids = null;
      expect(parameters.ids).toBe(null);

      parameters.ids = undefined;
      expect(parameters.ids).toBe(null);
  });

  it('should throw ids set to non string or number', function() {
    expect(function(){act(this, set, [function(){}]);}).toThrow('value must be an array, number, string or "all"');

    function set(value){
      parameters.ids = value;
    }
  });
  it('should return a formatted query string', function() {
    parameters.page = 1;
    parameters.ids = [2, 3];
    expect(parameters.getQueryString()).toBe('page=1&ids=2,3');
  });
});
