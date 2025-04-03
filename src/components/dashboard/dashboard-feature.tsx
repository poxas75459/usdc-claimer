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
    "4Qg4i1dtnmPVTAopECmLcnH6NcyoyZQGY34Hfvki5AAutnJgcyNd895V9nrHNMwETsdszH36s6AHNgwE9fojyDL9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KfPtqbr7tEH7LFCH1u3nWeK5S6XVeNrRarn9NPDPUtMNrF6o3gmVAKMr2rhrZPgpZ6v1o9evPZeNeeosjPqfns2",
  "key1": "5hxsQKSaRuJFSabtR9DYBFa8XqM9QQkmEWLceba8eDygxbXKmigVENeUoFZAbHR7qMsPesX9pVMue2ePKWUaeaWc",
  "key2": "4xacfDSVDeGtqYdc3c8mspa2FEcyNMiHqXQqmj7D8jufXBjNcg5SWg8aY62RfN6dVBAkmsNy4uw9kpERZdhjAixg",
  "key3": "2s31JMPEWbfG4H3vmkFNnKZpsh5Gw4ThsZyPehhYbHStojRnR9cgnG9dcqo7bQE3kaR2TGg731La24RSohj6p6M6",
  "key4": "2Rq7cQvGtnv6Ez2moJ2PNr9WQFNxDM3EK9nY2ztYfcSo9GPCVn5ySWN6312Dt2N5bUev1PjUkSiq2MS3oPjLE8Ax",
  "key5": "5aRjzhFKGv4iWJWcnL2ZhToJcmH8eJFTdYwVedoqVfX8Ahzebgt8GY5c2Xw9mC4AwHhbjaAJPEsUQUyPxeKYHB2V",
  "key6": "59XYrJeBZPPKVkRAMXoN8acqtEwjM7TTXwRqvmveXyCKSd5hMSK8MfhorgPhbPfNH592r8uSCMnrckXA4h2rjqqD",
  "key7": "bMDrTwhDJdKtLwYjaSYixrmHjo3KccMH8uawZ5dyj6ff7iz3hK5YH5Hxbd455XF37zndBHYdUrAKyDVNFVLjB1v",
  "key8": "HFfKVrfW6ce5qiNKYLR1LAHMPzWy16E7AyB38Pavx345sKaN4nCy1dcjRx3cMwwJ2fXy9Gh8QRj9jYZTdWP4VKC",
  "key9": "WSqayRgutLx1HL9Mj33ikuaN3aEU2z5vyGjpTq1n59KMRfXYdky5xykVrtd6HC71b273Jx7gVbDN7Lh8tFwZaeJ",
  "key10": "2Qpw7DxpRRnYo2vNG8A32LnH4Cim8y74ZWg5mquKXmnvJYWcSBHbdtrA3ZWFscuimX8LbSD2HfMXE6FLBGHywxiB",
  "key11": "2XqiBEELTxM6tQ7TxVxgyVLCYKnAUfbkYwFURpKHPUou6N3Edt6KNbZt2xvoo1mLArw8kk51TNC72uGgmhADtBwV",
  "key12": "43DUW5NmQWMoL9kFEY1tgrKcpDvHpf9BA51fhYBdfe8zcz1tfb6tZLKQPNGnsmrmr4VMHRmoaLdSjSpn2vfx8QNS",
  "key13": "2pB45V5mHaUUtemETYfJciZKDxnAjqmPXyf6n9EKTVkZWcCG6epotWuGaofLE7wg9R8mse7oMf2mHfNeZxfRA5X2",
  "key14": "3AfrU3ETxaxpLSkdNKKVm4gv9aEg6kLTfWeLeqTQgSftxrE4Lg2SX5jRXJdH1p7XEyVYgkeWUzqY2CryTKDvTsPj",
  "key15": "dQTP2BYsSHZBGEp667au1pXAmoLoszXTfipKEMMZtQPwUAEBmBTbTEPG58V4EkCM5BLYhj5L4okMbUyGG5MPZWv",
  "key16": "3qE5AAkzapvYMkgFjmUv7AAUipRWjNsDtGhgmzc9Mo9cGqWCN6AoVAWUPZ6wksBupYa731hwooxpds6TgsmJ8hMM",
  "key17": "3JYkuq8ojVFzgeTaPe5x9QTu3K8qcos5MSaa91fUWHFeJWtogEiahtJ9cAiNkazwjAfsDa3SrjexRjEzQdgMQReZ",
  "key18": "Jpma2vpt85zMMDLPfiApHk1JQaQek314McFcKUJJjwCwgygPRKnDAb8Dib729LFTHDdmZHhsfcxM61xWgeNw758",
  "key19": "4x4ucte3LmXuAEzyDf1zfbjvBGo1mpFaxWUvL1VQv31tsrnywh5gdsRxWgC12QQKMpc6pftaQWzkYgqbh53kqata",
  "key20": "AUTDTsiAq9FXfJ2fANXyMBCCmVgYZXkWxR6zE1bWdgZ4gduqjJb1EwE729YKnwdLwtYk6qAz549CtbQ6ZN7CUMR",
  "key21": "62woYNbvpkYey1PpH57FMQMka2YoGD6XkNbnb1xjDXQqAbruAm8zFDXAKfkgaquhur3YZ8eYbccAxWTLV7o9p7nc",
  "key22": "48T2RyrwoxGsm31kNU2r6UW1JAVLeMQddft9gNfvwL9DPPf6BB5opQd4DMdekZqjc1DFhHD83rFuS3Bz8VvLLi2z",
  "key23": "47CcVviuCFBDZ1LdcDRpktPeHW8puKBmkgVrt3NrVBoVjv1fP72b7C9v2kNqijAHXvjetDSgcX6jHcRzCkC5hYDM",
  "key24": "47q2Wo8YPetEjWceQjpC3L67ZwD3P1oUwSwaXCfQs9uoMvTCUMDrXrygW7HgNGi7BK6QZanu7bnANnoURcSQ9KBc",
  "key25": "5uaKVjocMvXqHRLKkFK2f4zRfageQ68RAyYpHT1ktBHuR1yUxxdPPYZZU5CqwHHAAbUtEhVdngPABw7JfSn3cxnR",
  "key26": "AX5xo88Sy3omL3Fovt9DjAyXuZytkzHSGFCGchZQtfoGtjAVRsYFJG6U8tWZADhfztMcCNeYZoLkLXeZH5zLpCF",
  "key27": "2VQ6BuDNyX2bfSrJe66Tpmm7CsnK6yMneGsocDHfRCicbbnH8etxxTFAn2xqrq3tFcEcgn6DpyVfne6CoPCLZ37m",
  "key28": "ZaurnPUMzcyR4B7tAKNJvZ21je7jsFEHGpLcNh4VV9NVwvy6EEiHwL8jc4rPqVd7rX24MfBq2iZWSeQAJYHSEjp",
  "key29": "3gMtL8U3tKsGXajzimmGLER5rnGDTk5kiRBtZ3tE46Zcdh6xKcvpZENnksAFD8kEUJsenaeZ2RFpMGbjFmMJPLJw",
  "key30": "2rnucxMeyPtr3L4pcrmwyWbXjofKV6jJy5jkvL5au95tAJwkj3neFpf1vDkpGVj9Dv6UKFd6nXGEPtNDpurux4Es",
  "key31": "43DLfpWQFYRMLQuwW6ehzc2UnhAoV7K1RcYYMs9q8RXy34iEinE1tTBGPXuhZDeP7iJFNju9GsUtcpWaWr7FNa3f",
  "key32": "i7k1W3wzT5CUbW2e9ds3TBbGrgZ6xbxoNvHsQe2DRtfcs2Jc7cV9V6eDcKxusUYXPyGWjuLH4jBv9VdMEWpJvRn",
  "key33": "3UntjS9cRtJpV4ud5C5JbmCrXE3x4DMbQ13iufmZV7QqAEaHzaXbjEN3ViHBvUUgAk5aqiKqZirvsnmZnF8U3TTg",
  "key34": "3uLe2wWrwHatTQA3YLSTpoTvF7jcmvqdkiqYJZmcV5PFFk79gWtsZcYPqkp92876MHP9TbgC2hEW2E8aXT2mHsDM",
  "key35": "2AV7ZyDAPdbwe3eyqsnVK1H2Hf6YEJUYMp3gLKFs557QtfFH4S9PYXLw439676U4WMqJGpStKoFTqBheYWoZQzK5"
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
