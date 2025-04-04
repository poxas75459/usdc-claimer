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
    "SQaiihCnyKo7GwBEWmtGwRo8tx6wtLkBmwWCFCEKBdYhCFUYKrG7iZQcH6HZYuHkahc27FTWeeNhu8nvbmCwZgW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZaSkWFBAp2cxcjLF6eiBtWLC4w5DoUnH2BbVm46jjBR1z1uHwTVbF458RirJGRNU88aLac5CQUiPUVYcLYDUKEC",
  "key1": "4oJ34vM5ngopPnxFinSX9N4kaRdxdnteEkFKPfEetr7GHfpPyZSSMd6VGSmqxbjymp4v9GMYvomuZiAmWtuyGWqz",
  "key2": "2RGsjrSQuQxj11opZwjVBcrjjE2y54pbrmhNheRf5tg7R4vX6yoWaGrQdJP7aKu1FDeQztiarMjG6jAVT5DAavSD",
  "key3": "3VMBjqzchByD3eV42LYVfGMbPBp5iqe7VJgju8Ah9GzyLEZ4XYpER6SfktfETnkJrnxi3owdwtQWwPiNKWXvchbd",
  "key4": "3T3JrbDvLUJPcKrLVULpKRzgGmJya8RQZSvQF7d5yR4VE86qsawtF1ETNvaHPRTXkSNFUicw3henv7eivCW2uSNX",
  "key5": "2r3XXMSRgEGrFGKm4kDZ1WbNkpvsn7GL4XCrLG4e4WzYPhXEjJ89FqXAGYHQUFxu41qndPiPdcRSvAkmZT8W59H9",
  "key6": "5Kp6jy83Re5gLLMRbdu1rjJM7LY1GM4P7QPq3uyHLUsxUvEt67H5Xg3sqenvK43PYQdzuuwGuRMJ1La6R2AecXte",
  "key7": "5MvchBnSSseFTG1CHXqfevbdXeEjTB1DS9z9GWDyPbwbfTnSVuG3njJX6vMUiStycaDKJDEeWVCJYY23WBX63P76",
  "key8": "2oqNwuqZJospUe9yqSvZevdDvBZnD7VFyKckPWo1Y2TtmFzmcEzQ4fAKCNt3yuGG4fZu3PZRkbYMNEx7K1PzySmU",
  "key9": "2hUDncnxn7L5cSKpUZGWis9Ww2LyuUvEQ2AVUoTA8DzP8Fd7zhseaCa2rSUCK1kTpZJjSJctFCyxFFFUQtugZEih",
  "key10": "5bmyqHVcPQ3LLhxoP75ZxaNbZt1Uimuw5E3uyBwPg6kBFQ6VhanL5Bsr44sQjW4Dwc8Q2rzCEofQakV8ZUVwa9Yv",
  "key11": "dJ2RV86YJzrFFwZc4DuysKhMfBUaPQpxqygnBeHHKL8b6dfMxgX6kfrcdL714mm4bfj1enkjY2UdSWd9R9hwfPM",
  "key12": "3Vhxv43xkruX43ca5J4jbayi6rzB4ZDioG1GzFr86KEtedXp2c81bK8uPQMLCMxDh4jUPPCctGHmmZqQWiAr9Byz",
  "key13": "obNrBQyFrKyrTdcVoaKQiGuj56dEAfKo2Es9yVX6Xav9Av8BPAnkWN5aXNNw5cuhNAkU9DHVYAxodp3xyn7VBLh",
  "key14": "53TF6xzXt31QVUn5giRJuPVyLL4Zid6xBSs2G1cyCgqx5yDFYnH1gprGknbRS377HhjDf1rgx2iUzozxTwY9V6wN",
  "key15": "3TYYefJBWPhKw1cLUMJLiTNffjPAeBJp3utpqpetH5riHKoj2GhSpXQir7EQT94u7fRQTQLZFg5bDFPX5RTHbCm",
  "key16": "kHbzcQDNb6ZLtJYtybtajE3ajt8vwvmWuFtK1BaCj9xD592WL7qsGj4UbMJVQJT4BNVKAwJGRGmqBtCprxqTbQm",
  "key17": "3YwP4Fno12zi9cnPFEzWzbumdjqri2NJBn6Ek3WSNQbjTzgJbduAtadC5jK7XiJbheJSUUcyDmfGG1mFCFfBgtC3",
  "key18": "2N6Jxkopu1X25TPuKh2U1VLBnkfgdd5cLBMxCmCDaWbcmKb54uZneEcLrbQHSfxcB87NvBrH96BvM5zVC6Z4WBvF",
  "key19": "5AYhgdCZMguHQaPrrUFQJJK7mafYLhXjgEJDBng2msto5gt5HQ4xiUwnQQEpKnoghxnqf4aT9gZwXXF1puvfK4D",
  "key20": "2BrUbwdJApaZ2XsnatRrSzuyHxei7EPzwugTqi7w1DqzHeAc84qu1zgqnYEkywuWm64fKomQewoJitf9igmMbWo9",
  "key21": "2vnxZ2zYB6vf6m3SpzLBxqgjA65GJ1XdoZhxRMRyojCS44BJEza3nKgAmBxgiJMvSrK6RNTiyZ9GvABaJjhbgqv1",
  "key22": "51Ee2hhfyX8ACMUEwDXP3fTwivH1eVv9aBHsVhQhFqGG9nCBejvybmsDLKj9t8hfgdGpQCeigzVPJGstMzoY97gc",
  "key23": "58TEbj1vAtqjxZhHB15wwwKPsk9ducnTKCE2ocEVYPdDWPCiCo6uWbFiHgEB7eDGizEyzKJrMfWMCzgZTC2WJqai",
  "key24": "5Bg6WBJR3osNsmNsVMyoNYzbFMUruQM4RYfc5yrzqmmeyThKKnCPh4UMPw69WnfvuSbFgaUH8BPc5PRsL3eZ2hj1",
  "key25": "2jfpqzvgUGpVzduowHb8qwmsFvGNrQ85oSEbgULi11P9oberStis31UetRuXbBm771hKjDz6YZptrwF1nNoHi5Nh",
  "key26": "kfkwCP7CofDZwcpqHGiKvzvyGtEp4mpN7T3jcyJ3L1iw1qD64NWY2Dy6WVEsBphfr1gkeNKzDyKE8HAKwZnwr6A",
  "key27": "2JxQmXz4PAZ4zMjMe9obRrpuQ28t8dYjggwZ13sSofzKT84CMacaqDp5t2mmuqbc3r7LFvoGCaeZHvCrd5vyK9ZT"
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
