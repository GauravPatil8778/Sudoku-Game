with open('constantFoldingInput.txt', 'r') as file:
    expression = file.read()
    ans = ""
    lines = expression.split('\n')
    constants = dict()

    for line in lines:
        data = line.split(' ')
        if line.startswith("#define"):
            constants[data[1]] = data[2]
        else:
            for d in data:
                if constants.__contains__(d):
                    ans += constants[d] + ' '
                else:
                    ans += d + ' '
            ans += '\n'
    
    print(ans)
