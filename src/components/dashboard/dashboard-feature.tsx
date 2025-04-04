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
    "5JUZ5Pkfn2Kpff6Nr74Y4WEc3pqF63n9mhYpKZZE3egK63wcVwZHrzEdAZTnze5qdZBEL2WCGNCsJCwoyymtKx2i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Uo4VNfdAr7Jk3nHU2RKse3zk9UdtM7GUnRir2PxFwNCxWNymMFQCvyv7Zzu1SksbgryoHnsYkQxT5GpcanV91ZX",
  "key1": "4dXzwN32D6cuQL2eA96G7Jqt67qsB9z6ziAEcgNr8Y7WJwwBui6XYTsV4mmzfCmXePwpx1SNWEn3tLS6Drd8YR69",
  "key2": "4J6YPpWq3ajgawyB4eYJta2WivpmiT22ywVjajWSxmQEmvUJfCARr73nEf2AJsmURnprAFSYDjgA7B4cXhNV1vWx",
  "key3": "2ZS4z9zh2AJGq414HgsDmDyssc339FgZibmGmitu3hYSvGeHWhVqHLd89Bg9YJXoevhpZckVBYdwFToLHKVJAqEa",
  "key4": "2cA31DqMjkiCZ2Jh3s5LgwyEo4NPfHSLk5KoEtRGiXwehkTz3PkCLSMsUAWNqSeMm7K945VA2DBbntUfQUR2HxNm",
  "key5": "3JZp1TKWB9Mcq4nmPDxJDNonYbwD5iCw8DoBqAWhbhiKFsbSTXYuRUpj8oZxC4aQD8yfBvS9TFdpsvgFZPme12CY",
  "key6": "c1Mmtt72j9qdHnixPBZHGVkGC7VQpo3jAiGiXRSKsbXm524gFH2C3A2pwKtrfMKkLubetov6eRtwjLcXKoxG5M9",
  "key7": "3SHZwUA2ML2a1Snq1tRi2pbEVFxL3o9hiuYpXCfJGt8hRHCPaevUuUHV7uykQKWGtwSVSaeTW6GYny5ruaE247aQ",
  "key8": "3Svbf46xynjnBfo4hs3ebJi5kphM7uu3a1JgrpeGsUUegerFo1izjqC9JAEd6QU5SxvC3rdX4rccXRHFuEsywWGV",
  "key9": "3Dy9fV8Zzq6cKYYJqqDcwJc4o1S7pqth4wmwGUB8nnTdrF3UmNKjffJtG412opNt5jVzi4aSeAp8ppznsh8H37QG",
  "key10": "2mPC8g1L8ARMb3Envz95SK3j8LvRAtuQcALu47YHM1hY3Y2GkGkYB6ZCdEMwY1zi4sPZyw4iFAwMqVGVryUxzQPA",
  "key11": "3QyQFCGwUQEtq8fapk4Fp31dg8WewyGMZ1xC6xbcT2RmbLtRDBkhVwDYdXJQjvCsRtcgAfMVoVNQyMCqowr3cdvL",
  "key12": "A5wzcKnZy1LW84ULx4kRg1wvWNFNpDUgnk136HX3Xd8YVbKax5mKioN3s3JDBNHHeKJ4W8ko2DPYKccqLGxppWk",
  "key13": "2ARfXYfgunJttmxMFwrf3gzKZonAtzBS4vL2j4swNXWdd2PFignXQmCoHm5HrF21TjyUfn3iTikQMtzcvp9XQCu8",
  "key14": "4VjTH1qvbAYnxziVNPT9kVgNer1kimuko1mZFoFwTXpWxo7R5zakUKNRWLYU1gHNFoxTSjHbZowTWgRebMoqNyUE",
  "key15": "4vXRD6fyCVxmCnMk64Zmp1jXQwBikDbYPwy1yMPdBV3AkhaSw89dcv2QgaNkM9Q9cW5ezprg6gLgHfF5nFVmvptn",
  "key16": "3ni1tc5CDKExmdbE96unwgCNLMsVP6eQWzgJsZEF7AqzBex3U8Yp6zaMzpwd3F3RDsK7abUhuwiegeFQPUCQQ35k",
  "key17": "2a3e556Bv6L9N85ktsnqDbmHP66kXscskYkja3f9FQubfvfxxMibj6nkGtupuBhFj5n79Hqn71vuMr3ZtDnuUGQY",
  "key18": "4Hy7QFr65VF6mgX3fHVom5euNYheoGEJGEVyKunXH2MfCbBQ1z3EjyZ4WheTsFTNcnVhDJqUGU8VquKmjgaoQhnw",
  "key19": "3HWe9NDn7Pn2eXX32yZ7ZA4zmnmvZtcQomXUZFGwiryBeoy6sBpGpJAyvR8LrpnyAAGdBoZg4smnK7G79FVkcY4z",
  "key20": "576Ba6yRyc5K3FXsEjv6SHXHshooUoojLfwEkGHdT9ehLpoFHBjwwfioCyxSbEdiC6Q4yG972eX9DvRjW4x9zukD",
  "key21": "5w8KYyW2qxkvcbrrz7Hn8BmRtjj7YFLNaQrJCpprTCG1FixeVKNjp29AkYgx8rpCsRpwXLq5AYXrdNdRKrk7uHdS",
  "key22": "5MyWVECfnUH2XYwx5Ub5tdqrWPanpo5yRqcUzj8cWpAjVW2fxrewd7BqmQqC94isbeuSiSvubBEmEBRVyyFfByXj",
  "key23": "61RtuAtAs42DiCgobjmvNBwF7MbXwrHpFJfKghTdCAATZtL6QLycf9g1pGmsQuiAR3278qmA83jZyiumH8Bb1UmS",
  "key24": "4TrmoPerCPHVNUo1mqdeMYqNF1YFyRvQJAjVDhWUzTeYsaM9rx6QWF6e8GdxTsnHow6ChDpgt8epHBtH8ep1Spbd",
  "key25": "5wtfMJUudTbcNdT3NozSXo4cypCSb8g8ieMdA6YFUc6Y5Kqvp6fyVEAn1Uyz1WnBVC8QcVV7gP4ciYoUymBBWQem",
  "key26": "2QY23gifXXt1ewHrC2eqU1bJ25v9kRMxR49XhZQCFF5ymXmQoPjkmM81fgH7SMmqfiDLprz86zZa7gwSKTAFSsJE",
  "key27": "63KcPnfuiPmwgaonCQMG6B9UeoFGWJ2LdhqHFU7YicbWB8d6aqpT4i6ZizUPw6KFKWYFT8e3LGULoQLrKHghGiS1",
  "key28": "3fAUkRKz4TMfQHhRmcdzRkYMYBdyZF2Wd5QGQTFncbzBRAhfuWQai5NATFiaJxg25NQLJ9rdAxN9MjCBdDSE4hvd",
  "key29": "5woYdMVQS6mamdyUYfxsjp3R6Y1Udf6kQzYmzRFjhZ9xykojPMaRztWxF4N2FKkkHgKAZK5uUvhPEL4hPumunq53",
  "key30": "3wEMxWDCZ2RveyXVPwvNi1K7vqNTysXsZDJ63CZjitBYYWFJ9W4QDXt9JfM9DNjPqYnsdDe1JTmC7tjeiUc7KBRa",
  "key31": "35bn3HqyX2Q1btMvwU6kbn4Zr5GhWgEdmEmrTCy9e2BFdkX9nRUpgh4912kzhN2Q3SociZ4M6mGSVncaT63ZS4jZ",
  "key32": "2qmwZGWhUtfZEmouRhjBX9PUAmGabWaGi7HFeuYmku8mp8a7XUM1KC5aTwABacaFx96vgMPR8CdeSXqbsaktRAAS",
  "key33": "MY1ygk6jimswvABuA5k7SQnSUxSyuabE3hJ8jCcLMjF91bWeJhLWxuzPNEmJG2fWyC71x9EXTb2vcFFQp5GVFY4",
  "key34": "37mndwQ6Vi9X1phjQVaWk5XUfvaEzRJgnKJUHC2unKtfshvjSoaNMrxAAcUe1fkXneS3UorYDqYrGvY7LsRLVaXg",
  "key35": "34U21brs4vWkjfUdBfYAJ8uWfxEVxJrM6EXTTQpNwD944Z72YtUbSXt16CBAnGrPYJDoLowXWscfaHFjMEwByUpe",
  "key36": "32Q7xaoYgypFEHHGUPvJ7p15gNLug8VEG4URt6oNW2Zr3aR9T2hnDWYSGiUYWoz1s3MsczCH9MRc8FCRaFeups74",
  "key37": "66BuMqhysHZWUjdsisT9tGX8ssa44mzrRu7J9hFZiRrFYpGLJfsYtRjdvEV5ERDrDJwEHyfoskj5TCqHSpW3d7GH",
  "key38": "5FZsiFHwa2mGkERnGwCyut6BUPw72QqwNy4ffN8sgaeB9WJk2MnK616yP8MYbboCccaShmErMyW5kCMHtKUFaCcK",
  "key39": "48fVJDDY4wtZx1g3EXGBChWF3V2Sbqj9QwVQyvrz8qVK6YSfgNKgvNLr49wKe7cE8QaytaDvG16WhCLTgq98M5uR",
  "key40": "2NBAVgko5iaHiqNfm3NRHRW1bEacmiasyCidMPowFvwDwKvqMZH9zEjGwhD15oBzG1CdTCU2VAjQA1LuZ7RmuaoT",
  "key41": "Romgd5LjuFpYm7Vg1XpuTTDnBcgaGSRAxtxGTKz4u8nW1uY4W83XjJ2TWgRmTSbUR3NkQX7LQeGKK6QxVM8bhzv",
  "key42": "2u8MFJfCX2nr9eAZX7jjisvYVJpo9KJrfa3pBn5joyru8notjPhoW65QjaYt7bfpAdsNsya5tZySHmGkBQdhThCe"
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
