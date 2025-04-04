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
    "2pi9WzzXAZSFfWqWyYQnsbr15NW3XuCdupjis7S9aV77scFQzoz9tmk8NMDs7ov1mDZL6XoA4NgGkxR9p6UyVoDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m4j9A2bR5w8UL2ML5DEFgPZyC1Ct7YhBvDz5iacNSHLwfBeoK6g9bBjjndtusW5iS6KBeTwLXR4VsKQzqgPXt3h",
  "key1": "V5zVAvqxYyhGbVDgptnqB5wdXZQMaB7rk6JLKNDzHeGV322XJMVcabcTcpAD4PZQyXaiwDP7fhsEy4qegLTjedo",
  "key2": "dattRY3Bn8z85hmCkp8eCennre1CxgJpkZtRVoJA1efcD9pPy5d3n7v5DbcXiuc6zRL4PKr97STw1Nv5KnxGQy9",
  "key3": "3NzfUBs8xSvjzyPDMZ2g6ytcA4TZdgy8FNL15e58pv1jzka1XQafhrx5roYSMQCWhr81zWGtZYDpSEeeTPA6wEKW",
  "key4": "3po3N9MqvWvwQBBomDxqV1QRGUfvb5PGbatnU2sGvvVfQCfLsh17R7Khrn9E4Sue2GsFykYcXwXCSeEWdMcNRmY9",
  "key5": "oeP8RW445FiE2gjKr3vf1KHbXD4eEW1tG3kt2jcx5YdUT2HmGtBxxwTA8x9TY4khLsaACSGRekgbGLh7stJSRnP",
  "key6": "52tCYPw3mxJFGkCY8XLDEWoBebA7b1Rj3boeSocU4UCZaC5Wx7CzeWFXkNLR3MuTraYK8fGEr5kCfyCM5KHSKdH1",
  "key7": "4bEf7UamY8gyMX7SGP4ENciLjc6apfWPcYMxH84HMmDkdKodFN7xiJbkAyKiEFLt6YWx81Josi2LtDHW6YVCsEDX",
  "key8": "2CgRK9bWW9nKwC5oeFfGsaAvjEGRvzJbDLVbSUwGtk9PeBsVXVtJtYKJgdcMZjHU2Po4Uh4hEURoP4Yc5cNfQzBj",
  "key9": "4Nicz7zs2RTgzuBNSYds5Pt6z8MGbbPabN4ttBTfziPLzG5ntiG8jwomRdSoV7tg4DxCgSAm8biRnmmxKXPhaYBC",
  "key10": "Uds4ZYKY17CZtbSwuuMMQEyaQoj86Bps7VowVShCqJGTeZi8ZkfP57PWSjvsu1iYUH9mUCXe8DKuQd3bendrn7W",
  "key11": "4afJvU1uHiBL2MNR9u6emgUVpznWvGHwT6u4BCnyQQYFxaYqQJZ2oUjbxeToPGHZ8e6b8WNkQvJFHUNUF9MF5eEu",
  "key12": "64BTdqUE55mo2e8oFX94yHFpaxcEvp5euMQjswpjpRwJUu13zPLNrFDPcXuWMqeWwptmSs72R1bz5hYgzTGk1589",
  "key13": "W6htwYYTkqLh7fQmnTQJSfWEdvCM6y8A2ALrvuyB6SVwtr55rkpB6BR8yj1Tx8uem8BznHSbyRT6e2B4iH8kuze",
  "key14": "2DQL2prqVz3rbBk1coYzRDpvLk1sQn1B3qK5rcAnPFsPo6hED7Q6sXURVjG1oGfxx2p8H6u2SNVaBfFjh5QRcj8",
  "key15": "5J2kqDFMvq6KP27hUwHe6Qy2aWQLRuwzwsq6qVR2g7tK8HCbyvB7FwhhT9KCW2eNL7Wvom6yUqpafPRGXxGtWuZ",
  "key16": "5KMG9vWf8GoTdfEAKch1xXTUDvqFweQkYrfWbcqRUhrsrbgbdfRJGsoxW7RwTYufMH1bAaWRv6dyEhsZBkLr7PuZ",
  "key17": "pfxpma67rpNtmMdSG9HyVPME2WLKP7NPaHQ5kpQcgopGUhGDS9bJ4KCwU5bsTRN5Rbi9upLkRVo2rfjzCBQ5AHz",
  "key18": "yZsrTdi8aP4iczuQCkbwZmZzGKtawRPjEsKgX2CWrgRckUAuMAGHzT49RoV5MTehMFhkfYaAdRGpPPHvnM9AQPT",
  "key19": "5dj3PepDq2KZb8eXfZFdK5LQPrjjE2NU5AE9hbAb92Miz7uNfrwmiBqrrwv4gJwqytcZCwZvQvWQZBdUd4SBzqZU",
  "key20": "4CyAw7Pdc9bT1ThwJiGjPps9yWeAM7vXWg3BYvc1JmNf7DBcEUzLVnwBmkEzBWXy3gNyS6DiLL4dYLkWy4BU7J1i",
  "key21": "3Yx6TAzzzARPnTyDZcLxw5SsUof12Bmv9RVVrKU1DDg8An6oX9Qb6521rJwufRNQyPMcWWCNxDhUjyuFEbmtmTg9",
  "key22": "417R5WCmVtm5q2ALUzngzoNDa9WXUiV9ikbotYxtGwpKVaS8W8FwE1p2ZTBBSmY1QjYaGmbDvP6Dit662wfg8U5y",
  "key23": "63GjWHSVsT13axziq8ZRKYTgArhiKjCrNrL8bCjrcawZTKgKnK8uH5kzy6ik6HAxzQXcgJ29qZsmRs6ZCQqJiJfo",
  "key24": "3R2vbMUdU955j5pDgxS5fxFecWvUssNNarr2tbGgrkuEEYJNYu6Z7wMjaGpKffjUsNdiVnAN8dZ1uhrV1YvBL8or",
  "key25": "5trvzkVEhd1FR3g4EKBsLJ1sMWRjGZZCi6JXehQ3M9Z7sU8RJTVeprXRPgkmTgNyFnBafYzVejnZBa1JPd1anQPh",
  "key26": "2pd1sL5vpAJSokMTonn6Nmudu4GZedRUngFkmnyunVabVJvUr4yrEap815kajAbTNCJockWNzWAWV9scCrgC6Ff8",
  "key27": "FcQpEpkbXhzdD5QKkgNNdPjVcj1eby6ej6qu3LCBLQC7qDT5vfpByvYPGQVM92rDdNaZriGnFzjeLysWpWdaU44",
  "key28": "dTu6B8vJ5JUFuEphxpxFJphiqC2caaU4aoXHvGbuLnBa76pbw6Xes7R92uhk467T6dLYQ9SxbPhXFnibwHELev1",
  "key29": "2wBiWrEQov5BAMTwuWJDZrmH7sGNszEUVaHM7GtvoA9bxVqZGCoHrQRnkTDuMvuLHZbecZVWaVaUTr1c4Hm5TBzm",
  "key30": "5AM1Q8do8QvSz8bBafdbdpcdmhaFaed95mp7X5gFeJ5QTQmJrjx731iRP5jqBS3e7QC4KbCNA68qJ9FSNEfGTShH",
  "key31": "3gy9S7H4JSR4DJjrotKzmWNdTycnNMUWY8Xw9eypSBJoYTgEFpdYWqn8BmBpgzmCG6ABG5DiUzgeW5SxnGAJJeZp",
  "key32": "5B2Ffzf9fehn6fLq91x42nkd7nHa9Ya4Jsw84BNYTo38KyRLZqzpGWuorhfvKF3AzUTxE7UMW6bdry7xDsQzUtrm",
  "key33": "4ZTn2GiZ3UhBgM6R1P4UjRpm57P3fLHN5yVhS1ukwmfzT69hHoLkwEqoPppvdTWqCFjL6ATbABNLUU9LfEnaNimT",
  "key34": "41Jcg7c7djFSzZpHL9k6kV7U5QZkQPhX7ygHPZBCA1NF31GfQ5zyYDfYiaZFBn19jk9os24sJ5nJwvBfa6jGN6V8",
  "key35": "5MiTqLhcon7hEjf47TiePhpoLrqTsCKPgr4dCNYJyGj3a9uDPLhthms8dB4B6mtsKnEPxXEoqMjvBuTVuKrAL6wj",
  "key36": "3TpVZbktnPcCxECvMxnPRZvcyDvQ4abLUgHcRe2PyEPrMAef1Wcqn7sUeoMQ1iJSb7cH9WXHbZ9ABR7n7R5xKbeF",
  "key37": "2UV5iNYXAYi9E2hbygUU1oAWLPY29igf6KioZTdXJeuFZTxJiV5uXDQeAscTLfwSZKCWfBUCt3AUnfHfL3tZ6Zao",
  "key38": "5nocEhcx6nyXcYiZH75waSn2ov7855B7WwD7hjwM2vEJtWJKNGZgpioDHKUYB4rXFJmKnpPk6JzZr8WyQdkDveT8",
  "key39": "5c8EgvrcpJvgZgcYBKmUZNrH668hD1oHt61PFWzGNqyD4coRvvouLJRLqhGHn1Qqs9KHPcmwJ67ykxVV7muwrpjf",
  "key40": "328whUJhDxzTGXhj64pcUjtsbkmDh1224uXorBJfjfbxvDta7CAp3RECxasPh3ZotaiAHnzhkPS8dfbA38q1tHrj",
  "key41": "4uXYN3grLdtmdrdzDb7T9zXVb2bWhq8EYYxatV7D6iZp3z8ZLds5KxTa28pc1FfNGxWW76gqph2voM1qcxxHKzyQ",
  "key42": "5ZfSHmh9EwkXgAx58ghHXxgjfd3s17mZdj4jNDxHMj8X6pgM5JQzuRsEhYrYyZ7kv7YNxUmBLsfhbUk7MEPNH4i6",
  "key43": "35Vdgb6VAmwoHR6fpGVurmwEFAvNyQAirfFwaD1WwPVBDAsx7XJbh6sFJuxFUvTKiNADx4uZfchn1CqQVCEQBzxx",
  "key44": "3rDkXSahGqNZnGXs15YjRuQYFNQKGmEwEiSV3spbgsscSGJ8uvG1QsZU4keSkbscL9giUvmknk1Vovp5P99oQ6HU",
  "key45": "5t6aWQrq5v39DQtyKWB8AxAz8i7USQZEjWKQaMKajPuSoebBc6v9wukzv4yNU7pzthnNTPoqRUkTKWqxnSV1z9kf",
  "key46": "4frx4w25mWhfrWbrmMBzUuLY463RGEAvxp4nGbgt3s3B36EkVxwiN72V5XvysRSgSGiLy9yTGgwyVMXrPYh26cY6",
  "key47": "21b9tEkG1fUij8yaRrVmeg5Bekvw4VjoqjybiFaYSMXWN2ZWoNYVkmXXDbk7i1g8a23DqPAMCKjXgY4VwnyuJZoQ",
  "key48": "4HC8vNcXQ2AMXjQoRwAU7pUU989Ffvq5c8cwGT4jKuDkhxcY5dvdX1QCasBibtAVVc58me61wL3wJcjMCAYUrXzj",
  "key49": "4Faq4tZL3vkjN63KmwaZC2GRwfFsURwvWqMqZToCtLTqMKkX4aibNb5oo2JQHCgx8e2Lkg3xpH4FGPiDtamiBQS6"
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
