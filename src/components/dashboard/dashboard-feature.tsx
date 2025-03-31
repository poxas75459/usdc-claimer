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
    "4CyKG4jGV5DNRe6NqrBpVS48Wp3PuU8CQotUWhY5NVsAc9KKAoASh4PeHvcFnAR4m73tpNrH1Lzj6KFUn4T9Wfbw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ocVXNNkSZc3DwyBeixtgGM5vUcbTVTFDXdJA71Fxib5X7TCXrgidLy3NpEMp5nN5WEEZeY7Bcz7EY5JsK4LRuan",
  "key1": "3ou1g68KBRzCLNvJP8iPVtGTCftzQYoQN34WTxDhHQK8qRgKX56jwDKaVDM9UcdqWKUbH8QRg3yKiGzD3mfmHhi3",
  "key2": "T1tuGHjgGQrxXyAoXm9kAuMqo4VW1cHo129uDfnFJe5ETxbQnE144V5M8zz1VwqUHaXX7gPMNYA1NKg2Rdq8iSF",
  "key3": "WLCYxkok6u3iAo5JPqixS8zVvfG2rjJ5zGbHrFJmYdzQDSfR7WmkKTCn2tceCaJmBegwRbYGLAeREr5fHXsgqks",
  "key4": "5rTK59JxVX4JKhARLBVjSpQAnBqdb7usxbjHaRmZMC7ph2og8dY4e8b9qL8omnktsLggqCLK3pqVGguxNLEpWdTV",
  "key5": "4oygTTR7rsQrnGgzpsNHEiWYkAqbrT6HwzDWamGJBeHeNdG4RyTTohoGpXT6X6S78RuBQpt6SHpcxv8i5r1ipLsg",
  "key6": "4XhQk2REeszKy1xPj618gh4B6wLC7wip9RBr2FbV8m3QcDmXvCjNUyikB9nEuPt9suUR9JCenaVtbHgPMuGi2wCa",
  "key7": "3T5RJVNwj95WWsiSDJRz9YUBJL7iTmZmHDXPx2vXTM7rPQo62KiNvEWHHhtEF67eV7Hnmypo7dhkvzmTkaXMA8h",
  "key8": "4ySGCPqoV3sPaDszamQwK4wMmH4FnSh4R6bvM9TTnEKGX9tYhLEpHmUp5nmEZbtXafoXYP2Q5WVAsv4Z4CNWLuHz",
  "key9": "5Mjv3b5ifyRtNN3VE7n3q29TvwnAUUFS14xEGAFtbYsBisYzNGhEAgVDUfCWHBtwtgrUrJw8ZZJRqrqwTbir6snm",
  "key10": "3uUqAYNjC5JWeK63u3EzcbBhX6MapnDapC9MbPuWR7PDsGwojEPbH4B9AinWwvohYwxWMrit3xonvHBpwCQhQipc",
  "key11": "MwNThWWcmW1h4tiZt2hvdJ4xNYwhRgUbiksWQddGTVDniJGmhFTQ4cakmJNzvmiLSYuSgyMMTRexPwx864Zvy5c",
  "key12": "2A188PvfsrKMaabrFUCZjahwDsJ1H7iYgEE4N6dAGu91RuuY2JxpTvdZhu7iuPQu1iw3MbZHbM6f7uRFJDr4z6Ea",
  "key13": "CnRCuHEWdGggRScwMHK3MvaRVLqRM9qCnMPnz8vXQwa4mSJTfXuFN8zEiVpJN7kU2ji8mshAyqpvZEJmp6btFEo",
  "key14": "4iYVrU7vrmmyUxxyNJHgjPV6jABWMbz6yxQJgEobf6ki1Qe6mKfubeXyq2YzSxvxZQDCnnwxMW374jPjSQwJ8NuL",
  "key15": "3JSDAgL6utt8CwqnuXaaBTHyygbB7b66ZQCc4RMQqJraNes861nnYgLEBoCFcuGSe7T9eQpudW9gkr8q2DsKTuDq",
  "key16": "CtZQX1cMxZyx8V4oNUmY9wmrtBSf38vw7yhkJgu3pGnUBrivVmJZWCsCVHTKw2S6RMD1qG3j21xCdGgNYfMS9sJ",
  "key17": "2XJH99SJvBj9fv82JiC6mQCPmvVv88Mgi4SkTz5hoQwTnqzq9W4vTZi6w56MGrdRJEm58Vy16z7u3vtyZh53c2nz",
  "key18": "YK7k3Pwmef82Ck2a7cm5wTgs9ph3PXSSjc41VWA8UJpsVHamPJ3kHsax9z7eqWeANHLigQwyKxYQjTG7rBYQiXi",
  "key19": "DSLdsLkr1BhXb2tTCEnZi9ahWsX8H8cVJYnYNcTcQZU6h2vo3gojLrU9j36DPe8BHyCutdqu8kdyduCCRVN7Akm",
  "key20": "4AFdrKad8qge2vzbBDqMDGWkHiydPydbDxrorvgwUA6nM8zJNn8rPieFBwhKuG5dXcpjedCPohM2A8USessqSwM7",
  "key21": "3beVjvFPUaoKVetHKWk6phmbfyJS9RdqZPRHXrTSqDeScLB3gBeNQ8ChR3oUaByzddiHx2rrZd7dPgb54N3CfRcD",
  "key22": "5rE8zRtcF98Rr8UYDT2ATXsUBu8CkggSbeke5Sq1XfouFVfGhwmvUxe9ZYZU7aa5FmanjymMZvmN8bygDZud8CJe",
  "key23": "2eNM52JmAumgvg6hzeYzjRWVGkPLsbKWVCaas2CANprwdwuZxxopqqLmNoNtJj5iqjUy9hm3X5FohL1xYxJidRcu",
  "key24": "2wFM9WLeyYUjzvk5bVXYs4GmusXwE6fXRwSR9BPHwxjoKrtWhZsNbuxFa4roBjF7X4Bos1SFsyzYNMS4dPRLRQQA",
  "key25": "53Zt4yQtm4p9hJDoModRwnWu7CxkNbYSZ43YR9Tx5oDnaji7iN6NCFytyAqVXqvtjzYvzCoM3ZPZQ3cufa2GRKoL",
  "key26": "3izAiWU5yxjjCFVEkSQ5bhNjSYekewCYgeSjeUFM6sgCK51ex6rz5TfnK8vu8hPQVRgZkX4HmKKi2viyBZgWiTFa"
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
