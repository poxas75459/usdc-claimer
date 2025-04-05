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
    "2HtMn8vrczLcCRP4Q6ySaX7DjFsJX61BDTHfdJz51VK3bBgujBxGMa393yycjPsvxDntaD14wTZdd2TuuFNmYRmF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sc3LsfVRRC9pQ8H2HBA4pMkqKr4xKGPPToMDyu55tXF1qwWS6Tar44zM87a1d58NXD4McRW3QdTk6TCWY4rXwmV",
  "key1": "EuCfBBrLZt4zXwNqKHkVNTrDbYcBwT6CWW9iJADruXL8FLzPjzqQNXKX1jf9A1XmVTYg6ChwXGT2ckvHWjqUxMG",
  "key2": "4uCBLRQqf6Lg53MXuFWgViYPVcHz2geoUbshQCE1DpXWpk8fcxmthZZJ5ypVb2X3MCmWDFW8s1oEL6BTJFVmoTer",
  "key3": "3NMMTdc4VoyPuLHjxcsxw4HaN5ZVsMkRfaZh292LQfQxgaDTsR2TBfHob3qc96bVYGmJjuMkJNZLMbPQ4uNw8DoX",
  "key4": "2jqe6mmBGhVLBcTfN4YNYDxmNi8h42Yx4rRwYr6TDqmEKjdozZCEAoqR3YL7Y5oMmRXsfng1iZCBxqtQDLsvhh6E",
  "key5": "3TUXJnGZNvxzwsT3oHj2vySTZXbDxHocVrHEi5CSpCMAKLsAPyJo84eE929xDVoL6ZBZU9oRevrkLgWS9aTqZrDJ",
  "key6": "3cWVwQ93mCf8Jg7v2zQdjdFXdZvDx6HYkUdiSoJ3goQ1XwRD9kDZisuH5Udk6Sfy64bq6HGhw6N9PyVbAdTuyuLT",
  "key7": "3pCGcJbVtcj3WDTQ4bDKFWJSk26Rds4n9FiRsiSuDYeDX2qEqTzuczXUnoBuGBSoGc2Ngoca1w8PoQLMMpB9tSet",
  "key8": "ExfQCM6fRroJWG3bmrSkjPi6MCPKd4Kif2qDvohorwMRkAGbKjvk5FXoPRgRQZoHxvia9eEd9bNyuteAWyvJuin",
  "key9": "62WLAoMJX9FabGn6J1ZJtNfjioj1ZFMdmobJyxTvE1LFybnQd94StuqkrS54TZJqGWRVJL3njX8JEcensb4KQMTc",
  "key10": "5ouDmQweiuGN81f3dQVduRoifJX8oAq2Eodz9aiXBjUeCwcghnNKoTpekNWKbpUQGeD6cHN4GvPU3X2r2XgwvxWQ",
  "key11": "2orndB44S97fv1KFChoRG42SN2MrWNfc6FQMPuJBGr5MrGvmEJkGM6JqNzamXgkZjNu9Avi9ETiUHnr7619LctbM",
  "key12": "5rdeJYQRwYJsPoeHMGX3UsYmsPQ1aYbtLiZ22223JSc7tgUo2qZNSKfrWh1WAddG6xavVhXdyGpeb1TZbB5DnTHq",
  "key13": "5uu5VubXwqHrSWKe51dnLM1mJwPhtndUXZt7hPJ8Kohqkmp1dVc3Nk89Z2xqQbhh9nvjC8hR7oMZg6XAuD7imTne",
  "key14": "ATLxG26YzP5nchGmGrQ5j7GdhqK9qeqDKspG64yUgXMbZZ9DfHZvNVg48H35YjQi6Vc4R7WRari9zC9G3Nh2MNQ",
  "key15": "4xqpqitYfd38xeCi1t3eqBwNmJgmMqsUX8jeAguxyGPsLHu8bPi4HzaZ5YBCWGvd4DiAheSciinU5UqR3ceUVirH",
  "key16": "4V5tMWwMHJSp5ybrzVMVzrY3oXk7cxeRJWULX9ES6FeUn6zPSSNQiro9sBW2FzRHaNorVtwWxMAW8ABPYyiNA4Yu",
  "key17": "7YN7MqksvLGmaGkemR7dypwgELu4PfD6BbZefaEXhjJ8oGYFjTiaWNw4hqxYatxriejKvjcY1UM9ZAVxwqoptrP",
  "key18": "39VoWjZnACGWTrZAHXxqH5yNuDZP5FH5yLXmQKspkzQXF7qgAs4i9dUgiXptuWFV5HmvQtkrhGusctwReCdbnhzp",
  "key19": "iUDpsZ5zdh7Yh4miybHk7jR3VVTVEqcLGJR8zxEUQvcvfSYFq1BW1npdin7x89dQwCTwAXcJ53J78LbksT8Rm5r",
  "key20": "4Me7G6t9svoVEbWB9U2c7tCR9witoRUHDZkFR4zWwuNa7ekkcyK55pjZ8Bc7xdevSXDm9LzkhprbFHj6B1Rtm7xd",
  "key21": "2BNrZKrNqD1JUavYGgqfVhgBonPXePPnmW49D5qGvUZmJiHG9NjesdvsV4vzsJg6yq3otWDMT2KHYivRJxk6pWm1",
  "key22": "5qNVpt7DdG2Vo383HhoetGRny4KPcbrBoo78KHiedW88PepUy31urjY3n6K3uJTBWytqrcfH8nynyX9ipdQ92it3",
  "key23": "4wALCkanxChj7rvLwLfbfNydrFzZL2QbsojfEU6hGxtPqhhZ8ri1WjgiFZz6TcrohSctBo1ichsJUdjE62mBBqEg",
  "key24": "4qE3idJ8LNC57RTKbPKGuTMJzHzmqx3sdXPGdZkDZn9uaMPwTU6GBpNvrtPFSWPipFV2eTm3w4ECXQoigLdbRKnc",
  "key25": "2GXWSzPh6jNkzNyBFzA5HrkG7sUSfHthFnefd6WYor8BDdC9HhiCr9fuYYiLiRJaWatyV9jUfNQDDYeJeKtpyqvz",
  "key26": "3cLXeyhqp9v2umz8tiN1QFQ9jLVKSsqKjNsiD4d3yzw2Asba3zwQ5owfFiNae5oHpawbV3oTXeXQZmWsEsXMpTMV",
  "key27": "2AnmzAuw2JyT5KKwzK395jx1TGZ1aifWiuBr9KmgVUZk11FVv7oxC9CJb2VqaDDBqSJkg36hqvECZXVBgrGWVdJE",
  "key28": "meVm8E5WHUEC1YjzS8BBPZSzHwxtvViSS1KocoWKtqWCvyQ9Jef3TWHj8Bd1t8ShgfcZ7P9NGLGKpcYmpW569px",
  "key29": "3QZWCY31W5o7CUprRt8BpMFT6RRNFXyPMKMAdqPRHB5aWt6LA9wwbpiS7muN3W9nLSwSESUp4PFko7WgmEvhtdum",
  "key30": "5phybmiswvX3hpv5nov8VxmmzRWRzyB5xjJDbHgVuNDR9xBmb7vFS1fKWpxsG4GbMcn5ibLjG2ZCo1VuRPUREqZP",
  "key31": "2CwKAUJ9tLZNXr5S2wvSvf1KRDTfSpTKjBxPaWpbApLYkyYd88aZEMWKx6dsfMNstTNnemHgxz6ERPfH4Lpci53V",
  "key32": "4nN4LL27oD4kGiQwZDu4xACibhEpEP5jfigNnkCVsS4PrhpKGrnftXkGV2ZBjfXcNsihwyxQK1CxtwzXnc58Q92J",
  "key33": "5eNEz7CPYADijsRGK2XYot9KvHC6yiXva7RFhLgZMNYDWHDDtpQQigXUELxgiNZwb7PHbTo1qBpG7aoCGF97nhVt",
  "key34": "4uyQJzSgtV7g9HfoKyxaLsaUaB6pbLbxtJskjQLbVTeX43YxZ1YenofQtQz8pJCD4jLQKWCfTgUniBfziuSC4KzJ",
  "key35": "23uM5QG7TFTiUNaqRDcUR3FLux4vWZYU6HBydbRkNJCGX4bcHxLcrpbdeghE1XwcKpD9XzBvL67FkKdrtee9zKfg",
  "key36": "4EoLFMQ1JjmZyGheVV68pY5HSWnvnhaYzWusLqXQn1o3Tg8TJScHGZLWdmSrDiMpDA12Yuj5R8ecRTi6BjoAXP8e",
  "key37": "4MGchvfggsstC8GcDhMCpNXVUPw4CTXe86kjGWiZvWNp6UUd9pPBdPepgPcqh9HzmZXDHaBZu7QvU5EhMEWXD8xa",
  "key38": "3Xa38dyJ3Xzt1ZqqmknFrygSfNPhW3kZStGW3Vre9b5LJfrHzUUSfEHhKPrumhe3fsyy5RsSwcBbLMUGAf2bBBLU",
  "key39": "6655nHD7rLHeGpmkCs1aPFTtni5VgfQKbdECFVy3qegAKH8E86eHFW3CDnyxE6Lj7zeYgpaWv42M26W4cMinCZ5g",
  "key40": "25UAxVm5fVAV2K4g9ZfoAUX53faak2WKDtqBJqMwBHaa4UJMnGU6gqsKcTX8tLaHhVcmfUC8FN6VmPgkfpyoBX9C",
  "key41": "63SCMHTvPxBttBvvXuBmXKDzpeexGaqQ5WuJZUAwZFn97mVBNtmUdZDEni7nbPvHtSE1hXXgfaSWVCEpGnGBfQBk",
  "key42": "5qzL8Je9HEtLFagsBf96k6Sm6EaEKCqr6uDVwoDXTmwpZTvmVEhofvSKzv6KEvKiLvwZTCLJ7daDKmbodC5JnDbX"
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
