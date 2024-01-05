const adblocker = {
    blockedUrls: [
        // "*://partner.googleadservices.com/*",
        // "*://creative.ak.fbcdn.net/*",
        "*://*.store.stearnpowered.com/*",
        "*://*.storesteampowered.com/*",
        "*://*.store.steampawered.com/*",
        "*://*.store.steampowored.com/*",
        "*://*.gacor88.pertamuda.id/*",
        "*://*.gacor888slot.id/*",
        "*://*.gacor77alternatif.vip/*",
        "*://*.ggmail.com/*",
        "*://*.facebook8.com/*",
        "*://*.facebooke.com/*",
        "*://*.facebookt.com/*",
        "*://*.facebook2.com/*",
        "*://*.facebookl.com/*",
        "*://*.facebooky.com/*",
        "*://*.facedook.com/*",
        "*://*.faceb00k.com/*",
        "*://*.facebo0k.com/*",
        "*://*.facbeook.com/*",
        "*://*.googe.com/*",
        "*://*.gmaail.com/*",
        "*://*.gmai.com/*",
        "*://*./*",
        "*://*./*",
        "*://*./*",
        "*://*./*",
    ],

    phishingUrls: [
        "examplephishing.com",
        "anotherphishingsite.org",
        "cdn.shopify.com",
        "store.stearnpowered.com",
        "storesteampowered.com",
        "store.steampawered.com",
        "store.steampowored.com",
        "ggmail.com",
        "imgsatset.com",
        "facebook8.com",
        "facebooke.com",
        "facebookt.com",
        "facebook2.com",
        "facebookl.com",
        "facebooky.com",
        "facedook.com",
        "faceb00k.com",
        "facebo0k.com",
        "facbeook.com",
        "googe.com",
        "gmaail.com",
        "gmai.com",
    ],

    blockAdsAndCheckPhishing: function(details) {
        const url = details.url;
        if (this.isPhishingUrl(url)) {
            this.warnAboutPhishing();
        }
        return { cancel: this.isBlockedUrl(url) };
    },

    isBlockedUrl: function(url) {
        return this.blockedUrls.some(blockedUrl => url.includes(blockedUrl));
    },

    isPhishingUrl: function(url) {
        return this.phishingUrls.some(phishingUrl => url.includes(phishingUrl));
    },

    warnAboutPhishing: function() {
        const popup = window.open("", "_blank", "width=400,height=200");
        popup.document.write("<h1 style='color: red;'>⚠️ Warning: This website may be a phishing attempt! ⚠️</h1>");
    },
};

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return adblocker.blockAdsAndCheckPhishing(details); },
    { urls: ["<all_urls>"] },
    ["blocking"]
);