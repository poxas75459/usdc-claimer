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
    "23SZYFpJmMRRcYLHmTycuCvFvdszBiv7DXGjFKxvHDckKAt7BYTxZw12s1Vs6kp9Y9KdCDjvRx2J9JU7H2ZuNNyi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ACYwAqj552H6x82KhiHudZbozY7FLPFwNq4JNGEyrgoYbLJdvkCdL1asCuC2ZUgARm4XGZVpG1t4Jach3x8gTDe",
  "key1": "559fuQN6DSnr4G5LwFoZgFALDv28cmw1CrRQwr6Jr92Zpy85JvT1ozBfa2RsfjbLvGjRbjTEpV748djR9LUeTkvc",
  "key2": "3Tt38HZ271w8CXuemVxPtX4XB58iNnCPNMkmgbuAh8s524o9QitmiDw993AMU1LXgxNAXSNaKJLNbQb4PSZt5fRH",
  "key3": "gsXw7utBAJSFCcNXhhc1mtUzrd81f4pFPUx5uPci3jH2XaWjzugJZy3eBrdmXijzPEnLBTPBXyizvvVJJFh4rYh",
  "key4": "38RmVjygRThiGCBQ3zREQix8YS6EEPA1H7y2msp5SwSghqKs7v1RdRhmd1oo3yhgrwoXw45mRrSP6j5x2XXLun36",
  "key5": "Z4ptTZ57ec23Y1at6Y3nCMsESFsKLpa98WQ4cenBSwwzpmLWzufMJXxSAAFvD3JfuxNAWU66uY6hnNXiFPj15xe",
  "key6": "5i7bfnZWaSMtcfwAFAyQDjf9H8zBb4dZKHtf5ttEKD3SnGiZYKvzBz5G5eUwMWnyMDzSsHqkzzyTJMDr7yNBzQ5n",
  "key7": "4Kf3LfMEiU7bsprb7vGyBftawni4bfpnY4uSRDKAJd15rQhT91A3baXGPhPeNRkH71bFqgeVGSmPEAtcpCL4p3yJ",
  "key8": "5yrHaEU9NwPTQMsfkRNEoo21H7LwheHcPuW1LLCwgk66DyFU5Hoieezts9sUYc9ycvJQKbaa3HsPzJhYQjLKzuoB",
  "key9": "4WjVCTUPRaKVPeypUFgC42y2Qn6BzbGF5z1NLzdnsAsPvh6FXQw3byEhaZPEyxREJqQaLWQ8st36xNwpJ1tKgpoN",
  "key10": "2H4CKRoUH7MSrz2tkfgshUk7xHFwLFVAk3RX5LcUvq44DeGWYLGbUKfkeS74pcJRsmua151TVcy2Y1ms4TpnU9e2",
  "key11": "43q8SLARHHK2tT8pADgGtf7VapKAiJcsZbQyEsh9M9Lq5Tfkfs18QRPCwbcSEHzYcvxCQKAcR2P33GraRuxyDktt",
  "key12": "5fh9JzvwJd7uQF1emDZbKhRQDAM6xgS2YkRD8Rn5ottjWk6CJD4V4BEE5DTMAFPmxNMrMyPktQTqju2cir6oX4qN",
  "key13": "5hfAPoSVGkLFDANcyYpqJzJC9ZnG5RfGH7isEAXJJSrYsxuKVUNX5nF4KwFvJQuASxwu9YSqXxNtnGZJ6UEwXokF",
  "key14": "M4rSRNa4ijqrcqDNgUhTgHRFideSbrAK1nHzT6HX1ttW7Rhd7VW5wNBNd1qTZe2maRmYDHvbQVxVTBUE71kYmmE",
  "key15": "2gD7W3twMQPrHiEhe4Pi4ymozPSPC3PFbpxEaGETYuN4vXaMKJpXAPHrT6AzmJcu9EsK3Q5cd73S2gS6L2s8QveH",
  "key16": "2mNpHBenwvmVbMSBmMiNUH3fSk24AQuLzD5VTosLEshjMrncRcyiL9CKomDirfk28zs3SVx5UszY2o8wtzLYDEQS",
  "key17": "4Me26oF2LzMX1jnfMq9zymdWCwSatvQcywCd81U3XmdSx8ysRuw9REK5U8kpjWhM8ZyU4x9CAmezeBTFZYBg8enC",
  "key18": "4JGGYjUS3MaQkXMAWQXcKDJ4gdTeGuDex1swpnwULWtw6DKQZRE1uxSxzGkeXWr5HJ44NBkRm8mtgzVGcvKKt9v6",
  "key19": "5v4DuCiN4iqQQYfYCkj7hdX7a9tx51Awj9LkLGBvsFoYNrdWpWL1Teio96uF9tNYRJsevrHs7j9xWYiMRUkNnUBo",
  "key20": "4ZM3y6sqrgimPN7dQVf8L6k6FgdPYG5TjtDYZGpKAg5Dq2rSPLwcHPoxaQtPbtVKt44cE37cqgQChtPyTU7RnEJ1",
  "key21": "5TTTyngMinvsr7h3sLgkZuz7XTM6yaCKmVPdNb24GeUxwf1HkrP9okTWTe4aMHrUe6Pt7FSQzeiXaUgv2ENNDSFc",
  "key22": "3AHHotQxnUosjTANcjvAXmaXdj27fL97aHuGdAUNnLxwJyFyrn2GXnSYz8eN5xMBdymYydXhh87PUg6PpQroXqHm",
  "key23": "5qMhxrCDBS6zMwpp7kA2fMbvYBMC58Yk6595FnUYGy1w6JXRvR5zdffiWmzTidwQEw75zbt4LEgWQSBpq3JwFDt7",
  "key24": "27XcR2oVUPuyR5Hr3AucUyMuk2wjK1C8Y4DmfQv37JFoF1PXqCRsJoSJtD96WA4Yiof94RgYJ3ECNcpvb4AgMjQT",
  "key25": "5CiFd7QCSSs4bsQWk1rkNeM6b12S8q9Fzo2YFgXM5LeyDj7jgMnSAoMU95TC5jYhfFU7Jk7DFEyzL3cvsceL2NVt",
  "key26": "4d4NyKLZEWLjsLqQhhraZdP8pMYGtyVoNkCuGpxC3xUqPmTSQNk5YMvhXLF9p3zSHtWVG4FcPU212GH1kb6d35md",
  "key27": "5SLBEPCHNNojbfyAriYs2TJf5JzKN3pbvM5uaKwzMv7CFojoyvghTfXX3m2NYfE3w1ZyKyeoR9BLW8NBZJnjmJ8W",
  "key28": "4x93vsEhFivZtXtHdoB2RxJRcgcu6CXqLBfmryU4wg2NtbYEAW7oYvkjyHELtSNzikhAQhvNgxTynP8cKys7WaES",
  "key29": "5zi8X1oLAAoE6GFo5V2iUy7d8hPbtJQCcWcaop9dbHa7jufV9uZXuqdHNs9VJCL9KQ8QW9kzzNRRXBxAWnVQBNPu",
  "key30": "zViMB71dodxGu9NrH1vvSHQMcHXo4xXeEhfHsqjS1wm7XXL8XDGBnow1isKdy7ZQpNJzjw2DWJwkU5e9STXfHJe",
  "key31": "29Z6d8oyyLwiZxoGbaPzewiQRir5J7qFjN485xXmQSxWtm5AbwcJxQ4eK5ZUGciHTpUJ3xGe6wEXopcL7QW71fEK",
  "key32": "4T1FNfCSKPbJtmybsYzYczT8XgMqetS2agBSS8hfqaAgMXQzN4sPgAT3GBhK6dy6fGXUii6hqQUXCVKBuPRLNTJC",
  "key33": "3pr9sp6i7Vzm5WE31t8qimTUZp1WtR62vdvhuQKqhVMLFx2AJsJBURRqX5GLWF2pmriceBRWe8bqurRxLzbvwaCY",
  "key34": "dS83uKx68Sgibx8gqt6dKykFdJh6gsqeYpTs9Qfiyb7jeqKNieJhexMe424A9gbcKfQevc1FT31ZS1p95NGtZJ7",
  "key35": "5Gq8wC4LfzCJq2WgnfUykHmhjFmBcmdYuBn2Wf9MDrKgdMeX65Yr6MctebNFdTKdpqD15LKBQ5qvj12oi31yS9BU",
  "key36": "4PnXdRCDAyNyVjbgfJ4ppnRZqoQc7ykMuYhfB6yZDqucseDggYdYcLW3vX7sT6vCfb8nUMZ9yVCWkMnEiooZEtnB",
  "key37": "4Ye3UESScde1FFsHjbtbbCWzxZEsMLMaezjiAXiXujSN7cbop3xnqsfCXyiSMw9RJDtHDWAb8BX86HydjXm7eEuZ",
  "key38": "3EUkinfcv2rngR9GERdxD1FHk5FiLoCdm7JRp8j88SpaCfQiE4jSUDyvJJMdbEVrSxicxyutMdazZVCjCLhCxKEq",
  "key39": "1MK61kWbr51n6wTja2LRqzZTeVmMYtfrd5z5QncB96M9Gbjo9bwuyp6wap9oxfgzwbEwb3R8UXgKV4HsSE8ti7Q",
  "key40": "4ZLNJGBpj8KUwDXkH92iUB57iha8qJafMdGd66JSB9szwNBaRLoXmYg6wqG6y7TUitwVtatRamYzoSk8xYEExEcn",
  "key41": "56XiU3WRJhSZjuvs3CfMDVNzCgjsaV8gxHhvrEizLeKsMPXTEdsttDcicexPpRUEoHPhPeViSDCA4kkdGtM3u4T3",
  "key42": "3g12cJ3CLVzJsxo1BFkFXo9fCTvkxXVsQqFtJKm8vizzssZU5ezsNrn8wzEo4y2xBkm6hEq5gZGLY4aCp7WwYZjw",
  "key43": "4v9H3NAjqsYSZDRtvLewXwCx5s2f5wgr6PHK8i6yd6NjTm7NcowG9w2sAzMuBq28tUK5deAWF7z4bG9LtvV5S6Nn"
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
