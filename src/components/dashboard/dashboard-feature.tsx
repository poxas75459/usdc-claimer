/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3Ht25GGSPTM27S1eeKsW7za3e4TQTAj6tNBz89UzxK17xtScAXmXYiykvv55NsfigH9opwouvKJ1oejPtbndY7dE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tAod71M5g5ybv5JfgfPbw1R3sczfnvV2Vu8j2pDymdNg7sYuaShB3es7pKrUVPYhAcDH5V4sq8JiMYYLNyFUCAx",
  "key1": "4fHp6ZYEo5g4RmWAWnEoSoLryiLpz9kUfL2KjDquufzJD4arCY5KtEa47yvoysYyFBDU8TPjugVjuonKAQsvVLyj",
  "key2": "4Hng52PFuR8dzUbvyyMiQLKWurvt7HNsLchx6W1VvN6E8dgHH1Jb1cjUF5VrLxHmiUKRqyLpPu8QeYE2drQUuGuM",
  "key3": "5DoqjBWLZaP1Vjn3VnoinRkzDXP4amQn1w2aJcPuQnKVBLNgAEZFpzKfhbyGBA3s3vLLMJsKM1mepGus54hu8o8W",
  "key4": "3w138mbNq1NJP1aMG59uqypoHZgYoidy6vtPE5ZPvrJTZifLw9YRT2eXmjU2kjmg7nJkCdD318YnqmqXag5tFc3C",
  "key5": "3ojxuixPcSYzzbxpRQv2JrfgCF6t5gbyo9MNxFzh2jsqpEZr1CvmZpkcvd7vK7uA8uBPEqqTsxuehTR9bsSDY4g6",
  "key6": "5HpE76b62FHrZ4UXFhLT4vBeEd47n9MCQqAhcUK8o7pZsGTRPJp7HMLeViRgKxofCgNiabYmkWjRmFRAmj3g6kFs",
  "key7": "eNE48P3cPtjGJKoL6UAv4H3wmxgQJAYuXm8nv8bo2QRBi44ydDod5gnzaN4fTekLi1W5ncaz8b3gsme1DvWEP1t",
  "key8": "3aW16zhDKbDMKcgXtYU9FiD8aN43unwouP1uPJj7wabhgX2NRzcDsMaygqekrSYoKoei3EDLyCkhMgvubmCEY8tL",
  "key9": "19kEiyKT4AxPUevSGnK59MLFt7BH5FeTq6pKgSE1o6tBTg96TtqiyKMXpuEXJKZS842HPR3QgEadsmSyu7MMBfn",
  "key10": "3dfB8HRmAprcLqBHmXXye5tXfAenLrgd8rNsYagmKf82AWjm3qPqHtbGrLAjV3npdFFqFys5U7CmKWpYDf5usJDg",
  "key11": "4z9pTeHUyY6cKjG386TjG42YEcSfPHbJsf7sLSbNbBSDMY2sHY1jXGu19LQjzWYCsggVgMemmq8tv69kfoVj1dWe",
  "key12": "2M3qojgAt8Svs3yGWYyhyJe5N5FG97yXwmdVzUD6DVw6D3RTF9qvwRQQEmMmBA6yLz92UUzEL6UFbkWVQcyc8veB",
  "key13": "66Rgoxz93b9nc76ujsHxb8VFDBaU1uvDPc6Dod6NuREMzCKFp1w8j5pS3UYkSeRrCwH5TtV3FDYSms66QmrLMTm8",
  "key14": "4QhiophnXgEpCu6KP8ReyUDxiJjEWbXtQ6zQgGYAaKhnmwb6CxpxtVmkDR9eFXzwCtYAZ5AKA1Kpka8j7Y3dqxHH",
  "key15": "Pe7shMMPRJLS9sBa3KMTn53ofHUp7TaVbKSL961W32QSuG8f4n92z15J7pujLLTp9Db1wgTxU7vsVTUxwGX1iNL",
  "key16": "67fzjoNJ3WEsmSQWHRbBxEQF7q99Xh7FMEm4Gy7RcQ2ALR51WjNr5LwyN1UzJyAdAJ8SzB7cnBHWJMNrJUgJFerB",
  "key17": "i5e6ZUxZZ2sEDASMPs2JAZ6UktH9Vs2uyBBfDqnEmqkfteWfgcXBo98mcHkYcAAmJhK2S5xybaNWp88KhYdRYET",
  "key18": "3crXxHuYe5i9iUytW1FHTPmkwkaooToXgwYwAPCSzLKyvrs8VxmW563QuKNz6aR6BK5roXyEJMy66ZaGf4UbmNsP",
  "key19": "4yAGXG6g4eEhZdvDVmRD38HY2moXP381LFbUanCDzNvgneY1VhYyo9SKq77UtG75HZPQN7BgCVZCYv9aonv9ZiNf",
  "key20": "47Xkn3LRsM1PTjwu76sqrNGfGJ9SWhQwyaV9bZbWhXihjMKtPzP23a6Lq1wBaRuiH5cGd7kTQ9oBatLtQUvZRu2h",
  "key21": "wgXoyYREeoxS81At7A7DtKwZdEFbkjVnAZC5j9istPiNtn1SF3JQYSnb5xZ3BdY7weh98jw5SqSsV5MXeHGQqk2",
  "key22": "zWxDRsaa82HYTp1ZKMpCM37LsLdr9TFf3pStfLXN4riLiPvXFcxgMcMTri1vM9KgqHgmCeGmjXn6ZP3MXoZ4LPw",
  "key23": "3psrWBszqB1BgwB9WD25R1h5b3AhWm7p5phdexSmnnx78jETCTdmoq3YxBH9wnvM5mVYbXR3baVuW8L51d1j1rix",
  "key24": "5WjBjdgeXqpKuGMRHzdjPQE5gnGonEc5dux2KNha718SsC6d3wLG8piQBkR4JGp6wu6WPK9Jovyujz4bnMTH5PBh",
  "key25": "3ogx6BRr6ywdm2re3Gj85jfVjChA67q3GNFi2XofeqR9M51pkG8WdzamfsXxjnZL3pdKAbPb8EUgdChVPZYHrUgp",
  "key26": "23jtojvVwZyiuvcUJbbiPMCrcLyphUwgX7WaPAi7H22GDKNpRwuNXqoYJgbnJuHpHCMoCq5z5YCmP3TVb6cPz7TR",
  "key27": "5py7UvX1DRju2NnEEHrwn1K7HHQimCACKqyXxcczJM4GPXstbFqf6kEMzDCSwpYTPpJWyUWLEY8pN3TonNf762jV",
  "key28": "2bncsrj58kCT3B95K5bDryQ34K2chyJVXkyerL5bGaLS7bvSSeA7KMYie84ueMAwtKzDNb9odusF4t23PQ54evF3",
  "key29": "26UbEE2R2zXv57RshknY1WJPRLLVeSwPSdBtFYHaJMMxaP7DsiFNX9ByqGeErPpKNE95yE6NVTtyqMp691K7jzch",
  "key30": "4xCtjZs78RrJQSewNf3SKss7KGFUMTyy3hb6ahnuH5ykGBgTEM9MTnsMFqM1rWkyxYACXMtNqic1iTP19wP7UhCp",
  "key31": "HJGwvn4LZERX4EkXjaTszCqaky4yq6zZwKuRuu6Lzc6neKcbXwECXZiA3vJjGwTbe9jX23pjjPiaoJqv1wVzcgU",
  "key32": "YVVTzSu39DL8GRfUCX7KwJ6rt8raQ3dAQFeRCXKqxTryHbmhyMu5YFe9QM3HxcYvmip8rCvJcMrWi7e8wP8GFNp",
  "key33": "bb1zHgfV1hmbFvnQo5c6ZxtY47xg5vvrSAgaiiXC7caCVvkBLfuVHYtnUxnP9ufjJVuR2N9yW7XZQnanUD4S45X",
  "key34": "2mbccHP2VnriTNPxsgwivk39qz5gzDEc9JH9SgeETKnAcC43iZciN7LKYxdLj5UrHNGZVafs4AZWjxs3PGpazqhq",
  "key35": "41A4mBBXmLAwgQwXWnRYda3o1EtKfzfLnGto9odtFeFfKQvkxCAwcfqgnCTgENfkgpLNAqqyiaPWfXMgxnFcGVpN",
  "key36": "48CEkPPKfxxrpJQLe73xnyPdhhz73NFBQmn6qLPiH2jKtghGB3TEcfjRiVMCVgVw3vKhVhaSCyuosoFhnPQczTFq"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
