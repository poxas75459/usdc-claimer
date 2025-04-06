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
    "2EC6ZASQ7E3sHHTdQy7HwFpaPzSqRmmMuKLpvT3uFYDkcT4LSBnRnpNF3oFkgLyMyeu8CWEzjSBxZ5pRL4UqAWCY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P6FB2y8WRNCUP9dTaqjTnLb4JDckZZR4rov2jzyB5bpLzhTAJoHSKL25aGoCKZi2Sc18TrSJ5mGvkacvEhAzQxH",
  "key1": "46FZ43kNiF2iz5foXx2AB6xrCAKsrXfgyMrd8P8dB7GPq7kfqHN5b4BHWYDLPWq3wESsuhdsvHvY2nWdRDNhQf78",
  "key2": "xGXKXqf87zAbHNZSfkx4V5rQ4QmK1uHNaaDKC7hmyt27LPd2hfjY7Rok94rSx7GZ8jDXXTHATD7A76ycXbYLaqE",
  "key3": "2xgxijuub7zPphBXdejuvhmffE2DTDVSV4u7XMTKrZiHFk6WmUBHKvH59ZoXwRF4KyFtv85TPiunurY5D9iWaAAZ",
  "key4": "4p5mXPnQYWrUmqe6ZAXo4qHPd8tS7MMXxEoxeq2ZgVjbCnxYBbeEYRyFoGHvmpy8dYr15F9isU4YUQVyVg4rEs7Q",
  "key5": "2sntvyjLnD69m8iU9fEYHBHSHvSto9FLsvUVKacLVKM5ZsRQHRd8NjLi5a5Vnz25qeKiKPth1UgAoW1yci5KCy3v",
  "key6": "42C116wsxFGtYwYp6xLLNLAtmbCip13Bj64u36smC3KSxF6kGK4GXZC7M2srCWWMQEvaHqqwtP75unqw5JQkgNao",
  "key7": "5cyzU4v5xCPRsv27HjuGViv5rSmgGEqn8sbrGL2i1ALyUgm3tHtR8kiuysngLzR2f51tgBMbFQaVwUweiLXEdwE8",
  "key8": "65wNB6aTxudB7jqa39XKUA9pwMuKeCDv7yniVKXx7c8vZgKKHkNCcNC2kGD3cAa34oHRa26n3vpfUU16zovrt5c8",
  "key9": "3haL8NQ7MVudsqZac8TypvUwkRKMceAVSCHv7tzygBxBpND8cNdkhqQB2YTGRdvrDHViR4wVTVsZRWvapxHnyXfn",
  "key10": "5HCDSQs7qvgqUE1chokz8cUwGaeZkKyfqy7CP1S3Fj7wuYRfKpuwehvJnGtBXS6dB8BZe4jEvxEF4CMLmGxjcaYv",
  "key11": "7rfDFGgRDtuMeLaUPAD6X39fL6KPULMeXnneh47eDKWQnSd51GsgGbjWzVqEMxJ1y7eboJyLRinydrRX4JmcPNP",
  "key12": "3CBQro4i5JNahkosCa2UUGJ6dMzpzRnpxug5VTV3n5jwgZrKmvTi12MAXvGUQKMtrHzw3ZAvzdaC64v33Nxb6c9E",
  "key13": "5QEaEepw1HvWfojPyPbnrBib8x4hRFUMSeNXCVFUnAZRsFMZtamoFxi4r9hSXgbo4JbjqddZov8hgCkWtdV8P8gZ",
  "key14": "2thavCrQ3v5d7BqnhW52BRfgQESdPxcPQSi7vAJdndTfJ21KjdeR1bi27RTxZY69R5etxP22ELXzq1d75DKVBUvn",
  "key15": "4bz9d7YEacqmGxtiVBkhbuZUSkcjUFU4YcpVNtb6GHLfCzZEpfCSzCmQMY7AW8jpRakYFQyfQ5y7wkHUhZZteHqq",
  "key16": "4negYpbJJRufQi86dsZ5rR2Gw8FkHfbWudy4ehXyMV3eCtL71e9BQMiY7CMmyPtWgzuT1Ja9YmVLiPfhBysi7Vmu",
  "key17": "47ChWpRq5N1by4K3HG4ikBCMJ7iHPkvjd57GPWmHjC4fWuepQmMmTmyUUN63gywa4KpkHrJR2rJd8S4c1WFeGuqx",
  "key18": "5uL6e265ux17Ebmk2opvUx1tjzqVcSaNJ1W9ttkMiH3RkDLavNs4nfYSwvPHbmQdwUB1m82G6FFrcZXZX1oavK4T",
  "key19": "3uV2JHdLQur3QmTENjC5ip7CueAcqkF3yBCvxDtd8fJ6M5CAvz9WCXSjcW6Vvx3xoLsQ3C7HMVQgWwdTqECbc47z",
  "key20": "cDtMV3AHJ2yTZ3fsB2rzqNk9QVMwpZe9DUQF3jxhwyj1VErhcFUfKE4C4uQXNLH4ehLeDBJdP38WJjDDa44u5JH",
  "key21": "4jQu26kx2yYHj6BiHkdsYTnBQyyL6VHoqaCFAD7Y36p9HQt3GxG8VfSdtJNtGfVrVi4aAtraSJmK5wBgDLKAgNeP",
  "key22": "J4fRxviLS5x1QybPwjpeX7HHmwsCmxkyCBh2KfeAxQR7xmDWkLS9gWT6RKj6RG51HsrhrVS7nEGsP6fwoGtzv1Y",
  "key23": "4SCoTMcqzjwQLpfCHNwDjV3pQXXBqdGZFX3QLXbQsWKtvEB2Ta7vKVy2cXMz2osGLuuKvwwG7urE6BucnkcS7Bsg",
  "key24": "2Sk5bb4RrgAVKR7EGvkTRSC6mEiXpW5evRPx9irvyg57ChwWaj9fgQoT9kxxgWtzkeMJAzY5zpDddcSuMEzjHgf7",
  "key25": "4ZwsfujU9yVp1VssgVnWTqGeSQy5QcHpV3b4ehX1uXYfoedQrhSgTTHL3ixkRARsHoPcKLMxJbrDHueGCupaYdnv",
  "key26": "5qe3JBEVdSMQHmJitm8WdVrzoqkt2AWbjgFZQS5SAAPGZSL2DTq5GJm4vH13FiLV2D3hgxrSRMAN5AGP1syBWnPk",
  "key27": "4bGP65J3SZsMpmezLfEPuqoi4PLsu9UiYZS7JwnAv6YetRFqJ7iUgMCFXpbDAym1CQY1B8p7XfMDB3uUHw7SH3XS",
  "key28": "3xYpjyYV3NCfbXfLohcfMSKn7ofo2vw2bAwRVMPnu641NYmVMaELrTyDpdoBU4t9nSxGqH22AJDvEA8p6GdgjPEt",
  "key29": "4oDbjFEho2fPRA6zSZfRrd1TAqcC1pAEJPcApok29Fda2M6r4HjJpyTvjEYK8oLmw9jRbq7iyAaBd67BGcukQgy4",
  "key30": "63FoWqLdqpxUM4citLEvj1PJgQGiEcG1LBkAszNtLBr538rQBrbHg1w6YDVLshVaBBCSZsH4fbzLT1sVmwubW54",
  "key31": "34qdbrnGkBZ3xVqSgzXEhwyiRwGkLrtY34FwjUFk8m1DiLLJFyAu6Kkci8U8H4vpEJfjopzBunVqRbsYqBstenhZ",
  "key32": "4jftHEoKPMfvZwiTr4y98ExEB7zsssWHvAdSqqu9UePGu2Grrh3LrUrtNgACnKrhnkmtcSgmaLkJwtqH9cfxxK19",
  "key33": "2RYa7vteBYzS4NDr9XQGDFdWsD1TMMhkckcxyPQD4vXFeXWkNvVoM7A5Y9k3AEGNCS9QrRCMsnNCHUxLyP9KXuh3",
  "key34": "5NVb8moAyi5J93gs6JKGX34BrnB2fYGtSoRH8A2xmB3kZE87rckABpQXEwKoX1gUnu2moMUVzjhx775eQTj3Mkff",
  "key35": "2LtpVwHDV2pf2Gf49qJfNxGPB4qnzdadiSLUqhFpjxitz9mvnSyLFY2q17rqaBbddW5CRMQhZ2nuLH9eE6wn3FKa",
  "key36": "4KB45jXuBB95hmxd5WD9d2VGdm5wn7NNzbANRoBs8eJFFC9R5oiPh1np7sCD8JU8VDyYXQCVTiToraLnjWNvMJ9T",
  "key37": "26i2vNbLLAziH8Ca6a2hZQ7KWYMMUS71DEAw54niYMmeirWJFZsDDpHpkuQkEFrGVNWbCBu7FhpsxvcdBJhxWu99",
  "key38": "43H1DDDyJ8feXKv7Pt3NwDUpZma2vMuMnnbagNRt533xzm8CwrwzbpnpJRVS2o2LB6yv96tZ6ZVBYe4ScFmkXLKW",
  "key39": "Dzdn4Z2U1JpSPEZ8KqvMctdCn9dWjW4sng3B6fhzBRGTrbq4mZRtv8qY3QTz7jRc2kKJifL3Pr1G8PoMeKSs1Ta"
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
