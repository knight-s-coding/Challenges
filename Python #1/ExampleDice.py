import random

money = 1000

def diceRoll():

    #Allows the variable to be changed within the function
    global money

    #User's guess
    print("You have $" + str(money))
    print("What number would you like to bet on? (1-6)")
    betRoll = int(input ("Enter Number: "))

    #User's bet
    print("How much would you like to bet?")
    betMoney = int(input("Enter Ammount: "))

    #User is unable to bet more than they have
    while(betMoney > money):
        print("You don't have enough money for that! You have: $" + str(money) + " Please place another bet!")
        betMoney = int(input("Enter Ammount: "))

    #Randomizes dice value
    dice = random.randint(1, 6)

    #Win and loss conditions
    print("The dice rolled ... " + str(dice) + "!")
    
    if(betRoll == dice):
        print("You win! You have won $" + str(betMoney*2))
        money = money + betMoney*2
        diceRoll()
    else:
        print("You lost!")
        money = money - betMoney
        diceRoll()

#Running the game
try:
    if(money > 0):
        diceRoll()
    elif(money == 0):
        print("You are broke!")
        exit()
    else:
        exit()
except:
    print("Error")