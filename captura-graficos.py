import matplotlib.pyplot as plt
import requests
from io import BytesIO
import time
import psutil

cpu_usos = []
tempos = []

start_time = time.time()

def gerarGraficoCPUP():
    tempo_atual = round(time.time() - start_time, 1)
    uso_cpu = psutil.cpu_percent(interval=1)

    tempos.append(tempo_atual)
    cpu_usos.append(uso_cpu)

    if len(tempos) > 6:
        tempos.pop(0)
        cpu_usos.pop(0)

    plt.figure()
    plt.plot(tempos, cpu_usos, marker='o', linestyle='-')
    plt.ylim(0, max(cpu_usos) * 1.1)
    plt.xlabel('Tempo (s)')
    plt.ylabel('Uso da CPU (%)')
    plt.title('Uso da CPU em Tempo Real')
    plt.grid(True)
    
    buffer = BytesIO()
    plt.savefig(buffer, format='png')
    buffer.seek(0)
    plt.close()

    try:
        response = requests.post(
            'http://localhost:3000/upload',
            files={'image': ('grafico.png', buffer, 'image/png')}
        )
        print(f'Enviado! Status de envio: {response.status_code} \n Gráfico de cpu percentual enviado com sucesso!')
    except Exception as e:
        print(f'Erro ao enviar: {e}')

# Loop a cada 5 segundos
while True:
    gerarGraficoCPUP()
    time.sleep(1)
