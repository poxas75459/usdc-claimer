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
    "2rEcccryKxHheYTW4CrepCFS9SRU4pq3nkq5qY8w2LtwYT2bKLntWa5mt6wyxFmAKCV8s67PyZ5VRZBUVHcmYHAb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qqrerGpgFnHCx2kDomdp7VjtKjYZY1XgwsaLtEGHH5mAYPPZcrNx1QnH4ahq7Zeu4JQdsqUWYrhZEAP8GGvbJC5",
  "key1": "4xGhJubY6sW288Dn79A3Fh9WVQ47zYotRZAewNdLZNF5ApXfBWsYv1G2oNiZdiS7Ma73SY95VMyyry2cGU4PcxEe",
  "key2": "3DMkE5X4q8Dv7b9yZc1EisDVoiCY4SKvF6fcgNTDK9AKJ674jCzkHWeNNiG5yVbLKFGBiUuEF9gFZRwTiv35mHdY",
  "key3": "2uCUmZCHsLnPXvperZzQP3FGSGFty6dgPz39PfDdj5SU5NRZAFhb8j2U6TXDKmwUepJQhKwDC4qvchtRnPGZTiB9",
  "key4": "2HouSp1PjEs9goQCdAUx34ouigojSmNgd5pxuvWG8CdCnYdMRK6G9yYDgW7YaLYX6B8LN2hgjfydRUE51AVxUfw2",
  "key5": "5ZGFfacP6K94yKz5ER2ovurEVT2PK8HPP27BYBmwmM2xfb3X72hGAmdr2uESuVGD89S3iZR6CioHaCWN7JXa7gSX",
  "key6": "2ifrcRpJDg6XAfMeYueujoC36z2zQ7Yu2pbm5vh9PUmjuvFaMRpsJeWshmzvBkDkmGpC38xaxQqkMUwQbTdkS2Zm",
  "key7": "36DbgVSpb17m1nzV4HZdu9iuHgdaaXyKtAQYHydWpyPoJDMwDPChFX6Y9vG9Lq8KSkg7HdDKwUyBPhNTeHup4q6L",
  "key8": "5Pt6Je1cJF3gLCV19CAAzeZxMDwo898LM12ThWbNDYsLHAJVJTULWrwvwTe7HpGpeTsmLRCkSdknTok73NuNEdEX",
  "key9": "4XYB4bvQ6vWd4yMJM2mfhw5PvzZqBzT9GBcDqBPK2ZR4chFSLpo6tjxh6rujaeFQwAqu3pegjTELckLhryf5qZ6e",
  "key10": "4byJN46C9cXEVHidEaFrvipFDnSJXarkDwbrbV1NHwiT8iCbVWnnTQd6qWZsWHuaHSma7kApXFfg7UMtWmb97Lvk",
  "key11": "612xW5emfpgsfupavRzD3iHSrJuAVBVt7kJQZ47RQu6xR682pTCzfHPoTESxoQURjvxppoRWTGoNradmMKHDyZSY",
  "key12": "5zRZaGwc8uCdQrg9W1FwjeiC1GGgV9kwNivkyo268QWxmQPB6mpELR7EpsYvzTSy5wKWajT8qL7Js8fexPGmXAmc",
  "key13": "4eoKdnCpx9yxwr8C7MY3kc58ttZ6u8nD6qLBZAdHkSeFatGu2GeaUWWM5iL2DM9npfoUYP6YrjFFUtY8rBBfPhwp",
  "key14": "4PAANm5EhoaJeqzmfzce8CHu1e5VyW9ZmN7tpwjGa4npJ9R2GZx6pDKqVztimVcGSNasnPww75DkDQdaUsWiqG7H",
  "key15": "2dpp9fFJ3TnzpgQ8PrGp6hqBGsoPCnenudP71QeQvA9jr2AZmz4g9BoLrhockDisiFwVBvw9jTKd1Y1Sq1cqj2kF",
  "key16": "4JyjRshuVYc2jy4PaCeirxdPrysWjNJEh47e6YGKxPV1TcFePCcFzf2bStow3jXKmVV1KASUSGLaCasVU9SnKCYG",
  "key17": "5XTiYRg5VUQmDGjuo8RZmqy25tXvsJ8uiLCfgDfA4LJurXsE7JYZLG59u5dkh3sbrEyaB235GpzNvJen6EmgrH3B",
  "key18": "56SjfbyzZ1fz6QezUvmvwGdMNoUegqBSohUDaR5JbiThZeZ63e81CneMYABg1Ri9g2HyRKxNZBQ6gUcJT3NLYzHx",
  "key19": "61YVS9mhux9cWHwnEG7SBczxxbuDnHkSMEqkAWXn8T6Ti9NBxZCkuRTvokftnUYEmLQJrLvRk5BHvv7PEn6geaEx",
  "key20": "4X6Kn2cKHH8jmZ75gLFFY682AogxBWLTMAwsN1VXQMnaGDBGFNNVD95wukD2SL7PzaUtW3xZM3pQc9wf8iWVqNGo",
  "key21": "35UuFXDphd2D7Gz8RCNy4uqGWMgunJFmPkUsgaM3w3pYJMTEBPGRaNiba9t3G39mAXotQSt7Juyq15gw4YBuuUCH",
  "key22": "2hZV7qXyRrXfZ1uh6gi98vV3YY4SdHLggmPDRNdmGc7MrHwya6RTA61oDMRUJjRLi3vUoiTQd3DpRSYW5XBsnfWh",
  "key23": "5Z3hNVwBhVmauCzctguWJBYWddacfF8dLEE19CFkzMMqx4mysqSCpRdw9yLQJw2uS64i87kR6zFByiBRA7MovcQG",
  "key24": "5wB35bg1Tw7iyJXpzduL9PUACTdkjLeUGSwyQnHAuJHfXCKkwGTqq6hzF5xR4Kas9xWHy2A9P8dzUN6FXiVVf8T8",
  "key25": "2dKSAmKszt7cCvWZ77mDtqyTn6C6pjJyf6fGRoQPcGpQA5wYSpm8Nbi3Wz3pnnAwc1kgQtqWzW1Q488G2DekqgnX",
  "key26": "2BzWpUtLJc6na8aT9JTCyypbynDzmt36xPAgtpUpvr2kUNvEPiE9UWCQfr8YC7QKWfEkpz2wKuyyu5VCVoRKjpDq",
  "key27": "4BJnZd1TySyBspsRGDPWo79ULE8LxX6dPcrx77j1xmuNCQiLwWybYm6tPAh2bLa6wL81ToBXraKpwzFCpofD1fRt",
  "key28": "dtA75sCTsrHRPp7QbtTQ9ydgzyRhf2gayAFENyrQwq8v1n18oRdetoMZuwSFMV8T9Q1RZqmGZ1i8ZAQn9aTTxGY",
  "key29": "5vhbLw73VeBRXFi6RnuUv7CUtvjYRbT6DrsTaiTaa1HgUdxkoC1KxSqPW2sasWjPifqRhXxLVh9np8H41mCaJfXv"
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
