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
    "2STjV91qTHmHtfirMTotBDJchJQaue31JJBmYb9C9BFrHtgnRhTwkdgiwhnhhFYrfaKyaRWTTJqk3qsVBrMC5AhA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b2KK8kZriYJtTwG5VBk3eXRCZY5JP26ocVJd88AarBCQ9zgzzg7oZA3rdx5uyY4GMYw8n6dsyKkeqxXbCaY8dEF",
  "key1": "64TuinNZBf5gjGH7GWE9JeD2zSyBBjeLJuQxReef8MUDwntaBUNw1biLEqp57CS5YBy1Phx5ok3tRh1VYWVt1KHx",
  "key2": "5NDk9KtAe9WM1asG7qvZjapFSbxejmronHCZxWAzHKFkYM8YfaC7CPh8WyZdebDfrPtytWiGitVYtVvdGyXRJmAC",
  "key3": "2LDCqLN6TovafvTxSXcabP6RMgfYN5A4KH8VA2UqC2y55fiqUfLNbygFw48KVJaJpQQtzmPMEaH3goa7i23dc9Mb",
  "key4": "5Ny7FwZSf7jqREuDeZsSeHYUASxuRtZxf14enNJCLTXKUsp6BpmyVEa18QrkMCJ9eSMU5GoCHdBQUbQn464XQdu",
  "key5": "5mARgZg4X4Ukf8wD96PaEyE59duSNQGGrsqpf95sNcUkj6AFjcF3omSHUZKv8NazFyyntupFySyP5MQgFuT9khuh",
  "key6": "5awLLtw2rGZRp7w9pQ7iCHpUiLwPDvtsV1BStcog6bUGQLL7SsLA8JLrudX9oycz4iw79ffZWvMJjhQxaWC2fbfH",
  "key7": "3jnStAhfYNY6KbnKnHWVry57VGNFKP1mYmBQAdLCKkz1mNpikcqbrNprdRZXdcZ4ki7nBYfwaodGeiuPBtvLnZhv",
  "key8": "3rDmT5G115KaEPqVvvu4giMpscgfRM8Pv5AW7J4Qyr6ubuQUU8e9iAbdyzU6LRHxte6GRBN81GPsWfmGsSxJpu52",
  "key9": "35nEkbxHnYP2QEDvdENAod9tNtGqCU3pg4YB5ki4hc3Lyrf6SotapyzEnw1LoBoDfcPTJE8euYrGzGb7vfYpg9MP",
  "key10": "SDphSBgN3WJiqAu5JTZMyPPMsyMHAJbkSfwD6BRJY5FcuwW51TTnaK5S5R34wUJonTaaChjRzn8B4zjMuDkaGj6",
  "key11": "qFENLZQD2pRfUnBpAofeTaDqHDfbhavqz4d8uCpznBPByv81ntYnk98gYLi5zpqx6kZ2XrgFAHsbGMrHnzdbAY7",
  "key12": "5Aco8CeQ8WzV5xdkZ5LVzxRyW1amgYGP3tHLYf9G4s2W6soAMMZmbt6WJMf2vAWVER47emdqjay7cEa7ny2G1Qvj",
  "key13": "5ybQAeSr3pPaKDnccGA4Wb4wyRTXuJ9X9xpiFqc8RnNW9oUfaezVvqgq9vYj8u6uVAqTRjjy73QciP8J2zDENRJq",
  "key14": "M6cTkzg14whxboTqr186CSvN48QpisAKxJoEdew4BvKaSYxZ26kdxUZ7ubd2jHhvn5xdsPwrtRdHWp8UHVtpap8",
  "key15": "2DDQBFMUG1EAaYzQmqrSqW1MMSKWUYc4y545MxeeKkuknjgp7xFHCrEvjwWsh7Hzyno1ueFQvxxqhCku4LGbf5hr",
  "key16": "5ahpaxrcwooMNZJNPhBpjRCvArmbh1TFqB47UBwA39m4eEuDbYNKg7LfAPd5iQuosAyU884wboo2KmeYvfgi5VAK",
  "key17": "SXHo9y2C5APtKdfKbehUF6BtQR3R7M2hxUC19zoDJqYP9tTNPTs7o5tQ3znbCEUaxhMxju7L3bCGMYCP8pLQrdr",
  "key18": "3f3JnNqvVd5p2ewJxQ8Lcy7mEVJwdCYSZ4jWd7sPivDsMBaaw9sHg3539EFZzhdEorf9dzCAdB2V6qsh5UVJ3AQU",
  "key19": "4uUNDnEsW1EJ5M7kwNtjGuEPQuSaEnXfqwvmBPJEFezMt5AEBZnpQjDfJifNTJa7wybFmmC1xwKyE7JhtJLWLvdY",
  "key20": "64gtyLAP7MejsEdFPk9vfNxB93CNWWUUKCK3Cp7EDGhCE6xPDEoPzGZSB42H9roWgn75csQfvbc84VHosVowzAzj",
  "key21": "5yPWtutU6PMbRFLKZGT2N8wyAJwk9MgGboBArx333YNCvYEevnADEBaWaq3oqyjr244pRieML2mKHsFDLe7ygyPw",
  "key22": "4oCZ5ZrNJhzdcdqyv6PcfLaT9NL64G9Dr6aRVh6VZpccWcJi9XMVuXF4SzJSCDZ3uYAs7bymPFxsHRxgXQMyT2XQ",
  "key23": "4pwx1PCeAN9Nf8c6SchJvhfQmhoxLjZXJCAemAqotbQyEtXWV4yjk3iMjoBkq3AcmV9B3TZKYyZSKkohXPajbpqG",
  "key24": "5Ph1yt6Jx3dfDEePCkRsEkyaacxFzePRRNjwGCBpEDLacyhSuhMF9Ev8dqbgZQArxnbNEFo8YCjdfiHSLf1px8bt",
  "key25": "g4Zz6yrr19fWHuruqCUbtTFzCsL92e9xWJRNPZF9REcjuUYe2zveCbH7rYJBtfpudBG1w3ZyMdRAmpnyZdaiQaq",
  "key26": "3MC3CqSEUwUfDPoJzuC6TP5fqzMMJn5ovBD6jcnNR5fnu5atGAFGvLDBRxtBF4BLJGoUvecUHUb8LHqKFxwEBKVj",
  "key27": "3x8VXvePMJcZHxij3Z3q8SD1uuFi9WhJoUdMqAykWgSujc7Vpyivhk8WA4s5wzudLFVsUcyQBqDrXBRe6yfsMGRg",
  "key28": "5H88aMRsvMi9Xzv8sFtqhbeumcrRHY9Fx13q3ceBxkqsLFSmHrZtqRHtn8ULrqXCMMx4N4nTAC4wp84qnof8wAPV",
  "key29": "5Xq2CVNB4xLo9UUDAYzXA8yhWY6QCXgfirFzf5FHjqiCynM6EXxC6ZwAKgvfWN4iQznw2ghybdjNi4j9Ym4Tk6Ra",
  "key30": "p4e4sw8KfURBHbxw8SJphA3rJo98XeTt6a5um683BjSY9cBwbRrkxvKjo1o9tUed4j6j7QSy6uckUvdTES4yTXz",
  "key31": "56hTPAwyjiSK1obkKjU5RvyzC1XDFiyygRjaMNQkEnrFYE2uzZTXBf8ThaX38Frnsquo3jvk9iWN1ZPzeLmopF6d"
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
