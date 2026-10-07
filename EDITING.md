# Updating hifihopes.com

All listings, prices, buy buttons and contact details live in **`site-data.js`**.
You shouldn't need to touch `index.html`.

You can edit everything on github.com. No software to install.

---

## Edit a file on GitHub

1. Go to github.com/Hi-Fi-Hopes/Hifihopes
2. Click `site-data.js`
3. Click the pencil icon (top right of the file)
4. Make the change
5. Click **Commit changes**, then **Commit changes** again
6. Wait about 1 minute, then refresh hifihopes.com

**Rules that break the site if you skip them:**
- Text goes inside double quotes: `"like this"`
- Every line in a list ends with a comma, except the last one
- Prices are plain numbers with no quotes and no $: `1150`, not `"$1,150"`

If the page goes blank after an edit, you broke one of those three rules.
Open the file's **History**, look at your last change, and fix the quote or comma.

---

## Move a receiver from "On the bench" to "For sale"

In `site-data.js`, find the unit and change:

```js
status: "for-sale",
price: 1150,
```

Then fill in `service` with the service sheet, one line per item:

```js
service: [
  "Bias set to spec, both channels",
  "DC offset under 10mV, both channels",
  "Main filter caps: Nichicon 80V 10,000µF, replaced",
  "Dial and meter lamps: warm-white LED",
  "All switches and pots cleaned with DeoxIT D5"
]
```

Use your real numbers. The service sheet is what makes your units worth more than an eBay flip.

## Mark something sold

Change `status: "sold"` and update `summary` to one line about it.
It moves to Past Work automatically.

**If the unit is also listed on eBay, FB or US Audio Mart, pull those listings the same day.**

## Add a new receiver

Copy a whole block from `{` to `},` and paste it below. Change the `id`
(lowercase, dashes, no spaces, like `"pioneer-sx-1250"`) and the details.

---

## Photos

1. On the repo's main page, click into the `images` folder
2. **Add file → Upload files**, then drag your photos in
3. Name them simply, like `sansui-7070.jpg` (lowercase, no spaces)
4. In `site-data.js`, list them in the unit's `photos`. The first one is the main picture:
   ```js
   photos: [
     "images/sansui-7070-front.jpg",
     "images/sansui-7070-inside.jpg"
   ],
   ```
   Tapping the picture on the site opens all of them as a gallery.

Tips:
- Shoot from the front, at faceplate height, with the dial lamps on
- Resize to about 1600px wide before uploading (phone photos are huge and slow the site)
- Phone photos can carry your GPS location. Resizing with most apps strips it; or send them to Claude to prep
- Until a unit has a photo, the site shows a brushed-aluminum nameplate instead

For the About section, upload a bench photo and set `aboutPhoto: "images/bench.jpg"`.

---

## Taking payments with Stripe Payment Links

No monthly fee. Stripe takes about 2.9% + 30¢ per card payment
(check stripe.com/pricing for the current rate).

### One-time setup
1. Sign up at stripe.com using the LLC's details and EIN
2. Connect your business bank account
3. **Settings → Tax**: turn on Stripe Tax if you want Stripe to calculate Ohio sales tax automatically (it charges a small extra fee per transaction), or plan to handle it yourself

### Make a buy link for a receiver
1. Stripe Dashboard → **Payment Links → + New**
2. Add a product: name it ("Sansui 7070, fully serviced"), set the price
3. Turn on **Collect customers' addresses** (shipping)
4. Under **Advanced**, set quantity limits so only 1 can be bought
5. Create the link, copy it
6. Paste it into the unit's `buyLink: "https://buy.stripe.com/..."`

**After a unit sells, deactivate its Payment Link in Stripe.** Otherwise a second person can still pay for it.

### Deposit link (recommended for receivers)
Same steps, but the product is "Deposit: Sansui 7070" for $100 (or whatever you choose).
Paste into `depositLink` and set `deposit: 100`. The button reads "Reserve · $100 deposit".

Deposit-then-balance is safer for heavy, one-of-a-kind items. You can quote freight
before taking the full payment, and local buyers can pay the rest at pickup.

### Parts
Make one Payment Link per part (or per voltage), and paste it into that part's `buyLink`.
For parts, you can let buyers choose a quantity in the Payment Link settings.

---

## Contact settings

At the top of `site-data.js`:

- `phone`: your Google Voice number, like `"(419) 555-0123"`
- `reviewsUrl`: In Google Maps, find your business, tap **Share**, copy the link
- `marketplaces`: paste your store or profile links to make the names clickable

## Email addresses

Set in `emails` at the top of `site-data.js`:
- `service`: repair request form, repair questions
- `sales`: buy/ask buttons, first-call lists, parts, recap kits
- `hello`: everything else (shown in Contact)

## Forms (send straight to your inbox)

Without setup, the repair and recap kit forms open the customer's own email app.
To have them send directly to you instead, use Web3Forms (free up to 250 messages a month):

1. Go to web3forms.com
2. Enter **service@hifihopes.com** and click **Create Access Key**
3. Open the email Web3Forms sends to service@ and copy the access key
4. Repeat steps 2–3 with **sales@hifihopes.com**
5. In `site-data.js`, paste the keys into `formKeys`:
   ```js
   formKeys: {
     service: "paste-the-service-key-here",
     sales:   "paste-the-sales-key-here"
   },
   ```
6. Commit, wait a minute, then send yourself a test from each form

The keys are visible in the page source. That's normal for Web3Forms: a key can only send to the address it was created for.

The free plan doesn't take file uploads, so the repair form asks people to text photos to your shop number.

## Policies

Fill in **Warranty** and **Returns** before taking online payments.
A policy with empty text `""` is hidden on the site.

## Recap kits

The made-to-order recap kit box under Parts is on by default.
To hide it, set `recapKits: false` at the top of `site-data.js`.
Kit requests arrive by email with the subject "Recap kit quote: <model>".
