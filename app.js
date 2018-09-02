const app = angular.module('app', [])
app.controller('MyController', function ($scope) {
    $scope.count = 5
})

app.component('componentCounter', {
    template: `
    <div>
        <span>Number: {{ $ctrl.count }}</span>
        <button ng-click="$ctrl.increase()">+</button>
        <button ng-click="$ctrl.decrease()">-</button>
    </div>
    `,
    bindings: {
        count: '='
    },
    controller: function () {
        this.increase = function () {
            this.count += 1
        }
        this.decrease = function () {
            this.count -= 1
        }
    }

})

app.directive('directiveCounter', function () {
    return {
        restrict: 'E',
        template: `
         <div>
             <span>Number: {{ $ctrl.count }}</span>
             <button ng-click="$ctrl.increase()">+</button>
             <button ng-click="$ctrl.decrease()">-</button>
         </div>
         `,
        scope: {},
        bindToController: {
            count: '='
        },
        controller: function () {
            this.increase = function () {
                this.count += 1
            }
            this.decrease = function () {
                this.count -= 1
            }
        },
        controllerAs: '$ctrl'
    }
})