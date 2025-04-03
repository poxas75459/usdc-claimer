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
    "7L1E7kxKA8E6FpjWU4kHusc195J5GiXt5TMxM5GrwwrNcsasmJKBTR3c34CAmXyRcibJtiqrJDU9WKPmCWJu5xA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CtnYrqRDaa1tZGkBowiVQu6CSmosLmomZfMEwJ93jUpwYwmKzpZeLjpSnpESr3W9CkURaWwLCLg5MX6iUqLPSGy",
  "key1": "2jR67jrtUT2sNc9kn9UWQeqAQ9EgxjhzD33G852z1ZgcozxfA9Dzf4RDRkEYkM7jNpDtDJw59ucD9Hgovcovg29b",
  "key2": "5tRKG8DPf7vPoMozTZTDxqm8NNKJCkeC3iBNTxHphPvjgZoEQDYPJMrQTvVKbqANMeZmpjnt156Kcbgzd8L6CiQ5",
  "key3": "2rtyLqDFRfGqXVaa9Ea9dzhrmhLRnJy82kWthmpmkubwJJVKJuqB6VZRQJbudc5eJG31mhU5YDSKsWQvyoEqXHBw",
  "key4": "3YT7ehTFUWzGADdjhXaFgp7cSp8EnZT1gPrqnPqVDmFRq6jazKUmrBosQbY9Fnhe5kbNY9Nzoq9e35t6jZHsxenS",
  "key5": "234y1KrL88qGqotWo73wV4bRqjR8fRR71hXd6V4mhyQJvt3sujC9FU9842joCvyaSXxgagd9cP3RdG9u8eXRjEG6",
  "key6": "2zvesq4TGyGM838gjEm5SYHP3Aedr9QDECTfKErufGBECBAnDmTjWdesFgXvf5jaWpkvBgG9swHjZhBJNMhY8GjV",
  "key7": "4fh6NXBmDCAZWxbUQJxMuNaQqfeHUFAiYr8uK3spisq5fQu9q2SYKFwNju6jnuBb6BKW1szQmEHLbcZYe7GfMGwv",
  "key8": "5rLJALh3MCmdKCMzQKMCus13JDuXxiYj2KPMB3H5ST6y8VSb26BhJTgKkyVw43sJS8c6PSMr67kF3CSBtnXH5rZK",
  "key9": "2WXkZkUdGRmyagrtTiwB3YXiTqm4CitRcaxG9pVD5PL1vBXf9YiJJ2Ef4ihr4PRQ7py24NdaFiRc3QZXga5Gfh2g",
  "key10": "YWXEH2LBi5meq18aaxVTipzLcgx8jB8L1kFKe9X1DszoAfJGWVVvSCQcksjSYSMBygWJ6xFGm7wD73mKmujeX6R",
  "key11": "ude6f7wFw3XiPP14tzgsnvKQ4LFQL8nGfYYotKQJ2tuYXGJbgDuXgeMPfPqmYjZmUc6vbw39YLkkR4u91bPr82o",
  "key12": "3i61opxTXw5Ea1P8FddQMNmWPQAkPUo1kNTCPKej4fXqvudgWWka1cLx1io5ZDQDnFFLB6RV4LJTwJwwFZhCWjFb",
  "key13": "52yyn9B2J5XJ1y6XtqFF1qqCqowiy7qpruHAwa1oqFJa3NjUo3oLi4MBAwo9cnw68J4fGn1NVtBc3VoraKn7F2tH",
  "key14": "4jWwfmvYKYuqmWvfKBQvHzmisRJJVusQnkLCQaM6iL44nTNT7dwkuJEZkbtqYhSD1k93pKLPhoPEV9SYYdsjwZXA",
  "key15": "3Yx7Ao16xyjzQAEgHbNzkYk2QpaJdM7cqrQpn8L4nWY2fz6in7YWLnRbb5Avn2ekEeBLaujRH7LCT8wz48tXWAa8",
  "key16": "2PwGsxj1R9u3cWVgSqowCRxngQ3UdXzqW1jsWz33xst8VRKygpV7PCTrxvSNqd8XyWzLki7xDuZkt46WKJyRuogN",
  "key17": "3Uu9uQ4yR3rvrc6NURhdhhHeN9aJrR2pu3mHBrVkcXQsRWGFM2UY9WaeEBHp17o4xw37eMhVyMvevruw9RYgUAY8",
  "key18": "4EUfkoxgmZuZxXenLBDKCLYtDoPWdw7CswGMS872tXZ3wzQ6GrRo9jEfzi2F3oXQVVJ87QFXWH5jYvsNzKN79KrG",
  "key19": "3rhSi3VoWkAnGwfBLob5oY6xwcBMKHghiP2DCW7JgGjTa5vgmU3vPbC5UsCxKGMw18HECguXggo6Boi6JeBsCeVH",
  "key20": "2DbuwfgQ1RdEVVyRqeFFv35yteFPG1hxsstrU6xdCqmF14FKjozu8y6oR7PAj8VyCZ3C1LvUPLksLquwpDrFo5ct",
  "key21": "5wRFeMeW9XG4hRsHWfPDyMEhUaHdNpwVrUeaJsJwpWZPhWvjzc6jdtAtz5wWK9JhJRLkj96f6kdGPs8YUGMFDWdc",
  "key22": "24MVkHBhokiiDKdrZK8dfSNR5KtdSK32srep3go3btvMDnC4D9NNtU2V7iK2oE1gfiVpwZVNzgLU9BGsTxYhcism",
  "key23": "4oEtsvW5emifzWCfVDMJczMdFc6iHhbAjep6RgkuTDKCyYenZUx5sHeXJqPwxMeK75EFX4vKNBYZTmryktK4NqGW",
  "key24": "qTgdiUT5ZMr1LxqhEo7hgj9Dg2gv1QDdP9cX6BhHKddeRFQhoDLg3tMS8oMMPjWNLUf5Hh8EgdNuXe5wKG5hau8",
  "key25": "2pabL4Txjj1uy78yaKQGPaJbvAcmxZeFiDBkzZ2Ca5pk2F4LoyNXcsM9YaxVdom9Fw1QfnLnWsuQ7dKQNJNu7VsX",
  "key26": "AWNSQ6Dg56thA13tzdMuYdoNTiTnqviHpT8CmwCtY4CcgtyUmcvq54pFQQh5N7Fx5q9MU1VroCTzw212XAZiNEr",
  "key27": "2ricKcZnsa7A2j17q1vhecKzjKcYKRS6Pia1sfMUHjMwAriH5Sumr5Ed2eQNid471CwDLX5cDXVvt6SnGHs8juK8",
  "key28": "3NfNDHneUvnNqzeZG5kMLWoULLvDtUZmFA78wevivGG6KvL1qxyLJT9dHj6KJtSF5LvKRp1aGVDeD6ZK8PmmMtXn",
  "key29": "4S423QMJwQhrJGCtdV5s5muWP3uvPrMPgUdhBXMjoBbcggVXpWvMipYHynEYs9dMKrCeY61qz1V7x6jyrxWrSdJw"
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
