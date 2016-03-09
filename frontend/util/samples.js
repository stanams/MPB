var context = new AudioContext() || new webkitAudioContext();
var $ = require('jquery');

$(function()
{
	$('div.note-key').each(function()
		{
			addAudioProperties(this);
		});

	$('div.note-key').click(function()
		{
			this.play();
		});

		$('section#cp button').click(function()
		{
			var v = $(this).parent().data('pad'),
				toggle = $(this).text(),
				pad = $('#' + v)[0];
				$(this).text($(this).data('toggleText')).data('toggleText', toggle);
				($(this).val() === 'false') ? $(this).val('true') : $(this).val('false');
				switch ($(this)[0].className)
				{
					case 'loop-button':
						pad.stop();
						pad.loop = ($(this).val() == 'false') ? false : true;
						break;
					case 'reverb-button':
						pad.stop();
						pad.reverb = ($(this).val() == 'false') ? false : true;
						break;
					case 'filter-button':
						pad.stop();
						pad.filter = ($(this).val() == 'false') ? false : true;
						$(this).parent().children('.filter-group').toggleClass('faded');
						break;
					default:
						break;
				}
		});
});

function reverbObject (url)
{
  this.source = url;
  loadAudio(this, url);
}

function loadAudio(object, url)
	{
 	var request = new XMLHttpRequest();
	request.open('GET', url, true);
 	request.responseType = 'arraybuffer';

	request.onload = function() {
		context.decodeAudioData(request.response, function(buffer) {
      		object.buffer = buffer;
    	});
  	}
  	request.send();
}

function addAudioProperties(object)
{
	object.name = object.id;
	object.source = $(object).data('sound');
	loadAudio(object, object.source);
	object.volume = context.createGain();
	object.loop = false;
	object.reverb = false;
	object.filter = false;
	object.fqValue = 350;
	object.qValue = 500;
	object.play = function ()
		{
			var s = context.createBufferSource();
		  	s.buffer = object.buffer;
		  	s.connect(object.volume);
		  	if(this.reverb === true)
			  	{
			  		this.convolver = context.createConvolver();
			  		this.convolver.buffer = irHall.buffer;
			  		this.volume.connect(this.convolver);
			  		this.convolver.connect(context.destination);
			  	} else if(this.convolver) {
			  		this.volume.disconnect(0);
			  		this.convolver.disconnect(0);
			  		this.volume.connect(context.destination);
			  	} else {
			  		this.volume.connect(context.destination);
			  	}
			  	if(this.filter === true)
			  	{
			  		this.biquad = context.createBiquadFilter();
			  		this.biquad.type = this.biquad.LOWPASS;
			  		this.biquad.frequency.value = this.fqValue;
			  		this.biquad.Q.value = this.qValue;

			  		if(this.reverb === true)
			  		{
			  			this.convolver.disconnect(0);
			  			this.convolver.connect(this.biquad);
			  			this.biquad.connect(context.destination);
			  		} else {
			  			this.volume.disconnect(0);
			  			this.volume.connect(this.biquad);
			  			this.biquad.connect(context.destination);
			  		}
			  	} else {
			  		if(this.biquad)
			  		{
			  			if(this.reverb === true)
			  			{
			  				this.biquad.disconnect(0);
			  				this.convolver.disconnect(0);
			  				this.convolver.connect(context.destination);
			  			} else {
			  				this.biquad.disconnect(0);
			  				this.volume.disconnect(0);
			  				this.volume.connect(context.destination);
			  			}
			  		}
			  	}
		  	s.loop = object.loop;
		  	s.start(0);
		  	object.s = s;
		}
	object.stop = function ()
			{
				if(object.s) object.s.stop();
			}
}
