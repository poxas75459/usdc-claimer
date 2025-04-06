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
    "2EiTULYwoKeTTy6NidLoRahUE6fNYLmztFzbrPNQLeEKxmkJCiWXSgQYFbZPbRdmdDJTYsBx5Nuk7ikPLbfn98ZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62VSog1umRWyarSQuCXWb4S9Su9UqLSGKypw1Hg6L8JCrRBy9XXayUTNJhZoLFn1BCsjgK2t2wDP8kAe1cbbAgUy",
  "key1": "2QFnEMeuB4G9Qmseuh5a1AT5o7vUFt7WvRb8ZDLHuvQYoK9wDjZoimfMYZvhvBZ5b3z1HtvZVz8g5iNHGD8Rpyi9",
  "key2": "2FGCQn2mDtvTjhu1mBEy2rXquVLyrUh2hZhvEHxzDkFRmtTusurAeJZx2jY2PEUhwVBCZuVN7AGuf2e8KUwREVQ2",
  "key3": "zrauonCyX1RACZ6ARE8SMgjKRHoJhuraFNxHuHadrcVicgSFs2qeev3kme9Jiwno2MBkFxsFHkenNvqtECCyQZK",
  "key4": "249RNrwq6o8FsHguWLdPobWQegGbCVbUxK7DaYXEf1a5wLfgmZbh4gYcJEU6TQq4Z6YevvraqywBVeXS3kFhVdVn",
  "key5": "Su6foffChBBBsqKzoQoGX2FdDPTvSkNXtwGw7KdoDHpsjF5sY3JxbgXxzfGejHQXLkPjA3Ct3Dj2aVCfEYPLyqt",
  "key6": "5xvijRn9n5pp9RjoJqkde8ht9VKDd9AdTC5ydugxANa1XYV913DpwbZZ1Tmuv1fKw6qCjmnqz5jYTaPDqK2138p2",
  "key7": "4Yjq8XWXG8au46HMnoHJnEv4cUX5c5MGqhGKM311HcQTbewvZk7iP1UGyPWiDe9zsz3eHkn9d2grJqMEnz7rSQYH",
  "key8": "49e5P7r2A8pSqQtBbpBuhtAht44hatDsVpsswpG2y2WwRzVvikKhKde4fnPNxbPvE3s11D6D5HygkwgZ1ejcSpDq",
  "key9": "3damEzRoQa5Up1DTHfVkJhA7mytQc4qK4yxTu3fprd5ZBTXeVNysyjWBCDmGWQW5b58ApNdeAP1DFgsBocs2HjiA",
  "key10": "3kDkymTDDkn4Ak3iLVmcqm7A1uXsNSQ9hE3qFM86tG94XECoAwJLL33ri1kpfm1vG5y37mRgBuixTNTDxfm42Sjf",
  "key11": "2QHC72m8m23jZUwRG78GcRWMe4eNerQe29tWZ89nizZdPSrBTM8BHqz1zG5FBoU8HspzHktfzCypCcgn68bSZw2v",
  "key12": "2PSasVkw4AbUriWEoQdfLY7h7SadeShHHbsTXGjZjRtqSdCcdYK8d9CYnwfUvW3LhBRmKPbCxASpN4UAridWDjM",
  "key13": "4VWNBwfPLgGVoi9SeWAHvSQHL1drDnMcEgQb7PnPLsUrFVo5YsFxyzRsDHN6xTN9usY6Hsu8LvUzomfwNYVuAtYB",
  "key14": "5akygm3LbWwfuMWGT9mnox3xKkdVkQwmLkWmPo1zb1EmWkS7qiC86oPnVcoeVRWP1fXFQJdH4CvMs2S6j1UfnaMm",
  "key15": "5AR5CkCMabVR2yNVjskvwvZKoMHn395nBErPfy6t26JYtMDihCkm6zkyoA13LFuwHq7RMc9om6p6Vpuzpe3PRmaT",
  "key16": "KkeTudFvFrW13QF77NueBTWYBpnc1J5quYhjHcDdZGXeZ4oPbM2MMFaAqEWSXBAsZSGWVaktLiRjXbN8V5Z3i9k",
  "key17": "5Tr3wrpGM2pWVsudY8HXoCovhh4i6Sxuw6hHqFZjCaHoUs2CCPh1Porvb7buoeXkenb1kKQJQ32XH4TSAbyk3XZW",
  "key18": "2ri8jW2eMXMFwdm2pe63Ufp87t8yQp4dnrr7qXZFDQkpQYLWdm5y45ZPhZ4tbRHthzsarvFmGR27ZoMjCHgyvNcr",
  "key19": "5u1DTrHFdY4THypuGvfCKoiKTt5wWyXPiZ2BAnH5FMW91NnMideoaNYK4QuPQ4vB4jkRXm9esBBXFotSTKVkWVxH",
  "key20": "43cbHk1m12mJWs2ApeaKr3mMFNZ5rQULeLEFAqQiucDKzKKj9aVDcW7Vt9khqPvFV3w4KFbKntySvmF28ByM2iF5",
  "key21": "2MD1st8Xw4oN2FsJo5rkgMnijm4u93X3xjaSjyGbpLb4N2YwkMgTtiCnWimb3eBa1zL7kc5aXshhkXX3Bszc1rQT",
  "key22": "2nW9FS1LWwxsKNa8jGq6Eb9nUki2wpvqJk387q5GdhosVfGb9e5Q5R2dBYz25nNpDtnA5dq1CtD4b47G21RB9PKY",
  "key23": "4ZfEVRq2PfdRsHC9W8HpSQTZLV1Mbec7uF9jMYCYkjfhUd5jX5Ea9S4demQ2HEFjynjSTQSwiCDDQxyDQEgq9sWZ",
  "key24": "3Q4rFzsvqC3znm72LZxiCzZEJqNJH3ahn4MqqsvBo6g73nNcbMyBCqx1j1CFQmT2LuYNjGMdDNvUxP81AXz24inQ",
  "key25": "51pQBMXeaVeoGTerdiKPRWN5qAfZWK9UkBywWyAZbSnDiEVAnuzfiwzBzm9f5TD7Qbm4BGJ45qiMAiThQWzxFRgy",
  "key26": "k9aSfm4j4LcHTpy8hqaV2qmCjvZZXXEW93DCjcpqPCdiMNuZsCQrgu3wWJDqPwnbkjppHhCzMepLxihCkoHmuW4",
  "key27": "2E6pgjUMbm6cFykEASbuvwe8624EwbGMxF3ywRV5prd8gB7ZgBWYmVMbnGrnUDt3fkAsfnPLa4CTC2fUfaCGvDM2",
  "key28": "5RcboxneLJdEwxiEjGDSJJMoTy1JPeVCaEXj4o4V2kNTeGdZYxSiw73RRr8JvqGJczB1jCbUc4RyRJkPigrzg7D5",
  "key29": "4W5JyFrYhn9Z8asArfv8q4oncgqQx9UTM9AfPH4kc2wTP8peJhrMxvwdoKP5R8PsYmEWoPCrW235CxQFGT2J1kq7",
  "key30": "busKBZHype7wUxA2dmqxTWQWKRgGx6EuMQFeQy2DkNPYozucTguFRdYqKG1FTvMGgPkmoEmidZAPUDQTc1cpeku",
  "key31": "4UHVuhLoY7RpH5oEaWGuwwTyUkLFceqPFv23EE6s5VTYCLWVkDUURL51dfNh1j9RWeRWVAhBbuo5utiLdgkZUF59",
  "key32": "2LjPfqL8XpoDatHmaoMRjuX1aGP5s8oQgh7qbNVYukKJLq2gtgGwtNJr9qP9cSbPCDCiErY7rWsxzuZ1nrhVME9E",
  "key33": "5Bz2piC8ZPqrXRaY5u3hMtVKFbFPJdBRBAtxLahtoy1p2PcG9a5sBzLthpLuLjETdcpaZqBad9Aksu4c8gxiSMJf",
  "key34": "2dwuZnssoJzizRNXF88pkyCT7yDRfXoKguaJXyTHqC4vMrDUtabKgEdXekfhqJYS4F9pxKnzfp3jxauXphUcszfb",
  "key35": "3rgPgoxEbEv2PRyTnm3CMyrLLQTSTPXZNgAUrAbmSjxd5oeCyZPsMjJLUfc81BgR6hbW83gDp97KfALvUUTdj85D",
  "key36": "4aTusRsunBBt9DwjrNkyWrA6MuK33E1s6AQurshDvHnFJDrwK2ShYZNJaTXSftmEZ8DkMqLRsZ43pCBsJ72AmhYY",
  "key37": "2jDrVSoetLoEkE5nD8pxWuiDNM8BW68nduRWdjKqdxR8EfParGbF9FLQ8HHnZTHDqrA5DYeGtn39FXNkGRthXKES",
  "key38": "61Qg1a2oApc8wq7GoTDJpjc4ezsi9v731rTkxZ75H9HUEiTaCCNRS4yWJUDqfquhqSKyKvoTNQNQQJdrj9Xveg7E",
  "key39": "2wk1HrMuNkiT5BmUsmgfcxFXjSC1aHNJRBZaFJu8jbQ5beg9U92Z6ddyfYELUQos5g6iVF6bfi9v3Bf4AC5KKCzz",
  "key40": "3K6GxsUyG1VK5uwbpJBYS5gKXQ8JYEjP83SLHMVyyRFDUPBpcQKKTr16TmiFS5JRCDXffVhARBkLCmGEPbzDmHXS",
  "key41": "UYkJvdv3s35mt5id6xPkcfDeK97REMjeSBgupK8KAzBaNrDw9Zq8CVEbAFUEXZTRqmQfrCC3RCBWcHiLzzg9RQJ",
  "key42": "2oLytrn9DVNR1ut3XLsFTvriFCPqXmivkSNg7A9wgfmpvrrTKab6BPs9fmL31xZ6zwb2zmfpZFZUEJL3GRuFGDdy"
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
