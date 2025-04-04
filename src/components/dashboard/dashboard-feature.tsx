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
    "3LEv3AxFVD414gCyDJE5cCcoUKETpEY9QqttT4dgi33XpZ7xMxTd2gMxNsD2njmg75xmy7SD2DxNEmb9AX6gM2FD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "646cZUQbx9948ECqoVA2rjbYPiViRjtegJ27Q6No4zSKqq6cdSxLg5d2oGCnFyC1mLKH5XGFrZahSX7RXAMzbirE",
  "key1": "2tYuuMCReYGpM1KxrYrJpDzW3EtSSjFNQNhpsosQXVSShiTGkv5CwjKYjhYQKhnMEo5apPjHUc87UohHBBs7ggiH",
  "key2": "4CPDh2K9ii813gu2HpF5N11WeGe51BkaYT6cP7jQvpHvb4RVkPE2cGaC5mmNghENiGH4QNdKzxYK75FgPHt3bZVT",
  "key3": "5Ui5sPTXmFwfc8h76ijD9A4qzTdTpPGxwLZZAH5GLpnkiLTb24LCimC7UVSAkBXKpCzH8c2tqjL8GFzSkoPmKMTu",
  "key4": "hoCVfjDvxujNx9XK2nigCxH56moqN3YZPn4uJenqcTMeng6gpmsJ9XpsbRimUpqQpbzgsX27YnYApFM5f5ik7K1",
  "key5": "r4TM7gyFHs462sXBx4oyW3VmeWvULaqtdHQa3X7arhwXoUFhTGSrSGsy4bR3uCpVFfpwxR6HY9JK96asBpEgdch",
  "key6": "54q1u1oufbvqYzz3ULXaSmuCifv56TtHKT5VhWCBXZJk61G64ML3qrzeZ1F5dxHrpAncBodc6BX357zhgSfegzqQ",
  "key7": "26e2t8XUe4jkSJifKc4GDv5JX94L2CD5ZcACL5VaLRF9QLZXewmrWzZV8NTqjQvgzwweLyec6PCwL2jHbACnMhu7",
  "key8": "21z1mbcieGPkJJHMqjrFknvQ6gH1xKLAVAHDmYovbcHCj98cJYQmVpHQNwDTtrfL8R7qKV9DrKZ2MrJ6sL6TvkHy",
  "key9": "5CenKNfk8A67SNBfr1wZu9Bou8NPn1g4zkVhvpoZci6eTh9nzVBagJrbnwj6vzugdtfuJdELpwopW1MX94Te6H9W",
  "key10": "4peiff8EtHqxGjqnWYeRC8LddRwVGUpdS4eCPkLM6cEgGG1K9HmkAjetWz5tVV7ibE6HHxrXjyKhB83Y7vhPVYCT",
  "key11": "2v2DNVKiLHuWBLPCypyRbq328gdDvVh9ykfJHMkuEe6XcXVB7Wb82utoKYtQEHrwE5mx9SEsAdSk26j2g7HvrAqL",
  "key12": "4Ka9iQMDNen2EB49SfSfwBG1aoG8ohapqDuwHf1HxBqDJPsdcJQdxEGWgLvxj1C6TL9XjgDiY4yQ3pdxZNSHpSiF",
  "key13": "5EegkuZt6RUDUVUMDv4t2F1ozxPpYoW4wKWvxKXs8s5CAerYjKGwupGzAyRyaixXipFKuEoHtg6H7ihVJdiuuRaS",
  "key14": "4oXV94zqYzohMQz7nW6VMYUxp9fZhnzivLbJQPPAZ3JC8NKPbNqaTTfeEKT9tWy6CVcyN9fSCKy4LCxLHKgvY6dP",
  "key15": "T64kx8rpLA91YQuQ8ECH3jMjbpccJtRiNPDTcFsR3c7mNaBnVdvriQWbYiBYE1KEbtVsmP6AZAFZ37dQNFdb61u",
  "key16": "2n9Gn6DA6ofQz1zE7KC5a2Ld8wfESjW9HjnzvqrwdmaJyQmG64wyejrtE63qsrZEiX2UkrvuqSYJRyzPcH2nVVWc",
  "key17": "5obrk28USRKxJcAx2pfVJ326xmGRSGgRrGciAGG58YzjyyuGMHEw2cTApom8hDHNc7CXe9ShWUXWapFhZnTZpH1N",
  "key18": "46qn9y926BqnioUfhasakbfYWxNcxe7iZpopnR2ojEzMYFisAHaavVVzBLo3Unb11ttSAr6WJB4qUoEZ8o4djzNy",
  "key19": "2z3SMmg6R1wUadDE1oA29LaaHhBMmbzRgf1dptqr1i6vtdaPhcbXzmpaLPmAaRBDbEPiiSKF5LLtsGcwJopLeuj7",
  "key20": "2JTuwvLxG7jSLeyScH7Rd4Z6dBCAa2DYktzef7dKKHAVxJBZ5NQiDv499JAsHfhQ3ykaZ66zuXkBSHLWvtst6jPY",
  "key21": "3whg9z8DqFTKz1r8PQyaEScjV4vVjx5HhVDA97tniFVG1yjwW7f2p3YY2WYcLRZv3w9CuCCiLXAHfQDRKUo91Avt",
  "key22": "32f8qTDe8Q7z8crBFT5hyXmYep14J5R5gV2NTnXEbTU1UbagitMzjH3yKsKdaDEZoWeWsU41ufVoe6MAy23KW7Fo",
  "key23": "meVijEfit9rqHojjEijrPth4p3a4eQrFH26CkSjKfh6JY1XNjKG3E8BrqWBEW3gqdULPeaG9u8kAyHqqwR7534Y",
  "key24": "5qBTWUXyZ9CFaw3YmE8AMnnBVNuf69jjczMpYgVAPt4QbipatLGebcS953cNYWqzF3RnM8tQXhMUvWYFGvirSW9T",
  "key25": "51UJFNVZWjs4Uf6cFRo2rQ96SS1QV1c1FCgcTN3ZdDFPRcXKT9FBbFbqKZqheGSxTY4iXQDiDkywNGV8Cs9cUJq4",
  "key26": "5uFbyUFPKQuFBdtHqhGer4GmFjpbT9xjWFo2s3mBhQrMfg5WogLY11H68HuP4wiY2F15TUSyvMZGSYdD6i1vnVu7",
  "key27": "5woNLTLox75C1NYzSCpwPc4qbo1SBB1kTaMrec3CvKRtPcBfDK5pvZeWYEFxXqd3aEK893gFttGiXizV5QayAtkB",
  "key28": "5cwYhJXrdbZRqptK7FMnRPHBcUG8XcyPRNySQATPdXJUKyFghTS9qF3sPiWVCy9BgT8xYjfSr4aNQqUyH2fr6iPr",
  "key29": "4TWMGBh2md1hU72W75kEky6kcrsx9ydWcgoMCSK9ki1DtamHiR8BYMqy9XUGbxtrfE4WW54LsyJsDgRXb8CaENZ8",
  "key30": "3fmMefkmrtgYSUUSC6fcvD798U51N88gWYvLTTVNuVq7xGYbQcpg1weDbkhQuGSfuhBZzZz1hxtUHLBEPsMPPujT",
  "key31": "5XRFe4X3dARKZC37M6c8dCGFCDAX1M1emaRbKXHW4DdZpavyAYQ7YAJFAHzEEcjg4GuNLTuQk6g4QMzuDLKBrApd"
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
