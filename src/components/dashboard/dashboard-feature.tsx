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
    "4Qi2q5CGwaS58EezLhSUy12qHABLRSxcf62yEzMBWSxALD6eEp1eRxqU89UXWoGcNgbLZKy3hvhbeXtk9V8WSLsQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qqe8eZCQjbEixvDKm2Tt3B1YEB29XWmNdzHfcivE9utDc2d1StNfaLnHWN7a9LN7nUtt8yCQMSPEvrvoRYtYot5",
  "key1": "aQbQn6PzR5brZGbhbHU2vZTGDiSa855bEBomjrjWmkpr91MwP2Wim7jRWH55rSsUCN9Yc9nkU5ro4guEkuTt8Ss",
  "key2": "5hVdhkWacyNwvzP5c7D4AcAHBbMcAJYJ6pD6uNx9DNMZjt4SRjCGp1jyjNM4pfvifqH4kEmtuEdtuSdVQkVVRKXK",
  "key3": "3XkwP6yvJJfJNE7ykmRQph5BJLhdurvXYgRKtvAWzvb8PYFkdq6DcFiMXTzeWDr5BUQbgV2QqpQVcS2qiiZ7rpiK",
  "key4": "4tJLMCvCBnURaQoh71KDW4K4JR79DnheTKdtd2hSr9xKc4gHTcbd6kEpMdFjwRtf8cvyknfXy6g9sTfKjdxRvY95",
  "key5": "43cRihwZ8aU7ibgndFAYdiF2oDpSZTxLQ6t376k1dSfAZdMqrfexzH1B9Es4P6iZtfSgsEFQQoZtMLFtSwFfDFZ7",
  "key6": "2br7ZRMmPZSZexqH3akkAK7qPKYn7xw3Zjg7y4xjKyhqMW5gWoenoWNesebcx1h5DfQDqiHxF2f6W2pkcs34cMnz",
  "key7": "Eansuos3kJgaE9T4Z22AgMYmM2XbC7X8RoLQaiQDxZ6PHjugZdJcERZbAKgcEVGKAbA7n5QvfsKUCEknmA9kMqq",
  "key8": "5AuK6r384zexFDv4DG63qbb3F8dSWsmtEW5eqVGgMZCyfyNCa2NUYeuShNxECrsAbpQAQHgw7ryFZyKht66cDxTi",
  "key9": "45w6ADJFBPq1cenzAn9ExHgCZcYuj39KfVRrWEGPPsVRbUiqHdiSSX7rLLpbz64VdvtdPzTy2wgjkA77CvCnJk8b",
  "key10": "4V2Gm6WmmoJJ7YR3oTkavxRsFatEsQYgxURS8SZYADr792wajEDP73pXaJT3xT3kE5ZS3KFuaGa5ArTAxu3MDfvq",
  "key11": "45oupVnY6BQKgE3JGySXTENX5vEUPb38zT1rjcQV33Q9DBF97btogERWwtw6aUAmyaHAW9khkHjLhAn7ATYgzj8y",
  "key12": "31ekAiunJTbE5qCF2MUaV2nr4EAJwA8WmRHx9H1DK63MH3expbNrEZqGSWtjCVgBtKjvL3GyVudDNZfkGS8g1vc6",
  "key13": "3e6682qG4ijeLgVssVjSoAfddL5iZVJs34bZ58zZc1FycanKSZQTeQkWSGvqEbqbkh3GXt3zBnAaqAdK5tL64S1e",
  "key14": "5VE7RpJLjecwaA879fqf3RdspvhfyGL2bYsg6kq8evdUtU4FgVMU9TQPGwwzi1XAFx8GCK6PJWXwj5MR9oLi8Hf5",
  "key15": "3dJ7gjYMtSDvyccE8dSbdaPHviFgxTvrpMGeS1pZaEFh17fq7hbHJvRtTaZJ8RxUspdgVotDy7m6rUzMdzcnuh6K",
  "key16": "3e4vhAE9RLcYH6VaVSWzBoZ2uVZvhojCxs81qzZqM53phM3rdutehy8LWjeo5ZBZTL4JmfvHaQgdo1cNk89vsgQU",
  "key17": "5tfQLsZJgpkwQAZ19ctcxz7mWftXz59dknxPj3KDTpEGYUQot2RNg5itQ6PHBQ3jWoBfzcoPtUgG6sNwiWik7t3j",
  "key18": "277bPZK9x4gxUXY17ms1WovrLEHsit7dTbgHbGSouaCRxDEx7DizgqCmMGnPaTPvRnvRvzrUe1hVzXMRQMPqmryy",
  "key19": "4GzyTVYSD5rbkYcEPQqnpRxYuinqXNexAzkfapmkpucJ6hKkfBGqUwRrwHzhXt5h5HvFxa7C8kKvv1HYZXnN79ej",
  "key20": "pHvs7aY41F4BJfr3XvKwHnMVSiAezzWgd7DTNjU7eMSymTnn16qXMYsqnxPbb6TBGmMU8TxDhsnVXWA4aMn65Nh",
  "key21": "3amudnhvU14eeGFrtq4NM3VxrBbBYYSk4Z4q1ktxqLqUsbypVbh8Re8ibHdLWaSBt6eFcQx8ZhZ9oSSTXavJ6tJf",
  "key22": "67TjUZYPDi7sZb6gNF2ZXpuwigViqHsehssBbQMAzTRoWKQ9FYEGHXyqBy2MV3CzCotVYVkeoNJb3Cb1CSGYqU7",
  "key23": "G3vLnw5C9FxKdFqoL73488kSQWHxnKBMYgQMnXb9ZaXFhnifcek45akuZ8tJnt2FM2XSKu38yQXsBFvx9CMasmv",
  "key24": "5TCfJGt8ip4QgxjjmGmoJhFnSz3C7dMtmDTReAU7UpQJ3ssMxGVH9hX8xNtGoEwFEpaV1c5x7nNubRNez5RJfyrg",
  "key25": "64qoaTLyJPPdvjiA9oRrph8XN8Mqyrjxyq6EHxmQyodBBJtsX2AJnfFupdcGGX7BwZ6WE5CbcunKJRhzqUD2b6sA",
  "key26": "5WKRALJXa99S3fAVX97A9BA9zLScoeEjmKrtbPHzfMVSywz3RkgYStg8Pkqcfi8PHfK9FuMhoK4xWtLsGasxnpRQ",
  "key27": "4Nj9vY1t337pJ8KLjjtzQPSWKpiYRAUzdxr55h7qQzc9KvngJtpEtpFxMjaNqJcehkMA2XR94f7VWhNwJUqebsGF",
  "key28": "3pw2ZMjddaD8m4YXjJ2sQGPyLTrKwDMzBSBcprGJSXkLzkUExA4gikJa8b4G47Q8gERMse3HPnSTAd2RKiBBfUCT",
  "key29": "roNfvqibMoDmnX7HVw5t3p47yM7Gxbc9Wg9eUiZb2JRwJyuoY3SgVxGDRMPRPDNMycUE2Q98tqSaqhywK27qZUm",
  "key30": "2UgXJxAcqxmkncWnhmHjQVUCjV5oLP5Uv21paFSkSoNmrE62jMtodgstkWtm7CiK1KV3KHdweTntRLViBjSryq6k",
  "key31": "3zmEphA1ny8xSbfAG2S5fiFBQ5M2c78ufqABCavwP3NnAhY2QtDpEPaj4ctHcvvhHdPTF76m4YgnFpS1Ek5oTckt",
  "key32": "3FA8rgAsMg2Svdzg1QNrwKyGwm5AL9785fp6NMDuiKYaFw7yUgWuK4cRhL4YXincnCjYEMdPN9WybZoM3GWdrmce",
  "key33": "2PeGuRxrhcaTs5moUmjxuxvBp2SqS7oVkwhcaEMShaDrrSBt3Ryy7aYa2BXofScx4rf4FsAUPsUsqjfkCtKjFLMM",
  "key34": "2mPxM3SEqtKa1DBDeqrBWUXnohkdwJ4HdDipCYk73s5vUFZTyWYRBT3Pd6N9cefXy83u7DZvQPSsUCeiUsCW8V8L",
  "key35": "3Z8krKqvBJC4ZYb2RnNM9U4Yw1hBDjyv4zrjxJ53Gc8G9abMsvZJKAFf4gh1bugLSELtaPhm7NLVNEXgGbocfp4f",
  "key36": "gpELQHgCHHmMPneKtm7Quuo9immJ6v7oNukZSB1qvWFvVHoY2BA7rCpm77JGtnapWXZHHkLgGdRoNCGtBiE5XZt",
  "key37": "2qAmUaq19yEDnM5sZrYcqmdXC9HrU5XQJeg1wcLk1Xd4QYu4hmqU6dZB7VpA7NZ7rfQh5vr9vvL2tqz6y67wTatE",
  "key38": "4UtwS4HCTWBU6Aqqwk75QUt3h5hW6tXj49rPQb3sv4t9vY65ufEXoU5XWEV2rjVHG61y1uzgUoYSH9DnNNCNMJYf"
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
