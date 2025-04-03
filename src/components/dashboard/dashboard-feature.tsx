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
    "LvtteGH2YSkFpsfqWr5BzGaqSvX4LWwJQcvRUTWj2bksNpUnLjf7H9aukWSLoMBumm3Ly1Dk72Pu8K161L2PgcY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nVcWFzEmFteQUFmtXBkvzPEAAMJYYjJ7WqnRZXv5AoxvLSpT5XT5VCcvxBAyV6qNEr5yYozXsjESxAy7New9WCj",
  "key1": "xrLfP6KBsSpP4KUMQsP5VUd3pcCFcE9GG85Yqk7ZXkTQn2ev1cDs7yb6KXDj22HMQaHUQm2pWZEvJeaAeQuGD7D",
  "key2": "3kC22WTMvdzQsDE9YDKiD4eWTL57yKuJBdhfy3opxMCnbsxGCkbstWUeWiqbEStFTFhWXkYnyCNzNhiz2rE7CuYc",
  "key3": "34Db3WrTFXLdodwHsDD7pjR6g1FR5rDw7FzxnBNzG8kVu5SNXVF2qeNf6KxjATQUDjx9b5xqH79kRbKxVqS38zKX",
  "key4": "2z7LCxaBXrTrzge1fLU5KnhzH1iCVYhAMSoLkizr4afA1wFUDKLJ4UzpQKH8k5B96grX5b6HQpzwtezkjDgM9fgv",
  "key5": "2aj8Jwrx4jC4mVcUu5uJqAebq9vQ8cmNPdvaaLGpXCo5ASXq9oTnd6nYoVLuZFimbNeAfZzCshxMFj9q2eL6aSqe",
  "key6": "2EF3hPgrZiuWYwypVR7U88TC6ZQk1LikxBXRGc6HV6WBH4Qh324gbx6TAmnL9ivrHkytP83KEBeUVU15tNJRWW1C",
  "key7": "ZqFMaW65CqfBmroWx4kndTuxV4Air1BG5sjf9JTKPVoNAwyhQ7aZVfwJsAn7RxUqJFui7QmemuKGhvLcRYWxQy3",
  "key8": "5LGv8DX8BR5wGkoGiyYYToYToYm9dgyKR4xz9k1Co1C5ubftRRG3p1zAsNUAqpzcMJwsvQo8TsSvzq1VBnEARpb3",
  "key9": "3wG4ukswfbcKTpjTVeMR32aKHUDWrcnfoFW868VjuiRkh5oN7fhTWaxAQyHxdTkV2bastYbAhj2eTZ553wYUwVX7",
  "key10": "2WyvfQZ3NrtgpsAUnMo13qHDGFXarn6vL759BNSfmz3B7eDuYsTGj6L3PhYiha2sDtV6JwadLAwDTQkvWGw7WUrp",
  "key11": "2uRTPRWJYxXGTgmHkaHdZmh3eMZ1Ph9rtjeLiGeboizpTmKTEFzktiXgtepY3BX4MgQF99z2iz3P48ZWkxRkd5CM",
  "key12": "4oa2AFs6zB9e6bfVDccvN52D2TUxL51gCNSfKr8x3CUSudCJEHq9aQ61TqZ2fiqXN5Bso4nmG1v889QVW1VmGBNe",
  "key13": "2CtDJC1nUSNTkin8Wwf81CWJ41QiM5WptqQgsFpwUnEfaMFPm6NqJuWcek5pkvzicnwnCvVK1pxYr6gpJfn4QgLd",
  "key14": "216z29Q2LemZfaAeiVxCpBX6ntPzSzKsPoEZxn9Ys8aicd5FnzVNzKFdTxKoL4jhCQqUivahGG3pZeSA7rC7xXMu",
  "key15": "2invnvrfAt95JbBz8uzziZtcQ55X1gdcLUpF7nWVNKsC7H6zbkTekfZBQePcJ8n4zgpqHtmqMPV6k4x7WhmCbXAp",
  "key16": "5wuaUM1L2TTusPTBbyrDC51ithLKL2YLcUQcWYLfGtHGJiNLJmyPpumaxqCRXxtEY6DUPG3rdjvhqohKWQ7xPh1R",
  "key17": "2J4x9ECer3uKXW5V9xWGbzSPicqRj7oUYuxKxX8j1wMy28Ljz4Jvo35biFY6uf1795DSe6sNEHX8uZ8ZjDeNJ6um",
  "key18": "4YyVEUhpwrd3i5eDuQURZMYhHD4BmuXDXmAqviWMypze36MR9J1xQmWgw8MRTkfV2ZnrFYjcJ2CoaN7mUmjtX6hj",
  "key19": "5teoWBmyhR9KSe7PRopTbYAtXPxfNGHCDN1WFsV3kWwDRWZRu17P6GwjXf47HctdRaSAFdT1euxfMCXCpbgEmEkg",
  "key20": "Mw86bRPMeh8dGc1ZEyVFcjWF2iEAqedeGCYpmz6Cedgj8fUJCVydPRtFpho4tDwUQB16KzkELiVvco139K1FL2b",
  "key21": "4WGQMrTnrLyrm5i8N8xWEMThUFc37QVpT1esSkjKoueW9Wf7Dqz9ZHuu9Qo7U6BPaZ7pdQzS3T4Q3ogaBpzzvdDQ",
  "key22": "2szMSud1S3ov8uQwPdYgqMAJUAHz8c7SepRp3ESFxjbV2hNuw8WjWMoZ6wDp52GdaCmDTuJ4guYyvMXgkb5vyHdf",
  "key23": "5Nei8siyESVAXpvGDgqsDiUeEecHSbF6xPDqhTSxJX8q7xHpb64HNxUJZKc1Qx1Fqqv9ossjvnXEYDPB294n3utJ",
  "key24": "3kQX7ZTcUrZiyLtm248sTExE1rHpo7ou7mQYp7LjxcwDthbnCRLMQa4n7BKGhdJBcGNtvbkefMgisEWTV3Z7vGAr",
  "key25": "d4ic8USeiyPDq1BYKHqzjBqAq3YGnVEzxbdomPwXJGmwNXbMLnvDZniYGwNcf9A484XD2sXLaGrgVJPDgiC459W",
  "key26": "4aZsHssGVdqKaNDc5pNWyp1HC5AtmZpTs2W6Waw9rQhCo4C87G2c9EqYqkY8jj7ZheYRzHpmv9ihgLdatyDeu8dd",
  "key27": "3bHvUCFTXvXCAXNWBZdGBeRqBj7ooNEWS8ZwKgeZ2B2DGzGDLtM68FpRWxGPdUnE3Phb3hF1K9zkhfmiJfNEusLA",
  "key28": "2udoPawT5nJvakqfRDPjNjU5ehJdN23vMNeesSzuGv21br6sgp1a6VMEbBzjZLhPpfmmDnxTkpLttEh6P4sngPbw",
  "key29": "3vaZS211uTnYcno6Wv9EzCVpL2rz6GHUk5bGsD1epqJNYPUe7h5G6uTUMPBDbngjvUP3yZoMoj9us8H4MQNMMGvQ",
  "key30": "2PtMoLVw5dDtoUCYdSm2np6MKbMnEui7Cbc4wMg2FgqNMDw6c1vNSnF6odE1FTNi5LbSNrJCEotWKkRuguJ354Gz",
  "key31": "5z4VnfHgXS9p9KxZBdBE7X3GBE3955PvjqXd3XzXwTV33m1aHvLQZpDqcNdW8Unz8372U8ZJ36L8PmAep8zVMa5q",
  "key32": "5YhNhxKMZ5ydhUfXXt2KHrb54gUqakL1GkY41vxzeP8oMkAjnYmjZP7qpoLnLKuJBgQ52xJ5hv26fMdW3uAJsMYG",
  "key33": "5B6mnJ3Tyh2tZmqzBNcUnE7dqUkGnxv49LUqfFoi7Rg1UEVvdjnNq9rSZhaxUsmKo34UFHiJNiputXz2DnwPrhfy",
  "key34": "3XP6eEuEZRgzbTxiyHb9n5i3XvnvrHKCoi5NxaEmCvLZepVi2ELsckmjaKFcbogeo956hbQ1WJMBqF9et948mBT",
  "key35": "3gLf5hR55JcePM5Ef5htPtANUXYvgR8gEg4FpAVhhs3nKxCsXUmBP7h7peQTVpaHs9PrS2rtLMeG685we1eSH9iP",
  "key36": "3Qz64Fj3pfLShgbHGSZa2f6fCqdd23EPmLEa4zKUjW4iayox6t9fZdbyWZefVaeEA9nW8r9QxthKm18RkyfdbWf3",
  "key37": "HmS6A2B2363r1dHXAno3g9hjwPzDXaT1ugf2MAEgb38usk1d8Xvi9eR7qoqQVVwgz3iE3tBrq5hZp1gBkW5FJtc",
  "key38": "5mAzHzTWCYdh5wPhWnD9ZsiY7RQjAxR4imw2rDui6nVYrwNvwxNfjmmUo47FuwvvLr4hxEiwF9c8hw5xvySPMfEF",
  "key39": "347okG1N1iA1TZKmBWSSC4dvqvBzHD8P3XFGtrBMAjoCW2Ne9ezxmQaWveZFVP1Yy8wFqnxoKU4dnjzB4X31NG7i",
  "key40": "5R3rV4H4wqw8tV6oz4Ye6iCh8e8Mn1LK8EninoBfVjqAPMubVbWb4Pkd6z5rXqVofbGZtFEZEopp5qNyTjv79ryM",
  "key41": "4gmVKhYj39HdigVLTLQzqoyQBnRXKgMpSVhgbS8VJWWj8qx4YgPkwxiEUWGtY5DzsrU5T7ELqvrLVLaSuGEuCbSb",
  "key42": "3R7HCgkoFUr8iw49SSBS6EY7HpGNrfgfMct54vs1FnYUDXfGcT7btqF2a6UjXJZPPcKyBWyuzif3BgV4k8uKL3YC",
  "key43": "2XWZWv4KTucYTtCjJvdJwSgvZEEGNKoZaxxvnjBEnTJBuWXTuzkDXuu1fGyHepAcAXHsEDYDSKrHnrCgnsEYTXy3"
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
