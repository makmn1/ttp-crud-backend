# How to Dump

## Naming Convention
``ttp_crudapp_dump_[month]-[day]-[year]-[letter]``

The letter indicates how recent the dump is if we have more than one dump per day (which is probably not likely).

If the dump you are adding is the first dump of the day, start at letter "a". 
Otherwise, use the next available letter following the alphabet.

## Creating A Dump (e.g. exporting a database)

`pg_dump [database name] > [output file]`

The output file you specify will be created for you if it does not already exist.

## Using A Dump (e.g. importing a database)

`psql [name of database you want to dump to] < [dump file]`

You should already have the database created before you try and import the dump.

Note that for Windows users, you may have to switch from Powershell to Command Prompt
if you run into an error when trying to use psql. 