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
    "3oLcbwuzRZspHcPGqEDf43T5fPsdPxPP9wMy3cTrb17m845RCCz89waMwEimB1vLvxR9ghdpRGN5PxL7LqKCBw2N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UNVbGJarJFbS8rVwYV6DV44UXcRB39py2a8z2VBdasSfMHCFE5TMEjR2KL93vLHzRiLzN1Z4fNYNqhDkNhi2Xmm",
  "key1": "7iUEpUgfhXk56FHfUm5RN3NGrSgB8swNnVsZ4HH1H9DwiPte1BhN6k2EBM5NZqbSM6JAss8dNhGeHuef8Ls5aNx",
  "key2": "3H5MmT5bBfBxLCTs4tLnG8gwsy5DvK3KurCF8BpLKKkcLYVG8yMtznWHbMFf3Mc9LGgCouHWofWGnDNGqyoJcjSW",
  "key3": "uPJkbRjzZ45bqHp2q9GGwmJxvAEjB6WxnUt2AikS9tL2iEdw6hV5tbLcwk5tk7CJCtZn2jMfx6FCtNpMqfNac5B",
  "key4": "trFw8kBTBZiZ9J5WgHCNuq4HGxjHRomUXJaUjg54BLXBEdJJVHfEAz2wJU89tjybm7aR7qBgUG8y4Gn2dBqnXiK",
  "key5": "4kTKauXpUMrYy68fwoWWHUy8wbuBxYZPGjvPPM6M2h3Q9dHMqJfizxpVCA7CPAWCjD4yzANreGbuwZBDX9yKn6j5",
  "key6": "6133ej8BJMJosxxz3F6N5XbazgrtMJnXLhmw1ePa47LF9gSRQjS8j8He4L2So8CLuQccKJuDrJNR4SZN4Redt15T",
  "key7": "4sYfoF7D1izbYk6x9ukt6mmZiqU2MRjxx2p8rn3GCvrdHXDnPVVF2sSXKkrRAYPCLErjLEp2LJpCrvWGaRcbMgUt",
  "key8": "4Y965PWUzSMJ4KktRivRgFWWinJFzPbWktt3agHxFRaVhBGN5Fv8CT7FXdYWuPmP8VgHu2ewQ81L1xFvEqY8VVVo",
  "key9": "5hto9DqQQKLiNs1zLs1dMfRSvZrqgLMZHPqyRTCUErBqXZCbDdX41tmDUsTbakm48R29VPG9cLDKydwUd8d4GcrC",
  "key10": "2JukXmPqAaZTMR3Y88WVoXTEuo1saoFnWnypBTCoA76rYCxaQX6VfkjX789mxB4rcDzpVcVVnVsVDiKbZnmCshnE",
  "key11": "2darC8frCk2QUe3bKMHt9Jn8ibcYhrvYNr8REPLY3Kn9epwqcfsrZ17oL4CNqn1mHGgsqBRtGsRPhhM7f1zRNY5m",
  "key12": "4Hezt68gucKyQYXVvwNNmjFLY6SeTokapB66bBEd8dTBBeTaWGa7E5xjwPKtsJVz9VCFCBXVaUzKA3PyjuZx7izr",
  "key13": "Jh5RiooyhYAHinVhb7DnZTbyyw7HtU6CVyS1Ei2v5G2uUDyuBTf9rBMSpYFrfsxHqDF1MTv1GHdGE7iLDVWkdXd",
  "key14": "9xx1TyQK6aEonwW75jhmGconMMJPPZVN9dMwjz1MmK5DugAEwvVwxkYfcYvwWdAgvrdw9j4Fth6YpuyhBSke9m3",
  "key15": "2Fi8ehmcEnGPdq3qoG6MGyKmqERMFwDk3kSBQmuC4SWH5msVnF4Z1rFrxz8dcFWtk9eqZ4LVxeFQt97o8b59oUBi",
  "key16": "5EHgXSRGigYtvsYijq7dJi4uCttombAs6xm5YG673ZbHaHiLThLq5PWYRQGn6JsdFCckTbCwaRxXxYwq4zpxhSHW",
  "key17": "QT7hfusUSRxaYSuzim7oo6bH3MttuxUV6W6mQqYpTrjC5zmChe3EhF1URvkwPWr97juPtmEajaJBNWRVyZngP3a",
  "key18": "23patdW1aMCuXnmNzt4fDQWU4cgp6sx1fcYoU8AQQBVr4ziyCzJBJCo3EKgEfS5KoJ4ZqbRufCXsdgnegGN3Rpio",
  "key19": "5VojYkCUz2BHUg5wHQ882KJ9SVpEcdBUvrsNm7PX1J31Pt2r91S46q2U19jgiedmJdeZUrmVnpaD6V4MGEqy6xkt",
  "key20": "3Lvyr57uxEkxLnDx1kTw18dRtYZsTojTPmamQDuYyriUZD3pXeE5oquvqY6gttYnPLtbCERKRfJV2CSqNyJ8c9MN",
  "key21": "4QkXkYEHyTk6xC6Zpw5YmCYeZTEgFQwFgE4v8Q5bbiVpuA5cr55JUkAAi8oBFgwFvfAW8YM6fCToLYh9XW6o5tXr",
  "key22": "cPbv1kNRcJm47WToyF5oSUsMcruhqnghRmWE5UwHn2efSgxnsN2a2tv55S72zWEnBRqKTpzCy381dDFuuXm3Pz2",
  "key23": "5zSfZ3k1r93QDJjecKj3FznSgv1GTNzXydd9WivUtyBZqLQTSHYLGN7vyFW4gHpjT9Pb5rEi2V3o3FCE41bR2fUX",
  "key24": "zjWZCfaargRWXxu2LEY1tgS98mhdxPxzz1ztih6HKA75fS5HgqFXsvE2eYrApafHhVAymhmQaBnCo5CRKypCae5",
  "key25": "2NnYagPE75jvpDxQcz8BVLVG3NyEDsSpW3WDVyG3y61BdFDoZfYRQNYnHkVpvMX9AcDNKFvRWa3hoVasFqLobNkA",
  "key26": "5Kfmqq5jGHLJBdX1QZtVUYdJvD1SGN7Reuszcf1BJdSyFySSRntdFEqUfHiRTPRBUoGyTUsvnQkRdpHBiWyiPqTp",
  "key27": "2AGUhQHrMLr3JRRi9Kv1ysrA7LQjehQrzLhT2rVd4h3QVb39QqcbQLCvV7BGhaaoSE5Ugr6h63a3gm28p9Rtrbjc",
  "key28": "3b4JxbNu8L7fcjJDyQPHphjt8yLXzyrCBGtn1H5yDEZioCDzMhSqWpiQnqEUZ3CaWTi2fBpWpVnPRgbPmbMBA71d",
  "key29": "3CjmncQ5uQgNNMWctquLbRPZz8B2pykHeqJzzT8b5jwY6RydbaJH71tbbZrRhxwgdm7CHdyC9BvBTWNg2ZMQAyrZ",
  "key30": "2PTnUd3nL75nTypvUQCFbMAFZw1J7vvAuQ5AArkJHEFZVaKA1K8ZAv9SiNf79qCr6ZsGja7a4Fgwk9G1yi8C8sJZ",
  "key31": "38gwEcPtep4m1Jb7s7ULn5Ub8ir411j8qZSZb7WwmC3nH2RFnBSqSd9SCYdqUYCZLrVhCC284WCXZ7WMiC3DmidT",
  "key32": "4M9myircMBpuNfEBSJPE11872V3kWnNzLUUWd5hC9F9NvxTLkRQnHz4CYskV4R7cgST3mEmpLxruLSeE2hkwGn3y",
  "key33": "5BPiyEB7haE4JGRJxhSuCjrFbTmEkj8Ze9uuN9ajhfPz63x5orzWkWkYR5Pi8L4beoNMuHxqPNY2n8VFKycUnMAp",
  "key34": "2QGivah45AAZwYrKUdqdzwahwG5zXQzusNWzGWd7ffWXJvVwK3WL1SQKq6a7AM5Gkum9gAviYEhA7sPy4DeDxcW5",
  "key35": "3xHYjUNqkd5s6qkHEFsN9wCscLbAGo3aJrrGfZVYUEBaz57H9kwdS91sxF7bK1fv19Zp8hNJABz8S6Pjmob2HLwo",
  "key36": "ib8vEb9RksPDweTLAQ6HjceoXwUwjF3J4fdG8vsH4AubVYmCpgf1MPr9cCUAa9onwgixjLzBYAjCFbzpD3MD2gW",
  "key37": "413yNsgoqeHzGbrx2Lf6xw4o1zFuJoJPxER7dcjphnJg5ey7GoYC7qXVcNvU52dNCw5L54zyERBGVapfiuK6EKx9",
  "key38": "qL283KwHk7ra5fEiBgSFmg3m1auFyENSeZdbn8XHg956gjMh1nr8dEY7BypYyR75rvJddSV52tyLrRZ3aia2BGi",
  "key39": "3Tp6VeZukbA8Be47iUE9ucLahM6nFJMNik5MaaMLPB21oYEKDiRRVitieGqXnqrTR17hri2cxMETGzVvr72LkHAT",
  "key40": "219MGXJFoo2hWbJewNxrRAwbwWEq5xxuk9QWt8HV3Y45H6xZZJewfVecqS1R1m9d93noZBNXAHeUuUek1f3nwrXq",
  "key41": "jcyCrfA8CE5dGaXR8QrzC29dUuEdYcPsbvayQh2aSsTFmYBe5teftj8mLqG3ST6oHSzZct8aFA1HKDQaKzUzwgP",
  "key42": "9YcFRF9MFE8E9saapdHFD9cXs7urnq4W1jEZFqzyyg4E366gYxjZP1LT2Fm4qYFRwLjr2PcBf4u3ZCV5NfbvWXz",
  "key43": "4QQ65YP8GZU9D97kZ9SpNnZQhVoXQD1Ud4WpWhHXzQ8YFQ6zMWcpVq6GcSHBZvvP135KXdnXPwC3CAgBpSQJt7TM",
  "key44": "2SUVJ37RAPdxaRJytMtZL7J5ypnSyQFyfLVoPESM7cRkSUeqhZHwRtPxdVgK1wm6LumVii73uKojyyew4QFb4DXQ"
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
