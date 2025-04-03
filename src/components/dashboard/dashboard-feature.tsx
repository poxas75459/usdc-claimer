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
    "4eRRjSi5zib2Jq96Q4yfqGL7NdRbZQ2s8r25bstWDon1mK4onSd6iiwH4nohreLauJMwwBc1T1ft6hsUyxXEEDKD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yPSV2Z5xGFuZy7D38ZYRh1YAsYcZNrrnAquFsRkrQd1Y17MWnN599czcQGFNR2Uy9dCM28rEbgC8Nr9ehtjst7U",
  "key1": "2Dksbg1TwESRTUFQVS9SStzDxibhCmZvYtP5ZaBz96DKQHjbr7izcasQNVn8qbywrWwpt9S94maYBoE5D4e2gPEr",
  "key2": "4q9vKNHwDh6btX2qqLQW6zjpz1i69yVRzXqZ4GfwWr7MMgAXmQ32vw2kqyX76TaPEHeqBqLpRntXJ5fE4nZrU1Eh",
  "key3": "2sJcEBBjqjmAfFK8d6Q6y3M4Jgmi7uFympP5hnhuG9yzLh4zkpobXoJ2kkLgQ3cjcYM8oFhUHdRUxSm5DRZout7H",
  "key4": "5h4Bku3KEqS8wprh5nioBDTjRMrGTGw8eGcZ76xGqPEVYwmnAGxFsGP1GEJRjw9kFwSWA3d7bnheiSMQfzYuiKdT",
  "key5": "5nBsZihM9xQVD1xz4mx1zkpmXwLwsG5wZsnoCV5xxt7yUQraeeWo7ytpsUyE6zvLb9G2LbXDq6o2NWhToN8trEka",
  "key6": "3tcQPoWWFU17rovqx96GWjTaSzMi1SZaXE5Du4cgxrMCuAnqvrYv75oaHfDsGcTBoSpBdyF5cU8xzBFjpMBiCSge",
  "key7": "5KdDvMdWQnhvv5E6mY1SXes2VoWLBBTuTMjkaVcAfBUwmTMcy66eVT4zmkSVzXiqWEWN7WY1FQ8ymDCH78Wpfg7X",
  "key8": "3igqEEkqZUsPdhaSoL5krRYxd6H8K7SS6ivSXtVpRcEoBhWvVp4npjHxmmz62Bf1uj2tPYycVaKcmh9fPmki2Ss2",
  "key9": "53wNB2CVj7dMbgGzG5jD2xJvc7WKK4eLmVb7xpJYUPSoqkPbGG3FJGKWwqwVSSdnzU6qafqUYVR4hM1Jm8vzfL7i",
  "key10": "5GSWPwgmLKar1bwwudHTgyBNA5uCnv7x7AwENvFkFQRtkgr6mfqYKic9p2ZU7hmeJtgiRLavHiq9ZtrSMnvJqJXb",
  "key11": "5qrnD6B8PTyCFFqiVGvFuc4XTFQC8jN3vtQacjahP1B3pAcQewx8nLJxUGgbmcdxCyvirSqicTfaDktBQDjZgd1s",
  "key12": "2mbWMXYWSNW5Sp3MPWAQ6BEzDZYahu5UYCfks5eCR3DSiAXoUtHd6bVg4ahYJTzzX4JmmLxo1GykrPWYeAYET4cL",
  "key13": "3rV7Vzr27BpFTFocbUsFeToaqawnB6mytpcZufsMrjkoTL9jCS9tTCr6Xsu7zw3Qe6z26VKuW2SgDfGkvwMfoeLx",
  "key14": "2MK5xjGKY8c3Jdd3B413RzBmLH4A2uMEdET8cjV9bWZsGdkkeKGn6AgMGMaVvQVThnUd9SNBvus78Z3Y1d9hBeKu",
  "key15": "64wcJk6Xd4i87SFz28aD41aqRGgVTJyAmsLa2qrsB3WchFawEDi1hs7c6nQXTTtYYXsnxY75cL1x7wEihE11inP3",
  "key16": "29f26aP7rgaFMXSqgEFqs1V3Gx1FjvT5nxVbGtgoqJvLSKtsird5VhTZ2KuYFrpXq8REDjSioDykEVs7HKYWmG5K",
  "key17": "4SMhdU4AxDRLtnETDfkLPXfeeqJ4WfcMiVpJeC2MkmCuQ6FFRb59pdwtDQKH6ETrinN1Ax8SCQKSU4N2rt7f9o4K",
  "key18": "3KTFtVKLhR2XYrYwyYptQBQXFTKbBYef2e1bB4U7J6gQRuyHSwPyP37KfSWDG2QwGqzA7MbsQe7bfTvYqzBS7oWb",
  "key19": "39kvJ5DZVTXbJy3mSZqMr43GPmaovqnCC5D2EGbecrYBcfFKiU75PaLvwW2wNP4iDYdQsmrDctKHnvktKTkPv2EN",
  "key20": "2GsN5EFxqnSSXtm4Bh88QXoXfEhYgDGhrq32eUHKAT7WsgZfFnGPcNB1iDKTwpyVrumLt8yxR4zAdGe2KD9jrTv1",
  "key21": "5dnLMKaKaUeZNkYjm8JZCGPo2VuBkwid2wEaxRevZa45GaRfMGkeh4kJkLUzUGj7n7aUujLSsrybKaF4Q7kc83st",
  "key22": "5gHyzptzcNt9Zn6pDuwRQkeC8VKJZ7XnkCm5kRwpsRy84i1CKVrod5rYthutztHmYTJ6JJkzFiXX4XC9xjNSTEBa",
  "key23": "5pbBiFjUYTsegHkLqaQ8yfSWYLGWFDsGNsGLTM1kiHG4Mw5AoyBSU4XQgxzqgEHNky4Ci1GFnSKE95xz25GQZf33",
  "key24": "478gsSycpC6t82MBGr7PCVAH3ckzajz9nkkc8YCwAyxFJVwUB5H33nTax95RnfXoEySJCSZEW9erFg9VwSBXyWh8",
  "key25": "3yu8SVVxtve8VSpbMLuA5XtttZPqXw8kHTvv1nS5aXQy4Cxw15HykuoWTVVGcfUMiw92M1KjvF2Ax1MP8eqjU7WS",
  "key26": "28GV6EpJ8PxP3pwM3FEFZTGFRZ5mxraLGe7syS3z5MTYQJH4j3GNTtUrCnRoajsC5jaYqBJY7HF1hXGmtjT6PLQa",
  "key27": "35cZTxwYNyMpYpPRGzjBS7jGZPK6Ar182PwhkSXCK4qRLFrpXs46rhBPba8kdKfaxQmGEdT8Ys1KyfndhbsQFudb",
  "key28": "4UyhVYNTURDBUUGx8GDqJzCKV1EtAvVzVthhR8FCidv5k9HPgf1h3QePUphqMw3Dn6MsY8JJmqDez1He2pf9hdgZ",
  "key29": "4HZLweB39F2kK6DjwQouSvHPhWBjKVSztwnHTJQD4m1mYJSKauj7e7YGhuUkJKGXHQrDcdDupQ32ZhZHAvCh2NTV",
  "key30": "4gN9wXrqn7ua6NUKca5vUxf7Xx13dcsLSEBek5dho14LKQMafsQALAvziX8eMhqMJ8zriu7KSq9M8b7ak5v2cFvv",
  "key31": "393zshTsNDGfjAHj15vhaGW9DSFENkDKv6N8BkxRbcRqVXVj3Qo3ayuTAJUxLPtrsyiNzmSbThhJae6geDzNf4dS",
  "key32": "52gj644qZRef368Fj1523hPvUmV6fSKDXAqREh9d5q4zWuAWH1AN6TguWmAK2hEhUgByHHxTRjfyaBN4Avt5Nypu",
  "key33": "4oRZ62W1yVNvycD8SLfU9z4pVS91PDRL2a69JseBrn5FSouZAgKGMEdu2mujwG9AFodweiiVEW21rJaXhdYPWeN9",
  "key34": "2Hbt4fZ9qvxHpJBSMsqUHwKTVz1rtTkZnPfpTRtNCqA2TT4VTKc5Px73bmReukJymyk3zC62X4EnWWT2AcTwJyQt",
  "key35": "4F192bNx47cFmvyjcL4N4RhX5mGFxnpa9RARKa7t9cLgwEpVFyy9MkaCwuxuKwtaaCdJWVmVtghxKVM59ovvp5X4",
  "key36": "537rJ6zb52yeHBUCJUc5hgQWiP4pEa1FW7YAscUAbL6wNFtLwsuRsQufN84ZSBKwzjJmo8B8JUQ2CAzsJP7trKov",
  "key37": "3DefUTjLP4wboz2cDGGeWd1P8eF9QzVs9MhjQD7LWowArdbwGxwQn91RgPLc4CCpqc9xaQqv1zC2EgvY74ynFYRV"
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
