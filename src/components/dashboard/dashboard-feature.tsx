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
    "32YUV9X79uKkdgTi7CfYmQaYJNXKTtq1exScUTbCy4JXMEWjmeAEmCCchkpG7L2cJwVWZxmmgzsaYLvbfGVeedBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WbttYiA5sGadTHTq9UkE5Gr2qZsj7AitUToaFa24Ap6us3imoWYBbfdFJ2v7rhaMNQEvnA5y6nCdjDMPDfyAeyr",
  "key1": "5GZ3J9nkQ4sMdW3Y5XRivQDAKmny6aTkjWGEbJgLvXdcjnjxaDPo9r3G3JeCEQJHmRuEuKYCiTWbuXF6oKqucUAn",
  "key2": "4sYSmbUxnKtLcf21bkvChJErW1SWFNFvqYRzCN8MvzzNzHV5oAYq1wyvDHM9cajpGLcWEXfiXueKvUzQBRycSAsV",
  "key3": "4yfjCrxdEQjJByw9h32FnhNcahnck7grLLNkHsGGGkeQNS6gyc7Xmvo8kF8Bwdb47Kn7g3r9r99hBDXgLGo9B4tM",
  "key4": "j7Y2bCFkQoitAGAbRw6xRHL2xtFnDBwnTP493UQcfHepbT9pyTYZTDvrvwCvFLtE8iGXZkCTvkqMRwR6uLurd2N",
  "key5": "3HbbXtXaL5RVmS2C1pBDegvCA1DCTnfrYnzKBK7Fs4YhjgrnZhYgJymfq5RextWjHvS7ACnnEoVEkfwByqeQR6F3",
  "key6": "66iasCWmMNHZ2dGreUvbYUz1AMZTccsExcjQ6fnUR8fgVfq27kiH3vS5uAc66i5n9AU8gaxTkg6Y97CvrmA5D37z",
  "key7": "2tbxU2KXvQMv1K4F8rCaeBjF9mwxPggHUeCsAEAyQQJFiFjn7CA45gyP1hfmDpe4NR8LqHZaNzZ5EotrCLsf4tPE",
  "key8": "5M1CgHSnzg7SzgDuMyJyoSy5nCw8scYyrLEejvQ4Pztctw1rjHzLdihzVg8qzhZjyG5Xm2MdsCCDJT9roseHNBNu",
  "key9": "35K91Q9H9m77g7SXQFmYHqvsU9o1SrH4T7HwASGUXVZMtXfQ34y7aUu9brPFX3p1YkdQ7j2QGG5HWQQB13scpgr4",
  "key10": "7q2xEPBcJ4ubhfsg7noB77URJajgRT1cQ7qaCj4TVYCGLPPEYwceRPVSqkKEApoxSpMnaonXvdT6CoANvFhGBt5",
  "key11": "t1LoS1hubpV9JAhVEhhEedTUTayXcQpBzxEBQCTfxJuAhmp7NocFEXNMZKgRBjmYzC5bMMJSG1VC7VdCvvdN7P8",
  "key12": "2BFnFdqcpZXEGUyGLb2mgkHpyCYtaxJYe967J4Cue3za1jjQkxrsAyAtbwA3KDszkaQJyyeEH9Co5vj6NP5kcwLA",
  "key13": "1DxpVK8unNDrwbJ6FHrTVyFnS8BLk8ry1hHkJxwTS6KJuLgrePtmKouUcfyRNPyjs6A6rcN6C2ABfz2AfnPV73L",
  "key14": "2hCbTP9Ca3By4afJekbTdtgmUbVA6SXKNrJDbUA5U8x9N4DWLYxWNS4fSngpnfMQFVL43RDnKHXSusXoBiz5stxA",
  "key15": "3MQHbbGeCjTSvu82AscfevPE4QGHgYEnmAQSG9qbN5c5kGSXawtKedHJJJGVdnrdUYbiKyuMBeLjAPvhAapuvWY8",
  "key16": "MV2JT9VNYLa5v333zJvfdAfgJNNQPQPmLNYceDbjtj4dRr9yzzj4WW6bwqbrHBLZmcJZyG9fyUWhjaxVVmWvYmr",
  "key17": "2Ws8TeVtCDDCUog6fFy8hMENjW9GqhuoaKyMaP8dR26LjZnM7AD36t3yQvsUvJsjP6mW3wH8bK2ANDnAvLEMARyg",
  "key18": "4U6qzE8CuGBc9ojw3M4YFqZWWMHfZ4Ywhj915htFUxibzqroUuoV6SSiRbAZGF3eWdRgb2oLZWpCpDWG2T6k5Voz",
  "key19": "32P3mnyQ9JLAzvGc7NhjxyLvX1pVAp9zimdMqpAawSBNmWwJo3RGJMMDgQB6ZDbyhpgMJPYJYfRYkZVTbLFacJrY",
  "key20": "2oGJ5iZ5pfTA48VG3nW6YBjND3mSGkEhDeL3VMPvTvUEWr7bf2Y5H7N1QxSSeVJr8nWHjHxRujTEaMDb74cuL8GQ",
  "key21": "3SFCwEmPJDd9zfjktAFULJHEueStRBcj8AiSgvkbgX2pWuUWCSRChLf8N65uMEpu3n9TU8bz4aCZKdGNjiTpC68K",
  "key22": "2VVSqWwQ8A1WEU75mQUbHenRQY4NtS85kzbzzuZoQE1h6CSLeoVaUSkoW7QquJb1U81AF2RC4DaLSYCTnENcmii",
  "key23": "2gAkv68cRkQtfGjYavtqVHCQ45xD76e3c5fwCqnxLSQBBzGVcrjkV6RW6vLpmRF73LywGiLyCjr7hnrnP5WwpjCX",
  "key24": "619MA2M1ogBsNDSqey2yioMZyFVXWM1P9N3TSik9xsrDHm3PQwuds6qZJiUTc5LLqgLUXhYTnfJTu8RKhz3JEK5X",
  "key25": "zLKz2yJusjCVPjfnuTHDuxL3X8Kv2XLBrswHdhH2HCJW8ouwcXfhr8SwGY7ru1zQsUhWLQwg59qcu3rBH1cNx9t",
  "key26": "4hgiZs1Cdmtsq76KCRxqhg1dc1xeTuta2pPLnZBdP98t3tqs3NfatS3hpdWLQjT81Mk5235YsTqgFfN6eTd6Cr79",
  "key27": "2hSNRLAnNQqxmMYruCpuXGEwyRXL3vtFCZxm3wYSGTncsR4EEQQHzhjYFwxfs4Z9ZsqqdBQFTdgpRpTnHeyC8EWF",
  "key28": "5WczR6M6rzay147vkE6vQcUufuLMMt88T21fmUFnMqisYDWUFb44F6zBBPgrC1Xci5ugvtUQbqF5MNUzADDafcd6",
  "key29": "3JHqrjNjiXvjwBLFQ6Qe1ceb8Dcyc16BctvduBaqeaeLXNCEr4GkPEYvvDEg6De6h2Q3dwF3n8ZKyntN5QZbPY5d",
  "key30": "3pBj2Xnd3c7xD8JwU8LKdoLkBTJZTgFgw5fkqqk8JXBDYhVFKCwJ6Z8EmcK2BxXKMGGNaU8SouyrgzVPMf5yT55W",
  "key31": "5EmLNnTa3WEdcZ1Ymin251EX7yvDZaETjy8keiU5eXL9MeWmGZbxE94hQTDFqcX4iKxC3s4rvag4aCGCXPhzf1CP",
  "key32": "2MUfBemA1r3vkMF7aJZQRhRjR81n2NeTUxSSJLvPFvmrgCtZFKimAioAxvvjhdn5jZUTb3Cc6sMhXdp6evYyudxc",
  "key33": "4qmy6fG46Jnh3vtEbBN5pmpFmzir3AsCdvcTfvGJRoKVWQDSfCfU4apQmet2C9EpGysWGLKLU8jkNAbr8AAZPJD8",
  "key34": "2xqCVrxe8DScPC62Vz2mpb3PvRDYwbnHHYw4pjnMPTuivXccdi1qxtXrF3WD1jLoVirA9o4b331VDrmCkqyL63Sm",
  "key35": "3Uj1bXJ4Sg14PsDu6W2b7ZwfWEZ3EvCvPugBEuF8n8X8AMQHKBE7Bh4BDYHbdNfMpoy3yd4f1eVz4MbhLZAHMVQr",
  "key36": "5rsPQKQvAfkZNHpQZM2hzX1kaqiGEUU3adSu8J1TE2Zsbj6Fhu7FqyQX5anVn2RUxooXgyfMyQc5MEfEkWVU93d6",
  "key37": "YUoa6kXWJASMKdbfKZik4aLsvnmT1BFgTVzbhdK3m8W6SuByak9m8aVEenFARAsipT43fudYo2vKZFp4jnZh4PC",
  "key38": "APLH9VzLpRizZQgrbjGki2RWo8YLBfBWh3LnEv3XjVyHvpcUuvSpf2u5vqJNcJtVxXLHZDjVKxUq3iRfg5Tgqin",
  "key39": "2wHnve6874LouMHNmopTeunq3dj2W8ntUm9zsRbh3pHfP2XJTGvMfcPf9GZaSwdiKyWd7LJMFSphjiJC8aLWa5yM",
  "key40": "3sdbREGg5bdQKVts5vJjzrFHsdnG5fkxFNHJV9SFreGm8HFDfXt68RtJbLzt6U2y6TtX19epUqG24V514wWVTmnm",
  "key41": "2MkYGCYUHVtsSkHGbrx29zcQLd2xQcKYaxHKWcKsXCeFytCSrCS1mrai6wn185KutrSguJ6LTdRYcCR27h9uVPYo",
  "key42": "2DnhWySiAoTTM61qva2CaUwLre3RrJcVYRcMwto4xL1aCD1QiBptbfPFg6Ffki5YfydVc2tNGHJJKUGakcXTuQxe"
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
