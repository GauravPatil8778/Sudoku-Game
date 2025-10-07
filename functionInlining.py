with open('functionInliningInput.txt', 'r') as file:
    code = file.read()
    lines = code.split('\n')
    functionTable = dict()
    ans = "int main() {\n"

    for i in range(lines.__len__()):
        line = lines[i]
        data = line.split(' ')
        if data[0] == "inline":
            func = data[2]
            functionTable[func] = ""
            i += 1
            line = lines[i]
            data = line.split(' ')
            while data[0] != '}':
                functionTable[func] += '\t' + line.strip() + '\n'
                i += 1
                line = lines[i]
                data = line.split(' ')
        
    for i in range(lines.__len__()):
        line = lines[i]
        data = line.split(' ')
        if line.__contains__('int main()'):
            i += 1
            while not line.__contains__('return 0;'):
                line = lines[i]
                data = line.split(' ')
                functionName = ""
                for d in data:
                    d = d.replace(';', '')
                    if functionTable.__contains__(d):
                        functionName = d
                if functionName != "":
                    ans += f"\n\t// body of inline function named {functionName}\n"
                    ans += functionTable[functionName] + '\n'
                else:
                    ans += '\t' + line.strip() + '\n'
                i += 1
    ans += '}'
    print(ans)
