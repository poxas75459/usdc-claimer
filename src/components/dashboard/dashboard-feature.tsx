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
    "2e3KqowAi3zfxyxWfZemVTAPKF7SbC5wXtMTAN2rwdCB4LWNRSmcUzRFSGZDe9k8bktkgucrG7s6AmDNfixttvkr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X1xbFgUbvjjghCimHkTaGYQsDJsALSYhq6dWdJc6LEJVmUWKiKPoSAdybSe2cRyx7JkDtCbAdEVLfAC9s9bR8MZ",
  "key1": "51uE6mnA1vmuaAny2irtkcmrGmYdeFxaCsVegSLq3zfwf1csozcoFcLD2SbPvFNnFPvPhqzPiBDgmfvM8xdk58GV",
  "key2": "2cWsRRQXEY9oPMbwtvEovp1cnbGzrmKWZARWpLAhmauFw7mm5X4LL5ja8WFJrWXCsi6pNi1fcQSvXsToKPLAyxFD",
  "key3": "Hf3kM8RLQf2rxG1HvzmmQ63EBwqn5zesofM4ADAf9bFHZfUypSEFpm9cvro9GHE3sYGcTnJkUswjPZow9HU2mAG",
  "key4": "2AyLkj3FYFakFo5ZkWx3Mjvmvi2jG32Xi4F25Y2bhxyQJ7fTYfin2ksSbhv8smmSqjumTdJjWAEQHCbuHHRA2Tp9",
  "key5": "4jsbTQ5y6vMZhE26BS1v6FkqvkMpEpvEyEvZq4dsr7oTyjim1hVLQUW8ksmPndh7b6tvWVLewQVxgMFRiD7QzVkv",
  "key6": "4R9tuYs38SyzcqpWDijzpFRX2yPBRwFyrKNkMVg2Gk8xqvFdCVT5rzNzJL1YQaihz5PHGGsrXLEw38Z7gnpFroD8",
  "key7": "5HsLjNQMuFfM1n5oEHDEoodMgpZF4xbh1LfbN2CJNsvUQRHwJQrmBgsPgQxymmdczUjajSRwnejtjMufTn2y7ibX",
  "key8": "3tVWD5ZsPzEcG4UF3kTs7AaL37FLiWbi9eqnKu7gjk5TRApAmnChhQXoKU6p9WiEqXsavDsFZK3VZkeAoYS32f9w",
  "key9": "4qXD8r3XnhxcoP4pkC2TDJs7nTg8vgMykPG1kTzf75yiKbZdHzKzGrRq7wStrX9aY4cFwATCtmhUmJCMqwUAQS8",
  "key10": "dMuqCuXSrYRXWNaiC3NAjuNwg9yDxt3LsYR2wPQvbuz5hezBvzLUE1kR1wAPaMWGHNzj9qi2NRytHEM3kUpko1o",
  "key11": "nfKjxSqnq1ABviyJivybvLhamQHHgLWHS6BGRLCLTSipE4KdCieJdSKz8KzYV6p7nXw1rCSk82VoNkZRm3sDBHd",
  "key12": "2SqwE8YynADufEfSXZyxNosYRb78bAi6Jm3yBDvseDAak63fSv5qFzafrZE24NHR9SPLu7YLszWdPpLnPBCaBtVp",
  "key13": "59peLduSSXFPd2FUzVZjA6uqdgc2mBxCjxvSxYP87Aj3NUHzs8qGqEKkynTj9k2CX6sKxXU1CAj4WHcuJzVGQ9aJ",
  "key14": "WCxRXt84ytA44paVvohcWmc4yFjf8AJ4o6kiAjt97ACJfdkLsjVRxq87wTc32MJYv17pufXoDo5W9ocVUXDMbMB",
  "key15": "3j8xd7FqGimXD8pT9GBNxuHdy8zERDhmCVZYFFsqeoFutGbHjtLhdjhQWYN9a7LZ6xmD4u9w99PVSeSzFJtEM9Sd",
  "key16": "2Uj1QHoZ5sPbGnbGArSnsaL5hB83y5mSdXfi5anmK9kZwyxxv3uRpcwkHZitEmesxxiyTEcBXJDHP2JBQQ36WqrG",
  "key17": "3TqoSRTijmvq6JdYBbUZvkeLJHbYoduRGu5q3FjjpomjACnDEhgMn1Sod886mTF8oUF6CjwH2uKVQ3MiRhe9wcQF",
  "key18": "wMRrdYY3EEXnCGaDSguV7UuHHUbLSVNFjWVZ69VFwvXBS2MB7JCeNdhsyrzUcxu2ogz97XPULpsiu8sCN7m8XDg",
  "key19": "42iGpPVWCCJ6fFgGWCqnh8zp8KyAHjFNRyjdYXkPduC9B7C5n1pWDnW75DBWYgoz2HpmLnYKVpz4ouMuN7MtxsiR",
  "key20": "NcVcXFzFzuq81AHcBPeVzPP5HU24GrVdNs9urkFSEn15nbkXotZ1ehsQEFAexrr6iKHnqdut9aqWN9re8VU9M7h",
  "key21": "4C3Z9R1kn6C3uF4xAjn2gjcEFVmMENhK1cxhrg6tT1H6DpC7hbRTW8KspwBtWFYNd4ua5kJtkGJsPEJCemmG4tC",
  "key22": "39cosvBDrgzVmyg41DizuKR7qzDivzuYMSMyxMkPjzhRJbWGvC2ekmpz14yHbXHK9mqm6xbhjWkMpVU4ebcuWgh1",
  "key23": "4e6xVyHuz67T7NhXGwyMJQPbezJK4t4ESUry1NkprFSvqNBRVKgbWZ6HzEUoHVvja4zy1VyJxhoZv17RmjrpPBod",
  "key24": "52hVs3Hn2hB9LUv1QvSprhyjSpTy9bwosrZWoxFLA88b88GGwrhcH4V5p8p3epePsXjr2XNGarVobEsmBjYLXJQJ",
  "key25": "394VavFTdBMwYSGoc9uactgcVECcdr5uuFa2pyRS5pFnBXvTcB5tMJygavJLneFFhBAX7XL4ctjXWRjbTt88Gk1N",
  "key26": "2ehQ9duktpfGoQbGfXKV6tCjPq93Px5LTYhCjezw5KKMwSZupiRSAqQv8WXb3n21mVAvQYSDFTsXeFFXADQyXxnw",
  "key27": "2pGGRTVPf4DU9gsKKRN2sZ2YudrudEovWokjoPn8X9qkkdTTEVhLBJ2eaqJTZcyVErApeVxQ2REBDzrLGUYuRnp3"
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
