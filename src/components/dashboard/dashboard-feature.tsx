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
    "XV3cYsjy14xcT3Pt8sQ8JCKAzUurSaBtfcbDKBhnffyXh5qkjJsrYguirz2wiURqEX7KiSfxW6NUQQQKK1rVnBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xgTGXhMFQbtsNtDeo4GYG3SBWJEpWKPot2EoXdc8WBXzEcKyY49vhYtQC7P82C5XLgquFe2HbrFV773XrzjFomw",
  "key1": "2RM4AqNt5kuLQ5ojMjpPaSYRtWZk2NTFqRAVMYJULxnKXfrYvckxVrtW7ZcUBgK8MJBVFsBhtunnp5oT4s67W6mf",
  "key2": "2YTVAogtvyMgBFYbGXw8PjDTU17By43CtqSp7VRJrPbDMpkmd1ef3yT4bbM5z21id45iYe4VdamYWQ6affH36Pjf",
  "key3": "5aWNJ2wNTfibpChb7mTUQ6CpRnqv7Kqk5NQvDxFskmMGNMennqPciK2btpCAF9c1n9rc5y3iGMVUFr3N2BEAVy97",
  "key4": "TXogPCJfiTsvv3iKbtsco6cxW9hmZFBWHUV1uRyCD9oZWtyEUi3VGUhh3ruMNa1Qdw8wn7EA1s9yTLKTDVYnHLK",
  "key5": "s1VfupK7WjzjCVneUc4HXLHj4D2sFUrLdsfcZsLXE4LAaQc6e7F8Aq34DfSTkwaRSeA2qqvVxEQx63KsHjTfpRB",
  "key6": "45qPHutmDZ8GLeN6PZD1sgVJxNgtutPJ7y7iZsdGpDWHqvjMaoSqo84mYKnAXSTpaVpi8t2cxFH1YUDHnjbb3uC8",
  "key7": "35zBuu3g3KEtW6y5p6sHXDzxKtsKe5y3mFDwMqigG1jjWZfigUabWB56aopcAUcuqZnX3haydyQfcBhzkrH9LvHt",
  "key8": "5uSkpoqC6j3JpWd9ZjPJVvSLhKWiLMMWaTNTFfYQV4avEijqrd2M6taUNQRfxD5rBsH6XCjguuvauYXS2fqcBMzN",
  "key9": "2fBmyCU9K7QbdquCB6rxFQUWXbrR7YDoLQFcKr9izskfxAdtNuJKUms6E57XhrFKsjBs1YpLdVtkUPrh2MgUw17f",
  "key10": "gkkrmU7fiK2SCqSnj7QX2XMme7phLcxps551sXVRsnZoUeEcHVXcL3W6ydLKMQp72ZujCUDzgqWzioaCm789GZ5",
  "key11": "5ShYUaqKxU96sCstHxbYCd758Z2wE5hPAgKz7VpQU7h95PycWPen2ciLtgTtTPw6gdkAmDeMWX4hKvhvRzAdDpqR",
  "key12": "5tkccZy1VY4MeFb8AnhPyMwxkU2rmMs2sxVDDf1jg4JP7jtbRsLNJQmDpmBGEukhaHU39ZQyTFWfGKXa2MYfwDM6",
  "key13": "2ti7Hsn4xBLpaQkqGgnZbcNYxmu5BLFEAGRWWxji1jBr6MqoGx4o3ESVyTiyAcstmG9pwZdKXpuKz6KDTbXrYUC9",
  "key14": "5yLgP1oLKE2Ko9WjLrcr3gCfMj35ZkmQ3Db1riPbcDJ9NAho4zCiJEwUjqGyMsbJmU8ThV9GFBtenwuyG95AeXdm",
  "key15": "5CaveHc5BheyryeKkghF7CfEsxKnerfFKvKdLGft4pTfKGZJZvAYjBRaTrYdsYUJWV8hiJrfmpupbKrSB83EJWoF",
  "key16": "5Ycz3RHGwBQyLas2M2w1tvHn9iAC5SAtCYt8GREnnsdqQ7cnmqXTCyMroKdpDzyovmkL9eAo7XKbMVbw6WYRcS92",
  "key17": "65TbcSG4LPbYcNfSg4HLwz7xY7ucaayZ9WYBvCChBsRD6rNkHS4xSDEgP36SPFefeZEv1z21speaQmeLiZq6yZ8m",
  "key18": "3xbXdB4rhKwTfuNwgQsSVhtTcNXVpk55BERvR6Qjiw7MveepE9eN51AGczePBD4xmok5bM56Zo9K16ttST73FqBF",
  "key19": "39p35qXrYt3upRHHR9W2fz36Tezv6vKhu6Mv6jbmHgkonA7AxB4Yc1YKpCY7DLqScfmPTPcWxRv66Xv7U2jmUsX1",
  "key20": "41z9H7uyZTwb3x9bhGxptvdG8YKqSkqwVydrxpwZbYTTsnyLpg7c8LtAAvRPqnU48fMuvSJfWLnuSRnoCfuDEAxC",
  "key21": "4dfzj1Mk2FtXbJpwdXectSvLTZY6kb6ECDrHrd1RiUYQdb2UhDicTfzTS81nEzUyx91MLwkCboQo8dLxELZ2Mm7Z",
  "key22": "4Dog6BCk3DskUxkVcF5supWuxz9PDzq8tEDKUtGajFftirFiDucKViDeS8jZFsXBQx9eAsygtUGCK6Kdv56xj6KJ",
  "key23": "3XKM9ZwK5hKsG3YTrwfzHF9xxADZRyxeQ7bYZ3GmQACEyAnGhJYJB2eR4foNYComzLJGWuH9j4BuMXwieJjNYtrm",
  "key24": "3sG3ywAMAJgLKXdg4WdvkJH2qjKEn3LovtRfonNQmSukLEABjwZKX9BDCSVa56s2WowWVqYMXRYrpTjwc6XvoftW",
  "key25": "4V3G2W816XddpaTqtfEo87kGpUNYkdBgDGskqFwrA73gvLgTEChToHtwSZSoH4rigMFRKv36h3EnprWt2WmPGbDJ",
  "key26": "4zXnc2cTbMgtzGwP7NYRnBKeUKhMNqWhkLtMcJ895FjZr2ec74SMQLcQXCNwQaqYK1qaWmZ2fPdEe6a7oN1KvmD3",
  "key27": "YhBa5D9cF1A8xVRK6mZ57ajUpRtpqqFNDas4HFoTnRXqJNQZUTStaMEy4txoMQqdsbis17gXveVprsPK8aaipUH",
  "key28": "4e4hXW6h9PEUDrQa3HDWCvP9ZJ3qKaW51uP3nPhQBjW6u51GpuWi1DwNgy4dpqKSXESJyCJNyfcXhokKoMywRozD",
  "key29": "3s9ABofQjpWngKXvi4SQ3hn67sBizFMjcSSLLHgqNn6bFJRFpSXv3FmaWJFeSLD6FTwmu1Yk5DPqzZBqNb92NTaf",
  "key30": "5bBE1VG1GtRZ6uAF9fBMYEfpxiqJC5PWzCwiRkvxxdHQ9ovhYNMFGSkAYVmi6fvCFB6jxxNDeToExr31Adm2UaK9",
  "key31": "5kAngLWhMCw3Lkbb6AEpaCm8pPTvy62fjpzZGkmjJ3RwRv2fq5wa5rVsL56HSd4JATTb7djvphnYbKrxnfUhtYjU",
  "key32": "2MGdB9AhAmBb8NeEkogtwuZNAKahudtnASgNc8NsmhfSQ27HGyXWi2hLM5WqDhTgPPr8Dokwhjke8BGLsn5Eiu8B",
  "key33": "5ngj5Fcq4qu47ogMZpwhP4miJNbgLybUtQRF7HPBavdhg9HmwiRwsHu828k7wMmKwcbHnZQt16d5NSfDRMBXGuDv",
  "key34": "5kPokuJZ7WPjPQvXUxpwKj3rK5NNwUZGH42tuLoTTVu6XgNoThYdSs573kXVv5Xp8sXagzDZawrER6oBF2CPmeLu"
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
