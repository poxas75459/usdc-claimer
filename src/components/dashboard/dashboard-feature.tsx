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
    "3YhJWyR6WqqgQKusTNR5vfHFaFsbZe6HujW22FzqutJtGE8qtFgeDdDdCPL5oCbHJXFmAW1WBaJpJLHBfxDUbQWZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28WhJBiPm3mDs7CDrhnQGW9Va2aN9z6KgYPGaTnmPYyZ2MpGFSf31icx8z9gWJPdK884PZmGcuith84Pq4cLNiy9",
  "key1": "4yp17KMkk32LuQk4aii2Cc46JBaDRp6qBWC1p92hguoMxp5rCnhHgQtGHkXeQtZbEWPptZ5GdjDuSb465taaJm3F",
  "key2": "3vtvj1YGpLL2bXJM4AYh8mZsKkvwawHhaxNCf5u5TbiQdd2i4r2WdYU72qS3KdmPB4KPpwbSvRVzfRmzpjsuQw2p",
  "key3": "36GWEyAnr3LkTWf96Eos73YDvg9TQjWTQqXpRfAE6FD4LVHaw44xUc1gjFxVMcUiNkspGbR8i5RmFMNhMSRpc2tB",
  "key4": "5o2J6aKgSjFrLKXGizjLYzXndQ9Baq948LefbBsX4szvoMbvAjVk3FXQFppCRxN2iS6EKUcDFvSAxbWoTvGkjetC",
  "key5": "4wCEEZCJ9fg6kfkwSeBRuhmLt9XGc5sqpzJzfK13BJugUWrA4H4uesrQJZf43ESJx49cG84d3RTviVaLm4kTpQGw",
  "key6": "3KZ3gYFjvd4eSjzFRxHCLC2wxa4TAoQHaMt5Cvs8nCnSyYNDgiSGPm3HBRZSJzvxa1yMXWqUvsNk1mKqASfi1mUy",
  "key7": "ELwjeSAVpuCWE6HhHavzTHDdpu6cLCSA7VkfyYin2FWckFY9K8Trik12ob3zUbvGQ2U4uuetRNaZMiLDp2yBVZj",
  "key8": "5jhjoHnFRQSVsookjttvVFB5dQUK5nmY4eoiytgC74Xu8GvXujWZsD8RMq8XfdcmaaQQ71S4X5vdDCUU8b8xgZVf",
  "key9": "58LVHgqx3Cst4FzeA6iWzx9Ysgm1Cp7S7iHjzHT1CNN9vTgFELJjoH1UnjtugjrPdn9FgVe2X99rB4FyuyYJKGLr",
  "key10": "6nq55NS2oj9vg79ycDYj1AdaZE93QSZEEwxzkag3QdxJx2ysKrutbgsyHQZNY12vYteGJnEJbH8rAu5oiY24SSY",
  "key11": "3gHG39sBPUxcnxHvHpPCYNxKDyAadW9dycmTVWzjTxCmSp9JZMfuHXizm1GsnoeB4aybQEmxTu8Ej3DhkX9TJZ2G",
  "key12": "gPZkH3wxUUmCTHA4WfjLJobpTS2AAvojGKaTf5iNSSxCSJUiS9EQ5Wk3WphwvSSAzhsQA46e4vdND3YRLy9GYqa",
  "key13": "1dgMhDi3pWQVENiDBo9tavMtqGUV947tLwG8B9ZMug6AUPDxkGubcrwxfpQZ9xpjF8Fb3ft4ym33WY1kHxzg32U",
  "key14": "44sik3YSXbtuM45MzkWyWSTT2MwKaBxhjRCjqsHKD8W5sW4StviFCEa4M4Ni11sqyjdqsCCGtqB6Ubned9yZBEoZ",
  "key15": "2HFydz5ka4ZB9SBGgMcEF9trjWfBkwFxCNuZinKVkxv6Vy2r1VVYg1C8fR8Sa1nrCno9q745F8ctsUQiyvHnvyeR",
  "key16": "23kLAzUgtSPiUd2EH2N8jXxqyUpdZdaSBaFkSQ5Sekx6bEuW6ibZQ4MFU7vLhkYSNKYmSHEXAd8d39krgbbQgMhX",
  "key17": "2aGFYFJWGsRTW1gPEavLyBuvPD9n6Mv8yoSY8TdBWMRmyoiGFbSYV92eUWE5CwUUR7ShsxtyPQ35pFR6wutZQQGT",
  "key18": "4FwVvmDUBwMQ9HQB5y5E6N4M3FsYZNfVRrqnY7ebQtfB8XZQXMeg7bzfZHLUjhzqjkSwMpnf1CejkbGAeiJZw5Uo",
  "key19": "3x5QSrBo7zHXJiPXDdeGoeBGRH6jgPWF1awBiHUXPZBwtaojzPTtScDRayC7ARrhDJT1V7Zx36eHAVMZeweqaFLf",
  "key20": "54Tz25fnRX8kiSjWmmvofaJFpv6xvUNtxHGPDABuaJk46dEE74qYxNSoxkhqRuouxkbSvVedGDT4ZuBZLSaxuEXp",
  "key21": "yPkzFDRxVxpvvx1aYHSVEh6spA8wCmbXGk9yc7MD3kpKRaptoXuMBbFVQpEuGpz3KfuJGrXv1P9XYnHZMCQkjSE",
  "key22": "41Rx6Xcs9grWbTwViNb6suxquSiEZytzXmuVwvLEAXbiWAW1gXP7uMoqtNxfk4XvoGPwaAv6SPB7H89VJ6uWCFCq",
  "key23": "e4fSD2gnNDQ7YzfWn9S5BDiAdYDbo75SoZy33qFysra5MzSb8uUfyq2i7P6QWZy6MYHsRr5djR6AqnrRj61pumy",
  "key24": "XrhNNqGK4GJpeVVqbreyZ4Zm5kGLc5dvRyHYxWrcWhJFhyKVxr7L36cSLSscFNJx5nnHz5Hsip72Vk6LWYKj1i3",
  "key25": "43M8jSJLXA2p9AmkW5hLJjypSVsHBDTxChzNZWrYem2orwCsUeypjdahRbAJhChXyYcWbEEf8pfrfnfg6Zg1jCJt",
  "key26": "3HoHcVu1Pfrd5DaEC92sZkN31jry3C8srSw5REMmDeBH3fELe3t1niat9LZsPVjeThZk8aMp5uHJ24tMh4EczfH9"
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
