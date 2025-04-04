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
    "2V8uEN16YhL8yg4uWgGu4mXz1U6kn6TPdXuBeFsTYbvnt58LE9zVdVcPRwgFAxN5ctGLYrtcJTkTCSQBcXcCMPDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C9nEmoM5eRFjk3J9iEF4r5iC2SDNVyL7hvQio5FWEz5VnNfriTnxcXNrQqMqzuBvnkXcqLTme51sNQg5vnzT63A",
  "key1": "2aQxsRtuBc9PLFnVbxvJFxPvm3BJ4Bp9afy91r72VjV4iqWEXx53RgossVJswp7oPYYFvBEUqod7PVYGT412j3nM",
  "key2": "2yxryYmVGCEZMsr9brXVL6vM2zJ6n7dXk3gXXtbEkTMvcYwy4xBYvYyYD7cuqVzLV5LxE1KzMwaontrfFWZmsu6r",
  "key3": "52TgjBhTG7ZvPbav5UNCNjf9RahS5e2TdMA7js9Gncuz76xoW6ir6Q2qjADVuLafJVmrkDAPHAcSAti2uTdbwram",
  "key4": "3Si1ZHtphZkyQXwSqAbHAX8KTm4GV8HNCU2ytz9mdFW9vB3XtfsFpQEQB3x9wcTKWJrFk8KnqqVEDNMUqiBzfEko",
  "key5": "2ege6ygrv5KhW45HMzUdjkT8nzQoNQT1MwBo94SD18hKZcsxv6bmPip7uzjqbicbiQ57z7yvKbvtiVmqi2nLHNCs",
  "key6": "3pjXoKvFu7ytVhi45EkYmWoCQrpUX7eF276ofgnx6aekg9LFTvG9bYEByQmdADc69g1ve73g153WemkxYakH4uB3",
  "key7": "b3PPWV6ZRpqBoQZAasGMzmoCCsnJuRwSswNjx2skiGm3sAYbwXPsXgN7S7PpKSd31bqorwiamwtnhub3LFpnB15",
  "key8": "35C45HiDa3x3m5kMTopRxQj3VF3GyBy4YXPwMZsWGrVb2a79kQzUT9HheGoF7fS1ZnLeS41Pi4WCh5gztY3SaGmp",
  "key9": "48jaGoSMrabs1tNwWHmWU97EeUAAExaaynkZo6KfDZEBdYj97mVgWoRTMRDCTTYsGDP1HPFQLLPhaL9cugsEtY3B",
  "key10": "22uoGm4WA8ESjRNQz47aajHU3ZVgxdpnrrTZus8kgWVQTHDzyBigQGp9x67oL3Bec5TBquSoS1A6ojpYWBNhYc1d",
  "key11": "49cEnTnbNk6Lew1gGaTJxmToqRXt9ZzkzjjdoXfaayrf6a7XgCgB5FgUy3Ruqu3ZfMDFgKyAUn87ZZuz82Vab9dN",
  "key12": "2cwtGPDdTxWa9P3nUAeGfvmMe1R8pFGmmZe5HPFqAetL7QzK3LRAC2kEm1zqpbx3Rmk3nQE7hDYKBGo4Y8y2A1id",
  "key13": "2A1G4ddQj8k7otfkqMvjRf7on3XiEfGwHySNhzWiNPjX9GqYAGMu54xc3diGQnMNcN7jtMF5BKQdvXJp4vZu9t51",
  "key14": "3Z59XxqmA8vkTfe5ddPGCMgBsDxiCj53VZiVzxBmD87yYLjfhpAfyF2zHxnHnkExafAfBBwbgWQomepzmp758uzG",
  "key15": "d4c2DBtitDYsx5bFd8EmPMjiK24B5ZQwbrh3kF3MhKvcGh1RjsddBC7bSxRkEuidbgUfWnUKNynViAmkwpr1vJQ",
  "key16": "zP2g5xWnZmtTa3o7yrG5aS5j7TPKyi2WR1w6Kd4pR1z2fcp7TPpPGbwGxCNM6TUw4T7SxHGA3vrj3PgMzjoJLYd",
  "key17": "3mvQdSLQnwXFdEvRZMYghfssU3V9BXKbqBhi33cLpEDJztKqR8qU5Hx467cSh1GffMgap2VVpj2G2KHbdKwgvDzf",
  "key18": "47hsJMB6axXptqi6PbqMjaCanjnDDnbrx83kVQM3GpHwsC7JH5WzEBt94kEPPvr6nfeDLqd7dLrmo5EVie6Z4y45",
  "key19": "5Lbipkhpgf3WzyuFGAS9YQKFcrtm42thoHMjiP6zQkPdCSYrtbxxSCTVTtAYMvaACntBqo4oLV19QsjXNW5P6V8L",
  "key20": "2HwgSv8yMXdkrJ32SJc1E7GeHSHwBB1MarMsJ3YtjmynbqVrx1gxx4sRG5ormAmhdx82ETwJF4zdX6QDFMMcUxQL",
  "key21": "44ojFveiVqdcfbiFd2tCAkyYswKMW3E3Rpr2MXsNp8jZAkrJAAeiWqYcxDbx5KacatCDaFm1YkaGcPwVdSToUeNF",
  "key22": "31HDMoBumMZxJJb4dJdM6g56wqXs8zu2JntQfRTWYJB3rvvgGXo3GS9tqZP6EL9EaQX4a8MRiw8orEkXifETFC4L",
  "key23": "2TszeJG96SsDoJUM7CL9q9He3FqFtACVt2QCyTU8Py6YeQd9refhTkNLnm3JmcqpBdWro2cyMmNMd6ng7KyEipDz",
  "key24": "3U4dudLcFvqD2gGAgxpYfbBpVxBiDjmhoWMUTB356Ydge9D2hZuu7M51ZMxFCALSF24aYdR1AgFzvQcz2FYViGrU",
  "key25": "27h1XwJu1Ko5o7Rb314Z2TVyJWoc1VA5b47aYbwNg7a74AmYPnEiJnZ6ZyswtMz8kqMH6Jgs2Z6RyETM9yKmsqc6",
  "key26": "3LZAU3j4S79ZhFpFw6Dm4kqbZtoxytB1TrGSpjWRgNcZhCvAarC3QTQbDvwPiqh5r6gttmF4jXCrdxXh9ZpSWhob",
  "key27": "2R7eFUE7ZADZgNQZCY1Wb4hLknhWjYp5PhjqGfcPLfdatKU9wRMZQEonyCtRCqfamNV5CpAysSHzm3SXaDKosS5o",
  "key28": "57cdRm9xdkAoVnX1QbiD6gGDdQ7sZTSxXQshh5fyeuTHz66uDpEXTAb9k1iNxfa8gjoZ3zgRfLEqmBU8MZdMqDMA",
  "key29": "2Uz5XMNnGB8mFAe5j8B89BKNzBkF8WN27TbxcHm1XExN6dFLTR9fkzt3hbeRtLy71Q6bjBhF3HN51Jv3gWBFBbvY",
  "key30": "64DEfEPcwY9PUZi5Lgy1brxhB1ZPEKUSUBt37CggKLrqBFJvnGT61qJGVscoHzzbpkBok91gvXGPnAcUhiB4rxk7",
  "key31": "4qwxMwwwnv7pQ3d9YAz4peVWtfvSHeAbVMRAzhodFPYAhqro9SZ4bPw3fHGEzREQpTaau7iazhqBSB2jxNu1imyy",
  "key32": "5xDGeuKzZV7YaKmjVS6bnPLuDW9EAqZWcb8VuvWcvKpK9VYeFF2ErzvaGpvgFit9jTMJG3YJzLPSGnKUdUFdCwav",
  "key33": "FofhMTEF23J6PqgqKc9YeCWEb4cuyMLBwLPRnBxUxLWWKTAgg9xsjm7P4ZJ8g9JAeFuToPKRdeDkYyUK8Xu2bqj",
  "key34": "3nU9z5KEfH2ydtj3QPPuhHbSL3VBc8kEtJzvXMuT8LMP8KpEzSFXgQwPqW3ShjcbcFNqzgqSkSAeoZjdVHeC3pmd",
  "key35": "2B4imo7X2CxGGkVsdSyJTda7BikzaLa61aEqRr4iUBFE2XeikiUFmwnWxwtAZdZpm3pzU7MbwYo5WkTKqD3kQFsi",
  "key36": "2BKzAhvFiBzhCqVwmuizQZwcmhv1bMRjerEzRqEwbcTvYSSNCRnkzPo8dsvJm2YLCqegByjuFN4qGQaToNP8Nw9y",
  "key37": "5E5H3tifqYhfgPxpi75hZfgufBmdWb16VNWFqpTZxiMm9mCmnyLmCY5kjQ7aWWZi28hZgqZ6eR4W7bUsZRkScAZ7",
  "key38": "S4uiKFEqaM38qaU64idbgymAxLzony6REaBm8oxPiwkxjuHxaXN6iymcTS6T1PoCxZTz22Cihx4qjhjG1juPz53",
  "key39": "3W4aPMZU4B57qejVttaFMmNFKa7cgbUAr7FaYLhe2V1gzTe2DVA42XtCM2k8ae49fGWCwJ7v9jWxaGb2HRtPF7p9",
  "key40": "24Yy8iuzU1YiiUCveq58k1NpZcPe2b2uAw4GsCpdF5hXhxn9YXhrdDmCAufKuK5mdW3FEmsMe2bNG22Hjsj8wazw",
  "key41": "36PoDyy2fjk9Na5S3hf1mxEtjMTCowGaZkb2i1vfye1M2YUSftzdkwJAbP2yryg3nW9XtAeEzsjzUKtewz47tuwG",
  "key42": "3EAf8erH5Ybt5qacWP94h1s9gCZk8fs1g7JAszUK6nrb4cdXXBLcrds8uRut7PCNTKRhemjpWsCQa3h37mVbYhVX",
  "key43": "2SBefo2T4xeh6SQsEqEBeUANvcBoHFqn7VkUSTVLS6Jkc4yJwtzzGDah6XAPjwftZTwJpQy4Mf8wFzsTP7P8jqvi",
  "key44": "4QMyrVzsNkr8knnA66A1ito4nKQ6J2WYb8kiGMa1zz4cYv1NGKJ1WETs9vZYU5WLv2jpWTqAm4rai2qdjh7UJzZE"
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
