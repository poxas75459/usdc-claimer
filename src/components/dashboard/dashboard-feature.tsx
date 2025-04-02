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
    "4vaqQE6vewbdfUPsZBtgLiXRqqVHJi8C3oSx2G3mxDBQiK8G17Uzfc4Kar5uwFdMAeRrf66MwayEHiEo8Kc53v6v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MpooEprWfTqsprbn1DAm7ip4zUFWkTbX3yBsB5Xnx9LA3a6enBTTED1b9QgCXqzHtDMdfKpwPwcgxty7PyRhBnD",
  "key1": "5USt6psKAhUHv2AzjC5hE477ZXv6mRo868QkKL7KkUf8pSR6q9HsnnJw9rcE1KPGopK8akfHA6J8deShT6ja4a6Q",
  "key2": "2E8tCrNEhsk8uHCq8hCKTE8UyEyyHDAM657rMupKEBTR7nBZGZ3JTzHC3RK9HBB74DK7qg7kPPijdGP2AtKMLr8A",
  "key3": "3dRjxoF5UZH7xXaZKmFGitE7MGejuUgXzcvvqXG2G8KnB4hodxqmnaD5Bs2i5qDELNZshdg7yfGKj8kw9uxz2zkh",
  "key4": "2FDS4cadu9WSVpTvLdKGtDTpgMkZKURDWykdrkHqpjy6kpyFqHM1KxaaNbKDt7iMdoZkpHqb6FxKkUR13nA88jy9",
  "key5": "4miUFVzPpJBP4YeckGYC9mWDfpBC8aCKx2oqTJmQeHNgnsGv62D4x5MUHnN4ALB6nbKt8QbW6tHK6CWQTBQhCXHm",
  "key6": "638DCtuDbG7HsfkvEAda5GAfEGqtaonXiaHJHWEKbdP1c6pGK9j9qo6MZWJD6ziC9sUXL4YPSS4Bfg9VhrbjPmTp",
  "key7": "3EY58crLgucyS1hecuPdBuHbkQE3bvpSN6g77crErFeh9c2mFUqA5DoajkVxRRUEgGYxpQiiN3RbyESu1EcRVcGC",
  "key8": "2YWaPyanLfzhzYYh7YsissTGGUhq6k4ZTQ3bfMPSbdqPZ25MX79B93aNWU2woCogf56F3YRUG9G6P7UxrygArhtp",
  "key9": "57PA2gchS1LzgiJkvGyRdByRHmrWR3LEqzwa89FRhDFqBrUXkoxhqVdYe5EBbvcYjGbgD4m77zibveJBQ3pAk4zk",
  "key10": "4W8GXLC4SoZjWcoJPA9FJXJ686mXpSgbJnCpmv1cnXNbF4dU3kU5k6JoTgB7quRDnb273JTWTs7ZvXfsTcaFz2JP",
  "key11": "2F7qrToYyyrbEzJq8BNbFhXHRz1eruVgXU9Ec9xGpfsX8TnLnEfwDfCgWQfdTYbJWQpUB3asA5xhYvXnKQTv5jKY",
  "key12": "539yAmZvawNDhMNeTM5oQY7bv318nxSSCqQkfMeGTxhwKWSPvcKm224ni9FygVpDkoftJUtigSfVGpai8yTfhTkM",
  "key13": "3nUyLthwwxe7tiEMQHMHGV56sBYLC59JJ5BsuFzwYb3dsjUjvR43No4ay51U95JE7LZXzMUxQAeGyvb3oYLMbsA7",
  "key14": "3uchEb9FjYircb4zuAhZ1baw2ahuDa6dFsRoMqLsEBxeinWRV65kMNJvM4d8yNmtUG5SUrKaAAWMtz6rHXBBN8Y9",
  "key15": "2vjY3jnczNsAMbg4Pfne7PVxaQJ1Mb8L81zCsuok7668YdHqyyzLkcz2oGZjK2Xkxh2sGrNQ92Vez1ZvjKG4q3Zt",
  "key16": "27aqzKtEfi1YeXRuPtmq2QTyVrCt1gbWZ5JbSfGdA7CfTz42fq7DQBQxEsdSqzqG23YARdZKXP65Hq7PGafXx3rv",
  "key17": "3BJQ1yL7KF3zpK1xkjmw78XZMYhKPo9s3DGjhh7JQ9ZRu7kjfkdzcAarfmqKLB8c7RDQ33EiSw1ci8JxHwDS5JjC",
  "key18": "2EETPVPMaJQeVUc7KhYgufuuPdfboXpbyhYc1QQccV9VnoY4fJ4q5ay9sTZorYhvpL9ctzkyGPTmJ438oGXiDDeg",
  "key19": "4K1X7rW4AT9d5bNnjnUQuPrnc6JfQsmgpia5XpriNQ1yfPUayMFhzdBTZXDxHEYQZXDbw2vUfU7WC3QLpjxkYAKE",
  "key20": "2SgknibxcF27MCF5LB3aMd3P2ZpUL4NLxLMcfySUhTr9gKFx4jTy86o28eqJrKAe9tnNsY6noE913WuHytzY9p6D",
  "key21": "4rhVamePjZtPLfg3BbwnNWczHzRK7bqsPVG8Zx99SJgsfVuU5V6QFi1anjynrC8pec3XNYNfBDVSbmYJuEUmvMAP",
  "key22": "wR1xhZMvjWthC5MiXhyXPZpVCPU7B1o8rpZtRduYnPpLgktjqBhnrYMR7ePQ8bYwr998GRhTmNT1oLKEoRFMoVD",
  "key23": "H4ERmQwxZE1CxqPUMoW3FrmJWAJSXSXGuoaHLrCP6jtHmqLxMTtSX4nhiWmYUQFgmG1zh9s5ZJG9DX751cY7Fhy",
  "key24": "whJYDVtGCB5BDAJppeprCDQmYpfRq8YVxEVP95kHsrswBaxAiexCRGmGvicW7QH1crVgMqsgWDcJ2n76FaQzaY3",
  "key25": "5fbJ8VM1Y51aug6DP1FDXoXR9ZkWi2snfvrd6K7wMQ6Fypb7G1M7K5rkTSfUhxQfvXyRbjsMs8CHkKM8z2fyGzej",
  "key26": "31eDs6tCBw4VC9XaGrWLukeWa6ZX4bR2eZJaW1gksev8vm45fJ9hBJFy5kvh4gip5HVMVb1UbzZ5VGYgJcUtvLQP",
  "key27": "4uDpyoWCXxY3Ef4SLru8GzZgsN8ehffQ8qyMYYmduD2mA7Jw91qN93N4irwominKL9c8XRyPi1vb3NfgLPLcZzGM",
  "key28": "UPQdH7rfviHWWQ6uLr7NZhUtRcU44fpGZLAxkHXfxNVg9AVTQshw1FnytMkSULqxty1Byd8MwMrtLcmqSiUpBbT",
  "key29": "JwVWGffonzJjvP2oeCTfi5fnYJcTGV893q4uMguxjJdBCj7E5emQyXUEmSAaJ1BVASmtjRGKgQ8LvaDTSrF6tZF",
  "key30": "35fS7edcKunoidEmEFnBJSZJjQ7pvoxc5V6B4XpWGPFt5zXGpxqia72EgyiRsFCixYbKs2LwKCVj6A7E17Xp95C1",
  "key31": "4zJKm8Bk22cwHgcXAQdd1aYakb9C67dGTwG6BGfpKXf4PD7H7zZrS72mXXdxyjW7BZDcT8k8GLRodh51rjwXc3Kw",
  "key32": "Pf2WZhM6RmW8t5RLe9G9z2eeAsQtjrkHHAasVhowU1jxvPrWuQLySYzCBTSkW3KMidaTTvSsYQob7DCFqASVtpM",
  "key33": "41snjPph6udvVvmrDGvnjdQsQY3pq6NsUCv2WoVu296yVnbjWA9o2JrceLvtLMKSXHHY5B6Mwqeb36SPWHHPstRU",
  "key34": "357sr7ZcJ15FLujAFCegndJSy5P5aZQLcLPX59tacKevFK5vTijoXWhCcrthL6BauBULxqi3pWAt2TMkC3fauYcX",
  "key35": "5TjAcMsQG2e8NYUzXchAwL51DN8KuiCCmzfu3pxQVS72SZSpot2gppgVbjiR8VWkffA72XRMKm4HoQ1FEhzqNmXR",
  "key36": "2JynZsG8iGKwQkDrakaNdL5ULGRh42wAEWS2pF3j2gy4rVSQegFRC9nif6UDD7scaeHaYntefAzdUbWiVmgZEZTZ",
  "key37": "oYYTFddH8bpv7FTVGVmxVnZcw4NgN1mFGhn5zPVELMFkFL5DkBTrSzoAF7wWLDpdpJHmSbDvBtWRF4EpE4BM6Ma"
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
