const fs = require('fs');
exports.calculate = async (req,res)=>{
    try {
        const data = ({
            arrayOfIntegers : req.body.array
        })
        if(data){
            const sum = data?.arrayOfIntegers.reduce((accumulator, currentValue) => {
                return accumulator + currentValue;
              }, 0);

            res.json({
                message : "Here is the final Sum",
                Answer : sum
            })
        }
    } catch (error) {
        res.json({
            message : error.message
        })
    }

}


exports.countWords = async(req,res)=>{
    try {

        const filePath = 'data.txt';
        await fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
              console.error('Error reading the file:', err);
              res.json({
                message : err.message
              })
            }
        
            const wordCount = data.split(/\s+/).filter(Boolean).length;
            console.log('Total word count:', wordCount);
            res.json({
                message : "total words in data.txt",
                count : wordCount
            })
          });

    } catch (error) {
        res.json({
            message : error.message
        })
    }
}