`문자열 사용하기`

문자열은 영문 문장ㄹ뿐만 아니라 한글 문자열도 사용 가능하다.

hello = '안녕하세요'

>> hello

'안녕하세요'

작은따옴표로 묶어 문자열을 만든다.

hello = "Hello, world!"

>> hello

'Hello, world'

큰따옴표로도 문자열을 만든다.

**여러 줄도 된 문자열 사용**

hello = '''Hello, world!

안녕하세요.

pythin입니다.'''

>> Hello world!

      안녕하세요.

      python입니다.

**따옴표 세 개로 묶지 않고 여러 줄로 된 문자열 사용**

print('Hello\nPython')

>> Hello

      Python

**`elif 사용하기`**

elif는 else if라는 뜻입니다.

x = 20

if x == 10:

          print('10입니다.')

elif x ==20:

          print('20입니다.')

**if, elif, else를 모두 사용하기**

button = int(input())

if button == 1:

     print('콜라')

elif button == 2:

     print('사이다')

elif button == 3:

     print('환타')

else:

     print('제공하지 않는 메뉴')