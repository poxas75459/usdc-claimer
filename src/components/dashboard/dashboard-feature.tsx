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
    "2F5eEp9o9463fF5sc2BDxAPV7AeytdEvvkpG5etDENP4RMwPZpCPMqiQGbWCiqEk7MP3NUDvkutJyGFMkPFw7njR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y9g8DeojEBQsxSz6zkpdhW714g9HjMJ5miHpesciMTUL4TEmUWkWkZHfrh7XtDZdSBYt4KSWhqB5eJ8PavyMvLo",
  "key1": "37MLiZLYTZ3yKvsThXsmjjhWz7zWr1pg4vw1LfUwKRhVxwo2BCNZKRZezR8Kh1scqnuh4kD3TziwJ184aWqv8cgh",
  "key2": "4N9TrqxG25ijg1i6emtKSY7PaC8Mv2ztsdmFwrui14xxoXByU6fYTFRm6hcmAtKsS9LEXKCbhbMjvzg4Vdyny5BR",
  "key3": "4XupcbWDNGeT8Wn4Z4ZoXFcDdnfik4BuSBgwgjx2iDUxQPBBxmZdCwyttxPX6TR7J353PtkrjKH8sWBNc7n1hFoh",
  "key4": "2J9ZQrrFMfbWur7aAofTHpUX1cDzfpJnGh4KMcdDEMNWnvLCpkoqGVH3xnRC1eu3RgtQKNqnwMHUzQS2iqQbw1Ay",
  "key5": "Gnwz5Nq99ieFNiYuSk1xcLE8RvPS21t5BsNBBpuj9zf5F1Zt9KKWQxMymcQyARpN4asH86nSSvnLP2gwmZeRm57",
  "key6": "4gsAwKy8SsksTjWTsSAzD6Fw7G8mykQM25pnnRacKpqnDUiEwDUYnEVWEeSBUBFHKiEiEU55Yy1k9dJSdWKuvx1J",
  "key7": "4mPoad85wrA58juHtTCEUknkEWgXAi1BexvCQVeRyrc38ZNeqRrvMknR7xmKFfEjrFAVo8PdC9oXdFnnEsMwuuUH",
  "key8": "4gC13ZfhReU9AJRtLPxcXwoeeyaQU6RNonaEUHb7TTFtv3KNFpTcskydkxEwVXCrEHFnUSW8vxUV5AyFW8XGmDSy",
  "key9": "1AMDkPmaLHRh9UwSN5oeWkF1Zyvk9XQ5mxjHpPasFDB748nUXTytgJiJvAmWa5G41V4VM6aePKdP4nEMKUrxTvL",
  "key10": "4psjgr45oXh6B1sMTUjTJQ3q7cs4UMxxxh5RSTNGUxTRWT9kQYDaxgnkqbokFStQ9ZJN3MFi3nzY3136Sjo4fF9P",
  "key11": "5u7RbgZXPe5eVgwYqQZjCqhR26Bznq9g3i3AaubLb3LLy3nKUAzTqRawGpGGeoAvRmvv75yrEEU4H2CKDZ8UER3q",
  "key12": "EnoqvN9h1nEJ89XMMzk6z7whrPKXx2g94xcwyCrXJ8rJgGwRJWHKeBN2XZe2FeYD1huAdaFwSTp8MUDYY98tmoM",
  "key13": "4UKTWWiMFHXo2TCCy6XyBswRP7xggY3i6J4ZpN8tvGpfnCm9dZLZnSjyfnUE9zcHw6mfpoJgYxBsXT9KUaqLA1ZF",
  "key14": "3upxmcWRD6pQSeHmX91hJYTPwM7zMTDchaQzH5z4Z98bDFqPPyQtNuta1xgNt3YJyod61J7ciGZHzRKyireJF4VS",
  "key15": "6YQKBgUwf3EQ9YaYSGEWUrpe4P3AZ1sgLUnVpZJf7nHacy34GJKCSfxppgrP9CwjH9WCaAGyN5qGrz2BmZH236s",
  "key16": "5gBj1qe1D4UH9SVKhsBdUx4izHPgT5kTpo5LTWD8PCZW8v3icFcYz4VDtrFPPsia3BaUPq7HimNDwuLiSG4bWGQD",
  "key17": "62PPJYRrDKxYUoLh48ReTgQVCwCFWJtmJSbv1Bpbg9UfLmS6JinVaEW5Hz7CBvdxHZYb4dddQmjPe2yHLBHLj66y",
  "key18": "aNtuiLbvGC8XGDgPXS4ganmWvzwogo1oTnUWYMtK1dTT544hdJdqPBiDqBMdcL8JnbjTPgCzRH89t1co8KLD4or",
  "key19": "3J9ZzN6KFDfcomeXvS9Xsoh4xSsXFvHcYVYhS3vKqfqryjQWF6aXEK3qAhxfarqEXCbN8AFrM2ifodGp7fUSnF2A",
  "key20": "2N5chwiot1w5y7M44JDDEGeA4drobaBdxKNCSr9fHMMqXqJ6B7sWbwKjeTEgZR63NDut6Z44bqXtjZNAUvRv5KiG",
  "key21": "4ZUjpves43q1NwCfh8FasU5UqJXhKAX2PkZqGPC4DfhtaHgCNpubqt7QSJQtd3bLCn9oKe8Bd6AcfJ29yUcahfcd",
  "key22": "3aE7sz9tj5ZUqh5Ym3WbmefXfFaQfa62EHqJbJMBCEiHVH6csN8VmxZaVChPLQjvMcGmoR24oW4ZPNoM9DERAQ2z",
  "key23": "5KCFvfwc6FW5qVcW2XKG6HkDwrFeMfYAsRwDgZ1WHCXoGvrk7S6aUMotv9W8ZyajtQwux7wnbQki8LQssijVdnzX",
  "key24": "3PLMXzuMFCK6pJPrgMELQHMT8CAPw51oSdFmJamh4M8XJvgX8XijwKvDLrYi72zyhiQvfxT2RNr4e8Tfz5WGWL51",
  "key25": "LxGDWYCgrFsfcyoYqxEG5ABkdZFATg5Fmh9X7cPjTVuXmYvWSVMSbAKhNo4Wo4YKZnWjqJTj2CRgm5KkkqMNHk4",
  "key26": "3rK9S27MXrCiS4tEkYNSR7ry7bWTwDkBQGE9gfWdqn23i9RPCPL899Mj8HDoZ2W9RKfMrqfiCjKG8yhXPR2AJqcd",
  "key27": "5nQzsuFd1LBMxsHynzC2tD7qJ7PxppLTcr6V46J35MxVhfq4ppGLALNZ2gWStSsJrtLsQNgzDcYTApr2QoQvBqch",
  "key28": "4mzfzwKM1ttermy2jkgu6eir8mU5mHL2uMQfcSyKEEFv4wstUsUo3ZV4neTyx3rjXN48msC45SiGmKj4xXVnF49h",
  "key29": "4iYGZPmT9CwEkHXhNMcjzspWRHiKqvFoDuFmmN8WPp5RCwav3Lb3ZXDwNQH4FkWKmBLThagoDjzZcM9ax6WJD7S3",
  "key30": "aYk87nMgkuAF4VMaJeb3vfz2waUiJL9XhzqR2tAvu2LjyieBN4hjhYYSJFrkHtk2TBmKvtYuHznPxuQa5MGWRMe",
  "key31": "n4FJF7Txv4KB6McdbM4YanX8YHkAWGWvdJj5J9Kjhaky781Mku5pFpjMJVu1JeFUPnZpq25tpzcUyw9DxeNc7Le",
  "key32": "44TzKozT9n3saXJiTDktJciFX2qpZ57Xzb86zcR2Wcd7yri4z5fqrDWEkTPeNsJeAkAWPTJEgyPQC2aZoNKMiFxd",
  "key33": "5ShoGb4MKbwV4wPRYrwUJe5wb4rUpG67BbgyM4wLT9e6ab1uE2rFSZBvZsgHNbP5SyV3bwqUGgAqnv7ugy9MdBqk",
  "key34": "xrwSgCoFuKXY3Z28oVx8bMncv1g1eqiJV5oNc4FC91952xSLmzcayEr5MKtDzKYoo118jx3MkEDXoJosdNxgyRE",
  "key35": "9aRjci1pxGRv4CqRLyKLB7BG351WcPyYhTdZgQi58JaDrbLiegTduv1m9gfKFBwkG3sjY1qAZnUSj9Db4pbPrQo",
  "key36": "3BM5qowKSFumDdgHngJ1Fz7TchbYRtFaT1cefxMAqp7bCEgCHqtxbfctybzowH9Uwieu8AS9tCKvCscvhAFPu9eh",
  "key37": "Hy1kUkyxGBicYh5KfDgNZBBsvwfeiVxZ1ffA6DMMBt7jJBjGogWB5MH3nRn1kTYVMLcQiorQ9EHhsTVk8jSdcCg",
  "key38": "5Cdajnq9krMezhTNqRrHNQ7rqmwjTfda2XHhyAX1P6x1AJXoAhEmdKwrP3QpvazoAZfLoaJsSW8frmXRL5jkmxie",
  "key39": "5ZC1wXkm8YQXXHziCGAarMAhNJjLemRLQVSDuMen1vspsvFywfwi8uX2uyrfZxF8iQXwurnhf3WJfGwiR42Xb7je",
  "key40": "37URNPK7o27UnroRpSgVywzT2Re9AoiQ7Jha7J3J3VSSaTJo6pMnoaAz5bnH3AeTwq5s3jmtHTaNaHdbidKcYcHy",
  "key41": "2QxSzqmccixQurid4RqTCZQ2FSBL4DcfWUq9nWyGjVNQKvHQmsZzPRCkH522oEsrYzKFFdmwanNngX3csFrp8X9i",
  "key42": "4pJN2cH73b363pfAj6bU6phduUAjoQYPTgKHKQHTdoZPy6nf3s9nzAyXP2KWa5eg5Eu287SantNrbkHgUMyZfLDL",
  "key43": "4cSq9qpz8Bqu5HjoH3W9aVzcib5PWpquCi4gHraPSUghuCCfW6LqTYSTQa7sMEr6g4WwhwaQZHue3uqoh42Gc63p",
  "key44": "59QU5pf3JqtXGQN1y6K6cXPvRsmJhAj4PECR13yAkoKsydNRZF6gdTD8caDWNnb1C9xzurqBF8QnubJ16yXjzn9o",
  "key45": "v5GH1q2veCxueqKJRB2VAPGihoToPw2bhhi1RmxP6RfASgjHSKLgrAkVaDfA4XsXCSRDVfLMZzeUup2DGAfMVKV",
  "key46": "5tH8ztPz9wadt4y8UDcQsUb2RJM6etF77stZCM9bG1BcMLZjMS8o1HqemL29CtHJ52WmhxBiPHswhA3WTAKvHYQx",
  "key47": "3WFQogdnwzAW539rV1U4t7neVfpf76nWWfecz536UUhnkykXWLqS26RuNzYooaDKSZ6xK3qnxSfzBD2sWQhhBgKa",
  "key48": "Tt1bRbRT65jAmet5MR45CiNVytTc5eY3eL6gn884HduNAeSX919QdBrYKnhwncZJq4MNr99njoykMwowdAeyNgc"
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
