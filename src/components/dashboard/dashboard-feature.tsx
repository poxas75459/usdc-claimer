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
    "bj9ScqfsrmXyP2QF4U372A7Hs5ReH1FztsAPp3mFSGaQhwExXTttgmuzPzLAWxk2PfJmA7YSPj8UiKW8X4Xho5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CLxpjxbPnNGVDjTxXkTZMJCV2V8MGsurYBCio3AVqwSdt2Xq2icoQHKu6NDQTjxgWiwhy5MapSudmwrkyUL3YWX",
  "key1": "5NTgTCTjCMQH2KkBp4xMgZzpUfJT8Nxb7Y9JccPR1ksZQQVU5Pv3UcXYRiDvh4p8HqNfcRPqarP3uefhrK5JufgK",
  "key2": "4nakjmKZmFnPguP6HrvzwYF8gTxYAWQY4DdqJgmiHYViYPtr1sySNzyduso6RuNdTQHiFHVAKWCyJFnk5o3hbHBG",
  "key3": "47y4wzzXS4d3H93UH8cb4B4z368ib9BxqEHC3Tex4t3rrSSbTUkqAjW6EFumfgbPRkQyBkSYw3pGZ9JoGJkxTFjD",
  "key4": "46Q12AV71CCedhkrqs9CeXbghNLM6Fk37gWKHXPTqifkreAykY2JAoVpfYxRzZdEJchdQWVgpCs3TLvqF6HhKDzR",
  "key5": "YmiwxQmGNgV6FwT9AjpvvQMj2iuN1mTGPftv8GjZ2bqP9CmZgT2RsyCcD7h7u3JpNYnosuXrRPNzoroPd2PDGR1",
  "key6": "k2JFZ4o63S1N5atxo6PmEbnzvMwg62URXDHkq7zA5EhNzS49B21917V3uUTjbve2b1as5wa1xVVekkEa1PbXNPU",
  "key7": "4eQP9YhbtXdAcS4AzaRRnxwEc6PchM6C4SvFuT6otgE8LyNKJwyypvUbgEzvKEQEWjgdGSqTMpUA6cpCXcDc3t76",
  "key8": "Z98CVHJkcgHKtVAELNnLfRd86K2R9zGbYqChJietzGdyXucTBfKReE2chdmh44uUkqEPJLXMN5aUCoeStzULhtt",
  "key9": "3S9wDH6u23qmRxPLFLykRNAgeoApm1sjGdXEjeRtsf3uXpDemmXyoRKtnMUHdr1uirgkiSejbzX969fokGGPxsRo",
  "key10": "3VjK3gCpQAgHNumWqpYTpCQY5VG9Xb9W7rYCaWaYF9T33J5YLDqGrKa23dAEtLGMpqXFajCcU5pH946coQfXoyFt",
  "key11": "dXMEQku9mYe8bfSRFcVVY82Jb4fxWX8YJsAF47WhctumCXKTtsGyVJihaJ3NzqYgsDUYuPhPGWvs3FLrqQ4RzMd",
  "key12": "ZCbUadgW2PbuP7uKiVvjUKoNBkWQipoeZYjXCYU1uH77aLsPrVKftwmCN9fYQHw2UejgFmPFLRn2oThj5nL9jNA",
  "key13": "48fu1c1j9Ts6LrgzBduHH5quWnDb33yJUW3pp6DvTYpJUjMvx3qq8z1HDwR4sWXdmZCEp6P9HwdAeTi7ct6gUQGK",
  "key14": "n7bJXSLXFbz2bKWjBv7XAHPzLUD4mdRPyT3TC9r11Ujct2tbjGX365Q9Z98G8oFkhekvHujT1MwnBWMTfft4Ban",
  "key15": "2dULaon1sYw4z8TDV67NukFHBYkMXREd4YCkuKtNSEp31EF699TX45CysiCBPuQAWw6mgt196hesX99uK3UJoMH8",
  "key16": "tUXPMeZRXpydjNeuSn9k2hWDnvoNbG1tLcWUeeJJZTHz5sEAMt5fFpMsXhnFSJR43k15UBcBepuw3A7h6yRJX3h",
  "key17": "4vdg6ymUp1e7vbnfQy8sboD8Ckabrk1Zsvy99dTSDmN1akCgZTYfNb4V31CyPyRKgmczryt8QekQA6WgWq24s7Mk",
  "key18": "35h5BDh5sikL5BD7GkdGpfYnQ33J5jzfMZ4Qnp88R73XhzkfJkmBchUjbTNh5Hv8mVEtrt3bgCFoQVkarXa9HXEW",
  "key19": "84SRowv5bh6ZVR3BS5RyAr9mJR3nU6TczRpZUT2GJoa4rNQLKcVGyRJED3vFpHpFVL2hNavvMcEb5qiHJo9hJCH",
  "key20": "3ybTHcJMf14UjSa87VJTcCzQkBE2xcZr4ZgDThHTDRRWcr5oEvEobys2JuLGGxftrv7H3rZnsYuXzfPyiH1cSN9V",
  "key21": "4Xe72U8v7iiaxTHgwXwkpjpWco7usjncNxt84VLhd9vzJgCrf6DiRCU9YwcWuT97VdUfpxB7cHTxmDDV5w2RvBjv",
  "key22": "61kh5yCxVZB7dPtdrvLHYftL9taRboFBM5yebwJpzAhauisKMMMAZ4cB9baxzx7ng8Gq3imkm2GVKmWiwS3SGE31",
  "key23": "4tPetUF2pbWjiLMQi3ba8KatJD9D81kAsTbap3ZW6NXQMvLa8nVj9SG9LzKKm6qnYgaQEgx7NbqSVbKksdw4W3ZB",
  "key24": "uxpqZMDYeSZb3DqmGcJyXQ718e4g7mWhsdtisptQrYVTxfYhJuKVRk5nergu3dN73vwWs9NHa2ZHfi5BvSDFNJK",
  "key25": "ca7SwxpZMqhKyUW7tNbaXkCwEoTZrBCh1XfXdGH4mqG7wosMC1A5eE9K8V2joUyJsscwbsfgpkEBEoMLgCDCZVB",
  "key26": "21E24e2W5ZbXrB1Ad55WBVQ5q3wvbRnkQwLt36roCSHQbKS6JpdNd7oEdhjU4iyPATgxKjn5wq91sv1nU91qGftX",
  "key27": "45TBf2k3gYKoumRHFPHGVocpZDAUsBvikgnHp7iCu1mcrgH9rQtnaG4fjFvYaNGdvztkHVgXienKvPscR4t5qQMv",
  "key28": "4VtYtniUzCYHfbxBQN8Ck8Vh6nLdiUugCV2hrGf4yTRLUEZuMerueKiHrtsdSAp6MAAWPyMA154YUYLo6HVpnHM7",
  "key29": "UpWiejgELEe46UA8DwQ3YpCkStm7b6PG1Y2WDaqJGM19hwSKGJiNyeK5Gk3vvktLSSNsnJsdDmh6srBDrUQe1qq",
  "key30": "2MDf39znzRS5hsoW6dKucJeHtQmwUqdFHt3W89itkAa1z8HtqnDfept1DuP7M4ywDKnPF2ACP2sMNAi5renSUYAT",
  "key31": "3kUc6rzawP3YwAoemGzntBpWHiy3iTfJ7y3Kgo7UV1VgQNeD1yt36TDHbHRKPsTGdtrCmA6r3XtzyveX4vd5RnPe",
  "key32": "2apkArXxrzthUpJewVpCp4uD16AXAuEPPcpZah9ojQ9PKtsfvQRDBWzhV6rhkL5Y8wEeBq5secp6FAe2xfM6cYHa"
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
