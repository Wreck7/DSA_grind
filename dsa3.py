# printing n hellos


# n = int(input("enter a number: "))

# def printing_n_hellos(n):
#     for i in range(n):
#         print("hello")
        
# printing_n_hellos(n)



# n = int(input("enter a number: "))

# def oneToNAndBack(n):
#     for i in range(1,n+1):
#         print(i)
#     for i in range(n,0,-1):
#         print(i)

# oneToNAndBack(n)



# def sum_of_natural_nums(n):
#     total = 0
#     for i in range(1, n + 1):
#         total += i
#     return total

# n = int(input("Enter a number: "))
# print(sum_of_natural_nums(n))




# def factorial(n):
#     ans = 1
#     for i in range(1,n+1):
#         ans *= i
#     return ans

# n = int(input("enter a number: "))
# print(factorial(n))



# def getFactors(n):
#     factors = []
#     for i in range(1, n+1):
#         if n%i == 0:
#             factors.append(i)
#     return factors


# n = int(input("enter a number to get their factors: "))
# print(getFactors(n))



#  prime number or not



n = int(input("Enter a number: "))

if n <= 1:
    print("Not a prime number")
else:
    is_prime = True

    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            is_prime = False
            break

    if is_prime:
        print("Prime number")
    else:
        print("Not a prime number")
