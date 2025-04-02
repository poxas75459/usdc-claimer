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
    "5VHYgrzZuGcm4YMckGTRC3njxznKWDSuSqABKgYXCqGvqU3VfZ5h985Za231aWbo4UfBAwQM3azcHzqLcgJ33xpq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z6pHVPULHgqL6fc8JT6NJotyvz5ZW9JYBxkFbemU48d3oE246KKbucuJsutSrBzLaEzsqS8wx4iJLkqiXUFiw5F",
  "key1": "5kQo9WeGqU59sYyDzx8HcZwYt6pDQNLndyLFErmfT4ujeWr1EJpEqMBKvcWPBZJH8Ca3ATp5Mm4j6RwFGXmhmE9N",
  "key2": "3JuTYc1dArWxkkrT9Dwyzpmx5GSxJMPpNDRKAsAMn4ddhVkYJrGSNi6AcQnfHr85coaEu8vmKaY2pvqTw14TPw1d",
  "key3": "4a9nJVQU4eS1vL6dspGm4MY4ThU5XmTed8VqJ3ypsSu7FkdeoHkMgnBbp2NoNAYhzYAfh2HzDHyddURRSfoUXks6",
  "key4": "Q6L1qsemxqLXRqN6Kb2U1KxCJzBzFPfG68uPRwy9XYs2hug1ZRXNk9RxFKchx1xBenBAiuQNby8sfcbSdgffPuZ",
  "key5": "43vsesfVQnBpYshwxEqKGLivVFV4kddW7jVQK6sdJyN81xYe8c7Sh6uwuqKGC5iqKHrj6xCCc5ZPMuPaPrLmeUb3",
  "key6": "3k5g6p7vhKdwGf7Rh8WTjdj2jvmxS8cWHVNgTEpLmn1mM4UPhmt457tdnRjz7uGRsPBFWb2dax5sPvzxRqS6EfAg",
  "key7": "2uwQZhhNwjWyefkAr1KizvC7WXV4xeYNhXSBAt6V4gFczPvD9o319oXnaJyeDnSZA11v3qxnrPH1DTReNauai4zQ",
  "key8": "5zdhMXyTAWMvnvSg1JpecewNZHrXfkmoZsaJLJp9nUJBvP9R8JbzaYJzY5xcNcgApfSTCqcR4WXSrGyf6HSbFZQT",
  "key9": "omxT7wuwfCUo1pe5rWTNr8WDxMqGXCXkupfeCBwpXdbJFvdQCqbRwwE5Kj6vUGZM6Bj1YrT5sK3SxZa7nSmJzMu",
  "key10": "Ddpq4gj4y5xtnWfa2BC3kfg9Vc7JDQaJ6VGcSGnnq6c4PUhFQgrf7EaqWF5db6udTPhy3QGVyxhzrjvJtKUNwr1",
  "key11": "V5gUqAGuzC7GocmQisRiCXx9h6b5G1bt1Afwg6JwrBQGMupRWH85cvDQiSi8rVZziGzk9DU3DjQ58QVWqBAgSnk",
  "key12": "NDUwnrd8rbCaW51b6MqAeXKMM92NxgiHwZDFr2Gcg8uUMuCCKu1FC2dRGWr6w2WXkTXrx632xJwJnx9w3aPUkUC",
  "key13": "4hGxFUJ214yNtEjTezpf1aTYYGiEnmDZEn2gpD9y5r2CZS4KsTLtpuEtQ6C8WrVfABLoexJrDMNNatj6o5gCUrmz",
  "key14": "47n5pd7XhopKP4m5gdxpH2jwSHNNZLS9M2h583tfTFy6F8PvxTEzuo2mR6zTptjCQ37ndkihmvxsKCKgxki1jBGL",
  "key15": "5NrjqFVkqc12RzShgouembqShjqJcxmVsoKoCE1BU9di7YmkgfshontJpt9DsVUmudsVqeLwF5AHmvAW3VbSFHt7",
  "key16": "5rU6DwGe9aVRbzGtXdYsVEMJNWAufYbddJesGrW1BuBcE1BNi36TJQb169npAuuwrd95c86tpDqaqxjcQPkbD3ij",
  "key17": "3eU2swx7H2fq2yi7ghjyUz1Kmqv8cCWyZyBZJD3UT6NV1FxbvRdjcXXAVRE8M6JVrs37oT9NeJZiojtgbvsZcYLY",
  "key18": "3h3ZLkRV4k5RHeH3FQaW8bxR6jw2rBiidMdaT3knkkrR1S6JgwUrSxP7FsRLsT6MsTpQ7AgXNPACAtQAwNaYbLAi",
  "key19": "2XMEcmJ1soDY6p1s6NPSQgrKa4zYs8QhCNGNFrsU3sK8STkSRxR76zKJV3PQQevP5JUAvBZXpqdyBXpKiDZqw5r7",
  "key20": "mYxMNcD3mqBFFGxPP9U9WmgSbE6T7a3Tt2kR2SPj6SfPjRQ2XTfedU4DS4zsHfRnKABfBWgz2tzAdSpaZGJqqLw",
  "key21": "5wywrrFwRh4RLPUThk5RmjcSRTmk17a6mgun82ncd7hEnEWtwP6jyxMKTyot5rEnn6p1b1ZuuqkFhdC8S1Tj6qyh",
  "key22": "ceanjnmYpFLX5zUCeXDKc1AUbo6pdgyX9bEggjR4wG4oshbpVZkZTfGdZ2Y1nbAtodrtB2aovvJEfBEgLqaUqeE",
  "key23": "HLMysiZcT6vUmmBfA1ZVV8mWFrBwbKvwonyVR7RHuVbkBoJBje9AAj7sJD4yu8txfMcRF7jFEaHxvaf9ma4bYWQ",
  "key24": "bsYrqFxxAerjAZAYAyQ9wZe3dp86neXkQMKQ1JGLqzeh4HtHPsNTDdVT27bQ8PRpmeQDXpCF33MLYNv964of8WM",
  "key25": "21Y4QqwkY7aZ6BH9zRh2mu71nnrgAik4twcHKL3aiFFK2NiYPdRgrZzy3osF7deDXtZmYcJGpG7WsCNS8AuS1DoS",
  "key26": "2jaEpWvEMxv9k3pDNhhx9UivciCGMsFR6dgWG4HVKERxaNpLpwo3VvujQW3MNwEzCjif5ckEaVQtN8WxJXoqt5ED",
  "key27": "2147jh3XAk41JWnbhrnu2nJzTML528JFug1jkuYg8AgFABpkXNYNhH71uZCNsnXZrAGonMjf12TNKQQYBdTN8P86",
  "key28": "28DVSWsxCgjk5cHE1c4UVzzp7P592WsSbyhMojRJwwi21E7RFsbVgyeJkLSQvzf6ddiCDHBqdJiUaT8rhp4cLBba",
  "key29": "3KbTrqU7SJJr95GcUcvkPc9NqSQA8VYozsYG9zMQUZHv6uzcHkcF6zv3bV44uxLkA7veSAayoxP8zxaukaLgjnQE",
  "key30": "4xZRsCWK29nc6AoFWSEFrhvcvc9LVPa3NLxVPZgAhrGvSCq8n1Nq8juqxK6GxxXgZByKkc71xoiKsDZUkakM2rtq",
  "key31": "3ZZ9qW2GxKQJU8fTpqXBBERn8PhzcJiY5NrpdyuoCyBttVYSAT9BnwxMxW5K6kEwdcyDDfGqehZJLT5qXk3XJMzQ",
  "key32": "qbhGHoF69kpyAxcF8zoMriQMLUv9Lq1AJnketASfv4xLJxsiLm8ut8u2wP2vBd8ikPfdk6nYrSTKzP6wftyHvPM",
  "key33": "414FTAr85s5j4ZkB9KWEaJjjCkAV3X9SgSbE2gnB9u1bMuF6X4tUmwE3MWNGV3BfxDmLwEGQGRg1dxkjntEvrv8y",
  "key34": "4GaAvCMisF2oFCiLmain84dap4PNAh2k3gV3PFjDRpCFEo1aeDCcVqHELGBXryvTiefcDxD5Y7EDnFN8Hksx3vpB",
  "key35": "3HkeGg7Az6yEed6HsAqTcJQRcPX54W5zU4DSJCoPhHgXEG9iDWt2rPd9wUzjn7BVBw26D6oEmQg77RZzmLEKRUX",
  "key36": "4TB3scX93s9SrTTkCkuDHZU2sA3fz8tTWQ1EN2Moh8e4hjuaqkQaJungtc2MvJU2VbEzu2PTxp1ErFJsNNakvqtX",
  "key37": "5sVkuJ2D3ZLRthUzfCGV5psu2SWcRxbtEvNatSaZPT73bdokaDNb8qsEGR5iq1XUHznLcNVRupT7GYNXR3fm1jKn",
  "key38": "2u8LUpWXJUjXreoGwNZbP8XEKU8Pp4e2zDUg1425gzhLbxcDKKXmZm2qsC9ztPyu2PumDBVb3jB7dwVd9kFMV8AD",
  "key39": "5aHuWMiWnP27p75TEvtnEeBE4KM38QxZksghqoZsPtLnazNfxxLePX9KYvH3g4iJP4DUfPMCMCX4Ya97ExkDCVCH",
  "key40": "2PG67jUSNX1osYeuRt15GBtsLsm6LY8CBxbZuXQsebfytuxYtemwGEUTZxZRt9a76a2MiyqvuM9vhKp11LANi121",
  "key41": "5j4QFCnZnfvC6x5YEuQV2QhapzXWpdxw2s3qZh5Wy2qjv2M1JH8jXQZVaDt6qkwtd4nsR6xcauVYmWAXjDJRynZL",
  "key42": "5jijVqeDzu7g3AJqQQCRBmW79KuLpApN37u6sGzx7R13dvefCHhcXwDFGfDXRsAaCjkuWJhp5v7fJ77D7T45PiwG",
  "key43": "3UvXG3w1KdiURNweXb3NekC6tGLU3DHF4EpscrM2rpuPZPSgee2sJYy4YTK3LRJTtvyhd7qspESWJ3EpVYH8GY2q",
  "key44": "5VswBGvDWH1pYTdnuzKANpgdenjpMEuHhwsbzxDqcteZYFREMggxxKFcrxy6p5wQkdKqQuUu5kTrXyEbeArRHhP7",
  "key45": "9fxeqbfLZ9B4ZEJcRoVq26infxXxDeQvV8w98jhtZGf2QMAchruiKpMNcQW8HK3kPEQbkHPd226caF9bQZ7bmxd",
  "key46": "38i6tW5PPW7hrE3tMQNpAfzZoFasNtUDzyDGSmrHbnnjRLuebB5xzGmun3FEh9XRJVU7A7NY7yAcsqd37bjDS9WH",
  "key47": "oUvrr5EF29sH7d3REcpKvvMM3kiKh35d8xHroU9LuG8f2WsymTotobkzkLQZYDXzGfJcejtBPxqEBz5TtCKE7of",
  "key48": "4VeqcCG9gB4wvbAFwgvCFj5nabAtoEYMdjzt1rBpkPz8S4pxeHq4Rw1hfeQAP1HpWJnMq9W7gwiwcQoXcWNk7H2P"
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
