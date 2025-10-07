with open('deadCodeEliminationInput.txt', 'r') as file:
    expression = file.read()
    lines = expression.split('\n')
    lhs = []
    rhs = []
    ans = ""

    for line in lines:
        data = line.split(' ')
        lhs.append(data[0])
        for i in range(2, data.__len__()):
            if data[i].isalpha():
                rhs.append(data[i])
    
    for line in lines:
        data = line.split(' ')
        if rhs.__contains__(data[0]):
            ans += line + '\n'

    print(ans)

