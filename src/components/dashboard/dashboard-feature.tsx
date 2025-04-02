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
    "4SaKVh5Gm63EyKkesoehJjLESY9F1gLwURZEwuvSFzTwykoawm9R6pWpnx6Xe8TmmkCyALRm2B7y2Yqz4SKzTrkJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cFFTVFjGnYYHqoVKt1TzpDfZDGCBwDfLhu9njUjJwgZkG4PocRjGyJc33pbxzhQyxDWaytL5svLbTswJDYG13js",
  "key1": "4KtLPguMGSFdAqkYrRNFkC7uxSs5dKsQViLhNhvKL7ouVmgtZns4HK9QmgKfyk42dK3zPqwu6GhuvuWxD9FuXP3X",
  "key2": "5gZSiyGykskACNT6qDmuUG3VhPY7hUB1o2yTvMjzJANyfosPRPAHz1aKeVQXsThczfS3kTwFMXMmQ6Hyoyu1yKMR",
  "key3": "4zAJaojmCphTMk7FG8yST2BspmU1ccidEBwAVdBdzKJ7ret64J4L39hdEbtYEB7yUHVnbdqgQsuPtJVGJf3AhaDt",
  "key4": "4mAYok3kjNKjr4avWYQAAt6s8feaHKjghDi5D1J8f2HgDckN24MwkvFoTw36Gh15ttQ7iCUGWn6bpjEJgHst6wH2",
  "key5": "3tRgaWggHJEpJdmmdXpU7nX2jBkn7fR7RvKe6EKP32zKpHAsyUzp6ZspAXmWK9kp8wiYHT8CKpPTVzca67oCCJsQ",
  "key6": "3nQMm3XhYjrdLVPp39o7k5VD7e4C5L2SicKLB26Z1iHkXuMzmWEEVb9r7maH6YAMpRD8cXQ5XmDAUewNTBzsFPXR",
  "key7": "5TTGH8VQ8vwHSKZEGfZcQL9prTtEGYmjmNGEuirnfru2DRsP4EiEJ8Vw8EfQ6rsvhtX8UoGoMaDcMoFYT1BVyrJ9",
  "key8": "4YrZRAs26JrSyxm9xBPpGMYHmmToKvNtwEWvcxvUfscsgLHf6JxX7Sz5guZ4oYxmCYVyXZMAHZY6yqSLqen4wTpA",
  "key9": "3FWWMKrXyX2coJxfQGrfKqvMGjMxyeuT6ytjezTXAES24QARL6kXvkCB4mXR8JRMbzYsRzHkaZxDnQN2ZxzWcwUv",
  "key10": "2bdodCF7yH69eTxCDUQEKyDUNNzHCZgmwhuiHQmufH6japE2XXub2dqvN2PKDz6LmpwQuMMhFbeuwvmi7Uwguuvu",
  "key11": "2HTWdofrXDV4NMFq1KhWzC98aPhXax1dCacCfcLwBDX6zo3LyRhVmUuDLmoqtLpDqUawzG9VKPcsFx2to2c5F15y",
  "key12": "5rr1nksTPJ1KQ7Wxtu1S9DRPQWFSrs2nLFnokSJSZFzQZVxPaAHCiSaTDXGiphprxSW1ejzfGwec7YatqnhYHf22",
  "key13": "5SjNwxMcvdjMsu1PUFHRfPeWP5Az5H3MkLqkmaZAPPTHBCdSwXcopiiYV9scRWBCvddfVY11egrUGRnd93MxwW7c",
  "key14": "4XYwK1Mdzvbv8nqcZStrSGbEgxTye7wdkv8BcJ45va3snCahqbv4wpgmidfkagzVnZyNcEyvD9rwoKSgC61CpFYx",
  "key15": "gnUYYnB9hQWTDfERquyp275wzF3gdLPWYxYuTQPx1ELMmwGmgJTZENyLvN3NVgjynVavsJjhxQALKrx7Z532uv8",
  "key16": "4uUYYL7A4a7aYgCGZRh8bfS4TNXUGrSdeq3Kx3u8op8BHZN4SgkScEh5PGTAdAJF6p58ZBFTQLzT4XnAVRs1Xwwg",
  "key17": "woy3cXNPNBrbYcy5CT4kmQrj5gZX2qwHbLUXTeUPUBuz6krw9omn3fJDQE8KyuqJt3qXScMHviKgpbA1tHgqK8v",
  "key18": "3fVYD354EMTdMNAfsJPJUAedtXhn1r6fuzYYthSkWtUfmom9W4XR6oRMoqDurLGhvFMfpyn6UaubtreCXgHiLfHV",
  "key19": "4sUXVHKojpdgVFi2Mdgr2SsX7EULqXW5mWffwC7XgbmUVLUs3xAQwgEt7TZcuza9RRggG5tUg7oZCYVyVx7n3V8E",
  "key20": "5jLDb6e3J6GzMpMicGustMf3rvFVSNSGuj5FE1JRjXx6yGvRz5Vc9hTHKSypshYuMNuJ3oqCDZtg4XbE2RPVkEdm",
  "key21": "2XZzFU9DFDtgdcyNNc1rLEg7ktc9LjRPw2yeAx3JxNaPJzuKfAeE8Rbx5dDx1rByjmKPnAqP9hKb312SFkwtxYxH",
  "key22": "5VdvsCR62R4EMkMF4vdVwNUjMgbQeovHr5vvxizm2CRqadHJs9k8YHcpYhtm74NehvKZE55D2mX8yL27P4mqSXVL",
  "key23": "jcmMZ9sUEr8bbUAHeHtq13FaVh5ifDgJchUfDpwjg8b5KrpqBjGrMThD5fAKTH2CFJYJqNeWJf2tx1Vwjquhjmw",
  "key24": "661ck9mTtxgibjiEzPcq9vKoDa1mMD4SH2cRWPhE4UjKtAH69EoBQ1Rocxr3VH7C52DRcDj3AWZTyJmY4V45Tehk"
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
