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
    "4ByPDQXnhpfmabiCNjSMwgi8ieYJf3iXhteAF285MGH93sQ1NHNtbXVjjGNU7nnrmjFCJirdrf1Qc5VYpfjc9dMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Tvdmiixv64cvy9cgBmtGVz6m1tEag7wXpbGgEsN8h95R2PhctujvmeWGRPBMBTv4Azm6HExLpsSFoTQChpsteDW",
  "key1": "676QM5Bv32RRZZheaLd5mxxkZ64qh4JmshjzcavNZFsYTGzcDPYAwHETReW5nowPHkfSxdpCeGkhdxXLcWhg1jiK",
  "key2": "58DCXbxcEfjA6TP6NnByQp1USbzdNPynryEguobQfT47rgV7EdQwqzXYqEt8z1CR8Hw2Lra82FBet7fmRwnWif1j",
  "key3": "2uX4P7vESCpWHAhiRhnFpYhzP8Fn8wgp4ZcPN4dmaomD9H86Wp4TFTR8NXyjaCKSmLovn6hiDy2QBsNC4DGYxP8Y",
  "key4": "3CopvPFWHDsifZpbbiSCbzUhY8Dc1HZQBeuBoA6mFfQ84wCsTxaJRfbHkPYDHpQygsrMN6GtEpxzcSMpeFkyLoHe",
  "key5": "4jWnbA48QzYq2VcHwddLA7PE6vJ7hMGfE5pucxf1BcPvaV3P3dFJWvdM4gNedxzqzHc9AA9bX6hSj1RvnjByu7kU",
  "key6": "34tAHpFRA46ExtnXL8R9W9RwEm42rNBTFbkqe62H9t1qLnexgaVMBYmeBwwrYbaijcyjyQciVRFb122w8btWA4yR",
  "key7": "2NJK7tywxPZeFDQEJFpnuVwMMSL76UmLneT8dtUxqLbeMwXGurTmtXQ17beNaBp8rquGEY7gqZhhJ7pR67MuFKrK",
  "key8": "4myvXfUnosfXarGnC7jhfLqvizjnY2FivMyEeTh1cCATFGwYa713uhG91e7qjHrb3s6ifTNnoB5Kvnz7GYMKfPd9",
  "key9": "23wFTG9Rr4LuEtBKUPLHbiX5XxGfYsghGvY4ob3PSrxTUxXMWU7mi6VPkHEnG9ri9KNYuYKJgYFxiKfiHTEskyHz",
  "key10": "25iPtAFEPMUmmgP61Q9HufyWRAxZdUYnNZ1bkLUtWHEE1MdcT48CN296tccjCubyTYjv7EEqWT92ohNhkruaiYHi",
  "key11": "4Ch5yYBjee6Kb52sxa5p7NgMRp2KyGPXSksaRKBmnV5en5EcUB4jMfFyFrv682wu5kiRxKfnHzPk5N9DVnYquJbw",
  "key12": "vnjLdgkuf15sFVpDGzaPLm9yWLxbqYhnaGNQUwJkkVpnL1hoAVa5ragTxhwat5tLWcDRaQHcnhFNgRUkiLSSFmU",
  "key13": "5Rj9wDkrKetYqmq3KYqjCJ4nDGeUP4KHDz13e8keBmMh827PnXjWAMniCLa7w7Ea1GCekqFmNopsjZ2KHENTVTcG",
  "key14": "4FwpvXvdRzpaM8BHm2ppYreRua5qoAdMa8sa63S877dp3dCB8GRY5RDWivsZB3yBptQjn9i2YLE9MFZ7VtrfpQTZ",
  "key15": "S8nytghucVvTdnavfDtUJAWWRiuCRptk9DkparEXrdsVZku1ey2yXpEfZeqR8HNC1zdrap1m9hdjzbWRRxvtoMs",
  "key16": "5n3HrGu91JeptghJwtm2fdm3XgnVejMjc2xBR6v4auow67mUv4z3UGzYBR3TcaSt5GXqrcRL57zRcyvP5pRTDdAm",
  "key17": "3AFypKDyL3Xm8x5ZhxvebvgNfVedjKBBS3fVCC3RnRnucRdGpuBkrpJyg8uiYDszTaDDFqnNKNQWQT78NZ66ufy4",
  "key18": "2fnzH56VY2WVSPdi7tee9CkQ8ELUdBitKqqtmjV97HiX5vqP6HFVLDnFHNfEaUaV6FUfJobjvdTFT74tpLEQyfpF",
  "key19": "4DYD8JwXtoJcjAfcbcktd9kTPmdp5H5FKLZBnQuXjaXHY4JZb4io89dL6WqXyiwjAntj8P8HSUv64nUpaUPFkDYZ",
  "key20": "4VSTmiP3WiLmDJM9snyEU3vPGf8FuZmWCHoK97nYLpAyGqyjTcrxyxEFSk8HTkwSHK4eMQHyh7oYkfaP9YrkaHZ4",
  "key21": "63wCkRRpS74WLQSVy6bYX5kB7vQL9PhX7qtQzetDes91CTAPJvq6iFuqWZiT3eWB8ss3RKWjHVsKXJDtGhKChXXh",
  "key22": "2nuf2hnhzU42cGBGC6521AnvAP4V4errxFij6G8Sis98kH2PQ7eZx9HLXkJrQMWaCN4bmSJMXxdRXoGTs8atXmAu",
  "key23": "22w4PE6LTHXXqozc3yj4rYa7P4Zm7mxWBvZn9gTUhyNBgX7bDD21oQwqKKmLwiiGAfZg7CSjictzKVpK1hjbf3BZ",
  "key24": "ev5bkTfeaeSbKuZzdUsjewTDaZFLoPwD7JQWmmPuNkWwM46otu2k27Siku6k6dfqvtWjveHhgbMpyXpvJWw1YCF",
  "key25": "31PaoNHbQCLCNAZXhgyepTCmGwsHVqygusp6h9dQYfD6nnrHpC1JVh48C4iesVJF5DRiBghaXKz67zXdofiRUoKa",
  "key26": "25Suer3bF8k57yj3hnEFks1WRyxmLZeGV1iKMcsXqUyXEzCA4nhknESRdSM58M1jwWz2qy63DTdnCC2jxmLPFn5r",
  "key27": "2x8scVLBgW7UY6w84QaSz9AzyytspgwxPcgMSGgFH8wJ56sQHgDicLiZ1QjnqRTw6fW9STHKjKuFRoCFssFvbcE6",
  "key28": "2fMMZEsG83SXt6BS34vt7yPXR3K36hXFLgxrkZtytE1fwBoi8nx4KPQ4wihmR5zEkum4tFKmhXjTDHytijRbaRob",
  "key29": "3nWa5eDWcw3kAFk55yrxRbMGQkeSqWPtJuRr6SFvM1D96vfiUpnssTK6iY5xUH2RnhkV5MxPNB2qntvSyYrt3Bkv",
  "key30": "5hYnVFx6u7P7mtFS8DZdkZkXgq4cyVXShWtaipZ7f7MY4AdxYAFmyQskkJPQUSA9e7Hc1H6ZRdXgWVddLWb5ZoCF",
  "key31": "2AyJcs1bSXLpvQqp7vig14h3utPUhbWtTA1PKjYWaw5G9kKwJd5xACVJaGxSyebQHeY3WaL9qN4XbKTb4amUVvZk",
  "key32": "35crcSFQ8jXAGsZHsQjrpH86j4ahF6QMWkTFCugC7hFf46G88GLsuC4eVWHQYBWGzVu8gPdWrCE5FNxXWjFsMRP3",
  "key33": "5rsT9pp5bKmvVtAd45rpfFs1BkJgCNma6daZcyAzyiFxUjt6xhfbgH7Ai9znGKdJC4K9NXhdEeZ4cvpyouge5DAg"
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
