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
    "5rr4sbPrzDsxLe9okaqdmXxSiRbWZyuF1KKaeqM6y3Sd5DhsdP1kg4h1BTSzNmDYWW2TiAVmdmWDjKoZErWhs6er"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UkbvSzKgobYEdkVTtKrR2fM4yUnNHGaevJPHqgNNbqtL8aWCKhzzchMw649sem8V4AvFq3mryBvdRginrj3A96k",
  "key1": "3MLr4yQNZoBXiSi6K7QAGcqM8hU6bkbVa9QbtbLketY1LsPJLefBVS6B5KLJkTzz8m9og5pmYSH8Di9RokWfVqVC",
  "key2": "5dpcvMGwugqcwx6H4DxQfAWfZfJyoUvBhHknuNYbso3SgDZLRp8R6jSVDm788ddm9farwe4agttdXtLbDnmJqupL",
  "key3": "5dDgETxvdiiXFuPZubHRw52FjnuELXr96XSHKdUzEzQniuVqEaKuusfcqkAVhsPRs5t1rwcTxQLTpJz1ZbnUBKEU",
  "key4": "5LxpQPMEsHZjWcPKePXPjxnBmdZaZAjUY583EJrBpjXMVetxLCCc9Dxu4VZKD3qP29RV45gxAg9jy2nbRc5ih3K3",
  "key5": "4vFcrin2caF484fjCU8pbucTyB5qVWfcCAcxJYTFVsHDyV932mfsSZwvZcb6fkLHV33i5eVTBWoSMoFkfYHXrnDR",
  "key6": "y1Tcq2FrV4WEyzsQpmX4QhJ6wQZXvL9ztEy5jB24LPMB4ouFG11fDP6hELuVjyB7W3tvoropPBo7W7K39wVkakH",
  "key7": "iFJm38quJKrZVR5i1dRMetTfi8f73P32fv5iQwiMp4FqZUbeySAV9kawC1A1FNpGChrHEv5G6YEvfyQA7ksegeX",
  "key8": "4DcbkoDx62ynyxUc52S2CAAAH1yRm1VM772HbZHRwaRs8yTBqSS4YcpXb8CyDk6C37JKb11zN8nZdCYbhyj34YzK",
  "key9": "ezeHevXWqVasPKVM38fb1m5sqCe8zD4Q8RLRYS5JBpjcQeSKQPxyWnmtXBGxrqMmgrj1DLPn8ewvqWpg93R9Wpd",
  "key10": "2YiFYnmv2VUbPrwAPRuMSefFjnyVsuZDawWze77KNiy3s3FMjzXMHomRkdtAQ9JAP7LqujA19teWZ7BkdBLhEULa",
  "key11": "5P11zfLBJrexkSL9RGVCquuUj63jS6qeNAs8Te9AYjmdZGor3B4zDeiUQ3RPoWGUTZjskyoX6PyXuvp7vGADyRzt",
  "key12": "2aePFfA9RbdFGTy2gnpjkXdvvdWfwV5UHBkGRApLk9khwiWnaLodTS8q3CY1Rqtkdqwakyvr1cHrR4sFC61dwEGJ",
  "key13": "2ABCQTQcjq78hnqP8KWC4N4TRffufLY97FAd2qf4M8AQXdR2aufDRJKDCSatpg8zEJ5xNaUCCgsUg2DX4ov56XPW",
  "key14": "62X6NmQrXTuSwJ3uu3dwRo5WPje693197gL8G1V9TGVfigS4h3bFutHJ7mrN6ViYbcjWQxco7Lj7B4RR7mvG7xf5",
  "key15": "3vxRwtgQjKVdZBVf2mxmj14Up9HnTf8MjPDv5Jna71ZCc2cf27t29EETjSQJM6BbaLNRAiEBPv4gid7RNg121J5H",
  "key16": "2VpDKv6pAzAoqsXWYm8H2amMPpSoGHg2kKnVz51z83zjEpYpgivu2PuKBPpj5dkwZsd2sdaeCyRidStbuEsKBEJW",
  "key17": "3vxdkseQQNPmwr3xvWoQDUsU9uGiaUKmHyLvK1obfxU5htwPbTuN7MPHQ5pA7h1AtfRf3uV8RXjR2jaNA4jMdeqw",
  "key18": "ReSDjfgz1uzacg49a4pVLoAKuUFHeaZsbYfo942UVrCCpbYVmDBectAGazjcdt2ebfmUwfNGcTZ6vrtcutzohyp",
  "key19": "2tvb5QfbdbY8eekrffrZiHDP7AeV65L51xwRJQP2v2bR4cbjoZ8hBdLh1SFCAQVJ2aSLx8WY3HzawkgWdKPggvqt",
  "key20": "4yiFkgRLgPBQpHdXUQXjfH4sgHN3XGRFQdGbGJh8uCmvpsy39u87pxUW6cWYXg7Y6PzkmjXQyqfqtDwcuHy4tgL9",
  "key21": "5krr4bbrjkELkq4FP1Tg2PERtEaLGV29dCC31bYQhCRHBbyhAiv23DsfJcPyJa3RxCA2K4qgdFJH9mn9FdDdvfPN",
  "key22": "4aZWJ47fZTMURtC6twL1cT2BevehsfRpjsYA3NwKEBDs8zKyZs3Gk2oNNydMvTsbx3FbLjqmPT95VbHVXwr5TmJ4",
  "key23": "3kwfVkaPy9fPgdg6rTpr1PJoFNL6NPKxEmrgLwnXV8MEFLVHPrB4cnw4SZT6AdYatPzsvyZt1pDrxdHGeMA8gUoB",
  "key24": "3axXFJJuCTFeomurSbw5mJNTaYoRqeRPL1iaMbmkaLurkUoh5BKjeEEitseY2sWf1F5XzTqnVN1xM26M6r9x3D1j"
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
