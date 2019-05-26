function ShowSelectedComponentKeyPress(n, t) {
	if (window.event.keyCode == 13) return ShowSelectedComponent(n, t), !1
}
function SetRightSideNavigationMenuHeight() {
	$("[id^=dvModuleGroup_]").hide();
	window.location.search.toLowerCase().indexOf("bookmarkid") != -1 && SelectBookMark();
	window.location.search.toLowerCase().indexOf("componentid") != -1 && LoadSelectedInternalLink();
	$(".div_side_comp").length > 0 && $(".div_content").css("min-height", $(".div_side_comp").height() - 27)
}
function ShowSelectedComponent(n, t) {
	var i = $("#" + t).attr("data-parentModule");
	return i != undefined && i != null && ($("[data-parentmodule=" + i + "]").show(), $("#" + i + " [id$=_LongDescription]").length > 0 ? (document.getElementById(i + "_LongDescription").style.display = "block", document.getElementById(i + "_ShortDescription").style.display = "none", ShowText($("#" + i + ".learnMoreLabel"), "long")) : ShowText($("#" + i + ".learnMoreLabel"), "long"), DisplayTopNavigation(i)), $("html, body").animate({
		scrollTop: $("#" + t).offset().top - 1
	}, 800), !1
}
function ShowToolTip() {
	// var n, i, t;
	// window.location.hostname.toLowerCase() == "www.privacy.microsoft.com" || window.location.hostname.toLowerCase() == "privacy.microsoft.com" ? locale == "privacy.microsoft.com" ? (n = null, n = window.location.href.toLowerCase().indexOf("/eu-privacystatement") > -1 ? window.location.href.toLowerCase().split("/eu-privacystatement")[0].split("/") : window.location.href.toLowerCase().indexOf("/korea-privacystatement") > -1 ? window.location.href.toLowerCase().split("/korea-privacystatement")[0].split("/") : window.location.href.toLowerCase().split("/privacystatement")[0].split("/"), i = n[n.length - 1], t = i != "" ? "/" + i + "/pspResource" : "/en-us/pspResource") : t = "/" + locale + "/pspResource" : t = locale == "privacy.microsoft.com" ? "https://cmspreview2.corp.microsoft.com/privacy.microsoft.com/pspResource?CollectionId=" + GetQuerystring("CollectionId") : "https://cmspreview2.corp.microsoft.com/privacy.microsoft.com/" + locale + "/pspResource?CollectionId=" + GetQuerystring("CollectionId");
	// $.ajax({
	// 	type: "GET",
	// 	url: t,
	// 	dataType: "xml",
	// 	complete: function() {
	// 		var n, t;
	// 		$(".Lastupdated").show();
	// 		$("#psp_expand_all").show();
	// 		$("#psp_collapse_all").hide();
	// 		$("[src*='btn_collapse.png']").parent().attr("title", collapseText);
	// 		$("[src*='btn_expand.png']").parent().attr("title", expandText);
	// 		window.location.search.indexOf("Componentid") != -1 && (n = GetQuerystring("Componentid"), $(".page").each(function() {
	// 			if (this.id.toLowerCase() == n.toLowerCase()) return n = this.id, !1
	// 		}), GetQuerystring("View") == "Description" && $("#" + n + "_lnkViewInfo").length > 0 && ($("#" + n + "_lnkViewInfo").attr("title", viewSummaryTitle).html(viewSummaryText).parent().attr("title", viewSummaryTitle), $("#" + n + " .LearnMoreNavigation").css("background-image", "url(payloadGuid=9a5ecfc9-072d-416f-9f13-d83993873471)"), ieVersion && parseInt($.browser.version, 10) == 7 && $(".LearnMoreNavigation").css("width", $(".learnMoreLabel").width() + 20)), t = $("#" + n).attr("data-parentModule"), t != undefined && t != null && ($("#" + t + "_lnkViewInfo").attr("title", viewSummaryTitle).html(viewSummaryText).parent().attr("title", viewSummaryTitle), $("#" + t + " .LearnMoreNavigation").css("background-image", "url(payloadGuid=9a5ecfc9-072d-416f-9f13-d83993873471)")))
	// 	},
	// 	success: function(n) {
	// 		$(n).find("root").children().each(function() {
	// 			var n = $(this).text(),
	// 				t, i;
	// 			$(this)[0].attributes.length > 0 && (ieVersion && parseInt($.browser.version, 10) == 10 ? t = $(this)[0].attributes.name.nodeValue : $(this)[0].attributes.length == 2 && (t = $(this)[0].attributes[1].nodeName == "name" ? $(this)[0].attributes.name.nodeValue : $(this)[0].attributes[0].nodeValue), t.indexOf("tooltip_") > -1 && (i = t.replace("tooltip_", ""), t.indexOf("tooltip_learn_more") > -1 ? ($(".learnMoreLabel").attr("title", n.trim()).parent().attr("title", n.trim()), learnMoreTitle = n.trim()) : t.indexOf("tooltip_view_summary") > -1 && (viewSummaryTitle = n.trim()), $("#" + i).attr("title", n.trim())), t.indexOf("psp_") > -1 && (t.indexOf("psp_last_updated") == -1 && $("#" + t).text(n.trim()).attr("title", n.trim()), t == "psp_expand" ? expandText = n.trim() : t == "psp_collapse" ? collapseText = n.trim() : t.indexOf("psp_learn_more") > -1 ? (learnMoreText = n.trim(), $(".learnMoreLabel").attr("title", n.trim()).parent().attr("title", n.trim()), $(".learnMoreLabel").each(function() {
	// 				this.innerHTML = learnMoreText
	// 			})) : t.indexOf("psp_view_summary") > -1 ? viewSummaryText = n.trim() : t.indexOf("psp_top_of_page") > -1 ? ($(".psp_top_of_page").text(n.trim()).attr("title", n.trim()), $(".TopNavigation").attr("title", n.trim()), $(".TopNavigation a").attr("title", n.trim()), $(".TopNavigation img").attr("alt", n.trim())) : t.indexOf("psp_service_specific_details") > -1 ? ($(".dvServiceAgreementHeader").length > 0 ? $(".dvServiceAgreementTile")[0].innerHTML = n.trim() + ":" : serviceSpecificDetails = n.trim(), AddServiceSpecificFeaturesTile()) : t.indexOf("psp_windows_device_services") > -1 ? ($(".dvdvWindowsDevicesHeader").length > 0 ? $(".dvdvWindowsDevicesTile")[0].innerHTML = n.trim() + ":" : windowsDevicesServices = n.trim(), AddWindowsDevicesServicesTile()) : t.indexOf("psp_print") > -1 ? $(".div_print  img").attr("title", n.trim()).attr("alt", n.trim()).parent().attr("title", n.trim()) : t.indexOf("psp_we_self_certify_compliance_with") > -1 && (selfCertifyCompliance = n.trim(), $("#psp_we_self_certify_compliance_with_small_screen").text(selfCertifyCompliance)), $("#expand_all_icon").attr("title", expandText), $("#collapse_all_icon").attr("title", collapseText), $("[id^=lnkExpand_]").attr("title", expandText)))
	// 		})
	// 	}
	// })
}
function AssignToolTipToHref() {
	$('a[id^="LNK"]').each(function() {
		$(this).attr({
			title: $(this).text()
		})
	});
	$('a[id^="lnkInternal"]').each(function() {
		$(this).attr({
			title: $(this).text()
		})
	})
}
function ShowAllModulesLongDescirption() {
	$("div.page").each(function() {
		var n = this.id;
		$("#" + n + "_LongDescription").length == 0 ? $("#" + n + "_ShortDescription").show() : $("#" + n + "_LongDescription").show()
	})
}
function PrintAllModules() {
	var n = window.location.href.split("#")[0];
	window.open(n.split("?")[0] + "?PrintView=true", "_blank")
}
function BindEvent() {
	$("div.div_print > a").click(PrintAllModules);
	$("#mainadvertisingidmodulefromHowtoAccess").click(function(n) {
		n.preventDefault();
		ShowSelectedComponent(this, "mainadvertisingidmodule")
	});
	$("#maininputpersonalizationmodulefromCortana").click(function(n) {
		n.preventDefault();
		ShowSelectedComponent(this, "maininputpersonalizationmodule")
	});
	$("#mainsyncsettingsmodulefromWeb").click(function(n) {
		n.preventDefault();
		ShowSelectedComponent(this, "mainsyncsettingsmodule")
	});
	$("#mainsyncsettingsmodulefromWindowsApp").click(function(n) {
		n.preventDefault();
		ShowSelectedComponent(this, "mainsyncsettingsmodule")
	});
	$("#mainupdateservicesmodulefromOfficeServices").click(function(n) {
		n.preventDefault();
		ShowSelectedComponent(this, "mainupdateservicesmodule")
	});
	$("#mainmicrosoftaccountmodulefromOffice").click(function(n) {
		n.preventDefault();
		ShowSelectedComponent(this, "mainmicrosoftaccountmodule")
	});
	$("#mainwindowsappsmodulefromLocationService").click(function(n) {
		n.preventDefault();
		ShowSelectedComponent(this, "mainwindowsappsmodule")
	});
	$("#mainwindowsstoremodulefromHowWeUsePersonalData").click(function(n) {
		n.preventDefault();
		ShowSelectedComponent(this, "mainwindowsstoremodule")
	});
	$("#mainwindowsstoremodulefromUpdateServices").click(function(n) {
		n.preventDefault();
		ShowSelectedComponent(this, "mainwindowsstoremodule")
	});
	$("#psp_expand_all").click(function(n) {
		n.preventDefault();
		$("#psp_collapse_all").show();
		$("#collapse_all_icon").show();
		$("#psp_expand_all").hide();
		$("#expand_all_icon").hide();
		$("[id^=dvModuleGroup_]").show();
		$(".childModule").show();
		$("[id$=_lnkViewInfo]").each(function() {
			var t = this,
				i = t.id.replace("lnkViewInfo", ""),
				n = document.getElementById(i + "LongDescription"),
				u = document.getElementById(i + "ShortDescription"),
				r = i.replace("_", "");
			n == null || n == undefined ? ($("[data-parentmodule=" + r + "]").show(), ShowText(t, "long")) : n.style.display != "block" && (n.style.display = "block", u.style.display = "none", ShowText(t, "long"));
			DisplayTopNavigation(r)
		});
		$(".div_side_comp [id^=imgExpand_]").attr("alt", "-");
		$("[id^=lnkExpand_]").attr("title", collapseText);
		$(".div_side_comp [id^=imgExpand_]").attr("class", "icon-chevron-down")
	});
	$("#expand_all_icon").click(function(n) {
		n.preventDefault();
		$("#psp_collapse_all").show();
		$("#collapse_all_icon").show();
		$("#psp_expand_all").hide();
		$("#expand_all_icon").hide();
		$("[id^=dvModuleGroup_]").show();
		$(".childModule").show();
		$("[id$=_lnkViewInfo]").each(function() {
			var t = this,
				i = t.id.replace("lnkViewInfo", ""),
				n = document.getElementById(i + "LongDescription"),
				u = document.getElementById(i + "ShortDescription"),
				r = i.replace("_", "");
			n == null || n == undefined ? ($("[data-parentmodule=" + r + "]").show(), ShowText(t, "long")) : n.style.display != "block" && (n.style.display = "block", u.style.display = "none", ShowText(t, "long"));
			DisplayTopNavigation(r)
		});
		$(".div_side_comp [id^=imgExpand_]").attr("alt", "-");
		$("[id^=lnkExpand_]").attr("title", collapseText);
		$(".div_side_comp [id^=imgExpand_]").attr("class", "icon-chevron-up")
	});
	$("#psp_collapse_all").click(function(n) {
		n.preventDefault();
		$("#psp_collapse_all").hide();
		$("#collapse_all_icon").hide();
		$("#psp_expand_all").show();
		$("#expand_all_icon").show();
		$("[id^=dvModuleGroup_]").hide();
		$(".childModule").hide();
		$("[id$=_lnkViewInfo]").each(function() {
			var n = this,
				t = n.id.replace("lnkViewInfo", ""),
				r = document.getElementById(t + "ShortDescription"),
				i = document.getElementById(t + "LongDescription"),
				u = t.replace("_", "");
			i == null || i == undefined ? ($("[data-parentmodule=" + u + "]").hide(), ShowText(n, "short")) : r.style.display != "block" && (r.style.display = "block", i.style.display = "none", ShowText(n, "short"));
			DisplayTopNavigation(u)
		});
		$(".div_side_comp [id^=imgExpand_]").attr("alt", "+");
		$("[id^=lnkExpand_]").attr("title", expandText);
		$(".div_side_comp [id^=imgExpand_]").attr("class", "icon-chevron-down")
	});
	$("#collapse_all_icon").click(function(n) {
		n.preventDefault();
		$("#psp_collapse_all").hide();
		$("#collapse_all_icon").hide();
		$("#psp_expand_all").show();
		$("#expand_all_icon").show();
		$("[id^=dvModuleGroup_]").hide();
		$(".childModule").hide();
		$("[id$=_lnkViewInfo]").each(function() {
			var n = this,
				t = n.id.replace("lnkViewInfo", ""),
				r = document.getElementById(t + "ShortDescription"),
				i = document.getElementById(t + "LongDescription"),
				u = t.replace("_", "");
			i == null || i == undefined ? ($("[data-parentmodule=" + u + "]").hide(), ShowText(n, "short")) : r.style.display != "block" && (r.style.display = "block", i.style.display = "none", ShowText(n, "short"));
			DisplayTopNavigation(u)
		});
		$(".div_side_comp [id^=imgExpand_]").attr("alt", "+");
		$("[id^=lnkExpand_]").attr("title", expandText);
		$(".div_side_comp [id^=imgExpand_]").attr("class", "icon-chevron-down")
	})
}
function InitializePage() {
	ChildModuleAlignments();
	ShowToolTip();
	AssignToolTipToHref();
	setInternalLinks();
	BindEvent();
	LoadRightSideNavData();
	window.location.search.toLowerCase().indexOf("bookmarkid") != -1 && SelectBookMark();
	$("#lnkGoTop").on("click", function(n) {
		n.preventDefault();
		$("html, body").animate({
			scrollTop: 0
		}, "slow")
	});
	(locale != "en-us" || locale == "privacy.microsoft.com") && $(".logo_relatedLink_Section").hide()
}
function setInternalLinks() {
	var t = null,
		i, n;
	t = window.location.href.toLowerCase().indexOf("/eu-privacystatement") > -1 ? window.location.href.toLowerCase().split("/eu-privacystatement") : window.location.href.toLowerCase().indexOf("/korea-privacystatement") > -1 ? window.location.href.toLowerCase().split("/korea-privacystatement") : window.location.href.toLowerCase().split("/privacystatement");
	t.length > 1 ? (i = t[1].split("/"), n = i[0]) : n = "";
	$("a[id ^='lnkInternal']").removeAttr("target");
	$("a[id ^='lnkInternal']").click(function() {
		switch (this.id) {
		case "lnkInternal001":
			RedirectInternalSharedLinks("lnkInternal001", n, "#pspCookiesModule", "cookiesmodule", "pagecookiesmodule", "Summary");
			break;
		case "lnkInternal002":
			RedirectInternalSharedLinks("lnkInternal002", n, "#pspCookiesModule", "cookiesmodule", "pagecookiesmodule", "Description");
			break;
		case "lnkInternal003":
			RedirectInternalSharedLinks("lnkInternal003", n, "#pspCookiesModule", "cookiesmodule", "pagecookiesmodule", "Summary");
			break;
		case "lnkInternal004":
			RedirectInternalSharedLinks("lnkInternal004", n, "#pspMicrosoftAccountModule", "microsoftaccountmodule", "accountsmodule", "Description");
			break;
		case "lnkInternal005":
			RedirectInternalSharedLinks("lnkInternal005", n, "#pspCookiesModule", "cookiesmodule", "pagecookiesmodule", "Description");
			break;
		case "lnkInternal006":
			RedirectInternalSharedLinks("lnkInternal006", n, "#pspOtherInformationModule", "otherinformationmodule", "", "Description");
			break;
		case "lnkInternal007":
			RedirectInternalSharedLinks("lnkInternal007", n, "#pspOtherInformationModule", "otherinformationmodule", "", "Description");
			break;
		case "lnkInternal008":
			RedirectInternalSharedLinks("lnkInternal008", n, "#pspCommunicationModule", "communicationmodule", "communications,communicationsmodule", "Description");
			break;
		case "lnkInternal009":
			RedirectInternalSharedLinks("lnkInternal009", n, "#pspMainCookiesSimilarTechnologiesModule", "cookiesmodule", "pagecookiesmodule", "Description");
			break;
		case "lnkInternal010":
			RedirectInternalSharedLinks("lnkInternal010", n, "#pspAccessingInformationModule", "accessingyourinformationmodule", "accessinginformationmodule", "Description")
		}
	})
}
function PrintWindow() {
	$(".childModule").show();
	$("div.LearnMoreNavigation").hide();
	$("div.TopNavigation").hide();
	$("[id$=_ShortDescription]").hide();
	$("div.gcl_safelogo").hide();
	$("div.logo_relatedLink_Section").hide();
	$("div.gcc_cookies").hide();
	ShowAllModulesLongDescirption();
	$("div.div_print").hide();
	$("div.div_side_comp").hide();
	$("div").hasClass("shell-footer") && $("div.shell-footer").hide();
	$("div").hasClass("shell-header") && $(".shell-header").hide();
	$("div").hasClass("dvServiceAgreementHeader") && $(".dvServiceAgreementHeader").show();
	$("div.Lastupdated").show();
	$("div.expand_collapse").hide()
}
function LoadRightSideNavData() {
	var n = "";
	$("div.page").not(".childModule").not(".childModule_Mobile").each(function() {
		var t = this.id,
			i, r, u;
		try {
			i = $(this).find(".CollectingYourInfoRightNav").text();
			r = i.replace(/['"]/g, "&#39;");
			$(".div_content").find("[data-parentModule=" + t + "]").length > 0 ? (n += '<div  class="tr_Right_Nav_Header_OnePSTemplate m-b-md" id=\'div' + t + "' title='" + r + "' onclick=\"javascript:ShowSelectedComponent(this,'" + t + "');\" onkeypress=\"javascript:return ShowSelectedComponentKeyPress(this,'" + t + "');\" >", n += "<a href='#'><span class='Right_Nav_Title Right_Nav_Title_ParentModule text-muted m-r-md'>" + i + "<\/span><\/a>", n += "<a id='lnkExpand_" + t + "' href='#' style='display:inline;text-decoration:none'><i id='imgExpand_" + t + "'class='icon-chevron-down' style='color:black' role='button'><\/i><\/a>", n += "<\/div>", n += "<div id='dvModuleGroup_" + t + "'>", $(".div_content").find("[data-parentModule=" + t + "]").each(function() {
				var t = this.id,
					i = $(this).find(".CollectingYourInfoRightNav").text(),
					r = i.replace(/['"]/g, "&#39;");
				n += '<div  class="tr_Right_Nav_Header_ChildModules" id=\'div' + t + "' title='" + r + "' onclick=\"javascript:ShowSelectedComponent(this,'" + t + "');\" onkeypress=\"javascript:return ShowSelectedComponentKeyPress(this,'" + t + "');\" >";
				n += "<a href='#'><div class='Right_Nav_Title_ChildModule m-t-md text-muted m-l-lg m-b-md'>" + i + "<\/div><\/a><\/div>"
			}), n += "<\/div>") : (n += '<div  class="tr_Right_Nav_Header_OnePSTemplate" id=\'div' + t + "' title='" + r + "' onclick=\"javascript:ShowSelectedComponent(this,'" + t + "');\" onkeypress=\"javascript:return ShowSelectedComponentKeyPress(this,'" + t + "');\" >", n += "<a href='#'><div class='Right_Nav_Title m-b-md text-muted'>" + i + "<\/div><\/a><\/div>");
			ieVersion && parseInt($.browser.version, 10) == 7 && (u = $("#" + t + "_lnkViewInfo").offsetWidth)
		} catch (f) {}
	});
	$("div.div_side_comp").html(n);
	$(".childModule").hide();
	$("[class^=tr_Right_Nav_Header]").each(function() {
		$(this).find("a").eq(0).click(function(n) {
			n.preventDefault()
		})
	});
	setTimeout(function() {
		SetRightSideNavigationMenuHeight()
	}, 0);
	$("[id^=imgExpand_]").click(function(n) {
		n.preventDefault();
		n.stopPropagation();
		var t = this.id.split("_")[1];
		ExpandTile(t)
	});
	$("[id^=lnkExpand_]").click(function(n) {
		n.preventDefault();
		n.stopPropagation();
		var t = this.id.split("_")[1];
		ExpandTile(t)
	});
	$("[id^=lnkExpand_]").keydown(function(n) {
		if (n.keyCode != 9 && n.preventDefault(), n.stopPropagation(), n.keyCode == 13) {
			var t = this.id.split("_")[1];
			ExpandTile(t)
		}
	})
}
function ExpandTile(n) {
	$("#dvModuleGroup_" + n).is(":visible") ? ($("#dvModuleGroup_" + n).slideUp(1), $("#imgExpand_" + n).attr("class", "icon-chevron-down"), $("#lnkExpand_" + n).attr("title", expandText)) : ($("#dvModuleGroup_" + n).slideDown(1), $("#imgExpand_" + n).attr("alt", "-").attr("class", "icon-chevron-up"), $("#lnkExpand_" + n).attr("title", collapseText))
}
function LoadSelectedInternalLink(n, t) {
	var i, u, r;
	n == null ? (i = GetQuerystring("Componentid"), $(".page").each(function() {
		if (this.id.toLowerCase() == i.toLowerCase()) return i = this.id, !1
	}), u = GetQuerystring("View")) : (i = n, u = t);
	$("#" + i).length > 0 && (u == "Description" && $("#" + i + "_LongDescription").length > 0 && (document.getElementById(i + "_ShortDescription").style.display = "none", document.getElementById(i + "_LongDescription").style.display = "block"), $("#" + i).hasClass("childModule") ? (r = $("#" + i).attr("data-parentModule"), $("#" + r + "_LongDescription").length > 0 && (document.getElementById(r + "_ShortDescription").style.display = "none", document.getElementById(r + "_LongDescription").style.display = "block"), ExpandTile(r), $("[data-parentModule=" + r + "]").show()) : u == "Description" && (ExpandTile(i), $("[data-parentModule=" + i + "]").show()), DisplayTopNavigation(), window.location.search.toLowerCase().indexOf("bookmarkid") == -1 && $("html, body").animate({
		scrollTop: $("#" + i).offset().top - 1
	}, 800))
}
function GetQuerystring(n, t) {
	t == null && (t = "");
	n = n.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var r = new RegExp("[\\?&]" + n + "=([^&#]*)"),
		i = r.exec(window.location.href);
	return i == null ? t : i[1]
}
function SelectBookMark() {
	var t, i, r = GetQuerystring("bookmarkid"),
		n, e, u, f;
	$("div.page").each(function() {
		e = $(this).attr("id");
		$(this).find("a[name]").each(function() {
			$(this).attr("name").toLowerCase() == r.toLowerCase() && t != "" && (t = e)
		})
	});
	t != "" && (u = $("#" + t + "_ShortDescription"), f = $("#" + t + "_LongDescription"), u.length > 0 ? (u.find("a[name]").each(function() {
		$(this).attr("name").toLowerCase() == r.toLowerCase() && n == null && (n = $(this), i = "Summary")
	}), n == null && f.find("a[name]").each(function() {
		$(this).attr("name").toLowerCase() == r.toLowerCase() && n == null && (n = $(this), i = "Description")
	})) : f.find("a[name]").each(function() {
		$(this).attr("name").toLowerCase() == r.toLowerCase() && n == null && (n = $(this), i = "Description")
	}));
	n != null && (LoadSelectedInternalLink(t, i), setTimeout(function() {
		$("html, body").animate({
			scrollTop: n.offset().top - 20
		}, "fast")
	}, 200))
}
function RedirectInternalSharedLinks(n, t, i, r, u, f) {
	var s = document.getElementById(n),
		h = "",
		a, c, l, e, o;
	h = t.toLowerCase().indexOf("default.aspx") == -1 ? window.location.href.split(".aspx")[0].replace("/" + t + "/", "/") : window.location.href.split(".aspx")[0];
	t.toLowerCase().indexOf("default.aspx") == -1 && $(i).length == 0 ? (a = t, c = t.substring(0, 1), t = c.toUpperCase() + t.substring(1, t.length), e = !1, $(".page").each(function() {
		if (u != "") if (u.indexOf(",") != -1) {
			modulenamearray = u.split(",");
			for (var n = 0; n < modulenamearray.length; n++) if ($(this).attr("id").toLowerCase() == "psp" + t.toLowerCase() + r || $(this).attr("id").toLowerCase() == "psp" + t.toLowerCase() + modulenamearray[n]) {
				e = !0;
				o = $(this).attr("id");
				break
			}
		} else $(this).attr("id").toLowerCase() == "psp" + t.toLowerCase() + u && (e = !0, o = $(this).attr("id"));
		r != "" && $(this).attr("id").toLowerCase() == "psp" + t.toLowerCase() + r && (e = !0, o = $(this).attr("id"))
	}), e ? (l = ".aspx?Componentid=" + o + "&View=" + f, s.href = window.location.href.split(".aspx")[0] + l) : s.href = h + ".aspx?Componentid=psp" + i.substring(4, i.length) + "&View=" + f) : s.href = window.location.href.split(".aspx")[0] + ".aspx?Componentid=" + i.substring(1, i.length) + "&View=" + f
}
function ChildModuleAlignments() {
	if ($("#dvGroupModules").find("span").length > 0) {
		var n = "";
		$("#dvGroupModules").find("span").each(function(t, i) {
			n += $(i)[0].innerHTML + ","
		});
		$(".div_content > div[id^=main]").each(function() {
			var i = $(this)[0].id,
				t;
			n.toLowerCase().indexOf(i.toLowerCase()) != -1 && (t = "", $("#dvGroupModules > span").filter(function() {
				if (this.innerHTML.toLowerCase().indexOf(i.toLowerCase()) > -1) {
					var n = this.id.split("_")[1].toLowerCase();
					$(".div_content > div[id^=main]").each(function() {
						if (this.id.toLowerCase() == n) {
							t = this.id;
							return
						}
					});
					return
				}
			}), $(this).addClass("childModule"), $(this).attr("data-parentModule", t))
		})
	}
}
function Show(n, t, i) {
	var f = n.id.replace("lnkViewInfo", ""),
		u = document.getElementById(f + t),
		e = document.getElementById(f + i),
		r = f.replace("_", "");
	return u == null || u == undefined ? $("[data-parentmodule=" + r + "]").eq(0).is(":visible") ? ($("[data-parentmodule=" + r + "]").hide(), ShowText(n, "short")) : ($("[data-parentmodule=" + r + "]").show(), ShowText(n, "long")) : u.style.display == "block" ? (u.style.display = "none", e.style.display = "block", ShowText(n, "short"), $("[data-parentmodule=" + r + "]").length > 0 && $("[data-parentmodule=" + r + "]").hide()) : (u.style.display = "block", e.style.display = "none", ShowText(n, "long"), $("[data-parentmodule=" + r + "]").length > 0 && $("[data-parentmodule=" + r + "]").show()), DisplayTopNavigation(r), $("html, body").animate({
		scrollTop: $("#" + r).offset().top - 1
	}, "slow"), !1
}
function ShowOnKeyPress(n, t, i) {
	if (window.event.keyCode == 13) {
		var r = n.childNodes[0];
		return Show(r, t, i), !1
	}
}
function ShowText(n, t) {
	t == "long" && (n.innerHTML = viewSummaryText, n.title = viewSummaryTitle, $(n).parent().attr("title", viewSummaryTitle));
	t == "short" && (n.innerHTML = learnMoreText, n.title = learnMoreTitle, $(n).parent().attr("title", learnMoreTitle), $("#" + n.id.split("_")[0] + ".LearnMoreNavigation").css("background-image", "url(payloadGuid=67068889-9e95-4fd0-9d14-e5b74e5f4d26)"))
}
function DisplayTopNavigation(n) {
	n == undefined || n == null ? $("div.TopNavigation").each(function() {
		$(this).offset().top > $(window).height() ? $(this).css("visibility", "visible") : $(this).css("visibility", "hidden")
	}) : ($("#" + n + "> div > div.TopNavigation").offset().top > $(window).height() ? $("#" + n + "> div > div.TopNavigation").css("visibility", "visible") : $("#" + n + "> div > div.TopNavigation").css("visibility", "hidden"), $("[data-parentmodule=" + n + "]").length > 0 && $("[data-parentmodule=" + n + "]").each(function() {
		var n = this.id;
		$("#" + n + "> div > div.TopNavigation").offset().top > $(window).height() ? $("#" + n + "> div > div.TopNavigation").css("visibility", "visible") : $("#" + n + "> div > div.TopNavigation").css("visibility", "hidden")
	}))
}
function CreateModules() {
	var n = "";
	$("#divModuleDescriptionList").find(".divModuleDescription").each(function() {
		var t = $(this).find("#moduleName").eq(0).text();
		t == "mainhowweusepersonaldatamodule" || t == "mainhowtoaccesscontrolyourdatamodule" || t == "maincookiessimilartechnologiesmodule" || t == "mainmicrosoftaccountmodule" || t == "mainbingmodule" || t == "maincortanamodule" || t == "mainmainmodule" || t == "mainofficemodule" || t == "mainsilverlightmodule" || t == "mainskypemodule" || t == "mainwindowsmodule" || t == "mainadvertisingidmodule" || t == "maininputpersonalizationmodule" || t == "mainsyncsettingsmodule" || t == "mainupdateservicesmodule" || t == "mainwindowsappsmodule" || t == "mainwindowsstoremodule" || t == "mainxboxmodule" ? (n += "<div class='page m-b-bl' id='" + t + "'>", n += "<a name='" + t + "'><\/a>") : n += "<div class='page m-b-bl' id='" + t + "'>";
		n += "<div class='div_heading_OnePSTemplete header-small'><label class='CollectingYourInfo'>" + $(this).find("#Header").eq(0).text() + "<\/label><label class='CollectingYourInfoRightNav'>" + $(this).find("#navigationHeader").eq(0).text() + "<\/label><\/div><hr><div id='" + t + "_ShortDescription'><label class='Description'>" + $(this).find("#ShortDescription").eq(0).html() + "<\/label><\/div>";
		$(this).find("#LongDescription").length > 0 && $(this).find("#LongDescription").eq(0).html() != null && $(this).find("#LongDescription").eq(0).html().trim() != "" && (n += "<div id='" + t + "_LongDescription' style='display: none;'><label class='Description'>" + $(this).find("#LongDescription").eq(0).html() + "<\/label><\/div>");
		n += "<div id='wrapperModuleFooter'>";
		$(this).find("#LongDescription").length > 0 && $(this).find("#LongDescription").eq(0).html() != null && $(this).find("#LongDescription").eq(0).html().trim() != "" && (n += "<div class='LearnMoreNavigation' id='" + t + "learn_more'><a tabindex='0' onkeypress='javascript:return ShowOnKeyPress(this,&quot;LongDescription&quot;,&quot;ShortDescription&quot;);'><label class='learnMoreLabel' id='" + t + "_lnkViewInfo' onclick='javascript:Show(this,&quot;LongDescription&quot;,&quot;ShortDescription&quot;);'>" + learnMoreText + "<\/label><\/a><\/div>");
		(t == "mainotherimportantprivacyinformationmodule" || t == "mainmicrosofthealthservicesmodule" || t == "mainenterprisedeveloperproductsmodule" || t == "mainprodcommproductsmodule" || t == "mainsearchaimodule" || t == "mainentertainmentmodule" || t == "mainwindowsmodule") && (n += "<div class='LearnMoreNavigation' id='" + t + "learn_more'><a tabindex='0' onkeypress='javascript:return ShowOnKeyPress(this,&quot;LongDescription&quot;,&quot;ShortDescription&quot;);'><label class='learnMoreLabel' id='" + t + "_lnkViewInfo' onclick='javascript:Show(this,&quot;LongDescription&quot;,&quot;ShortDescription&quot;);'>" + learnMoreText + "<\/label><\/a><\/div>");
		n += "<div class='TopNavigation'><a title='Go to top of page' id='lnkGoTop' href='#'><span title='Top of page' class='psp_top_of_page' id='psp_top_of_page'>返回页首<\/span><span><i class='icon-up m-l-md'><\/i><\/span><\/a><\/div><\/div><\/div>"
	});
	$(".div_content").after("<div id='statementContent' style='display:none;' />");
	$("#statementContent").html($(".div_content").html());
	$(".div_content").eq(0).html(n)
}
function AddServiceSpecificFeaturesTile() {
	if ($("#dvServicesAgreement").length > 0 && $("#dvServicesAgreement")[0].innerHTML.trim() != "") {
		var n = $("#dvServicesAgreement")[0].innerHTML;
		$("#div" + n).before("<div class='dvServiceAgreementTile m-b-md m-t-bl body-tight-2'>" + serviceSpecificDetails + ":<\/div>");
		$("#" + n).before("<div class='dvServiceAgreementHeader header-small m-b-bl'>" + serviceSpecificDetails + ":<\/div>")
	}
}
function AddWindowsDevicesServicesTile() {
	if ($("#dvWindowsDevices").length > 0 && $("#dvWindowsDevices")[0].innerHTML.trim() != "") {
		var n = $("#dvWindowsDevices")[0].innerHTML;
		$("#div" + n).before("<div class='dvWindowsDevicesTile m-b-md m-t-bl body-tight-2'>" + windowsDevicesServices + ":<\/div>");
		$("#" + n).before("<div class='dvWindowsDevicesHeader header-small m-b-bl'>" + windowsDevicesServices + ":<\/div>")
	}
}
var urlParts = null,
	ieVersion;
urlParts = window.location.href.toLowerCase().indexOf("/eu-privacystatement") > -1 ? window.location.href.toLowerCase().split("/eu-privacystatement")[0].split("/") : window.location.href.toLowerCase().indexOf("/korea-privacystatement") > -1 ? window.location.href.toLowerCase().split("/korea-privacystatement")[0].split("/") : window.location.href.toLowerCase().split("/privacystatement")[0].split("/");
var locale = urlParts[urlParts.length - 1],
	serviceSpecificDetails = "Service specific details",
	windowsDevicesServices = "Windows, Devices, and Related Services",
	expandText = "展开",
	collapseText = "折叠",
	learnMoreText = "了解详细信息",
	viewSummaryText = "查看摘要",
	learnMoreTitle = "了解详细信息",
	viewSummaryTitle = "查看摘要",
	selfCertifyCompliance = "we_self_certify_compliance_with";
String.prototype.trim = function() {
	return this.replace(/^\s+|\s+$/g, "")
};
$(document).ready(function() {
	function t() {
		window.location.hash.length > 0 && ShowSelectedComponent(this, window.location.hash.substring(1, window.location.hash.length))
	}
	var n = $('meta[name="MscomContentLocale"]').attr("content").toLowerCase();
	document.dir = n == "fa-ir" || n == "he-il" || n == "ku-arab-iq" || n == "pa-arab-pk" || n == "prs-af" || n == "sd-arab-pk" || n == "ug-cn" || n == "ur-pk" || n.substring(0, 3) == "ar-" ? "rtl" : "ltr";
	CreateModules();
	InitializePage();
	window.location.search.indexOf("PrintView") != -1 && (PrintWindow(), $("div.grid").append("<div class='row'><div class='col-1-1'><div class='row'><div class='m-col-16-24 xl-col-12-24 print_header_content'><\/div><\/div><\/div><\/div>"), $("div.grid").append("<div class='row'><div class='col-1-1'><div class='row'><div class='m-col-16-24 xl-col-12-24 print_content'><\/div><\/div><\/div><\/div>"), $("#ShortDescription").clone().appendTo("div.print_header_content"), $("div.div_content").clone().appendTo("div.print_content"), $("div.header_content ").hide(), $("div.full_content").hide(), window.print());
	t();
	window.onhashchange = t;
	n != "en-us" && n != "es-mx" && $("[market='en-US']").remove();
	(n != "hi-in" || n != "as-in" || n != "bn-in" || n != "gu-in" || n != "kn-in" || n != "kok-in" || n != "ml-in" || n != "mr-in" || n != "or-in" || n != "pa-in" || n != "ta-in" || n != "te-in" || n != "en-in") && ($("#indian_market_email_contact").length > 0 && $("#indian_market_email_contact").remove(), $("#indian_market_address_contact").length > 0 && $("#indian_market_address_contact").remove())
});
ieVersion = function() {
	for (var i, n = 3, t = document.createElement("div"), r = t.getElementsByTagName("i"); t.innerHTML = "<!--[if gt IE " + ++n + "]><i><\/i><![endif]-->", r[0];);
	return n > 4 ? n : i
}()