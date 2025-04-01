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
    "3hi7gFZMuRHAEf4AVFDZf4Vc7XuqfQRUths2kfhVDaukbrDRohNgKtg15g6SsBv2XiLfRzjAEHhbWgkbUj1nSXjW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Udwj6tsyDVUTVsEg1UVt3umKV9dbTANYA1aCByy5n2scw7DRibKpgrHSu187JrERvxryUoa7EvJMshxtmkV4eYE",
  "key1": "2TR2fWFeHNkn5a3iS46TurzCzLAS873r9ZXSCFSzAjBTe6h9ZfLNTqDvG8m8Yh6WgT2ZmuefF2QGeW1JkeHsLpjC",
  "key2": "5FqBC1HjSMiJ8qvPy9eSy1WSdzPK6Dku7yuTyi5wZRGZEYw3vaPzsinbtR3Pbbtr7HM6EwAME8XTxqRYCGFAhNc3",
  "key3": "4peNJiSbm2Ybv4aTzc9ayvpUPqBaitn2YbDZoTPDth26DhLkhjEYv7P4nRWDuz7BKZumWmABKJeNznMoPEf1mnnE",
  "key4": "4XkFMNAie5Eh759jZmoWg7xynhKj1guBbjoFG4Euq1G5VXuB8xGbyVD818mrWnucKY81eoKqPDbZkqDHuLWsdvzg",
  "key5": "tXJ5AAFQ1ALzX9fJA1cDN1YASijPQgn4RikYZWGGHkikAyrcbMQnKPtcXwgB1cuiygcgoa1XmdGL4sK92gFT5Ca",
  "key6": "5XthrnzT3t9iHGuS1G6kAH3fDN4Yc8W7yZhcv1eXRRVVhhpmBgNNinduNJ1fZk7hZ8uzcRtKrdWjjicxR1i1JZ1T",
  "key7": "4Tsy1PRmupkw9CYcqrv11TmJuYZX9TzVCg5WZAZZuBCLqFf7HwtuHixeSb4gNmpwT188uS9tNagAp4nutLhn5i45",
  "key8": "3iaD8j7vA9MuUA9xGmZ5qgGFk29ePDMRwBc6BJ5QyvnAJgSCDUAB6ZtQHvZJ11qVbNAvt8SQybXC4FahwMLwLrC",
  "key9": "5Z58nKKkF6aPPzRYcw7YXm97G3jpBVtXY4d1FDWSqCuh2kAH45fvjYCudYBJXBhVn922nn8D5R56XgFGBmesr3oa",
  "key10": "3ddkH2uL1JVW8MbmXBVTevRPY5LzU9WgS362K4hCvmGdeCXX2e85vtUbd5Z1s6yf4kkmmTuTYahkLcznRZA3acC2",
  "key11": "38NrZbbLEE8pVe6S5pq9QzYeNeRToNveBfcj7NHvdxNVqEAKLU9PTPJHucU1pnkGEaTuxE2mvfEAo4GdFrXBUdtz",
  "key12": "2FbA1dub2DnHHUurEpgLCiGSC9WwEggRR27baASpCsbf1QDESDCC99Auv9JHw7Ww7dvtV8fenRqF9Kw56fjiz3aq",
  "key13": "5JikF7uvXq6LivBTDhHKeq5DAwGGv5fjPFaWZgNk3AVaxgmX7RQ3qXa8ZkofXkCnkXb32fTouWWQiX1EgzZ6nnmF",
  "key14": "gbTB6fkgxGK1NmBdhxJBZiSTTazcWAHxcwyXLzm4L6Uycg8whKHbiWYdAZD9qUuvRbj2hzf26ETkGx9TqsyCXtV",
  "key15": "41jN7J14qMVqdRaSoyfs9e9giytV3MwLxLu6oW7AMSashfxJwCDW6XJ3CoGQ3QmwRJ6JZ7gbfm8McRZNvnForEzZ",
  "key16": "2hobg1imXYq1aHFvcP6itZbbr7kXh1Y1dxPatLuPk2SufkKHddAnCUWi6mFaPomxmMj8wSbbb8k4Y1hnB1NNH8mt",
  "key17": "tPHFbs75gmynN3C2kTmU7xtb8bZjuP4MfufPfeBMgMwV1cq2tS6ZQkH6mCFgtkMFhmLoDqR7EqqNx4ggoNTU9Lh",
  "key18": "2aLMa93xnPUNaefed34Ryv39igcdCV676b6Mms8DkGMA3S5yxPMNsbYLnBzc9GexvsHMufZTg2KPt5TgwDz7uemP",
  "key19": "3WaNaDDzGmoy6QupbWvADb87r4VKa46uzzR5RyAwjPUKcdvNn5LqBPD7J7scvfK5o9CujuPmRU3vzcY6j6tfPULQ",
  "key20": "3BwcqEQZ7GMoSeAq5jEkFxdmngdCEGZFzSX7BZ5fj7v8eUF7FeeLfFBvyiNcvowA2PgKny2AXtuF6esewtbLwZtv",
  "key21": "DuTedP3NouoboRhBkgv4K1GWyeKk1PBHwGvPbEFbXBdGap3y4MLjRtPySLGvdzJodcpxPKCacnnNLyjXDPwmaPp",
  "key22": "25G9yAdj861YT6vkxT8t8bp5HfihFVFeeXA1kSfw71Mo8xbWUChJnmajyvdWwaRuyJpYZD4LR4N6NCjmyRNKkZxb",
  "key23": "2Xnm8DZd9fwfwXnL21JvKGnrZAxCRe7tEaQyCQcgRAm3e5thQH2rTjSTDCqtJE8FouJYk3FpyuUkJWvmFXBWiVQU",
  "key24": "34YPjxFoMSYTGr2Z1dukeQE183r5qHGfFAvjYyB28sxBgqiwFWTD8AiK7JWWTyznUujZvLz2Z4N9MNi5QmkiNgRn",
  "key25": "dQryAdJ8At3zLGdgD54aVCnAJZtguSY9uEUkujeeHDggDS6fV5nSNNuMw2DU1tXTx5Wui1h5J61iZnVwuC38FhN",
  "key26": "52f9PxpvUyu7tBt1fY8KUitiSPHhpMHTycJ6RbtdgFih3ZCmsE2FnQz59ppLXNEi5mNN264kgcX4JTcrry2SGUtq",
  "key27": "FEkrSqGK8PWtu18WPnV1iMUUQzo78NST4cjhfbGBNJwPEm4UGxdHB9zfqxfwQSqdoQore7DcYH6XxJMfYwCxcFH",
  "key28": "2vbP2JHKEBGhHp2VJ5jGaFm4mdiaqUcgNc9jjA5phfVxsWRUBagkRDXV4VS6a8Edq9mgoB2itnuKoZnTR481kuju",
  "key29": "L5JQA1X8Lx8uHyKoXSaAmXRUQSpjkkLfjPpSs8qg8J8Zp61cem4M5Ue8ZwitjfPtkRC1QMvCW6hycn7J1bocKiA",
  "key30": "q864Rm6ftWN2pp7n2YefspHu4ugfVo9PBV5sM4EBkdXAYj1z6HPNUAvxanAQdT7GiaZtns879YmGrLGnQnLh5UM",
  "key31": "4j9s2y2VZPj6mNzLG8g5bntm8UwP4qRiD39ewjt3CeFfCVgwhrE9uHxRB7Z3pD6hMxq7yxTX6G2srrRPpjVKTG7S",
  "key32": "49k3HK3QD412mBz8HbWqF7JCBrVAsTpe9DG2bncYsthhgv9C8nHVzyV5ndyDjXVjE87btHNM5Z14QT1mmNwm8xUn",
  "key33": "2XbfuBhEVssQPP39P6GiXgtinFBkWZcGMQLEt46WVwTU5W6tXuNeCSqWF5hvyER7wdPWv1tELQAcjKuDpagmmfkS",
  "key34": "PsXgVFuCwzoJU4fd5UMPgK6ghuuNyetYPzvU4VTG9nmSnUMtoArfVyE7oLa9VG6gxEYkzKckizG9fwhLnn5Hwbn",
  "key35": "4bSQQBcM7T8KMxFeT9BsRAHyGBRY9ffjfBMWkgBjoamEv3RoC3VhChLB4SYDLEngjqvh8iJoexLr56oKXPv5Utvy",
  "key36": "HA47DDUiQ3Qu9nFQzREbbYYjKNAL9GkDQjuZN11t3UdLsiAA8YjDEQPQmqmE1KKEryTPMLLi6xVUMETPVQ44BjB",
  "key37": "SqSdHgJQtBnw28TGgq4FXDAYyRjHqMep3D7QYkvS1kmdRDcpuaYSqhk833WdQbxLPSKqqttBepUcfRVGexGo3NJ",
  "key38": "63pH4zqNeU2Gr2r6gJemqCGBy7VivCJrWwAujKBWtZqVfSbnbn9qdrUN63qnEoyYvReCbcTbgnvnWtmaqcW82Vrc",
  "key39": "3q9BXU3rn121Wx6bDMZfq6WfiQdMzxHq4dj4YTt6e4LNrooTyo1k3WrdAF4mL1LhmwWW6Cdgwmw3dyS6gw3DHjzF"
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
