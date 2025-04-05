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
    "RBWJtAAVa6JgPW9DT9RkAKVVp2FqoRaPb5Pjn5cYfUUx7iJhNskn5DHeEvbQqE38C4s7NG7G8FWt4BwANc9zaoa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X4jx3gZPuF3LuTFB3phgqXmKCgY3bLGiDs3U8dVBH8MvgDTgaexcQqVXrq1b8THBaaJXtrBuyGJtRxyrgXYarqS",
  "key1": "2H7hMjxgGJ8noJQkmrHuEL8f5JK9dH7FEmEUjeiwxbnS4SynyV5v1ce9Xb4edKoR1BrgCecYVWZuW9cmrw77qjVP",
  "key2": "4xJ9v8ktWfW68buKF98iRyNuZ2iTwgEmvqYUBwZcjTrgE8ztYqRYnry9zAhKWuDBS3xq5F9wtrrEirXZ8tqhLahX",
  "key3": "3HuNMKo2SLpacQ79wS9KVeJXG2Rw6Ja4XiwEdpCKu7gvL2JcBJMzCCUcavyHCueA3n1RdTc1SHpLFiwusgXQuSx2",
  "key4": "5yeQ7pSBzTbKLvMj3HnhspgUZZJbXGXfaZjwEqgnfwpa1UsyfbtEMWmsaWshQQsVfMYoxxxdPcG6zL9N8NcGiRtG",
  "key5": "2C5mdS8mfdEnAHurHeTj1iTciVLAwaEPpmYj9MuWVJgcVxQihjhjVzuMc8cLgr5RnccbDg2E2CuPcPHC1kdzuiyk",
  "key6": "aBAPgzY7iYWZW2AP8WNc9JnrrmhrCJJX7Zk5XBX5F8u5onRtKfjLVpppEftebmDwZRYrWeytQ2nM5FiUTafSWCd",
  "key7": "5NuQtmZnWYjxGNEE66Nmy1qMKzebfNxTPPDDgTMU8eMKMX32nm6amziodiSmuK4Nd4EmFCLTUEBZvRwDkahn51RS",
  "key8": "3kH6cWg8BQfCJXtXTvAqTEXfE9PkPLvJ6C3hVwSEDcvR3jqZPzfPGhmz2gE5XSiffh1KYjmgU6PHLxA11s4ewNyP",
  "key9": "3WyT7DE5A1WBPXeYu43cywTpzb3HKfxTneLb8RugpBDq5R9GCTocG2g5UgwRCf8fmyJtwFW8bhYhToFS1DkCkHAN",
  "key10": "WHm498g3QPEkJ66SbUWYwy6gkXiuJRgtJLemWhnxXGDUc1yVeTtqyCYTzbeQksZRhwQr37JCiK536MMqKaiSo9L",
  "key11": "3ce8ZNNo7b7hq3hrGkyP68wfZLURYdvbuu6UkjdufLvhzSqnkCwAwxMfYx6jmP711N6WCJJhhEo2hMrZxTUEBvyp",
  "key12": "4nznXnxfWpunox3CMK1hzzMP9SFXu2BMQXWSnC9sPHtmiKYC7RkXTicYK6r3oUZpfuxmABmdUWbLQcbyVRqEmXmQ",
  "key13": "XQs6C7sMAn7HXaWdacdQprvT5pbng5ZTsR44v3Ff8nCy9rcEpSEHpdRjGiBhYT2W2wpEtvii1yJt393EJ1ckxZX",
  "key14": "4Lrp6WS7bMSKBpWJ8H79yDvQyNJbS9ouPArXZ7WeTyBjtKb2j5gojpDySR3A1ngf45RBKmvqRkH6NCqJgjZJ68R",
  "key15": "4RcnherkmW8CdQSu86PUK5FyvLrx2pUWYW878B5joBAX8NZzuxxdfS4QrvdTq9sxL6qFDQdHyh526RPx8nSu2bMf",
  "key16": "4it5twJ6MkJMKFTD7agMd148fbFuRaEB6MAJ3wHFKwgCU1Ypnri33FBViQoTQHREQA9AbzZ3zTnBox94LmavjhBZ",
  "key17": "pADNsDD86YWHBmbfLMuPtYbDs3sHKwpjNZZcNvDmLfWg7v6GAUKP6cvW1zaSGCJ9WgojEPvHSR92ik8i3XvWnJT",
  "key18": "2eY2zJoNnjpPUeU1fR4gtJ7wnvaxqWvtn5ewsmVjMYh9PqN6tttqfvcjjZzBCGt8xgkbn29YTjSxJREtJi4HGW6s",
  "key19": "2hwcRDBr5rdnVbTsJy1D3tqTechu5LcTy4SJtt4aFeDxTkBvZ6gyLVZjUYtindzw9QArFuiJ5yZtdNmS3yDUFB85",
  "key20": "4b9xmXWZzsoVy6DPtSSSQBMAMRusqbbWivxaBiUBDmBiWC8WabB22vshQ27M3kq2dFm4xtVmabsgFPMMYAqtDxDv",
  "key21": "4B7C3KEss7e2WUCUmSCqA7c57Ta5gTPdHmRQoX2S6FUw3An17pmKhWoEHEMEaKDx97FTVJMD6gdEfbKGyd42WCQ8",
  "key22": "3611fTj74VQzSFmhMXEageLMPWaJJUoMEkV7LfTn5joPwRDW4bJ8HtJ6Q2HotMTg6CEXwnASayDMXb1acHeCtt6o",
  "key23": "5yEuR44zp7eEgRGKzAZYSAeR25uFLDBxSU25wDodci27NTNXE1XU71Cyqb5Xw9yXfVpksjvEHCv3C5ig8rWN4gsK",
  "key24": "9ThmQC5Z46hfseKJuWHWPEt4SKjYf9Fqw4pWUeeUvQgiBbrcNe4rSRDaBZGtUc2M8StxFkhYpCNMzq1qW41fwjm",
  "key25": "2W1DhCg1zeSEZWuerZQXQgjbQjHoQYpeDjMBe1Nej4nE4rocMrFofNg3RGHx317yevCJ4VHyW3HRfUQLaGZAMwGw",
  "key26": "65eVFr4S47HLX5pAGkLYy3WrfhRNwf7tgWse64N5zLDMDgLJuazX5TPNP9quy3uYMVhkSHTPTAB37mqJ7mnrZytH",
  "key27": "3VEKxiXsQ1mnbcoCcMyY5cyYrSfB5dukoAU57B66HZ5WWbwuSpJQUpSU95Z61AGn5u3iRTkQ6GkWwxS9e2jnwCb2",
  "key28": "5a3L4tHYXKhVcfUfd1LSsD3tfFyZZWXCg3gMJrxdAW6fJDguyeC1iNn49q18icMsHmmRdZSN3dtiGuRNrZmwEnTA",
  "key29": "61B9R3VtEAeHFrWGcq6jRTi5NdTAAPkWpxQiCTzLGzvxYoQrbuAEjwfaCQ14o54KELbvxvkM8sXB9sMtrvq6WrHh",
  "key30": "2zE9A7N57ahgg183qwSGqP3sXz4q4rRMdryoeWJpoLkVZAEdvUcpDyJCodNoMLVVPoaYrVmP5Lpk7ZVhidQmQK35",
  "key31": "5bukLPNyjdX2DJdaii4yBRciQmAvFBiohRA2B134YGctRL35HeMnNbzFxqZa8Jb1Cit1huAU6ZZzhW6cfJdS5FD5",
  "key32": "Y59JDjUEoVhpLsMuCyKfeuR8CRLGrmKzypoD5T5UkjfHy47rN8UxDyThEhNuHwhbQVHJmGDb5ZVZ98aaKB9HYTj",
  "key33": "2MXsTjwXd6g8MZ5zFD1X2xtu75Hq8otMqpXXAcHNbzqoUwKx31gU8ZMG853vwW8rSSnfRG7x49heKnD4LQ4wxWJD",
  "key34": "4AZoM62SUtPXsg6Q5FQC6fKLpYfte3wvTKzosFXr5MiCJtEFFUmPALFsajuvgZd7P957c3Jh1YMbqPRcMCqKfTk9",
  "key35": "4s9YukTEZaey4yxsaG4EytcrDmBZ5B5JfkWMPzG7qwaVZQSqvKe4gpnbkbrfAtUirCFUpacte84M1HkAXspp3HU4",
  "key36": "2PM5gXbjeH7zb1hd26xuvTQfZW8Fh4LFVaT7T7PVWsGhY8MSnp7kp6TG2NWGpqbwYHkdpDgvAjKxw3fQgTdbYhTJ",
  "key37": "53V37ceKt7Cb2Ff7vgBYtnkTutYJSDHKidncA2UoaZoe55qQrb1RJd9VFSmKom723dXGjRXVa5gXT6kUKGjwYgKk",
  "key38": "4af9kebht5AjQivkLf5otDKZB76yfizabvmkMhoEHuMYYCj1so22NcS1wVDZ8KR9mdrqZyy6mxFfHP4uVUoGsZUB",
  "key39": "2aZobJa4LkjfPBgDZZZVY6MGw2QS9XdPaGztRHDo9SFLzPSmPftR2zWsEdYQnzoWgTTTh1522r1CPqM2k2634hM7",
  "key40": "2EEGxHCF1KgL3RZ9wrjjWxWvR9Dvqvzc7uV7HcLW6atdjp85gVhcB9rqLxmjGDjuftYPQC4rgiwxRcASSzJAByAo",
  "key41": "2HW7zYbM1UWe5xJncT2W4WVFvMbA1nXB4BQ2KYuHrXWuFZN1LBkcuwBuYrVHTUbrGKeoXa4TtbBFQsbNRZGvzpaT",
  "key42": "4VPT3ZugFrbp7cH2KQp41hhJ29Qm3CVttgwPhAmKQSvnFpDekQ8NaNL5SwyKma6fkupCpPJtgwTCK8i7A61WGZEU"
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
