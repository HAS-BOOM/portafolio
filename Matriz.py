import numpy as np
numeros=np.zeros((3, 3), dtype=int)
print("Ingresa 9 números enteros: ")
for i in range(3):
  for j in range(3):
    numeros[i][j] = int(input("Ingresa un número: "))
print("\n")
print(numeros)
suma_diagonal=numeros[0,0]+numeros[1,1]+numeros[2,2]
print("\n")
print("La suma en diagonal es: ",suma_diagonal)