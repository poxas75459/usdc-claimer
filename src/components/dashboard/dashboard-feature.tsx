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
    "5m8DT7auwYjd24WvpKChc3V3xPzrBMZJLA5zXVR9BjurTiknbYV53mzf8UzKQvKibmcVq7mwaquw6yc39grRFgkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sPQcGD6NBbqg9r23RSa9r1sPDjwMAjnCqLN2p1QXpvHHQZcJYJYTB2FfdKdQiXzigz6a6UPcjP3un36rBZAFrNr",
  "key1": "1uzexRqzWtpRR9cZ1B2aCiA342ZkYKnGAiHrRjuqnJG8etaFKno9dzVpRgSKx86636haJiVcNZZNQ4AKtC5ABUn",
  "key2": "3jRMveLFaSvwBeNi9VxCyurCyY3Diwa86TDDHaYA9NKq3Pu1RQUAzN5CE9e85pGQsuqmE1gWQmn3WtVdcbqY4GdD",
  "key3": "4K5BrL5WGKX3JDW6fWS4r8ke7YKnq3P7hXNQJeGSeMTMRkGCHH1qGvaaP7sxqszj6prc2WjNdbLXtQBvGnCUysvd",
  "key4": "2ehpY8DfTZc5MCRmDfxZKkdGuQvgefPquzEbV6xoddsq1oxeNQ5XdDwhNX1ppSDnNqfFbsVudodc54gtAceBYQHF",
  "key5": "5TRjb9hWm53WDGNMBtm4dwswjh4MF57Q4JWuGQavWLaNckJNUguqLdYtAuNaDidJnkozDwrkbHArnED384L81o8t",
  "key6": "3D5UK1yLbVDrJu49n26qnL2GzH1Qg54NNZRPZrakAeFBkhFSdm28xffigwT95sEDFtU4i8X1sW6awxedcD5m3zzx",
  "key7": "3t23Bp6xEyn2YLzeG1rvwE4hnL97KyVXBqYVmwHcnA1uYNvSPkh4BMSbuRvXZViyBTRZwWU24X3XN8Ris4rC36mf",
  "key8": "4w4hbQW6y65hzaFZ6UoocSkoHJfLqAEPSfv15YNpeX1ycWfWrrdNvFiJjKmvRBDiKLND8uELraq7CugTa5j5UVia",
  "key9": "5fQDr6hrPZnanQeXzfvRpdWi4i8pX1ogu17PktFA68c1EvqRcg7nRSUEzPndBWCxDMRAnx2A9MFcBign9UNkDWxy",
  "key10": "KtUC4CfM2ez1Hv6MmdQmn2Mmmcczy4hQb6SgZqrKzfh6buGcZcyUEUmCU9BjFUaDcAdmgeX6bV8pbFX3Bcpd2gL",
  "key11": "3QLvm7R8cZQRLB1yL7dgUJVDf3JSXyt6MqSPa67QycRLuPgenqHGJ4kNC65F3GeKvbMLgGHgoaWWNC5qdU6951Nc",
  "key12": "5oRnKhNEd9uJYJECv5qb93HLt8h6rRYaBm2DLVecgHLMnzM9HYiwX21oNdZTst4N7prujKpH2irdCk4hbNA84Jaz",
  "key13": "5FzxjFfLjyw1ez4PpnaZmHdvdz2UrGt75f8caTYjM3Cgf7ywUgDcz6xCW5VKCahsU2K9Sm6RNCweptH6KZvqX26p",
  "key14": "44gMcgeb2rFAguZH2CLpxmiRgtFjXsg7r81CW9HbRR3F3WNBFPtK5ajT5JnTK2KVk7V19ekKK82iFdAGnLVRxNRr",
  "key15": "5Lsb8JnKgiGicftUG5374AchtFM7bmtXePeVN9XnsSi21eSu5yFHHKPKZXRKzvVLsR966yYT9NDDxwovUfPCQkwv",
  "key16": "4SfZhZmdoL9PZMrVHtRZAMoy91EtajurH1HFmH1vP8ATTM8PCvV9uTmFZpycKDnudr1zKBqFMbqaUiQwJx5fkYES",
  "key17": "4tC5rGn6qzxGYagCPyRzMqjBrMPjaXheWnPgHbbu9VeJ43tTEqESfajgNxoVqyY4Wa71p31Dsa7cAnVG7fEHz4UA",
  "key18": "YKFW9aX5nmCy1ouhDZwwXPEbV2C9CezpcYQxaqK6dkoP6SJmUzJhposfWB9yx1jsSTMXrnGXt4yY87FUKh3hXic",
  "key19": "5C9twmwXwDko25gyb5QDgaQW4yCC9KBoq3oJ6aGKNrvBTpkvgTJrp3cbGGbcyf7zNU3abcSJmsZWHrsFd67H6mVP",
  "key20": "4UhM26HNdEwv73NKyJmHJtMPR66KTmnoMeydm3fhrHras8YPZhXcNi5sjYv61mF8DNyidw7Dozo9f5kJGBufRWv9",
  "key21": "6yD6UegKPjyNufS6JnAercgSiA3TX9dB8NW9KE2mhpgi7xthrQpVioszw4uevZpVhy47GYoj56ntvxSSDAoMqeT",
  "key22": "xzxddfK6qZDWxx3Ke6t1Yuh4UiKASJy73nUJ9MeQMX9HsVP86RYdfbdrFnbtrDsyz5CECWiSvn4au7fFupP4JFE",
  "key23": "31hCBTVeEYAHH6FM89FjGKnfeULzMBxdvNuUYRLY7KPZbor7H6tfz3SLE4GEYh5gMdrxTFmAW2dr4aaWhuk62pf",
  "key24": "5WLZ8hhwcPnPutCDQp5uzWX5YHJGEJ2oLGxUakJ8s9phJ8QzLtcnwz48XMRPPansfGVmWshNVAiHcC9xHcs3WWV1",
  "key25": "Z6Pgy8hHH17gtCgLDZqhyLmCwCPRieRRcacSHZRqX9tMbwPH3y9ATMoXvVyB8AJRjyp8ZkuBpEPyyJSt4XDzU27",
  "key26": "3rKZ9997uFCnp8ADs4TAASDcGaMcumsyN5RGxAS1HX66BDrCHR2xv2sQ2XpvVWixPZYAu6YPhFmBHyUQfSrrXcq9",
  "key27": "bJcTnYawTmLvrosaK3kjaJAvnBopX6RHjC4HBPvknzJK8GNq9TFXxa7tXiHVof6J9bGE4oJLDFzeCg9DxUPLgLN",
  "key28": "4C2ayJPVrE4vHSVpgv6CNvmkgK9MLiD2ZWoAqLJ5XNkpRiQzwHqngA7kJLpkbc1Lasak6axGhUM4L6JLEisuT3sa",
  "key29": "QUmUBWqjpKCxgJQRTxzPuHRUL4CFKHGaGbWakA2uMTd6nFStrRhgfcDCAyTizpBHnRpN1zrLC71LAaQ1ZVc9YtW",
  "key30": "23GJVPvVGzmpmXWkg73aK6N6XD8Z35f7xX1eUW7BU47VUgU8r3FKJmxUZUNoMP6nawQHEeZ1eUDsvpnRzBUsNZnB",
  "key31": "23YafSiEvrdaZNXECB5FLNbunHYEyby6bQ3Vqk7XTy6xS3vcbTkZ5GZxthrRVTbGt5tXxTqbn3njUQ8hjctGWWAd",
  "key32": "2QY12v1TUdVe5nHEbLBG7g2Q7c9u5i46iySgauez1B4e8byzCNWkwpWc7CDPs6Zt4My5FjykzuNfZubxgxdzoGsJ",
  "key33": "2tyUEJrRWzM7wb1jWd2BHiRHQubcwVqNJSZvU3Kqb6XBpKwskLy1ZPfbz9qnb96wHNtKRAR3mQRxqt5ZKaFkCvAS",
  "key34": "3muSKFJt4XvP8WpmFEEoJWsLUQ1oTtp24Si7LkKYjA6xEPeSR2HXVXisbCRaPTj37HQ2fR3gR35QF2cE9ZH2PCvR",
  "key35": "3GucMkJjhYKbg7CFkBU9pfoepwSidYJJR5KQHeRTZHTqPZ8M1dFoqY75EC6irydaFc1HFF6tk29Zsy3uYvXXSHiY",
  "key36": "59quvHbbqgh9jmk3yRCyHskUd5aEKWF7CHiXbwD5b2RdjbgPFVQkhSJaudqv4g2hGnyNnAmnYgD5RZMhjUq5N5ny",
  "key37": "5CyKXaNdd6B26CDxyC9XyKBsNyjzKsv6AJJzHpt3e75jZ6L52WXMAvKeQkSRtSzTEEobvq4KKWwy4tWnc6TVb22e",
  "key38": "4turZTqT6WPEZfpNSEXvHMbTGzSYY4PMVNrp9pVYSgt7aKm6TUUHw8Zex2uACr7TkyEhmDmH91jeK7SUahvRB59",
  "key39": "2JS1D6xbomscnHkmiGNfEcAUtWyjQYsAoKYxGsFvspjDG9kriUeobh3JZYLAcQcgoqv9fzzRT2k9auueoWd5EN2A",
  "key40": "4MwWpfm9hr1wBE6Sq3GVezAUNn7Ye3Z2f4k2oQtcrtmnXpbxv38nzWjqSigSYe5hxZVfCeKoNSmBMsa6hZgf4p1L",
  "key41": "oAuMk1Wu3BtXpsF172CNa8t37uNaoEwXGLgysdttX6ugaPUYw73i9wXHpiPezcps6Zjy8SYNQHoLWLU425JfDjj",
  "key42": "4mpUJ4rPSKXnFbzWBbEJSJ7tsEut4zUW8o1uBDBnz3SmHfSkbFYNEbRadmBaFrNcN3dy729y3wa2DgMeeepKTcf9",
  "key43": "DWh1bbLPNsCgGpCgxp6BHatYFRkdqXU9YF2PT1xtMfVPP6NW37xGfiyetx2u19bUZn5YhoQCs9mJKQnvgo832dv",
  "key44": "5jJtMF7HMTWRbehCxiAjiLtVKiGijKTGUN1mMv7VM9QukwrQ2qt5USCzPHrtAiCBnnY7aD2SiMEKhc4jHEPs2giv",
  "key45": "4NDcUHPhpye5Ej4j8hmehf3h2QT3Cu9Goaa587PCSuzYs2Z675F4Lni4cXsZgSXMh4jfx4aZKid74AD1Kh5Pmoje",
  "key46": "1Novmj3mB3T1wPM3urqUc5oMjeEDa8rr5uEyRhGt4QxyasYyFGE6AiMBUE5DTJLaXkmbqbvQJB4PHA4BAmR5E72",
  "key47": "4TSyLnqy8Ge87f1bWDDgmeZbeVwBQbZnq7e4KunLJ8BGNEYQMVb6fBrD8E887wp6Z2su4VpNt5HqL6nAnRjsCDcP"
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
