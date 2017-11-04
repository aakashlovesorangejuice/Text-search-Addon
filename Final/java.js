//context menu creation
browser.contextMenus.create({
	title:"Bing",
	contexts:["selection"]
});
//called an API
browser.contextMenus.onClicked.addListener(contextMenuAction);
function contextMenuAction(a,tab){
	const url="https://www.bing.com/search?q="+a.selectionText+"&qs=n&form=QBLH&sp=-1&pq=sdfs&sc=0-0&sk=&cvid=13E5A66E6F9946C691B704EF90B90C3F";
	browser.tabs.create({url: url});
}