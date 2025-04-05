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
    "zKV31GXQim6LuA4WCaSWUDjuerBsq2w99zhAxvbUxpf8ge7zXh3k5EXK8sdXdpepo2uxusuwq8cLjz6TVZvgTFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35u1ue2tMCE6bFM44JvQK1SNwZnxmitA2ugWwSy251NNpumFNe1eb5Ziuhjv4yGKF8pdnvZZa7W2DbzL4G9uF7d5",
  "key1": "2LtPwoCkaEKj8jK4w2VS9ccPsWkKBAq621hvw1DsyG45LJEkKvfkjaUnk8zJPxNzvEg1r648dSJKk8G2FxVKSDUP",
  "key2": "3YcLQRqmYSNSQPhcf2z3XoBzZmihxBH6dVa7usqGQEVSTYvfYbQP3zMqTSjx2tgEp5qwbEwEdCnMePt6WehqHZMM",
  "key3": "34ktYuoKFPzAhGK9NgjupyujDcEPHshhyza1aksnNBwumA3ggHVmDsWGSR8v5emCxTbwZTVKjRDxJXmsvXJU1ioB",
  "key4": "5XHZW57PhcGF6Pb21R3L1yUznJtBPPJ4hkVFFbxhgk6kkHtCw4eHtDNb4aJzVq1hDqayWs2vTwmYXkDahqNUoyym",
  "key5": "2NNb4JM7NN8YHptx3161HNjpU8Y7NgEoVEZFXAP43oJZeFh7i7yxoW3vJ1SQxfQURNt9TVaZqQ4y6u12EaJp1vkC",
  "key6": "3ZDfoExpTV8V6uaiAKuEMm1HUj2HVvAhhKNbenTet1r5zXK8bDcgJC4dXVupTxN6K4ux88Qdkz7ui9URifVpTLBm",
  "key7": "5WZXxFYrPSPk4HaqwrTvkDwKgxdLLBSpNbuSRmCb75nqdhqr2ivwS6kuRkyWQLKDDwJ67TsmCdSCBndYy1g6CGsa",
  "key8": "4LbuqEh4G4W5eSRJZVy2HxFkeqAjgrfouDmAQMvf9phRDbzg5QrrxPtXJxjHJhTqYKE7k6tbZYPvLz3iVFn8AYpX",
  "key9": "4ivFe3KZdMEwu1BvRpC27aJ2yXj1c7gKRTnyj36q754oA1XVsLtqj35ixb4L5TSt8XKMCPASqmJRcK7EdVVwEmAg",
  "key10": "3Rvdp6xGNGu4VTzyFFi7Ni2vS8FE8VCQcWLJykxih6zo9XyUgYz6KeQwe47YwkGZAWVivJsuV8zy5Ydj9VRv8qot",
  "key11": "58rQF2fUVT7ptdAuLKuEdUshEmNfXzDv2KrD2qzkhrwT1SEZ97gToj4xWuVSCoSucQG7cAAPwSXEPTs9EGYeUCzB",
  "key12": "2oc5vZv3HQhKC85cJxeB642T9HN7PcfdVXGjp7n7HFYNqHuX24DMJhss2dWELkajeN9fLa9SGPjxnu2ttW29otQh",
  "key13": "5JeyNjeY6LrLDBV3P8pGphqtUBvW8iApc5zdaBxMQxysxyrjZz93GFjJizMeU15r3ZhAavrthXXsM9vAPn8fmB3d",
  "key14": "2UWcDfBtbKub9SJ2689mEWF7rFRH8cqphf45VM96CmE3ja2GzH2r3ZGUfpdF62iuVpt1mds8VVJpT6xCDeR3faUa",
  "key15": "4oLNr9kfiQyS6irFJfYqRRhd44SqjoxpbYCSfTP9hpvWSdXpwsqdkGxu4oCNc2LEy4d4Ez3u6dJ89kBrufC5KMrQ",
  "key16": "5N1SksRzjoiLh5eWJ43ekmCUU4ZAnUs9gWsEMpBbbK41RL26ZfAMPa88vNtT2XtSrj1eKXj1zZsyn9ErzrVh6hjM",
  "key17": "4DMusa7jA1w9xJNgKagewPC3MpaFyDS1KtJ1PWGv7RFbQJ5M53P3uSz3m5c2dfba6AV7CibjcP6XW61eQjcXnMGY",
  "key18": "2Qpz34b5WA3Eie1vUAEbWN3aThVWkPdTFnXM4DjESGEqGqRY2LAq8QSJq8cmsELT1XgvyViL8A7eXXAUE4Pm9NXr",
  "key19": "3zBuSzj4nV5v9ZsAPKDjKYsrkvYDaYtNed5RFqJT4eNF5m46MD8Tqifw4NdGLnB3AYjda8tMdfCBR3pcrnNydu3T",
  "key20": "3P4FX32GLVtCL7VpERQFgvJsVk1KwC1s1fjwVDFB78G2GJHRPCFQP5J8hbsHGjVEzNrh1NSgsqjB7XLzi3VW6Sdt",
  "key21": "3arHqYa9E63ovXPQqHjjHUDmmYGPUhW6ew2S7UpMiZBDNMNaFiyeVg5BKSymNnokGdPataxiCvzgeca8jNNajDm7",
  "key22": "5Cfk31rKhCGX1cg3LRXokoeEfXSirMzWPr8LbkbZvhDbcJUhHsMhRRjeMEDRuWoUSdYD7ck9VwzVt7qT7Ng7eJVK",
  "key23": "4qtNCHURN2H4jTC3s7XHrAtHwmQTHu9DWRYVetErW5VYJzmdxY1wp3jm2G7reuj9QTSEiCYXg2dMSbitputyCod3",
  "key24": "3kbR8Zc8V1NyLCBAqxXyscYzAtCWmeJdz2GuFr71rojYMpoMXwTZ8Vm3rWv2Yj6H7s2Vd9NrCHT9ctGRJxCmibYK",
  "key25": "5VvjKGuGpe5yU9obRWbFZNxigruqBoJ4d5oefjySJDrD6kzxZD1Qxru1u97pdc2XdJkcSk59Ser8Us5LrfFRbbGy",
  "key26": "5Tvc6EkE528R9BrhF3NsjyE51WfwTVqYMDGeo86Tpo4zWXMzNn6GDuJ2dopC7QqGae9GEe5m2QLZwwqoaLM4xVkt"
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
