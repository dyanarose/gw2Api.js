(function (){
  'use strict';
  var eps = {};

  initEndpoints();

  gw2Api.endpoints = eps;

  function addEndpoint(endpoint){
    utils.splitIdentifier(endpoint.key, endpoint, eps);
  }

  function initEndpoints(){
    addEndpoint(new Endpoint('account.get', 'account', true, 'CommonParams'));
    addEndpoint(new Endpoint('account.bank.get', 'account/bank', true, 'CommonParams'));
    addEndpoint(new Endpoint('account.materials.get', 'account/materials', true, 'CommonParams'));
    addEndpoint(new Endpoint('build.get', 'build', false, 'CommonParams'));
    addEndpoint(new Endpoint('characters.get', 'characters', true, 'IdsParams'));
    addEndpoint(new Endpoint('characters.inventory.get', 'characters/{0}/inventory', true, 'CharacterParams'));
    addEndpoint(new Endpoint('characters.equipment.get', 'characters/{0}/equipment', true, 'CharacterParams'));
    addEndpoint(new Endpoint('colors.get', 'colors', false, 'IdsParams'));
    addEndpoint(new Endpoint('commerce.exchange.get', 'commerce/exchange', false, 'CommonParams'));
    addEndpoint(new Endpoint('commerce.exchange.coins.get', 'commerce/exchange/coins', false, 'QuantityParams'));
    addEndpoint(new Endpoint('commerce.exchange.gems.get', 'commerce/exchange/gems', false, 'QuantityParams'));
    addEndpoint(new Endpoint('commerce.listings.get', 'commerce/listings', false, 'IdsParams'));
    addEndpoint(new Endpoint('commerce.prices.get', 'commerce/prices', false, 'IdsParams'));
    addEndpoint(new Endpoint('commerce.transactions.get', 'commerce/transactions', true, 'CommonParams'));
    addEndpoint(new Endpoint('commerce.transactions.current.get', 'commerce/transactions/current', true, 'CommonParams'));
    addEndpoint(new Endpoint('commerce.transactions.current.buy.get', 'commerce/transactions/current/buy', true, 'CommonParams'));
    addEndpoint(new Endpoint('commerce.transactions.current.sell.get', 'commerce/transactions/current/sell', true, 'CommonParams'));
    addEndpoint(new Endpoint('commerce.transactions.history.get', 'commerce/transactions/history', true, 'CommonParams'));
    addEndpoint(new Endpoint('commerce.transactions.history.buy.get', 'commerce/transactions/history/buy', true, 'CommonParams'));
    addEndpoint(new Endpoint('commerce.transactions.history.sell.get', 'commerce/transactions/history/sell', true, 'CommonParams'));
    addEndpoint(new Endpoint('continents.get', 'continents', false, 'IdsParams'));
    addEndpoint(new Endpoint('floors.get', 'continents/{0}/floors', false, 'FloorParams'));
    addEndpoint(new Endpoint('regions.get', 'continents/{0}/floors/{1}/regions', false, 'RegionParams'));
    addEndpoint(new Endpoint('maps.get', 'continents/{0}/floors/{1}/regions/{2}/maps', false, 'MapParams'));
    addEndpoint(new Endpoint('sectors.get', 'continents/{0}/floors/{1}/regions/{2}/maps/{3}/sectors', false, 'SectorParams'));
    addEndpoint(new Endpoint('pois.get', 'continents/{0}/floors/{1}/regions/{2}/maps/{3}/pois', false, 'PoiParams'));
    addEndpoint(new Endpoint('tasks.get', 'continents/{0}/floors/{1}/regions/{2}/maps/{3}/tasks', false, 'TaskParams'));
    addEndpoint(new Endpoint('files.get', 'files', false, 'IdsParams'));
    addEndpoint(new Endpoint('items.get', 'items', false, 'IdsParams'));
    addEndpoint(new Endpoint('materials.get', 'materials', false, 'IdsParams'));
    addEndpoint(new Endpoint('quaggans.get', 'quaggans', false, 'IdsParams'));
    addEndpoint(new Endpoint('recipes.get', 'recipes', false, 'IdsParams'));
    addEndpoint(new Endpoint('recipes.search.get', 'recipes/search', false, 'RecipeSearchParams'));
    addEndpoint(new Endpoint('skins.get', 'skins', false, 'IdsParams'));
    addEndpoint(new Endpoint('tokenInfo.get', 'tokeninfo', true, 'CommonParams'));
    addEndpoint(new Endpoint('worlds.get', 'worlds', false, 'IdsParams'));
  }
}());
