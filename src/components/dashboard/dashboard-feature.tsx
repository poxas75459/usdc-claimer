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
    "5qsvmVjdfgH3udoLPRd9SAqCMoRTDbKBQN7fFCwLXpQ2w7P4RxC5muLNYc1JxjvACzcjBWB199fCgbU2AyZ3pGat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZtuUjDaMkpQY9TBhgLSZNrsrEmW75YCgt3zLHfyyuuMMwKWNJA8pzYkaaWoouBdMq9EuknLscMpkuS9J7BAZTnK",
  "key1": "5g6qnuVUmsJJqnzorZufyok8nyS7SD7uC9i7t2mfQXrQJZnGtGysERjF1CjD23AaxiFKzooxoCKiX4t4qgp6UR8Y",
  "key2": "3qDquqjhnygMeqEv5hhRf3rAhm1FxfKjDMK4a9ufrJLGQYndTdZXXDeZ7kzVGnScwZQwgzqvg5tKqiC6TLKcSu7L",
  "key3": "4DHF4g2jxi6KidCsK2qFqkAnDozhAhxgHC6BdUo3KCn4T2aLMWVL3GTki4jTXux7cGUgLn5VnjP9AigHyKdAkgYN",
  "key4": "2MHAAVrwWiStC9nNHJoXzfhsNkPZ9wMiKEc3cxyZYP3dKeR7cwi74nVFMQ24YBQyChb25UUboJnKGuycdC8vXoDZ",
  "key5": "3rRbtrEeRKjdkzJKNnVEg9bicttrZSXEWq8ZWWFUymJ8kmahaRW3Y2bmSV9CxgyEgmr5WPYHfX5cJGztWyRQqRi1",
  "key6": "VzybHmNdoew5LxgsnvxjQVBK853Uq25hWDVxKTcmTTpYEc9JD1VLfJHr51wq2jH6xrNZKsoDc2bQbqGqzg7ZoV2",
  "key7": "2i2itq2scg8z6YUkvFaGUCUbenqUWZHY6gipsv1bQhN7MtcLrETF3eemdpXoMv85vkg4k7rdNZhrcYnQwEm2ubc6",
  "key8": "VZDXR7tXfm2CTeNrdZ4iahnXgMfVmqVQ9dnGqGUYjVTxhBQz7MR4QcEqwWh7jG9gq79u4zugsqh9okDZgCQDssf",
  "key9": "5D9D9fSw6dXP6t7sxDbUjc29Av5SQxQjUxKkeqLafb3zkSiC1vPZ4i4fWuuXWt5StK9JsdkAmDsoNskwJ6Bhew3j",
  "key10": "42SiruXCyDdjkc5U9A9FdT5rvECVPJ8qoa4EVxS4BbGGNbvYBVNMhAJu9mbHBroH5FFBNgha6EJZJNCR5U8oJWXZ",
  "key11": "zyXBNjvXXeNdeJNWW27Ya3R81gxbxW3hePvKrKVtNbVV9cFdeTNACB8pEjSe6vwdQGZpoPiWo22f9xeQhD3pd82",
  "key12": "2x3GfFfQGXKo9y1UVwDcV4o99cXWUnEjhZs9pt1M5smMttrMCR8cVaCKRHVH3S2atJw6gfysGsSHKcVYaKd3aAdW",
  "key13": "5o9McMfitmtps6qX1w9c33Jq8TzCzt2L4uNrXRENzbbEiDnoajpWSiwPqPjjVTsXJ9zvJs4dXbj819rGwKR8uhKC",
  "key14": "3jZDp3zY1U78CXNdBVpZZWvARG8REVrWKsDyWsNqVMYsDHsYwim7yb2JoVsquJXedLN63P3TKZ8nh264mwEtH2aC",
  "key15": "56wEDKPRx7opWn6eC4RoLm9oZsTyA5DyzoyDw5ABtXD4cmvb6GRVRua9Xit8vo1wNV3NwQgtMN94uHGBLWueFX9T",
  "key16": "4bKB5DxyWQu9zRYYrS314wYuka67aWBpAbgGuoAHvrywuZzKXzUGAtjY2cj9dPYk2SGkaRNbFDbYoFjf2eDF91Go",
  "key17": "2ry1Zu1FkZXgANRLUQacerBt1TuAz4vkdw42bYP8JVe8VifWwr2usoPbYepKCfTnXrbvmWuoeXvWhMuZoz8fF2Uf",
  "key18": "59aWriHdqUDNh26Cn44KJ2cRJ8ygKTWD4vQZiGMxn33afus5WaPu94e5kbRVaexSuxjsnkNGC31X2Aksi8e5B8qd",
  "key19": "3G3jBboomPvRvRotxeGr1JmbF6xGBbYc9swWkjguSo1SjXmePBqECjx9RkgDddus9ULKJj7XcVmebV7j6iCuLPPx",
  "key20": "2Juyhqq2dMr1Y5aiFuAS9iDGkqCApVcsgoXw1dWPdgtMxkd9wt8WLfjPWQ6qX3gU63LZGooCWhaixHMdBNehsDRh",
  "key21": "4H9qLuspGaCZ1Gj6e9csX9X5YfNgjSdoHbY6N7y99N4MmEJMTj6h4d2XX4L5c5J1pMnGkS5PmQa29d9Xgr1v7tXo",
  "key22": "2TDvTSWvE7cJBDHK1GofsjixKu9goyz8HvS33FxcwFo2Kb9zHcptbLfMHUto9PARi1NctF55zbcuR8Xtc6FfeyYE",
  "key23": "2EZvaH9qooENSgeN8Enmt2PmhQYEscHWvhaLX8wcs7x8oXX2JjBjd85P8nqq9xoFzXU37QFmzZq56Z6MHV2bwZBp",
  "key24": "nUHVbxLyMAUSBWnZtt9W5jA2gaCpNi9YErSkgbsPQ9NfLbxyr3jZocKq44Jh6ovSJFtdKtb9qHRMcsBEMKjL7L6",
  "key25": "5CFTtXyNu8eQf6KKg2HaYovEj6LSV2VSajkMJuQCNjTCWg5acARGissNJaro97dfbziFxwDLuQf4pR3xWAxhFmTo",
  "key26": "4SdvvSCRvbYjYhSHNB6uNicQXyi6RScw9iYr3CztnsUha3o4bJeXXPrMDEhoU8S7heXcfT79r2kyATRjtuQbvKnF",
  "key27": "zDeWZbovyYRgkQEUsuXZ5JbxV7RVnN2AVr1F9znovh9nz3FS6RqvLNejGiLhb8BajmhrACj22Ee6msvLj5ivJ3b",
  "key28": "5AUaXHtmRJmHTbgoW4z25sJ13Q54dRsrV6hYZunojzYujUjpZ9eGyYz2kcqvSxTtZ7s1y8Tq63b6W237AH7VizfJ",
  "key29": "567gnhByRNUCEd6pyxuFi66BXPurAjwAA3VJAusoKdaB2A5SMpeCuSK6ziKfEayrQ45ehixKhgAr5MDPDHjqcoaz",
  "key30": "T17DTbgUG4Evdmx7UjD858g84jHLios9X4VFPwNcddTaqdAW9ddKXPzHH9uEesTL3hFaEzNHjaLPcfqVMnnG2oa",
  "key31": "4P5vs7LfTJcCHjkKi3usp2FiBosgz4W4pCVi7h6y4Ro2cG9NoDWf8ESos6VHArpndqomNEpgX1D8yw7GXwprBhgV",
  "key32": "3B74JfBk9QkAicwxjiThZYr4wdTtvF3jg4UCVuVgK68iGWcJzzo8RqZ75fqLknopBMkcNFXAyseKKA5Pmn3HByUg",
  "key33": "5W31u6BY8gVpdqY4VfocvjdHWC3dcgLnMegzBKZz9M7Zy3ak4HDbx4CM2J18635Yyr8Wu59VteQh4NM6z6jqtaXT",
  "key34": "3JEiYaQuGL6Dg7Fmg1wRj9eSxxcN8TLzMhQgrp6zHcT9Cy7FtJUn568UzbP8rDntcBRrJuYa2qumdV5kvTFtxxnW",
  "key35": "QG7UQCgVh993BSREwMqKbnG1C4BRfWGjeAUX6GekvZtMsVKMbkms4Mit1zPdFQjHafSWA9hHHabRbmC9dkcBNAm"
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
