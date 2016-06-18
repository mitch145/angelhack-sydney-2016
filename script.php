$img = $_POST['data'];
$img = str_replace('data:image/jpeg;base64,', '', $img);
$img = str_replace(' ', '+', $img);
$fileData = base64_decode($img);
//saving
$fileName = 'photo.jpg';
file_put_contents($fileName, $fileData);