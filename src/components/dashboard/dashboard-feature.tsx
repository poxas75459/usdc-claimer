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
    "2jTWk5HrnjHwKYQWTgivTsnP5B9atm5Dzk9xuPBdehiSUHhsvbRYURTbhTgNUgPWySioo1a668os5kDbvFJJJK1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NZ4tAFzTdKoD8CT4tpo747suJEHVmMjUXTcaMEejKpDDQAwyGZuR2aLTTyTX6cWkK8jUJKZjWypCgJ7SWmg5t6s",
  "key1": "4WDzyPqcAJUVeaSiFkzaFUcFQQPkyhN2quBHck9uUJqeoxLDV3Ac9ZV3WDZgiLnh96YYvLXmtCJC64Vg8NSwHhRQ",
  "key2": "3zJMV4tikXNCUWhmfWNVQUHXcVEfBqH75x9YQFf6a3MXtFUJrLcge3hLKkcn585v9yZnbvSKisGp7Q9ET8wZrUgX",
  "key3": "3Bn4LyypHvnsjKFd1NGgi3Gqf4zG4JvhinEzVYedN6ge5ZdApVPeJr3ZrLL6BaXt3eYjCjciNZYqg7kNMAJbrJc9",
  "key4": "4c1uY45tjR3CvZBpYHkxpFDyg1YXLJWD9Sejq8ybu5GYfBUWgio9im2EuKnmj6CFfJYybvcHFUDjie18beGU2aQF",
  "key5": "3veEW8Qn1wbc9NjcwhaaHRjQY5MfV3GSCXaET2vdoDMZPTReDTPnhVhNTgCjTdfWLryfvzVeeNkNnnqeoqJ5MXWz",
  "key6": "658hinBhMaC4FhqM3ZQLtSbgJCCERAgG8fpd5z3372eiFCD93CfjGxKQcs6yNWad6a2SH7QgvMtFcRgnAgMSNpiE",
  "key7": "3ZiXEfXmVtsErLSoHJcyayse43jxRtc2kJYPtZ1HYuQ7SBmNKy4bcKf3ByjzfUgQgDXsNcAKxWZFgzKb7epjmQ63",
  "key8": "2jrM6fBPERANe8GWcNkMwZQ89dXWoc6w78MHjiBBgyicEsTXv7QPRioLH9YVoPdizW1A9qTZXpREHf1qbRruvdd8",
  "key9": "3H1FyRtg7oWwQCa46bPz4fAW8ZCzbayAP3aH5ceTiiNHGBogvxfZZ4oTS1nJGSeVTvXNK59LkYSpDbDuVmW6Hysg",
  "key10": "5CWuprfEM9miq973AzEZd1mA5syRRhnDYhcDheQzYnFZepqzbaZWtdwnuHqqv5hYc52ebSfD6guKBdnCLki6D4kD",
  "key11": "55T1htoXVbjHHc6KrU97KB5wJNT2CYX335LmDivHT87wucEEkdoEMVGEkYf4bB2vyKbTxsY1qGvzDS7eyGVuK2QU",
  "key12": "4hB8j5cv1cuGnMdQ5x7vNcjcULUu78CY4jRLsFKVT539ceaaqAB9Xg6RAa66AZYLXLypShBwZzqTNdtv9fh3jfgT",
  "key13": "5TehsURmAhghjzxShvU2hpRJk3ADGTj64uE877KVy3XWztb8mBZnxbvcV8Pjev1gScY79cRC96ckp3ZFy9coaZiW",
  "key14": "266V7zddCmFQNcMz3XYcNKPoWXQrkUJ3J2RpsEXRjh3oBsKj5k7JpAf6TmgU79XcPnQ2LmqupfAqbAXc9NzkhoY6",
  "key15": "3C32GcASj7b7x4YSeRrjguW7S3mxp6fccnxSbmJ8sg3CBbAXQt4Gd9ZhYEizXCr1UbRmhKUniC7vc4wGfoymCRmg",
  "key16": "3G7vMqHPmpiYHr5UJhKGwF28s8ByXhGVVXqjyWEqVHjAQWoAoGmxds6JeJfSRUwm1FSM7K2HswR1xHRiC4dX3KVY",
  "key17": "5iAZ5ZmEGgGZ12Jhebkf5zPBZ5nSUt8d1rpCE3sTtaChsrZSVmLpYuZwVqCHizJ3XQF7wCwYw6XGpFoWrZCWgVnv",
  "key18": "66iCc8NuMqA534a2H1DzAf83ys3ZBGkC9APzC7SMLxALzqSax5d1QNMPW2kxYtusx4ECTi9GTkr9sX8ghCtquK6j",
  "key19": "4D4wfb7ahEeRfVJAcAtn2A7iKpWxNGaj2B5xn5pTjNtXUQa9hKw7aYnQDUK1itLMWzqHm85nzJfZpJkdYj6kSKyT",
  "key20": "4UR6p5xkP41oGYQEo6mkcusDWmMr57UARV1Ux74HSH5mxhvVyC1CpJrgy4gWZPDfrHBFe6F5YkMmgrDG7NTHq6Aj",
  "key21": "4cpHW4LKXeRZ7wj85jNgoLum8tk6AMjLazs88skAcCPEjW56Es5UucQPYyqyUfj24YAiQQajGwdhHr1fiFMwSi8z",
  "key22": "4Sbg4Cj1KC26N2C5vHZdhBpAVvhfG6a2FpCzZZ7GeKka2hz1y2xq3cYDVRMiT6tsmkRcKKn5zG3Ky2FdYLLD3muH",
  "key23": "fMzkwvfoUVCnHBVakHUPcJsL5DSrkPhvUkiYfME5DVkTnWPnPbVoQMBPT11VpagjR9yjqEtyVwJuZHCKQA2jgKN",
  "key24": "3G1oUxxgryRNdRoAFR3RuH8RVNgyVxHD9rj9Z3Ku4Xvi26VQuiZ2sGBo3KtSjdknpEauigGqhs17VX1wKTZQioLk",
  "key25": "5iGkr7NchAZ8Bo5AMizdtbZ4UahfuMc664wJyg7umeJrX8r6A3BDK7CS7BvZitWFoVQCsJaLwmQdJBFjSYe5a2zR",
  "key26": "5uUyhWzZC8PQUy97iDiNt7FzQZXKeyLsyZLBR5cWtqgkDe5ZDxsvLZAghdFcbYjF3HFhrCkGZh9J4jErkjiWhuLN",
  "key27": "2MArNRMjAy1eFBurkuQwnJo52agego8YawPJu7xgjZYu1q9yzeQKPeEjSUmRDEnfrGcaz3dZjhYhVKEwRSENS9GM",
  "key28": "4rY9jFnHK8NKTS7MgtfMHq3ADNTPEm672qML1UGorRxrWzj5BHER7rhNgMoxL2K9EQ7Yn2qohBy16VizT9StrHdV",
  "key29": "2FrjxUPc5mcN7vn1gWb1rWEFUJwfokgXN6SHbuegKLBJ2jWgeX5rem8k7VQaGMBNp2eCHfx7Y13obVfvcbvQ4vTM",
  "key30": "4z2WSgJQ5hjUurbXDsJJbHFnYGkCf51JmfthXYj5Twxgx1LfAVaR4ajmr4p7jZT7HewSukZVirLgdR1AZyeRcX7c",
  "key31": "2hZkkj3eoa2AxXS4pVQX2W2ZCaj2h1eWC9z5zQA4DhmYbUdb2KPqrHDQErB4eHYTanXYkCbNXcDLAaQ4hY62yZKx"
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
