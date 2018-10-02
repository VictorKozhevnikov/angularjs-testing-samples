angular.module('sampleApp').component('cacheContents', {
    template: `
        <h2>Cache contents:</h2>

        <div ng-repeat="(key, value) in $ctrl.cacheData">
            <span ng-bind="key"></span>
            <span ng-bind="value"></span>
        </div>
    `,
    controller: ['cacheService', function(cacheService) {
        this.cacheData = cacheService.getEverything();
    }]
});
