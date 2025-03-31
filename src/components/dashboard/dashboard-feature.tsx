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
    "46kBfNg2yfatwXHyZReNQTAmRYfsydN54gRiDy16bFm3tk6wTrcPLXvfDRqGvYigrktem7egyK93irVvgJWbsAUU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mjH4o7ggzHPNKtKzF6ckT4jKE5KdYu8oJZVGUVf16rSJGmthajZA6Fnd2YerQKPku45C51U1ZtDawM3UfDSSwNQ",
  "key1": "5bCe2ihz8o7cFFrWvf5KL3SXjeEZd9YofKz9n9uSKGr3ryB2zkCzG7cNNu5xo5kwECVkUs1aToqgEA5BGRrLgfm8",
  "key2": "3CwF7Ft3KEvEpiAvYkHiUuCVYmE4xjgF2pW43mdsMUS7mzC9Zr4dnLEzkRCAhWgQsKoJo613kq6FWbFQnYiG3jAC",
  "key3": "gv4RHeeQ7zrCN3XcYPYsJ5DTZ72bKggfJoagPPUWMLnVVmBUC86NTGFdUUmb98CwSVxDp4ckuJwt9TQWmKn3W4o",
  "key4": "28ztv353EPAubMpjUccWPnNKY6nNptEqAoHx6CBCtN9c9WEQwDXTwcjSLRSoCiQZnNvbVWkxaBUZST3KPBmykgzn",
  "key5": "4KJwXg33iRVpcb1bg9eobpRnZmTZxCKUQ9sL2brByPo61gGSPMTxZBJz6t4VboAQeWCz2AFUsUn3E8PV69RzdVyF",
  "key6": "5yGVHXhZAdARSaETPHXFJ5a8sAsTRHBPGHz6oMULu19feGLV4iuJnPtSz5WhrHCUWdZxMUwNNAxZ1oDHzRHMEPDJ",
  "key7": "jSLfPZvGCY22yX9UaNxPhfFomZYGibgWXaM1pn4oDvLg4tWaUjx4siC8Hf6u9Sb38jzu5CxMDAkuMrfYHjVhoaq",
  "key8": "4QV97LcxkZFsMMgCnJccNhbVzLzBukQXH6cTR3s28PMBBgomYLTnh4ARhm4gReEjn5eTbiLF6oB2YJuWfh77sb6r",
  "key9": "2UvAJvLToVqtqBAWvH22Cpm4p9bxJCuAK2wjjXMxaHP9Lukmk1eFbLd6jd7o8AaiykwmJnrPZdGDj5vd5ZP7qGMj",
  "key10": "4yk2VgXZeVAsNtRnQSCERjMNXxKq2NBKtr7r7y12qtcDLNtMFMoPSpUwjg7P9bCMtvkFNznEB7sjW8Z6TKDYF7nb",
  "key11": "2qpPWsFFJbtTXbh4JKhutuVqYFF9ARf2Pzjdfhj1dP37JbPZjkh8qNvoXMJvTbtnA7RRw4UqKrLmhouuhxqciRLV",
  "key12": "3gNm2d8Whw2k78YrFSrEUZ7TL6PEbPXWPHmwQNZy21xrb8rjAMEA3gH43oriTZvTY7fnQrCVY1gcnaGU8GZWe6No",
  "key13": "4ou2W8nnRjskBnXA6j29rJesZAYSk1JAEu9Sqmv1qpKyxx1rVr1ALyvxiNK5Mp7Nj5BcYz1E6ggWWLJsakHPTgz3",
  "key14": "4z9B5jJQidC4RiTDCcRwJzmA2JbYVsS9T4e26EA4uYE9ESbKWU6ddfZ653axC5yQAqEoF5MG3x5vZZ48o7Ty7Mre",
  "key15": "52acKBGtoTAguM9Tuhw1yEPTH8bZ8uw9iGTxWNRRVK18XoxmQdKshYL8wm9m1gFb56MapXU8W4GdZzL3iZThRpjT",
  "key16": "5h8ArGsh9SfhRr3PD92vNxadM5t5PVNaVcdmRvoTopukQrnAZiGqGa8m12QtNbdJ1YxtoMrbi4z6VmgmsjqD1vh9",
  "key17": "645sxZBrLJ8srPNFRBsfXyG8tYeUfB8huscx55Dw36GXPp8bMWSa5aZodtFfbnGarncdZbTX4p9sQHbX5XKP24cF",
  "key18": "51N4Uk4fHiZS2afYE8wen5RSpymGY1FXmjVVkMLyePYRMQEWTnfuSqRBVZTvP5ojRHHijo3Dphu5QD5USWVon2Qm",
  "key19": "5V7GmmpUfvqwUpiPYCt4neKaJ48QHf85Tft4nWfBkbLKTXVuJtZWGNjXXXSu16SsEZLtFw2ahGw6YB8XHP3SSfGJ",
  "key20": "SAKLLy86v3xLRd5p8qmu7yB3Pd3wKzTnEoBQZzaqo1LghJHb16rANpGgaNRneraNMsz9xRf7xtbdwd4XDQ3BcKv",
  "key21": "2YVs16ZPvqaHQrvDb8h5HdFf52ZGD9D9yFAGecY6GWDayLCTmD8UAbuJ9YAPbxxZYMLfpA5vBtEASe8ugwC1PHdA",
  "key22": "HwDKRNJy7WJpdrq1F1gy1gqkpAJUHp1ESaGpiGd6zKXsfBqtBHDv9QjEVBV7F8qLFcbQRZ4ytFm3QnMmTPKq3Ct",
  "key23": "2bhvpgjg4apiEuVSjJyZBshv9neEb3NWLzPjSuHCJdnNMTyvVswVg1AVX6KbTkCsLWCepcQCumXwYjU8RimfvPgg",
  "key24": "fCxR9HHFKhPVRhnzqa3MZRnnAXMpc5DQ83mkiHdNbYo6BJG7JzQmmUWGWYNHBdMWpos66rJrfzcEtgSfK6yJfQD",
  "key25": "3tmgvCfLdXr6BwqFRK13KnGvGHjsezDv1Vj5aGTANQtvu6w3DTzyToR8X3JrF4PtdtyxYj3iFhikbTCf2j5hE1b2",
  "key26": "2XFVQMYTbHiew4VG9gnh6wu1Z1bCdQsHceBUiEY3Fg3uBN3KShWbwxv85gppaprP41vSsUHhvrDSkduebPQis4Dg",
  "key27": "5PeE7E5kbgFzT1tXDH2EaEumnA8oV991VNoRej7V1YwAV6eodXpzhjprY9KU8Xwj1AhY1kFUqHJ186neBVvbYNKi",
  "key28": "UmWj6BVFSeXwpALxg12pyCst8fPTP7RQEfqaN8mnLse8TK9WwAF2Cdgw8GVpTkLMQgZU135Q5Z9GVrz1YCqLd6E",
  "key29": "26VYDuK8uWkiwohnuYPZcRssnVPsRbR8pcq9wgVbx4jDhxF6qwRJGYNxGkKtcXCyHgQLWWKvpJMDcy2pN7a7nf3p",
  "key30": "Yhxq7yw7auSZKoNBw1duKpGg2MUkrRrapEZYfex9HsGso2komJz6mY2jQEu4SM1Wrr3wExdP1uxkYbQw5zHo1AE",
  "key31": "2zxMuDGkBmKUJLuk8vzxMjGQsEzdBQWx3NXMS1ptrUM8NWEKMSvX1MbfKPkdUETjDYDCmSRxhXsxTpUMxuLQZrUM",
  "key32": "2aqB9oGWW342Pgi8BZbkdhdxQkjZHBhvBYWheXJz21swNj8ehXmLrPnMJftqwhsnHXyDzBikjtQhom93d78uSA3p",
  "key33": "2A1JEfnQb2ENpZ3CPcN6vAXf4a2yGZwuVKVf54mY3kaCHmkTcJbvxzFhB17qPqrLjeqpWPxfbXs8168ApEr49ybk",
  "key34": "4M6Ytt9oVw9m1cHF4hDuNyYPDs2diRsM92nXwE7XAezCdBAS5xzRmk3yFUjEVyJCiUmugsLGUaLgp2EL5pxNib2u",
  "key35": "onoJr8VmPjXEu1vyASAqw7HZoEAtC9p7ExZ8MQfkooGYzqmSRZSBJGk8US9WhWRC2NDBVeafJPQVggTPZTecvFH",
  "key36": "4ugr4uGnTaY7E1suywoQ4RM7Qd6QM5NryCCRxBA6NCAiN2QGkHm4tfxuYQK5f9iustGbDt7UPGc6zAunt1LgFTmV",
  "key37": "4dcaxJpevHXVzdHMgtKWksLBDa5kuPfzz9HATxK2BcEpQbM7mGcPZ1vJk3o58XsAhcj7wzaqJuVFw1VSW16GA8Y7",
  "key38": "32TmWQmkovdqMvRJEZEBMhaevwvcxEfKgJRmuADGcqwgwrApeiHmp3oQErY2atj2vasEVqUvLuGjex3HnB5cybZY",
  "key39": "2Xwykuq3T9FnPrMgqAMqpGvemiBAD4XWzioXLQUUteYNeMj7GHqfzb45haCo9KAXFuzBJon3vz4j6YB8pF9vfTCM",
  "key40": "zzcCFwJSef35cTWyixKFbBXkVBAiiFYaSYZBbAuXLqoJ9FFEBqK8EdnAN8RRKNGKVwLKqYkRycWhKRs8Poy5BCK",
  "key41": "XKJGphFLje5z6obRAzy571e2qxiJVoy1Kfxz9eXVYTQutSKaTBxt8xWxKNheijkqxjP9jwZwbPzp2aRsyFjxnbj",
  "key42": "4zYPHRhpWWHsxSGhHbYtpo2gUz1D9Xx4VLovMtyk6csgPyDsDLw5TnjL5wtsjL7L1bCr7HCxUvdJv65Kdy1AmYA9",
  "key43": "2UwYQdHh6eRHK7SpFrgaczn37FC4ZfMwyN7KcucFVhqfKviPb2QPY3fC3jLH5GARd2AimKrXGfUnUGCdjSD9pdfz",
  "key44": "nvWt375sPWFX349uX2WDUHnNBvKnUNAjSHUjMNRR5vw6giC7jn73YjpxCoBFrHvg7duUJUPbsqEjpR5AuRo1Cpb",
  "key45": "2mJDvT7sJB1vN7dv8JaXZPwXyjpoPinm4kxU2s8bArbJ5o66WmCY7wQxDrexgCJoi3gAeq1ujw9B2Jnsfv5R6sN2",
  "key46": "3F1SCgN74fw5dt8F8pEGY7X7WHCVY5k343yxZRBN1SkTSA72EXWqfFmLCJvyA1gFaiLyVbKqp41ZwUmcXsrtdBtP"
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
