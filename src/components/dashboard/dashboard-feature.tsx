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
    "41PSnk8oqrDCZDUaAEJcfrQnYL2EAWVYvcUR46Y55RaPnhyXKGQ8MqwHgnPPq8R1UpWKnrkpjpZAACP1LxVfwoPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27RvhD4qH4cbWq7R6CLkRCJSzBMkusxoyKD7CdamZgeMK3dEFBrCFfRDPQ11o8L56kh1j54FNfJqcxzzaC3YcZuq",
  "key1": "3gPNLwve2wWhy7st26o1Q1dwJCsBthUjihiLJWcTE91v8ejzrWUdpaUvPbsp5phz8F1Uz3nJtv9Umcz6nW8BXD5N",
  "key2": "5hvTneDrJpTSLKygaK4cwYLKdraxK9LBuQ3ZWPzTYFwEBhNDSQczc2gkM2zg6DTs9M6Ypsh54nfw4NUTaFjJSR1E",
  "key3": "4Pm6osGcqBk1a7p4dkuVX68jV45GNVrVHqHyHV4xuMiDMkkzL4pU8iEjDGnsbKQb17KM8A9qy5TR6XiayzRj381y",
  "key4": "2L9Qvw8Sx3P8kFe3JYg7cuqvTwWzw3PXncDuf29HANJ7pUUXQG4sAqzo8XKyHryz5yZ2Rf3vpVxGscXvwRjzX1P6",
  "key5": "42ncEnoVy16xHG9DL3uUQVE5FcQUgKCnkVKe16bcRWUoY2yBZK9jSWS2eWXioKzeRuUkVFEv1649U5hjQ46Fn2ws",
  "key6": "2rwX5ZPYNb2rMzEb7bQdrgS8C77crSu1LNYJAD6RMAPVgCTZB7ydx1mYw6kq9bEDF2VgLPyPwKeZgFgzFhzumKS1",
  "key7": "3QYrtQmqDxpHpie9CZMaotGGSS2oBAp1FJb2vQhvw2MYUJuqVQJzVkBfyWq1n7ynJaGk6rXp3FDo9J2GiYTvjNtG",
  "key8": "5q1yhnFvDDFnpV1j59SkGgPJ4Vp2TxA5z31ERYDqzuJuBKYuXuGBQd7ooYxxu3pLzPzXwUpGyS2GDYzP8GqmgBPj",
  "key9": "4h5zvfAMSvcLJFbX36aobz5wzHu4mq8q2HxkH65JbzkBWSvjLX3whESqptaaLchXY5YszQw3Nz15WV8VXWqEgmbh",
  "key10": "4VTg1qUwCnGuv2qceGdjziBcAbfqgbc1Nf9kcWuNFxRZxFj53uXkqD6XwUs9HEY2wqRQKyermYbG6ej9T5Z6dQQR",
  "key11": "5YCuLkKVRv5mbQcmjSF8nodzWtZwohSdAkpDV4KsYUnuA1mxptnh6x8nCo5qeVLsT4rAGZ76Bej5ji4uh9Lasrgr",
  "key12": "5X1ERRXf3zWu1Ra72AsvGxKzA3vQKX2VFkkBRQWybSLv53Pn2vrJf3JyFcrvTYLK1Drsy3w98YMEmwmw7YdrXiNe",
  "key13": "5hVcmWsPphH59ktiX7yLPdyjut1uLifuCub84NXbFNBTPMndtC6ygH5zXvSwDkkjPnqhohUegMDHzmn9vLSSAjTp",
  "key14": "3ofpDrEPHXHi2TNje7CWhfpPsXEmnxu8LNsRBt6Z3yEvGFYpwrP39df4cbknJrYcfudQ83PjeNKMoc5gBncTaGWZ",
  "key15": "4h2XhcL98pZLdRguDhDXBqmfXkbYe8qotvGkv4qaVL8zeeWAibPtFUMmFBBGaHedxyFqvwKbaphKJRjHpx8HSB7w",
  "key16": "TFKyvDRy2h7VyvePj5RqK4kjTSnfyXgsh6GJa9LuxRLG5qsFMnZPLcnBzgoD4XXmGt55cGsNHQwTwnE4zEuHHpF",
  "key17": "4EMcqg1vbFGHiyfb5Lqa4EpMWHPhTV9xmGqNvgKt3QpGT8HJRoduymbvgxUrNHWukC7Qm173TjG81hyMNh5gYY6v",
  "key18": "28xP3rCZJtVQBsGnKjzfoYRyow54wTXSHMZCSPpZMGHw2q1Ft67KapCwtWje4D6cBoJZpZq3eCjdfVeATyedHu4c",
  "key19": "5vMv9uyTdKjM5C9eJN1oZRcEMzHpd92TeQXQs67CjS2rZHjtn4Yzx4yUxMVYrtngtR1hMWLKFTtPyErrjmp2e51G",
  "key20": "FB3UYeWiL8UwF4WUkZhaJqwKZAiTpCKxHTZDWvFJ4MSCnih9mR7S2Pzuopb6yYwkE1SekvdcHSmhj8H1rwSmq3c",
  "key21": "38BCrjJfenhgRg1kaT9j7St6M4qUxVZQsFxwpx28XwAZRyWv9cTukHF3qsckHvbtY339pcLQUbf6YrTEVL2ydmrZ",
  "key22": "3byUyPnFNbbjiQ3cny3FS1Qa97mA6FxrDCjaLqUszzLMVzjUD8SkhQTNkMEogxznEwxqEpRY1QnFYirKYvYm9gSN",
  "key23": "5hSnTS3AbhnwvJytZADgQhh14SoWUtGvDQWotSDxq37SUvZ5DqUNBjfTVEsqsYRc4igMhWZqdgb65RbZyBwLutqA",
  "key24": "4RNGrFkx62qKiciTdT8svx9qtBgtPMwAn3fGf1UCeDsamAMwSbBrH1x4qRUUPYHz4hd1T9mHeAq7noAyz46bN3a6",
  "key25": "5kCPN6GSx1LDFEm6csuyzxETaBw9auPktUrYgwy7a7MsfYQVi37iAhqkQ67LGrK6jiGZGJuFqdmyV37zC5JY3z51",
  "key26": "4udR1waWRUzjXTzNx7ScLCE9oxQG5MMHQKDoJzrpNHVogdPdG6atsVYWDmGDzNGRSSM1nr2rPtYsckJ6uHcXKzxt",
  "key27": "41myGfJZc8LFvW7su79T4CaystYqYcVnkERFcrKbyPBZELevXuPufEZ5yYdgzD2Me1J5EY5TewsQGqHp679YUon9",
  "key28": "24NjMxT34ZXx4rYCZ3dHwEGb1ntCRX9vjwvi6TowgShJgKvt7yui8URGpp5DZrY7q3icpnX2cw9U93gFX2AqZTsA",
  "key29": "4i9wF1PaBRNpriaLPxN3vmneAS1fbsQWZQzD8pHu33Eyz9veUJ2e8Z4f9CmG3M4tyfHk8dj6R4jXxxy6GxdDc8EW",
  "key30": "tuxeN3n5vA9arnUCXMVNRX3UYTstPPH7vZFd4LXSCz2jfSHJ1LMDa6E4YsvG3GdouokVX7H316WM7cbM71UDhoa",
  "key31": "5yFHKoMdSGJUULmiz73fR73krX65zzH8j3S8kAa7PXijrk64RWSRi6fWmSs9oNVncgfNorP7jzVJq3qgXe5FZ9J8",
  "key32": "3B5BLZWWuPkWb7koF2ftoCpyFEQYw64LxiekgokcQdGNd68yDz3qa9fcmnkm5w5V6Mdr13vgj8YHce2UiH26rbLP",
  "key33": "3fx6yQJwyePJrGzV7Yu8v2YeXNPm55PKLp8WQbRZ3NbCeYnfzs12FnXR7ZB6yBLikDXovQH3ch8eY5X3Xj8htZ6o",
  "key34": "4FJ9RKagfC1zSNXpBHxijdEh6sEHtVNRWH61jfVAVddytVLkWMUYfDW4pxrsTYdvqdLST2uBXJhDF5V7yfb1iVWX",
  "key35": "28GHienFw26TXiSMje7jhEfQJBZSqTb1D7KnST6Ykpi5mRV92sXkjx1djqF6dJzpCuQxQDGDNgsuzdr66WXnraJn",
  "key36": "3BbTMbh8fUusa7Sd9CyvcHwyohjo9KF28P9eqixKo3ofqFy3NSxq2mX7T1YEfbqMjLDSAhpiTiZCdBZVkNn3XnNR",
  "key37": "RYYcmN8fkDgCDFUGkqonk2qGUmdAGntj1c59VeKZQzxdrHMQLsN2XZSYPuY9v5VRxZYYZCQfCnV36hZfwAs73na",
  "key38": "aAxkk56jD5tGgag6wAs6j5GTZXx2Ecazm1cXEKZ7DrWmjbhrM8FYjy6y2QCgS6SgkDawv3LVubU2Ue6rdDCw37L",
  "key39": "4bNutpBF94v74neRe86jZSo42q24NKRWZQfPcTUaEnqNT5r4y6dbULfdmFBBH6jNX3oRdMhFY1CX68MpUXeoSNrD",
  "key40": "5UxB6DMaUorXqtSNkdKVVeV4MJDKZ13m9LNDj2fJfb6Up75MjCbS2t3hxutgb43Xuksp72ivvkPeyo7uBjUtEbu1",
  "key41": "4ySTgLakPVLueUFNbforvE64BpPMFggHhFQZqaN8JJV3HFJbkX9UvaNmcVkQMWWoMiH8X7uwLSSQAWREJfXh4iJU",
  "key42": "5Kwh8L9MjjZ8x5RbBh8aRroxPFkhXqfrCwq6AQYPcugCHL2xenYazDFHGe2Ujj4zJKHgRdvgrDkRfwjmxDvg445p",
  "key43": "5dwuWPt3QPsARiNswmiM1hHQKwU1zSkx9oHHQX6uPscLfqF5g6u4o7y5XcqwNjG3BFFi26gqn6mq8JV424P4KWZk",
  "key44": "3a7pbHuHYZREFDQJK9SDuunTkzncYszLoFRhzR6mZLWVLZHkKbnpHR6EqvhxZSTWGw1DHJHjHG38XNhSB7qUnXxn",
  "key45": "4VDDEmPPuPbkdNXPRhbJFLCzjCn3osqPbMAXK5YUHMS6pPrk8C6ue89JtKGMrQnmXCboLdE1m5TPeVgNLujJFD3F"
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
