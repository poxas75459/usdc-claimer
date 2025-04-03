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
    "2kM2TUfu9Hm6DreFaj9GJpDzSh2KVorbB9mGGDgcnmsBHrXMoB9nMEQoByBVygyzSQTRqJA2mJQJCyaWpuH3jgkq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aZeKK8wM6wH4ZSJnzW4L6YRhJ1Mtiq2B8aatMsgtV5VDhpyn2U3KSfTUdNmMPsY3CjpMWHnVABLZXpY1wENPYPy",
  "key1": "L5257v5eJ7WrUHhHySD7GYzFBPuwVST2U97AnDP6HNwszNVC4YvGmsayxxxRnA8asH6xQfAMpo3CmRFWp5HwR72",
  "key2": "4JSS7JxXwnXpwGdkbhroexKBcqja7Z6q9VVQXxQL3mExacSoJxKHYhJCAVRamshqZTh5q2ctSUMNJKsmwVhYS95Q",
  "key3": "3mkRUExjm4WHzEqvYCoRZC7m3Lk4XdXuxGAj4sRfQW6DpwzTSvbVWnPvysCKfQcwYjLYj62jdzNXJrKdbRJUMGp1",
  "key4": "5soX1BFYGjevpZpc3KoR2q4fznwtkCkGm5Y6mXBVZWqUweBg4N6eAq9pRz1fA51J71iXxP6vCxFKphiMQWrRCVyC",
  "key5": "5KkPcoaeaeNxpTBPSSVj4hBpeJeDPpCHb89Yi4sQgxgKmr1joe599dytVvbHecr6ML2RvQk47dJwmwj2oqramJ9L",
  "key6": "5qmyZoeJZbnLjVaX4pLZu2HFV3FtUQyXwWR2e2j1ER26mKxdtAnk9pneXyUu32zz9xDwmFnhMp6nBtZY2yq7i68g",
  "key7": "4wZH9s5Wgse9d9DUAWrVHxzmDDkFHwPTcg9HXU7nbemyyP5xsPwcZP9LPPg8aZndcbuM7KCR54EvbhyNYQRYorb3",
  "key8": "5prPyFsQ72P4Ber8WhGGQunXPPrF9o1G45vkCZEEVPxozAwxLpRqgJXS4STtrRohUzqDVSSF3annLU8SiBqGx82N",
  "key9": "5vFzPqGdiVx1VXvvgALongMiSMd5wMabxJLTw1fF3hcenW8yAe5AJTvYS83NGArQ9HBUJmHaBiLiqcZQC4Bxdmh3",
  "key10": "5rC1w6kX6PZ9PZa9XwVChrsMueYmmGcc99MAmuC8eXNy4Ss4JP5tYWRYHNi5DVDrdHYxAcGnoz5CoyHiBGq7psLT",
  "key11": "52fsbpfonLsBJkpo1TznTqjrBqJiWN2jAu1x4pwJwsJxwBLJDBhnnKq9CnkZXFtpVzBPvUtkYz8m1QJqJeVbP33u",
  "key12": "2BcUaCVS5h7WKy4FVAoHjizAM66bNcmwR5FRyLzUkDXydE1kwtXE4ymnKU49xgPPsHZohnimFwnX2HQGw2WtJbGF",
  "key13": "4cgxAGkyDVzgitqWjWn8AkShvXDFZTJJifwiZtKuD3ygRknC21uoLM3dH39zQJxjoAMhNK4NCcgJvnbQhU88ir3b",
  "key14": "47553DUpA1DRKQyQHeuL9ci2Ysqtvj8BWQAfuibNsSrSCYhs7aoUux18gkUTtA8KyojWNjfb2CGn5koadRvoxgLX",
  "key15": "5KpHpoubrySMWeUCmfBNacjeiRYY82DtqMb5hErVc8KRujCdwDZddJRDc95Ho7hc12KnP88FBbGPSXUX5Uneju7J",
  "key16": "57M5UYsp8SK2aE4AybompxLmjEXAuAp7o6DiNg7v75qerYfJ3kx2n73wTkqRfRRqR7CYBUSqTMuu93EDZwXBqSbR",
  "key17": "4MyMsEQPcRPjvV5NTYkXtJNm1XqKz3TfUDXtpYyxNv4CzxCm8JHJ54koY4DVQutKAPNmorwRZiaU3LuWNx7vEWYo",
  "key18": "2uoBXnqf4UGSJPNweakF2GJ5cMafgevyQtgB2NSLrQmut4LzGMDWHaDokbkQcfg8bRXZVvr2cD5DkEuCqfDv4wdG",
  "key19": "2kShEnDSUYfLbFy7WzQKn37Lvo5TavN4jgRrxeAVDWu94PsGJMymu2vG8tLGM2n68HrEqU9VteBd9YKkEbGWKD8x",
  "key20": "2TzdnHCjJDRyXsrT6UQuGCwdgzCN6skv8prgMCZ5eUeUwgs3dTPPrw7FYSK9jWjjdzn6mVrpRzehgQTKWZoX5qiZ",
  "key21": "7kTa83VTvDDyg2T984un8bbvqDU7Fs5VxJanUMVuJbo1BL69wLBwFaHSzpBCdjNV9N4vgoXyj48GN2TY9UUkcd1",
  "key22": "3e3bF9tJgQyJvG9nMmdHPxJbdB9FRc7LdDq84XW29GZRYz6AFihWyEENZSy7ZJTdoGFF8JbWrhQdmjrJmkLvjzcJ",
  "key23": "TJUwbaQ98rd529TdLeTMKwCtWA4NX9uFEdutAeMDUwJD4nrBNZP3e5EuBnKYD93URBCtbJgmR6Gbu9UthDqfRYR",
  "key24": "4r7Juwt6mkr9fGwPTqRSCnbkGR6zDoMWaV8rQozw4mEpXzRzUaB2wPEHBXYut4WJao6ZoQsf3YYanjxvbHHQTYYy",
  "key25": "4e1TQGhRhwrtq6hNovgRFqDsfj1D4NPJajNtBFBAyRCnhUtiPbWbg7b5szMCwGMsnvRwDVTpP22ueGW4LqQPje3Q",
  "key26": "3wYKfq1PnTVHe6XiQs3msJ37CStNHDKUyXnFMvMzYpfHfQQdsfkeebjNTsb4H1JktwV51wPTeHRJZiXsJCBj4XSx",
  "key27": "5G87rjjkgv77U72NFWXhFJUtoXJwU2EFfhMzZb7mUCuRMgfHbdkEsjmBna7P7NLMUjjphZQhHYcTyyuTp7MqUv4r",
  "key28": "3hBJXuEaTdByj5K6cBLpLiyFT5NamDY4vmjfowAJe2LzzbUBGbJaKBMCgJ2hrPC85AN8RfkwjhS4MkLggAPNM9EB",
  "key29": "44Cpm6YjGZN2GAz4fBNPyUsTMPBCUKSyWmR4hY28gWUUVG92xyWJLoX69bC6pc5HDpcX5vfBj4isTnfa4SEhjjZA",
  "key30": "F4pymSJGfyXB6ZP4pUdmaGhuWZz9sn1r9Vgf3qxoGoXbNRPPKP6PF1XjzuMTwNSe4idTahY3h1Y2jUakpf9dmE3",
  "key31": "2gNnVtH2NV4XYt674DxnJz5XD16wvqxJGmVwA2DHWqzVhrgugHjUeGFAD1Xoj8kKMfiJXXGcd24VeoKTdUb5hayF",
  "key32": "1xxBWkjAffSZKuVsyfCKctqA6FrPDD4Z5dLyMtPbNMh3oDqVCpeSuTEojCHuFMr1ctQ2bJLK9gyfTTkqfPkKC2H",
  "key33": "22BTXD44SASfHyvqQoNQBMMtBvj19MNrMR3rDXoKcT6k4n7tbz4x4vixCFYUxDJvQbnjbGt8E432VBiLWzrhj3nH",
  "key34": "3b4kN8i1TLJzvgEWG526mMXb8fAbo9Yaa4bqWtZZVZvPPYV7G2HtxH7PuqdRnQfvJtaBpZX9SkUA8mF27sBaDDDQ",
  "key35": "iEsrteayzx7JjgVJzn3hbBDbD8nvU3LtrPJXUw7kkPfFZyEr4YWNxv2HS5C4fTaSptiR2biV9R3y9F266HkM56B",
  "key36": "5KHf47aSyS9d4YV8ZzEQxTH2hunDJ9MZHmGqwwekYCgHpYQminsfAorbA5zKsCVMrsdoJrEKs2tXXnRKvVhmTsoJ",
  "key37": "5tKRLZ24rf4vXMeuVnMvutkzzNuxh4CjrB2pn7GdG4BmwYRkRz5UpdH6arMZ37fCFRNamenGsAfvRrt6hBfa5xZ6",
  "key38": "4hciYVC1uTcs1NxiuaGQU1c8M6HziYgA9JerCQDB9KrdLJA1j2HVAW1pqCY2FxhuD5BaUu4W2YVDMqhw1XcnT5St"
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
