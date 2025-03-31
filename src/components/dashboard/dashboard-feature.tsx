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
    "3FxRLFfsVikizjnjFsYabreNhMTv1uht2cfR2za6oiVN3AzcadNn3hge2r7SARw759aYCSdueGsQXzAv6jvUT8XA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rPtkwR7d4bsaYzbkQQK8fGLzkCR7x8fAh6gc9kRyUB8vDs3ajmRq6sdtbYBFUk8VN95fS2HkYAQw5R6saUFpxD3",
  "key1": "45kgHdZGXGbAMsP5uiJZanHaDXptDZR4xEKEhFPQpEhnjHy4PKSFRofeNrZe4bkqL88cmNVK5oAdbwPfYtZUhjTD",
  "key2": "2TzgfGbTy86b5tg9fanmbbHjvsMgvtyXcW9UhZEbMiUj1ZmmNyYALC8jnkJBKPf8kjgJtkBnvbm5yVzgCm71Bgyb",
  "key3": "3k1jTh54f7juh3quJbhAvxXW1nRwBVRrCr44jFWCaKecktPrJMi9YcLxuxCQ65gvPsNL4t5WXmSfyp7XaYpawd8G",
  "key4": "66mqVuJytKgcw8eZQerVdAmd2xgukqBnmdfvzMCgssGGz9aGkXHw6SPadqf29T17rxGZeduMLsHtvjj6HJ54cqCV",
  "key5": "47LysGoDf3cXCvALMenVwxXcPXvbDwjCdnMGLbuZgpaS9SbWUWvQGM3HBVbmTFkntMr7DkWjqnoYFFVpGW8en3q",
  "key6": "2xPjgh7KSzXtbQHNXXU9YW7N9LXf3EXYGfdrGLSApfroWAD766irAsVB14Zoma6xJWoX15cCHhakqNRym8D3vDoY",
  "key7": "4RF2cnS8ZoPk4SJNobsd2kUXzqtjyZg2CbdybGa5nEUeFYMv74UFJP6HUcQYGWRGyynxU8Sk19fstJHaKk9TJk9h",
  "key8": "57oH97Yr2ohd9ZmHuJ5BCbyutjap7bCqfVt8EJF3jvsHhnTEnxAzQNJANi9Awma2DvioyXB66B5bieFn2uXztKNY",
  "key9": "38qmwLpPQaVP96V2QrgyKFjuUy75yA4jC76f11dBagaxC43YPork3jUcpPPjY4ytmHXx8o5ecLw6J11B1wZdnkBp",
  "key10": "jJnCk5nMaKRybMdmY4DYVmNKWSmGv343wNmYaRuRy3N8a7n71GipG1AKaU99UDNiwra89vDowNPDyqA6aNhexm4",
  "key11": "2oFGfYx9ci8uuj4wCpP7uDFDCNgBLfhKUy4Y2VUGQijRWohZ2pvGxapeAH4tEbLCfaWVErnvZDP5aob4FejpRXrh",
  "key12": "hzpwy9JXcYQMmgQ9rDScbZwDCLWtdWEMYNiMPJKZvmRHsruBWyzKHWeLH27PWr9zUK1U8vGyb4UkF2VZxbe1G5D",
  "key13": "25Gkp35E7WYZzAcUDfEgCB7oB8maNvq5gwa2L9NmfpMjFTEmH2oKNAcAheMzwqYHZkLqJeYijgffAdbcyqVvv7Wr",
  "key14": "5DtX43LkM5PSsUMT483mGfYfPdesLuYjRejodGHd7EdtDNDGYXdsS92KFtkaqYzTFKCtpMFWkTUPSCYTwZc5evwV",
  "key15": "5LPpdHQhXwjwVRvewsSJ1kW9Lfnu4aKyRzAqCPkrLmzpgMCFKbmFWJxboAdz9M3rLEBjkj1mkeLCb39TYKKru1rc",
  "key16": "4uaRskJgikrM9xet2MBboZCGhqvitit99GWgZzqBNGGNfQoCF8Q5MvFS2kJ8ZgLJjHU2efAXcWmG6m8gY6RzVB5K",
  "key17": "7JBx5VB4fdMaimMoLSu89mUEyYUya7LFsvUZwKr3RXWeFxbJACYmT2yUTinSoMDvx6KXejoaUGxGfVHW3ZjsqCz",
  "key18": "3fCPzt9dYVtop8HJYcM3sKMsjUYohcnuq9PFngocsNzA2c8Bpiekce2Z3zbhBvx77xNdW5Zs4kxdYPYGdMfwkCBC",
  "key19": "3kg8McHiP5GMwVmNpcYd4xD33gV8GZQRqgiLr77Y4uPyZqhsmW4m4K5fJ9zUD1UNJ29Rag7UsBbY7Czbfbt61VhG",
  "key20": "2FsjjTamYv3MiSFcBHAuetyv3CjXeaaV3Ua861XhhF57FKcgTqFaoeuKyHpeBkajJ1zzmzPLPW4isca5uAnKrUTr",
  "key21": "3xNeeWqA7imWggUnG1iZS1E7hp55cFyzBgKSNWPDQUQwh4DpkBTQE4fb6S2PAR6itrc2oRrihqR5NyVSCrvhrb27",
  "key22": "4JXSaZ6MSDQyWfaCAzjjWMBx95vzXq1bggmoHpPTEdMrJCYAwwKPQsc6VE8iUHFAA77ecY2T6BY5J6tUJc7TzhRz",
  "key23": "2sAwNdTBVL1Ef6d3Xua81ZiNNnrH6t9oZCXrQxk5qpXxFsUZKzpXuTKAFerR1bGKcxWF3XbxByJbCdzqL73nrbqK",
  "key24": "TK4Qz4jbgQSvXpvWNGFa53BZZTpQGyy8v4dr8t1UjfpoVL2WKzns2k7EwzA2aCn1v25mTB9itfi9UXaLTMT5bpi",
  "key25": "2Hqw921bhRpY8i7TiZfK1FeWxDEKstC6X4MnE9qGzZh4x4P2Jq8ZCboVSqYrA2KuFntUrmRsw8FUgkkZN5J6Rh4w",
  "key26": "bKXS6FgjhF6CCJociaTfbGCQJZQY65nxvkKCmBWUwXmESsLE3QZZ8EAYTXKsv3VrRYKaGkcEQNm3uTrS4DSTJXP",
  "key27": "5TtmGtGCeTgxY6gPXgHyVDkirLbTrWMQFXxJPiRpgLUgmfCt78CfSivxCqBawdbT9GbxdaTPc48yHvb7SFAYv6WC",
  "key28": "A4BrkhEaaVXG1y9mZUBtm8YhbWUfKw8VNJLyLhQzoKiujz3zmWMCds3KDLMZFzHdVoXPwZunxcTsmxtvTSpK4EQ",
  "key29": "ZW4MGiTgoYkFjbJhQd6ZXkn3odL6AboYHAZQYEDPbPsmRh8yo1hFz7v831YBdUHBtVEJmLtMsgbx58Wg2XqrPRy",
  "key30": "2bGTwF2R2NHB4JxCP7a2orAcrKHNuhZFLMVrRhNdT5ft8aj1ZqYNo9hHVn3cy8Dbm7ZeyAxB2WHcMgUNszu5y4tT",
  "key31": "4x7H95Cg7kUQgSRNr2aWYLPNb3Jg4SjGXN1bTFNdzA2NBN7tY6MXrTxJyn2qJpsrUKVjFi7bVfaVSqP4jPP9oLh",
  "key32": "5tDKs2ZU9YwBNBUUAL2BPiZe87BNMbw3fDscfJGHhVD9qTAytQGXh4RnbWEp4qFEJNx3YLp6kcWogQe4v7pMxvHR",
  "key33": "2hTWJtVodQitm6YD8VnVZT1Q1U2A4p4b4UusJSaynRHDf8hDjYDwGEf4o84gTqwmBBdLn8s9xs1YN1PjKXecYXgg",
  "key34": "5HPjKZtSs3gVsqQqkDQGkD6YTmBKxaqN7u1C3N4PPkkhyZvBab4h1erUmwSLbry4zMKqaYw1DVZhxYxsgJEwTbh7",
  "key35": "5oUGeMfPkNSU7huJHipTrbzgGPC69AhrxXqaizo6hkDgAVV9Anji3QoqZmDnP4E8AQWTmxemQ81kBHLhHwuZP71b",
  "key36": "5m7bysxogGZL4yZrDMyvLqdGnYDMjqhFLB5fHnPn52fgFVopVXT7fYKLg9TPYssjsjpg4VXTePDoYEAhK4mJxaGT",
  "key37": "53rJYS42zPW8zGAozz5FYntr5BGEtpt7X2QZK2ywUeG9mMBqDsoAjrS2tpm6muEHtvCiquwXgvsmWJQCd9YGBmkj"
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
