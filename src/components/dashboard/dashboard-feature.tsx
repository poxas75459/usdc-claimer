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
    "2k3CiRixeqPp5S2b56Yc1qLZfHYrsG8CNnewnKSQxvkmsfWktX43xaKmxoF8dUSNN86bwPthL46wjZF2czGxX9cn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KCUiTrfkNMmCCpszV1qkdsV8AihxkvYLfrhnuDxgJHPPyv8aJYYKJkmGcm7P83f3J4Ry5HoWWYHjSEEXgYM7Lwx",
  "key1": "3gMhR7JcNnUe5ZLjaenwGV7jzUwrsEktQ7BnGNECfMFChhdLptEmiN5fMXsYUhEdVrF4SYTqrLf5TWJqmE7FqRzN",
  "key2": "3M4U6z8hKfNLuyRjH4DVW5AjMBF7U12B4j2hHkSJiPnxhsWbUvZ5GiSmtcMWUzbM34deAS1czHCvMhU2gXdb9v9c",
  "key3": "4zAMRS6avnpbWiWeTaeAu5HiQrUMTP8DSdaRjQ6WqR3Wkxi8sBit8RoQ5e5J6SsQeAzu4h3un8WXy8noj5joC6z3",
  "key4": "3ee9qn2Bs8Xv7rCe9qw68k87F1E9xuAATeZq7DLVaKnQc49v4QGEuh752wruqvyBEyKWgyeuFm1GP2bc3PKJmY4E",
  "key5": "fviqWXRTWRsrmJLMGrCKGJ1fkxbcvdpEPLWAfi7smZDCLPKyanXrwWtE3oT8SYJ33QWDxpTT45dwV5FjH6psFZi",
  "key6": "4c2N8su8YhvmpuSL2so3VDM3qT7wZsBRaqdyhp67JEDcHwoTn2sPmhQW6mRLb7PwiukeJm1i3PUDCDUMJfCv7m1F",
  "key7": "eNazHvzXFnqa3zDgbSykwRRmaZtaNbqNyGB4a5gvWyGuedfN65w2iLQ7RUdMcmdtKfQkC7KGX1jfWPDUHragniE",
  "key8": "5H8328vqKuqyAd9h4Vb2trqp5jqRkonb2yBt2nmofhmqmW6M6mJdJNPczEQXfP6gWzfUvjDkQxsKirVEc2dofF6u",
  "key9": "364dN5HAvb31zaVmuRR56yVaizHmzkkGGji5WhEmuivmUUhRUXgHkUu2pb2BMpwRnxiSeriaN9E3ntqwyxyF3NWU",
  "key10": "49767eb4h9DWSx1cMFWP3x1PDwy5aUqafqHcgrS894WaqnPSx1YVkgtuoRdiFb6JNgDrUku11cv1Y3dkSjZdAuuS",
  "key11": "2JAxxpKWeD2tDYVXggMKytdDPPAbiXbUiVueGwCdSxfcKYqMQ2NFo71HxFHdFfrtzRKFNNNQU8oVd7tvG8DhYhRH",
  "key12": "rS1AaZtRcgB9hiTrToNvHZkNqheBWyLsZvwqeq2kXQm7vFqynHqXhQWdad2b9FWWhchej5LSmEUHEdQChAdNcu8",
  "key13": "28aN91C4eBdzXq4m15Dsj66K5ekjqJDzzrgeHFeYGo6EsoUs5ptKgphYaBx9MvCNyjNi8XqXpiHzTXDjkknTRR2G",
  "key14": "4GcEDPVFyAoxGg8mx3huVPLzPyt6mGYCDDnHbgfgAGCertGGsAVTGMh1J9moFsPPFLC8UJHh7VfFvpdrQrMZ6NkK",
  "key15": "5HSfPLQxdrfyyQ7reY9QLxYzPQfrKKHn9S1YLSLvZy2QcgaSNng7J3SspARWGaBNph5DeEu3F4xmry9oHdvR4x8U",
  "key16": "2JZ2wAQYBBvAijHV7dfHT7pktnXht89n3VCbPnxiVv3sJod6U2AM98oGGsUdhVU6o3ig1rfuPNuLXfgqj6aFwvM",
  "key17": "5Hj15MghrsUS5uUkeHnhB1X19M9EgsBAn5yBMC7XmWT7bRmvX5JqCpW5gp18yWvkDaFeZFzpJY6M12FgFRhgVaBg",
  "key18": "2R9YGUK54XmGuPqsfKdswMKjS5w4adtwhbczcdyC3r7BJdVzveQrHqQmvWpUgzSnuHTzijYnNeRuac2sQvnE6et6",
  "key19": "3GCkWZjGwkT6nWBdLeWX2zS7fVURn6P7T4UL6KjPPohzoTRQna53fu1Xor1vy8yTskt9QXzBjRgN12RfGL2wY4x8",
  "key20": "3n4DRdzijbNtgwyYwyahRR6DSdVoYuk2EfxhMfGJa5dWTDymaZ5oufdUXNW3mu6utnD5D6p9VJaaFdi33adKf3YZ",
  "key21": "34LDLeTw2hYKu5ybUoWbUFnua3dB94exV8fXsJhQX3bLbehg86irQK8uhnwc6ACb9MwjRAaNxz2r2HkvjLnubASK",
  "key22": "UP2gVxLjtyMKX8FKTPA8Eb7fvpuhkxvDKMpA28nzto7Az6H4CBywDy2fLjWFi1PX1dzj3kgAvG4VBAytAszjT6j",
  "key23": "3J6SmzeWSeUkZLxtaLhHJjDJjXhH3vpTsjUBGQmygVnpiFdHTFkSvEn3CJJDUFNvK8T4ggbgN5mjxELgTGWP7YRw",
  "key24": "4RQeV4yqDCz38oo68zJPkM4VQC6mHNy8SeXyKwKSrWkjNRyKHn7mnRDzShURq699yDhrkbNAjiymjUMAssiCBqhD",
  "key25": "5RBTfHG3iESemx3qncHcwQbvBdJrP99XervSKX5H6jQp3aNVVUSG7pfh2oqdhRfW9AvE7AqzdcC4nwjXQXVhVeRr",
  "key26": "23EA9wgySQTuMPYy2U7ymnbtxBL3dkFvvYoegaiLFdJryej591TxGdiVF5WgoHCfhHARoMc9DRW5aYK8wDXiCpLd",
  "key27": "4FXjFnc1pHES5AtN6iiJo99wmpMKwksun1uKeGo3u9PyLibc2bkyMz8PapUhspp7xuUGk9XPsn4skMHu3HKTXLoU",
  "key28": "3atrrP5ugpf6ssfA4vKQgL41qt1jWRvd3snAsHGHHCPYTaZoAN7X8vuXfUdVQ9nFS9vGLEiUxvW8FMevM3KWAH9K",
  "key29": "WZEphnY6E5HpdRJUwXKi2VoYHaLokQZnWP7UV1Bw1SmDteTMGH3SnEwmukRA3EPj1jgXk6qqVAenX4uWRCc6moi",
  "key30": "28PBt5Z6ZmWLmUjHGT8nJK4iJmiGh3KyT2tzhD6Jyctxv8E12GLZUsajbdZZUF19seNWPTAPZQ4ktax3HWZ5axQH",
  "key31": "55vYLaB5VguDeebU5YqCPYtnctTDXNWPhJRMh5C9hqZaU6S58x6WCazHNPYabRwGTpju37uDPnwH6t7irxrroUgw",
  "key32": "4CovQB6k33bTNV4uxtFBv8yNDzmhAgqMiSRmMCwdGn19Kc7k6HrUeGW6P6KKxF6qmQ8HCzJxyF37mXBJnWvYmuFW",
  "key33": "5kBRCT23LwWUhdtPWEWMgGQ5Q9MYco1r2YAyPudkSsDmGZV7j2KZkTqCecM7oahkj8KVs2xgJsy865PhmP8EdvmW",
  "key34": "pm1nyysvgBgTdE18czBFnu9dRnsbJzwDf8YEF6v5RUgDtMRGLDy9MDF57oPJboreVHpByfeJLDsKwCFfaZByXbk",
  "key35": "3VpmzxNMUWGJNVPYmFa4u5amebyWnLAyYYx76FwoJoTijNdKS3UUG97ivWYga7ppt3xvMkcukoGK9kqBUAFQdnkk",
  "key36": "25PoYzvH7J7F1wJrTdeeSThAVP54k3vNAV3ry9iZA6S1UP7LbktTfD1khqmd9HjN8gu8q824JjhHQe7NQfU3zAmS",
  "key37": "21deETWTaiWL6Bd56Ca5chzM7LeCrkULNntm26bgXVbcBrVD4sd6CWvjRCQz5AD4FGnQwbeYzQM9HExgy2L8uCoh",
  "key38": "2YemDqFwSgX2PRs3CmykEdGq4nXpGC6dELwEDz1rHhp1DkyKdRyVs5pWaXx7bXwamtPVuUgCnY9aAHJZvUCciC8k",
  "key39": "5M2PTRxVWUSsSdWr8iPM6kGbqHdF4kym2fB3tPmYCVSf96Rs4NiAM49VdjX2v9A7h3x3xeq4v46heeSyuocpjFwC",
  "key40": "yaaQb7eUuraTfjAv4w3dyBJ2Rh2xzBCq3KxrKSMTcCR21AQSFETrXdqmFa58br7Q25p11e6oKhRxjsVNJ1FzYnN",
  "key41": "3bKhXoVP5D9aXFfZYMmdztEAbfZDMJqEuxW6pYxEZFnR2NXcFGUFeWEw4dUCdjXZWEoQBjWKo97EoVqk1WCwzVUA",
  "key42": "5p3E8qZyLSXTT9Px73BKwLBZmrnt35BvG3hnMY8Hyn5pUZHaiK2jyjZfxhEUkYScE481JHTPy3sYwh6Byx8o3QLT",
  "key43": "hPyysDa9ZL73noAmFiEGRW5eTsYps9HZCJMD4yFHT8rHxzBKPUB3swgDiCEpkDCADitkz3uuP3eDnJBEwGtKCmM",
  "key44": "4esMUy4RAose1AQdynut7Sq1oxZKW7T2PLFxjJzfLrNwyFGYYSUtmP5B28zDTVUHQSMeLhSoeuV1tptFkNnVVmfV",
  "key45": "5AxTDvnHSDxeK4hd3X6TpcCQ79mvt1E31vEJpmxDgFumetGuGWt7Rn7anHD3iPci77gUH6nNDDkUWTZJvYFu8qfs",
  "key46": "2sMDHA8dBQhtTo7QuMQURxrbMZgrfYF5ixWnHXwthTaQWTJ6woVqiJTErdrTKfkuDFtDKe6j9KC4qM4MQ9DRgvmb",
  "key47": "4FzAHEn4XE2XhnKcTBhyLoVEGVYq1WbypNCLLweWkY88moCP7faSifjERPHiRHGQP1PmbaoHBXMR7F8UWx3qpcdV"
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
