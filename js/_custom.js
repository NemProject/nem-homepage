
$.i18n.init({
		ns: { namespaces: ['translation'], defaultNs: 'translation'},
		useLocalStorage: false,
		fallbackLng: 'en',
		// sendMissing: true,
		debug: false
	}, function(t) {
		$('#add').text($.t('ns.common:add'));
		$('#appname').text($.t('app.name'));
		$('#appclient').text($.t('app.client'));
		<!-- OURNEM HOMEPAGE -->
		$('#navclient').text($.t('nav.client'));
		$('#navbuy').text($.t('nav.buy'));
		$('#blog').text($.t('nav.blog'));
		$('#support').i18n();
		$('#helpdesk').text($.t('nav.helpdesk'));
		$('#tutorial').text($.t('nav.tutorial'));
		$('#navfaq').text($.t('nav.faq'));
		$('#navtech').text($.t('nav.tech'));
		$('#navupdate').text($.t('nav.update'));
		$('#navlang').text($.t('nav.lang'));

		$('#clientsheader1').text($.t('clients.header1'));
		$('#clientsabout1').text($.t('clients.about1'));
		$('#clientsclick1').text($.t('clients.click1'));
		$('#clientshelp1').i18n();
		$('#clientslink1').text($.t('clients.link1'));

		$('#clientsheader2').text($.t('clients.header2'));
		$('#clientsabout2').text($.t('clients.about2'));
		$('#clientsclick2').text($.t('clients.click2'));

		$('#statsheight').text($.t('stats.height'));
		$('#statsnis').text($.t('stats.nis'));
		$('#statsprice').text($.t('stats.price'));
		$('#statsVer').text($.t('stats.ver'));

		$('#buyheader').text($.t('buy.header'));
		$('#buybox1').text($.t('buy.box4'));
		$('#buybox1click').text($.t('buy.gateway'));
		$('#buybox2').text($.t('buy.box5'));
		$('#buybox2click').text($.t('buy.box2click'));
		$('#buybox3').text($.t('buy.box3'));
		$('#buybox3click').text($.t('buy.box3click'));

		$('#btc8Chat').i18n();

		$('#faqheader').text($.t('faq.header'));
		$('#faqreadfaq').text($.t('faq.readfaq'));
		$('#faqreadfaq2').text($.t('faq.readfaq2'));
		$('#faqirc').text($.t('faq.irc'));
		$('#faqirc2').text($.t('faq.irc2'));
		$('#faqforum').text($.t('faq.forum'));
		$('#faqforum2').text($.t('faq.forum2'));
		$('#faqwiki').text($.t('faq.wiki'));
		$('#faqwiki2').text($.t('faq.wiki2'));

		$('#footerlogotext').text($.t('footer.logotext'));

		$('#footerresources').text($.t('footer.resources'));
		$('#footerresources1').text($.t('footer.resources1'));
		$('#footerresources2').text($.t('footer.resources2'));
		$('#footerresources3').text($.t('footer.resources3'));
		$('#footerresources4').text($.t('footer.resources4'));
		$('#footerresources5').text($.t('footer.resources5'));
		$('#footerresources6').text($.t('footer.resources6'));

		$('#footerarticles').text($.t('footer.articles'));
		$('#footerarticles1').text($.t('footer.articles1'));
		$('#footerarticles2').text($.t('footer.articles2'));
		$('#footerarticles3').text($.t('footer.articles3'));
		$('#footerarticles4').text($.t('footer.articles4'));
		$('#footerarticles5').text($.t('footer.articles5'));
		$('#footerarticles6').text($.t('footer.articles6'));

		$('#footernewsletters').text($.t('footer.newsletters'));
		$('#footernewsletters1').text($.t('footer.newsletters1'));
		$('#footernewsletters2').text($.t('footer.newsletters2'));
		$('#footernewsletters3').text($.t('footer.newsletters3'));
		$('#footernewsletters4').text($.t('footer.newsletters4'));
		$('#footernewsletters5').text($.t('footer.newsletters5'));
		$('#footernewsletters6').text($.t('footer.newsletters6'));
		<!-- SPECIAL LINKS -->
		$("#linkHtml").i18n();
		$("#link2Html").i18n();
		$("#link2Html2").i18n();
		$("#faqnavwhat").i18n();
		$("#navlang").i18n();
		$("#navtech").i18n();
		<!-- FAQ PAGE -->
		$('.headerFAQS').text($.t('faqs.headerFaqs'));

		$('#sideNavGenQuestion').text($.t('faqs.nav.gen-question'));
		$('#sideNavNemCrypto').text($.t('faqs.nav.nem-crypto'));
		$('#sideNavWhyNem').text($.t('faqs.nav.why-nem'));
		$('#sideNavUseNem').text($.t('faqs.nav.use-nem'));
		$('#sideNavWhatsXem').text($.t('faqs.nav.whats-xem'));
		$('#sideNavLoyaltyPoints').text($.t('faqs.nav.loyalty-points'));

		$('#sideNavGetStarted').text($.t('faqs.nav.get-started'));
		$('#sideNavOS').text($.t('faqs.nav.OS-support'));
		$('#SideNavBrowserBit').text($.t('faqs.nav.browser-bit'));
		$('#SideNavInstallJava').text($.t('faqs.nav.install-java'));
		$('#SideNavGetWallet').text($.t('faqs.nav.get-wallet'));
		$('#SideNavStrongPass').text($.t('faqs.nav.strong-pass'));
		$('#SideNavInstallNem').text($.t('faqs.nav.install-nem'));
		$('#sideNavGetXem').text($.t('faqs.nav.get-xem'));
		$('#sideNavNccNis').text($.t('faqs.nav.ncc-nis'));
		$('#sideNavNisOrNcc').text($.t('faqs.nav.nis-or-ncc'));
		$('#SideNavNisAndNcc').text($.t('faqs.nav.nis-and-ncc'));
		$('#SideNavRunNode').text($.t('faqs.nav.run-node'));
		$('#SideNavMobileWallet').text($.t('faqs.nav.mobile-wallet'));
		$('#SideNavInstallHelp').text($.t('faqs.nav.install-help'));

		$('#sideNavTechBasic').text($.t('faqs.nav.tech-basic'));
		$('#sideNavPoi').text($.t('faqs.nav.whats-poi'));
		$('#sideNavMultisig').text($.t('faqs.nav.multisig'));
		$('#sideNavHarvesting').text($.t('faqs.nav.whats-harvest'));
		$('#sideNavHowHarvest').text($.t('faqs.nav.how-harvest'));
		$('#SideNavOpenPort').text($.t('faqs.nav.open-port'));

		$('#sideNavDeepQuestion').text($.t('faqs.nav.deep-question'));
		$('#sideNavXemExist').text($.t('faqs.nav.xem-exist'));
		$('#sideNavFund').text($.t('faqs.nav.community-fund'));
		$('#sideNavDistribution').text($.t('faqs.nav.nem-distribution'));
		$('#sideNavCoins').text($.t('faqs.nav.issue-coins'));
		$('#sideNavNemIndepth').text($.t('faqs.nav.nem-indepth'));


		$('.first').text($.t('faqs.nav.nem-crypto'));
		$('#nem-cryptoContent').text($.t('faqs.nem-cryptoContent'));

		$('#why-nemHeader').text($.t('faqs.nav.why-nem'));
		$('#why-nemContent').text($.t('faqs.why-nemContent'));
		$('#why-nem-l li:nth-child(1)').text($.t('faqs.why-nem-1'));
		$('#why-nem-l li:nth-child(2)').text($.t('faqs.why-nem-2'));
		$('#why-nem-l li:nth-child(3)').text($.t('faqs.why-nem-3'));
		$('#why-nem-l li:nth-child(4)').text($.t('faqs.why-nem-4'));
		$('#why-nem-l li:nth-child(5)').text($.t('faqs.why-nem-5'));

		$('#use-nemHeader').text($.t('faqs.nav.use-nem'));
		$('#use-nemContent').text($.t('faqs.use-nemContent'));

		$('#whats-xemHeader').text($.t('faqs.nav.whats-xem'));
		$('#whats-xemContent').text($.t('faqs.whats-xemContent'));

		$('#get-xemHeader').text($.t('faqs.nav.get-xem'));
		$('#get-xemContent').text($.t('faqs.get-xemContent'));
		$('#exchange-1').text($.t('faqs.exchange-1'));
		$('#exchange-2').text($.t('faqs.exchange-2'));
		$('#exchange-3').text($.t('faqs.exchange-3'));
		$("#exchange-guide").i18n();

		$('#xem-existHeader').text($.t('faqs.nav.xem-exist'));
		$('#xem-existContent').text($.t('faqs.xem-existContent'));

		$('#multisigHeader').text($.t('faqs.nav.multisig'));
		$('#multisigContent').text($.t('faqs.multisigContent'));

		$('#ncc-nisHeader').text($.t('faqs.nav.ncc-nis'));
		$('#ncc-nis-l li:nth-child(1)').text($.t('faqs.nccContent'));
		$('#ncc-nis-l li:nth-child(2)').text($.t('faqs.nisContent'));

		$('#whats-harvestHeader').text($.t('faqs.nav.whats-harvest'));
		$('#whats-harvest-1').text($.t('faqs.whats-harvest-1'));
		$('#whats-harvest-2').text($.t('faqs.whats-harvest-2'));
		$('#whats-harvest-3').text($.t('faqs.whats-harvest-3'));

		$('#how-harvestHeader').text($.t('faqs.nav.how-harvest'));
		$("#how-harvestContent").i18n();

		$('#whats-poiHeader').text($.t('faqs.nav.whats-poi'));
		$('#whats-poiContent').text($.t('faqs.whats-poiContent'));

		$('#nem-indepthHeader').text($.t('faqs.nav.nem-indepth'));
		$("#nem-indepth-4").i18n();
		$("#nem-indepth-2").i18n();
		$("#nem-indepth-3").i18n();

		$('#community-fundHeader').text($.t('faqs.nav.community-fund'));
		$('#community-fundContent').text($.t('faqs.community-fundContent'));

		$('#nem-distributionHeader').text($.t('faqs.nav.nem-distribution'));
		$('#nem-distributionContent').text($.t('faqs.nem-distributionContent'));

		$('#issue-coinsHeader').text($.t('faqs.nav.issue-coins'));
		$('#issue-coinsContent').text($.t('faqs.issue-coinsContent'));

		$('#loyalty-pointsHeader').text($.t('faqs.nav.loyalty-points'));
		$('#loyalty-pointsContent').text($.t('faqs.loyalty-pointsContent'));

		$('#OS-supportHeader').text($.t('faqs.nav.OS-support'));
		$('#OS-supportContent').text($.t('faqs.OS-supportContent'));

		$('#nis-or-nccHeader').text($.t('faqs.nav.nis-or-ncc'));
		$('#nis-or-ncc-mem').text($.t('faqs.nis-or-ncc-mem'));
		$('#nis-or-ncc-cpu').text($.t('faqs.nis-or-ncc-cpu'));
		$('#nis-or-ncc-note').text($.t('faqs.nis-or-ncc-note'));
		$('#nis-or-ncc-mini-pc').text($.t('faqs.nis-or-ncc-mini-pc'));
		$('#nis-or-ncc-mini-pc-1').i18n();
		$('#nis-or-ncc-mini-pc-2').i18n();

		$('#nis-and-nccHeader').text($.t('faqs.nav.nis-and-ncc'));
		$('#nis-and-ncc-mem').text($.t('faqs.nis-and-ncc-mem'));
		$('#nis-and-ncc-cpu').text($.t('faqs.nis-and-ncc-cpu'));
		$('#nis-and-ncc-small-pc').text($.t('faqs.nis-and-ncc-small-pc'));
		$('#nis-and-ncc-small-pc-1').i18n();
		$('#nis-and-ncc-small-pc-2').i18n();
		$('#nis-and-ncc-small-pc-3').i18n();

		$('#mobile-walletHeader').text($.t('faqs.nav.mobile-wallet'));
		$('#mobile-walletContent').text($.t('faqs.mobile-walletContent'));

		$('#install-helpHeader').text($.t('faqs.nav.install-help'));
		$("#install-help-1").i18n();
		$("#install-help-2").i18n();
		$("#install-help-3").i18n();
		$("#install-help-4").i18n();
		$("#install-help-5").i18n();



		$('#run-nodeHeader').text($.t('faqs.nav.run-node'));
		$("#run-node-1").i18n();
		$("#run-node-2").i18n();
		$("#run-node-3").i18n();
		$("#run-node-4").i18n();

		$('#get-walletHeader').text($.t('faqs.nav.get-wallet'));
		$("#get-walletContent").i18n();
		$('#get-wallet-note').text($.t('faqs.get-wallet-note'));

		$('#strong-passHeader').text($.t('faqs.nav.strong-pass'));
		$("#strong-passContent").i18n();

		$('#install-javaHeader').text($.t('faqs.nav.install-java'));
		$('#javaText').i18n();
		$('#javaWindowsHead').i18n();
		$('#javaWindowsVideo').i18n();
		$('#javaWindowsMan').i18n();
		$('#javaMacHead').i18n();
		$('#javaMacVideo').i18n();
		$('#javaMacMan').i18n();
		$('#javaLinuxHead').i18n();
		$('#javaLinuxVideo').i18n();

		$('#install-nemHeader').text($.t('faqs.nav.install-nem'));
		$("#install-nem-java").text($.t('faqs.install-nem-java'));
		$('#install-nem-1').i18n();
		$("#install-nem-2").text($.t('faqs.install-nem-2'));
		$('#install-nem-3').i18n();
		$('#install-nem-4').i18n();
		$('#install-nem-alone-1').i18n();
		$("#install-nem-alone-2").i18n();
		$('#install-nem-alone-3').i18n();
		$('#install-nem-alone-4').i18n();
		$('#install-nem-alone-5').i18n();

		$('#open-portHeader').text($.t('faqs.nav.open-port'));
		$("#open-port-8").i18n();
		$("#open-port-9").i18n();
		$("#open-port-10").i18n();
		$("#open-port-11").i18n();


		$('.nav').i18n();
		$('#btn').i18n();
		$('#extendedAttr').i18n();
	});

	//**## NEM NEWS FEED ##**/
	//Pulls twitter feed using twitter fetcher.
	// Also automatically hyperlinks URLS and user mentions and hashtags.
	//@nemcoin
	var config1 = {
		"id": '474290838172749825',
		"domId": 'newsFeed',
		"maxTweets": 3,
		"enableLinks": true,
		"showUser": true,
		"showImages": true,
		"showTime": true,
		"dateFunction": '',
		"showRetweet": false,
		"showInteraction": false
	};
	twitterFetcher.fetch(config1);

// SMOOTH SCROLLING START
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//**## IE DETECTION AND REDIRECT ##**//
function GetIEVersion() {
	var sAgent = window.navigator.userAgent;
	var Idx = sAgent.indexOf("MSIE");
	// If IE, return version number.
		if (Idx > 0)
			return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));
		// If IE 11 then look for Updated user agent string.
		else if (!!navigator.userAgent.match(/Trident\/7\./))
			return 11;
		else
			return 0; //It is not IE
		}
		if (GetIEVersion() > 0)
		var txt="It looks like you are using Internet Explorer, for the best experience, you should view this site in ";
		var or=" or ";
		var firefox="<a href=\"https://www.mozilla.org/en-US/firefox/new/\">Firefox</a>";
		var chrome="<a href=\"http://www.google.com/chrome/\">Chrome</a>";
		var cancel = "<i class=\"icon-cancel-circled\" onclick=\"parentNode.remove()\"></i>";	$('#headerIE').html(txt+chrome+or+firefox+cancel);

		if (GetIEVersion() == 0)
		$('#headerIE').remove();
