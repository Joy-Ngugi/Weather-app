<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    protected $middleware = [
        \Illuminate\Http\Middleware\HandleCors::class,
        // Add your global middleware here
    ];

    protected $middlewareGroups = [
        'web' => [
            // web middleware group here...
        ],

        'api' => [
            'throttle:api',
            'bindings',
        ],
    ];

    protected $routeMiddleware = [
        // route-specific middleware here...
    ];
}
