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
    "24xbosbp22Q4L4fsNobY7zLLguMUUbDx36Rj8aTkiWzpLCn9TSvm1Tw9JnN7uzjoaUJ1ZKr4VUAUzBL3Qd9FjUro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GbYkboZiS5dvU6ZUmB92Dmtv2p6e5qGJqRHDStgkL3w2g3UCL3tbibiEoVnSmcqN85vwjWQTC4pNzto8THRm7bq",
  "key1": "2q95zbsaBcgjeiSNQaQENG9F9bEJTzz3NENLZjrkngALPMiiygG4fXuxEwaXZUJYznmY7UGhizAyZwegEvwM857D",
  "key2": "2BMzYrNnLd4n8c8vkdN3ZRpM6BiTPX8Y4kKawuMbMfPfLA4Az9pKRtBVpFTK32YVKbyhsK1RgaZNgECJZex2LoCA",
  "key3": "2vWyNXzL5Va5Bgn6JCWuJATJSghfsh7eP8xQSxJQ1YqHPffPcGgc6SL7fds985nNGogqwrsjuxnjWXd4SepyKPtX",
  "key4": "2TWs7U94tE8arDAy4zabLWwzycgCb3iXDbBo36n4oT5E6KSu9G8T9dF3puyiGKesTkP55JLWSUWeZxFos7EmACc8",
  "key5": "44TGgGLpqxceJpYbpayjhcwcisDmNfTDiLTLmmUaquygK2S2dnY2uBhMmUUwVFp7RfhEw3537MDL9WtwbBtJmUGw",
  "key6": "3YT4ojyKEAae6CzkU3EhwqemhRmrNsUF5FePjPhPfp1cJ2ekgiQZJNovpjP4DyqMay4T1QER5TWAxSSWYqmfpwPJ",
  "key7": "pdsh4c2th1xQeNq2iS2dTqKnY9gXnHBpWJRpuEuj7zAX86qu8oGQxpswK2kMbHTrM5nS4i5wyY13VLY97QCMedo",
  "key8": "4G93Vt5p41fK2GLqMMD8bQJY1z15rL7k8h8xHQNU87oZZZE6CqLQ7x1QKxZge932PeQceryS3NQwqnuNjAH5z7Uj",
  "key9": "4Ww7cvoLeQfrcczm2UwS87UdvVf41RJbaV78W8TVQ78KBW9KZkXJPD3H26YrrcFSipcFup2zrtCHrEbm9WSctCiE",
  "key10": "XJgjUG1yWLmUAesFyveBMRLwSTveV2MYUcecnhPUjEM1Ukj9GvLezjFLFt7vnPaf1h2YqmxJRttG7MrsahVdEFn",
  "key11": "4L2mQVeEpF6vaPXfM5ogKA1V9gxy4ibWhKeW42KDzQmFf8Pcr7RkH3Q477WHUEVxt9X27GSBY14xPtGXHryx71nj",
  "key12": "63W1EZ7NFDsoejLRyMd9LPXoBuKAcUL9dtCBjvZfYfEUvdfVpEVgERZvAfRg5Y6yqLvEZmZSu31owFSsZPnPqwv5",
  "key13": "5NEMc6iADi69faFqhcy6uJ8Pr5BCCYiKrdGVW39XbG4EZqai1nH2A8EK4BqEzuA3AmecKD4q8nRVK1SrACVZom3K",
  "key14": "5jTayhYNPXKDkGgiWmjdJxNgAheG83V1boVcna4XxzJwZ5AeyMxYNER4Tf1CowDzkiZjacwQBTJqT6Z6s1tBaVxj",
  "key15": "5RnXejXnCAoSzU63My59XAPkRwPYUJunbSdFw8RTeuhyKacVVVRLyGLBVY2DdjxTY3Vzk9kBsdvnDoER5J39rqRv",
  "key16": "3wdKmtSxKESvgvZnkaoiTB6Vo3tkTMeP2Zjv9Kk9WTA5MF6cLYMv4cfotCU6sJo969s8iURS1eqwRWCEs59GQhpA",
  "key17": "5ysPkqMzNmWswNHyPgQutwgNTNziBXtDyeRpMj48UgQ7B4e7a7oM9ttaapFwt69ohiXJw9uxdBPfjXJE8rm822cs",
  "key18": "33e1kYqS72ajT5f33oSazCh977iaqWgJZPAVx4diT9XnNwtBVbVBWS4AWsuL5a8gZzvJbjp8oc6ePPZRM9ZfZxZN",
  "key19": "5qGPCU9fqEX5Qgtrf1Ax34AEoDVkd29JrSv7NmydPgRH3qDXynpCejhUBKcGaQwL9xyZ91rW2zKJSGAJw11wHCcg",
  "key20": "3RwysyvMTXo7Y22bdGvkvKvHBxZRmVoRB4jmtBGhXnMQTTFHAbvjX9nJJ1K6TNJRjf7x88hB8iM4buJdnpRLJ5kQ",
  "key21": "5u2mj7X2WQXnp5W6qKyQ9ELDdGmCL3Z3ZJDr9DysQFesuXMMgT9Vn9ozanunJrsQ1S4NzSyvn7RF5cowiFtJ7LDy",
  "key22": "4k2B14yjwseby7WxVSwDmREyY7kH4vYT2ir5GcKMMVdJK3DRBruvjg1zJYQM5PYoSoibUsicjNz4iLJyCJaS375G",
  "key23": "5395H3qV9DWujZCnbsRjEPsc2mgy5QsQVpnrkTDH6fBp3NZWi12w11nMLfuvvAVmgw7cYh8LtyDc9DAf9mnw4EMU",
  "key24": "5kR8nBX4L5Y2bv6qvvaL1xJXDphhXsAB5pmfeGEzghtZiuFYStW6KVtFAmPJxEoBTuTHQ2yoDhHQxqKfidLEY47D",
  "key25": "41soJGDMMyZSmKC5QHEe5dEayw6FGGFL3rGtrRJUC7rMrUxKNb7wE6oQeauEizdczEib4ZHvr3nVs7PyzA6evUD2",
  "key26": "3oRdjVLhNXyVvQ5a4NVRfpYLVdCADAAuC85u6eGY2znm94gzefv33zevB7taongkURqdENZejG5TjLuspKTCRsUD",
  "key27": "4f6tbDEk25KZHsXXL7CTtKuTXMKeBtHM3VdV6pf1k385vszXePhBLGC7MCUFtmvQmqTKzperdU3SXjvsP5bhUPXL",
  "key28": "5jLWU5fqqeAV3UCY5LrMHZtKVNe7vZSLmjqXqv9Gi6pRDcLMM8kXGTiHEDVKFABy7V9LMFZGJui28abpgvgmbUUb",
  "key29": "4QNLmygkPJncTQB72h8qGvTpFJ5LqHnrTLV31KB4YB69JR8E72fbJrZgUY7BysqbXWVm4GS2He2vjHT9MZJntZXp",
  "key30": "8gH4kAcjkT7HE4u3xBUQEnhA4ZwFz53aVwTYGNuxZQGwncckHYQ8kyX2EDaowe5qXV4QThorhT36HAT3WrfBD6J",
  "key31": "27WphtN9fgaUa4nihXPzsMuwd6TX4ps2JKZ19bHfTmwJxs6qvdYSYqSYqwHHL8bvhsRnXZFw2zsbGsVnVZ7YrUAP",
  "key32": "2MqTJNSeXhnzZSyn1rYGvGkiudG71gDoD3qkDN8WTT1Li28ZNYjSAV797b2wGtb2KJPrHGAVnmbkrEGKB2xF3PXw",
  "key33": "38edhy3Y6159VA2RYukjUseakdsAs3A16q3YLsG5FzAdCQ6WEKAQhtK66f3j2LtfJdK8vwHgEu4yEudEYb596c7q",
  "key34": "LvKDZ3dSuguqbvoCC3rBm7VehDkkcdaeWjfjmSau5BrYqXEUNHfLbTYhvmaD45tm6PVJHEg3xerPRwS9P37aoAq",
  "key35": "4L6ggsq2PA7eP9qs5hPJMkJ2NPz64qnRDdFnDvZ4AUMYEmSYEjKndTtvMkhytqrNaUzQmR3MK4ZueBSC5Y41YBpT",
  "key36": "63XE3GqYnEQpi9ikiNYNY8DfAtcebKhJNaz3zWa3nJbtKHka7rnz9tqQYy5GqEjJkVv49KgP8VHKHdWnAZqWc5gT",
  "key37": "i6VecuzfpnogZSyQdfVFMPQ85m5vidrWbEQaUs28bwXKiYCAyMtyCLdAxtL9BUFpDecbX6S6tW9NJY4PRYC8Ng2",
  "key38": "3wKLdTdaohWWg2DLu1wwUGbTidbaDkpoYqPx8DRFJEiouETNDpQcL7Wbs48z7aBiJ4GWhNbyd16jZkidia4hZxBD",
  "key39": "KKNgBZsxRDSEJLRkLNYpE9gKkkLhMH8TxJtSont8v9HQ7wickQJz2ozGGyQWZN6pfBron5iZCht5bV9htWJBAdd",
  "key40": "498bc7bPouRVLmVf17ibvcNHZ15h2t2Hn1Juf8mgAKQLNNPBTgpSy8reugy6kz2GdJjG5saKv2zT2JFHGC1jZyTc",
  "key41": "2GaNgjEokswWmChHjAGkNYBoxPQjd8duS4ywkuchKdFttrinc2WcC8Az45UxGSKiYJ8S1zL6mGbDNVBqyUnsYbhW",
  "key42": "4Ngkz1PDHH9SUezUdtMjRMia2VUXo9VngfY5UyMKQUbjQsfMZZzc8XCxyQJhcVcJF5keBo8roKH4o3oYW8EKzqjN",
  "key43": "5PsfcAfvMt7GzZBu1Hi1dYxok425R6LfZnNVj8W2uLm4pRCjjTyES8QCP7PWS2k832ep9KsLW7Z4tXjbrRKGgLzV",
  "key44": "2oEbDkKnWLa1ooXkS2Y5NqV8N1nvrRS8yS2Jn6MY23VDzR1m7joZgTi6Thzk4pmmFzgbPcyRZTTR6CEFLXcw3Ezc"
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
