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
    "2Y45LUu9dmjC5TwmZ24MvCw6nPLuRYSu5DZDAuGxLKcgufFFKDRyPPqNAJymiP9M7xtZR7Th1Dp423h992MXL8tM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H9efnYystv9HhpbNJW93TPD9MMxDzTUY98xaHaSCCfavyK6qeDRh8i6W91auKAhUgmiMwKV2cToYezxW73mTwCs",
  "key1": "31y3JBsR3dEQ4qYu4kdiReYj83bVZ3LQWjr8kKGwENSQuEWyFnHtRYSr3xwkUWgYcETurj2HcHxPE6dngurEaAX4",
  "key2": "2vQL1WBwHLrJ5uJy4DQ3pTjQpDvkZ7sVtkmMxPu9DfUFAfThZzf6yr3gfsGb3CumoaV73QMhCrcSjvMZLKig6Qr4",
  "key3": "3EctAnYZNigfuLRQ8CcPke8ox8HdkbQnfBRwoBJoxQQ3EMYdmDk8ouDNndw8Q1tXi5Z2xPWDvvxxMpMYNeQWBXxe",
  "key4": "4wfuufTW9Erjj2yTUw1q7rNYFYmWW25yXjriYzNVjkTsjVGEcsPs34DhqWZx6MFGwLmLToheoBNAWwEscMqZBT1H",
  "key5": "4J7uiaK4duDZA9EzcJc27NGnuZ2Ez6rpoj49XxePM9XHhmAynFBwso1os8ir8RZCChxPeKD4cGuHBJSpGqLQoKQm",
  "key6": "Q1tdmPycVXXNskSAU5KzFw6vyc5YSj2mxiUKqkiEXjbqdxnHM9ZawXxsihWaZcXZnnJen3jStSq5DpCv5fN3A1S",
  "key7": "5i6BWsWkL1FRspKyDwpcsE7x7E8NR9kRYikU4TwncVsmDfwTcv7dewdMscQ3uA9YMNa23ct3HKYAQMawctRQtAV3",
  "key8": "Ar1FFSJCLvLaYsSWQqxjEyijmMDbWsKi63bxmAfcxfcykf8WAbxrsuQFtphPMKYMxSNfUFhA2b3MVd6QBMhiRWc",
  "key9": "3MtiKSy42ZHPpBEnmHgpN9ur74tLZg2aMeHBsbsK7MbsrqbzggjvLEw48XmAWmG46E5vf6KYaYBBvRvsSFtqSMhR",
  "key10": "58v4gVYME4fybN9fRqQTUSURTTLzLWKXK9vT7JQfUjLo2Cs3J4sPUmedtiTmWZ11eRXsfDwUWMEvBRKUe6Up1eub",
  "key11": "3eRHcQnDzCNqBYuFbbWsTcBrPoNk9cF8sJmxaZSgjxjHQPt8vgFYcnSPfauyvR3AGV7TgGPJrbrJe6QxXjELA1G8",
  "key12": "4aw61rrj4Dy1HvKDD3FwXjZz4Qv5t1b1XEdK85Kppyqf5GHmQEdsGFQ4oXKdiKQPXXkx8ZBvnaNHHrztNk7EM5YZ",
  "key13": "LQKYbHdSWU3EUuNWbpmmqgtvZeoB4cu4N9TPtkLfgheSSkKTLhekUACuouk1AGjJcQoiFxAYJbKboC1WNJ9UNqS",
  "key14": "2BbYiutSsCikCwDVQ3iNeZpYsmRzy8XrBk7kmCRshA7HkUt2pA1oqdkQm3rcmAHvrh2927123JvfiVG5AkXfZeRq",
  "key15": "2dez3wZBV5xXawXZaea2jcMeRq6pPig394YPSgKHiv54ie4xd1QZcWqPBcYbCbccoRJ5rZcfPSWnhqVYKSF8DvDd",
  "key16": "266J5RswwaFBZi8sfoGQc95BbrL6DNuoLDw83g7V1LhCZSch4PD53pwne7bt5CxTTAcBDXb2dqNSXbruNcV8poU2",
  "key17": "4bLsCXH7H4gu7UJm7gFDz4kZmr6p94hARDbPdrgRXtDjXe5WAFX97dybZYNrkQHJW5x3f9zxwLUnKsBTR2u7iouT",
  "key18": "3rBHv5eDHZDUrqq3QzrmMmE1xCCQ8E6YGF5u8AX44ZYpqZUt4XQuHAdxteaQp1kgkxCeCaWoCBwD1BK1obZWpS3j",
  "key19": "49CEWZ9A7oCSo4MCLw4zxtegVYF29i32QZqCS1XCRkcHcsXsyKPFS6uTTGVk2kJDM2aXtst3kbRXbu22Vj5WYckj",
  "key20": "22Mk3qPfK8xhVG9xFWNJdmuWmDfLMTQmft64Qbf4xACkFBwpPQkXhrLjNTymNigUF4BtxLjdhwCafWxCbMq7hiPt",
  "key21": "458MCrXQGenm7PzEUWymkccUMS1TkSv7MDxrRiy4Box9MjVbdtC8ckj2ZZoo6u8cH4HfpHvwWBem7LqQm82LHEDW",
  "key22": "2txoTT3a3R21KAmuYcnGEvi5ZEHsdBamchKtwX3bktJznv7SkZ81fztWQZKwgUHRoteXZDataZ9X8UM57uSkHXbH",
  "key23": "4NN4P9zetemQju7n6rWkkoi3fdkWXQbFx7hjjQNhDfMVMAQisz2C2PH3Cso9eWv4PFnCivQYHDQAmXFp3JNxsrYG",
  "key24": "4uJoXsjHxB3kqbZ9XX5XySp1ZQKx1jH3Dkv9E25sDw6NAohgh2HSwkv8dnfU1bKke1URbre9RMC6nmpjJjxNps3q",
  "key25": "4KBJpuGuFwhnuiEVZH8AwJC3MTHK2RuFP3AMPaSrPXDGrCgJsmyff6E7jrHcJ2PZhAScHmRbpsUUKFfb8oLjk5um",
  "key26": "3pswZMKQGV4vJpgSWPfscsWTaN3PJqtx7nAUVePN5CHQYELxozEeXsQVkWyvDBMQ1wvVkz1qSCZkAH5ar1ZbQMro",
  "key27": "YFdnCMaHSVtfLDmgEcNp18hZzpRnaPn2DUdT1C4j9JZrbe4tHJo2xqtMQsUpUfsZUfuaQwNu6Cu64oNxGPp7Nf1",
  "key28": "39GWSVTnbo2mQvsCNtCSdeRj7GFM11q27AxW2Smr1miApycgvC7FReoyG5o7LmxjpYxcUWt7fhQM57YwiUWigTQm",
  "key29": "4wRf4qy8sRF2gpzmBGJ5caUopD3eUxGmEgJfsuW3PppEVAHirmUADEaVZxBMbQdtefRXwShwuxYFPmxb7bwwgQQF",
  "key30": "2oaAh67nbkxYkG6fvdABrTWioWSfuCnZcrQ11oTpZMVGrQFPvi8vVnHeN6FnVhWULgRbR3aSNbb5JNZqaVY3j82Q",
  "key31": "amYAZYELEqS114Yx86VX7UpULmmfbTkTKtxUJsVNKCyWeY1iAjuGVYTW368iWnvN4zbKozg99VJa6kC3ZUBUQDv",
  "key32": "3vvBeZc1CFXh7hZFUfDoJcfLZm2WbgY946hrfSJUn3JHQS3wKjprTmtwAkRwngHJNSde7NnRGHVyaMZ7ZpxCPCm1",
  "key33": "2VwMDA2PUQshaPP7HLHfiLCqSgi22BydBUpPhZ3evhjo2a3rXvBct4TWKfkbW8nDFz8vtjj9QzgL4gJhyTs2qdhQ",
  "key34": "4Jrw4o8RED6VwPra9mMXNPkd44RheoYr8JEdRrskZEVjWxV94yzqgmSQibn2QMobGy6BSGQwUQ8pbHWMfYTL2z2J"
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
