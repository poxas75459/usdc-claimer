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
    "4p8BpnrnS4XAmMzBbWE48riWNmnFmdh2jexUTAFP5dzcRW74ByVKbwkMc4xPwrMhy1WE467hNc6awaynyQLeiNmU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rMYibNPjgyrauQqk6gQyeNNB9tBmyuM3aWxhfAm5HJcRTXs7VVdDwLXvnYQcW46bXx1Mtf4kFRdwszbXgdcLrnb",
  "key1": "64Lm4H6LKkNqyAjJpPSwBfYzgWnJqD1z8o9LJVte3GtP3aGxCDMym2n45ueGTj1MVMrWZczFUwxBU75bBWBVTxQs",
  "key2": "3xdYgVaqLKNVNuGiqATaVmH4GJimAsy3fnea27TGDo3CPx3V3b2Qej38LnjhxnC6kDn25UmNVnQQGLZ2BqfW3frU",
  "key3": "pxYcK1kByzRPoeSwTk3T9Kx3HDA8v5GF1NSsZucN9enUKtLKyufZrRm5dmq7sJx82MPNEQZjYEaz5a6G7sUbuB8",
  "key4": "2MEQ2WtovjKzST1DnJqg5JT67iWx9654rk7ggnLjFg8myMG5s3monuE96jwq5civGv3MAPr4fvc5gFJQnBoYqBR4",
  "key5": "62YyQcXmBP2165rCggqXtTYpnFfkiwKVSRNxLNVrAwKLKgmBqeMU3gaMSzAWzhASWGuHNNjrqow7CQPi7ZddmABm",
  "key6": "uLaKo1fsNrw5taUbZoQdg4Ro8qGCSqSLtAim7T69tgqKNjobxqYydSnaRFzWJsELTVdBWMevg3WyCaUSyY1FyEB",
  "key7": "4ccdtNuSzXWQMDTDTgPf1YaRnKH4TagyA9XKF6Cv9Tgaz3mjC2nG4AS3VpAFv8Dsi4jnS2NU7NzhmE5io5o2jomE",
  "key8": "5Lad3UAZ6XFTT3keB257wRqdoQn1mcCgzAk3aPkjDnMNMeJMs2CGrvPRsAggUiFgYqXtQAKTgh32zCeDWDQJtRnL",
  "key9": "5nUk6cPremj5HCutrNtjBJYibQNjQksdKnVrupsfZULzkSc4CsHWBexfQqSq6rDwLtB4px93sT7AAuKN33PJu7rh",
  "key10": "DjSFaYtQ6yeXKFycAiN1bRTF1C5PM17qcgj1ksneoR4864JZgT79wiYua4tdGzDxcTurt5HFE3BocfNVwsxXYFk",
  "key11": "4WQQQfjc9pdAuGxN59jHsg4hviDtdN4hQe9WJa7xWGw9HartKf7UfXnCT625drrv6gzdBNe2G6UVXXp9wz5QKij5",
  "key12": "2PyCQFqMJ9H1ha9RumUpuJiFv5kbGssw2SiKEaF369dJKK6fq4HhYSuw5D89s5oo3vGRB5orA72pwS799GfL7Pu1",
  "key13": "2Q84rWLfZ8jg3TJWV23ScqGzVLw5YgTn6Cs9BAgcYTU6FRk8LPD3wuYf4xERKxW1f88TPnYDHdAYFvf8xanMkGxU",
  "key14": "4LbGv51qNw4bo9RZSwZV2er4tVLVYBDWUNMjHzmSsrzR5FVyunYe8EkuxU4ZsRtHNVi12Y6zitq4DkZmBU83BnyF",
  "key15": "4ruByj2xZA8FLpZbjs9jTwkoy93F61xJVoYYiTF9TnANo54VJDKHiRp16hoZvwvst3C6Qi5DSLks3qFjNthphXZ6",
  "key16": "3yeZyYwE9zn9xwfsUxk3r5jN8AsvPACCSEigxGpAqvSv2NSoDpDpwQaUkeMbHwY2GK993r5TPTzHHuVysV8kZUAf",
  "key17": "5py1Bo5u9c2VTpYMArVHjk2kfZK7bv249yomb4nysgmhM5m28cmGeXc9aRM9g4AoZaoanBac9pXtg6DVjRwqVVF8",
  "key18": "C3dmhfUXTpLkgtbvmiCC6XYYErd4TXaFj8GbrLXWotHTtJmAQBRLB1h8d6MyD4rEoEhNwMRcMrHAjQBHJRZvehN",
  "key19": "4fvfb9pe8WJiNmMwPUdojYzZUkwCwxCsMtH4aUiKvRRDyrUxvx77JUwNRHBeLPgcubwRCzYGE8xYJe7eGn5jFjsR",
  "key20": "4iqsMUJYwLon2eujntyiESU1jGMLRWrfhuXD5sYjsKFUzU9hiWDtrShCKNBbz4Rw7HdywM3s3QYW6oSMH6SGryTh",
  "key21": "2veQyWytYBNw1iySNkgh3e4fuujWkjCE5Tt7fTuzhNmVGiFA76hnwXKTnEmGcZh4cfTjZU6DS9Gq1gxbfNrrp7JY",
  "key22": "4CLe5dixgQyP1PH6uYuvZzNqDzW1zYJ8y8HSCZhdczwe4bsSgME7wEA3kthG9917fBdJuTZ6dL825ppSNnhVej8e",
  "key23": "3iSRdxbzHUtrqxg5DdBHXtssugy68DBJBH7YNSV3Ni56rBVLh6ffcxQnNctEU3HVji3qNtSuJCYKdFLnw44sncG",
  "key24": "4MVzUKjEs6aiouF6hAHmnRNzbxYkxY9hMr4Q647FLHVgsRF4c1sRbCUmJhJJeVAs3AU8VqfV6Abp4usW2W9rT1xm",
  "key25": "hagjCXH1EArAvt9iEFfGGaxbedatAuHUPdBTCHCfnHAm8ia8vdSPxDSg5xwJ31jZhMfog9UYKuUqrCSgzcVzZjw",
  "key26": "288uBWbmfNumiyvo3w2xNQMAPpvsKewJ32JEYcXVpQnkenNcBiBMEq1UX5DMHCuZL46p9KNZtqWxh9ZxtgPT7DrP",
  "key27": "3FBg3Z3N4XDn3629nErfTwPvgKaopJC6vFYWYkQoupC1636UTUQHFPw2S2qa442wk9hbMTHR59jMf7fiwxRNK1DL",
  "key28": "58Xf4sZghpuNPsjCWxhzMwF9LLjw1P3VFw56q7o6sVkvSxpsnSYX7ko8J18qvCC7BKxy9hcaw6ABHgTdThPAutw9",
  "key29": "4CZkNMvPgmEFVwDs821Kkac3SzK5szeRTKuSkEUer3LJc6xBeWTYFpsZq6P4M6pLGAH14wPWzSLXttUZPcyV1bay",
  "key30": "5AwtckDwBJ8JcE8ZzzMbRbH4egmDmxDdbBAZfckqP7no9wU2JaPiS1XUaA8J5YicPJnZM9mQuFDbUiEYvHNpZ7H5",
  "key31": "5Ta4ZtzFNNUmMW7kVXERyX69W3jc4G6Ta3HvRdK1gYdE4XxR9mQ9BSgwHGKhTKcyd1FUNpHCvE6WtHH2FxnQMHdc",
  "key32": "4p8Fi7phAnWC4VGEX3A8i9Qi1PN9e1yAc8Qs2EbwWDdGmR1hDJSxdbo1LM5uLH4hbasJzR2angXos1JWuivnuPFL",
  "key33": "2vTi5wGgzMtVEvgpky1L1fxyyPTYY5hkZuBicAfrmXXrpxAauHDVGBNTDNyo49QMH1ur1AppSvrkeG6PHD7EMXpi",
  "key34": "5BFHgBM4nqSeaWYxrpuFhMWmLWfysdp2uX4GvZueq8sXkexAEwKmrS62G8yNaYTvPLgeF6MdxQ6HKwfCzRj7gTcb",
  "key35": "3YtK86WrA1vmEXNFiBMUCSWUCFnVKumP4nwh8uTmhksyGsoiXVD4dcd8MrBuqSHKQdDgGtWj4cgBGELdtxgfaVB4",
  "key36": "4uBcerCwWrRFkAkPBmuPKPKBUBxp7S4UTP2e1w3cEZCf9sZi5eEgQMHk3GwV3i6BMrT7uUuQ2YRRt3e7fccawBhX",
  "key37": "3RWRJDum7BdtqKmpJMnka4nkmE8wip7zVycDMXASX8H51dmHb9LK4rxGMbUmaT5ivYHRipDshLK7SuaxbW8BWiBH",
  "key38": "cADgFuoqXX2f4zxcNVrtquMTRwukqUnSNkwM61BcFTaVUp5Tc73Dsei3ifi8c7EFueKUeuftq9SqxPTJT2z1UVC",
  "key39": "Lbfq1YdiHEDdg6zLQ2Pi5ZwdNa6tPiBgD15N6rTpGEjaNAqxgUjBxHmDkbCvoNiQ1r8jsbHkSm6SQgRDw42r8pj",
  "key40": "3oiPZE5xgFeohzdN5MD9T7Hb1M2m4aykqVM2xnL2ZUMyRXJggqxGXS99gYf8mvjvLE9SEanGAbX62fodPdcgozZC",
  "key41": "Up8QS5QSUvjERKHGLy2Zpb1avCd8aFunW1FN4cTzGzmthUm1wHB9VaTd29sj5H9rxGPaPztFMG83oFSmDWDveUb",
  "key42": "uepKr36ovRnfebEmXVPBTZenZrXWJfMy4krXuM2akAKM8uGBaxPxHZTfNDhvYTnifyQ6MKjLpPJosT3u2vwpYQj",
  "key43": "3vwtxE1JPfHPikLX8jgGBpKB4sCejDSVCACjZxE2Gz2TAE7CeEWcNSWSRpdaKD55eQhZStmRhYYdJPWhWqVtaXHm"
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
