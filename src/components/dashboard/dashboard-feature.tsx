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
    "3emYR1jKujpQRHW57RVnTkUhrxSY9cpZx9Jmvazty79BXnrFCN12CJ2Qchchs1b1u2enhPTYfveJEN9RF9N4NepE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WsWEPkH3m83FKyyALqapdgRTHBy7uQx2dJkDtkaiYK9jFv2pjuaPM8XaTaLmD3iyug6NDLPSqRDTrdY6a16uUUp",
  "key1": "qiakendGgby8qucYSqUV72hCoFeexer8742dTz9DXMzZfLN4qeebwHsNQsB9hgF4o9DJYrdGf51kJxLxbPk21db",
  "key2": "7r9cVaKSHwzdGUGPYKGSyiE5xnVWc8hceqfFfSaxvyyvCaHftQvxu3L8fFUoEzoeKGe1GG9VAN1pS57zB9kcGFJ",
  "key3": "316Hvc7qRG5qPuDswkT7arg5Y33HeSuhEefWcWfpv1514Ew57uR35Tcu4ey6dGv32hj88se5DcVP7fhiesyAeALE",
  "key4": "5faNekxGYj8bWFXrVG6BA1nNt3PTZo9N9aPgfVcRvDhQQvUKaAwePaKNy6r24sQujCLacDafk4Gm2q9AnGwenCRT",
  "key5": "55TdbAwoc5SriiueNi9jLQuzzo7qyZBhWqyuG5sDZoQbQDhyjm9rwBUpz71Zon5cpUrt4FtxELHwHkREd434wzR",
  "key6": "5PXyAudQJFZhiPLvYsf4vrxkffDeaNZXJHEEknh7EaVo6s38PR7EGKx5iQwQG3YRrQgoaAbp7jGPv2kbYGrm7pHq",
  "key7": "5VL5eCAioTNjoQ7A7cdTVkQgQN9LesH9SSZjNDw26kEemu8hWyT41KQjEsu1skXzK7s72358WEnBeEbKqYW8PVz1",
  "key8": "297GuvwT1avyhggVwsWCmYFFFoULrpX8PJ9rELTEcoQQef7rxcVvaqkWcvMQgRmqoGZWJPnGkWXhPTbunaFCeWLg",
  "key9": "4a7F8G3XbxJSwWrvvsrQSSEMcuwwJfxkqYuwHv7GWizSimqQcFzTZarxEbrkD8wqi44AfZ41GTAHdvveqax7mje6",
  "key10": "3G3KkcP1erxq73q2KBVczXt5xGBkMFwjTYU8Jg8bP6Y3vTiXT5jdjdEfwK8bGtTvYKT9Qn9nHvumpcPNbevVRenn",
  "key11": "443RiowyyZ9isZQreYEbhBh9tDGTKVJaRqzKCTozHQxqV1NZFooJuWKiqkoL3zphkGBrNeK61ygWR43P3N1sD5Es",
  "key12": "Ek8SjfAAQ2awaqkenSkZ7GFoduHjW6WFxS5jE4V4gfVXqGdXMzkbF1sqmE6bev7WnLMtrBpMxF1SkvAixyT7CH1",
  "key13": "2RRPzTCSRAmj2MvBLeicauRXSpgKhCp1r3HSkKr4yPeJNPx6gqr7zt57UnYsYQFKq7YNyNnZY36mQSBnZVwbfP76",
  "key14": "27jDBAM4tsPVtc1sk8jW72EF72VKhZN6325Ve5K37PNpuXheCp1sChXTiJK3zLY1uHt7r86uAseTgU3VtQWnFy9U",
  "key15": "5LXhqUVuDi91J7MKCP1zXkWuqNPryJoDzw5NN88fv1pkgQuwssDcsRbN6P7iypiV9Nr4z3oL7SWq7EmzBRVnNp8a",
  "key16": "3mStHJ5icRiH84hoDiVMiohGJimfHZFEcHANRUWnCMxSzjsmfCXWSrnjXdKsKvDrUecXqn7LwZdiprQKh3c72oyg",
  "key17": "5sNAAGnY4bXJSPWBg1CFstizoYYCyTKEVWbkVUrD3mrroqicZ3wPjM8E4VwTdtANY2mToPUJL2mYzsvQLWTxwgxV",
  "key18": "38TNn2LtdySHKzc3aZ5BuwRMMuNAHRih92NBptkTJnWCzMWqW3RBDG7LGVL14Y1V8z2oePfZwBoPJ5q6PDHW9i97",
  "key19": "BjvkPe8jnaAuE6D4o5FxvFnx7a3DBnS9EJkHgoPpT7Ji1eJkktkngJ9U7v1GeXWcSfVVZjeLeYs4HksMxQ77MPj",
  "key20": "2CaLXQsjxdMwuHYHMcvKEj3o3Sc5RvyCRydhCioD7AC962ezFFbrbJHNvkw9N92Wix1QJaPhn1C8uXids9BM6oUq",
  "key21": "5TUJnyiLDz2RnSy7tWkH6GGEWnMdasWVvVuo2vAA8pCL4hqsVZcCtVFakocWRucu2aFL27dzajgRDdbLT2M5PK3",
  "key22": "5iL8g6nGEqNkPrDq61ogvXNRyqF57escWpuUcPexPCoyicCwUcA2YTczUTNf3RGyS9fYAYxAPAd1Po1aYkoXynQt",
  "key23": "5ydfAgqmKxWHXMxo2pfFuEGTozKtHR5d8xuFfcVTQbr64mZ3oQLMBTM3LNeg9J4dLYNRNx5wSZYPwdDvk6hCiVCC",
  "key24": "5XqxSrzuQxvRxUXrAJNt3G9hFkc2L9DTEYAyrnPhsdU6q6879mWuC9NFkXP5NPH6YnPtNYEyfJtVymVAZfLdrown",
  "key25": "5L9cjkdmk7CNo4gmGgexUKHdsBPSQZCWTm5HAcd9uafjKyCL1SzsbURw6L7KWN535ME9zvPkRghWutRQWa7WnNDe"
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
