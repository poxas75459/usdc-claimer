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
    "5R7RvqEf3V7Jv2KoLEMH6D5iZ9Xx9nErC9xLTinXTiACQmYu7Lq3LkiPU4Dbj24bwFU66npxJhTyD7XX5ZAb7QaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gLQh37tZuEs5nVzKXMFSRb3EH8ekJUQXYebykR64iWsJh7HSEcMS9xV4VLjScMCzHSJ66SYiupyLkD9yiWfRbs8",
  "key1": "42gjJPf13bGGmowhjWr7MRFuzimVbaWEhXQs4wr3xunDgj9vhAGZ5SupuF58f4uFD7u4xySPKdjtwAF7VCia1r2v",
  "key2": "4zEEyYrA6YPL5zYNVTxPz8vihLQQH3Ke9G1iMrxx1bZ7zS3Nj5u4qiajUc3cdFUzKE3A63zzU2afyL16Bpmryt8G",
  "key3": "4cuqGBFLF6KEoDsHYT5zb8CxeLukmU5EQNd8AEdZk2x9V6aG4YnN3Ye5o9V6XAUfDjaVrRf7xEekP7kn5paZT24V",
  "key4": "24ET2zd3kE3265CdCF67mEMPn26W88jcXZgpaq9bPW2ptQaqXhJfdqCzfdzKdhxCSwnhzHKVjbGCEZgCg4MKN6DQ",
  "key5": "373AD8Vx5Wiu3rEHpovaVNBAoofc6H1nqSsU2vQd6cLxXQUZmwzvGhZeYXojeJSykv38ztQA6Eja5ZGY8NdaDaF",
  "key6": "3jggY1oHCzVrSoGDd3xYyy28LF9VPGJvS1MdijeUV6acjsqwusxxQXA5TaQ2ipW8bSLve1ubcJupWqWG8HB17Zcw",
  "key7": "51G6rzYsFw76vcsSYdrttFsf7WGXWJ8RyLLARZQZFp5E9no4SairQW4gderVw5Q5E2iZ2Tmmt7jrgpeSX2VBcRbH",
  "key8": "5cV7BgPwU5MjKXzWLqFtG5T4bPmMLJ2SGYDM6BPA9CmFun7jmMEEX1Kz5o6yFgRd4n5KYHFfd24SzBpsKpYLgXfn",
  "key9": "jY5z2vjB3ZeGRqM5jrQQfFdc4JG5kpaUKUsXPCM9CK3jHALmxnyRn6NLFsSZh4AyhSe9ngUbSXPuaDFXwpVAo88",
  "key10": "29cUV6qYDq2cTZoRH7JZ4k2WAuAJE1j8C6QSczjJAgBekNArdHESjUfCdAjkxgJ5cPhY6FsX7LZjZKNgkzJYRm1X",
  "key11": "3jxzvwAC8gKTTGPSFnHC4kiZEcp2agmAjm5ZZPZohFKtMVfGGguDsopiF8HTcw9QVVQ7VCWRHZ1oSdKwURLiqvuD",
  "key12": "4mrQHXmctRxfTcyDiZ7tcEF28K1iUgNNTZKpFcUp9BWFFqzxwmyUCRMmYFVBjRZeQo9125HTzQ8B8A5mJywXNXsD",
  "key13": "2XC36jS6KRbVkieqhkCChqD2KJ7KzvoxR8A3GoFvX65yfcxRxCNG3yjEwPHugzGyXWHct4skXqW5zwALy249Vbmd",
  "key14": "5sMbbcpZkygRXJ7Hc3XYvqX2Ra1XXesgwR8eBmsQBeXT2oXGaSwRhngYe4ifK1W8c6f3xpiiqLWBk8mEBA226gYu",
  "key15": "EJ42sGCJmPGGdM3Usm52hzhq4iEHUdm81WP3ZX9xtDfpMg221CpQg8Cmn9tPq1VwbzoKFZGyQ1HuWD7YuBRu4xw",
  "key16": "67EHs8gRZz9b6bShZFrk9pAcLs2SGtAcAxShYJ9ywiQ6YcC15t67Hied2q2AHgeQch7VP2wX5kC4QECHFGLcefXR",
  "key17": "n85mktrdKHQnCQnnPrytsDwkkoWk68g7Xbm2U3wzVFeRYyRdt211g8yskT5gBUfViZJ8j1wY9S7ZMQSB4ZcfGdQ",
  "key18": "XxojHaPZJdrCyVcGT3afyMEu5Gyt2M7rrRy1HhRb5Dxqvq88N3s8hTcx5EjWFAXYmavE7RdW1F9HcaQ4w1YSZWf",
  "key19": "45rwWwNS1eWqBuAXcQiJR2DYrCCyoWDVjDwWAzTEFWUpt4QiNX2vNMPTeqR1LXD8ZwW3r3MoXLjbjAXmQMKBH8rW",
  "key20": "4jCXXp2cEe4Po6y8JfkuvSAJbDvfKJzqgjczUDuqE4NcXxiPwNfZWGWM58H4dhwy6qRqZER4gxGp8Lcf3w5bdAFF",
  "key21": "2gCpjVvfRFAPTuPf5nfxi7hHHa24pd7sfKDLGArNgwBvHTVqGvxEVY2YYJ6KWYeQaASvFycRwu4pX3k2Yf8NF4Cy",
  "key22": "2ZCUUovpBewm45k1uCSyW6ffRWXneSdPny2NwFXUkHZ8MWsThqa2kMEPAxbykiemK7sR94JizrbHVFGtbxE5TuM3",
  "key23": "3nz4Xdd6K24SvB5kKBSsUjPYqhkRLANHVFdzJrViY5zTDfHF1wzaMnDBHAsrk8Tmvt5k6BghZAJF3rpHZrNnYbt4",
  "key24": "24TkHFumDGibuaZFu43wsibmwnvwdZR3diWgpqLi4UndDGLE8w1g6Q965kb2owTV334rJJ6aqz41CywtWLgdmHTF",
  "key25": "2qrQGW3ggLoKv7toEWLLBJBQ4Tkmi5KDo2XUSB3tuNmQ1idVLoyoNHj7g186GrdHopW1qW55gPNt6ttdqjF14jsY",
  "key26": "2qQzyMnD2ueJhv4EoXELg2ooLmUtG7mxp5Dg1h3gxBwcAdWkVJJRBHwi9uhtyF2Ycht17qTtXPXDUT3ZgHuRMAPB",
  "key27": "1cyVrVPqZfBnabn8Cms1cPNYP9ykjy3kUPzj7yHU1MDshVa6o9art4cFHG2DFoJ2Nv76JVpdFUmCh4YXeRUgbZN",
  "key28": "2R3tbnQ6oLNMcbPoVuCUKgEYfcUoyn1digwB9MFC2Nww6H2nVoUU68fpU8u6D1KZ68MK5qjRSNTDELHn7uGBwdwr",
  "key29": "5iAYnTLekkGNNZwGVBimFpqNGZUukGNt2D49HTqndoRQKLoYJr8vtVp4WoGUMoeCrWysekT3DpMqwsoT78ihuY5C",
  "key30": "4baD3doWVsh6LYadkU6oHSmoFh8MbqAAs1XFCMcqaZj12qXeDNWAC6dVnXvpVpMxvmztgAgiPRXAhovzkk1ypJfc",
  "key31": "46zcLovGvD7ZP4SS4i2S613h1PExE8U68dGpaHYSaa8EjRGod47PrtFsEL1aNPoCmUih61UKYnKqXL8VzbZTFRYc",
  "key32": "4pUsnDjKYLjbUxbBtKYH2ui6wmqXi9oZweM5kA2hLUgy7RG867k9DLk8wwsuREfNexbxk1hTdZiieiTBdgz2yTbC",
  "key33": "2ks4SyXhS9y5Uz6V7UA1yqfqjZmPzYNrtZ8tXJTJ83Dza2JjPyU1vRTENVgKLWRDVp4dtmFE2p7jWQNrYJ5reYjN"
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
