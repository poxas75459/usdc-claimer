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
    "61tkcdBf7S7ub3q4oQQWXbtN6cx5PpTgxqCPHDaZGLs6YSaKEUyxvxRgcdYQg44ZV8Z2pyxVQ3SNbpemdwuWx7uN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LRmwfzt55Rkh4bexGbeGCfywcwrmB1hk8Rjvz9tzZ9CURxAUeDBgkHHoDfpvcXEmxWGMu9X5rbGmoroJkitGdVE",
  "key1": "59JKhAVzuygxHDW125RxMGoCGRfHEA8Pve5dw1maHQ28bDf55mhf3WdnNhHvEJkbk3Q7xfZPpmSLLqwxELj45b2x",
  "key2": "58vYcykwLfp1XujRsvu8FMWEstbsBsS74yWzWfQQyxf7Gu1Y6Wnuw6u5pLTGRUkGa1Log9dQEbtHd6MRhMw8W6aF",
  "key3": "5ELLw7U61EWV6R3gB6LVFa7eaSph19QuhMExM1c5GygYBrHvr7Ht2UGk4QUNhcvfoatSv5LvyfTqFkKYjhRTPzsm",
  "key4": "5vYGgX3UsSFFgLqGXSisPDf5fGBhkyXng9js6NQpV9Mi32HieMq8K8Nw1gZAJ5a8hMHrfKwgLCZiERibFbw4DcF9",
  "key5": "LP3kUBuaJSCqQRWFMMWA6vhb6vFYCEgKSfP6GamzKkE2T8xFDLMpGvbJC9vhoDnZ9CwsJXW94oewwLtBVUAWmmY",
  "key6": "akSUnbjKSnxKs3hohQvjfLxFQazYxDzrFkdueehJFgie3vku8nt4minComqkBYFxK5hHUNX41FzfEZd9Zmm3xB6",
  "key7": "2CwQZACtKdGTEmSnMBYCRbJM3LMUqaW46wma93v1nwxM5NQGyXUuP27jSRCCnbQg7bkGmowGU8H4UwbVzJoWi8Ey",
  "key8": "4PyJPDk2UwpsDdf1saLpqFj77yNWrjRNoJGTa1BKHiQqVDcmozoaMQJkC8gVYCXuoHsRtrocjLQa1XEYPgfKiHJb",
  "key9": "5AtsLkG7BevqodWMu2YCpCceteqoPGpy4A4SnVCqPGoTbg9FGnd5N6xcD2FcAcoJHVNanWoTQTn6gqB1ZHhdBvUe",
  "key10": "2kRo6GvbjYrwvmPEiTzXgkDjxixUuuhYrEFcyB8iA8SgbUDasbA9S83AnAcFBN7X6ZnxP86sVrwVJGYeZBr77YAb",
  "key11": "BztQgQpwveLFM64rUoqkWzLt6EkFtNAo5NhkaYNwywBKAiyrWJ6S6S5h2hS8cbz4Xz3CKEWiFopzfB13f3LT9SP",
  "key12": "4FS54vPMa89XXqXej774fUjxsRuwYzGQAgua4F5wZaMxKtqhffmCM1PHd2cdpc2JHnYwyocTvYGqk7hcRDgqRy6v",
  "key13": "5RGNzJMc9o3PffUR25F9Mp6YRnKcGJT19E4JUXxk5b2XB7jepe6FvJ4XaZyWVLb23XARGA3JNBnR3Dhkfr47iWoU",
  "key14": "2ZmwvF2PaN85tEZpNS9EE2Dk5wMpANc8pANYTRFkqY6YACEEzU2FQdjy7s1SEnoz4Qop3BnZMuBuBs3zF339srKz",
  "key15": "MSKeo52g8vQuWQfBg1HS9vJL3K4qEu1vWBsPY26EvMcioDzQ7xcMTUzZyBS46twEXX68x3bBgMM5oWWyPRSH4tF",
  "key16": "5ai26DMummM4h6PAE7jH87k1DJH1w54mL6dmL87cAsDZb1YrUnfVaWKKZi7p9V38jKw5iVFd4SBSmuwzAyg3mXno",
  "key17": "4bqGGd2iGjbbRncrmmJ2nG7PbVNqHmvt2knPiexqyXPh3ZMcX5XygjRYCV6Mh6heCu7iCEhPSFtZxKsELynNNnKK",
  "key18": "4cpRVYwGmifE3vSz6q4MDXw4C12bwsLRw9NotNHfMYpZhaxo2YHbDPkyx4ANzA1kBH3zcyqhiEKAM9mMHY1qbpQE",
  "key19": "3aGtUSrgZgmFbxaBGrD8i96ux9nN8mwoM9zmrrcVtPm6ubYwY6grDN4CgxFVUWYvCU6xNmeg5deYebbgWPeU1htb",
  "key20": "5AvaptUMoXTDs5tM7PyG6PsNpCACybsozc6iW3eJMW3a8AdaPGdZDT8NWdu5fvdH5BJj68VuEvxUUiBXGRKhhEBD",
  "key21": "5CN2p98Zjn7tzq8oSeCnoRXvmgwvkNcUkJZZmAwCYU7bQUPHpL1tRWVVeeA9MCWE2PXGyFYUFshQ3quH1oZdVocN",
  "key22": "2FdynSLXDPhk1ybEszT35eaD3oc45D32sSw4NwSKnkCYP436KMo72We2UJr474SsCZ3bSJJg6HbKkHJB6JnFNWTs",
  "key23": "2bdhT5jBgh1AtDSiMfz2qSrZYqA2AfxxTmUSGzJzPjTf3Q3476oD7tvFVgp3EKvp6nJ3UtpipzdAAXRtJhwYrAiM",
  "key24": "4uqWCSmQuQ7axJQbm7hastksLvDqBdUDuaTeU19Sjyq9gp46JmVkjpL57sUeqs5h57qaGaMYKwdDexsdSc8WM9YX",
  "key25": "4vCyB7haAXAg7NpExmALgHV4rb7vWkZDV9MuB7QHKd7D412jFDpym7Qeuu8uvMr372G8LmLtReJ5nMMpibvqN6xW",
  "key26": "4JHc8BTk77fkFT8Wiqvhtfcsq9agmbXt3994mvXKUnwpmVA9EpK3LHUz5PHJD3XskjwitEMENrinfpnKbyH9pK6E",
  "key27": "2MJmLin3oxyhR4ccmJJZo8Xk8c9fo6MTzgGEwnhs6w5p4zXwpxcj8BjfSvn71ZyhswbPSMtxr6K1cSm59EvtodRy",
  "key28": "CoZcfxneWtHKX1AtpVAT158ZFYuMAcAWqw2CquxWx3HjhSwGnw3e1Wj1o6VNkMAzks6FMdXRmWyXZiRodeSAVYB",
  "key29": "2B3iZNZGrHSETRaTj7QzBCvT2mey5yTe47bh5tL1S4v59XcJj1gGg4VqWh6FtaP7x3YoGC4U9zMnVAkYmvjoQ2re",
  "key30": "4WwooNYXFFfrzMoLc31SvPQqfNDjYpXzjbWKZpSgg8yKF1h5WEebrmogzKgdn367uhVsy4MCW5kErM2xvsZzbdKj",
  "key31": "55y56ddho9Da2xcbA2xfNpF2WfsjGApTPvSg7Tg43EJCj5hMtggT35JScYe9qtAVuiLxCeo9jABf19VHCAb8gy5V",
  "key32": "TF2hWsc9fUStTQydSw1mE9czzKDbRr2myQCLVgwdtccvCJfewhzGMHVZqxdqxswfuL6EsKqi8oeKvJfqtdKjcYq",
  "key33": "5UtuSxhxaLeKuqSiXD9kJ9ZATnKSBw7Qa7j7ZuMTpQtCuMMfQth3iBn485mFR46G1maYoUhY9wVFAtEdvLYirWx2",
  "key34": "jfN9KiEiumsWfzdVT4wpxLUG1t4yHnSt4bDS96XcTXPa4BM3EnEauS4s76ZLUAQbX7EeaHgEjEwDKfQxfG4ePSa",
  "key35": "22STqX7faEBaSJKTpMWnYXLxiG6YwVAHqmwhEn1fC3Je7XCZteGcx4zRSArXGzWVonceUGkiZgXY5fjnF6JA8RFL",
  "key36": "hWft9oY4CKpruEBL4vN9Bx5wN2LBahP2zguVofWCYts71Usx93cQbg2h4p4iZf9FNRpzGybUJWKPdF9TxsDBnUc",
  "key37": "2dpdT5RsAQhxqTRRPH5CJup3RW7KBJc5jwfVUmgBzo56tt2jSYKk3kKVtfkeCQwwwLQG96Dt7VoFcP17x9E5Etqi",
  "key38": "2BCkGaDJ7K3JpA88ES2cWGZBJa8u31987jJJU4GX8he7yrLgi4591xa2jm3joLvgf5pn2NjTxqbHD5qGTQ3tV9py"
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
