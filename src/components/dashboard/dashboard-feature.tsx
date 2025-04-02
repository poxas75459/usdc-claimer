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
    "23DL7nQuqDbfkFVy4cLBeXELrcR4hvbN22acbBKrgFEK171PkDsD6z2nDnaScVTaMiLz7YDCqg9AVDNPCkiQNeHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PsbGPitrEamYEbYfQ6zJSPQzktguc7w4sc8b3YYr4dYQ334LYNF3SnqHvLrAf4y9ADXdxNpzWRQ4c3bzFUiVYap",
  "key1": "7Kyo1ab5XrNTR4Cj495KqvJLDXHoWhNtLA6uGr2jDVSUaUrBeyrqk85YsPeuV66hfwCnGQoPzNmVrSEmgC6xfFV",
  "key2": "2KHZahsfBmvHMTgRhtu6vHaQ7XtwszvYyLX8Hmu8CkBwpLyad2hPK3x9jJ9xkL6osFRt6MbjmyQj35txh4oVVQki",
  "key3": "3PkMWbmsdzFD2yFhoP4MmMffYTVhCC2yc6LfrnwKMAZm8TKmYdXo8bGYWBT79vQaiUuhACvxx5pyRFKbp85W9Y7t",
  "key4": "2SAmp6Z2e323KAtL6UtMzpEzWaGBnhZjtUSt2DUV5AY4R45KHs2edKFjorozrgGACDxZMDd8TAiHkeN7KisN8cyh",
  "key5": "4A5nNHiFkgoKToArbu9oimczC7jo58wGigybN1NUvAXSUJL8TjPnqFSvqqvG8ASryGiExxxZAjAq33tikeQ5xSXV",
  "key6": "3CSGEWcHhern6mQmSjhr3RpeqYjtwZnc59sok7ojjTnEYpNxzQJE1a5FPpYf5r2FCM6ANfe1GP9JXfWAGgg7MRGs",
  "key7": "44CEVAzC8DZgLFxMU26KxjAwAAgffwXeu24xm6j2YL1GejhWFssR9mB8wjkCmQgCa2gqxnNLE4KcYVey2tfWatK7",
  "key8": "4mV7tVhkoqtfTtinmpAqYGGv3ZbKx8oEMiWPixitURFqvWbk41AYCdaadjchRrsGw6gxTYQPVXjF1bmeVzNsih42",
  "key9": "79GFZQTSMFPUh8s1VUVFY35sQUrdrL6gYT9aKaBovqcnA7A4pC5ETjsDc4ZvvxyEv2kCVpooY8pKLfv9rBAPgig",
  "key10": "Xqj2ufdrJSnvGGWsXz1ykxXzqcFZTp9psKmaWNS9mZEEfSrKHtcFD95t1Z9iFXASDKsjDui3vWGMWhc29QwBfnd",
  "key11": "2pGqBmGqgUxZDLyp8xe6WsoTzjVTRMtkYmhvnSCY3x2aoUtoqtp3cuHmvUha17QVDKtVW6VLxTUbLMxYTz73z2Go",
  "key12": "2NrxU8xCRgrAxxr57WWvmvqEY8zz5wWfJNSSenvhNxY86nTNsVgvfvsZTYLCRtHZjaQ1piCuqYyiWBqMuNvWmbQG",
  "key13": "4w2tSCKTxRNvWrt2AGV6gmp9LeZu1n5xasdU7i9uh5QRKNNbA4nE6uxQSK39VsPN956hTqTz5TKkijRfw9FAdiTv",
  "key14": "2mW9T3aH1977ZQfgL9znWsAJ6XGH9vAV87sVpzYxQ6W9T1mZQdqx8UehYM5xUYKESoq8oaAZniYrCGdJQfkiV23i",
  "key15": "3fomQvyftJ2m1JAyYkm2DkpTyybWW6wxvgraX8AsoiCb1TH2ApKPuSEcfqPauVUYGmGyyLcEszKpscYR6udmqVZL",
  "key16": "3MuHFGRhm79XfmbwHSxPPzKQ87wPuSn3oDh6PMbGJy73Q1rCV8R9EV4tP6WFuZCbHPE5Ac67v8c5pVfSnoSsqr9e",
  "key17": "3wfKXA4M9CoT2My2Ur9VF82ZncUuGuJtAyYptQX3Nw1Qwa2cVg46kEj9kD81nndY6QM8Lztu7qcDfDkQSqaBonfY",
  "key18": "5bx98qRQtEakmUvL4ZMLm2pZVGjTmbPV6o9Lf68ygUxw5FgDGjGmBKf2mEzU8kyDVTSWScW6BHxKwdcTcKF3UWdh",
  "key19": "5zBN55AXUeeHcpuEimpaMKLG1pUBYh31e1SMBh8QnrnEFX9tVxbcAFmUPEvXD2nS3HDDRbBTJtQS9xM2GqxbMmq",
  "key20": "23UzuuR1ndFyRQ9Ts5NrEQHd95yUMqJbSZKvdcxwDaYWVmgaFM7KuD17TXhcNBH4CjdWt3r8Fsnrc9yjJyy5V3j2",
  "key21": "3a2nk5s2jF4zAGmsW4hBvs6hVBCft8chscpToGpQCfzHE4LvndwcTt9oepbY8EBuUKvni3r3EJfVo3HXRZmhhkVE",
  "key22": "3h7vGdTrxiWViy2c4DzoXU8v3fuEt8TkR4PzheaydwhWaFVeUcdsJ7QzKn7detTPNkdaPnZbCkaATrEYvRhcfELg",
  "key23": "23LNhCZaDmQgDZsLRLgYfPDdym9hkoPepjoU4YLvB1hxMze216bKf6NcaupEWMSUQ3NWP7mTQHHNMLJpMTSBHdLy",
  "key24": "3YHmpqSVnDoCXKVRcyE4fu7epjq9TfiG2pdzUHmDA6Y4YJXjb2ZM5NV4jGu1dv6RBAsv4xCiHkAoXqJw993YbJTz",
  "key25": "4k2XSW2K2F2suDWfgxkY8DnFX35XiW9iuDcEWPx9qWNA2SQZvdDf4dttU2vyTyrFVfBaELsgX4i8EQUJzcZFnq37",
  "key26": "4MM1akbhQzvdt6Fcsz484ggpmB67tfbbxS2hj4k6VNXHjtnm6DCgaQwatA6Wvv7wj7NANV6L6eNythWbbg9AvnY9",
  "key27": "5YR29LPMb7FX3mm6qpAibo8zKGLkbso7MZqypdAAH6DuCzP5YtJS3bdW7EDo5M3GAET5jLPRuwMm6hntv8LrpbxX",
  "key28": "4vrzLvjcVc4arMLxD6BHrVe7KFfHESx5AkoAyoPnk2HyScCjTtUFjnjkwT4SszMFJyZP9PjHhUdH9ghZvQAVCK3c",
  "key29": "4XGSi5jRfiMnPfbNB5NpbEF8SGQr1tNWAJzp8fhU7aa31CeEQJZSaPEueXT76UJLTp7a6gPiucWdR4My2AMHak4L",
  "key30": "2WrzuEKuLuGUpdXbxb5EaVTqmaxBLWx8McDoCbMXZjEgBbs1dKM1BeYmrr8NwPppQSFUQjSHPYreN3SyupXJJenk",
  "key31": "267zHnpGgP88jmXE6Yx91KfuALxDGYoPFpngBffayDDG7nbwq6WifVr5Zy7kZdwShdok8tmNHQZcPPsLMzaWs6Ds",
  "key32": "s7Sar9LSNVgTeZu9zcdsA4B78ySzaZSNT2abZF4xuEftz3tQJ6hMRuUGWHNBoqtUzpNnVTgmPfm3pczTtERq6m4",
  "key33": "2Gjf72Rfp5N17nD6m25ZCpcEsBA2EyPHx2Vz1sJdpSf4Crrmosu8YFpGicwaeTD8yTVh74MZFDkeZuzVBUvTdfRM"
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
