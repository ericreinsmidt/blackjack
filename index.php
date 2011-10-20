<html>
<head>
	<link rel="stylesheet" type="text/css" href="css/blackjack.css" />
	<script type="text/javascript" src="js/blackjack.js"></script>
</head>

<body>

<div id='wrapper'>
	
	<div id='content'>

		<div id='felt'>

			<div id='dealer_wins'>The Dealer Wins!</div>
			<div id='player_wins'>The Player Wins!</div>
			<div id='pushed'>You Pushed!</div>

			<div id='dealer_score'>Dealer Score: 0</div>

			<div class='clear'></div>

			<div id='dealer_cards'>
				<div id='dealers_first' class='card_border'></div>
				<div id='dealers_second' class='card_border'></div>
			</div>

			<div class='clear'></div>
			
			<div id='player_score'>Player Score: 0</div>

			<div class='clear'></div>

			<div id='player_cards'>
				<div id='players_first' class='card_border'></div>
				<div id='players_second' class='card_border'></div>
			</div>
			<div class='clear'></div>

			<div id='deal_button'>
				<input value='Deal' type='button' onclick='deal();' />
				<input value='Hit' type='button' onclick='hit();' />
				<input value='Stand' type='button' onclick='stay();' />
			</div>

		</div>

	</div>

</div>

</body>

</html>