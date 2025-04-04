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
    "3jFmj2uW4AEjrF7uuU1b1tkrtsniYoPLZFDbVEmVCV55UJ7M9oweWa3XYgw1THQLG5wqvDFxvfmS4kYeeyVqhXrc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u9zNKnFMKrgW8EFqNBckPBUJxpFRhH7fwCArDqsrinJHwhiMXWyaQujM7kEy5pDAPGTVpNw8dPAuoC5RMhJKiuX",
  "key1": "SHPV7ShTixtYvkcCA4vA2mt72Rc4QpZDVQjEor5npxUBxzKWiySgk8KGdhUTdudbbRtymzDvzMEqby3A9Juc2Xv",
  "key2": "26Nm81fVxJFZULxqGtxaP9k8UGnsyBLpxh5NMncgRjiDf9rkXpsdAsSgzhr4svTxnYntLHVpzxCenknJG2zDHFjG",
  "key3": "3nsr8WXDHnxjNqBFA4EQVK95W9CcmgofjguLsZxMwa8bG91KNQys9yXAp9jQs7SxeSMaV7yZYnge2x3JJvodEQ91",
  "key4": "4NW4oWasABDbpyWvLyyVWyYNB5UfScnSBZoqgz2Q9L5Y7NS7iwuhnqXPqHj5dMmqeEBmXwyTQUmPzrE6aH56bnHW",
  "key5": "2fjPSSR7Tj8ftoE1oD4o1iv93cvd3C7ritkRPAxxyqMn56nw4oa5FUUXevJMFREiwA9v9yiuGAnPqhEsjsdu723V",
  "key6": "3oZEs6AzpiKAw3XUuejbXVjUxwomXsMxoxoHCXnaHz1dWjrWdQMkPKAY4tdzj6kudKAwTPfutdS25CeV7cH1JvRW",
  "key7": "3sDDMn9ComanJoxgo6Ubsx9bdnPAQ1imzwCMkWfrYwZqehkYQSQVu9LPX11sX27Zf8JomV8UNNLN7JqfnpSAtUoh",
  "key8": "5rLfeGdR6eyVKaC18LU5yW83xVV1kvwWDxgbEGfQES96nn5uhFzu2iivi1cUjjzXVVJUBTTpGqrWTQPU85RwxhQp",
  "key9": "31eh1XSZkRrWLZ2pLVKCMqMdQJjg4sHujArFyLuEZrVayEyFeAFrU5mWLVTB5B34Eh3uYursv1Yo81bTpT35QCCs",
  "key10": "2XKtUd2X1tfSUhcqXfhHJ1mtyoVzLPvDu6MHT6ZLGjjw4gvW9ZLNRqvB3PVkKgWKzSMHJLm6RkUTq6h1ekG4cjrQ",
  "key11": "n5JKUEoZggd8pLnxSkgc1BiPtsoZdvVYSKyAcJcAtrx9g5bktGNs1PKmuC5cNQVmjeR2JrZRKHeBuHQmF6nuTBE",
  "key12": "3paFWQAsdC29DYWEjVJ4pbX1XgEdJfHFJedYmEEeEWimUbCRawVWr3s8vcTANi9gb6hEZM2PrLM37FjYvbx9SEhp",
  "key13": "4t6JH6A7uChYPZoNCgvLXeWGu3ZfHMqgvTJQeHiN5HAqq93Y2Tv8DZTyYDf4eDwu2VVq2uRZ4haViWsCwESswpZJ",
  "key14": "3VA5xaP4ti6k21XmpBmB9KE9bCnfci6FqQ4YRfjgDt6K7vi8HdeAfA1XbpbZCWydSASMVu3Rozrz5kcLZ6hnxK9R",
  "key15": "5Te3kXWTtqqbvXaLrHXGtaGqXqJeEsf55WLcLwUuvq3twqRhYBBMJ9Jqh3VBVtWkebhtdSDyMTnHsGmosGkzt7xw",
  "key16": "4X5CeGXtvJSkza2nSCG9x1xJnDiJtxWnJQcJEp9h5HrKdmtknbktQ8GYVNHapEzCHtUcYxNA2t7NP2qqSvD87oh8",
  "key17": "3DGJEaucYUW9r23b59Hb7iCTUquHE8CHyraFbi96uJUnxWriusLMHu1zk2FN64VsBL2nAFAm8dUBAqmuu24ZfSch",
  "key18": "2hRrPKdDVg3EJ77a4atGKZdiEzwrF11Rt2vDQiSQx7eXLCqJWRKLrqj3KyAFZ24NiJHS3erHmj5cRFuH8fuiydXD",
  "key19": "32C3LiU2ZTKZMaf3LKY7WxZaJrzb5wF3RbY9FyHzLjC4e1gDoqRaQqYhRSWZvadMxBYia9iAVVMmVtscgwtndL4C",
  "key20": "2HAQJW3JYNcSYapQTR8tKth4JWYicaDp8FefsFhEZZc7rjCFbfSsMv9Dnq8wTtxxGpCjuAHRDcWnREdvJc9ZGxWE",
  "key21": "FvcQzgBMBvSnHLy6EuoMVr6h6NERScAauyKWdUyix1PVwb8MyxYhKqdxWyao2PM6wNJXHr8TxaWP1bod6YLgJ9m",
  "key22": "PikqCLq3N73GYjrrkmRQ8wyfrTCYnWNR4ZXZYjB3qES88mkx4JY3GfcirUBhpDpReWzxkUhoe5RgRK3CKDRmJQ4",
  "key23": "L4TZQUYYt7bS3THp6FXZKyjPLzUfWAdccF6ppTE2VVQqKXo2y81gekGK2cuBA5ukisYCp9QcVmpdXsKuHE9bSQ5",
  "key24": "41APB9c1v6EwFygbr49PgsdRsp3qQfRGQj98e2yY7XqQATrQVVicrRC1Yps8W6FM54zZBM3fjzViPQEKVWy3Hj61",
  "key25": "5ncGkeqqXDrLgoDcBoQFq3iAAouhxvYWGPGkBmHXLzmGh73PPkEjJpXxuEiRJL76J4ACBM67Ar7Bx953Y2vYukjL",
  "key26": "2G4qZ78NYgxmQhvsLnqAe92FYgD5e62HbkBa4i4HsyNo5RES29AY8BdiE8Q9W7hFAbTd27XmjxXX2qazCumcAo2U",
  "key27": "4y5irTPHSRvjzRojszWg4QF56U64xjoR21Qnj5QKrmyj2NqWqAMSzQkzyE6EqHHBu4M2vSBajdtYyJ6JQsWVXFdJ",
  "key28": "miM2BaUtdwK8AQgKcL3sRmFDGLPoe3CZZ44WHNTSvzkD59pVo7aFhNwxih5sCAsqomfuk36NNERqQd4pw5soAZU",
  "key29": "5Cd3GXXKkQKesnsCZNRfnGZPaUjMtZiWw54eTwa7auZpGoTaPgf5zPBgjb1aFq923FAp1Yb5WQb2ECgyPGqKZU1C",
  "key30": "35sEWCcmpFn3gG2D27W8rxuUQKq3jShGtrT6hkqhnfAJyNBCNixvE8jymDqJ8xHHDrLaFw183iM3dwd5WBi3cXsZ",
  "key31": "5VUZGSMuAErxLecBtDRqH6yZ1ZAfMUPTj6VdMopesC7LubvACDYJoTcqSvrcavCgakwEgygoWbw6aKp3bmBu6Bq",
  "key32": "5QX7BYEebmx982B22QR5cm7TN6iJAXt32XNSCNmZKq74gBfHUKFZefBnXeUP6a3E83sp9vtjdfqfvS8hiyoQ6YFX",
  "key33": "4sZqwifa4F8GTXqC8gJaqBYhCEQJGdVhJtjRoMXnqTCwkvHMQCgsRLcBfYDrnFM5DBWC7qxiN3x5JwJmUiVwAxmN",
  "key34": "4xyoYgydeRcypzYp5ijzB7ZqRUECLSATTxYDGaJWA1pXK7ipTxmqrGQ2tC4EtLynWdJnf8EePw2p31DoNGzpdiJx",
  "key35": "3BMxrYuBLynJEvf2WXRcwJQa6HztbtMyJyz6hUMrdt81vBfzEReMQKWj9XjgWqsmmPLjhdWQ3vfDCYTCjqCsFj9H",
  "key36": "4K7LuyWojKfULn9DnjbCBDH3viaEGUmXTs2o1pjSH5PRc74ePV9C61FnbsAdFM72a5nrshpNdGL5n5NaKvmgm7YD",
  "key37": "3Mr58wfUt6HXSVw2sF39CFChnQECF4s3zZhELgthJnYgJhbNuruM3NvUP8dAWFwjs7SGXHyVZfonJmbubKe4j22b",
  "key38": "41LHTiD75WUe8ZZbi6DzzxLnoMSi2iiEyrRcCnMWC9MYTdRecbpyTXKbFAJZi7kUVPL8NDsNDgZdXzFFwB13ky1k",
  "key39": "4Bhmy9oYTDyVuEfZRZD6rRhmTHWCimsWmvmkg2yXZzj5LmnUPz5NNLe1rPgzrNE9un2Tasq7sFGWPwGuUHWgQA7w",
  "key40": "4KZThMCxdPTXqq7seTA4H3GwxZXvAbeRYVeQbeUsF56u6e4k3pQXYTJTYJ4i426EsaGWKwaotb2CC3HCevVkkoMw",
  "key41": "2UPcpomHc5M5kmTjhZA1YCHzwo7u1f6q5rdKrh34YqpooQTwsNkSktfpAiHaokbWPyzJmcFFtMEPfCJgSKgK1uxk",
  "key42": "5C2dip9MuMi4wMQFvVw6q8YDTSmcKcv25aeeswXD9mAVpjKbkkbL57iR3sPByAyMdCKQ5Zuh8ASyK9axzWN6qXy4",
  "key43": "289wAhvvcoYBtwhijpf9QRdtpFeLqnDdnKna9VHdbrcssWxPKYCZiaUdaU2gQCt8ikgWw51MHTVQbFY6tjVdgJiB",
  "key44": "52xFDGrMJPe9VshZ7r91DxPxNLrp8ySWrRym7WTDmhn3XmuBGkQDUZ6YAaRWNjuMsCm5oebxYnBQYwjr5H4GcpiR",
  "key45": "58XvTtrVrZeeZQBdvp88asgUfb5xjkNuyoK7iWSpXqCNQYuX4W1EqGSaYY432KYiSdymun1uSsF89iZ5Xhrg6wc8"
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
