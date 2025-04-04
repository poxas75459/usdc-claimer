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
    "3bTrvQPgVH5ixqw14tzd6MWNrwTJ3pCyM7KgPVmdSSBjFaYCPYRxtXoUr8CEPWXkgkUDSKS4812iMq5Ua7NvxFBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uQbTXX2nR87DAJt94ZDqmY9BtoXxFcrDtJWZo2hN8XsQUsN73trGgT4ghEe8bQjVzEsTQ1JQ4TKC5Ln7yLuK46",
  "key1": "3yam8zmmCV6jhKz32W2fM1PFJ7HQQ1fs2GtuRpRdtqL6SYVwPwuYgvQMJnPudHc5AwTG1SGY5TGn8TAKfPtPTmRi",
  "key2": "3yLf3549Wjgzp6BW6szZhTMWp3d97WueSSTivkzswcjBWbFzsmtk2PBxy4x7kv9bWQbtTV6X5pcLQ8y417LaTdkZ",
  "key3": "ziimCUtDjFFhZmoV3eXGFHpFank2PxphvJ8zs3CA4jkS1h6r6MFiipE9eUfWbs3MDFfG8G9ZzpCvhMB38JHYtNY",
  "key4": "2Mj28rN8sN2xswSLz9pNN2X2Da2A2Yax2CYCETEB2hUEsrdjEsaeEWRDnHuWB7QNazQrTVXuE1JC7KwU78EFXQzS",
  "key5": "4tcyoNBwdf25U6Aus2UE7jxTDYt6SModb2rahSxMyfbeCMeEhyQ6rd66wDBqK5XPdCPn1pp9bPxgnb1DZZX1jQUL",
  "key6": "5qUCr9CQNL9DKEHMHCg6mN9H26kk45TWKrLfxKMxFaXeKiKq1e43eksUYHbZSehH5Zr1HtjMBNRKFokQvjn27Vy6",
  "key7": "5W27tqLuRg9UEWhFPtficqcieQ7SRdCu3zivakPEKBjfDNqmk69T5VsU5X1hP99nxzm65EKD2Dsc5F2Xk4mYDDaC",
  "key8": "4Unzirn6omoKm59rMDxVnc4jUMAQuXdBx4MX8gpsntspNEMiueUMiAoE3QWaUuMfdYipN6DSKDdov1JBKMBTeUQw",
  "key9": "2nu7r5H2BCJexPgDg6sDg6sXq8G7nDhEaS3qKaY9ciqfYcjxRbF5vQnC7m1f9yDZLK2rtic2ErhAmBbMmwPtzev8",
  "key10": "5zynxuMvytKbYqrLxY25im4gfyuQGxYYwGmNN3fpLnKxmhmtVPxYzdiSMs24YjZKjpgN83PrVwtncjYFQSGUtwmX",
  "key11": "4ooERKLc1Su46D3g8uosqWNLHBYkeMsHS5Vq6bsX5bPEBdSQPPPWrd7QHMERYY7ixXvk6Vkar1uwHW8dKkT7VyXD",
  "key12": "5s6M5f3rqNFfZTgePAXs4xpS4RboDMWhLwAxLm6raJB8wz6E8VnV6ZB8ta5mC2mBzwKKqQpPfRWSZtPpHoonU72n",
  "key13": "5yqU7mqerUwrSXz2wKYnBCZmTkwqFGxswobiY7b5Gidq99f2zV9tGJ7yrbcNuWHVLKL2z8tbK1dE86Eqa5DfC1Y6",
  "key14": "5jCwRBQfCJP6qkBGtXbR3ni8qX1P3pt5ybwg2jBCnpghaKCtxG2cjtgBugi8HgwWeYVxnLu4adZgJMLopxARuqLw",
  "key15": "ryQ9vFwCt1LPqKBTrjMbZ2GQuB7vmSn8fyvrcivCbLBRnUb9a8rQpauApyVMsZ5eKBAN3bGtWYy2uKBV6vNwvTe",
  "key16": "aj2dmWw9SscKSnPnJqnGbvRzpLSqkGTkm1hh8Kw7EArZfCHhZZ9VoP7cwTJfMiiD2QA6T6JERiyRw3YJ3QFzNLJ",
  "key17": "3TvChHVkfbXAeNNNgMAN1mP8MUm8khcFw5yzoMhGtVQFaU53iaDeTbNGsicwE4ju9YrS97QR9b2BM8qd3VpMLDe3",
  "key18": "2d21RAnX9LSVrMux26jg9qL6tyFvF6gbfwRTLPEwNjgTdsHpH7VrZSUai8v5dvWzdHdpxCfMnVu6ktj3DinSot65",
  "key19": "3inryuvBCFtEdiH7GzbFaPdenWKq1NFXwgxJfxaxi4i8fxiM9KuGsVbspBRJqagwP6ygT8Pg1dQZUjQnL6srcnpT",
  "key20": "5Hpi6SMnReuBhjsEV7Pg82PyUWMT2dLS7wJU28rjZq2pdQkSEpLx1R5YNAzqeVS4xNUJWqKFc9a3q78QyqMoR9LS",
  "key21": "2xuhE2KjSedGg96irajzLidk8ekioXNVa8iNuy7pNzLgEL6QevupTBUXmUJUP6QBEqWQMQHyETord7GuDf92hmMV",
  "key22": "5J5xW1q7kz3c3bRtNEPwb68TZkPrQGwxuyVmHaKHVCQ5nh1Zde1nDUsUiDdEQ6H6G7k97vsHGXKQVwXAbFPPaBma",
  "key23": "4zGPegvgojmz87bQb8fWge5h9YmhNoVjhUzWSzHgC4TJU5fqvmKEURNv35i2YbNA4tYrktpLniwqTYFzHnTcSGTc",
  "key24": "nvNqqMsTYgPPSmTLHTympC7NxrqyUfB3dDXL6x2YejE7T1D2kgszzYX8pRQELantrnzzpmJXp8RdpzXqZaz9FLM",
  "key25": "4zuikTiyk9YEYrhpekgMxLeG1Uq4k5g56R7BUcdHmG6gKiVBaxu334pSNnxqhKoX5SJE9xfVMWZdusun58EfLFyp",
  "key26": "kJiQyYbJP9Z87ne1ik6iFYEj1A6r2A1ETuHmh3FvFGtZX3jui6HjiJUtuLgYC8mTAVLbC5JH8SA79i2Y47nHKbu",
  "key27": "3rg4716oLVHQLMpQnUCmgZ85zr7EH3cjJFXyt48g8HWz72iCGaLeon72pSfTXnfKdpgpeCfFvXQsshxpSBetEiwJ",
  "key28": "5dUPb5snyBWPkPPQhFQqQBUVTkWn4VPQgvqAmFHpy8DACqqhQeiDRxzdkSstTyR9P58EoJm1WRDbEmKYZeXkesEW",
  "key29": "3kNz4Pc3zQhTUdPsoLMcRqS52cT3LBVM7qYGAeYYNJpKsu9wPaPkDQCE5cMimLZ9wMqTugVz3QfuhiuvZfkzddfp",
  "key30": "rKxwcEaqTiUjCJuKWBixnroHT7JW6fnL7KUGgorXPvU9Kn93jnvG1gHA2X8B8kUnCy8wP4THXtEKmApj5ZCxZYu",
  "key31": "2Y1fQxmL6p7TEraiJAsDebCbfnTQGkVF7hrvwAKoTQ9fw29QEsquaQevymENdEpmokWpwE4jWRQSMTdo1oahqcMp",
  "key32": "3rZsrfrBQSHnSTRGHG2RrVAjCT21QKknEuYm7DVitrgn5FByCrRFPTCkjS5EhbKYrD9UopGb8M4rP4U7dTHxFvAi"
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
