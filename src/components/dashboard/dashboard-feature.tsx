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
    "2UUJsxrsdY5LYe7wBsdbKRuKZSq4emzr5bGhv3TCg8Vf8pdDuxJkK6WFRmFABQg9WKKhjxMUevD2oSQ4hbvwvY3y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Kg8VXP9UNnX5baeTSP5VuNHxrU3Lt84R89grekXyzLJawxDgEk9nUeFPTpBUPMsf2mvDikbVz8p874cK6P3KC6j",
  "key1": "5TMKrc3cBT1NQwtEfHLNF8f5pwyBaZPnLNGGyZj2mPq31qX6w7E1D3BdGTSdCUKRg3xBVr4j6dXRxmmoMJnMk7xE",
  "key2": "59Y43PhoiE5YqfDZt55V7cgBR5DQFpp7FtCXSA3T5AJrpNtyK6wNg2Rm9N4ofk81sSzDHrP45fvtZ8yUpPLd8pBi",
  "key3": "2cjUBc6rfivXMUHhxfLHoLf3GBZyb7cGwNrbnBEGzHWJpq84mcG38rzBAzX4KXm6PR37w8sb9Wna9f8ogB3W3PXF",
  "key4": "2K7QMBGfeZpk7WirqMJ76nAsgabVjTaEXXuMRmFxngV6WKwQLDkSs5myGHk1XP9dNN3m8QC8vpPuroAFLMCr5wHq",
  "key5": "3ot3VyZkYpxVpuGMspgYUMGP5hgK1jRSqWNgLpoJeyMiuYGtMtWqphapURcpkQzmdEkxfRDBeyA5neESPp73RWhG",
  "key6": "2SeBcetkk21xaaRKMyqoAQZQgnDD3EGkDbsYizTJXrN3N4FanMfYiyALwHVpB14sVYyoMVUz9ovaQkYAxfpQTvjE",
  "key7": "3ZetUjzqKuEuVaEuJ11DZwgtkgyd1J7aEcW2uQqg3r5JFnSnkKVZnwX1on5gxL5r94eF78WjVE1ayd2W7XJ5Pkhm",
  "key8": "42ssE7qJ3Ji2AmEB2Vsf4SVtvL2rpTCtTmQAywFronGDFpK6dBrWBKcLZvBv2bdgXY8coK6qoiUh4gdHHdKiqVH3",
  "key9": "2Wb5Qm9wXXdXttBeKJHYCW2kVGgzN9LAreAgqusZUa4LMFaVEVWzM3mQQH7AeaSeDUWQhQF5aHy1YbVmt53vDpZ4",
  "key10": "yetsZ8VuwmSDt7oqTGrcCoQ2q6WqLtTW92SQoHT1qw7jP46QHczHQt2crpqFN4qfbkeH7YZPCxbeeddLgRBD1h7",
  "key11": "2gebtrhr4dgNPj9X8kVFyBckUv78N3xAiMXNM9am44Bcp35Bijzt8S67toyJPJGFLKU4WvzEzS9RzgqHu6NdxiSP",
  "key12": "5wJ6fz7ay4TDjykRAfjmrKXRPUqnmWaZnHtnbifTBYy5bPMzAsbmhC8617kC9WKcvnNYvYxH3g3r6s9HhSpRuGFm",
  "key13": "xWSxT2GCNEpTwptmTMuDNEhYgb1AP4e1Vi93Tf14TKtXAAAn8ShLi2dzbC7QtoiX6quHsfWtrJGTfp5eVPvjTcf",
  "key14": "5ZBy2aX5EE2xQfqYW6viPKrbao5GHhHrLDXbp4wQim9CnRAuFYBu7ovE2tVWWm4S3iemvTZRcX8cJaphS7n6kDwX",
  "key15": "5Vuvn17WetoDCM9ghjRxqmFzfw9QhUtwVJpym9jGMtuUVEUnwUU94GqPZ1Ntz47TePuUpBSw9Dc85icCeD8Eof1j",
  "key16": "2QzZ6FcBasw5GAVo8y9LJAazA6D8okTwd828ArHDuNRrjfmkTvYxaFiqZkGbe46otD3hPNofyN6NJJj6aNwbjeEr",
  "key17": "rt12weWirdHdVwPuFeHirC3U73aKhLMWytry1VPzHnbBNWvewGjRbKLQjwEEHTEGZnYvtgHoTbh7PQtXJBZz8hk",
  "key18": "5rtZWV2kGcvckiF6a8yczJEFco8MgFTtUZfwTQsct7PUXvTM8a67GJMbQJByvkxuxCat2XLQx5sxeTXtNLFBddBv",
  "key19": "6AWi535aNs3bi5xaaGrNQUXzBVRhGfc26e76VzJsat4vVFp3dSctQ2XSwdTBCgJKszAMUeHBPw6GpY67nAG4gTX",
  "key20": "qbAL82r93vUUjYdETsx1dbHCnGnJPDgNW1VHn36jcoVgHkp1Y1GhMyEYw9dHvtnZ1CJH28BC3PqtRHRt7hAMjsB",
  "key21": "4rYr3kfkDnfeyKTZobMM17b35JcjN8sNekD9ML7dYS5rAbjn3S2TgfNoby3HcvCeZTDLEsHenWVWjYQ3Ue7QSP4",
  "key22": "c5DNer8E6qvFtbDHDrZ81JBvgEXk88Qc5GygwAx7dBCUu9q7f7bKc3DwJsMRRcpt2uDDV8b86aAP1yd6YuEzADz",
  "key23": "4RgdiLCMzRusHbQVG9TvmdbbDa13g9XeSpP2At3eukD9x35QBTcgekMEjNuqJxXRxGntWZpHYgpU9ESGJdBLoPBn",
  "key24": "4ZsKJBT9Qfp9e2YaBn1Xa41vkzUvE8WnqaoZDWsgQYDNXdFZxJjEnoUmo4MU4JF8htSwNoWyNZMmqCB9L2RwnRFr",
  "key25": "3aB8xZnpuZ1QqhtLKk5mpGX6s7X4UoASRnqbQFuD8Jb2abvQNmtuKtS4NVda6joxFkux34EX4Q7MVJizxVYZmqr8",
  "key26": "5zPrWMyGUHffwbGgrbaob5p4LCJXzyt7aHDS6TC9wqaPvpWzXzwZ1owwfM1W9D3JEWnnQp9hhJ8hMx9bMwZpExUF",
  "key27": "4ZbuNQrsZdPij2UYTvjcxQhgV7NpFG6PxPLCMNijbYxmznPJJMWsakPmVioGZnqofhoxFWSq8qa9bXxNiDwZeHxq",
  "key28": "zeWhDkfVZQh2KmpEWcCYF73XuenSrpvL4YE5K2pB6PPF4sUChgJtxq1cv9vaWy4XKmLtL664swXoVr6BAueDcre",
  "key29": "2iBfVWTQnbgaFRC3mFCqFWGgXS3taeicMJZxZwFAzMVkJpbFZqmnMF6aXkPY8i5DuuhqmYwLgDRa97d7oRgev4Ep",
  "key30": "4QzDxHVuHHDeWGkRve5xFTLgcJmv91Weo1zxeMw51sV8c9VGBGs2zUACVeMUVJuc5WsRKwMHAnpYzoRo4moTBbDc",
  "key31": "2FpviDzpL1NxAadtdcuuYL2WWqgXwBjUSBDr7Kofe1pJEb8DSSUkduj4WSFZv8D7742dFyDCUUt4RL3nhvYKNaMH",
  "key32": "5LhuLKbQy4RYycFtNKjiFBrHpupz37f4DTQ3R7ikP4MGMbbwibT8JHjHVL8xZmaehayEAnKY9kFTK6PCh6LMv4Vf",
  "key33": "24HqqpNFn5m4kDic46gFLy4KrxP9EH6fn4UYwd3sdjSGFR82cxG3PdJxvLda5HKE2eMw2Sa7AaWC2g1u78LJZVFc",
  "key34": "zA6yJHk1ANM5eD1PfQp6PjFsRE3kLjVP96AoSeo8dbJYVvE1YhDKGGFEdf2J46qX83MsXyicYPUFaNL4LGcCHhH",
  "key35": "4XUUshZrvpqECNpuQy9K4hkC3RvfpGye2gy9k4ibJD2mu63Yzp3oBNtJdKKMqnmvMAR8uZEjZaEXqx99h4H5GciG",
  "key36": "353UmUbnWADQbCLVn9L62eHsoTmt1j9faEG8uBrPmuxWTB4hdYnxewNYj5gZLLULuxHpUVpRe5kLXiJ8yA7oDDFn",
  "key37": "fxfHAwG2NiEhFzNxeXUcgaNXRMk9o7p9GiXhy2wyC8oTthJrMDFSEx5Zj2nxzim9PN22cdZ4FxS64Fj9vm98bYM",
  "key38": "55hDJB46v8bSZckACqBBjE36ciMftF9rAADd13QjSpxx8E7SiXNZKeVptAgjsybvx5YYzQC9B2wZVjy1KrN3mjtF",
  "key39": "eKihXZhyubeJQuHQn8gxzDfz4N7Xa2e88nRCFEwY2VMJ1QN7X8hDasRyzsztR5zEtMcc9nWkC8Hw9MZWjVrBZaZ",
  "key40": "5VGFfSQjZwix6Cnag2WpKq8LsdZNXebxfFegeGRRWEqAHKyz8dBPidLwodxRGMhmst6v85VBhHtLNnUwionVFzrM",
  "key41": "2EvDUdenqkQwmY4RPZjfQX9DZ5zZo7pMTJPXfk4AweqiczqDirzwoWZDFxnhE6aPEgYBAv4JPqEjdfqJV9NdAP41",
  "key42": "4xsfBZSXF3g67qEvQsVt9L74aeTeo4FPMUcjgBGvZAHQVJM3MD54Y4scM7S5eL88Ytvgg2mYGfgXZ2Dabrtt9TAX",
  "key43": "2ZKh2A7ngzjn21YTAirfLsMNQbre11ecRFBj3S4z7hwXeySSJBQ5RrcDUcmTsToDvhb7db3poTZ4GowZFwyekade",
  "key44": "62QBiiheTWc3N8SqkTq1HvF5bCiNHTCa2LBQydf8MRTWMELKZjGWBkNMP8FRMVr8LagtktmbuQfyqyqHrW2TxxDk",
  "key45": "3dcRaQkyJ9L2FUVk7wd7M4DrdfHNpCU1FRFAwhL9TYSbGvEQK1Nuqgk8GPUsgbWxJUeY6BdVtNTDhN9sMZkkusFs",
  "key46": "u3snwTkqbdSBcyg94tWyK8Ucc1i4H9MWeza7Gb2pEckkFMNAg9bGiDUFfMhFBJq3gK6q56nNt9HqkQ7FZVQcGFp",
  "key47": "5FnnuxweHxzENFa4Nmqgv2fx9WGpsTsszRzNBVwpmgzRjaEuKp1kXAxo1NZKGv2gR2Dv4etaTUDCuLtfPs98zYXd",
  "key48": "3BQhQUMsrCs8KEJCEedzU958rjpFcbDufT61XN742FPh1gF6QN6CcPsd6s3rEaamUsSJJ2zQJEcopQAPLisHekkN",
  "key49": "5XinwhRsahGJ3qhufrUtTnu2q6thC4a5Sr399b6fpRFra7WMbZLyo7cKitK6A2HP1PQxKjTe8MDHvwjwqj8bVbka"
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
