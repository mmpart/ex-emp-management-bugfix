$(function(){
	
	var wordlist = [
		"山田",
		"鈴木",
		"佐藤",
		"渡辺",
		"吉田",
		"高橋",
		"田中",
		"伊藤",
		"山本",
		"小林",
		"加藤",
		"太郎",
		"花子",
		"一子",
		"一郎",
		"次子",
		"次郎",
		"三子",
		"三郎",
		"四子",
		"四郎",
		"五子",
		"五郎",
		"六子",
		"六郎",
		"七子",
		"七郎",
		"八子",
		"八郎",
		"九子",
		"九郎",
		"十子",
		"十郎"
	];
	
	$("#hogehoge").autocomplete({
		source: wordlist
	});
});