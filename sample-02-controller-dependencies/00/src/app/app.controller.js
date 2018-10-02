angular.module('sampleApp').controller('appController', ['cacheService', function (cacheService) {
    this.cacheData = cacheService.getEverything();
}]);