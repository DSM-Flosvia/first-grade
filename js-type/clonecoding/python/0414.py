# range(n) -> 0부터 n-1까지 1씩 증가
# range(1, n) -> 1부터 n-1까지 1씩 증가
# range(1, n, 2) -> 1부터 n-1까지 2씩 증가

# n = input()
# while n != 'q':
#     print(n)
#     n = input()

def add(n1, n2):
    print(n1 + n2)

def minus(n1, n2):
    print(n1 - n2)

def multiple(n1, n2):
    print(n1 * n2)

def division(n1, n2):
    print(n1 / n2)

n1 n2 = input().split()
s = input()

if s == '+':
    add(int(n1), int(n2))
elif s == '-':
    minus(int(n1), int(n2))
elif s == '*':
    multiple(int(n1), int(n2))
else:
    division(int(n1), int(n2))