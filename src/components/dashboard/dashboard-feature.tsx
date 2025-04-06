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
    "9Zw4dcn8ePB27ZvEHNCZaPpDXBV1sf7z7bAVumujQuTfcdXgRPHr8umk2T6Ee6Y2LxfyKMrDkfJpTxEHc9eYurK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pvorvGaTTEgZtKWAWhdPPdu64jdF51E7WJwmG7LGzgMMKjM1PMTRJWYdKVcSf7iHYr7TPoTLLkzmVNGMjWZBg9P",
  "key1": "2R6pW6G3jz4pGSwVjVBf2UxMAkiZsVhyosrXCf3EDaKnM5mMGJADqunUxjEoAStLtarez1zzqBYwAgZnoyqfFczh",
  "key2": "3RW2PQYs7CxPNeRYkAsCSnnz8jZfYgCgj2aR3ocoWZZctp36HQLfAb9eVDeBaue6BiKBg1h9sUz76P9oozzMNb1M",
  "key3": "3xsvSHwHn2nRx1J8zEVTMBVir15RwTQe1Xgwbw8rmjFqPn9zuuiVU91JbzUEZu2GihnWJwRw7xJWpH1vAy1hYZNu",
  "key4": "5bjdtsBjtRN6YDWovFcraYZyE7MovQGRNSW7bmiRC7u9FFahfHQLwyGMVtPGQjtbosJzRJ3CoJ4kk4UhDttCZkK6",
  "key5": "8Yq3FQ2STzN6pDki8NKiuG9HfDYY7mcEtCfXSHgiRaFKZb5MXHAFLB3pujWWfJi8ep79bHkx9cRG84pnJM1ne9P",
  "key6": "5CaJiN6WFdh2jc2yL1w7Dnj3hWJxxf5i7W5vwv2xDGxrnR49nxZjz3YN2gQ42byAceRzR4zz6TmWFeRyWUCev65x",
  "key7": "37xiCArTJR9DcRTNungjLpJBai6smdfHQriZ4bsz91kPufKKtZFsqbSChf93rsXTAwHxBhBtuPtxJ8nYjVbZx1ji",
  "key8": "dDHwxJ3WA549BRP4NxoL145bCsS2nsyhqBgMzSHJWj31zfaUGE6B4okNb1VzuLkFTyBUe7eQK3MyBQB6kv9AEZS",
  "key9": "2oyUA6kEFquyXTqViUtiXZQGRshk1WzbbPhUkhadEQPRF29pgn5KJdKccprVxDLtXQasv8No8fuuPjrTKqz667Qc",
  "key10": "LQBDFJDACeZrrY3mAwJndJ9Jip59AjCALezyjxkCwshNLzmnbNJAUWoPgqjkbVCC6a82mW3BXHvFD4VPmZbgpFt",
  "key11": "3hwtSpMqa78BCW46gTy2YYYGjUSkm6k9zJDZtPJPa4pj27AHkrAfHCsNqeXyWerrXekMe7B5zr6gpdwCjxKJLDBt",
  "key12": "54eeQxDj1Gj5agJjUn58wFnWv4xWhADFaovm4NBxGAssCtbGnSoVh6RLRW7ygB7ZYkKFZWzH4xiWgv3xvgQGrQ7R",
  "key13": "3hwi45AVfGEcdCW88gkHdUayPP7rH6fqwNyHkKwXkNnF6JnyEmaDxz1nkgXXfWu7UpPepm7guGQm3C2LPARBSJ85",
  "key14": "46KC2baUEHdui4KfPXr2RdUVR4kdgzQJVciBCX7RLiLkfCBWNb2x9FhG3XLWPEhi2XVD8Pg8UMKs9ZsD52QXwGgG",
  "key15": "qkT9yw4HrYWUg6PLsZt5LUSbZUXV2xyRevP67kXCD6CN9qnVz4iYhKdvSxX15zzngus1dAVFxQn46CWAHFQ1ve7",
  "key16": "V8kDrhZumfM36xRjeQBva1S9brvSszoTtKYyRHgfidphwsHamaWcwKUhtvKn3qGcvCuTw999367HM4Fe4HF9TZ3",
  "key17": "3krRZc6nEuxV2nTAa4FFYbojsLipfdWf8RjrjAqhfEt1MVq84NCCkQCystxmuCmNDJU1mM9J7EzLpAnX2fW6Z1Ke",
  "key18": "2a59C7FRpDEqDTGbNJhQuFcVsPijvZXPAAw8iBF5qv2orqZ6EmGWQtUZZcMEnSYDx8v83F9YMahSTPS2i6M4ytMx",
  "key19": "63jB8HGxty2xM6mAyYU92dF3xDeLurzZLG22sgNASwmZcoAMTyBK2ia6S3XkP9AswPAfs447cBNAuBgvHMHzfEYz",
  "key20": "2Uz1Rd62WNyXgF1AzdWMpxGhJGH39KLCGnn2nksCJKz1JTjsNUHBHWoxMLcTURkcgLjyehWSrw5wQNnsUHuwkMTs",
  "key21": "R4hmbnDyFAgAWzs5bfYupG89sfvfuejZAeNEsMRtKCc3na9bYXcFnQKwPyp75PKrxQYmAt9ypus1m3ShGd9Vc6c",
  "key22": "HZigEkVLX5JDTSzR3E91iqr5B5SNDVLo8W6mqAVugR5p3LExPAMH7FSWuxGtrXFFYSmyDS55dqSXtxV8mWpHAQD",
  "key23": "4AyMBoNLJNZ3bVcCxNuVkiDNhb3bJsuRADn6G97bxsdhbtfjHdA9Fj2e3ARB68Sxz5CGWvVaGCrdAjQ8tf3MGEwS",
  "key24": "5bips1ZTq9W6VMU2Qjmwrb6QojbfYV4LY8XDFQ1rWkVwL4i1vYH4APCqGWzCe2wbz3TGAiZ8Bpw4vHZTUNFLNwkF",
  "key25": "4Qty6ygsU3uwrKhoDdfPF7JiHuaZtKskN8vUk71Az7aEcw3ZG6umtmCpp2ZR2NSGhiaMzu74HbBbvz42DNzudCat"
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
