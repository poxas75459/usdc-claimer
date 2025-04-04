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
    "3mWitiviEpB94k2rEgcsDZYiditqUFy3GSGmDF4BreNdcDdJMWRaRPdm7CJ1HmPBbHRiMhK8MuCe9DynKuDPoUyb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qTMhnbkM5pwhri61nZRULAqk55ssR8uQQkMWQmt5unZQhqPTcSXdoN128oJPhZF6ajfhfe8dKmKLxcYRXYHUJM8",
  "key1": "5Kj3YAYChj3Gi6Nv7L5xkpFfZvN2um8sQ4WSVtXdyUjPf4HLFF54bMMHReV4mUuku8i1TKbdPvBu4jeKQwA6LmTK",
  "key2": "Gu6yMKsLwdSbGpHDXPfN51Bvtde2JKHT5XB2ZrYKZmetEDZV3ZFskv7a3az8d7i3jSaRrx81StZVPGLxKJTFJ6j",
  "key3": "2KkzQf6NFLsexye22swh1uQL85wnqWy6mGDjy7uDUC2Ym4u7pa6rb4pZ1t3fCxk8N7o8zXMp9aLFHVPJMktTip8S",
  "key4": "614r782BDCcKCg4BunzFkzL3jY6kHVHTZAUrsi4EbcWCj9VfnsmhFq1TTnEgPzSmUJkb6gPLTv2M8iWYoForCqU1",
  "key5": "2n12wyG6dRU5kDRYopGfo9RFrqodko7SfYQ47xDSm4NDGpnYewa3qFW6ksHutGXaeSP3LgR57DEUQxmcEtxVUMwb",
  "key6": "2hTwTCMtFPmAUVz8PJVV9yZCWCgN5U9LyBQLynbNG6Mz4FgzioXD5LEVgEykCAz44P3a8AQJ88bLkjd3Lptekiw5",
  "key7": "4TuMPErWQJHhZcZNEUUScNyJVTGsfKERDJTx7VbnQpGjH2HPLQ1uXEp9CepcnRx2fTT4ykgi3LWaFCc71FVJY4Ws",
  "key8": "4aVkP9eS4SvrbAmnvAggjukNweX4EgKr4mnsrqb7sbwM8oSzKzbVNpaExS4KtmRAtWboea7JArak28h1qg9HzkQK",
  "key9": "5vCS1c5LFwNn8Rdx2TLUDcMvvTDvVY8b7jn33kDUB4C2qoUnZ2J29yy3Sp8DaDC9zVWLVAKHuM413v1W9w1obXuW",
  "key10": "2R27QDB3nXFY3bHo6JLHSn1BzrmEhGvq4uPwKmrTYxdsX3cbByiwSoJeZjQMLUxV2Jm2GGAcW2nY5w8CEjHek59y",
  "key11": "3ohwH6D1R2x4SkJmBVykWAQbUqMN7iogCeQTcWGHqwQAiCnX8bkWAcUK1YMAMZYvhxY43mVJKrE5WvfBxUTveEKi",
  "key12": "2WukmimHv7kg6vMXxZex96Nf9RVYQU4qS6cS3uqqPBHSXBtd6AHZ7ueHn7JUBoJFDkq631khExyEFu4ybFzLo1Kp",
  "key13": "4MB8HePvrFUXh5L1JF8TGS7GWkrH4U3rysvAuYEwYEiyiYD1jyu96wkMHzkAW3RVjsSevzSmtsHyTXw9YcPzLbkt",
  "key14": "4QENWmKK5toWcuLBFTmGHtBUD8Yy9Eb54stHvNuuSDpTWQfCY3p6Ajo7PgSDa4w9zpfQpZDB6cm9a4BSMVpS6UDP",
  "key15": "58vAPfozQCPjtrURWZqSrKks2NJwzjnNg15ASLkC8UY3dw8pfo4jVA6VPn55eAmaGVGZjGKWrA4zB3bvB6t4cA9c",
  "key16": "Hd5tDWAW5fxfsbTzyEQReKw9WrQhHX56n7oZFPvgAk51YpXugABp4Xq8F6npJr6RkCmUtMzAo1KACTmtxdeAAY5",
  "key17": "5Ti1uBeyw3SfGqoRoF228i7YoCGJanKSJdawHX8c6Z33pdXQzpCxNTchcQUhYfWPa716WK7ahLLBAkYfXXk2SmNY",
  "key18": "5kc8Lmae1EzUKn7KYf81TDNGiWfQqYm1UugeRx4v3mYvXhqaZqDnLr7YApZ8wXDk1aHhN9RZ43hZ3eFB1PHDg3ar",
  "key19": "5psapMaY1W3WfSdmEErmHmPaWDyFPRZNxzQT7yH7y67q3ieWditNp3MsChRVtRvNkCnDxFj7tFiS4B6X7WupRN3H",
  "key20": "hAFY1i1wsoXEgUBM7ULZVPHs1RenLnT3Q4xGqEatXxsqAnwhu6nzk6GnemL81AAGZZBS2mWCWWvRHMrsFELeyAk",
  "key21": "4R1XdCgLmqc18mfyJ1879aAJTx4GaJzQq4JCGNYYv9e5gsV4tpJPtXcfiqsuYkaJJmgcMJSHCmyUC5XNr5MUfjYU",
  "key22": "3dwQfHXgkAEDnv9FzMywtLP2WiRCk3f8rYZCxZMcBCXMobgj7D9zFcgV8K33WWRLLg8HKeYszSiSZdKuSooNZzk2",
  "key23": "5LpatmYBmmKWxj8PeMh1opwWxL4XFRrTqSeVZj7AXAqhmfkxYoNcTAPiRLqMyASA7urxZAEueTizGyBD3b3Ye8tJ",
  "key24": "BKjWY7dmchFkzVUk6PEaBdu3ggziH76SWShx4CVex6WTwyXCPXKjysFT7SM1zSVsRBYcd9zfXCCRRV47vpYHrBc",
  "key25": "dVA2wqxnUodKPq2k87rZENQWJCJxduzTdLg7hUi2xirwcshTZEPhrpjHKtXkVYCtqyyVk1Q5tj34ehXCQjLgR2L",
  "key26": "4jt3K62VdThL5PuGGXetsGzpUrCRsWKiPDrZhUKr4GSGbJ6acXKBx1DAZMWH1CfrzF7y3NJX9BhC1LcTXjMRsVwL",
  "key27": "5TFA1GFehCsE8S8XMgYokxq4jzHEAQsk562DLbk7kVjMokFJCvZKRR6QhGEfkCaS1TvTXjU529kdAkqBu9RcZozj"
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
