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
    "2iGckWYC63gHYdYva7NeBdWsiaQRoUu64XSu86LFBM6d9wnXGA8u3nBHfViz5DZrkXmSsyZ3FiqhVpj6ByBd8Mqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nr9B52VeKbemGFXD3xvVEHu1ARKPxfTDZUt86Ru8L9brLW6N7mKNFWWcTR8WYxuv3YfVyWJwX315t1xWHC1gUGX",
  "key1": "4QPCnddHtxQXjCM278EmWXbuhvuqapLvBhzd2R38zHrsisG8ECaJ9zZGWctLaGExPjoL24UAn6DRS5Td1jqdkui9",
  "key2": "5uXD2phBiMXT93Jfz8AjsiKfZpvs1QahDwaWkQkrgHazo7qXsgdTRyD5fx4CF8V63JX6JJjWwemW8E5dxsdHYrMY",
  "key3": "De6ccRxAXmGBzT8uUn8wtnnHUWYoyw34pj9tFYekQADmPGVHVe3Cxw489k5yHQFXcCuXDuxinsTv7P1Mh2F4f6m",
  "key4": "2CQgU27LKKcJk3LTjehdtpB59jFKaEEH3nqRdj7mWhTXrUhYuGY6pimMkCNMLUi5ywJV69cA65zSoS46JHXwQpYi",
  "key5": "3fLzyi6bqTJdgwb9YqmFgAa7XgJGvMwHJ6AxAzvHm6Kua8LqQMcqxFz4qJkgEBR2kXERj3CpBRqWZ2di7qzcqECj",
  "key6": "Pwj9BQ64LRwXtLjBt6Up3GqcFr29MGuYD3te5oaobZGWAgnKgtmEugGS68RCDLPPHYrjtLTQmLppxJgAr4RtHUc",
  "key7": "2GRjDZFfdijyGud5EFGG2PD24sdEzwQWDhdkG9rwJFqA6uJ7nizWmeiwzoGiLsMxyDkxATErCcS173QHSkuo4cn8",
  "key8": "3g3A68mhzQxU3mw5UYuL8kuEbLKbeqA6UqfaAmtufp3D9m98Ea9aPATY6RmY719fdnsc1zRQAoEmCA5qY1HEiBmw",
  "key9": "328ga8t8H22B5MwVvcNoeWRzvgd3RiCiuEduan7RUMZV97jQvxsDrCEY26omnXTjGFGHuTJkhWxAP77QNKMXx7cB",
  "key10": "2bkiidMyR9WZgzVvdsZgJc76nuHv2UhQ5YUTpdZbk7rwtnDRYUD4psdSWMTcusUxg9UJyWbgPUXLGfEyj5q6jQb4",
  "key11": "5yABtyKsZ3vduv7CWCZKZH9h7ZzxZ6YkAheHav8ygvTM59fKP1fgbRMKEwopy946rtAhWhGrAoSFYjhcPRxuJ11",
  "key12": "37C4s3HcetMe6rPsaX8RPf3GoNcf1mTj6kdZFzTizCAiX753r93ucKSfbbznUKusU8KzBy3d2Nd6p6yZmT25Hfgr",
  "key13": "2hQtWTXd5tsy1ToLvK38RV9J4emn2qFqF95Qngz4ttfVpHN6n87MqrQEizJgPesPhRfdxffuY4V3s4aNw6WoNHb6",
  "key14": "2E5yVQF9adLVKBVNqkJqEEkKXQSmH3xauUtrfAEjejWVNM8Pj5fyHp9TSUy5vEGbVFj1WFjGuRkgw8fDfTDGy7Ku",
  "key15": "WzCJP7tUsCjsqYgo3mrdkxh5TcjGifwTED9CeLUPUYzz522uwCiLXeHMSA9dtfKWEGkWcXmdPQRFchpY2nLK7EG",
  "key16": "53KEtfWHnirmF5rsW5Y7QCgWnmZWahVuQcNsYugFfqocKWr9M8Xxq83hJ9pbKMGy2BbPj3tAvBexnBmL44TZsiTE",
  "key17": "eE6YXZWSawD58kJj3r3XxXT28szcpc8mnrcv5FFWmLruY9CcQZRpgcjwjHW9ygsb9sLQGfBoNTXNCRU5KZuwFVL",
  "key18": "2AdhHWqDV3QkgjNnm8QNcDkJ5iAaQDXJLpubaXN3B417edbw5MDxCpN6hfwehRGbnVEEZK7npdoSVifaUb6QpwdY",
  "key19": "3y2ZAPXabJVzGSpJjockMzfyrn8GQrk4PY6XYcaM4h1tE3DbJaZ9xywhZwsLZKHWSJ8k9RF47LM4SLVAFiWPGx31",
  "key20": "49TdTeMg1kX3VKbfifT6N7ykPaAc9pNXuBbiDtp24zreVYydFXH38xMVKHAdcFMnfj9JkJ8uxq25q1SjrTcdnb4y",
  "key21": "3gyyxYRHEkFfd9tJ4xADimZ7JuV6gWKMJuu82AeT68wkEPTJu6WTHzBsYJqEr3bFJcNzRMCnMcowQ8XQmAWJapTn",
  "key22": "2VZXgTJTJ4MiZCfFRH1i6n7TTHJZiA3gsCQ2T9iJZYQfLHUWjKEsazT6Wftr98LgDaqA8pqLvTFxP9xtTW4bWrGN",
  "key23": "4bNKKZSVWDdCU2mJMkfZB4NFusrehieTuUHNyR4QxNwJyqTUzSW3sbPM7Yi1nke7nyV9WAaEAGgfe94Cizq9RYGF",
  "key24": "z3qYTMmDLrEtkuP5gek9fxBuWnU1qWF4AY2BxHysMvCxMyz1whBczFzgLDKf4ZRjZuz5K9Q7sLoeYgx5GuHhQw7",
  "key25": "3FDXUHQgUqX8xCb9U3hkxVamU6rSDeGnyJQio4ue8LPe5igzHVKEMvXSKRFoppRPrRCCE4tLZiNN4cGAGrKYP3sy",
  "key26": "4zetFH7Fm7oaEHMucszXCin4XHQdUuCu4saivCQ8P2qiR5BExvrocp3kD3vpCfza8paEzM4jr6akRpycwjQrAJyB",
  "key27": "3cM9kUMBvYmRBsqdtyjbUHPkvxX7ukQheda1rjYVbVsE4dCeKHeTqrUL8Gspim5oNnJQAqnsB93dHBa8y7ttFdUu",
  "key28": "5iRzTQsJRnXUabzUZHTyHe2ME2fpgygC1LfYTJNFZK6naQTo4Mo1A4g876MEbTyvLDj1Fbwc4jXSkMJUEN3K4Yxd",
  "key29": "TgotTREi5qwVPjpGaSTapa8jdfNf59PGLGzHdFD2dyQ3SacY7CCMd96gUsL1cQFa5Bp2wuQRkZqYXf1YhVjVV8W",
  "key30": "2n9TU2MPPwaEe2J6ZmMm8dY8fQeCjdcaznkYSS8kXmE8K3Qtj9bEdh2xTnE53iFKrSywBZmnmirWUPU53NLZ22n9",
  "key31": "4MtSNyKGgRZ5hP28BwDgi5YC954x4pGFhXf3WYi1PSLhAQ34j53M9RhqU42WcwkSxzgXAMSqN6TSzHHK7EBsUZHh",
  "key32": "5nRFZxo3udqmHeHccTXhkvKjepnTGQusuU962KhjtcX7uD2VSMYCCUJsTNHsKv2ZcHeSC7cYd1znpfNiMjj4uqc1",
  "key33": "3NumMoWmGFxLuKfUcbUVNfd44p5uN9QmzqCd5wegCecPqxdBij1UjUexGyftGVucy22VJgwsMEzqHTpHN6dt557h",
  "key34": "4yTvModbnLHcjhoW2DCD87JxLvNRLYMs8FEr8hpbvVKXUZWX3mgGwWBocDPocqQVMxo9ZV5vUTEtNd5RjE91UnsW",
  "key35": "3YixyfnqwfWq96FtWUfvdLsDHnhH4tPMApQPJB6KG16vVSKTAshwAS288exScT1ttCHPyNDT6UopvQ9S9jhwotUk"
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
