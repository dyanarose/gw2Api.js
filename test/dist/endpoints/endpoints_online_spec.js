describe('Endpoints', function() {

  beforeEach(function(done) {
    setTimeout(function() {
      done();
    }, 1);
  });

    function act(thisArg, func, args){
     try{
       func.apply(thisArg, args);
     } catch(e)
     {
      throw e.message;
     }
    }
  it('should retrieve data from a non protected resource', function(done){
    var ep = gw2Api.endpoints.quaggans.url,
        params = ep.getParameters();
    ep.get(params).then(function(response){
      expect(response).not.toBe(undefined);
      expect(response).not.toBe(null);
      expect(response.data).not.toBe(undefined);
      expect(response.data).not.toBe(null);
      expect(Array.isArray(response.data)).toBe(true);
      done();
    }).fail(function(){
      throw new Error('should retrieve data from a non protected resource failed');
    }).catch(function(e){
      expect(e).toBe(null);
      done();
    });

  });

  it('should fail if a protected resource is accessed without credentials', function(done){
    var ep = gw2Api.endpoints.account.url,
        params = ep.getParameters();
    expect(function(){act(ep, ep.get, [params]);}).toThrow('token must be set on params when calling an authenticated endpoint');
    done();
  });

  it('should return the correct X-* headers', function(done){
    var ep = gw2Api.endpoints.recipes.url;
    var params = ep.getParameters();
    params.page = 0;
    ep.get(params).then(function(response){
      expect(response.rawHeaders).not.toBe(null);
      expect(response.rawHeaders['x-page-size']).toBe('50');
      expect(response.rawHeaders['x-page-total']).not.toBe(null);
      expect(response.rawHeaders['x-result-count']).not.toBe(null);
      expect(response.rawHeaders['x-result-total']).not.toBe(null);
      expect(response.headers).not.toBe(null);
      expect(response.headers.pageSize).toBe('50');
      expect(response.headers.pageTotal).not.toBe(null);
      expect(response.headers.resultCount).not.toBe(null);
      expect(response.headers.resultTotal).not.toBe(null);
      done();
      return response;
    }).fail(function(response){
      throw new Error(response);
    }).catch(function(e){
      expect(e).toBe(null);
      done();
    });
  });
});
