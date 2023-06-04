<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TutoJsController extends AbstractController
{
    #[Route('/tuto/js', name: 'app_tuto_js')]
    public function index(): Response
    {
        return $this->render('tuto_js/index.html.twig', [

        ]);
    }
}
