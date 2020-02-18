var achievements = [
	{
		'title': 'Starter',
		'help': 'Complete your first Project',
		'check': function(){
			return Stats.projects >= 1
		},
		'done': false
	},
	{
		'title': 'Millionaire',
		'help': 'Have at least ' + Core.numberFormat(1000000),
		'check': function(){
			return Stats.money >= 1000000
		},
		'done': false
	},
	{
		'title': 'Fully Upgraded',var achievements = [
	{
		'title': 'Starter',
		'help': 'Complete your first Project',
		'check': function(){
			return Stats.projects >= 1
		},
		'done': false
	},
	{
		'title': 'Hitting Singles',
		'help': 'Complete 10 Projects',
		'check': function(){
			return Stats.projects >= 10
		},
		'done': false,
		'hidden': true
	},
	{
		'title': 'Project Planner',
		'help': 'Complete 100 Projects',
		'check': function(){
			return Stats.projects >= 100
		},
		'done': false,
		'hidden': true
	},
	{
		'title': 'With 4 Hands',
		'help': 'Unlock a parallel Project',
		'check': function(){
			return Stats.improvements.indexOf('addProject') !== -1
		},
		'done': false
	},
	{
		'title': 'Lazyness',
		'help': 'Get the improvement "Click no more"',
		'check': function(){
			return Core.hasImprovement('autoStartProjects')
		},
		'done': false,
		'hidden': true
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
		'title': 'The Gambler',
		'help': 'Spend ' +  Core.numberFormat(100) + ' on the Lottery',
		'check': function(){
			return Stats.ticketsBought * Core.base.lotteryTicketCost >= 100
		},
		'done': false
	},
	{
		'title': 'Lottery Addict',
		'help': 'Spend ' + Core.numberFormat(200) + ' on the Lottery',
		'check': function(){
			return Stats.ticketsBought >= 200
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
		'title': 'Daddy Needs a New Pair of Shoes',
		'help': 'Win the lottery',
		'check': function(){
			return Stats.lotteryWon
		},
		'done': false
	},
	{
		'title': 'Fully Upgraded',
		'help': 'Upgrade your computer to version 20',
		'check': function(){
			return Stats.computerVersion >= 20
		},
		'done': false
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
		'title': 'Holy Shazbot!',
		'help': 'Get the ultimate dev-mainframe',
		'check': function(){
			return Shop.items['devmainframe'].owned
		},
		'done': false
	},
	{
		'title': 'Millionaire',
		'help': 'Have at least ' + Core.numberFormat(1000000),
		'check': function(){
			return Stats.money >= 1000000
		},
		'done': false
	},
	{
		'title': 'Need some change?',
		'help': 'Earn your money up to ' + Core.numberFormat(10000000),
		'check': function(){
			return Stats.money >= 10000000
		},
		'done': false,
		'hidden': true
	},
	{
		'title': 'The world is yours',
		'help': 'Raise your money up to ' + Core.numberFormat(100000000),
		'check': function(){
			return Stats.money >= 100000000
		},
		'done': false,
		'hidden': true
	},
	{
		'title': 'I like this job',
		'help': 'Get the same job twice at the same time',
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
		'title': 'Multitasker',
		'help': 'Have the max number of simultaneous Jobs',
		'check': function(){
			return Stats.jobs.length === Core.base.maxJobs
		},
		'done': false,
		'hidden': true
	},
	{
		'title': 'Take This Job and Shove It!',
		'help': 'Drop all your jobs',
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
		'title': 'Holy glory',
		'help': 'Click 1 glorius pixel',
		'check': function(){
			return Core.base.wildPixelTypes.glorius.poped >= 1
		},
		'done': false,
		'hidden': true
	},
	{
		'title': 'Command Prompt Addict',
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
		'title': 'Keys on fire',
		'help': 'Make ' + Core.numberFormat(10000) + ' with the command prompt',
		'check': function(){
			return Stats.commandPrompMoneyEarned >= 10000
		},
		'done': false,
		'hidden': true
	},
	{
		'title': 'Key blender',
		'help': 'Make ' + Core.numberFormat(100000) + ' with the command prompt',
		'check': function(){
			return Stats.commandPrompMoneyEarned >= 100000
		},
		'done': false,
		'hidden': true
	},
	{
		'title': 'Command guru',
		'help': 'Make ' + Core.numberFormat(1000000) + ' with the command prompt',
		'check': function(){
			return Stats.commandPrompMoneyEarned >= 1000000
		},
		'done': false,
		'hidden': true
	},
		{
		'title': 'I r t3h l33t h4x0rz',
		'help': 'You have to hack this achievement',
		'check': function(){ 
			return Stats.hackedAchievement
		},
		'done': false
	},
	{
		'title': 'Caffeine Addict',
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
		'title': 'Taurine Addict',
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
		'help': 'Upgrade your computer to version 20',
		'check': function(){
			return Stats.computerVersion >= 20
		},
		'done': false
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
		'title': 'Holy Shazbot!',
		'help': 'Get the ultimate dev-mainframe',
		'check': function(){
			return Shop.items['devmainframe'].owned
		},
		'done': false
	},
	{
		'title': 'Take This Job and Shove It!',
		'help': 'Drop all your jobs',
		'check': function(){
			return Stats.jobs.length <= 0
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
		'title': 'With 4 Hands',
		'help': 'Unlock a parallel Project',
		'check': function(){
			return Stats.improvements.indexOf('addProject') !== -1
		},
		'done': false
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
		'title': 'The Gambler',
		'help': 'Spend ' +  Core.numberFormat(100) + ' on the Lottery',
		'check': function(){
			return Stats.ticketsBought * Core.base.lotteryTicketCost >= 100
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
		'title': 'Daddy Needs a New Pair of Shoes',
		'help': 'Win the lottery',
		'check': function(){
			return Stats.lotteryWon
		},
		'done': false
	},
	{
		'title': 'I r t3h l33t h4x0rz',
		'help': 'You have to hack this achievement',
		'check': function(){ 
			return Stats.hackedAchievement
		},
		'done': false
	},
	{
		'title': 'Caffeine Addict',
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
		'title': 'Taurine Addict',
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
		'title': 'Lottery Addict',
		'help': 'Spend ' + Core.numberFormat(200) + ' on the Lottery',
		'check': function(){
			return Stats.ticketsBought >= 200
		},
		'progress': function(){
			return '' + Stats.ticketsBought + '/' + 200
		},
		'done': false
	},
	{
		'title': 'Command Prompt Addict',
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
		'title': 'Shine Bright Like a Diamond',
		'help': 'Buy the "I\'m Rich Bitch!" diamond plate',
		'check': function(){
			return Shop.items.imRichDiamondPlate.owned
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
		'title': 'What Would You Say You Do Here?',
		'help': 'Get a Wild Pixel that does nothing',
		'check': function(){
			return Core.base.wildPixelTypes.passive.poped >= 1
		},
		'done': false
	},





	{
		'title': 'Multitasker',
		'help': 'Have the max number of simultaneous Jobs',
		'check': function(){
			return Stats.jobs.length === Core.base.maxJobs
		},
		'done': false,
		'hidden': true
	},
	{
		'title': 'Hitting Singles',
		'help': 'Complete 10 Projects',
		'check': function(){
			return Stats.projects >= 10
		},
		'done': false,
		'hidden': true
	},
	{
		'title': 'Project Planner',
		'help': 'Complete 100 Projects',
		'check': function(){
			return Stats.projects >= 100
		},
		'done': false,
		'hidden': true
	},
	{
		'title': 'Need some change?',
		'help': 'Earn your money up to ' + Core.numberFormat(10000000),
		'check': function(){
			return Stats.money >= 10000000
		},
		'done': false,
		'hidden': true
	},
	{
		'title': 'The world is yours',
		'help': 'Raise your money up to ' + Core.numberFormat(100000000),
		'check': function(){
			return Stats.money >= 100000000
		},
		'done': false,
		'hidden': true
	},
	{
		'title': 'Keys on fire',
		'help': 'Make ' + Core.numberFormat(10000) + ' with the command prompt',
		'check': function(){
			return Stats.commandPrompMoneyEarned >= 10000
		},
		'done': false,
		'hidden': true
	},
	{
		'title': 'Key blender',
		'help': 'Make ' + Core.numberFormat(100000) + ' with the command prompt',
		'check': function(){
			return Stats.commandPrompMoneyEarned >= 100000
		},
		'done': false,
		'hidden': true
	},
	{
		'title': 'Command guru',
		'help': 'Make ' + Core.numberFormat(1000000) + ' with the command prompt',
		'check': function(){
			return Stats.commandPrompMoneyEarned >= 1000000
		},
		'done': false,
		'hidden': true
	},
	{
		'title': 'Holy glory',
		'help': 'Click 1 glorius pixel',
		'check': function(){
			return Core.base.wildPixelTypes.glorius.poped >= 1
		},
		'done': false,
		'hidden': true
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
		'title': 'Lazyness',
		'help': 'Get the improvement "Click no more"',
		'check': function(){
			return Core.hasImprovement('autoStartProjects')
		},
		'done': false,
		'hidden': true
	},
	{
		'title': 'I like this job',
		'help': 'Get the same job twice at the same time',
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
	}

]
