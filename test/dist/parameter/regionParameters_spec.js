describe('Region Parameter', function() {
  var parameters;
  beforeEach(function() {
    parameters = new gw2Api.params.RegionParams();
  });
  it('should be able to enumerate its parameter properties', function(){
    var prop;
    expect(parameters.hasOwnProperty('lang')).toBe(true);
    expect(parameters.hasOwnProperty('token')).toBe(true);
    expect(parameters.hasOwnProperty('page')).toBe(true);
    expect(parameters.hasOwnProperty('pageSize')).toBe(true);
    expect(parameters.hasOwnProperty('id')).toBe(true);
    expect(parameters.hasOwnProperty('ids')).toBe(true);
    expect(parameters.hasOwnProperty('continent')).toBe(true);
    expect(parameters.hasOwnProperty('floor')).toBe(true);
  });
});
