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
    "5EAnXKrjMqAJu58h8LR6CVRhQKduJpck2QXKLp9zkXj7SRpzSpQp8aNKMMw4Hk7YK898Ks1CUfwcPTPfMSsYVk1b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PBHaAX8gRzN2tYNM93bnenXL7yjJZTMoSdVomjLRHUN9RsR3QDkAKKxZefJZjFFBibEoy2TzkvuXSzB735WzEUa",
  "key1": "5Sfivw2boUdTtWqRck6dLnWUHBSLBNdhj72MqZitTFkLDrpzMEjoL62uBMKihh4vowTfv8zCuM6nBP5nm7rjgBdx",
  "key2": "2uFYVqWT6HogxuYPhhVXatEjvDURFuqLTHj69xKHhU83UC4nuR4uc8H5hMzXRhUeoDAd6hjb6drtaqP3n4zovHXm",
  "key3": "3tn3mcRGJQA7uLG7iAxEW324hyHe5wpCYs9k9nNwWQLBo5m9fF7Ho3agPk3EoEspHZH24mZbhzLdJtALXExdKzWA",
  "key4": "hHEPJGBqJr3Cuk9rjszX8RJNbent9HhSnAXcEQCq1wNi1an6drrZmCyLLjLF8YHDAmSkMWHKezAWLVbMGJWTvq7",
  "key5": "5NN9UHswCt8YDr4E6bNLNiMfrUU2bv8oeEs4n3YM8Ua6MiFJP7E1xPzkFsaY5RYJE8SMgF5C2YkqBF8aeJFhEpyv",
  "key6": "4QHY6gf2qETvyBj6asouRbpVS7kfMqHNBSMTGCQnGoaaag749rBHDQtKBRCf2qcGkxDKs1N73F6SVKYK2d3k9wUy",
  "key7": "2EQ2mYndhwzWCVKaAe3rSSYdTEGQUV3aadRnGVf7pvPSiTqXvkyUQZ7WikWvaBNiRQEBmhdBzirNSvae5Vq7pBEP",
  "key8": "4HpDYQpcKi4gwqjk94iku8DUYgmLsN6EH6NGQEaUiiUphDqLQBqrfPq6Z3kAGzTmqwKkUFvx9ckBpkcrneqwswHg",
  "key9": "2GAKng79zm6Jhvy98eKsPSDSYviRrazre6uXD6tiJK9xCYeBbTMgP2YEBr6jHfDXMEWdHnbJhHDrRqMM8gm8gSAw",
  "key10": "3X4EHNUU4eMk4FjFK9yDG8JCdHdaiTkJtM2tnzkzowmEz8pFMz3oYgrcd2pCCdQkP8oWvswNsDNEWHBupXv558nR",
  "key11": "5z5ew1FiiwpbedYayvcwZi6MpZ8STmTLpJmYWoP7niLMnVURiQn69qVgP6NaGkGxq8rvdrWm1VgAZMsMviwE5FJf",
  "key12": "2VN54V5WyTcjqGqfGY32tQGigdN8nDA947GWU46hT94r6MPxTBeAhJgSe53FqscdRD2yuK8PAt6LuyMQL2JFdXnT",
  "key13": "NBRLXNCEDVW62CtGT7PKZ1EcTbmbUzA3t3bkYiSNc2Jx7bJLhYMUZ1hiwPbeimAfrob8N91q2BFHbKnxsiFXYcR",
  "key14": "3CQZJtd2ZhMzH2fXw67rBr6WEhnUCD5bisXmn4TWuoxvoHQLgq9qF36LPAYhDmjcapcWS2DWfymKCt4YmfvNKDUM",
  "key15": "5WGmbAwyS3pN2eh5WeFWvX7L2P3ncjULT57wWX9xcrNypAmhEHX3d9cVQdHpQ5zWSbFbYExvE81nBktt9XN3SJoc",
  "key16": "3ygzZWj6h45wAT5crmAnEWrwFh7Zsqju8qqE6L6SPcBXHhYGdRr6YbYfuJmBp3xqfSNmXgoWQ8ygs5vZMPxPNZzR",
  "key17": "3PkeEdWXcScsijAZJVVovsgdvmpN19rqZiLCyGpqpMCybntuefxBQjYAifawhit5hhqs3Pr37gaghj2tHMtG6sdP",
  "key18": "5barJBc1N7c1uAwSqBKJ5pEMgWNgFQHYEAunQhCX39rHy2DvUzsTUb2SHm1XKk5mVVDjLxeW81asC7mmkEqTRWhM",
  "key19": "34bwQaCbrHCuHunk41V2EYWUnaLjC1bWcmGUP6bX8WkQPPBaU7NzuqWG8nX1US7PJoeFNHMoJtzScz1FR3T2Xe2R",
  "key20": "4pcbgDjS3R9TQikvRrZggxajPQuAhwc7RukTSatYPGXDH2MX5QX2sWNSjTRJ2fFQ7C1cjdog5uzjDor9RAPiKw1v",
  "key21": "ic58c11yF9nbNaSPpN6gkYMHYAujPku2R1o9G44SYs1u3NNT2WKXFqDab7txCwGRBGMiprJjqG2vnkBgeUznbxx",
  "key22": "3R3uZiJBfLZNqkAPcTUCmBY6JAxXV6vPF79JDjWPA3WmCy9PqNdgKtXeU4pGo3w2SpayhbvNmQs1ss5PU8UBQGpR",
  "key23": "2NdroRNRJGJsoMStqsnx52aLvzpSFgo25rikyHYqRYoth8e4jUXXzpg293sWbSDg9APPoVMZTo9QQ1wFwC3xHxYK",
  "key24": "2AtEi4mJTwsEZYvetaQnMC7qBtCFiyFo4vQLNvaSNubdpLi91kGSU6VsaULa3TdDV3b1EzUY9BRZoHmXgaJbxHfS",
  "key25": "2ZHd8Lt9vaWkpBS8w8PefFBDw5M4cDVbvfb2zKUg47jVSLmRxDU5Ug3rHi7zrDMoAfEJmA76g7cy3VE6wbi5kB87"
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
