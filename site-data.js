/* ==================================================================
   HI-FI HOPES — SITE DATA
   This is the only file you edit to update the site.
   Listings, parts, prices, buy links, phone, policies: all here.
   Step-by-step instructions are in EDITING.md.
   ================================================================== */

window.HFH = {

  /* ---------------- SHOP SETTINGS ---------------- */
  config: {
    // Where each kind of message goes.
    emails: {
      service: "service@hifihopes.com",   // repair and restoration inquiries
      sales:   "sales@hifihopes.com",     // buying, selling, "do you have X"
      hello:   "hello@hifihopes.com"      // everything else
    },

    // Google Voice number, like "(419) 555-0123". Leave "" to hide it.
    phone: "(419) 669-6277",

    // Link to your Google reviews. Leave "" to hide the reviews link.
    reviewsUrl: "",

    // Web3Forms access keys. With a key, the form sends straight to your inbox.
    // Leave "" and the form opens the customer's email app instead.
    // See EDITING.md, "Forms", to get the keys.
    formKeys: {
      service: "",   // repair request form, delivers to service@
      sales:   ""    // recap kit form, delivers to sales@
    },

    // Show the made-to-order recap kit section under Parts. false hides it.
    recapKits: true,

    // Photo of your bench for the About section, like "images/bench.jpg".
    // Leave "" to hide the photo box.
    aboutPhoto: "images/bench.jpg",

    // Your store pages. Paste the link to make the name clickable.
    marketplaces: [
      { name: "eBay", url: "" },
      { name: "Facebook Marketplace", url: "" },
      { name: "US Audio Mart", url: "" }
    ],

    // Policies shown at the bottom of the page.
    // A policy with text "" is hidden. Fill in Warranty and Returns
    // with your own terms before you start taking online payments.
    policies: [
      { title: "Local pickup", text: "Pickup in Paulding, Ohio by appointment. Local buyers can pay at pickup." },
      { title: "Shipping", text: "Receivers ship double-boxed and insured, with signature required. Freight is quoted to your ZIP code before you pay. Parts ship USPS." },
      { title: "Payment", text: "Online payments are processed securely by Stripe. Your card details never touch this site." },
      { title: "Sales tax", text: "Ohio sales tax is added to orders delivered or picked up in Ohio." },
      { title: "Warranty", text: "" },
      { title: "Returns", text: "" }
    ]
  },

  /* ---------------- RECEIVERS ----------------
     status:  "for-sale"  shows in For Sale with price and buttons
              "bench"     shows under On the Bench (no price)
              "sold"      moves to Past Work
     price:        number, like 1150. Use null for no price.
     buyLink:      Stripe Payment Link for the full price. "" to hide.
     depositLink:  Stripe Payment Link for a deposit. "" to hide.
     deposit:      deposit amount, like 100.
     photos:       list of photos, first one is the main picture:
                   ["images/one.jpg", "images/two.jpg"]
                   Leave as [] to show a nameplate instead.
     service:      the service sheet. See EDITING.md, "Service sheets".
  ------------------------------------------- */
  units: [
    {
      id: "pioneer-sa-9500ii",
      brand: "Pioneer",
      model: "SA-9500II",
      status: "for-sale",
      headline: "Integrated amplifier, new power supply caps",
      summary: "Great cosmetic shape. New power supply caps, controls cleaned and lubricated, bias and offset set, 3-hour soak test.",
      price: 1100, buyLink: "", depositLink: "", deposit: null,
      photos: [
        "images/pioneer-sa-9500ii-front.jpg",
        "images/pioneer-sa-9500ii-left.jpg",
        "images/pioneer-sa-9500ii-right.jpg",
        "images/pioneer-sa-9500ii-detail.jpg",
        "images/bench.jpg"
      ],
      service: {
        date: "",
        hours: "",
        groups: [
          { title: "Cleaning", items: [
            { task: "All switches and contacts", result: "Cleaned, DeoxIT D5" },
            { task: "Controls, where appropriate", result: "Lubricated, DeoxIT F5" },
            { task: "General cleaning", result: "Done, 99.9% isopropyl" }
          ]},
          { title: "Capacitors", items: [
            { task: "Main power supply filter capacitors (4)", result: "Replaced, new" }
          ]},
          { title: "Calibration", items: [
            { task: "Idle bias, both channels", result: "Set to spec" },
            { task: "DC offset, both channels", result: "Under 5 mV" }
          ]},
          { title: "Testing", items: [
            { task: "Full function test", result: "Pass" },
            { task: "Soak test", result: "3 hours" }
          ]}
        ],
        notes: "In great cosmetic shape."
      }
    },
    {
      id: "kenwood-eleven-iii",
      brand: "Kenwood",
      model: "Model Eleven III",
      status: "bench",
      headline: "Kenwood's flagship receiver, full service underway",
      summary: "A top-of-the-line Kenwood found locally. Full service and alignment in progress.",
      price: null, buyLink: "", depositLink: "", deposit: null,
      photos: ["images/kenwood-eleven-iii.jpg"],
      service: []
    },
    {
      id: "sansui-7070",
      brand: "Sansui",
      model: "7070",
      status: "bench",
      headline: "Power supply rebuild and recap",
      summary: "Main filter capacitors replaced. Remaining electrolytics screened and replaced as needed, then bias and offset alignment.",
      price: null, buyLink: "", depositLink: "", deposit: null,
      photos: [],
      service: [
        "Main filter capacitors: Nichicon 80V 10,000µF, replaced"
      ]
    },
    {
      id: "sansui-2000x",
      brand: "Sansui",
      model: "2000X",
      status: "bench",
      headline: "Left channel fault diagnosis",
      summary: "Tracing a dead left channel before full service.",
      price: null, buyLink: "", depositLink: "", deposit: null,
      photos: [],
      service: []
    },
    {
      id: "sansui-881",
      brand: "Sansui",
      model: "881",
      status: "bench",
      headline: "Queued for full service",
      summary: "Next on the bench for a full service and dial lamp conversion.",
      price: null, buyLink: "", depositLink: "", deposit: null,
      photos: [],
      service: []
    },
    {
      id: "marantz-2238b",
      brand: "Marantz",
      model: "2238B",
      status: "sold",
      headline: "Full service",
      summary: "Bias and offset set to spec, warm-white LED dial lighting, recap, contacts cleaned.",
      price: null, buyLink: "", depositLink: "", deposit: null,
      photos: ["images/marantz-2238b.jpg"],
      service: []
    },
    {
      id: "marantz-2285b",
      brand: "Marantz",
      model: "2285B",
      status: "sold",
      headline: "Sold locally",
      summary: "Went to a local buyer in October 2026.",
      price: null, buyLink: "", depositLink: "", deposit: null,
      photos: ["images/marantz-2285b.jpg"],
      service: []
    },
    {
      id: "mcs-3253",
      brand: "MCS",
      model: "3253",
      status: "sold",
      headline: "Sold locally",
      summary: "Went to a local buyer in October 2026.",
      price: null, buyLink: "", depositLink: "", deposit: null,
      photos: ["images/mcs-3253.jpg"],
      service: []
    },
    {
      id: "pioneer-sx-3700",
      brand: "Pioneer",
      model: "SX-3700",
      status: "sold",
      headline: "Cleaned and calibrated",
      summary: "Cleaned and calibrated, then sold.",
      price: null, buyLink: "", depositLink: "", deposit: null,
      photos: ["images/pioneer-sx-3700.jpg"],
      service: []
    },
    {
      id: "kenwood-kr-4070",
      brand: "Kenwood",
      model: "KR-4070",
      status: "sold",
      headline: "Cleaned and calibrated",
      summary: "Cleaned and calibrated, then sold.",
      price: null, buyLink: "", depositLink: "", deposit: null,
      photos: ["images/kenwood-kr-4070.jpg"],
      service: []
    },
    {
      id: "sansui-7070-sold",
      brand: "Sansui",
      model: "7070",
      status: "sold",
      headline: "Cleaned and calibrated",
      summary: "Cleaned and calibrated, then sold.",
      price: null, buyLink: "", depositLink: "", deposit: null,
      photos: ["images/sansui-7070-sold.jpg"],
      service: []
    },
    {
      id: "sansui-5900z",
      brand: "Sansui",
      model: "5900Z",
      status: "sold",
      headline: "Cleaned and calibrated",
      summary: "Cleaned and calibrated, then sold.",
      price: null, buyLink: "", depositLink: "", deposit: null,
      photos: ["images/sansui-5900z.jpg"],
      service: []
    }
  ],

  /* ---------------- PARTS ----------------
     show:     false hides the part from the site.
     price:    number, or null to show "Ask for price".
     buyLink:  Stripe Payment Link. "" shows an Ask button instead.
  ---------------------------------------- */
  parts: [
    {
      id: "led-dial-bulbs",
      show: true,
      name: "Warm-white LED dial and meter bulbs",
      detail: "Drop-in LED replacements for incandescent dial and meter lamps. Grain-of-wheat, wired 3mm/5mm, and fuse-style.",
      options: "6V · 8V · 12V · 14V",
      price: null,
      buyLink: "",
      photo: ""
    }
  ]
};
