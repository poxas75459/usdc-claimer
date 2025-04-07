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
    "274rjvJNaFLu8WfJiLQnzZsR3DscLTcj7y93hWnmLyjB6dA6NLKqQ9Gm6C7UjC1gN3Tgq9GzJNnEx6RxGokbaYjG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ri7ZesXNWxqWR7jVvPriUX3n1Vy3LFUnQfFH4yC8EsgDPCJFf2MoCikVkN8PoE3cLsWcGnnRo5qhXPeAMN8EAeH",
  "key1": "25Mxr3hJ8FQ1j4vVbNUGbjsbHsvSQnouU9GaJbrBYZkQpHHfJckMgxbubaTL1mtyQqBApJ5vDUdrs69Z8nR1dvLm",
  "key2": "2BDwsFWczUkeq3D3JZRQtUVqFYQNaZ7u9EYtDNL9Yqjd8RGdeZXts2tKEHzWoCgW2ogidmQZ3RfKuamyNhuUPSc2",
  "key3": "5oe7GMMWGeRZcZYPHomm8aZkL4hWP6572E9MCSr55ndN2yDzi2wL1uYC5ZqAEKEnDSnQrhBvFn99GGWYSqGiLBS7",
  "key4": "2HAa651xBvKLwL6rZutebwwtZ2Y6v4dpcmAgzTthVDXuPArQysm4NxgB1y3mHiqUy6TKwwiYMQ6AK4zZKe9fwHYX",
  "key5": "3kE2abHPH3Et8DaGiEgs9TRiznYnEiaEgV6L5X3knCtyXqjTF7RcD8hWMTaNJdhJSyF5LkG8PP4beT1t21P2fuS9",
  "key6": "28wCEKA6D7UiTF6TkTCoCd2Arw3gaxhg8z4aZGc794p2stzUMXqveDJVNnfVt5byjEMjSjbU4mZNatkxR3AaHbgj",
  "key7": "4jT5ZLSZe4GPG6m6YfotAPeQDqBWCRKqwo94xVkH38bSos8wYZKW8GmN4h6Vdq7iTfmPxPE3KwDrNgdDRgnEzc8o",
  "key8": "CdtDup1S9X3SKABjpvfU5JZ7BTHKysGyaW3QfFnQiDFCWH9oULfGrmFJui4h8ifxGfxRPZaWUBqNoTS1AeAfS3j",
  "key9": "KxQX2fHdmwx7TkNVf3wjY6JocxM38h3eLjiYtFTvpuX8m1VW8RkEB9SHyUgsY4DU4ReX7pbztua83q8vrcWrdzL",
  "key10": "MYZkgQsZaifJSDZpooXAR4DDn7jxrvCtVmq7sb6Bfa1PK7wf8XCzmo3N5DB24ZjLocyn4FVjfeJfxoKBkg7b2fK",
  "key11": "2hXGuUHXMQuTQfrf6y1o6JiK4QABxC6Eywuikr67PUBDfmQoDXvKZZ39od5veymUBMkE8AEKJMKzYz6Dz5tkMuk4",
  "key12": "4krDRQxfhpBD7shpBASwi4dMWWHfKqnuL1YkmuHjBLvRFnNfppHF1c7J81w8oyQKvU3PGx4MCSURJaov5E34m5BW",
  "key13": "5N59KUDnmBMhuTDvFB5QybMXY3dbezshPmDhfX2uiry2CmtYU6SNVgiKhskojMGRCPZcwQzGq3nYng7JZNdZLUJw",
  "key14": "4RRfPmAhoi7rLV1EYCLE36PuwvNXnR6Me3GbDcU9uxZBpJdRuCbEzHYKYqnNQKEN9kXiMyqv6ApmmCau7FfEczaG",
  "key15": "61FLYFwLs49v57tQVuNNqViPr9utcDLjfU6KStugWcPajaEoVQwJPApz4s5ZFjj9wyqXtSQzyZvfxmUfLQmFJv8Q",
  "key16": "2TynwJn8GtxF6QfAE4FvG1VY5TZ1bxPJxrRCJSpPiYoVE11ZkE3TkQTwEi2z63UViwabiwbUmoNinE61UuUnmvnr",
  "key17": "1UypRfDk3uPSoLUgvcopPxuSnzJAXYgkYkSrVVjWPUPhAGnsSfnYJYU78Y1a8aTzmuvt4TxNmgw69yZqBTJcZHw",
  "key18": "5kMa3apJ1Xn4Dwe1Vb53QoPvEQ7mLoH1R5sLrgtLKrTBfUDwpQ3yaPAwdykkF1jrS1gY1d59JPZju6ULCnrRjZsU",
  "key19": "2WEhXab47irM93VpW2xbrW3wfZsMHycuqaNPszgeNQ9ACwVJKAw1QPyJBRNoiFuXhCyQDTNgoYqsk6C3JsewuXsW",
  "key20": "2YZMYigM7esNAnDUvoYvErneK6YJEPzQa7AXJDBeu9fnX9o2QAcxuGmkCsXRotVNz1VKuCLdcRPp47oEdFfJfq3i",
  "key21": "2Z5QF8AjZYd8vn52giHc6tEbCwAkHcE82aZKbEeoteMGFgwf7r6YDAJNP6UA64K4cpd4Cx9X5u4u6JcuARmyXsSL",
  "key22": "5pStk26kL4gwXUuwxoJXbqqSUkraLCFTTKADBaVtf8RuZggWKpAirxti1MRn9KGPx9bqF85rRy9E5jVDSwyw5EBH",
  "key23": "3uFp2Pg8wMLBH7SM5phJ67KMAzzi6bdJGs5P9uMFMrehyd4LqnmHDcbrg3EgoedDNg87EzMKcN6JsM2CCGVhKa54",
  "key24": "51HjDn6X9VVTAWRU3KyzAjPxgbDn4kAfj33XfriFAKj6JAfrntpVVDRViU2H55iJV4JmJt4Xi6R2pogeuow3GfPX",
  "key25": "3Mj8MZLnWYP1G29eFxRYdrk5nuFKcK1JbvPKq8he5PYm3udx5qEDAnNRb9ZRMfy9i3MjSGGiXnd8dtpBGUdX4q1",
  "key26": "3w9SMmy2xd7DJdkh1d5he9QGC7U4TAKZ22t2hXvGzHeqbPEQJUAZa3JB5HREgETV9fBHK4ix1XmRPkvjiUiVTWAa",
  "key27": "2vECJfaYaAswGHTi1syXCe4L3oHTKDFSPPhZkUr2zcsM5eX8sm1yszgcjy2sCMj8LEuxiv5ewVphubByS8dTBv6n",
  "key28": "4MPM4KzpdNyea1qP3bWZ6Qomw8kSmwW25iQ7mNk1Zz4Yi1BkTRAg6W9BYqXqFBSpXqZB4343gTkRvdPQq1ft1r4p",
  "key29": "5Hryj3LYMCdfoDP32grAMSSo62scC8PjjqLqRsf5qdfWmC5m8fuRcSMhzjwybZ2WdvWGv3J95FRNYbD467vBuQwJ",
  "key30": "4u4JEsRhQnDuKVBg56LAj3TuLJq8L3JfoLRUwC3fR4LufeuWMSFHPEn5XzKFdLCeB9SntjBFj9cxzxkNdzh52uKf",
  "key31": "Ho7BLkQgy1CpbLw68vaMuei7Fu6vejsMmX8FrdSrKQR1zCPoNiBwH2fRmt9Knhg9cswDxtvYByoJKYWwTfYBPfy",
  "key32": "4DmirtqaGeog2ogqN6t1P7KgXtTHaLUqgBviSTr4MjprdZv8J3gozANPquYP5X61CjEHoW3aFUxGKupbwYZ5wC9m",
  "key33": "5i7AmpZYQKZinAY1FFaXEezTgH1vsGNG32XcSqvPvVKJmhvAsk1VbmFLHdumC8rF72vAywEqGdMuptCrx7BX72BW",
  "key34": "2BDNWZEeSXhrmCGWWymgjXe75vHPviFaiaKQZP6TJ7EeuRray9QtXLA95xWR4zwk2sbPk6z52z8hckxcvb36NAvH",
  "key35": "TCswiEWdcAv1aEGFdFEAMgYDQqtSSoYnXPKpAkehSQVvWmN9mu6eJ6CHk7Hw1Mw6Z2mrCbFYYvSBkzruV3fuioM",
  "key36": "26BUuj2p6MHQj6y9JZWhD1ViK6ERj1iP1py38tQdjKxgr1zdMnzT9N3SYtrhJPUZFWWEF2SkZURC3tbbL8VSpm2G",
  "key37": "23ns4jY4Ud9zuDEXFiL7sSuErCEcZXWK9w3MybgLSUQVPUU9EtowaqmSQtJPer1foCMR6VvS8ZZ7LYM6bj5WkFqg",
  "key38": "2FSe5BAPSpJ8JJrcD6QbE9mwxRELRrx61MPaJrtQ69kFYRbvgPN8josuv8d77ePmphbE9Gd1KGs595Jf5vfBRLyx",
  "key39": "jtJM27nd77kPNLTEHi7YDWzrbCARoJ2pirACqk8qD8Yw6PLhVJ3tHjF3N8sjPt2w3mtNG4nsUt5HD69xqznbyXg",
  "key40": "jphxdEt7EdkMJxnB2LNYAXgzu8rHN5S8g4qvYRHyWCN2uXsmFpKAqehggNYuZA9ZRH3nGRLNWXkQmLb5Csu6yVG",
  "key41": "4RJbEsV6QFDmz7xq7hZs3sVQAFLpZWygvUdukSo9z5SSSpGaTcAtVAJhiHwonLosDWqsA8u5ARqucHxPo9PzTewX",
  "key42": "5hDnvPDS1gKDzHbD27v7K1Yor8BM87ZzuGW4RQswC3oGPMS9MPqP8kQewKcGLdPkCqQMtC2KUJVfM3i5JH7Ab688",
  "key43": "5CQLVvH5xZuRoDgrkSsRs4khExBrbZRfipU4K2tG69y8ZfSjseZuvJz7Gi1HLfS52pgEYfzmtfxFfhz8EgNRHq6e",
  "key44": "umdozcLhSuNXEps4DRHhmMU2RAxAqLj8rmq4GBJ7bcupXUG6fx9HnATmzJ8b8Fj88evkAj7moWKuUvTQe8c8CEN",
  "key45": "HpFksdFjVisr1tSLXRGwALuJ5hQtBECSffTwsQ7TnMoV6aKJMafZgrt8774u1j37fNMda2cH6sSfdxfqegDQZqA"
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
