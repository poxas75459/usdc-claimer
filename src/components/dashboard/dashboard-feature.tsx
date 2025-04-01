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
    "5yLmRep67So9YFisX22yWK9qX9zBq8LX384aDGJUKgaz2LLmfSZuia2ARQ2f17MEmT34PXweUDgZTeL73UktYHTo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iK9JPMkB3Bw8ynyuPuVASHieariZcirzf1FPUXUYiSzuTSWUSFp6c8meh5cgAFQudr7L76xoY1qHEZgurfmdh34",
  "key1": "2KFuioch48Usf2dcsGAg8EcRtoNwKT7Fwp7bC36jN2SekBKqXeN2CE8uWzaWs6UHJhkgwWU9x6sSYBoDuoKUh4gw",
  "key2": "5iekVJaqoQFGfb948uAgmK2iCXNkqFS47m4dqWGBcQkt7emorD6Vp3zVJSKhnSuPsULV3jPBu5RUNTqghvVVhFXc",
  "key3": "xLZNCfv3HzeA31DCKH6hXF9TRSesUKWtppJdAvZYrviYucpCUtuKuKj2QR79EVq5NJDgy4xNPPMuivzXrPYr1Lm",
  "key4": "5BajG7r5cm6vjb35HyhNoZB5L4B29YBMz2C58cuZvzDn8KWFCwoBv5iZT97QW9dXBXXTA9odVeA5NgqnknDrNChj",
  "key5": "3G7hLUemurbEhpJNp8XiADkw3tcwTPLfy2LpqP9LzAQ4J2jwCAUXGuBTwGqhdcf9uba4yDnJfdLm5DUVEJrFzhtX",
  "key6": "w25msw6aHTe5CqLqZrffMGPyBWc6tVTegLCkRE82Ko5bSbs3PwS9sjgiWYcxdqhoqjJELEFfq7zaaadQZDa9dJP",
  "key7": "LGU4DQ8Mmgo4CxgK4f7KZvhk7vCxhz66QMRyMEWp7Nvv7wMxqF17xXWu4NqtQLp12kGGYTqgu2WV7HudkHLok57",
  "key8": "3zsQ9EqU97DVxu1VAVVichzXfkQXF1ZqY1eUtrcBZjfVTsxWW2Den3Xcqs7KrnyqKK8P51jUduY1WmsSVB7LhAmV",
  "key9": "61RREFrJsiRYs1K11DkMkWwZbvDhsfF6Qypi8VFSRNapE44Hu1t9CiJsjC2aVFPGo7TTsBpkNAL49vYWYNHT8JVj",
  "key10": "4ypjmScLjZH5r7wTy1YjaJy4pptM6Q5SWGCdCoEKs1K2gYH7UUi1go4C3t1pGCkKoFjy1PMoroVavogNy5cZf84X",
  "key11": "53VPeaRwcwBuxnpE5nWKuGdQUgyxYEthrJzuwpYTK83Vp59oxU8uskEU4Xo7uUXPP5MtPEn8Jj6JJ3W3wmQGxtxa",
  "key12": "4mNzd6y6E3ZX7eQkDY7sDhgz3L6SEVqumzZnqRCmgKrdHHkRuG5SrrBctwvJAqNqqnX1K4naxSLA3V8Ma1in879w",
  "key13": "225UbyiYpT2adB6FJkDsSWK1PvUsYd8hsE31eYUWcPrc3GyTxT9LXHNS3VvVZM2DyfutHcPjxPGNtsTGC6KdYK23",
  "key14": "382Wqj5y5ZiCvhtjDNJ6iCMPS4ET3qkmfGe9BtShmBmSrmbjfhLVCsXSNSBT6Dr9BR7xCQL9uL1H6jz6Kx9VZYA2",
  "key15": "2rwiHTULi8d6Zx9GkkGzHCiXJrsT4V1jiwFveg2xR6rq6eAknq7jHv4QtFE7nssWW7kGUSBbAKje8k6M1jVWYPa4",
  "key16": "4qK7zoNACDhWa3F6LhAPCfnws85Kq3VeYyrBbJmQJXr1kLCQqiAM68efumsgwzgAA8wJvWSiP9SUUDhAWfQMzBSN",
  "key17": "32Jh58mwZxGnfzucL14cassbC5VrBsj73vf2WMVBcUrLPn6FMoiuGK6jboCJ31nT8YmeyacuUhbD8wQeAwEbEHaj",
  "key18": "5Zn8nQdVWFanU5D5qCFDCWzcNj1a22kJEPUxPixFYNi4rqY7KzP2sqT93CBo1ZdinBQ37oR23jsLCpvQDMfWYQMc",
  "key19": "4Jmd9vmo5trFMRAer2PHUJuERdvt2DJH2vW4ZWy5W4u57PRnqR7CrXrYnLB4EoP4daQfnU6L5eU8BFYUPzdd8E4V",
  "key20": "3LVgahwD6FH2ZZn1Dp366uc7mZTTTLUFcwU1vTLRnjfLAaLVAAjK4UCo4j9nPGw2iVKQ8rFJbLVC1wiQVy8rhjjB",
  "key21": "2ZGfp3a397LwCewD7uFjy36vXWjWAyzeFgjDBE6V6jCBAtNntcXUEBZ7cMztuMpfDSNK2e7fWyGmoENjvAd2CCW1",
  "key22": "2wjcYt5VhEEiu4anY8nVXC3LH5HEugiqsYnQHTRAHcsx2TFUvZs4keBcbEWF8m9qc8DGvPp8GFTBwCG3W9fRxS2M",
  "key23": "xDxAHTatH93SdX66etwNRFv1KSsVceYwGyedNMSqfFcjBWN2DjEXPXPvuBx5icfbderfFa5Wpr8jYu1BKU5zaoe",
  "key24": "5uXRZ7R7pXyvkCrtPqodvpmELETepxagR2v5ZsKbKMqXa6828qsP1JmdxhE6GqfMq6zJWAHytXbTxPweHdMcvxCD",
  "key25": "4SjkSRLgFcAS3KkoBBLxmL4ZDcUDQfTce3WJt8pPLGQ3WzaydoiQdJMT32J4E6yByY3FcQhT6be4Xu2QCWWa4y4L",
  "key26": "5gESdJ717LH3ZzCmYrRXHfJwyqMKkZqr9UTVeBxnX8ZAEkn8UUswbqtdnxHfu96tM8YZvrg7QW6bFFkbafA3uzN9",
  "key27": "Bo8xVjoCUqXn4b1Jg7Br6AAzFmQmGj7qjKLA3szTmdiK75o9469DzUSJAFUhSDWyBmbAgV2uB6tJcmNjKXbRHua",
  "key28": "5eb1MibnoKXycgp7iQfpxZbwu1Y7wbN6ZFUMUFpaKT9LAsy15JdGfiyQ8Ffewm22Tjw8uWcmD1RKcevKPzMoDpYe",
  "key29": "3j2pAQb5Qtj5EixBf8Da5ccmz9LYYq5qLx7m3p33mEe9HcWma2LTAoitAoVD3LNhRqYEYixJXEPi6BCm3W1tX5G1",
  "key30": "2XSwpUUh5rhb8obumRQb4B2VBbNGvMmnE44QxQhiZEAwHMYrqaf7bSV8M3BubEjWrDUCS2FRGsLkT8T9rdfW3Gre",
  "key31": "62uWKdA8fGAx5QVUXbhsPo3zJjwgV4Huad6Jjs1FAt1NNUDX8qMNdidNfXRoDWpZtFeUPekaMR9h8wnSRNH1LCfa",
  "key32": "4jYzkYmWddZtVWheQ3qfpMfa2Dqr7TVLGnBuyBrfBthHqUSUGjake2piRHkfV3HD46nV2DXArJapsvc4ei3ydpN3",
  "key33": "mGWyGTCn4UCW7Qm4mR1Tn7iGVvbGZBECi623qktWTqNWyhkowhwFj3obTbGRurfSbaLkTkRvuHhMTnJCwdro2NL",
  "key34": "4HimELP8mNEuktqVVcfCuC4gM2DDWzGtT6rp22rHmkX9p4h3AUHHj4Y1NEymwEKrdRn9mWNhbRzGAnQNraSbn7XV",
  "key35": "YU93nwErFrkT2BoeeFMYK96cdkRBdERreZkDNnzFmRNqSEmAigUZ9pbdFwkA5BTZePdfhxyK8eweDpLYSzPWDe4",
  "key36": "2ZNfhPX74ayf5EEVoHKpfJTcsf7xSoy4njQjF2eb4h7QhqKGzZGKJauPiUVDowPemgQf1eteggpjpRP4ANXzD2BD",
  "key37": "jHyWtTkYHk3wFJ45PASaT4syR24kbNYqDT4Sh5RRjHEr2xqBKb2aKt5rghJaNp4XTqh9oxP9YSU6vo7VK4emoKw",
  "key38": "2MiGVm6Vy74ipENRMWCUtC1XszQfa7aRfSv1odfvrWHXNfDBswLfhkFpMyFMmqbTrABY6xF8vK2CtBP13FxHLGuN",
  "key39": "n4APgT9PzaBJ4ZctUKCnZVTAJKj6T2JKVV2uDHS5Rgty4fQYbcZYizFzTwZtv1sheBvg4WdEBfBNbG8DZbBNUbt",
  "key40": "266husQRiSWKEuUxbfHQpMPYp5axkFsb8JNEZtLwkQ5Et7o5Qq53BUziYXsh6RZgj2thHWTMimZohLJaVktXnFrw",
  "key41": "5ndaSGEh1qyC5XuNPShuVwKRKKRzGrkFbYHrg8Ce1LNRMEXwHC84wpLZ2SoX7LDgwyvfLRNxDF6peY3MyZGkmqCg",
  "key42": "5cmH2BVuxMeYgru4hz5yK2FSvrN2TcuVFXScEZahrBvVgNY1gyGHByDtsX1pn88N9cMgscBbq7yGpuKEb4PpTNwB"
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
