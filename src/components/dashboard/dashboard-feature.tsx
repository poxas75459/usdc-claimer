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
    "54thWNZb8QtymDFzjKUk9rcnsbi9iuWZBG7qQkS2i3rhgzcT2FkreV2mb4XYZVigbGAfw85woEgRZo2kTJE5eooa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35mbz2VkqxBcCAJJtQEjraubkkrAuCnjLFuJDkC9s29qEafB6WmXhWJzBpsE3fgMC1nqNrva5mxTnqYvxsmREzsZ",
  "key1": "4BwsAKgrzM3doCMfwUBQ1pTSru1so87z58rz3f3yNqUdURLJ4PTGzsiYE4ctEB6EiH2pD2T3zdbMwwL819eZyG4i",
  "key2": "3p2kL89x87HKtTTBDh6qZXnVAkkwQhYx6y8AbE9YWRpTXSUHrb4pwB7gJj8aY2R3bkzEJjDbLB5fM8RhX7tHAQxX",
  "key3": "4GPKfu7TgYpvb1LDSNMfP3t8qkFyTzpLgUzguCpK3vyaZoz8m4L93WC2bGRF3mgo3qeHQDdqfzq3FeVmSJ1ZNdsA",
  "key4": "3GXz2xknUr78pzUDDWbZfce2ZscVGHGbANs9WCxAARgmtoo1XdiLZVVPtPA1J145YwZpXpnrvonNTypoWBf8V3fU",
  "key5": "48H8Bb6pELzNpjdpXBK5dCB3ksPL9sf6mF58zPJAtbUj1CE5kwDwuBAPqBzPgsSm3xjN1jT3PtCmzU36QvHNVfHK",
  "key6": "YGK7mAFWLJ4RqPJaatGyEwwaSCFXhjs1k5hCwm1oAUK6QjoBmvBub8guWmTTpsBhVh9Q1QKxDpGA3G8BffZHqLL",
  "key7": "4JKVTQ1iaxbarZuNqAB9BZKNcLJVY2nqBKEn7Fwvv5x5ofFyRPQ57fDrLP1Bjg9AjU29ig5izMfdnWWJMJUKjsMH",
  "key8": "5q2dWxKeJgRfuWsFma5KQexctBe8vnWZQzTCnc7g4Bpf29JAb8QgqhhxZ4r9yJ36qYXZbdU7ZW4NSnP7Gg6ZxkWr",
  "key9": "2pFy85tE1kaQVMzNKu1SD3t5dyXLKgPqxLsS3aG4HU6wNUHcSicC9DSnLk34CZLXdD2ySDLtd1uGMRERHZ5v6LwF",
  "key10": "2FVfUhHTTR2dmTezJdE14EtAgQyacCtMi49ukBsGFwNZ3XGqoUod9ksy2eAQAGJLT6gWRfHZJdyigme1MW1PYGUy",
  "key11": "2E4QxNRQr5jvFfbxabJaDHDwKcqdJcpz3uGEkd9ACw89nHjdRbnkdX63RrQngVawaWCa4YHXCV9QGW5oqSbNfJTe",
  "key12": "1bijq9gXuMAwgFrreRbgAsC5grARpA7kT9TNfnA8kL1C5NPDXrkeGdbrsbZTUtwer3yHpAqCqKDTva2yz3K88K7",
  "key13": "4vmJDAX95zKd8yJsTYeHozUV4fUgtTarGNY67kbAN8qVAonJEGD6L3mS2mNfJsQ1GsDNTkcbmcD8vYN1R6wt4Jqq",
  "key14": "5aqnew6nYF16jUoGKug89niTB5HXchy86ckT1oTmK5YP4Xta48sQHbe1cuRPcE4kUyyTB6Xd4v3dnumqx4xseq3v",
  "key15": "3DWf6m5R92exmUhpgi87Tw7vKkU5QqtoQEHWaTsgstiWJZK9C2hJT1PfVgxhZ5LkRyx37Frox3JYBhoAmru28M2o",
  "key16": "48uEatdYYoFMzWbiEA2PajTMAyWduSAuhbQcSXfWmoBDT4U9HZg5NzvpNQFYXBdN2r6AizKt1FZgcjpyYdJ3Nur7",
  "key17": "Lyb6cFKFYH5cNPxWWE6nDHUbRZZTFdkaWheDfiXXnpxkC6PP4QGf3NU2bP3iEm6C2RJyDnnws8j8uBurHMw7e1U",
  "key18": "5doB7SmiAzLAGzCSs4HLvGyXTBvMezaAeQnG7KvhBD97LTXQ35LV6tWvy4fQzV1Qv4LkjqJJnn9QMZh4G14u6NHy",
  "key19": "2fzGrwVope5yGGhBob5uRTea4PJcAw2oywwQasPkkRrzR4DuUp2ELyLtpCVKae6rRjZ29QGLrDzGeKxZqanRSH1x",
  "key20": "j8nQ1Uh2u7EQaWBBeNrzHBif7pW1f7ekx38XZFpVKUhRQn4qdTBKYDN8ghLGZYAtey4YMruhVrvPbd2ueDrEm4A",
  "key21": "55kHwNWkaVevyUz3RJ2oZQRoxbka9M8TjYyHXxGitVFW1RtEvigofP28SQM3y5sJs6WBpfqjL6jfGGWm2mFvK13i",
  "key22": "52s3xYPNkzSpL4zZrz7bh7GizfsBvRPjpDTUzK2EoAxvaF7CkAH96Q3VfEVQHQfgypzCpCZwg52XR2LTrg9YER9b",
  "key23": "3zBywWDeqCKyTe7Zwao3h7gPh5rBqTJVAnBRBNjnTxhrWbu9xK9L3SukvQtptTKQtVij3KVYRcREDwboH9QiMpEq",
  "key24": "4TX2ZGAJKJkErPJrmagXDYhZWaBFFBRPyjZRsRqkaTNyi3J7nRCmdmcBRyGPZkQ4otBjg7X7T7fRTvMSJNBomm7r",
  "key25": "23iWwnZC3iPkJymVXJWwxxgwRpupjmQTnNHTFYLXRq7txQ3MBJMbpv2vc5V8bhmDvb64PB2pJ5FKm9kHGqyPFt1A",
  "key26": "44mvnvMvwZDw3gMpRc7DAdXSBmiqK2EuSzttDbvm5WN6RkHPgxKcguptwrdnbWLTjiYmCiUK7t6PR3BUiUmzNZBY",
  "key27": "5Fra4kc7cZydE4dgFJZVkXL1FX1feeSp5tcmNo39HFndDwTosW24LwqCnd9gn66BG1GgzVRZ7pRMAzGnPvJGHzFA",
  "key28": "4DdUieCnFWZE5aDYJTYrULPTjG59cmyu1XfzzHg8Q6opswPaArPFLV5jD8ukBLFuUgfsTwYPVuPHZAjn9uKexbmZ",
  "key29": "2RFb7tMaaLPm8jxBzmixBxkJFysLaMqusPf6viWc7pbekxFjy1gBBwDseyRx8ciWRHFvSKYzEKBCdKQdCiuVE8Sb",
  "key30": "5LzHeQ4bkKsT8Rto5rNZYq5c7QQRh6yiG2cFZL3c7kLNmJepLnccUTxzkPP4PLR7T7ke5CPBjfV2EEKweiUG3zxs",
  "key31": "23xFPmZ5HjjkDu3X1SGMECsQie7Fx5vPqkvhWE73RX1KLGPiQymkHMWLpPCJWkwoFWas6E2VvDtaFLnNugNvg4cS",
  "key32": "2n2DfCVmTbfa58G7HSge3gKcjuLwDEvdHLsbPeWvX3nLCUGPiTaaxZdP4xmQixviokYczUqK8x7PvNTojEp5MvgR",
  "key33": "46L2qYixHCc58RzwYWnERhWXBWKCu2R2gTv81cqp7MrWLd6zxf4uMAVvkGvPbFWroSc4nBQD5XNP8YSZN9aMKgUc",
  "key34": "UrSy7j7WoFL3onUZSMf7Jb3p9NKwNfHLEeRawZguPeUmngzkypF7A2Yt86EFexZw4xPXzbZ7m4AKYnK7gKhCxWg",
  "key35": "43wxe1QGnzqgAf4bszscZ7CrBeX6HB7Nbn7jGt97C1xtNAL47k6JnuEPMAPPUJxtAQNePpbx61jGhAHgmQ74fz7v",
  "key36": "4SbGVEMxZtYvrEnytwEfMu2oT2c9RFHoHvEK82AHCA7gEYDqCybyqA5SUzwNxWDEmV4jTQjEFtgZcPqbtuWagBaJ",
  "key37": "pUoD7Ga4JDoVJWfdHQTcBy4SfEDptW1CUUscHihKUc5uqWyZhZGb69C4VMeJ55HGZvEvcrF7iejKT1FGuN13oRv",
  "key38": "4xxCckvpcdsddsDaz7vFfTt5M1nK8wHcc2u9UcAeEC9TCftFvwqtnmKNm8W8WKUXmrM5i3CqELrebW5CjLWCHa6b",
  "key39": "4wQgDmeyRY9FMow45XrXpH6auBpveX9RLqDoSvgcVtcyxPbaEdeVf68GrSgCfhF3qv8yVMXjmYvkp1xxyKwACds6",
  "key40": "2seUyo5XL2RPt3fHU14C4gLCKJk4t17YpYLHZpo9CuDD6jgjHWfCMxPKqQpEJixiXD8mWPZpAjWWvucbcnQ3Dj4s"
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
