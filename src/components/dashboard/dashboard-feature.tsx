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
    "5Lzg2SjmdkBV1J3UHHF7ZD1f71tJjRv9Mma8A7RLmCrWo1HRqApJBnFohGESgLQ7ZLotuJaao8XXKDgNxNyPqBNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ewpH6VWFoHWd5T9kfq9WLtsRn2Tj7fZgD9TqKZdkFGZL28Vc2YzkJpaoMysMRXvj9ifvMadMVTH1HQzdf5KF896",
  "key1": "3HroqW1Y7xvsy3hBDbwdKexDvJBCNtrjwmQj5wdgji2KsLHVuixWU7DmSxih2LAQFx9D4hGp979jWjRDNaf7YCVa",
  "key2": "5FaqTkhFA2U78dAwPTmX6RuBQt3ZFK1L4tRt2P4esJcmJdFt6QhzvF56heVRi9KNJ3dQJPmHXifjhFgXwDjTMVR1",
  "key3": "3asFSiJVDT6QQFUcAGewqCzn4tmibLct885ax2okpiVnA89cpECVa49H8mQsK1MC97qmsde8Awb6LG72t4VWsFGe",
  "key4": "25sVhG3oepessCbYWmookEbYCUpE4bt5GYnDUPy5Yg2UeSHAsaysA1AQdX36nF7EVJMHuF43nKRM2Rtx4kyFD8Jw",
  "key5": "5YqjNufs3uQSre8yeWY3QzCRLgSQsWgNBMSNWxE1WCMiBenPGf2wa2o8fPsjwcYkKSB22jJi6SjGrcyk77zShU98",
  "key6": "52abf1oi5imjFSXX7x7aUeCxagVKNSrQo2HiafBNYQcyLbCzNehT9bKaoHgY5d3zKWqcfHs7AAbMDSqNaSXY7W4T",
  "key7": "2W3UJyJ41eWQRqgM7mv2mtrotQxZhkDrxqq8zJynat62iZ13X7ekgzNKErC6uQYmHKxkjKSxY7Jj4qtqgJQqjA8N",
  "key8": "4Pgkh5dPBotdPj4fLsHQykQJNQ3Xf2tkMhJxU8GJvw4hkpStsvASUUiBc1X4r6quxfGEqC57qe1udyXTYGpsKTap",
  "key9": "5NqEvvMAY4y63QyxiKLVghT69EmpRCoTMKvUtZBQMLvVADXjEQQ1jNjerazsQcyGyyzqksxPsXNbsr4vNAcc2kuP",
  "key10": "4XYTztMQfe66wD4pabQaGF2z7cTV4n33sQUhPVJHTorS4fRcJHYQ6seivboxmGU1mdUUBiwrj4A9KojYRm8zBMH3",
  "key11": "5VE8g4v4Gm4srzsnNovRLMMXPSTmSBLFYDffzDK1aEvmkqThj3GXtrsUNhJeMgzbFn6AmUoqyZViQAqbMSeSRevN",
  "key12": "uK5UNoR8prcF7PPhQuxkrjbTQZT58Dnb1Csy55GRgzsHYX6Po3JB6Gq9LFrMgarmHVqYjc19hjynTDkiewERhAr",
  "key13": "HKfNGSWrw5iUsDMnVqgnFhwP3y2yFPKT96BsAjh3MkJk5W8zNmFb2YztgDHjSUQFWhewXccTJn8aoCbVpRaNpLr",
  "key14": "4zjxsZoKdbmdjQ1WRHBQySRDvqxwmrpxrbxginoAAJti5TCqzdbU6mR6JekisnAjS24fjv8ozAkBYbiF51s7j5oQ",
  "key15": "2DYDuWRk14qQtDMyuXtK2Sx9SfbhfdSo5dpZ5QiHqYf5Y4ij2YcDymU7GJAY42mwfvq7tuf93pHgtVxNeZvHghLK",
  "key16": "fZefdUduWiNBF5yfVjs8x74iuzCHj2QrpcdGwgoax72FgE167vAwg1yGGuJEHiH1syxifiQSoPnvAEbkea6sJBd",
  "key17": "Qk3Qwy4k5tngmZmhAosBu3YMGTC9KPkuYMmAVs3in7q1QpSPTh5VWxaTZhsQpn1SZxj7aEEihYUsi36gjdQ2qGc",
  "key18": "4CeMcCojtmKXRx8QjDUoas2pbk3LxhSTYSnewyLD7KmpjSZVtKa5QkXXJa4RSH2DpXWfkHZT7gJa1NmnomeBwRvj",
  "key19": "5Piy1wgsaQ79EcStQ5NDpAXTsCL6XHQAJnm1RVxptorJfk5yN5fKrKLbNDCh3mNMKQVCYShuhzyqFRptiB4Js7Es",
  "key20": "4knrjo59pgxMUYrrqvVh39P8KxgA2fUVa9EbfHcC8Swp4fd56JhqmRPPBcwfSHYiytgK2oxX4eoZ52dQMjpXDNse",
  "key21": "2gsoeYz3Xs4UnPPxDasufboSqbKs1umtb2ym8oFZknJBUaMTGMG7k5DPi4JprPKmVFhwLRsKJsjYCBsEu8rqtfTs",
  "key22": "eKsVGMA2qo1AVksHmD3G7Q9SivRbZY7G8rBZbPczXCKJfstR9HwfKQ7HBUCZQderz65TnzbV6JrV7s8Pe7Qc6Z2",
  "key23": "22HfMGXJdNyWRwcA8drKza9HXMCyx1q6si2SDUNZmSF6Tr4rVeK6U6GQPwgL7bV4WqfkQWHBsoxwW43zgpkeFRcW",
  "key24": "XcGonftuWshJcu5Mn7QYfTujTfm85znQyawzBhmeXpYY4Ym7nQmxgaD1Fp8pd96Rwt11auhpQjcrQSQNYn7375R",
  "key25": "vRJNie3u7T2CXJdsbxecpBnVnJ8hShoobHpAk33XfkP8gCgLn38NuPcH7ySVbzinj6FSSWTYf4nBRTzUqqGhaLX",
  "key26": "2Chez7FxtJnREFhghujXhnMn1LqFBhQaz1J3QrRXjRGQx1NhC6SWTiaJB9ETj8d34KRiEYZ1rPpbWA35kJwdtMmQ",
  "key27": "3GGvycZnMLhdzW8ADTLeC5AWdisdbtLEuChejqVhtSs6qdobRqMXQydaPw1wJRgUZrNbMkbYSv7EtbGYyz5cmhBM",
  "key28": "2xwXMpufJjwdjgiC5iVDecHqAXgCWLFQAQPRafrnJydvfEUrZvA3fQw9h7rnGPishTkSXn1TeCEkHt1Quegc1WXu",
  "key29": "3bkhNuuCbzWrtZWdGxj6k6347ygJLiJhfLd3zeJ1Nnoya6EJzY2wrLSKjWvDu9AhK9PYSX669S9KQqn9cPFP1Tby",
  "key30": "3gm96nZrY8RxphTquMyr7n4FkyWNmf3hqk5ak5BNmap8smzmSYTTLKqziv6Y78Xvn3bXAEU6jzp74LCqebsaZucP",
  "key31": "FDjnNN53oW7et2enpdYUechUojUbGtMeUJ6fhDJ9x8u2NREsKvHRaen4eERLJoXWJCDWoErLSUrwcvopQ96snUA",
  "key32": "53dAtXpMhgkEreZjEXk7sLfGADJv6iszP5ntVisR931NCgkrQF97EmTDzmDyemTXtFBPsjuvH1rMKtBSaLdd8H16",
  "key33": "26S9rtoxUnauKTuFHSagdWTsYKFjNsNVUQp7q68qBtcvKuVWNSA2Lu43HJifhRDf7Ja7XHHyGNovPsT5DWgxRF1Z",
  "key34": "3siFu6BM3zwdMbjBiwuWGsRmxMDYkvZoc9girz9PsDqNsHenYzpWQV1aw8EDPxiAVZAhY5jF12u8VKt8uXmFCJ6u",
  "key35": "H2nQqJPozPDS5PTVKC9kC7s7MLDhM8od6ZcQdzWavyCdgi2N8L6tsvw3umTrhfFohWsZMs4BVCjFnM2rb23k92S",
  "key36": "d6ix999GfcufUWUMbakbuuHXARNSGmjT7GFBFAcYAc64ve8s7FSvjbbdTR3SG7PEwRpAUuAdh7JssqvMDVcRX8S"
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
