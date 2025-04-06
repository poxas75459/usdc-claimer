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
    "2iUxPgpgASVc1igYaU9ZT3UJPJxsMict6uC8fju6PWW8MVvLy2npYs9UERv4vtLC1Uje4jB9vkAWKsPDD8Jwzywd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rqj9AhEZL7fxR6sLz2tTTHYtH1eREBpwFFRYDAf9xH1GjQ6Ez7PHwAkVEMqHnLJfraTtrSNDmatccLUioV8NXbo",
  "key1": "QvfPBrccvMRpNdGMxgzQafpd4ypXMCWzx2VqdF4FHzxi5tiF8FmSt81XpwRqhEUw23mYHqtwUjnjsnCSXAxYWxS",
  "key2": "grpURQiYVXPjECwDBqnp3MR89fSLUG7Na6vSixEGaD8scxkdD6BYGD9eY2Gsa32df9nV3a1L7Zrga9VjctZoei3",
  "key3": "2k7wMTJ69DinHcLHAse6ET9V65EToormQd2qpWmaGkPf8pyQ6t9cTHu33mduVVxXnjKinWK46NZ6Uxahwe2UQmVC",
  "key4": "4cZvbVbXEppEzAndwQuaXMfHfDdg4Ao11p4JJjwnbpUaBgwiaaaFLKNYaeQZxiNJP5KbnSaxnnotuTyLPrtgTnu4",
  "key5": "4xKVvnjyJzhq3krsBEJiwHrcx5N8pTqNqdM2uGRSJkvpRBUsaqTyxo5wmnetvLBvAakaXHtPohMh56jZ2knujRkr",
  "key6": "4rUfdwYdi7xJAZN5ca57xRn856DpcsBpPg1fABXkvx3UuW4Bj2kSMbAPy2AzRbBgtnbwrStoCivKne9NgcAw42M9",
  "key7": "2JRCeiBqw4uunj4VZoAyJsNw93Q5HJxHGFkVUmbgAx2CEQ23WuGuymcn5aRAy73FhbsKrHjzzaRYPfohLGwRQx6D",
  "key8": "4JLNL4WEqQM9muuz1jGqLunmQiQ3W86ubKrdZnRAru6ABkESGVssJCY3GHNTT1y57pvoESvdPR1SKtKyNTHQPGsg",
  "key9": "UPBS62mWaDftnMyRxtosSNp2wYwZK7f5tiKS4HnkPVuX9h9cKnc8fD7yj9x5PcvvCAdkZoRf3EXxca4YXCtCJ1h",
  "key10": "4JHV4RpTbSaPj5gSYra6m3NJq78goNk8AoqjxTXesYuPwXRaAmV6nTQ69E6SMbfdAvhvxQvcCx4uzUG1wPWvBfLT",
  "key11": "5PafbzxumquRJ2mG5ax2juwTGro3FsXNPtxFcKRSScXkunkNmDh6kELoSHgjKL8k3s73zQb2RZdfR6xwX3eBa1QK",
  "key12": "5GmGhf6AGMTu6APgfqr8snUad5ZsbfcGxF8KV6XAqSjKVHfAtqGf9s2AEfgDfJ4tHaEh46fkejKVrKNtHPU4vTmQ",
  "key13": "YmoeRFpi6aQqrtHwGUUezDhzSEA2rENzCyo1WHTopi8DSh271gMNyw3qiQdQy3MwSUsm8Dy3nvTutaF8B61bb4y",
  "key14": "2HBTJSHL3FRddeKTZzr98FhVwaE8FGSVSbTXTAvBdZZeCRV67kUbcuxdPdEN2DdS67EBECucgNwGdkTsmLTryyzH",
  "key15": "4NCqG4M2jRNWxwYinWFVR29ksMcYUyG5Xwd8h661d4bjEBVTENrLzGcRt42YjWgf8BLfu49BXwwFWaaV7mcV4N2m",
  "key16": "3yyL65pnMhcsArX8Y4aS5mc7jRFVwLfJCZvE52gpBqCjJtUwWHTfHcqAe2cRb8KwzkenLWdkohR5RptfYBtf63Yw",
  "key17": "2Ruky7LSEW1sYpfEL5Jz4g8WfhCzKb5gYNShn8XMFD18UrpMKEJixGuwEvqHXxbwtb4q7V3TWZj4RR19MB18NNA5",
  "key18": "3tk1X5Ynmy5iF6PqEvxX3cxgnZ7zv9MXpmv7iKS2RjfaHoPjQK12M7cx1LfHz58a9vR18UP6fauGyX8skELSAyTm",
  "key19": "CkNFxwWc65r3oSpyrHA6JezjARHaiv4ZZVbi3XjynWakAmi8WEVkM7iqn5RYZzMkgGxRoZo63nQ17aEZgFnpEtX",
  "key20": "3cLbx94e5FkCmgkqtctPoN1YYcpfn3CY4VeF5UgeV8hn9TrspqprhoKUvrXSHGZnPDJPQENsDpeHyvtVwTbnyutP",
  "key21": "5KUYeAPR3xstPXVSE5Feyw1okrGHDA4JWD1RSJwzRN3xLH423wHMwVZvNqP6aNVtR1tN9ZmiY7FaBHAFLsbxXAY5",
  "key22": "xUCJhE1TPCqdsJ6oqDwNEpPLkWfg1TkxBVz5SmtvQtYzMUE414L6s47N34CVyKvPYxQiG7TQhqxEQ3GQrg7FRbv",
  "key23": "QUvLueMokhK8Cg3bFPDYDn8pnRrq8hqb2PSbxUu85LR5XKAp3LmrVqESngBX5Ca6qqJAHKQzkTmkzPCzBomYZEV",
  "key24": "2rvmdSbuQSbsqHkARdeC8ByGngHEHnq7KWteJQsXGJcZMvaJbQekBhWPWuVyBgNNYJsBbVAfFT46f2QoK4rRvo9S",
  "key25": "2ffTLbA6SLY6HWcF1MJ3KNt9u5rXFMokxCRstcAYHPibr3p6PpcQ5Yct2jhqs7GY8b3NeKiyp4SjWTQr4ssrgAX6",
  "key26": "4pAzoHgYNS9u18xDV9kNWqnD5DP769tZm2wxuk2UVGBjWPPspph21LTLnxYZQKqffyfDnmeG7W2bcRw8YnByNAxM",
  "key27": "H4P3T4qRcuMiGQXyd1JP7NxU1bA5DExUziSE2J46YkfX8D2fgF7muKeG1wurjL9J6hha8YarWpphwigKH5ghp4u",
  "key28": "2WrB7ai8Q1yBXJbYPAX5X2x6XJBFWTJoya9w757TDj74oYNPkkvPufKR2sX1HahRuTYRzaghmdxFAagfEzseuPKy"
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
