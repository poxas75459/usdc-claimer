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
    "VBtSAC9pJpnc4GVirkDScgw7nUwyBqzHQdzegq5hvWFhk2Rx1Vhp6gA4PPqzmSJo1fQUyUEV5HiexizZSG8XAK2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bzqGUyCRkayQLfDyLFN6HVhqC13UDmjEMR6vPkd9Z6SrvVeYdgm2wjcbWbVGBawFTAWWx4RzMyVc1btXgdbk2AT",
  "key1": "5SrKRUmqs6VQ1f6NNWrpdw2opmmjkvmZWDcQUZY1qJBcCgKZirVWiAdupbBFTwpmkfMr3c8H2uBvginnvDk44YWb",
  "key2": "3FKU6BMFde4wB6ThSj6VRd2iGqpm9G4DdF9SWT2EXK2bcVBsoZCqWm9KKrt8qoXeTEGtPpjSMyuHRHmg7qMhMmau",
  "key3": "7jVnUBhydxFJbkQHL8wVe3QHKcZPKL2Na5gi9Y6okQYjbhFUGPMDiRDCtJ9w3KwQCtX8cLEECGK2g5KcePNcXjS",
  "key4": "4nDCGuBz6aVizXPwjV2xMybN26nyUhCuerwQy2yNULmKo6cDKjL6aRbKMTNuXRqLZucAD7vbApZbP58PtrhRnRmK",
  "key5": "3cqEtafPUqjQ4AVEmT1Sj7Rt2XHPEFccmwWPkXyLrShA9xHSewLmJjdfBnbTq5XkzZHmNEH2YQiG5UeUv12a9CFw",
  "key6": "12xHRn2xoMpQffgcizDoZLvGM4VxESiipuMDZpP8mgrgEQNtMZMa22pgQHq8j8t8T8PDK2exEEmHZQsTh7KkazW",
  "key7": "41hdF7tZ9Hog78mJe1SSi1nMS9CkwEgqYru7VzPpVGwhQD8ynwhBGAK86GQrjWmKCTELKTb6oM3zavNLQVCXaUvG",
  "key8": "3J1M4CtSg8LA8pKMSJFaBtxoPvxuUaw9a7tV8rPCTZvRCMmUHRdbtQzGDhmMwCGDmB5L7ypj8AKLKKKFQpostEyk",
  "key9": "3VvwBV7cQksYRAo1RjEtN2c4W5rm6WQv163yghuQRiF3fJc2cbVz56SXYQPnproTpFEYUTqi45YW5NsE332EgFNV",
  "key10": "4HXN8zFC6zgYKwriDHkXZZBri3g92e3r8LRt3U4hwemT3pK58CdLm3kLuT2LfE9JohzBE5SfzrpDj1mKf87DvXkb",
  "key11": "2YwnL7hF76GZWWbzZ6hweN9zDi6RbN9C74xqwbUFATkgRFpuWdj8HmG5cf7B2mSRCS4fekzDARSDgxsMr6aPuz4s",
  "key12": "54wxycxwnbkS49KGW2MgtcZakh3u2WwENm2kwLKBJp3FFHyKtdAXxSgNqGqivzsJAKEPZL7AtxwoLXDXQKcjMUCp",
  "key13": "3vd2r9p9RwFR84wmU4TeBCHwtDLE93HnWAmoMeUqJ6uDttpnjWPfQGRoMrYPJc3mWRQyYU1zSh96rCJLLXSqRmuT",
  "key14": "321gv7S8uJWXEJkmmxvrAznH953pkJqRpd9oWvPqf5ms7iqzN5Ff6WVnYMcJtg9ZphoyVBicF1Sa1RDNxcTto6a1",
  "key15": "5JstsAVw2aP8UWxXqyb9CKsWfs9pWB9HpZT7AZ2U6S2MmVqxwJHh5WbWWHA6eZSbbJyTnCGiCGTZyRxbf9uw4eZW",
  "key16": "3SHJ5QdMv7Sra3ZdC8mDo1dypcJ5txMYGxwym1ondNXkKDkkcx9JAQmFZigdNQfQS1Pw8xvvqH8F11XvESb2z4tZ",
  "key17": "5DMWru9hmLxqqDbL5QpsMRUabT1aczLP4WqKCXg6AHaaWpuBKhzWVyW1qjtxDjRnKE6trEd385f5PT9wkjtcQD62",
  "key18": "5eqhRdyhCb2q6hCUUPRRxk3PS3wSaBSAkBp2mziCUoPdx6DYyQa6Sw7kB29j28N1AsSgv5FpVw1qv6HDA4FmyZxF",
  "key19": "3uCCpwVDndyAfgf4FV47LqeTpXUToDTcZHeb5enGoHK9N5Qy74bRK6WMgahybLDU1T9SKFfGXn57eMyDgXYSfRGF",
  "key20": "4MbkZ8TemLQM86uxSVP2MrDCyUi1svNS99MCz1k6YrMTK4Kmit1vkb5JRwMchoGrSQWfcrfzahKyCU4KcS998D1n",
  "key21": "ssAjzLMJc6VV8sJsAKDJAUNUixo2MkhXYfsvxV9EK9H7XBtfDHpZUahY4myMr1NftFCAhcDcTB1LLVfkt2EML6R",
  "key22": "RbdpKb9QTePZB2QD3Gjom55wsMUu1pu6wwzx9vkUmsjsZdFL3UAbaA3PSnvSm7HnhSdqjFMhQ33MPU9ubYocpGa",
  "key23": "aKhpqTA2QvfL1ixnf3e5Hswotb9C1eNDAUg1Ufsqm4VpU6gbikwTCo8S1CjnfwaDd35fuR6tjhcrPWUzuMuT4cB",
  "key24": "5qd3dEprjzp1ShWj8SgFvctKHbdKp6qYptRkFzxYP18zqxS5W2Nc1pZDbCSiAJPGF1erMD5mm5yjfUvWKpU9uewr",
  "key25": "3j1pB8kMqTGV4JfhCh1JP2CKYSrLJtkYkHKJxaMgVtDWenGXVYis8mMGnfFSZn2XogYzkUGsS7fj8d79yvHqFF6F",
  "key26": "59XFxNpcBvWd4Jypnx6HCi5r8bY5oZZ2eWnvk3jxbMSAmEM7pFXekLg4hEJyz6rWX7rWJNgDpXn5492G8Ps4cwQP",
  "key27": "bP1rkjiq2AAhKabfQQmxRv43Chxk6XQden9maqojWZXVZSgUkjqAzhpMRBvFDNKxcvwLF7xNAjx1ogb2Fj2Gdj4",
  "key28": "45GebydhLezj53Qi2twdTRmikTNF14ypZoxYME26k6aTTSrRKiy1uzLSUx6WXyeEC94uuwCSxrjp56bFFfx1vTCC",
  "key29": "FbK7YZqWn6KHt5oYZXJvHDmJaaZmEisZ9gLxCNJrB5kUA1fbG7dyEsTa8afADnu4i8XLKNafZ7PVhUXRvJGYdG7",
  "key30": "2FTCcsTm4TBewUMi48v8eMRSRataBYf9tnVPv2RL99PdELSgpuGb9kJTiE1Q8AZTJsneBSytv8sq91rktUwnoF82",
  "key31": "kwqzP6tohT7z9ZNXTbuECX62fntnaWsUYNRH2ejuwBPYddUzJnCMxFjDVXp1Bn9wFD6BDdvdcHYUGSQTzmZZTxM",
  "key32": "5cxjHN3wUL72L9XgsfnCJXJxarRL3KVEg7GvpPo8TtLRBae1oS6GRRVEu5Q95fg6LPG28Y5nSg5eY3PfDsTTAFdE",
  "key33": "5VzTBerB5z7YJWv27ckoWPzNNCmZFHa7fWwKdeRFx49JZXdLX1cE1N3FBmTeqbiJu7PRv694gBmTMDtTw8K1N8U",
  "key34": "5nvZbzB2AzhAg8XTMs6m16X9UgDKmQGYLpJ6Dizv1VMWpcPXpMPyhSTrCU7FoYs1ZpAUw9zdoD1kwwjzgkwGbVqU",
  "key35": "Kt57p3NwNBMsymBDifAWYDarWbkC5K5cxfZDugnvMxY9GcQpsMd4PLLdfNZYYzDcxewoSRQ38xKkJWzYYh3j7UL",
  "key36": "EnNpsVWrLUHEgapfss3iA1vVCVTphUya3tthZ73BEuq6ahawKfa9AXPPQeGGPGy3ym1x4rbLELdfYyK8WmvTCXT",
  "key37": "2GdDfVBRGCpRj3xruwwXNVa4ELs5jEoBuEA8cbp2SnYrjZUtcjLZGwJmyDmYVsNEWMKvHsMT5szqPveCXC6WHTXK",
  "key38": "5LuDdUAysgnkEZothAyRSrsQ4zQQqzzsRGw7yvoX3qTqPguXkfWVPP7muvNacNQ9y6tZ5x6YDp8exPHsaFsUkqp7",
  "key39": "33UxtjpiRndNXonXSA3mzoQ4vknsGriQywoT6DLKE6nwSxFUFg7i5pmVuDRvGfMEDbYREyKxfRKYYDYvaDVsf7iC",
  "key40": "3DJXKLqVFdN28u6h1oUmDkJmYtnTt1shTUzLLPjAyLjow2aTF7XhHbsZJa2FLy67ttbhyAew3qu4bKdXEEdwkik2",
  "key41": "zPibwxucaNB7DThXfSwbSF7SPULyusS2iVUPFPb4xSqSrXQN9kDPDvisKVTipGTdUgitmzsfqixnzJjMbLsmT6K",
  "key42": "45zAHDXJgRRRN1AdTQo3yARDgN5UU5LBcuk2aTgzXAsiXh5iiVYGNJ3RpTBa9i4cXYtY2k4eHrS17B6XbWHrka8w",
  "key43": "2Z4UWqeKMvWqrArTRvJe2DEGfyC5HZkviC4eieASDvkGNvsHBX2rPjGk36i9Xqf4Jh8L8vdBP8N1XgtndKdwTBLm",
  "key44": "2gEWiTAznhkyhnvUd5mNYbwrp5S5opwrQUuYdX8mzRnkFAcu2NGo7oHqwhKiLzs6D6Qx4psj5dMeiUjry6Dca4Dx",
  "key45": "5N2PzoCcE3DPSbwBuau5zw1JHCuvkXx6qvq7sjcqb1mF1QQyvxWZRustBS2XLc1MUrQwZFtck8LyGMfGS76nAc4Y",
  "key46": "51wQkq3itBWoR3YGUWntN4t3HZ6RinqmtbRQMSSdKfhv3sxF8T8jmHe7jbpSs7qdmr6QaQnBT545nrDGf54ZtVDa",
  "key47": "2ZoBZQBZSkMTiNEZ2AiFqr1kDj4uwRcJ54dnu81AYuKHKWmqCXG6K4NrV72aoeUykHF4hYLW88x1q1CyNJbVW6Es"
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
