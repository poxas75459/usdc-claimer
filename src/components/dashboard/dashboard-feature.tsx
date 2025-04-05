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
    "2LCdpdCYAz2xbcQh4Yb1519EP4JsX5DJF5zjM5D6f6ZzVLwJ21qqroUPsXLCs8P72Y4CUsquBQzavJpAsFDm9Gm6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iag312x7fxcfDMyTFwjxmfsPrwP5AUCYCXgc6H18dc5Uzqrdc65Zpc5poQ3fAJc7BeUYq9PyGwbh2kXyfKVFvU3",
  "key1": "2YrAiSBLAyv2Dia5ddLFhoX6Qe1pwSBRgDytGVc8NSjdG2dRW1UEe4YAmgsHqEbn4zJjSZ6akTjFqMWquWSuf8Qk",
  "key2": "62AijPVMhzJRHb4sodVUeovo1gxLiwommMakbTigVqBpD5SrZnVo3r1RCycJTwHhQxAwmEhmpW5wZ9TcZQYvyvm4",
  "key3": "5gLFV1Q1vtT2Pqjq7G2WGvfydE6kFY2hu56Httj4zBWYX1Ybuz1M6PNQM9m5x4RLfkyMQkHxh1jYPkRZkfGq3TKi",
  "key4": "52eaohuRHCPTBmCyiUmBXDjsRTNMpPeq2mPBiEucj51PPdYS4aUuYCUpkKg31Kzb6xLv7XVo6cofuKjf9HRcF7F5",
  "key5": "4KNHZ6JjXNtvETb8s3qSfsNPz4gKTRKMWAMdWwwHKA9YTxjYRCvFdYo1r1Aba9tjKMu5UsheGaNnZqGkKTfjZyy1",
  "key6": "4VEHeqtKzBsdsD6VybgMcEigHoqteJxQaXk4pdzPAufWU6ujPo9BVkoUJRXxnsoGHmbPVBEK6nNKLVADgr1qz7RM",
  "key7": "39gT5eKbxpPi3oayiNTMkZysKTZDTm3vhDxDGQs3qvpebYevKwDbH59R9PsF1SykSAUGCT7ggpSp467nknGCYHjs",
  "key8": "b9pQZzp7woXGdMrzzxBdrEngNPKyiZSAJDoG3y7DcAgD3st3sgXR28rpciqxiXueryHe9GmcixV8KmN4Zy8xDZg",
  "key9": "PVeTJu6sK6XyTabCVRqL8ZuXahLRhnHcs2AhpVTas6kpCNSfQxB32FvUaaZTsq5UDxjWz9fPgVf8E3Wvi9KpaGi",
  "key10": "5nzxrv8QqzJdTbzmxjnDqizZptZwfU6vH1ZBJNqqb6fyDKB4xsv3F8wyAzE1dsLeouLNNuiZcC4eaWmEY47EzroG",
  "key11": "tiRRnLgTkK8ogwbDyMttH3hLgvhM588Vgnh5EEHb7m6BNmNiwmxZSK9qxbcEPfcqqZkmqX4RCWfmKAZxf7QkEa6",
  "key12": "3dgdDtX8HX4wHfeE8PMMQuspnuttGk6TgmYTyfWjDbTVLV5qPanqhf3wAVXRASZpksLUU2VX76qpM9bdMys5uHPg",
  "key13": "5irEi6GGMjiKBnxCMUrNe2iocgUEZzTGpLaW22sJGuXmiPXkr1zFTV69iuVJcGsVkUN99hNwSRWmHbTMpMybuGx1",
  "key14": "2Co2EoKJ1M5CB5eC6ttS2cDv5ruwg9c5HhTZvgSDn5gtAocGWW47M84WnvDadkgw6MkbvQuHQSps34uy8vT5qq1Q",
  "key15": "4TD6ZdfdBNnUg7RgU3ciiFXwNVx9j6PhfEgzoBn62XurjfHkUngmSZZUydHkPn3XHLt4BDyRuGd1dhWoLCpGwYz",
  "key16": "5DnFfP1pAvKi6ZHMdH1o5Ymuusu2dXqsvUyKc3P66vSgeK68KFHws6mYmBFdTL6eZyHEjKo4NBV4hXCPxgtuExcP",
  "key17": "2yJgMF5s2bhP86DUCu4cnP2bjUCg1r9VHAES7V9Jx9jwTansxnwfiKjrxThYReTyRkiuQ3kcQVQZBbcy4DsPFiob",
  "key18": "5SyY8odjhQKqs1or6MRRPkGkVmBTHa9qMcbZkyrCYoTtGAwZtikevFByJ8AnkfYCFhU9KrNRF27jhEf4fBdztJiX",
  "key19": "252VSJSYFpEish155hWeiggsAmeKkfHwYMLC4342Nm1Cb77K7oYUEc5Lnk7ZErvWW2tvLGq3xCgkEWwfWZyGoUXw",
  "key20": "27kbEhk8DXJsQfGviy4rvGf588Q93q73GGmaJjbr8DF7n3B5ax2VjNNhh76G1tX7CmN8SCWyzQnSjzy4Pwufcvhr",
  "key21": "2JfJbeVCFxMN13HPNJ2CEcpzKP1VztNEDdfzjPfWqGoVgdQXSfbvYjWAJKWicMEUa31TdsBdtUFCyWheSsA6ztbW",
  "key22": "5PRARCV7uGbf2VoNMNLvA59uETDDsgDYESRCjBUtGjkZNnv8Ko1yrZipzhXzkTaPwpJvmBNSkdRnhceLF3JXvMxW",
  "key23": "2o1HFQNj4XAoQZMYC6G1CY46QvJBqg8rmfuFxTfDEuAixmhys9pfzjnYynPi1aCFhLz7RYiKNcr8bkxw2ny3ckb9",
  "key24": "5NFGkpKyenCV2DxYunDAC7PspAa1YRrvbesWC7zHabaNUxt2ZmB98wQXoBg4YM6i32gSuTREWnVuTmVwvfjiz44b",
  "key25": "2khGb3BJ2XQ36bdEx7oRFp8V16Ducy75ZVTeEgNHZzPtTgGBu6FAZmcjQtQVrtRQ8MhH2esFWbcVw6531RPT83YS",
  "key26": "43HvrYgwCXp95ht18nX2VA9bRtAec7CqS886wf3bE2s3AfdQ7k6SP6KreVc3jUeF1xhREcLbaoVfVUaJ3CDRXpaA",
  "key27": "4ocV6CDnmrgyNPFoLMAVSuoRHq3Bq6phEQ8JVnDWFGwTinEZGNApL6FSR3RQ8TJ363Wrkp51NGErVgGiLQPeKAUQ"
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
