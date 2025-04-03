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
    "5gtYD9VsvpCQMZK8gEHopJkmHUMsd7KvnaychvWRyVjqZhaiuMhWax5yKibjzTNTgsf4bQr79xxK6QQ2tWJBvDrZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22EDiF4Gr9bqHyY8vk22UzJNtHM2Bm2BgDFduQNAU1NKq5it2TGifA3aZ3T1dtb3rPbGr1iMcWZGVjUWoyo8jKAc",
  "key1": "66taSnhMdL4m8yaAvjQUcLP47Q8T3MJY6aDUnye5EAmZXg7MYR3AXfEBDYSQC8Y6F4bDkqr2hteJcuY6YZgUz8Br",
  "key2": "2GFb4vTyyN6kk8WdR5U6nF4dSvA3DpidNmPVGPV5Ur6aUR3RSheEK4TF6hdNe8QpmqRgJKnAAZAwcxJnWqwi9MxL",
  "key3": "57Ndz5m7FGXQmG1zendbyg8sxCNGcESdGL9A2b64B3ijVhF9x5AD4hdGh3RzkUWw66x9AQZcZohk9mqqCfz1KVd3",
  "key4": "59o7cvtkHoN89dXTL87zYyxdNeNnGoE5Ws9MwZK6o432nAbnPcgCgs9nvciD1WsyP5CBucjHqrUxekSY5fDPmXE7",
  "key5": "5mqEmN8k3rC4AqtumhYrk9wRSME1C5cSnDV3fBXf7LN8bE2ktwgG3yUAaZTT2vZge8ArM9cE7Y4ebHYC9mykNeX1",
  "key6": "LQaCpg8iPxp7YiqRSTjTjVkBtTAQn3vWfo7yRNfqyMM6zKS8XPiFXpRKT7hmAWTvK6Lmv93NkCyvPq8uYANVXxC",
  "key7": "5UpKs3LgfRcEoiJ6xZQJBoGdCHHbBJtWLqCSBap6zD9EikZv7v7faJZ6hMAXF3yigHSCc4NmRRpCbZWypqiDHJU",
  "key8": "4bZ5TgbRGqCxJZe25cusHdcQ4iNE6QA3sCmkcfNun8kpxfuiZsL9EEYgUQqAfQbMDugKPAMBBLrbxwKdUFfzimjs",
  "key9": "5axMXjqwfpqP1qLoohbg68p7rmA7N289KCzAF2kSypWcY5sKu6CviwHSvhuYGAZFtmvFCGs6qfTzLwc6PTX78YUq",
  "key10": "4n6TDcgrXSQPxaKaCthj5f4EnW8GMBhVKDAg7Mk9KHyRYHPBJDFj6xADqrjK3w7NTe4GgALHA9HMKPcA1596c4fL",
  "key11": "55zJrhYNvfDHZKDm9KxBWwLzhfkLPdMvrHFWqmJCs1S8yvQTPiFGKMVS1JRsd9ETwF7qzbPBwNTM3E4TCnBuCK4N",
  "key12": "4MrULto3T1pxXKFTVKjA6Vbj13GcaH5zXEBzHpy2yAwWYbtr3PdJway2nbHNTi7VZr5ydboQ2txEMTNtgZcrKSen",
  "key13": "NtfaBomEZf2iLrwqhP34gTSgBxms4vnK7pK6RYtWFL42bS5PHs35y7M2RWeRvjNZd1B6SrTqvcqaUNAGihpoLqb",
  "key14": "f5GMXG8aiwkZhqPRJmNQJV99qQp7ynG1hKfyarTXz2pBNnuNzn5iZbCiRS25RnfRY47Yv2vCTzK9wBKgtj88oPt",
  "key15": "3F47jwcqqZMCmyCBQZU6ndj7TMjWCtusGKgucP7gVa6XRthUfYfSHtGrc52nFf85QE6zX5soFJqxVf6emJM933xs",
  "key16": "2CgRwZShyKT3txezq7dWUn2Nr28AgER3nB9tuSGgtsNPGZeZinKPSGcMZLwRkLT7i3gbQS31HRKm9L3EqdauTLfa",
  "key17": "i4nDz7GGTAy87KTwjYg9fibCnQ36fTBiav3RHvCtR7ZcN6Vg785wMQypMKDNsk2iqYmBnNAsDGhbTauUE2oVTFn",
  "key18": "2Xub1PZnaLQXoxbHLASqZYbRkKi8ja5QhGu98dGm8gRXJbNcuzo2EJLiVrMiWgngUeyBrnZfvtd2tWpkWWpzow15",
  "key19": "5cdAuALkcBMBm7HKbK3gBfvVmYAV4p8eo6rdVfczh37UEEsz8RWbN2jLLfASB55uzRdk1ihC8d1Xehx2SukkBmEB",
  "key20": "7VJfYMLqS8j7V8MbJE749My1Hj5K7XgvQGnaUerhvBpX2LjJVfFZhVhkkXzU62ojHbfPmfMvsYfby8nm4QHB8YG",
  "key21": "3TVfnDBjWerRRmYM552WQsyfciVWECR46iZT8pxfcQk4BqeHUKH4LStw7ZbNSiNoVoxZBqfFhVazFWnt5EHrbr38",
  "key22": "3xu9Vwnjd4MGwQy6o9bZfWdxxzBeug5xGWDvX3j1xGh8Q4kmDGxMpVTrhy3caRciJHAzFzBygp9x1Sp2Rr91g8kY",
  "key23": "5RHkUvPTCHN4mfLCvHL8PiHzNz4bKT8CazcW9QSDfBuPpYRC6sH4DcY1yfUNo3t3Ly1Ypv4CWGmwnenBmBuJsab8",
  "key24": "5VcEFvF8eEw3xnYQoHzZaG27o7sT89rpHwH6MsyqMAB8WKTPqQ1ZGxqLWjPWysKbodinmzSpbuqUVT52kjf6RAhm",
  "key25": "a3Xa2sMZC1fEW4VB9RrgBYb3JXPooK4pjDUjBYib6zgUuwGqbsXnjx3sLHEUvwQ9gBjD8zU3PYTttzVjkNL2XGj",
  "key26": "5KfbZBY7R3L8svRmZUMgYoo15BRGr1d317wRNyU7tZF5JXVghmUFz4uicydGrAo4Kpt5YpmMpdQsp3geTG3xJ7JS",
  "key27": "4wAVQfrxvKzaVxSLgnx5GrVbbryfo39rcEJ3gH2HTZrZdawcKVQWh9ChB7vZTRuRAwUPizj6fNQiLnpotwQxGN2a",
  "key28": "5xZKiK7DPU3DW1fR2XoHhnuHW8N53s5rmmYkVUCc8apjS4h3fKA9qdviBhmYpkkpNG1mZ7ytKU1ug9X16kRzuNQE",
  "key29": "2L8A7AaYZb5SDrV1i3azUKvdPceLz5yGkmAgNGnMqxXhMhp4yy3n36HkVbUR1t7sbJg6u6RoGzBj2YEF6kDV9jUm",
  "key30": "3TGnwa7DffX9wN93xtW9iaLvce9WQy4Pv4jLFrA8eE8xCgWLPxzRaNUPXu1XyrBcVXf3TVYhGvNUTGEdaHMJEFRQ",
  "key31": "3eKLLU8ntURyzs1wQUqqxCvBSLCQ9PmykUysqekmj69NDw6PikbUyT7yqkFLYJHvzHCzTeRiMPMC9Gvi2NTU26Zd",
  "key32": "4RREfboKgVgwqqKLfyF5jm8A5wGeY9DersTm34VpN2x7uQ9TqSsbkhiKRMZXzK3M17Uu9PEttrezGECDPFoUS8jk",
  "key33": "24pjVhwej5d6jqCmWFcpUC5YivmVuQHYTxdJrfr8NLnaRakTctfSunfaLcEuZ46DHzX7M8fXgqe7wCtyg9jGdP6s",
  "key34": "4Aw9EMHY1AYBW9njtExNGrsoF9tovRqx9GhTkz73oYLjA9j3KBSt8HTa59q9RtFgLs2f6otjT7ZXXp99A5pp6eJw",
  "key35": "2WEwUuBwcAAtzGELAdwPXDe6xRtmhAM13SMt53Xyj17kYg4NrgGjne2aBDYtaknBb2ienbvxc7UKYbScnSGedanK",
  "key36": "ZYdtSyUX7eZ3ZC86c9DaZ6eQNeXSF9xAicHxPXNrR4RfHSop1eDyLT3Y31XK8oZeJb2dnEaWpbd731Bt9FANt36",
  "key37": "4QJLc9gGkkTrAAetzWY2v1521frYMTHYiJriwbJy2W36r54CDqtzLG2RuoB5itkXkZfJrcENTqcAXHKijkjgjPUb",
  "key38": "5czqL5nfUNGTPpU8GUuo9KaFU4D5JVjdJt3Kcy8Xbn4hZChUG29DyqnJvfutnw41kdSfqe7jsYYHsuGbeTjvi4uK",
  "key39": "3F6WTxiJJmTiBpFJB3hhFPHLg4gzZf1jyvJUz9tUqwrpXU2edi3Qz2SsYz1uhpHCuWNsfqTVXbK67GhJzcgvuFjz",
  "key40": "4KcsDt5xqkGXJt825rDZ4JPteu913bcV6PybMX8FFBsEfoiSmxfao7YkFG6HxeNTFBAvaew7WozUA5tvjKNmSnmC",
  "key41": "3DeVFMHZtWBGjj1kV1wGns5rUQSQvrmxeJevd58Hw69yNXSq92VjhdTdUB995Rwq4VZ6NFNzeQzPQG6tDq1ib4Cf",
  "key42": "2KZg6jZYYKH1bSzXQZCVSvt5LFNRscFsqnaL6ombZ1JnePia7WjJcMhXgZtgWd7hkN1HuJS4wZ5N98eWdqm7ewZo",
  "key43": "hf3p4idK3XJhh6Xzi6vEu5JYDgBMhDZQ7GDSXsk6s5F6qekzuw3P5KTRS4rFj5WD4tFiWh7GLjMUoAsU5mceT8h",
  "key44": "3jkmonZHGeVJzPDHP4rcwtRX6XU5LL5goJpwjyGHJ8NrfCZnMFpjsa6R3JTm7u13ZpkUanjY9QVYKPtCq3nuCfWF"
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
