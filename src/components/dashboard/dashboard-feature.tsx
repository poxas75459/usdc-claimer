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
    "4zhH5jPywVNgpqYeQcBguap7T1aAk4vvRZLLkxKJXvcUf7XsnSZG32XHK2Xgm9TjY4U3PEUBigF483uuCo9Vbt52"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zQ4X4UG67zwBnEH86b6CDfWD8X68rRGCF3b1Ngg4QgcC3tW371x6JFBJiMZ4q1CmUx3qFRRJpiuomnCaMRCMRcW",
  "key1": "dMJhaqDaAAtqsiXxVcMyLqy8zihtwiFHGjdtvbGzEE7J5RTSRYDbcS2n9cnEjTisCGoNe7UFeuz9CJjzfXNHggu",
  "key2": "tnqKxwqXQ9mQELXtAxLZeryLADHAL5CcmxE3Qca7vPbpEdumFyNBj6quRzdjy9D5HwmiU31Kq9FGovBPJKVi59G",
  "key3": "3aQmSUkjzoZxDAzhmyDrNBYkKnPPgoC2pCcTJQA3k4KLAtP7QXaRj4ujjNEJbWcFito3Gbr8FdnVMTBZJoxnGpAN",
  "key4": "3ypGPGBvs5aFyM5HbaJu5rvmQHDLQbKKmD3wchbT953udQN7bqNwdfJF4C6wzUNp8iJQfQUV8rkHx5oFmra4uhti",
  "key5": "21Xm1TYJvYBsxMW8Dtb1sNJC4a2vXuiRLzg9hnEx4oVyW9MjivZYWE2N8FZ12ETF5kpqChYiRELGGUfHbQ7u7CrT",
  "key6": "grvxCpx8cAEMC83taFmBpdepQqAoJeowcJ8F9zBDFBMBvyQCJ9egew6M6AoANmXbSbqgWLywoqZfoHLbJTrXtTv",
  "key7": "2jbJZ41yFTp1fyRo5JT4dhXMjCmwVqAsxHmyXZeKTGLX2dyRGXcm3vSDg3wpAt3Rwopyu5VmaSFL5Ap6zgMSGUk7",
  "key8": "41KzMH4UPaKGLMuw8aB98f1oo6B11Zc25Pom5uSK9qHVUdXSUJuC773YyxSN6vosTfxx23vZrbtkFUEM8a8RcMsn",
  "key9": "3nvQytJ4u9gk7RrzbGghcjwjMV3Z8SKi7Jyj5Wox4Nd3SLYA3969Zjjm8zmec2hmuTh1CKrdGPhv17c4Huh7uoRw",
  "key10": "5tmMmxyxNk71wb87ky92MikNsiTKCF69x8QHfBYgviqAPKwovr9RH1o31fpGFXf8gzifdu88qQvc9xu7FTzUgF4G",
  "key11": "2DGoVUYRMt6aLqgd12yKnq5ezm2Pfm7po4SWUzeXRk2ZNWmaVeALZo6r9uB5ZFxEay2EbkiXNs78to1ooZ9jxMt8",
  "key12": "4spUXQ6KYahuhAYK3joYKFYL6PZzcNbB2tAG3NBaP4sZgDaeidxLKVEwdAFGCHCLxvatHgHFoEyohfa4zhWPENaq",
  "key13": "2LmQshJDPBwQBJ3VrWWNa1PLAciZEty6YyC7N26WBUYcg1Aziruva9chcYxTbSrAiWjX8bkuvo9iRyjvve3SRhgG",
  "key14": "55J5iKxfFRdyotzGaqMLLRxSCedqpv92LK1mSRtyN9hFP7MUpDCXKmsNTbNJQ1RdRFBfvzahW15FFpeJc4PT4ikf",
  "key15": "2hvVuEELrR6GEsDJ7PomvrBTUdqSyKFmZM2XDSaDP7VCes6x8WmTqPgoYdB4zHCmU6hvm4BtK9Ay5iFGd9dZi1iz",
  "key16": "29CydYQP4JpvNQMfssjNjg9aLbsJaZ2W3PYiXrGKockkERnDqxTFkA7Zvw4Qsq4bq6VMmtfhrutHwcwXLizbQ66q",
  "key17": "5tbb9Ef4Kmkoje3E5wM5kyoA4oTBRYgvKsE2AzCdrHhzX9zt47kztdY8n3oRSSbu7ufG3Ke6ctoeeZTFDoiTGgWY",
  "key18": "3K9srZU1pkBZLdw6Y9mRRCJP5uWeyXax8vWEkjEATrRPPSsjr4t4mC3zeViL72ceLFBpu3YzwCLnywS45ehipn95",
  "key19": "4HSrsdMoDoPMDLSgcoXsuKCVXbuCoKBMfsuEGFcitCdkkcNjLUZufgcS1CDDenZvvTnZFdxMYK6jjrAA1SNjc5HX",
  "key20": "3xvxNqDLq9NvBCyimhDWu871SwqcVyY5Rv9yXwjKpskAF61Jr5cG4Y9dzdYXo7HUCVKx2kDr92urXqr2iYMfkBeM",
  "key21": "VPvvprS3L1r9jQ4iSeS35HicveqotvbJJi48BbnrJqFL38KAD4whXTXqnQ378QGEcqfRQ6zZQqMhTPBaudSPpBy",
  "key22": "35ems2SbZcsrK2P9RkeDafoXNcN8GpbmwXLx2XVDg7HEWzQAP6nxaCeWxgLez1cJVsPtNyCBTMGFr3pzTYxjtPSz",
  "key23": "4JEJjo8BWWLbTGuLRATpSxyHZV6fhonoweT2N8gGHBX2roYkNLvkBfiYgUdt5kAPfNmjy4dcQH3mgpGDrRP77gcC",
  "key24": "5yceN9GzTqUnD1ZhCFvq34DXW5ZNEtFPfapo15JArsbQjMwDRh6vNAB4iNHaiMsVf6jHpVWDhKo2YJ5P7QdCzbbE",
  "key25": "487AJRGj2MC3Hh6HwStVo7TqyPSVGyrs7UUBSoqanZVjpSWnztdaunV4wQEXhWtoJkaFEkwj7xRvZPep9js9Zc8n",
  "key26": "2NtW1pin4PTqdWGyY2ZwSSaDRkWSX18Eyf7UdMFHGnf8QVzELrcsFg3gRB64Zryopqsq4ynKvRNc382coiWzMjsa",
  "key27": "58bvqUvHdUynYRok6K1YKCo4WrfvqUEcGs5Nb7Ckw836Z5U8voVsC1dM9XHwkDaKYCzRGUAABBnRMNQQ7U4uewkw",
  "key28": "5kwf42d5aZWG8vwjRj2mSn7Q8pnYL1kQYg2Hbkcz5suEf1WRSFUc19YjMQDS7ycNRMMTKx7tTgEGJwuGWnq3G2Ju",
  "key29": "4MLtQ5RiAKYVFrk837H7DgopuCNFsZPeoe2zjwzRpf2Yg45hvvE3hVtYd54N4hRjGVXp7V1mTy9BeHvrWdb2VZPC",
  "key30": "2oNRyqBbkzDKmt7tTk6cLYUWgXEDqU3KojE3zRVHeRuaKvmUb4536N7seNnoNsJyDu92Uj9QmBSWoKDcGEdGhTna",
  "key31": "3QVwx9bePq8fdejTskg4TARydb9Dv1g9x7YZ28RMfAhZuDnSqGkDxuBCZBj1UFoFasPS4n7fNEM31TFQ3BFFi6ib",
  "key32": "5pYymTraC6BoedGkpPBAvY9vwqqmfq7sW64mXjmZHPX6HvkUyBDnsKyrePCe7ckNBkkN6qiBzkAtEGhLFhfHfvQg",
  "key33": "hNhf21dr3V9WMgvB8XKHhisRgY3uwTMAfbbKzhoN3jgrJ9ekKUHejvQ2Z1zBkJvtzByfydC4qkFobcz1fkjVuSa",
  "key34": "56ZUFQqtR5xtioEPcaHzaE2emdijBeWMWg7xurkVEWq42DKm1RhasczTLmXu8GZPx1pu14Xk3ykbT4U8rxN9HjyU",
  "key35": "3KB48zsqBw4v4c4KS4LkJysY8iryc48bKYn9sr9Smfw3wKEqADBwabWXkd4dPPsdup43KV3rpcLzLGJsF3GGvBQg",
  "key36": "5J5GFvJAdXLVYESi5Cx2AUubdXDMLd4rKUxP6STxk2m6iLQe7orNd373g1Y8bysXariYG3YmoFZp8eYYr7MipaMC",
  "key37": "2Namc5afvrfK848vAW9jMQvRB5wY4qPXwoRqHSDpkNUuATsnpLeEp1KYqayearT1vfQzfi3Smp9WVbztAXjyxzqC",
  "key38": "3MqNzuenZ6btwxLBSAyyUGtdbXt8L6E6WAiUKsRpYm5iVczgnkZVoumNfpwkPETCAsLWXugoCTZvLZ5VNfyd3Vzv",
  "key39": "Ae5npEijhAsZMb3vK2ZQRMALGT99H15ForPweGPU2X3CJGm8prpSdaPCgP4GnkSWmr3Uq6efRD6jEktGfwMANGb"
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
