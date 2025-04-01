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
    "4tPpeD3CDjJc2hqdJJrtHU4UKCANK6ty7iDMron3yqyAKG16P7WRnefdcrGzmiT6aqESU21dw5LkfPeBvpYuAUcM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P2QiBxotCL3JCFE4Qr82YBNckGxt3BgmSWYPdU7csjXCiUr6EeY5XYZ5PNWpyKwoHxCEVWJDqYeYyzSGVE5vjFG",
  "key1": "51sC9wHLJtF6bSFWc27wi3eyxMQsHoVpkvPu7wvYHx2FevkfT4e6M1MX4HZ2W3RYBdXrozf3uJhCUWL3dT6BrwQm",
  "key2": "2iBg4sowBJnsynvECpcN3HaNdbV9iPKNPD8mdCqMUsFo3FyrLHpi8V24s4VrNvfoq49BGngaAwMLwhnu41bN7Stv",
  "key3": "4h9wswvQACau2FFuTXqH5EhucEgk4vAq26wusHHhwYw2jGXHR2rCub3X3TbC3VnN3zNwAbyXZAQCzdAXy4GjZ57M",
  "key4": "3VqGt967zuq6sBqcqNkPi2BKCJyGLijcXJ2ybGzXQpGF9yru3qL5NLPq9p1S4NxMwwLqbjSM7tAJSXLpDmwLmt1b",
  "key5": "2Wnug1p3P7A86GA6r7iGJYjHgSGvCj8ZAfD723mUTX2Zt5bx6YG2GXQ61qouz48Prjmp7Hn82hGZrEMPhd5GRqqd",
  "key6": "4cTY1rUTyxZpt13vn3Fh9Za2tQX2U5TL75bY8hG3kvjF9FJjfXS2LN8NQm54x9ou76Q2iuXgf5b1uS2HZx8hTLfd",
  "key7": "1zEnQbCjoeQo8iXmZYNZUv5GZT8HXijQ9Kg4csCwvbpSS7HzjEeHVotFP55TYcG5iJVFLECfiD3JcVgmSc5rtPQ",
  "key8": "5WprvhVDz1Lg88TLPw7KmKCW5gxg33M9euSTGKkiP8kfqshswUf2JvkdXWG1tNYxwRVwkAnWmrZro9S4A2pYF422",
  "key9": "5U5U1b3JSUYYChUxBvc2LetVJd9eW9TcXz4fFKJJZMg3cevXFfKvHQT2pE4MzduXZWYSRzLQmUxsYX8S5zv66po4",
  "key10": "kAC955TQuGdeyUMwaibAQ55UhUa28rU7Qhd5MsmgL5upJzHge8U66iwcidQQj8ohuFm9q7Gw3WYJJGmDLq3TQrF",
  "key11": "2s4QobAEHemzQhxXsWq8RhiJj97z8CkiC9J6j6SUic8nMCJH5mUu8yHZb9Jw5YLEn51K9QxEKCUBQEbTCxMAbEMW",
  "key12": "RE3eboYs9dxJ9J34BXgyxBxjKhY4HKjvygTfhLfzHttKYv3CjYVBzWfRS2owZSeEGR5MsNzGhdVdq7DCwQXY6Aa",
  "key13": "xJ4S1SJPBAmpSWnHDjXgj1T1tVkkQzRNLPpGzppNQP1DfzaqvujKs9KPQY2VSZpAKe2wYqwdqSDe8oq1Fyx7Fjb",
  "key14": "SFsX3Sa4NSNUNdPxpf3BKPLNnvmQMqfggBd94sWTG5PtQpfzgDRnFxZ3WMVB1uh9c4uHtFor51xK8aTHegovAs4",
  "key15": "2X42VvrEWoRAR6Ca4jDFEKY89kZfSE7i6ryZzHzJXqqrh329n39oNv6fz9zjaY78YdUWGnyX1xWSBSosDNaunzLr",
  "key16": "2yefnuW524ghXDJ42uQRBknYnQLiLPASnGh94LrYMxdTFmVtbjFStpqtDaANpvr12dMS4UkvLAAibfw9hUYGxPth",
  "key17": "2s66U5D64iWcETUDZjP8AETLRhF6og51ZiKNrHSmHuyTYxzFuU1wF4qfAKcga6je4vnrEGM9aLZSia8EgAp83DFX",
  "key18": "3nYwNKxBfvDCxBi6PzDywKgd2ckpodxtJVZgPSrS81LWTa9GBoN2YMnt9do6jqj3KwDPp2UKjgK6DdZmiBGY9mXJ",
  "key19": "583YfhiPofBVjW9YPiM81wpuG2DiZA4cKYn9G56FS8Edg4smtwkFmbWVfVXbuH5gCtpuYw6QWi6MFtSwVRhdq31y",
  "key20": "5tirifLyziTKmjCr552TFK1UNHhBCFmbjPHgwEoTGhcLt4CVtkMLBZEhGwjgHWSGxJodX1HTZ5gzmAudsLK9rCDN",
  "key21": "2fC3bjuvdmuhQAhNGGG1hZxx2Mszp6iLbiY2oXjZ9ef1FFzjZsposLNg1AyyvVWKVgJ2nBZohviwW7uEJaGVUEPH",
  "key22": "3rWgakUz9dNCvj2n8NWxsVjD8p9Vzw8UGGrPcR8HGHNjcRMsoTWH7RQvRMhTdcsFRgyCxKaKDiHb2dSAkbrGabsx",
  "key23": "EGJGFkgp78kmSmatUFwzpT6XjEyXHKbxNatqYuwme1u1ZEJZ4caxXSuDiMs3P38cZ9iheyZm6BpfFeNGBLVAPjT",
  "key24": "2ZXJakXjxYEsuUaGSVJHoaqbBVX6aU7VsDq7HDQGzgwALzu2s3SomvnKMT6vW9SckEFsrGr7jX47xTxaAY1QCQEt",
  "key25": "52YrZFVDHtMiwHmykT4G7MoGp6x7abStbaoKhqKxif5K9HyeXWsPcaRQNB4osd9qneSEW1ty8G3yFehC47H5zx64",
  "key26": "5SBo4yf9z1ZRqhuxgxgj7fBeHzTybCQnY5kq7vGpNtrGDUUCufPNHKZwM3TLs76SwGXw1iEZxHkvj2apkbv5HYVi"
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
