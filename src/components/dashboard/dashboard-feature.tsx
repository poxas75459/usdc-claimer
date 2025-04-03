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
    "4hKpxtDBMex2tW3UwdP5ei3msTtRzMQocDqXoM2w1ZUfTqcpWR5R3SBrozjKZVx5yNntUfFtd9897HWr6ZeNXPVe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uj4Gxm4NkdCDUYQT8UJiY7JYTfuD8fprxMMCe8NzE8ap6sszTRNvtCypJqLnYn7TerWsPR3mbXLfDC2uxhgPoKb",
  "key1": "H6mhRKQYphpU7kPNvwr42dhdfJ32XKrcQZHrQQHKkPN4Qba8ZtfqixhPhNh4WWbZ9387tUk59kWL3K4eYe7eoHZ",
  "key2": "3LKKxbzvukXniHbeamW8sV2adx8G8qkyNNmsRADwbvaqimvwmkxXzGouJPLhvTxZEAPydPy2XHrmkiQNM1WnJDWB",
  "key3": "26QYtCfaNytqShqYU5wraDCSh18CCU8zMXMMkKnak4eCdNCwm4TkwZWDujXR9BkZDzRrdZcs5xsZGUv84AHEzkG5",
  "key4": "5yc5Q8gTGanZftwK8rmLgyYcTdpnpjkmw1ZFUoWy5QrDESymmqPFi4f6AQf6YvabLJ8QvQZhCP3CwcnaXbp1WkTx",
  "key5": "532GDBHr6FD1zpkgWEYiDhYMndS41C7WRcmj47xTU9tT2GEhbK5FshD7zfokeeg2XvMw4YD6WuHLRn1RYwrWfTTH",
  "key6": "4Yfgkv7GkvE7eScn67jKCh8mnxiRaJ9E8Df3MupPWKFwnnQX8hDLYbgukhj73XfVDXwYMfn64j72X6ehDAFJncUz",
  "key7": "33at63dSejKhxLVUjeurD8Hf4SQdhTsucmQvBcwCEHaSrfoPHYYJrdRXmCRZ4CSidohQ1Ejn7DgPupyUowGN9fkT",
  "key8": "4RCWYgk61FwwyKjjjBG8cAZtjYsH82iYfjJ8BXQdt86vjpq4Cw5rGxWsMjRfv2dRH2gPAR1LSg5F4GZK7xgZqrw9",
  "key9": "2qmjGdLXxb4vyrNGyawVgSewACuwCXnNtDxM5YtePWPAh6eNpRrmUcm5eRcGzk5c4xxxFNrNXcwc1C6vR8u6T2Ku",
  "key10": "2X2zgtYCxzuV1d4ZWeBuzg5vQwJzPQrrzmPZ2eXm9dWZA5TJdNBiRVBCVVtqSiTMPYqfAxdqAJPtZP6CQTKnCMNP",
  "key11": "57wTfj9h1uJ5W9TtfS8mBMVDmsphHbyXdYPXvmDindwQLdbV4NRrNc5PMmDfyvPVyYu3R9H49ki7cEw4GXZidK45",
  "key12": "2ueaBnwsUJ4mE9APzKamT6YEJCknS7UKUjBuZ6aDQTHAeZoRNB3NSjCSUDwAn8Pig6DNY49JQ5x5JdcnwiwJ3A2Z",
  "key13": "61hEdmkxn6wvAQ4kJXHZJrAZHLWNvRVgq1eRKKiLta1ju2wgpXXt1AZXkxAdQ5keKE8YaW9fmyhLxSX5sTRitMmb",
  "key14": "55reSWrfKDSsBkcwqJJHwbsawDRriwNEXKb2wToTC3g3sK3B8oFgp3GhxdUki3usAxxfmVr9QX4R2yWbh2kK44U9",
  "key15": "3UhheHuLfJEfMiNDtNhxzuAsR2NsY4M5FrV5dEnTqv89Cu9SCSJRgRRHuVNjzptNN1PZNRoT7z56w1Thfh8L52Lb",
  "key16": "5GYyjjDaNSx5S8WiSNAVoRXse6Ge5d5XkbozbX1hgrQCBy8eGHaezuUG6XxGE951DqTjo6rdRBAR6LLWw5HrE6Nw",
  "key17": "5D78TjAJf8R7BrbFDdPrFvhookMYeZobcXKDrNuzhapRgg2gBBNGfurUVuTwptn2q86EJd4v7uL6hovmFfjtGyUj",
  "key18": "hhsrYXcxqA1zUjibFTUwi8MKSxa1g454m3F1gyZxomPtWaELdztZiSM7X4PkhijGSpySF6YUg1dJXyehcfkVmGk",
  "key19": "4EkgQQsmJ7FV9iwtqERKfovSBM91xGYkyYgavjHxguPxHqrGUmLqoXYdoFuUydK4PVa1cGZzKyuTmxXH2tiNQFCq",
  "key20": "V6oqWZrZqAnhxEF7KiPsnYitrWGkngqY3EcuryqvD9o322KxwiFYpMLFbyqDegwwvz7CwB7o3nBcwbQZW2h9Rty",
  "key21": "5fRWGaJoyYDBtBRor774ZZDAnNfZ3h3dmsx3AGRBep3MXX9511XBZ3HQUEDW41ynB1iJ7LqvikC4fwSThmCG1D9c",
  "key22": "3X1JmWBmcLMyodKUnEh2G4c2n8WFRqJ81seSMnV6gZtmsLt7yHAxmkA8K7oG1WRJCqZTYtQsygUHnRCNs9PY3oie",
  "key23": "3E15tfs8pkWPMBBrngYeHg4AGQm9fd22UcANgtdhQ6R463qF5wiDXhyi4WTEqXwTgJqMZH9wHj8sHDKYztHk7NG9",
  "key24": "UNAB9zYWYoMg6bCuzTq2Yf9T3jNNoHtMrSk5LGFhYtsZJUMwVERXxF5Za3xV2p38So5uGxZaKBtCt3s2pVsKSCe",
  "key25": "5HrchB2JTYVLuP4pkZM2hCiLKMNzxqcVkuNbrGDBophKJqvM1LHMWepVBR2MvSVXV4d8K9QjGGejYZVZ6UBmz2Ly",
  "key26": "4U8dJpK1FEXYD8mLHp9dCsnTreorTKKF3nVBCgNfspJStQS5V4qFpoYTNhzCBKPK6DSE2zUhqw1zKHi3ommGjwg7",
  "key27": "3xfvCVYE1fZTzLL63egyLqKyTpCRYXqn2V7sAbQdXLSGPjX73gM3JKU99tx69aQpm1WwJvhvUgW2rfhghDJ2TwQb",
  "key28": "xGLMNqA9JEEM1uYrrj5kkADuB87MNkx3Hdqk2ovwEYTRrAqmPbeQBavhccHEeqCVvaSHgNaTrkadCDDkD9HT34U",
  "key29": "4iSumiKBKr1aFvsEg1A8mzfYj8UYnFKREDb5TvUiJA4CMoMhxvkSBVz2YaR6gBqpSkk11tKUcFXonGwCpzHQVmag"
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
