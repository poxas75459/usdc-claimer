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
    "35Z61Jd9B34KEg7Qiif3EHgCgHGNdezfW7vN55ekVBdhV61uaYA1dD5Hd6n9xLzbfu7EkRXKa2BvzrX99hCdetLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56vMyG6BWN3xVMPXWnbTNPPVL14LUacGg16Fmv5d4do3zr4pxJrjTH6qCdRV6gdeKQALGoZWxfePP4mZ5an9LBYj",
  "key1": "42Q9Hf7xgHfYkhyCX5nsztgyZQgquADummC6RBjAniMP78tZMJLGBFgRsjgQc3GX1tPXCWvGnCqsNrV5Cb5DwREW",
  "key2": "3QNPUaNNaoVEsUv1675CPhGdyHr2Aiu858UmnCJD2qGBZMbUAkTA9t7XWdJNhahMLQPUhGLACY39DKRUC92AYu9K",
  "key3": "5xzPLRgxuGNvSKZuvYMFtU7C2jnDbKGMzeukMVLZseT4FZ6GXAVhu82WEUSRk7wAbaoweuL7NhtHoWtRuBiagaMt",
  "key4": "kNBEcYvU2gdwEzuRnAedHaFsN3FRsADta3XQgXuXJh67SEoJ35ChnX7oWHVSHvjKEUaF3oPWkMY6q9DKjeR6gWQ",
  "key5": "3Acet2wofgscNtNxGcnhh1BeYyKiDBiqBNnzfvZH6ckqmKGytsujwJqRisoQA3KtqVN9jq4q1tRLVSwyGPWzwEHC",
  "key6": "Z19KhDmkSMzMVqg29dyUAfa5ii4aSH7WwgB6ED99rxu5uwwM8d6hqatxYNS3AouoooBxsScKLax813f83JuiLNm",
  "key7": "4RT5txDpYoF9PQApWaPSt4ine79qVCo92ThMs9bSAb2oL3DwtcnMR8BHabyND2UXhCJAq9SpVnWgX2EmPoz2zakn",
  "key8": "5pCtcmY5jU82wkorSTeAbVH31kboHi7m8ZaL5GNMY14ocXX2uoD4YJmrU2BpatGiDSX91DmAsrxMip5r8kv18vck",
  "key9": "5j93T9d7EMJuumxxuoQG6NTF2vwVpu26iy8B2Aa6NcqVKMEy5adZyJeyUijoT6EkSzUDJpJseGdK4Yqdb4v6zV6U",
  "key10": "4hDHs7wX7Lpd1MyoLaAR1zL6TjnA6DM1kP3Erz7F9T9hPXUzQ6nrrBktsUmQ1YYE533xAftXT7uqp5GfxtdrVJaK",
  "key11": "2NbYBUtzd6byRFzwprdHudjPVj1ahfeuJjP4EVsc6WSTkDuPJz9qZiVrtNiZ87C9f6bD7gSeaHhsDVpBAYzu6yJA",
  "key12": "2kNWpwsFE1hPfALgJaYHzMxWpcaNhhBTfrrJMfcf6KAaqYEb86QSqv2q92FVSw6GbcHSTgw1jwxgkzL6RRWbPLWM",
  "key13": "5jEASdZhiv3nYgmGmAxned2nUskuVDHUznR4RAHdVnW9fKVn2bcXCcWdD7niuqAXuGp7dd6DRW47F8bbf24M8VSK",
  "key14": "UPhdkmjrihzdcSka1fCrE1NE8jZ9nfttk9yUfZ8WuCYtRJpLMycdzeaREhUbJjPjqRwTJcrYRbKha5z6qJFT68b",
  "key15": "66i4mmzZioLxgPnGHM5H8zsWKTNCf4gDNjNTbxvUHHAVm8mpUQVTV5ygLaFxn1ykEjG9uwPEazYXpsbxmd2HhMtd",
  "key16": "ohRcgZjcYFRPo7A3sbk7EiFQzXxEKRW99AZQo1AhM5jQABnbfSiek9S6ZbAoKxV1reMKAVPCMp1baNB2Wu4C5kf",
  "key17": "5mWsnFcDSJG3B5r7Q6tAiiLmkQ7cJfVKMLTmAo8XRUXNrbfEeuknbwprqew7hH6Dcb2wYfXNJYrJEesM2PuiQdQ2",
  "key18": "XGk2mUgqJ69NNWcatbwmwuVq1ChUohWytsQsLJbx2Wfs8ckpgmwZbnAVLDZ7tBxxwXiGzNJcB34vmtwsyBrNAVh",
  "key19": "4vCzN5kYVdtTXkXYWpeHtWnVTq5qrcLpKXYYRhhdZ74Ls2JDqYk9uNhBrW1GBkX73kWVUo5W9J41vEMJBp6sJyy5",
  "key20": "3zPvfsFMoMXiesRoypLrofBVXrtd9BRAEQoXe2QT6YC5Tauy7QuF8Z9S5ivstfNzuABi2B2RLYuxrJiaw2S3muC2",
  "key21": "67NWHFA33keBie4hgc3Edm7PimuuWKntWftcnyxsBnXMnP86uLv98CzPeg9kvVh5NVJ6F2yuAup23NqiQWXeLFma",
  "key22": "pXKBxigsgpCnbyCD9knWpVkBmRfRTa7udvyisnZp97jtTNYnubocWHVGpv4qktb3tuJuViGWjrQ1Rhk25EB2Wvq",
  "key23": "3uboRcAyvNzE7cLNu8kh6fwJ8avrQxxREvUi7SonXLKhau9PWepuVojVkHev6uS8trzJCbXvghnRfPxKkRX5z92t",
  "key24": "suxuLu7LrHCrmTHik9M1Ux5ecNFWvtnXYcX1SHWC6vTTvqqBBcXhyaHcSuDqf8sGEr5o4TVWBsPACNQb7AEPvTJ",
  "key25": "3KSNivXx4ahgG3DZUZq4EK6Rm2nqsJwERcQ3KLbtVBBEUf8SoKzhoUAD6kTk1EQftbPngQh8Pr2rq2HcgxmUEdx4",
  "key26": "3wyXpNkGD8DxfGZfMtwpPNAnAa8UoDTftUDmDEdtFBrbB2T3uUpbAUU3MBAckCPLYc7FvhaqfdfbchTaNyVErtnr",
  "key27": "s7avEuGLZQUud626wUyREabw8o6yqaon9145gx8UZ8DXH5iD5BetUFB9oZBZoDYr9wJAMfPFTwMc69JPcZJkjYd",
  "key28": "3CM1yZ13k5dqHFAdYgqxmsCm7PtfSP3UEDP1B3x53oc7Pk8GgemPD2EmjaRD1TM8HnoFv25ofmxSGwuJwXv5idHm",
  "key29": "5UWFjbiSmXQZJUY2YAxq6WVFEX1UVXNzUAEJ8SJBJk1nP1QowTF7QsKXRmuNvZpx8RTmGSg5DCboZGKAd7NQiVkD",
  "key30": "4hN8dGCzC7mwAgSSokNtZHd9N24Rn9tpZY525h4pVKdcVzJkLymktrcFNM9SZcVnBkWxn6LVg9NXDMQQD5FusEJH",
  "key31": "WX7LA6oL3FQtM7KWjF8Xe88acDhhkXP8d9GmQLE92da6qQM1RZTWajUrntB73ZaTTokWcaeWbUXZiRedf8KpcA8",
  "key32": "KQDRzPJoZiLTbxpLSkkxdiXkrtHisysxtWaYy8f6ZhGVdH8DGaPHPMB8P2RVTiFVgfvQJaJ4ihfGEdHynq9Sk4d",
  "key33": "5w5SUDLdrrh8BgWcgwV4MVHfZhZDeqqoQLpohajAPGCQJ88dQZko3VNuzBb1kZ76pCHcWkKhgfwXUKMbjTUdD3vG",
  "key34": "tHsUjerwSAs2hzxeH8Qr3qdi2sxJT23mVsRnrfLtEh7eYi1WSYRUx2x15Vg2Yv6sGX9puuB5dXTbkEAdikEAwk9",
  "key35": "2feFT58Gef6sy58oYVM7jMxhf9RvteUDf6JBYz5iP1EngrXK1E4UuD3U2FJP5xud7HP6z26UikitozuSUJPp2nNg",
  "key36": "3NVn36bbnbySvYoGALsAB5fLCM6kExWV6zZDD9BZbZMmy5WrRt4Ag2vRmtkBGFtaUqrrWvYTYuUsHNnMvfuxo5ci",
  "key37": "3ss2drp4uB1o95bQ7yy2AymdBcd3FMAZcReeVSAYo1NfcWj2cKWq99nw9fRphqkkAtELckZ3diSw8PW1Y5jcMywd",
  "key38": "5GMvd1Tu1JJt7ef5Dj71vUBXGj3wEAZC6YdvMDyTp5SnP1HXmfCdZJVGCoZtj3qJHyLgwxuCe7uzCDWzHYtw9yDY",
  "key39": "3pvQ7QXXANeiMtqQYp94zhvtXNZjyv37KPJEb69sZb2NhFgm8gKMiwXGsVm1iJ4KFfkJpfDHSUP1QC8eLChRJSUN",
  "key40": "5a7cnNGbrWx6craFrSu33eAJ8KP4NLavApgfn3zo2WifiFN8LPBzwdheHB2B5ZVFJfvpQp7qRSNPVksAkoKRsJfm",
  "key41": "3bStcCWfYPEwCNQ4xeXGiBCmrLSZ1ZSkgy9KPhrrodpzeLoPLqYr2CCPUm2UW6p8q5L7bZQd6bo7N8Lv9kgUPPEW",
  "key42": "2GqVXBBBWyYmrXcfDwySz8JfTbDXFGJ6KjNeAPBpJHEFvuhXhQxQfyWM6rCM5FshuabDkAu6R5rcftJmX6En5qqJ"
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
