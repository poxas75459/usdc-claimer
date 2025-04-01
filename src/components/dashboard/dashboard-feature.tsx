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
    "4JduanPMsEgqQ2VNQCeC6sGUTguRANtXZrzqsgVohpuXr7eNsfZjWPZdmTELQzSUxkL1p8Sx9cEX2Xhx1LiVXkbg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uD2kE1uTfddrApJrXR1DG7BmZcHCpNUo3t8hgHV4ov2KHEBDXNARnLsNg4fD3MzGLJujH4NkV8fSzyFBKDJDD7Q",
  "key1": "32TmMX4qTZiZhxcKsDq3WNXKq6rrGv6wyqhahdU67DLnCDXZydWMmzWRnXq11uEpJWXJCZPFG4ruNDZD4VJzWJ9A",
  "key2": "aFWsbnnUsJukY74envB7rBKePrpDk4A76ekUcGXWzbkuUinU2kYTbaKa1NwwbT3kyyHDRgZ9LN1QVQDYcHKjByq",
  "key3": "3kuy5QPWhqu9jEq3186xUDtqN9nRhSJWFYUHtDXCUestg5onTvQbiLNskgFc3AyGrEasqRfktzRaWnpCQipA5MSR",
  "key4": "wgzCe4gcqUrRncULfNzttzsoNkQ797Uy9HfmnDz9DNDnoEDbX18uYfCtvDUiLZTMWaWgcry5HWXSWdfp5fA9RhT",
  "key5": "2z358fnyFmufao3HUMHKvKTFzT8bi1K97dMEZkeVAk4F7LUo8ySsURs4zFszYXp9TGwthFjgdUyGiBX2iqwDySsw",
  "key6": "2V8NjCpoprvM6XWnjAvNFrKvbPHrpghW3CZBC4QXQReNapJX9h2HmicAQFJGdhyrpg1uPREvNCEQSDMiAYmu9sgr",
  "key7": "4ttmr1Sjy6EsBBksrL1YtLc32LPH79BU38WZZtXxdTjq4Ysmy2qBSgrEmyDdUY4i68mcXFAxzBtj8G3gdkcKjYwt",
  "key8": "3EfavqvtCGNgwbqMPQ6bVkTk2kK8gCNAVFxtUikWZxciCjcPVbhbtbUqZLMFKgpZk5ZmLTKVu8zgkFUUJRcVMWHx",
  "key9": "2wnD4wKFZh9bxX9GerpSseEDpgKhvmaDruhmjcewqNYka8xDTQCr9oZ87gtKMXtL56b2JRcVNL9MG5ttGPtcogqx",
  "key10": "38WTKdPchC5PzX1X423RQJJ3T6ebTDmRJTQFuRKir6iSM4kMAXTbhMfSsvk3AUAsvJ6WdxnBR6jwTGryrn3asWrC",
  "key11": "2FuPcGTkA2sD8H1NAb857Z1brLk3v8BZ5XWnaKL3chZUZ6ymcH5x13VGak4Jjj7Fa5hkhNcVVS1R7HcQ7miCUNB3",
  "key12": "mdKjEseJRDnbndehEYdj5xZkkKMn53NQiobQfHdQWnQzTHZmwVN3r3gH6uAqD12Zfcx1WYdpCxCj2s68eAboYr6",
  "key13": "58wbz5WnxRN35ELi87SJYjBdjuNcUgHGoZ6AVQBU7BEoLkdi6CHTze8FPW9qrtVeqmoBsu9dcdKhbP1jbEvNw19z",
  "key14": "38EDfiJMYrViYdba2Z3edXNdMCbNtH9S9sGGDZTf2XxjdQ8xGFtHhBBizkvKwP2MkqMVQgaJkF7aRF3o4SMHtheW",
  "key15": "4w9cok7jwxm8g1LUsPqBMVDHRHw45RbC4hBBuy5ZFYfcvGLuwv9W877skZcG282qxSi8Zjv5iczu75TF6CzM2D3U",
  "key16": "4eTZ3eiX6PZbQePSPyt6etUHNaPgSwfDAp7saeY4G1ENDe4orySMDexVR4a15qhbTsJ6RPH7X4TaNVHG3pRxwjTL",
  "key17": "3q83Vr7fbyWSKmfxoxH5k4u9M1n4V4jfM7PtPeran47vCGfRS8R3R1aeN9oKHd5F8dZEhTM5JqgNN1g2JfJSsccC",
  "key18": "9oHmWqfj3XhZJKWQVGWXfqLFMQK9Yv8LHTPzjNfcq7kW3djxN5wUvXcM1pR4yNAWqzDaDDBzSDsTfAivLngzR4d",
  "key19": "5cxs4sjsccaLRyh25wZ6fUqJxz66p5aWGCAckaVDQSVjWVrYB5K6qRkNexhf4cm6SMjg788xEet8ppcoTNUU3giq",
  "key20": "4Z3xGghoxrKjGyLiwFSXicoEVB9zrVeVr777q45UcLFmNgJY4oaybBimgbpysteeBweFVJFzEZAUqQ5ftw5EWoF2",
  "key21": "3L2wWQM1ih2p2GavSeydaKMmikixfn2Btgf7UWgNkaZEEqxQyuFdQVaVB5DPjC7kTUG5rW9ebW6G3fA5tiRJQhEv",
  "key22": "415bK1i6Jd2wdXk1KswfYb6TaShMtZ9atK9rQxt2PVNyCvPSxej1jEBmwaTuAWYfGAKrjTQipco9tv5bR8FiGaPR",
  "key23": "4P8x2sZqUUDromktdbpzq69KDmzyo57PR97sNrMtezWCDjjCKmwpf719Dk9fcCgaaMkYKTVato66nWqdHiZaGpwM",
  "key24": "2UimHaXLVafU1teQ5bCF1a4ZpPVM9FzhasvwDR5u7k7dJMSQkmXfhLNqcfaLqbJF1bHFBzuwj3AzQMj7taHNmtTY",
  "key25": "5pw3hKXXmyA5KUJpFg421Hpx8iLL1w2Ut9Tduccue91toQJ3Gh7sPcJPbJJi9eLs9SD3uiDEE3wDQkbB7ZRebFQ7",
  "key26": "4HHJLDgDYe7oeEdEajRvWigNsfVkQmqqw5CP9hRNNxUACDtyboq9a3PoaXpk7idxTr4QgWNHDH8etRVysHvdu7hR",
  "key27": "4vjGgFNxfhSazqStwKq4R1C8w8cmpsL49VKhJNoSNDxREbLBt3DbBzjzRmS8qWRUW1uBghxPAy8ccTW7hWUrBQjf",
  "key28": "yHQj8PiQHhcwikmnAf2zYSr9uUebyJHGuYoGWLgwA6bGTDDn5k7mQt2qJ4qmRyXRrGCnGKxeyn8paZRN5GQXzpq",
  "key29": "WkmuHVk9RCKGZijoczjLzM4dYjYNNwUh4NrQ3h2XwrcF3PDarVwE2BoTvHimRK7J4J39pxFzKXNqTmznPg9mrGm",
  "key30": "5ffLAxREPULrRm1EucPzVmnnZHnkspXuGHxC5j2t8fNjLqLTgE45dqjyT7wbvQSfVduoCHXzTvp8agmS824XSJgV",
  "key31": "3VC4H5SKCorfpiEwLeo6kyeBV1oysxgYVEC8RTZiJkrzuyBh8AyWppxNSmfLGzSHNYWnESTmrDaMxsWuM7UEpQox",
  "key32": "39HLWeytu6F4duTSYDTfizgbECbXVPhqBCDzujFe616WiFZjzwD7eULUoQP1c5cQeo83zt95nsx9bdodVJB9uLBM",
  "key33": "5wvhmoWaYLm4ZVxzXZs3QZBSGxKp6TZ46iWa4dUMdJUMUfsbHRwJTp9HPSY6MKYc3judjWJCMUXNV1mCA1h6G8Kb",
  "key34": "5h5Z1xpzN9ybGJTnAdavtddJhDZWUUtxoXix3uBebigd75HTteyio7n8eZCDY67H7Z7L15eWhiGU5CJ3tst9tUPj",
  "key35": "jmxc91jJTcwxFFayH6nmYxmFW211RFR3Z9F1ummjmUJgk8ft8pKcvaLTo4dPfRYncZV3gp12wpt1VK1hxBqwuoT",
  "key36": "56TLaCoHWKxFiigU4p5R2JxvvfNLU81YinD7Y5VgCeouGErPo5By61d1YezhWeiHTXpFksP1ujFoRkYeF4SG187x",
  "key37": "2PJQ5zQxCL8PJAbFps9HjX1jdYYZxZAvKvPj3CUhHdgGw6BENe3tJVS5CD6Vjy7nfPxuuwTQJFrse5Lu7TcDqDj1",
  "key38": "67hyMpTCwnUvFyqaZNGtaRvnNe8CgL3NnacYyavNVt73As58vrYe56rQexM8SkKkHXTBnrePVQdXgPb1jTwwkHiK",
  "key39": "2BjXudTytbtzJXX4gxUv2MyADzsbzGZVnaLz5AbbkKURVmhtEDsSWVaHbQ8wdrzgbyRuyjntNb4fepJ5ebPkDSq6",
  "key40": "2bc5wEa85yDTicBtTNFZnNLuajQxsNzsnB5fcab6eoe9HEmZA8X1AvzgqxfBqjGxbRSLNqoB5PnRLBbkGkJipaA2",
  "key41": "2qHnBoD1P6322YMxdCD9G6uNu73CLAWbVTUXQJaWH6urYCkrNwH8sQULEbPRvVd65Wt6gq9hFPYdrWf1k3CfxnjP",
  "key42": "2iniCcJGqsmQcHeeN2wBYNYxmLvsba6gbYieV7sLvEvigP2s53SD15hsaxHvgfTDPJysJ3AEo7jx2vuuau6vptb2",
  "key43": "2B1m6zkgMyZTKvUxyqLoELapai15zj4WkqZDehe6Th4dmzqqcCvuCa2tMseW4jnkHr3uTgP6Ag8ut7J9h8jRR5iP",
  "key44": "nZm41KoGvhM9WzC2fsoFiHrwuXEPgFLuxgcB2qaM5wPXCYFpE9rNqyGoHKW5BXDJdfnkiVxeX4bDmcErQCYXTZT"
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
