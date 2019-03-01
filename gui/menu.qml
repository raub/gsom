import QtQuick 2.7

Rectangle {
	
	color: 'transparent'
	anchors.fill: parent
	
	Column {
		
		anchors.horizontalCenter: parent.horizontalCenter
		anchors.verticalCenter: parent.verticalCenter
		
		width : 200
		height: 200
		
		MainButton {
			text: qsTr('Start game')
			anchors.horizontalCenter: parent.horizontalCenter
			anchors.topMargin: 24
		}
		
		MainButton {
			text: qsTr('Join game')
			anchors.horizontalCenter: parent.horizontalCenter
			anchors.topMargin: 24
		}
		
		MainButton {
			text: qsTr('Quit')
			anchors.horizontalCenter: parent.horizontalCenter
			anchors.topMargin: 24
		}
		
	}
}
