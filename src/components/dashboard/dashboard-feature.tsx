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
    "62LbPyjJZqVyAp4cmr8K1k6Q96U1gPii3NnHSuL1h56RwNdxyGwrCrvGotym5XMxwqjR7GSUGux8rXr3F2Fec2Kz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EnamzPk9c8aab6m66HDDxxrhU9ZamXyZwfaDfDY6S5cYrxxMkGmgEZ2QNZoszjqCPZxFAh6GFmx9c5S1T6evNNm",
  "key1": "5x87wnd7sQCZBSb7nQn3ZZG5q4mgBUdMWdYv8b5joicFK8qo1TNs9hqAvJC75iAhEK8WCUv7XhBWMwo94fKmwzQ7",
  "key2": "3xLuXaeGm4bKZhKCLJg8VQW2KuaFbgSdhzgscp2JGvi47FbDfstf7ZEV7eGCnb4DkfCfpSE1UFhHduf9eXFKJfDR",
  "key3": "BArF8vpbHjQu8mbKiyza59tZ3JnJtpahUZa4F2492LqN3Xg8v98K6CRGQNqnDkcAw3nf8mNAz68wykUQFVsb2Gd",
  "key4": "2ti1uhnMxZb8HoktcjZ8dSznfBtCcdqiVV9aJVfMcVbmpte5NFhXbuDaWahpS1doHUunSh4PB9VLhu2vaPQYLq8s",
  "key5": "n2HfQDVDja8YaWF4TC4gY52N5aYaANHq5gEGFdGTbCDrGAF2hPcFW3V8RHm6yQzWU8pHWY9jjZAk7qGeAurFRrq",
  "key6": "3ugq1P4nhbpVpdcGv2JgRMdoLrmG4WRMpKZ5ay7TwsHjHnhZzUiR7ddbHWrEz9RsqSbpPX2rpHM194f4e7vaiXq9",
  "key7": "2uViv9EJtk8t583SyqHNkLG3Va1c2FpgKXMBEweJQ6r4S1noxfCVbJ6EySd7Z97kQdStMXCeWHiZbyZ6Z5NZDArM",
  "key8": "3sgaFG1zXvfaCQQ5hRBnFaDHcAqEiMYTCu9jnwndTTKQ7H4v9E3MaYCzgexeDpzEfwggLtKzU5WLcUZ6QgGi33cU",
  "key9": "5QHtzdmMzJZ6wpFDP9TbUrfuPNseRCmeRddncmEhHE1MUL5t54WNu72bDXeZghBQ3fgaMgih1vy6n7FwXwcXY9ep",
  "key10": "3vq1CdruwRnj7bdyphu8mjJFXTqKLGp2rzrDgEzEeVfnozY9gR2yoAiJMQkUmUcBJbEwrrsn8y1ktgB9JuJntKAj",
  "key11": "4Qpfr5yg956CsRfYHVrds5uYntETYmksQXbZAuRVY59uGhTryFHTMh731k5Vm7dygpmtdxGaQyCNX9V1o9vDt6xN",
  "key12": "3KEJ9pCf8Ekre7J3svmVm8L7gNARSb8DpWdrtuMeA1aYX66NuzqsxUo8CmaidWenteueh3bNfG96dYwwRtv73c2z",
  "key13": "vXYtjs7ywVgNNRjUQuZEdcrhbtWj8ptjEpnxSsLieeFWZG5ouQkw1b4XpxYq2Q9K5Z7CzoHRaWqieG2qHNdfoQo",
  "key14": "39DptPLnxKqea4jnLscXyow5j4NATgank71mXWXjEEkMCDkRf3KAdXqrFN5bkiwQUvKBQQMmWox42NkgZ9hisd1w",
  "key15": "3tjyuye8GbvrgBcJuMGwo6VXnfzobfve2n5xHdtXuQgfVtbGSfjSYAoQVEZDFsNwg5CN6Utiu8h7dMYHxKw9TVBF",
  "key16": "2U9jLh6RNLH791V8bdjwAMnYGharyAqjx73y9gqCYiwXW4PZ28yjGnaUZMTP5jTaVLXMqbPdq35ZJmJ3UVXjbURN",
  "key17": "5gjqUxfP4ev7byopHAS7e2fw4utY6QPbeinfv7H7kGU4F3qdNp1rtWoY7YYsdCpmQNxm64drq8vi5bevSj4gZknF",
  "key18": "4uQeXvyD57GHZLvzzpXAHeMCRiEtEbzytCFwPyEcgzn6aRxnH8awvRLVmB4A4URRveCbGZJmPub2fj6jKNJ1o2RT",
  "key19": "4tUwWVkeMRx5cMRdoXBe7vYDiw5RbxPLCKXNfChGd4AdfcsJpHz87w2xE5SA16kWZso7xmEZrtgysKsiVaduWY7M",
  "key20": "5yLSsFvsqrEQgqQs7NLBgsYDf8YHk4u9StWYC2yKs4mLzFQei5uySWrAotVmofDsZhgzacehZa8HxrSjiJE7w34g",
  "key21": "4HSTYj5dPmeG19okUvq9Hun2LnfTsoU3vdM2JmdsmDEi8aFJs9dHa33oJnmfzZ5xAYK7qh28FVxQ6v8f5sreeXJ2",
  "key22": "3bm1d2cBjM8xsHhAi8AM2KhsNcqZgPr1AcBJYmf4yYNorE7hxCWKB8PmDK5kG59AEaV3BR27eSTdeyTHgngfrhxn",
  "key23": "4YvnWfo6U2Vcd4mtZHu9koSjTJf2AscQ2pcLn7AXmdkhHuoYPnB9UyimcH95FvMQrWgGyKUhzEtqW3cziiyqTTdr",
  "key24": "3qBRY274EVNxxnPbQ5Q28hCVa4qcU1aBn4VNU7SnKm7BeX6f8bodhpVw4GLMzFHM6wFxwb5xUvnACxXMjhXPmaAq",
  "key25": "5JywyEDe1zZti6T12Mv9zhjehtF56ySidChmqgZkLpS6N7rBshGx31MZHrFZViFY1h8xWwEWpjYBABTK9giStimJ",
  "key26": "579WsvA3xYakZiDWtS3aXmshzUgA5hsdNwrAHtWNExAfMhdpKtchXHMXvEUmhyD5Ex5PR9AEnzua6pZpWrudymwE",
  "key27": "4Wj4PA7Jt4XEsHLc8tk5sp8Q6NhD7EBC9dEAk4XQSDD5aBMaqK3XQt26c3n4k3xU4z3zywE8kGRG3jmZcTj1XBqF",
  "key28": "MdDhPLBRn887xaVzjCUmT3wKMMtGm1B5esRdmDeqB7Tq9wDeDDXvpBH4rzS3pd4boF49VXmKhSnEYWVLiHGrHZY",
  "key29": "1LGrskn4Y7djzX3xvUfBkMacPqxaFcNyTNpsfayDnQAFbeZep5oTwPgJiLz6SoUkVyWmW7YiwEs9dg3e5W8vLyd",
  "key30": "VCAFMmezGRCpNGxZrYQjJfh3zbE5UyxzE1PSHbHVgNPuZeUK3Yj92kqMzApa3J3RHcFNWSuSTqt5KseJW3XQTyd",
  "key31": "4vEarpfMh1fbiqyeTzG4qzgKMvvHzjCUcy6jgXciKwJkwB9PcJGP3G1BakzVqRa5iAigiMwBqeSVQt2skzEw4Uqv",
  "key32": "4DS83NRrkeqJPbhwksNAZvfAVQJAGfiqheQNPwS5v2VXbc5oHdqfc1iF6WHi3HRKoNRPBYmFG14RkDQ9mYta1H5",
  "key33": "2M92otnv67LnVrmNVcHsTzPeFMg9zoP9piT8PJbrSXBNuNkyHTymR5jvzMiofqbSfqU6bYtKTYif86XRCrhzpeV3",
  "key34": "7bLndGobByRYeAqWN9U1RGLdiFoQtjBPcWVMgLBn2cm68hAj7JsjzbZeSnEyZWCAd4EPZXgC5Ap8V9kUzkVd7qt",
  "key35": "2fKgvnkHGCkApGdgJJZiz5ZYcEHYdmmPLDYeSB4PaMLHHdBHiEoWtFtGR6KEmEXQ2hSsPAmXD7y3YjMer5L4jkEd",
  "key36": "13txnAAhSsrzP2NpxJn7eECJWTHnn3G6KuCFako2aSmfc5SfS5dEFdyxqGqqXH35LR2AVbEHAMKEdG7veXanuCc",
  "key37": "3nCHwSPe6h6mqXPuo4gptNDAFfvuLYzt8gwPd5gg8QqLZ7ka99DAvPcdxGeDKeZ4H7rHDFmHemuJoB1HKyyfByFK",
  "key38": "2EC2RiaogBNPxE5MvGKGH7pmotb8q2gxf6kBvkz5iyYkrkEJJmbeuytpha21ozQhu6agb9k19ZGjrTtJ3Z1YK5Zo",
  "key39": "3PYnnfqoGa3kbEP2WhDhvsY8ffpS92qgDD3uEGoRWXgHVMDxExFpi7i5LoxkyZK3WntBBttYCAVR9zUP8HPNqA5R",
  "key40": "sVANeZWqarBsRLUAnnCriTdMVAh2nCrjD2nBdcPrAAMKUWxFCLUYvowF3NpSnK2jC6zJfrFrsxUFx91tYe39fg8",
  "key41": "2BCFtF33d78T7UcHeifcECEEaML7FGmLL1PhMmw8WCxw4GLzcqLAxGpRZKMoNSzfBNfJ7wtUqLBxXyfzVxz1grWe",
  "key42": "R1ZvEcddoh7NhjnWzvpkYu7WPUWruB6SJ5fHApsjtjCSZd7ewUz4khXmBJdGjLtNKfSeYkGgNKV1bKjhrdRfGz4",
  "key43": "5zsjeqvGQaUYg3r2WeJzNzpz8Q7KmASVqomTFttr4fWGijR2mTF5VKSbTNK18TxDMYcHLP5stMXVA7jXQo4ao2iW",
  "key44": "5erJZKC2NMt7cWoGk8TRzLF7uz68hdFFPU6rmWgZBjx6BAnfjBwBGUTUNQBF1mPthJTXQtZL8hhE5P46tmSfeQGB"
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
