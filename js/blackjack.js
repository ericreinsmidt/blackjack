var suits = new Array('&spades;', '&clubs;', '&hearts;', '&diams;');
var ranks = new Array('A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K');
var rand_suit;
var rand_rank;
var rand_deg;
var card_id = 1;
var locked = false;
var bust = false;
var dealer_score = 0;
var player_score = 0;
var num_aces = 0;
var hit_cards = 0;
var dealer_aces = 0;
var value;
var card_html = '';

function createCards(el, num) {
	value = 0;
	rand_suit = Math.floor(Math.random()*4);
	rand_rank = Math.floor(Math.random()*13);
	rand_deg = Math.floor(Math.random()*50-25);
	getPips(ranks[rand_rank]);
	if (ranks[rand_rank] == 'J' || ranks[rand_rank] == 'Q' || ranks[rand_rank] == 'K') {
		value = 10;
	} else if (ranks[rand_rank] == 'A') {
		value = 11;
		if (num == 1) {
			num_aces++;
		}
		if (num == 0) {
			dealer_aces++;
		}
	} else
		value = parseInt(ranks[rand_rank]);
	if (num == 0) {
		dealer_score += value;
	}
	if (num == 1) {
		player_score += value;
	}
	if (rand_suit === 0 || rand_suit === 1) {
		document.getElementById(el.id).style.color = '#000';
	}
	if (rand_suit === 2 || rand_suit === 3) {
		document.getElementById(el.id).style.color = '#800000';
	}
	document.getElementById(el.id).style.webkitTransform = 'rotate(' + rand_deg + 'deg)';
	document.getElementById(el.id).style.MozTransform = 'rotate(' + rand_deg + 'deg)';
	document.getElementById(el.id).style.msTransform = 'rotate(' + rand_deg + 'deg)';
	document.getElementById(el.id).style.OTransform = 'rotate(' + rand_deg + 'deg)';
	document.getElementById(el.id).style.transform = 'rotate(' + rand_deg + 'deg)';
	document.getElementById(el.id).style.visibility = "visible";
	if (num == 2) {
		document.getElementById(el.id).innerHTML = "<div class='card_back'></div>";
	} else
	document.getElementById(el.id).innerHTML = "<div class='card_top'><span>" + ranks[rand_rank] + "</span><span>" + suits[rand_suit] + "</span></div>" + card_html + "<div class='card_bottom'><span>" + ranks[rand_rank] + "</span><span>" + suits[rand_suit] + "</span></div>";
}

function deal() {
	resetAll();
	createCards(dealers_first, 0);
	createCards(dealers_second, 2);
	createCards(players_first, 1);
	createCards(players_second, 1);
	checkScores();
}

function hit() {
	if (locked == false) {
		document.getElementById('player_cards').innerHTML += "<div id='" + card_id + "' class='card_border'></div>";
		rand_suit = Math.floor(Math.random()*4);
		rand_rank = Math.floor(Math.random()*13);
		rand_deg = Math.floor(Math.random()*50-25);
		getPips(ranks[rand_rank]);
		if (ranks[rand_rank] == 'J' || ranks[rand_rank] == 'Q' || ranks[rand_rank] == 'K') {
			value = 10;
		} else if (ranks[rand_rank] == 'A') {
			value = 11;
			num_aces++;
		} else
			value = parseInt(ranks[rand_rank]);
		player_score += value;
		if (rand_suit === 0 || rand_suit === 1) {
			document.getElementById(card_id).style.color = '#000';
		}
		if (rand_suit === 2 || rand_suit === 3) {
			document.getElementById(card_id).style.color = '#800000';
		}
		document.getElementById(card_id).style.webkitTransform = 'rotate(' + rand_deg + 'deg)';
		document.getElementById(card_id).style.MozTransform = 'rotate(' + rand_deg + 'deg)';
		document.getElementById(card_id).style.msTransform = 'rotate(' + rand_deg + 'deg)';
		document.getElementById(card_id).style.OTransform = 'rotate(' + rand_deg + 'deg)';
		document.getElementById(card_id).style.transform = 'rotate(' + rand_deg + 'deg)';
		document.getElementById(card_id).style.visibility = "visible";
		document.getElementById(card_id).innerHTML = "<div class='card_top'><span>" + ranks[rand_rank] + "</span><span>" + suits[rand_suit] + "</span></div>" + card_html + "<div class='card_bottom'><span>" + ranks[rand_rank] + "</span><span>" + suits[rand_suit] + "</span></div>";
		card_id++;
		hit_cards++;
		if (hit_cards == 3) {
			checkScores();
			if (player_score < 22) {
				locked = true;
				hasFive();
			}
		}
	}
	checkScores();
}

