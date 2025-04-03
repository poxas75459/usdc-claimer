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
    "5otuYDaJqur5my7sEYLNu83ww2Vk3S2B6jHG1JDNtaGWZom1jVPyYdWbQpNomBCYXJNUuFBKu1VkGp9cvuMXH4uv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XyLr1w5eTdb4kAhPJhmf7zjpaPc3UqUHv5ojMmbfHHBotwVHXrfa92owDUfyD5GnbDptvrsNowcVPXgrw6F4pcb",
  "key1": "4xTxUdt4b1vGDmb1XMVLT69uGmbcARDKrG5NWQ99BU3BbjxaoK2fE7JZ9RJBhvYkMzeFHwGYF3oks9P6y2MRdQXq",
  "key2": "5iUZpkaGiFhfvgJanKQ2Bzw5L5Sdx486gn34Yvb9LDMrCx4BauCMmyksArr6aQtERaLETfRjyQWL5FZvDCfni9Qs",
  "key3": "5YrmHGtsBthfNVBER1rurPczRRAz7RbqUgRnjV94sMHJcGbrEmmRzTdNZhabuZtdzyyaRDLDr6cz3THJK57g6uNw",
  "key4": "KYdnt8zt8CcqKTWisL2cXFiYVg9bRQ7sNsF4KJ2Uxygkr9iD28ptq5VruG1fDUQ9VUBWMwoGvQiU73jCLoE111j",
  "key5": "9rUhNtqdGY6WaHeKXwdPsSoUeJFCmdv3r9iLWBPPEGRjxzjQeuZQkmH4H4Vthu8sgLn4ZF6cUgNp9f8AUxTd69E",
  "key6": "29wtpbgFVSknQJ6okcCAUwwZh2MsmUTVhNTJtfLZcdcXVwAc69WsdgkRn8Lw6egof5G9mjhkxyD7CeFMEFrmdEqs",
  "key7": "hk3TwrB9CCEc4HuETGXDo5wRbkfNd4B1umWNE6jhkiMbc39HXeA3EzAPnvGU7xEkYK9AE5TvDFSrWSBJPqSdRN7",
  "key8": "3Eo3hdy4FMAPBfnBFLm3s3EWSCRURVfRsAEkF3pHNwUTzPYnBmJTgN6Xbnw4cRFfnqpCraSTNvNgEkrG5SCEobfh",
  "key9": "2B3wdGGXogNZussXuFmuk681fr7pZBp4VKtfXnacZd4LAVx1FJBWGiYRKYipyYXcv3cbBcmZ7Q1eN376JDpVu2yW",
  "key10": "v6RmP9WYpoZPh2TKcARtU5s5NGEc5ggD16CEzSJNRPRpGUdCCoS6UWKL5HpTv7y2ucngLYW6BNLiefT5fpsAPNA",
  "key11": "5RcvE1ESmz4XkMqYqpvaK6uhibxrPq8FAGf8bLkyJq6iNrZken3sogZ7kk3TWyAoFvapdBhxF1bAxRN4ZrHMhHsE",
  "key12": "3ucYM1GHApfsfqVhgkVLjU9sEjrwyxYxNAnUvLGyv9cgHkUD4urJNATwT5CgWyCFJqd8YQXy4Xvgq6dzePcnj8LR",
  "key13": "5rodyBnfHsscndu3BTMs8GRC7sN5Fu2g7n5RqtwPcqyM6JNkZwHExDQm1tapUSuHhwZfZ5RuWf2qRfFFHUzqpM1h",
  "key14": "4n6e6h4EE7uQe3GTFpBtxCZzBhmRsnsRhLN7hYqNiNK2x3mfJrmSyE63eJju3xEbRnTxgYTfarVP88SiWuhLPmvx",
  "key15": "3VdBWgHHZVtV73x5zAr7Meek9xNE65tT8Guh9nmVU4RLdfeoQi5kWY5tzFW3W5qNU2dzqZykDvNXdvjFbxPDKWxo",
  "key16": "5HNnmBryfpT9uamu4QgzkeNXa9TTXTH61iK9ZBS61c9usuZJ7KpWk1PJauQtP8eYQvuxaPVJxgVCZ3tjeL4XT2t4",
  "key17": "55oWrSLQJhVhdHbZzu6CQHcsyQTp3bqzFcYQDaHigtjUTrK5BQEbC5akcUSYXqBPMWkLkkgoe8g9Lk8skNSL4LNL",
  "key18": "5sA3oUy36zSyuGzhs3oWiA8E6CKR13k77GSid55nU9sqoVWNy4BMYSPAsDRoBnegLGnDiGL3W3LriDeeFPo1eegZ",
  "key19": "2pkXrZnAL9KFtaTLUPxPs4hWLWit6XDAMhtinYWF5MUMsqvsypqtkY5wAH2ZBSZUnYYMpayLudk2bhSUy5uCmePN",
  "key20": "3zs8EafbNQZJbM8wpPtcgDHjEJb8Q4mqS91QWtpfKup9GEpCpYVRbp3cfv1B5QdjwjYiyXU8oYXrKhuv7NnpNhY3",
  "key21": "5VWrKANCYGz5aQcRPwq6znscGdfs8g9RV56H6Srgftdq1YARn339KGzsTGxcBskmS8ejRJSkKTYMAqhMX9RfHA7N",
  "key22": "dGEy5ZVVHc5s3yu4Q2i2SZkWdH8k1E6xLzsLtVZMhi2Kbrnmg1Ws5uZ9doDvgwumdLrzpzpA5b9YJwiQYE5HKdH",
  "key23": "2BMnUBbMVTL6bk9faRrUEAzomowQEK1HeHLkbR1pCNpMXwNPr17vggEfCuGzqJtTBkAzJTXyUqUu4XJ5tny4DjLm",
  "key24": "i543p57aWcLKSLJFpRWRe7CEsq1vo8KwEAACfZCNny4zn4KduwdD1ULd8PDwxuHFwbZBfdNtUSVymqaqg6ZDbLo",
  "key25": "3fkgVNCD8UUiv5DsSLpwsKLUgEWQzcHym8suZtwBj4PaHcXuKmyg3vZmQH9ebX8QBCX5Yjz7mYnmvwEbUu5TWeej",
  "key26": "5gnU9QNLDi5GuaB5rkhN3cmAyuCDpBGZ6ChrfEftACPoiCyjepo582abnyD9PfiuSpMeHmMJkogc6gMUPvpkUGrm",
  "key27": "Vbvg6XVvVmn8hc8ff157LuVSCPng8mphVBwpxptJxtJ1D99JVWPRJ7gyrgAgTqKDMp4jLGdUT4KdKBAnCue7gat",
  "key28": "59NGajmk8AppEjmBc9cQEe5dmF3XrKTH7ydvXA9aJFe9EYjMfhbCC15SqD6mY69njr8QxjCTyp8a4aZs7fc5px5N",
  "key29": "2sdK58aaemHJJnkExQJAM2cgHGfhgwdf3UowYUaHJThMMD9efaiGuxCsRTafMm9wwxefpFELASo189HRCcxvPhUF",
  "key30": "HUF8bcqkj22MZvw5VbVTa7gJ5Zw6GR2FUmkrFXpDZogvLhobzjChH6wvECzf1e5hvsisptsc4LneUVtCNCSzU5u",
  "key31": "BZ1bDUqavDp3joougG2JsByvzsVTZo96wejeuAWZTWgUzRKVih1DnTN7jMNezXSCgXi6NZqgZGdwTxx3GCEntsE"
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
