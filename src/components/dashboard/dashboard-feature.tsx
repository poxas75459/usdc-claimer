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
    "J6NaqiG8UzZeEjLSwe9rzhYZu7T6d9Sdhbi6CpgcPhkphwasT4xS5nDkQwpgVSLYdJNhwg2d6HnvZ2nqutQNCWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EnK5Bt5BjHr4i2mZmgo2yAZFmR1G2CPsAFt6dfsaJRM9ogNa4ZzFL1Xc8iR7UbLi3zyZ7DKrbrf4s7dtP2k6Sw2",
  "key1": "4zn2oA8PhbibgVxDnWb5fTzdmiBSGEsRZ9heFMaDBx1bGhHWrxES8aHjAWHwmD8eEVgDGwWE8rdz7hidU1vDubKf",
  "key2": "35V3U8nL63Yr5B3FwG9Ruf2c3i4uNqG8XGrXAp2yxASmCLyuAoU8ZhuDcVqPBzD6JRQRjwSaXPPKscedjfvRQnfR",
  "key3": "3Tvx4xW82VeuGEgFBzj4hszJX8Prexb5xyRXodcLkAD5CaeJ19Sbq6S7W8V8LTZLRagSHzNVzAqr3BcEgkJNysjW",
  "key4": "22mPDemvJTLbJGLBmmrdFuyiq5ck7bi1gS9GTUnpdNJYfDU5EeCG7sfXKFGAamQazuQcFxg93efPVpSLYofKFdkK",
  "key5": "KWJPzr1vJ9dmkaCcyja1X4Kqw1sTqLk1sT9NUrr1DDaTPnHuuaQ1yigX5jv1d29QKwJbd4VVZP31Ky6jGdUzX6k",
  "key6": "2HVyE7Dy1UKfxkdnZaE9Dhh6FTuJuNb7tSB7S4KCiW11hHHQKwTAPGz19j6JSfaaR7dg8moQbCQJM71sQstZiJEr",
  "key7": "2vSpX92R9ZkT619kAtT8EFukgPT3zbEXzjDRvbCcxZtbSfYg8Ygx7LrZvoHDSiqqVSgJwYu3SFkRjGXNbY8G44Yx",
  "key8": "668kUJ416zAy5qnnbxSWpJ21GsaUiuRVrxAV8ZMf9m8iKaybtC1YsiZEawPYqFp6pFBYJvKWefu4J6YQCEFuezVa",
  "key9": "2BAkkLsaiPBZZGX73hqopNnQchxqkASZ4J2QkRxgbe2X2zBN4vkhvGof9aF4tx37DTfoRtCQCWeR5NPcejejsGW1",
  "key10": "5kfUfcY81HTkzqdaARRp8zq4mcummwyacHoR8i1ZBzDzHgJgXnvQNc7YdDHCo3Kjp14zNdddiViL6mjVGV31vGoz",
  "key11": "gYGqyFfsTxGY1DqfSo97aMkWyeg75qrjd5MHwja1ztpS5Vp5KgZ7wtL8sUwLHXUbWTtmZMmuL7DzYULxkJufhA5",
  "key12": "5FLffpjGMc5L2m9wzFBetFuPEEPVVi6vdQZ2XEET2BveWfRL9A6MEB6rL8LQA52Trvn6vJiX4w9wBBR7BcBuc1cv",
  "key13": "651fjcSq2wpsTdBfR31uMEA4Usk1oCfD8dFxJ91GoNYHog34YEZQcdmtXDiiHS2LdcWZrJkcKz6YcpupKMMhJjMa",
  "key14": "tc91kAYSCS3CzNh9xxWQQMytcs2xbdZq15sj3jzxP64vAd1i9gkxLZDnYmXUiEt6xHsirMoMyfvPBebZdfhdJTU",
  "key15": "25rNrSF7nFeyyM15RtXLrsg7qPg9dXZhWBStvsYf1q5UmmQjGQwa5ZGjPq9kn4LJJZo9zWoTbSUsxu6JzQa4XEoR",
  "key16": "3YxDujen2CyqMFF94xNF6ZCTCLct2zFYAFJgkyYsRdR5E874CVFoJHtE6HGip1ydCNjesP67QEyFAKAEA1smxmDu",
  "key17": "4GVVwkFbTeR9a4AVkGy2D7EnQvaXoVTqKP3Bx8sFfjHWNT2Guwg51BcMxHzhkriwgsDeFSg2K4qYeSzc1Sc8Rys8",
  "key18": "5A5H9C8nQRVXzt1Y6vFuQzid6Zx3cnY31QrYJ2JQWGtQoFp1ED1Z9Cnui6vasKV6ZkgQ7CxQPQr7JUf4nNFCwCH3",
  "key19": "372rKEQ1QfRgzSicg6bcCCyAbGHbSKgH9tEgEGeMEwpGuhYQSidA7rP7droCa8Tq3xx7yphMkGiHn8j486ofbAS6",
  "key20": "3iM2yqTzfqpS5jTGT3WLWRxZ91XHYdhtnvQ3uph2DyP3vtVdafKZ5r4jhLLjCndQEiucQZ2xBkmJn9CAdXNywiuk",
  "key21": "5698p7RCSyZ3pmJz7XpSWPyzkk8YrBCQJZjmeTdN5EPkMzmHCzBJMH9fT6u6QzWcaf6r5cD24DU9D4idSzLX7SV1",
  "key22": "FE65gtXkXRf3MGh9GsqkHbaB8zcRLZd3m7vqSBzq76ioqnn2E7j1sNajDN63voHXKo7x1Lh8jwbsqJieFEnodcR",
  "key23": "2LPkwPZhCy9ob3fcVyGCSWR5hCtHvp1YwHk3VoFw4K5QScdoRSTa2GyWxNWWMsANeMBLc2C8iH8NZJQfh7c9vyox",
  "key24": "5orBsPkZfnELeHYP4pGgz4KgDv2ip5s4UoC1qLMXC74G4Z2AJ8NzF23dHFn3HxVJn4KT2fEdPZBktRWEdHSvnNVz",
  "key25": "TasFMK2nSQaxVRyqyqzT3doDFqnBD3FSM8SBxguqSrtMXdcsWHBVBbyoyMUd7DpLutqrbp7qS7vaFYWNhvWPTdN",
  "key26": "5UHx9LVDbJxnpcpkDFWd7wMYzhN7HGdmXHu93FDjexUGWgJxmjEf7Xd753QyKa8SJcEnkk7SC4sSJ5cLaBhQTLgc",
  "key27": "2u4MSJi7diXg7hYxh1rAYP4uZkbXwQXvbtYPfDaTfLY6LtvETHtevx3n1icEMA3iMjp7AW6Ex8URBZF9HV9BN7T5",
  "key28": "4J7TmuKhDShDHUzQvzuLw2M8aFNMJdDVxe5DHeSTsMTyTwaEgX6F3ureQmMtStz1U5JA6vzrgPKmAiyFbLiuMZVo"
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
