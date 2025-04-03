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
    "4tRqn8W1tf6taRXZeuNX5ZMAE7RJJzrXrJ6mgEkcmPQd4LWuhkfDExnRYiSaNsHGu3VZegqn5vYqhLtqmJBnzC2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RG3jTRemaSbQVvJnKrzpaCX2C4PxczRummxnGze8PbCCoeUbafopNFDfHCq77RGWB4MSH5ig5ZRnpAvmmxRtL9w",
  "key1": "64ZRQbm157NRqQxhqZw72j3Wa9jTswFnYFXGoA8W5wYFW1ZE1qziGMUbXVp9RdWx7U3ztYYVtH7Z6oMfzQ73e2L3",
  "key2": "4QGM8XW5tGhRwWMSiiqp9szjwSgiTWphwY2FW3PW8vVkY9U39cV4esaq57vft5WAncGkvbVXtnh225VYcrXGD7qd",
  "key3": "4PXZP9Z9PD2jywuL2EE6qbDhjfb3ZioCGikrseGHp1qVQzrSja2Sibq7Jo9kZCWESmJNt4gs9EZK61uMHKBxZEgk",
  "key4": "2KSNjp3iU1xrG9DtYnrTMQyDqiaoSt3QtViHPoj7TpvSgqvCAd1gL5fox8PH4kvGdJm9axG9BX8GATgLKqZ5fTC5",
  "key5": "2RgC6Bwq5BGjkTcKqxR51UExo2sVYSWYVVWt1vwjvuM1HR5dww7qMV19xMgmLQMncjWHVfUGwjbPtBGr9iRfao3y",
  "key6": "2sHWcxNyqz8vAnoJL8NEejCxeoDVCgWGXWmCtEBWmaRB6s2LY6kvxqRjqhS4eFs83KUKMpXw3AtAzi7kmMwUFZsm",
  "key7": "4e5HJTVvqnUBWKFk45o6o8ALc5RSgHXwhmkGHnWs1G91q8YMB4Wt8QApkAJWV5DtBUgroLyewo2oTsoJBeiDmCEy",
  "key8": "5e7ERqHHqBTDy3TgYCxbvg4yNvuQiBUuuvV4htovzsv96uS2wL4xXgKUTFuNrozbzzA1zcv5FmG1ZAAXt1TWjiDc",
  "key9": "1gYRbiwjfomnFhzyfe3xuqB3D6KGfuGkoR6zsjkCDdP22rkyNTTzoLLrQKuDu4Wpc1VbPTZJqxKa6ekhSQiWf2p",
  "key10": "7BSBZcPi3xKFQtVLcDLnvyHNwi5k2nRFcwUNMH5zcGGyeGe1X4imn32SDsTj9j7AN2gF5Wt3XafznRPqveLQ9eR",
  "key11": "2wP4CWz56h8JZrxEqrDeGxuca8rCBZw6oJjJvZB7ieC3H7dPrTtpj5chPpybAzDTBp6jPkFfa7hJPrgSkZUGKoy1",
  "key12": "56WJroWTb1nXtbLmewPaRWgvx5EuUZVDxa9uKXBCkRGtHR5CobXwV6nxb49h4qx2LjPZc7T1pxvjzGcWorTxW4fu",
  "key13": "3tVNAJBdNXrcEZ64vmLgTFJ8seNMH94FYiPWryjKVXQzrHXp9JtUFLQAj9wvUQ3pDuaZbcMpRx5CAQL6XCgRHJgK",
  "key14": "5PCpBupYxor1PQFCha6i4QDMU52CBB9897YC3HabHxeYZSJLFmpgprWhE8o4DBY8ffGMRztRTaW3pKujeyenkeMy",
  "key15": "w2ZMyoevG9Ppr1NpDuqF3CY45AYCb1QPzVnLpt57ZwPhviLd6eoT5kwrd5iqrBLTRwAZmJonfJjsyZnF5my6XEh",
  "key16": "5quTkQQnJ51KQCTkzn9WbyYEeTKBvaZpYq87rHtPU9XzMDhU7WtAkt1xFbXCLYVYrPwstznYQtsBNCxWyAnij2gL",
  "key17": "442gr9B6YJwi2dSjL9NdNca7Y5cw1LdpBC1Yq2njw1ZpePeqaiMrHiKGZRuoZXjm8DFFJ8KXJjFMChugszWE4eiX",
  "key18": "4pCBLdj7vNSJKn8NNHMxn7AmP9BvQR3uRbMJEP5pNJzaY4bLsiHgC4EEjXUXiGa74vtmZNq7yXz7PBp21fPFeJ8s",
  "key19": "2aBwKEH6oLbz6wKYkCedHpohEBv7Jmbg1Fcp2RVYw7AQPqM2569tnXapozv2agEMVUnKNduA5QjguRtWqvuqQWDV",
  "key20": "5v1ZzqZhDAYojmko2roCPNfTwbQRTMj8ruBjfPHMcibAYPFXsfFAAToouCuY16fXeuYd44osSs3NrKUxb27xHKn7",
  "key21": "4vqi2pTdEhwyCrfjeVEvCjjZQVnQPdwHjXPHbN2UVov9s4DE28kqh1BjLEo8CaBTkSit5PuxEbCeWwXEUmvRxXCd",
  "key22": "456jTvW5HXq5ztwAe1A3rpynHynppuDB3x3ttMLZvq2M6DHhq1Qpfn5KWAuKJdaHKAT4SWgRGr8mRKrTSj6XByup",
  "key23": "2sGqfMsCa547v71CSMmcwwVPPuYbTKH3KfUoejNL44R2S98o2LiCNECrZsF9DxoiamNPw9BAbxoAGeUPb2SdBsEu",
  "key24": "2hgsi6PN5NCHwxSa6CdhpVmiHsTY1B1cv8uMRoxdbWGnRKSWMsrxxDcTV9381dAqohi3786T59cbQTqaEfVmp78S",
  "key25": "54wq1sYTHZ2t5NK24pCX3o7WTyy9sku1kobL7acr8thcsdmJTNcBg95zzo6d2brKwfBECTXrMjQHztAygLzCLxG9",
  "key26": "Vtr85xhAEyz9Qrq9ph19zeMsXnugTQ24w2azhk1oomg7sSusrpmHuubg7R2ivna867Y1HjDENSfR45JX1N4hK21",
  "key27": "5D67BkNZNdAtWojmeqUbZnW7iERxJfhz2G1GU796Ht2Sycy6XvBTQGru59cZNUB9vNnaqLFtv1P79WfcB17yPQtG",
  "key28": "2JabvRwoP8FqNyK2EPCe5P7ciECmcNCLWRvuHNZ9oMjGMibnhHK81eMXvrsyHKRoi52tQ9cW4qDSdz2rBTtD66QD",
  "key29": "2DKHJ4vnTnhsmns1XpH1Lw178cGRmPqnSdSTdQkQa6r5PJ58DHLZ8DM9eN4v9mojUcVtbVGEzy7F3upckrWPsBGm",
  "key30": "SN2dVF1GHsA7H41u8oFRRRTfZT6v6RifxMBbx9NrYAnm9e9jqAAfCNA1SS5xgtD6WtoDE59bgCWiBjbfJYyPLa3",
  "key31": "eyjQKPExzR1AQiqF9JULRQRERsnMnfvxJcaFg3KkqZTW7of7qC2FYgtk55sL2wXsac7XkM6m5YCTVx7QhetLVdH",
  "key32": "4R1pFbxwvcSRuY1fmjaZ6pib6oM1fn71dZkT9Jg93xzccKQsdsJyZpr3GUL3poxRFBFhQHLLhgVmp5ipmKE3mYLt",
  "key33": "3xW2z7GJqNcsazGRz1mfjheygURhNEiPKZopQWjuvbsAA7jLxpihXhNq4sEUsErdqQZJ1hYWLh4ggH8Ywn2S59Zs",
  "key34": "2quBjQixiHxzZ5YcoYswzWpFmewk8m5ka9VoujaXmTtmXE7D8GRtjdG8vJiGY6xn3VBXpKLGeHbK94RPR7jdg8uC",
  "key35": "2g5G6mNnpVFe6S3EYwZ3EZc3nGficfGwc3PBVHjQPBEkxsjQHWh3rbni5b8fdLogsyT6BGvezNrzGAvtFSPdCrGA"
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
