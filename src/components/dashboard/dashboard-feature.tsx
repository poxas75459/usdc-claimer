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
    "wztVxHP9awx9xtzhyLUQQ7vFqJ5KvgJWdJaoKxHAMvjKzwMtX5hK5f9SaeFN9U9Tbwsd9MWwwxLypQN5FCaTA9Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HqkGUkmRKdijodn8E5e8mNL6wjiqWXwopS3BYtNF7o6QjNst5p22kAHrti8KLSFtzE6BJ7fAicMigJTY9TUenyo",
  "key1": "2NxnUXwunwDNhzezD8VTt2ussXQtLS13a2V4tuf6G6vm2dkxS2k8M7fwhtUuDCU98TFGNuochuHwm1X9UybMhNfP",
  "key2": "3EDxwLp7omvXN5R5NcoyimX5EgmrCcuB23oUr5YMqbfZDntqmtEjs91JcTKKW9ozUFhg8zUxv1AXRE7GSaS8BCpu",
  "key3": "WjryjNQ2psQwvAM5LUsoHJ1gDz7NsLu9JTw3dUin8KP9fTjudwByYj4p7b6Dqz3oDEd7hiaJYWFy92MT2SrH5wp",
  "key4": "3F5QgtrEJih6sPk5xMsmQVPKLYR98dCj5W4HM7K3WJqkHYmqWXuHcQSHu91uiCKpXMtQJD8PhVa9MeUUFuSv5e9H",
  "key5": "4SfNehgsSUBVamo5xynV2KCvQQkSLnnjdYTgcLkeMjvBGyboBXv6bciccc77fJthsBU6Nnhv6jPWwpKRJdEQRcnR",
  "key6": "5nZMa8eLuCt1d2hE1g7R87ojz2m6DizcgnFS5oJJXevM6bdmbPGvTCJPPyq75pcYs5uZxN6K6Bq7eWFMpg7Wnos9",
  "key7": "3fscn9MNTCHMmbPvLxjBz6CMR3TQ32q27vaazMEVSGFoFegD253CHGHrWhUwg9kGNutpnRG9wzKYzwieBcWK7Xex",
  "key8": "3YWJLv8YJ1agUbGeXRGjtF2uNxUdZrnkgJKHykEZsL792pHd7PqyX7KCtAzkhz5trjHjPefWPjyWjohEP6jXFs68",
  "key9": "5GC12v21Uw2wVBw4H7U35muSNWkkgU39tCAeseJQxBqhTxtthCvhEdb5urBDbyvDj5PH8aVK4AV1JkvojWkV2Dhm",
  "key10": "25g9QMe34oqoH7L9wR1SAJ7DZmCuDVvRJMsWYTFTso3Wsna9Cz7A7T3Mib3Xuwo3gfbEVo2AiPZ9HRrRckczhQJ7",
  "key11": "3byAefnoJE2o8Yf4k2YmPvUxtRKihpE4VFWdd2tDWsnPLk73wSDdHCjCCQVEPHGjvhFQB9Qr95r1F4vw7Bu633kB",
  "key12": "4DEQvHPB13JBD7wb7MVRL1zrtoYxTNWcCqkTLeQfAZopPFqG6uEwqdvKUCHU2DyTtcaKaRmzpLGVHzVzjSQ7fq3S",
  "key13": "tkLLoAbVNgn31Zs8Fsyd2JzaSpqJaZrQspSgFMkinbCsbaXRVvgm5orLbhJHAD1Xa3TPcx86ycAmmrZ6hNY2Mjt",
  "key14": "3QkfqeMwc7xPHbM2h5QvJCaKkUw7ojb8RfdJRXrFxxGSfcZN5dfpma1PF59RjbTJqHTDNoS3D4G9LzP8GM5tub4P",
  "key15": "3sAmopeXmpoGUKHuhNDoave4skGq93yRHGpS4zH1rgUPy3mHAkYBArJekZyHjJeXMWfB2xmwx1vamZdns5m7w97c",
  "key16": "Kxwodvdf3K8kvRme5sy1mUxgfu4LmGFwt1cDnEkUuxSyZtGjjjZAMzEcLM814jowoPfmRCwWrce2wU94iZemWnc",
  "key17": "429mazN63XB7cvTBEGTigrHqgJ4Wy2c9GwcG9drUCLZoTDzHGCqUwiVMFF88ER2xBMTT9MpTj5yyZnYp5AECBJaU",
  "key18": "MVWu9SnbeFxV9UBQGb2yYYgz7FsdzyrfLQm3LqiaKooZnjmwL7Zp95mJ71bGL6xnsTM9CV2igARGUFFujDKBqGX",
  "key19": "3NnUudkAUTfJuhZu1btoKe674RN7NbxbT6372cvVWJDJrxLtMCk5RkWEonKJMVKN8W9n24h6YgSMBjwia5kZ42Aq",
  "key20": "h93NEfx99LUPdWLGbEjfnPRehuzgK3A26LqsA7uvjQ1xtY1sPcaAv26RbJieZaEZEN4JytukVfpG4rCThoUJgDY",
  "key21": "3MSVFEWoKP1znS6udCAvPShBNsxPaq1cR5jtCzZd1jcXc56aFGaKn8C1hu6ZYiFYiYC6p2CTHcVbqG6YUU1KPjor",
  "key22": "27uTmKD6VdDQJ7PPh56zKgyG1Lt7fbiVqLn4gMcX2LrWpCnrUb4A8TedwfkLPzVZSpynuiNPpsBm4ggn9huA189q",
  "key23": "3g3WQpdQDYYVMZTMABLQzbpWU8n8KNAWZfwdunZrNKhsHsMeRL9L7K28X4o3cwmWTjYKZfNcA4Ree2XXRYssy2oL",
  "key24": "46ZwVreX934EhgCnc3CE9AboB99ZUo7N8Roe7AWbAXfvbdoLcfquog2QYVWPj98FDeJEAKSFSv718f7s5nLdwP2k",
  "key25": "3CGpCUT8EWZcpu5fv4cN8qSigjYUoJE5EjqyLDnQzLXBgsSbTzyg2eGvYMdmjNm7gQieVJRemMznnHvdcrfU3bKX",
  "key26": "2JScXqyNgRXPhvF4hYgBijgTiZma18iVzLPp3gyS12pp9jnyK5oVvhNhe8oJSD7PGTEcbPqnRhZcDyo9yyPbWXJG",
  "key27": "49yiEWMYQUXrso9skxyguvtFu3qQRwaZbsna3fYQvHCCSpaA1NHLWxxNSudEGjUDVoUAZLejNSTTXWzAi8aMPXHT",
  "key28": "rXQNhJmekWH9CFLRPzxUrMMn3BospMbEvR2P6bHfTH4H99RQ1xmnjmWiLwp9CMVw1Abyy8fm8Rj3aCpgUKDmhLd",
  "key29": "49nZHNAjwC3C8nAGxZ82oD5EmWjmjytDeXxy4fN6QtQNWCivTXX3uvC7XqUYoMrLKYnX7XLHiyKeLG9pfQYuebeF",
  "key30": "4FhCZ3QXD7CMNQ99RBaNNCkRo56poNvtDD6kTwLGVmkB2x44Scwk6RcZAAY7U1icBHgX8HYZgmC3wXnJKvhHkcSg",
  "key31": "4XTnprHoXcyTokpjGLVHEvWknAmNxKab2YHfn8RV6tVa8uoCU5VowzPBdrW8S4JqbpQTGf1oxtdDs8rJLDqskxiD",
  "key32": "3fn7vMvgz5oBy9mrsFPKTDRCj4oL7RNmrTj5sujqaDiCQCrLJGiJhcL7CTpbN6xeZJXQdHvxEjdAxQZKXEzYpVmu",
  "key33": "4TUYoxxPUkme9G2eFBrFrC8LHatTvWjyuJTq4PUYwo2YVCJudAAuVLsybYSoQFDVCZQM7gfYKxTH8MMLYqXfrvJR",
  "key34": "4XPeBxDh2w1PpypZpzNgkh1PhN3Mb5fdtjxtAfPJmdWyMa3A1bWj5VSBqGsRrpY7ALeyA55qdYhJ6qK9dHhG33cu",
  "key35": "2GqDskaWb7m8rdNtauauEbVD56xpttKGHKcZvfnVVFjGZBkHJBkNohT4R5UWBLuPHbkhewLihkKcRahaGYxhF5Y4",
  "key36": "5UWkA5exGVmmw2AazPbkqCJ6Psk8vTnKpYsPF2sLCMVsz5fDm786TkjvJWvtMhonWjR1q1e4L3PRFPcc51etwRj9",
  "key37": "22b97m4dYEzShJPARB18wd6rJaUvKREELncUekog5qLfXBpveD246PzqMZsvfiyV5Y8aZuTwQYyWizjm4NMNpo4K",
  "key38": "2L68kcFLQRthnZRTRWCHtjtiSACaFtVhz5uDignCj6FJJEgQT2PEAmLpW7acBQ9mFH1WMvo2Cy4Sz5jgzbqaz7EX",
  "key39": "2vRJ1d6jZXarjvACUKugB4s2XUng7fGcyXYbwXFriFvtbNVnZvd3kMBZBnCxEChTtg2Rb4C3FJwV64UgbLdntnpY",
  "key40": "3b5SAcz7kYxkXaf4YPvmLuXSobRHuuvKxP3fjuQJ9bg51PwkQoFfuxee99qjekozBvJ8Ta9zcKNtLuUWMCciRAX2",
  "key41": "6464o9aydFEAAnmqQpbLiV2VwPQzt7gj8LPNQZWKxT3uEWnR3ap9Xyq6TFzsLhpsXia7xHTXsTBCHNq3WDvuhiQd",
  "key42": "2Sw8XntyhqodjFQDfM6HWuVasUi1xoHizkjxC7H4sfFRin63jZdhmNGWNVp4mrdSZxSWrkPUPhCSEhaMQTQFfPp2",
  "key43": "4FLVrp5r7KLt3gta6KxzDP9XcqTD325V38hE6JNyq77R316RtdXZaCCz4bdCeD5QTdX73ijCqpjMNWBaiaaLJiJ",
  "key44": "4gAMaqoypcj6At4ixAvotrcpt6d4ScQCEh9CFYDP7Rf9GDqKsdkK913VWfwgE9ZRJ2FuMRubgX5RNx6QD9NctApc",
  "key45": "3Zk8djpuXhQte2BmoRHcBFZnmjTu7Ai1Jest6T29pQCdR7NDtwBiqRS8GtXQs3PY3rmzTPwcrhzc2jDA2VE3DUjk",
  "key46": "4dBSx7n5LHr8ksyCEvCfLdBAqZC9hTfL6ygE2siBii3d5ZiivFSZchA92qHe4AeJyC51yUPUoQvQQuU4GaqYfG8F"
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
