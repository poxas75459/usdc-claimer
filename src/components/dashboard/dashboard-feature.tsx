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
    "3YSMTDhEaSWxxM2VqKMey4jzb3tNCaE1vt5aG4RyymC8qVGZ9qaJbgfYirHdz8iaiafrWy7k5ko6b9iLjxgQBcT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mqKyGYjttMxCKWAN37SPBRHSSfheoydf8uysH2k36PuJogQLDnDEd6BL8xsK9Lxu8Ge4t6SXaHNnWMsNYeeRm71",
  "key1": "2x6TxTkw3PtofyvBF6waNNfJwYfvXoCwje2VVFw9wwXviPrN2q1vXP5FEUNQFEbBDQdcnxVieoxBhDb9Zpu5apZS",
  "key2": "54kVjg4n3t8cKGpCmq8et89rDv3o2na1MnGpWGePGCKpGjsU9w4bFrBgqp2WGTKKLYveuLgniytMG24uHWs7WzGn",
  "key3": "3Mus4EnzaNQFi9coW95Am1jpad4zYEFfJHWnx8gNHvT9fgmCKRa342oQoCR3Z3PHekH5TbBXQfYr7tNChirKXRvR",
  "key4": "5JGib7D1SinXkXGdMwoVjoSSZ77yfy5PLWS7nWHBzJRudF5jHUDzTZZ7MoCksPewV3Ec3K9eesfD8486cYippEin",
  "key5": "2Q6n4aebTwGtiAS5hJ5c83Be4RE9LstdwGRCrYTZC9Yrhx3RMmpGAcTNg8TnCR4UwrrWW2hLiEjvhAS6L8yKUrkt",
  "key6": "2qrHKzxtLurf65wuQ4wroJJnYTRSN5eWQ6EMeSNhcd5qtUHjJ1JdnFVUe4d77bBixm9fbo3JX9iaghG1cTW98W5K",
  "key7": "3teVGXeAmadx3rUSzgN99XF9GbnPvERaNPM8MpW4Qf5UkKAvoL1YPzA7vGtqNLs5p8VUy4uGiTPb34ndVwyADwL9",
  "key8": "3qHUFyAPWvUv4wSXaG5xPjAvvF4gosY4f9iGMMvy5Z2CCz46ckBmfGQVXdcXVQMf45s2cm5HdZLp55AuBcSnMkjH",
  "key9": "2KMXjSL1dMM2GjrcfsnLKwfHmZTU35cmjPhirNTgw11gb228Dv4k9iJ1XTCNHvRBkpuKDosA6Bm74kA6NwKr4tJm",
  "key10": "5maVi1ZWk5yhgfZbsPkMGGcS7xhzXjWjT27Mr5E267TbNe678UYzgnNXfvXJVYmVQrXYF8T3gfZfjejWRhfnqgHj",
  "key11": "4rbxPGSYtuPdCrxkcZU6Ldq2g3QzPdhVWyuG4RGcHTf2zPyc7b7x2eYo4gZKRYrB6hbQC44DMaC6sUP1TkwXcJvv",
  "key12": "2CwDjuMyKCN2jZrm8PZh6edy3PRroKztyc5RJ1DKXubZEnRdbQsd56UUBoDvQDyutBiDNo4zSEUJGSm7gtYSwm1H",
  "key13": "4Ze9mdbjDK4Y68xzcFPXoTANyjZjd8jnkJ6PJEzmnvtoqd8UEn5gug2mEoPx1csDB77BWMfRyYBGRoN7TnsVR1gm",
  "key14": "2nfw8QjmwgcxGorJPmPEYBxJEAiECNZDeFrD88gK3E78zYwdPBPYnsaQpSofUeG54SugJQA72oiKSLJh1zTH3i1e",
  "key15": "3C6HUehRMpLnuMN2Rg1xwWZ3sAFKk5yMWUHyPeLrVYbJ3uenDmsppx5i9QomAKK2fHXSPwC8NMHV3m7L3e2Er96R",
  "key16": "3ADVQJEDEPFTfos93zL8uzEbinQGmSWkWiLvkDNwMEfM8VMDXJ7JdmJxHDQgBx6EM2UJ4Xevy3YjqSU3RmrySBWJ",
  "key17": "5qAv65Ej5w1SwGwMqzWmuNxUX1SdMhttJLHgienBsGoBQhTRLBkLfxjbzBrdBd6rxe6MdQnFsEYEkpYjVg4A7AvZ",
  "key18": "2Z4JTaAX65EQzUcfB95aSRAn4ypjex9Pfcy544KMVaEBYzwZ9t98di3gezQq5ma1vii7WDJVRk31vCX1ExqwY6BN",
  "key19": "4mRFdzscXRePCCA6DaDKRzKaYEN43Dg5nxV6vxx2RX77P8ZS727YfHwBSJ9tbX7e9xUdzG8jPoDCPWpCDxVJkNFN",
  "key20": "bK8oYsPQjGRnEo24jvgR5LYaf6gvb1juZoJGrBLUQnDgkYrcQbeAuxPm4GEniUSJKyc8mfY2VYA7s4fdqLacTz9",
  "key21": "2BqYGWqQp7CpGHBDrQSai7hqxauSCKvz6PAtpf1hDU63tKpcvMP3tvjw3cP3odN9gr7u1DWtoCEBhKTzsEdD9p5G",
  "key22": "2PGzVAfxXfwK9mL6bzKJEA9nMZQDtWXfWXJQHj5EjmgBReTtAce7Nx8qZgPKtAHnMdDcWzfWX4sWEkA8nW4qwEeC",
  "key23": "5HcKCwDjq2UjynjmWUr8Wy9g4quugpdkgbx7hm4iTNLdJ948omFNdhFkMzG8jFGAx4o7PfPY3mWZM4YVv1DYyo4U",
  "key24": "3rE8RhHsx95HQiVMuZYt6nKhQWSBacM6QdKoDtmN74Q4ejpwVJJyYvgxvwxDnEScXZyoaXD2BtboKfjWZmPooiXs",
  "key25": "4bfV8UCKy4cQL3huoyt5tUMPo835twh4MypFgkNa1bwqgmUQgAVMhieYLuh2PYzsgazDjqAacmoxy1JX18giXf41",
  "key26": "5Vw9DxWzEw4aaiWie38ntTAaZYrfJ7ufpfLi3vmtnu3XCjkFt3yDSbpP8ddXvk7rgwaGrWgGAmeig4kjVSHSWZeR",
  "key27": "JJLtJVoGa8ZNKuBDZa5m1nPk14FYJU14oeAUWVkpN4d9E3nDe9YumCkFxbod37NKj5eMGcVrD4CUiu5Cd26pmfa",
  "key28": "5inKAes4EBBxGxvhYUJpWgDZ8UD6BvhroiqG5GQZfza5gYX4ihAB3yaAhk3Mp7N6g2wiznoHiV71dNVFUhNZ5uC6",
  "key29": "3HXuUZAyB3fVBhvcEMYWidFb1non6im5N7kBi2nsjbvhZd6n58Wk6YebhxNBraKCaith69uo17dyiSAzVVV8NfHs",
  "key30": "2yUXRGD2xkxY5Hy66qUSRjUcT2psBFuziq2dJPkUShzXQjXNRaF8sNWS5AeH8ozLWxmf1NUCfazVKWyfgWLVn7s5",
  "key31": "3pk3UtU5C1WyBQsifuCznS9no98PCJr1uFFV5cebWsv2ks98Ypct8nvvb7q1VGQFYfqz17wmEKub3fTsuoBUhWFj",
  "key32": "3T2BgLxVrPvoPatfqYDhEL954YWPJWySiTrYgvVm5Z2mfCfT8JNXf3VsERukKehTDgBVfTiAzgcsfc6xZeSrriZC",
  "key33": "4na4Yq46vBGZAXbbWTLZzGanu4J2Ggqi8sjGC7ZeRZB8shqjyZcq4tq5J5EwNqvuZn1eAdUhfdhrv1WB8BvdGLk",
  "key34": "29QVYLTJL52h3qdgbAVMa9zN1QtPg1vXASxXsR1ATXBFBs4fPwFxY9a5WfsPchdLrwdvDuoPV8nKLUrBPXMBG1z8",
  "key35": "2YsQ3zM9KfXLRJzdzyoi9HpATK6xGyQ32HUbvyQvPgJNgzaYHxudHrpB5xNiSyf12UbRLg3PcGt5bwUimsnsJL4X",
  "key36": "4BPoojNQh2ffWFeN89dx1mRFvbGfKqYD5jEeNy9iN3JGeEJ79SthP86kaTdB8zKzjJyo32HrAzPr5rWDiZgg8boh",
  "key37": "4LYTrq27GZJYeEMF4gxr9AiPRswradEAtYoZjWvMDMh2kTwmLcUcY75kfYsn498wgkJF2yvqGvSkBYVTRtiVH334",
  "key38": "vcQhB9ExLcNWn75VWC2LxvycnTKKCzzDwoqjp51QJBo7ZXQoZpiaxxsrYvGNzD1ph52x2GfxrvRp9SiBSV4F2fR",
  "key39": "55Wfm4wwRogfc77uv7dGQRaQgmtHv5qtEC9CYzunucxaN8XMeP3EQotaQTKXYwnbhDTT8cZMf7y1Kk8uXnpYXq7U",
  "key40": "5cHCZu96fWvFWApSkp6BwZFZQ4JTs5NrQBnJtRSdhNH7tNsYA4CNzKpziGdJcG6d7Ex6egZ2VaiL8XBGWHSrtLsL",
  "key41": "231N7nqKfvcTWvYg2gEGS62nGufUsmkab5gCnDdoXoDX466yyoCnF5gCWhfBMWEJJ5gGXrLSBbH7FqUqS1vHi8J9",
  "key42": "5DuEXtoGxgYaqHHQLuKfbYmGjjFrJW92c3nVSGEXaBfQSrdW2bnfpsiaXw6QvNfhS1k3i1CDYsa2x2GFVSS8UYSq",
  "key43": "5zTi8mXBGp23mk4aMvdGajcofVtokaJMdi2Xye6jhWAucmpP7pWcqVDUckYcfrqH4vpXFZ4AuB1A1Lrzxau1fCeH",
  "key44": "3utJMdCAdRr5zEZN4uh3zznnHbe7Simwi5bTuxddXXNvzu4Uw9hcBYkTtJXqNE16WziDwsCaJYEq5Md6vwb7rJXi",
  "key45": "6oh4rY6GJ3wKiqti3P8hSQyuKAifhRVnpS8kaT8Yg6pTTn72bSjyrqmsuY8YwyBMEdLFduTC4Trc5dcfEvCKT7S",
  "key46": "4B1nkMwjcBihUYjD8QQArmBawDKGAspViSBj7bANTXyXQKhQV1FceJujNMZaUg7NmZvs6JKqcsVGYefhzHsAPoYD",
  "key47": "5RM293we4WkBENh86RLDUkKoUBGL6BvJ3nLjtQyo8Y5M8XHMY9nrsiNgwKjuepmQv3zQhk1SsRyuomX4ucZneU7a",
  "key48": "5n7FB4EP7MBwNtGsNbsBFc5BJmtpTZWHFDxjhSswE725u54geLDvccBVg7oMHrXSoszA8JnxMyrnH7fcgu8cmUi3",
  "key49": "5xtuvsQwBm9DopUP4cGhGFeULJf5iBzmsN7ya6PAMshtBf2rvF3giuHduEMRbU7UThJGLXc9EVXwvf5VGCkU7sdp"
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
