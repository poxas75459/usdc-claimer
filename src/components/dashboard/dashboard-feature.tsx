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
    "dyZsoCD8LyuDUahZN4LfxJ8fZW2M1J3YKqWxPvkbbuGU77etjfnE2KFBgWz6Ya3eJgNFXmGtJ9iKiJBb21qDtzF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jqFACx6zFw5sbBvLSmUqHRGUTbFgR89zPjufZ13K3DeJVyegu1nTHWYJDYtjFL1L6t5agaiZmz2sVZynV5yLwc4",
  "key1": "4Q9Cg3oqL3kChu9Y5JCdq7bCnaghZ1EHNSDd833fs8pmRTG322Jq67TkPmMbHn7XjtoBFG22z1XjVnc3FWhKT1p9",
  "key2": "34BxsxMeXC2qwGsYdG2aSjtg3pVQ5g2HCKtchHX5ihJkcVeNjspZiqgvXYCjVnRyv9fVWZkpyVYwXfLms9BKyEGM",
  "key3": "6Zi9EvNtvsa1kZ4jMon8YHgcG4L9TDzeeLwbXECVxLXiAsV7B9Jb7Ys81znso54mPyXWrXvdwUXd5XfuEGxUWtL",
  "key4": "2QBvwEAzyAfFdEBkNw6b3ZG1zJbgEKxV5KxS76EyMbdf5rQMMNkbpfeydgmQCBKkNdMi48US3spbFiTJnW6YQxpg",
  "key5": "2rKxwaXneZJQSXWdshxHTQbhgQk8hKhqV33hBji4HT9ThnYMn9N9oD6czcJsyH8YjpkVdE6FuwARNsymqZWVVs7b",
  "key6": "Jq8uFq8MSD22euX1BeDdavY5eXEBxxktHFp2Y5StJiwtJTmm8JD4nX2f41hNBayMZReDTakprW9MxiukY8wwUVJ",
  "key7": "3VngzSbRCNiuTCvQTabDEWj6ghZ637pu3Tahay3sFXkDzvstXeLy77adXqoe3TPbTPXpejLfN6Y2UxH5ntGAqhew",
  "key8": "TmxJfgpU9Xz45Euhmj3Vw8LrKDkSzb9HNc8HMzKMfbYRrUyGjdBdgbuYwnGFdbX9yfzG19KeDtE9D2GAyETPfJF",
  "key9": "5Lnw1VpkPoTQyt2aMwvTPyAhn4nLi5W5AZ9XMTbb8b7RfWDDu7GucLLjTV52jEC66GsWYDdVmcLrjF89FoEbBeun",
  "key10": "4NsPrkRmTavyq8KkLMbEnckeQgd6r3TrjMHwi5Yrx9Yk6aAaTSL18ZjUse98H5LxUXT3qGG2NP6fzURjXSb8m84",
  "key11": "2GuaaTQ7uyaQnyioD3YJwwbKvq5qRdnDpgvzvM81n1NQfForhN5XwxjwES1iHLfPYA4AzKaUoSEJTA7HLhi5rPxU",
  "key12": "4CVh5bmxv6cvw82LvfTq5Rq6LWcYGhz2dcWTyYqZeVbuLYRqEKVarm5NhP33AuNRMXwGkBvUGMskyLNnpqJBuyoo",
  "key13": "3uJJgk1R5XChpoBJ9iF8mjKaoT5hAVBtsTzBhvC5FjEzT2862YVW8r78HN3RTjLzsmfcLB3spGMGSDDUmUa5zYEf",
  "key14": "3DZhDan2mMXD3UhRUAwPxdcfD6VhSECXJfmDPn2rG59kvJRg6J8L158NSEHbHtfuWycoG1ekeTRCvRmJ8Rh4FKYy",
  "key15": "2GjyvUTwJ4JNmqCz3v89QzJ2E6zN35pPKfdj3KnBuiSu2UWjk4VrgnjXnSCPDUKWDcx2Z39KCxkJvQcZPueN2EDj",
  "key16": "2EGeGXQw4uUGzZfJVqbpYy5bQkRia51xF7wwMBEzbJE1ksB92g5Mm96PDpfSgwBibe4XQnv6wZQp1wuqptTywHqx",
  "key17": "2KFKUapvkPuSyBVpRW6YreMabsm3w4EjcY7mgdXYDKtxp7tYLsUxD67m4SbfSswGkmHVTXLn7aKfZ454dL8xwMn8",
  "key18": "3G4oq4dQbmw4L7vgSf1RxvqLfdQfQiE38YBw78pQecL3wQZvVfXnE8DPvpBf4bQkVABdmdKtijz9vF54DrHVRvw",
  "key19": "5S9XcH4KZ7s8ijom9ArSXFFiRafqNXesrg2WCbfdCGWELMVkcQfoMkPDeVicwMVBXcrWb2m2GshDvAdLJNKdxYy6",
  "key20": "4M41yNgNAkCpeBxUMNCam3E77Mh4s681MgNwFWtsFvCkG85q7ovrGnFnd3YtS3w2FvboVmdjJ7PxEJ1EvaQ69iCs",
  "key21": "7asEK9kEB5QaF43Z4XdtSKkZMeGm7RQvwvZFACkQeijQt8fN5oeJ5y9WFVWNND1bxiNWsxMfVNPs4RC5ZC5jikc",
  "key22": "2ugsCTxrBmmjwzWDfRqdbFaF3HPbaxNccurgVR2VsVBqVaKLtzMLnjmgkmaVUqBMCHUjthipmNijrSmXjrNL8ANo",
  "key23": "KAaVodDxcfz1C6KHFxe5SASXFLu3K8kpZfj1EGdSotZrArXC6enjbsCkPV9LQbagrhDB3vKQ5QYNccHN4iZcAvJ",
  "key24": "DHbc3EVcz7YJiGJzMrzXL6LjCSpziT5jFSi2H7pTh2X4KE6oaMBcZayhDFrVvA5PVdkVAXtivKqHQpSBPUxt3EQ",
  "key25": "5uSbr6DKKqtksNE9NKw6o5FGNwmWNvSYgR5VhfGKS8yuf5ZFhbjEjnrvsbCrDku1sE29RJi572N24HFswuogRjPf",
  "key26": "2ifpkFS2AKn6FkbGqMoGtMEwD8cRB6D9eEsjXQVtj5TgNePP8fYqd1A8SE4VKMQBuLk6hehL9g2DTv3SC1iTgXSe",
  "key27": "4XiMCXr5R1g9G5nujCdhrfbG73omBjo8EZujGsZySq3kAF4wdyMqxpJAf4TFJSdyNUdYZ7nbP7DgH6XdFPE8F8wp",
  "key28": "nNTihUeQSZdokv89rx8bNC6YHayNZfA3dwvkY2Pcn9GDhSNLp4AWSkdRPmeSUS4tXpULXURvKxWHFDsPrt4j85M",
  "key29": "4VHUHHMqqLT3PP3oMV1eqsqda7Kc3iycH5ED2Ab14Y2x73DViyHAk6SA7NsPsuBEkNP37if8fL4E7jygcrnzGfn4",
  "key30": "2zL6CNVG3MsWQZeRNnkBWf8wQexL8NLMxTaVNdQ28LswGyYmi2HjJvbM54AuKLiy6dPsZAtRqPDhtLDZiRnsJeq7",
  "key31": "jMGzkpmffZTxZ8N1pZ6zcgmDfABFqdTZVNjUn2KhnLuqEPYC5TGHSnrB6TNk8uW9QZuYc2WG645R7KkntBq1pWF",
  "key32": "5RfPJCzgdA7V9YB6xRMhvXPs2gPmzQW5BCxoc9qSiaBZdeMMyFfQFxiiZ65xPV5qezYCJ1oRu4kjjCBx4rmwrcna",
  "key33": "4eZkefAaB3xyUUQr8b5pbPArxYtPjJThYY6y9wdQMFivc8cY6wSdUcYx9HswerJJq3THB3hjjwBwPFy4fUsP3osH",
  "key34": "3qNVRsv9kvN3XRK1oiB3S3LFV5jWrgQJKo3K8zREUxjzy2HAuL8brsRAPerrTMnApWMMu1hj7B3hZdUPeHwUmqH6",
  "key35": "d9hYJH2vs5HULuB29py1KirovEKQJedvELqUumyGWJwstADhixBGEd8BXAA18WFe6V6wDhaz66c3vNxtPQf8bXi",
  "key36": "z7T4bHyysvgkRaEYsp2cEEoW4mYAtc4EgbsDrdA87JEnWtsPZLHPHoUFmYgi6QeKqEbq2MYLqC9Vi7vzcRZ6Kjc",
  "key37": "5eXUuzLKpaWqVPvaDKQbB2D6tXSAqwNiKCb5tZHBjMKj2iTTtVdKGCThVMb9nqiaLjyryi6QWyWQthXv3CLMwTvb",
  "key38": "4UoAoXBvYMDr6F8u1XRMkDb8PacrGq4Ac5nRzV9ZKjXsqUeiDxRdjoFhRfHLk5g6UWktygPgywvhom4QUEgCvnsf",
  "key39": "4F1V8pWHuwve2Pt67X5Lh8P63ANNNvPiGpAp527QV5GrY8eEk2Liaj8NRfxaNWybCpVkdXimidUhYJr5MAouKweZ",
  "key40": "5piWRRVx4ubrsa55JtucReJ7YF1ZboT3JwfxxPRF8fhh6JYNawsBBascP1L2twSA8squKhoPaxQPf16P5Aw7iQTo",
  "key41": "3cQmpmKdWmdgnuJaL9FywmbS5DUC69wRCu5LmAsw6a9nhG9gYQWgenBXKm1iLGVe5DJwGZdZpxSkJCDhPGt2DAJH"
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
