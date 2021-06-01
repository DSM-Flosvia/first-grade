# 자료형(1)
# 자료에 대한 타입
# 숫자, 문자열, 불(참 or 거짓), 
# 어떤 값을 담는 자료구조
# 변수, 리스트, 튜플, 딕셔너리, 집합

# 변수
# a = a + 1
# 숫자형
# 정수형 : a = 1(int)
# 실수 : a = 1.23(float)

# 사칙연산
# a = 3
# b = 4
# print(a+b)
# print(a*b)
# print(a//b)
# print(a%b)

# 문자열
# a = "Hello world"
# b = 'python s favorite food is perl'
# c = '''hwang
# jinseong'''
# print(a)
# print(b)
# print(c)

# 인덱싱
# 0부터 시작
# a = "Life is too short, You need Python"
#      0123456789                    -3-2-1
# print(a[5])

# 슬라이싱
# a = "20020331Rainy"
# print(a[1:14])
# print(a[::2])

#문자열 포매팅
# num = 10
# day = 'three'
# a = "I eat %d apples. so I was sick for %s day." % (num, day)
# print(a)

# join
# a = ";".join("abcd")
# print(a)

# a = "hi"
# print(a.upper())
# b = "HI"
# print(b.lower())

# 리스트
# 하나의 변수의 여러 개를 묶는 역할
# a = ["int", "char", "float"]
# print(a)

# a = [1, 2, 3]
# b = [4, 5, 6]
# print(a*3)
# print(a+0)

# a = ["int", "char", "float"]
# a[0:2] = []
# print(a)

# 자료구조(리스트 , 튜플)
# 리스트는 면경이 가능하다., 튜플 변경이 불가능하다.
# t1 = (1, 2, 'a', 'b')
# print(t1[0:2])
# t2 = (3, 4)
# print(t1+t2)


# [자료형]
# 숫자형
# 종류 정수 : 123, -345, 0
#     실수 : 123.45, -1234.5, 3.4e10
#     복소수 : 1 + 2j, -3j
#     복소수.real : a = 1 + 2j >>> a.real 1.0
#     복소수.imag : a = 1 + 2j >>> a.imag 2.0
#     복소수.conjugate() : a = 1 + 2j >>> a.conjugate() (1-2j)
#     abs(복소수) : a = 1 + 2j >>> abs(a) 2.2360679774997898
#     8진수 : 0o34, 0o25
#     16진수 : 0x2A, 0xFF
# 문자열 자료형
# 위에 있음
# 리스트 자료형
# 튜플 자료형
# 딕셔너리 자료형
# 집합 자료형
# 자료형의 참과 거짓
# 자료형의 값을 저장하는 공간, 변수
