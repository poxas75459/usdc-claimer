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
    "UywoRon6kq7cqcgz29SGfp7WWLVvt5y449Z1isUCebgtoEfvoxWGjbTEVqNkqBACZ7anHTCwRif6KcX52Mrrstc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FrWdcFgmP5FFCQN2AhMgBD6NwUWxe7sG6DCJk7SJUbdUMwxCyCyM3GxEBWHZgduFmv8EyjKZJHhYuJF6xATnpas",
  "key1": "4cubRtqqPcy4md2s7kXHCJb9ZYgzLEe5aZfWLhqbrGywpVrFbdoFwwBjg67xbKRGtAJHxb5pN6wf2Y5hMXbTVMm3",
  "key2": "MpxsBPNzpFEvcHm2kAbCFbJJQPXbHNcDmBVEmMyzsYEiu2Q57cf5uK3FQDcjUAgFHSukJRTt8rQz2Z4NtnfMzGx",
  "key3": "54zXSWHLuGX9ep1LPRNtz1RayRYt8ihssne91MkLzeiPtFWFVGUQW1KEd99ktJE2pjGt2VnPKjqHPD62ZyXw4F3k",
  "key4": "52YJDfvYmN9aUjJfGxs7EmZunKgrnxWDcusFvkx8w5TftcHYYREkHozHa713MhRHPtFeVKb3ZVV1cWw2q3eD9qjC",
  "key5": "25dfmkVMdPNsUehuHMqk4aZT5rWC7MWV9GQFFcdMfaBHmqgLGmwbty7qbzwnn97M7gGx7Je9SR9KPajmhHY3pgts",
  "key6": "5M9Svzrv543mtycC6CeWA2ZZo8WNJ7bhKUD9HtzS3yyJp1BkKACqCnaDgkyBTEx8HWmWUWLDYyrXVyqTFt9o7JTT",
  "key7": "U5WcBu8e748zxPTPTU6WAK8cxgMjcdtYdTiHa6E295GAJm84snh6QELGibSUmn7PY1c5dre4kE3KXeztqx5ZHf7",
  "key8": "3nQMHdoPDSUhq9yq7wNFrUetgqjDjvU4ZzXrkjSWxrCEv2WXG1qinE6rtCZQk9Yf5xLFchxxsM2ZakNKPJUqpuqs",
  "key9": "5idbuwv5DMqGa3NSKEBcLHoa79ESNk2PqAeMrWUTQyPR4ReXKKoMTZ7eSrLszBDQVfn5BqDc7MFzoTabBZBgMJyy",
  "key10": "rGBfkcnj3rxreALQ7hyjdsQwTgvBqwnYSFTCUWDgpKoE62NfggVkNXtZ25qiYgnkxU3KHZ6H9Vkx8QDouUQDEcm",
  "key11": "36T7YM9PxYKacsfbrz237hCRkj5ZxZ7dFqnRaDs1P8gD7qtQ74FaXUZtew9ts9HcbuoDamHTXkotSw4h8d8GX9Mo",
  "key12": "4bbvo4LNuMK4N4e3BLsSRSo4Sj3CyEV7jr9PRPyD6xYtCYqCAirmEeAcQBYsqbkxcZR8aFw2LfiRanqenDCY6gQo",
  "key13": "2ZxUp1wLypWXcAthUcWku6bYCY94ySSx3W2T1EVDzxm3CL9DE8csZULeFrpcavkzMRj81cGQZvGkNctdJfCcTBTK",
  "key14": "CwkzfDx8ZUQ7QHJMSvZT4cwKEjY2Wis9uX3TnGvfC5eMDG1EHneee2PtZfX4EpexFmMrSporBLEgyYh7HUaCYbi",
  "key15": "3z17Qi9igH2zaAeExb3c3LHFr5oQEB2zMVvXBzDJGQEk5tmyWWeTjXB43fMSJAPpck1g3y3cAwLqnrYAYSZJjxzs",
  "key16": "2hniZyNMTirjvyqvqdWv8AQJUY4RJQJRBbQ1NFJ3quK4fABGX2oQV6N69M8zxgJn57DXryKBwxZQn62GAT4Qw2Xe",
  "key17": "5bTzaSDhkN82xs1LcfyTykY9koBSgTnHgV6d66sbWKooLqgS2eXb8LwobcHaCoefDBKgEkrUMNvdNkkXxa3FgKxR",
  "key18": "5oUrhL1AqRkCM6SbJGgEJP92pqFEXBbiyxsBZJCCFHq2Ce3PYXTcZc9c23GWfaV96ZnnPuL95Wz9T7BL1rjyG3Ld",
  "key19": "2XFQXsh2YRZ7nXgBEHvwrX5jJKLqStDcHwxDvwCa8FuQDSQxKkhs1LAzw4mp4sz3P6wJsoHcq8YzefTRosFt2dXK",
  "key20": "hxkfwDXZ87ofAJjQBVVoBcafwKJT9weVomNe3DRT3orvNf8x8RhLnqsvNsV9BThGo6t42xr2vVfbfJTYgMyG7jm",
  "key21": "4Wfr67pC9uhaxXxUas39MoXDdBArDkXvqGdoVkshEkduXfhqLbWZzqee1ncHJBDyvCofkE5kSvftDKJzWT3SQnES",
  "key22": "4pMJ3agUaHWraFGFrpVo2FMcRat2FUqa32qQaGHqUWzhfNbCEQS9K7YrgUscR1Y1tEpTftoxbXRiZ3ZV96K13oVW",
  "key23": "5zGd8veZRbgKr61vmjymQVX3yJ9fdJZN5nR5CemvuXn5xyLxytLRpLzP3zzRWxfcm4mTAJ7GPAzqfQ8a3pFteVcb",
  "key24": "5uzQCh72D6Ct8tHDUYKfAXAYTJuTU14QJdj2wzC4s4fK7ie6RmfU2TyhBmTQZsqKkssaKdBFZLmKbY64UEgksL1B",
  "key25": "36BCrJx71THA6WN3QziTbWuQirhkM8oBVqiTH23YfHVKWqrBpB6x5XpVhhufx7wdDUFGC2pFpzdstY2cQZyG2H1K",
  "key26": "2UcLfbcE67aZAQUsKPvdk4c85ny4Tye9Enavsf1DZmBLPCe9s3LNgkUaDZSpCnGNBLQpsHwZYhMdHf6LJeTkUYzH",
  "key27": "m54V427RAMARkxqkBVfEhmRhAxAm3fbmeNMwNHJECW9uEf65coopzYrpX8Qj15ubEKwYvG6H86h5BAHWHZGtRCK",
  "key28": "5uK8y9NHD9WLhiLhGm5P2hXtAHZekSJvja5Ng2x2kqpFg2XqQshVKW7RF52vnf5nCEHjmC8G6aautdAjGj1j8svd",
  "key29": "4N9FfK5fkhhmgUsP1bsQA344G9xThNL8tdLFPtJT7Aa5FSVUsgVkFBJrjHPcNa2WJjhHqDxfdRKuKpbPdMTrAv7i",
  "key30": "641bi5WsV35rZYyFJKFqtXKnjZ7QW4baWceicmZgnS6LD5uFMN4fWXrUdR6XrfZ5HS2xqvjkPmDqjq836XJQpQDH",
  "key31": "55LP5MFxA7aHDNqo1i3xm4yvN8E5pMmT1ueM16PqhBw384P6VoGL8pugh1q5DD79C8Dt9a8QozM8vMJMwE5X5zbu",
  "key32": "4z3nB4JvGk2uJUEErPgttrc2k3dajLNmCCM2Nz5odGfymVA1LUaqq6Kqs3o3JrbdBiZ5whKBKMyFHZe8Gq1zvV7N",
  "key33": "4ooo1W5NFXCuNKdpr1Z1X1bHRWba2PYA8S9uu93NWzH5tAJL1WN6FUZmc9vAyvBRQnxZK47pPSy2U4AAiHP5WefS",
  "key34": "ohhtSDcSS12xhLBzGNWZEgPMhuN4U1FgJZEVi4NbrpJXhafAs5ShfJfE3aJD7BiMxg3eRvwWaeDYKSkkQVEkupM",
  "key35": "4nSosmdpPPqQoBz5cgtNLN66bK3sAtxxSdjbAUKGZZbTMZ5dooUKKKTob9pQx1VyJVn5BQnq9mAs3JT2pDi4Yp8b",
  "key36": "4oKFzqWhVExtPP1rMrLMysDCaqEE1Wsc2qopqkDAWqiDHb5C6h6L7yQhaJ5qhtcAYtdgW6rGzHZyqwRWLeR64R8f",
  "key37": "3yySpyDzBgJLLUzeTsPVS5dKuXUgMd95hNEBtoCumLU6Rxet7pc9E7bXUVvpsmmxwfphmT2XQGabxXJH5QYpbdpT",
  "key38": "4ES27tUSK4a99TtRfzxCyp7V2i7ZL9twZx8XAknmUYMfe8nFdwtkcYGYAL2Jmho7YUzc7VzgSaMCvFzZadrGyxPf",
  "key39": "4ZmDtpjQJvHuZYj3dm8hWx69B3j1xqRmwwKfZroEjxfNtxL5JiW2notVHnzAeDC58jvVDmLzuZkSoHUXn6oXfdmr",
  "key40": "4JPx8Ekt42Y31bTyF1jEBJQ7QviJK5YARpDv2wSs4N8YkJnTq4HhyTTHV23voUfLp7SSDmSxAbhuyLer525ToWH8",
  "key41": "VHwgQaX4Cgy2FK7azBTfh7zn5nmhNHzWJdf33euHbqMTG28z9ncFYGcERNVomcJT8vuh9KJD4SJA9UEuTT7c1PD",
  "key42": "5jmXWzxD1fnMhwiPrGSyXh7aE7CHYXKEhAMCXk9qGMF6YxN3TNXjoe9vroKN7LXEYA48aLxHChquqH8oFGaWh121",
  "key43": "eEbhUHdtr2sZcMczvCWqhr7Fty8LuTie82BKbcLKokTXXAgHDuZwR4AJAu1pjaXs11CPywbKzLWGajHU7M1j6vK",
  "key44": "4FGUBntthcME7M4RAcVjQ5cnXPRA51sbq8TPc7VLkJumRedDNbZyfoWmcwjRx5gm5YVHaxHZNR8P3s8gLq91gNGz",
  "key45": "3dgsMhFBrp8V5j67G9NRtxXmopi8QPDFasiZsnja17tP6e32KKBxV7GPPB1Y3StSCpkGk6eZcGE98nmiHamR3kaz",
  "key46": "4Pz1fNTgSzDnmHBDcVBs3CPow8KJ92jHDrx4JWBCCX3g41eypFgM21gkoHxEYY5XQVf2jdbgyGEnEhp6EXpFrtq6",
  "key47": "3VMAXCZ9KR9QHCyk7JkwkpdtZLrQ5CwKB8r5iA9cMP8gX9Wknob4VyVasXrQLWZjR693SRsjrEWqmTMLGeHKifwF",
  "key48": "5TAvgN51t25g5fEEVigw1WcBUfRcmPJh6yMiN6VbJ7eYGjbvPpYdyfx1zwZ8oDr1u7pDundVWYmgj3vfPFPEFNoX"
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
