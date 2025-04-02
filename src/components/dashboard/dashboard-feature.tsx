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
    "MDuKMW7JPqqF84h9Sf5WV18mNvXYJRaFHbfR7XYsRb6PnxmhgCPMPM4UGTQZiMzKGs1TeaeVt3sgWpE4VQoGU4c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ugLgACDvkrSV8hbmUQNhqCRyk8XPVnB3x1XuQccry81xBuxY6rgNsvugiNDcXCCpWNNZEKKQGsw87TgcT8dFpDG",
  "key1": "5Jr1mD5WVY4zMtk4QU4EyyvenJ8KapFHRXBqC3rifa3EGUVnJg3QCgv7uZs4UrAtywUv3Peh6oRgeqyRTXGM2U5d",
  "key2": "3NWn12gUTmUku8gL2Zoa6DVR5x5jGtJBaa9iv4nknB7b4gnNdQwjfPBpBWQse3daNdwm5YLosQyHj7p5iDKEZvYq",
  "key3": "2Ng3ysKD7kx6yJVzzyCrm6Y2nEcabD7qVkbwwrwv7qY6qT2iNK5Bu41LSHzaurTc6yyvxAsjbTKt3dPWpqtkFnF1",
  "key4": "3RUejK65oY9GhFDsN6TF9WbAvi31wsC2aBpiXoe75gsVcWYX9UVZc7UDYnQJg3YzbW2sUnHBqJdkBjbuG8CeGgqs",
  "key5": "2GNDsFcubsdm35KWWKtHUWq5TTKMv5gocD3sbJuah3Fb19WkPWwBpSAPFCoRqM8uy8J5WVrDSAyEwrkXJKr5cmUK",
  "key6": "87JFQndrY7WDfH2MErfiRhVZE4Fqd3SZjhXpTUkfo8DyRUCZFnXETt5KfJVSNznWKmjMu35Lp8m23iFCBiPF4h2",
  "key7": "5sq4k3iqmxtGTddostnWwRxjyK32GTo8Skd7GfR6a18vb8MqZkikupm9HNfniZL47dCExfxJkBxmShRW7y37xEgf",
  "key8": "LeTELntS4SiMXcq32DuyBPSu15hGpEjR6LSmYFJDNyLAT2qkbMrKNnpUkypKeetrqjRYz2DPb743wzHVcmu86Hp",
  "key9": "4spGNRBgsu6gdS1bxM8Xxqih1n9qPskVu9wpS61dsW7z2NXvjrNRRJYj3DHqgCVss6vz71JFoczFdKkcqp283xAw",
  "key10": "5sRxweSkUGB9794dLoXyLmCPAxY85ZYjfZwcUZ9vr3i6qT2wAqroyoCkxo8y2sJhYfhHLQSxmE8QCVh2ycgFBHJv",
  "key11": "65RQ7xVG6hh7B6jyotjmdup4zRWgmcCBktYVbiZTjGKGg8E3AmSjpaQgfriQ5fvobKkze2JGjqfXXuFHVQ4V49h6",
  "key12": "4g6wZNM8iipZqC78ihDuyzmtgGUTpBempywa7rJwmTd4CxXkxydF1bavjk98Uv7B22jxRed96Xs47ueq9hbscNch",
  "key13": "3CsK5JaKgFj1ayaXmh5a2XffVGP1kiRpVqNrPbmpLKRrGPcobcNH3QuUfnaMEo71KyeQ1ddDvtTnXyTUJ8RHr9ZT",
  "key14": "2PaJmDFYHjGYgXWrr1oTgmkuuRyVNKCrf9PpFohhvJzeG1csNtsBZkYKtU2qNuuWHFwrrfTyu1cCqFQ8rreYVsUv",
  "key15": "5xLydaevbaYR38sk9CWBVUwVG9fpgSv3UK97ojh8FE57gb689zJB4ZofVBQAe1BkfRoYPmvRFqpKhvi6UY6ABgMA",
  "key16": "4Sz9x2ayF2zmc4RJdKLNic2nwDzrg2DsYCaZsPBPpMFDQqu6Wni3v31BBqT2NNiECQ6VkC4NFMm8vLKgpqNdG8mW",
  "key17": "3a4h4kxEuHAitdfi4whrZ1ST1kyYxQwcqP1Prb82KAHpvotWAWfc991CsXUPARL4C6KXeVurrBzwgpb4Z6Y9br8M",
  "key18": "4dS959ZWPaDTzQNxmyZkFLG51FoRtyvQPWaHvWeyBMmvugnjjJhg9iD4KDkh97rJRDP6tyZWonuw5vj9RnNoqKG1",
  "key19": "2txwHuBR4ec5dJ2K94yZ9gzx5a3ngJGj11ghc8NTVp865vMucEfR3UGKtN2TFk4YzkHsrAJh7d8XXo4DqwBQdxgw",
  "key20": "zYw6TfaMBZ7MEU9bTAriifWuNfJibJMom2G5DrNPhXarfrHbEsKSxZ6o9hUkXpH8NCFVfWbDsEewJmigmPQhsuK",
  "key21": "3NSmPfn9bGZLMshDh1mBcbp3B1bUxViJ8aeScF7JQWcEhmJUBnbfdLPSVkqXq2ayM2qb6mqM1WhyZFfJaTvgiagW",
  "key22": "3WMmBTh1ytg7ngojhL5UNaz1N75pp9muaQ94JiY8LTRmiCutfGLcMXUTjcL2oWNxQuvvnqbSn3UEQCyakhz3o5qw",
  "key23": "3k1oBxebgSTLkuqkg38xMpbfapEvbEodt65Bg2RiLcRhRwQXWRyxJDcQqBL1RiwfE7gkLVptpS8NT1wGAzfCRSMM",
  "key24": "4XRRRe2UPqyatZPS6h5nen8Jzfs3X33tAMojordxLhaNPMrUFhrASNqXyoWvkn1gU6wrgvJDWgYJHLUeL9mm7C5L",
  "key25": "R8W7kHKeutLeYVyfDwLQNmE2paW4ToHArq5yiRdYwsi9hAGJaeXdXBBC6kdxradyUVQorewkb3HgHCM1GUt1hh3",
  "key26": "5Ssiq4uQUMkSv6QAYscmgYM6RC1CMe3po4yaS7j2YheQXHAZDmApw2a83v6yKSGG4czrfmWagJxh8GRJNuxVUYW1",
  "key27": "3HW4LkLJpxhNLKUDbnrk2JFbrQN7sMg3UUDdSiqAS5GLoPnM9tVAqhEpPs9xfsACdsZEsbrXpjKuuzneKqNwdPw4",
  "key28": "Xe8WpJNL6Rg14shstHbKhRMCjupvgzdY56a5FwceUKVFih2aC6eWoNrG9RgQb1d2he8R3t72CNR6fttWdQK6QBK",
  "key29": "5aRfLFxpWp7QDoy7GWYpGZmiJmtxDsT5YABAVVD7KVF1WitGuRXiVe3xtASCrCkh5ChLkfDzciGf4YYZm4qjDW43",
  "key30": "3VtdrGNiMr283j5XpiGYNuHueWzUYCwSJ6UAbYnunCVdUPRPqED3wxEgrfAHZuqPdgwRbiSX5KUuDJ5tgfUR3uEB",
  "key31": "49jbEJVUhdACdA5G1CWKcyQDAWzsZAtSSWWH7vHRcKKH1PZuctvZ8gw4oVs4Q9ZtGvQJXcUQeoHic6zCHYDvWLfz",
  "key32": "2drc32MgWH8Yz5JgSiRNQWDsXoFAuGmrah8QimUziLofK8VqBvirbsQDLkpmv6Hrdm81juqsU83uzQrpg8RdKV19",
  "key33": "s3mqoH4XNNDCVYhMf76vxV7gGueZjojb2igi3MsYN8HwJxtDHmAWL3AcJatWRxhbDtkV9RS4Dq7mzh4eRTBaGMn",
  "key34": "2kGgZ5YcSbVvdcoCWM7zj7fXcLBnNadjhfogRV8ThY5xpqBVJuUi6V74kLB1CM8x32EU4Hsk7kTZ6vTwFkm4HQ8t",
  "key35": "46LRR35pnuvX5CibyaM2fowfk4WJtFT1SRjEpbmqgbJ2df751rfWfMJNpaVXu1MQp3adB8dT25KHC8rk7dxDK5oD"
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
