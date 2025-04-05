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
    "42Lvv444QcY2CgEn9AkzVg765FtaWE3tDiU48BDHz1XSYvRWsBXM9hq8dZyyip135qxgVKrRFxZmgwrWEqb7ccZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eG4hTWPKuiQS6h7MtnwYRopJ7HiW9aJdseM75nHRrSuN5bFtfh4iajRace8UXqAkfizWGTLhkX2b7G1MT8mc5ik",
  "key1": "3hGF5R36DsSzGwfwr9ByBh25YFGpuQiMKBXrEytCskbKpSKULyTiedVXnYsGq1nQmWecU56xsxqa7QZYQ1Rfz2Qd",
  "key2": "4RVg8YE2MCwPsStB1pDCvELmi5BkSeF2qggCy9mhTTirRjSB3vqW5HdQVzsnziq6JL6giypfseuq5BV19erXYQqf",
  "key3": "Fv3WWcVHGpGg4hkxtHQizp6kKAUfKvRs9ZgkpDPBbiM7zJFf7ZYtPyfxGnN6xn6urGK1oRkAti1V6iSkiBq2tiz",
  "key4": "2ac1GJW5BqcXtd5rQD7kePJK7pYbmS5punBRn2SfXPKFddW5fN6v4QV5LeRHvRF6apXGi5u6wcZ5Z5565nh2mnHC",
  "key5": "2BGJuDanQ4AQyZdW7qPmLwwrki1xdB5rR6VxamPqHzk9MQyzakeymWSBkjbRPrZVFu326z3Bw8ihSe67v4f3d4TK",
  "key6": "277KUKaFricp3RKhjNozYEAJuRrXPQyexHPzRV7cQqkWvfo1iZaS6V4msoFqqSYtxCydQAWbg3sP2wkBLz59oGK2",
  "key7": "5mgQAs7pT1xDc9PJvYmpYywYLjHsxWctssv6LCvh41DrGtt46WT8tMAR7MU4aHExwF2PRYEBaYeZwV4VQsuT8Foj",
  "key8": "25eStUg4s1y3wDS8cZyFtkuqhDxunrAwVvECV8PHD8imWfqz8qYTRquTaWypfc7pTQiot9TnpDfJkwF99PbsQCjt",
  "key9": "5sgXfhxynFwD9RNVFnpmUqDKCdXHmY8HcbU7P61pFZEfZWHLqsDeFoJnfBx6ejiNyuxFMCcJFPxVcMVG6mvHyfSi",
  "key10": "3gBCF3xKJVfN51VJHEC9vMcXn2xuU5E9hw7vRcndjB3xSKDKcuRbPoRcbCCVqhYCj3t2YScdDpHtoam9PCjSvihk",
  "key11": "3sgFwcFXwkAv3zRXmY5Lu2d9vNJ4amhJABEZZNJ6s2RgfCyMVm3KxAfwqXFKHy1EQAx88dZF4Bhrg8qTgUsgVDKx",
  "key12": "5sAYMQQe4b1kBAT3WAwdUYr1VhgQaYJiDGkqEL4doWRmqr3g6y6GRoPJ2hpeZ8ttfp5PcgvUghWSWBGToW71QWcg",
  "key13": "5wTU7ep1j3LomUxBHKfDNStGQVdJbA5EsyS1TDdkdEi5shuazJGHsaXimurop9tSb4hu4BMqqrkcmX6H8oDG99Mk",
  "key14": "43LUfzqAb1FXmd6Yb3f31zEDP9HrwDof7yYPwP7vG4qS1gDMN9WFzRNNxJ412jcvHaJjVpQgSaMDYDt3F6SLkPov",
  "key15": "51V9hPTEAEXQt9XaKSPeKMbs2VHnQm9ZNzcqgkJMm87kon7aoeExENe9u6VVs88kimBaDEb2z4XmexaRFJ6eGBvu",
  "key16": "2fUvLpqy3aLab777dDu1dz5CRE6KwJtZNGkUdLkLZUVxQeSj6n7yQcM9YGo7PXcor6EqZeSgc3cFxSMcsjyPhUoz",
  "key17": "33HMq59bCDaHtpYinb2ezb15jV7dyvzNT7A1z8R9ovxhnSEA4uwgFRRP548dKQXGBWeBLTMRYiiPvnKBEricesUQ",
  "key18": "3rMYYHmBVpR7Jr7pYpZpHhqfihWRH8KZ7hLTUoZD6gV8P4HpNE3iY2VKxNM9RV4xD83sjKKzqepqn9nk8vWgQ97L",
  "key19": "3Lq34Hg1tA452LT9SnGQ5oetoPhHd5o9SZNkk3wc6ym16ZrCHWWngGdCDGJuMRAoKSwMnfPBsDP4D89NXT3AwTFh",
  "key20": "W7oGLRm8xtCr1Kd3TWxqWHJp2jPJJ9b6TfpPeAG2m8ropjtXz2SYpjeXxdq7RhnvQmsfaytaMETzR22pBPuZSnC",
  "key21": "3GcCHBZcgyNm6DFJydUzUZFbHrFwHxg1LiNvebqEh9G6a8oB72quMBYGeJ8U5Zn4dMDmXRV1g7B3z6pvKYALyC56",
  "key22": "4bjc1kGBJjPwaYjqM3BvPB1FfzPw4U4fC7e61Zzu1tbidz1satMDDxy5xeCLv9x8SDvqupibQNh2jwnmWfu8cBCz",
  "key23": "2ibPWahw84KaHvLoxnA2cmbBEmdi3gKvAGZoBCZvvpyycELSeFgHcvm7JHQg4B8MSkgibcMrH1X9RydrCP7eVYhX",
  "key24": "4RP57Hm93G9p9WqZ9kU7qjsESqBvApxEMZYfD99aon22kr7tnDAjmfk1buvkvTuppGKabpFUnYchXJgehsQLBnVn",
  "key25": "3uHGKbzKqmpRg4xPKEsNqjr4GQibLjWVHcrco4AEjZGArcjkfcFq1ZNPSrGaELfQtahUWhzs1mmgpPNzhupYHVcF",
  "key26": "4tFSBc1a8rGkvCCL5YsEV24qyv4PgShL3UwHzokdrMAGwHaxexEjyZQtgp7kNn75tKxTExPVPpTcNyUQSSA3V7Ry",
  "key27": "qDmYnkxPUwW8RkN3aMeJQd2pbovKPYoXa8MysD5zwxUx1sKsaGiLs7oVhv7tXig2hnDLBejkcxhojVHFiAuXjsk",
  "key28": "2ULtWo77KNZKaN69izGWQriSrwxxz7n8t16TFd4AHs4vMwKwM2fqAT8h9xJ4t6TuxZR6uEYjPf9DvjwQHGjU6ESB",
  "key29": "3pG6RSbR6nribXp5m838mVnLGdQJanZh8kmm1CzSq3jHFUxF5o9pry5gygFUvqr6ioJzjd4usEv9oQrXMbeP6SVQ",
  "key30": "52aUvduXxmH6fJZmUDRFZWdHDdpzQFJxwDMoLxYSoiwhbgBQTjrrbTJhbVHQ44ApoydJf7pu3NxPqkvShDPUWmti",
  "key31": "2gewY8hXA1FM7EeQg72a6PFVbEWrhjWNbohZFQEDtts81B65sXhQKAY7x12Vk3GF1ArSp8CQu73qqPnJQ7ePphAv",
  "key32": "3wiZAPRYX6D7WRPA9zMbYptCsJrjGRMFisnTWhfv7LEM4eNvzNHFFatUwbrXLbtNjkV71k4TkKzncBzLH35zJ7Ge",
  "key33": "3ZZQJfXHA4sC3ULLp1fDPRHx2JYxu6C873sPRNL9JcafYVtH4dkycbB83E7rDi4wi4EJ2PdmcpC5HDgTnTzo2isG",
  "key34": "4YBNRVtiifPg2M5HDPTtdm5DwJ55Fj5Kw5S8DFm9Awse8oBDAHHKctunHzpkffGWSTykJfU6cNfpXRWx3qTtMAoJ",
  "key35": "4LhgvFQGTHd8quZBfbFJ33Moeep6TBmMA1iHFiY4nXu7rwpNThDfjZ3w3rb8MGccqjvH8VaMA2VZ5YLH6LYmjQuk",
  "key36": "4e2QEx4V14MWBuckXPeBVkqYYpLAhBtvHp8tghcQeRWkT5GV5bXQkYQMQEFLcwB6jiFsTNoX2DwXVMfvRYZee5bn",
  "key37": "5yRxz6xXUZ992fwjpic4uhywEpuzNbJLGs3enuRHcGpWVJwK7tdzYgFiYt5f2y6youd4H7ZJ3aJVMhu2GQFXawgz",
  "key38": "3f6gg7fTVKU9TVQFrotA6tPY5YxatpBDEYRuFgEReK2wiNCkeBVqMbUA2ejR7kGkShusnE3g9YkJEXmvy9gf8Zz2",
  "key39": "4svE3VGWAJrFUhv9HDSLYizpajYypwDoWdczceKnf3tCaanDneje5vVpn8MfBQjJ6mZJwrbrt1qhbBRF8QBgMa68"
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
