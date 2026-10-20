/* Harbor & Pine "marketing pixel": a stand-in for an ad/retargeting tag.
 * Students categorize this cookie as Advertising. Under an Opt-in banner it
 * must NOT fire until the visitor grants Advertising consent.
 */
(function () {
  var d = new Date();
  d.setTime(d.getTime() + 90 * 864e5);
  document.cookie = 'hp_ad_click=' + Date.now() + ';expires=' + d.toUTCString() + ';path=/;SameSite=Lax';
  if (window.console) { console.log('[hp-pixel] fired'); }
})();
