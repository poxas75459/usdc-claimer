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
    "4qFjuyu2BrnT9LYYCcgz6fTBMyuyiatMXCXXmUGRcxY2u1PBYnAF2awfGBPuAq8hbYE7dje7TQ8Kf3djr9pUd1eS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ioRY3JB9gJ55VAXKB9HnHxcf5GfqqoDVJKEqqCDzxaX5pbMzyL4P5qw49obNkmRgNkVRBXqdn1V9qncFKMXjdhT",
  "key1": "25UVpnVcgYWfMScbuJYveM5GiUxDLmPC86TvsiyTE8tYhYDr4Bv7L47PA4Nbby3en3pM66Uvkp8YB3EFnNLvMdxt",
  "key2": "AVjCZdV2NyTPK1iAA34PMNtsHxGdr3RhDSjL8iGEU3V1mDmJrhhmrKogSreakZfFaogsmEJYYVjFr5DPQbdxWX6",
  "key3": "4xpNKFWfbBs5y7bRGGVd17UjuGafTJWNtdHjYExZHVXXaU5mC8H5H2seUjfEacUjA6rqyRuVxBZRDjqxa8a6z1dk",
  "key4": "56NF7PSrfu8zwPBFKD6FQyXzM441twUpHaueM6zpQah59VhUSZWUQK6XcdHGQn8urreLqVFDbEk9rLVzmHPFXRmJ",
  "key5": "31bSvsoYtbJVhzCn1MXsFLG1vxn6xCw8hUmpDyFpNHJGS5Px6AVN4rA93gxj3XPLyM5Z9ku1EdWTUygnmm4aTYXu",
  "key6": "3qtpNTc5RSRKVjSq9yc7wG8XYPp4Hv9G1XrCDGovsm4ruzR2FaAGxYfxARhgRayq2zYVi2a3zzEgKPSVai8BJ5wQ",
  "key7": "4KyjTtHVGv2Uprvhx5Vg7cft4aCZpMZzcRpVNJrzuXPYkDND2FSdAACAcmQuxmLoLjqDrkuK8tTshA8RAHkMcJ4i",
  "key8": "W6Rghs68oqJtFXdYcT1rFfKTdf2vcryPHEvpE3x9JLKYcDgy5vWdwxjNvnTXC3cGBvLvZrH6wpNB41ikaeftP4D",
  "key9": "3ShLTk8S52X52yEKfAuVATSTKAUk3veRkmygTMzbdqoX9ZGiRC7njh434MKhEyrPuYbnzxk987GyJKb4cSdiXtBt",
  "key10": "29ebexfTLQg1CC348QT4P3hWC3Ffp6XxRU9wsMFYtMzboitJQMA7gvQBxfWEExrUEnu2H15dkrDSfdBdGvpwpBYj",
  "key11": "2fJvKZwWYtKV2mahSWyXd5ronZvaUQsAxUsbv8uEwxYqp5UJoGrqz5avANZUGq2SSqPvssFyYRbD7vxdsqLa7paD",
  "key12": "2kxFXHnLjs5wkqK6hyGaMeJE99xarMWXcmT4SzZUPqwAbdWE7ZJh5gnRR6bdEhN8sq5ZgdLjCn8ZVLzxsVCFtEBU",
  "key13": "5gxvvX2iq1G6ckjFnWEuEDiAeTYP7owNhdw9uAovXupgFAPpTK8wXSYGo4jmG2VMKssHfSTk7m6efRRddVvMVZUb",
  "key14": "2Bws2kZEL97W84Uc7eCqSUwCktQFw7pwcJZ3rUm2brmcYtfFbNkcEGgJKVR7wD84h89XHrvDhVjXT3GLP1eotybA",
  "key15": "4s8dHDYApaMdMTPdL6Ark19cgqSwMFWTVswS5Dd651zrWTe6do8K5ccKE7M4ghVmGdHzDCNYFNPYZ1ryTdtkGXAr",
  "key16": "3NVXSGbNqw4us1Urr1acvgcw3XyxCYTAe8nTVk73AFeng7Neyck6CcYyN1oSDcypKwaB6mqjQw5K14TuG6g4PKGs",
  "key17": "3Pv9gAMbcvnn11QXs9ouwARofBbyJkmwM2dZcRQex6nnoj5Rq5YawgtF1AnqJvBL9cX6WpJtfhFBQqDN77nuZp5P",
  "key18": "4veSKDZyiktXrXaQgeqqW9cfLxoJ8ufJQBH7Fw25mcLBKjA7eiMTvAbXpguJ2vYi5CmWUrwK7tSbyBFhkYUsZFFw",
  "key19": "5xJ8sJamoXt4SBJFMvB6aFXrsJcUXjUFAN1AJV9ejh8qkzr5Hc1uKJk5cPNcQRc9ZQ3i37Eu6EBcYkpdS59sCu1C",
  "key20": "4qiScAqZZzdXs1QnopomdEScq4xUTPJE9Mh48gS6Rosuzgy7LBULstG59LVLc7BUMwgAF1cg39GFaFBV457K6Qut",
  "key21": "EZjivFydiVVpLEZVeG9yM5H2SYoVK8XbKa8SHMcs1dgrnMeEcMMv2i2NJDdN9EcgczwSz66m4TRtbzbpET6WNS6",
  "key22": "rDS9EfNpwKM9YsAewCPezkeyvsnYQeRAQyASV5u4GzuVYikZ2cHmJWVwBXWSoKL6wPxKYWQ9Dkcz9Ev522faTs1",
  "key23": "3qBfXPyp6GxGc6ArQgdBBvYYhgTsBQxHxDApoLbkoFoFXyHVJpZGqRJG73r3nzj4EAvfCRRPoJUfxnJABDSJRYAm",
  "key24": "io3YrUMhGkhCYWxbwMPs3wMxUCYfAhnscL6sSs67Xmb5XR7j1XiGasb8kCHRY5C1WQ85aD8p4urRNcEz4VycNbs",
  "key25": "4JMr7hHj1e3T7q9mRMz5ye6pvkuu6ESwBxjCDNT8EMo1YCbC4E9o2kEp1C9ELC76kuoku3WE7mf8Yojr1fRQMpGA",
  "key26": "61LV4rHLq473w9ivkW3eZcuBnah13W2bHQwamhosAEMYaHR7iL1nmYexVHG5JMnPCsJjPSmupVdzvNiw2tUcCM4R",
  "key27": "4jc228UrNCpQ4ziuSpzkmohmejUApNkZVc7Be1uLYrAK2uyaLRs4yCiXZ9VnboLtcjy3CY2yfqp1TmEHpKL8xPRv",
  "key28": "53EzKiiYqJhEApq734CJKoTtbwAAy52qWm3bzAQ6qk7Xs4wQW84v9bEjnV3JUDWmXLifvkVsBk2ej97nYFRNG4L2",
  "key29": "4N7kB94eDJaLiu2ykqBA3hTyPYnjbG36UUj2utrTqodk6cYPPCtUYrcVtazcv2v7k3oJib2RCZJc9BZqJd1Hzffq",
  "key30": "4n5TyzA6iib5b2gTiW6eJgY9JSs5Mgc5jbCsTzZeD8K6PvtBJYQnTHxnNvJNEtXvHWC9HiWMnAHeD6HU6y48C3RQ",
  "key31": "CjNZdEFirH3xyApKF4wijbpFb9RivtzR6NEm7XxXHrEfiHRm1T6wH2oEAXnKxSJxNwo8xhTEETnvHAueKNdtTBM",
  "key32": "5JaAiuxwRNx7prAZY3XnsxxZSe4tKLSahjS1PvBroc45WuhbNbuGmsX5Qa6FViYDkq2eyiY1tVpKXbH2Xfmz7yf1",
  "key33": "4xGmaEjG3oMVbaQ39wFzo6zamtSqSSg18LMjAsB6oMz1qzNdixzmadmfpDTNaCUnUyAykVH8PVAML45bF8Fbwoo7",
  "key34": "4kjKmvFNmLFVZ9BoeqN82geJBkrsZ1ThMVvCXpES9cewmVMBcYqk63dNgYwXMPKxTd2N2XBzdWVvcLJNwMu96xmL"
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
