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
    "2yjgoXEDUsRkYW1VpT1uHerTirE9fhC8CaUjfeEtMTCqtabWWMPKCfm2iPwp8TqTN4H19tFejpNJQpC2m6b7xxjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RBuTzX3LtDjMBZCpioM5TFbLj7o8FnyuLfARnrdGb2TyRwSRpVLNSakPqUCLjyfi2eJG9QikpcwQMeDLDt8QdVQ",
  "key1": "5zB5RdD8qJkKG5KR4Lkv8ErcMYyNT49LLPamTSCqxLRyhzh5FJyBLwRknLrcQbNMGQ7kc8GpkF3fPi1h7ZcPgAw2",
  "key2": "zSu9btHQcRsRQdr8ZrdBtp9PBnMR7hKBevSDSW32gx7RoFPUojDSijo6zkG9Vc6uDFVKuZphPKW5n8Lr26Z2TnG",
  "key3": "3eCyTNv4VRbk3DJFoofu3QcR8G7ayu2CUzqTu7WSBAiv6uiu1r3foXAGKR5dPkJUjauSy5Cc4o7z3WXG2D7tg1im",
  "key4": "m7TReHi1Hzv9xzBk2SUjM5TFuvWbsuxzQK1te8NMW3Hr8qPMhpAt59JWRTYfrtFgXmxkD58MT3hnGisfiUGfSgZ",
  "key5": "3sSqpHdSLUB37cMb1TuiPry12MXUbM9ZyzwsD5L3Cquc1DpmpRNWorGbGqpGMerrnQiCqaXkLPeTFDwtBZ9NpL1y",
  "key6": "4SEEnbgFCEuBNZR7AENMxGJdfnWxLb51Lc2cJXGyRBHMazurpSsxVgyjeQxpS6ToNSmKKEBYiceRMSPer8dYQNWE",
  "key7": "3fN6vr9FvoUcA2bD9HMsArr3oXBnGuZovbzWRAB2vyq1hJ9keiZHWtGtU3LXHq2DPEdDvWEZvHukVQLxqFhddA8a",
  "key8": "3Jw6jg1pLbLzy1ajuVPr1Je2afCgYe5jchsq8XATZbX9aYRn7iSYkbeox1bem4xVQt3dSC2n6mMutSa4UE44yqBc",
  "key9": "5nGgMzJ46mCHaiYtqUBKN1NYbBHrQn7VDNVXP1zmERX3ZHAUiwgJsk2tGpocnpT8ATEuryzJsE5aKXbjMcsz4MxG",
  "key10": "46CaGqkPaE8SnJwvxbC1kMmHhVw3m6pwRyHTFMihuM6UCaFsoyYDX6CKeDjRY3k8EXRokKGRzjHcAqfTXRgxA9PZ",
  "key11": "475xkdtLgkDYW8BHqmwh2Yocv6CMsXUCFxnhLubzDExzNVLX1F3oDpC2Y2SzbQrBZ59JGeokFR4cyMueRjJUq7JP",
  "key12": "5HJGngTVzo9kxdqGFnzvzaTYYifQq5rsNaNCtr8KfFYmcmJPfRWjkLChSKHpitmv5Z7vcW7y9ekiM6DjkgiHtkHu",
  "key13": "5GEvrMBfBhxqa4HjDXbmvxtes7VtiuDg775UnXrhHJGroSXLaijBrPaqFWE6t3dRPFiJkJ373J7UR6eAAaQQQhCp",
  "key14": "2uaEq4KS9FCYDzZ9dNL7QdgSsxKPCuJxXZZHG6gkgCu2MfRcBd5UPRa8DwFUKYFVT2Viomkxb2nfC6f9H3xoJXTU",
  "key15": "5NywttZaEAyWNQS51Ei6vB8kVawQRSRgdYUr5tKQPcoWDoFmvxsUTuc4323F88DxkndhQ7aysCbkxrVihUJk8M4Q",
  "key16": "2gVu7CLqNfTmheHySzfZCEHMkTyK4o78Qgawm3AqndgdYrdVzTMTP2uQ4AHyRTDjVCzix8fwDx8TwwDap3Bh2M3J",
  "key17": "55HyEd8L1oWBes8C3mFPjvQXw1W5cjTfMtB42JGyMEGXeoCtYjW3SsUQuLT2fLx4PKGd97RocyjPkUmDg5QdiJtb",
  "key18": "46BfdSfjX1YHucDjFBDGsy2vtDJNZMT1QnyzBmSvAYyCdfytpRWJn155p9QiGhz91XhTbjtLEierzhmoLZDHFghS",
  "key19": "4dUheX9VtLv9v8At5W3RbHifyfAGbXMQcnkcCN2ayBqSTCVXnDV6sqrcDm7uYkbWvjgtF6dbhVPQ9ibWH14nezcg",
  "key20": "FFkqrPjzKNoyM7VjiyGNLwXgp5ffwCbrrumoCGUXW5gDiGq9Bdiv2a9D7LX3QgiHnEAEcnMQ9ekh4XqzLYx8KzJ",
  "key21": "5Ft2cXxAyuAKU3pPpTNphqdo7kcvKhieuchdq1vHaq1zL2rRmJ4fogYd2yGQ5taqvzR23LUWF4AyQiQAdHDjqo3L",
  "key22": "5EB1bMMewi23xNqzVFbNY34LibSfwNQAgLhTX91NfDaKSDGaAiP5K3Sk61TEASfLedXECTfkisByiZabFWeoA6i5",
  "key23": "3awUkevjnmbqCAChoyjG9t8cUfTbuFh1PoEbv8meDk5hj9GbXRymKU5qEKaBQJbQnbpQQi3a8RjCJmAxVCr7ZSqu",
  "key24": "5pcnv4ovFMX7jt6un4Kb6XWTioypbCnBAgnRiZ75TX4gUtTyobsuvcRw56QBUeo1yspNAareRj4utSRrVQjj2NBn",
  "key25": "56c6vd2xhCS5kwzWnDDLXUNhPdg5WSR8tThntbuvw4vkBS4emGtUTBb2CVEiPpGqEvRXMm7zGUmFTuSFWQjnDvfX",
  "key26": "2uJpuq98f7dtZcJyPaR2fj6Rx52JoKxA6s4hzufG8xi1AxdHGpS9mb6kz7jsnaoQRh2ejxGHnANUAsEFaZz78T4Q",
  "key27": "5jYfyNaMVXakV9pLXKgFKyruZvc6qDcACX3gwz76DGPjHUDpXRFms1EharjsGTmo9GEeKtwWEXXy5LyWHtoqbdJc"
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
