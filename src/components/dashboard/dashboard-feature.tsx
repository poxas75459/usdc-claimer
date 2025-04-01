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
    "4uHQXoT5xStEJ6YPe12h89hpa7N2Ugkc3rJU56ST1hYJjTxz2jyXji7vtBxhrLkfFt241tq6w4y1bDD431LQjdaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FYmxLUQvAgEre7pMSh91iDTUrPCbuqyejZBCe9Z27xAzQJBWttaTtVawkBqs2s4FsZgj9FJxC1Qea5nS2mvG16Q",
  "key1": "3oC6FmUE45JATHSgsSRpCy8tRSpfhD6m2kcobVnEUZF9uU9crrzz4KCicS6uQbZNtgY3pEa3FupKtNjgjoaWKpsK",
  "key2": "3X32aSyWKZQ2pE5TWcy2Uirr4rrN3QftrrkdYoYMRTq7KRSZMaoKWESbsjv6RkYbcuBEFZN8jLxZLsNeHX7eaUEA",
  "key3": "4fyUZhY813ZrfAuC2L6sMLMzXCapiLB8hWRPRFVww5NamAQQ2LpD5FURpkAzbc8Yuvh5Xs8cGz2u63TgFTWHZBBD",
  "key4": "3AuKgbdNPeGnLEjDxBH6BQvbpKkFtcL8CsTYRHWtes6JweMqjGTEY17b1Dwm8FmBvL4NtMMLcKtmY76mQbaZWhpK",
  "key5": "5TEau5Moktz6p313PvRNS54uXMZsKB2KVBsJrTbtiAk86iVPUz17rCS9dEmbSH2Zt7ZK19RoqUBF9d3TMpVfLDp2",
  "key6": "4Zt8FCQwMN6zLziYbWv9v1txEeNeFZEDXiNMfb2Eiay2wFyzj3y5mvMBZPhiq3s7BtXWGu7MFrD7RvXxsQ75MQqy",
  "key7": "8Gk2KuUJtAttWPdWnfzCaKVcGEX9jvnCf7TSHcCynDMAPxcfjJQvHm8q5BFvyn7BCKchGWHXkyE2s6TmYUWkEcH",
  "key8": "EjjFEkG38AbDvwWyGBBqpzwiJmDDGFeBKLg1L5HtxiQKqeSJwvT85ykoUWYHfuZrtVCCfkmsF8quY5tAUtALfMC",
  "key9": "3KfPEdcQAYk6hJqxJgChW8zCKbXrbkNxkpERnwkQJtPSFsSckEpEh57eGbaoUYRfV34dhWkqz9a9B6VdYQv2ZEMH",
  "key10": "4exCtzNANtj9J1AFPkQxjKjyYACySvoBuZkoKCY4eiNLYVPnbZ9B8BMuLR6zm3tFhNyGbTvrZRxHLRmVVaufAGzV",
  "key11": "47xSXobdMpVFe8j51mBV9jR5W7B9KwuH96XrVmE7T5KsuSsL4AoWj737mSKnC5cpQwHmpPDNdTtoysGnRoDe6PgW",
  "key12": "5fXXy3pEwMqrLeejguzZruNcGzrAoNUqfuCgBJeMGYfmeMPDBDQCirGu3QKSdeUv9oBkezETipCaH5XJFZLDjdZk",
  "key13": "2ygu5sj82SmAR3qDp2FR4qsZcC3eU3M97bSxCSo8QEkVX34MssMEydnujd4qZEXd74PMeDiq1C3xoNF2SAXoW4iM",
  "key14": "rSKr4J2yRcbgWtdW8yzns36XbvUh6EwSR6Tosq4i8Me58HWjXRnxMXzinP3N3yapSBPZSj6UxZP8MUfoCqnKQKT",
  "key15": "3HHwPPVMDJyrSUVnYiCGTA8qmBjmssEmGW4Qq5GDVrDk267XwsyPZHtohsNSYThCCgyRwWdYeP9zuZdD6yFntj5U",
  "key16": "mD4moZesz6TqMjrEKQgUq3atpYumRv2W3XnVS5iHZLuRHEdsRFwWP5QfCVrUEQjLGBUKXLJywhkUHnipDLqsQtt",
  "key17": "4f71z3o8gwAbYoHTb5rR8oq3i8ypxejioK8i84kip4NyZAptDt8QtJChA4oweCGJRn7LdCWnR144A7R5ko7FPSps",
  "key18": "4jqdjcmJV8hkMV9vi6HsFjW3sGCm1bZdr8tvjHBxMSNT7bmszzViZSGCGBaWTbVa66ow3fuXbByzjVuYvBpGex1",
  "key19": "2XqVGpAMYRC5S5Hrvu8C4omXYGBHXPYx9LVXWT6gsdNDrN52MDeZcccvNaPzbjtyzV6PRoeLWJyRLWUPQZ9o5psw",
  "key20": "34Uia44aot4qcYfKYx7oERizz2FrXh8TGDyKm7sndHqEJKEc9VSK63pUdrCeskwydHrvxE4qaMXxE8qPyHEiDmPF",
  "key21": "LH6MgGvxXdHxXMSvuqL1Rya9G9iQ88EyZMQPCqpg4SNeKwK2ggt9MSaYQ7y9CXi2cePUdWbzYnkYNjgdNVQdNaD",
  "key22": "3jCzjqqzypfqctan7VcRj6zz5vhP8KCoaeeZd9KV3afrA1nDTHQAHwJxJ2fHEqKFtcbdau37iTRDK4BDxDo5Toke",
  "key23": "5L9fttvCfrBF8whYbqZrBHGhRYceeVNNQ3VFw3QQeB6UZo2HMrP2z2QzwgbmoDM7RiSJGeJiUKJKYHVomhNnDNfo",
  "key24": "37AsLjEoqkG3rfUSMVM4ZrGxyfjdBLBpwTj89dGzimyvndaN4eZRAgYrC2oLK6KLziVUBRgZrFqskMByCZmLGEsh",
  "key25": "2bUqCQ2nMY8hbrEnv19hjAXUgopyB2pd7ocW22JapiXdHQMzBQnjkqEaTjNqrfLhdvR2XzFvFoVufFFa2oHtksvk",
  "key26": "25zdDupSa9CdGLMfbymWfGXjNzN3vQy4upJ2RJvioQm8dxFETTubCrUVjyPE5xXGzx7C4H2EjYX3rnSjpoyLQgmG",
  "key27": "5B2KarUNHu1GKS2TmNLgEZ1vprzSyxW33mnpQjavyHep3rLfXghJEXBD5fThVJG4KdvPHpGKUCoUhErSTyredgJf",
  "key28": "5jUd9pY44xLVDH5qxnJcZybdebpsNkF6dF4CxLASLr9XHGXAqd1jrr4pWPPVTwDC8oDJfZStYpEX8rR94bGUBJWk",
  "key29": "2P9iEWXgdzPt9efXvfEYV7BomWkd52Xdmb5x21NreT6ToKsfyiRmQRAHSS3tizCWyPQNxaZ1tAkjbxkP1RKt3U1C",
  "key30": "3XMduvFRLRrMEvk1ntd5PB6bsd2RqjtiuWeUeVmkyAH95m9kzNW44L4Ve273Sb1NTmKTW88R9B2Fk7EV4gxGL2en",
  "key31": "4yDviW47vaArxFoyUoAVSGjPmXKJxLnmpw4fviQ7wH2GG5KBMuNFKKfcJLPxZNbq1eKdJzfvm3bL88NQZQmGcWpD",
  "key32": "4P4bAzWZvcmQqwnf4Tm1sRUeHRBJZa39SHaG32DBq8QChUjQoC8GVEq5qGn7DWJWuhKc2a2DmTHFQzY9d31zz9XL",
  "key33": "23P1tK3e4oSHe9LQAs27qtoFuFbgfeCqnG5qjFhFkqeDWDquYcQXLehbWLLi7C6k4EuorTTXcYCF5XEZztxFEwNL",
  "key34": "5BCzgi167jaNjPbyD8MQRVxUcD8dUTkgDWp5sqCTaY2sUtBsB1kNL2wSj8M3PNymYvRY8woupMDgn9BExqkuRvCn",
  "key35": "474JymE6PVb6K5ywnoeu1azmWxHGS4Prq1jXFqRfaWTannfqjsTQFfqHYfDNZN9mS3Svnr73kenWuFqtep86QEwi",
  "key36": "5LELFUitXp7uV8cqffYYLoTb8ff7RRUsQ9XGYegcxwZ47GVEF3FWmMX1foxjPwJ77kQuGSkQCGghUbze1hUwv23q",
  "key37": "2vhF8T4peWav2iycHTDr6zGveuuGB3RGzw3P1wHB4prHK3tfT8zmHb88bqAJHrkyRuTnrFmhTzp3N7u3GsdDKVqY",
  "key38": "44uCmYfdnUVQkJJkDbZaxvNPYsAemxjrmjVmPSoXC9moWEQkMJB64BVyLR8k4cetGCg1wrJZ8XedtgaKCfJgDCXP"
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
