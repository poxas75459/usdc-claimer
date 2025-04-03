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
    "53xMFF1u72cGcP2Uj3dkb8oevrMYsLYcKTiS2UmZaTqUq2oRFTCWr9uhf7Cdr2HL6QrifYncYfyRxYTCTDz7vGTc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37NQsEjt7Chd55QuSLbhs38ymPf3QjR5T4cW6j3htd2yL2LxtiPKJH2185io7gw4dKCU9qgvuHiENjhc5Tr8tvWd",
  "key1": "2EtbnWqtG8gpqfvgTE3z9uj4hnQWKPpN32odGBeqTCxGKXqn72JWBr6qfQT6meeh18yFnjZ2hybvPvTqmFNHs4Qe",
  "key2": "ATjzh7H4zFrcyCzbg8HP3g4jNowThBypYSxojeLeubJE1LNq2AWSWoPhyXPdQ1b2vo2U3dGDr6kgbBg5UfWv2Kr",
  "key3": "5KgWikLrMpJaDgR7iRrMDecuaMWbwcuz7LpabLvkn3Pw9LEAFYnpKTJ3Wv7Yri2rHHqaLjQdqxzPx4MNYLPKH4K1",
  "key4": "5QP2JYqD3hWkMWRXvUqt8Qhi4tqn9a15mzzbJY3zQHXyKWaJgWixVM2WZQqHoXTAUSNEkMzeUGYt4xrpR6XNJLok",
  "key5": "5S7cdEwDYPBpykC2rWCWbd8hmyxqQUGE5BAECk9LpwvLnB88sMWoFW1C9VrShNXEeMp6jjG6ygGme51k3mC4CfdS",
  "key6": "48FgGPpUSXxjJmgk5WyhKtsKt6WnLYXCPQR5T1gMnW4Nenopxc3fZnQRuqzQzg2Uuk15rxy7mT63dnPsiqvr8S3V",
  "key7": "47wzkqKuzRw7Zff3DyHJq6VqiC61igzphAP6JAWowCUAhgUcMpotbBRSA5BFt9XPwXwvJwrrHuz23SbS6Yjzfby1",
  "key8": "3kgt67ULVDNsfZgqfcVmnUE88EzXhaHoghq9Aq4svZBKyUQZED3rZXBqxyJVEBQGFpFYzBPEjytFaJJcMeGkchjD",
  "key9": "5ihrKjDczhqNsRYHVf9daNGwRNiPXeNubjzaZ3zStHm1vCJPYpAhfmQ8Kj5jAq6vLGJ4HeUAwQzFJVdwmWAdEwPf",
  "key10": "3gMhBZ9SoAGeKiicmgqhW8iaZzR7vVpUjWn9fwvB5YanWY4ZqVqcJn9uADHinkfY4egANgMCx2XHevYEz7nhVgCC",
  "key11": "7ktZNX6pUDyW3xwNW6mEyM9tZyqxG9BCFyH8oWPt6YJS5r7ar7TYZ1w6fC9cUGKRA1NyrZke93VfKTXYLRMoo13",
  "key12": "4vZ5adfhazzqKrLowMTB5vU6PTi6YSqonQ1WwrtgazBRY39h9wfernEN8aDDpiEVJSCo71P5Rq4de2N2mDoL2Sdu",
  "key13": "3RJCsxFeo1XTghYX5gJth9HexReCcuJ7MwamfyQZzj2Rorfm35zSfmUsZWzG3ir4Dd6Jq4F6Sz95rJbMKqSwjta",
  "key14": "4X7FstdVNjcXDr2wbMuUCYhJvJkWcjUF4ijcYNkV8GXMJyPrSBtEXAVuLrj6MUWZ7qeQvn9komkpU85ZWQv278Sp",
  "key15": "cvRZ5U3NedFoBrg3gbTEpYbaxw52KCwxPb7bti7qPa86QfxrDZ7BbFrf2uNcoLtPMNCgU1yWVNsbUchYhLccXGg",
  "key16": "4uv2AxqHpKKsJqLwDy7uTWB7xey3XjrucNLwipo6xo2rhv8cYFszRuke7rXVjX2SKf3TnjQdfA155aXWfYmXYWRr",
  "key17": "3JeiGWXu8G6BAE3gRPkxCFfQTwW6fZSthg76cwAQjDSHW7NdkJu1Y1bhNiSdVa8ic8NF5yF3PfQFvrZRQFYjnqXE",
  "key18": "3WMzLwBaKpUsxyLWkYHaAoQByAi9JXZqPsjbXGwhp2oc7VHam3GauLZQcWtkU1uXxDcLcH44W7ZbovgupngGzZ7d",
  "key19": "5HWjwMgBufGEgCeWWg6LwWv7nisSJPtM6VLafeqKKvJMUSLKVknw8dMH2RTcqeun14BgPx1hHPvLXgP5QreZ8Y96",
  "key20": "2C6DLLDgNWgyCrBRCwgmsiVGgjnPw7qDevqLE67qzr1UTNWBiSMtyyeBMd62RkMKeWwP6st549PXZWFNpEz1mWL7",
  "key21": "2VU41uatqHjJKp1aNEjP1WFeJ9jb336DcY475Ve3KYnAq5ANrphW4xnmjbG6XpChaoTq2uh7bhzFQ8DPKNrppXvv",
  "key22": "5LUWPni3mGSTE7cdzCvXxLBK9zE7tXSmBSpxUgJ1VHU3DD3AYz7i9bxGr1N9SsF4dnewac2oYEhRnsiEQPNxey7G",
  "key23": "5XMuf45EuYnyMTfZd1CGhek63Rr9ZU4q3gr7MDTYJyJdF3YsnZUh9y1Z9HMn6iMsTAVw4eTrJL9fqcfaHPcQ5uL5",
  "key24": "4VSuzpV6jfhZ3WXBcs9XfcSphGqy1WRAAqUA5oa9didT43ZX1YbaZ6eZofoi7hYNXkDm4HRp8JFBbLntK1nqvWHH",
  "key25": "4t8bfDy6FC3QqbhxxQRDqqiesrxvZxWjtEaVrTVfxbmz1qnWkjbvX8psBHpF5A7fTsFWtHHUXr2Jj3Qwo2MuoBMq",
  "key26": "2viQQdYe2AYAhfbNDfQap3Q6VARgTqgCfFXVio4DQDVG79iw1NXqPA84GKqg7Ay3nqkupijYjmoiqzPP5zPciQc",
  "key27": "3uqQVxKqVpJYZvP5jHgJT1gCbkawtovdEdmcY4mt8D3KaqxVieHtsm82G6VGXXfN72ngNfkym9ZPKMfaRv8TPdQw",
  "key28": "2ZWTnse5drnhUV3jHrENsePe7sgPgNtbPMhvubYTfseEDA2qRPEBM32REo1mFZfEP1BvTixTqJ2Z4CwcViQNmcfC",
  "key29": "AL5Je2eMr1QA5PhxZdLSetqFkB4MKtDDpZwjJbJT7fUDGYU3aTcrCb6i3RKqzWBmhXzeamGLAfHTiS4nT7DXkWk",
  "key30": "4SmW1L7x7Ttx2rz6HL62VvNKubSvsimzmbWo8oACsUkWxQ6coGd3kgQckct44fevNiSVrPQBxssp3NzfsYJBdCK5",
  "key31": "4bAjPKV5DBTD23P16odwVtV72MBRp7KJdrrqMjHe4GSgJgmtkSq1eMLBbyurup2ii6j3JM1TrQGU484CSCZvfCzu",
  "key32": "2qvkSLxMsxSfRWXZR3gLsstd9Mc2jN1obSzY1tAiDwReeSB8N1nG9fSpDv6UGJbm94jrWbknCpSrNGXHzsKvrKUK",
  "key33": "4dBFiLF7uCtRKAUqTMXFFs3iA3P66S4BJFFTGBq7fetKPnkQqW7KaBEEPgkhvZUBtogxfyvYVxdde9di4Wfo6iMH",
  "key34": "3hrrWZYwZqEuNndFAjJKAisDRsvw5QsFa3A4CEsE6PJD4Ccv9hwazCnNr8K9giFsKHMicoNGcrsqzpqgaqnFGtcN",
  "key35": "5YcvDy6wTHHkDL2VF3wNje2SPeRz84Vi7XHtmkAzCQhLqdjPPAMwUPWUYTM5yqCgikyWN7v2tq6u8B6YneKgrjjm",
  "key36": "39S3d5EEXuVMcQ4bb4omfHPz5jJ6DUa6Cu3T1XvNGicjN9DYcyAdfVsoNybC59HiYX4q7ydoj5VjeXXoEzrjQsug",
  "key37": "2VaKELxsGtqHiWsbTbJ4UPe2cSktXhSCsbMa8qRWHUXS6yaTHCLitMPpneNtYPcC1FKdDmuZUFSr2qDdrdWW5AN",
  "key38": "3fy7o6SeXC7Ljdp2KXTRRJyVDtxKQr3R881dFCm2FVmazbbceAszJWRApJWLrDyXXpXf2W6v8EChLGeUGJPrK2ha",
  "key39": "3LBb28XtkyZJt1Gvku4AW3qzBjX9k7tA8P4xeAqC1J5BawmbZNYPymocCNJ5zUXgKPDWcF4BrmsjgPyJGMserRiM",
  "key40": "33Qm6qzPgexqh7hnrQe4P9u41nC6JJWaJU3nuBWmnPoGuX89rUdyiAVuGPcxeyqahYEzSjACwpQH87nA3HMyPbUH",
  "key41": "5LhtGsdxPU4XCXwVFhy7uNSYJJQw88uU16TesgBDwnvo9d8EBXpEAW3vaP9Pf4cosT9rWg73CaYV6qaeu5QED7hV",
  "key42": "Him3HfbKDL9bNmxHf2BLvk5HpwxQBbEVSKFGcB2PMBEtyL8cCw3PVKhULvYoA2A8Shq5RvFnkAjvvgwxzwHvXmR",
  "key43": "5f9EwAMRggxkTEng2v9hJq1P1i7eJaihd2FQUkkR44Q6yQBHW74vk93FozZt8ktxaAa2wP7Q9mvjygKHtSoiTbyh",
  "key44": "63394HoBtfhVMXGECeqKAQXXSR3mkAWgePkYozT9QArtFeNCPJuXZLb2qZoYkuemuJTY81uJk3BVTqRqaJPTjEze",
  "key45": "3DuwiX8QNvYi6WNDpub2Y88PRDc66Zv8czkm9UVvp5oUKcNjvKcimQ5oVkWPL4yotK3AYxpX7kMBTvYntpa2FTS6",
  "key46": "4GRRJWBK4J9MndrCrtzYcj1NRYsREmeFAmTk5fZXqqxBSDZ7jiBWqet97RVigYT75nGLeJTS4HTByr5dLvmqJA6E"
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
