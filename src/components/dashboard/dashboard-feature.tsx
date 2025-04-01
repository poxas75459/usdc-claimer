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
    "5Th6VEiLikpLBjCYmPeXdtsohBybH1kcKp1fdg8wPYSAWWw8M8MYBvGvRUsAA7MQHNHYSzV1BbW8p2fiq5JP35eB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uPtsH8iBu8ZSXv9B1qUGjuxUNPVkuR84zygnmvnNSsfBdAzddWDnRk7JA8jyirL2s9gBpYgoY71sSF32rdnXD2f",
  "key1": "fKX5qiV8iKWtFRcGjFV8xa1jP8VmthMFgJd2QfRewF3xrA1BYrdEgx3P7KELjaH5tPh96iiC6SqEo9vunUaG94y",
  "key2": "2eeLUD4A9ywVzP1EYxAfrmmpDV4ca3V41sJW8BmHBfN74wPcyEAdWUoPxgG1nfERNoarmJDNLKKbrc4b2cLzHPG8",
  "key3": "32sq5kq9WKM4sDTCFfVvCntNRz9TVqvaTtN6WtqRT5ECzPTe9ReijtGFqvARhytUTxeFbgChzrwV2fEnhTDGGbH9",
  "key4": "3F9q3HFuLtqLYbR6AT8NHy4t2AYgxLRVYLXce892oMQzVJRxCia9TzJYnDFQzb8uwYShLWQnauvzUiHCmeQaEjNV",
  "key5": "2vGSnmqPnRHmpoQEqT3hzxCAb48jm2RyjgB6Dic5oCyRqjyEDFCbjdWmfxzoPtnG9UestedyAVMFE64Lb2CraRd4",
  "key6": "31g1RpbWYVHg4j6RpEAqaz7FDkEERWQ83SbR14tnq4Em47t94YybnXuBZJX3KKQk13vnmECRNeF5q4awcxEKew4n",
  "key7": "3breYiBWEkoLBnhTmSvSJixn9JDdVwN5gXTktjrhB1Ea9fqN9B762tYZ6cycDAShr4Vn9u9K8oa4kQJiKNKTZ1dn",
  "key8": "3vghma6kBgkDPaB9P8WpxTtmSPr8RRX1QAaLJpWvCP9siMXkLnR5nj58t25HMZRSaGPmpGkZ7dAojZgP1Vie2oA5",
  "key9": "gDn8257FkyqEMq9arYWErmurt42y5NvPE3tdFAhgNjfsyyYeHWo5kg2giUjsiyjDfbjcPWS9hv8Y9Xj4xzA2a5R",
  "key10": "4E9JMQiWfpjYnWEhTCU5YgYuYvUv17jyJjfnica9Wj7Lmk2YMKTbVJobvL5UtY6UvJqLaCXgMJ7vMxKWvNm9TVTY",
  "key11": "cyG6Ggg2SA79sMKC2wJ2jE5F99cQjL3mjiEjTrqpNMqej6SDoJiS97hXNBaZXV9w5xpyJQQHyVHktewYGVHY2Rp",
  "key12": "644827PQW4x2XKMNBSPFyC2eqvuzzSqdyri3KeBVYbiXUp15AHM5ptSueRUwAw4mU9PvZk8ugDDvqVPzxcAyhCEP",
  "key13": "2zf4VZ2rPQCwHuq17ACYAnGRYEJtkapBXNptVqPQEQoydWwRzB5bwqmTm8mkDWNSKjZGXn2zhkRMbewHsFQaZg9A",
  "key14": "287eQJZQEbJqeowvmX3yrM9PYAQM5c37EvYnuLCpq4szPojRh4GLR8dx79DeX3tVdaxHxNDXFZQDiAZ9UeMa4qeW",
  "key15": "3Voyzzu67MaXA9rnTcUWbHQw3cdsvuThZFvep1LGn8QhUZm3FLkqNkAiEarzcwocJpBJtHmgrD3bEVYLvpria9yY",
  "key16": "4U5BVRZke4qJ2z1ymmvgXYzHuhyqr7AJMw8zqWYcKdSu2nn49CtCzAAMHc8CHvgcqv8BG1sdMi4VHRvoM897siPr",
  "key17": "2i8zBuZKhRBhFwThz85jaJeh8xzReKKwx1NX7vhBZyoBTUch46hdBoszwqFbHZoceye6DSAHtBw6hLZUSzWbyeby",
  "key18": "4vfzLzUnPwUe4UsZiKNnvD2F5vryYosqEt7buKibsSyDiFBqTMx3E2rLoyT6b6yvWMVrjxGS98h1tReRLGM7CCDH",
  "key19": "khZxT6jZGaL2UXmjN2jMdUFNzWyFaCTupYD12JQVRkGoeMxziwKUMzSQpVNzN9YQZ7JrcXnrye52goqKwjQ84E4",
  "key20": "61X2WYo3jbqSZmEBRipKHdshqP7TaMDRnQoVhZsYHVWJpibc9qhFFGH1gKfyYqS6fZEUjwVosBs6Ajy1v9Bkz25T",
  "key21": "5xbvQfsfMyGQptpTJh6SPwL25PP7ggYteui13hyPgPRfvdZcpYZTdBeqbQ8FzKJTir3BttGAzRpi7zqmydWWz9xA",
  "key22": "5weKHicoussFj6foKkBh69y54chYgDDrNUqQmiFiFv1eg6WC9ZyY7PjLjeiX6gbyEWtFNiWwFvTV1Ff78q1kqJwU",
  "key23": "3gdiZTwHHNPAW7BF9BX726PnVfJ67Ew2WAjKRvR5yA1Y4217DBaESGQYWwQfX6LjZK6wMvXLn56pKgCjt6WRLou1",
  "key24": "3g8CQsTNbgwNpabsHodTaAkQrWq9z2UsSE2EC5sPY1cNw46A8ETnkCg3cq8DKN5ixeMPDyF9fDGVYPp4eucyMXjA"
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
