function docalc() {
  var target = document.getElementById('target');
  // var gradient = '#005EDE, #0052C4, #ffffff';
  var gradient = '#005cde, #a5c0e5 68%, #ffffff';

  /*
   * This one line is the meat
   * of the program.
   */
  GradientMaps.applyGradientMap(target, gradient);
}

docalc();
