
var images = [];
for (var c = 0; c < 8; c++) {
	images[c]='./coverflow/n0'+ (c+1) +'.jpg';
}

var rowData = [];
var data = ['あああ', 'いいい', 'ううう', 'えええ', 'おおお', 'かかか', 'ききき'];


for (var i = 0; i < data.length; i++) {
	// row
	var row = Ti.UI.createTableViewRow({
		selectedBackgroundColor : '#fff',
		className :'datarow',
		
	});
        
    // title
    var title = Ti.UI.createLabel({
        text:data[i]
    });
    title.rowNum = i;
    row.add(title);
	
	// add row
	rowData.push(row);
}



// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 1',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win1.add(label1);

var coverView = Ti.UI.iOS.createCoverFlowView({
	images: images,
    backgroundColor: '#000',
    height:200,
    top:0
});

var tableView = Ti.UI.createTableView({
	data : rowData,
	top:200
});

win1.add(coverView);
win1.add(tableView);



//
//  add tabs
//
tabGroup.addTab(tab1);  
tab1.setBadge(10); 

// open tab group
tabGroup.open();
