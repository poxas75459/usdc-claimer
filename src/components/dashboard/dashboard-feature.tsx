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
    "2Z4c9DKE54aZZGK927dzZJFwQ6DXX8tjXtX3mMotKxqhSKg9KFDHpdoqjqQe7h4jew1R2Jf3WfNHiKNWTFrVrRoy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25NUrSg5hxzaD3ZCmEeszDmPHeSGe7jjYEF8e1FoWUJq5QKXcSWNtYVH5dNAS6BHuJWXdaa6XUXhfw7NT4L9nS7Y",
  "key1": "5yxEUEAdg4ygZsM49HNQ8BA9gFp16TpKNY5yNFXiNeNUefCKD5JuppVHmUrhPZ75Zm6sJR3FdCCct2haaGaKeSc4",
  "key2": "i3ndDXywbr8WowzQWgRQUZcPwr8Ne59PKu3eswjzFejsncA4Wotv1t2HktGM95hN7Yfcsc8McLPzaQz5FbAt4vY",
  "key3": "bDDAXbgyn3RcKxvEesLXeXociTELHepZoFryLj2N95PnBkeN3HJ71qzSZ5PYuxnTYpEnF5LUWdE3ZcCbKVjiwL8",
  "key4": "668zDQwuNJdLy8VMberVtBBAuNAhspe9VMoQXcgNa8HQ6rmhnoC8MDf4iFPfgbvd3x1U4XQp55tUGu92CQAT48D6",
  "key5": "3pML7HsizU2xWz9g4z6R1MrTSRDWRwp9nsC2bbzNDBYQ5JKXaAEMqmKG7zGF9mLg3hDaCKaMYVmfduWHSRSX3DZx",
  "key6": "4b1eiMA4jw5npX5fxb8WHTuXr7juMGybhJ9pyC6inTtDCLYN6VWqL7wcuzhrdBpEQK2dBMsC4ZwfdTSz9c6np7TL",
  "key7": "sD1sGL4DoU8UyuMQhDoDBPYauaoNaj4EMBvz2b2qAHH4od1rqMZDFyN3y9Dz8oLvcrce1exwoMVBE3C6WPdoAgG",
  "key8": "2HjnzGGqJ1JsokRVhdecg7ZhwAH1Cqxprawgu2viPxmGmWZ8p1F6NzuHC4eGQVhE8YQqrw5Hr9ru88eQj93grbhW",
  "key9": "xNkXCxtqogvf9mXX16Bqjig6JsU7H7cXDdbPiGmk3rdbcngt9qNmMiTQhrxjPhxoMGforxw75ET2RuS155arjoS",
  "key10": "bNKeGpcedaWkWKqyof9ufeoevpqzW8wxBWowVpkbrF4ZDRP5qLTpbi3PHXKujoqcHfes6KeAke454KrFMeQhtLS",
  "key11": "5p7kGghiVuqXu8fWGKuaSKGnLRb49P1uM7QiSFi2HXj38tipXzr42QwxLNoFJdDhNRZzQJAfwtBU78c9zLCUdVAM",
  "key12": "2vGinbbGE5kAbi7ok4uYkbFzRKKVQNydEejBfqPEoXYJER9zQKW7g3PFu1dY1TqPTR3nnimyUCJofG8mERs5Q6eU",
  "key13": "5NfFWAS3uKDGiSGamjbRxQt8xVQiUPNBTG4bU3mTZX1VmtguQpwezHjQhWKTjbioZVVA3nEcgRBCtLsB6dJ3VxMY",
  "key14": "3k9hKLyzY8dfLJJh5FaoLPRcRnVKmXuxUegnddfPkYhg5xGkAoGgvQ1CpXUfh8SNwYaMPZ18fqa2AqhXF5WkJ3Ym",
  "key15": "2vb9FKZkwg6z4xApZTrCtmq4FBHL4rGkDzp1hsh6wycFop6bU9DrxtvNhzBpdS7o5mg7JLbXy9k8RR8C9R9MBYRW",
  "key16": "3UxSnCT7P7FSaKUnesHFrvLeKRa76eRcHkfVLakas7GZAjCAFPyYV1eEHwS9YeDRvevjJWkmQKBX8ocB1XNTKP6a",
  "key17": "5gon1qA5j5DsTFb2vuzG3PkuJTfAfwLsJmwtswcD2mPUhSCeq1uTNtRau9pAPL8kMMPagtMpkRkTXuVoSdGutAhj",
  "key18": "3t9AuGQr5y9sQVPbpE9pZCvV81REVBP5kH2DNu87MyFaevMxbC6DK5w5H4rfoKxeaqYWCem3LHUdQnFyvyvsi6nx",
  "key19": "Hh54XkmT8N3JtkvDzhJ9JCJQf29MQ96CLectipwqsNxPGJfUPa97qaTgS4SxPh4yYhAvqr3EcCg26roropXqEfp",
  "key20": "g78zPmqPPiCDP3xMGaHc5URtLsohqgmVjhPD9xtXkfu1nvWD9p8xHJgspZMCFXL2WcuAZvjzAMa5QiGwQUBM9dk",
  "key21": "29ra75NgPXGqdvxsZzpBGrVkJxpCdpd5moiPK2WdKFJVJhKGb6Yy1ABJJAc5JThSLoxyU6cs2xZLZwDcjNEYKFp6",
  "key22": "LENMbb6yY7fdM8t2oFEKHmdj8yHj5eosXeX6x4fTNzrX4j2Rr5vXpxYmgeRjBfnkBLZx3WnY37n6e5V2tzWbc2a",
  "key23": "5VLcgvNeJ13ykJu5NBc7e8hEEbpZstfKfLQ6Vam4kRAr58CNJZ896qMtWzZcRSb9R8Cax2skdudvQ1pdkrGCAmei",
  "key24": "4q7XydFNs85mEXjRTeyt83vkXM2xqHshcgdBXpERTCsgG3uJxSY4CHkEsBiJUbmmWApDtH8sf7e9m3AwdDu27MTA",
  "key25": "2jmQnt8czD9KmdpZLJbgTFT5wmUEDiTGfjdNZnNEkDk7mcWvmPWPaW5diiRPnJqMAaQWtHgPjdYSf69sdozCmg8X",
  "key26": "5w9we3JXdKZ2Z6PDo9Y9eSVmF7jgyNeUCFpDeQ2nxFaNsSsZ3FFK9KNEkRiynU9Q2eq9bwDh4hbZbX4aH2hcJkbT",
  "key27": "2XrtPTEdVoZu9C986zTv5qUbfh5eVexpbXiAt8HbELeDtoSjMbszAdERrLRTdGTPnoym2e5vwJtm8XKgxBuo5fBe",
  "key28": "3jXi78tHSoov2y6fN64ZpkyWeAbLotf83hh2yHVrboiCUf2wfSQkyrmpFcmqq18bGsFn3YJvtoJLTeVfL8uW41xe",
  "key29": "gTAyw8q6wYbCkZWDPayywn7RDo1ZdqKFXZJTEAP5URVs7Dt9n6CRU1frD2SfjPkkqEtEao6TJv3HRCxnmQqJQMd",
  "key30": "QY5JeQsUYWp2CnFXvgM2fnRiBnPE4EeUPtjucF2ehPXWdEVsbtrgdBxpTdvjHZGkgRyBatNxseV2DSRu2Zh8gmp"
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
