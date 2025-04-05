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
    "24b3zzu3a78pkJXGuADxpkghHXVtxYJdzNXGtM7iz5h5MuWAiZn36xhyBdS9DaXXW13btzS3gboZzTkhRfJ6Kpxb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dWk7UeLmqi3D2tqBhDSPHxAM9n7sg41zUgkMNNjbqt5wLiCSUUkCTg4vZYxjG43g9CybQEbYkWpEsuY8MqMffhV",
  "key1": "3CAPqD2RpiLPT9Q6DJ2k564dTHksZq4Yuj3cNeRHsY6DjSY2EjdwqQ3mXGssQNeMdoZuopiMWh3bxK2GcVpYms6p",
  "key2": "JGvxYDubcbeMcz81AqL2Yxnz3woT4UyYj4izBrrmfLycq83S2361N8YD3U3hqCR9oxENhsm68hzgtz8og2zfUbz",
  "key3": "5GDwqSNRVEFBeZurUDGxk9WkU3SM8whbJA9xHhnUyxZnhPzWAxcdMBn4DBsq4Pq6niX1PeWrrFv9bYRfV4ufvo8W",
  "key4": "ugo6j7DmFFwpvPT6vnc7KduE2MFiLM1wUedufQjDiFnjL1bk5gZELPzdrWAoNUuoYjSHXDzwuqRP9g3JEraMDEQ",
  "key5": "2whXuF8cYw7hqC2oLXrNLxytgwN7JuuRyCBnotGjrQH7ao15J5FsBLQLnmgnzKGKPjbJ3rdhGVbyUA3gKxZvvzH7",
  "key6": "3k5V2Hjb2aWvQHoxoxNY6qBeTAJnN4HjZgHKhKPhUsi6fNieuiPjVQKwBpEmkcEjj826zbX3u4L7V4A3jB2wfzd",
  "key7": "4679Get6SpZdNSKvbmSSzeHJXfCwWTtMoZmKJAJRT77CyQxRndJFZMCLTNv6T7Lv7wPqoGUwtoe7CxuWXSY4NPra",
  "key8": "4MBJz9EiLbKF6X6ZdUwGBVSQN2umAfS2yyy9bXmTBNU4yTp2yhhuW3okAbziZKkm24mLbNAyQZnhfKBMcr6GbaLr",
  "key9": "4QBL3zEFqnLVS9jAKX87uCqPYP68E2dG1iyk3crTpZ1jePjKQhBBZ3vgWuQk27yMkLgeg3xsyP7U2A34AqrNgj4L",
  "key10": "5EYUgRX7enZTgMtHdq6VMLLnBshrepZuCuCEFpPQ2rXhR6XtD83X9JKZoAiYgywWuBLdvEhi5iVGZJa4TN4rrahR",
  "key11": "o1XbTpbnTcaVJkrVodphUFK3ruYFSniM2fpN9oJKhjmKz9D984pCwGuszvRFUyCbUQP2pzFnx7DBYPXL67zBJXd",
  "key12": "z6qotFJakQUp5HrhkHwt6soi8ZBXqihxjYEMmMngxcgbK9rdqRxSqoLSMtyCHwpyF5Qb38DKgqfnqthFD5Z1Tsf",
  "key13": "4JuUvNTVEN9ShVUQHPSGHxD4bjsPvTYweknJURro4LUpPVQSkzaGMCQGPNvzDGeimHdKDfzM98PJUVPgTGVLYqX",
  "key14": "5PcqpzYu7dGvhsuyrvTMVTVivqZ5suJCrDqLS4AKxX9TwGadLSokMJWwXbvT9bxXjUYyVBpmMb9EyVxbgo61z9bT",
  "key15": "52sxTn7BZkChu7X4qovNTb3aktPLt5BGhChkFC7EtEp7dQSGpQAsbkVAiLzdm1PbEDkD51RYkov1ogeTaB2tbjzQ",
  "key16": "22fcVegH2nv8QS4dKZBX3Gr1KAQqZyMoDhC86DVXczhabPNWpE5mH66YPjQzpbjnzE3tVLHZgny4q2aGVkxWLcC7",
  "key17": "jfidEPV1s9iyQ2Jd3R4jRRoV3gsaeg9FocyH1geEr4oPJ7Y3BoLfBaS7XzQq5LNsVW41w6AuG3EQqdyZ93UnWGb",
  "key18": "5NEUDYjQtCiWnk6ZaxGn37ZDBJkEz7xmk6AEYbgAGrX7FDavokoW6gpjGsdQmkRDKftE1T24gzfRpAQSq8KwsdRG",
  "key19": "5MfCQihtUrQjUDDDZxQ6LUnjByco9MBVSRcQMBeL1DGLmK1drjbmjxuD62VsNw1uWLvYDmgmJCxjkFDvNPNJop2W",
  "key20": "2cLpeNQ3X9Y115e8gvyUF1VUo5eqVR6Zcz5DaEU15SLm8dyUZaNqpHNoRsmh8mVUQskqoJuUbbQrSLvikXnMbqeA",
  "key21": "2jUDd4UofyVMvtAcG5gw96nJm75RnyUxb64JpZRCy51PzRawXMGrchtWZNw9NYRtd56H896vTbBWjeKcpEmkJauo",
  "key22": "42mtePogZ4sGhTxMVWorWBTG3QGJzUmpsK2TaAzk8cDCYKazDxo7kLvC1fhDCaGsRLGmJtrZZirtvXN5gN6ZsJvn",
  "key23": "3TL29SsqkbgNsNGvvGX5mPEDYJT798kDAKy6PwfS3SDFTawZyhQVxUkctwVzF4vduL6x33YV5oTYYQktv7w1Cgi4",
  "key24": "2NK2gXFkuKc5Vi2DE5DzBoupngfC7mCy9XCygKYH8uCkadFeZSigCuW6R5rMJK3iAinXSoCbYc9g1sRGfwCR9ijt",
  "key25": "5W5hYd6ZVTJMUaDw785TJaepv3wKS3oF4yDN1jeXrGFznHMPnUfZnMuBtE7Rt4biTjbvVgC8rxv4tvQFxDtXQFb6",
  "key26": "4AR1ChDak5yqsQCVTb4KRfS1iLAULS6F7nmfvTBytgb7XVGNsqq7dG1g3YHBPvQQJpUT3xAMXuumPokMhzYF2UYf",
  "key27": "5psBHw3VqGBxfaDBwKNng7AHisLgBFeoo6AW3rmDchafkdxFSCWiJeiLprTe46maj2BRPwW8gK1iyi7ik6HjnSst",
  "key28": "5ZKQa1GixJA6wycf9dFu92xEqkdXyYoSzUjH9B5ZRUazvxZn1HtyNEmErxjsUXPXSvcRwKaphyv1YDbwXtffZW2d"
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
