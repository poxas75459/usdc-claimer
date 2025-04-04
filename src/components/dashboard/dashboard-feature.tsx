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
    "2yjaTeVbLzFUHPyrn8hJabtRaf2xCFB5nLSaSFmYq8JTyDeDZybFJcB8T2Pgg4xfuTjwDkiAub2YiMP3qE4qCSPa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZV57fcmuGT3zQeCeCeiwckC5xD5wvEiTUBTpsmqiYTYgagdKy5RtvfqW8iAeh7Enr1CQcDB3V2RD7bTfXMTKwHg",
  "key1": "2UCEH5UNRcdYm8HwhUNUzx9mrCYi2g78hfwTjjqvwRqc2CbEd2RDmFpFMwYzw9MFFdpKmFqLWwntJSkjLh628t2d",
  "key2": "3qScwJouyAoPjoXjQ4yiwdswJDKf87j6miyGbmes7CoQz4ycmaYM44mRzNCTyzWu9vQDzpFHx24kY3BZbrRbQGYK",
  "key3": "2bLqqai8eoGW2ZFrYwMQVmfyAf2Qj4MhtqikjYSEw9hKKeFnXHKnDeJjhepCMMUNftb5KbBHycsDqyG5qJNddK78",
  "key4": "4uQuzWth5G5x8cLRPMceP3LqJmd8rqXqyPGngUXi9ZJULgJegNZNdd79vKQ97xmV157Wpi5HGPiZECtpgyTTPgRJ",
  "key5": "5shfDnQr7Ykn3TLx1dhCCtKysyMmLigKFrfHu6tmpm4xr5XeGayaZXqxhk3z2Pr2ZUG6FV3eR8jNxuW5dMVcBQQ1",
  "key6": "54cptEq9k4P3Tc3yV1QaZ8XQHzHBj2zkGjyzqy7ngC3ZVqssEp47oJvbnXpJAcdeM9R8ic4uB9TpYgY3AqpuERjY",
  "key7": "FXbM4Kxu7Cbw6iV8PYiaXeeQcKGCJhEPV9pmFzBceS3FSVjzNkHSrcMLzVJzFD8gLpoKQcLFLEkPWwbwK2zYg9z",
  "key8": "EVdyEAXzTWmCxtEaouPLtnLdahAkmijdBtKkAkd2rTedHuD4ug2NE2Mg1Tz2qEzCQf7QJahk1VSTYi2vuucvHZi",
  "key9": "4xQLqDTtwbZLy4Fjm43V9oJcz77RDzkTDzUVrJzpAZQqTtcu6aVELzJmL67hwfBb9N6Cw56nJVBur8DsKFPF9Y73",
  "key10": "5aWrLyyCUa8U1gVShvW46W8jYVF4mSTBcuiu3uM6ceLaVQRHNeSE9MA7t7GmND5wpwJPKchZd95Fz9Gqnr2A5xHQ",
  "key11": "M92vCPSC9vDcVt4Bw2ngANFP13un2iVuKrabWHePdyH591PrvErwzLijb4gDyns4c7BVczyinNdLw2LqhbWHg85",
  "key12": "ZG5pLnx2L5ioXEuuun9GUpcAvVoK78E3GTy5MaCE9G6Nf9Fyk7BHTphKY2ZHvbFkaTui4mJPHfG3hS9ertAw9eu",
  "key13": "42tTuyQRNdwTrpbvDZykxtdSWBASVaYqcjiVTicADqotmbFqCHR4RLt3aCWn4t2gHR8cQuxC4yFWfb6feGMVyrvL",
  "key14": "2ki5JLfpZVGJzoE2KQFh6ePHJeqfTd1yRHPt2zcth57dfMwAbykGKdLeARVtrQydK3DvraVTp4xh8NkjqCPeLoEH",
  "key15": "39ZAPCpqDsZBsNu679SLwzQTuZUhjDJKdyYc3Y1pvTUv1zS2K8c1YgHR2vRgwCHr6VG5zEmvAUAAvbRxarY2uyNr",
  "key16": "5X6R9VB7o4SBiW8ofEfxHn9iPTucrybus34wUVfqLEBHde1x9GX7VVxUbL3qz5Ut7fcupKRQEr8RrAxccPVz6TQD",
  "key17": "5V8fs64ajt1zaN6hUS4K9LGjawcZ38o8KUR169mxqG5GvAqxcMopxs6ksuqp69y46LSEX1dDWGYd8mCYn4dK8ddF",
  "key18": "4g8EmpN1H7tcYRGQsdJi8Kq9t2NKCpTaz4i3w2kvP6H2U55xc6DVUEu5KmwC4FxG1EpMPzuU1CptWUD2Kyi3nJtX",
  "key19": "2oURUPW6hSJdxX8iQzj5zSaEA9fo5CoZZYLzXiYgx5PFoPPzeEjbpwxgfXbCVwRusVxuRct2ypmtLNYgG3vgcNJy",
  "key20": "A18ywUptbXJDfkU4iMocVwHmXQ49cjFSnbkSh8Qi6KBkuhYLboCHmKvBWiGU3QkMMNKaK3cMLRsYVtZwMed3kHU",
  "key21": "5Vs5ZwbAu4VaksNWihCr9dftL43HC4to8hx95b1i9FQaTADqTxTvrMvp3ujynUf1iYfsdZVTd8FL7qgChhJ75gP7",
  "key22": "3Ei7LnUxgtELouZroasZ188sszrRxQpuUnkgcgYfLrRdjQjxRUU1qooMYLWyM8PpSvjaMVXvzT23LUYvPE1YRedH",
  "key23": "3xSAXUcujpCVNzqfkgyR6SEjG22nsJuwHqqSRPQKQWzrYjq1mNbz7KrP2fjWDnooM29Xw3gWJp4YpVt9jctkhugF",
  "key24": "8VBZgqQuxo9PMdpjRCnRTJ2V6ANCJ2ecBtojb9cfjQT5LwCAjodJisAcrTasrL1PBeSRKTXTsDqTXdaumh8KFRJ",
  "key25": "4fjmSRFVPkS97L6wbCM2g8a3qmiUnNrrUKsw2X9VW6MWRSeqpSwR81J3F5s5PV4oWuTXHCedw9TX9qxt2bPPQGqn",
  "key26": "xqKVsNzeNWFKojPeaGPectX6omBuYAvWocB28yM9JxQJJ3SUpqpEkBBusNvisNXjJtVnboBHoCMaks9pn8Cjppr",
  "key27": "qdon9NZsiWaoWAw3EcXPkV3EA2j29JFZe7FFLCxZXVbhVbrs7q1Rko2Qkx2diBpeSSEAcQg1HXfkb6HchNxS5gy",
  "key28": "3FdeH8E37wuD6tGjqFNKWnB5GFw7c1vzjJB4ysnrAPXJUAndi1a76MKngPhB3RRagP8YR3XXWkw4KGvDxM7Dswm8",
  "key29": "37ZD6YCNVWdtikTD675PdUNmtB45qbBN53xYajmme19qcs2xqLCgKvVngWxvicmgAXdmh6GQuofkxbyZ9nwD5Xf",
  "key30": "5RxLuguT5PvbVCFu48pCSyDmNisiREQB322ztZsNt7uoGRr6QBSdFRBKnrJzVCYDXHZxVFi1WJHxS1dgGnsag3yg",
  "key31": "36BXhHBGeLqth6Ln4uU1qxNwtsvr4oYXMGWxf668WusLFMdchFRZTk5YofeNmhEhZoMDp3Q5zuysta85UELLQV1P"
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
