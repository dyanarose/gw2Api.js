describe('Endpoints', function() {

  it('should push the endpoint keys into the endpointKeys array', function(){
    var keys = gw2Api.endpointKeys;
    expect(keys).not.toBe(null);
    expect(keys).not.toBe(undefined);
    expect(keys.length > 0).toBe(true);
  });
  it('should format the build url correctly with query string', function(){
    var ep = gw2Api.endpoints.build.url,
        params = ep.getParameters();
    params.page = 0;
    expect(ep.paramType).toBe('CommonParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/build?page=0');
  });
  it('should format the account url correctly', function(){
    var ep = gw2Api.endpoints.account.url,
        params = ep.getParameters();
    params.token = 'imatoken';
    expect(ep.paramType).toBe('AuthParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/account?access_token=imatoken');
  });
  it('should format the account bank url correctly', function(){
    var ep = gw2Api.endpoints.account.bank.url,
        params = ep.getParameters();
    params.token = 'imatoken';
    expect(ep.paramType).toBe('AuthParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/account/bank?access_token=imatoken');
  });
  it('should format the account dyes url correctly', function(){
    var ep = gw2Api.endpoints.account.dyes.url,
        params = ep.getParameters();
    params.token = 'imatoken';
    expect(ep.paramType).toBe('AuthParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/account/dyes?access_token=imatoken');
  });
  it('should format the account materials url correctly', function(){
    var ep = gw2Api.endpoints.account.materials.url,
        params = ep.getParameters();
    params.token = 'imatoken';
    expect(ep.paramType).toBe('AuthParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/account/materials?access_token=imatoken');
  });
  it('should format the account skins url correctly', function(){
    var ep = gw2Api.endpoints.account.skins.url,
        params = ep.getParameters();
    params.token = 'imatoken';
    expect(ep.paramType).toBe('AuthParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/account/skins?access_token=imatoken');
  });
  it('should format the account wallet url correctly', function(){
    var ep = gw2Api.endpoints.account.wallet.url,
        params = ep.getParameters();
    params.token = 'imatoken';
    expect(ep.paramType).toBe('AuthParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/account/wallet?access_token=imatoken');
  });
  it('should format the characters url correctly', function(){
    var ep = gw2Api.endpoints.characters.url,
        params = ep.getParameters();
    params.token = 'imatoken';
    params.id = 1;
    expect(ep.paramType).toBe('IdsAuthParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/characters?id=1&access_token=imatoken');
  });
  it('should format the characters inventory url correctly', function(){
    var ep = gw2Api.endpoints.characters.inventory.url,
        params = ep.getParameters();
    params.token = 'imatoken';
    params.id = "milkwhiskers";
    expect(ep.paramType).toBe('CharacterParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/characters/milkwhiskers/inventory?access_token=imatoken');
  });
  it('should format the characters equipment url correctly', function(){
    var ep = gw2Api.endpoints.characters.equipment.url,
        params = ep.getParameters();
    params.token = 'imatoken';
    params.id = "milkwhiskers";
    expect(ep.paramType).toBe('CharacterParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/characters/milkwhiskers/equipment?access_token=imatoken');
  });
  it('should format the colors url correctly', function(){
    var ep = gw2Api.endpoints.colors.url,
        params = ep.getParameters();
    params.id = 1;
    expect(ep.paramType).toBe('IdsParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/colors?id=1');
  });

  it('should format the commerce exchange url correctly with query string', function(){
    var ep = gw2Api.endpoints.commerce.exchange.url,
        params = ep.getParameters();
    params.page = 0;
    expect(ep.paramType).toBe('CommonParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/commerce/exchange?page=0');
  });
  it('should format the commerce exchange coins url correctly with query string', function(){
    var epCoins = gw2Api.endpoints.commerce.exchange.coins.url,
        paramsCoins = epCoins.getParameters();
    paramsCoins.quantity = 45;
    paramsCoins.page = 0;
    expect(epCoins.paramType).toBe('QuantityParams');
    expect(epCoins.url(paramsCoins)).toBe('https://api.guildwars2.com/v2/commerce/exchange/coins?page=0&quantity=45');
  });
  it('should format the commerce exchange gems url correctly with query string', function(){
    var epGems = gw2Api.endpoints.commerce.exchange.gems.url,
        paramsGems = epGems.getParameters();
    paramsGems.quantity = 50;
    paramsGems.page = 0;
    expect(epGems.paramType).toBe('QuantityParams');
    expect(epGems.url(paramsGems)).toBe('https://api.guildwars2.com/v2/commerce/exchange/gems?page=0&quantity=50');
  });
  it('should format the commerce listings url correctly with query string', function(){
    var epListings = gw2Api.endpoints.commerce.listings.url,
        paramsListings = epListings.getParameters();
    paramsListings.page = 0;
    paramsListings.ids = [1,2];
    expect(epListings.paramType).toBe('IdsParams');
    expect(epListings.url(paramsListings)).toBe('https://api.guildwars2.com/v2/commerce/listings?page=0&ids=1,2');
  });
  it('should format the commerce prices url correctly with query string', function(){
    var epPrices = gw2Api.endpoints.commerce.prices.url,
        paramsPrices = epPrices.getParameters();
    paramsPrices.page = 0;
    paramsPrices.ids = [1,2];
    expect(epPrices.paramType).toBe('IdsParams');
    expect(epPrices.url(paramsPrices)).toBe('https://api.guildwars2.com/v2/commerce/prices?page=0&ids=1,2');
  });
  it('should format the commerce transactions url correctly with query string', function(){
    var ep = gw2Api.endpoints.commerce.transactions.url,
        params = ep.getParameters();
    params.page = 0;
    params.token = 'imatoken';
    expect(ep.paramType).toBe('AuthParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/commerce/transactions?page=0&access_token=imatoken');
  });
  it('should format the commerce transactions current url correctly with query string', function(){
    var ep = gw2Api.endpoints.commerce.transactions.current.url,
        params = ep.getParameters();
    params.page = 0;
    params.token = 'imatoken';
    expect(ep.paramType).toBe('AuthParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/commerce/transactions/current?page=0&access_token=imatoken');
  });
  it('should format the commerce transactions current buy url correctly with query string', function(){
    var ep = gw2Api.endpoints.commerce.transactions.current.buy.url,
        params = ep.getParameters();
    params.page = 0;
    params.token = 'imatoken';
    expect(ep.paramType).toBe('AuthParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/commerce/transactions/current/buy?page=0&access_token=imatoken');
  });
  it('should format the commerce transactions current sell url correctly with query string', function(){
    var ep = gw2Api.endpoints.commerce.transactions.current.sell.url,
        params = ep.getParameters();
    params.page = 0;
    params.token = 'imatoken';
    expect(ep.paramType).toBe('AuthParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/commerce/transactions/current/sell?page=0&access_token=imatoken');
  });
  it('should format the commerce transactions history url correctly with query string', function(){
    var ep = gw2Api.endpoints.commerce.transactions.history.url,
        params = ep.getParameters();
    params.page = 0;
    params.token = 'imatoken';
    expect(ep.paramType).toBe('AuthParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/commerce/transactions/history?page=0&access_token=imatoken');
  });
  it('should format the commerce transactions history buy url correctly with query string', function(){
    var ep = gw2Api.endpoints.commerce.transactions.history.buy.url,
        params = ep.getParameters();
    params.page = 0;
    params.token = 'imatoken';
    expect(ep.paramType).toBe('AuthParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/commerce/transactions/history/buy?page=0&access_token=imatoken');
  });
  it('should format the commerce transactions history sell url correctly with query string', function(){
    var ep = gw2Api.endpoints.commerce.transactions.history.sell.url,
        params = ep.getParameters();
    params.page = 0;
    params.token = 'imatoken';
    expect(ep.paramType).toBe('AuthParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/commerce/transactions/history/sell?page=0&access_token=imatoken');
  });

  it('should format the currencies url correctly with query string', function(){
    var ep = gw2Api.endpoints.currencies.url,
        params = ep.getParameters();
    params.ids = [0,1];
    params.page = 1;
    expect(ep.paramType).toBe('IdsParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/currencies?page=1&ids=0,1');
  });
  it('should format the continents url correctly with no query string', function(){
    var ep = gw2Api.endpoints.continents.url,
        params = ep.getParameters();

    expect(ep.paramType).toBe('IdsParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/continents');
  });
  it('should format the continents url correctly with query string', function(){
    var ep = gw2Api.endpoints.continents.url,
        params = ep.getParameters();
    params.ids = [0,1];
    params.page = 1;
    expect(ep.paramType).toBe('IdsParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/continents?page=1&ids=0,1');
  });
  it('should format the floors url correctly with no query string', function(){
    var ep = gw2Api.endpoints.floors.url,
        params = ep.getParameters();
    params.continent = 1;
    expect(ep.paramType).toBe('FloorParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/continents/1/floors');
  });
  it('should format the floors url correctly with query string', function(){
    var ep = gw2Api.endpoints.floors.url,
        params = ep.getParameters();
    params.continent = 1;
    params.ids = [0,1];
    params.page = 1;
    expect(ep.paramType).toBe('FloorParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/continents/1/floors?page=1&ids=0,1');
  });

  it('should format the regions url correctly with no query string', function(){
    var ep = gw2Api.endpoints.regions.url,
      params = ep.getParameters();
    params.continent = 1;
    params.floor = -16;

    expect(ep.paramType).toBe('RegionParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/continents/1/floors/-16/regions');
  });

  it('should format the regions url correctly with query string', function(){
    var ep = gw2Api.endpoints.regions.url,
      params = ep.getParameters();
    params.continent = 1;
    params.floor = -16;
    params.ids = [0,1];
    params.page = 1;
    expect(ep.paramType).toBe('RegionParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/continents/1/floors/-16/regions?page=1&ids=0,1');
  });
  it('should format the maps url correctly with no query string', function(){
    var ep = gw2Api.endpoints.maps.url,
      params = ep.getParameters();
    params.continent = 1;
    params.floor = -16;
    params.region = 5;
    expect(ep.paramType).toBe('MapParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/continents/1/floors/-16/regions/5/maps');
  });

  it('should format the maps url correctly with query string', function(){
    var ep = gw2Api.endpoints.maps.url,
      params = ep.getParameters();
    params.continent = 1;
    params.floor = -16;
    params.region = 5;
    params.ids = [0,1];
    params.page = 1;
    expect(ep.paramType).toBe('MapParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/continents/1/floors/-16/regions/5/maps?page=1&ids=0,1');
  });
  it('should format the pvp games url correctly with query string', function(){
    var ep = gw2Api.endpoints.pvp.games.url,
        params = ep.getParameters();
    params.page = 0;
    params.token = 'imatoken';
    expect(ep.paramType).toBe('AuthParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/pvp/games?page=0&access_token=imatoken');
  });
  it('should format the pvp stats url correctly with query string', function(){
    var ep = gw2Api.endpoints.pvp.stats.url,
        params = ep.getParameters();
    params.page = 0;
    params.token = 'imatoken';
    expect(ep.paramType).toBe('AuthParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/pvp/stats?page=0&access_token=imatoken');
  });
  it('should format the sectors url correctly with no query string', function(){
    var ep = gw2Api.endpoints.sectors.url,
      params = ep.getParameters();
    params.continent = 1;
    params.floor = -16;
    params.region = 5;
    params.map = 536;
    expect(ep.paramType).toBe('SectorParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/continents/1/floors/-16/regions/5/maps/536/sectors');
  });

  it('should format the sectors url correctly with query string', function(){
    var ep = gw2Api.endpoints.sectors.url,
      params = ep.getParameters();
    params.continent = 1;
    params.floor = -16;
    params.region = 5;
    params.map = 536;
    params.ids = [0,1];
    params.page = 1;
    expect(ep.paramType).toBe('SectorParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/continents/1/floors/-16/regions/5/maps/536/sectors?page=1&ids=0,1');
  });
  it('should format the pois url correctly with no query string', function(){
    var ep = gw2Api.endpoints.pois.url,
      params = ep.getParameters();
    params.continent = 1;
    params.floor = -16;
    params.region = 5;
    params.map = 536;
    expect(ep.paramType).toBe('PoiParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/continents/1/floors/-16/regions/5/maps/536/pois');
  });

  it('should format the pois url correctly with query string', function(){
    var ep = gw2Api.endpoints.pois.url,
      params = ep.getParameters();
    params.continent = 1;
    params.floor = -16;
    params.region = 5;
    params.map = 536;
    params.ids = [0,1];
    params.page = 1;
    expect(ep.paramType).toBe('PoiParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/continents/1/floors/-16/regions/5/maps/536/pois?page=1&ids=0,1');
  });
  it('should format the tasks url correctly with no query string', function(){
    var ep = gw2Api.endpoints.tasks.url,
      params = ep.getParameters();
    params.continent = 1;
    params.floor = -16;
    params.region = 5;
    params.map = 536;
    expect(ep.paramType).toBe('TaskParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/continents/1/floors/-16/regions/5/maps/536/tasks');
  });

  it('should format the tasks url correctly with query string', function(){
    var ep = gw2Api.endpoints.tasks.url,
     params = ep.getParameters();
    params.continent = 1;
    params.floor = -16;
    params.region = 5;
    params.map = 536;
    params.ids = [0,1];
    params.page = 0;
    expect(ep.paramType).toBe('TaskParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/continents/1/floors/-16/regions/5/maps/536/tasks?page=0&ids=0,1');
  });

  it('should format the files url correctly with no query string', function(){
    var ep = gw2Api.endpoints.files.url,
        params = ep.getParameters();
    expect(ep.paramType).toBe('IdsParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/files');
  });
  it('should format the files url correctly with "all" query string', function(){
    var ep = gw2Api.endpoints.files.url,
        params = ep.getParameters();
    params.ids = 'all';
    expect(ep.paramType).toBe('IdsParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/files?ids=all');
  });
  it('should format the files url correctly with a string id', function(){
    var ep = gw2Api.endpoints.files.url,
        params = ep.getParameters();
    params.id = 'map_complete';
    expect(ep.paramType).toBe('IdsParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/files?id=map_complete');
  });
  it('should format the items url correctly with no query string', function(){
    var ep = gw2Api.endpoints.items.url,
        params = ep.getParameters();
    expect(ep.paramType).toBe('IdsParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/items');
  });
  it('should format the items url correctly with "all" query string', function(){
    var ep = gw2Api.endpoints.items.url,
        params = ep.getParameters();
    params.ids = 'all';
    expect(ep.paramType).toBe('IdsParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/items?ids=all');
  });
  it('should format the items url correctly with an id', function(){
    var ep = gw2Api.endpoints.items.url,
        params = ep.getParameters();
    params.id = 1;
    expect(ep.paramType).toBe('IdsParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/items?id=1');
  });
  it('should format the materials url correctly with query string', function(){
    var ep = gw2Api.endpoints.materials.url,
        params = ep.getParameters();
    params.ids = 'all';
    expect(ep.paramType).toBe('IdsParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/materials?ids=all');
  });
  it('should format the quaggans url correctly with no query string', function(){
    var ep = gw2Api.endpoints.quaggans.url,
        params = ep.getParameters();

    expect(ep.paramType).toBe('IdsParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/quaggans');
  });
  it('should format the quaggans url correctly with "all" query string', function(){
    var ep = gw2Api.endpoints.quaggans.url,
        params = ep.getParameters();
    params.ids = 'all';
    expect(ep.paramType).toBe('IdsParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/quaggans?ids=all');
  });
  it('should format the quaggans url correctly with a string id', function(){
    var ep = gw2Api.endpoints.quaggans.url,
        params = ep.getParameters();
    params.id = '404';
    expect(ep.paramType).toBe('IdsParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/quaggans?id=404');
  });
  it('should format the recipes url correctly with no query string', function(){
      var ep = gw2Api.endpoints.recipes.url,
          params = ep.getParameters();

      expect(ep.paramType).toBe('IdsParams');
      expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/recipes');
    });
  it('should format the recipes url correctly with "all" query string', function(){
    var ep = gw2Api.endpoints.recipes.url,
        params = ep.getParameters();
    params.ids = 'all';
    expect(ep.paramType).toBe('IdsParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/recipes?ids=all');
  });
  it('should format the recipes url correctly with an id', function(){
    var ep = gw2Api.endpoints.recipes.url,
        params = ep.getParameters();
    params.id = 7319;
    expect(ep.paramType).toBe('IdsParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/recipes?id=7319');
  });

  it('should format the recipe search url correctly with an ouput', function(){
    var ep = gw2Api.endpoints.recipes.search.url,
        params = ep.getParameters();
    params.output = 7319;
    expect(ep.paramType).toBe('RecipeSearchParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/recipes/search?output=7319');
  });

  it('should format the recipe search url correctly with an input', function(){
    var ep = gw2Api.endpoints.recipes.search.url,
        params = ep.getParameters();
    params.input = 7319;
    expect(ep.paramType).toBe('RecipeSearchParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/recipes/search?input=7319');
  });

  it('should format the specializations url correctly with no query string', function(){
    var ep = gw2Api.endpoints.specializations.url,
        params = ep.getParameters();

    expect(ep.paramType).toBe('IdsParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/specializations');
  });
  it('should format the specializations url correctly with "all" query string', function(){
      var ep = gw2Api.endpoints.specializations.url,
          params = ep.getParameters();
      params.ids = 'all';
      expect(ep.paramType).toBe('IdsParams');
      expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/specializations?ids=all');
  });
  it('should format the specializations url correctly with an id', function(){
      var ep = gw2Api.endpoints.specializations.url,
          params = ep.getParameters();
      params.id = 7319;
      expect(ep.paramType).toBe('IdsParams');
      expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/specializations?id=7319');
  });

  it('should format the token info url correctly', function(){
    var ep = gw2Api.endpoints.tokenInfo.url,
        params = ep.getParameters();
    params.token = 'imatoken';
    expect(ep.paramType).toBe('AuthParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/tokeninfo?access_token=imatoken');
  });

  it('should format the traits url correctly with no query string', function(){
    var ep = gw2Api.endpoints.traits.url,
        params = ep.getParameters();

    expect(ep.paramType).toBe('IdsParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/traits');
  });
  it('should format the traits url correctly with "all" query string', function(){
      var ep = gw2Api.endpoints.traits.url,
          params = ep.getParameters();
      params.ids = 'all';
      expect(ep.paramType).toBe('IdsParams');
      expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/traits?ids=all');
  });
  it('should format the traits url correctly with an id', function(){
      var ep = gw2Api.endpoints.traits.url,
          params = ep.getParameters();
      params.id = 7319;
      expect(ep.paramType).toBe('IdsParams');
      expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/traits?id=7319');
  });
  it('should default to last set value wins when both input and output are set', function(){
    var ep = gw2Api.endpoints.recipes.search.url,
        params = ep.getParameters();
    params.output = 7319;
    params.input = 32;
    expect(ep.paramType).toBe('RecipeSearchParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/recipes/search?input=32');

    params.output = 45;
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/recipes/search?output=45');
  });

  it('should format the skins url correctly with no query string', function(){
    var ep = gw2Api.endpoints.skins.url,
        params = ep.getParameters();

    expect(ep.paramType).toBe('IdsParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/skins');
  });
  it('should format the skins url correctly with "all" query string', function(){
    var ep = gw2Api.endpoints.skins.url,
        params = ep.getParameters();
    params.ids = 'all';
    expect(ep.paramType).toBe('IdsParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/skins?ids=all');
  });
  it('should format the skins url correctly with an id', function(){
    var ep = gw2Api.endpoints.skins.url,
        params = ep.getParameters();
    params.id = 7319;
    expect(ep.paramType).toBe('IdsParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/skins?id=7319');
  });

  it('should format the worlds url correctly with no query string', function(){
    var ep = gw2Api.endpoints.worlds.url,
        params = ep.getParameters();

    expect(ep.paramType).toBe('IdsParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/worlds');
  });
  it('should format the worlds url correctly with "all" query string', function(){
    var ep = gw2Api.endpoints.worlds.url,
        params = ep.getParameters();
    params.ids = 'all';
    expect(ep.paramType).toBe('IdsParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/worlds?ids=all');
  });
  it('should format the worlds url correctly with an id', function(){
    var ep = gw2Api.endpoints.worlds.url,
        params = ep.getParameters();
    params.id = 7319;
    expect(ep.paramType).toBe('IdsParams');
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/worlds?id=7319');
  });
});
