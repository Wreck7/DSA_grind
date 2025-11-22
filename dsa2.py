# valid user check

# username = input('enter your username: ')

# if username == "vishwa":
#     print("valid!")
# else:
#     print("invalid")


# bill


bill_amt = int(input("enter the bill amount: "))
final_amt = 0

if (bill_amt >= 5000):
    discount = bill_amt * 0.10
    final_amt = bill_amt - discount
elif (bill_amt >= 3000):
    discount = bill_amt * 0.06
    final_amt = bill_amt - discount
elif (bill_amt >= 1000):
    discount = bill_amt * 0.01
    final_amt = bill_amt - discount
else:
    final_amt = bill_amt

print(final_amt)
