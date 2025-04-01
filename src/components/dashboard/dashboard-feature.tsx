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
    "2hjpZ6LxFgGVtGQhxAJdq3wwRvorvCJbd2FGZPC5VWdcMokBFDYM62LwD1pXCFnecciExDAB6eoariXwEbX7cFWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SkD24hGxbpgvzsMjTTQT6msU5m5g8Fonn3Y1VXmuzfcNoAxKLFAAfX6LqBAD3V8PyFM2YsjPaYsWapDAyKMT9PZ",
  "key1": "3YT3hXUSFJrZRQZUEyyzG5F7d2HfawxzeJSrrHbqbGQNWA1B6LDc2wkLE5GWVSRp3b4kbCimLpBcGvXVixUf9Ahu",
  "key2": "2yR42bqjRiq6A6FFCumLcix2GH9FFxpR1j4YnFZAGN8RBc4Rj6QmGXSXoNy7w66x1sdhT7MnEoaTrwdkNP9HANXe",
  "key3": "4ApNyFEfwP9SR4hPbK7uV5xGKMGp6FaWJw4m77FTGoXziU22rsYmasmrhf14BNPgSDvb5izEqU8p2UK5rfCgLXiQ",
  "key4": "5JoLVckqh3dwoEVhR2AaFoGZetVrB1rxXxTeaJGdnYWZ3NtG6oKj4k8x7YbrV1g2V41Uy2kygH2K7XUivwCTH3wV",
  "key5": "2rD9fqL5Pdm4369X67sf39r7GPjGxG8wz7GsH4FhuomU1zMCLXvPgSPUjr6Cz3Qri6dAsF3yBGsp5n81kVin83Rs",
  "key6": "4YdVHtBgSso4QmPnNstnpcatGJUWYh8iemf9ebuDTaHqnK7FGH5CmW5cybcyFavtQcHnashk4rx4WTi4uZRJN3Kq",
  "key7": "QP1WDqVEL7jAgr1Td2kqUV441W7vnr3APJYP27T1U4ZXedAXAZ8aE4RcpH2gEQxg8AxcbtnmpurQEpBYNC5XVTE",
  "key8": "4wSqQQx4MGNqpGXRTGLP1zmdaruAiyLoKJVPvqr7wxdxWGBWD2bf4EoThHff1azfzMJ3CFDk3c3vcYDrKwWuHEYD",
  "key9": "2GNRTHTcPq5wkLgPvXdpxDwWf13BnRPjgPUwckLsj1axdYmUbfdRM56xyQpg6ke97YY61JMx1e31XQp8bxLqfN9p",
  "key10": "5epedAt9Cw3VqmwSMzDrZpchyujuBRiZMnXTkxaEYRCmxvZ6xqZzqmYKwwkitmKS7wpLphtfkEzh4kxAX5szs37t",
  "key11": "4WRkGg66HPMhCoedHAHgpusFFkdvkzkWPyQcJLUuEesw9gdM296b67mNKFsYoPd4CB1De5aPpf9m2s1236ZZAcWa",
  "key12": "2MtofPc1SaKzwE2uMAzRvYsKaLnjoJ8ohpUg7t1tVHnY2nHMte6EZsnNuvyU7mb7JtRgw4QTNkiXYGEf3QYd9XhJ",
  "key13": "29v3g251HUX6itFRLpkbyub1uYVr9bxz8u4EMmv4KWNavxoyKXygwTJDpkMS7bBiQCQsaunCFQC3Bdtq4KE4nJoy",
  "key14": "2RMAbYBDPzvAhU5mdt546w5dZ3MChn4sqZroGdbSBRn45ZBoWEegtkG5RtmwC9sPxBfgpDGgWHvkG7Wv5CzuBZ5Y",
  "key15": "t4bJJUhAdDarHtPpnkEaRC9XXdz7UkvBxVJKtFEMZqwuArmvf2RYHNfHiTyMEbn5FMcxnmVrLhcmBZFN4CS44av",
  "key16": "3ydBQjZYFccS2zV7aKM3KKvYNdeshNnw9vfnm9xqSUCHePf1TwqvmopjZqUwHTpvZcXrSQGG3jNRi9dzZ9kc1AtF",
  "key17": "3kgBANYameTjj4GsuWFPow8f7Tu8Uqms2sMCmvFBZamAZCLHG5rocxE4BpzNJz3qKMxqdzyBj3wTXshyHsQwjxti",
  "key18": "Fz1THjSqWz48PWBsQrdmbrDfHy4iPuD6mVhKsf6GPnLfsuZn93TKt79pgF7GU4PVyrqQD1r837cGJiCe67sUW1S",
  "key19": "3oVgFsWj8xGbGn3JsPZ2ZeVs75B4T9V8ZtgUGYGeP3ah2ZVAcfbDK6yaMkf3vMKpbtfW875raXSBQTYSqd6Msfin",
  "key20": "4iRRoykSKgKrden4CwSc4UbkZTu34RrwcN1fwQWDSFKAJsSA8SHe7Dm9Z4sE7cnLA5J8CAxdJYZ54s4A85CWb2CY",
  "key21": "61iArAnrrYvFGYGJ6k3oBAZcvqSEwGswDx4udMPrge3wAzwbZypN9KqNcfAaVKejRm1ALowEkHAeE5oP3dmvK62C",
  "key22": "4WvasfHMudWAZgbURHSJxfyLT8pXnJzA6sCnoW41r9vQsjD2QYhc7N4sYJiBUMhSPmHcV8ahnYmu8i5pKrz3YkSJ",
  "key23": "4tiTWhtrB8wLLSPfhgiBvJBy6rcm7NuKXPrsZJmov2hQ8oRo6DsuMRM2b8C4cuVrZ6D4Veg1K2tpgUaCHMPn3Ztr",
  "key24": "aNTsNb2SNhbAmH77JDhzhe4EkqboiD4TYAPy6faT1nnk1PJioozVtnjuTTnH6Q56z2FZya4LHmWtxnYzfTExZnS",
  "key25": "2NNUbsYzszE6nGwiiKzYParZtucBD15p1FVFVaCQFDKxDZUPcmaZL8Cx9ZeeauabrjxtrPHP7a2D9RG2qVRXLyxR",
  "key26": "5NrFYEsgXxweiMf3Uw8sHtSrRHxGnguurxdXXX1QkXEBhBsh8XSNtveTMWG4c3NExG7riFeXDz6MVH4dqEjja8bp",
  "key27": "3feqzq8oMRPMCBPPRC3Ey18ZAq1FQdrg8Skewy8rFQQr4xgQL3NvDzAf6RYyFs4MKQ6jVbeT3XoahPGmw25bPoFE",
  "key28": "4KWEfWE7MnTCecuwPsWYRP8tr8ZhsW4xHpEa388DrFsAEprT8HPox5srtdnSV88FTMsSqnNL3tBumxGWaBR1tsVe",
  "key29": "4vPxetXfTHXWJDJdyfQ2a2QSvqw2Xg85V7WaoLqq5KBiy5N4M6SiNV4qokhEM5DDEaJiJjERpFTa8gKcecbEV721",
  "key30": "47qhSvjmQ71Mf9C4YNZhmTDfteWnt3wVkXnW2fMnQCid8LFyhKAF9Qn6FnmyzKSr3MEcAtrbmo2cmgtrCtk9qoWs",
  "key31": "4QPsq2E3qB1Uan6khGszAhzUtytAEkN7ey1MUZxmYw2UgMDRAxxzaDx6ZuxuhqRNaNTtTNsZpqk6RVyZRqq7N288",
  "key32": "3PxvEE8qTLdiVPaHhsLqUvuNd3T4ejX7fNRLC6Ngb9k14Lci9LJ1ffxrnqAg2KQY1BhQVSxquJEFFchhAPSA5Jj5",
  "key33": "3GzE4K3vh3UzZpuzmmGPmJUA1kwyDbRsF7NYLyhMxXAZVmPnVNa9Sd78RpRfbJP528yS4FJrjKaoFt7UNcaFSvi9",
  "key34": "2Th2rDwCPHBChWziLkmeStbgkQmAdimQyQeffBZNxKvvYvcZhUehdkRz8A1gsmdHm3EXjP25EDjPZgj7RE79RVSB",
  "key35": "3q9GQiysdcfKDek5x3ESQYexpSXKyTMJpDtjcgdpr9KdkzequgjJGR66tNdkw9AJP5XcQQkWudUGoJidVMGi7JX2",
  "key36": "vR5EKVNRAqbtbLwsqCTMJKiqB6bJF1U1rh59ETuttHJEDQuoAhGZGvgHEx1j14SuuWj51PDAqBmrZczLjEdNDuB",
  "key37": "4TSFincCz3bqmhjb4gNZ5Eqva6eVaPXXNjf753dvxt1prxvTKUnZzsDLoBa4MreFLfb6DDsfvUFChak5TKs9Weqh",
  "key38": "5KdYBGqZoTjBc47WK4cA2o7VxX4vmuuBe22ib6AmTkWnqVACETGZanzmGMrvmmrPxnjReza7grTzGLr88nnwKs8J",
  "key39": "3nYRofCzZgqnLSSf3R7wxQWopgH8kwHu3vqcWZ8VXsxapjFZ629pHydgeL8yoZTNWWDKKhqwf8LVnmeuM8ZvYMH2",
  "key40": "5YGdevqfC2mZFg99Ha8iqLgxkKGxVHxQh1jwz4AApZvaaH3nHDEsdmKsAFZAHgwW8P6hXf9GFxiYQ8mHP398HMre",
  "key41": "5YmVo1QjBRVct964zYnn2yaB3Y65jCWoJ9kwLcD7JdFq3FEJKHJpACnaMyojsTYZrjxoTr2TZ6PqcHwRe4MEZgDV",
  "key42": "333ucJWAEDZN6g6JUWSG8VSJfYNYe1k24Xo8945Df4RvU5DpUzTtf8QwJqN3ga8ADQPMe8uzFJJpzzrzaG79PZTQ",
  "key43": "5Kqnjfezzocw7P516jtwMX2sAUoF7iQE1tmdqpNc4w9WZasDaFL9Ty1doKorzZRM4eYEmSWPCyAW8dRxNEHTu3Qr",
  "key44": "2GCCtPmn1UFp9q1HXNh3Jy5L2nPr7XM13dHhvTWSuQr5XYkAYg6aHPh2yjkRqcnwrDYeaFM71kA4iXKFhEGaWN2p",
  "key45": "jUdNRcy5PgYLaWbZNHE1KnN3ZbLGNdbnXCYw4oTrtvu1HwBxG8GwvpzUvTE96vqR4oiQBKmJsdgHeV8FCoQKhZ5",
  "key46": "2yDRCUiRrjqPDh24EgbQwPHPGC9vVwnn9Na5Uy4rP4aWkZV78S4s1QHU8LFxhDc5YN7kvyeueybCHot5XezaeqxK",
  "key47": "4ZT4mX5U8sYktj6fWxKPwRqE5dEEz74319KN2uHEoAjy4AvpsUxKZ76cDypprvHwr11bJ96zCHJTzF8BgwuBQoJo"
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
