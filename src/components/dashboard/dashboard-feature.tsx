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
    "39ofpLcXysComeitjNhNWJDUFGUKZkbn8JZLvWoCvPZMjxEhZzCj6MGAqxozftxjQxKCAcWeRVY77385fsAcUvmQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oQrAKbjLkQpdaAKbvpV5nv81zSCVCwYWuJw4EZwH2hhXxn3hGbVfo5nBcmKhmGpLGGSN5UQ7orr4greDu1Y5Wp2",
  "key1": "3ca9yDQ7pPE4vNpNikMd2nS2EQgy2Fc4UJKG7Tz7MGhdhhRaG8xSXdjMR8iuKHPU9G9pJs6JYeiJKDsMbhQcZiqq",
  "key2": "Uk7S5mJcx15X3Kg65swSXmBPyVPr1gofKcj7RhrH2798gjJUj4xsc28RvVNugY7jpjLj2dc2SK64yrGkBt7MiDt",
  "key3": "5D1KGpXRiZxKKPikBUsc15317Zuo48QdouFDiWW6mU7djXstdu5MEvWXGKQiGsFSZWp818F4emViwJhNdihtjr59",
  "key4": "37oULMo18EzKfC3j2ZzA3vsmtjNcAPm5GGN2XDL6EukADfJNnZiuo7bev23VdKQthA6CkRjSWMjmWYCUcyMEXPyT",
  "key5": "2DNcoPAvV4RyYK8XeoGAFWxtxb99JnSUBuWyZNgyEpN9x4w89JVk4z2kY6zPArdjzAiSbHCQxYjMF39dNtJ4UVKh",
  "key6": "2nHavrAEMEKuqsr2MtVuKvgTjz8uu9TYt8rUW9dQxnUy8wL2pVvvCN4HeoQP25EKMjimgn6U6nokiyzp4MZ9xyhS",
  "key7": "3QHRw7Jh2FJz5JdcAU2cC2WF1KXkDZgNbgUS4u7YZyUgQ4UYLJLWqaaDUbJb6n1EKyN8hQDYzSnGVerUSRetwYPz",
  "key8": "3copFLdYGNbLqDaQ5zZcYHjvAbfL4Nfde1hQygTGXZTppcL9Xj45YZSGwe4erj6GrmMc1RuzPvR1gNT8NxG4B6Uh",
  "key9": "3Wavdmpgupkje5hm27mQdP3YxYAZihujH6EBCSgnui6JeuyfirwG1UWMMcXU8RgBS7K2uSWC3NU1LxvCNP7Py52W",
  "key10": "Lns3WJDA8kPNn9PH9nBDT8fsW1eTHNoFxtvkGRg37bzzp8NRy7NVV2iyR2JKgCKxeZ2e4Lmq2hNcaPJJA8V2pzF",
  "key11": "5TS3nevNkXcaWZgMt3j4qJHJAFU8DBbcPo6HuPGSX8E6Sg8GWyi3wVJLtzT7jnYFkN1K2FpsyWu2fSw52ePzcnJy",
  "key12": "2JqD18N7Ststf2f35wjxMJjv4pAhXF8LEWsv6nJFtPpAd4o8kFgHHdtzVFiXHVfAnKspvsshBa4pf8kDywgeECCy",
  "key13": "5A1vTJzbK79nQ6K6TbRU6eYJPUjU5utaeGP3aQDxp1cJST4mZTXNq8znxqPhvt89559VEQeLSJe4RggyFq8mMEC7",
  "key14": "4KpSKa6B7bEjnuNqgCiAWitwdG1sWjHZqsSRyhSGcHXzWtGjC4CttAoTuGrBgjProPNMtBvtAftCE6ZUUNmu7hN2",
  "key15": "gD7y4v9nF4bB3itoKGk9UCZnnbmPHj9x16jPnS95xnSs8gQ7N8qJ9vfin7vi3ajiqih9ELBWq12NehYiEwshxHy",
  "key16": "5n9ds84B7L46ZaFTWNTaUWV3pRDAZ3CMmAdjXAzMsk27suQmA4Epn7VZdgnod5DPmZQD9Y4dUS4q7tbjg5ZsJrSM",
  "key17": "3KamheVAvYox62Hb794pLgDBhRXmAzJAaJifiuRp6nQJp96T2CmrFGXaGhocE3gCewU32F1AozGuWfziqXVupmN4",
  "key18": "5GrEz9VcuYBdHxsehvgZ7ojQy2HfjRHh7WJFMKBCLWK5YgmF72CiYscub1RWZ7ubLMxUA6JbpB9SGzncRfwscHYv",
  "key19": "2M4fbxyYHAd2tKnVyXtUXokz8HQS6k2JLNq3MV8SGec2rW8n48ALf5kmpXmF94vpGKjjcaekwCJQhDikRMJi4f7L",
  "key20": "5j3bH4pUpvQPjGxvXEacCm7SwMCo8AYGtAL33mBcQL9gBrV9HnsvFWSvAwm9GC5nRvLDxSat5sRvwzLRTgcGE2au",
  "key21": "4R16SNTszyB5tMUnsijnNPwu4RoE1AwYjSaSjQs94MGzePeVe9pPeGDtobkskUogFB23cP2Rr5fyNt8M4uVtN81H",
  "key22": "5TX4Wyq5CfE7mjfm7nMJMVM7axUejbhwn96ptznNoAiLq2UnBXYWXS5zFPzkEhr4yZzJjHSpcj9sbZtgxnjWZBL1",
  "key23": "2vEsvo9mwSF8RmxbWjAFxnM4AUX9ztE3UxAfFQoLac3YN91coWTSRABQ6zT3PEdWucbHMTe3Su1qbUV1jS6jM24h",
  "key24": "4phTJUdkqqkZDQjhSGRyGji5sMof6zbgkSBsvs9STVmpYECG9cH7Pi6PVQBoJtKa4izdwohCsmvZBYiHXNqoYLow",
  "key25": "5YDQh4mXcNZhTQfqFwqpNj3f3boj34Y9dY3pGmuSj5Aqp3z8FTZcYi71LbnkomYEiDAq4ykMjPAHMqTMSXKDuPF1",
  "key26": "4nEgjSgqafrXoAgR9SJ1avoYeGeWvre56HytRkpqRL27ro7cL448ymzzUnBQwTGzcRoFCd5HYMuJtEdEBw9tWzCo",
  "key27": "5pDVjmwNSzWt1vXsJdBcqq5Ad351789vH6TEpd9BAzuVtoVHRgLJ3od679r47dVjWKvzLxBfnVscdRtjg1pQ6g7Y",
  "key28": "3qkQ3ffPwCSpCMPPgD7bX8wMt88ixAihK4BgSm2nqCNmjAB3AQoa8TV2WAGj7yi59Z9uX6h8QEPuWieNix1zCkMq",
  "key29": "krkcD1QKZsnquxZkbv1xakf4hHUm7gGyiRnNgiL5uTSkBPKfot1CZsNsTmHtBrFXnhZoDKY2wd1asJZEKJWFUki",
  "key30": "3jgt2G19NJq69grsiZvVhrYNCeqCwv3j3yW6endJmX4eTxGrtb1S9ArLaB2X4Lmx4qHJiHoSLNEJ3gkdW3eZv5ws",
  "key31": "4GqUV2dEaPSrkUdPgW5e9RMh6vZ9iHemYexyDz3DkYAtnffMqaboTHu1SsNMkaKWpfZFxLoYbUpQU1d5FQ2cqBQt"
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
