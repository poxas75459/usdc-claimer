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
    "QFyWji91rKjNVHseGxf7txPZWMst9GNMDYRxCxHQ9odyRXSaTNbVYjDHpDvH3KsB8fpBbDehpGHyK5tSk3vNUeY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dq6B1BRtetcmf82LgEV8GHoihfjsZNq4PaJKtj3HyXRTmK8nEcuGj1EkWY87WmDMs5jbAtAYaVam5jAyJMHT252",
  "key1": "23jSrxBJpCLZ4KoBsiDHA9nXaihkx6Spii8dh4bXag6BmGxivNGzJp4GpdJH3vF5RWdjFZxYwdaHLbZHgKZfaGtn",
  "key2": "3ZeHqFxtc1Qz3W6LfxN3yhsCnTEy3eUkTG5MjRBYo9zfQA459wzDUe6dKVRySmwe12P5Jq1Fd8g1LSyK6vRU5bLg",
  "key3": "57MjnyM3XvmYjCkbbrvXfRyFj9hDsE2fsXRptqaihQJ81zeYeLqGPhZpuKv4fx9pTYXY9RecKjkNhgBiF3qFtBG3",
  "key4": "Z5Uv4VLMRfiv8q1PKPPSCeZRgrvZqrUV7tNk1pdW35ai1Q4qmKf9gMWErY9o1y7Ru7FBBhaXQGWf6v74PtioS5A",
  "key5": "4Dy9EWvJpVRjkR5BMLwviGgaCq5fG4X9XTmHQqfwrq4q9EBTXT3nmXEwT2rWBYb7VFnLy4NKPRgTE2e4gqH6A5pL",
  "key6": "4ZRQKMyavJ2Dtf91642WokY3etJWd3txYK82YaRewCv5RsTew7AE2UgRT5KhTLTVC2TePCYcJznE7qMjB313Ux5f",
  "key7": "2D5H2vvtpTHGkt4rco8NUmkdjJwKAPTYxmPmA4cTZ8izp8hV39XXesAdDYFFMn5kQUS3fFTchhCx1Kfu6U8JWJE5",
  "key8": "23mVyNA8d3kAAFDJre8bDYXxQyrZueZYJ4pFroXZ8AHgQtGvJHhibyeqRUAUXn4EzPiYj4jmPtPaFdc1Pjke3Pj7",
  "key9": "4RQCMRTeyAZkLFCLR9Gw6WmwH11UGp3DPftCWUYmo3mG1QtKVzEDsDRGz9CLRkYDsdy1b9oexNpzmdQV5ZGFnhdW",
  "key10": "5HRQHS4Jh8ggesVx7By9R2L4Th4aABQpydBrivjsZLAgr8LdyzMzXYZ3D8DX1Y65JmwEneARSrm2NXZrNhJfLWEb",
  "key11": "5E2Y7gG155z4h83MREzZKYgcCL3n4GMgDbgRB1gCF1QRajULfaRjyCmjCLhTRyqib6VTSxeV4qaEQAM2pcYnu18o",
  "key12": "sZYT1FxCZFd7zFkwywVKSvpwyBPkxZNEeSHjqpFYv54HaUAwNd9LzAG4haiog1eTzT6UUo2AsYdoBtjpZyq7gSh",
  "key13": "48HecaWvrov8Xby1Vp9qggcW65o65svpjKLXyudBdRa3CpngdHcfdXawqd3fbQcheiQzhmz3omCNxEHs9y9oqh3w",
  "key14": "2SkTW1eD6aosv7wvgQeVz67Zmvy1U54QYtPzht2LzTQHAcQ1PtGsykYzpuHiWJ1eaT14skShhetDmQH8PhnatoT3",
  "key15": "4btZ4yHfyEqNSfnWEcrjwedSAon1PFmUGZRPZXC5zaSmWYV6PJgDia1ABTtpy8445KvbdbADJhwTqoduZoZT3ZCW",
  "key16": "64eWKTXyACe8SSXyVzHw8zB8vdJMLLhxKbWXijnPJng9idfM9sBkufgyPxPKaC11W3tsZeLEZ6pgcYqXJV5rsRJr",
  "key17": "5hmWcrLDJbD3BzFs5tkmwUjhJ5bAWmUrbCvUdKofnjXBYMiY3FHukXNeANfSRBRDpKMBt4vMy9vvCRkXwrjYJwzN",
  "key18": "4bMvrKiYYqaxUt9WyqUbpm84Mx7JLBKwGa3Jten21vQBLbeRKMgczTGPBoutcYowuFmDVDFdFUABoZHUbogET1Fu",
  "key19": "62CJ6p2PY2eutmuNuTVEiGDj5unpEKAC9Dba9n7CQUXytQGx2YPBYzTVvo84hiumo8niuqAfnhXQcdLHJcbJVP3X",
  "key20": "32erh5uh4voZ6Cw3ZpmM8nYGMGo8SpEjtv5o6xmi5g5sYJWGPc2uPh6daXgmhQ6CRGewKT8YLpfSrMmUT2fZAna7",
  "key21": "yYXFtGmN7FJNYmjostHGkbMYen3HXPftjvJwJk4n1n5Afy7gUm3YtWn74cNov4BQkCvefVFpZ9Gb5qrNdr3ujAv",
  "key22": "ZbzANW7DsufmD3e83LisFWJap15YDiZM3wU7S25sfDHWq5M99vFJSZ1etSdh8W3WANLfLRDnfvMwoev1MppjF7z",
  "key23": "3RNTdhzhaeQjMo8b53kSzbTgN8UwnwunaHPNgpzxwUSMCuTH2AajRXyDTmZ3f9hpUAxBiZiqrn8JJfFdDijMDj3i",
  "key24": "2f35FPkY79CmpFct7vf4WpwmhhZz9TcHH9VH95uJc5a7gaCRL8kqMzuv6naxW35Ba1EDUoco6xPJWJQNgqqe4Wah",
  "key25": "gYBx7sSm4s1P2NphdXUbUXg8Ffi7WwqJA2VEZnBJdUBzdZjGNhs6NzEYGv8nHqpVP8y6NpZLhGvdiCVauVm1s8L",
  "key26": "dK6h24NzA9WByvfvMJBG1xJNqWHwhZExWPDX6e13iptDKKkhLmDLWeemb4DbN1EY6KTULKDsZAcbxWnEAwEn78d",
  "key27": "5wMbhnk1NEYhM3PF4CNpn7Wy316bctHLtYy7PBEvd4hx8bYKTpLi7AnxUba9YF8Vqc5H1UCZSg4M8xgTVktLtBgC",
  "key28": "4wFQkpczfdF1zNE76JRLnWg2su2y5eEsVyMYDLw5vBiwD2QyVhsZXEgYQhoTgzuZcM3kHfDH6eM5XJXMQ4GZeL6",
  "key29": "5sw3x5MbyEhC7Hcpf3Pr7o4Ji1iMYzPPPk7Q5yeQ9PvzDhteZCTTRQyr35Ahw789gohYb1poLhrDM6KiuFMkZCJV",
  "key30": "2KFTzVz88K9Q1y68Ed2sLJ5WQHf1B2LKbGFDRT1ZhMNgYCXw77fiX8y3KymwSJxWh6DpRZXFQ1GLx8qcH5US29gB",
  "key31": "3om8eAxJouNvvAQLs7ath7LD1dxJxx3SvkqZv9uxTD7MTnqVoDCHcRq81FNAZrM7ZnuMJikkuTo71i6Qdoe8BF7g",
  "key32": "4HHeG7guMDYAQ4aZsSbAUXmgoHzijZ3g8KFa4xyan5aEhfNmMeYj9oq8PiGELu9kudPN7e6HZhiRBBcY1752Tfad",
  "key33": "5z1qKwcPqUgewrPoGpb2L1GEtpBmc5PYSVdaby48jcYQYHCbKgxVF2n5uEFcu73HCqTDvXBkD82uPJg1WjpFNgzb",
  "key34": "5716qDyPmaHtP4ZpWeu139YCBCny7te941yzB43cPrLctpTyY87TykGZS72thMLLbSbBkQdKZeQiBvJBWufeJPsq",
  "key35": "4E4LWSwVGHS2G346xQJ2LaKrHFSVeKJuuMizxraGTLzoPSgHG2ZjrdFqCQ8bTNkmjWXQBubBxHeyNpJLaqYcJUHb",
  "key36": "5R82Cbt39jEAUyCrhjVmzNZVLZkw32jwiVenpBwGQ91FtDUY4bRH37cuHqU1HsUYJrbWbdMgjhVgxwxmcbYbwymm",
  "key37": "K9rQAuErXCJ8FUAyzR4xzFXEgwXqwxvSJaopJXxt75sfdZyCfiZaWFsaNNX7rHC8EJ6vGqEKg1Jq4xzXve5L1dk",
  "key38": "428sKh8QR23uhtX8ME8LrN97xjWXEZtmPvzzfFnobyaGUb9gPmYaYiTT8qqK7HJRLn3ojprbdk9zYgayudFDjZRD",
  "key39": "4gJbvmd63N41nAmktzQqEdDnU99D7U2i8xEYTuHsC8fJqmvebPqKqHsbmQVkeuf866xr321MUGThpHeNovojNASM",
  "key40": "5YjrQv78wKxZDMcB7nYBUGnDGWRPyNykwBWCoxeMnqY3JEZnso8ZGdZP9S2VxuzTjhW1fM3vcgHB9mwydu6ZUs3D",
  "key41": "LSDbfdyKuDoeUfNgSzjNLagDFZ3qvjNNYZgq1ikVtLa7sLjhPvfVmLcEyPSZ15V6XdPFviXfxvSmLGRbxe1Uqfh",
  "key42": "5QRxwEnEs5tATJ1aYoiNfgAuts6UC14nBw7yE7FK6LB78vVcfDQKmFy5be3J6gpYe7VP24M9Bzu29WRjQ27bi7ZS",
  "key43": "4FRvH3isKjdwSZ4gtsbGEcnRiKwouP4R2Vggh1Tfg5yBHPDNJTQ5NLgyWb534h1NpZMvhgqfMdVuvsWtXvrU4pgC",
  "key44": "5Kbwc2J88ChMo7mbW7CTqJutCyRKZLXg3ibMS1dQWZqYH8v169Ss9mWpn5rHBetXiNXtK1mYizgidYB8MVwvb534",
  "key45": "4vnPaiRZCqB5W4zYPXWqqW14e7VXp3hvqNgq5v3Tj86JwmYwu8JBnEQ1vcxzbiUfvVaSBrUmCfZjKSWC7KSFd3qs",
  "key46": "53AxcAZeNDYze4jhEif9FVzFmFKQ8qiEUXcivoRUS4eeS58UqDbLSQon5BWBZqc5JFid1VvqcpUKYDWkra2XuQ5F",
  "key47": "4WEoGNH5ySCuHUEsghxAeofKXHeh4nfzPf6HMgVULH5NTCFnzthskYG9tNmHvkz1amAfWTPwVp95hQbYC2FTgJ5j",
  "key48": "3KAWs6Q4URW39GiR3UcXfZdmGWmgaDR2y2wDqgmn1Xj5MNSNdM8uDp9Z9a6muAqt6pfhpU1qvanuBnFcgzY6a1rG"
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
