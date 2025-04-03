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
    "4nGg1vr2w4DWG3inixcSv1dVn6E41qAf1a6oBhPC932yJUhmkWXE9vK22UDqb15WduGsUi3jRK8vr74SNqCETTUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JcD7PNbQU8GK4RYmykHs98Ss61gTZDxWe7sNhnew6G92xsZkZiUnuN8XX4XKJ1XeGUwx9j26KTUYhmjFTPmw4Lj",
  "key1": "nrsV54fephApLKXg8JmNnfQqGryXCDUjX8FWoidw542iuvoPvTtd4xHGWxrBPLYoApRX5g3ia6uaBPGjhQy5Ynd",
  "key2": "3jndndGhxYVC5pJsBhuHpia4tVYdxhP9YLzm4fjxDW3h1G5mW3qGwRKT8hCnfWbytay5RMu5s2peesCUFWCjkTCb",
  "key3": "m3e8E7sn5U8KVYyksPav2v4a8UmC2Lj5G1Bo6Z1MN3AMYFeQ2dPzgSsekWfbweCQmEggDQME1zPfxxp34e15FNt",
  "key4": "TFmiGZdtJexUXNed4YMMWNWUQQvRXdHv6JbJ68zvPrVz7fvD7eDb8M7xEWLknqMffd2w8kmR72BAcc3mgqvA825",
  "key5": "4Bep1xs7XtutqGBosjjwGzCMF7aaUhu4QdoGEvHFYTrpbMsLFYwH5JfkArXQvcTGcQr3yGkkaWSbjgH5gW7CsirQ",
  "key6": "3a5RNMP6e5v5ShUUeny7y1trT2XnDkRJbmVnXTnE6cGAU9aSUiF3P9fXp5ujuJvoRjzPLNYjF59AhCHUcpBN8shp",
  "key7": "5cx36WAPKhYDGc2X6e916BmUXPqE6XMMCDmG72gCUfz2KKfempX9cdufNbXRuBNXUdADXjizMSTV3UjhuPL4XaXs",
  "key8": "4mpPYU4CugwBrU2zFjVyeWbz8K5yXdzb5TRWsfuuwMYLef1KuqbGg1Sps7aEGT6htNYAVURyoVsFtKSmjyK3jBcn",
  "key9": "2z78AC7yH5YLiDA5Y4zrxCMdD7SsTU7KP3a4AUP2ZxCE49Rwtc46j46CHWv5FdDgXsp8Mt7rwvpANo5DQots8j1j",
  "key10": "agQwik4tJsUvx5twH6cMDYw93DmYooJ3M8ZgMyvuwwPDuKfKVXXvzfMzautm2vz3FiFqVMa5cRqRVpN8PsN1d89",
  "key11": "2R2EcHiontvNHgtSrCqQzTzcVPiv2S9j6c3cYfj3WA3j8vj8Suqz1KpsmtY7qd8S8yHhB15T1MpbBKvKBQ53mBJ5",
  "key12": "picQRpbyriZGtnfm88K5PoyxszyPLCwMKNmKDsAHfQJ2K65n6YayGAes6XgKbeuHN8wgGUszXh2zDigho5cxFGG",
  "key13": "zfWiJyEUcL1nmTSKjAEDFY3ub3FfMTTfS2FRcmw3SkBqt6WRrtD7c5R2XYWLvanZ6PUc7fT76BiETbt5JwGGw9J",
  "key14": "iXWsMR9cb2QR6QfHwfXi2Y3EDeMAT47owg2h71U8GGSqhhyHoahziP9v3xgjRPomExvTQmR8jcXHYxBCT9q5xju",
  "key15": "3yFmNxK3GxQzj7k4Bx3wmYZgZ8466k8gE51JAzPSev6sG6S9HJJLf66yC1nzYBeyFC3puaJ8x5ijofxcsj1H3y8s",
  "key16": "41fJtWTuxFrbmBxKv5WHmRBDWMvFZRcLyarzxNt8JfUxnuCTXs8KZf7Ze96KuoPfTwJnJbCQJh5fh6q5wSj6N5uD",
  "key17": "3waA5jHPJNxqRwAWW1BVKzXL672fu5Av4nRFp3JfdpfPrJx36G27LioWffsa3io1ATSG3ZBMXDYfmeTXEwqK8zqf",
  "key18": "4CsU7qdGitQxoWMt4eLP2cbi8JmPZpMgJKep7sSXyKcHz6S88DebPZVZzz1zRwCYoKNmSki1F2zR9WEBfLCfRmq1",
  "key19": "5M3zPqhur74oGPC5STGenXipKbHGT9y8XKPAN7Vf81ZVnDojTMmYVXesZDmNqifMEiaZVBEGNuHRzvrEgot5zqMA",
  "key20": "3Qmpqg29ZroveiX3NcL9rjJKMsP2u6tWZ7shrbXYaV1ccVFaw8VoJksATbZ5sKpbuv9wB1D5NeenAuBTgu1Jxj3A",
  "key21": "47gW8SKYUgcg547gLRUM5YECFcHeUXr2G5mFfifHZfEs4zp6w1Nnf9oV8NTB7wAyS7wfL8ZExkexn8aYZqsUqttV",
  "key22": "35yAFL6pCT4ZckhZBymM3dYGXyNxyVJEU53kdN4n1c86RnDB7q2MNG8YQXvNvbdvLsHvdEM73iwrHCYN4hsR6svx",
  "key23": "h4xfEzx962PwhnuDabGtM8LyxaUiNxLwRMCbkkEQ5phRuxcKX4sLMvkmGn8NHV1mttX2kUq55q6gSjQgQzAcqPK",
  "key24": "4iRdXRZVnFmKrbEKTcXbpdaYcnpFzt3LwhLVkTf3KqgoaH6Nm1d4aW7fVhgCnqdBEQvv3Z5ThsEXoFQFdYfuH7w1",
  "key25": "RFF1Qoxas5ga45bUfTBeteV1qUc8UTPbkKjMsaRpzL95juSou9S249w5Y9dphc6B3veDM2zfPvwdSaG932zbh3e",
  "key26": "2NsKrJeq9KLJWTHxQbPNw4Bo9r6owfTd4e6UW61X11J2TqxT5xPL2D2ovywQAtipb1VD7urtgii1jrxAQMz8SZ4p",
  "key27": "2rfAoH2WnDQWJaTjaaDzWMFf8P1MCYZDwLyb2BxBG4RsGwcpQzcHVhRXBufscm9XsvaZgx7LfKXgE2xyRxSH2dc1",
  "key28": "4duEqtC28ce7WDpvXGSLKotK2Ai8cEDh3YHZ6LDufeonm8hnvxASV4CyixASNyveqKENDfdy5CAAaDK2TKQ5kqJ8",
  "key29": "2LismvEXcmkaWth7ckn881xL8XKzsesV5kVeCWnQ3gpb13XwmHCTFmJPdjAFpT4nEbJ8BDUbr45hsSQjdhc1CgXA",
  "key30": "2HqpXeGJGjNNqcC6bSARL6LuKVJzFtJ4ccGQ5WYVB4jgfARgSccCNXsuRBKCheoNB2kvbdtJnxQotTHZeA9fd1ne",
  "key31": "4PAsFSfJpvLM3Mz4Bey42tuyu5Gyo6ikY9b4ZSuUgHiYEcALPmQfQKXKNkPtrj2twbrcbv11bLKZc1XEXGC6sNsU",
  "key32": "55nwDTPoawNi33VA8WUXJCpeEnVpnZzhZtHd7RYzYrUai2BVNXCwBbhNhNMV5VV2AFnMMwazMR2dhtbX1xHTR2AS",
  "key33": "52PEN38Vou1cpCBAWZixA3AhcsHhXZaahY52kemA5HCyvfYoGH7VDtjVecvABuY6QZJzFpujtUFTqQu44t8R6CvW",
  "key34": "41LYLCDsUT3UeeJFgtGwY9vFDphGsyKs59bRkKBCnLiT4Z4Rr45PCgpRjm9hTHZWhaUHQbAMKvpALgwM7WRExGpX",
  "key35": "22ntAbVfbbMpG8Zsj5kAtDM1BvStqBgnr2LuGDLQZ7gJrW8ofzHwPmx8mBwtT88hqEnMeJCRja4RrcP5FSc5HniB",
  "key36": "mmzeTdePvYr8P98w6PHMvEm85oYC3a64UWYQMUYmRXP8Rpfgr2N45qeuyFR5qdRQYWuM5T1taTn26xX7buxQdYh",
  "key37": "SH2bftidqRECS8qZpuz7HuuWohAynLAVwwZm9EemLJG8WnKcwJH98xkZQSBkTRkzJmM9xyrKQtDGGTz6uYb3NuT",
  "key38": "54SfwD4k5ge2CHsBj8UX7LVg525rcTBXeno6drn27oofhGwFSkZdS8X3Y49F8bAintGe2mExucFmGYfSCVzGT5qd"
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
