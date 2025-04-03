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
    "3nGmZAfB5UUvjyfpfhSZovjjUbDbrM1Q678LvNa8PSyc81uvDEFQ42hFgWshQgCS32HqWok5rejMHdFxyTZJkhkt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zBUSdZU3ZQAVspSxrw2zce7LamXbNJMhUiYc5os5U2xa3j8NsPRAZo5aHfyUefRDJGohsiGXeN1A8qfmG1L9DX4",
  "key1": "5n3PFmNWy6WAKbgrcRQ1dAPFijEkrfdLF51yH8M2xbbbzKRDEepsEFyddWfzUD5Wt2esTReVFwKgcBkD22eTKiyB",
  "key2": "xBYjPFMQcHsXFffUyk273ByhjnjuTMwegnNUbFQRL5q2z7XRe7dmKRdPc9dHkchusrmC5KQiSvHLqiYE8ZtrPaF",
  "key3": "2FMYZPsQnac6n5927QzeU3hzBuTuaHXrkee91H7tpn8Aga2hSAQ7D56KFPH9pFsJp4x6ZtSrX1aB3rr8cFrC3wxz",
  "key4": "5zXc8F6kMSrAaygDgS3yvf4PdbfKvG5TyPDWp4KyMbj2eSU9iLoBiM8zCjEsHSq4hhL6nh1R2ME6F2FQA3FfG8su",
  "key5": "5en3JpfjEDkHQuubK8LzjAgeg9uCdbHsfxcJwc6U34fQyhFgGhxFFvxRQMY5qctmVouaVdnjn1yAK8whLm7zjbGH",
  "key6": "5RKVowAMu9wCCzyT5JH7x44uXNw6sS18jL5sH7e1q6exoVHbrrqo5iRbpmjGRsCKiwjwjsDG825rgdy8mPTJ98pQ",
  "key7": "5VAhg94pftoroUEPb26c4457Ef5kxtA1TwjaRQ9SDeK8Pwf6mEQHMjYyq5cTAfRbW4wuamsjestaVYLTTtds3Y4b",
  "key8": "2GtDjiBBwPkcVj2xbHJdMTcYjXa6grrRMUyKTstdx7RqYhh2xQHSdyy3WAFGFgfegZadkUuABVukvxggVYTAy7WC",
  "key9": "4yVn5pEayznChCpBErheZi6ns8JkyWo2WowFZAznD8jzoaNFpbnuiv7Cr8BbzwNzdRcra1TTnBWRm55ZKbDWXmYB",
  "key10": "5FeQMXefCMqGiUVPhf2AtNvPu1PcRx9qqnLkk5bprBWscKzSzbU89Fz6eoNJZqTVsrwa6QwUxeGVotRy2adUPkSU",
  "key11": "K1heEvmQeiPtoo3nTBZqRm6u3k4nA4iivwtqb5g6i4d3DFuzPu3LbEdZ44K9dz77dWyHX21ZydAWGGEWy8EwBUv",
  "key12": "66gvCC4zMDCWospfE8mrzKH36XtXhhRmUpVewFF8FhuQaGxvECLg5Ci42xmPNJgazP4CMzM4kSqEpXK8SpDwjcGC",
  "key13": "5KKE4dhGqPm3FSHNN3cFCNNut5szABXeWBvwKCTss6eGjofDRR5p1jhDJmrvwKSUhcECFgC7EMPcqkr1xfBehT2j",
  "key14": "4rStHoR6jrLsaaQAgSu5jw6QBJAkoq1pM8bNR5AxXp1E2Cu3j8aiDhqFsjNo3Dg7dXEqazSxqo7d4SEL4qwBaMLR",
  "key15": "2BW2nVj8knGEyTUyewsEgxPNQgmcC1cSYUWxoBbSQL5CL7c4JyxokrKkpnqurPrpnhZ9Vd9MuYmBmgBrmzai2nNe",
  "key16": "2rg95r1T4W4nc8wULqACfj9gjQuWqU3eeFq7tRajqD9pzFNjKf17QeESD7jbikWHTtzK64kTrSgt6ENrRhRiY6Ky",
  "key17": "3kSmyx7kZJXAqVHcVHd1ksbZfmWmcB3GqqppKPpaPEd5tuuAyYzbZreqZSTHwRvocUt3iiT2KcoVEVxxwSgNjfpf",
  "key18": "637dhFYdX46m3yy5aV9xYc69w6LqJcM6g9TZmy8qRaUdCtaCkTEMMugUmAH42miHTrSrRj4kJRNXSmEyPVZFzXco",
  "key19": "3P6YDTeqUS2ZkiHJrLx4HuoqXQ842DqAhN54H7akQuMZC45ibQNi7GD7MHq7j2ganBgtggTthEjsbD2ocZKk3VZa",
  "key20": "Bf6MF8aPVSUnSdcexFo6J2cskcHQDi7gYYRhP9ojuJMoqA8YVWSRRPu6gMdveNEMcRk2m1W1DyTgR5DDGvgk2X5",
  "key21": "2LsXjfCtcsDf13jaBRc8wruYsM7dKbHhiHiCQmwSwDuttgG38xWw2KuszZdAProtK9rHxfsybvfiJw2VvrxQm1r6",
  "key22": "LMajL8iCdmVBwdkPcgz8m2mhEr4NK2pXuG9qert5RGGeZDx1wG3iNgGtMYCx4zYy46KQr8DYfryFjV421fyVqT5",
  "key23": "5ZUBFGKYRRjkxryrbnVpA66TtDDYaKnDgskeQh2g8pD4CgzVWTYGpSmE2AQDKUnShPZNn7WCQGH2tmUzxnVW7q9Y",
  "key24": "3GN1eEZ8N6TBHZu47FyWrRTfPHgGqNBnKnoo88vhki18GRYqUGHYzh1xzTP3nvid7fqviqBwSLrfuYAZAmUA8HNA",
  "key25": "52FZHjhf4imUDkAxoBzzgBVM77pC5YVBBhXpEAuw7QFkWMuK4EJGnSJzGX7Ti4DzwMcW3pJWj1yfardsZx2UZm3",
  "key26": "5ATLPuysGCzNhHcqsujfMQwfjHnNRjhQ6qnfEy6yWtVoMTtfhTjh1RefUY6yLWkWrhzQcnjGzRMyGhL6QWkEDaAR",
  "key27": "4rkAQBFGxc9HpEsdCwVFnYuCbdfdizYKYXpHLxo4tnBtJAZYnxFaJ8sAqtxLbhw4oJBqohUEig7jhzf9mmp5Uogk",
  "key28": "4uCua75vDDrXSee7cbfm7L6FiPKsdQjTTtdkwbBYuQdRajWae7Amt8XkutKUkDSvuh1fWocQArKDx19QX2sTzFhx",
  "key29": "5CQr8wfSK6U3Z7esSBNCP8qzJgJvWbNBkN2TjX7Ba6hytV8FAuEugEEADJRUjHq8ugUocJUdcvydcpegMs7SyBt4",
  "key30": "3dYUFKSx86vzxj1pYeYGYitemN4QC1TV9QCXgfa8tMuVLcc4bjfzd6rT4EwrEWa4a2Hhxvzb6M2pLnBXxPPUSJ3",
  "key31": "4PHKdCBFJ4wMppuPZxNaEDxABAG25edXmS6m1FLD1kdtLKBNVBCsrqb1hTiTRvbEqSXhVUkNa2s1EciCYmkZ3tY3",
  "key32": "3ES6Ckg6XVHhZFELBnRH4U91Sbd5cX3og5HihneTtGnMgxBH2GKB2qhapxYVvVzYnqHbVLYaPxyVDAkMaT5v7TPL",
  "key33": "26pFJ5yP1v9h3cciX3Ri3ZoTqk4zcsoVNweEBFwR85YUJ7tsR9TmeDh1sMkVBA4PF6ekY1wvLwvfv5ff6ZYdqu9M",
  "key34": "3LY7rxCVbR4bYRKj3Q1hY7CCs5LiSZWrH59mBb77148koke827d5taonzH2YaTvqGAwfbLtT4akxj4AHGsfYNcg",
  "key35": "YtgeG8VmhY8SRu5eV1q2ZCTMVFmyEjaFMQGJHkipPnsWbV77JnbZ7VFQNoYe1QkbXg59oLpZsFCejrG9Z8tbFZt",
  "key36": "3AMzvVLWFNLJeza34VXnzrKkx3gubKfxA1sBNJqLDeEC9T4rai3CQTepFnsrpJ2mf2pSaDh8SsZWkH678dLfMttW",
  "key37": "2TkQ7wjkzYzgZ2WX5xWuNczPwL68o4FRh2X4QPWSPE7rA5QHQhQAeK1mo2eVhmrT6xvFuCMD9h29D2jKtS16ve94"
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
