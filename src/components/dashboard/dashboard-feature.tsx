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
    "2djWZvmSGdpehTafkMs1DNgQ3LTkcZMN4SiFWgGjrLfFyzgP7Jwnf1ztHgfpvfdDR7mmMd4Ag1qjcqjijtMBrzBH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GgpbkDdfjxz3seie1GBYJRWYxQ5XAEqjnQyuqLe9dRF9wm27nfJwey8a65ZhaHGeU5QfmAChubhTNH9khGfjUkx",
  "key1": "4c3m7zrndZoYgyfCgDb1rEaaHhMSsrrFamdQNfziHU7PTvhV2h1BGNnYUc8WpGyiTHjYTfWCMjidF6bwGyBbRrpX",
  "key2": "37TUK1jGKCf4CYa9ytUHjLU8vfrFjbuPAwxarV2uhn3SFjkVr14jEfDGRTuovqrsmfVasA7GgazZ5XTuAMotVgn6",
  "key3": "4nN38mH9CVAFPjDvRaRNYVBZ72KLJ9R2hyWPZt7BnTVTHfDV4C3Tf2Njtb3gEFQmoRGJBHGwJNeYgXuvxup43LMH",
  "key4": "3pqHfEH84Zhp9B1sdcZ7GBBMeMq9zXU3mfgVB8APK8n41NSAPaTp18vkPRGN5r3yzv1tMjHtmY3azFUwDDf45Jpc",
  "key5": "cnhSSZvoekjLTuYH36o2CNtoqFkBHAcJxksvpo76VdZEknqQ7YLg8pcyVemsxiitTnHKRKvndhU3c9gFzMf3Da6",
  "key6": "61hbwTg2mzH4HTKcM43qtayEdSwB8cKVwToqxzmkGuVAhyGECaqsTXPvPisrs5Xd2eZAWXaRNVSovkEskeDVMLJf",
  "key7": "4qpbCuVaaD8yxdXR8xyF3sQEtor12n83pcQTQJ5GVsLLmRW51Zfy8kff1mzNC6pdgQMQ5Xm6iBtXLQ7FDxyNBtH1",
  "key8": "57fpfuCco64CEHuKXbbEfYrh4rCSDBQDwsm3A57XDt21Tf9x7L1QqzEWSJAHEwCENGvsaT2nRCvW6nUDh1djKqoW",
  "key9": "57WMSaS2pEyLjd4qa5hWh59D29xFXK142uPopjxkZSyFmYxvFVbqqSNPRhkVYUquB1UzsTozAbbxGngGxPdcFHzS",
  "key10": "ZD8Twup2GeXsSoLiGJmxbHKAKkUvVLXGD5SD8qXf8fW6bEZxdPWpxoLhoyWmmsakVSZ3WMionHfvuCEErcxzqq9",
  "key11": "4jFqMmuCcYzKKJRSKbJDb36MoBiUjGdMQbwXR7ziueNbCZDn8KS5A8AD2DccQqx3xsrXvmynH7ihLFGNCx79doVc",
  "key12": "2yhdFBHWeGcGukATQWFj3NQVSHuo5KXkrpe9RfvCPdiRrT2r14ueEhHwjyMEHZ7N7eNLShX2hLKw67YtVDyomEoS",
  "key13": "4MyWgpBL6d12tuXkrKbgF4TEPVGvk2UKx4dUaPDiyNHEka3iTk3L7NKAM8c28khRdpwKKLhAok2SUDJXqojY6dza",
  "key14": "4Qy6sX6BEYmoLFtrPdBsJPFwRNFX4WuSHejJS5JBtheQ17xmZnJM3QZgZTbEbKQDxtCgfR461g2XPz72jaMu3LtG",
  "key15": "3BjPE4FyTMAk69Rxnfr9VjrXDg1Y4sNVKVbY1htnLGHz9C5FGoRVK6pmk4iYUQn38Rse8cTRMCdXQsbHMZAt9G5T",
  "key16": "3eBcJaebrsnMkhyhhE7riQ3c1Bc3Dfk2NjX9GFy6WQHwcHLwMECKYTMdgtWq2fKDK9DsdeEAvjxHetCd4SS6UE2R",
  "key17": "NkyBU1isCWNqtGwn1xPho7m4At9c1EnZPVJTkjzhdoB3e88us2M8JYWDh2q38KUt66VXm5qJi7Rq8h64nvQM6ri",
  "key18": "2nS22QtMyt5B9dX51eSawNAsCjh11suKSgEPTqn4aFYnYkfqRLjLJ3qB2DBgfGs9aaosoreTo44gHJnrWwhhYQ6Q",
  "key19": "5h1BzQFsEiTatJ3ixM8Lwnc95oDSvjNUxhG8KnW1wReT6GeNQ7dckimuNdBvgtVGeiYhJMVRDLBwnwdREWek1Jhf",
  "key20": "2nJGN5p1JLNXhv13P6Jf14No4WEtxHLJHbeuQbgY5pnn8onAUmoWu2D2fatr9r5w2hHizM77ts72WbPY78jDU4NS",
  "key21": "PX4ig4onQzxBSNuCrxGqBAoS6vFzcqWTRHehXxZgstbQf241aubyiXDT7RPFgcs6GAAMNfJVj4uHkMjiRF7KCDt",
  "key22": "5y7FdnSLC4yeXyNp425CCXhKvnTe8xqnxwRSpBdRR2RmAAMguz8mHX2k5z8zADCH15SZvmSZGDNyfAWa3a4CC4Cr",
  "key23": "2qs8rg4WsRUCVhHYcKFB7muv5xHaHW6ApFLsVJd1nSLY68L6p9mjdr95MzBkfE3w366hpbffmLovq4tzb8z2W89C",
  "key24": "2jjtXhnXXvttU236LBq2mqSXqphTvUjhY4tdPXGt2mJKzJykFYgPrZid1KWftvZLy5LevvkJ7QrBQ9B5HxN97QEA",
  "key25": "63tsSQVwEhZyXu7YShWwyBrdYCChJMc3kWBzrJVKVHw99KabUG7bWX3igU8sLTk6L3mNmYXyUKQCnHk1cGSvhMHK",
  "key26": "21zuTFMSqE8YXxgeXGHSkueHn17hhGqLetMZyLyNYQNenuUwvzuBse7Krh89gHbdzy5ikeCJBkHPBaEwpTbuURcb",
  "key27": "3g6fWPi2fTw7EnaDSjxHEfphysXoVifeJ6UHtZfoXfeuXZizkCND31gdHwtLpRD8KerMT1x2tQr4rcDS21XWXf8H",
  "key28": "2RJ1JCi2RL3DXKt2LAHfxHrjfsNjg5eQkBJtRgnqUq41CXPi4M7nuRERuuL489izyjUo747iAdnCvrfWjbQhA54r",
  "key29": "3BZUmS1GxW36RxyRPAho6ibfsSZTXTXNG7L9tC4FyenmC2VRDLoyeRhQ2itndaJGGj35S53ZmtMqAn2k78kUxFe5",
  "key30": "4tCaQNw8vY2ycJZR7rt7avJkWPN9pPSvcW79DwjZfeQiNtYP47Ay2FsuL5YMHMTYrgEKte1TbAAmVsk7jdQpTMix",
  "key31": "5eVSxuBpVd2pKZetvcpp9cFJ7ScXbQ1wmT1AiiProdKVqCU3M52RBQG35DEVvtd8ZWqLGWGdWnC3pG2DQ4stYqNK",
  "key32": "PkPyJ9sFPeRxZHRsFsxrrx3RJZA7v1koT9qWh5hMxvZEuhQ6Mbi5oiJwQ8bFo32qiPycZ8znus6pFTpCZi8AcZG",
  "key33": "577uJLLjox4tRz6wU4ubmoc3r4ZVPvbVqyHjejGPpv88Ez6kWt5AGJXc7QP6tX7ytKY2m1m2RMUfNzbYQJcxK49j",
  "key34": "3E3fzWXjrLtFcXDKFBbLDdk6Ns738zEsZC4zMVqqqWrZ4Mtx3KmV74K2ygyi7d1uEhwbVXnBwdzXoNXB8UWkvVJ2",
  "key35": "4rwJ45GZYnaQvhiXi9nsVuFbkdritCip17ZuBm97wLscibm5aYPVPUfXxEMwGS9df1FKPNPmmhmxLqzoJ4zthjQD",
  "key36": "3kJDB481GfHZP1pztFdgFjtUKUoo7MERCbt5HmFdjgYZrmkGFVfAHRhtTi7yrAnGYKgBn7zdFsi7kbbzbQnzFGfo"
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
