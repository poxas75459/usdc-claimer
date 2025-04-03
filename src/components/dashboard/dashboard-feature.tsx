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
    "XGceSryG8XLVSDSjy4416C7gL25CSa22PStHohX4gZ4fEDrMVpiaqPg1jvexZyWjcrxxasqz7kXbxQzqPFFzYKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dbJtK1ZYVMUtrMNKfpbuHTrHFADQLSZJZcTCDjpf9crq4zBq2F8sUbYX6jBJK3VoPaAGrKutFv7vX2cRTxvcz5q",
  "key1": "2m85cyA8W2KuEeHUkCpSpbBSozULyLNTAvpi9YSkC5Kn4M3bdBTZqJvh1WyeW7FFU3hTbTm7mwgHmmHJMajtdtyF",
  "key2": "ompn9WnAE6qwfM49CF9KuW3h5WUwAyBYCKQ1B9k4gq37StPFSGHmuD3ViUQ9iMJir2TfxsuCjfyFsGrZzjf8ZS1",
  "key3": "3P7zYxiKugqydJkPhZD7SWtJhNWUJiN1eS48NZLKrxSzRUmkUpMqGsPhouind6bmdJJys3CLsBkTgLrixs3ehuS4",
  "key4": "4xv1EQHkgSVMkKEZYg7X36TLihNaH3ux7rJgvXJjskXiTR5zjbEuhCG8UkLSUCwiocCnGyYEdeSjkL74AJuqHMt7",
  "key5": "2rW1pJmg7gWJxt11Zz8WB9khZfotUGzGGReixJAhcM28BEqrKARQhyLj4WS1vvxAL4r6fTMVHPdiLYu71taDBuVH",
  "key6": "YTj3m6fYHqGUedfgtVg9JGT4vRDgGR6m7kLrrkbposeEGWYGEJg2c7UtBMf1gF6tWqv96JvvuTjVc4yZXRJXHXM",
  "key7": "3e852KzvEUKweXiLkDDzbnozvChZ287b5ibQatqQUkUT7y9Quxms9taMDuW91sF7xH9sT6XLw4q38hoxdyRWuqSY",
  "key8": "Cdu6o1tPKp61xCo8pNH9X6S9it5hzyxEb7qN575Mqu6ekLjkVR7Z4DgHto5HD6K5TdXinL6kU7FyeM21RvvQdRo",
  "key9": "3s7mBzB7f5mD13Asyd69hB6fAvQ5HYEgM6bQ9QKGqmnRhHoTWFUQQgr8Xx7vDscPq2tohPmnnLJg5XHZobTwvsV9",
  "key10": "bBBZj9dgwuXkB8BCxcus1dZp7W9hwCcTSpAgKicGFuGMc7uBuZ9hW97UGZjkcZk6rDAZ1xvmyEsVBhjn6nkPWfQ",
  "key11": "5dZAuaofjr8JjhAWXVbvfKRkEBop5yBRi7VXC6Bqb5nNXBsjQhMLGv7p3voSE3N1t1FkWYLYVQHxMB51xq3DQT67",
  "key12": "26E5Xr7WdY23mn86XFGzsat34qVRmUeJa3sMVaLGGZfcxzvLU7GmStwb522iEGQBfTrGK6Co7ZE6S62KDiD8pdrP",
  "key13": "4EMpybHD3hfufqxCuK9kEP6nr6m594ZURNk71Dd32M6TwnFMcLKXBCxdbxgbqUmhq1oic1naBfHUjpsVA7hNGtQp",
  "key14": "449cNhj7vJtZHpyePng41ojF17b21QxbRa1SyGk2td7CnsBxFEpTiyG4XnNJvJCakhdm68w8KvLaJccJqmgQ9jXE",
  "key15": "RC4iJaWnMhywzU6SZUQL3iyLqbDVjPNU4eticcTq3mPJ5vi5rTjjUDgtLxaop4h2L7cqSATFneKCZXwUtBQnUU9",
  "key16": "5jizFZvMG1yXKLHizUPQ9gJuugZ7RXBScjE4MHLaDevD4Ea3JnvGkWoTaCqqk6vMTQYgqmYKTgfarTR8D54fiZ9f",
  "key17": "5YJsCa2Vynw2Mhnjw2LA22bPbUHTKVruNJU1WgUShRJjU6wUK34NTzmx6DxAQY6oZ9DD1dit8kxFPHB6VDuq5QET",
  "key18": "4PEiNHwmyqHUzCHFkMUoycqsTnnRA2x3kiB3i7ExQBKoaYhAxoXgbrvPnhBCaVRwngZ9LLouxRU8i5xpHqr833nn",
  "key19": "3Hwn2piLPHzAM6LaRiqzA47Do2yGx9LoixhMpavvMHyVzehqgTZKJexzmGn7FAgQEmb4G3GB5guP59UJ859wzVpt",
  "key20": "5LXFftDsMpGs3TgvAo2PybSJEgA6w1BmuSUGeX91YCCvH9k8ZffUStQ9G5L9hMTarwyg1HadHXQFN1KZR33ooFi2",
  "key21": "5w1hVJccq9Qfmy88ZTQXeXgNUbH9hrdFS4JaY9knMn9pLgehLix93DYraiLtuuFzNqu73LDyhfefRNWLs51ViMsa",
  "key22": "5Ewv1eptPdd6DNuLRs8qqkVyn6Ziowpd6SPU4GjSbSHWHZXvCwXK7r4xhVihw9rBrgBkakYa1S2Z8KZS9SxF7iYk",
  "key23": "S3caiQzZK55Km8XAoaXsUeaGabxAXiuaFv6EMmZazL9tzAZNjAtxHtztrZTJQot1EAdG49fXjWgB8PTnqvEHPWt",
  "key24": "4s2RYZC3AdBRAtnuPrWJtUSJGie3uvMZyVAmmvVuuhdjM5ua712r9mkXsAdpMc41XHvpPUvMGBwb1DaHaYuvk6Sa",
  "key25": "38jEfJz6q4D6ywb5MqRaHM5t8baAY6qRfNugtZssre4fa6s1EQdvnfH2j9PjMckw5o5nC7iR8bTxEQuRwKByXW58",
  "key26": "4kr5uX1LeZ6hEfeAwmdX7ozyENyuYgDbCfCTMdrYiYrmphtqKzEdAJUET3eFA6zMz316amEQy5pzvjYV5qhG1RsC",
  "key27": "yBNh5T9mJwEX9e9WkbkeS1eTVgWuXBnAhjebg9qM8Y8ybvGt5tLyqpNkQD3yc3GZoKVwcdr6sFZeF2dWjg4AuzX",
  "key28": "56E8TpCNoAqF716LfXwp4vmJrppEosUtqcDXsxDPi46eZm26GysD8JjFgDd8WQebCw14azUvfY4TjUYskTUVpnkw",
  "key29": "485Gc8DwPa8Uo9HzhyEh1VTrcHj7XzmmbmCciH3YQkr3A3RtQ52zPmVnkxzvv4aR919umv29kj425fZqV3Jmsk3V",
  "key30": "ECbvLFcaopqpqnc98Ti1bPb6FpWMU4DnW7RRrBTVv3H4eriTgmBuYzena1RTYaoupnBQV3CAoEqhVLtSPquhky4",
  "key31": "BPQidSstLMxETXK1nMib13aN4L1uBy1cpAQDNM35C6BSbL9YrzZ65JpgxEHeghTSiak9M7FjGB14XS2HvzK3bEe",
  "key32": "4t9K44m8X52AjdzD2o1qkY5PE9iXLaatQ4gBqNofzZiHMWZryAFp26nARhNxkDNA9fQgZUhE8kHuxx3ipQ8bi95Y",
  "key33": "4CBopgmixouFUYYiVuHrsq2JGGjgZ8Vs6uwdZPCLYXrduNikMm7mStcC1VmVUYdFK5VTE54Y2S5hcJDMaB1PYF8e",
  "key34": "4f4XgzKQV65wyygLsVA16MJTS9CtS8sdpytv5QhyB9Syrsi3FQbXhsjJpGxntg19EBmdao4Jn1igN7ACFHaLGJM2",
  "key35": "67j2ZTespvPJbhc4DsKYgV9LhpG5RWBu9TDy3XZrcUjozaTocNc7CFhRU8pgd7vqAxFPb2uJodaT2gpVnZp7FLZT",
  "key36": "2veRpQPWhFjCQwmQbgN9YSFAio8VLB1Ky1B4CWVj2gEWSEhiRSuLCcLBYzGVRipGgjSuMGGDbr2at9LgCNi3zcs7",
  "key37": "393HrN8vidQcVjyCMsiTsyLZm4ZhJirpAPyj5pRgZp8pF6dvqDSPt911YqxmxR6Rfc96aFkD3GSPjwsWBSQBw4Dv",
  "key38": "SD94zsYponW7EFCsDF336sDQrvYHv2RvyAS4L2VB5uPt8UQ6o5Q8MKmzrrgJ4Yurm2Va7FhWyWJWymG8VmqWDtK"
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
