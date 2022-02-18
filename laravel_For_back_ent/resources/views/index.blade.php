<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
    <h2>Home page</h2>
    <hr>

    <div class="container">
        <div class="row">
            <div class="col-md-5">
                <form method="post">
                    @csrf
                    <div class="mb-3">
                      <label for="name" class="form-label">Name</label>
                      <input type="text" name="name" id="name" class="form-control">
                    </div>
                    <div class="mb-3">
                      <label for="email" class="form-label">email</label>
                      <input type="text"  name="email" id="email" class="form-control">
                    </div>
                    <div class="mb-3">
                      <label for="phone" class="form-label">Password</label>
                      <input type="text" name="phone" id="phone" class="form-control">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </form>
            </div>

            {{-- TABEL --}}
           <div class="col-md-7">
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                    @foreach ($stu as $item)


                  <tr>
                      <th scope="row"> {{$item->id}} </th>
                      <td>{{$item->name}}</td>
                    <td>{{$item->email}}</td>
                    <td>{{$item->phone}}</td>
                    <td>
                        <a href="show/{{$item->id}}">edit</a>
                    </td>
                  </tr>
                  @endforeach
                </tbody>
              </table>
           </div>

        </div>
    </div>

</body>
</html>
