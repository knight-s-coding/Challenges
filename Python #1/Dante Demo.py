def AgeCheck():
    name= input("What is your name?\n")
    age = int(input("what is your age?\n"))
    # print("Name: "+name+"\nAge:"+str(age))
    if(age<15):
        print(name+" is young")
    elif(age<20):
        print(name+" is a Teen")
    else:
        print(name+" is old")
# AgeCheck()

def ping():
    check=True
    limit=2
    time=0
    while(check):
        print("ping")
        pong=input()
        if(pong=="pong" & time<limt):
            check=True
        else:
            check=False
ping()