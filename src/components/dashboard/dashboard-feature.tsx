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
    "5TuRvbf77H3yBUNjkixKvixA1MvYYq9UmWKeqh3cBYdS3y9z3C8Qz1mtQ1UxBaxMFrHToS4X8VybZPqbqvF66g4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EzdbASfTKoozCZ9nx5xLqZNNpHRwTw7BoRbkBBGyZkjPFJAEymBDK9tB6ESnHc2kayGUm8yZSTa2rDi9T7C4tg1",
  "key1": "65fA5xwzgFYoLdSP56cQ13sDgqAEP4EhPX4XoU8nwe4Jeoa77fCB6h6P96LNQM8SzhkZnzoXQW2DydYqjmCj4AVf",
  "key2": "4NyM1HySh1HbkM6LjcFDnHDLpJADSqu8KYTtEjQWqvdmYMdk85ZbY4XgVXm3MLvQ38g48g9RQi648QeuLSnTbFbJ",
  "key3": "5cnytMqgqnrN3nUifME3ZQYtsB757uR4XNDYonP5rL5JWLkPXFDtdeB4CsHUREUdcwQxdDRu5v4iYSAjTybEaGK2",
  "key4": "2dmtD1AvdE7FFY1YGh2uAH22XFEA4aTCG5SinBrUfCKRJ5ffHdj4quQ5knmNUG2wnGGkScASor15n2EbcKujJiF3",
  "key5": "3PLy2xfL8nXBWZrBUJUyABWo7vSDALK57pdC8gE2u47w4wQs1asGRahhBzdhTKSZGPVVxDxQ4FB29wMVNPCwaPwm",
  "key6": "4GuxC2vGLgSxswPSkoBvmYrKijjG51mFwdZrEfEnoab9VCmQUXoYMJJDUhZkCRa4fbHTHnS1tsPbrSjLtRat45HM",
  "key7": "4JmKNv7fYXNgycxvmjJ4s8K6rVw2BQHqC5txzuTt6fkwuxGyjiS1zPMz7Bv82scUDeNGeDidRsiFciwLjHpogjTx",
  "key8": "5BQBWM9ygiLzUGEFRFHMmo8uDGiUBDhUx3sQbB7zgf3AB39AqsnFcrmSKmaLKi53cUjuxcQmKSpubPdVSR1hpXb",
  "key9": "5NT4uaJp8QvUqpXYa4GQphNxnvDDbb8kkVmuNpdvqr2qxDFmvFHp7GcnBK4edCtuXGXZF1gHHTogjE1JT1ad7g2N",
  "key10": "45oV6QFCLfZJZqcsTCXqAKPYdjZsThwGvLvWr5kLkcqPtXzpXQBPVmMNdPPmX9c7edoF2GpGW9kvfHaqCKRdEMw",
  "key11": "568mXLUtmoM3HXy8mEP1YKZQXWqmpRGQHV8pGgAFzQjLzd3sGQHBewC9RNXUh7rRh7yxQJfucykKypSVaHXMQ1vF",
  "key12": "4Dj6FJY8R6dxodSZBSYs5hrz3PvAWfo4Kug53LhY57MDzT6WkWEVvUdLz5km9c7FYWpzQAkcwuTfjtT6NWgrxmYr",
  "key13": "5gHURDXqvF7XHDJFpxDEv9NE2VzX4hgApkRkya4RNBDwxzoppKwHvjKt3Kt1tdDTUXVgnUdB1me2JunC6pwNCgqs",
  "key14": "cDVPuFrDmR5w7z2LyeF5GZ3pWHVK9Wxc8DWiPAYbqMkhJWpkyWPkkBrWEn3zj3EozCK9tKNBrdNyC5Z9CLFSGqS",
  "key15": "3T5KWdwJ3YLNG3tJANGTYDTMUp9qyb2wmAuR1rf6EknXTDst94w9TPTRYjDYMGdCispvTLbgPzC7KCSF1jBRy4ht",
  "key16": "3LmZEcTLPMj5E5bkfzBBnSjqXgafMf78diBtGCNQGMTPRz3zUZVvqTKC31r9Xb7PdNSR25JmzEb5BTqnoCZEM7Y9",
  "key17": "4fys2cxtkT9eRC42c6psJmuLmCnC2p5pHxThTxieXfP9CYDtns7zpTJWg3E29h3ydoaq2sNHdF5yYYYn2PuhYBZg",
  "key18": "2ej3cjXPKb88kZKPPBiRQGchKMPh6c35VUKinb51wLePJhbVGYgLw48ADjfRAA3dB5spfC1bfRMT59VGRBCBPDHb",
  "key19": "1rzFxrPwNT1sSbd8DSz5Q4xwsjqvxyztCXwcdGuBuKsbEbTyMSERYQHhKrf6vg4CMtt6PcxD1pQ99YpCijGNU9w",
  "key20": "3cKe6eBhHk4wuNJiDnoiAmRCoeqMTH8SQRLv2QS9mHsd4N8986kSkPZC7Ft1YPmXP4ztftmUGZRpU1FHp49Lrf5n",
  "key21": "66YZxYcoR4FPneN1KXZJrgCJD9MLfux5LdGRmNjURrfx8gXfDK8gHj4LaZK9jC8UEs7GFhPDac4RR9YfgDaNHJMK",
  "key22": "5H1CyZUeNvkaouuCw91BvEZ6JV8v5iMSn9N536AswjseJ7gYsyePtTjmuiX5gkixYZKuewkSi91MYTWrX1YAbEL6",
  "key23": "JvUXateYRMUCo5U2zEHnV3ENFVcASLVd6M6xWcYdZpMibKXCuym1MvXY1PR8yVCHg9XzcvtZceCW7syfnQsZpgE",
  "key24": "3JYnhDjghvioheNrmwyX3mtcXxc2ijqWocACGkedDYxGTSehSHgj79gaip7ooYv9bAA5JjV2bqjsqsz7Y7RNTpZm",
  "key25": "3CVTmaCEVub5ZJxWcgFpBYDeoWf28gtS1pFjqA1LnAcHvC2AJ3bS2WjrrZtZCa6tkBkAeVix79TUqF48iHoYckDe",
  "key26": "4giLLXP1nSHBw5FvXHKieymcMTD4vWDekuD5vihgaFhKmgPDxb7PBLohY7ZrJWMd7X69TZLotVXif2PH9KAwYpL3",
  "key27": "3aqVwXfqYuBuBjNrvrk8ASxP8utfCBaW4PwECUZ3at4dnyQEW8Eo7ZiKZT2KNrJgTyepg6NKNcEpTqZcsQt4ZGDu",
  "key28": "4kRL3S1Zei6C9CVMxNud9D1sbAwXR37huKMjHX2DhJt5xuZrsApzJG2QQa9RiBvwrptemHnDBKtMJQgzkKv5mHxF"
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
