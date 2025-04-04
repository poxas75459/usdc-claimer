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
    "Tr1m8Yh3BcVkXiiG19pWHtuUX8QW4hBQzZ1d5LwfiwcbJCg1N3HyqmNQMkgNeXte4VCL184HjbkBdSaCZyMrM4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H94pNMELA3i12SLGHL7xXf3tsKrr2duNxHyU6zSosQPK1uBueXMyrt1GfUFFvnDd8zFmNkbSrbr2AESvfn4TQw5",
  "key1": "33FyjGQq2pmyKtbiNz9gWaz7uYirK96rzoN7H59GFGnQPw8EXpL2wZTksTwGVMA9DHSXMzCoX9JoKdnP6HKyKHDq",
  "key2": "SP4LeThcaPRr3LCgFtxMHKuKKTGKftgmUYKNNoD8UBz1iSq1LFXn7rTMQakHfGW63oRg3DMhJNYG2PgEnbhufTk",
  "key3": "3ay7XQMYMas3Pf4ugiLZuv2VY64XzLBKtaFHuCj4cbxnvKUdTYBdwGVuTYU8Nf42Z7uGUymtfFThPgn3jnikdfQn",
  "key4": "oEvsZJLdKYbVjPF6hqYtVXYP3u8RmMPJfv2hW7YwVCavZCpywoFJ38QGBrrscmSwGrtG3ExREjpHC6M4JBN8Lux",
  "key5": "5VTbwybeDK7xVCBdwpDrEBSL62t5JRdo2rUjrjSjdoTZdsTaxxmt2rkhhBcfa14mrEJTKJXDHGYt5gwCAw6XhL6a",
  "key6": "5UR3zkLaNJK1KB1NKv4yS9NxmcGgmqskwWhm8Vs8Gm4JcuT83md9cDXmeaPhHpn3KJa1T97Q4AtEJmYFAn4FXSje",
  "key7": "dj5XwPfFF5iuw126SzbtMJmsibQzvUsm4vPnjQnqpqXu75tLarNt5HZekb8ZzJ8BfasKXvrjSuCnagn5pToc82z",
  "key8": "3m718AZfZLF9iD1V9MW9VpmrvQa9ybS63KMdPwh65ZkK4X1j3ccJrkaehcD6uuj6jmNEmq41iUR1wSHEwu4uov5g",
  "key9": "mvKRVSUhrAev7Lt196SKCmqxxZ7mySJRzYvfWJe78Fsx3fXVETzHJ1Ai39RN7anasRxZH6ogPJvD7ocbM1dTgSj",
  "key10": "epBaCqjiSimjc39DaDKXAS61S66ozjW6LDicL4XuzSjPpeJns6DNnh31eWVc8SJJQH4Wod5B6NYDEAsGZEYADcP",
  "key11": "3SdiyhAn5tmGs4r4n3XoXkNHjRKCjrtZdZvW9nPZHX6rV85dxR7CjSjNwVCYtXswFFWunnNzbFVHBRzhLfq43N25",
  "key12": "kpCVxryisyubQr5SDruy9h34HftnF3J695wThU3WLLj6Tn7Hz3YyCcKtkAzpjC4EGAP2VHqhMehkp1qS4B9Cuxk",
  "key13": "erRt5zwdAQmEVLacCzKpUwZNahs7mvYfvkBxSZoNsN8HB17WhLPqrAaLxB9VTSaM9emHRewZS72y9FsVsWbXZuD",
  "key14": "Dm4GfaYv8Xcf4zTedAta18QgGimSDjtvv8YmhFdYxJRUDttKh1b2PX2P1PHZchqi5QHkkR39XHZTgNenFUQcDZv",
  "key15": "3XDn1L1Ec6xGoKqedb4Y9Ptcr6p9rXsVbfuqbrG2GKcrwRQfnGkmhmrSPYtHcR8u2QBBAK3hCMYs3JAvm6wxJaDb",
  "key16": "39PmWu7cjaZoZo9xF1Bi1LHwoeqebUiw5oYT9xnYzj81prmQw5YZu3sGyRHF3ZAEeJkYkf7rbQS9NmGmHF3KpXnF",
  "key17": "3mmBgkCqsidEKtq8HmzQuKYcYRmt8e92CwznxzeFUGab6uLzPZLmFNKFn1F1xwESZduDoWXJrP7KB3bnVDiTinTT",
  "key18": "5uKene3AgNvqHadjB9iSS3eaBJNbKEmEgy5284AbqECMhcc8VoEDEZUU2iDC2K9gjCApHgABCbtq5gnt9cmbWapU",
  "key19": "4aQQi2qPS8YYkEV5qXRNQvmnLiiw6ZNG2qC8bGcxJvYwZUntakGdHS6mTdQ5HHaZF4LdJrndKuD5s4C7KX9aP5eS",
  "key20": "2ANMz16rpA1ciKrqeJDC7SuGLhxYj8ZgM1umm8NgLd3YhtZnLKa5c2m8jkWg9E4pwiRuPVFwYqXNS9Nd7QiE388w",
  "key21": "mXqoDPsiATeKuHavQVViLrgVe1wNL6jWHhQAAP8q91ffehkNHaTpLVK3wWjDLFYi4D6mF5sH4qVKnVkT9WnPNQC",
  "key22": "jKNmZQ8zkPcCpif9Yd8kFY6dUAJQc7w2s6A5c5N4vr9QW37QkzsyskvvvrUdAGstNTvSL6ZtbWLjbCrqdTGGJrX",
  "key23": "5jZpoS18GjagSU2mxRCgf9RNRpqYLBayLnWzfks7bQWdx1XnruhNFtkNmVmmuhY12Tyr34FHGq7vnAbZvphwfG4n",
  "key24": "4XFEADTMNdxgwa15F9CPn3yDkmajdoghcDzXg2GEYPebigBATkcTBkc51ZgCcox9snAywTMGa1XASS864Y2x9RsB",
  "key25": "5cnLpHcXF7ssTKWoPnqcXyhWpte3SmqMMA8Gumg9eGRYhbwaGYcvfPekgE2UnA61xumk9yXv33hkZbuErLRK4bCw",
  "key26": "2CXhzaa6DsX6x2oV32WHVKRgRMsFC7vd6MLqdM3tUjG8gPCUngvaUwS6Je27QcBqRMAEiv7dreTTimh5y43me68e",
  "key27": "sH3iLtQjxeGy6mEGMN41ACbT4J4EhiCBGKQVQwVEJtdTzzGTPwnedRWxkgC3MwB2AwLR69jsY2AAWCbZB6ALjeb",
  "key28": "GohazqQz8tnkotaqP6tK3upyHEfPtfueJgrJNrqsUNCX73rCY4S3T7fd1rh62E36NWfvizxh9dMBYBGhCYrKaiv",
  "key29": "2gdvqcqTJJtzQWaDm4JGrLvn3DVh32t1RA6puw1vPJDy53PhUnyBpPnTz2CoEd2EWBeiPC1Tgi1TEpNAdijqVLaz",
  "key30": "GSmozBEutQeRxsKgbh3Wc24igSDnjbpwGGCGvjAyUFZrXxhcvezYADDNe7HgfCkgjuyVnbcSsiZ2TWiiXuCmR1R",
  "key31": "3n2i2Yp2caNkbH7zmGfxyFtePFvnzTHKg2hM3iU2qNtfwP6vJj5q1iiUfCVuBUbsDGpd6JN7GwXJPVpc5DHM4Che",
  "key32": "3kv6uceAaUwrfERV3DRr3DWQUutQdqDaa8GqtbtPb9ATd4QCEkGEWrfutbrmoUzmP5XxD6Qo6DdRipUPh7igjSAR",
  "key33": "4StndVu92CJ5K8dzDxY6oN7xCAYYckBQnYzWrJxkeb6uXSJrVz3gKKjYDuwbzEY6e7R24Y1o3HV564f9to6yzvfS",
  "key34": "4Ns7eHENU1HwNY5aGwTcUbbZ5FXqgQjzZgeazZNCTWsqFTw4zzFhWMtsELMqPxZb3QwnBWxXzBW8MV96iKWEmQa7",
  "key35": "4Ay16mHBEo2hewP7Phgn9wFy36xptc3JidgE1VkvnkQQStR2pYPBy97z6PkizVqp8j3z1dMSGyhdrY5eDLs96Z8q",
  "key36": "4urHRGPQpSWTEiDJCaYRn1FDEpS1MxbCjmVQ5KUGMDV8Y4BN5xZ71sXqb55pnZaz8fvZDfRNqtuQWPDTJPPY2cJ"
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
