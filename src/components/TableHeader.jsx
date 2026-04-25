export default function TableHeader({content}) {
    return (
        <thead>
        <tr>
          {content.map((title,index) => <th key={index}>{title}</th>)}
        </tr>
        </thead>
    );
}