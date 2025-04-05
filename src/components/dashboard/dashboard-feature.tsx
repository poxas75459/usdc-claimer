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
    "624DQ137mQ2bLmg3LaWByeC1jLA1GMHNRdkYcGKX4GP1fakjThWezkyst249fwqBegwEGVcTWh4kPhgtro47QwiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zgJ4LCvYYKpmyCGWiNHQgNA9SWsSnRCmQQshMbMuDpxzVZrJioK7BjEpqNcta1YRjndF2zKSSY6z5NvPXEXf8DF",
  "key1": "22gh5cgWQEQhisZM2mt472EcKpvQH5rEmjHmtAQugo64wJ7D4KTTbLHMboFNXN9uhqfMKY4mQhVJBs4u38ZMXWWu",
  "key2": "2P2sctVRXCWw1vxJLzeBbeMyfg1KEYYQoWxdFboFLQru6ZCY8XRXgdGouSJhhUh6ogkS7Wi97GGvouzHAWodPWi8",
  "key3": "3nGtYxhJJ5YzZEvneVeHAMTWfwANov1bjKNwndfyYdWWepTZBYr5itd4i3GhiEiw7kbfRGE51MyzNBFXmxA82TLe",
  "key4": "3uW1ymQ5HsNPxd94EqMEhpynTaCLLcw6ZgyP5fqYM2jBKXHknV8Vg1zab1aZAxUZ2GQQLoKSqPhn2esDpronqC7x",
  "key5": "5HwBZa8foADgn27u7hMDfMvn5xvo5JVyf8RKCnFm3pUimkb8zXEDuTLTQTQiUXb8Gu23QiZF48JbQsQyvfY6Tbke",
  "key6": "5HtRuBxABGjhfcJ9D62ij1ghQCCSSPSjRrQuZD9CRgBPqMTxbjc8r6scSMvjycznAcXPU4YcgwSAiWcsaW8mNgWJ",
  "key7": "5xXfd2QR9kfMacUL8opb57RYrcm4Dqd789tbQQsuAXUGyUuzrrkZgEparRZgb5xNTFp3JcbNCBBtJk8jMkXte9Cw",
  "key8": "46ThHyyuQ56i1ewkFDuNXguyHWd99ywjDv3atXT3g27hgD9KLz74wZBUYoXGwxPxFS5MNgMqkbcRuKCPdCwpLgWT",
  "key9": "2jDkD3kr13euAsUzLJ81Dzh1NNHLekVz49A5bYFgvJCh72eW6mC6whxHHpFxyJo8bmwHqx6hAGLTjdthtRQXZf4s",
  "key10": "in8538eH82DLMmiTuTwyLnAqXAXCPLyH3RgKFgzahyWbWKzkbqcruM9Kzgap7Y6b8RM1ntzUcQjMjUaJCAKjibM",
  "key11": "G23suGJJXz42HQFibEwwS2Y1acyi7vQPqEDw1tdhWcXsrPpCeYbEQJMo36Gx6c6A27fuUMrsT5d7N5VkKMGq1vv",
  "key12": "2pMZZsRDBTaydcF68d2BZeSjXjE8sNwXSwwzKTRfEeDbmN8HvSMLLW4XeDx3bt7rsTt9sJCHcFkszoY3qU41jvP6",
  "key13": "2ebQZ8cz5EwWYyH7bqfJEU5anR3GmvEvB9nutcBaWDTUkAXmt1YWFj6XNAsEpu9oYihBMGj5152bZuDcPLw6ihH5",
  "key14": "2u3JNpG52PzWyUWYskkrspxE7FJkkWtkxk82QaG21rkcEeEaEHA87NhPEnoqS2ZAS6S9gLGt7QZwzRnZzGdbr5pd",
  "key15": "tkf1T1W46cP34dEAmrNHXyRkX3kv9tm64B82mmDfzeLSN24C6T6xYKWW2gQXgBuvR9f3jcWuD9P6cPaVtdeb34M",
  "key16": "2LZqtw9nby1eG2MVevGkw4xmRkMxt5VhE2rnnBGTyuHU7FAUj7rTMYKYDdBWNXxmCrCuLVsxR5VRyGHEVAtuvYVU",
  "key17": "5FCGWhijV98Lniy7hcD4j4B6UvEAVtsTbVZ8DD1XAiqy2uvrq5qdrUa4xqP3N7tKhR24deLrADPunyAQTbGD2yPV",
  "key18": "5HTHE5ipDXigiXp2guBcwfdAa7RTBb1TzDHHMoDp3jiL5eSicxoDVvBa3NsVU4PYh1M8M4yp3hFED5WxBXGkUCfc",
  "key19": "3T65wGicE8qEnj5JBkWwnu9iWnieAgFCowhwz6iKXQ5T7GqTxtTkq8uFNjUoGzYEad76cqs5gXT8PHGqAFqSsDAn",
  "key20": "5GQbGAFjCLhwXK6VGBA4Ko1kV8swthEpZ84T8MY8tP99pDDajD7HcAGtqYbAGBLeRXC4XLuaXJybau9tug2yby7X",
  "key21": "bqsf4zFQppdvfH6MB41E3YwXRbmsrVVa2dRaKyz6q3SDVkPmAVDkijTjVoRr6F4c9kgEB56hCgAfpNh9k2kVerx",
  "key22": "5EbV4bHp24n5L12jAUihV72JpRc7U2X9QEGKJxT6GWDzEZ42ZEMADF3W5sa8Nn7Un1hmCEDoEyDJ2sxXZPHDS48f",
  "key23": "JTNZ2vrZJ5qLkAQ46E2bVMAqeQ62jpYgDgH6r2xoKVp5TJbrettoFKBju8D4U1ftQgCDYfDmtw2SrVTaRqhWEkH",
  "key24": "3SvWFQVV6sTxEE5VEqTRAn7okXTdAE6RvEf5LscEz4BF9BSkh9zEPLVVYih4MmRKB6vYyNghtcruzSDddBRFYKnj",
  "key25": "58YWxrmZULim3T2fQMK6pTdYaZYzCwmkc68yu4QBKK5pjBvLppTTeFWxpKkECTTNGQYo5VrzdoM8pj5kLBsctDBV",
  "key26": "ghsDcTM4t7Dv7cMosbjcZkySExuDEa3wiykfcNNnpr92fyHypFiGACTAL1n2DGvpcjBWekiJeET9Wv5dLeg5DKG",
  "key27": "3LJkNSmmSECoYYrZ2m9xxsGe9toQCe5ERunWmKW8UHKUL6n58e7NhNrsWEMgKqEWsX43HCJxAs2DdrPbHQKjPDpV",
  "key28": "5mShxkVwZ2PW9T6RtF1TFksYH1tNAQzMk269nUeUJhBhNdEefnLc7t7zevz3EPAJQkLZY4UzSU314UkxQQtQJQap",
  "key29": "67GkQaFYJQZ46KrRLyjA7GRCLJxhpKd1J4rBkzaBae2P6mYz4n45Uoqp6BMp1VzmU3PbTM1dBKBPMRAW6mJeou7u",
  "key30": "2CRwgSLWXV74vrPdtJXqFmifTBCAjv8o8LTjMSnXpdKYRdGq7M2ggZAQioB11KnCj8CgWKmeYsGBQmHyUMBsADFL",
  "key31": "2QuecwKc6z6cjqqqkyEpPSTVnzBujFxv1hmkWMZvUovYfJKBTNiTQ3NMeN6viKRrSYVztvF7pXn3pKaWHNbeHdGs"
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
