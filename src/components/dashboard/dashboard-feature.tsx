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
    "HPN98fGNyLUoTpRmfwJBNN4ZBXKu6VcpsFXTLPsP3sDEGzPdgnx1ZBcerCsKRu9HW73XuQNVCUMogY78TeYef9E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ntQdHou7a55uNHJveDEGVfWXBvGxJV7aik3yYoobMmSXBP3V5Vy399wjpUWkD2V87nPy7yNTgTYsgkVzW7FFEFE",
  "key1": "5a93vaocRhPsZX8bKYGgG2KEBsX4tZbw52o34hRTASTH4r1K7NpLqRLC9a7PZtFFNjfEMCqM5jovPA4fM3uuXF2M",
  "key2": "3ThUPRB8JaSnChm26a3sV7BDen5qj7jSUsurayriFt2zByZMJaJNTQjBJHfz5xMGdvqoN2ksKLbCrZuv7AZyodXp",
  "key3": "3x4NEDSPnyvAjd7xKinoBhjsaYh3GkuTmQA3fVjw9gabsnSadQy3kchhpRMwsdJ6Hce2SseidM1S2o4D5Tz37u9h",
  "key4": "5YSgiSCmWiWKFr1BYC4MNdQNr8CJ4mNAqX4ENU69YYFT7g8scT4SBbUtNCb1kvTBrLDnt7uyzpaBjJyB6gPBBga4",
  "key5": "5Hx5RegqWhvowL1WX4Vrxbtus49MZrQ3m8od1m9jE9kMd7uvUn6DjFm5SKesdGgSbmJU1adGLLrfagAggN6VbrfH",
  "key6": "2uyBESPvWKBZoA2mkYPeZ6d7cxNpxydE5kQNyqCzGf18DwDK6DKFZDZcgVumicygUJcPvqLSoegCDnuZKvw1y151",
  "key7": "43xjVZhH8nUqXzsXvbjDsyixU6pQhVFg7tQFLi9BW2xJ1BX4gb96CSqgMBLzm8Bn9B3uG9hdQzHC96jo3EX3WThU",
  "key8": "2B24whcRNEQFsApbMRBUspz3hLxT5iSp5ovFKC97mHFvAuxu5NJwsmEN9sjW7gbZs9w8XLD1ZSbx9o5B1KzgNXUC",
  "key9": "3a9n6vuV5ciEf7aTaeWzJkB9iuWDGPBGqcf84BSwXhZXf3CdS4e7cQXWuHqkJgNp5sua2DWWy2sFKFjm9UsW9gBi",
  "key10": "4Pshb3URMUL1XUFk37HrV3KJtHZ23RXU8u5MKo2WMdeLkV38phfaXTG4whzuyRssM5ZGxQ54LpiAnHCEcttHTsE",
  "key11": "4H1TVo1BCrN8nwWxW8bqhfykpsdep1qjGtPoJ43mV839n42TsvtyhX4UpJCgspSLegEWCeohriDqhCtedFKJPsqk",
  "key12": "5Dov5taetdD3gGkX7V9USuhvH3aWZ8kVH22XBLNZKEKfMrZTE9scNs5ALYyFHUNCv1vz9KbtVTdv9AFAYGjeoxZN",
  "key13": "xMAgQARQyF75CVTqCbVqCfHHU8M6occ5vbVNNBYzq4pZnPVz3uMtbDmmA56yo7cfMTz2C3MiWgDnZ7sFYXYBTEZ",
  "key14": "4XL9aidr2im9AWHPxp62VnuqbwxLY8P9hCuygAtWwRL6peHtcKnAiSJvkCmr4eKufhY87bA7cLSh9awBKsLsq2Yb",
  "key15": "EvwAQjw736FJ3n6FYSSesuy4gPXD2ECoPdxxwnU1fv3KMiuPzxwhrPyb299aUGSZfPAj4nT7C9bC6swBfiBbmDw",
  "key16": "2AcpuP2noXvmgvwyz8QseYm64WkkGwMKiw37EjmMk8ebHFm6QkGxYa9FGrwH9VZjRwe3iiUZCjtbcYoxjd8Q6V2v",
  "key17": "92U7B9q4DYeZNYJZuytybb28wqyhqJcvzXHdSg1aAazgCZbjPLta6qqCQM7mjiKkrZeCKT5nZWWujHkZeynE8me",
  "key18": "63TXWmmGYm2EvQCqTFUPtFAi6DdAVEhq7fsTmEFTvquo3mWEnCV9fFncrTZJqmgQ2PEABbXnLD1LmPZfGdkBy7dC",
  "key19": "4UbV78SKQzc8FNjnLRuXrdWF8E3yPDx8hZQYCy8C5EnbMAFHd82zQPXxMzwHnRhnDayVTr8A1pw1AMp4w1S34TEo",
  "key20": "31MPaqbipKEWaJtd1NZ6qmepYQJVbdhtHQ6Tws1ykEvXucDi9Bp4UsGmwmDTYM7C3hKNJT6fjCnufB27DPXqVj6p",
  "key21": "JPmPMnNWdUkqGG9szW9aNVfvfiLrNTzghLnhHSArN3YVC1Lw8iUvTEMgbBG6RjfWHcLPSbk9uTv2swK5yzMb3qp",
  "key22": "5cxiL3D4wYc177R96YY9q4H3rgfAAxjx96wg8ZB7M15oCJa8dJxZHuL2N6p4UoGaCcM3Bn3G4aKUWMNZh8hD5Fkx",
  "key23": "4M2h1AfDq71WeoCQZf2PdJm2NuZwNL2SdLsyrUFAyjdY3MMovTu4YLm1dxP348bUuDM5Tuqm6VvKK1LbacAjfakK",
  "key24": "3oigx9Bb4JsKZo9osSzURkduCroaW5fAmnHMwSaSnzCGqa15ZGGU4CMMCML8UwiE3jVKJPHp2H6nzFQ2LcpWXXGP",
  "key25": "3DnPTqCbf4Z1LQPHBSrpnuRjfJyvZiXvWYhjgHuKTYanQHusRtA13B3TPC4FqQWz8BWQTsJAR4AZEbnLMLh8G4Ge",
  "key26": "3XBDAgUBpEyrNXLyrzGPEiCgBm33rHzsFcaUjVudnPQN4wNjuQNEcAzbJZ65xxHG3S1JgX7wgmCstNqykJyujWFS",
  "key27": "55en7dE21bDvRrsRNiF2Umdp3BVmCxRwc7BLwg2EdZi2DPhbecyCswETHT5xnazder5jnwZpmDyLkWSuSgEjhWrr",
  "key28": "4JW3BTd32UH9ComLu63Rj2aD69S1xnLRHvZ9FbGvaj73BSgAgUqT9Y1nWn3hYE77g91VTPwjTzqwe1U3ziz5ki8x",
  "key29": "34gbMgNryeZnQiMyRykfTaDNU9ijBhA9muMbo9DYtejfKCVWokQN5HunWJgE7KNN6VyT8wu95LvsyeFpddDMHowZ",
  "key30": "33T2DFJBcJgzoa5kyz6A8QCE28DUwMxKZWbAdKbaHzr4BjFnKx36DX5qpTuvBPes2SSqrtLtyTaJYX5LRp4m89c6",
  "key31": "5r9bHjUD32zC4hTxh5jbz99cW5TEejqgRMEr585pUiVVE5wrGgb9iU9dm5XBfnEg37f12yAT6YPxAnirfCr7u7h3",
  "key32": "67fD2i85juguxVWhgUe3Jd4xzUtgKDU361cnZbkPQL6RNBMgkoY1gV1GASmDUzZXZfptSYYvShizpweUwsxd55TX",
  "key33": "BkScqPPWMr5q4nfKt5h1bYxLALgAQPoxxjp3cAowN4wj2xPQYenSD16M5ADiaTD7rFrXe4zVCqBGLg6WN1hCzcq",
  "key34": "2zWDq5A1g8bM5HGP3uQhHsMhaDg1ZLE64xnw8qtCauwVqBM167WuE3jA64PaafZHZvyLwrtJi8Q1ofbi2PbD5au6",
  "key35": "4mHwCUzD5uMfuGMc4NjUz339fj7mLTGhaGfRHnzEfXnKPtQmyqYcUWzKA6SRnECPyg7cx5bvP8kmZah7UgeaqkEF",
  "key36": "48DYpiPuXKeVPaQoLUkLZCtGN8PBSaZvKjYbxcLEMkLEhU3DY4hWApf5WyBRPwKao2EkQXX68Zc4yKAMXw6FCQiE",
  "key37": "48Ume6RWAVaWRLwibrQaERvTTJRVdTAcwiZ7qKMHw1mPAUdtSXKE5ZTm1dHsPLztshMLNvjo2Duxq5j35Ct7udnZ",
  "key38": "57R7epgZQjH6GrxkJdQXu5JxPKDoQEcNkE1uMFYgQzjTo37pXNSBrx1zbZrA4fn3Vz9Wa7gJhkdNjsB6BAuQJ8zm",
  "key39": "4fYfLZEqXPuc9duy5NcqGHNNYBXBxgWQ9WnbBybhvWqnXcc4mb6bp1fQsn8Ei2S9y4pz3rtxr9g2NYbAn1jNBKTd",
  "key40": "4Rqy5ZBSNEut5RUvhYP13M3z7om89VfmBM9RVGabn4gC2qDVyTt8D9pAFyjgEjwq3WcVPuw7exbuuWvGAALcKbkB",
  "key41": "sVKMTwfV9UVhcDYWuzgcBEC7BphpfanudCiNiAEK69fQjnxV2wRY22CSiVDMrpHXuugbfaAkYJPwgCTV5nJc8qK",
  "key42": "4kQMvX4PxBSS4iFwfQLuLQ6L456cthhJqXsn8SD4kvnYCWGcXXB12Vh3MGe6PUNXio8Foyhj3bYu3idoJpDxMJg8",
  "key43": "BEsuaFgV86mRe8y5DyBQxhk4A6jBd66XSr6emZbVWVGgXoipjTxSR99nDK8gocc4d4mEhasJqLYBWFyNDCrA8bZ",
  "key44": "5k3ZsnviVvhDXWkVyu29mHhy9PpfjcNr8AvR4zT1759fQTT7i2PMCCZjDhznyzk1Q8RYTb3WG8bsezCjhToFTnwu",
  "key45": "2LNiFa4g34VtfRpKsmF3TPCKJJiDRA26ike7R1to8fBj9f3DboQSfh4m67ATdANe2N6dBHvthUmTjaTTtHspKKcQ",
  "key46": "5GqaenC1QZfqjqyQxDtBv76hianXd23TXDsYaF67f4iXLJ5gjhdbHmodDYaAbu8NpSpdAxL7ZCnEN4D2akUoM7zh",
  "key47": "4kvtVFHs81Xse8jyJm9pAzAKkG5aRCWdDj55xEahHAyR9Tn5aCi4rEwV9ZMf2LPfdQWtsWBjkZsvRF6wtfoeReJH"
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
