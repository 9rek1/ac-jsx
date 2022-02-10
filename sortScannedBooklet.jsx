/**
 * 見開きでスキャンして分割した小冊子データを正しい順番に並び替える
 */

// 正しいIndexのリストを作成
var myIndex = [];
for (var i = 0; i < this.numPages; i++) {
  if (i % 4 === 0 || i % 4 === 3) {
    myIndex.push(i);
  }
}

// 並び替え
for (var i = myIndex.length - 1; i >= 0; i--) {
  this.movePage(myIndex[i]);
}
