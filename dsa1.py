# a = int(input("enter a number: "))
# b = int(input("enter a number: "))

# print(f"the sum of a and b is {a+b}")


# swap two nums

# a = 1
# b = 2

# a, b = b, a
# print(a)
# print(b)


# area and perimeter

# l = int(input('enter a length of the rectangle: '))
# w = int(input('enter a width of the rectangle: '))

# area = l*w
# print(f"area of the rectangle {area}")

# perimeter = 2 * (l+w)
# print(f"perimeter of the rectangle {perimeter}")


import math

a = float(input("Enter side a of the triangle: "))
b = float(input("Enter side b of the triangle: "))
c = float(input("Enter side c of the triangle: "))

def calculate_area(a, b, c):
    s = (a + b + c) / 2
    area = math.sqrt(s * (s - a) * (s - b) * (s - c))
    return area

print(calculate_area(a, b, c))
