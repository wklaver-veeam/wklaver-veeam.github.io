/* Harbor & Pine A/B test bucket: assigns the visitor to a homepage variant. */
(function () {
  if (document.cookie.indexOf('hp_ab_variant=') === -1) {
    var v = Math.random() < 0.5 ? 'A' : 'B';
    var d = new Date(); d.setTime(d.getTime() + 30 * 864e5);
    document.cookie = 'hp_ab_variant=' + v + ';expires=' + d.toUTCString() + ';path=/;SameSite=Lax';
  }
})();

