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
    "32R3igJbNmcuTY8kd4baxQSAnEx6s9stUDCYcmQbyRi3sbfmJLdKEUWK3wzEUtCZMLfNTYxaPZj6kPN1t3gPKoFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34sSgvY6DYjFLTUbL85MdyA6abrGr4Cr7x7i5AC355NkXd5vibZn68XQUGP67RYxDcv7Cv9feFFjeyp49aEoajxH",
  "key1": "nETsgNN9B5nQ3Qwm6jnZVyaw83HJokqPzRDXJkBCL51t8vbsGzrQC1K1cRb19iRrnLZh4zLnP7ey3QVGoQXfscw",
  "key2": "4DfZRPAzTo5KJxmBjHYisy8qwGwgKNAtA3JmZYTyxiwbZbHhpzoVmKUJajUmRKNuNUZVAEEJ2PcdJt9vFn5ehWc7",
  "key3": "5cTJGkXP4qj8jx1mnz9T88sVC9hbZrChDFJyF7hiiJCnEDVSo7YrNz9iApLpQiyUfpgSMJZvcJMa74ZC3vVvbDbk",
  "key4": "2kWaXF2wAWv1XJ1r63eFdc9uXofibt7jBxxpFUCs5RYzy38jDidcsL6T5Umiom8yeP781B4Tabvd7n4NRkAgggED",
  "key5": "3qgoSYeu3DmGUWCir8bxLCdEddFUPppwCHWr4b7fSc6ncdCLwZdwaKq528hQPZhyZb7E1ULiLH53LwRBjTnVGXzh",
  "key6": "3cYaTd89u9JS7MjsDsywFbRPHxVVZAXBDJh7azThx8gXd99vrGMULCxeWcSdS2Aea8d1fUGq2rSgadpVtmZ3Xwjp",
  "key7": "5SNdA9x8PoG8m59DUYhmxo8U7qmz7XS3LKJ4e4rFg9hL1LPeq6Y4qEoS85VBkNSfHxyMYop48xD16sFrPbExBFi4",
  "key8": "4zFXSg84QfvJC5t9kUzbh8enk71q7GcodndDw8kKMRchAQ9X5TGu8gsZSkBmFH2FvxUrn7rCrpU3kbWthND3o28D",
  "key9": "5Mrs2dwPCfPXthWDVUsRVmR2cxvFSWxTHJiKyzP5sNf7gRzwjmSfgFy1PQhdKLCcrPMp3jEkFz21LzNapuaU47iJ",
  "key10": "5kh18DTofispzHnAwHcuYnjotBHV1vq85jwXtPUvunBtEtqFxoCtiFHupe5fjH1ZQ4YbZ1CPXM3XQB72mmucMSBv",
  "key11": "4nZSQq9oYCUfV876kJF7mSJSg5YGHtbWFZEVYpAqHfKcbMyrZAfrSNms93BeyD49iPN6iyNB4in8WRm5Bp3FxRKK",
  "key12": "2ACmfhfx2BNdn1XZJZLSJXfVKsoeVCwDghLp9k9TP7ZQUDR5znMaw3rZqHKQkYgBQgUn2PDhJgMM2HPAfDQXMpF2",
  "key13": "4eYQgtpPjgqrtDVJh5XFzqrynX8vggKQ2m7BPUnig9MFxvuKaasgCqxKkKaGDLBFivoWja8MC6nr9f7BMeag5MUs",
  "key14": "5sJeTgnWWeFZk7qwd6RAcFKTkvgFRb4K6aW3dvPP1zFoTd7inUbT4j6Na6sZ8UM1JD8zjdSH4ia6jeUhLYhvwaQC",
  "key15": "2cueTuXnbPFieb6GSGqDzLsvPij2xzGczxEkbhPnYu1wa4GY3KowUzMD4qgcTSEvTvAhhN8BJPCcLjvofS56xgCY",
  "key16": "47jd1vVBP8Zy2bN4hk4qarCxmWAJaBr2KBtmPuCDZwY3Tvvmc1EQw9iandPqsaQMTvxnVejTGZv3wH3oWDLB5TvX",
  "key17": "29dpJZfztZj8YynDJm6upKEZE2S53pNrfhPS9EsvPtSCrJuMA4tXV9NWY9XB1p79UF4xMzvrbXGYFvm8veYNDPoG",
  "key18": "5mXqgwowMY3gdxGLSMveYe1cUCiBx2YDtDHq4ZUjTY9azcSVyAFv4yZSWtbHSTRDv81FVLcQrie79zwv2iMW3Tcz",
  "key19": "3fj5ScpNLVJ8AVx3cMx2cSsFVH7VfvTiAdrGKf7RSwEhEywh7zSsf5E1nHWm9L2UfusWqybeC9YJBFyhDtqUTim4",
  "key20": "5M5rkb6v4DYQ93E9QztYXbaKGNzh9onuctshkNZXcZYUjzLZ3WezMpr1NF9NGmuCwMcnyac9u7txdBYHcVVa28V",
  "key21": "5BKPepMtD6jayttzg8fkT6ywqZyT2SkTuPozZ9J15HCf9YWtDd2tBcHfehkBPT5vSsgK1mAbyVUzy36yyNWFpjpH",
  "key22": "5Yt3jbHgb9UDAzvJ83TmeFCKtFY6ogzLwRaFsM1KeYM5R1kDuf1KDsBgdWBtYZRYyqSQLrmAu6TJfZgZjnHWFKX4",
  "key23": "2PG6MF3CGT26oP52zo9Ef8Co6anEKebFPbGqM4EpnUYbmb7T7DTXHKECoJPv7vrr3SAD1b6qYnsxzvn289hXLhtF",
  "key24": "4KCf6ZVwLjTLpwEuyX1gxRHS6kbX4pHX2CjeobmaPDqSCFvH3DrMkMsM8rHQwhsXT9CKLLxUbE6GQFWHnJNLDmBL",
  "key25": "4q8K4L19U1C8moapoaQoGNtJ5QjikqKLLnWrxztK3MJbCjiKyYDhWmL8P2XY6Te2M8i2bo3mCRPSnxeDtiF5fWGo",
  "key26": "293qLkF62NKGtBgrZgP62Vsg75EUQ6CVa7VPfHwDwxiDH922fqSLjeuGh2B2WeEfbLeiYwuhmBGbyzEAEhvtsyZR",
  "key27": "5FWFUQcEriJKogSPYLesuWaeVkTaYGCL4VQGPnKeUkThyLb1DZsKadtDPQUh7KzYRVh8TTvs5JHq3XfD4Xvc3H2w",
  "key28": "cmuhgWZHTr6Srg9wQbp47xWHEJMsoV3CvPSEkcN9LrNAgKFfSCuJyaBuudMpxqcS3e4dmMzVvz9mEgmmfa1jsho",
  "key29": "w2ygbD2DUXQZoyyrMxGG3US34yUXP5tkeu9Va33EfEDJR6X22EuE7gw67cuiRJWxFnv3xursn74fL4eyf2p43bp",
  "key30": "4CggoZwUCFPzy2piXcUhs7o3z59qtZvHCg5DcdkzVMbk9ekYwPKdZB42h7BTC9VLqZVhqLtkFq5jPDNMqgn9DDw6",
  "key31": "4DfUEAL7riciEuVKHj3EviCuvkSRFuu1a9qtAdjgUS8fi7jez163gCn6sY6atbo7uUJfhVz4NjBCsqbs4Z3ZTh71",
  "key32": "2zw6MNcefnKuB5Dyw8XqzgJXLgP23ek3Jk4YjTX4WCUjAencMJvkRdpiVLzMUqZ2j1PbnNJPXaGnSYhSCfJCHsJb",
  "key33": "4XZWREXYPxRDTwyTHxmX1NgovVAZNLMeqDcBoKTDhEh1MESEdnZrFeGVfaRfGLciikc2KxPMCVWJxCUKks4A6zmc",
  "key34": "2QM6JSfmzL6vhYniUizpeRo57cXCvxmBxMC9FSBgU6cvn83bbjR3CpcvGkL9VBYu2RTRuXby5pUQuEgmk1nbWaCi",
  "key35": "2GywHEWUB37SnfDRiK4sfM9umAtbpndTrLcyD612EW2uAjWh8kdKBSYidFP7DggFPqqeXJoeQJ2U8njvWaimMiMr",
  "key36": "5Km7jBzkhjqKvWLnRGkWQBXnDE4cFQEtx7M2jnWSJHJsUDFrC3PMoiAxb9XqbjrmMnAYNRpDjDR9Ag5Pfkqm2VKj"
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
