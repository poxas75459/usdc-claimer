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
    "ynrVjkc6MUxqq98NJvNWHXqAixSuq9UGbj8FP3K1GwE1uWi31Sj5yBMvPFZ7s14jfyk2PrNQA8NmaTo4vqkgVwY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vCdNZb1RGyV63VpqMaQuhcS5U2qmezRG7yC7uDREwKY6DamPNvFjzVMpYYSBD8Qt7hkbhgRxUe63H5G5p9ErxPR",
  "key1": "5h6xHJwry2CDgyuVT4cKP1WbepwBkA1NPn9BKXzboos2FfX92Gjc7ra3UZKCHLVPP9SSNd2LeQQwWBmZFUNrcX8Y",
  "key2": "58m5hgLVC2gGwkSiqc9CzeHCo9WUK8h4eujuYsoDoyKXtjNVbizLv4id5TBUfdD19rewFQN5JxfRNidiTDoaRk5L",
  "key3": "5VoCzmzVLrgTL5A7KJkPE57q5neD6FapqGS8pDpnU6uzFKACDLMMNRewMkCBNRga6rXzLA6tHSadprfZcnxkWAHA",
  "key4": "59CCb7FrPrjU7npkwUN4Z3xmaaCT7hfERHwpowyR8qz3UV9vjySyu4HoFDz33RLpLCyJEmKCbvCp2r4z74ZHwuwv",
  "key5": "5dbWG9wYgjtkv9bqhyvqm8XTMvqMjU7zt5QsMTuZpoWfLMDMxtZsgTS2uUHYYetdHs9HgyX2xY8UEUFkTJtQHWCa",
  "key6": "5enk4sY5Ps1hcUWwwgWX3RbmuoFaUiwaub4tasnAzz89pmzfsH6ZMxA6yoNnLahQoFFnZVHapwJHSdpCWK9PVDNA",
  "key7": "2nZyTR8RaefMjzbsTdaHJwt9j4MxJetZbCty1xeK23R2WnVTqBkQ3zDWj13iq7pbSBPSjenPXbLNrLPsPxbyMunn",
  "key8": "2auAcQ1c6PrsJeXNyJCmRs1deKMtFXJqHJGUv9u3sWjMqsLeqnD8KXpezEmH1skDDqh6ida5ntGWT893iXDfhVKF",
  "key9": "3ZzFoP1MXawtxJ6sGe37zXF9V57KnFUhRGAUfwyGbuSgh24ZznEDy4PXoLtzKiKV74HwaJ2JcsMkZzUXCpEzVYBq",
  "key10": "5n46TnBG4rNhGL4DSkSwujTT8sJv2f4Mzf4beCMpvZJ5NzGKwaoxsfh7srzQzU54CJRB5zXfWG33MsabQfrKcjX5",
  "key11": "5nnu2FK39qDyP94aDLtvwxf8DJvuotQshvRKKoNdcNkrq8zwj8XMKT2JXAaUyMYXFXqjKMuH5tZ89YBYyTc1hzXX",
  "key12": "34pRrc5pxp28vtRk1LcFy3FkdtperKuUKaZLG59YF1vpyJEa1YdnXpa9Jx8omkkGUku3qnbV2fnWXKyCcdVM7zMG",
  "key13": "418PXWummHNc64NDxrva6vEZM94jYMj6BCG7N1ymFy7MXDD5DpYChSVeSMMAK6h7Hqag4RXRkQrNdZfZJguBjYYG",
  "key14": "3R1N98ixg8R3GRqUXqzDKJBvW6qmHhRzDSkSa1ES1AGCvrAXkpfjZe9UMCQxs2779kMTvnq6meTQENsMipww1jmh",
  "key15": "2kCH2VWZN2144vSEF4mwLg5rmCFgqp1MCmcLrWd3EVMrNxvkqgYGHC73GMwjg6UFsfcP53qMuasiDCqzjTapcbEB",
  "key16": "3p6ZnRqQceC8A6U7nE2Ar26sf45v6v8fD2i2e5zr5WvnYyx2ynUigjhfi5ULcN2Cs77Dw3Qv4tBoKUvktBeALmqe",
  "key17": "3b7PE6e2gx9BDiRvxZK9PJn9jK7Vso9kMM1p6h9GzrWxpusgnysBuLhF9388rWwEruwRj69LCfnGaK7vefG31Muc",
  "key18": "47LgBpvs8pEKXhFnF8KBcA4fFaAYbaKEUbzdgQfDNgeT8tFWYrhGBbJieZ6vq6T6x3XBWsbevHxjsNZpsHrtfxtd",
  "key19": "5PMgbiimhxtWEn6psqQhVVue4SeQqpVnhTDgvAJdiriek2YTYBbhwoeAEgcMSyU9kXVCayKhFtvcLv56oMX4ATA7",
  "key20": "2N4WNPNcZziWfZ7omNKhaH1z6tmmPpAzx2ZrzoYQZuPvDrPSNJmYLL26jJWbRzjbubt8zkckhCnCuHPTQdno3354",
  "key21": "3yt17j1wKZGcnCLu1frT9matYHWMq8zJ4fSaJ1AFQhLZT6FEEU6wgFFwnirDhNuepJdSUuEPgxm6LrobXxWnbtjM",
  "key22": "ax5JFpgft7qauXaM3CE6oqWrdkhjRMthGVg7kdoHsLXRTXMSE6957vvpDXCXkhJBAwDPfrkvDdGvD296vyRWsae",
  "key23": "4o4xatz5jWTAVBnMYkBuNbd6jxG3ZPpFjJQAWcDEkyAaNEspFtD7aka2vNTMHF2znbeDHByiZNPd9UGLavGbqSi7",
  "key24": "HFj2JgPNzApHK4s646vvnjCUtwofaFQyM3oEzCTDJt3ARmMFnUx7uogxD5by8KUR3HvtJMeD4KnKZXjuytsXrQW",
  "key25": "KrUiR5gLhm14geyRFja2mFyvGwmPQEAqaqVvQJnDbkfNwE8CJQTsfmoRXe2132JM6KzBAG8voAX1359Zay1TaGa",
  "key26": "3kWm9Y1A72H5mFsQmm6biHicxme9LcqFK6xP8bA3CHCNWuKrBfeXLjJY5JHy3hweUi8xNBJpdvdtrA7xgPPtFP4S",
  "key27": "4Gem9pTb5tV4HSE6gUaxm9TPBCstkZ318oDnnbpF1F49rHiZgwZf9D1KkrtZUnABjsLFV5TRbHzoG6Cx9ZXPvGeW",
  "key28": "26sZdE4hyuYTYkFYQ48DfwsbPnjRj5qtfFiQ2aCWQ6zvm4Wuwhb639fEbrs3ToPFzWTeADq6SjjJJLEh99npY6bW",
  "key29": "2P7jEPdEgSFGVWSgP1jSw2gMhfx6e98FbU5Jn2XwYFyk2uJRkQJwvGDRE3MngLyMMf7MhwjhLMoSNjAv6QE6cynW",
  "key30": "2Q5fdB4uHpf6py3XogKptRm3Si4uWLeiei4b6f7jEWw1caCvRnVQDi3HQCF78Cem9iNVUySc2jjZm1H3wuxyN7yJ",
  "key31": "2Jd8WGvhTqGARBbScRSMLsnEduAzeuEF7biwbfpAgZnqiVLVkF8AZG5AnNpT5qLuhSZPiConAB5UDQA7xXUnar7u",
  "key32": "5cwCN9jJf4fERUmqTq8XEJYShpDj3QrHo3ucK6f4ETmBCeK2VmWh5u38G1P3rEBaWNQ4HNTWGobnrsXhAsf7YCqK",
  "key33": "5iAm9KsBf2mRhaYzNS7xvYZNcQ3RqF4UEAUNCvC8vmHR6NJ3A1eVqdXrfDZLjoT578cUe1Rr6AUhNAX8bMci7VLh",
  "key34": "3pb1mSZZquoFCmX6Ti1ApVnuJpLWEHmUQ74PGiRdPpgC44uaGcACiATPcoowSqPyt9btRqMypQndD3y4TgmHK64i",
  "key35": "3i2rS1R8uCuxMqAVS9RV2ZehpYnwhaXT4M6NkEBeB9ENeEhfTUqPdKJi1kktc7kg4Yhp8h9EoWpiqrCwXKxwPSgQ",
  "key36": "GZWYfWZrdbRwoitU146exZhUoYnuDj8fhs1oC857xuUupVHBqqBEtUWwaiShr5zZdrTNp7r4cjhCWUwv64dss82",
  "key37": "3oQ5D8mxw4xruooWTm49RaXgiJJyHHd3nRgjRE4pFgvwFsyAqbNbHGfrPPZZ95C61Hsiepm67DqsdiHYoKyP2hV7",
  "key38": "5gZQZca8eVbZBtSwNARGpMcawgz7SSBTjtwjrjH9xDaXXjtRueiMpMrtcvYMVAxcp8QB8nmgKvztBkgAHGRvvNjZ",
  "key39": "2VYApMsW22GsaQMeZt1iETj1Noq1HncRosXQ4wgTCi8Aou38KFJKqfUzFeCUS89bToYJXjRLjvt2qqVby2SitsFD",
  "key40": "32fYVLRqq8VKm3peqrdKmYgAJ4ogvX12kxqtdQSzMAKrdJavFioyFPsVuVQCrCmikeksVciTAKN2Yk1pCqy3PjEH",
  "key41": "32BiXjTkSZw66ZtE9nDd1FGboxEVJi8JJyXTSQ564xinCWD1AyBFDPhQVQx9ydnhRAxK8nWP2iiSaMCEu47472zK"
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