function dealerHit() {
	document.getElementById('dealer_cards').innerHTML += "<div id='" + card_id + "' class='card_border'></div>";
	rand_suit = Math.floor(Math.random()*4);
	rand_rank = Math.floor(Math.random()*13);
	rand_deg = Math.floor(Math.random()*50-25);
	getPips(ranks[rand_rank]);
	if (ranks[rand_rank] == 'J' || ranks[rand_rank] == 'Q' || ranks[rand_rank] == 'K') {
		value = 10;
	} else if (ranks[rand_rank] == 'A') {
		value = 11;
		dealer_aces++;
	} else
		value = parseInt(ranks[rand_rank]);
	dealer_score += value;
	if (rand_suit === 0 || rand_suit === 1) {
		document.getElementById(card_id).style.color = '#000';
	}
	if (rand_suit === 2 || rand_suit === 3) {
		document.getElementById(card_id).style.color = '#800000';
	}
	document.getElementById(card_id).style.webkitTransform = 'rotate(' + rand_deg + 'deg)';
	document.getElementById(card_id).style.MozTransform = 'rotate(' + rand_deg + 'deg)';
	document.getElementById(card_id).style.msTransform = 'rotate(' + rand_deg + 'deg)';
	document.getElementById(card_id).style.OTransform = 'rotate(' + rand_deg + 'deg)';
	document.getElementById(card_id).style.transform = 'rotate(' + rand_deg + 'deg)';
	document.getElementById(card_id).style.visibility = "visible";
	document.getElementById(card_id).innerHTML = "<div class='card_top'><span>" + ranks[rand_rank] + "</span><span>" + suits[rand_suit] + "</span></div>" + card_html + "<div class='card_bottom'><span>" + ranks[rand_rank] + "</span><span>" + suits[rand_suit] + "</span></div>";
	card_id++;
	checkDealer();
}

function stay() {
	if (locked == false) {
		createCards(dealers_second, 0);
		checkDealer();	
	}
	locked = true;
}

function checkScores() {
	document.getElementById('dealer_score').innerHTML = 'Dealer Score: ' + dealer_score;
	document.getElementById('player_score').innerHTML = 'Player Score: ' + player_score;
	if (dealer_score > 21 && dealer_aces > 0) {
		dealer_score -= 10;
		dealer_aces--;
		checkScores();
	}
	if (player_score > 21 && num_aces == 0) {
		bust = true;
		locked = true;
		findWinner();
	}
	if (player_score > 21 && num_aces > 0) {
		player_score -= 10;
		num_aces--;
		checkScores();
	}
}

function checkDealer() {
	checkScores();
	if (dealer_score < 17) {
		dealerHit();
	} else {
		findWinner();
	}
}

function hasFive() {
	document.getElementById('player_wins').style.visibility = "visible";
}

function findWinner() {
	if (bust != true) {
		if (dealer_score < 22 && dealer_score > player_score) {
			document.getElementById('dealer_wins').style.visibility = "visible";
		} else if (player_score == dealer_score) {
			document.getElementById('pushed').style.visibility = "visible";
		} else
			document.getElementById('player_wins').style.visibility = "visible";
	} else {
		document.getElementById('dealer_wins').style.visibility = "visible";
	}
}

function resetAll() {
	document.getElementById('dealer_wins').style.visibility = "hidden";
	document.getElementById('player_wins').style.visibility = "hidden";
	document.getElementById('pushed').style.visibility = "hidden";
	document.getElementById('dealer_cards').innerHTML = "<div id='dealers_first' class='card_border'></div><div id='dealers_second' class='card_border'></div>";
	document.getElementById('player_cards').innerHTML = "<div id='players_first' class='card_border'></div><div id='players_second' class='card_border'></div>";
	num_aces = 0;
	dealer_aces = 0;
	card_id = 1;
	hit_cards = 0;
	dealer_score = 0;
	player_score = 0;
	locked = false;
	bust = false;
}

