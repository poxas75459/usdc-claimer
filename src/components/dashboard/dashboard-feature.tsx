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
    "4wQXztzm13Kzjx12Qe6sTex4Nr6nmqcsLkRGEzvGgomC28GTjHQ7ZZ9LbhAGufZFkZ5hEdC6yEyX3JivQZUnE2oa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xbDmNgjFKQMvSQwqSsg65TZ23bcQW6JaATYZUgcjYjxi6VQp91tviKkwVkRNPy3U3UpdwZChZmUCFq95MhTrPfb",
  "key1": "4kjhoLQvcmCMXZ4Z4ukmpB2oBqetdStH4bYLBQCam3HiVqx5SUyqgWKyWuG1Coom9vGk3EX6GDRoeU9hF2E8dvEy",
  "key2": "5UrPMka2hJuxo5wC3CZsteWM71exoyRnuHA6UCB7wqj61ykmbZUy7PdGqdFaAjkvJfqMMrkGPzKe7CvL7Mz21W8g",
  "key3": "3D6BC82NB7TsSANc9qwRU3dLnjeJ4b5X3ff9YpNe5AdfqdMxy857oaPvnuDe3ctsuHERunjUfcv197By94MAEpi3",
  "key4": "2peTs8u6gqGPiyUnnJcyidWSukkgKoZ7ChfD51jiByVkFf2Dz4mhQv2DrctHzZSfW93xvezat4JrrKPgprtBy95e",
  "key5": "67TUjNw11zoyHaVpySiRsp6mgBwRyMtvrNtsUDPM71J2qucEVEgB3tpbvqEXDawf8j5Ar42VMMS15Lrcq764hJC7",
  "key6": "2zHAVmsnHh3FZDst4Urc1C3zmYr27yNT2CJvtNCWPk8froi3cFERsDwxZTw6wD1L43MffQ1Ku1133iPJShMfLhDc",
  "key7": "eJkjeEzCdt5aib7NqnWkK4BoGwxfbouo8om7WEUGkw3Uvhkw45yrqU9oQ6uKjMjyNsdJdswfr6vSEZwRX8kBUgE",
  "key8": "Kk4NKMqvAd5nn9zFCdkneqdAqwshLqDvNCkFtLabs5ycpfEZKDH2mvRfHPTYGqYvETRviSWKAhPYB1aL1PUZvPV",
  "key9": "1ZBgivutkWWJBUXiR6sefz8KgZqVGLUgzJzGXfBoFpjxVdB5RB99VvfthRwKvzwBTiMqimygwYsgnJd8FjHUpEc",
  "key10": "3Ahy1rVkAFEcSj3wyVjHNWfRAcxmB5r6TGUHZX8P8kuSqW6T8oAeUAP83B9KKYZiUDgZtXWmBz1nL24JZ4Kvao9T",
  "key11": "1vaEDpoMjLPq67hwB8yeWZsQs7BMLTLbVnZHRiFG2wcSAdtY2J5pq3nS6EuyDJLSSeGL7fryZBz3he3rrrzjDnx",
  "key12": "2YRWWqtUDnnxDVp9huhy3ov5Lyv5nXtJrMEUH1qtZhNE2DXJX7cS9Ngf8FXAqQdYmekP7i7tjtQY5JYqwXAigDiC",
  "key13": "4Gz1UuAVemUU7zZ36YefKx84arE1thpu9im9TAXewPYfbfEt2TE1QjxdqWA2a8ynPVVoQKqoHrXBy9H5G72CHy35",
  "key14": "3NqmGnxuZ64sxyKmwRB59rf9XfEgpGFCPyHqoy1yKF1sb2T36XuLEkg4W6URtZ3cis2D88tyw5cxmzdxxnYL6FsP",
  "key15": "3SfHzczYc6bKYDLw1RS5Egev6kZZ5Ss8jsXmWMeRsw2MLvVmTXuuvK8pf7XvMrF2Sxgy6k7wkMdscE3Uecv91KgL",
  "key16": "4LR7DPTMsh1Sv5MQkFNgmH3yPZGiuX5R9jFTWCGgEyfsFipG2ZiNmJJovTbXUJCw8wd4mA8RioH6y37uCfCJ3yB5",
  "key17": "2tAigYxQJwr9rTmzvAqoWAtkPwPyP4PGeWYLEZjrgLiYk1sCc4AVeXwfnwDNs5H2NWh9mAaqsr3C6NQJAQC6aoR5",
  "key18": "39cuqZXCzZgkuqxxH8pSgdEdcGcqDZmVZKU6vkfaLZ5eyt39P9jvQUG5Bf59Ge3WfJtRJBYjNU9e7gLus2YH53n3",
  "key19": "3GoeDFWRYYx7ZtC4w5NM3QCztjrULUq1vBsLHgqMVWukP4bzC7N91CAsB1vnRGvj2pBGXfiojwbvuaXuSbebvWY2",
  "key20": "3H1vw8VPgPeTXdRgBwomoSn6LuNpcCT59SrYy2U68VfTCge6gQr6edESMD7YzsCNXEu1NhA8NE6riFman6xGdfzE",
  "key21": "5Ro44ut75P5Q4L2CU4fyVACx7YT8mwbSssFNC5gBtm5MPiuUsUu4BkfunQrqdJwYxeK494LFu41iRK6VXjexajGB",
  "key22": "D69CeSjdfKxGE4w1Eh4udRPFmS5fmXJTvG9cmTgZ2iNkCt5USAPXdKtXvzYDYigFdwtcci76qL22oTFu7jwhfJZ",
  "key23": "3c67jCS6UMRT2BZaYEH5owGy5XF4SVMTmCktfZHvYkGyMT9A3UrgjXqURPgqap3V1G1oMM2q9aHJoAgVVuNCgfqw",
  "key24": "56VCtHjwwSS2916z2Kj1qCErQer7stvao3rHANkJJPu7kAFnMe2obJD7HaSH5WrzPtWeabF2D4AkAwsLiyz1NLSa",
  "key25": "3TN9x9NKdqiszguUVkLQHTXvxWRKcPbmoMsxsrr7FDrYmNcFj6dwRiiocmLop8tA6cecgP8ay43JUreRZTphcSzx",
  "key26": "4H6GbMxzkiZ9vVTtiEQrNMg84j9Qhb57tcJTJS9QonMbotNtvXoF6amNKaCiXtzFLBdctRZYHdjY1Gu9ZNmAu4aJ",
  "key27": "5FVeU6TFfWrwVpnsi75cdUKAKkaYSJVKZDRjHjQZfm3cWQdBt4Jsz5q5Nnhp41bMr9owc84qGRuv4PFsbn95DnW4",
  "key28": "2A4Dc7sjBVkakZaaDiWAgVfigmJTKA31mevg5qa65uVzjyNJMpz2JnJtixWSLNS2NHdMLGZKL5Zkvyo2WrMebru5",
  "key29": "3J1yHL8agNqfVvzN9M3aaVw8VgTogF9eB7C16ihadBpfpNghswAEuK8xwRwGHYsxjg99Tz3bDuuMJGdsSg1U9mU5",
  "key30": "sXTtvGt1Du1zsu99SW2H2HxwRizkuAffBwV8uRMdP9X1kC7fiZzn6uBdpaFNoDArJYgiDi1sxgxVnY7gRTRxuLa",
  "key31": "5wQSbNApDk8BuYQw3V2GZSjrNBuLxnrSVjgSrBL1hVwcUe85Gw3qfDJosHGfgsaN7DTNaQ52RKkdoT6WtVun1HrB",
  "key32": "7Z615rAwZbhXz9jKERbYsg9U3vCopsfZDRm8yNxP7pqtgcXMrx3Fh44cnYv3FY8kAiVic36yEQK9SZ9vt8JxtPL",
  "key33": "2zZF61tuWB4sxAM6KAaQeT8VtJ34vv6rx4wHFNguTumZTLLyupSzUYHDWvJEqhKYaLZ4rneGTwp6nzmhgrFJwyzC",
  "key34": "obAZn7MVrvvkvybU6wVJJGWMgAkdUqrYn57gn41jWLZiFX2KgGDuudqzCgF9WJt4q4jnjDB4BY6ta7r4PmHBBWu",
  "key35": "2ZsQWd9g7MVV3RJFBtRcxL3JazQdTbTKnnHk7A4DS2JZkADHuaX3CCDGUr3wHC38BCTjSJoQY7sUR5zuFmZa32jK",
  "key36": "3Z15bAuKgAwdVXrB2mnASVme3Gz3R9DNJwBxFDrBctCHPTgY2Ym51sCmLYUiqcx1j2DxBzS4A73uBGRGtFRuAdox",
  "key37": "44imagCWmeqWYvy4seseQqKZydxfqvXqNHkxtfuuoQUfkwx4KZDcy3cLCcmhnVmpHupinMztajPCxo5TcBKAvLpW",
  "key38": "3gGiuvH1VK4q5zgDpmpbqmmKksRS29FBMgviwwFkC522RYu5mxWk5psAKYHJMEUFZpH3KseDo5EJnqVx11fsYwuP",
  "key39": "AdYFZyRpWAQjziKLRHgPp6BN1r6JnYe66CS51gvYTAWWJQ1SFhsfkPdHkmPmV7sgzLDTrWB3a5a61nmdtVHXm6B",
  "key40": "5nAKxanquFB2sX9YY1iasc8WY9sjws8QLoPgzTFfvXDtPWAhLGmX5azoV6Q4svEgXwWE8nGWMLHDQLLKkm4fN1nP",
  "key41": "3M1MBKS23sR4mtcmUH5PfGJsfhTWH7rVZ7sh7u3zRWqGGwRAkhjkVy43FTbbySbz2AjjPPDrS1HZU4zv4YKwq4de",
  "key42": "3xePYa2FGrKo4oR1QvrMgPhofRAwwnxkbGgfBZXtR2TxjDRHsniaaDQX25rXQJiJ1J6rARM8E53XMnHUouxQsgdw",
  "key43": "6QbFuDYB4i9kWh4uTtDAqqVGDc1813TLBTCPYh2rDzxHACTeeXKNEbf2qt6jFBViZyw9hBPnjkeXCUpvwFqKFNs",
  "key44": "4BuRpTeLC6PJyQxnrUPH5WoVAAByV5KVgWzrgUzdhFhs27eEAVRduogJVuegsVUjeEueh8Z1PK6Zis783ur3XLVb",
  "key45": "29tnB7RSMscEV2sN95KcnXAPUaBFFRAGg1cNGtXgjRnxhrRQsbTQC9knbus8YjE5r6UitVULxD8fcZ5DtfbdXFby"
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
