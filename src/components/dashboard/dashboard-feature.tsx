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
    "3gnJy31JBxzfa9dnmVUAHPYPY8sav5FqqztaDjkXQZYqUi1Duuui3kzgCFceGTybsKztGVZHkD4r9DPq9ViGFcve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fQfpTw7RqwASrgP21QXgD1U2Po7sk3QN35E22GzLaJDLeUhNUtATSSSpNcyWxY8WnYwrRMibA8Sc7pHNfv8S9N2",
  "key1": "5LGFBaKyVSuGgyoKdLNScgifMSZA5wXPZdbXVTEApRbsP45dEubxQvqQJF6qn5r5RPpRoGtMkes8RVyaBEnj1Na7",
  "key2": "3VSiV8M8LkEJGfapXU9XgEzJH77yoCyVVbfst3c1VUhW6iQ6uy3SHahbx3YhJmTubjE3HQFNB3WX8XxZZUWw68Kz",
  "key3": "5cB2yjc3pTsryhFAtu4DpG184hg7psmXZTVCvMXzkh9L6MoqLbz1bq7w1F23fMTYBNLcLMz5q64m3WX29DRLQV23",
  "key4": "3LSbMGqaacteJDG9s29DDu1uaafejW7P9C6U8aJRoEL9gJmkf6tp76y3vYhzNBMWevAD33VYzBdCeADbYZHaJDGy",
  "key5": "5NoGkCfni1bzJxoH9FC2QQrHfB3GuXnBnxAoz1m4rL6p2JXU8CaNWCdkZBxL4c5YoTnh8amohpbmxWEXyT2Gduiy",
  "key6": "4aqdNcnLm5cZM5dWqAretGtGVcPf8NjtRbU1qEaJjzTwYnwZwng6vG7W7h1t1m9xo8HPB3LpVaowkCjka8U37uBd",
  "key7": "3tTbPS4GCJCm5zxrXc8EGdoojgUnd4A22oMFPWf5ibmTjbN81UbtfcJyxCeSJoG5XRW9qMaqbj7vX5Yx3rfuANdv",
  "key8": "4h9Ee1zKBPp17r7oT56qFwbiDNWtfiXmi9VQcz84fKvsfCDwmSJduyYxSaJAh2BSWjLNjRoaged7iS2wYvyaWzen",
  "key9": "23ou7snj4VJRiTds7GS2begJfW56EtzyQ5iBYRaoiSc4toDTMBgm4kCoqwwpaPvUqvJUEaMhwBNfQPeDfRV8otjE",
  "key10": "3waeTzCtWESRMRTTqiQHTRw6N1gKSKvWB8L3m3wZPp3t3UWW9PfkKJHS6pKJs8eTwbdDJjzMvQ5NFGaT2aYYSrpe",
  "key11": "5Hn1B7xuouvBLBtfekbQgGeARNHUNQjXAXASF1rW2fWrzkXLBCogSn5BUjCorxqUVs2tSRQmvw17vkdavzZ1WmFh",
  "key12": "2vPL2MGpdZtcGuc5QMujLcZLQB6ZGt8jhX7uvNRUvRDJwkEBYvTYqwbkUPQ5gwdrwd7sEYSQnNL62oh3y6qnL6iD",
  "key13": "4xgqepXj61mUVi71zuiuqSyNbXdcTgDKbDVzSw14Xy3dWPGXa4HTxtj1bT7YzhNc8gJ1TiDCSfyQJ4pfA41GGPw2",
  "key14": "Xd1KKvZq3aSRRTyWHvAJPzq6dwZzmgwyCyhXbBhVxsn73Zikxj5oHABAz2r1Q8yA9hQFDN3ENBYzXD9MrGwgNEA",
  "key15": "2QEcCw3Dvxtm9zeNi3qiWxPrdQHpb3yFGsVkEQRWeFgmXa7aRzakzUDynsZPqk4PCapVjoPpybQohVe6LBLsHc12",
  "key16": "2ocnL8mdyUZNZA1xvU66fe5vcZ2Cmcg1wRSEyNm9PHzyw3LeucDvNs1jMVT9bbBTBkS6LfaiG85nWcud5eCjvvYR",
  "key17": "P1MpK8M2PPbXpC1euAX6k6CpDwXdaRsAhxHBykz6R5rChsJ3W17261uoNG4jjaQynYqZ6Py3DtLJad5i579U1kv",
  "key18": "dn6xbULkkECP5i4uqgwWxHnkDgovdwWNEkDTKAzYXugawr9V9g3w7jYSAeQbRFVU2wvrjzVpshhJS42kQTYDFB1",
  "key19": "38jmGXcwQPXzqxZKHXmcHsNJZEHpX99HBCPC3FprM3heNdSyC4DZAFccm9xQe5YWChZRiWgv2HrWVkr1wCrXf68u",
  "key20": "5mX8TCySAX3FMVLwkvYzew5cVim64RSiHYUohTuXDai6hR3dKu2g36hpcvNecGHhMwqphJtcVa3LXVZWJxE4JdY2",
  "key21": "42LHH9dyuUVskavCSRsfr5m7MfWqCEif4d6vsgvssv1GmSVSaVuxgBCUTLgYRZ1kWtTozkt5YK7zoVNnXodk8CB",
  "key22": "LRbFn47Zdpy1q8TAaZqYq6bHdQX9FXtvBjEEw7Kmtyy6t847RQN8U8CspfUschSNYtFLvtAi8tDQMoJjK4SMiMK",
  "key23": "2TntzN8PwcYcGMm5hQ4mwYSG4pxJJXUtSsyjZeoWf4ZAjyVXUtqNithg52qAzKqG3hZj3eWhcY2RUrGhztVmnUwU",
  "key24": "668FFciySSWVWGernbVQr4pEcBEHLWksoAMjoQfuEbPFCGykceaUVcZzx9qYSFJ8sQTKFNVV8qApbNiGbF6WdBue",
  "key25": "47CtSgEVBsptkbHrJFnZAqvwd2GACt8wbZccVeYUEh73TpB4t1ZmQLVigzY6MauTKeFTon7gy8fa1FKHtBdizewt",
  "key26": "3BGVNcsLLkGWAaY8E4fwbEozDUn7CkPd3Ni2vuA89dGH2sESkyMgqVSYi7Ydb5MJ8d9pMGxzZBfSKrCp8tAYAPe1",
  "key27": "5LgpmAQBF5ojXYLcXPM3hXAVGEsmEBs8LBpKH2qE48MAYT537JpZGpf5dR1GEPtG2sD8vUtTrQkVaicRMsA9Bgzq"
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