function getPips(el) {
	card_html = '';
	if (el == 'K') {
		card_html = "<div class='king'></div>";
	}
	if (el == 'Q') {
		card_html = "<div class='queen'></div>";
	}
	if (el == 'J') {
		card_html = "<div class='jack'></div>";
	}
	if (el == 10) {
		card_html = "<div class='L1'>"+suits[rand_suit]+"</div><div class='L2'>"+suits[rand_suit]+"</div><div class='L4'>"+suits[rand_suit]+"</div><div class='L5'>"+suits[rand_suit]+"</div><div class='M2'>"+suits[rand_suit]+"</div><div class='M4'>"+suits[rand_suit]+"</div><div class='R1'>"+suits[rand_suit]+"</div><div class='R2'>"+suits[rand_suit]+"</div><div class='R4'>"+suits[rand_suit]+"</div><div class='R5'>"+suits[rand_suit]+"</div>";
	}
	if (el == 9) {
		card_html = "<div class='L1'>"+suits[rand_suit]+"</div><div class='L2'>"+suits[rand_suit]+"</div><div class='L4'>"+suits[rand_suit]+"</div><div class='L5'>"+suits[rand_suit]+"</div><div class='M3'>"+suits[rand_suit]+"</div><div class='R1'>"+suits[rand_suit]+"</div><div class='R2'>"+suits[rand_suit]+"</div><div class='R4'>"+suits[rand_suit]+"</div><div class='R5'>"+suits[rand_suit]+"</div>";
	}
	if (el == 8) {
		card_html = "<div class='L1'>"+suits[rand_suit]+"</div><div class='L3'>"+suits[rand_suit]+"</div><div class='L5'>"+suits[rand_suit]+"</div><div class='M2'>"+suits[rand_suit]+"</div><div class='M4'>"+suits[rand_suit]+"</div><div class='R1'>"+suits[rand_suit]+"</div><div class='R3'>"+suits[rand_suit]+"</div><div class='R5'>"+suits[rand_suit]+"</div>";
	}
	if (el == 7) {
		card_html = "<div class='L1'>"+suits[rand_suit]+"</div><div class='L3'>"+suits[rand_suit]+"</div><div class='L5'>"+suits[rand_suit]+"</div><div class='M2'>"+suits[rand_suit]+"</div><div class='R1'>"+suits[rand_suit]+"</div><div class='R3'>"+suits[rand_suit]+"</div><div class='R5'>"+suits[rand_suit]+"</div>";
	}
	if (el == 6) {
		card_html = "<div class='L1'>"+suits[rand_suit]+"</div><div class='L3'>"+suits[rand_suit]+"</div><div class='L5'>"+suits[rand_suit]+"</div><div class='R1'>"+suits[rand_suit]+"</div><div class='R3'>"+suits[rand_suit]+"</div><div class='R5'>"+suits[rand_suit]+"</div>";
	}
	if (el == 5) {
		card_html = "<div class='L1'>"+suits[rand_suit]+"</div><div class='L5'>"+suits[rand_suit]+"</div><div class='M3'>"+suits[rand_suit]+"</div><div class='R1'>"+suits[rand_suit]+"</div><div class='R5'>"+suits[rand_suit]+"</div>";
	}
	if (el == 4) {
		card_html = "<div class='L1'>"+suits[rand_suit]+"</div><div class='L5'>"+suits[rand_suit]+"</div><div class='R1'>"+suits[rand_suit]+"</div><div class='R5'>"+suits[rand_suit]+"</div>";
	}
	if (el == 3) {
		card_html = "<div class='M1'>"+suits[rand_suit]+"</div><div class='M3'>"+suits[rand_suit]+"</div><div class='M5'>"+suits[rand_suit]+"</div>";
	}
	if (el == 2) {
		card_html = "<div class='M1'>"+suits[rand_suit]+"</div><div class='M5'>"+suits[rand_suit]+"</div>";
	}
	if (el == 'A') {
		card_html = "<div class='ace'>"+suits[rand_suit]+"</div>";
	}
}