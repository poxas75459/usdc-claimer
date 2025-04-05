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
    "53uytyFCmg4E24cyWpBzQbxJYCJ8Mghj5KipjTmp9Ew2WWufgtPG4RbGL9zyGcxcvHUmMvWQJh74J6VY7WszMkNH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iXxcbZBy75ovtbGcr4SCXELpFvqev2x9MTGX22Q6LqGk2uZQTz146e6mTJ3Cb1xXG4Yp8JRQRPxPJBBAAg6bchR",
  "key1": "3n8dPtiMRVJWkD8mQxC5qLC8z4iYH76xT3koArWrPotvxPk75cDenTzzLJGqc1Wn1kFnRv4mPFCPr9h9UfFSZ1WT",
  "key2": "2QYQpTJs1w8Zw499j61wrm6Fut6RcD4HPkfjVVN2BjvQvM1FBbkHdp44cNk68EzGAb253GN7bryTST3XMwFnrrhc",
  "key3": "3Yv6jojvMjPVx8eupJMAMMZrPpb7xByrsYGsMcWXPdzmoZiMTDKyupg1tBcFNX9hZjqDi8zEcTaE9sjVYE6KDLd8",
  "key4": "49WQLZcSGsLwEsinUZyz7ZsykFg9uE5eJoHPiYhCGzGDNiZbSB5mqJ7mMdVdfPP8ZVVhjijRzSwn3wsb1xENvgMq",
  "key5": "55Bn13oo2RgesJwVD3ui5ynEag5pi4Q4uWcRKZYnwoRg8qrKswvA9eyEiapVCHr4vgZFBQQutRUzjnZoL5KQ8NNj",
  "key6": "3Xhk7ULcCvctJg3UNtT4637Cx2GgYerJ3eEEusxJhbmioday8SDYUgboYFqoGQKtxWbnssP2Emf4nVgpv8m59kyN",
  "key7": "5UYcxX9JHiNwhpqVJDadmHeq1skos3V3TRdXewasv2NQoznHb6hpV2cfSLKmtojPrAwNbrvSzzV9qk7NVtLUai6r",
  "key8": "3mnfBfjApSi6dLseSpJsFf85MS6YKS9uWrm5s7BCwUcj3ri5bUMPdHvB4178BFnmFntoow2pHCgBZroBJRM2SvY8",
  "key9": "bKgPvmgun5mnhCtVYcaqhaYpaDUVCyHdkLQd1um481B5mksVzGgu79Mun6bdooangWtvfFbAewtznbnVFj6PTAf",
  "key10": "4h2MYLNinCafvT9YCeNv54GAggYrut59AEvQUv92tebk3sR6vtruia1P4qDgr8Kgp1Fv8dcJbZkSXeATcR2TBoBM",
  "key11": "3nzEQHNTeedA4ywtqgcYqq3aMTtS9wUeQm8L2cTJDuoKRVLXKPVo98Hpt6Eg4E7ovYeWrVws29abpkdgKsptUMPL",
  "key12": "26TgrUWiYP8YZJ5bfV5w4TH8bwjZJSKGnW1UyrLw6mtm846wKeg9nXqV6RTr9dBQ7DdE9zqxtvvUDaMhvoXhNnU9",
  "key13": "2KGpknZ8ALKMxMwN6P2SWKeXPxV9kd6Af2xtwT49BndaMKTjfwPcZ1CShD8UYuBcupcY3hhazP3sAu9pHmXvd5oo",
  "key14": "3MJyU7UfTJDcSSpW8V7NVsvjhb2Jd8SbkumGcEnUHVLDcAnqABJHLFsu22B22JURXfeAj6a5jgQp6cHteW8UCtJb",
  "key15": "5sreHuEMNqsehSj5CzWyDDAyq5Vzcesf5CdbSgLBLm75tMFnWy4YizQSZFAWLjGfTCVkGroG9cPtgmca8Hr3Z6eL",
  "key16": "5xVMuPUfTEXHJ6ZR6jEbWd4E62KvwZ17fpySASasTgfqY3GEHxgvszVqzKzcmov2aB25fRxHbyf1SVFnEp7e1jrv",
  "key17": "4rBayjhNVpMayDQno6jo9sxb9gMHB4Xo2MYrbBhmx9q9vu21FURV9w5gQsJjwn5wzHwCa3MgTcbQ2aFAuCN85Npq",
  "key18": "4QzPGNZcmZGJ2U9SqqCdWVnJy2j1tT2mLR9N8bzXh36yY6XMSaxRZ4VYNdxos1rtEc8i6LMF8nU9vCmJL37yxuEU",
  "key19": "5mSy6swsTDaU6h2FTof5LDQxYrU81btLYP2nRU9QQQCDjUBX4GEP4aQ6nKTSRDfQ7PSJfgGeRQyM2dJm4VV6aU1A",
  "key20": "27vxeqES9MywVeK8mZMitWdchKTvYXgGYQJNFhPAraSjvTKfaKVN6pgFgkdY5w9ktHrYdYuj8Gzs4EuGM64V8AZ2",
  "key21": "5yt4QskmeGeeqrUquGHAiXqtKHZKENfwXo2SKb4T1fYrtzdB4BZwEAm2icjZNNco7YxgaLeKYfWom5qVbWy4ncKF",
  "key22": "HgMSKRcC81DiB65CTWTTXKMWocNdH6dx7ts4usGnYrm3syYPinAQUECTnruNtxDEedosfcLnwpoG8eyDWx4ahqj",
  "key23": "5GduRjhKFK7cf8nXrxQUZgS3C4h9Yc421id1ektCnoF8hzVSicf35qh44QFMKMxmRCrTdPGVbH6ic36AmTo9EbTK",
  "key24": "3EzrNgDn6H5og36mdjZk5PWz12hjfhaDWzqjvP4gYK13evrZdYvsypg9TgydgNKjeToidQMH5hWSxx9iw8kLWa45",
  "key25": "5jGdzmbqQQBAkZphfunH5eymFkqXYPDdGwc3PGSm2wdg7ZHgP9ZEi8o1wyFt7puZsr8gByGNB8PZtkHMxZCfU62C",
  "key26": "56eMbLagCfLB17vJBhv7MZtXqS7aJfZPUfaurPwnpd34CgB5F7tErMK5sH7EcdofageKadQK5tAVJtPnkkdDs1Zx",
  "key27": "3ZawxVnFcBq5EqcCbFtJgDEd9TPWWPEGtqWQHmLZkx45xXsX8MsGAVraPNdXT1Dcq6EwYUSkM19gFkAsPc5erZZ2"
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
