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
    "2Y8NubowXS3jtRrTZcJQAXPLdzFsgUGAnuqpiPSdy1XiNQexAKYDTscBsfP3ZoxJ9E6aPvDKqpMa911Hh3LBBjxz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qix3iK7eVkcq7UUdnt7TH4vqzEBZ28ZLRquXhFHaw7x7hrMZjLjSinZhz4nnYPKD8osfrRXjSKt7rApmGqLuHJB",
  "key1": "HsNZ9bs9DNQJNSttdCUbSZqGGPZZELCeKnHJDujegL535PnWXQAg5cQf6ePuYJ9s3xDFfGsZtVU4sSRdjy5qNyQ",
  "key2": "4Gb7VWaG1V9SsfPHGYhuwy7JSSFiPKiqRPLjJyiRLLfb4TX76uP1i4A7XAkhFvwbePvLBFJ626s7YHiTcqQVrmLJ",
  "key3": "3jiFQuefjBPva7KFMB33HzSt33TEMAGk6o3RRyUvAAmmdCkJDJCPbVkRFV2itnAqJQjaVUdNhHvvCEtyAwmzdQLS",
  "key4": "CPdTmVyeZTAmZ3UZ44nr2kNEKth34q2XQCc73dE7bRKuKyPbFM87YUWCBXCBijpJuC6vbLQ7J2cgnozH2bNg74V",
  "key5": "Wqhdvk1ZT8HhPtsyNS3tinWx8y8Y1JeY5zrZ3tPTaWchtRV2qb5Uv61bAr7YQ2WV12thfBYzt7QNPZBbHKhPjXn",
  "key6": "pSUsKgj4cjVkHqznfZfu9d783UUTSYoeoo6SPniZGG9M6PCiay2pVzYYsraw1mz84GN45V9HGzcNaC4KoBeDhrL",
  "key7": "5TXEF2xsPfuEYMHNPEB9JaZzGBrKsqztApUc7W5jSp44Xp7p4P3cbL7KjyKqGbd5QZzpac24j8LhmpXzzQMMJp75",
  "key8": "5cxyxdhX1STDLvmjU8Hy1YurKLR7axB4Gp2HEA9vZaq2BEqabytbwaUSbRAjcjsvVXmqv25i73LpxVMA5eYsa4SZ",
  "key9": "4RUvf9fpmRwm7GWCf9EgNouYUWsni63RHAKoZDX7FF9wfjJhVJTcj1cbi3GxCzpkKDyuTMbcH2rDo1yRxiGEtKAH",
  "key10": "5p6NnBme95EB3fLYxxVH2WQERPf4672TMGqVps8QPJrLPy2VeQTnguATauEVZhVQEs3B8G9WeRaZVMWZ4626Gh3y",
  "key11": "5jZG65fT677aX5NpG5qvzrxXd5rxf6TBe5nHKakAxLjTVWvjs6FF3gvAaR5sStJnWsfz2DnpcUJTTdzghea1ay7M",
  "key12": "4jFXM7j7BkAM65f9WHKFKtUqw1tQLnbg5YPUjptAECf1D8vA4tty1yWJot9k1epoAHKhiNC2ttFYUk25aB2TA5qe",
  "key13": "X7j4R56DzfKQK4gi3a6WodPxVWqQAZfcsrayxmgw3ZsosPpYtK7PQsaW9pyxHLuDdaxwZ2GdK9h2zzZXSWkVGnL",
  "key14": "WvDJXdoJEDN24Trc4P3tqooMUn3aSNPmgKxfdYsuqEcQayBXBY6yKs81aAi4J791K1zAHsdXivEmMpDcjbQp6nk",
  "key15": "4JDRZ7XF8FZ6ursHjfwWzoc3zwhzidEMPa6YnoR4LgqRscLVApb5EgtZeKtzL4ehs8yZj6eWiVrKZJqa4V9jVdXe",
  "key16": "4dXPSLY5SNE2J3dXEvjwmWR18mXUUMazTB5sjn8g3Mpai2qqPp3X3NErmEqrF9Uh7CPnK9VeNTYcXFYfax9kU4bi",
  "key17": "5a7ovRPSbM4CxPxMMnuyzyhvniLGqobwJTHG9NnW2KEibdXCBTP2AtpWNNBh9y7L9pk97veEsy3441nqxihUrB4o",
  "key18": "5gpbMaN67g36BN78Uwg8nQA3rB5YAHGEBdrAtHxdFdaEuTrLM3ai2ubNP2gm4nnuD3NrUstnED4oGBBqis1NtuYR",
  "key19": "3j6fbQpu7QyioSUES9aMnSDbrnsn4mpeYBaHM4hevux5FLAhv4ncZ8sL3sWfsY7w5gC3SLZps96b8GsFchULn9Uv",
  "key20": "bH6oVv56qr2auVTUmMqDEPF1YpSLmghRimr2fR9fyuxsXcY25EMtgRL6gXdjt1Ro8uRPnqLU3oAKWXQkY3XDkn9",
  "key21": "5Jvp4m84wZgFDSwZryC1tu2NMgph7DiYYXkRyy3rNkjrhBaFDg1J2fkPGQsh58pS9Tfr6s5Tg5JLTv2q7anGTsXz",
  "key22": "2qHYsdRcbLvYQmSbrnn8y42v7SXwMQgJCFqsuxd2oFmuvaiMwNhDAQvLv7koCjoXKJm9SoMqjput3CYyhEDKBCwc",
  "key23": "4mnNEdsUJuTnKvbbSEp5PHifodFjRUjVyngHgna7udUHUS5i4i7zdBxtf1HfvYHxMfjQrsQd4yfxQnBygDxZcoX4",
  "key24": "Miy3Q2sRkqYwg5ccxxnykjRi3ZZ854gvnFPJP5wUPW2xo44RVa2ufDDhyYpSUEzzsKnEGCSPbMK828eW8eGHHUc",
  "key25": "NrEUBsk9utsYmRRECQ294YpSCMq8HtB1kU15kdTsbAtMnYmg8WS11dBmERLmqHG7f9tXcpK3ZrNdzwvP5nmbxZd",
  "key26": "2Ryb6Sxu7w8VYGGhaMFE1jppr6JuPGBJYYo9hPnc5krpqckxtNKqnP4DQiid3p29a84b5YMzASf7wHeAkyWH6vrf",
  "key27": "2SURR184bFGN1tgeyoZN8BSfimmkvpJ9yjoL1xTYQb7bZNCAMirT4q9BnfZNQ7iFbxkNvfEQw7YEuK6SC6jNrJD7",
  "key28": "2XxhsFrm2KD1F13UHsmNcqqGQGKECLVrx6rNT76Smame6WuDnFYtPayoEupNhJmWJYdUwXJbJtgRqdbCQyaC52xN"
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
