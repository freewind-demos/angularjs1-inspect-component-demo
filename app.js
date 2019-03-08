const app = angular.module('app', [])

function getIsolateScope() {
  const counter = document.getElementById('counter');
  return angular.element(counter).isolateScope()
}

app.controller('InspectController', function ($scope) {
  $scope.inspect = () => {
    const isolateScope = getIsolateScope();
    console.log(isolateScope);
  }
  $scope.callIncrease = () => {
    const isolateScope = getIsolateScope();
    isolateScope.$ctrl.increase();
  }
});

app.component('componentCounter', {
  template: `
    <div>
        <span>Number: {{ $ctrl.count }}</span>
        <button ng-click="$ctrl.increase()">+</button>
        <button ng-click="$ctrl.decrease()">-</button>
    </div>
    `,
  controller: function () {
    this.count = 5;
    this.increase = function () {
      this.count += 1
    }
    this.decrease = function () {
      this.count -= 1
    }
  }

})
