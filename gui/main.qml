import QtQuick 2.7

Rectangle {
	
	color: 'transparent'
	anchors.fill: parent
	
	Column {
		
		color: 'red'
		anchors.center: parent.center
		
		width : 200
		height: 200
		
		MainButton {
			text: qsTr('Start game')
			anchors.horizontalCenter: parent.horizontalCenter
			anchors.top: parent.top
			anchors.topMargin: 24
		}
		
		MainButton {
			text: qsTr('Join game')
			anchors.horizontalCenter: parent.horizontalCenter
			anchors.top: parent.top
			anchors.topMargin: 24
		}
		
		MainButton {
			text: qsTr('Quit')
			anchors.horizontalCenter: parent.horizontalCenter
			anchors.top: parent.top
			anchors.topMargin: 24
		}
		
	}
}
