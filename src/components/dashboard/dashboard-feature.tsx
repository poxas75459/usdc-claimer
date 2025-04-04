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
    "4iENecVgcXkdNNxb2z6XNPXfoJ9RYKRjLFbPbUF8Vu5XcTTLoJrUCa3QmkGh4V1fkcsUAai6iMjqAhQsWs4woqXu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9ugYRkfSzuHJ1QBnWE9Jsqwz3rCTPJS8fWnWMqUTfQ66aedgn6ctjVQirbpWdxKnMGbWsvhWpmZNZqnuBw1pXYU",
  "key1": "5EYRr1Z62PB4AT7Wnnyj1irFpUY3yujZEh4RmKAwiZC5qeDHC3HPnx7QcTjwZm7oxNkFTHstusRRyZwfZmg763E2",
  "key2": "3hQJp67RRCY6yajJrZY1Y8xw7ELgkLhh8EvxAzw6iQYcWVAgjxXa3joeErc9ssZWBJHXagD5JyjD3aR2UGbHBT1M",
  "key3": "4YT1Ks8U1HFruedTHdiwbgjyFDLZnZ8gRvBaxr9qDa5hbWhcwFpMZk3uDpogJ8iUCC5URvu2QUNx1AFqGgGCJkXz",
  "key4": "4Mw2TTJiQvmHcDhgoGmXh4XoW9rjqGsRYbD3noCRTH8wrstTHUXTsWR3Y8cDDsTXEecgGViYBrZy3ALmPBVSxvH",
  "key5": "izxcQPqr6DCeCvmVQbSguCyNrZSvGhQkU5LRMVddcynSZtbcDVsrjq3NLge2UDhzPWHbbU7GqW1uU74AKZQUD6e",
  "key6": "2DQgyxKdQTB3oWm96meGRg3R9kaG5FsVH9GJhGFMYyZLUZ9zVMtZ2uGBtSuiYRNskmtk9BHkCeabX2zu3gyUo5tj",
  "key7": "PBFHDVLyhYsMzVyTtV8RPWukw5vXGBvQu7Z6qHpLtrTbw6NCrfvaewXR16gan6tjXQSnpTqjvB5LGRCpjkXc1o3",
  "key8": "3Ux7QGdCdnq5TfvD1RcdQRLucRNbFjP53tQLbzyQqByBYPnU33BuBF5tioS3jTXJLnZuwwkTD3Sk99TrXFDKadV2",
  "key9": "3q9WBTnqCwNQmE921aFvYoHJGN2kKrvxp3h3pvmZQiuoKegfnEBoE9u1BVZQNtPFYoMozDEMeJSz7h9qybvjnLyr",
  "key10": "5gRpwhuM3Jjx2cCLhAs2D6co4fXgGEyfrA3D6pwdbXPPq4ipoagwV2Q6wQ1MVEixDo2vWYeQjRKwazAVzGnveAdE",
  "key11": "mSuSRW8yskTbUPSx1fPRsT1u6o7QYiMC8f2HtmtzFndQ4z9B1X87p5Lad68oTj6Be6f27W1wVUxfoF6hiXU74SL",
  "key12": "3iX7RFrG16dLuUTxENntSN9R753SooCKPT3mD8V2gnRaPGaFA1MaxXLKeimBuXXiZTjsAuqXFbTzkrpAZ6oko8FG",
  "key13": "31neEmJ7sQNnWd9w3URbAdNtz9nV1dmQM7tseQyAiU9MA5LrD7f4yEbYahqpXefmfRr6P9cPnn6qQeRLYUdnA6Ai",
  "key14": "4CQuPDAGVo7Y48wDLukSzmMVdxpojKHHx4cTXf4k5mEdqxx9EYY1zxu9rY4XM8MemK2ugvmrHBLLzSMiqTVTu7bd",
  "key15": "3kS4LWD7ivUFeMNL3qPkoW31Q4Se6a3drGXecHwRrHXP7qaNutuXo1MKX9M76m9RWaDkCD4b2rNsJgbQ8FD2rNXX",
  "key16": "2hK9wAXesdw1b9tJVJb43w5dSgMyuzCfo57hEPULddC4EaLwmMribZUbdDsbFHUHUnMx77MTYyLwx9uH8g7qMvRH",
  "key17": "23tUHDnk1ZArrwiFrztchvTzfFpFVMCTLYLEFW1inBLGBbSr1mKs6pTdWq9RvGyuXnGG6yLeyU8Q8jFEeVsoy2ZL",
  "key18": "3v6y9Q2KW5o9GVvFdoBbdssBqQZ8uKwzYHUwGKi26Yh4iUbcB1Y3M8W9rJEPcMdVeBPdJaAN2nrcZuPg1XhTThC9",
  "key19": "5SvypktAEGePvc7VYmuSrTz94KG6u8xkLBp7ntmUxZbfFJP5DA3kQyDZB8KJa31G8qbqZUVBDRvVHiGB9Kpp3CTi",
  "key20": "VxL7iAnnQBSf7jWM2VNc5xF1XBKjTgTTSrNqTddroKAoyo4rMVLKbjct1iqPnuMEGARwcWdrzYQ1N2xwQCu9QP4",
  "key21": "3yLZGAKuPnjRF2bfcabqUkTkNP1z8B4oPuWL2eyWLx3VwhR9scusBJqnLY6thGrpARRHinS56tDeo918Lw8qrcBg",
  "key22": "3ttYMTPdiY7sWdY3yt3Az5Pyprh4pCZrP2dNozSohSV6pPyxwhfVcyNHDSHDi3hTAEAizUcwCGNJQeyJLtbQ2jzg",
  "key23": "3yP2peZRUvz23vuN3jTHbedqgRbLPnkeetm5TZCBpDS1qcodqy8hjAy8YZHi2o55t3WS2yj8dKLj6dmXRs5MjWjk",
  "key24": "3MFnNeWLhtxrnSPYSrUh2Mu7B6CWssR6QBwvT42oSKdPqj6SHduv5SHGQZM6MFPo6L44YQswZPhFGhp9MNPKTGTV",
  "key25": "4Qj1ztR4Ja2h4ebt8pgPQg1oeJBh4D9ab2iPQwHPsnuGRFwiNABrcAB689JE7rnNPSj9QP6xrsxYhDhxJdHc4tad"
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
