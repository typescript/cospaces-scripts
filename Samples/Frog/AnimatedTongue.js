define(['../../helpers/animation/animation'], function (animation) {
  var DURATION = 0.1;

  var AnimatedTongue = function (item) {
    this.item = item;
    this.size = item.getSize();
    this.animator = new animation.Animator(false);
  };

  AnimatedTongue.prototype.update = function () {
    this.animator.update();
  };

  AnimatedTongue.prototype.out = function () {
    var that = this;
    const range = 2;
    this.animator.addAnimation(new animation.Animation("Out", DURATION, (function () {
      return function (anim) {
        var p = anim.getProgress();
        that.item.setSize(that.size[0], that.size[1], that.size[2] + range * p);
      };
    })()));
  };

  AnimatedTongue.prototype.in = function () {
    var that = this;
    const range = 2;
    this.animator.addAnimation(new animation.Animation("In", DURATION, (function () {
      return function (anim) {
        var p = anim.getProgress();
        that.item.setSize(that.size[0], that.size[1], that.size[2] + range * (1 - p));
      };
    })()));
  };

  AnimatedTongue.prototype.toggle = function () {
    this.out();
    this.in();
  };

  return AnimatedTongue;
});