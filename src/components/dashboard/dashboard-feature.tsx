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
    "5CeqcHQLxty7CALpsC5KxMMJkA8SYd1CaLxCyXFrpoLnewg52umnmit34zz6uu6edkTqbdbrwdyESmqKisRMat7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sk7jTqgYKgB7tonuj9QBgERFEzzQnPKNHu3GMh3M4P67xYc2XszosXfM2Nf1aA3qoxVCVinqrAHo1QayMkuqnuq",
  "key1": "3c4vETRFEohLDTNQckLEdF2J8aaHpQeDLUMRBupqnuaDMHdZDkzuXuxQYUA8r5DSrqq25cVCGVr5c2fmJtwrob6Y",
  "key2": "3apQV7pQQhS8oi2zcyCWhEoEFVdDN5YkyituF4PFhTftdoRh1kq8dhSpyt7MEcGu9DdsjazRcXigV25QGG7XjSek",
  "key3": "4eCwebLt9NJ7H4Rn9sgALonCt577qeJJM95vZp7UJJtGW1Ldq7cKSPHWWDY5Wc6afbaWQqnDULyPzcYXyPu2f2Df",
  "key4": "63THzxcpWjh9P3NDMmtNKRC1RTm28Pz3BJ4T2sMV1SVTFD6ABShagTyHhKaHQ5cTJwwc8Lryu97MGNnWBUcwz88D",
  "key5": "5pBzvEcBikU9z6NGVW1BZMoefgirvLc4vpjDMRQGrtAhoY7YsXrvXE6ZcyS2qCAAtbGqCWxfJrHcGskSMAkUi5Hv",
  "key6": "2haqoVR3nmM8n8kE7SLxf2j7H9VDG8qDeKWJjDDcJ7nZEjcEooHm21p11jLvMPBofVVdMRR3nHfNBfLJQAeFKpYD",
  "key7": "5hs19aV9fJfLKS5iza3Be7y5JNCxxV7uq6b9AvhjxLgxNxtqvGPi8p7NtuDqoTVvASXrrRYdLz4Pm6TqUhfjZrG9",
  "key8": "2YrbytUWnVbryYNPa2pE4YM6b6j54FW98wMmEzHfrAPkDKVFnS9NxKnQWjnBte6RtysUuWAkua1EsN2M5qTu4yoE",
  "key9": "HA3m2vcnTQrX6WQEYPARat5rbajJjdLg2bJuUpLQCwahLaZaCXiG6L8wPrSvoLHCR1yWYESNuUjqpvg5eW9ZhqS",
  "key10": "5ZVN9dxPYRhhHRWjH4QJ3sgD4JE7y6x9iyb5iZxz2QfwrmAZyZKqcKuG6Vjk6NbhMFATVGAr8NmSVion8UXKjChj",
  "key11": "3vUPaoDwk1xyMWo6rMUcZL7TxHgGoRLwFVfkgnpWk3Dwj3VY5vdgqNqYXRL3LnXdhEC1Vwb3Brhc95FhMuYZgDUj",
  "key12": "37Yqw7c2wKNNJmCjR3nFG3sBhqZg83QXjZej4kDg5H4jGdZNutAu6ijefKxLEg4TEPDdaaZP287x1yBif6aekTMz",
  "key13": "5gstMVYiUkdvr4FQDtNsCzTjap366HBnxmSGskJ8dXNqkdhFeeNX47TLm2Fo8eGHcEBJ6sgi8jEa4G9ZqdiS38tC",
  "key14": "2zj5QW7EAbv4k7ZHSZNAPSQ5tsLn28TqDgVBLL8Q6Q7o6DeJDfDJ5xhZCsFyH6jEw3PXpVwG49KEGCjkXdifknWf",
  "key15": "5ZjCvEz1Qsp46xNCTkKFSroyyTgQ3dwRtkJKtPFPcaMqxZzVwbqWNYbXRm8Ah5z6HTrkU5zRCFHGfHviAoegQr5R",
  "key16": "3bD6aGzSRZL5WZmbob3bdn9YHqCdYEkxgWAWXhSYzpUFyaAdUyb4kUzoRTKoexpyL2r7oSG6acjMtUEKyMqWAfy5",
  "key17": "neokKUefo6m6YMRbYxFiBBBynDUiuBGmFxKbdkqUFWnjjwY7492DrYKwLoj5XyxVfZVSKDVy7GZF8fSyBbkCHwx",
  "key18": "26UXrefEiXoerhjUR1bxx3Bh5M8VLbfyhD4T4boFfjw4ysgwPTUHWN8Ni6VrBLHopDx8VosdDS8MES3tQuYPGbh7",
  "key19": "5iFomooeAhEhGJMi5vQs7XZKKP5rvMfGuVGwFJx85WDvfKmgFpHhg38KnmhRrszSn5CakBNVcwTfdjFsFB9cstY1",
  "key20": "bjx2FTH1miV5bxSHKUmL7GzvEa9sX1hRdR17v2PUGkpNvaigSjBSq81DnkfL9xJ7GdsVU1KkMEzfS4T3qZZATHW",
  "key21": "2Bj1akeUfjf9wcgTmrFqt1rEALwoEQrsa2Dqdhscvm2W4TmsrshoGJij9zoxqLNaQm9GDfAT3Uob9J7Q6dnAcCPB",
  "key22": "3QfgU5ydUXwd1K9b6mQxtkmdQy63ZjbwWFjYFWhV1WMqtR6HruhViunJ7w2UKRuM1XGBVi2TpFnsPNCEBYPvScAC",
  "key23": "5rNSSVpqjvFxS8NRbTCymA1XMdRDkv5mDQPqnZFHRJT48Ls5UFHTkmdcbNequeXEeA8p6Yk4VhFwMqxPKGWrZWDP",
  "key24": "ySgZiRcNYpo4ujpMtcMqiiXyRTEkZGn3wY6FLMLzGN4rMat18Pze8DzAtZxMR5GF3inqNJe61gy8HpdX8Htz8X3",
  "key25": "4bLPpcnzUgo32nMcxGDhsQTvmJtTVJheyRpk6Hd2dbT9BP5MFb6hTEA9gsgVJPHy1QVcQvfT8XUWaGfcGNhahkgK",
  "key26": "2KQwVLtwwLMuyV89TAWEze169rMLKVt2R37r7fCyeaKTNFX3uuw9bG9v7AfNN6MXr4bKj2P6Mq2ppLgkydukqnhz",
  "key27": "2bhdibqevxtbqtmo46asZ9ScWGdk5ckbsuZ2Qo5Z9wYU1nzwkoQUrKsguVDZQijnd8ReDJuUeAnqcwEJGZPgeJ9W",
  "key28": "wC1zio6vKD2Kv2737bKvSqrWxpZi439SFyDnZRvYVCfeegvGFgJAv2odYv4pRYCtSXkbLZvny6WEkSyFkLFR4po",
  "key29": "64xNrwYAXWCRib6wDvBXxxKGTfqSBpxEFzGwtiPxFUDhuEaDq4YKkFJTQWs9oRs9m3f7bpg5qyEGuFJMzzHf815L",
  "key30": "JUifjy3QdijpFiCLgrUKoqTFNNVoeyjq8WJoiuFfoMrUDxvzqEw4go9gemRjVEXvcReTESjAdbmVV6DQg9dyThV",
  "key31": "2mAdQbsjGsh1Xeoh1nsqJ2tmKfD8WWEomjfK4CLpmswtQ9hMaYCtrAYx2Qk5cpSztjoR1ria5XUif15VRDhrB4Ws",
  "key32": "54QhVmSuE6jS41pB4Lf9Yct9ggw2ueQL6iS5NwaDqiVvF3Q7ity981Kw24NChDMrG8GUmBoxjze3LYGRB9Ds6KcY",
  "key33": "4Noyu2M5xHhF1Z9SftAZEXm9jm1MPCG4uF9poPH33wWqRhzNNefnGkxwqz2MsJ4vFEBNH8tLgAkmNkBXw6KHnjDf",
  "key34": "2dgHTSjwuCtxN2jNZa9BdY2BWtuDKESfDe3cB5hnQJG1L5XGkB9XHPbT6ssBPT8V3AM1hCAfSXAMBWVUTeRDyNJu",
  "key35": "4AZ1jgASRJfDfvZGFvR8J4BVTicy5T2ebWL5U2gd89dPzkRy6arPSoGHC2bdBdAiGC9MWZabEAtYRoLzmoDnAdxo",
  "key36": "2cdwvLWcibdEqiVhUDEDqyfGoumL8WZTurkgUn17LtYUEf5UsxWqpp4C21RX87P3CtFZn3kfESDttrVc843mSsGE",
  "key37": "2VK2jCLQLKWh8iMyYwzyWxoAy19QGADZ8whQiNuXtjiTz675SiujoxwWAjSGmwmrhJCXobn3ZwkNUazNtmr1M4zU",
  "key38": "dKMdvjLeANXk8w7Bj562it5iTdgyo86JCQPEnrnzH7Y4WEtQV1AU4SAV6yuNUvGMTXjMWqUZhMV7Es33bK8kQYF"
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
