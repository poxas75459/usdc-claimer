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
    "48Muxze4sThHxzyqfAW7xUhoRegJXJhx3qh67v1gSPH1HYQFdxLfsbQ44GR89sLD399ZhhF3XfddLToec7wUFWKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mxkCdrqgWybNVeCjdRvsQd5wFsHDracdbJeP9DjQMAUaxAcH8DTdfP3wD3TuwvU9Zp1hhZApUC5GZRSiDXm4JZt",
  "key1": "sktbvtfCEsjnKjEf5H1gi4zp3qmjhypTrUuaA7hWhb4bDFqLoZ7o3DFKA6czeuGfCxeECKMjSVGP7xHqT7HyRDM",
  "key2": "4tRdsRzoBuC2tQUaviuwpzxeAsUBUaX3jS6cWejhAGnLD8RAqrvY8MkDpstUEawkrZfParwuiqnVzBK4viR4dALS",
  "key3": "3XLY5qcPjsJAxaSNhHUcXjVk5Pnrww4q86hJ33Dx1h5GgyQtm2cqSGv4JtqFDNN8m35ykWCpSpLDFhVrerV2x4Bt",
  "key4": "USaFsYi3iXpWyTzZz8APwbwj4qYH45zhy17gmn3UNexB1D46wVebZVo66DyCGQzFQ76CdBG8ACdnWNnckxMWzNe",
  "key5": "4Sw4BmvxvrnwWVgBrkcXGVBbbSDrGJa6hMnMZAuR5ULa2VJnn5Ns7FkmimwozrCvwKqwopfuRYYbzKb926Kw32Fp",
  "key6": "3snrojnNf34G6vXP5zpKcCHPEYTdhw6UmqN6uP74zqquNUwi5KexS6oAZ9LrHaD2vRrMUyyMjtvteY21TKUDS1H2",
  "key7": "3xijG2VtjcrTQWV6qevHPp4bPS9Xzgo5YAdTCo8Doox7c9nVpTMSDZd8HRkF9KDCvKKft71dSDKxbEHYfHBuXFQY",
  "key8": "241mUP7fLtyAQ9yMM1CgeXrxG7tqhGSGFhmKu2oyKXdyQRR13XT9okKMpQ4yiKf9FozwJGKaCDeBUWUSXUA5biYq",
  "key9": "4CoQVvJY2Ur82LUTWnaMHSbX2EiCxAE2UpUGHA2qvi3pAzA3SDfLC4g5m3Mb3G6siMrMLE6D6e6MbZXuwgXypHm2",
  "key10": "5FMx7LA2YtUsbBrxskdzVW7siv4NLikUSns1UmtJ5ADKSHwthJ9HamYd6ao1kMGJrPeMDBwHB2prjoz3qJVqN2uv",
  "key11": "4TBdfTvoE2UQk75D9rmsFjwF5BU9eLpKDSUn6LPJdwdwsWsdoXLGaGyT9a7CK9orPBxPrd8dbUNnWuGwkCoBMK8A",
  "key12": "qMXG43c1Cf38FZwNoeebp9LgPmoT1kAwQ4Q3fdwXVBPG4DdKdWgEAPc3kt2BwirmkwMPbBrdtnADFsSFCkPsCjR",
  "key13": "4WS66VtVE2QNnsRxhMtmwuMtxY7gccbgjxy31vTXvYjSjuUr44o7D4xzNP1K7EVBCvWRyoBgjKXZGLT9Y5Jdozxn",
  "key14": "3KJrFgTToBHJGSkUG4RNjmc7Dcxg7SUmdT4v9oja2A8We2w4sqxdGhMMBNCf9EwpG7aXeAaecF46psviJrg6NzjQ",
  "key15": "2P9DbECjZ96wF934bRFFbFJUp7wtfYoVTt6Hi2xk7SZBS8SsgmpMLenebEQnrRGQqd1jHc7cfeVCjXrqCQnsYvWg",
  "key16": "63Jgx68NAE7Qdai18V76sig1qqkz4mPCFjG66e9WKDSiciM9v4Msq3tAFZzjKcZLRHJiPBPVWziXYEhUZumWh2hu",
  "key17": "2JCcnX53UWq6XUUaJ2Yfe3jC8d1CgeuFZ6QiL4LdnkuDSq3BMU3y7kCsFcgLQ8s2rQM4RsLeMByqqMUNgxojD7HS",
  "key18": "559J2EmCqnfhZDCcdTnm2RvVz6VehGCuWE357EDAeHTJUCPwZGvkY8BWWB4Uy5VVgr7nkZ9iXwEnMF93WWaQe3s4",
  "key19": "4czzzkVu1vsJ3FuYHpRHinxUm9EsFCUygrQ2XJeLDDq5hBNW1Zfr2QvXF4SyAichU6K44evSjQ8uAQ6PU2Dchoir",
  "key20": "4xLrMmPfErYyt1bLmWYP89coAQPNZ3L9yNJFxTTsviPJ6qoRweQMEqwMRCdUuWM89WMKXJPH6CkNbxzWNAc3GzW2",
  "key21": "5fFdWjjizZcKXD64xiHkEZQBFEMDijgj6JSN9KUZWWfsRNNZBExbpy7sbVbGxDFP6NKHqHX7f82V8AGgdKcPNS8C",
  "key22": "3QHa3Lcy5CFoTYN3Zds7qJk8PttCUfruMVcXP1SLYNUiTL5pd5dSomS4Kn98Zc5vszbav3agGjbyst7cCE3mYxNK",
  "key23": "48yeN8B5DA7DhGBdTgz6D65twbtTzeWnz4i8AH2v8E7rkV5a7TpEhQ94opX8pJ9Y2knFNTNBchywHWoviawRS7r3",
  "key24": "52dqrTPocdDTBrUqAUvjm2HgZGxtVsgRFg7gh4z4YwDqpVsiNaWTTh6WbwLDvTXUgVe9z61T8z8sZvKAMYgk6puo",
  "key25": "5AGhymRPP4q5GBbQ4LBfGQVCEEf6dGUzRfoicriK7vJEQ48tt6P8c3H3Kc4qhWhSqBZsqPAT1RU2Jf69QEsQXMd",
  "key26": "3m2Ybw3rVCuF5qxxTZzerWYpWf9SESQY4SyyLRgEcFVjgrHn5nnsabmZXTRkKSGgTR6q8TZcjqm63UQHordEVx8Z",
  "key27": "87meGPteH8GGc5o5Qq9Cyy9FQVADDxRH1RYMSmT856fUzvqgoQQsw846Vxqxj8fWs8ZPLnX5YXsHJFQKScnqe2s",
  "key28": "5ywxft6ukKVyZjigT49SzpkoEBMvyze5eWb89g5Z7MAVjYextjXZKYUHEKFd3YC9t12FMTBZS6sgbrPmgYi5qhdi",
  "key29": "3eRYwGmD8bAE4UqViDeFWDYgR6K9efodW1x895u6jBir193iLH9SPuRtwepUqjzBEHDKnDhRW648cD6PvGFYq2xT",
  "key30": "5JQg4tT834bQcuUniF1dc85AFA74QzAJVCLMR3bws3oA4LeJ5BZDoNvtrxXWC9DnDdXPq5m3sPgGjqUuy83HhcMt",
  "key31": "4g2LcjV5YcEAHmzgqp8TnqzYjPL9cDJu9N3GYvH3f63ewrpiHvD2W8FjYrmi76Eg86ow2DroGdTgvjUhHVReP878",
  "key32": "RAuJ3GMgdbF8gbF1sjUNiJu1m46aHGvdwGFB2YHk9kMbc5xTU1j7Woef4cjqiaGUWXswwSNJT6zbErpVWLZmUQT",
  "key33": "4Z627EPPXqfYSCsZW6uzsMxm8iu3RdQj6SX4c3q3fRmVg32Ry9dwAedhY6UNrcvLLg472iuXDetxTn3qzNxCXyLa",
  "key34": "38DQFMgPK278ZWHhHVn78dUoc9VbstiUbX4UqtZmmQ7VFdZrkiY2nPxDN2ys71AP3AYLhomiPf9eQGgkwXVCYgPW"
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
