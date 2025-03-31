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
    "a9i9cTzg3btLwUrXDwfevagRxqK5KBRJKKUPuWrPLQcdiS9zJEUXUJA99tC5Qor8NmKmiwp4TaunHPJzx9Fpnw1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TJXWcNajXX37TLW8ShMbXAc5o7K276M6gLJGt35v2RkCfYwykwhpSWgSBiL9xYt8Fv1HXEaXvxxvSjP49xeR4cX",
  "key1": "3YCGBCztg5qYKUsbgvUYAqZddYHCa4qzfdjJu9YWWcahMavBBw8FwSvxq9dVtGP1Knj1D1P3XTCPwnpBdBSHV7VF",
  "key2": "4fpKCR9W9DPSVteBAY9BHrrma3ANwfuMp1RxVuXV4xzy93R4nf4isC8nmbkEnmbNHup1qMxgb814xPXHPQeioV26",
  "key3": "4z9g6TZ9TCqFcoUsAYSwMn2oZH44fDnRVTy4Q1739FeFxAKUi7euDsxxpvtetdhUaa7D2PerehgN2RzZkqp4ktC6",
  "key4": "5f8PMw6mfBnSFA2etGYQcMTP9cFYdbmkpm6R8na4wYWu7vYMXqSNa3uvjZKdVJj7fD93Gw2eHxEkmHcCRpU6Giof",
  "key5": "2BgLwtDJ78V417k496Lmn1ZHMuc4zSFCqDiaET2EX8agf2NxrypVih8Up1tsr2JcXRBNo4qXkfkBFQnqvseX8fUP",
  "key6": "2MczC6iuSmDNg8uGKWncXDp5AoK2CEJgva5U45doT1m7qQNN91iapgsEYGoSMzdiEN2toGuZXKEyBuWBbH7os2GY",
  "key7": "3ghwqtdzqZKhUwDVU7GAgYA54CVer17jWzPrRWmmybLoaX3L2muvC4QggCw2Qm5jfwunoZhekg9SP2nskoqxTAxD",
  "key8": "5CNiTDoBxYF7rFdEcKtqKi5ga4gSUpkcw6Ced3VcXCBFHQ1yxiJCs4U9WXT3h3zNfo4aGZBXTbkGdHw1EikQbDh2",
  "key9": "55uC9kH9tDdRJiYyKQbk5etFoWkTj2SnQL8Lo8vZeXsXxsZEkeyeudHapbVRDezcpwEd56qF9rT2QX1hAmPuTUqN",
  "key10": "mUKE3SvFhVaFh6HLc7qHwt61yyHfaCSKbKVocEELTEpYnBQXqf6JmSZ9KgVY6GnY7NkAvqnScdZwtn1h9nnxGU3",
  "key11": "4ZbQXjH88172ZubCcireUkYcSjfCbZnzY6K5TFJd93cqF14brzgqfvKt6KHe4xWKALLx88kPaAZ5w7J71PWHqVuR",
  "key12": "e8vi6hSqmbxuGAoKjRTzf4hHjKC7as6C1hdjZB1tNAgYhGQ3G9K2p6Momp2B1UkWgxDKjRe9vvty7VLjA1HUYXu",
  "key13": "3ksjKjTLbyggm9WJZxpV2UqGniK8dj3TYWYFUWy1yvQN3xMmEcQDpomvwzvx7qWPDxAcRKSJ8dQv6nkqHnT2nSAY",
  "key14": "2RCDysWCR2H1Q19UgeuZFTh3auaGHS7Nj8VDxJV3BYpJJNgudcNQdkDqFgRPffo2qRtX6ZLi2Q9hWz5rYT4x53z2",
  "key15": "47iXgszQcHzr3JVGeakeaqeBfY1Nfoh7pDTXNu2ny7QAjBrQKfnLVRBRNRzSXzvAe8htPzFNmjqNzAbNCHpdQr4U",
  "key16": "5iZzQvGR9dmZDKe95dtmXbKrjFqTMZvpB38gEvcgVKkYh5rZWgFyiVrVrM2g6kf6xxassmquomXhd4QWaE7A5PN6",
  "key17": "4RfLHEmpkY5HX8xbVM8mdRB2BuAqcpYVrmLMMkGwxFHP16ZvvMJFGdfyqAa1uhReDEmv1sf6iQbnHcnbaH2XsEmJ",
  "key18": "5ybhA4usosTjTi6FnXZTW1nJQXCJuSrDepiErox2TSCtpzLUCfD6xGcxeN5uAdaJERC16Tyr5HbFb5oyVBqkQbRa",
  "key19": "5Qu1rCzaqWHYQ2kQ1MhJzwRv5Uaq4nAK5FgPPqPiwDAhFbaVWSUhYpRthDc979KguwwPc2rUtdpWUwwRRYJ2JFza",
  "key20": "41tKtwYQyEi278GZ1EEpCJARu2wuNtz33gPuVZoNP99gRQQg9ZGkU2nw166U5RVKcPFGvFBmoPd9RCEVf4AYuvyW",
  "key21": "2jHWRoWMq2yexqZjLBESdSgQB6ypRidhVbTnK5mLWEzfizoF1S5cp3WJi1nXtCUHWzU6A51humBtbGh11j8X8B1n",
  "key22": "2Rii921hxrvhpPSp8t6XpxDpBmWkxX1kAJWjkPKRAmcBVetrexgK7GkDTifE2uUbBmXw9cbqrivWLu7cVB9Ao9pT",
  "key23": "4eNAMnVDZjRyzJoCEyxSniQj8RwDWXwepaU1vRAGeJVCEWg5i5p611jfvTEdYFa56apCiXMerGXjD8CSb5J1Wfck",
  "key24": "5gShWzgYd6SiEQ7GpF3VY54FPYv8H3gKAdybF59B3mYvWAWg26Gdk9qxBvVPsWmGbY8UjhaUr6kugW16RfpZ1y5c",
  "key25": "2B48nfyyWfkPiSmpNM1AB15HF4JWuGcjd2MepuUVAeiuC1w3jBhEEnYQgMVd6d3Bd3BLxumJgFT9AH6kv8WgN7fF",
  "key26": "5KABRuRMeQCG1MyGZ3nGmrvcysMgkywwjP4QSSLMebpjwkhgPmyTFUQ5bgHxc1WBrE7fL6sCu2jCGV5oYmvYXJSD",
  "key27": "3LrR1aaNLPxYrx2MUSmEkwSQK6kcQuxfwi9cWrZm1tPUKXgRFtHMXPmXQ5cSxjHZqWRPHPULseTFCkBYmcZ5GAD1",
  "key28": "3mDfbFhUU5Nt2fiLLpFuyUP22dCnp5Z9wGbm6dA12h7fRb38eDfwxeDynVV6FsvGnTcYPg1UHqfdJ6Essrrjv5Gg",
  "key29": "5cZfEncmtXbQWyBe7F4cBEJtWHZicYGAcViYDaNGYydrmjS4X11SwhCBgebYuXFrCz1Bbo95aPWwv2LeBgEEdyiB",
  "key30": "56CiHNJMsUzPGjQmwYQnf81T25CbBvDJQDg5EBNvPYLNQrJE3Yqu6AVGiVV7SKYzdL6akwNUhwugwgSLFC8Uc6Dz",
  "key31": "4mcLEFyZrVrijukeopGs8dZjteroP8meWkN5V4uRq58Cuo7BD669wFSMc7epofTWQXwwJRnhny6obWgWrM7joBrS",
  "key32": "4j3zkWArTGw6mJ6PykE1MxpbvpqPsAe9i5D9trqhsS5AzP5yjPhuctAgUPUwh7J8FkLiJY3hREcu1Tow1fCVtJE2",
  "key33": "2EkqkZH3ZaVUqp3GxLhYEJtjFLKSLaTRy4jtDixNfrGzEaUxnjfhEVstRknusYrnDxZXEFnhQFV3CpPq2v3tX73D",
  "key34": "62mKn5m1Xsskg7a5VmBtXmfEKw4QzFJu965Q7FMU9WRxw3yZQGK5ZJihCQ9KDVaznWkE6wJrrHM9VkohZfsPxgdR",
  "key35": "2d6fXmfUsuz42JK1rsTJKsg29WGBzSh7HmQseNKAENKsRbqbgon7gtqMvA4nECW3DqPwEZW4WGuPo1fwVhrUuBkq",
  "key36": "3JQbFkK46D1tFCxjFE21eZzL9XxnbysQmfiSnahgG5rcJCdjTxiiF4cVuAYvM14RgTV1o42Yxz1nKooURuENYG1D",
  "key37": "2KBi86pD2xS3KwAP6buJn6Mtfb9jeMLfHtFx9xrTrBmcCpLe6ShKg83w6v5ZuMsxy1SByZDcteppoBUdMphZsXvb",
  "key38": "63KNxR95xcRiBqY7mPGaRwUpTPJeysUxqTpn7gDNe9A2NyhbgEfpjL47788C1hYGveQSzqEDBh4JGmRCYasqAKuE",
  "key39": "3ymaDkwKpHRwHjdsRq6APeqGtftJfYFnbtKwrKdPJBmWF7ZGzhGBaDKhPmmxc2VPyGTwASh6rgt2bfzQErXdEzCG",
  "key40": "51xuFLEkB2SCaGKFwhqcP5hSuhy7XyEx6epLh4HmbkdXAcMR99tmNTRekqdvaStpACWp8wteN9Q2amWn4xFihuMc",
  "key41": "2reuofcRycaT9y2FrXf1tu7ow34FEAqjLJPeUuZuyTQKdEKYmNJn9Qrgi86ozGN8j2LbfRKQKe1a69TVkZwiMbXL",
  "key42": "4HtsB4jWq82QD7BMWcutp8ggoAQkj8heaZNbNUTw4Ji77rEqubh1j82AsGaQ8zpcaA6STcP7afFSr4Ak1AcH6FVA",
  "key43": "3pHsaQoHxRJ79kw7bgQ9tEToBdKaipES8u27R1pUzzaRfkbiazFjurG4AUr1QaAYWYA4s4WX7n87CUrVhcEpYCFF",
  "key44": "5w84LmmeHvJzS5HMRt1k5FYNcqgCzNLrPQmTyhGC17xNLN6B4cVateD7Tmgqxf8Xbd7o3e1GNFMsw39ca7VMpQpZ",
  "key45": "fxWyq92PduW4jsXYyMFVQk1C4Tfy3dtzGWnusu7Pf9DEyGQ2DmPyc5TZfA4srBvEPpkBKqyuuS1r48FyUJHv6UN",
  "key46": "2oGo3FS2CXkGmUrsx1mgpGpGyd3KUiP111iKNp7d9M1b7Q7Nv41mUxVnwvvKDJyNv7FXKVwMs7hFNyQx4jSe4v8t",
  "key47": "4mAw8GZypzieGi927zzpKykH5uFPGLKNTZTt2Kcyr6wVNCtffAxa1tXLN2vAoA2kf1Js5xdCSmBETNMJCqLf6r6c",
  "key48": "9YcvFKzmSw1siXPiPSGTffSpE1fiXwAq7Q1Hxd91yDUZ6eszDBsjEdxSxC42oQczGGPNnHyWexhRiFXtg1s6V2q",
  "key49": "2LYeso3zG8mr8ybshD1ho9QxBMpBwVLFXNpnW2xUTmmTWhoCTFSKRK5L7wo2LjT7PmaD76HPfUV5fWTjTMvWCL9a"
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
