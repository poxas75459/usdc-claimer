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
    "57h8UnXZbZE2Qwwu4QEMDaA6gTbWwUwftvdWg1M7HSvLa91To5wSKeohzKKYeViiXn9pdXZbb2TP6Sia13Bi3WQK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25997ztFABnbKDBKdqRB4yo2Jpn8HU2QBSqb8h5tiRUu38raTh8murrnHpwn71eTVovxVx4vudN918q8gXWJCChs",
  "key1": "2jKzZsy8DfKEkBXteTcKoMzjhTzZQU4SX19TLwvudBg1LW5Wijiq1xb3NRe4wUc3McAUhkztejocXs5ub41mRf4n",
  "key2": "5EzwM1vkPkbsaGVjgi6zTvo9aZRhbv8xKmLzGVTRxrvZZqhEcgcw893UyJovcmY6bWB2MvNkjCUgPp5sGTxLWfhp",
  "key3": "67dLGzRNNtZg3Qtc2X7Rn9kHztr2kWriwc3ZL9vz6kyw1jphYYU86j147pm6BokRu423LXTsfUkucuNE5X794WzE",
  "key4": "2jHb79iVwpVki86rhXvjzuRgXh3sk8EwTDFJF9V5WJ5a65R5Qypt9KVnpPLMAxmtmybdCVBBbtxJCFYXBuqcReP6",
  "key5": "3YVLgHt9yZPMBypqsrysmB5fFjCrTWpJYQaWjxkWU34gSB4tkHVfhqiCqht3Ryy1LTwWM8g6SuuNwymbeTmruAA6",
  "key6": "4FUKUDo5gQssk6z1ByZcFQn8VXzp28eBKqPPWUJ1u58EWxi4S5mAVSGreD8TsUYAeGtnPCL3DVCDvs7HN18sUkVy",
  "key7": "4dUR715z9XeB5yzaXzJhixShvrfKc7oj7HfiwdPUs3JwHbfpv46sXCo2z7SY7tSD4Nf8qZZuVU7M3ASGmboYp121",
  "key8": "5nrP6UWk5p7EoEQJVUduH5zjLFNpwZEchP8Vh1YcF2FMSbTWQFZaETKvCUChzkQF1uCKD5duoue1urUgMZga2fQa",
  "key9": "5TYNNuJdTF3qcc5PFipVyWFWgMhkXSKdxt36wGjpHkgZuNM63Cm9Dr7gxCDqXt9xNtGtzSBFmLAXTsZYdRZ4YNqs",
  "key10": "3sYDqgUX97TutMPVUyUDJ8hGRG6tWzKQmt1sFRdGxJq2sEP2P4g8hcHYGpJ6h33bbV15KXzz4R6fma21wv3YbgNu",
  "key11": "436mTNfg5jD9vrMW3WXa5GQQYriiU3dnGVr364NQh1oZRq5HfJ86DBTsAhGXRtLRutj8P1Ab6m9Pzc696mUjQVz2",
  "key12": "3SjAaG8JkFvtrkwT3wN9xSyQarmUtzSGcnYdFieTkxrYMWA638QvejfkDHGvnTg5jip2qmdP4RJpf6wWB2g9U6Hx",
  "key13": "3qM1LFfRoCYKKi7uXAZnfxGDVsH6SDtjtUETDL4i7umvorvUQjPenAmLc1QgwJuUtpTQTjFpNnrLRXzf319w8tyo",
  "key14": "njBNrMar2QyPop6Y8mb7p4HAPnRcagSRkj6GfU3SkRgngnm5Uw1dA5UERXZwkPMt2UUfTHJ7GHWhNZT2iKdaHbQ",
  "key15": "2ZqpJpGm2U5pk4Wn7PMtasdP35EMC91shffhgoLMP4EDrgYo84VpYgknFKGwyjH2s53QJhXGTppEaqzX37TzxuGQ",
  "key16": "49ma9Bf8zSLmzqkv176Myk4XWY6mEEY2HjDWkZDfPH6975WKisCzPeh1ETSLUGXAeKe1cTkiMYvYyHqXP3kXHBNi",
  "key17": "3P7RgEN1TvjdDFq1qTMyDRTJFMzHGKtYQELqsgJ3z858wKVgHAFdZmfdVgxBtngMsLu3cjAPmViQDbxSFnTpbNoF",
  "key18": "5b9RJaHKxcLhdKuMKMcYfukKZDCDL5PNorTydc8QHR9jF5GnP87mDptynfPNn12obELtSRYa4TkGTNbWpS8gRW1a",
  "key19": "2kz8A4Cm1oJGa7dH8dWVLdpLGPCYGYR17ewhCC8AbeMjM78B1juVPPgTb8L4JaQb1Ligx1TyR79w4YESXqHQTDeQ",
  "key20": "4apW5rj8zS2qVFs6abEe9eufkyfDq2CWJiNsVr3D9VXwdZhjCW9VmXThZmhL4TLeFAJVRPeybWwN4ifxuAToux1S",
  "key21": "3Ur7D6Z9kPgo6VEJrgRcSNXZEyBiKLucXbKPzYa2JqVGxbCKkWW7NG8bw2Mz2t3n5Fd5gVEVNpDxye4EJnksBvwH",
  "key22": "FPKgHUAXgD1pWgkB6mZQY4V4AWLWVZWzRjyYA4qEi7BRzyVYexXyQAsQKyCYFRYK1Sv3htBxqhTM5tnvzfMKiiR",
  "key23": "5MbHJhWAjspvhedYjP5uVVaWne9rnixgQ5NAUdg7RsWzB5wrCj4wjKPYjwxaY3HVLP4TeoTwTaJoW8FSyTec3AFP",
  "key24": "9RxeZV9EwL4ASgYKD36QBxRGKeTfQLcmRCuicWxFGmh1iMBZ8G5rVxvwsSjkfwQZAWLzjv7RjJDfQTBGsWs78pS",
  "key25": "3DcC6MV5uHRCsWfdU1BxKA7foiqnY3CTSzV3886LJVPsTRP687cnJuj9Ur3eMwCAGPhyRPJV5N8kbok7JT9xWtzX",
  "key26": "4GawLpGgXytkc7HNnAqezR9obGWqLLyAmYsXanYsGN9rJ29QUXFMz1PvXCEpq4P1btBAFFzhAbtitxaEr55uzGXR",
  "key27": "5pZoDqTbCcy1tR7mRF2FCQ5vpsVZFv6p4Dw4vzBPPdX6cHb77gYXKqcgD88jQq1Fzm8NeiK7g4Zgsck1rhvuH2Dr",
  "key28": "3KRS5paZ2p4afKQwr4uWHsYnw6R9Cyrge1vKAhzRrywP8qx26xNgbgQFXXn6icgYRpBbtwywsHJJcHg6pywhq6dA",
  "key29": "2F7Kp3QeHB9xf3vknBYuTXD5XMJU6we9mESPsUVS3Fi4jg9kGf3JBopgBhCKJtUGaq3JL6ELVwXTyFx9WKcZC5qf",
  "key30": "npLr7PwpBFMPGXLydKvT2xqVajmTD2CT8LCYXige5fMgsK18K5X82y1cmPZL97YsYLzG5XAqe9poagwFZF3QW85",
  "key31": "3z7qvgwumyyKfzVhEAJBBbPPuRe7PTTDatRtUAma8UE8sMpvMa5kneFnKnJ3uQ9B4jyiReqXtAjQPskXEGBwuCz",
  "key32": "63cYbEtrH3MAns97yhdNgv9c5RxYgwyUsX79LeXTBgT1iPSkDgbL2sQq3BGesUBLn5sBiYCupbNHEeSh5CEbpmkf"
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
