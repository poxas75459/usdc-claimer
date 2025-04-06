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
    "2Zvvhg5EYJtnwx2at3zggs2caBiBuRauvegruibivvWjHGBCox7cRFEwiGvAcUKHN6yzeLiMfWFug2iRfYiKzVqJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fbCC9b3v7qy5jidnFCUq6kv3988qdpLL4QaUyJyiofeLkNjn1h3FZ7WhE3jMpfJke2Av7enmjgYQJZS7tczGo5T",
  "key1": "5aQu2eQVjRoQ8Kr8zENfDKxMheEVNtzwGndrNe7UYD6SdWE1W28kTU3GTLQH9jpWbP3CAQmmt3c5FN1csfvqNhwe",
  "key2": "2EwSgj5P6s9W9TBfUvst1hXweXTPvJHHUiPfNSDJvtdKFqyWvqwLpEdZMPibVYPsHdhddBV4tuCzAgEJR2q4N2GT",
  "key3": "PMmcCSKnqbWPxrKPPXLm2iqyB8YBrUt5WxkKHtpi6ZCCzZtyidFqUMT2vtj8TnkDpjMxTVdHiE9rEwSiy8cToPR",
  "key4": "Kgt7wV37tmgWNtVVYGuGMJX53eFcnjkfs1K7djYq8GgjF9WkDdoRMMWB7ZVPDAYgdzGtH9EkQP1Ytvjkj9ztNHu",
  "key5": "4SRpEnaRX2EYZyjxjMW41ksdJN9QgQzYDghqMiqMwGZyfKG8ivEyzxVcji5cQeFgHNNtb1xoTwSER6T2UADZKnJr",
  "key6": "27eLwYgYpKZjMtenRJKBvtRAi3KXDDZN7xHKL42UvdCdjjoQokzuJzeXqrLpw3tPuqjaYL4yihReFyHL6PpbEXPC",
  "key7": "NSdnqhLNJBYZfpSs4ULCVDXq6sqdPe5k7xKWDePpDPkmK9a8b4eMVMKpTrr8pWjN2Scmos7ESVW6QVDeZ5kKpPD",
  "key8": "3DFWDcDGKqmakm1Rmha2sSn2xqYJi5ZAUBdzribJACeM1re9R5qEc6RueiX9Az9jpU4n1GeZZ8E1KxPFcauW56P6",
  "key9": "5pvTif13S8wQfPxRTvyfxQxHcoUByXCGyeozDJpdo1V24jbMcYeeGy3mbkKUaEQyvJAD2cN4gd1pqQaA1mnUY8ru",
  "key10": "21FdMhBMTssVuf7Vvqo422g9reV89AzrzLg3cFp7c2L3gUmPeokX3ETYtbt9BEfwXjP3tC1HTQpmcN1bXJTGk3cz",
  "key11": "4HMkCHWGCbzg5VW1WGVwBTxGmb2jihAbLN8o8xCxECki1VWtxmsxLxyvzEgwTMnHaHkYZUy2hBVya9UqYJbg2HXs",
  "key12": "Ly1GTDwVC3x8zVW9KtDWUWH7fP1Nd59o4rHa9Jw286VCbcnjnex9ygLkXWNmzF4Mj7W1NwAFEz5pWAU9MMNjPXc",
  "key13": "5Li4JnMDCcUYr97JbSA6jYHU8T2JhzwwuYu4PjrBYBvDrivhep7sbpeFQPqA5DS3Hbe9QQiFFgSdSJd56TVFvAJx",
  "key14": "4LS633PPwfR7MfekenXaVTepGGYa9nSo6o5LB85UjzhZQpUewAZTnc4byw5vck6wVoTruKD61mAs7JZozzD3xNNR",
  "key15": "4YAvjvw7dyPqJFhBhNGeyGpBz8k8QWEuyDqsf9Yfhn3p3oFuTGhL3kL5B5gsaGCqbHBkRBWDKA8CszJMYjs9cESV",
  "key16": "64GVmWW7QXfkaf69kbxhviz7SJndEsVR56tSKNLcbhhGhJ6uCiME1VDturM3ku3uMtTgW2mY33SctzeCSpjRNTuM",
  "key17": "XN3K2UocahKtmpQRvqphCqPExBCfLAjWoGirwAFi6WcsHWTzBcNUKjERxkhyVdVw9ix3VkvXh1ZFD5rotAmPJVR",
  "key18": "55SCMcRaZWYkeH45rSzs3b5wZKQ4XW19HYzzSNTXxqyxbxv5oPdKVHeEdvUucVYTGZsJDcsnWMSQr8TwKRDPe8br",
  "key19": "5rCNcDunTkmM58mySvQFHEZV6EtzAxmRmd32iZoPvVz9aYNNn2UDdzGiivPqeEzn4LTdGVnR3bnZG1Fv76veFKZm",
  "key20": "4Fmih6zpLb2exZkUgAX2BFtiozEjpKoWWA1f49zcVEXNbXnW5QDWfyR2oJ5W2GZgd2VaECUAV3N12stuBYNitX3j",
  "key21": "a85iL53Kbpu1ysCwDenZSQmGpQ2CW4qcCzLuu7pswSEMa1gUZu6f2ULTfk7y89eBm1JNjKxQg4uN9o7DsvqvtVm",
  "key22": "52rcpBjCw4nninPyritZjYrcS6yayu79DmRkhbHbWMvUE4T6WRwhmxWNPyzV77ZUkexPctnXPdXj3qw2URLnw1aE",
  "key23": "2GdKu6CQZPMUrJLNy9yhHByf4RkaPtbfAtj6QM5TkbtHiHK4SAzGbjVhCUWoUcHahHyj5SqmycFdbmdb9bx6EzJ6",
  "key24": "xyd9gLktb8LGhU1bUfLxY7ydRku547R7yUFeHTgdwJGNwH3X6BebBYbuBL6akdSNP1z1meevmnBWToFqp2VqE2j",
  "key25": "4cteQhNdTmWMQHdEgYBVJKf5MArSwtgFjeXTLSYvp1phd8VXcmTNG7UFRaBX5hDmLyp6h3q8UGopMCzAPbNtnq9p",
  "key26": "5D6oiePNuuNc9f9idy23YCgm4SAhMo8WXb3hYxvZou9PPqpyjwzU11TUhMgHexfRA4omXkSEbSAwFyYiVUyEW6hx",
  "key27": "2ULh2ah72CDjruzCqd61mX3LPDVf4jcaAtoyLFtNd2z5bqb8UCYfmXxj4pie8sRj26VbTXXqmMxHP6pNP5TZcmmo",
  "key28": "2fkVzrRRUYoZBU6bKq1aug8p7CY4c3rxpN51qWrVHST2QVzfjSQgzjZznmvewAGUMnvuGAyQUpYNmtva6uZjUmyR",
  "key29": "5jA4tpWYtippYctia5ajvTmLcGbKtsbgP9WcQqwPqWQh8NEtWujvjzDALbFw1GR6yJoRPypGTMhR9rDchSpj4aa9",
  "key30": "2VCBavRaRD1ETDUqVPQV7zqm2m37EGWcHwx9cNkXLHXaQAwWSaR8vNud9SanE9QguygYydkq81KbmtKjJaLg4Pzt",
  "key31": "58zY5KsQSUHe2Z16oLZEb1ZFy1GxqZTVgaYbtaPrpqxyPaM31b5fA1XysGRPPLac2yMn4f2EMTjkZ7qPcpq1NYk5",
  "key32": "E2rc7P8nbu1nykJzSbd4TcAJo448vw5eDZC8935LtCS44NRcnxm8ZoLW62LuBDxwhJd1SEaRa7yJJC2F5rVFdTH",
  "key33": "4ePjgX7DCkhS8kYENemBmET5q2ahXYvb652wQFQd4eYudJAnfyP8DsUtDhUJH9NgvP6VSNuyfg9ezwxKnZeg6QfG",
  "key34": "5RNBeJwegvVMNhPeiND1bR7d338urpNfh1TUxJS8UujLWckqQwC7Re7Cz5Cvovaq6QfFpxickEift2nfBdjv6AZo",
  "key35": "63Y2rtZ7az4FVViddL8SENhKPCzXZq9o3Lz1L6mKJkT4PJw1BWGMJ5H1VwEF82f6i4JueWiLudrZcC7HAWoSyEx5",
  "key36": "663aANVf3BiNyPB889m9sgYDLh73aEm7Fn6g1cL4D8oMfkNh9xnPz9rdcbd82fm2kYx4emUJbbdUnn5wRRhqSpcA",
  "key37": "3TGi9A9jGQ2Hf83tMq4hBnFbFrMz61Wkv9neyE9TajBNDBvciG5tnLSyJzh4ZV5W2cqy1sbj48JBkim9J2oMSG4H",
  "key38": "3gFr1gqjcUc1b56UzxBVPFJBr2998h3zgmNRL1jGdMZBR5P3HKYmuCWRVZT6NKJwxUXgbHDmngaa8S49A42dyE4i"
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
