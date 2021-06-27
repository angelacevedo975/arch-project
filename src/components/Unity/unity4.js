import React from "react"
import styled from "styled-components"

const InfoContainer = styled.div`
	h1{
		color: black;
	}
	h2{
		color: black;
	}
	h4{
		color: royalblue;
	}
	span{
		color: royalblue;
	}
`

const Unity4 = () => {
	return (
		<div className="container border my-5">
			<div className="row">
				<InfoContainer className="col col-12">
					<h1>Unidad 4</h1>
					<h2>Procesamiento Paralelo</h2>
					<hr></hr>
					<h4>Aspectos Básicos de la computación paralela</h4>
					<p>
						La computación paralela es una técnica de programación en la que muchas instrucciones se ejecutan simultáneamente. Se basa en el principio de que los problemas grandes se pueden dividir en partes más pequeñas que pueden resolverse de forma concurrente (“en paralelo”).
					</p>
					<h4>Tipos de computación paralela.</h4>
					<ul>
						<li>
							PARALELISMO A NIVEL DE BIT:
							Desde el advenimiento de la integración a gran escala (VLSI) como tecnología de fabricación de chips de computadora en la década de 1970 hasta alrededor de 1986, la aceleración en la arquitectura de computadores se lograba en gran medida duplicando el tamaño de la palabra en la computadora, la cantidad de información que el procesador puede manejar por ciclo. El aumento del tamaño de la palabra reduce el número de instrucciones que el procesador debe ejecutar para realizar una operación en variables cuyos tamaños son mayores que la longitud de la palabra. Por ejemplo, cuando un procesador de 8 bits debe sumar dos enteros de 16 bits, el procesador primero debe adicionar los 8 bits de orden inferior de cada número entero con la instrucción de adición, a continuación, añadir los 8 bits de orden superior utilizando la instrucción de adición con acarreo que tiene en cuenta el bit de acarreo de la adición de orden inferior, en este caso un procesador de 8 bits requiere dos instrucciones para completar una sola operación, en donde un procesador de 16 bits necesita una sola instrucción para poder completarla.
						</li>
						<li>
							PARALELISMO A NIVEL DE INSTRUCCIÓN:
							Un programa de ordenador es, en esencia, una secuencia de instrucciones ejecutadas por un procesador. Estas instrucciones pueden reordenarse y combinarse en grupos que luego son ejecutadas en paralelo sin cambiar el resultado del programa. Esto se conoce como paralelismo a nivel de instrucción. Los avances en el paralelismo a nivel de instrucción dominaron la arquitectura de computadores desde mediados de 1980 hasta mediados de la década de 1990.
							Los procesadores modernos tienen ”pipeline” de instrucciones de varias etapas. Cada etapa en el pipeline corresponde a una acción diferente que el procesador realiza en la instrucción correspondiente a la etapa; un procesador con un pipeline de N etapas puede tener hasta n instrucciones diferentes en diferentes etapas de finalización. El ejemplo canónico de un procesador segmentado es un procesador RISC, con cinco etapas: pedir instrucción, decodificar, ejecutar, acceso a la memoria y escritura. El procesador Pentium 4tenía un pipeline de 35 etapas.
						</li>
						<li>
							PARALELISMO DE DATOS:
							El paralelismo de datos es el paralelismo inherente en programas con ciclos, que se centra en la distribución de los datos entre los diferentes nodos computacionales que deben tratarse en paralelo. La paralelización de ciclos conduce a menudo a secuencias similares de operaciones (no necesariamente idénticas) o funciones que se realizan en los elementos de una gran estructura de datos. Muchas de las aplicaciones científicas y de ingeniería muestran paralelismo de datos.
						</li>
						<li>
							PARALELISMO DE TAREAS:
							El paralelismo de tareas es la característica de un programa paralelo en la que cálculos completamente diferentes se pueden realizar en cualquier conjunto igual o diferente de datos. Esto contrasta con el paralelismo de datos, donde se realiza el mismo cálculo en distintos o mismos grupos de datos. El paralelismo de tareas por lo general no escala con el tamaño de un problema.
						</li>
					</ul>
					<h4>Clasificacion de ordenadores paralelos</h4>
					<p>
						Los ordenadores paralelos se pueden clasificar según el nivel de paralelismo que admite su hardware:
					</p>
					<ul>
						<li>
							Los ordenadores multinúcleo y multiproceso tienen varios elementos de procesamiento en una sola máquina
						</li>
						<li>
							Los clusters
						</li>
						<li>
							Los MPP
						</li>
						<li>
							Los Grids
						</li>
					</ul>
					<h4>Arquitectura de computadores secuenciales</h4>
					<p>
						Tradicionalmente, los programas informáticos se han escrito para el cómputo en serie. Para resolver un problema, se construye un algoritmo y se implementa como un flujo en serie de instrucciones. Estas instrucciones se ejecutan en una unidad central de procesamiento en un ordenador. Sólo puede ejecutarse una instrucción a la vez y un tiempo después de que la instrucción ha terminado, se ejecuta la siguiente.
					</p>
					<h4>Organización de direcciones de memoria.</h4>
					<p>
						La jerarquía de memoria es la organización piramidal de la memoria en niveles que tienen las computadoras.
						El objetivo es acercarse el rendimiento de una memoria de gran velocidad al coste de una memoria de baja velocidad, basándose en el principio de cercanía de referencias.
					</p>
					<ul>
						<li>
							Nivel 0: Registro
						</li>
						<li>
							Nivel 1: Memoria caché
						</li>
						<li>
							Nivel 2: Memoria primaria (RAM)
						</li>
						<li>
							Nivel 3: Disco duro (con el mecanismo de memoria virtual)
						</li>
						<li>
							Nivel 4: Cintas magnéticas (consideradas las más lentas, con mayor capacidad, de acceso secuencial)
						</li>
					</ul>
					<h2>Sistemas de memoria compartida</h2>
					<p>
						Un multiprocesador puede verse como un computador paralelo compuesto por varios procesadores interconectados que comparten un mismo sistema de memoria.
						Los sistemas multiprocesadores son arquitecturas MIMD con memoria compartida. Tienen un único espacio de direcciones para todos los procesadores y los mecanismos de comunicación se basan en el paso de mensajes desde el punto de vista del programador.
					</p>
					<p>
						Dado que los multiprocesadores comparten diferentes módulos de memoria, pudiendo acceder a un mismo módulo varios procesadores, a los multiprocesadores también se les llama sistemas de memoria compartida.
					</p>
					<p>
						Dependiendo de la forma en que los procesadores comparten la memoria, se clasifican en sistemas multiprocesador UMA, NUMA y COMA.
					</p>
					<h4>Redes de interconexión dinámica</h4>
					<p>
						Una red dinámica es una red cuya topología puede variar durante el curso de la ejecución de un programa paralelo o entre dos ejecuciones de programas. La red está constituida por elementos materiales específicos, llamados commutadores o switches. Las redes dinámicas se utilizan sobre todo en los multiprocesadores.
					</p>
					<h2>Sistemas de memoria distribuida</h2>
					<p>
						La Distributed Shared Memory (DSM, o memoria distribuida compartida) es un tipo de implementación hardware y software, en la que cada nodo de un cluster tiene acceso a una amplia memoria compartida que se añade a la memoria limitada privada, no compartida, propia de cada nodo.
					</p>
					<p>
						Los sistemas de software DSM pueden ser implementados bajo un sistema operativo (SO), o como una biblioteca de programación. Los sistemas de software DSM implementados en el SO pueden concebirse como extensiones de la arquitectura de memoria virtual subyacente. Estos sistemas son transparentes al desarrollador, lo que significa que la memoria distribuida subyacente está completamente oculta para los usuarios. En contraste, los sistemas de software DSM implementados en una biblioteca no son transparentes y los desarrolladores tienen que programarlos separadamente. Sin embargo, estos últimos sistemas ofrecen mejores características de portabilidad en la implementación de sistemas DSM.
					</p>
					<h4>Redes de interconexión estáticas</h4>
					<p>
						Una red estática es una red cuya topología queda definida de manera definitiva y estable durante la construcción de la máquina paralela. ... La red está constituida por elementos materiales específicos, llamados commutadores o switches. Las redes dinámicas se utilizan sobre todo en los multiprocesadores.
					</p>
					<p>
						Uno de los criterios más importantes para la clasificación de las redes es el que
						tiene en cuenta la situación de la red en la máquina paralela, dando lugar a dos familias
						de redes: redes estáticas y redes dinámicas. Una red estática es una red cuya topología
						queda definida de manera definitiva y estable durante la construcción de la máquina
						paralela. La red simplemente une los diversos elementos de acuerdo a una configuración
						dada. Se utiliza sobre todo en el caso de los multicomputadores para conectar los
						diversos procesadores que posee la máquina. Por la red sólo circulan los mensajes entre
						procesadores, por lo que se dice que la red presenta un acoplamiento débil. En general,
						en las redes estáticas se exige poca carga a la red.
					</p>
				</InfoContainer>
			</div>
		</div>
	)
}

export default Unity4