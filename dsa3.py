# printing n hellos


# n = int(input("enter a number: "))

# def printing_n_hellos(n):
#     for i in range(n):
#         print("hello")
        
# printing_n_hellos(n)



n = int(input("enter a number: "))

def oneToNAndBack(n):
    for i in range(1,n+1):
        print(i)
    for i in range(n,0,-1):
        print(i)

oneToNAndBack(n)