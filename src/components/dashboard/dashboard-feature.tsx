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
    "65CQAheFjS3uK5q8RBbt58DJXrKfZFACCFTxgutT4bfNHAs5TmtTre6o6J1x3h7imahen4AX9MSsijktc75vSgur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29vwZzGKzs6xZVqrz7GXzVfPrtsd7NBNTGPSYb7fgSNbJ5T8txUeA5o3USpcMYaKFnCdC5V3Y7Kk9Ko1e8LM67t7",
  "key1": "2WNdDZ2praV5aFCKQdPAuGuHZv5PBPt5LkXqid3HfJr52Z3XoDWj8JxdosCBscyE7P6MsJaS8Q5q6gDfxtswPRQR",
  "key2": "5KUJeedvyxST2VCLjjAg7ng5WYhpGR8kfBKypC6wKvubs6vXSJnmVY9rgnzc5xnCjzQ6btdFy4t9RKRQ3M7pCn15",
  "key3": "3yPHkcdPJNW4m1yypqJqjChorGAcNg3H5V3dbfXhh3rsPPhSyAi2rxupVLCP84xMmvXLEJ3Q49bpmG1zWqapCGHk",
  "key4": "5JqDiTfG9BqowpYFjJtxmEbJrorhWZVQ7eg9mAbcBDJfQTDUcw5Geo6rxVGVA9gAedVGxu2EPohBwuaDApWAg7fy",
  "key5": "2FiiK43DDjWYUoggbhfMd5srF5mMXk7b4Qp2FFA3Utg5zXESxXTYp9ZRx52bVJ2fq2qXHKKVvV5bL7bQfQLZiKjN",
  "key6": "G7HG49wDXEaCBr8PyKeR7Nrs5vQPZa5fzRgXDiaWNikCHqJGcCgAMnMUwbKoT51kNtrR6gW1s4G1L9BRKSyStHT",
  "key7": "5UmUpXsFwak7WtGP6H22m4WBTe6UCsNbrqqrkNqJF75d5AU3qCCSKZu6Fhax5ho3sUSf2NCaSCCuKyvUjWPAWMP6",
  "key8": "rR9vMXqHH4FhdNX32jrV2tWMSKt2niV6GXBhzsTmcCR7ZMVShaofPp436gCdtnnPsHAu3xnte14n29boC46vwR6",
  "key9": "5dCMKXz8qED7txcVTno6zcphPPnL62i1J5MrqukAXSAgn9VrbtZnTn4o85kH9qLP1DGjJ68oUkrCzAWh8f88MNrN",
  "key10": "3JARo1Qi2dSGV2qoBoPZezoxEjtB3w5W4k9vZ7r7JuT7yvHhcEsZ1utpV2xTjnRRaPZcxH4RwrjfG1ccGeD81aR8",
  "key11": "26noquB5cYqep9AK1u1fY3REFGbatp9VH1bpawwEQC4Ve3JKGaX2TuEaEjcQnoX3haaGd8Pj9qfMgort6JxGmeAK",
  "key12": "58jUrRF5bS2wNoCK2CRgd1xDCpXekyL9vF7WDRFtPPMbBHevtUBz7hQj5MEhMMFy1FL1Ckc5z6EMtCu75Ku9brWB",
  "key13": "5yZYAj6rHNnKZKU7675RZEycq9RRAkhmPFxDnNuhSAFTHH1DgLnXVBNcysB3EoBAETVjHYQ6GqC49wVzNmwM7qjX",
  "key14": "4FciXgLNcjov9VCkTD66dBkSf2wYtqdRcqrLxKVH6xa8f8e8Dfpd9bRm45SF9BXT8EZCndAGLgg41jTthvN96bnY",
  "key15": "588oepVBoKYLsgeTpKcoXw33mXNGRTt2xMHMkVrHmJhC5Hyrv1JMxfacpXAXRBE1ixTyZECiroiMPS45MgHKLP9A",
  "key16": "5qJ3brUeSEcTYvJcoRMRkEuQLqchjKfCGTFJQzBPhyUhjpYXeK8LXV3rMM74zCxzHhs3UkWrr1gZmZgtNvr2Qf9u",
  "key17": "5hoWojTTP9YJNxxYziwU1SfeW4gbcNyxdvowvtEgKvPatgRZPNfcVEipqNCNzw4kVKhRfxtJXxvWpKMr8kTh8qPQ",
  "key18": "4onxoDYJQpp9NzrdJV3DK9dGGgSB7ehoFYKpHkmJuU5XnjfLhTtMSpHL954hZ5ST7wk2y2dFDBrT1rR6p6krkys3",
  "key19": "kukK8JHyAUtjeJsccQS5YfBEqbmEc75Jp9DBGHp6Vo2Cri7GJNF4Z3WZBP8mkgyJFSsHqEnuTqojJkSP6wvmN2B",
  "key20": "qTTeACNxXHEW9xWUXjQR9FSNcREdTAw8gXtPp4Jhz2G3dnnraL1EwDy8BnoCyEtPXuTfZqYz5yiyNxV2sEwx49X",
  "key21": "TmmgZG7mBJr8fvFBAXRmUpgUsHDXSmbbYSHPHWvtpg324Fx2Wm6CFaFzdfxHj4tph1CMFU68hxiMSka7tgSDo4s",
  "key22": "3jM67eiMxrA9Kjmpi7VD7b3LMgvGu7m6hd8mAaWwuKowVdnLydF7fxnStFsVBhDNjSCT9W1Q5tdcX1QGgC6wVJtm",
  "key23": "2eJfVjByFhs5PtnTnuEfRbci2aFRhdAamTRCVeGRgJwFr87fyRzFjNH1GDdjtkJG5jyHEoTHowSZQ1Z1zsLcWrsv",
  "key24": "4XRQQgELudkYZJL6Dj3uM4HjPTrVrDb9AY22pPtNF3qJhMVpmaThqRgK3hi2ADZab9Swv7o6GmzWFEkQstMqeGK4",
  "key25": "CDXVR9b8qHKpsXqCXjzexNTbDDoFpmM2Gt9QkoRbeuV44FhKoyQWdBBFWQz38gWqKmg6Tbmwq2CEQgT2VyrhFg6",
  "key26": "4d9otHGQ83nyFh52244uc8EHQ1MPFwPcnU9wdKQudPwjAK9iHLfsiTiQUroPXHLNEEYbypc8VDWZ6oFRXGQcjWtX",
  "key27": "DqiXrfxQEtT5MmYHZbRc7kgjDXGqEXN7ywLAfLREvvNhfjwYJ41YhpeepA8joHsARDGE369GRiPbNEjqoHiXEPj",
  "key28": "26cyZiuUdLDJEbkHZyuwjNTR5dET9p5QiGpRKz1nxs3zBRxy1em7q8Tsn3GNDAgFi224UmqeJbGijhPrVSiPP8eX",
  "key29": "2nQBLk2XHSBKS2QV4naUyQo2x5n7wvuP8gHL4giBFF8f3HWWRi2fMwAouiWdqRh4TmbLcp5jRk5aBKxrtdbky4bU",
  "key30": "4yrDmQTzrHXbqm3cofAmZRV2geap2Qugrp3kbxRc7WRTjbyjca7Ty6xwx8af2c85PBgARCheBNyTcJo8poiGPgES",
  "key31": "52uaFPxxaSwSE3hW1s7HRx2f6cwb3fafzHcGMBbmmJiKKj4Arh7D4JHFh7kYjKVQe57beaW4kq3NZYRkhaLfEbbZ",
  "key32": "2fyjtauS7PqFMj8G5Y8cZnJJZhywyUuAPRVvz3yzJRyL3jBCTZfNHRUot6X1X9izMSkhEstrTufUjGFj7qv3dDZk",
  "key33": "44F7u7jgTbQMdf8LAoBbqD5WitHAZoUtohwazYtx4mPdm79dJjp1Zoj1y87wqPmdjToWQwfKS2fcZFhC9wSeU5q2",
  "key34": "4nXfTQw9tDEJPPAwCfh3z1WXk9YAVqEoRpj8ct3BML2DxKphRyjgRbrd79DXFasuZ7aqjXndMwTTBm3qCKy28neo",
  "key35": "3KnE9AFibSLSHJmP4u1ernVXMdt4HwhEMYMZZ6voFqFJXgGQat2EKRwGrWFxF4hjrnAvndG4npPnAE1Zvk7fDrgT",
  "key36": "dzpBX9rQpV4ArrUbGk39f8k6KxZQFxBADJCydGcc5wMs8QpCFPPSCiwES3tEaxquLx8yjRre5dTaR5x5BzWnrts",
  "key37": "5TaFFCBSbqbaNMQsgigrM2fcWNgzoJvmtrpPLFgdDuee1KLZbQEWhuJgKJU4hrecobzs7noWoJStnzMgXyqSWxA2",
  "key38": "2rGH1BbnddvnPEcoaggR49hedAFp1gvAH8Ss7Pay2GpZ8kH8MZ8KNSQmvvE2h1FW7dmqBD1F8JMpcUfprnaryX8s"
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
