with open('compileTimeEvaluatorInput.txt', 'r') as file:
    data = file.read()

    index = data.find('=')
    res = eval(data[index + 1:])
    ans = f"{data[:index + 1]} {res}"
    print(ans)

