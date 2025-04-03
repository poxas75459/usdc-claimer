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
    "5PyQ972rDe8XL7RGje4UBCxgkFRQSN34qy2wAyfc4xdT361wpB6Pqi2bJxBAFYocWkvnwcT8n6k57Szrofq6PUFq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o7DAqSHTjJNwW9MThwNM9jgJRD5zkWzSqfpwqJcUDkj6zhKziSAwRzgAQxPYSfURpekPiheFGx4aAiaHKSzBDet",
  "key1": "2YvT3Uq7PCTbBz8mh6TJyC3MimZavqZJTKRCvbknGo2WXRRznugRZ1YBURNzkupz4AXmGHV1Kdpvyuh9UWz5fvYD",
  "key2": "3kzHSx9zv3ThoTuWiDs552C1JnL4cNkmRxw4bHZqkGcMStb1cTtagT9SXrn5dQJGdhRY88bq7cyikPwPwCEZEQX5",
  "key3": "3UA6GvpFmrzFVo7UuPbcApDQBGFDopAkxuawJMKfFv5f6i8sAY4vUDx7UG22cfN8FM54fumejv3whB9GJ52iFz2y",
  "key4": "2tRQCmDfE9iGWUV4p2F86ufmkPNnMRrS4JtGYs2RvzBbNbr4A8ZLcDbCUTTn6qoVitdPTfbhCwnPmwAMavGuCGJv",
  "key5": "35UYWYqDThc5cqNLgEauy7NZjFk9fsnrRK1NKdJwdTBzbMw9emhccdr39jvU2MtycLVfAQpMrDZU42bUmoTGrz72",
  "key6": "2KSfaJKV6foDT4LuYqzr9eGW5Rov2FTWp37PrfzsAX56AZpahHJSmzSZonHEtpN4fWmqSKVXJBEYoWTJPx61HLBt",
  "key7": "5mwRoPR5bQi7H7HrJW3YsWZq7YmYtgw5ceuGMcnpGSJ1NXSNLDDG2eDTPA1zGr8iUuWMsebWWHXtC4ywxjW2hmkw",
  "key8": "To8mCDod3q2QzDvpDbM4d2LHQcVRYUovDkmRgihBWGQXKXiQ8mJS3F5teijTFHvvrXAGLBEJjqeVaGVtvLemb5L",
  "key9": "4H8v7b99iZFbM9LFUkq3FTNXGGBxrT1p5bzxmLiGAmTwkYFSiVbmjhfaKJEaqxp7du6q76nbtDD4PajUD59neJbW",
  "key10": "5gSFRvUVWFCCo9rYAmYfdhuYzuQ4ozE7S6BWsLZ4BVeXguFWFxsVP8CK8C7UamSzZKKphueg7kqiKivErUQphYy7",
  "key11": "5xTCX7uWTKgAfxvMvDVJUY66YraDr22eFXV5eYKF7VWTJaZ6sFqoAfNmfxR1ZQYDumjMaZjsU9BU6Gd8jKrmrMWS",
  "key12": "5nqnTV5bjYoVWofgrupfZr3E6naGcrxTSgZEqzMMGWZXqSJJBvkynLqASboSJLrbFP1wEWPdHXNwwoUAvykr9BhT",
  "key13": "4NHM6pQaoWH69LKRdDpSoxVTrP29YDewNL9wxk4NJEUoUCwY5CRG6Gw3qzvUsHzcEgwfSc3KEj887CwSD6HQsfua",
  "key14": "2mzmpAM8EyoJB956gHLbwEJBhWjNUKTvhDiVdvtFU3uX6des8UWHz2SQFzEz7MA7TyaXzF1mAJzFbMtaEMLFDLum",
  "key15": "5aEzEL5kXPAJ5cfLn81fVGkczU49vBoKKGojAEqdZ1mXXmSb2NtjQuyvVPNU5WVKD3Spg2Mh4RAH3o6hncMNqnf6",
  "key16": "4FZTCrSfJQ3crBQMs9KSjFtcFDzYWvSSU71mcqifAstr6cjdV966d5oePAD4eGarLmVTprB8Wh1FVGQykLpxG5Pj",
  "key17": "65aTpz5eGfGnvuNwmNcn6hBzTG5VNzGRyiPtZZXHmWqxo1XDdLkYFecDKDKSs8cmCTbPJnew8J2kCVakg43tX1a5",
  "key18": "39G7YJG6q4Bfq4JeeQh9Y4YuPVMctAuyW7cx6C7a3vomzSqFcMPoRqNRuubefjiiD4Tyc4aRjqhCUhrMhH2VbRhr",
  "key19": "2S72rBHMcR3T5GyskYK1jyUxAJwqgjKrCDMyYfZatM6pxLTjVWYN4v6Qbb7yZyL1reA7Yu8L1JcFEBkNp4ZQm4tS",
  "key20": "269H3CbMKDcF6wwkMespDik66YJx9Mvvxx8b3PvyAWtEfr61RewNci9JFHD9PCi8Z84Fynd5F29UtX3btSz2Zodd",
  "key21": "5KLkuHqeQPqKzTxDqE9rUnRjvVRJ4KGqzowrti84R6mvkDY9cXyQ38HeijutYVHq3PKP69hSzMesWi9bGCPQvVh7",
  "key22": "BVZBbTsy71PyMKBL3dqoU3xgGgZ26vkiZiftDwqr5CaL2EqWyXDMtxp9JbsyfPqRsXA3334QZuowW9MNKSoUBd8",
  "key23": "4MJzkgnuoDNEmYciFobP8xoPGXy4Qxkz14ySQKacVwKvPrtnkKPtfmtStPE7sdxr2ZTcux85NS5Qqkb5RGJdHDw4",
  "key24": "2vC6CcP8YWBpp9zoH8hmJL4yhEESguPe3wnN98kMG66DhjNkcWH4k7d2iAjihgyog7km9i1TpNDeB7B6gBWUrGNW",
  "key25": "5ujHaXKoixhL3fsfTkk22FnsmjaESBxfkoLTCsFJ769Uw7YHaDxA1pfGoPdFp4b5AujW4nj7eWXca8FEC5MLnwJH",
  "key26": "MUbkuAKF3C3qyqmwijB2p9dngcCLs9Lu3JEe6BgC3h7c2zA2tVTVQgPxCTxHPfHZ1WYj36N9gL32q5LgJ7EDTLU",
  "key27": "o9XYHJqzgBhdyCUdXK79eibgwWnWiGgWeR4a4TbG8evsShT3WqrTJyozmsFGPxeSsLQbFeFyFULmsVLLqi4MqsV",
  "key28": "4QzLxHiMpMai3taPLiCg7dmEfk6gEMZd5m77Prpd1CkJKW1vKdLzGumyioBdikzoPf5xUc9xWhQkWStY9B4Yy1rJ",
  "key29": "5gbnpmTw8dnaWXv2sLLnfAZxE38j9NGDwu9NanbRyu5FA4HHZnDw6Kfaj47a1esshY74uBW8gUeQAV6oaFMC85zm",
  "key30": "3V6adV6Bu2GJN7W5PrigkybZmx95bT9384who22uWx1wT4CrcCuX1sgTSFqMD76pwcX5Lj84n6qs6rWRbSTbUizx",
  "key31": "3vgC23mVdamLyZLmttEsEFyLemqUjnkAsfWRStE6UyYhe6zJNkUGLPWbHc6SYx8jSKYvpxYmpTvYiSNea63ggsad"
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
