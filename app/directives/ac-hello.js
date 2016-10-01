export default ngModule => {

  if (ON_TEST) {
    require('./ac-hello.test')(ngModule);
  }

  ngModule.directive('acHello', function($log) {
    require('./ac-hello.styl');
    return {
      restrict: 'E',
      scope: {},
      template: require('./ac-hello.html'),
      controllerAs: 'vm',
      controller: function() {
        const vm = this;

        vm.greeting = 'Hello Webpack';
        $log.info('Hello,this is a demo');
      }
    };
  });
};
