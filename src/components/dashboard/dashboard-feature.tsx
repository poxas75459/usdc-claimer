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
    "63QD6KPJYxNMhQemV4mhmYTZ3YZh6CcPWY8kQsPEVhK2jrugWp2C23a97fP7PjXyP6mcFxgoB4FEc6f62ZgnZbSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mYXQMNcr7Y26s7JAnRduVrnMyeMyLNx1UJPmAtxRSdFimHFsvhEEmbSxvYcDC3FRguR5gZ2qa3Ey5pqZwMA3VGb",
  "key1": "GsizopkLvbJmQah3jHXRJKEo5s6noFEdXFsK7KzkhUNThygmKty3meJ9XdDknwTGU7EajFhPqKi3qgzZVG1tfHj",
  "key2": "3vNNx9JZdMc2yZxPoqPq9WAAjVaamwZ95pHB7XgHAZ2FnzRWdLXs6sTPAnsTv5564upci5z9Y17wVzjwghDvmkK9",
  "key3": "GdBwPYwj4rkDLUHJLGFTrNVqdfUC2hruBuNauwiS5rEHMFbJNBJpXjHo4kXi7MUSa6jJdwaWwtq5iJXNSBVJGor",
  "key4": "2f3pHp3KecNUc7PJ5ww2V2NEWDrkh2kmmM9PpybK3jtfPThZNU85pzdgivaW3QaSEAeJPvYFysSLCouGDYsGrD3z",
  "key5": "4sUP5NLs6ufyTXBwxnzvkDSNEVpN98j64xMVjDPiyRfPBZP9bCB3bFvRXvNFjQ9UyUQ71BE3AC5UJMgBEf8fqxnL",
  "key6": "5SShBKdgaGStx4bU4RYC2xy9swwsU4dprNu87a2j1i9SRnzBAa7V8tXt4yA77n9VWVzVYL5xsSMWqWPpmcEGXb8U",
  "key7": "2z5wcXM74EoZUyp2gEBNac8jRjtip419GNqRCCbPR2ceS5UpmJAbQXD8RLKFsXQ22q6Jnvm5JCTMCBL3eHi5L6mh",
  "key8": "3WtWGr7zfhFKH34RfBYTiE8oK6vb2crKqvXrKVN9718L89LuNtRhHvtBWa84yWfqquWBNjnCLmgYr7jT9KCLER8W",
  "key9": "5Xj3yp7CPgMRka2AutHE3KbF25WKZ3hwBgUWbtbe2d9PGLVL1Kk5ZEJAPHHYjBPZvrMRjwN8R4jMHDEaRMRSueLE",
  "key10": "3h66wah6TbdNQ58Ta9LaY1QpuffcdHuk9h2orR7YJJnXemZx1givG8w9qU656b5eqzVEyonwn29bXG68rzw5p2nG",
  "key11": "3rNBiUKPnmgXMDfNZQ46MUty4ii8EhehV5y9PozGrFNoQp3SQRRt9LHeXpENkpNQbjMzCFiVYVHDm2ox2h4BdR2z",
  "key12": "4AC74qaStbLCn6pLPM4ruPqUpqWipwsGiPbe1hCjUSXhX2XVYDFLvs6cZ5UnSBwZNe1m22i672Gg7tvjBsq9jnj9",
  "key13": "4bhZYSzVNijndtKCD5Muqdc8Tc7EZbea2CFoRF8mMfN2rUugMGsCvM3RBRmX6UShuiPmGmtRiwv9in9D8xAr4Q5x",
  "key14": "2VdVKLHEqA2p8xN1UeoMXdKtgKo8jA8wJfT5zrHQyVdRHSgcz6agjqHvdDBdS1PHV9LpiPugMqpJm4SoxJahvj34",
  "key15": "5kK6BCqmu1WCWSAkw9zz2kcvs5CN3tjfsxV2wAKfDAME5AbfzE2jsuVkKDzoYnE98gG4Cq7nm8sHySFWAmfaJMgY",
  "key16": "firZcN1d1bi4hRbWSdDmL9SaoHLKqbKqz1Y4KKLT31rKGKAiCJkXX8foRKy5635XQpJeo6Syp6ikBm25fNE2DRT",
  "key17": "sCWghkcaUZN9ya7KFq33YC4or973Jn26aNu57vighzNxAnUqYDsT4B8FJCFLbttaE3XZGKfT13jT718eP1EQYWq",
  "key18": "5v4q3qdTzo7ZQRb4RnFautfe4tz7cSoHiHi32LQvHM3zM7XjvNASh2FjvLcDbtubQT7dpakugqJy1pgms1veR96i",
  "key19": "3qFiTcBg7pKTrB9T7irus1iiLBYmbCcHqMCsJ23yBUWgBMZU2bucfxYGhmu9vUSiSotUZEnnpdZcNjMjsAyJTdZu",
  "key20": "NKHfUbBKeyQzvEAS4TRdoCx7eGCv1xz31vXVK4r84v76hCExDAjsHFEAJ1dVS5xWzU9xE9M9Syytb2YMpM45fg4",
  "key21": "5Bhy7ZtAxqV2poJpGedcojZiZ1bXUs71JZN5bZmbYrhRP8RH74EHCsS81Xa6c64y21j91qLNBEuuvHXb2QqbLYpr",
  "key22": "5QBmimwjWvLewcBv1YWWRvCJVWU18a7iP17rwUcnTL6Y1jj9rJvCvHSBCSyYFRL319RRxVEBKt2pycYUnr1Qjo7g",
  "key23": "2gzaJCpRfb9BBGgQpgHKHvVZoN5xvdH5RoybK2ST91QWF2FFXBYN9QGYJ33R5ECmDur6YbVHujNuRtRguXGyj2n2",
  "key24": "2KF8JbaTpzz9mRu8iQFHWfgk1YsViCKGn24QtjU294w77pUBVdrpDZY2r18eZm5W4k3RPQJ72X97FHENoG8Zixzs",
  "key25": "5iGXARWbNLcCX9sKwDKuPH9XWmY2LraVRwgF4P4KHwU5NhLq6nzKcMGyQ7BBqaFmqiVmqV9U2MT2K8ngtWfXtoBf",
  "key26": "3VLEcoyJ6Xdo8PYX6xs3siJPh3XsZtoHTFE2MwPY5i57jGnqbtqNMJPT5B5g8YVYfQF83e8xxZo74opWqT4Bagsq",
  "key27": "2Wj6JGCpBArbuXEwKYkupEMCVpuHkheY2xQb42j7udQhHrt8k95jr2nGK7wtVPjQDNcGZWB9yyyPzeoWunkbfkda",
  "key28": "5cJBvzADwuJdzZpgUY7JebKYVSqrtWFgMyyfUvbZzCjhRoMESWAGf9KnRroZDvLQ6LWL4odYTAPXjH6RbHmohN8p",
  "key29": "3MzCanMFSa4K1FYdtytXWZygFsnFQihu8xvggC6an4otkkcCLpvPPUta65PgJSVwbtBNryWEZoR3N5VKSbR797NP",
  "key30": "4JxNV6b5iNmpADwF6jzMvZvkUtn51jDTkDsdTQPmeNJvtx6Pmt9vpU3rR8x4zSU21XHQ9GWNjU8wvsc64X868Z4r",
  "key31": "xWxcj5TWdyTB83aFmGoj3hKPX1g2SuqWF5FUPL11hKmgxZm3vAggWLsLazt77MrJyL5XmzMEZ8NsMtjbbCoFyyH",
  "key32": "37Dh7Qx36LE71RuFUbkM3iHQ3ZQKXWJv1rjX3BU81yo1M3x7GrzwMnkyW1FtGs3uSaujkjtNSgZPCAmjjEKehK51",
  "key33": "4k8AiE3yed6QprPQdUwB6qxyssi3Ess1mAwX8kKKaqqKw8znZDVGyG86e4aHMcVUdmNGRjz1tCGFDyyWW94g9EpX",
  "key34": "4Hv76uGnEkohMsFwf7FZVWXchHd4cJPYJYspgPsJW2FJtcxKPUquBkoKTy5x5rab67GhCbGY5C87RbWgW4hcTssf",
  "key35": "HzcYg3dMxFW7r6kiZ7mV73xCcxugQiSQZndskEQKKhXErn1QxDdeqvi1nkBkCdTvNasdt6zAv1EdDC1w8kVdFFT",
  "key36": "V1wDepfBCyuTayAb9aEoXjeVQXzaDHQa4VyrzjssE6LaSEMH1vLc1Q2TviGMS3ucSMPoB1h9DHwpWMhj5uh7EcC",
  "key37": "41kXEUaDsx6V219BKgd7yvQ4BNYCXiiyVwby7gxMHPz5jv6A6Si83WraYZViGQ2Gf5d55aNc4tsTcxnxGNq6bFvE",
  "key38": "3xJ44jEeuBzLrPaYGk68ansDDx9mbmSsX9uUL7kiie8KPvSkLw3EbFV5R6ivxkEtuqEZ9SLzXqKQmd919uBtSrxC"
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
