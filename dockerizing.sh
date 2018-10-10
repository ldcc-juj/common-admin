echo "start dockerizing!"
echo "."
echo ".."
echo "..."

docker stop $(docker ps -q -a  --filter="name=admin-web")
docker rm $(docker ps -q -a --filter="name=admin-web")

result=`docker images admin-web`
target=`echo $result | cut -d ' ' -f9`
docker rmi $target

docker build -t admin-web:v0.1 .
docker run --name=admin-web -d -v /etc/localtime:/etc/localtime:ro -e TZ=Asia/Seoul -p 9090:80 admin-web:v0.1

echo "."
echo "."
echo "."
echo "completed admin-web dockerizing!"