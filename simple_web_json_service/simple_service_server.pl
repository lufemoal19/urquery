/*
Service for adding two numbers
URI: /add
VERB: POST
Body 
    Expects:JSON {"a":Some_Number1, "b":Some_Number2 }
    
Returns: {"accepted":true, "answer":Some_Number1+Some_Number2}    if data ok
         {"accepted":false, "answer":0, "msg":some_error_message} othwerwise
             
author: loriacarlos@gmail.com
since: 2022
*/
:- use_module(library(http/thread_httpd)).
:- use_module(library(http/http_dispatch)).
:- use_module(library(http/http_json)).
:- use_module(library(http/http_log)).

:- use_module(library(http/html_write)).

% URL handlers.
:- http_handler('/add', handle_request, [method(post)]).
:- http_handler('/', home, []).



handle_request(Request) :-
    http_read_json_dict(Request, Query),
    solve(Query, Solution),
    reply_json_dict(Solution).

server(Port) :-
    http_server(http_dispatch, [port(Port)]).

set_setting(http:logfile, 'service_log_file.log').

%%%%%%%%%%%%%%%%%%%%%%%%%% BUSINESS LOGIC %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Calculates a + b.
solve(_{a:X, b:Y}, _{status: true, answer:N, msg:'succeed'}) :-
    number(X),
    number(Y),!,
    N is X + Y
.
solve(_, _{accepted: false, answer:0, msg:'Error: failed number validation'}).
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

home(_Request) :-
        reply_html_page(title('Mini Add Service'),
                        [ h1('To use it:'),
                          p([h4('Send a post messsage'),
                             h4('URI:/add'),
                             h4('body: JSON data of the form {"a":number, "b":number}'),
                             h4('Service Responds with JSON as follows:'),
                             ul([li('{accepted:true, answer:a+b}    if data ok'),
                                 li('{accepted:false, answer:0, msg:some_error_message} othwerwise')])
                            ])
                        ]).

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% MAIN %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
:- initialization
    format('*** Starting Server ***~n', []),
    (current_prolog_flag(argv, [SPort | _]) -> true ; SPort='8000'),
    atom_number(SPort, Port),
    format('*** Serving on port ~d *** ~n', [Port]),
    server(Port).
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%