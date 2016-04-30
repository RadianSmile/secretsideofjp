

var main = function(){ /* to make sure the script runs after page load */

	

		var max_length = 140; /* set the max content length before a read more link will be added */


		if($('.blog-content').html().length > max_length){ /* check for content length */

			var short_content 	= $('.blog-content').html().substr(0,max_length); /* split the content in two parts */
			var long_content	= $('.blog-content').html().substr(max_length);


			$(".blog-content").html(short_content+'<span class="more">...</span>'+
					'<button type="button" class="btn btn-default" id="readMore">Read More</button>'+
					'<span class="more_text" style="display:none;">'+long_content+'</span>');

					$(".blog-content").find('.btn-default').click(function(event){ /* find the a.read_more element within the new html and bind the following code to it */
							event.preventDefault(); /* prevent the a from changing the url */
							$(this).parents('.blog-content').find('.more_text').show(); /* show the .more_text span */
							$(".btn-default").hide();
							$(".more").hide();
					});

		}



}

$(document).ready(main);
