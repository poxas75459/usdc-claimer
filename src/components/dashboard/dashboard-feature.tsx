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
    "3B5sdwZyEGGzU52GK268W3Vhkot14CXXLjKQeqgXiXodUiosRvsP6Y6HiBky5sLm6FDWoJQZ1TN3ZNpF2pmtoyHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Uj1iV25TTA5gPpCzmLMMqLhky1XyBfPes6ob9A81ve9p66s8zGnSsB5yD6ZVAwrUBAyNssybuxyP9qH1NPeheAS",
  "key1": "NGx1Hd8ESZa1pm4Ju5Rwkf6XyLuwVdk2sZ82VPDRzJSQWH7w3RE1KqW9JUnJxJ2f4z2XDkskoEfVHcun1F1YGSR",
  "key2": "5bZ4KpRqWThnfUvrr54hPS4i2VFgj3H6zntMw8KRZSvRc3MzF8vqJHLAVoJ6sN2AdyaQuvhpCx4DNcLAbhz5y36J",
  "key3": "ydUXYLGKsXF4MtrFf9cZvb67fdQHYoQZtCrCMFP4Uzy71Q3jqhMcHagqbTGieRZhBTiwcXKhgACMbeNLyXz3SbA",
  "key4": "21vRMV9otVmXVXGqopcDHrLjmiC62PGzpdjNPnpwi5cHvD9iTPixTrJ55zpPc6trjogPpAMbfUMJBAukn8wuh5kt",
  "key5": "4KRYCiKnvLzJmAN55mfjdTtDSAPZoyUAJnCdZ7fVoCReQex6kxVjtgZn4wjJ58dQSPsTDetUXWrB9JUqbfAJqmrP",
  "key6": "gJvwafvQJUAeQVwBt3t5Ku9B3LjS5wk8Gq948ZxyYeqCDmceUoAy28FB8z4tfcEfnFgoCdoKUQbjrFfS9b7vf9P",
  "key7": "Rtr4UZX9FGboJp1AftzTerXAYgeA7fnVpYULyugZ9Pcp4db5JkcT2KqxXtSBJ2LyqSBgJqYq1AKx374BdHsezvX",
  "key8": "2rEByx1gmcY1VFZ9f41mUWd9y6Fj5fjmiZ3Uq1yP9kb5bbPKdPAENgbsEJ4kwiz8C2GYeTMyk97qBqHfiFJwWt8D",
  "key9": "2ise1dm2XcGqQWCw1pt642km3XFb4nrRKAoZ9M6L5rW83tBtZyi2P7BmLzywqThRDoRq9zisuzfGe9jgEiDtVHHw",
  "key10": "rsywyPgooeuLdK8LzoFv7VHm2aGdhRnBNhDkGJNcqjvEuiq8dCL8FPu196fgP91j1RVfcEXgRccvdyprdtLzz4E",
  "key11": "3WUhAksYawASdgUCtGhzEN54L8nSDXVNzvSndKdq1z7uaua8Sr9xe7ZNG1V1KL54TKFq5ZyJTmAQHmqCc4jpEYDR",
  "key12": "3vg2xaUmsEP8s1VMcxfufmZJE2XpNKxFCsJoBNj7kkZyrQ8PDFonYLwDu7cVKUFW6SeBjE5SurFtZhUX1M4PRnXp",
  "key13": "4Gr2Wx3mJHb5uMtWHHYX92JgFYrZ3vy5eqQEyqVLtx8J7hLSvzKpGpXBziwJ3edCbM7DZzSSw7VaVvtFJe6ESX6y",
  "key14": "4z5qtnt78Y3gp9MuMxhpQ4rHtjBDuLxBeRCMR2WUvirjW91MjVjGJtBDfKAZp1QV4xuWL7XUxqqBaoR3MAE8YY4Q",
  "key15": "2PmbbRgt2a2i8hYvP71fahL66jnC45U3UirE5yuUtS7GsyyPzAmGutBqevL8DYM7XsXctjstcSD5eTApHFCDZ6Ta",
  "key16": "gMwmVQc1tYTTZVjSmprqrnr4UQvU4geXJ5JeJjQwzEZro5heErzTdR9S5EfeQKx1XUdymzuqEwnvFsMX5zDppQU",
  "key17": "5YVeN19UCUdwv1satRJuCe7h7eTE6m9o1LVmukY6QbY2x7rcDVXkRCtnZr1ibdhnV27fNPK4kWcAozaso2QPDWJz",
  "key18": "Q7r4nzUzYuk4XuLJsXpnxyi3MgxQtG8UaXGr1CxqNvUex2QGsEEg4tFjWSejy5Qug9Qir1YP6WW5tkoaswn8uB8",
  "key19": "2T7fjxrQfcAmVT8fiwcNwnH9VayA61SsNqN9U9u9jVm9Y21F1ghRJ4eEGhqxcmZBxGCEc72Yp87AXqmNAs6cKXJo",
  "key20": "eGmp9oZXvx7YH3GcesxZiy19q2fNiC5PDNiWpzquNicwpXv3ixjy56xqD3AEdqyZp94UwGxe4wGp6zpHhBLDJ3m",
  "key21": "3bSRGhGkPU3QxQPaCEoJNNPbn6cEDNNdUkW8L34YekSSSCmcyUsFQLSejhuoaea6xXEoBZmFVhd8tMEHoeXHhvDL",
  "key22": "2syipJsuEhbCjozr8UKHK54b1f2Mw9oYTKMgycmJPCjumaAYedaJ1JXYygeib48xzpLkH2jgmzgcE5DJc145zbBd",
  "key23": "4GjMWzxNhMJPC15KcbgHofPz8jbx715Le86WLLD5nwTm7E6yYKtwiw3e7t3HMPXJ2rCvQSLRdErsiMkLQTyW7PeG",
  "key24": "3en23v32TF2za1MKSj1jh1AdVXuDUpa125dEJ3v9qBZfNyScFwZYYuLWs59bQEctM9cgWm99WbTUigCxzzEuoNry",
  "key25": "3NV7etQwG478bFw68eqrzbjNiuXhZxPtmnvpH3ZVQ8fcxoJ5rGKXooLnN1hQThmQZ77FpgFUdFukBKNj14sLB9Wa",
  "key26": "5bRe7ogRy7mkygzrgGRcFfXUjNomhNiXXeVcrf93WzHbin2LKick396wRd55SMTScZ2xhCRK3Q8g4VLaK9HVovVN",
  "key27": "zKShcTvW1wPFYUeKoYBKYuVrkkb4y716Dtz5Xk5E4VDWbvrJxC1L8Megjy3zr284YeWmEjooCDCeiH8GX9CzKvF",
  "key28": "PpwxKd9JyBFYHdu3hzWZBsLJrqhKzKSUP9zxtQRt4zSiHsN8R5ZLEFScgCtDN3SeoSAm76KsRibBpjLTJBStUjj",
  "key29": "nbgfr2UrFPCwHHcdWdRRNtgQs4zF8A288AHjQyFBy8YaorBY6VJWKKEbsY3FQezRJSeWiAVH4DsXdriv8ncoPrN",
  "key30": "5p8S4L9AeD36T6ecfsPAzQXKcKu3mksQ9jPY1Jju69PwnSn3e26MeKU8Znt9EDNeR9KMKNmcCnAUTBwrAaeEyREN",
  "key31": "Uyf885DyZ5HPjNC67TkBwN99YaVusQWyYDCEWP8ADmz1o7ZN5hArdW2Zss6gkoeAvy8HugMW8x2cgdsDPaExQXz",
  "key32": "2ZbCVRec3WEXQGg5EVDKtYvansRsrjdYpzatJWEWXVK6VJ6Mnde5ygkD9sqe5Vw8ywmytsnn3YdZwBLnuFqKTmum",
  "key33": "38dtbQpi4YCBrKC3pahmCZ3owvtz8sp5A1Gfnc3BLSD2ZxQ5RU2QSUoXR4gwKgboUttvH85vviNQz1DYTFndnyA8",
  "key34": "Hpa84wxboTNfRWtrgpxULmrChFpcH7Z5Mj7DoxhN3Rrr4rrpgWQRkgGLtshW77A3pPH1mSthCFieRTLuAdbsoRD",
  "key35": "YYPVwdS7fgPmwjCyWDnvAhqdqxgLRhoppMCNjayYZrpL14zALVeJb19zgrSfsawnmdSvyMGyCcq9TXYa6gF5t5V",
  "key36": "12PRte7B73MzZHqAB8gY7HetRwJY5yRx6Wos3hRiz7N3T5B4C1ESESJQUxch87VZJqd2cw1Wkd6bb975Y8FSXeP",
  "key37": "z9gATQBDAnavVne3d1FztkF1H671WnDzNLkpC9S4CWRsKHJZRPAKnQAE6KVSegVsyGh1HF75VeSWhveUtFBLcKv",
  "key38": "48JdKav6JS1KukYZY1LPAfpb1j8KU9gLYhTKxeLn4N6xVhK1jpVRBuyJeWK6oLkc75vpQqRWqH9DhnHqU8junhsS",
  "key39": "279BbayeDdUSrqvMtc5M6gco2MXaEoyyjatza6TqrdBqcHFw7JHCFfeJu17LgypLWbvp1FFfYENcwnbb9BPQWAbb",
  "key40": "5AUJ57vDVuq6JwVZW1Fha8mWCofTuV882VmJgvMhAJfrfRnPG8wp6KLPKBQ6jUvPMZPj2t3gZrzyhN8AYxxN1vpC",
  "key41": "511hy8mYZ3PYpikGEogHHz6UuPM2nhX472swNHWFoQcKxhxjjFqchNyMMjUVmFunAtJDQTH3MegfweKcWWfwwgtj",
  "key42": "57L3sJHMidszttaQGfzaXjkVQ8ArFCgN3jT5TdmmmkW4eCNCAmbkwFEtJased8kn9QZy8Ah2pq9KrHjwQsbnSGf5",
  "key43": "3BfyN8bypxMYoGocut5L3VdU8ZxxG5t4yACRmDWTQvAfGkVt87okNzvKcxiUwXBP58vcwVwvbupRvYsqW58vBm5o",
  "key44": "2JvLqAJTjTXYxFJt4iHrUbhh2RwVCkGguZVC7FZEeu4Zw8XGQbbMqZQsXaJDAyGzpAoG5xj8RB4AVo7CVuPPUkio",
  "key45": "5XNnU2faVZU2uErEFktPq38fq2WS9Kiu82iKkYspFr42S4HisPtDzE7YkRzRzNJbFAngVxLDxmH2H3bgyjMKSvkM"
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
