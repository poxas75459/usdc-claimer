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
    "2FbKrLAT49Q33V7rEMFBwmvc57JWcJ1C8DmNSCSAR1DJBEHscV19hrXdc85cB8ruigFvuokKwPec4kLgube7G5Jw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x2XVHLYtQkqSGak6krnhUjXZm2gwGUsGDdvjexN51hDvNzcR3xpdgLL6Zf6idUmJEwAenFJLzQ2TMSVGo8CXNaX",
  "key1": "2vAa4quer8bss7j9PjyFByZzC13BZhr1vHmNnwovfj8oY4gj31bzBCzzwrvw71qCDWc7dLpfQAkKSodUk1qiQ3rP",
  "key2": "WM3Kr4VcGC9u5razq7ZPJrjViqHH3BRf4tk6Gcm223GdEN3haR4Cr84jDsYcpTptxwkDMHZBDzYAfof7mhSwcqo",
  "key3": "3CmKSmj6W2XWqquXTt5FZpWJxotD1He3foAn9umAxnFhj37DBFkmLjkEhz3h5kyg5Ar61io14tPzVGq3hYEJQ39f",
  "key4": "2dvWJv5Hu7rS2VdX3C33tUtS5jykd2thAkmozsJvFrijgTCtfNXLrxTyP7uDwMuwA1azzEAojuKj7T2VhsDkLoei",
  "key5": "4xVSqwmZVH4C1czmfxvANeCFkCve19pvTNh5cgd2wo9Dit4veEGSD4aSQMhihtichT28drDSUvgYTvDcDLMLXyZX",
  "key6": "2MP2zQxo2oZH8pynZJr1s3pSSrxQzF4xh3KGK3gAZNJvrrNnHFaXSLgcwo2cVbF3at4m3WzBbavekKoom94L1vgz",
  "key7": "2BhRSCh4D3RwDQSEh1PYVyoqgpTHDcY9WEVpcHj6ed6cpY4XfYt1bwFYwFWspqXxydscZZva7ExN1b1k9UyBdiH3",
  "key8": "4PgBrSuDjnfH3XxCRBpYDLLzSktAPnNXd6oEdbtMU5PMu6KKoMLSAZ6eZgE7QY9JbSa62LsM6uFRpYnasHo87mNe",
  "key9": "omGwXH7pDVLRQeDJQkfhWqAtpoLLj5DDjJoTCuX6hWGbaXUTjAfQaDeA8qfiyyiVE5rbgdimwTwVmvjkgjVpQJb",
  "key10": "3kWEVcZAum9WHy33MogbuisUrQHW16YesPhYEXuE3igJMLXeyVeqvYczztazYU2eb7cQfzDZN1TSx1PBnqjLFi84",
  "key11": "t5QihUVe7nxAhuTL4pFXkmbH3rM17HnyQBEiZtG6x88kCK3HAeELexJpyZYumXzZrHsh9JYpZPyFuD7EheChy3K",
  "key12": "5NFiGxKt7xZkovHqpRm8p6fAs7HGW3CbfD9M6budZV2B3zUcgHN5KtxkKaeuNLyJvsgbUntcWCbLDUfUKXXFDZ82",
  "key13": "3Em4DaZYZP6CgCk9XnSmJGnMCiYmrTSKuhj6785J4HENtW2WGk154ha88yq7AE4bRmizyZtyUNg2fRt4na4v16ch",
  "key14": "5TxuN1kFpwWuWnwBBEw2QhRkhV9XqTQ5Rjdwi39PfzeatNfMaRbKc221GBEJLgrenhqeCPCUp7ECgSafrf9N9T4u",
  "key15": "3Xb3pTbeJNWsF2mi4H1b3rMB99UrF5UV9TGuPR4FPjTDR2anmcbQFk2x1d3mzqDRweWTPDcLqva6Y6A2ru1yVQBj",
  "key16": "4q9a7P7aHXNy3sbprbBCqZv8tB6xosNoMab2wLaQ5GXkdRfzsdpxuT1PzzE1wtHMi81zjZcjHokT3BuRDQQCDK2V",
  "key17": "66JEPWRMh5j1yPLz5eMJbsCEQsCEQiLJP7J3BDDPp464A3skCegDvBz2Jzw97wgBtyD1pnvrMZXgUQQPXkXZdf8N",
  "key18": "4cCKwRNo4LMy3RTLuf5bjVgyYwJaV2G9Go8GrQTJKB3VE6XQWg3sSubfMRQUX5Y9pKmq6V6HmRmjLRacbDCpNs1T",
  "key19": "44tSpWpmgRYB4VUwT5wC6yUTdMbmAExxAhgeQibFwRLqAZk7cdwG4WVesBvT4MZRgh9ufCHNcUMMevrGJ3qkeL9V",
  "key20": "3YwKmi5jiEDQHp7xsX7PAo3hWHUGCzRCXp9b1F4xfeGjuLnmKjS7weCsoUGi3XHUGuPsujr5Da4WvwPyq6uZAupw",
  "key21": "5qQkzk2UmqgbMSWXEAjREPRsdJrCdiN1TWDPLcZXNw4BjgXbfSUavtFKcHroWKTXAyoNSUPneq1iZkKKqff4dfnZ",
  "key22": "59z9SGqMYp52o3vEpjN8HkQMzyRG3jPMZ17KnmJEo1YpxvoFHqkA5qsoorJEJgWjfW33WzNGYrFiFv7UYoys1gkQ",
  "key23": "33RoMMnwpvmtJmeNFxpqCpx9JPVpqhweaWcYdGiL6pXG9yXC134xMsSkU4N59HqGzjkVbmqcvizcfoGXYoFrJZQt",
  "key24": "4opdrgqMVW4sFJsBn1JP4dB7ARfdQqDCpmdmvVgxtPFT9AExpeE28gE33UdaXRDXEgjsdJJJvgtvaBvc4Ku79Z5Y",
  "key25": "5TsnXcU1zSDRgrpgM5LxV5kCdoUzAAyu23kW5JpaCJiBN2BybwrqY9d9E45trE9ESuidF1hh49AaQ5qc7YBUvP5f",
  "key26": "3yvkK4v5ifgiGAjL56PDgJzsgTf5sKHJjEAuq25hCExXkpN3qoeYKJomLGf72C5DRmCnVpHZJY8mbnBzNUW2zXQt",
  "key27": "2cX7oCrDmgza4W2aAb5FKJ6EdYg5W5dFWsCF21ChMHb2MrsC562qrg9wubnoowzXJyQ6cJYsUoamMkE6JYyf3s6t",
  "key28": "3pKjGXXbWQWBqpX9pZA9YfhaQDzA8NgA4J5xUke4JdccbCYpA4c2xmGNGuzHPgvYrFQqLVuZA2Zfoj4E2NNvWase",
  "key29": "5E8DGCtqxipPNqq8MsJ77vPdRXBqJ9b7fL3S39898SdrPotkWYMF4H82TJpUgHdDiBpFiFRuufTc19duW8PWZNSq",
  "key30": "59ymuPHPrCbguKPBfMKxQwrb2D6BQZpPPwqxzQZJyBnjFAidsjcgrMjygiHkadVrzvFFV95X5yjYYcu3FJ53bvAi",
  "key31": "5E1Z6o1eGooTrvs11KhDyxZdVVngH9i5Sv6JVWsFHHUPfPVaSPMcwbV8p9zA2XkY6ZNDxFE3mdHsC4Qr9xSfm6bZ",
  "key32": "4BdQQ8rfpbDz3uPGxcJBEUg3Ltm4LpMDzzLUY8kwJ3K8czxwquXeFYXAxSvwFVcssdhpqLmKp93yV1QYqpwm9kME",
  "key33": "38FKtkskQyoXZcnHHoXJQ6gdXm77kLrt7qhXS1TwB8ePpo4BAmi9bzMYwZEew8ynfXeLTFs4DVKABCk2henbxkd2",
  "key34": "43DjhjdkCG5hseLcUEN8A1vKUked8NUABZQEUrB3DnwVaqR7wxGUaRp6CQbFSN17QePRcaZY4oYVs8Bet4x1gtZo",
  "key35": "ZcRXT2e5hXdB3XNVVWfpKPmYUFfrGXUATDRx9yjgRWmfiE9LZ4ytUBdyUbSQ8PvxhJYqgce4Jso8yWaLzgxws6R",
  "key36": "3nNX6GUTrV1yguDG2gMz6yyE89JV2g6v3EHbNGaEMiwWCmDTqJwKRjFjXigWVRokSLnULyfDS9ra65ayyFApKLVU",
  "key37": "5G1Kw41CxSnHLJjmFiY73D85rv4UXEQUTNNvGbVBeB565CXe2ijbCsc2ZYMDHdgxwuWpWRskKxDnd99Yuh7hMbxT",
  "key38": "5cZBzEsJg3dMZepiSHgEsu43gevS7fCyKAoyFjFtf4UScCVAMWVigwgh8H8gRJB5ipfXydHntGcasBcQbC8VJjxw",
  "key39": "4zUTv9x5wyWcT8mRvyS962m7ivPusVKuLaMcTezrkiHTSsNy5MfXCndsNYG5LUfW6bxtBQvcrUXgJacXaJcg2hBb",
  "key40": "2Bdf9axqZvdDVA3YrgpjodVoSPQUu7RVz8eypt6UrdnufA172oGGZjhqYD1UdU6tFtErJ74AmaTZTNwfoq4AhbX9",
  "key41": "3FptpRK139sbqKYK3uaUHStUsRb6joMvM4aXPUTt9DudjqGagenfbqYqsw2qvRFtXGPNByxLRZvAPazgSnp7NaL4",
  "key42": "5JFbt4YKkH36CRurhZ8rxHXhGTuSVXCUnQjokue3RaFSBxBMV9b6Zd9Ub2yWDAoAA5MHc9X9dtCnYqeKLE9oxdZ7",
  "key43": "67XPi9oQLrW5vEQAWBKqdRyp3ig5T2B63RkQFthtQnsTibDn5cxNpZqN5ZL7UJsrMCNjegsmXC9sRSge6f1WHAno",
  "key44": "5g9kUDsk6VZxSbpL1Xebx4j8tMADuqMPzmxjuQtxVX33oVWkiPJwBkwy4RhiYcJVtXTYttpr6XGh8NbwdSmVTUvB",
  "key45": "2zC9rXtKaMda5aUEaQjC3vePnC5opeMJxbrcWHj8CGjr33ofCMXnHxBHTo6779ZVnezXrb4epVSkv7Svf56fsBtE",
  "key46": "48TphbnuzuvT2UH2vKCQKHa2KPk7YzDa9WbhRQQfFS695kEtJ27Kn9nLFC5zrrE6NDSzCG6E16zaYb1W6TUQAMUD",
  "key47": "4MJc4JcxnS8njw1jkPR48CVPxMgA8ZkrT3SSCLQ2cwzTQr8bdtGhsEjwzZnnfkxqAn2qWE3J7TSEVLYuzc967k8d",
  "key48": "2cY2hU51PShQEKeDpKpxJmaJt6KwumU3sVvxqWkUrR8Y9dGjRmnumjEDCvbQ6ZX3DeNUW1Y99ToSQo7nKoHMTyts",
  "key49": "534dHAWLdq3MDg7tmdhWR8ktgdoNY9GKF7TUSfDbC8je4GK14ms9FnvrXf9R6z2Z99vD2dUywcpKvAteEnbzsKJc"
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
