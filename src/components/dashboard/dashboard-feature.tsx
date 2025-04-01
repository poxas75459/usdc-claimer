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
    "35QDscgjTXoW3uL5k6YY5hEQZAUi7DoLQgV5BMpFTzBT8G88QV5cuFwSFod13igeorYougPyDjnris2FGWViaxuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vggEanc7EQ5RD746Gp2XuLmT5uQkXX6pQAntuu7X4G4sse8KmMc2LcqFfgGLngsuUjf32cJNk7ZG7KCw7ULxWtZ",
  "key1": "6pt3wqr7bra6byZvpvAv1i3Mjejx1x1sQy7T8EUpNEgJc144Nfg7m939oa7aBeqQVpq1t95uJcHg8PwjyhKFT9t",
  "key2": "53eUdnLCvUmPKvZzgcNT8NJFiLZLTM56SMqMUAXUBUkZy761Ea5YCdgZ6dfMUbAHgUv9oHS4tX4HjdfvaPnYED2b",
  "key3": "5x3eCGy1JLMf966S6j8TjApCqAuKSi7Y9H4pDXTg55fw3QVgYGjPU1naHsZvabEtypgtcqXHBYSngKAxoqdQQ6ai",
  "key4": "5VYLEuKsin1iWrM7XgYDM3RJhDY96REPxyCwZBveCzkzFDAqHFsk2334xSVnxhYMardX5aL2JLhVBUUFUBzZ2QFK",
  "key5": "rszYrTJSKJ3cNTdWRNtvXKoCDib4o9GvKZngddqvrqTtwF5a2H4CX8xfsMWsPsA5rJ3cksZAUSiQYPwQJEKfWLH",
  "key6": "23crerJ2hzaYwkGtRn1deMFZ8wAZcriXz762973tUWjLHZJ83EfiyF2agZvTEU9KRiF8xd3kAdqAqSEj63sqktBr",
  "key7": "2EMCh4u8pkfyUn5YLVexRyB6eMgvEHT6krA4TdQCVDzmCv7PGWY1WSe6GcKEdRKWju1ZXwhXozYW1UFpJrQJwMEX",
  "key8": "5TJWZRiwDkXYpiK8bL4xtvPdZxUR4sG7iVQETTJ3EM4jwE4krsv1sx1AU33s4jQ3yokCMwTDPUDkiuBwFQqELV1Q",
  "key9": "iC5B5gxHECg2zUSf9xqziMh2pEYdBeo3H4jkznvzsaiyjfFYC6WHMA4NA2Vt2T9eto1dr2gEUF3RD9Tm4UsmDrb",
  "key10": "5GfcMMwe4KJ4QtTBiFYBhZPDR4AWLmHziNvQiXVytA4hQBRqn9ZwqgDPnASV5wzp9bpt6rKHtPChYtX2AwJNRwkv",
  "key11": "5Ws5bxEh76L3QLExPCGqSaNpM6QZ11fnbN8GnEEvEvZ8aawYoEvEgzyiNHwfNZru4jSQZXNNGKBZ7Kh9hb4rMfWx",
  "key12": "2kYAWhvf7JU8mf3hyA6L4XixfHiecvvENTP6gcffTEZbUnEDwuDg43fMvdgdDtC34ErBakqtxmVcvEUUNuY9GJqD",
  "key13": "4av2ADuUpKjp4faBVtUptTF9YzxiyEo6EZtH6JfGJiEkG1kbB8b5rztWeVzfje7JbK2RA3EbTpgN6GXkoYUZY2ww",
  "key14": "3RNWqhS1Sbs8JZbVwuZSRrGYMCP1AcbYjWq585TcR2tMo5is6gbvJAFxt3NkHTARVEJBQkk3mtMnrxZcf6BDudKG",
  "key15": "63Rdd9BXx6B3tW4imSvfU37dFUkrTPsJvgDzRizmxHdqpyMbgSfikumvy8PBjHeb5Zt4WxXbADS7h4bGd2Qt2sTZ",
  "key16": "3LAK3bXnCd6s8AdoHj5afdhxzowGSWxkotAr9i87yBEZr8k98SnSTKczXwRMQeQLTsW5FMbUKrnAAbPHMWxV3fpr",
  "key17": "2D4LsjiYH3t2jN97jxjRC3nhUQ7ReKqQhGqgNFngGbjPDSVBRK4Z1LJvwkVeFWx1n5NsUY5iaNhwi16D9ngAzq1F",
  "key18": "5xf2sY6HZb8SCSDzRuRQEazP5CZRCmmeXhoy6yMqdiNJgCtBF5JFfyrZ1cDAAUYKUSQVX8HTBxLXyNQgDXdQZjgR",
  "key19": "5353o54dnTdoR4rtebdKgK6zezWTKtMLnKXZWtArzu7pLgaNQHvhQdzBgL7TdmHACjZpd734SSVLXExR4bV7iXvV",
  "key20": "62cBAHSVXLD527NqPTMoJn3oE1Q6r7xazvhCoQAtUHDVTS3GNMKNTfh9m9gvSRVK46Aez7TxiavoA4xqxuGJ2FfG",
  "key21": "5EW6bMhGoYkmhu26msMwtqsL5iAspzaGvcGnou5sT2GJ9XGbL7DWMk1ECg2e3pEBvuDjs3hdpEusUDjkyo2WKXZA",
  "key22": "T2Ntq1jYiRhQ9L7qhmZyMVjdf1YnQPkve2paEow2VtytHdCVUgNC3BdSRdn6WhrvVVoSpW7RwxS6LUvLjLiJhkU",
  "key23": "xcVD1tkmn3oVSENEtnPd8FV2HrX9UHCd2q57Y7WVSA1dRgMJDXjAbmBnC9rL3Fu9uG8E5eof7B6jA8gMoJgn3fW",
  "key24": "TMj5Kn4JVkoFKbfDtwu5dZDwV6Wgsq7jsuJ686AS8Ze5rBY7dDZwkFVREqbcpj5bg9Ff5Jof1vzdPp7dPyTMCxK",
  "key25": "4yDigdS9n7GoKjPnGoVBha5GVbrGx9EZYQQJfAuzQaxgh9byqEBsRSsegi2ihhcfjgeV587C9uFsWWeWso7qgPgk",
  "key26": "5Tdg3yphfvLi9WpS6yBCFnUshoSpYdsKks3orKeBZ8QgNVrprFyrshCcMJQju1s3Y6xoxn1cdbYmQ1FeEbzY8mAT",
  "key27": "kiRJNeP4wogjYhxDcGz8zqJ2CFajV7Sq75DivXCMPi6r4FHH1gLpGJUYU8t6jo3KTrz8eDG84hUi5m8NigKmYHM",
  "key28": "48QXY5hour1zoUbxKTtESdzsdtg5u4gxfuFhzWFhzpRdFGEzFT5HfuTwc8xvPc5MQ8PH5Bb4o39fjzLigPsftN5r",
  "key29": "2bECWMmbdLKydviV8q1dU64dWtZx2uXaQvmvuARDjnwUydAJQP6zdsQNLFFp1RN7Vi4qzXHoBbdeF6z8rLLuEnjJ",
  "key30": "1cd35zGjWACwkdiw4WUGs9faQsXn9DD4sLwn1hGJnuMDVuxdKd11JrcwA3GMHnnatWxy3GmJ4Fm3q9D4CV18sRy",
  "key31": "29JKF7hRm8dwPoun3h4KRLaVf577dNc6nCMHYVDnJAzV6QvKqZpotaUuiThxHiamNsP9x2GiRfRZ9CyMfcpzV74x",
  "key32": "2nQ9daXsKg2ck23QTja4GMkZrctSzwU5Bt8HQwhALXgAw5vAxgTevS4i8gojBXgq5HQCCbjo2c4dbAmTny2k3JEB",
  "key33": "WcGSGHn8qdR6ioZUvqsYnAYRxTMmA92M9rPZPsg3ioqYvGFnR9AGBcqmHCZDfo3cFX4jz8Q85psqBGK3Wuj9X2o",
  "key34": "3mG4ohy9abGykvojgsSnmi9AAarwcsKzf1xYX8R3ML7U4gvg2Di6toS8YgCVXjZ3KjvXNRJYGYYsQ8oFyt6GA11M",
  "key35": "3PWgFFzw1pWnb5byWGAs6ZKj92EF7RnYmY6hoE7FZfrNUzGXmrfMKLoZcQKcAp6cC3YvXA9Av2mU7uTQSN3BVF2j",
  "key36": "4LzfuC126Gi9N9ikcJZvnXF8rT7RBQrTw6wjUvoDFtJHc6Z6HHGrcf3ippTnDt3f4zZZDox1o6SHahpJrEb5md3Z",
  "key37": "Zv3JLJpApTvSeidWkLQEcvDrZCqY9cMpbvCpVc66UyVVW3v3ZcYEhgtyGX2vTSf5AAZ8jqyZ1iNxHES6Rdv1h3J",
  "key38": "65voNJGrfH23bbuZdpdc1haTR6KdNnPBV1ErvV6cizSeGEiJvVVeYExVMGY7jtJ4FcMr2dEcuorigokvCbNVbjco",
  "key39": "4WYZ7snPJsvzyL3kzwKgG5R9wybrSxU42DmgPYGQhgsckPjQaxfKAuKpLAVajStnwsXskRUfvtnXqPvK8Mz2D6st",
  "key40": "3ibzJBx9Vvo9yZNMXnbCvd3mox7P9jTXkA4zFXVD9M49zDNJbzeLPxc46gfiAb7LsJVAg5CYHh7ux6PDA3SRXXDm",
  "key41": "25BauAPv9MYdXp2bhvSueAbJoWawJQPGJJrA8jakcppARy7g2owgrccPRGvfDB2TGmBm3mv2f2KNopSNyxgVhNDL",
  "key42": "2o3pCHFpPzcxGzTRf5SmbeRhdTW2Ta2Zdey9HA4WrUMafoxUX8KBMpNpUp6Siy1kqHjvNpuPyQbiazfQqyAiKUKz",
  "key43": "2jcoBLm3Aq6AyhWEngTGH2jxGki1eydYUr73xs1QEHBPX8xcXcehV9QGNTWnb7SwTiQB9YooNGTBoYGXhGVvymH2"
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
