<<<<<<< HEAD
"# wklaver23.github.io" 
=======
# Harbor & Pine starter site

The practice website for the Data Privacy cohort. You deploy your own copy to **GitHub Pages** (free, public, HTTPS), and every Securiti lab in Sessions 1–3 runs against it.

> **Fictional site.** Never enter real personal data. Use plus-addressed test emails only (`you+anything@veeam.com`).

---

## What's in here

| File | Purpose | Used in |
|---|---|---|
| `index.html`, `about.html`, `contact.html`, `privacy.html` | Four pages so the scanner has something to crawl | S1–S3 |
| `assets/js/analytics.js` | Stand-in analytics tag. Sets `hp_analytics_id`, `hp_last_page` and localStorage `hp_session_start` | S1–S2 |
| `assets/js/marketing-pixel.js` | Stand-in ad pixel. Sets `hp_ad_click` | S1–S2 |
| Inline script at the bottom of `index.html` | A/B test bucket. Sets `hp_ab_variant` | S2 fault |
| `assets/js/chat-widget.js` | Sets `hp_chat_session` **only after a click** | S1 fault |
| YouTube iframe on `index.html` | Third-party cookies | S2 discussion |
| `contact.html` newsletter form | Becomes a Form-Based Consent endpoint | S3 |
| `privacy.html` iframe placeholder | Where the published privacy notice goes | S2 |
| `SECURITI-*` comment markers | Where you paste Securiti code | S2–S3 |
| `sitemap.xml` | Optional, for Sitemap Scanning | S1 |

**Some of this site is broken on purpose.** Don't "fix" anything before the lab tells you to. The break-fix exercises depend on it.

---

## Deploy to GitHub Pages (about 10 minutes)

### Use a *user site*, not a project site

Create a repository named **exactly** `<your-github-username>.github.io`. That publishes the site at the root of `https://<username>.github.io/`.

Don't use a project site (`https://<username>.github.io/<repo>/`). Securiti's docs don't say whether the cookie scanner handles a site that lives under a subpath, so we avoid the question entirely.

### Steps

1. Sign in to GitHub. Create a free account with your personal email if you don't have one.
2. **New repository** → name: `<username>.github.io` → **Public** → **Create repository**.
3. **Add file → Upload files** → drag in the *contents* of this `starter-site` folder, including the `assets` folder and the hidden `.nojekyll` file → **Commit changes**.
   - On macOS, press `Cmd+Shift+.` in Finder to show hidden files so you can see `.nojekyll`.
4. **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main` / `(root)` → **Save**.
5. Wait 1–3 minutes, then open `https://<username>.github.io/`. You should see the Harbor & Pine homepage.
6. In Chrome, open DevTools → **Application → Cookies** → your site. You should see `hp_analytics_id`, `hp_last_page`, `hp_ab_variant` and `hp_ad_click`. If you do, the site is working.

### Editing later

For the labs you'll edit HTML directly in GitHub: open the file → pencil icon → edit → **Commit changes**.

**Every commit takes 1–10 minutes to go live, and browsers cache the old version.** After a commit:

1. Open the repository's **Actions** tab and wait for the "pages build and deployment" run to finish (green check).
2. Hard-reload the page (`Cmd+Shift+R`), or test in an Incognito window.

Most "my change didn't work" problems in this cohort are this delay.

---

## Why not run the site locally with ngrok?

You could, and it's worth understanding why we don't:

1. **ngrok's free tier puts an interstitial warning page in front of browser traffic.** Securiti's cloud scanner receives the warning page, not your site, and reports few or no cookies. The only way past the page is a request header the scanner doesn't send.
2. **The tunnel dies when your laptop sleeps.** A scan that's still running when that happens fails.
3. **Corporate endpoint security often flags tunneling tools.** Check with IT before you install one.
4. **Securiti's scanner must be able to reach the site from the public internet.** Docs say the domain must be "valid and reachable". There's no private-network scan path for Cookie Consent.

Cloudflare's quick tunnels (`trycloudflare.com`) don't show the interstitial, but they give you a new random URL every time you start one. Your Securiti domain, banner code and consent endpoint are all tied to the URL, so each restart means setting them up again.

**Optional instructor demo:** in Session 1, scan an ngrok URL live and show what comes back. It's a good lesson in reading scan results critically.

---

## Don't enable "Use top-level domain to track consent status"

`github.io` is on the Public Suffix List, so browsers won't let any site set cookies on `github.io` itself. Your consent cookies stay on `<username>.github.io`, which is the behavior you want. Leave that banner toggle **off**.
>>>>>>> upstream/main
