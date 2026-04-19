# AgriDash
### Dashboard with some models


# Stack 
- frontend : react (ui) + Vite (server & route management)
- backend : flask (connect ml with backend to exchange infos)
- ml : model source code + endpoints + pretrained


# API
### the app uses a free api for infos like temperature , humidity ..
https://api.open-meteo.com/v1/forecast?
### _parameters_ : 
- latitude
- longitude=[FILL-THIS]&
- hourly=temperature_2m,relative_humidity_2m,rain,showers,weather_code,uv_index,pressure_msl,surface_pressure,evapotranspiration,wind_speed_10m,temperature_80m,precipitation,precipitation_probability,dew_point_2m