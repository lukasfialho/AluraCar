angular.module('starter')
	.controller('ListagemController', function($scope){

		$scope.listaDeCarros = [
			{"nome" : "BMW 120i", "preco" : 70000},
			{"nome" : "Onix 1.", "preco" : 35000},
			{"nome" : "Fiesta 2.0", "preco" : 052000},
			{"nome" : "C3 1.0", "preco" : 22000},
			{"nome" : "Uno Fire", "preco" : 11000},
			{"nome" : "Sentra 2.0", "preco" : 53000},
			{"nome" : "Astra Sedan", "preco" : 39000},
			{"nome" : "Vectra 2.0 Turbo", "preco" : 37000},
			{"nome" : "Hilux 4x4", "preco" : 90000},
			{"nome" : "Montana Cabine Dupla", "preco" : 57000},
			{"nome" : "Outlander 2.4", "preco" : 99000},
			{"nome" : "Fusca 1500", "preco" : 6000}
		];
		$scope.footerMessage = "AluraCar - Rua Vergueiro, 3185";

	})
	.controller('CarroEscolhidoController', function($scope, $stateParams){
		$scope.carroEscolhido = angular.fromJson($stateParams.carro);

		$scope.listaDeAcessorios = [
			{"nome" : "Freio ABS", "preco" : 800 },
			{"nome" : "Ar Condicionado", "preco" : 1000 },
			{"nome" : "MP3 Player", "preco" : 500}
		];

		$scope.mudou = function(acessorio, isMarcado){

			if (isMarcado) {
				$scope.carroEscolhido.preco += acessorio.preco;
			} else {
				$scope.carroEscolhido.preco -= acessorio.preco;
			}

		};
	});