describe('Utils', function() {
  it('should create an object based on a string in dot notation', function(){
    var eps = {}, ep = {text:'hi'};
    utils.splitIdentifier('one.two', ep, eps);
    
    expect(eps.one.two.text).toBe('hi');
  });
});
