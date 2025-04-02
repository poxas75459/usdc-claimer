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
    "4Z13ni4Pqk2UjbbUnMLTV4WZH6JBBceGbmVd3HuCMxSNe3NJE9bx5ShXxCUWCymYb6PgkDCJGSgXgExBLmoc7LL7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ssyV6mVrDKg32uCygAadVgGRZzpZX7xqVbku6JEjJrYMxtutMKxtsHKUsAeskdwFEeHWNZj2sNwpWQ5vg1kXHGD",
  "key1": "586MdUNDBJS9E4JKijpnvfsp3QHRrtJz5ZRCRnPwSjmByW5crSsx95SLmS4J5qYyfCcde2brndfQN8j2G7BgczLK",
  "key2": "3ySTKfYgRDDg5zftW52umdtmFEN8dEdjRWTeZbnCewYwN2qeK6JjTMhgMgecxhTgtdhUCayH9H2SikxuUYQTS4hB",
  "key3": "5Mog1Hg8ztsrYnu5fdKxT9bzyDxNRKD5WLBSpw9w3LWYorio5cSm8oCxjQkdQjXub17YaToQPZHkjbDsESh267vs",
  "key4": "5TG9P1nCFbdsKPXCorYsw71BAyTTSVgCDGd6vuEoUVs9WB3Y9cbRyfv3JnrJx5fqqdCQjCvqXEaFPq2ZXT31C1Lm",
  "key5": "32hyEV8cAgJZTA2aj7pGJ3NZQ4n2j2a4Y7eubgRXu4Z5WKfaXK5iBT2QhwkUHG315wgvWv8LSTYFT7sTuBNcndzh",
  "key6": "4kpf3AYZZb2APAK6Tg7YT9UpvFnc2v6oa4veK1JyT7cN4wDZS2iTrZZYk3JfiBrguW8Hri4BKnmZrVnr2qnBf3hZ",
  "key7": "2zcMb8PxAKhKpue7JFsTUBis22eLi7U26X2PHRN8bRE8KhpSvqXm2YAUDDiJtxnWCAGTZstLGmVpR3AoNSm5NvFL",
  "key8": "2yavqrTwXxSVzigtAAujhcvUPMuSGkrx3BtmaCamACniNyJPGjCccZvtMW2FDSHk1VL5AfX2HAAfmMXsbFAehUVp",
  "key9": "2DmUz7mmieq8KrpyX9VQC1X54xe1iY5kosne7F6FMNt12zJqVpwWf9W5VpoMZLRmWiZCTuFpw5BYDjXEesrDStmX",
  "key10": "5FfRsA4JVPnUDFvvp67hBqrPU8fdtQhdqCJsGYAoVyt5LRd2oV86uPrvmfdethTZxr4tjujmhXAsAZw93sSC1fpn",
  "key11": "2xanjP1xgmmiq8Z6HR8nn82YbX5vPuhqCtaE1X9QxEeiAmu6ejpE8phnqb9b5gRVBoiW3w2bak2rH23mCKgN5Qpy",
  "key12": "48WhuD8soAXik4oGKywGLjJhHNwJufNd7aSZAxnGJrVV4tJmBTgR7eDtM91n55Pa8dSM1wju9xqDq6qyaLvL43F4",
  "key13": "3ndEsLBKrxSycs2YD43t344pm2XxreCegMFcCfNx6CeLtA3fd4rCYpei687sCJgg3KMFYHgrvDDPWkxdBvjULNvW",
  "key14": "42cyjDmGX4SHbWSkJxXAToTdJnGT5Kbh2ovd5fibXEmFVmBAFRm2GbEVnFboiiEuJKoojGb2PJmbt542YffrUMAn",
  "key15": "9hyerhP7CnFQq3zqLQC7W7NyZ24iHGHeJNokUkyp4B3fyZcFY2hV1jc48zBBWz7VhXrpw6PS7qs3tN2p9BhNpxH",
  "key16": "3miuQmMmjmDuTWENgpSHujNZQWv7yx1zXx5ytacTtckG6QFepZ3ZzoUGmX4F1xncutvYmnX8owkQR8NgGzZCwN3V",
  "key17": "4VwQpCgbdXNzzvy6e9jTwwSG2xgjo3VdLNce8uGNXnBR4Mpv8UX2VLonD8EFH7nozd9qKBgELwB9mHmQmCSTv2f1",
  "key18": "37EKNoTc8hkrbUxuLe9PWYwVkMvX1DYq37hRcYjE4Nv3yrZNUZAvGUmU7v4zhJ1DXR9naCe7GatQKBwmW34NCsov",
  "key19": "3dbAaefdDjQbPm5fRdzrKXcsr52bYJLdCUyomyRJYHfGphU7xSgSy17tvkeuy8yRLLX2BsnTnES9aun1KgAsadYD",
  "key20": "2zKX5oqCbpKYzuJrPu6bmtL1usok7CUEVpAmXVUSTcydKr1cMYpYGQYXzZzDwHEGnT4tQ2sAQY4yVn9rk1xJxbyp",
  "key21": "4pzV4ZxSwKxaNrm6RG1ii3wBSPaYtg4u7jepvfT9j86mU5micdCSUsmWSQSy2vTAAHiSv4grHGn8bH6uKWwxCPFN",
  "key22": "5T6CtfC4YimMMpwPvoh7pJv6qx2u1FyvB8vYBPdYWdAJg5oPTNhqojzwAD4LhHMHViMLKaQnNENg44qzR4KH4ctf",
  "key23": "2b2g6ARj2YzY5RSNVUKu3gfVaQszy4EskpBJnSqBjun1Sf7WDqMi78MbFZJP6qvjcujp1aFV9XcakVH3wrngAJte",
  "key24": "5toKhd1Rdmfg3Qx2Zskp5LikAuzz5jg5vLs2HiJK8LAbwxMmkZ4HZpEkePWCw6TYaupniYsKA9JVKNp5pSNgQi36",
  "key25": "5kmEe1YjGRgKpGVJra1AAQa6D9sF9pTnfDew3P3n4PMRMCt5S4xWLJaaLmVggg5KyJ1FaN2taMv74Xh7wMQ3F9Wf"
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
