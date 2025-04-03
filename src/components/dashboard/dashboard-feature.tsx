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
    "49oCngidJDwZJSFyLixtrmhiU9y2jKDf6tnwVuFKJAAiRR9ToMME46vQRFgAUC42tN9gMADLHbDwt5ChShrjFqso"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VHKcAAzMZSAHJxU27HJqhxYe178HMw238N5kGCfzMrZ2nDHZvuPXeQZ3CkKRa6nTZWt5PkRPTfPPCxUkfcXrmsA",
  "key1": "Ey1JQxjR1y8ziCN74hQEctyoQt8n42QCj65EKLku89hsnS4VKBJiKcMax66wyCpd5HEzzANB1kYG1Hzrkjv8X4d",
  "key2": "49xbjycvicYXFkfnERaJ8MWqUff6baQADmGwfSTuMfS8WZoGPEA7ppingc5Eac8Y8UrUKfsCoSBmpZHaUgG1UknY",
  "key3": "4fAZdrijSWc47tvz1wgBzvZfWCoaM8J2dXapZxKz1NVZgg8ERLDKFKqezM3XLWKYRTAAmTBWoVj7dckGLEKUiyD9",
  "key4": "4xuoxFNkxG9MoqFER8TdsStPCB2eJz43kfLrCrX3AdDTs6oMNiiZYTTqBchLD7QCnfn79xhvzS4TMSuNxGmETPuM",
  "key5": "2K7ebPQmrW7Lz6viTBVzDRFJiJJ6V2fCZS7H9aJcghf6J63BhdSq8NdG9wzzZmvjKTS7s4MzAAXPxfaUXDB9KNsY",
  "key6": "2vZYXGWqbK6mLNQFKAHhfDoJP3a9oajq1gEE1unde3AzjfRMpFgyhMb4qQs9ic9ypTrT3U87wFPCEtNQzfBHjpPq",
  "key7": "3WqYGZaqxX4obAgQoXBz4nbEXiKhmRcnjfjEr7NdYPiLaNfXHTFUCnQkQ56snehr1CSwi6BNwmjSPZ9DUriSapee",
  "key8": "2bSDt2X8vga6yA1qLVQK131WyhuDCv2Vpy2WsdRUKCLM9vSddQYshUwsWAC1kdm2zw2LFHb7WwYUJPpZLwSvMBrQ",
  "key9": "tGmS9D5rpBxVb6uvYQWvXv5Uh4BG8XuHkmfPEXoEa4Vbadn5UijAVPmCJw5AhCw1SstFzdiB28WQV1tNEWk3TN2",
  "key10": "3ocYRkCVy2s3ycAFSeGgKVsd4qoYiHJRBmxx2yaMR2RChd7CYMcQGnhtEjBsR17ybeuXhFYrsomAdWeZGRExdQXP",
  "key11": "NmTVkgdNKpaEcGJ9sxmpk9HnJwBT5qNS4syqXsoMCkt59hL1jEHVY2dg9SiG8nfj9duazL6Gq7wYg2tRKUZNb7V",
  "key12": "BuCNn6rxhbEBAF74KALCqSPnC9jiHB3X7Yhtpa5xAwYgJhysLMu1NWPQodkrj4jBTqMfZbZwdiiCUUaSc7nbX9E",
  "key13": "Wjovki2p5DQcq6jepY48SSz3aZrZq9rJ317dmyVcPgwS9S6MKVatmtSbQN1RMt7mvmxVheeLYiMye155CFC5zTT",
  "key14": "u9JdjBWxERAPHRrdsRNyyhrT11kg5rKe6uqpxNAtHuAiiR4LHb9vEBiD5gaHcyA4HwsJ7YrGQifRYEK9K3U4UV1",
  "key15": "5NFq6PQYhVw65T7BKp38J1yj792sVXpNJCx5X6BiqwJ4MnL53yGQ5d1wQo1WqvTPsgp9ccUEyRfMcYZZZnVEvqUa",
  "key16": "3U1H2M6nz9JPCUiX1E3drfR6pF4J7PBxWAqLyZNNHjjMz69H8RHzMjJv949swRZTQS1QtcBip6UefCYJDdGEyFNX",
  "key17": "2wShoPBQnYZpotWq3VqW58UDMSsBZ1B2rLB9phxrSPijEx75S69pJqBNjMTqgkmKYN4dXNKk4yqa3tRKciXemkGz",
  "key18": "4MnJ5VLGJKfnVctpxHBeCaVREkpdsyveFvmPJLv3Dq3ih1WFLPt6d7KrVM1Am4HxSZNrJSwVpzF2enf53itedgkF",
  "key19": "iHywU4nRTL6ipww5XS91en6HtTrzHkLDEc89289hrLyVbwCVChwGej6kfMxNmSzYkWa1QDbJVq1W7Pwdrbvk1Ni",
  "key20": "5m3c31dbAUpVsHxPzM7y19HDdRSH5gJLGTnGbaDfCy4jksfzVfEnpCZv96sWmFEASxPsmeemvDFWV95VrVnKCgC3",
  "key21": "221VkX5A8xsq5pYtRya9g2JHw4PaxsM1hPS2JTFtM3HwUMiq9Mw6J7jwDzUbiAJrJnFMn3pgKJ32RoQkrkTV9qio",
  "key22": "5VgzACfmUPVCArPUmpNiWRfFS2WJx9ofzNctkktXwbGxQnnYtVBonLyhiiEHgSvNJGD4UcTPsc85tMDSTrUbEMRC",
  "key23": "V6wwhPoVhUCa2hVmhXooeqyvHxY2Ay9ceaLrMuqdn7RJ34ckPX6WPDnLdsrZ5KjrWES6BZFQKq42yCceh1Qn7Mh",
  "key24": "5uWRVeZo7WBbVUDeRA8Fwo3o9ptv8LoweBx7p1PFLjis4mnH34CVVLuUuXuNNKAgXb7V1cEkG76WUfYBfMm4b44j",
  "key25": "282hfA8AidiwNmpXnNd5DjV9ht2kv7J5AjPFvvGQcbAHJhziXDAxbZMw68Co3c8ZEyezgbTp2eiLqqRwWAPoC4SS",
  "key26": "59ceANk6WW5krjkGAb6s914YKwDxv3b8wvc4GAoHxfDMRkkth5YZ8Y9978XnLfFSHj1xortUoVd2kRHLonds4dPq",
  "key27": "jKh5THtaRqMVLPUWMcryWJHon1RvuQRHcJ5hsvo4S9nG8iCqnc4wHFK4MNqDg2PJntgJARHsPwW3aux3LAnwM2C",
  "key28": "UXPa5Xp79B7FvsuJtA5bucekLMkcj5WHsKhUMeo8LqAh1cmPZimPdqEcmikJArwo3xats3XMAgBiSZneMTh8PRU",
  "key29": "3s25n1Fv9xYDkdEmMzD9JnrJr4HgvyiQt6VPx3nmHiXDKwnC7fhMkaFEyW9Cpj4vuv5zR5iZqEUY2MCWFK2nPhcM",
  "key30": "4nXjFV7eZtVcb9H9XY2H1hYvbSa3EAfBEUQVQkdEy3UkFWWbyfbivuXyv2nFYPYgxRq5YvpcXdhT1TcNKgCf5Y5M",
  "key31": "623xnF37UNHai5yhuo6RTQhCA2veMkD2b5RkdXbMtdtjL8H2ogex6VKqx1AjyiYvz1N1EjeiaervFDVW666kH3FN",
  "key32": "isFTyVCVZce5n5SfLKgEAf1MWWhQAu9domH1x6v429u6i7aTq5MgexHDMA6MWk1D2CT6zhWK4sqgFm6xtnTHqk7",
  "key33": "3Tbpm8S31Tj59y2GKkXFHB1ieZgD7BFzHD9t7F78pRiHEjM8Qm8HKwG4MVMzaepfEKm2LoD6tr4ntcpiRPa88742",
  "key34": "65JWMo3zZfqJJFqa83j1rd7gMxKKf7m92kYi3JhrJXrwwCzSsBv5F3y2xZDh788JyFfZ2ZKp2qR2Vcqq5H7qEs2u",
  "key35": "524wEAhgegP4YCEzgD1RVqPUZu4FHWUpzkAJWNGxGnc9AsSjHV9NT2uksMWaYMoXm8NuVtnQwKLf6U1HeCuFHwh1",
  "key36": "5mphsTuDb4vdKPfY6t3Yr1hqRJ3v76R2jjPEexTV64KbZGpqrkLVpAKv5f6vzqkpK26t5AnYBg2E3vnnKzokrgeX",
  "key37": "3zGxR5x7vD5BmJzZmLXrgt57QPgpFjDj5EtneuuWA1qVx9fs34Sv1aJJpqVvPevDtx9mhBDPPumjGpoJqoh5fLid",
  "key38": "qsUCCRnTTxqVWWuMFTk4mJNHSBvz6LK4tZeF8MxUzwimC9ph217EofZC9NkF9v1ekfJAwL4q6h9CuXN2tYFDkon",
  "key39": "34kTCWEq7xU2iUKhtN1czA4xP7n6T3bnbkBUekX7v8QMZDhge97zjG1wBjnv1bjRiqZLY539coHZgzLx9JWyTJnx",
  "key40": "4krbgnnC1qwsEavwH9fbz1B997sS3k48DkZjbL91uVF4u5TwXxvWpFkRBjyGmmk7PwqqmaWFx6hovhza746Rbkiu",
  "key41": "49Y65JGCLivmwBXeqJdMRth5WeaMTdW8nY9p4ChQ8iWbLE2ebcRmSrYHe3VhQ4eLby9cKiQQTYJncRcxxPbPHyPQ",
  "key42": "23HPWtf3JzfXnW1fBTJ64JZy4AEUkuAwHPRUAmyrfobDKGmUzYrtgf3xPTdpT28sNq3VegCgtMTSpaoVemLXnu95",
  "key43": "3RTfW3otZDT1fNN7GxLTL94jyvANkJsa6zP5UR9g4kjPwjYhtaEfuVn6WmtRPsk4A7V9LQQiQew41FyMSBua1DFx",
  "key44": "4CgZyawbhe2BxZNwHR3J6PReNXURginLQNkQHj7nXYvberDAx8Da58LomKxuUMpDku6yM2YsXqVdmNMKpqNSJ7HS",
  "key45": "4q2A45TpT7MuG3fVR31phGBNwSEcXcZSZGS5sEwfivyB24iYWB1Gf2Qv1trXhGBM2LJjnPuYULEZ3pb32TEsgXtk",
  "key46": "331i638i5RGWippxDhKxqrFnUKGPqUaF3n4c6P151EsjxN7sPqMDBeQMsuiwBhF6pFZV3dxBK57HA7j1JBBKcYQW"
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
