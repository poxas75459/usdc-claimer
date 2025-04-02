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
    "5A5qkYVdc8xaqw8ofkKY5vBhpYNRoKhfc94BFpe3o1UgHymAZ3qsrpxK8jAzGYk47xQAkKkXGpLnGR1WNJxieAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hL1J5nYVeXJQpbvuq2BEB3oxqsWPKaxdtg9LQBzmYMV6QNJnfQF5Q1ts2DGtm1hgmLKZ536i51vwH83H5UwcqE8",
  "key1": "4B6LLjkq1GQP5BBrNnLnwkncdagpFX4EMYdU6mfGTMTVeisPq5hufmD5Rn4JEnhZ4VLCWfysmmZnThTzsFdwwrpE",
  "key2": "2gcWbbA6kBKZbJhdbkCd51Q6qWivKcjNwu4oPKHpwXikkczPvoXysApanEjASB8L4PNztjdo6BQ1GFQmFnCEqhFz",
  "key3": "4Log7NNT5swFbreY7c7KAVvVE4uhfw2V37fJLkMnmxnYmvDWzFTN7j23KAH1BPyyWjCJPVwmSHpzPbtCq4DG8VDz",
  "key4": "3e7YqDd4RLNB3DMAYTe6j7ZzUGUPWTgrRgU1jf6WhgHKP9UnMWt46F6VM3AupKneqAMZGjXVeJNqDiyxm753M6ek",
  "key5": "ee18hkLxsgj2D1ATpeqXJmtchy4KAxJXdoHN1iDVx73PJDzM5xroAWRzKSUYFoRnmrSY7WMno3WBnQwt8HbMB38",
  "key6": "3xtVbCgQJi9NsNCjuCHUswY8cGgxvLHwL9ZM1etGaEbYTewCUcG6Yxcs7yciZG3xnYTekY1dJABA7fUaGH7Kja9C",
  "key7": "4BiBMoy84Vgf98UNGCKLXVTDHk1oHpFhY56JdP1VmXDTVF7kBLQqqQqzF7H7fiiE4AeRzb5x94baCP2zoM4DGWiL",
  "key8": "4c5aG7t8vWPc5cwq65yLTzAxgYWkL5dKkzY5ckeMKRz2jfavHPqrdHi4bhAn7ZPCK2q2GJiXnQHdyHeYFs8MF33F",
  "key9": "4XbtYxkn3jhhjCfWwnK2Q7ohA5imzWKynMmkG5awqwbPBL2JmkkpnDa9LNon58GWJ2z7ShyLAvbjh2uXxomvu63Y",
  "key10": "4oys13YdAjW2RosdASKYnSZjawkvKtF1FMe74KrZ1sA9VTyrmYwMqaRCbMgfrKFgqWwAdqWn3rZzGn5sVVVEdM3",
  "key11": "Ke6FdHGiY1c9kGdPPHV5Yqwwzkoc54d6rzhfbA1hpb7ypcKesX2VcEcF7CRkgUJeW5fzAng44dDtRKsSbFdVMMD",
  "key12": "3b7ohZcE37TtRjamEgoFm4yNG58YSKwRrMCFBFJaPEsAEujstwYTnyxPTxpHWdKrQy52H8TguMZbGgCpWhUZ1wLP",
  "key13": "49By9F3tYGomrVy7NB2YvfADXf4UefSjGzav7iWG92NgPPxXhtz3cCMVTo6vfzqreCrmKaD8ni8kmMUYZ1mB7fC6",
  "key14": "oXqKaSjXJ1rXLTUc4nVhdiV7eoTp4FJ3VBznmZ7J4QoR5LDUu7fxziat9i9D4vvMEo52MQCkGotpwTvdYrtAW4k",
  "key15": "4RGddwVFGFBGPL1w6RA7LhH6uvF1XBxy3DBz1fwEywiLTUHtSzQv5AevR6TZUjDjHX3nUy67ZTjeQCpKummKr8u2",
  "key16": "66hayHTvJC3SLhahh4AEbdwVRj8Z5LW8EbH7Wrnz4GMkQKi8i6iVgX8Zv441Hnv9F5sx7JhdmKMWrjzHjnpELU5T",
  "key17": "3HWHxNej9xY721LhvqwqWs5eLWZ4YZgeC2q6znXu6nZTZ1MQh1FpVfgkq21wm6LMRSZuhTFGx6xw9YqSsbecPRz8",
  "key18": "42ahjRgqiMz8aBp7ytpnBjCQViMsE8Va34fYNKEQFjiapUtdpZPuDLqYfcU9KnGLZUe3ELPUP1ZTAf9F6yaaQ1Hj",
  "key19": "cfkroqj5yWFdfGdsrZdPJnn2KWaGG1Xv6JBJvHQgC62AJyaC9Ymp4skGDLuTDbfj2mn37Vu9xSEnUaLGGMF8p5q",
  "key20": "93soofgEY6TBtujX2qpRtorrjgTXciQTydHpYXvzUdTtYJvbJugYDJFPTcQvaqmy7mwFVs6uB97YkfV3PGtPb6G",
  "key21": "2FQtYKuhPx35mN8necoeRsJaB3gETkMT7m37rt49oHw4v6gCuJeHgAmhFQ9BS1t17Pm5MejVdi7qrTVqZ5RF5CZE",
  "key22": "2DE3mnUZC7Cxtdzc2htssmVQLNtpvZRJB3QrDeV1G8BWvbPVri15S1jE2WfJduVxYrc8BHdiq3qYfaqXu5uGoJk",
  "key23": "2EZZdJcDHnCTsP6bj9MypkLkRYKvbaf2s9HPLYrU5WYrybt5z7fof5VDviFc1Pf94mP4SPfiBW7oRwxjA1AhLR2q",
  "key24": "2jwqFuyd1Ciku7Zw2a7wCtJrqFvsRc1rifAXJ4sbCBcrSHcwDe3Jcfu8AZMjdWNTQM954ZyNRi1TWPi6sTq8TLfj",
  "key25": "8FbuknPWqAdmwPSf1UquY2eS7iqhZFE5fPZAHhU17QTjuWaN1peL8fKsAdAro26rsPzTMXrTky4EqymZPxRmjxG",
  "key26": "5uNjeESCJ375ofWUePCj6KUfRhhzwmRXdZEirduiKpRuKPJxtkxLXc5wCs3HE9U6gNjUDLfsj1BPFwodTNxPx73w",
  "key27": "5yq9QmXmhF9Z7pdYoPuaGZSVVuBek6gcqKFywmqr4zyZPpsjFY2K5WkRaZpEb6SrKHe4sKYhR3rkzwLktBPbFovR",
  "key28": "5DHDxcUYxdLpCSmRUo8yuBCpyJdArNMvPF5NLcs48G5pDphWhuQprLtMvKX4om93RjxzQ5jhAA1K68wPaj6Pgvxm",
  "key29": "3jULEfFZe6NZt3jFMLJPaEbG78oEhezdZhYvuYozFiUNYawkpPFqMMUZNXiwyXRUzPCJxjVs1MJ6b8GuoEGRK3bK",
  "key30": "4sCipkJ6aXw6Knfn8YQPXA2yieo5BmwsRkmDW9WPd85co7nFKZSseY8yyTHeULwGXwav57VWK4gRC5v8Zx2wxx1u",
  "key31": "2muA3VENgCzdkMkPXH7cuwUuVrHMLjXf6USNCJLHvVJM3RTGu9vPAu1qgf1JKBeMpbVwcgfDfrSJj8Q8bmXnY9jX",
  "key32": "aY2jYahV9e3cwVuFjGrUw43nQg65ZF8jwFr9SFx3Z4kEmR8oQYnw6yeiAuS7oXxfWvbmHNaiaVUdDfzf8QqGExr",
  "key33": "5moCm1SoVhcjKesCz5L6vNa7rsUFuNf5PeRzZXtYY5Ki7CTjsajVWBNeDCkcT2ZFFbLtv9VyhSN2Ctb1WNdu6oEL",
  "key34": "2Ue5tiXdugjjrhawNbxULv5SuPRuFsohWiH7WkUbX1N6XG5r9N1wBJaTCTsxHrcUZECutP4A2H3VMo8FVy8NUmk4",
  "key35": "3e2TkUcfrpUUzTVnqcky4enHqQGwD1yeEqPoYsKPohnADFcB8VTiNadoymaRk9UttnFT1vTnCDmFCehsqsyY3Zei"
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
