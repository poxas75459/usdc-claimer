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
    "2xAPSoVLewvDTtSf37HwvueJdpDYCjxMfFVLC8Mvzi5GA3R7WJK9JwtuUBa9hs2hfQ7RxFPn9knWzyWgRzx8pTFs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62e8siZdnPc1QWqjFLaXVamzTnrTdn2ykkSvncpTPiXqNChBkxBpMuYLUmVfdpXyRBKGSKPsMCqzzV1kPzRPwuwH",
  "key1": "5QwUmmsPx1Lsn5ChMuLyuzBUiTPnkZURgSPniXqTY4i3hqvkkcjPKVRDeZmsEm5PPJt2FeJTsEeoW4wyurjzJr4L",
  "key2": "5zgUXreibNgYaE71vDHfiPsk5r9oSuyFhfACH5KdYHNpNYmxvqJv5eHheQVP3sSwVMoXu9NsMzundyepkGJdiqa9",
  "key3": "3kApcJ675zPbLNy417i1qPSG6bgtwHMZWzq9Fi1FN7qzaXn5eCJtXx1p4XhfKcJuw4VY7ArGTipajjg5eWsSt7hV",
  "key4": "3Z4r9RYEo4MxbeLJWaGRKS9WmZ3xUWzf4irB1jiAauqVkWoxYkHKMBj3Bv9TT4SeqUvbUwoXT2DYQJfWppozTi6A",
  "key5": "54gWEbGrERJbYJfojq9kNpHqkm8kuPRA3hi8y74Ex1cFnJ2sW5ryXJU4q6B2PLcSpr8r5LFAMW1PLDQz164VMXiU",
  "key6": "mDa3ZPQnKRzm2SfXZkzKt83W1rbHvM57cMGDXzc82s4B7F8VdoeBjgvaVf1Qusj9CEjY5ftZVaCmck7D4LLoL1i",
  "key7": "4Fu3QVgRo1k3haY3jjbYNtwqCek8CFARzfxpwLZ1d3EE33nMD6Xkqo38pMUuoG2pdEaGZW7hbVHFNyKScGZ1KvSj",
  "key8": "5ezu52ZZEQfeq2NTCmz4nwLBHQDfca4YxaeSuG8DB3Z3qiYqsktShh3B7pPn5HTy8F1SFQc3gRHGA2WXimyEP9uM",
  "key9": "5NxUwFn9ucph4oKna449ggKarm6Jydjeb7DBBZkoBXx4mtRC3m3kBGPuBN4gpwSiFby8LHbVwCZaDwpcuf5zTkfe",
  "key10": "5zZi7WXnoms6q9E2n4A3sXofhMmVVt9PyaH48DacJA1exLC6qEwyWxendkn6HVRWynoYYrZqNVrtJhQkromSuNKH",
  "key11": "4zo4uaMsjYc8yyubfiWpyZuoAJQn2fZSmPq6SNx8xzhhDq2Y3PPXwBujx2BtM7vwbAuxcbmMgLQHbgzP2WuytQBb",
  "key12": "3Fo9mrQxwHNQQZqqSzkDP6ymws9tdAn3YiNzr4teZfZCGTtuCdKaLc7ot28aTpgtKp2VydyosJWpUJasH4MHcLae",
  "key13": "3SZGwZrhEeCBHcmrX3ZMQQ7D49HB1uWMpuTzVUs2y835zb3vZUqn1HV5T8yG8T7XArBY8UNhhgrjSZjb1UU9Ea53",
  "key14": "25qGSf9CePdVxd3NtqUUhd5urLuNiMie64HqzXv5AxGDrQUAzDpddYnNZC2UHTDujdusMuE4XhTk75ZREeVJcZRh",
  "key15": "d9TGuG1ABTPqwUZNrvdy5FYic4fM9Zr3ZGEK1Sze7ndTU8xMXc2ZVyRUjzeFjRL77yAo3AHeRUP817ZEHLQsy1J",
  "key16": "3wHiyuJyMcd47Jzhri3mHxZCW8kWU5mjhLHNyQbVe2VGyLmNUh7DSQcXSpviNW7Vf1Ws9a2i5NpD69yqnkqwsmBJ",
  "key17": "5qdoPfsyM1NdcbMeggK8ozRspncmE2AqyN9jacK1uG5VHrsSAJZiFe7cjFZ9BYtUrt3NG9NjouCqibYxJoRW63AU",
  "key18": "2S6HeuoU4chfJMWXBS27Zh6YJWhnoUmCUYamdHvy5L2ZdLKMz2XLFy2yj6KADkaKErXD5CT7BWku8vzX4JWWmXVW",
  "key19": "2Dhpjibne97xFMLTQ3fQq7gRCqSJZhVdYJpHTySeLCTdKCevw8Ticx9Zg98U9dDrwZZ9RkRTbnD2vDNez6aWvTFW",
  "key20": "2td5VuJ7pmXzH1mgUM8nRJWko6iNYFyj9dShMPxPtZjT35hsZQXS2kq1MSW47YM3BpJF5dezgFVCRyCCF1k8wieS",
  "key21": "22JTcpjB7sVpL6WuEt5VR4saSWnf3RPRkkwGqARfR9dUWSmknupXiqP1GUiUm3iFw3n7SWSED6eH3oXBZ7pUUNrx",
  "key22": "5aijMwAYCP5YiYze7ZFDwo2g5n5tk4R5YVCpyLTEr1am1ASiwGwHCjPjNuT1ZjH7D1Mh32T3UgxaS4jwz2JWwR7z",
  "key23": "A3tgGXsRr9dTHt534Z2E6K4SGtFaJVEonLspPKKHShcRTndJ7yUCnMKMZn4zRQrixyakf8PuERMpu5X9rBs6YXd",
  "key24": "5kqYM7ZhVWTtNnmhZ1dwmEC9va3CdVzw9ZbrNEHYWhg28q56z1Mh5gHcnhgdnZXqEch9tZ2qA5WhZiZtxTtbeyLc",
  "key25": "4LnqFXjV48SEjNz9oNwHknw1PCDSyy4CwqsP5fEMFcwNZJHnhvVZYB2RVQhRBcNk79ZXFWpLTUgEXHzWDuVReGaP",
  "key26": "LNLdksk4HGPqu84cmf58jm3iZHUJrMz1SJyFgNom9zUrwJgQvJv3Zh9j93DCMhBDoroCGg4LbJP3WtLW1gCCw2b",
  "key27": "3dgFn7KyyBJJ2yC8kwqbe8Qvr4AB9M1QFTwjFB3mH63JwYjQMGUQPG2G5y7uJG3yG6wdriCNKWpaQrPbc9NpQAf5",
  "key28": "2UzpaB51A4CXCnV5d7xWBHbEQTHM1ZimJPWjHnwzuYmm9EMNAd89APpDiVHFuJ64HV2wu4eRuWHkTtZp26aFFGtr",
  "key29": "2STX5o5EnDWkJLj6R79Qe2sFhSuv24UQqfXiiLU4YW2AsshfCQps2ybPvByRm4xdZgBvgwTNJqGjKcJE5eXuz78D",
  "key30": "feBpZKeBbiWDaGcVK6EX9PySGXaGhZfyeVgYyXLnf5qJZdwApRpRZGk4xDPnxZmHFYb7ZVaNi8Tq32Fw82SNs14",
  "key31": "37Wx53prChfWyA4W2EGskwjFakoFRKZfSzGBXpSmBdvob5tJgjB7FziF6WT9iEfMvA3eQbKaT83SAk96YTFWGYrD",
  "key32": "LVEpYBL5JB733rNNeNTbjeyy22XQvnJmekxZnSb4D4D1h7oBywbygeG28yzSgzLTHgAX4dTjJpqYTEq87jxBehR"
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
