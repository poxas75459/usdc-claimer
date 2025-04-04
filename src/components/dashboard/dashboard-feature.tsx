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
    "2T9CusDshemVAHUogCF4qAgFDjMBChJ3MdjMWD2aCq2ryQhpq5pENFbVQ2jLCDDhvd6EVpXiLQtEEEuubdAd5cPc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FQKNvtgAAkBztR8Mc7kxPXb3gJHKMKvDqngbYWZJxrJAsYKSwqECuFyXK4Yomx4WQnfArL9CsCECDf5QFw8Yyik",
  "key1": "3UvkewnBw24H1u27WV7oR96BguCX36c497H6pWBpiLRq5K53L3wkRnfEHFcPpJ1nF4wZnLSRkUio468ht8Gg9v8N",
  "key2": "5g2dHYw5zFoh2RTmagrpgqJq4oNjj8YtNBW5W6i8o3BLBkTGbpHQbT5RUatmmPARsTGCbLsg6fm6Qn3Rtdbu8M3C",
  "key3": "2VxuCKotnAyxD22fDsc7xYdeJBvSzg8Ljp2uF6VA9LV8gSD3C6PNdWs5udGwDAoPrq6Z5HNCPCbETnJfYKaLPwHr",
  "key4": "5Mqit57Me8viCqjbb7Gr76ywUZ97GAQz9cHzKPhrPp7Eg6G5Du7dN5HreZ8CpnKdeKJBdjgBW52ooruVfyryRbfT",
  "key5": "2geUMjs4r5jgHVFz4eMesUo72UCPP9sZ7Bu3uWwUarduD4eXNJmZQZov5t6Gd4Ms779qS9zZMCAvVepAsc2XM5in",
  "key6": "4yMkTgsx2YGMBHe3QDmzw1BMr84tss9p6SgHCGSzyfNMF62yVbdACH8JYKXpG2BodvixJoAKrA4H6pdV9mcc31bp",
  "key7": "4r16NC9eG2oms6w5Liau1qc8EGDdT6a5hthxgMMk1RcGZXzxXmWG92YQdZVYkb4YT4jdn1YSc4n64W4SRPNFcRRv",
  "key8": "5o68nb1CyWhCxAeLWTpFQtLYkjN7v7QWZt2nbzu7gzuCybJHBSTt6yf3ZBFXkrxYj3muuwGhNVHMCHt7DQ4r8rdF",
  "key9": "2kARxJWvNEXioJr17pcvBZzM4ydmF4yVSHNwgkYHngZ3mqDm3zy9j3Mv8cPTqDVegiXPbGdgJL9aQdzc61SWUE7Q",
  "key10": "3Zber2TsTpSAUFR3izZeWtsoghpPMgpHsJR8NtdZxHwpUsGdb2fDDaNfMK5bc8Eiz2x6n1XX7mLAR1LEtAEM2it6",
  "key11": "LzuNuqKoJnpDC3Ga3pb9LAneo9z6MkwqDqBgUi7sYDr1KqpqTZXDdxtpFF79NSbTJ5XguFf266V9HkEa6Zgyq6T",
  "key12": "3ChFZdQSvygHKKyBPeenzBbrpZpYUzCDnB2hkLPSxtSBAaa6pbhraVpCQo3w1peXdXU9Kg8LGgXFscfrrEnJ7q4y",
  "key13": "2LVZ2Ft7CbvRCzxTc4s9TKuzJxbQJw1fpbqsRQMrzRcvwD6txdTpnN6ZC8KRWMfPGCr2QNvqcsuqbEXnkUbDPpDN",
  "key14": "3av58JeVjjNfpdQ6Ja9ryb5644zcux9nH9freYW6Lm2eHXpwgcYS2LYn1UGkrzpkJ1Gzt6pvXMG5suxoNC3TM4e2",
  "key15": "2FcqT4ekcoeqviDxasRxxg6NPh9ETxmXQVUFripxE9rf5ydauKX3ArureeL8rUmnH6Un3i8YnyWdRLTMp1Cp7Utz",
  "key16": "mPxXNAKx7rdj1iL6SDSVQcqiU6uNfh5UWjtgTb7FuoQDVAWHKHrspgUvQuJWTVb44q9Du4LRSsBoEY3K6MbAabX",
  "key17": "49LLMfow1Wu6pjFHQreYGF4wMJ4XabK8ZwgFyxk9YZJwfGWfCXY4zYvALCwLjeQkkaihAwrQUnU74AYtwVi31tuE",
  "key18": "4mViuZAe2xyerR39H6tUu6FUmSsbBwPatNbqX9tkTrhLSUXn4TRDqNFXa9wEjvFnfTNX1kAgjGqUWpPhtKrkqDAN",
  "key19": "4qfN2uXTZfUFuKQEFt9skKUnvx55gjnEZwLPA41i4TymD9sBJoubnJv1SXCEeE5y6s9SBo5bS985oY7NyZCL4J1v",
  "key20": "46Pwo9drYErWw2Y8tzcaAKtibWh8oNh1vnT5WR7BpxpcWCgtFk8dosvKi3CADbPfwDnER9ed32JaBUK7RFtc6qLj",
  "key21": "5QWVRJM6RUFQrjZKTnYvHksZ2Gpo2BJa92H5gLkcxywcmCpXrKs4dyUQueFGeTQCJiT1tMLrpc5WztHxKFdnvyBQ",
  "key22": "vdienXhUivuLsTs198UfZjxJMHZXgrm44H4NxbmQuYQg3pCh83zBp3QjT3gFyFG1FaEUh3vsLxfnb55uh28L4Hr",
  "key23": "44d2os39ErCemmhNoyQet73kMzoKFedRdncwDsHAxLsqEuCpBEu8Nw6e1j7MxytxWQycoTxmKydWNAAA4S4GUBGc",
  "key24": "3hoWcjxi61LnBsWXE1Mrnyf3JBJPoGT789quA3KMFa4T7VvD5PsaejUhhYuKoafZs73wUtHgccF15UeVpHbVRSsL",
  "key25": "2sc2kDARdUp92x5b833m2pC71mCeqsERxTgUeqkY6dF6FqoqsnZtmRSzbpPUxZxHkHv5SKzeY9eEddpMMgBAwyrc",
  "key26": "bhzRJAesJtYdUHuQhhewwUdgTESyWbvH59rXsnpiQZayMQagkRSVhAGoHBdyJ5n1KKMHCKH5KjjhQseB2bc9Tdg",
  "key27": "NJEegwpd9wa3zrarF4oTRyZxnQpfTg7wLd7jqDApB7vGt65ypYDEuxByHkMLWLCgoHaM3AxCkYvURm4TwuayKWP",
  "key28": "zgbor4u5PMtDamfZ3pC6podXsdr6su1Dg3KoH12SemcxjKYw2mebmpJ6cko8RkdUNa7LCLQ6fgfkrE3rdXFBfjT",
  "key29": "k9URUe9Ua2Gjxc9HR4G3zH6tYFZ2zkJCA75GKNHG8MRDgF1fb4matyfqoFYbjHkqtNdj9HySko1j7SrQEy4nm8r",
  "key30": "gftXpmwtwQgqxD4bf7bUcCEnh4ajMMZp12j1xZRuxivCSdkzRoimQs85ujHgfjRx169uSMrMhYTtKfefMfYcUMx",
  "key31": "5TZmuX3LZwP7kArWEHgdMp5pU1WY664UF3ghHAAJnkNFDd2dTupmaowyozpz48HYXftDnBSKUCfW7aQvK16aj2fa",
  "key32": "34xY4H9ayq4YdhxTErgxH8bM292McgYwRAYefBd2ys5uPcE3KeGNFNNV5nukhQscPrcD15eBHehVoabPFbicHCmm"
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
