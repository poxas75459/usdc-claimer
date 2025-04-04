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
    "58xxCeNQ1gLKsKZh66Y5eSRNcqgXbFtRyE7CNfeTdzGMowqZkV64hBiKpi6u7hbfdYXSfKCe7sHQ43E1DgDahZZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "372GV3CcVcLo9wuWyR4XXUQFdRLieH6sHYLUmJ13Z4eNeLT5bUnqb99zuo25ZQxBvGRsqQguW3CvMWR9vkpExNMU",
  "key1": "FxG3NWjoLq2N1ESZotcxEoU88CxH5tSHBV6FUMCvJfa1bw34D6XUQ7ibpdTkBWaqZUEKhXn7utKsH7kzdVWojRZ",
  "key2": "4DHnpjBDF28eFz2NExWLonqrS722MyuUHERhS2nvBzXtyqUWNBbg22qCc4ViHggnbHQw5tSJfqxaWdzW7x6ocffp",
  "key3": "5PfsqWC1MWbRfpoh7gmLz4H84AKUv76jx32FeG77WzfyjR9N9bisfC7cKuF9PMubE4qZYVVgmvELihX7rqnxRRS6",
  "key4": "3hYc6UJzRhYPvVub26D62qMtT3j1uVgo5APHqRkwcpwdEzWDJZR8eK7foXE2oSXU2fhm1vfzvCDcdQTFqKQ7xjri",
  "key5": "vWDqUfUW7NWyE1xPHwmNuWs2EttHVEoLmPcmVWWJfWURoHnQPiBdw4EKNYB5yY5DTNBNUAZDQqbz41jEkJZs4A5",
  "key6": "4nMZXqyV9ATdLnxULYyPe1s7p5skqKUAsqNq67ikk51Da2qj6twKyfEkrpseRB694pN1YqiDcD3XhVM4iD3xVHb6",
  "key7": "4GgUmrpdfYs3jed6QmnmjJUFLRk8FHLyrj8nUsGNd5gAiBvLMZqPJDLswGzv3WmqQcUw1E8aRatRUCEvebRRR1u4",
  "key8": "WwuzwuQGdFm3Jx93W5DvY9SBw5qU26kCFVQy5JupkTCLVqdaVT2hwauDa2NWmBcaHFt6zMCw39WFyv71Fpts4Sg",
  "key9": "2La9amgVfPpUEg6NMnpcLckmEGW2SgsLvbjPmEQrevJREMVpsvayXzv5DM2GhqkK4Zqxk9kK72nX9kX6L2YcSzA",
  "key10": "iHcvL45YHD6W4mGqh3MZGtCRzUGqLDa2yMt1wyV4vCB1yG6tEtXpAeToUFTYbVmNzysQ8cig7Xrz3t2CnYGct8r",
  "key11": "515fMxcjfU21ctJehrz2HGjKYz2ouPD18oF3u98g8eBs5gWoAaswC95UUPEnPWKyxByxjXfg4qFkP11UyWWyCRTq",
  "key12": "UA6AwXQ2MiGTPrUdfAmZE5SxQ9zfVwb9g22qxaWoMxx9grLdEQiEmNwN1zN26qaSY9zvrPTzRab1pqPU7MDAqFM",
  "key13": "3m5bNsaCZTMzFHifipFjsaJZ4F1797PTYXZ7JKnk5BUeuHyk7M7SQJDBviFumr8bZgqWwd5teuCwaq6u7fsr6zDq",
  "key14": "sgQWVH2yndXHSJuD8DXBzmtdBnrPE34qeHDAyRJd7wsHsBc14JETRwWe3KRi91EVneuh22GaxSxakAxv4b21xKE",
  "key15": "2Rxr8NQRJiC4qseHeYGeNg8tyxfadTUJtBPGqYvK8KsLXB9gpe12ZRECtiN9CSTUvWbpUnDMhwi8Qdcfi9fpDfo4",
  "key16": "4VawAuDBY53wD1RKqcNcAQ7JbuWDWLwfBCaD7bhU58jBQFPZecnTrQVcBMipBHtErsDEbUJyZHZa6a6Jtcwx4WA4",
  "key17": "mbcGorF7B5oW5qTVECcwL9fU7FZWyfo4r5cDavPmbVXUyBvJDVSf7haAFsbyCyy9ZwZJxgueKZmNxfUTD3duGUN",
  "key18": "z85RAZXtWzNvJgcr4dC7WbGcH7ydtJaFTwM9QhES5mjYXm2RBaL7Zpe43AXF9LrLqkPbA1tJzVAxd4o57h7vd7Y",
  "key19": "2cJPhajbtaCLHiSS2vEMxDEba51oUjNZUZBYg8ozHgNetP93837KXszwQQXMFFhGXTq9wHLwqyPe6g2E3vTzV8Kr",
  "key20": "4QHvMLAoofNbwkQSU3SKinEFXoDQY5U75yWX1As9wtcgathoWJ8Phdse9QTTZyjue5rTB6qw9gzD1kFzyiLS1Hfi",
  "key21": "PiPBEEJUAggirTUB8jiMkAXbwMduERv7i24Ln8KC5hg5NQqjaG3MmyqMfU6PXYseRJqqsGCB9quVKWvWrPBWksM",
  "key22": "5Up9cmScZ2j8wXEpZbYvi5wSZpDgDraexCWzVxk18fNTMXhBqsiLNbCeyN1ZLH4Q85ZmYk8aMg2qenzpGoGAU511",
  "key23": "4JZjLnBTCCF9pVyBXt1jYhU8xREFLGsfjnkgEiy2s4YSS9toLqF95aryG2iTfWDNaaKhCsu1yrPYVsq42EUT6EQW",
  "key24": "2padExeuoACUGNEW4yNHqM9To7uShzCmxKqpnReREcbD4T9zb1ZSXTNFFVXA9qQRxpDqtYSZNjW1w6GY34GhEek7",
  "key25": "KDjMAjYKgmTPXbrdedkLyFGv37axoHvTX3BWYaWFCQo55jvDhRb3JUTCHsRsLci2k7dEw8oqfh3udsr53xnKm5Z",
  "key26": "63EZLr7vJkWYKtwaRRumMHwdmXKdtTbhFo7QZoTganD3M2gJqa6jg7wtLKidbHVHmF2rCFhzqFhiphAY9zRjVjfy",
  "key27": "4U3UyLNmPnnvZzHRU5H3Acbj6wmLo5qnxeMEDetMk4Stg6vnzKqn5YbXRX7F59vxoifyTYxgGNbBX1Z9qh49pg9P",
  "key28": "5tNwAvxmwiC8W3E4VQMebWAKetAmaKD7EtK6Qx8iVGZzLpMpNfy6Qgj5DEN9Miqo5bEcGvb3iH7W8yMHxwSa1wEu",
  "key29": "4WdqNstxVtJD5DEzF5ZF7wKL64gTWyWHWAyHvaDdbvzxz8df3zGgyusoHgFbKcouM1ftF2F27cCUYPqf86LR3Y2X",
  "key30": "5BsarRkcYeLp2LxpXoUT2GLsdC1mhF5zSHJsDyQsoy44f8kQpRswMr6Nejymh27yqaHWTZgqCmMWpyCBwqSEfbpm",
  "key31": "EfLG6ePUtGybsmP5cZ5cXV9VQUAKat61x7GHGsgXoeSy243SdjEXvTCgeUqokgTPBvAcNGdTidm57rTPMXtQoyo",
  "key32": "3FQdork83nwNvwKnRRmf7axgYmkp4bTqzy9a3j8T7gA7c5MiiVduHkigZ5bUj3K67aWdoumDHqcHrwii9Z5uJ9MR",
  "key33": "3ZAx2rW972CBmA2rURz9mJQnWZxJf2GryKPekxwqjfGRpDT4E5apTLfU4HdMaYSqMhmHu32obcgoYdbLNqy4cPv5"
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
