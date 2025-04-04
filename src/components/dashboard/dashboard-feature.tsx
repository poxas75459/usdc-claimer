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
    "yaBtjeJt8mBqiEpCgGAHuVZzL8TscP3Lk9aas5qkZj2uKa7CCY91DvJvFJNkAVyxWxNTg2eTi5aHsPSWZewiGqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K7GKEZadSXDK1cdCRMuTQSyUXevnbNkTURCkUdtqYrXw3eymVNxGjA5j7w2eQ6mS5zmV4ZAydmGosJQ786Bx1gm",
  "key1": "5xq5m5oBbU13Kc72JqGzgcGooS66DzfEiuZM4Rg8SHKacTH8UQHbpiyi4wP8V5ciHpV59jo6ZBkdJ48TAQmwjAiR",
  "key2": "2akfv62Z9Myv8dLmBwHv1JustqTJ6QGnMs2GfMyM7Q6rNaS4D3TsdqqQ3sxnVgP2YGViPURqV46EhuDkUFMKwunB",
  "key3": "4YTxPgWyE7NVcAgukA4A2o8vpmFgdBpyQmDxSdoyXDfuhwwWqzAfTKokgLX2YKQogsFtZMFtjbSKoUQ4Ydm2H9Zm",
  "key4": "3H4KEnNf1uaY2KbD62NG8mWjaiM6hyN68ppcPjeKdx6EUrFk5qCzjfnnzJmXF2V6LX98h8963Nzy58aBiQPPr7Ep",
  "key5": "5viwwKHhvN8uuAoeZt9G118vYmtpsHpHP3xZRGFM8eZFUoPYkyLjnS7ZhvpapgtthsCWz9CPkvBtUVXgxADFmeDb",
  "key6": "3AZrvtbBbmcn4U216QW8FuNYmSvYtsaxkGw8ZNWbjr7mBW4RqeYfTK5Z6cpV4mtvvTrr4UTC1je5Pz2kKTqduVxp",
  "key7": "3HDMEkcAWsHJkfmAXSpAW1kXhAf3aGvg3KfhZdhk24jGxevdpvcGDNVTaC5t5QB1yXUQGsTuwBvGS87GdFs4RwU2",
  "key8": "2x2Sms3UcHZB9FN4xJZkrVHrfBDHwzoVU7ojXDtKhgYtbrs3LZqraAZVKDn1UZs1dygk2KigkqQ5UBm4egNGikh",
  "key9": "5BfwHnNvDstkjvRjFbTnSgho7hBMfnESPCuVPrztCZsVGjuHSPr7qzsY2csanDJAZiec9kKTFqhiGXMbPCGcxhhY",
  "key10": "5Vov2gCKqScr65Z2YyyB9cS4WCe6pc4NXqMTKaHLNwCgPVCQ23okFht8L2gCXJUECBTSAR3pXtDvBvjLew6FZnXE",
  "key11": "3YAXGAeLQ2T8EGYiMjBVgBK3tXeRcYoEX2wZw2TXg4V8BYeFnKy9WYw2pbkAE8wciaRuUZsAuwvA1a5Ye5ArUpyD",
  "key12": "oSpqFDRA8obJJgfeeWFND4EuhRuJWPjgrPARVq25CVxzPmmXyoFVeXSthm64dWQGycChFzHK7zw6LuaxSkZEXhs",
  "key13": "WSX2EZMX3pD88mgfHqvywVaRRbzYfaHzwYUPq1GDe6SeTHpYzx3LLpP4mrBaoEPEQ6iGnz4yqNRwHwG51c5eus3",
  "key14": "3H87KrFUcPezb4AStnw4mwjYH4Udb6er5g5DjFbex3c5QrJDWERj1ASE5DMDXHeqnRS5CkzM9RLt7k9q7pemTHNs",
  "key15": "2j8Kze8cxoyaZkCvfL78eoL7Vbrs27NoaiGqXP23CwMjvM55rBw7VfMw2qVAeJdEMtxkxYGtoKBtHspi9KPvfSJF",
  "key16": "43KNbburMqwo1czPSFVwuHUkaoD5ArePBHu4EdPrfb8dZ1oigd6fYE5oyUrs434C4kqB5zwTK5CZXsmXibu2NEZM",
  "key17": "3CVGb6i7fFV9A8KDiwxofSgxKdaHrxqXYpqpLErBsfESky7UAvBnPFfrWctTq5gtcbDKQsMxs55D4RfiACUZ6Niq",
  "key18": "4giUnuSQqBmjSPGHu8dphXBa4D4hLPZqiB7e1jGMHQKjTUpgpvn5Mc543JyJEvkTRf7PAFR13nZ9ZuMRZZspKaqP",
  "key19": "4nxkC2cZjaEAvH6yXBgi2DxKsa1fufHKgVrRd1h34qEM8xEnbnKDH8kbCHeEvjwCAA5LXStT7jreNKQs5BLsGT6",
  "key20": "4xKiQzkHhrWcVKSfPFzWeeovJCkNHhJpZRjPqwb3p4vezvdCh6WZox7jccjexnK9GZ3NoyykA2WTn1iQhEt9GQdT",
  "key21": "4EeHqHRaRJfiBQk1i6Dn6QCvJWdqB1vgH7vRzUzD4vbBmamc6ic1CHbQsQ1nd7dtc331pXc8PohWVRLvZUrLk1JH",
  "key22": "232mZL4TeMqsWLDQzU7tVKM27wL9Cdz59yfyxXpPjCmh8dWweekQN6AhKqs6s5ZcQWJD1SVv134KHfWuzcsSUD18",
  "key23": "WV4TCpNwrEfF1TSLLxJpgQXzAk1kxUm414z5Bz1u1yJjMmP6dxXGQxn8Xp39DEzfYTTi6byRBu4rXYYZhtSinMy",
  "key24": "3HSCMn7VyntH9k2M8ffvFYfbY69uzKcoVChfeCNmFcdhAjGNJPBgo3Z8T7QnjQwDPfJFzKGFbrmJATa81eKCt6B3",
  "key25": "3y2Tb7njWQbHZX2CeqVb36vX5isNnErnrC2CUzLkahS9a2jVP33sZ6xcrBvw9xoT7ARPdxuMyaC3daHRbPXvLVZg",
  "key26": "2uJ134RZLi94V26eXbJhqyN2RLdQhFuaMcxLq8nP1tSvM64N6MvKptozbVXx1cXNKJU6dn4zc5o9ve6Ay6ZySeXQ",
  "key27": "32cq1zQBP4Xc81BY5bXFEsDr7NGQxvZRRNYekv5Y3NJ6PQPWA1GfEXrivzVhfsipM4XeYuFvAdXWxvydRnbMdGot",
  "key28": "5wzGEadB8r9Yno52g6d54fKSD9wucRhQZ4JpjZVPu1ADFB1WyynQyKNF3h4CeKSJsocSP8cosuSs2vfdS4x7Gt1Z",
  "key29": "4VyrPfB9LiLW3sGJEF8CWKmZrzBGaesKGEXUbjwym3u5kC6rNbFKy1A6dT4hDAdK28k8CbpfPyxvve2h6ePVgo1Z",
  "key30": "4iyu7t8U1qbH8M6zu9kiqjxJNiAPHZQvztYNks6KUoEEMkNAu3sPN7Vxu4bZJNfYt9gGr8ypYMYGGtN4FEK3xHhs",
  "key31": "5gojdahLBm5C5AJBjUpSbEqUzXJPmjhHDDaVyNfuy9WYcJFgRSFkEskG4WA3kGYaqEuq3DL5WxtW3593ESyV8g1A",
  "key32": "2AReYRznFQo6MxURwRqm7WA68WbK1emhXzoMd1M7Yk6wvQYJ9BTexi96JuA9X5xjkyRxGypqogDUwWbWi3jfrNMq",
  "key33": "4zWA7RivWkFYBm1JT1jgsaoTxqKoZeLWkd25WJ1MkHkMGzV6ZZGq4pzV2bjADUPEvGJcBwtTFv5RRKHLtr7cPdwu",
  "key34": "5QgvoZjC9aJenqfmzRzCsE5E4uJ5rpzo5DqhggaE3phHvUbhdWkVRDKuqTqcj91jWXiAdzotNZcniHAY21GRCxEN",
  "key35": "3HmReQKQa8BsrNag9TtoG6UmbWA4i5foT6kXyYAPCjv1BerJAmi7N4v7bigEbCyDqKd8Fx8UxZSQJ39vMGinQuF3"
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
