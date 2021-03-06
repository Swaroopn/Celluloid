<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', ['as' => 'index',
	'uses' => 'IndexController@index'
]);

Route::get('/{category}/{film?}', ['as' => 'films',
	'uses' => 'FilmController@index'
]);

Route::get('/contact', ['as' => 'contact',
	'uses' => 'ContacttController@contact'
]);

/*
use App\userComment;
Route::post('/postComment', function(){
	$comment = new userComment();
	$comment->username = Input::get('username');
	$comment->comment = Input::get('usercomment');
	$comment->film = Input::get('film');
	$comment->save();
	return Redirect::back();
});
*/