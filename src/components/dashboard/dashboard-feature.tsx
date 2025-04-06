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
    "28mSwXb7vpNaEusAimjkSTdEPyXmA3N2pX6y5RZLsqRVVU67Asye753Giueawt9ggPAw9CpokruyQhUPjvnh3Hmx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hpFWyRRXkitiGKrcw27EkLMnyKPKApcR2zkM1KXUgLpF4bjrYWQ87LNrYFSgE25rouu9xexCfnA2Fz5juRrMWP5",
  "key1": "3fYv8Xkyq8S5PdpNC7KYJSqWJKZEjUg1Qr5BiUBdEpeWCRsSpxQ3jUGebQenpWmtZe4FKW3JA4tV7hUHb1F4xV2k",
  "key2": "5e8sjzEuLqE4k6YNP7mdQc9Ze1yQcALfHiKWLyCwrD55MnZ8uLWxfApmUCjUDJ4xHjecquvNRhc47oBa2DaqS3qn",
  "key3": "36xRABGQKNNXFh228z7StykK6ipb1SWuT3mQEXcErtLe3Wv3uweKHZEUaz5u6LyYJtE2WXwufQn4XoWvrjzj6Ueq",
  "key4": "61cFabKUWN5peJsnGfxJHJVRYzYS4Xjghga6YNq7oRuv8nV8A92Q6bCpv2MH6tnvqAWQ5CVitfp7UooazLqL19yj",
  "key5": "R3TF7Wdo7T6mJfYtAnnyZuBgSJZTWtN7yRq8HmWVeMZcttGGZrQ1KpapiiDf8pXHUGGrXgRrnx55TGH9oRoEMhq",
  "key6": "4YUcntLEv7ezGDUK1aDMvJbWD6NdiuRceXWDm7PNVnzrkp9P1jc97seLFocmiRJ2qySYc2ucFtX9Zbkq96yis8bM",
  "key7": "2udBVFeDE3EeXYzmJe6bDJLeR4znUJRhFo4bSXectx9mhdgTLChjeX9puvUxP5MXBzD9uAjwJF8xWYapMCFqPgLo",
  "key8": "7ciBpifPFUPLdjufP5cTqbKEogKvP4Swm2UziuLRSxePqW6yKyu7dZuv5Gx9c8o4RwNf5tfmfGH1zZvXoNnz4z9",
  "key9": "5DP9N61kp77h4eEyf9AUzVnF87Xuk8GZYHCm2eLE4dyCyMJJ4NjGzr9AKTmmJmU5R1NjvAS5ATumZqHHAshc2iYB",
  "key10": "2GBHx5bqJdQ7WHyDAxPSRNpK7s2c2fKGSoqnPhxbZiwAHYq21c7pz6WdviwRL4ZK1oqMh95L1snVDbzmkCocLanm",
  "key11": "LVczUuxkqYEYe79HTtEYdkw8rywiEHci7yET7G76RgrPpZhpVYKrKXa6KgqXw8dyVLpGtA2nD5wfqLE9W2N5FMs",
  "key12": "4QSNWjgF9sS7HcgHQwdfUu4wZZFooqrnt84Lu3ngo7TjLJ6zjyAVHurJwE6Jeswi2VfK9J1mvGRWXz9S1ErwCVGZ",
  "key13": "33UZd6fuHLrPAtY6znF9P2sqdc3QuVcGQoJNK3T1S8Ha4Ptyv6GFzVfp8MnZ1kpZWgsv1Q1KKAEw8CoKktWrG5Lb",
  "key14": "4pSyrJ5SyE51ZMgrP3FxPb3atauyG9HFo8P8tyrfaLAAfCYdx2r91CZVusrkgAB2RTwcg2nZ51ipu7z6vCCpKpP2",
  "key15": "2sdiFxH7qouUgMn9R4ykcrrybX5C9jDEFjMeNuh51MvToKJa6JRURZg33Xi6gNjYFGXyRcxCsgie46MPZAmoJVvx",
  "key16": "3ya1jCKpvhyUBnufJDiH4JjgVuMJVAMVb2md3dixn22Gsb1g53pBxn8DLUQWR1gukR3cqkU4rjRZUiyEzBp9fxEY",
  "key17": "3jAbcZNf1A2NjFj6wzVcM7iLgAxSeuRxwitvpbByg3Pk5nkadBTHGMMvDqPkoLp6ocBzxnZHbkWbsV1D6NxFEUyk",
  "key18": "2jJW8485PJVnnrrEwAHCSZSEs1jYEBjgm8tJbGZdxkzJsQbbpBieHQd1WMCrgs6nyHxQjU2VWUBZ7qvhRwMY3o3Q",
  "key19": "R1UiYgJSE7CipvxSqGwm9aSd3g5JgH9uoeanCwciBdJjm7p8mv1ZD1MrXXKbCb8GBEiDbRAKhCvp2tcsdvKXT3j",
  "key20": "fyhaq7sZsVS8EMCs4Xy82KZVdqB4zMqNEKfCirTFB8M71CZ5u4tb7xTUxsMwT2VVpcsrfHhUJ7VEa2jGbNGgjdm",
  "key21": "5R3iURqishiw8y8VS4tcCy6wiRH1SkJRRR7c1hn4QYTEJzyKmwgTMmLD56PWFLJY7jYuWDcBWzxrep8benY2QUE9",
  "key22": "4yanNUbX5sWchYms71c6ntcMooMnnHitnvos58QiXxNrVMWGDczFApuyifJb2RBPfuphxeJEymtAXWvn2NDLCiBE",
  "key23": "4Kwr1TKYziDCmzqVa8DapFFfx8sfMZYrUA5ch5qUbACkWXQGAT14hpPQiribunoNcGw8Su5gRQpY9c2usoZnhsi4",
  "key24": "2NSgivhPCMaLFcq1N9wx8SThJb5awd21vZyx1hULFVzUfqravV5uPTGuo8VWmmQnawEHkVA5hXA6Ppd7oC7eR5p3",
  "key25": "26cHkA6ze6JSqCHofXvPeYMrysR6bTrNaPXCKwJoBaLTGxFPVBTAXjsQnCkzsPVTrUZeWbxWYBRnvk4nwfP2bWTv",
  "key26": "5NWaJV8dgM4Xt5JHisgd2otfe22xwVFsMJFuv1DopPX8JuBRDPcXvwbEL4HhMUk7fUPa5nrfbGL43vKS6wfuwcxn",
  "key27": "4zTjP6HamxHtfbRWRhSi9tDgvGrFiEpYG6QSbTxWyCguNsLpkUQxM39cek35oHFVfAxLWZzkLDHReo5WPpbAykRg",
  "key28": "3gKg3D58pVp5i8VxLbaKjybPTnuzBJs7FHCdUCGLMia7sUWWg6pc3ZFTQTcKm8n1CVxS4fCvWgt4jocTvAdNAEDF",
  "key29": "qpmD6tfrncCHzCxhAMBHaP9cXsFALo9cHgmfYkU1D7HpHfZE3BTn2irq2d24H5cvP5LdTJvM7JGCXG1BBqodFpa",
  "key30": "45Zr5UqvSKRQ3ZD86nkXJmAedQ4TaRtxZotQgjcruvJ3f7orWw1EiiV3apcoqiM2BCoweeZXMF4zu4ZvQjEqwrP2",
  "key31": "5BA9bS1Dsa5uNWVQAdQxpaq2mUpPXBAoDT2tf83qdfi9iUuDGp62LqBTsjQ3yeyHbheuiUqfhkfZJoQB1mUJnivK",
  "key32": "2paFqnMmUHE7zE6oupUimWk5RPtrGJfAHhpxJzhnwQHkZa8QxZTmVaXbCVfSbnGkzL5DSzpRxiksoJRTam5BvKnZ",
  "key33": "2sAKRm4YWCqdCmcbirMtamhbrSbXDszcEwD2jTfSVy6gpe5yQFNWZy6hx8davuwW69bvksWkZAaPJ2KsFNcDTp8Y",
  "key34": "2xBg5ApaVSp36dmuXxMzcasW7K5SmvTgRd4GcyUWEXXgc75nTWq6qd3zcmrxmdwzzWQejZ2J1xZcGUWkTgqqWtLg",
  "key35": "4hXaHjtUP4Nk6NmEzDx7pNMu2ogjUszm9dKVWpfZtXsA4JoC65QZiPAkhaDbyUziGXWZbWF4W9LigVSVaKLtEVkx",
  "key36": "2EPFRvN5sYa7bjQHHD4sUxP9tUH5eXEukXSdfVYxJPpeetjn4jW1G6QAT1xsxHut3nj6NpyqomvntzcwkssLrurm",
  "key37": "2tKJQCHQ2J9xvWUhHxv4uiMqxVApJKuNuLmHb6BZ7vUf1YSbSxf3KisDqJuN3QipKGPqb3USnLrogAYJTYi51VGW",
  "key38": "35PT2DqrGMf399JLPtRijwweegPyDu3YsA71dMbg8oPQSBmVSh3GzAbEWyYpudc8RFJScT5xvnFJN9MbmF47cgiv",
  "key39": "5jT2xgb8NvMDiuaS8tAEwNmkNHzZGTd5oHbXiLMRPRVyucLY1WLsL2EaqT98brxZmgdP9XAe2SUUUps7HDXEzdWt",
  "key40": "2verj4Y82yJ9fDM48SKX1R8AhkMekpw76CPYpRtCUfchL4VHet8zJC3mzQN6ytMfFgYSDP4vkkrPB35m3H1x2bKL",
  "key41": "2pD5XQajPxCH6fWm1ZsNmqSV8xPGMFWw6vTiFTHS8qK12cqo5zbci4DAox7MgNsdh8Xjjnikagc8L8Abp2dkXa7a",
  "key42": "3PqLUMj5NyCworVraNGux4hwBWuQwMyVYLFkNpvEJUifs5kHFbXcQJ69748JAs1Lg1DgKqM6ts4VVMAen3GG7zLN",
  "key43": "oRSNs8NWNgFxtn1v7aPpgPhuMim53WqZ5FxhMymVqrcs5tsVvRwMkFREwGkuegL9qb7b9oN6vJsFM6FcEgrm99D",
  "key44": "5jm2dYi5C1gBBSynJW9oB6vTQ5oPQKci9Xv6aEDdz7j2bU3ujYt2pssGbbjcW76nxi1CEpAQWip23MVYU3aLXx5x",
  "key45": "4DtzQeVc1FmkQSHQV2P1pesaWjLzDiASsSScjHKjhsci7Tr5NEeMG2UKM5zvqabdc3D3TjovJ8Ga2dPBaAwmje2w"
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
