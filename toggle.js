$(function(){
	var $toggleBtn = $(".showmore > a");

	var $category = $("ul li:gt(5):not(:last)");
	var $contentText = $(".showmore span");

	$contentText.css("background","url(img/down.gif) no-repeat 0 0")
	.text("显示全部品牌");

	$category.hide();


	$toggleBtn.click(function(){
		if ($category.is(":visible")) {

			$category.hide();

			$contentText.css("background","url(img/down.gif) no-repeat 0 0")
			.text("显示全部品牌");

			$("ul li").removeClass("promoted");

		}else{
			$category.show();

			$contentText
			.css("background","url(img/up.gif)no-repeat 0 0")
			.text("精简显示品牌");

			$("ul li").filter(":contains('佳能'),:contains('尼康')")
			.addClass("promoted");
		}
		return false;
	})
})
