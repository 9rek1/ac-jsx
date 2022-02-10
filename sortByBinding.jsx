// 右綴じ（左綴じ）としてページの順番を入れ替える
for (var i = 1; i < this.numPages; i += 2) {
  this.movePage(i, i + 1);
}
