require 'sinatra'
require "sinatra/json"
require 'json'
require 'sinatra'
require 'sinatra/cross_origin'

set :public_folder, proc { File.join(root) }


get '/' do
  # File.read("/index.html")
  headers 'Access-Control-Allow-Origin' => '*'

  json temperature: 20, powerSaving: 'green'
end

# post '/thermostat' do
#   headers 'Access-Control-Allow-Origin' => '*'

#   json temperature: 20, powerSaving: 'green'
# end



