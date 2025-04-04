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
    "5JCyP82TxmUAXnuwW9uachxhjGyoJc56gusHj69pp4iJsbJSaZdPk9oWaDcmV86cHUJfCWwtQBKzFtPZ6eMMvPNx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xgWCjTHHysUj37ZoDdvF5RXhvZDNDg7i8Qf2MM8riwpXCmBxCN4Dp5kkouMmB1yjFFubTkCUeJXSeytJXMTxvUh",
  "key1": "2xMjbL5fRF4E1b14oe5kxreVpVGtdU1UDmikiHL4dATF97DZag2sXRWhvgaZPScxtinE7aTfLVjrPmMJQwet9qhC",
  "key2": "Kffr3YXBbetXYW6ioWr6NLw59oHcFUYLGmYT62984v1wKfWGjjVRYFYtkLCfyXp7NXfpoEMss6ozuHDsZqPcTm6",
  "key3": "3WEVfudmcyDAn5hNCmyjXoPp3U1YD9njdN9xfDBVZB9YSVDMhgLmrRwHbrSdxJnC9nJF6ZW5bmx1Ew46UcaEMnoM",
  "key4": "5X1UQ68ySheXEn1v2kTPenQksT7ZhHHbxRm2RhpDctaDepYbSPPh5zZmSiJP4TR9wRHPmngavXg6ZMnSpQVen9ak",
  "key5": "4Uo2LkRT5q2csqkJsFQeVVfxFuouyGqCm242aVNxERzrrhiDKKdFkgdRwHTeQXwZMxQikm4J3UdvuVS8LWkK28zE",
  "key6": "5iukA9TmFzm7eAoFTWB2ptztYdV2AdPsMEi3wLSMwJCAaXx9Xv267QTWHNwhZxYeFXT7oWvPxBPaWFGhtYFasMMn",
  "key7": "3qygC7yxs9PDjh34HsXcj3PigaNJ2oqnMVCqHiQRWRBkzW2kDJfSYdA3LTPGsnS4sshQonxK5cyUzLqZos6q8ebw",
  "key8": "4CEWwTBmdY6SxPHPLhtfGjCurNBNkgaRsugftQ3a71tE317SLjH1NyEZuXYX9Zj7qZ7eE5GXspRx6wdPE6LzhLAt",
  "key9": "aphxKD9JV9DbeDFgxVfHAGBbURVQGFqo7Hm2v12b8BeUadNnCD4Yt4pAt3tMGwJzn1UivgCX5f2Jhk11oY8MrEH",
  "key10": "5tqVn8zQUqmnRzdz6xX5Rg2x9X6zHbmkeQvuu7KFicHdv3kckYq2fyJPfTXm1mZPyRhhTMWdwvNR1HVWPvsKox6V",
  "key11": "AFoaV3uFWmxayp4dGTgGeaKoQbewg6TGYZG2hChJwXGr3bXgucLxGpreiW2gyX63xivBh8JaDMCKG5bEVBujhZ6",
  "key12": "2TrKJs9k8eWMvhD8sUgajn2aHoZdxYye4UpitgKAtvCMg4QdnAUZxNwgXKpUo5Nv58uGsn65pn6jav7C2qaPsjrU",
  "key13": "4JgoQ57YW6TXrsjGGQkrZjSETywTfAiNzmHPcv4b7LUnJZzopXotmmauYNy6YNH1rXkCqyc7EVuuQTgKnvWrRNex",
  "key14": "8XsjEsT813vw8A7CP6YzrXMWH7LQ4zFKscs1UfDTjwvYEeCFJkEoGXkeHURR2Pk5ZJm3qEPHUQkTCxZQQbyuUbJ",
  "key15": "EPysXzsmzjHgt22XMfpUXYr2J39AQmtmZok158tVhNtrhf2dGBnbgcPs69zJPJpNHazDY41i1nXaaeT73H3poPc",
  "key16": "4tBFNtGpemodAA9w8J8woYpNj8eZWputwKNAx9LmUVmBeFBXXETqkEEXm13wobsc74fMTuJrYsqaojKyFuoGxbSe",
  "key17": "4GeG8mMDttg5KpeyTA9rMhiTZGWdm8tMXjVTVqMis2LG4vDqfzHFmUd3xc3epemfwXPCSCPMXfd535BoYPA7SL77",
  "key18": "zUsgkhextKy9zrdtz2ByaMqPp4Eh4WZpupux3SRq1f5AxccR3TG8H3zfhy9Za35nJnCbDT71yM6d5hjkVDfqUun",
  "key19": "3oVThBQFGdMvLTcxeA5BW7KdtGhjhsj63oyfciMaFCBHwQ8Xd2yV1V5VwhvWFd5nUTLh1GUnAtk71Cd2sLapRhLy",
  "key20": "4PLoTo5m1AVTuVkESWzrniKh9N7gCvCPiZwEbPn8YzKNmoqcSLLBx5BnYr4hMqNWTogpx4aFiGm3U6tXQ6F1V7HH",
  "key21": "3PvzHkgQnpoQLkefR2uzXMVWB6B1w1HPyJS3xyoNsT5QJCCkRwSqdZfyfWHhtLFRCDveNofzUtfoxf3x7XhnAABH",
  "key22": "4AX7ExweNEKzUXtsrDs8qL8qqGnhfDSD8k9We2FWq5zStmktmeZgnGfDKDHm2sCP7hU4Q8uukKU9yGX6sd3dXFvK",
  "key23": "2cENKF4vpWwZuATptTxMV4XD3vNVQqcXSyWb3yinqXXEVVbcVtKPnENhiaycQGFaJbic7EyFc8GL39AgBJP4U35p",
  "key24": "4CpXAM5ThrM1LhAFWq8svZmygDsvEtKXAKSxSuELVowp6miiCzAndiCw9scM5unZdjWRwL3BQHCWcBPZA4sVLJqy",
  "key25": "15Aiv3VgpLoVWMJTnM5r5CjwHZf8RjLDQB6hbfXqPzwmv3UAchnzb1z6PMZUsrVR2xtURRJ2eBP1mVMpEfiQjuX",
  "key26": "2TGzPoHLU4y8RzhxVmBFUMcVdPU6H1LPRAPbAYN6y3P1QmTXFsYC3avipVKQfU4A6GpZFaS6gJvh6N7rpoN2zkXh",
  "key27": "4W4b35su4my9cUo2fb7h18Vns5PJgSM6ArTVn5XGrAQWjgwn16koGgu12iQdMKBUCKvAsxmwAVFh4xheLbhzQqUK",
  "key28": "5M9ekyj4gQC8RrW4wK1U1yJ211tCksEnhFrUoM798Yb7DSerHmaxXnRqEZ9YXWwGTu7xEFzBoMfcvdwUMu2g5MP5",
  "key29": "2ozyMVpjS3MFZx1HPpjFZjWKSWQRzjqLn9m6tXsW5EH77agzeLiZhfj9q8UeWXpyRXkMHR8vPezgEm4xjS3eimwY",
  "key30": "jrE3MyPZdeGgQ5yhwZCtRonFxeHsHEFT6mS6LPeSWDXh7tGeCUoKxgadDj7SAAQwZWhXTrXkdAJBSp3ehtvjRyn"
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
