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
    "5gieJbojm8bP3A84n5bdse6NUkaV9aDbHBMaiHQWebwWVmvsjQ74qS3cTPkzH2pnfbNecik5rq2yyYWsbyj86PdE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56Pw4oky2j6xYXKbh9SXpD5njyMhsuA4f9Z8mxCQqEmmbaTdVSGSGmf65xTVZSTHTRaE84HCxcPVqrzUx4zGdP4P",
  "key1": "27RUm8oLcftTMH3r9nivacHihSByXXf6dtPryxs58edBcxUQkZXbUKuGyUm4FAAvjWmBzcrj2WevcYtaHRyRVXYa",
  "key2": "2o2ZYBfAd2P4D4tgq5fmc7E5AxN8wQPzvG1s6185f7MkdNbwzU9JXgjSxyZncccMyz82Dm4NPHvCai9G61BbB81U",
  "key3": "3p6t6mb8ywweH13mypkRwnYqGo8ezBC3Jb8rmN3Aj9e1ZQNwtCT8ZSoVpu6CeiT4vSxMNSRWEJzgoGViiiRVFUic",
  "key4": "4MtWA9uaAzicSqQdZ6j8Hby5fAKSMiCn12QiAaDgBRkTPmQ695GTNGuyg9tRJVdLYcFPcPH2iPXQQwSkWLodCeet",
  "key5": "5DttAR3cNmrJ2hZvziUQAy8j2aTjJHvyZn6iNEipcAtL2joM6wfeTkdrH7VFjayPDAriM1Qk8SjhanfLPy4xuNHa",
  "key6": "3uBWKSJor8FW4S6kLvAAbnmbBTgUXCawrZG5NcN3mhC5uEn1fywPFbeqhhxbAWF2tZxUL79Nj95jZDrtPjYJ4uno",
  "key7": "57JCEv3WBqm4jFV7USxM3NefGx9ZoW2UpDv3iY8AKxcvRdc1Zb14Nw4W8Qbs13sZCLPahLnJcjhfi16Qs75Cyi3Q",
  "key8": "8buVu1DLvbYKtNTpoemVqamr6BLcBbEPX9gM12bi6kPMVSznq3utdWPCPDgvzKCuvtbwPscaKEmJjmhMztf8orF",
  "key9": "5ZaWWoFHrMHGxgFEuo1ewpf3oba4PaigC52VxgSwRPM5BRX4EtiisbLYHaKDnYkqCYDhyCvnz4xdfjVphfP7WiQW",
  "key10": "3NihpDwaPiUty1FXAiq5kaJ4PaVrwbhYuPukYd72D6pvTheKX3K75ujaKfSHUU1ZxccGtxYpKMFETinWYa8gMCR8",
  "key11": "5pqkiUXJfd6MuQ2xBLXJP6MaktNFPKrupr9u97YrJM2h16cpyz5rtBQkHRCeeUsyMDGdpstdZu1X6b8TQsymVwQ6",
  "key12": "51wLeetD3NGbPt9khr1hnqwCd4cPxsv13BWEAgpm46L1zTuGtW8uRm6mgtubww9UbpUgW6ZvFdvFk2T45sv9bAzF",
  "key13": "31MDkmdrx5rpHQSYQusPjcJWAYeWdCDn2kgdq58q4YL5ZPVEBcsV51k5d9jQYzHRwrVfj5DYxiWuS4W9LwBKnAy9",
  "key14": "58EW3H6sT2f6MotJ8gtVsLRXH61W45i2VxJQpTTuwi1HFFWwxUvw4ERsxmEMzg8eyRtxcu33i47pxkD281dy2H2i",
  "key15": "YC44fMUExYG4FHVXQ3M44KxazPtyDVwxWTgFJaqc7qqrK2vuHRWwcvibYowXd2m73ctcKA79hBYDKRWoK4cSvHE",
  "key16": "3fqevxoB7ywAyBPCY6VC1Hg3jR4cMcV1eCsfbYEXmbEVtBqY1fFPdZ3C42Ns1iekJywTRj2nnmP99B3P6tVubWPv",
  "key17": "fq5kszpqBZreBmPWn72DyG82wFgJ9YMjiQe3w9v9Bmfk1YxYEjzwpnjv7vNmnZuwamt6REm9LU1LmdQkz8SfNFe",
  "key18": "62t6DfU5iURNiEfMTSmGHQSKQDJsNfbwo4zrhRs6Z6aMShBjwsixD3mL5BmDsKrxjQJpXeTsK5qcPqHHr2WpBJny",
  "key19": "4tVPutuWJGqwnijevVCBUgD8FNnuMoHeGKXfCzysHyWZ34CkC5tAMg9rbbuvCA9MatZEG4jeqWB2vTMG6jEh5jKw",
  "key20": "4oo5uhXrPNZCyYJ9ft9uE5Sd4WR95i74TNsmAF6NvRM1s1X6N8D35k3q9qQsWyh9RNg48LnJEn612yc387QW6Ygy",
  "key21": "43aBDxDCsiXznnuJSCpMwpYZ255CeD8MK8qTgExTPbK1yBxFiRPtYjgqP2FJPadMi6UWQNNHegVLSuHuHH6ja8ji",
  "key22": "2UwkTZ5NAhbG1tfVaUuxEfZTRWGerG75XNFeJJfjC18zhTeZjYGcfhKqdec8494NTtjfTETMemUTdGjtJFEVpHkp",
  "key23": "2wpKcrH6fmdtM66YDnbj2AsRtGfnLJWowRBCH53u6pQXytk5Ge1FknvAd4xdyXQteNKRU9dXmeRZgfVTq1o4J4qi",
  "key24": "52YFUEJJpbh2Q43Bna4mwMBmt8V87zjJwbKdE2fAumpvZD2JAdXQ6grqsGG3X1j26tHP2GSDzd8iHGqHkEFUSunu",
  "key25": "2Qpu8WBYHrVdrZ5oDAAneFNunk2iAffHhFD54a2XZYSnTpvHM37mxSg32z7FKBhpHGHU8z8iX6SMSKzohr5ebsWn",
  "key26": "CxseiGzzd2doq7Lb2FerbCVmhHowZK3gDtLS3wHmdJUvcWg5gRr82kMn2FccJq7wHLCPMT38yMwf2jzmMa57rHM",
  "key27": "3dVYPJPJ5rciDGewL8yddv3jC8Q9315df4TAYvLujs9WNQXpUpbcC1B2tbvqQ4a4Zx79eCL5EwyXEsyAeYdVVgGq",
  "key28": "4NL5tiMgXMd4R7SZVHfxz3n9y6B2XfoerJiQESx2aUttQo5jjuyQf7tw9ZSM4gKVuAMN4Sx5ouoMcKocx8fQfzhn",
  "key29": "3ojK9jpwAY5rq1BiwZq6DxmMNyCMsKRdW6G9Ktc5vvyuzHNuMVnSC8XuY2yHf3N8DfZCWdnhzwSEYYTFrWRh5HZ4",
  "key30": "2KBrCQz6fR9dKsr2ejSL4zzpPk5vgfxdwYA6pwdhfZacSsypkhsYGvVmX8THGN6TwnicQaEjgZDTSCYbHnuw7LUW",
  "key31": "4ChTTf2WGKoE8TyFR7i7GqNoHZGJqo8b2RNCdxyvgLMELoW4QUNp92bZicn1d2pgRDwjKeY9RimyYXenwdQqfhNk",
  "key32": "2UphQBv4ev5QzBVRekpXYznrceA9KoekeB1cquJpU1rJmSnpv8mn2pmYnXVRwJ9jtnBJ6tEYukMTRwJuicG5T2Wg",
  "key33": "4c2XK5QvsW4qi2T2Z1XH7438AibiENV2jeu6xtGUJ1qx7c9dnjQUy1G5q63DHiNvYjkAESTeQpUwSkh9GmWHFwmg",
  "key34": "wkAusKKs2UYb2F7ZqQRCrcWaHvCZrxQZamYmiqBy31h3V7uHDVp3XsYAZ1gjoMZ9Za1trV6wwVhsKh3oEjHCdAr",
  "key35": "3MyDNkrB6F2FKpT9mD6jYqLZvRRQcVD7f3bJjMjyS6NihaEsrZRjvZjhkwv12fKUvjkFCYUVUUWMzfWAYiSRe3TC",
  "key36": "bGQwh8Q3JgrS1yPBmk5FkToUUHmzS4JUF6vvomNAPUGcsDyJQEi3SQVtr5YGhRPynT8NwMHz64YYTeA8F5yQh38",
  "key37": "4tKfWZjjn8iTC72hAd1XsMng2ToL3MZS44F4hVWQtoNRkxMzbj4bv9fjX53e3r68bgzB3CCBqPwddxfa8bc7VJSa",
  "key38": "4fFdaaSKZ45dDxmLJWiANJuFyFEQ3yTJXYz4yMyrSkFHR6c4pn3WWs8c5pL1prbc38r87mkaPwbiugQHa2YEbHUV",
  "key39": "3bTZCUMXJNeMxpa3PZf5yrQvT2UAhCns5WSuC1aWfn8Twybq5U77ZrD5GGT9VbW7RxeqCCusWvvzKFAGjncf4GwW",
  "key40": "56YWRJJHu645pPSeK3Gg9yPAqqKGaVrkSuh9ddJQi9dB7txDPpZ5mSCDF71G9Vw6hLC1k6rBhTAqB7DZ5sg75azD",
  "key41": "4SdBhtAcnKyGE1QVBcFwLBbEfZ4NmEEpYVGugL3sEWquoT6gG97pJBuT36bBJs3GtDHaMoFFhxhqvHThXeKyz7Gd"
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
