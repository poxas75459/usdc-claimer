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
    "PsT1LQbebknncjA5LVpYvZaH7eBCnaBsL3dAfCSBD6UqiWbnYF9in11CuiqEWQza7QMM4xecbuJmefsfBsXihSg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wuuoqk1f27cpQSLmEa9DusPeui3LRactLUVsidfodjUqSNa4PUEeJiMj2JeoJHypqxJ2pVVyhKJ2sP33aBunNuY",
  "key1": "5NvvwBovUxo32KVL4YSeTLDhjWBcQGKKKb2zkGvbmMdDMASJyFPPwmJWz36UR6pt3a7NdSismvFzbACfdVUTyjNN",
  "key2": "4Ktb1UbaFzbAYNWdgeHGnqa3KCcqoENd7JknsuKGfy3ht7PRjxUygW1k5Dyw8upba4AwCvKoKW5GUzfrit9huJ6k",
  "key3": "4JZPssgBmbQg9dGJo4trfToqq5eXaw29JS1wYB55r2U9Wrq9Z6sLAv4CXTb3zKhwyx4mBhP55uqnMbnLrrGDaqBw",
  "key4": "5VCEw4A5HobuV4NtirRtYYChAZXiLgP1eNLeXDaUYt5ZuEsxJKeFV397QDCUwiEFw4ZiQFf5ZMMhGDjtvY7aXNP",
  "key5": "4GT25dmj5yK29mn1hN97aL9qvsBomQEF4bKnkoVWe4c3fqhbxCHtFBK2Wq6fZzpDXyKEDFyxP2SZDQ7hHyMYuzs2",
  "key6": "4hSJQFdjLtRCsU97benGkan5hXQDoBB5uQvBGBLRpc2MF1CtSgB6okdaLePVNLKptm6hgBC6V9KjpbNbLptXKzQv",
  "key7": "547d4S8TisDcL4DqTZtJk7QZXs5oY7h4Lc4jNNGELJSv3jqeigEbB1ayLVzxCgkiNKvHwPPD6FsXabs5xbNZ56CK",
  "key8": "2xzDVeS4VjGnPr3GoDdPDRLHNWnSrF86vHC1k6ytjBwFTYHbHeoamZTSxo1yk9kZfXcEnwtczX4Jc46zwhmB6FG4",
  "key9": "1AnUbYG29c5RsXDnhxro2J5R2mLa61BevqtNGQQgWcv4xjbyoNa4xzGLHB7Rzdi5kTKWzJp9Tzzr8HcVLDv1mR6",
  "key10": "2Bo7P1ABM7azi7LUSqo2Pz5q476VXRqsaHcz6qHrw1r3pLfZfKXeedmxR1kUApkStudVrgVsLmRVDFubAZhxaMWL",
  "key11": "5fvqWJuYAsxcYpysq9JLibXbDDKGSGksFpzC2qAALtaap5M1uSUTmR5Yp77YBC9mACvnz7PzFbvGS82ecP7k2DoY",
  "key12": "4KxgUmcpTzcw5MN8xkmPN7fmeTri6PLe33XtnaUDk7JwyUfKiR4RKDH1KMNWdfhCs8Hk6uApzVhVPBTQqaGitStj",
  "key13": "5ztGjQFVdTKjvdbprFTrnFzD5wZC9bfGj9CLXj3RRHsGnrobhJpQsxE8CFJyDWTqsQdj8f6wqwKWQTTxchsKEfwK",
  "key14": "3GXBufq7AkRFY6mFJUJ1KBhUkv8HWbBXbCgEZ5kPyXHmbXLxeuLjBmGqhHTPEgRAde2c5vZp9g3wiucB2nJT8waG",
  "key15": "2FXwFbXrZsRiS8hs3VYivT3eu2rBn28azxf1tFrYRs1Fp8hSV32ym7yjQZuHPz25VvYGh4Hj4nfFSSYdM72gPdeN",
  "key16": "3AS6Rt7mtrRhqgC7JRRei12odZDUpxatPFdd9SSMLXThkuB4ZCBufXA13eBMckCTTf5a6PCrAVuJGVSsjzRSrDQL",
  "key17": "2zmcbbSCnUH11JGxW4b1gTqehxEsv1NgthGwzQQG6vYbiPBEfN1iopXFQxPS2TrktewdTuG6WsKEm3EEuBibVymX",
  "key18": "fQKYkUEPYCsWFXtbCwXybgnw8iNiLRtA2Dr3f8PzuKLEM3ZRYpvCSumHFhxKVw7MoMts4h4EEAjzPSEgrkpCLCr",
  "key19": "DwN3R7CZyrnLdYrXN5AQizL1WdJzhKmYPfSSA2SktdMCLWB3RvEBm4hSvGGQQNDs4ev6kDgfqf6w5E9A6qCftxe",
  "key20": "3fAQwS18hnfZnUe1mLnhN3SBsZmPSuCvwKRiqQhP9gewygFnybCgxVKZkS7fbkDF5cc96KsH8vBmiPHr3zE7wXUT",
  "key21": "3hk6Tcr7USDa7c7MFRXK26ntcRHJTmXi9Nyd8XTUQzy8C8vo7BqFjb1YbvxFPXqwsQvZxZ9DTkbQp5fdB8ksPryG",
  "key22": "1W28vz2XWsYbm1t7zLvFYHqSyAPFmpYsm8xMQ8D5NwjbTFUVZrosFfM9afkCDLvZA3mbohqKZodUTESu6hHPPLh",
  "key23": "25rChsZyZYUoyq6W5LSp3n7goipPnCkASp3DiA67JFkAqafKnywwbqXY1JYqdrJFYkMYBxYvMP6Uvi8DgtHK5PNQ",
  "key24": "2h5W2ofCVtc5ddQ7oq65LFq2Pi1pUfab6njLgsGbEDD3isaTLUCJVv97xEGiYX5ahXcCEokJWep295JvrkNFGEKJ",
  "key25": "2aL8bkiNY8mppYThvVaGXEWtXvQJZBdRKfFX4XMqufwvxNx6WTfPP7UTg7wcMb2Li2hZ255ZU73PyhMHkb7inaYr",
  "key26": "2vog8nS6K8AaaYbxHFf9NPgTDfAhZkBvoRfNVw6M3Xpx55TzU11jRRLkgNLU4f41cQjDFevk1WnwPvBc8zvfiaDW",
  "key27": "4Q9hUegUAGBD7zwAG6hyqGWCN8hvcGvo6pEv8F1B7QKNVYa5EnGUhAdMtQsPqkhcKy8rZ4BRoj4KHDGHtnXK5YPQ",
  "key28": "ixAmKxawXS1ZP3jiBdnzLzgqutWQd5TJTDxr1znzkuhEC5vC7yKdfiEJbz1MQp7k4Wx81k4GANkf4QtwS3djGFY",
  "key29": "3sF2AG3rj1UjXtBwmzKtYKVY1GoBhkv4iFeyVRcK6TScNWvTry4nZjuUdt8EGwbhhbs2AoQbkGpnw4j8zBZuE9No",
  "key30": "3hdiWJz7XpzJ2tqfsC8UUYRcwBA43AYy8WCGb3ZCYLdzprGviU2aYj6bWbQfure8aVhchXWrVmuqeLsz5qRKCpLC",
  "key31": "65jsSCCB7RS7xPVKZWHq77u98FPSCSTWXCfk9Y2pz5md415SgJPCKfbxTeq5eVa3BfA9rJuoTGghNHQf7nFVh6Ty",
  "key32": "2vwmTvZRanJmBJBKqxE97AfYDmXo8qqw3MjyUSoiK4j5SQd3wxW8s37s7waFL6XsR11i6cBkFTh7BS3r8qWWNEgm",
  "key33": "3LXVGdHREfEYezSzqDET3wV6CFo6X5pPnoMqJbaByiqvayppMPUUUGMdbXMUc9n7Nqb9EDDBaywVieKyTu7MXL45",
  "key34": "3yMcJkBsnWfUq3dZ1NPYENFJoGs4kLZFVNxZgkyzju6PCLi4mdrC1GtxZ18UubUVrUo5YU8TH72qdvaoLLWPZVts",
  "key35": "4vG1DQctazMKxj1ZNEYzGXADMky1eypmyqPgVmNaX3C2Y9TjRHvQ3YPeXmjFdq5P5cEevjkSjXxJDLv4NuDVXqFy",
  "key36": "39bYaUPrMahtUxw8x3mcnDkgGsHwpbW68KF3s1iM4fwquXbmVqRQQoCRaxxaiZ8W5xjVNGzih3814Kx2RwKDKzUg"
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
