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
    "3AUZsfUJVpnPLcoUZXJHUTUH8P5pFvbZcGUUTnYGsPQ52bZXHWND5iisGS3Z5CGYocsMDz32r5qbTrWaJBEkhJag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rvffLGEmoK3JTH4ogByFB2YZ3pFw6RGRoWW49AzGzwX14ypApjzNkKhJP9NeecyhJfeVYcGu8dWQ48nuA6SBMPv",
  "key1": "3G5cHmSsWqBADMLX3DY2W6CVMT8qDQE92srhx5o9nYHopvs7Aggk4CUQ5VdKoB4g66c7qZiQpRgDbndD6qM97UwW",
  "key2": "5ZnJDjfWCEUKwRYdvKQgP8Vyk5G9tJ4f7FsepqMJjD4gFryDX4Z86qgVdG6nBih1sT8c9ZZeFVU8RRKJJGaU7nMZ",
  "key3": "453jcKP9MwCFcjgurtrDeWR49VKpEjKwBDS1E1TYnZajZL99EMYSwVvxsWYmXbd4vU286AJEbbhfDsSpBBWtMDWe",
  "key4": "2wvg3F4hxwJgKrFqY1YeBKct5qrvp2s94omAKfHEonpGmPiGLJqurjvoFjCA59Pj5wcroPbhGNxkURGr7zPR59Nw",
  "key5": "4ZjypLSUPJXDK6CNTj19giSNSqzNTukD52FrVjmSAR7qo3KCogzkN3kxWk7K2yHQT2yuMJvQmosa58b2MpPEgD9u",
  "key6": "3pmfhSvQ7ogzm4xshTcG2Z9fdTQunfv7FMuysXhAgikw46apdzfwL97H46WfjWSYrDmh3u7TEksde1QU3ircdv8s",
  "key7": "4DXRdNVbMCfBxndSUWB7tp8BnG8FrbwLyVJYs3oMbT7CyTCacw1nw83yJzDE2mxp9zSyohcoDGK2bMYENavQcYpC",
  "key8": "3Yvm4PEqo6bqSqSYJ8qaEfBH4hRRw3vo98zQxTgsDuf688BjidnTrfgGC8rVzUSQeWyjKaubnbLvqDFJNiuv63AN",
  "key9": "4TJev2hTZ6YW9JhmyawNBgDdfhrGgCqwMhdKP3VeHJVfKcXYk4DJRoo1kBV6gKq4BB7z3oPhYWbX5vS1wb4zWyPp",
  "key10": "4PqFkavU4jF4D8nSJakyVC7sYcVYjSfTNXnJjzVMzFCbQE12ngLzAHSHWEBNDEQ39PVHBP4qRgzFm7xti8yoTFwT",
  "key11": "TgvBw4aotCJ3hqJWtNKq1KyiabkbcRyNybq69z5mhxyNmw1QQsVgFyjKoCthDHdbzmXXJWYx5r1b8pkrQVHzkJT",
  "key12": "3aDVgPWDuZCaCy6QV8SuneQEGFKZrkSSzd39BcuAvLTzPAyaywFtxkFZH1xneGR5kcavUnqoNydJsdG3skoQx8AV",
  "key13": "22GKcUC1XAKFkznGFRBhm3W3ZFYf5HwCiu5n5sjXMhWUKtdNrM1sai2das9xsSHfBvWKnMMF7HJs7PRYBYJHH7Xt",
  "key14": "2Zw5EvuG1AzJfWPRnYqaqdWks2JqBM8MrPLua6bAyXeDHF5hQxMBh1FNbFVYFYiKPsBbDWATW2J6TZc7tBYpTLDR",
  "key15": "2NuCHxpNybqMNmovzbLeFDiG97TXax9mkEcaU8YubMffDVaaum7irP6QVpUgF8Es1m3VwfVj5uKUqoAs7vfw4VhA",
  "key16": "64NCU2L5D8k6j5mdQbTx5ezQbSfhdxRAp5diHZzhe8T45v3mJ3bHVbdzL8mWzsU7s9iH6yHKBEstipHcchKk3pPe",
  "key17": "4qSQimxTyeumbZCf6eNDM5ZiNwMvqoCUQP9gnYK4LDzqSUPZDstNuLUdfdzBS4JqJPo8M3bScc8J43FWS6yzPGhq",
  "key18": "4HjqMd8q3ZMp8n2pymNXJGde1HYSeRzLgJysaCjchNkKSYWa1UmK6PQCFiJqhcfWCMpfAmXBUC3G6piKeVqiYwpZ",
  "key19": "5q8vUayfJtoneH7CngYdkjnHm4RReQEVTAfYb8EMbDLwhR6krhWTYTek9HtpnNi6ShctUvTdhy6iNH7zBjADsNrQ",
  "key20": "3L1TCEn7a2bMmUenX7fQrtsF5bGuMdzRg6wxnaK1PJpMZ9d6JCzdzz26wcT64etmT6vGeJDi9uCZZEwjVnZ7uPSv",
  "key21": "3yxHPyEvJfkjYGrJzPDMFbu8xEGdoJVqw3zpn63TdTmoBKFnuzffiwtCr2y48rKz2HhT34e1J3j7CJzxkWfEUmNS",
  "key22": "2V4rtpRxoxXsYbTuw5EebewYBUcNpzc6j8ThG9b5QbKtAJSDkEBzDpPXAr2UUEMntJREdxaELrwguejLcBXfWFqu",
  "key23": "bmr4dhj5L3V5g8wWCXRrfe5DouQkC32UKPgC7Vi38Wf396vurzTXLM33ehrjTJFUq6nPcuNPcev4uE53YagusUV",
  "key24": "3cRVmdswMRftUsxPycDV8hyG7z4vQBZ27TqPCCtTw9xWRCM6tLPrx3y1SLtDvbMSCNB6Gy6qc4JSnaitDGUqnoy8",
  "key25": "5xUkU2VgdqxHkoGy2PXCu6iaBYy7496S238zSfG3qBZLQugBhczEzyz6v5S5hB5h7tZ4zmQjGnKb5wikU5oxqNJn",
  "key26": "3f3HFRiGSD3jzFyWzUFR3ZbuAEeNvWP52EEXARw4V1GA9FmTi5DaWDgQLYYVPWZTdBTsMA1MsAtv5v4Du1Kpd2iV",
  "key27": "izHWcMVPBkGBpb2GNLGfxz9hb752xQDKsLyXQJvMbLji3HPPi8AY2DwAZ7tuNohM3wW8k66HMyvPaVe1F3HbLNz",
  "key28": "4wNHWueZCfSGgVmKhs5KdM4nXBre91enXrQwE6AddkEoW7q7aKWEfgCLacLz3HrKRk18kqXfawN8BduhLQeuuuo9",
  "key29": "2hpfZ1wXYmVsUpsWTWh2CFjJRNAGe8HnzrVPKN1QWtQwh7XaKv8DXj579GN6R6nk3hTTuhQnhViZGtLG6Huur6AZ",
  "key30": "52uMmBLVyGXHQHRLy9zYCopaTjYnwkEeYr6zYwGU6UVmfyS82Zh2JifL2xCqTJtRcZLtkyjFgRLxQdvpP6cwMQT",
  "key31": "3ShkVuRJZFEM3hKcn5aUTVUh8FHM5efRJsMLPLAFJsTqNGredvaFUAxNth33SRUXR5j9bNo3oWgobFUGtqe7GXci",
  "key32": "46zo5mQzMcPoNBjrwShYTyou5UzzvoX9tZi27413cFRmDrF57berx5kSEBGyHgfWvJKmw5mjwyoWBTFRo4vGjUGV",
  "key33": "3h63kpznbiK5dm7QkHdLrTAj3anBKJFmCs1GTk6BhwWeVm9KxhWV8b79u7pS3beskmkeRRFFtvT8J6j4Pu1A6ve1",
  "key34": "51KJ4KvtN4GNRrohFwNPEsj2vNU4nvaPsTy7AxAp7cCa4ceJVHDgypoAWtRfeNoSMLoDCRAwDj7LyjCPzC1xho13",
  "key35": "5rp5Dy2sw3Lgme7im4PnuXWLGbMvGB5akcwFGU8ZPpPFfCPjKyQxGRARztBPYGhNJPtmxRFUd6QNgsawxbgCUWp5",
  "key36": "2v8V82ydnPmBM7WUgRc871NfwjhLuyegS1n49S3CcV1mgDWmYjro2CygSkGZvDnEGcCvSvWarHLNe9pSSByteyDz",
  "key37": "M2wisxxZheKkzq99ztwTWWfoSbFQeoLAh2mkLyWjHB2CzTYmTppFezUGtLwL63BLRc3RKixnGk3zPggMJH3oyod",
  "key38": "2zAHARtdJ4xQY2XCrpZJAArKM7pgqsM3qvY15dFCqxdPoUNsGRGgJHiBDvVoiZeQ4MMAJDNm6nWm2w2k7kXUqMS7",
  "key39": "paTbszNjbyXLT6PKoYGVFYxppzmyv1LtSuBWgAfF7KeNqY82QKA3JoMAikV3uXTNnu8MdYDSuwLYGmTM79TiJTE",
  "key40": "2RYornVjj16znYxHYA4VAqVfyGZcJGxqE65F78ERiwY7VWhVmyzWn2WiD46FNWc6S5x4q7CnafGaXE4n26Xz4618"
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
