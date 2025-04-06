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
    "5VH2c7FKgHGTq7jGmhbxj6Nt7juVi8UMUW1EFw1TAFFRK2f5b3GBB3D2mQrdDcMqpHrJ5A32qXX3ordAusYPBGEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ypkNrGe3ZYLDSq8pjrn8kCHmyx2E34SaCZkADftBasjRaTwzdEM9oA27GfnKwYzV6WQBArH9QUr5eh7boTYu36d",
  "key1": "3bfkTGaXD9pDmDvFYtBy8LKnEau4ZE24BMMqummpe8miA2MTbennFztJkSjF9omoaBHsEWA2uzGvRR8g81xrUNZM",
  "key2": "2AmrCW5ehLJzdLXNp8G1sZs6YMTZEyYCg2dUj3UbW2hQ8w7HdpiAnWgeg3R1ghYG8VoD4rsMQoEBZgRv7FFgwd85",
  "key3": "egKUWrohup9zcSq4EeAEUkmbhiAaAMQCLfYzJgwDiV5NZbX9i3EDQWGD2JeBnYuJYqbu9KxpzZzes825cvzTS2W",
  "key4": "9MCrfDauPieQnfNGwRKwdT2QsFZBuJ6ceQZfF2zbcUuqtRhX2rp2H1b1gERcJJ9t3hW4tmfXq9HsAatcADoFW8y",
  "key5": "2yU3YjhvWh57wvkCFJ8KX8MgoEiz9bjzLwKLRF3mmx6jZJwBAwDaSxpfTzyMWpYMGtiMAtytLwwBzwZrEh5LDzJ6",
  "key6": "3rqPjnEqQRSw4oqWPda6HgTRu3RHDjehPKM7qtM7CP2p3GEkG5oNJDeeAjXfFESgTxbR4CBiUrjdFtLb3JtmhNQA",
  "key7": "Hi7k9siMXskgkcPK6NSVeSfogD1EY43xE4Qo2u7jSzSADiLnBfJCy13j5ZodpCYnoAgV4h8btkLDBKwJFYMBtTW",
  "key8": "3qxSKRbLYARwFLNv4GfcYM4hmvj8zUrY5T2YwAPJ88YaYP1y6rXUh73mbbu7Wy7TVgkXP8sQdoZ6Fc2235p36PNT",
  "key9": "4V4hXRwr8XZdeaeNuTEfCzUv7ykGXCXN6yYpzdRMjyWnp3d2uQALUs2TxUZ41L75s8fDNuHJzEn42UUCvoPy5y9i",
  "key10": "48i6vSYY4jXH4gasfS3HCaEntyYz5PBhzUFcHvZ9eVmFXvwQpmJovgDsxKjrGREsMbcpG5c9RJsQ7oaBLPb59aPd",
  "key11": "3RrfwHnp5wDXiV93PMuaad1hswbofkbUmQENQj1Mez6cQsxB92vytPxANjoqL4EPtx2epr8PnboPmJi6BmHJjw4h",
  "key12": "246UQARSjUbQBVyzaxyG6Sw48tb9zTans3K1EyRD4s8jf8xziHpGBNWLA2jXQNK93mJqsfyERQpGAv7iLQ48dc33",
  "key13": "4Hj2Cfvo1Fsvp3rqduLLLZCP1Se8oHyNu7MvyvAKihuwjwQCicmL5Vi5GzDe84cnqtuNghFmnJkov3j8indRBubP",
  "key14": "2ahmV7TobfLcmwZgJQfQFxLP96ZFE7KbFMQGkGZ3WNfN6S6QexuUpNoCdDZYRFgSLfXXKVYVRbbyTdXp67BNuew",
  "key15": "5nicwBrfoj9FCyU97K2PP6G5xjcacKw1Rw1icL7ec24zSu1YUiDG5Aoq6CbdcPfKGxPzXbZzqoEG5da1V7abB5c5",
  "key16": "2HFhzTtortYhx9a7FzkhDhBCLHqt7sruAV37LXDhsL42zMMizm7fmXmNeZh5ekSX1tJT1jWdB7vk2zHuJEKrYSXL",
  "key17": "3Wi1u52zzpWYngHgrJmvLudu15JfUxhRKhG752CJK9vGgz1TN3qnZ4NojP6xyGrm8n7HXiT4GLZkRSHQeLug3QVx",
  "key18": "52nUsq5wxe4mVWdxfNbdFhnw4jQkWkSsaGEFXDdCHMpko4vX77oqy1Wtky2XdCGQdJXJStBVihdm6eUTGaa446bW",
  "key19": "2EB9nWNTgESdxaicAuh3eRMvp3yLyKvN9Hfn747KELeXfn5qqRvuWPTARi9Gqs6aY9zMotDxX2J2j3FRY3ZRWKj3",
  "key20": "2PAVfTvPV3xmFJwCHaPrbEzgcstUZAmQau2Xtop5bzBwNhzxiEVP8eWhqnxAuhogCPhURcXoKLxFJhFgTdixomLU",
  "key21": "4L183wT9JC2V1MsT7vaGVZPFZfEJxFPsQ3MZ72V3m5PNADqrR6YnKVrSkgpqo1GG3Rd3EZRDCoZ94Rq5XASZqppd",
  "key22": "3J4fdyUsLQvHodqxav8LL2CS8naoQ4eFTqYw8B8hMiEUWDuNVVjgnTfjm19JnLp8uzyGH3LJwXDJkhLff3MHJTS4",
  "key23": "21ghrtG44GyjigoWpKyvTfzQVWjop7yj9SQ618zaF6mZtXikYLf9rt1UD6htgdMZAtCPbGTUDaREAWj5BoZhyUhi",
  "key24": "3rtSCdRb5tJe4o8F5tHwgHxzo1tJDmoVt8rKG7ofKd2WrA9X6gdUg4WbQVbdzLtQAHLZ3inL4r75Spge8WTsejMi",
  "key25": "Fgv7n3nzG4tX51af7bH4QxCbEn5yjQpHUx5hD41LKM9LxbgwvNKqVGF8RtpLjkSWkwxiD3b5P1q61XHwXrJdNgN",
  "key26": "4wUKWWyoKoiR4tx41q5vuHLjnH9gAZdLtV2tSAFLxPv8SQMmEoctmqcx2EXXkzAUCgRTHQeCBU4BPso2VTGFjMgX",
  "key27": "2zGBwLwDnBjPWNwMzE1Uzcp9nVn4d9UrXbtPvQLxFfxfbmoex3C2XpTMkCib8vpa3FdBRnunde3RPz2wdSA2GMXq",
  "key28": "4357CkJrW4kWXUW3nY31kpKq3ot8M3PdHpVHkmL556tZgkD8gj6Y7WEpHFnPh3Ci3p9BAXR346XcZGG4vu1WeiR5"
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
