<?php

namespace App\Service;

class GlobTest
{

    /**
     * La function créé des tableaux correspondant à des intervalles d'éléments tirés de l'argument d'entrée
     * puis elle determine leur intersection. Si l'intersection est un tableau vide, elle retourne l'argument
     * comme tel et dans le cas contraire elle merge les tableaux obtenus et retourne un tableau à deux éléments
     * dont le premier élément est le minimum du tableau issu du merge et le sécond le maximum
     * du tableau
     *
     * La function est imcomplète car elle ne traite q'un seul cas possible c'est à dire quand l'argument est
     * un tableau composé de deux tableaux.
     *
     * @param array $array
     * @return array
     */
    public function handleArray(array $array): array
    {
        if (array_intersect(range($array[0][0], $array[0][1]), range($array[01][0], $array[01][1])) === [])  {
            return $array;
        }

        $merge = array_merge($array[0], $array[1]);

        return [min($merge), max($merge)];
    }

}

$globTest = new GlobTest();

$response = $globTest->handleArray([[0, 5], [2, 4]]); // $response = [[0, 5]];
$response_2 = $globTest->handleArray([[0, 3], [6, 10]]); // $response_2 =  [[0, 3], [6, 10]];
$response_3 = $globTest->handleArray([[0, 5], [3, 10]]); // $response_3 = [[0, 10]]
