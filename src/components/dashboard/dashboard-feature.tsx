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
    "4uaX2EiwtKVE7UH3mFuuDRbEZfs7LHPeuFou31m8UsvDeRkbHzzzh2k3ZVmhd5JNiTLHpsJjBWNT5nRWejxXZbSs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31yQY9cxJZ8kNgQW4bvfrQpYEzWzLANfk611kjB34parXExMxfh1Ad2rMUfw637NSED94UW7Zj8kcBLdfY5XFCza",
  "key1": "oDoZTbaBgMjJq2v4S47RgXbZ25V75dmxnBHqxtKF5QdAMrXvp5FqK3pFKtXNihPgxnXkxD5kJ57X3eBsYVbWZLU",
  "key2": "5BvbmHGumYAmf26C68AJBqPNgKv9CSowAZYuv8LENsu5yJs4Ya72JbTkzh3RiRfL7TMoZNfLVacLuvUdQy3eDqUT",
  "key3": "3ucw3swwPAWBiwhiAHwDiDoy8tcwCQuiRL4cbsYT4u6k4eqtV3wCqvFsVDU8K5c1pYHvd375JCE2YUkNqTgEUUH2",
  "key4": "55nChN6BjZqXCQmVMS15o8yUFHvFs96wBuMtATQpudLppskqpFA8u3WeRPRdwu9eJmZzcxRKkzBEsbNJdFWZu3eN",
  "key5": "4D3fB8WfEuDen8E9uHz3p7TNzg1WfL2iLsDtsjRdwmcF43EYXMjshiPSBoq8z6qhyeaADWSm5FfeRu4ibBME4Pgz",
  "key6": "4LtAv8gAc19yyoQZPTUXyojVJjA6MDXSbPVo5FT12VwHgs7R5ntcjpZmW6YCHqR4ChARvLnZEDNy9M8KhuxnYkU",
  "key7": "3DvHduti5DSWC72s619AvzYoVZs4hPNvgEg8CdLM1KrY35EMvX4mYesLX83CCiuXQ9nMmRSoAmhHk62Dey2mYqhV",
  "key8": "566BmFVd8h2nB9UncimEPT1BCb9gHEZHwJeR5jujGcyH5JBm7himejYccXcATY1da18Y2UQLEt7Eto9nzcNZ6TC4",
  "key9": "4FL9EMwhwTuUGkXacg2YKm6jrXLT64tTX5v7PzYNTTjeXwYsKWgLNJjAAwtF7y2fzwQNRFifEFAwy52J3Eb75GKb",
  "key10": "iyYLUYEoBQRiT3ziUwFR6x6j7KtJNaDqideJU5KAQGwQQsFDLVFirAVV7UU7AUUMM42T61AgTixGTh8z5p2YHAe",
  "key11": "2prqtGYeEbLSQJDq46hTj8C6vvUGKvjjMthtWNE5mw3HwiWUJiDAGQCMq8JUshZmbmBhSY6kR5tQqVkeC8t9EDKE",
  "key12": "3AqsGpWJeQPYAC9KhKUXNPz8Rz8whLBBwEvMYDqBCXTLo3QCcSm3B4X6XaNHXV2F273uD7vRFNsrisJaC1F35msL",
  "key13": "sXCSTYNE7EyrzU2v4AxoDY9P9rBfiCpctLeKw8SobzqkZrfgdvJDqGEwBTGMP5ejBzZciRnM1c16AmPkLC6uoih",
  "key14": "4GRTFHX32jFcNiKLgeY7noaaKwxez2gwA22WsJPjYh4jQUa1aoveHw9Nyf2WDqVNjLxLpacgbYbHPwkeBgChWac9",
  "key15": "5vLwCtyrianMPNZEWQfYs5wM2YueRoq1ons6DG14PficrL17UEEutNM23Hks9uJ7bcFsSjkdrbRvChmrWp7A4r5D",
  "key16": "4iXbmPs5hKnscpCyDpBpoAAHycK1AFia5QupyhqPmbbEiqJCcH2F7ZYe8Ub3LubrU6GVS2xUxozc9nMNzLc4Qw1W",
  "key17": "5WVvb3HPmC7DPydy4UCfKLtJhACvvDH78yrJA6YZ5tp6gbHouM9rJPYvqxWX4RQYns3W7hLfB86UtBXmKp1gEDvT",
  "key18": "2UFyqVw1dPTCXQb1wNuW36SzRreog7iCtgD9YQ8HJpLQVPup8tzw3d6BBvspnKSaesWiGMc8giFDvBf1KBe7gPNb",
  "key19": "2baTBEZdf6V1QQtA69DM7xF37NeS2N2snY6N4jeVn63Q61zps8AnRih48PeiHWm73oo5o9mEH3uGg5Lben3cLzdi",
  "key20": "4QXdq2vKy2HyNUE3MzH9CQVJByj1z1XarFB3SEH8yx88heZJfQAZMnkB4P3AQAwATgiv1M5wgNE9tatZ1tnmmfab",
  "key21": "5symQ14pndMGuG7DVPapggR76BGpXQnRJjFz5CXZjXLdCaRaCfciotV7ZGQvE7DEZ4YME1TM9nSGgvsNkBEuUfco",
  "key22": "2r5MxzS75JjRP6SJxAiHTkKvs1tWVi52znm5kvLz2Bw57bLG1SFtcQohQzs9WdAjwqTuMEHVumxB65m1gQUn1d39",
  "key23": "5zQAHPBXySNJX15BVxRYPK7tJcNaohHM2hVcXDq672pdHCFV8emBXZeQ74EvJ1mSqtnRxMwKA3UhcMYfVLE52VMU",
  "key24": "51PLJF7UxthmurGyGe12GF9mcNmmhjrUzuZ5F5dWFLL5NnWd8xqYBpu63pmSJbJWTcdtUCEL2vYn4rVQVpBHHHQu",
  "key25": "4c6U6TH7SZRzPGuwuGzsP7TkznLdQoMWEQEAvTaX2WGC6hoy2QKoVZXadNEwkcGxbzKPqtdFujsRdC5c7RW72ysX",
  "key26": "5jHFdMMPryL4RChtn85Sy9WNa3Q9BFoeL5qb7NWK9KZJcApKBsqg5i9knjrmAGNj5FZCc7k8Jw9PU1NL7sMtv9My",
  "key27": "BwHEjdGFfQNU5Gykv91YGwM8LWbFUA24z6EJZmvWAffqDhPkqCpjdC1M6r2QkVAiqHbynvW1w2mro6ra8vRzJUV",
  "key28": "4HkwayXTF72138gFE8dcAWwy9dzVRJxeTGdnxdq9Gfo1kcjiZkV1KMgCkPN8BrfsQCxzmPgyj7gcS1oPyQgtXgxU",
  "key29": "3f2WRz55KE23Xdaksup4Z8kLBEicu7usCCQvTZjaP4R3EdrL21WnSKe2TpTR6gPEg684coseKdBTBKwF75q47eEa"
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
