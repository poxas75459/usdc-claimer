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
    "3WoX8ErbpAW1xL7ziZkjJNnwuFQDJBTSxCWM5Jc6x8zXh5dMkmJHft59n6nkdaSD59upysTu646Jj1i1fsoPy9r1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hKKzGzGb77HorYMs9q6LrVJo8GNTbndTX7EKXeNmGMZrxdDNJ2N3dwA6JjdpBoioCCZ1DGE4XV34vs9D3hvHQwt",
  "key1": "336v7xqssaujy1Uekrh4BFfFRzkwFsx7Dm9zCFsvEJBN3jvmEXxkDETJefWWxZppcskbUA4Z2K8f69XTCYHG4tb5",
  "key2": "4SjXzBY5pF992U5sZYojLdQhtKEumWthKR9pEsjHkSuhb58NGmuwWFQ7dozKjDPaMaMF1esXkChphTweUrbufUeg",
  "key3": "3V1SMf1eYQBvUj27UdTVMKEkgaZEinzQDQn8PXptutyoQ85Xrt9RfcUvymUy9Kmfq6rAXfcViVeKZHKAWXZLMtT1",
  "key4": "5g7HgUqzkzQHp5h4c25kZYoKsuFnRADr8ciaqqsMM2NSuqzrU3Cr9Be9vN2eBoyZ3bsBM8LNcs5zAaQnp91Cso4m",
  "key5": "5b6KzTcHuM8a8EYHzFMnBWDLB2AGvfjk7ef8knXacURkdiCY8Sto58UfCgkPQV9h2QuKrrUramUGtwVFZPbLh3zJ",
  "key6": "3vcr64ov2KFDfUTkpsjWKxHHriau7KaKtQRUbZn1r2hEXAWEJxarN7nAHBhx4QTUPz6mQ4LbLnEZGhhi3aYGKMCe",
  "key7": "2CM4fmoffjWLwktDWWDkzRRVTy9PcWW9XpSrbhzC7bzBeagF23iSknhzCxKoF8ZxDuZMGPQEvryAiCrFa6ATErrC",
  "key8": "52pTTZwhXoWwZoKmcCHMsGyWTYtrCauVhtKHJfgrUb167mBNGjQKsoP3G9hUgGZsJAXMZNVc4SBDppbUAX5v3m2j",
  "key9": "2dWHbDBLQ5DNNUzvqgKmTcJZSHBM8uNGDCELg3yBbrjFM8MvYuUjh9UkQD59JgpwyHs2JWBSvbx6QePA9Ua2ZBrV",
  "key10": "5n7CuD9kJshvnAEV28T8PLasmwBHij8DWnXLsqtW15a3PrqJatFpRNrKU2T4AMq72dW5fnQZjhAoLS62V2kxFDyi",
  "key11": "61YjdD3N5JtSzsjooxbGwZ7T4hGFsY4dULQADc5SNkpBfP6jSh3m4oVuuEv1x9kPbPX3Qpfh9KJs3ZiUPTz2Xjq",
  "key12": "2vyzb95PsK61rGE3B2QYK41KtLSdQ9Jrw3F2F9J4RUfuVpYYYYzjhYs9WcmaDjhsohLYXHbFNJrqH2MatEzwVs1Q",
  "key13": "5YdPKr7vKD9EU2dpTG7k2ErBtQFfLni7RRHqXUoo6a87bAJZwy5ZY617tS2d1YD6CkpzYbUuisTsSmmjGJhCShkC",
  "key14": "4NNrmVwHPwGsf9js6Fn6WNUZ72BEJ43u3cbC6f5Yd5mSL97T2PMFmY4Gon2KZj2wwGqCnj5CmzCNos6U4AdZQoXT",
  "key15": "2fYrJkSnvu4fnzYrLAL6vjp1Dm4KRaSPc724w8L3HdENkc4JrdtUZaGgdMnW3rL68fLCCAJxwMrCgswjLcyeNboC",
  "key16": "3UTuNKi2f3PVE6Y8ZGFBK9JMbPSKsn6FRhysZSNxBYVQXA5eUQyBpuV5JHhV8K7chEv1FjVfSMxYBhCt1aZcBcWd",
  "key17": "5acjtYQDaCVsZZDRQwzPFwdGMzgPqXWvGLEEQe7ZssdrLoPgh7QB5XemVZ3jvVvAenmQfcQrGmbCQnaMzwV1rJdn",
  "key18": "4hz9ZVmzYoS73CrUw6CFSWXUZmAit1fCcUKf56VwDeKc9vuU3ZBvUyP2Vexig1y1tdPBi9xjELR9Nz3evzqzaEoB",
  "key19": "34dzue2EXXaG7szAiGkEqnrwabTcqzEWoiEHm944NMo98f2u6hH5kmyYcamCsPScTrXJfWf3QwoK2LwjyX2X6rzX",
  "key20": "7rZ7Mn3hUEzKJraQZJ9XYYXEmFZWdTafDJ4EcsYsqU2CFavnFbjx3vrnyTndjWcz92y4ni8o9Fnqxe1RG6F5GFz",
  "key21": "5Jffh8wPzYrU3KwArux3f79tQ3KrYwkhgguKgrfCi9htBACeXsaKXiAEaDBYEz7Wkuq6TCL5FL99HR8uLuZcrrHH",
  "key22": "2NSXBDYE5y9VkQfWPesFSA2zJUL4HDQaE2A8nc43Ahw3nX4Cpq6JKbKohs7cbYRgNU5zLNqXoXVFvfsmALvp84st",
  "key23": "61bKhiGNktYikkgNhA4DixmakMNqW3VzHWmTx2rEz4WJxyxhvbast5gJkRaKKT36Q8csxAxKw8KuEowkLF4gLeui",
  "key24": "5VsxgPtV4iRPtc7UeCKj1d4sA8HdnKaLEf7LDj9X7LJeEFQ6GkaMcfdXm3cs9xkUZzWDi3GLqh33ufiaHyEw7TCq",
  "key25": "4aUrx6G9pEFr741sXq5wmbSTuwQa1eKpAJdDE6F9ZXUzEy7HeTcwNxb7su4pparRx2YE2dQPCby8CMXXW11fHk9w",
  "key26": "5ag6oVs7S5zQefZWHaV8b4ni5mnwxWxeuuK4cR4tJdptj2BEbJ9T3Byq33n7NdBxbeV7zpXaGmAjJyQ1Z8MHgQyD",
  "key27": "5hbUgc7xDVLCNsRmLPpqj5RYpge6Mwzw3yBEBbR7gdaq7WuTzWVaJTvcZ6p95nv5CnGErVT98fvt2qqjjKoZMBgx",
  "key28": "59VYvPpBGejFFjBmkvCa7UVFauVey522JHcd6YcUeL6Jv72TQFfttkm9jBfsSFiH4MkQhSjN5XyQmpXJDkE9N7wW",
  "key29": "4wqnB7NtCLh4bPhD8SC1ZKC9aNg7PNDTz3KnnfALD79JCCr4875hpZxpvBCPkgaZKmnLnUGMyMnNKSJ7vEKXFFvB",
  "key30": "3TkwvcvoUHERATyXR4cxoeJ5yfwzMTRdjdXoEtceD4izQ9oXFjv5gHw23uRwaByAUFw2zFm5hxN2vs2DQHt4egQh",
  "key31": "4FqHYWQ6RoyTKVGh5eWd4rFWxzayG9wU8EC8jY2UzvAXbN15oo87ixtA5zApzhtKgcVBMZ5fWvccRzqQpXQfNKu3",
  "key32": "QcDshtsy8t7AYmLp47qN578EoCu1aacQx5Ttn5rvaJek1qNwAoyirgactMRDsJUMHxB8K6zc5cqEE4F3Qtm9dmJ",
  "key33": "5pdEsiq5XzXajWzva8Y5YSAkcMDFC9EjJqbjnuJEuQ1E9bveZKgWbvEYh1sgoKgPz32jL52RHYT4bHwA6tDUtCmA",
  "key34": "4FwmDPWnDd3gHxTnJV28zGe5WqXQ9Bz13GH1F3na7AecexZod7gdqxi11ZPb8h14KtGq1YZy7uTTVK3xPPmE4koP",
  "key35": "5MD7CLnfHbg7cpixtS9kEbe6fNo7DFU97kT5hfMtLPRTRzcWoJPXAXZ1eC4dZDLMWPuiVNoYPdFghRfCTz8nMPCx",
  "key36": "4ZMRxBKp7qUP3sUUZoSMDcgg2xcipGGGwfchoHFzTdcq1JMeM3sKQXZBGaEEwH8ZBaAwcPFPGoQKAxViwjK3n9UF",
  "key37": "2ggCNh9NUALsPqybvVCpag8XkimPbMf7TCa7LafUXBQa3iSHZhucL9ZXgEf9ePRdh7sg8HkRAzwjfmbtGZWqJe8L",
  "key38": "3oC6RKoBmZpzkAwM7kvcQegjccjGKVnjYu8o5XecTKKAvVEK3UAeHrGjLUYvXHgQRPLdxdH4gtpR1wUopjawQuzV",
  "key39": "4rupv7XazNF7xqonf7Ff5PF884fqpy9Dem2n96aCd9cDt4yz3yx7x8gUQpFRJRbd7M1XjrSfLrbBf5Zs3kfHtCMx",
  "key40": "4WxnLnGznztsna6KhAhBS9UHJw8qwMwrdjhZSVzazFdLAuvVrF9vHywFSojL23PwUDatEZCRbo6gQabYZ6VJFNnC",
  "key41": "4x8ZdduXCNuq7LheGVaWXEt7eStyfzvKrjfC7Yowg4btAHZiKg9TetLijK3yts9F3fbe7J7jre9WxtEMiYtMJhLn",
  "key42": "3uoxyWQ67fBuXSzVx7HYSjwxbQdjZmsLYVdJgk7ZteZDHr493zfqJB7W6CfgVUZMMtwiDvjSomLKd2Tigt2PDswz",
  "key43": "5W9zjzXCi82M8aneQ5wNCFRpEjtcWZ95R8DjBRqmjbYisG9pM6t7tGJz7rAYs4iHXStmWmBkQaBeeZvabZhwq1NY",
  "key44": "3NQ6w5WzhjQsS2pS6cBxQmoNiBhZidytWvTKs53fCZMrewqbSCSNKCMTCWs4v2xrvSLcWZoDo9pMehLMBGApvBdg"
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
