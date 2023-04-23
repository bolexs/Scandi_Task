<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit1edc25a96b098408af01b99ae36fc110
{
    public static $prefixLengthsPsr4 = array (
        'A' => 
        array (
            'App\\' => 4,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'App\\' => 
        array (
            0 => __DIR__ . '/../..' . '/backend',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit1edc25a96b098408af01b99ae36fc110::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit1edc25a96b098408af01b99ae36fc110::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit1edc25a96b098408af01b99ae36fc110::$classMap;

        }, null, ClassLoader::class);
    }
}
