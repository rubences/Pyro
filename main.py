from multiprocessing import Pool
import os

# Define una función que realiza algún cálculo
def square(n):
    print(f"Worker process id for {n}: {os.getpid()}")
    return n * n

if __name__ == "__main__":
    # Crea una pool de trabajadores
    with Pool(processes=4) as pool:

        # Aplica la función square a cada número en el rango en paralelo
        result = pool.map(square, range(10))

        print(result)
