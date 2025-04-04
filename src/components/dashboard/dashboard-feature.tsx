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
    "2rAHg13fU6DjhkExMQgAfA3NEvNLxvkWZV8HWRdjUoBCQ779irUFF5BwkPCKcorbUrvVXPTsDHT1dJZziELgqfVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TYVND7koPiqW5aYrQjNT5PyzdG4ycX9zJFN4t4HBLuiumWWmjGsfEBswwVvyfTztvgcGQ9ZQqxsEt2uu9bLqWQN",
  "key1": "2FctZE2WTzpcBXSbRxcrZJRYMgJg9pWPXYWj2WJV2o5s8sLDwkjshVkAucjMygF31A14DCevCRTLDBMJYZkYazyR",
  "key2": "5mKi5AYzDDjTDMxjtUym28YSWstGz25ECfF1Y9ucZgudFVyxWAsBFX34yYifZSDfU5QTHNHj27cStqGfd8YVzggz",
  "key3": "29rRdp4kig5uRcExVMvjdJRq5LhEPaSMnhcrNMwSDqPhSDmVPaZeE6bTdAH8tbavY2rfs2dA2pFctYLQEvLtuJ28",
  "key4": "4f25LB55HhvnnKpHmd3ioaaeUTffSXSacWa7W9d7NGHASF9WBHaucj6VkaYqmu1KoRowCGMMuouwioMjqUELdQ1T",
  "key5": "5dspgDAsSZrLbUzShEqHfvuiS2xX5p9R2csuu1HAv8J3QEEGDekXXfXzB39NGMsuPZxzvS2aLxpYvKByL9FgwwA6",
  "key6": "2m9a7s7WrBkTeux3RCR5T8LZFBpMBsxsz5V5Z5NwZ2SjQUE2XbTeJhZgSJfJFkeCkrD8AQm5oUrEvsWZJtHeuN1a",
  "key7": "3EuRBTpMaYRbvn1CGf37cHLa2LHwkZtYck6XxuNY27okKckhnq5qjFEF7JS7ZxLUAm76FHEXxLzRnYzQWySvAFk4",
  "key8": "33wAxj8f2fodkq1iwbTcNoNcpGoFd6Bw9xHsSUBwuKnM9qZpNLsW7qR3GFiUzySdhYhaqHNdPsqZVmwr4ufLosW",
  "key9": "SujMdzf6xTTXcpd6F369c3cZomTEAkEqoGqAniQrqFgkGnmtwovyzAXB27QDrF3jkUS2ZGs4eRMeTC5Z986tcXp",
  "key10": "4CyWMjkyqosAE7PeaWakqJqotXUJt2LZNibxxMkYC7TcdcGfWGwHcgNyXLbspchrS3TVj2FwcyYCZYDyAHWAXKmf",
  "key11": "97wLAzi9cuoQ6YNRbxryb8nzxjHWorNcFSCrqGaBrmNnbR8ZnNm66LHC29d1z6viNwaV2P32ZULeageFPdRo8DB",
  "key12": "5cbSA9VJ5KVAqS2BSEPEfgGcw3vdwC6kFhDybWCdXRgRy9mCdptf7kL3XVtfooF4syPGoJGMSgv2GBLVHqvxNbDg",
  "key13": "2fJ5ok85FhYunUDHeRjEfkGBJSP96bwvJn4BSDgDfLEVxasku27RxWo6KEagqUJATsP9jWL6dV3rD99r9EPp8QsZ",
  "key14": "561EfLV9N95S35ehiXLNfem3ZjDXsnDRbmwzCReCM8fxbFnwV43dCLgu6qnQTbUJs9Fj9bKtcs13m4Mqum7yxivQ",
  "key15": "4MSBtgSbk4BGeu7dhmLuu8FTpdDRnJxgSVVX4j3rwo2KGPGJ419UomLwwMyJHTsMhc5CM42H6J6Mfm1LSTTt1BqD",
  "key16": "5mjqV4oeMjFvJ6KBbc9pu8RRAYDuy3zFKm7u3y8NYHakrUKBwxjH3dZtTi9G9hpBwg7zymH7E9FFAi9YcA9nps8U",
  "key17": "TtszZH3caVByttQYx2ETtCGJDV1w7uxi1cRLjnTggkvy2YnwqyxG83nBTh8VQraEqECQpT91NJqBzwiMhXiVVhj",
  "key18": "5rJ8yN2PvoQKhqacNYup7iNJgC52YaHmAUPJhtckwoPEAVxQQpsV8jgSfVkJtUj7zuDs3phgUUMwxGobfATyi7Qx",
  "key19": "5NcomLZWys7qxcMMqoaTUkQxzi96h3b11fnxXo6NSdfYTtH3p456n2vQsqnwwwGk9aFmzMYgNs7w6SeZqGJijNCA",
  "key20": "5JBEpiLQrjvgrWqS7Sh6uqCXHbxGKYAK7K95x9ViJy1MiRUMAjPhqYUQNnRwxuhX7Tstk4VGxBq4ogt6EHhXzSLm",
  "key21": "aNH6MaKLWeK9M571esdaH7AEiZ6ntSSwLwYYB7MwBpgq6Y28XE7NjAEnSMszHyvsGFCMtsnHrkqfrWNaepRvpmb",
  "key22": "2rDcFwkULzDSTqNYzEi84NiogPPJ9r2jmtx8KFY8yxNrELD757qEe98ncdzuRQzXpKJxYFwgozmpDEDFSGQm6s3Q",
  "key23": "64R3que1ceKTG3HMGR6TxGq1JsSTCuwwC5TPvq8o8wnRaNLufyASYdEA8Fq7MJSJAh9sRv4VqBwhGMPpn42Umcgi",
  "key24": "3fLDmJA9kCY9xo5DmKt4ufwnaVsMevfyyMiP7UFEGkwGujbssZCvvWnvBP2uJLxdRjBWCNosLUeWUqs5NQXKJfL9",
  "key25": "3578mpDLSbts75JbbQ6J7cXV2Gtq3y89mfUnLHGRGQHtLwDJ3pmAn5RpcEZGBcnfCNc3D6N64JCiMsuJ673tXq68",
  "key26": "4DaJ9AHNex7xu9hA7Z2u7eFdmBz3wcNX1HRLRev7R5XrXk28Ga9kz3ncWqbC5QvA8upU6atUYjySReYeCxjuFuBe",
  "key27": "46E8aZyvaso2gCTCPKnQJs2vuKAoqwJMReDpDrGqh1gWdGAPQXqVjwZCr1exEFQMoxtYGSfAEWhdfzM3Mbx4HeHU",
  "key28": "3yvxGot5zFLRjjUPWLovso8pRxHWUHJv2TPi42myPsFynDa9N1EPq7bT36zr31FitQhSDf6GnSoXGo6H7R6UhwkL",
  "key29": "4E8uZZpPVT7DByMfPz7XAohuneDtDvkGB2Xtd9iwkomJDhqGtHqKA2CMGAR4ZjBGjEgJH5XmsjYaC6yupZoL2hx4",
  "key30": "2yJjxyfa3RAvtFYSX7m61NSaTRWpwGzd8J7fowjJ9QBpy42BvrD7JgFmT29vJYjsGN4KiQiWNVWDu5fqhsjFmE1y",
  "key31": "4BopseLQsjhA4aHA6JWuyeRgN92akWj4a9EyuTXT4jGKpDKLfeiYEsxANZNapkYB3AZfmVyFxKrtELSnsaDWq1Fx",
  "key32": "59FD2tVcUPyX63krgL8b6qKsXev9MU3zT6qsHv3J3CP7Xbntf47LTUXMe8V1rSY29tEgkkmzQoJGhWQwtDpZbU4w",
  "key33": "5HTuUZFG66gCuovvG1NLH9o6UTJe5RMQwE7qbK5SBRgebuweav4nuidEkxh4Qzo1GtWKFDG5d5dagqhsUMLSBeVX",
  "key34": "31rbUWvkUEMocPQH6XUcFBkJuA9PzN6ScJ4GXmhJpcSZdrPKZxuG2SfzUcTXUKMuh91yUjZt2ZVCPXeqdopeYqGT",
  "key35": "3aHRJkvvH65VhrGJtEXYK9VctHeUigrLy5QQKcSVYN3xrYbgEHUcFuKq4DPKsvDkyT1DYv6HThLuhChQGbYDc56m",
  "key36": "2J7LkeR4oVbjWpZNaDyPfAy7kSSCUnv6ADnLKbHy1vAEWnHrANVbf5RncVKpjQyZith1XknxaQEMTT7RsXJeNuRD",
  "key37": "5ZFzdhjdHnUrkDUjkLi97mTeEry3VQyGQB4eUUcwMyQ1Nr9Bs5SnaYXZ2YEqKLV5RDrzhGVE75Wty8CzB5FeUxN",
  "key38": "4ePGK4TDKcZrWB4vvUBk8cwAefFer6kTvwKkmLoVGWJzcc688V65Kbazb4vDUc7Z9XT36XnwrVg3BnBf7yN5XWcJ",
  "key39": "4CZPq4ktu5t3DCDdV4nt8dxkwp1QeGbGhrosr6VMmyGcuhoMbA2WxZdakrQkUvJAD7ZLRQSPgBacK5CfKR8yNn1f",
  "key40": "4cAVqFN8ypP54qLgXrnsZS8L6ZwFMn2TYyhgMdH6BWm5v6n9jptgsycf1634zCU5J9dzmrwjDX7dAUC1RixQ4Yu9",
  "key41": "Byc8ism1Nt7pfGi3BS3UAFBNKqfaHgAhPHYpbVq2PZkqZfmmjhnAwdhNJCqRuyYGNGn9czZmB6o7ecdfDDpqgDq",
  "key42": "eXVfakEXaFmY4jWGAmTTq56C1exccDgfgka6Q13E5yZK1ZzECWj2hNET8csufbAT9N1LXhY6GeEVGX2hTb8saXp",
  "key43": "3ubuk1zsEHiJ1JoZoTYysh9B5KKghBBbHXCBkxJaX2inA4hFPrmz4QcbywP1qoNKgRfTJWhyjiv7Rx1xbJSkjL1K",
  "key44": "613dWKspXvxk4G98dmFXwxCiv32UATqhvGAiHaM7amZAk6U6S1xFNgC4vRjXJ4hxuYbfDZRvk9NRzibzQRreWHTP",
  "key45": "5hJEsvS5jEhySQypVPEuoX3dZ7n4yTUqQok2nEcg9W8gNehCQDznhiEABokV61Ankh5MK8ZWvAzXWFFykcvZdc3K"
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
