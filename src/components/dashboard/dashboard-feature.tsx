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
    "BXZTBcw3Y9uSYbY7Scrdg7rtcRL2wM1bWpBoLFJ9Ds5JFSgm5G3pbSm5k1BsigFPPL7WWDesNzr1NNahytNTKGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q6P2ZHoqzQ5zWGK9J9v1SAE1rfSTTsuiAfVwbNxLVwEjezDWEdF5tyBTFN84Vy5Z3e3begH4m5YsXgXvXFCdYJ5",
  "key1": "33WCSqHbS8smebrqWuAbFJpiJXTbS5HJe2jS4BKDntpKNKnvKTWw5PeVvRrPKcLNvMFw7CWGJJygH12Hr9XKq6dA",
  "key2": "4Mz4vzrL7dyYyzrUwLWhYxTaGVbbSvD9EXdow3j91BVZRtHauFFMEjvVFfKYmEEBMvJ3fA6THMaB9pttsFcUTxvS",
  "key3": "361czsP3KHy5r6NC4mx6dZZ44scSuCDJ1THmRGBSey61YjdBz4mpWaiBEDD7weTVYjZWEgBCmSm7brB9RoaVNCpz",
  "key4": "3aPFoPcvKwyZJMaXoN6ceGavjBbDwivZCQCnCXBfGSgTzMp99qvMkLtKSxuHJQfQEVWpkKbkVzVihgFZjiZEWwpY",
  "key5": "443bJ9go4sGnPgBLUh1KijMtkj5cEA6YmhZosZ1jh8pj9oiN1ZKiJp778g8n2ahdJKCJH5AnT4Au5pfjZ1TQmEF2",
  "key6": "AfrLnu4SARSRnUkkoe9cws8hkEcc6LooDvzNWDtpKDoRb6vpVatvpPa1YgFEqctjQXsdrdYd5VMevL7StpjTBg4",
  "key7": "2ow4UyHwboQWJ1aHchQGcFoByTFGY8Sdmy2gyDqT5VKWBM1Kf6neVmy4VcJAjFfgbMdbZNe7v7QD4jAh8icngKJQ",
  "key8": "5hTTUg1jThC2kj4xUAJnyffTzab4uB5hmpbvh2hTsbgvQQLf53SR16zWJ9P6jdUo8aKX5A1jDFUduCnwmXGZ2pe1",
  "key9": "5n88c2TqZGxM53RrGWsLjmBJ9KfbiUhfa4WMiWuhRgWVwrsaux5wQCDciicGmtHyZGEBx4YvcGFzeipRJLKnF79t",
  "key10": "4XPdUnfTtWtGMjjYqdKxLSPT39FrHWbH9iYoV1U3tapJ4qkpiEs3ntR9xnZBxmp46ALW9f7pMzyGQMUGB7XfTeRA",
  "key11": "KGLhsFrxR7fBUbLBaeySAsfkBFu6hFE84edzq26ec3pFUdgWHw7dbfLByHjp21VH2AZ2czkkUmwsJVjmTbQch7T",
  "key12": "56v2dT4uQbjosYaUXis618W2CfYyxwBYrCvcabmuvLZ11THZRHhDRhm2J9jEdYbWXF7hxupeYyUUbB2bgSKyo8fR",
  "key13": "3oDNAMoBTZ4wLU7Y6NntaEpbH6jpVLSZthbE6cWDjpzQicnLY3ejNuJBVBc3LjfFDb9G6Zy1tf8kgtqLJ1cW3StC",
  "key14": "RF4eTkSJ9FHmv6rEVx5Lt8PF5oXquTnUmDUXz1yTJ6bVFACHtQPG7a9XpXCNa1oQYnpjHT42vB4RT8tLsCHk2sa",
  "key15": "n656BkLYSybYLpWEdBn4xpHLBzjHuUgTKPjGUn5oXpWzBL59X9Xvz2YtobomnPEZJHWfPfk3pH4DXtWRC5R5PZH",
  "key16": "5uWkndaSRN44kn3C9mRVsUV8pgjrayprGnUdPDBofWSL2oXL2wjBrYRDuiyt8ikSfTzugPmymsPagiiyFKM1a97f",
  "key17": "4APYxkaptPSqrwMN9WgQW6PB4DVdMiBgfiB9R6DSsLwPQdYYB8GvUnjRQhwpv7cvtWySKMMUDk9Jc1tTP5eGHWnP",
  "key18": "uHzk67jf84C9bBwoD37z3rHdYYq5JDBXCavmH3qbQE6cucAnsr1Tjgpe5HvEQqG8KesTkNfw8Y5hSkT1wZU94Ab",
  "key19": "47nHaJjKLDNMiJj7FzLpsu6goWB89THL9qEGE5SnqMdZxQuUUfNUz8Zr7qdChMFJSvS5RmGnNa12wuise4qxcQq2",
  "key20": "2p7rsLG8Xb83gKhsk6h4aD8t3XojQu2FsCXqTSHmSoW1SEEdfAkEsgc2V77bNG1L6JFKjqQKns2V1VEz54D7oTS8",
  "key21": "622erEqSfhn4RvswWQvhbXfF3MsAHBGLcnNvzpAmjA4Cu9sfznQu7udmvEvAKyK38cYs2p3uMPJntP5kEJjk8V8d",
  "key22": "4xnrXoH3Tir7j7ERPX8dXT3SmtUUBqS2K88F18ZWByX6AKRcFkkDwWYz5XWC5Cte3a5mkdPnhAX2G4BwwrPq8T8Q",
  "key23": "41of5pHn47xjBGccVy6XEzkADx3D4atorvhemPPCybEA7YJ7xG5MtnE7R1eMuFHveeF22p9uFyNFv1eLKSBmVrsd",
  "key24": "8cDab8BfGZodVDduKEfJepyRRxwwg82ouWCKABReL6d8q6vRowD2Q1gnvoTHsEw65HTMy5swL5jPHHUYSk1SG6v",
  "key25": "65xtz8ocXc55Sy7GpgHYNhcpTtGkfcbEawKjAMHpchorNstytV8pPGoEuCekqScVmSeheskKgpKChiQhFBsNMJvR",
  "key26": "4dqmsvM4WbNKZoLTc5avg1QDgAqM7wdSLTxBbhGsZgrwL1reQzB7CAjWngXyYkK7fPfGHmajjrGYtexuwx8fXvph",
  "key27": "44JGaTcnErMK4x6docLyGiWQitA52wdiBZeWWkpfNnBdHhu8qaTGMvuWNur4rBtpKki4V8NBnQTGoS2m7VFVDhwr",
  "key28": "54YZxwFej96wa22Ay11WzByoqZw4hus4un3GbtrjCHhAKXyGk9XVzcwy3pt5UudrMzpTefCK9awCgThdCWX9wXe6",
  "key29": "24W6uZXf6nwSjZCivHQcuDbd5m6iFWbLvJq4LSe84ZGnBReR4terJL1DuhEfwuP9kYV86vapS2BrJFCWXpkeSgHE",
  "key30": "5DKp7TsYQGPR1rP3s26wy7inzVK64wCxQmegtK5cBcYdzAhHgyguxCtisFAHoCdcSppUPvAFbmnpsRLmvRDvGEpP",
  "key31": "4S488rA9DBLoscNXze9WTUDzAKGGMRV9FHH42q3zNX9QCd9JtasGi6XaCFnsEBKxc7dG6PcjnDUmfEZvQ9MnGD3W",
  "key32": "t5ckKt2xgTEpNqysm1gEkwFZ2WRSHnNFsaKq4RnaCwTH9ZeCT152on4DGNj4g8V8pHf3sAxYMRxHc97cCqY5RUx",
  "key33": "2qY1ZUo1sYMzUQRH53vhBcuEmXxgzoEV5pTqrnTnuEY33ko5nLhd8a4qgrUmMb9GcsEiX3JzdJE6UYyppKePCsqm",
  "key34": "5bzmzSS2wFi3u3c1getpTv1UKEkNFimeAKxeXp6bDreT3wNcUF6fF9jtB9AQuttuk49asXwShTLFMYS63PqYG7T8",
  "key35": "fZBr73DV2Mr1dBTc3BdkMMr5zexB7yWMdCCiQrtLpYLeXpjvb2FFs2JA7bJiAd1Tuw35J1fs4jVmsFjFhSkJWKd",
  "key36": "61hti4fXCTYCqtRbKdwudc7ttXbdVYRKaDtzQGX5Luk37zh9e5jdvQQr36XQ58L9H2yRPGWrHpX6yztwkQBxSyws",
  "key37": "5uf3wbW5XJf8hdCK7JZgRST57ouNBVRSshZuxbnccNtbovbLGVPPKyxMa3RG6HQ5F4h2aaoEXLmyXLkTB8QSF2cP",
  "key38": "49aPVHBexrSQ8SQuRmLNNBpff1Qdz1NJ143cy1oWvKVT22KdXTzXTy3wi24FwyKbN1c4QpKXM4XukmDwk6Ww1URx",
  "key39": "27AvnpAn5GcAtUkzndVXtp8byLTbVRvLNfM6rn6PwRE5baeBGyURrcztPPs1C2qQzGx8MViPatdmuyMWiAVeh3E9",
  "key40": "5hATdnyF3k6UordrPUfPySREH6ZGgGGQMhnKcaa5G3JEQqwYMCjfnyXE7sVz3XNGPBtXcx1aThiRaKdoKYZGwwLC",
  "key41": "3AqWGvUSG2KVLwBW8SEsGMGVPCyGyBSTYqCXpJFFLghSKE7CeQDx4GwUsiMsq8Ksw1fGUcAHQ6b6PUbY4Aj327Kx",
  "key42": "mTZTKYEt4XX7aGFzDZHowdZ5UeDozaLbRzRz2xH4ChapTzgGx3eS43TSXEWdENZhQFU5sCV351esTWgk21ZuUGf",
  "key43": "3EsNd7RG6aggErRp6GenNcKgkDyQLNVbkwWvNEgwh44csVb2Z4JZ2fZTHW5Wf6fA4Li6ppMXnRKf8w7BQHuQmqJ",
  "key44": "38AyN4NYbf5WtGZrbogNzQYjnr31JTRbcNnFSHdUUU3tx6PZKmhfYaKKbMT36Y1BQjBefqjLuMsuRnzjsqAE3pko",
  "key45": "2pLFcxWygth7aStavHJf9cYi6xfTJbZovdQJ8XHVGog2dYoz83JLDUsqDs1WkEFK9CKX62zQJTyP8QN7K5tNueRj",
  "key46": "3AkkPiQgFkVf7Xva1sdUWYfCgF6VeqFtbkMkQMSeGRqbMcEXxs1HLWWWqJwDTMka5CLRnq9Qj1Bx5CQJkvTmqEaH"
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
