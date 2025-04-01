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
    "3v8ajxj7VYGDpjkUULsQsq6uq2M49aUdqRF2WD9pvjxUZ2ECJMYWaMtgoY3FUijvkTQiW9DxTYSBY8QFRujB8ykM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r2zGepSm9VZwUG7nYq38gjyAp2hLrwoVhq8BqqGRhL4Vo3vKvhj7nAECWm1qby7ZUzykmxWFMwuK4nsqtusfiEM",
  "key1": "3ntBVifDWsSfYfWqUUpoGX1Gndx3Ug3DDhCJuRSJnVpBpMbT6jXxZdEdFs1pJhpiEaepKJ46E2UtXWzhoaag5zym",
  "key2": "2vm4nWxibE3hC9x3VECFXkCmA1DQY1z7GScNVVLXPLxLRmJomQMEf5dcikWXQuTbqx6HJZxP23ok8nL8cbH112r2",
  "key3": "3Nv2v4z1sD14vrr985FYKS6sdisuFWbKAwPjdnEtxK3HumpPR6b6ki75teHtjDSPGzrpLBgJ4TgcSpoPc1xawk79",
  "key4": "4uyYHrEHVijwYxFvVy2tevLn9cPqkQyK8mz4w4LBuZNyhXvP9bAd9ibBkL9fpajGy5fVmJwc55hgMaVrH4hc31yY",
  "key5": "3MQkFStfFxZPKpdTdchp9br8cQxDxLbghkGKYfmr51Vk9RiiiGDbigLQVQ4T2H56cqHGTPBaFuFWoRXxbLfun6Qj",
  "key6": "47K7MFGL6EcWM1kP5sGBtQVx1a8ibMuyAHqenHBRL2tCxsPnpL8tvxhwyYso6qbi6y7iPgd818d5B81Sane915VN",
  "key7": "He1Y1aGFTUttKy93VU9vpeqEJkw5ufCqCrYWCqy3hQTeykMCeJT6Jjf9erdxUFxGBT18fwK9TNx6TVQbgFLxv6D",
  "key8": "4CDA7ukD4cBPareHYMXukE1SFqhZhZMGuKiLb4XL6zYYjkXwtGfh5hbTtUNaGep611cy1tSPb39RPLoWjM6aTZPQ",
  "key9": "5L1eaGPum7Acavi2LpydajzRRcdCD74i189X19KGXiQotFopiEpSSWv9AkbcNxUsf98hY8YzmQWjocNwneK265vj",
  "key10": "3bEf52dQoXgH9no2rNnpcNp3FCuEubBV6Pmq3Ru7pZqtxsLNfXzenu7igQvM6cQgKK6xLCg37pm5nQCLeJRwwVon",
  "key11": "2LJMhcreT9kZZGcx33q8bKMZ3akAt5TyHgrCBxQoNdWAxjwqGqP8MwjaetwCyo9rdtJ9NNN8JbqkyBghtJneZity",
  "key12": "4vgBERGCXXyUhz8Rm7mqMvV6iqp6zy1Cw7tebGpt5gSGLNHkd5Ky1GsmP1epaBKQNMnsixBwVZuQwUwaw1VRVM7s",
  "key13": "28RhWV12pEZY2MEkb8G1XsvFkSWwGyXEN7ySuv9a3ELf8zoypPxuUCjyz76GoGkNH6mdx6C4ka6o8rYQEhxrYPHZ",
  "key14": "4YqXQ42xz7giyCvhrM8XWcwoHHiUSfFF2aj6cFM8wpCRxXEtz9h9iTXhaa9tGe7B9mfu7ZRdxFkJugjY1ywHuvhH",
  "key15": "45qze98Hq1kXYQZGPqB8aLPptEPHFSsQe4RcsF3WwTaTso6UVZh25AnxuVvbnyVmxW8sSDhoVhYMv91aZHntub8J",
  "key16": "3UNzJdMEvDuvrL3WPMjL72a3LYawuZUbB4K4gJrumRpXRJSoMkE3vE9ruLKiBuwPSrPtjgCS6Q5mUuMziBniBmhz",
  "key17": "24gchUwmrkRvJfLQ42UfE8x7UKV1Q3zf1dASbK7XTwvvCzWEpug7Ne4swtKaHv31CPLqGn2G9dZ3XLqbVXjeqRmh",
  "key18": "2wfb9W7bAsVsUvcSZGWZYZ2sRc81dgLc4eAGaDFXHkaN5yyezvQswCia8HtYRMrVSaTTfu6EZMkMqz7bHPrQ5SwY",
  "key19": "35AEKsY9FGW3CLjR8C25V3C3y5Jzj5svhRQGBFdJ4Jp934AVogUvo1Vf7NjZpY9fL1Y2QpMHthdSojXWUWEvk6Cd",
  "key20": "3wgc4wTR9darzAS74EASBn9pWaaA6mt7WAwbnKAR2qvMhM2d9mwdZRVHoUuDCLcHG1HJoyYEYidqccMQztdVqi2K",
  "key21": "4yTW1jFyZV2xhLJED7MCTvcSVCaQdxAUiwY1fBrPhi7BP6qpdifp67wuFftcVcth8AUY9wgsu8dcYffwy88aC7L8",
  "key22": "2zwa9mgaapVEtvPDsYR7NVvwbeuEHva9menULiT2Lck84X41QxKRek7jh1Q9KEkFnZSvwsMg6wBKj8MEeCv5f5Wd",
  "key23": "63XmmR82HkWv6gwHSrM1NLo89xv4qg91tinbp6NgJbMA4wDQmaDh4tyvVajeu4BA9q6khjVzHooFcavA79REdSDz",
  "key24": "vD6rgLdFDdfhKPFA9S7gzZ1qoBtqMnVW8RL9zNxX7iB7KxDxjCLXwzjBwp9L45fD5rj7nUm7Ek6i3e2CbkMRJFQ",
  "key25": "239kQUXEYMA9GJqsBXERcGvvsGcf7vUc8BDtnEAsjk7xuHnmhDGdtGzfetNqu2xRbUg1mDW9sNuv4aV6cBUZ6pE1",
  "key26": "59yN6E4zqXapzmKWzXrJT6WvtKPZ1fgKugNeevv5WsTyvS8kprUeZDuhe5tCo7TkQYnqMockjWQZK4bmU8pd68bQ",
  "key27": "3VbBNzPVQhsMfiSZGZQgUMKxKCGi2F4UieYurMAncVCLtYh99zcn6wqtWSK6Tiz3m5Q2dNZtFEL7x4E5Bz6z6HNR",
  "key28": "5Akxq7aZBCAC8914JHX7Q1GGmpvrwwvPf5VtwRkzfFpGdjGVAwGdLJMYwQLey3WQZW87YGp7cjLkFNC5RpMHrzoi",
  "key29": "5ZS9Pvtn9roFYgrDXuUoPCMaHgLnKK43sP55qF4dNNpWMZLVeVy1mgsL9ekp63niHDdXwreHjDq1x3wnuesErM9e",
  "key30": "nEwMTJjgixqz3mpPVcpTzXepMmy1pthitmUHw7ZHr4EA8QGjzvf9ag4E3w7WkNNdeDnumceEua5AcfQNaJNAxsX",
  "key31": "WZcERNBwHWQ9bZRsCKJ8upxV1hhgDb1bthxZgH2VucgdBd8KQMQ48T9SrPBPNSsjfEggsDWi7mmqCPMShGvmuvC",
  "key32": "5hyTJ5aYfSaM7dXgaV4oRgKcRjTKqiZjdzBdpUhTPDP6UcGVYAbvFuy5v31hnvAUmknAqctFmnPD15YKGJb1v7ig",
  "key33": "533qAPh1izBPJza1kU54HJWxRe1tFvqtQcDkWeoQhMFvC2XhcJka5n7jKWzujAojEhdWtVor2Wj6UGDRpZVddYcm",
  "key34": "4gkJWuNRZz8LVGYhbMyRAx3yLVYiPPqaK3g7hEKALcfypZxinnXcB1aaV9KoJA1LRYmfzWtNX72qV7JY5E55mE1z",
  "key35": "5JneK5WpCLsJyU4mVpAnCM4bYDk7TwiUQQvHeQEomsEdDSZFXqBx4jjxZCEYzqGsp42MF8eApWvZjUiiR4Yw5GKK",
  "key36": "4TFtLxKeZ7Bm295JDSsmsbZ2PXwj4Sd4dJqPmvzL5qz3dpbWSH6jERZ6tYe8zyrTcSRGoe9NYbTWXhjnE1F3ZXJW",
  "key37": "5No9RYu2Rr628mNnAhv35FASwYKs8c3ToN8EWwkfxrbLtibbM7q34zAEtNGXtW5tTdsB5cPi7R8SBw4jVUynX7UJ",
  "key38": "4wHM5xiKQLpDWHE4RXK6qcU41pLmGV3SRi6nVVqxWM7XuGuu23k4YLWdAo876JtyKbUojVR5jnnZyfcLvacLCrkv",
  "key39": "4QxPjTRMo294NPhVC5jooJpR9ZZzReLwFi4QenQwrPBrpqWttQwYg5p36uLoTQUd75VkyYAozNTBxYQEGTcLvxZN",
  "key40": "2x6eHzP6eLEFnQi6XhjFtrd66Y5r6mNWUpp7ysBNwKn692CdqC5wuxNPV5u4HSWeSGvR7FvwhmScMdrZhzh2cDpQ",
  "key41": "51xYeEJcnZ531Cgz4Lpifbd4X5rLfv94R8VUS7sxSxB68ChnX3krXe8D2WmguxfukLLdZwmxp74hiecNqadEmBz6",
  "key42": "4N6C6cA2aUVEJckL7fK9vjPKCedgWCvs82mwnuMp5FmnFzBy42t1FZfcxmGZQgq9tVU5fwB9uCLaEaxCCGedVC6u",
  "key43": "2MwJJgHCa1qGpy2MkWY53PLjygQHm82jQNEXK8p4PEH2BDCtLDmojtESZjHRHkeJkVbCad14poK77kzqSBx8q2h3",
  "key44": "2WJmePjhLAFxp7zdv3AHJbyUtVqYdLmtCreFDMVxa8atcEcnZhGo1sLisicNSRQPq4uMPSSgmhohKdRgw3opKuSY",
  "key45": "X9S18Mk4jtb6mfgCMCUSBABu9FV3KdnY1gZZak96sBkD7ukLdd9BeidSPgzurTgXHKcZWXsyn9MqvJNwGk9UZiE",
  "key46": "3WDY8XDVmFoe9SgFKBJMhUjwptZi6LJeKwTNAXAropBQnMJUnXwumnWw95js91WfywSfTzDi8LEtBU4Kh3986FXt",
  "key47": "5UwhP1krsZDpi1bhAWRPs9MpUun5iftgLVf24aj7YLR4jp1ZyJnXRe3QCys4Jeedm9KW1hyPX1sp857ntmxTmckW",
  "key48": "NrksetfvD2VjzMSzDMjR1oY4UArkiw1n9ts8TdmVuCoFCt99b5UfJNrCXvC55FXW1ppRJF5xbLdLdGo9Lh82DEq",
  "key49": "UT4m2FMV9ZPdZSVdpzPs8Ua3JefAyCmesaynVJdTkhYbQa4btw4YykYukGijexjd5xa6wdoCrGy8CSMz7aDyP54"
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
