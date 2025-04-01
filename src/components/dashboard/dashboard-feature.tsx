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
    "38DgZRRbUpTMCQzYF9epYZpWBQp9xZ5BVCkhyHPFxdzoCd22AAQQufbFAidjkhB1zYps2VDwSf4qKphGrQfuEFqz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DoVT9RHKW3JDZi32Ly66xDsuiodAduAbQn4oA1berqYdr4JmwjNFA5j4Hz5DgqNV6xitAbYtfTtJpoqAxinZuMh",
  "key1": "356u83sc6nd88BEkUp1szyCY68EnV5D24R54SSkKBNhtu5DG9rKDbtEszCPovD6DFaTMroVmss21ZTjSYtpuC1tX",
  "key2": "2WbvLZ8EAF4888tB25Xrk8thvZgYXeR7ueo76EqQmYEG7QKdVRFvCW55LQDiVwzx35ChShgiwtSdTRWaiqPVMRL9",
  "key3": "5KNMW9ru1sEiMPNaCBhi3vaVUukF4JcKEyx8R8WAQ9v1xd6jyLwhWenDN5qjBK65rFqgbEmU4eSDAxnjLH8UNmVW",
  "key4": "EN6q5JnRby8SyFcYypyphrHjrpgN4nCdbT63iLMSYcHqLSTeNpZ29orLVuZQ3NzADB6zJX9hpw4RWNR9dYX8Kq8",
  "key5": "2PcUmcLQBDGmERzSg8SkPKxvWucBJEitVckw7pFdHoF9bRAd5vrnxoRcH93h4xfYWGBbJ2JjsrefHLQ6eK58eyZi",
  "key6": "4Y8TFDu8j8S68WsCDnmzPxQmmTHFA69FcnxwmtmnU6tVFjcEX1xnsNkwps1kA9pzDPViDScFyoJVcwHnYmgFrHpk",
  "key7": "3cjFeP5McpMaL54wJ3ELXF8Lpd6goyEJwv18Ks2Ufdromkuv5XLeNdpHc3vkndkmS2L3o22MLUQjsJHC6TnRNWDh",
  "key8": "4n4yA5CL4h7d4ZVTaaRmxxX3RTsgKSoCc892uoUL7osqoy69goDY7ZCdMbdGsmJd6dUxgZymFRxE2783eTqH9THw",
  "key9": "2iQVN52ALtgSBwctc8Tdtrj28coshQLN2Rdyepq6xCXkgjTKoLbpb9f7PBmPRHQM29KKvdR9jH6kkWfg713W79YC",
  "key10": "X4H7D2gxtAMsFZ6JNyZdyqNg7TsKu1pXFjWcJBdq6UMWLcChx37U6Yc5YH5kf4DZj12HsFpWrKxrrBVdGzkMDHe",
  "key11": "3sxrzJcbhJA6gdYVY8KCW7W5mVpqQ9yLokHDX6HNqaqdBZbGgpws8AAwdUPqX5XNC1NxFZtKHYDNp5nYHxqcd3oZ",
  "key12": "4VVUKy3PZzY1tjNfoCmtsCgeVGa9XWyr1za1DR5KVkxUPsJZbsnmhtCrhJqU2mwkbJmGdbY4u2zMarRF3MBGjKVL",
  "key13": "2K2pr3R48QRjNAacjaWcWwavRbVyALD9SVqAiQ9VdSxDMTzhXrbw2fiaoHURPJqUS7cz6CQ4En4u9Rc7PqJ2VCKT",
  "key14": "2PnBEgZfCdQhDmTRQwTg2EBcszcgEKKDF7iEDFWrTLb7NNgNVMz2Beo1umMSi61BtEo7M8ZAdZ2JZwDG4GQTdBLx",
  "key15": "47iSmG5FHwiSzZuSgJa7TqnFtmVhVA5Eva5kppPiffqQM2jqyHY1agSUBXWEyB51iCmw1RX35D9FcphAe5wB7GLS",
  "key16": "2YD5ToVYEyJ237hXoeZ4bM7YFx7dSNXkbktBk5hYE1ZxoEmNuMME6tcZBUFjMKX8gxgJhbTtArVJaNJ1PvGVq7es",
  "key17": "Xw3qNbF7Ei9znunK52dLoCeSWE4dygacL9oshe3o2ReQ9aWZo2HmY3DAsMVxMT3JKRnDtzdzGj6DsMEmJbiXcBD",
  "key18": "5bxjyeEUaNsTV325YSLdnmNCgZnK4Ysd2xJJ5aZXKuQ7CFVsgFfZht6erhkgQj7LhHL6xxWY2yc8NGSTHw5W7QaK",
  "key19": "2tEm3eTbinuPEZQ7ZwiGuk4zKayBsfyHPXQtwS8y57RFpdojQc3bjac3SmdAiuDoowDt5d9TGrd4gV7LA2V1bDJ8",
  "key20": "61GfTYzjW1p1LchuUqpDkrmVcnYfqU1tWTn8z5jSGPEoG1oFhL33s8PXNR2xxaYj2HjRWeETCokLGob4cwnBkvFn",
  "key21": "2mjQ3SPthRHZMfWQTsBigXARRFdS75Cepm3SVtWYZ4FLqx4RzXy9uMmzJUWBKNNVAGZVNdzvRmhwhtggAnMbXpRf",
  "key22": "5d8CckF21LwgpCjLQuYFyht7EoP8Fnv1B3QjHoPKWfj6wq5g11g4BzVmnejqX8yACfsF6kcMSRoMmWoTUPe1v5rG",
  "key23": "5z5wBBNYooqLgDrKTG6tDs96U8RPsdwq2ijfwq7naokXbizDgetDuznuXeA5i4Bm2im9LaZDTBRtdStNwtvbY9r5",
  "key24": "4Pu6SZRKn3Pq1K4MoNj8NhVyh71B7Mw2Vj5FuiAGufWjmtGfYEwY5J9QjpsBLG9sZUAMRdrub9tBDwB1JE41srpw",
  "key25": "7Db1YxUqkLzPE2KephPE4grFML3R5VtTQuy16TRETtRjfxXDjWv9hVJfTfm1HiK92yHzLd7Vs23CMeLMzeJjoDH",
  "key26": "4A4Zv7TWn1EqCfcSg7V2Z7z3KMzWZeBYAaFhpxRc7Rwyi6Q82U6H6bQmkrjzM48Xii28WHjSVX6eJWiePQX5tiF7",
  "key27": "2XYyCBdNbLqWoo9M3V7Fh9QvUZnwR4PxmaWzfQ66YkfYVnPq5o84YrX9E7MLwfQ9b6ybyqHweRqr6xj2Won4UcRT",
  "key28": "5SZ3gTpDKNJWWfWPDuE3SLBBTpLmBKU4TP6PNZJUbN9QfwypCTDvuoC7bVME5SGQHGzh61c23EiDFiArAyjWGPDR",
  "key29": "5xbF1zbpeMWvmn2P53G76k58VquFHic2XXZDgvgTHeoX3dyZkFJT2HExuzmsmuhcA5kz4SLGvcEm67uA374ZYSV2",
  "key30": "3JdAda4SJ3usfgCDqvHZcWpAPdwBkedrCcC78TgLtcH8K8eay3AwhBQv1VRjbZ5mRvqCF2B6NF1HvfR7y4D2o8Aj",
  "key31": "2MV4dLPHJENf85bdKT3qVEFFZMCb4bkBSjuZrc5W6Z4EvVarfM3pcq16C24omQBuBRGnHSWbnmhDRXXv9jnoY5Fo",
  "key32": "4m3kuaY3AzZw7HCpuNsKeAEfk6kEYHwqP8yJpezVQZsqVTgRbY9VsbTXTdXADwB15b1pJsn2GJ9nmmETotd4iNCa",
  "key33": "5ofsQXfhpQTNxHSN82k6NKKQxkqHJcF27Hsp3NsQVsRvtiNPMENGQmjy8SybV2tfHcuiTUNVc8USTuKbcWigEQjH",
  "key34": "62GpAs1Cgb9T8DCfVSxcEddBsWWmSKH97D7zeQvvj1a2a26beNbgxCxEP8fbsBorGKbEmVB3grjfMjL6SbuGALe1",
  "key35": "hawZkqxMjTqRy63hC4vMYksoU6s95ZQ7pPKsDa3GmfLfhSBCsrTx8GJrRSngJ16Xv5hPjts1E1LqBgUfy6q6rMj",
  "key36": "43KwXXEpDoERJZtMRPGFwychkY2jEVRA4MHbCpwHBJbVwAJSsfQjzLpk9ppL3gC5tDFFqzFWarW6r2cU5EcLYY45",
  "key37": "2eMCESoe4gRVaGzjL5JrYYDi9BscX6A7oUiFbErXwzuDktamytdwULwzJ3h8hwdk7ac7ud6NQ7fmKcwWNrib5yCs",
  "key38": "25LUcqUMN6Di91327Yq2sFAhTr8crazH758iR5dnVqwGp1g7dJJo1Du6gKxFvUqsWyqY12SHewtRe3vJzcv2Tz8Z",
  "key39": "5f9ynPaERCLzBDYCofr89Bpca9J1BqsuGnEqFCJHSghCYaXUumQYr2LCBuCoHmJb7yvbftzwHACHVmz2t31sZNgT",
  "key40": "cWkY7zSpPDWmqfE6EhV2ry93cDzX7mEpqoRQL3bf4LdcMZCeeghcoaN4mmM3KiyGgh6JtcaX5WAgZSXQryoRvXm",
  "key41": "k6nRYSggQYuWmRq3kv8MbYNkXfjDS5nyqUiCYP8Vbu92C6KhjnvhbMu2oYuoJqistpg1cwD7aLTkgCukfbvjW2D",
  "key42": "2yRiyXZqgecmGo7SzrqgWoCCBbxVD65mdZVuApbU1b61xRTSNKBhFxCNw6t4GeFzHGMDWpyRFnSZHjTHrmw84QNg",
  "key43": "53448bdTTH3NSvFXrMigBDSTjrXoyfJu1rkma1aDmrKh49ExCimYtZHRV1SAFxRchLxjC2Y7nCBkYebp1zZjj4K9",
  "key44": "3SGwEDdvXu6r8qmwzfRn8Erv4b6qANEgHjpnRL4WEEbxBPcdKdBSoQAVK5e7PcmBrdwNyxokxGYgzyQhVBrkiB2G",
  "key45": "3sRgYpX7eAjo9yzmb7eyrPCeh3HcZbivuR8ypun97yTKDXo6qKD9Lbts1FdGuF3HQg7M3VrZdT3p8XV6P3hGoLhb",
  "key46": "GBj54YNUxtR7iQwPA6pMbmSqRvVGeXK4kGpe8LsE4ppQG4ync1f3xb28EsoaGfjDCSxPE3SEjqHb4XFKKnEW7BK",
  "key47": "2nKcUvPRzZDrAhG9qhdaGq9bFMTkk6Ap7CqQjB7AjKHzoL7aaSHpXQTHaQwNDxFvaFqKebo345GTMzkXRa42sHz3"
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
