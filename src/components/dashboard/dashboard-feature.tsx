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
    "2C69UfueU1kutknmJ8sxSkEEXEciKzsKk2FyMVPF4fzjqtAC6A3XjpZEMSEwQkc6p9ng2evVNThYx4dEWCkwcYJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ADdWEtPTs79NMRkAGHxMneqo2aMUcaK9v3Wta7FEm7AWaCtnv5TKFyb1bnEYDjMAuZQe6imt4r3xFHtAioE8id8",
  "key1": "23YYdTsSKVUPe2HqgJWgxFUbMZfSxYGxNz3u61qsTHP8EHjT6qYXpJdYuvMDJz6HjfVSLYR5KMFzTqKkbMsr4d5E",
  "key2": "4Fzj2ceGS1g5UeGG24LjXhdwfxia2guuWvZ7TxhYDfMiVdngmRD4VvjYmfZnZeetPRTL9GSqLFHkKaAgVWex4Gig",
  "key3": "43UVPdij3QrdSyCnwML8TCJHgZppU924S7wZiQKRFYHx4vZ6AP3f4BkQ27rLu2BKva11giBrWDcWPeveacbgFUkV",
  "key4": "2Uo8bjGqU4NwmyPXEXaXuPFcnczDqfRT8QrcNfMgzFoSLAm8ZqcRXTV5v7Yk8fRrrTKHoG5rZUcytqeDc1mEDrgs",
  "key5": "49iGtb74U1V1dTYgq1fK67PTNEusuQSrnq8UktxSuMAdbrgaskGrWKWu1YZeN235NtdKbVGxBi1Mnc5ho8Bb9cgg",
  "key6": "4mtudEuWR1wXChiCd2acqsu4cxKEKfdm29qHW9RvjCSNTFh1Eo8sqWAvjm5M5Xcmecrm2ies4R5N65b5zjfZ2yFS",
  "key7": "YG8fdikPqR4WFAf1JoCBW6PSbAsnDrx6QqwNhNhkCD6fqCykcYJecxgvNodZTTsDpxqSK81GQkKRwxsctHEREya",
  "key8": "4mgocqDKxzqkh4Xq9eXWELR942HTwZkGwLamMZemRJaZpzNXgRcSMijeqcXt6WxgMuP36J2dyJJtCYtPUATYXozR",
  "key9": "jao7P9qjfQheMhjRWWZTGJiGskK8FtbGWkmvAkg95BHc13y9rxJYwQ4hjFbCQNQS8rvfyK8GRqB7xqb7fevRst2",
  "key10": "24EmT8ok28ZG4rBMSDKrbc25xgg7zfFkJy2CuMoX8fdYaU2WCZRTQ53ZVVh3W1hZWPLqVpVYctpd2WqNYaGeMBUT",
  "key11": "4P31tkPmRtvs8aCN5U19X6C295Ayu28BcL69LVUZGSSWC1YfKsqvCC5JGgfRFnJ6H5FZSTtPvK33LPdz172hYfFL",
  "key12": "5v31HbqyXfmLpwoJmDkZsicGCYXar4bu7YuK8nCKyD2L3UvZKs5mpJaaCEDDF9LzYKWQFPHjV54c7fLm8LoyTVz",
  "key13": "56kei72u4U2Vfskb6T7N6iTZH8gKZDPupvCttjGNjPxAnb1P9hwnfR9T6d2XzeKtT2A5sXMX8rr7PbHxCXKLEW6C",
  "key14": "ZupCztfeGqcmiSHx9kKvHP9P83NyYBLmt8tNYDf3ed4772nNbHdLXGMZf3FtvAJZBHMjwGdJejgX4GDux6gwTMk",
  "key15": "PPoPoNhJtAkBXfCtGF1uZBh6dDmLq8qCnt3JJBQGGAHZrvL1DPoucYpEikvnjmwQheg898anAKKtuVYqL8a23uZ",
  "key16": "4iRTxhiwfMNc1oM9YRZCzVcdtzuxAwZ2hqUNuKoqwg9tDTeymEpdURG1h18mMXzKsqTrmygRjD1Roi8JrvegAqJb",
  "key17": "263TxzKAsTr6kThtb4AdNyPMRigFmukeBL3e48BBx1hmKzRoRfNAwaVMfEdjBzDKL2r86a99trfU6xiuJ2qNzxiH",
  "key18": "2AEXVmvC8JFdwWYQcao8431pckMxKpJKoEyJnapXyUS2dJbMzVj82FG3kdLakGyT8vgJkYHASFPGtnf6An3F2F2C",
  "key19": "21KosbcqA3XqV2hnWPVHjE1wFWxdnMfqo5P7TB3MGerxUdo9MViWB6aGJpt4LAMKGbFjuAmYoiUfMrbz5z8B8PLj",
  "key20": "3QiZ24nVzWukjKB1posxdsqeWe2sDkHzhdoZERFiWPCuNJzipvuct6tcYe8iT4g6SwagRZ2RwY66LVXqBvWENaec",
  "key21": "4TovH3t7AYsWE6BK28uTfKHUvFTcUKnPezPaamAiXWW4ZrFCnvjRpuNyDg4MpQttyjLFds31gYHBBEbcZgHNJ3Gf",
  "key22": "5pxbVptQuy9LodNcvvwF798e7443B1TMaiBCryjsBdW9rR2gWKcnpZBP3znB9iAdKDp4jF1WCV56QirU3LdUiApc",
  "key23": "245EarXisVxxTktjLeDmo2ZsT8oqbSr1mVULb4dfjwsNPKQrpw7pmnhgRe33FpS3qJEhXFMYn73SvcPutLfQapE7",
  "key24": "3FWHxGyxp4MTH4puhE73cXEM3kU5nVuVKqKpxZDt5K1t6sxgUP4ibT2VcKCz3j724sd6r8DMjvaLRxSsGcZgA7ZW",
  "key25": "dm2q6XDo3J6QnbPaUVYG2VkHeaJt6paKoy5pniKCFaq3fSDbwnkyw1qJJx8Hbx7mveGwjX2FJe9LBRX6oqGNp6u",
  "key26": "2prLcB9pBe5KbifJ1NfCzphuQbnz3xhE3yuXggvasKAiZMqhGMpH9oMjrYz9nibSK6PckxG3g2rsfzKi9Bp6Dw2U",
  "key27": "5DJ3BE3EymJurj5B3zH7XJcJ6AWqMgJFMdjH8SiUgo7jPNykRrQPeTMXmsP76djAFriV3pmJJrBTVZZZPAwJ87U5",
  "key28": "3VXWErYByZwBVjWPVun7uAyUgs5goKEcxmLwrgDWYVdBjWLjxdutJFi2eBk4Y31MaZq7AM8eM9QXau8FnfZq5Xy4",
  "key29": "KdBcsTQy6ebSZyDqM5JKoGhVHM2PfLENTrzYV9zFmGvrJfQXm5GT1a5r2kLBDAEBzvZ25oifs7jRigAJzDCR2cF",
  "key30": "2nN3sPuYerTKgRMCwuBda9omHMrnkdsBA2h6TrzTArqeh7WdAzpLB6vn2kGRoAQmL3AEiCGnQa8VCdJrA9z4Rfjx",
  "key31": "5e7u6aHiQsgZc9deMzhW9x2U3jb4HTTPjCVrsr3QtWXkX1ABsX1jKCAEt4SkVWo7Sc5vzMyQBjuaK7zdFbcvp9dA",
  "key32": "R7HUemEXveiig7sJvKw5mex2UYsDEKcembPcMVxsdMZtCvLDoAPafpqp3Ghuv5n3mMiNwqMoN9DzpHATBGVXdCF",
  "key33": "4ay9qfqaBBFpHjrv7wqJ3xYdDJDAR48kCTKtY12x4tn5SKgYs1qXxtnkGUMWoPTzWDbNYdSe831zYvdzPBNjBvUg",
  "key34": "4vVH86jRBYd75KEnEbXFAMgt9hP97qWwCnVq6rujJnV7VhstDMFVpaXfFkKKEMurYWvEyVKyseRnEWK8NpfgvCtf",
  "key35": "5gbCUW9WqVEzsVddh1yABDc7LQcHqoqgT1E5x3DsTLZZv6gtRkLQPHHVhZynqLZVFWLaQcHqPGxePdApTyMVwKYR",
  "key36": "29VWs13nWujcSmbDoJGRHadNqcp2b8bryMQcH1475cPLBGaK2mos13Lk1uduH5gsBxsNnDjkgS9YqEkyshjZXgWz",
  "key37": "3MZrW4XMQE5Qovv5xSLSwnfVKiJQq681awACbxGdKwfgaf9NpSxxNm45xwy1FgdgmaitEasxS9G8NhngBSeDuUXe",
  "key38": "PG9XimS6Yyct4CnZpZRrGecDDiM3MyUEnv459zhATnkGC55vGLhWn3VevDkTvCStKa46HFZxmu7ajEF7SEVgeMV",
  "key39": "bdxr43rgxcjb3HHArNFRf4grwUVHPa6dVNbnMbkckPGGdnF1zbSv3Wud4npPujZPUNCZtVWRQcS6sPHPsSMc1sh",
  "key40": "LdNvEHrEDMQmQeitzggdeZUeA6H97GXtcA74Qz9UVHSHgydCzbdw7THqebKa45zjmDft5gPqkMGeugfrj5bzjSG",
  "key41": "2uvQ838pdRhDmRKyqKKZn9i12rdXTu1H81iwf8BEVuJKavxypdyYJBF8iiaWPihKvH5w9A92wLPzoVr1bY71AzBw",
  "key42": "D73DmNhCiQQbkVZ7Qb63BnPHx23twom2NexpA3T7HhMAWzs1XoCmZwnF1N8VpYqDznjNrdNfFET3RXfVBb88ngH",
  "key43": "5PLzaFH2GMFhKXxnLnSGCAFm3oBfg76Bx6vEXeKGFh3PoyKLMHopDziGAcg3ehgSjdC8V5oKoxmgoineyKmPAnqC",
  "key44": "5dZJBsLdxQxMQ6mEi9eb3ced7A7MRCUiGLKqXbHuwRPDYxyZ64NAyPXxT5FAc9dqfssfNajS1kUfZiNKTGrH8fNN"
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
