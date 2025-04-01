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
    "5z2oMPCmPBvxDXxSTV7yWzWYaphPnCzRALsqRJVdBeQiDPuYAbijFDhDy8yNwiy9gjQXbh7Y1T2LXJ1EN5fgSxyT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FfWBJEWB8zqjtNza7sd7pNBtcknrjsW9BpRBrg3cqRh8td6uaAMzTRBgfXR1y5TjYkSM62SwPYhNtfEEnN8dyWi",
  "key1": "5usiVJ8Udd6STemd5Uozp4u48yLWnGYwb1epVbVeJEi4GSowWFwd6NkFFYBiJKveUa9Zr4qmL6pX8wP3pvx9crPM",
  "key2": "59EjZAQ27exmUdkN3bqN6UV6BqDtUqTv5mTWXtykA3ZRAr2Bb4RyuGUXvFyWKa6pGVkFw6Y33221iaYo3jsivbau",
  "key3": "4Sp2CAWxYmDSXr6uHiDhDgzkgBcoeen9yA92yXAAgSUdHAddv5HjRLjRUTk84TmEDSsoFoLxAMg67u2wjmAEFW12",
  "key4": "4jqZjSN3ZuBh4HxYQPdad2mDyqjYkS8VbxkfPDkbX6cnzNU3NgdMaYt7mQ1kDQZuduUptNUs6qyeCtALHQRv95t",
  "key5": "BBKC75BHBEpyLZeGSRCvfSCn3AmuSYPdY1JTEpDKq8HPQ2onorG8kY6rYwdAHqGMKq7PSTEitk46VPXacDjZdVi",
  "key6": "3JnXCwiFH1NytTBZm9Qr7e1EVtmmdRoUKZCEMWYbRguMocv5ik4nfmHMGzyRDCccpzs9VAu4u31i53jF8Msa4nTK",
  "key7": "4vePY6xBpwPXNf2H4QPb5SqfFB2oPmHDYCrsVVdkQmAiXQSLhY3ksaUxDLqfyqnpuS3KF6ZDYWnTNvxtoVujtdWu",
  "key8": "4rksUpA5ghAow5DmozyafkTQsswb2RSZvRzMdY3LVh7PotFL948wL7CLkiYu4segMiLGHtbKbF4Ujch4EgEHmvEv",
  "key9": "4YbtD7iRNmySz3CPFvFcvTGXaecU6ZySfKEZC4WHyPe3fsjFDwdanj23HZFAXBRm4FPPZhKx5nARPaQb5z6qLRxa",
  "key10": "5YARiqprYR44V5GuBC1Et9hD3WH1CYZNkY3scBK4iVdJ4CA5wbnKCjbnXzghDVf2qSFisii2aGf8gpNmNcWZoWAw",
  "key11": "3nHCLsyWFYCKqTXZYGKH5eP8iCSSZduMn74nS4npx2R6R68xBVbnEZChtLYdGf4kezzzc2oQqfGkSgSXsTCnuZ6D",
  "key12": "5sHiTYbYrqiWYjie9GzAcrCJCeuyXuKhby6RgKw93FnDEbQ7m78Kr62tjNLGj9Q5Hgrwm7CPKCVbbHekhLvP3k92",
  "key13": "5qNSHFHJ3yqT5XwoKFM4HKP8v7bsfg87eugDPxUBiHufSZpSewP2SE5FCVXg5oYfupejh4L9D9EcwhFneZhDYXPc",
  "key14": "ioqWvNJAiRsqYJNY4SR4mAa9F7q1RPjJ3D9ucuBwjKwSBqqAtwsJSMTPPdY5ohypNC6L6MvjnrYqBnDeVrpPU9r",
  "key15": "4h91YjADbqkusqiMa1NRbCkiHfyiafoLKmthAzVske6SZ6AJy3recijaKvNgfDJAXZoucyrgzkCgerpc4VAyoueW",
  "key16": "2VvdvQyhgeP2PyL5WkN548BSKATSWzjpa7uLtQco39a67qWzKfbBhwRKkj8mXh6xHcoUrtXkxpi6VADFSejv4SMF",
  "key17": "2h5Q1sii3xTJmKToT3BjbpWLixKzwys6ZiAcCubfsDaWK1bHbCvefV4JAW7nxqxWPCPgi24QL2vt3B5cRDriX3cP",
  "key18": "2Uy7HLXo2fnE17bJcLhqkaGbAvp7LoDgu2iyiPQSF7vCsc1qxh3XRvJMUdqJN5ivijL4NWVTJAwBHtzhef4or9at",
  "key19": "4wxnojefhLT1VG9TdAgLDxp1sNBXXiMVcqUtwd4wLyT4UhAcUcJjL69MRmsXQTEseERFtP2kFpexWpxN1JUmjwkG",
  "key20": "4Gdeti9gcxFdthpgwGMio3LWQMWWNkAvdjZCpPhWvrbU6K9AAjSfSx5WzX6UBi7nCq8SCt3NEpf9pM1BR7SPEa3E",
  "key21": "4xU8nLXGUAEMMJq9ZstQHZXobg2HNVbYnkXKYMthNt65EVtBTZ7zxSgYFUn1HX3NyhAkPnSvnqBHrn9keumQdgYu",
  "key22": "5Wx88cbSEjm4DGPSa1VcYYfSbkY7om58pEiTADnmkiYZbTbeKh5JspbpyabLrDNy8k3VTomgiihgKH6MpBjUK7SB",
  "key23": "5heSba6AEfqevZ4DTfcKdtJdQ64RszpKTsXTtmtr52xaHZWm963L3VP7GU4Eo7nL6VzrU9uXCwLmYAzzNs3pVm68",
  "key24": "5frtBss5QnVJT6R5GVob7iEpmwPxdwHAc2NhF9LC9ZVxTZUepx7yTm24FBrUFcRgSwoixwHJJLELzuE9dJ3qDg49",
  "key25": "B3TsMZmPBju8oM26vreVA5dX72Ebqctxve5rjmopYdswEstWi7NHSb2Lsa1PKQ1h29B57L4bgLYpFvFuU8usQUr",
  "key26": "5qaYUqkd9QXCv2d4ykzau1JikKJfvLzQqgie5cMzb7b1NN8vSFtbNE4DL4x3Y5unEfaS8ovCTX65wNsNmQGeRqcX",
  "key27": "kUiVWy6EAgC6iS6vyTkpQHqvt89om1m5PU92kcMWWjw13GSiyTinXSw4TXCtuLHf8HM5bXz1HfvGcpdCnqhVCUZ",
  "key28": "2h2PJPBeLGgT95H4tKCLvLZMzDo8GXu9TYueWuKYCzwTgHMTKvda7KECE47UsLP8ygUcdP12MdTZCUzgZfv2XCdy",
  "key29": "4BMKbRYVNiYfW5Jd4DpzzA1KTMCigeLTJa25gDDS7avxQ9rbgqNhKX2QULY7ZG7Kcm4GoQZ1LPwToUpbBRu5JufB",
  "key30": "5SyusYDL6foERyKm7YcFzzhhxGG5hSkFY6DCTh3ZqFcCKDc1jPxW2P27zBafWGgn1hkhp3apBSrXWNf2bi8naXDS",
  "key31": "3ircRRTDU9aanCjrkXtDAoGwcUft8BhjEqNEfwB6ZmutCML4nNmT5B3Hrn1U9x5vz5SArQkQwPUH571dzbWAh7yC",
  "key32": "4LW7PRsSyV8X4gqqDHt3fgf4D2UP5sYasmD75EKar399udkhyiAooyxX6Z6BrPyMKnrq3zbA9Tu9gipsi3Wp57fE",
  "key33": "ChZVJKRxXmqqcMHEufScPcxraM7WKitMdv4rUAeAs64wezPxaHNzCUyzrkYoAgoT1CpjFvP6ouXeguWD81bWsgL",
  "key34": "2Zuae4hXgeHESDhrSxdAzsKN9WrQTJFhQPHjs5aGWY9tYs3vffDRARTJzMbjNyg1qASGkhNgNzEw8YjPd5TxX8qn",
  "key35": "4KXrGrgcZ62EkNT6vqKsGqnmwo4KJZS8VAt1JAwyuZPoXe4pWJcemJbpZ7P4gRxqSLREQHitgU6Y2zv1dCX4Cowj",
  "key36": "3WTY3joDgFcKJPVLjSSMJwcAAFUUR1ALnyJ1Z24j8VyPhyEuGqLoy34EZGm3ui7LPcV5qjbh6AhgeSp44ayFdLMm",
  "key37": "3HraaFG6wERKXp53YtHpzH8fguetCzDiPXKdvLDuJu48FzFVr41Fee5FipCwRLcB6BGzPSQwxnzCYt6xju4bgQsR"
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
