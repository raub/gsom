import QtQuick 2.7


Text {
	
	signal clicked
	
	text: qsTr('Button')
	
	font.pixelSize: 16
	font.bold: true
	color: clickable.containsMouse ? 'yellow' : 'steelblue'
	
	MouseArea {
		id: clickable
		hoverEnabled: true
		anchors.fill: parent
		onClicked: parent.clicked()
	}
	
}
