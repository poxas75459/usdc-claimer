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
    "2BqgtKZgfrVyZ3xNDYQn3u9xEeWTDWe5iMNeJr16GA9ReCzFH6RLq2sF58YKfZVqkeJAprXWgyVbTQQPm1zKeHLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eaj9FAp64oY7K2gPTJPm2Ka8tJ2moXL3PBPvdvYfvHsh3K5fSKWbAxf1TfNqYnQxseQdv6gs7wt1H7RqEiSnRkB",
  "key1": "2SifYVrsYuG3tBKeHpNLpyny7uQsxTg9Ua5JoL6wxfwkpLoZ54TEUG6LDWWrmi86i4iT5Vgn3puz7cZ8giykAkE7",
  "key2": "3vrNSgTXccy2jRDQF48DmbtkoHPF9biPHtWJ3PVZRtk5Rua1BMLw8J8P8wZQ9JjYLmRjXiGuC15as4nAAPUKDYAi",
  "key3": "2BqRsvN2bGRZAVtVTQNPdcYJe4wmKL6LvU1Xj1rUpjoyojqGZTPjEcJLsZ44ispjTqD9ZoBBY9eWPokc2Zt91u5N",
  "key4": "3aX3SoxXzdhZdsiLbCVtbj6zN6hbfTVFBRrHEUxAZZN2YmoS6JRuBuUR4Q3bewzn6kSVDZ4UjPHHj8op6nNAxnzA",
  "key5": "CQ2hhXEqHMiBgMMgMMEUiirEti9j6B9ERQMu9bZBEEejYKPV1mSd6BmYLKtPTVEe4q1DBLWqqEM3M4thxH9CoE6",
  "key6": "8W1MmC1hpJUyZh1fARssZKzDtzeRWSnXDDsvjBea4D8oNZMLeH4BD8J4iicE7GW8xr6aJq19F3KC1A4d9zb77Tz",
  "key7": "5AyXtEhyYwH9HT36EpiQMjCDmhgK9LhmG7sSr2D2PtPsGXTR7aFXVXF9s4hxS5ruWAES2aYvPvAq7qBbz8veiAvo",
  "key8": "2sMqkK77QpjbqvJ9Tnu7aV82QRT3cX5dULEXUcsFw3FhBF35fGdyvVCwnY2A6eAcoVeCH893wFaf5nVpsJXTDyHW",
  "key9": "2cZvnXPeXJXiMdsNbXFEwobArmWXmrHyBPna9NrpRRiPna6wzjSHKBsV6KQMPN4XHc7sNgMjo6B7GKktALuaG2P",
  "key10": "3uYSgZUhrdL8HZPsTkcYSteVFXXYREUzEvfmApocwC6M2Jx4eXvFNNeaPipLJ2Y7eEdGtL3hdgeqGw7vU1nXXsmH",
  "key11": "ecsEbQSCydmnf5FnHZ6rkA2JHZEiUk7ZqT67iAgqiaCvawMUDKob8MGmkT2TdSh2MWsfqHaY7xKzATmZhKddGGr",
  "key12": "3MDG28BKLbcqqJKCXi7H1kUHt1unvo2YauFFCRgombAMr2yyqtdtStEcnj11DtaX5bJ5Roqt6QymceKATzZejXSc",
  "key13": "4Bvqn5yeo6BLSSnPgXUrwyQebpvu2KAdSP21qTTMVBPCW4kySeWQgHjb3YRP8MMbJSQMYtjbPrLH4HcvbWhcTBdN",
  "key14": "2sTBbV1gNMiNPedbJ4HV6AGPMY7PzAQunK6Fue1X6ZKpQf48CUwxu2NcF1vdFfYNrYgLLHLtjueSedkEoh45ebcT",
  "key15": "GqpnwMizG3ZKLUwx6topr1S8QhALH5q9qC2KjbLPjXHQ1mEDXTQtvm4gbKPX4kMwUZLxBxazzEuftSfh9KWHNGK",
  "key16": "3sKQTzxy3rBkctQ8idRjJvprEFbZ6AMVmcLgGzNWYRaVirKonavHmrZ9T4P8JKDEpy4sQvaJQWcYSCoQ9a6gKsQs",
  "key17": "d2mHuKUP4MK9t4s1EB3tLXpVKqds7yWfbofhmGPbDf4fFXGZ6Pa4zF3SPSc5pVzu83JZymtuUGnNk4bKTM7MSc6",
  "key18": "64MHxsJnqF8vX9aVC9p2P1kSn6qArzEMLtsQimx49CmoxtTQGWoLPNZx9cDz5iXGiy56WSs1o1EkGgwz6PMT7XMo",
  "key19": "F7QMX8kXqYU72oVbvVwhaKaB4RZpL3sNptAyMz7bJNGkcRk43yd6CS2qLgoJX48NkvmDpFSKfwDN2tPBY6HD1j1",
  "key20": "45sRKedcrjsEavo4wA5z8EzrnZACgdxqcNyrDTtZmpJQpbxY56cuF11fKXpyBG9VkkWoPbEh1u6ZFaNzwC4zDTaM",
  "key21": "42aXhzbqL6saBdYHLtmXN6wU1SKZdQsoEbNV29NGkSSKUDVdACsjLcQjw1KKqXkHJEmrFgB6zWD4Sb9mLFZ6GXwp",
  "key22": "45YUwahJxa9PbeGRJYuiVVwPNrx3UQiuGPkeNAhiMvezUveg7wTqyHqkCoSUVgTSD8DZQHa7WEfqDo2YuHXf46Q2",
  "key23": "4wkwuqkMYBKcs72NVbhvDhw1fvGn93vcSjkEz3cUBi7YquMSsxKVMk3297WM5R795o43u73Pca5xKJpj59mxZFuq",
  "key24": "3HdEMkBrGmqRMed86Z9XYvvabdR4HmjJs3ZVwT4tASejLAm29K5c57Do2Kv5g6ZDENKMGtFRunS77Qyer6ky4q1t",
  "key25": "5RsfwpQ3H4yHp9WSFNtuK4otby924shVeabDDRMCjCBML277nqJhthFD7pNdWb4sevbmUkfsnbaiZHznKM5wWtUX",
  "key26": "qctUiZTEhHavEK5VpXEMM7xmurKjvtYqa8aLGpGeQURL1gCKsBbQLvFBhCyJZ3dsoJcykSj8ffHKX9gLVhnYzT5",
  "key27": "2RSBeUHkNyvUwejcJCsCdChEA4A1mZM6Ld7ayNUrKajkZjKwrP59VydcCRFArAG1D4N7Xesi7KoPzJpDUzt9sFMg",
  "key28": "291pLQHVnrhCmcCC8V43ekwFAcsiw69RYUXZy8rYAFFoqwGhAA1cQimKqxgYK3jT8SvBruTu6dFXYUMKupxYdyH8",
  "key29": "28pxsJymhSowuGL7TAj5391CDZonNadMzP4PFKswN6iyMDDTKwmxus3vSZhxaLJGLhpHJTMSWE7M9cbo3WGzTMEC",
  "key30": "46xs2WdhqUqNyKZNPNLWAYF1dnQbnXUxXMksTazq81xszmGE2HhjH9MvrbtXX5kg2QwGjy95qRaKxfGUJEn4S4D6",
  "key31": "2WSmy2YTP1Kk2T9v24XeYZVp7PJQG3gc7opPDQdi6uR3d1iDKkUvX2Dj54PZBMMr4RDYy4BRq3ZaRihnPJSmke3b",
  "key32": "3dbMHxJS4SKpEvw67pUxeESHLrs1hpwhCM44k7Dev6z5aW91ktvXKixc4wfMikgr7sjLDVMCRDkK2eTPcuF1RxJh",
  "key33": "4YtyWNsth7JYXGwdSfzFYx1gHQHmVjiEkgFqVThvytPfPhAvZHEJY2DbFjuq7pibET9xxfgmUvfE2Rqeywpjy7J4",
  "key34": "2DZ8fCSDGdZT8KxxWfk7zRt6679ukUAuJaZvdqwQnsDJcN531M9Cf7c6Qd2btkTHPTgmTrASKvbpy2pkETre8kJp",
  "key35": "4EMpe4atpyGVHZZqKooE39EY1yyU8n7BfNUMKJjekm3qYRZfC8DZNK4Acg1gUsZWC6fgWLwDSEYFwvHWSV1kTJHX",
  "key36": "5AgVrdXa1H3o9p6eBwQYmvEuGW14dimRLBgWRd9y3zw7ZoADVqtLvNXo5gcyiMstTEBahXcLQtSLKZBSDCpFxHx1",
  "key37": "5x34EBo6cieSeBn29jfK2ahD6Wb5U3dpxenzyqchoVMMwr6E2swjDiEj8rikcSpfCAHe4vMRoCG9z1xhVsNpd2kf",
  "key38": "3nKESfg8KAsKZZ34XZatS7ghVN7wKhuqTbFgRZBTCYUw1szPzYqkW3U9Sco1w7akiNiiZcDPNAKsDXFhS45Muk7Y",
  "key39": "3DkQNQ2tV9Ma5mNLxkeCYfmruW5UHwTHGqc6pyUPPRik6FVLNZvX23tDuwk34JBvQbFErkeipwcCyBH6Kf6283gU",
  "key40": "4eDGzBmJMo4fWjUfabBH6Q9CGScDLNyknYbTfHvbuHQbCSGeXdNyjak49hXbGghDon5AF41ZyqxdSitrSZUah4A5"
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
