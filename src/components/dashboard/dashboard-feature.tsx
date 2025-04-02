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
    "5iuBxrZ8EZotc9jB8tayBhk2j6aNPhaEiwErBUEcJXwaBVp8X2q1zhcgQ25vpyMQhJbq7khGEAGtbQTbLJDHKrXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CZAcBcbSFp6gQwswBPTMwt1wEuCi1ASTAuVx1eN6J6rWQDivXsox4MJEBTP2qZeVsZd9Rw9iBaspjSdzHb2VJQW",
  "key1": "cVGKaRUrDPbNwFMsrMQueh2CRwtcaktGhmQP4Et4mNrKYwZL2D7WL8biHhwyMDbg4jWPXauDLyWn4ABNvpt9LLM",
  "key2": "5FHitqHstP54PERK2Z23avt6MXFrCaZUgdmqfCTUezhLZSAP9G94NyM6FuroFUsW7nhnhZT1XGCfg615T2apfb6f",
  "key3": "3866Za9ns4Jv3YE1EGRBJFsFKk6JZdVp3phbbZqNzDQ9i2n8nYaeS7BjrwNRRmF5hK59DKayYR8a2FYiDAb5jnGf",
  "key4": "3WLVJW5dTMBia3UMAXttic84yLr38xwPhHdypr5BvDtAFVGB3GQ3fvVUR6GKK6qphUgoUwYQVhme6G34yku1gpWR",
  "key5": "62RrqjXFBRemfAJfTESpSKU4JVdrDL94K31sc6D5RWc67AybY2NRFUgEVwwCcrn8sZLL7zUAmo2Qz4abhn6h2BQ",
  "key6": "3XFuvicqcVeTNXWhxZ8JTpmMgMSvf9s7TrtcMbGBqoNiAbX33d7hzQzH8r5B5m2B9DAZw8Jx4jRAVNCQdM9V7VK9",
  "key7": "YAkxsNGfizoEUERRnEqdGqUTHx5UkTD3JsQHFsxrdLbYxsydaADtE82GBpgeXyyvixaKcCJ1bAcjRErKwq9UK1d",
  "key8": "4ryd1NWjJv5WPGxpiTRgw1zoVNxcYB6HupGQhQAXfW2xeXgPSy5qRAvUkLAkujos1KYLLN3rnXyYtLxFdcSe62UH",
  "key9": "5p641wncGb9hjrE4RjiKxSdSBCviLJuNZ6jbHWY11WpfeiHHdE9W6iGTMGDxGJT2UaHhkvMXbYYvHvCm9gaPfa73",
  "key10": "3aCgR7dwT87VeDaGE2o6mjPkGn8GR6V4jviUeRAy6AKRqZw4fXktUdACcg2Kr4GFcqPeFAMCjhZyX74ERJJqngvQ",
  "key11": "121LCwaRK8UP4K7gxCvhCCpgSMu9MsKbzs5jTuBMx23VwF8HUfdBvjYA73bgkuk5PspdvRBgpoi5YaRyvoaunLg4",
  "key12": "2WTDTFrYWDt1A2eAakdWKP3yiVoajEA7PHZHuUNcrMhJgmgYpJYAfuncMtsKPcm75jrZwjQhERMHgcorxwp9NZzH",
  "key13": "45k44L7WHHAyFqju7nYPsasQUKTK9Q19m24pyHYH1tfo12jAWPHGxjGMUGmB7TMFD7PBGqoukntiaqFh2P49c3yG",
  "key14": "4RXzTR9vhkzCQjfxcf4g1PadiqWBRM1ytX7ShjyaJh2fa32ba5dsVwd4pVr2JoECnVLFqwbqquzwwdQCGauZUgwS",
  "key15": "22XSxrTMUj8EeH8um9y6LLf1Grzp5CBUhH42BLwdEijF7NbHsDNXGwtMWGaRTz3TaZ55Vt3bvwHSA4ZAdy6rD6pB",
  "key16": "2fpwEvCxU9cne83cedsq6YvXZAfTaiefiiBntAspaZs9BzqJ5XvSthtVJiEo3oWdteSF28cGuaTsAvaMceR1oP97",
  "key17": "4nxu76UwXHuiq6XzjGX8ZVFE3RvD4bWdkPmtzpYgLX7J9hbHDhoJjxbH8PzWkfNd7fDEzwfRgRo9Y4NEZ5be1p2h",
  "key18": "4ZwGPDFAq4Pkj336t69dSiAnG4SnWoeCTBkngkgf2TBHtZrE6ZQatvbYcnTx2W2rWW5qxttJ5FKuXvnjyZNkrksm",
  "key19": "586UPycM3vaAt5rNr6Avs9QKWym3mkpKjA22zgZWzSE9yLqJcoqx2Tvx8bRxcUYxGwGABceecPF6T9AikGwycX9f",
  "key20": "5rRdehHSTt7B7PYXLotVzexinBzm8JYqafx52PwNP7GEmsAGfiPHLtxjd5mFcuCfLR3mrSbp2CAuYpVAStmtVRNj",
  "key21": "2owhzkiURM8niFAHq9o8VRHX22s2vJRNNPYc5LvZCY1JzrtErimkmuEWLt5zGJhjMMbgWnVMarCbjA5XXtoGkVvJ",
  "key22": "4MwwhPA5eF4g4eeyvPhC1JAq6kxpWVbBMeMnipsx9qTGnjsgoMy91z7y5ZknaeneNhBeRWVGVnr8zSNZFDkdRcTR",
  "key23": "5c23oxiPZQbbq1jmq5PuQckGpzRCamNy7AyDENhybrhTPTTUG7jBBD2r7kFDbgaUqCUuANuaST8duiGVnR3omQtF",
  "key24": "3yQ4o3wccuuSPrywifCgtRQRCnKQsYMjuJj9qjdasrv3syrX16GkwAjRZHpnFLe7wxqftcoesoFe6RVDgDxYib6Z",
  "key25": "2koPtSs6fRJzjnTNvP7QRmNwSeKBkCRBoWPwjRr6oQdCcFCsHka7BzU5CZRp5cUuYBVLqbJNWqxJuqV1Vzq33aNy",
  "key26": "2UtWAZZJ3meP23KchxQ7kGMMoiZqmxWtTY1isy67gSRBBXtVZd9XvXFYhdUvc5cFPD1HU4AfKnHo1D4nmxEFNH5X",
  "key27": "QAQyz97LaU9dwo5Gm22DLPKCJSBH2quGkoX1Qef6e8m6VLdcU8umpne4JLRMsykeRgWFq7q66itGk4htumbVUTV",
  "key28": "5sfxjdmUjrixeYYSbz5Pw7m7NKjDFXNW2yRYrJtdmchnKqQjJggPRBMvRihVw8Q5Cz2zBK2cD9e4QN6eXUTn9mNc",
  "key29": "TaaoiudnZWCuVRUrk2g9dKYGWi4dupHkq3j9YKe9yAbDRxgX9acVu4vPDhc5LtpaCUk9i9CHsZQmTA7u7EUcmBz",
  "key30": "5jbTLvgxKujUGWQhyWKQpiRnysVyAu4xPnJp1hSC2y5hgypfWomaq3pZfxTcUrFpE6Cz9GW1jrNw2xEYgV2mvutQ",
  "key31": "hzvqi8d3jpbAhiQtmv753nB54jMLaCmmSc7d9v2buFatwi9pScspP4oXPc6hBEHq49dyHEPUjuDKMeQb9zGCRNp",
  "key32": "4TtaaKqBzZaJQKHsv4tKcYQ1vzdd566UL8sNmdtkU961fPUvqkUhBcMA6MuTcX8PkogbXNzhz5dCth61cjfQYLb9",
  "key33": "57ZEVsoeFeEAQW1RwHSaVgEuEgN92Sddv9RcjGMinZvBhLt29BxFpJ26JkrVWAjwGtGUnZ8wjoWukExKWaEfkJ4a",
  "key34": "3QuHdGsC8xZjxWPYPuS27bH1TF2hVeZ6M3ZXxH6C9B2XhMTqr4tKDVeeBZUTYRf2RkmirHu4u1e8pB8nxBfznJNx",
  "key35": "bZuAChiKtxoCXttuUpDwXFwN6nvAq2ZJXcdRPqCGCtvRwerE8GySH3WwiKQiESVkYAoxAyaPmp1dT7wDjbn6r2T",
  "key36": "4WLrdYvVzBYR7BpuWym8HJr9BZPRY1nfSSBKkkB1tar3M5fTSY6NYBLVqa6gjMYpUs2rr4qFjh4Aq8URpK2Lnfju",
  "key37": "57n3VTDtps8aZj4shyoSxWYpNZaXW4mCntXbP8Htu7DYLxNEVq77pG5oT9gKX1spcyAPM3s5cMx9octK3HAf7UkK",
  "key38": "42hR9FcxHm7yrJQgZNYGpBCAysfw41vWbcvWRfdc1r99H6w8S6fcWvxa9jK2b8bdve1BRmHJDPnrmFu8oF6xvP2o",
  "key39": "51JVPtzudRkmjVLeXGSXhBEpDwwhKGEY78w7k65oJSD4jzpX5CPF1mdpD2z1firpKurikm3kaiTv7v3Vm8bGPhWP",
  "key40": "5R2ubJTDzgQRxfaUPatn2UBZEFMQmV1AT2WYexyGJHpCU1JnYXvJpmeZvgP68tNBSH42PCWoihsRraGUyXUUvtyL",
  "key41": "4y9t33BLA3rW7knybNVWPiwyYzGzqvTzyvoarzMSeExVT66BUFtJARtDeAMR4bQRoo1fDWLwpZtdBB3N1ZzCU1HQ",
  "key42": "5kwfDupphUAwVh9xPawTsVRhYRgbxPsa64qrxtQ9XegjozJFP3p3dhuEdsEGC9JSjrHbe54wwQe3fxfnEL3UwUUj",
  "key43": "g6T3DJgiCGXgvqJopiw6MRmd2Ca2aGQxkRFPW9SPAGVtTtnuy6qSF6mp8v4DWRaQUqWNfHukHHuecwRpjLYgBH5",
  "key44": "46gre4FRNrZkXATrqTbNLd2gbcDzBCsFfdoWqjLXPhioKeNFzXdG72Kv1dU12N821kinXnydHDYoojHCuRweftVX",
  "key45": "2RuHMfGBHdV91M1QdYpFr2darnp6bWhk6w8BmnFAyWK7EhXMC2YPUtRyC8nGLXCm4EyYb5WMB6s4z1G47712zjHZ"
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
