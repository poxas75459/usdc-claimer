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
    "5gTwVqa7fgL9a6naTXunBiLMcsbq93xqCqiG9NEEtWBpqwh5gXFQD6di69sCzrFoymoe8qbBYo9KNYGpL21cY3JH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47WxquBgxtBneCLDbNKQtVp8Wvc2vnqHD4W89iXyTbEZYPpsT2vRCn9bfx8QJsvUQ99kNxYLPMeLj8D4f2Ewnga6",
  "key1": "5Ns4Ls3bYsSQo1HLYWFCRNRr71wJ89F5zLNs89Njx7s3yTgDJXvjaz33jFNrmCD4Se3vyrb9Z2RNo9WDf7rwP23e",
  "key2": "45DuWziGMRrXxHqgFzyeDUZiqTXHvaD76gsuNZZmdqGce5Zg6GY2AZntg3WKeunVmj8NctGjV5heKmZ58syDLLKy",
  "key3": "24511pwxRqWD5EDnXQMkTFr5nxuJAqf1g7ZLFRcLTvAqv1oRTgEgnVaV34TRmgkyitM1UZEyZzKeZU4pTD5KukUU",
  "key4": "5avPD8KnFq6eupg4yiUeiHqdkGsACk7cup25ds8fLCpwrQUNewab3e8Wekccqghurb8Ra2ndWjzXfozdk8GNfTd6",
  "key5": "2YLx851v52E3DM2CBU3nSmsKn37tiqHcE9mLqspW1xDTELqh1CV18tKk1eDiqEv6WMUkYZwyLKiW7ZzBvikjbQXB",
  "key6": "4U6z9guqVP88EiR9ZGw6pgEDVzsMSkKDR7kFNNzWuvQ5aNCnf6KGw73b1bev6huj9SjsfnWsQjeUt72VfPJZBiZr",
  "key7": "4sMRV49F6x7Vo466umhUtpRJcNKpZaQMj8BQqknHM6BbeXqFuQDcYN3sLPuL741HDvg1Fcp1MXWE8fNuyZjPiz6A",
  "key8": "4XXWFo41U9xs388tJBeQ7h27Tp5KhoTTwN5DKoaAUTRPkf1C6UQiS6vG7Ek1WNa17PTXRzj3w39vSRPkLJTMaQ2j",
  "key9": "65TAwiYUQK7TsHxS3jphUW19R9ut6WgKstcPrj1tFv1GzLozT7rxnwGxu7RkN8N2WjS3pUuaUGBrF92z9yNubVAd",
  "key10": "GSnadkXkuo8kndkEJFFtjCcrCv7W8YzuB6XCuMdkgNWqRyEdYkthLHJ5A1HckMv8ShwhhimyM25CeZaBzuA5BJ3",
  "key11": "36vuqXT1frY8r8TqnDqDLb4uSG9woAXWJJiAvvVB331LrN54Lba8r6P4FpmubC51D23ebjfB58uHkpEB1Tc7fJZR",
  "key12": "1ZJZehiCZ6S91mp3bGaJz4G5dgRfCT1v7hwtrTeZm3yUmAZD7YJKx11NAeDx2JbEFHomgBsw9LwDMBtASqQsMwa",
  "key13": "51nnggnh99i49yDXb4i8PHmWmGGTjfwDp1DvD6ZNQxPSCjvr1DXv83cy5pgK7ffhKwaVEbkh6CCtW3GPeHuQBms6",
  "key14": "2DfKeA6ckUmeUV9ELggDDQxxGN9bsWsTy58BvdcJz5GHDSBK7Pm2LN8HZrArC2z29wZ3xhAS9VTAsk9eZUEktspw",
  "key15": "66KMxCpBDeDoxkN325kv4ymacvAcQPvFsfeykaRGymB8biBr8YDMdVLsL1L32pXmCXSjfxG6wW2nVj1RebfsiGwT",
  "key16": "5zakvU6jTfGTWSxDXyJp6SeEHRNtDUF2g5HqsaiWeAZXbmEE4smJdGQrz3U8SZ2ftFtygjZEtpeKBDYcRHTADrZL",
  "key17": "xWaPnyTf5C1Z2vFyHjN1NeMbVM4zrv5mkNdWzL6RK8zZJuAqrnorQuFcM6MKF7wxFNE5y35HiGTwFRmcVShEhxk",
  "key18": "34rj5MR61rC6sERxwsgtH6u55UVM838mYszz6njPwKEtnHMSsPY2vNBULCoFVaffZLiyTXUHhKfWm8vsvkYEPFyZ",
  "key19": "2PWXzeUkB8D4fiuW4A6TzMrm9tbBSPrmuqi4Pn6VxuJzfZRkaHUkow9YUTeQY4H8vFYSdwhpVrp825JVBPmPERAA",
  "key20": "4T146xY7NG1qmK511yjEqyqYtzpyRnTsRU6AMTaqCfM2Th5iMEsyTy5e8BxjkxjbXS1v391XSSmksT3WHgUpkMv7",
  "key21": "2kYpVTT7ERswHtEDVaXFATGgxfp5GRPJQtVRX9xxvDjNznCh1QT8TXNdhoSPSdcFknRTDhQugnHqmiog1fuC26wr",
  "key22": "4gFQ667BWvNHtNuLoqdY4T3Lpq8BmhRb2uQGwwcYPVuPuFMJwFj1Pin2VPik4gtaXmSyphQmZXKUxjTaVnDDmwnt",
  "key23": "wuNu4J3TvNm2HhgQ56EB9cDvRbiVnosyP4HkooXhEfJ5sBaKf9kcjA3oTLiTyBcZuW4m3mCJr2w3owHiBU7kGML",
  "key24": "3PLEkADsQRu7TcbcNFMD8dzE3zELHxrSYG5fLSjzHeNZ2Vea6YqZHWvXtFTTbQK7qxXKXsiy62pn4FS3yaBYj973",
  "key25": "ixuRSwRFFrFEnuUoDXhwrMj88UaJykB94U4TWnRy1GzxCz8kKQqrdyn6VwzV4nLVAfcCQBkEnALFvDiMBji1vc1",
  "key26": "2d7YcQ7JDjtsZSnGLzG8nzweKaPgTASNnkKBRv2a5kPNL7JW7WAYNA1qSAMfs1GazqJHxJX3e2mpZ4DmiW1hnquM",
  "key27": "3cig9i1rngNoiBd94egpnsEuudLGxGccda1oeXQLJq2MzZu6jK2QYHm9RQ9J6SfzHZHUmMxWx2NJsqJm4Qc7rLuy",
  "key28": "3hoNVnggUdurFdLdEFhZJnLEbGqGgx2tga5qu8mheSCNT1bd6UqoPDiUUsFdSL2JdrZVEQWZNqoUuSJYarpgExVH",
  "key29": "3rUov7b4ad1nMXVKiFT8YBjy36fpFsZ6CxoaLtwj83qDCnn3qdDCYJ6qBxtv7Jwsv6xdPSQPNoD6nyqCXP76mCkt",
  "key30": "2CZ3yvGwPoJb1JtFcXEvUgqz5WUThumnFgFRCjkt2MpsgCjbydQSDByMtRXem9jgWDUaiVWxcXbD3EYJFLKQS8zk",
  "key31": "5SAMavexaKU9PjxtgertN4D2TB14VVNYQEgyYxSEg5Q3QZVLqP5CpZS7Y9uSpWKXFXEEXCsQL9oiPXCzHywmxSKU",
  "key32": "2w1fQeSqVFNiLXSAHKTbUAi3ZN47vJEaEoWQFWSKBx7fQu1awh911L9SnRkWDHNrX6UZWuUHpaGkrLTcw4cYfzm8",
  "key33": "sy9eRVZgaQFiXZk2djNJyPJ65Ee735mfX5D239FWMxRLZmyZkhkoxxZuu4EtB3LLQ5Co4RZQfWpUKwrRGTwB25S",
  "key34": "23ZYvyxxsi9Z4yg6UqAR4rVgXnKMMTyeQhZibW2d869L87FxyqMEM4cbK3KHbcjd56WZyDgHe6ukph66AFU7mk9f",
  "key35": "59RmLK7c9PFZPBMEP8McsW1KCHBXbT6Ba6dPJMp6Czr5B5sxErwYCxYSfjz8iF9X6H2KtmP6dWjzoDDoSNTmDzD",
  "key36": "2KkQZSQksnETexM568tiNZRBsBuASbQvrXmkoWbQh5fCgvCYoGCjpeDF3kckkZtY173Xp9PQc28tVCcgTsauAbsh",
  "key37": "2jHuCeWunYvbmAqJZuJX5Rm6kL2JVkMfmHo9PQQymCo2GAEdu9GPqd2EJups461B8LYiAMNoA32wNBQXLJsVL7Xy",
  "key38": "3vxZWUC4vh3kCzuKPJRzo9Nmqh3YZ5YVv8wNq1zU4sn5yQUq8Bqu3mjQSHg7HKYS1SPEeEyV5eFm36niYKHrgLjv",
  "key39": "TtNkBA2yVHgG4eLDhqfokQBLDVofNp21nM4m7RP32DRFuLDyEW9sNFsyTQFKegLH96wnZr2bVvdNocGTLtER8CW",
  "key40": "22DGgP5zm6iDPYeZTVMCdq8PyZjT3KNuiNW38W1jiLLGzisiUCHbxnEr6rwg1oLR7vUioogfMgzkdiEUnKsG2ZMy",
  "key41": "4vmKtQtDmYCUYsUHKU7GR2DqbaEvBU6yz5q1oeQSwNoTjvDdgnAwn35dpS2T8wHav5zGhxgKqQ1LJsDs7rvsBmmi",
  "key42": "sFTnuMd9Q2cR11stY6oGvWaWRugLrJ2V8YmD5i5Qdk2txRB1mnjkBvZMFn3rgbtRa3mmoQChnx347fmVFY896W7",
  "key43": "29pNr6tVcwx8ZQMBs3KNd4bFwkanqUAhh9QikwZWwmQ2PytyvKAzsELHgk3hu5Jq67RwjfFPtSzUadAgY2T15wUW",
  "key44": "4EEr3i2uWyCa9NQuEreDN1hfNGLe6EcDQhz4iFfdDvoroV9Qc1nXHgxfink4izHTiKsRHAbfYB4Ntm7aL2EzGYiW",
  "key45": "5b8H7JfADqK9JJD7UVmAiKpbVNKEk9LcuM4F6PVRdS4g4y3diP5B9fFdADBtxBkXDdZgFue31q4X1sJ8pkTfkorn",
  "key46": "57mSrF3SPWE1joKbLawyf9xfJd7BDMD3gepfcyYncPSvT6JkAMDHDBQ7XSVg6jSPou1fdDV1iSvAM2CxxieUAPaj",
  "key47": "3t1xd4CZKQM8vot1MGzanFFP7u6aVf1GUxq5Abh8fGAhvkF4f5Uf6SJKaDg8eHZ9cjZRMXsoVGrwXzuErPi3Y4Ls",
  "key48": "2MJXWSSxfCfE3Wx2F4Sp8WVmnKQgx4zk5pEULKm2Rih1dmkjK7TqgJnuXi4Dmpq5h59QkqidAywSMgR8JwvGSfVE",
  "key49": "5aKVoC4UGzTAaa6LEtfqpAYmhyGS2amMHtkKg2etY8b9H6eXMctKsEzq8q7p9XEepoPDcFowjinTHy6K95uQbfDL"
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
