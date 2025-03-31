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
    "21pQ4iywAryuWTd75m7RQLhPZXZ8MSPwNGsTXkut7QFt4o43ShYVPaw4TkJVE6ZeHEta4xURmM6PAPsMoaykSMJC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aBeswz2u7Mn5MA98NY2Qum8z7dzwH4gN6Qhh5TH4EoLBowb4g2vNFwXUbUQCiEWfZk7PKdZ81SVNegrk3wH8t68",
  "key1": "3znuAi46RYswvCRXekCWxoz6TGhegsFj2pDDpGrF6f97Ld98BZZ2FsNnoyiQa1wxi51PUfP3W62AMukrKGL71Xvb",
  "key2": "27AncZHtTRxdr9kZ1xRE4u6x2NqeQC7qCmFdEMKyJeBHKHWQ3WtUCzdKUDVVfSCuw9fbaVkV2WkbJ4PZmLWmJaCP",
  "key3": "Ld35ZaHaoZJ836Aqx6wEJF5P5khbQVKXmgwDTQ5KJ6QRdbXuTMpzdX9DPUE5XWYcFVkaomZnjf21NmEpAYWufAu",
  "key4": "4CHTGWfqntR5DFPSe7d9psBaawRYbos7KysmgeYMj4m8og6hnu648XyBvVoEDE1py2uYkx52kpC8fXgcRQG5LR1w",
  "key5": "5dcBDqJ6RMdxsQYhyzeNBirDdWQXawsAnwTdbUyvQnJQvQERZ1yRAPR3H8kJF6YyUbz7GSdaunhXn6xuHPXpACeG",
  "key6": "5Ui1ss2QujkL2d3kWoS3Sm23THXg6SxbogqdnrrPEkv6oTDENt2XRBjJS7gRNusXo2Y358pcyEyHxTJJzbhTTuHE",
  "key7": "28tsUCM5MNBaqNGTd61EtNh6SL7etwZJPXV9eJBjDipLZPbGVN41xpLPhiWRcPnQgpvYcdzAHjyEqDsp6K4mFU6P",
  "key8": "2ncSVtvXLid5FAGZ1VGL9NQ4gbEiuTvUy3i6zdJSzMJsEKRjC5bo8cCS4iWwCEUqNuA2tKCjWPDPESaTQCphmDPE",
  "key9": "22aBf5ALEDk4GWhi2pdagKPAWKZiwisseCp6EnTRGaZE1Txnzw9PiWNXSiqBgZ6HrPcAQ9jU5kzuLZ7zxYZeb7Mv",
  "key10": "342z9Hk5zDxNpFfqwgi6dy8gAu2EfUwbdykCdKuicA96cV9uXdX9UkjsjjLLVSMhKHo8iUjjRwapbLZ65XjCiJyt",
  "key11": "27nU2rNmWjufct7DHXoJsW3Vgga1KDmmZMfQkti56nj5emwr1uDfrwy952NBn9hK4qeKcXWBkCLWRd7KiKtkBjts",
  "key12": "2iAcsNA7NUdyjxEWnpqN1KyiJC3vwJttHWmseV2fWCY3PmPrhCz6M7trrynqM4yEaCcfGxzY2bAvpu5JLAsAQNBB",
  "key13": "erjsaBgvgDpy5R9hcMHBL1wgPoWkCmF9z2WNUwdY2G3qsodEePm32MipgSA644s3kWQn7uJkzcr73MBVxqMzjN5",
  "key14": "49XrQH8gF7pWdcP4kjggWEkXA8KMxWXCb1VyAKx3KAdQUdnFUu7gzx3Bk7EXSWxSrm6gFs9YsBstLifypsdPVum7",
  "key15": "3wRhjb5EvKBNE14aGam5CwNoiTmmCM2ya9LxmxhZ6JKoPScWzN5RpAetgLzVUTgWTYqN3Y7nAZ8yELNamRD7uHQD",
  "key16": "hXK8YGTwgVFDfC964koiJuBYPnHgx6kjfnS2RGrz7aZ5T8gfZ3udEAdFG7w8qWdLKdLg2s22yND6xSCJJjEcgek",
  "key17": "Ryhm7YhknGBkupcpTQvMQSEE4xVkSbwuXwHkMGTTAvSqwEi47FVbwHMRLXonzDBg9VHardJ8dBMzFKicvK8WyMg",
  "key18": "2i37d7Wj1URgBTQj4XaCZQBNiaHW3Voi9ZFd4iPgurAtr4VbB7n9qF7fmBvr1jtJPY646twdc5L6UAAtuzWPa4n5",
  "key19": "4KmUHS5VDYEs7vDLVsb2JA9PyZrgFJkqcLqtpL8jeJQf3tBgA12zNnSPHKZVXdnmakf2gHiGD3knrs2zDtuZ7FuN",
  "key20": "ypeqGGJP5sndzkMXBrKMWG6Hqwh3RW4j2fy73AP6CdBn8PZWx6Qse1s4iWNUR5RD2TePHHXnigJoguSNnR2V5Ji",
  "key21": "2QPLvNvXMBXTBEaGBEJvqhDfePuopRiw6izW24Gai9eFQKuhq5GrY6YPzkXrW93UGFRXPg82YC6RzAwRNRkMqGMa",
  "key22": "QhVKQiybrBpXnEFFPYXhu7LX24mvUn5bSRtRjcEXN3G22y2STu7uVX7AujZUBwRVVykQ2ewrYdukzBHYRZnGS9E",
  "key23": "5fyMSZpAMAMCHFg91V76zsQRooDSwCK2xSapWtGmkpVcT9UzBs5fZLnAgg3hqq9LWez6v2WAFjbqsqeiJTkETuK9",
  "key24": "2yLcFDSYp7v3Bs4DiDUap8yxS8BFWkxk6jCHSuN9RiyR1aNPfCBLM3BBUSwNd5j8AJRLUaF6ELXRzVuQBtTRE4mA",
  "key25": "5mqjYwxia3KiKtrThvxSTUgoWFNiMhnrtcLB5kVCxey9aeWKZHDzcPM31oo6uujrBWkpbpE7Wr8EwFtdz7bAdDs8",
  "key26": "4yuKiiJztEpgBWNxJwMkf2Fr8emLic5JdMLR7wu16oNJoWB4YUEsLdhSV3g7MES9rnT1oHoN2gbSXkptiP4wn1eA",
  "key27": "3iN4QSR9CgPVBoquKZbzT4t8xQb4j7RQ4oYtBtwea3JPf6tDuEk62oGRcudRkCywE3FTb4Hwp3YuXVwA3VBt3NTq",
  "key28": "22q7hi8efEB8jBt8w5y6TPfGHtPqh3KeudHq1D7Kze5qvPMmi3MYhR3K5WYpgpRPvrwJzhwmUgaKVTwRC7ypiuhh",
  "key29": "23VqarJa2EfELrupsBgVFnDE8UafVjrCQPPWa51XpkBS9eJBGgLdUBz59zSwPrMSU3TpbjoibbTLrpPFCmxNYY4C",
  "key30": "5Ktjy24RETqyaEvFhha3w3zA3mqqT2zDf8BGx14DN8gHcA225R21GoihkUbW9DiHwPk7HNtHViL5oojjx9vvUVkK",
  "key31": "4ECdx17xiFwTzeqzCd6FM7uya8X3bChrS4kSEuYDHnFgCnrVa67QRcdvi9EWgmuBzjsADX5Ygwf3FVXUXQTGCdt2",
  "key32": "3jbkqzNnvrVYMaVrSKr4ts5iAzcEjjUBF75CCnV4odDmWBsCTp6a7e9Bwt3485Lt7daj9aAoth1ULyxMFG51rbsd",
  "key33": "nMmt7JcxxKwEZG6bFgznu93vnpbECXZrTknJ6pydtttfWSGrpLDxgseXvAHCM3HaB8WspD1RM6C6yjK1KpMd6D2",
  "key34": "4YM6MN5Hwpi1T84NraiMuRV2ToqdYBUrgosxCWVhGSQDMaqkQfV1akU1cDVMobuF7ds564M4THsXxxRJxQeuvAeP",
  "key35": "jH3iJgts59sZvm27KQCv8SmFyPivpJ96KStAjai4Hq7mAhEAYeLA6Sm27qY1FbC3jtqKqhSUmbfAy93B5HiZTTJ",
  "key36": "25Uaf1xwvc6T7hqAsgY9xJZ2oz5DgmW6xZejUdQ32uwPhWAwoASWsNyEXhYLPCAVm3UbRPWL6L9jgApYrdcwzkdu",
  "key37": "5Pp7WXPuKEoLCLR1TsQGmhL9d7p26sL7DJTRytWFYZDPmb8tCKwfuzB8ohpC1zKpY3fAKrmmiqwKk1cURHWJNQym",
  "key38": "5V9jtx9G414mcHC4pbTUquSwa2Jt5gmrADErP88RkKmvVhDtHNN4iG1kV3CRDaXEgX5nWgM5WEivtXJ5TYssFwYw",
  "key39": "2iHz5aLypc2VahQqJbxiMDmwQzrC7wgxk6kgZ8LxjtzfPrqvkWGueVWmXiqpF37tKnCyXPBXNRvkMjZSG3bXaPnF",
  "key40": "4s3ETmvMpfab23nbaTkrcLa22Z7s75KympxdYvENkgTSqVQuWgCwgTxiDwS6MtBw2WKL7dg3KPA2QuD73vrtB81t",
  "key41": "2vd6jxE9SyNuSFCYc4HpfBjDzdtqymWTQdUhfQKG4JDEKHVhCXzVe5Qo1bPxT5RKEAk3Eqd2V1aTmHany8RvvBfN",
  "key42": "2a8Ux5beK8fhpep5b36TxmAr3DLupcgfaYD1hipJz6Tc9yRaQNWxFdSAJPDPg3ybBfBMDgYeSVEGtb8652DfyT9z",
  "key43": "3keNhQCsvH13GWC4Kw9DpKpMkayXLX2T66XaNgV5t6vJXffm7W8XL8rbFPUxEKfYgb6knunVSdFgMDZL9wtzh3zc",
  "key44": "3XyX2nC8jnmvKaqADmKSXjVFUatyseQNEaE4U8mbZQV5FDsWNH561bfAAo6SGBHR1WP8r2p4B1A6a9JMKDwDTELi",
  "key45": "3tUTMoSgrAZReqYQmk3H9ZGwhKwF9dCmGdpgX75bcNiHj7D5j5cDs3qAdPzTSzGRBxfVW8v6MEJ8MrmwyJ5FHo65"
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
