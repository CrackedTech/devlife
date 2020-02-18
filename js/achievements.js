var achievements = [
	{
		'title': 'Project Management Assistant',
		'help': 'Complete your first Project',
		'check': function(){
			return Stats.projects >= 1
		},
		'done': false
	},
	{
		'title': 'Project Manager',
		'help': 'Complete 25 Projects',
		'check': function(){
			return Stats.projects >= 25
		},
		'done': false,
	},
	{
		'title': 'Senior Project Manager',
		'help': 'Complete 10 Projects',
		'check': function(){
			return Stats.projects >= 100
		},
		'done': false,
	},
	{
		'title': 'Project Management Director',
		'help': 'Complete 250 Projects',
		'check': function(){
			return Stats.projects >= 250
		},
		'done': false,
	},
	{
		'title': 'Multitasker',
		'help': 'Unlock a parallel Project',
		'check': function(){
			return Stats.improvements.indexOf('addProject') !== -1
		},
		'done': false
	},
	{
		'title': 'And Get Us Some Coffee!',
		'help': 'Get the improvement "Click no more"',
		'check': function(){
			return Core.hasImprovement('autoStartProjects')
		},
		'done': false,
	},
	{
		'title': 'First Time Gambler',
		'help': 'Buy your first Lottery ticket',
		'check': function(){
			return Stats.ticketsBought === 1
		},
		'done': false
	},
	{
		'title': 'Gambling Man(or Woman)',
		'help': 'Spend ' +  Core.numberFormat(100) + ' on the Lottery',
		'check': function(){
			return Stats.ticketsBought * Core.base.lotteryTicketCost >= 100
		},
		'done': false
	},
	{
		'title': 'The Gambler',
		'help': 'Spend ' + Core.numberFormat(250) + ' on the Lottery',
		'check': function(){
			return Stats.ticketsBought >= 250
		},
		'progress': function(){
			return '' + Stats.ticketsBought + '/' + 200
		},
		'done': false
	},
	{
		'title': 'Better Than Nothing I Guess',
		'help': 'Get your first partial Lottery win',
		'check': function(){
			return Stats.partialWon
		},
		'done': false
	},
	{
		'title': 'They Take How Much in Taxes?!',
		'help': 'Win the lottery',
		'check': function(){
			return Stats.lotteryWon
		},
		'done': false
	},
	{
		'title': 'Fully Upgraded',
		'help': 'Upgrade your starting computer to version 20',
		'check': function(){
			return Stats.computerVersion >= 20
		},
		'done': false
		'hidden': true
	},
	{
		'title': 'The New Hotness',
		'help': 'Buy the "Dev-MX300"',
		'check': function(){
			return Shop.items['devmx300'].owned
		},
		'done': false
	},
	{
		'title': 'Welcome to the Pros',
		'help': 'Buy the "Dev-550sx PRO"',
		'check': function(){
			return Shop.items['dev550sx'].owned
		},
		'done': false
	},
	{
		'title': 'I Have the POWER!',
		'help': 'Buy the "dev-mainframe"',
		'check': function(){
			return Shop.items['devmainframe'].owned
		},
		'done': false
	},
	{
		'title': 'I\'m not rich, I\'m comfortable.',
		'help': 'Have at least ' + Core.numberFormat(1000000) + ' at one time',
		'check': function(){
			return Stats.money >= 1000000
		},
		'done': false
	},
	{
		'title': 'Mo Money Mo Problems',
		'help': 'Have at least ' + Core.numberFormat(10000000) + ' at one time', 
		'check': function(){
			return Stats.money >= 10000000
		},
		'done': false,
	},
	{
		'title': 'My Servants Have Servants',
		'help': 'Have at least ' + Core.numberFormat(100000000) + ' at one time',
		'check': function(){
			return Stats.money >= 100000000
		},
		'done': false,
	},
	{
		'title': 'So Nice, I Had to Do It Twice',
		'help': 'Have the same job twice at the same time',
		'check': function(){
			var exists = false
			for(var i = 0, len = Stats.jobs.length; i < len; i++){
				for(var x = (i+1), lenx = Stats.jobs.length; x < lenx; x++){
					if(Stats.jobs[i].name === Stats.jobs[x].name){
						exists = true
						break
					}
				}
				if(exists) break
			}
			return exists
		},
		'done': false,
		'hidden': true
	},
	{
		'title': 'Wage Slave',
		'help': 'Have the max number of simultaneous Jobs',
		'check': function(){
			return Stats.jobs.length === Core.base.maxJobs
		},
		'done': false,
		'hidden': true
	},
	{
		'title': 'Take This Job and Shove It!',
		'help': 'Quit all of your Jobs',
		'check': function(){
			return Stats.jobs.length <= 0
		},
		'done': false
	},
	{
		'title': 'A Wild Pixel Has Appeared!',
		'help': 'Click 1 Wild Pixel',
		'check': function(){
			return Stats.wildPixelsClicked >= 1
		},
		'done': false
	},
	{
		'title': 'Need more luck',
		'help': 'Click 100 wild pixel',
		'check': function(){
			return Stats.wildPixelsClicked >= 100
		},
		'done': false,
		'hidden': true
	},
	{
		'title': 'What Would You Say You Do Here?',
		'help': 'Get a Wild Pixel that does nothing',
		'check': function(){
			return Core.base.wildPixelTypes.passive.poped >= 1
		},
		'done': false
	},
	{
		'title': 'Holy Glory',
		'help': 'Click 1 Glorious Pixel',
		'check': function(){
			return Core.base.wildPixelTypes.glorius.poped >= 1
		},
		'done': false,
		'hidden': true
	},
	{
		'title': 'Hacker Typer',
		'help': 'Type 200 keys in the Terminal',
		'check': function(){
			return Stats.commandPromptKeysPressed >= 200
		},
		'progress': function(){
			return '' + Stats.commandPromptKeysPressed + '/' + 200
		},
		'done': false
	},
	{
		'title': 'Key Spammer',
		'help': 'Make ' + Core.numberFormat(1000) + ' from typing in the Terminal',
		'check': function(){
			return Stats.commandPromptMoneyEarned >= 1000
		},
		'progress': function(){
			return '' + Core.numberFormat(Stats.commandPromptMoneyEarned) + '/' + Core.numberFormat(1000)
		},
		'done': false
	},
	{
		'title': 'Keys on Fire',
		'help': 'Make ' + Core.numberFormat(10000) + ' from typing in the Terminal',
		'check': function(){
			return Stats.commandPrompMoneyEarned >= 10000
		},
		'done': false,
	},
	{
		'title': 'Key Blender',
		'help': 'Make ' + Core.numberFormat(100000) + ' from typing in the Terminal',
		'check': function(){
			return Stats.commandPrompMoneyEarned >= 100000
		},
		'done': false,
	},
	{
		'title': 'Command Guru',
		'help': 'Make ' + Core.numberFormat(1000000) + ' from typing in the Terminal',
		'check': function(){
			return Stats.commandPrompMoneyEarned >= 1000000
		},
		'done': false,
	},
	{
		'title': 'I r t3h l33t h4x0rz',
		'help': 'Hack in your own Achievement',
		'check': function(){ 
			return Stats.hackedAchievement
		},
		'done': false
		'hdden': true
	},
	{
		'title': 'Coffee Shop Junkie',
		'help': 'Buy 50 coffees',
		'check': function(){
			return Stats.coffeesBought >= 50
		},
		'progress': function(){
			return '' + Stats.coffeesBought + '/' + 50
		},
		'done': false
	},
	{
		'title': 'Death By Caffine',
		'help': 'Buy 50 energy drinks',
		'check': function(){
			return Stats.energyDrinksBought >= 50
		},
		'progress': function(){
			return '' + Stats.energyDrinksBought + '/' + 50
		},
		'done': false
	},
	{
		'title': 'Billy the Kid',
		'help': 'Achieve the minimum pulse speed',
		'check': function(){
			return Core.base.pulseDuration <= Core.base.minPulseDuration
		},
		'done': false
	},
	{
		'title': 'Shine Bright Like a Diamond',
		'help': 'Buy the "I\'m Rich Bitch!" diamond plate',
		'check': function(){
			return Shop.items.imRichDiamondPlate.owned
		},
		'done': false
	}

	]
