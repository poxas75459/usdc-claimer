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
    "2nToPRas3tM3DvwFBJ8T85gZRT2tiCTrpuQTm5PLmKpkPWaQHPDVZDyvHCqM92GqTrp4dd6h1wsVHA8xGtywyYwV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yMfYr7yiPUNMXuMhg181Q3h4d89Tu3H7r1fiMLVLPxCZZGbHmxpq1oHZ3Mfx19MvrSoM4sQ53WGYyftJsMUVPne",
  "key1": "5TRa7rNnHm2e6GF89jyuibuvPPppf1N9HMQSwkck6aVSLiKqyyg8nwetJEa8uaxxtMbjvk9tqwTr4PJB4aNBV23B",
  "key2": "2Gr6QtJeM6mAFaBtPEU19gyNAjYiXSHfgXGgnaNqFCXfLXDYv1NDJFdDQbVFMpJZe7BncgVMsBBnf4hmfwGMkAKB",
  "key3": "3FJjiapo85LtPs9T2tGcgGz6vzXUadEs3QGffr45J3E6AFQASv6LN7Y8Fwb8bpyxeVjFmSgvEsaWQD5s3bSeSCM7",
  "key4": "3kjwK3UbnyazWfffoqBceLuxjwaMkFDMC7LtxDzKnHQw7t2dgVZN6NT7m3i6Y74WKzui52JYghZ7RmLZxrrxQ8bv",
  "key5": "3Qts8Nzdo55U95ZLurMrcF5EdF7TU8ZsieXJKvZr8Dm3t18A4YmidGmCAwRy5baT2qcASeZKoafs3gTebQVEMT9Y",
  "key6": "3n3y6azUrc9DLeu4WDHg6vQhMNq1f5mc4EpJYwzfPqFhVg3yDFYsSZkRD2A93b8st8U5NRoNtByu26YLN8X4BqjE",
  "key7": "2KhEfksaHRMG6vrgiMVT1qC2qSw7Wd2Zmdq9wUz1wzxrm6UjW48STkxbUiN2Fjdc4tjqiAmhJ5sopC2unxHrmGFo",
  "key8": "5UyPmiSVbFktRvrrr2NFXQ6iTkdB9BBiUis81tirUAu4NWSdUdCcCgFT8LisL5oT8veK8MemyqsaXBWmLkf7WivC",
  "key9": "37i4dBjsDwRtBis8WFxK7qsLCqtweC9s5juwjaDU3FWWPCUKZpVAkrWWaAC9QTxq4o3HF2ZYobHpYEp1q46fgdYt",
  "key10": "5FmpyKvFMgWpDm1UKFv2R62bxKdhEUH65V9Lif4CmEQxHqTqP5p9fuakNFFCC5inpZziuthYfPzEWs4B5yJcbjs",
  "key11": "5RMtiQq3vQ4h4kn18U6e4tgjUACFVaWvhaqYMrt5Bi2dCPhojh7XGeh6AQWcDPJ1P4vMHEJhJoW7J357S8Xt7inm",
  "key12": "4S1X7sX8i9DLyJUk59ozty2quzA7cUWKFSFrvv735ELbdLfiZDFHpPnTPCjmVoQLHJWHWkVY5kKQJM3Uv5234YeR",
  "key13": "5ianRzy7BfzDmdcTmV4YYUDfWrA1kG99wY1aDJNFG6fBsKNPya12o2yJgCaGFWxt9NhZ2bSfLdi2JcWzHuMxKhZn",
  "key14": "cg6259a4nidSY47N2UWmvb1oBG7VeV3aJUueDCiFFumobji9BmG7iggpTsBv9nrFAz3jRQH3FoqTrB6edSncJhG",
  "key15": "4d2uy5bWmAi8wnvBw5uJXAdmqMfbNqmM8THkdCbDijnJohnTNJxzDvWaj62aExVX28o6ijq82Sey5JuDCbGyXJtw",
  "key16": "4s1dhUSApHLexKkL82izNQpbwCcpw3s1xj67z4obKeB3oPQXMyijrJzVHwbm8YTbgwWWjFrjaXE7QnZB1UXx6KGQ",
  "key17": "4hUcUHFU5wJ4mCC5TSpzfvjffVotv2TbDJHsAz9HoWLZB54xfq7Qu26PxkBqdiGtu6dhJgd6RW45pwskfaZA2zZX",
  "key18": "4UCE8sHF6jgfMmwEbDXwssudL1ozugQKBPsLA87mDEdgJnP8kGQCUKB3LC7KmzgVsnbxE7cztX2dinNbjuAvmDdD",
  "key19": "4wPYDwmCifLT71mg5hDDjMe2VLdTwXzCN5qeRf5XusLX1bUrHS7kTcAMefbs99ob6wija3mjn8dbGWYzXknj1dt5",
  "key20": "EMMb9VRDvdLBzZNEsXNQBYqDfmBW3jLDMYkDdJLvv5dMYVxZsptYzY8nN9oyQiqHVkgPYT4g6dfRFHupHbEZwmW",
  "key21": "pwV7e1c483wG6SvGC8vAgyfbiwSZj8reLaNwDs4ERuLBMaVf8iS5LPL5d5gH8pSRhery6skjRGeD3LMeQKz2XFZ",
  "key22": "VEinqv5EtfdxJ5CCsYgfrkAnAoWjPxtxFjLHQGGe8MBuFjy766LL1FDZrWiPwtUohTRzi2oTPyjQwGfyYAKj5bU",
  "key23": "LFYk9m46HS6yAC1gRbrdnHdj25HtEybdnP1gKWi7FoCwsGGDJbFayC6ALgKGfbGCwqGpnRVqmBstfYpxJDvbHa7",
  "key24": "YgfV6FJLffi9jExfN1S7fcjCnUmu5QFTDJ4QriiP1d53tvNbxqoA6hMAo2yuMwCjtFsgorRAAdiCU6hVak5k7iq",
  "key25": "4eD5S2W9HXM6RiF37cAQ5rXxiN6dGs21uiri3aK5Y6SFoWJn2LFPoXbNuKpjcJd1yKKFCJpFjiYUUBnrcGbRFJ6T",
  "key26": "37K63MKJtdL3qZhCSRSxEUvf2ENs4j4FzcqWArqXJu9CBYnhV9qbGjsj3TNGhihmJH4bzG1gEdPfyWGJgxpGFhuz",
  "key27": "SY3vVCsSvkG7r7EvwfmDxyfm1G6G7xSSVAQksBhLDZhcxLAqzLysHmSNDYDbW7aaoowJo1hJnKUs3LuYdb6W18h",
  "key28": "4xXMTvPxPk1JgDNjVZNzERTXQUFSQpoqKZ4EM4G7BzdSNgwHaCYbbTcVRNmmndhbwpkZSCvc1rfcj1ZSfSKqR8qW",
  "key29": "2nqs93HKQHJZ7UGv7HFJmAxd1GNQbxQ2wds6EEX9r3UUuvjfEVhDcx14BKKpDJu3uVdizUY6zMt7vPyTYsaocVAZ",
  "key30": "3s1Um9mCobWjL1qi6HZ9DUhBMgRRhXPtWUQAG1MyvNioij7EXt98zqEWpNUFvRNesHGhQMdacpMgBUgYbKe1FinU",
  "key31": "3kwfFgVjN686nEAp2Q436TaRPWJdMQYygXDn5xBXefhYmcZwodh7BjkpoUG74GPkaHLoWPwY5HAwdEbFHf7t26vC",
  "key32": "5gDSWuiFQgQ2rUbBPDcTsYABddFT5jwZCKmFQqmat8sRFdoLWXBTq2h5A2xXVXVaCHoWENjJYW7Ehvh4QmzECBxU",
  "key33": "4TkKfqB25b5f7HWn5JEfEMfcZmAzLyS8r1NCCsJ6FA2qBKPzNWGgLYtfwTCd1MoKTK2UgVkrnYcUFWUny7EVoUDu",
  "key34": "2mjmXNnxjPs7N9crXU4PEgUMc7ZvdrQodStehvoNBtTWjSZLZD7aYUxoRNoD5BMHekQvWw9PyGpXQ9CzDCsonFnL",
  "key35": "3jJiAW4Kstted6K6pmpK6iZgi2MesS3zvuEw8GjWhfD1FUYKVKe253V9b4Lut7HidPunASY3qi1DP2VLkbQveycT",
  "key36": "euE7pWCWUe1UMT57H1KpjYvj5GB9cB7tiimQXvWeM6Dy72VVcnq18ubo3Mz6qtv11g49WZNsziA7qZiPAaQF7PU",
  "key37": "5dLwYbeonL9VpGwBMGcyxHLnj91iWFkBqBidzj5jW5TwV1BphGRxBnkUmcRVhBXRnawbjFaDnQzLeFyqbbRFMcLE",
  "key38": "3LpkAUwY5ebQbRmhPZVd6NsUpJLbR23iYK2dqKkx4GQmJQE4RfouFMUrHNWuUicBRDErAGRtEFDcvcfqubL3PEv1",
  "key39": "HFCMFJqnUY6axbJdDA8H9ogZmoZHCedXwNGycyHB7X6F31B5UHFqGG16pe7Yx86Do1RkdJwzM6UYLW1aeyKUwHw",
  "key40": "2YTBNQZTRDm43WGk8br2DXmjqy5MQQczT63uw8oA3wcXjT5VGY7Jh6AoJhAc9uuMfiQ7GKFtEqkD9UXYgo5kzZqx",
  "key41": "2Kb3qVWSJS9GKemARirGaE6GXqzgosQEMR3pkrefkCXyhwiJ3DCQCpMpLfSFA5uXw1aGJUevHPSNzqU8DvVje85z"
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
