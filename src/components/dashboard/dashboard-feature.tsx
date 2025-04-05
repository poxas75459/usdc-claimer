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
    "2HjEmKM1pVDQsXD41iPqwhuADY3ZTPHz9osZ3SvmZ1JLJAxmbP8DjHFFCiMgyhQehLw7jUCBZugE7P9DPzF3ptiM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vpccBjqpTetoREKCvkF7T4foAmV1bH6NSHHb3AhV7ex7t7ftW5c13JWTioRtRfEbXdCLXgjJkQeQ4mug3aFc7gi",
  "key1": "5vXp4DMeXUcusmMyobDiLH5pCW96VT11KFmZAn9Ahx6pYYNE9eNMj6yeFJ1dhtSJGAS2473mNkAeCp3TnSFBBYV7",
  "key2": "4kBfBF1rcKJVJY979XDfaJce178dLMG79Q6YPBK2kTFLGZbLjDm8ZXajFhWhzVsXDoHXrHkqZQyhx8mfFpRBz6nD",
  "key3": "4BGUyMbV3oxefz34LjnD9f69jGg8JrYPAdE94eH4932FNYAkU697c7jWLEEEZhrbxEf9G2qVQtdXHpLBYayiZWpa",
  "key4": "5dWz7vS6R7WBGHoMm6o2fSzJ8mqdNHAMPgnKvoazsKZ2tmTbnkt5sYCRn7LgTk3NycNRgMraUssTMkTDddQHvJpm",
  "key5": "4sMHdkU4hYQgCJfqcgTVDNYtBCqjh62hApJhfjJpNG1uAT4xcGNVbD1T9c2ZHcu5YDYYuuBcK5ih3RAgVzDnV2fE",
  "key6": "4YGppXL4xkTvZ3vgtySeJJoqpLZp2vnYfs7bSy36N6Wxpnmfe6v9CqHor9Au9FNtrAAiARDWpHZw5ocG4wGzHJmK",
  "key7": "uhCz3KCZGjYSWNBif3fKvLDaXCDN2sVin1xHGG8bCcKnWbi5PRz4vRgDseUuJp4GhyoFjdjhQtQhtiz9uTv3hK7",
  "key8": "4f1qVyfVSWbdCwJKuNE1E7finq3DHGodkkLabArdGr2H3Yq2RazEnTfAAk3RBx9mMUNiMcLTaSo8fdPjrvAaVaDE",
  "key9": "64L9hcB16sCYJe5pxiNtgX6UXzUW4kqNSUkyhVFUbBTPsApiBsuoTrk9emJzWPdW8LxZJReSGt8eBaiLnXm78HLo",
  "key10": "2WuYUHYHwt9dhLeMa1sQhchY6ca4Vhs3vH4gH8gPuWSyYG1w5U35U1ai4PS5p9tv499iEmnfQ7ipFGdKpWHaSeti",
  "key11": "rypTYCQayNjLzjp9cA5qWngJH9KWAHW8B1P2TbDEKuK9GpnQBsrggnRfYgzz321qHUWyxDKo8NBdsKQtk6jVtHL",
  "key12": "2tDnTcfE2i3L6AfPkQAgwQfCckRcK6ieMhnTLnmftss3FCsaWb1d2hCkWM7dMrsR5eMVJR5vDn6AEUxogpspNo9o",
  "key13": "3TWCjYBJosnXpiA29wbw1zGCSGe9pexMVCoX4qafL2HAjUDv1S6QYb96YxXi5K7aVRy2W3qhuQoDQSeC3248vPCG",
  "key14": "3RQZGSFTXPNXfbUfqtzr9XWi1WHgUpJKU2wXboMHCBgWwftV2dBpgSFPPDjWdcgMoafFdZoHCz5NRsiYaVDPgyRa",
  "key15": "3h6h7xaMdv9yPpP8XYJUMsyfirRySd3oXhwUFhNWbeoJHihY2Lj2L5YB6tW4wqDTNTL1C9TepE6N2vuq8a2VYhzT",
  "key16": "3B16iSvL676YmCboPMvTkMHNNs4aBFrvPnvptkdfbuCGbaEfSdrRfVrQ41wSAkUJ1S1DFY4PdZJNd4JFq8yej575",
  "key17": "5HfGpVEqe7BojxGKZ6sDAr7zRTMajCaGHufYbGC5EKrq5KruK6GxfpvhprnR3Gr6ypV41avXBfJtWhaMj936WP2J",
  "key18": "235Rj3AGzmbEg3VNs76pUzrNaDHKkFh1GcKsUj49Ryk5HskYmuALryQmK52J6wpNmfuCToCXkj7tUSWfo9v5GzMp",
  "key19": "2jaNQtEV48az5uKwSwTdayDbe5vcJvS7yBcw3oLMKpUXAQn2He5YfX2DnBG9fxUKjMHn7Dh3JfvfoCCxKHtC5oFt",
  "key20": "63x45qoLaEZmELdnv1AYLLi5EErfWpwNBymvw9pMZaYTRytfRHN6hFwQzBnJLCpaQr24UURbH2HUSjpFV6rsxt5v",
  "key21": "2uLGuwoDBjibHLKriAcHxXhYTXUs4Dt3t2he7nGr3yjq5U4QM5E6ieWxP8sPP5V9b5Uukxr6GFXgyZrrWZGFsPFs",
  "key22": "2STfsZ8esXwr2HUvoGwAz8sME7ym9oLQL8emAkhMYrfT6WHB1b1SYiZ9tYDHkCkWK9h5f1DzRb8H996kJHQVpnKj",
  "key23": "2Cm1vgLZW7bp8zixcAmg4UQRvJz193RJ8aDYEUBQDLsSqjjy5Bom4x2TA581UTavG8XsEzkNQHR7XeL9GtmzLDET",
  "key24": "xmHppC7232VNkGfBavu3RTdhpcG5h5bQ2ssrphEBYgtDApJDHFtMZ7k3ud4HR2t1924zKh7uQVk3wJcQdNP2s7S",
  "key25": "21ZSTDbWD1jJsKnTSNzAopZXQ2x9Bqm9sfUy4qNcw9c7e3jKJw5DP321gfHsRnoD1ZJLfJfnDPpy4qgo7qqmxbFF",
  "key26": "4Q4YARxDFGN7FwNSaXLza3FrnBEMaL9MBuTHTMQU3ipWMTCztGmofCmmftfyF1YuGReeW8HPB5wq5hCdVn8c32yv",
  "key27": "46DspqD9fTGUojjvNkFKuhB7KQicufEap39yABBqs3uAMa6zkqnZnLa46TstZr3VsHTu9LkTxBTQFtwJp7cbaYZf",
  "key28": "oUU1RAH3h7fzJyGCWKyz8zZHaHUksFXHq2Bqok75deLAMCfFnbxAoW1VTpwTkD7wAggzqSgp28KSSo6jPEPH9qF",
  "key29": "3nZ4ZdUWW7NCH3KeCh5jjfanDzeMyfE3ojLEXEwbU3jLA2vWkXVJRXFw7xUYjc8kS8fUMBcmF9EB66wCUZFoUDPA",
  "key30": "SV3JJjhmgiwGF1pU6mboLDFEYZLB3PvJpbtd7fE8YKJD6s1PLEgwQr7aZWk7JBPhi4LKfkVBCSjCUvXx6yxNayg",
  "key31": "4S27mD3aN1zWGfucYvDRqRFLZGbToaSy4ejgoZ4LnDvNG1ZSSunBVsw62VLBVEhKwXt3sTEZZxGddacwtyukF96i"
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
