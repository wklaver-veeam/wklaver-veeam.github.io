/* Harbor & Pine "analytics": a stand-in for a real analytics tag.
 * Sets first-party cookies and a localStorage item on every page load.
 * Securiti's scanner should find these; students categorize them as Analytics.
 */
(function () {
  function setCookie(name, value, days) {
    var d = new Date();
    d.setTime(d.getTime() + days * 864e5);
    document.cookie = name + '=' + value + ';expires=' + d.toUTCString() + ';path=/;SameSite=Lax';
  }
  if (document.cookie.indexOf('hp_analytics_id=') === -1) {
    setCookie('hp_analytics_id', Math.random().toString(36).slice(2, 12), 365);
  }
  setCookie('hp_last_page', encodeURIComponent(location.pathname), 1);
  try { localStorage.setItem('hp_session_start', String(Date.now())); } catch (e) { /* storage blocked */ }
  if (window.console) { console.log('[hp-analytics] fired on', location.pathname); }
})();
