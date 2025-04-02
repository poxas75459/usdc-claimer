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
    "5LRYBLK1j7rJruCF32D4Gyn1iL13ioZqzWiXcYpAKhRNB5aNGssfJjBcUffArvLajuYAksPM8y2v69WRNYyHbGLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YiMhAM2D2GnEL3GbsfQucD7K3ERTAE1HXWd19TgnmmLKnNYTGpSwapmSXYPhJqWTYfhXJizdjLjbzX1twVVZXrL",
  "key1": "5dUqPixbXsFfda8FZT3YKwZvnFix4XLf5yKEr6CHmUNc2VjZLj1AXayJsjezXLSd5f6VuwaG5GxvhzoBDbiyJEts",
  "key2": "2fopw8ZdJ5K2GHe7ojp4cdLjoq7qWrDTZ9M8yMDYdaVr8XBh7NRGd3BRJteEUb7B2fmW5j9b2fky14wWNGHnBY6n",
  "key3": "xH3oK7uVbhEqXFZyKFQhZJBtCwu4fQ7Q1eoJyPWg739tLah2JmMscs28EvgBwFugt3rzaLGhfuxiSCbtrCWWQQx",
  "key4": "5xNaW3GANXbZX8AbbYMT1EsH7cALJrhHq8PGqHAFXeRv3uJgdcd7p2tvYiUD1r25fRgFDCCw8ezi44BHoDdrChhd",
  "key5": "3JBhtGuEweqVDNMJDMGJSVJeruf6Jqfr19gxa7R27xcPzEzizrbniH5baBNNQNvQAiU8EavwaxwmDYizpYWA5Fkd",
  "key6": "2WqkfwMC77Usv3t9Hy2UoxaT3S8WZpW9twgzi6hEUXmLewfobBMFh2CXta2SEPgByzcFBJUbT2PcVcjA8aErJFQv",
  "key7": "2LX3t2LqcgTH1bJDV3CsAdpNZ5BEHUQKu8hhwiMm2HxTc5mdu36qPJWUDLT1FRBaSVpefUkB5d4h5NHkjZpL4snq",
  "key8": "328RyWkepRYqukryQ2F841MWLNCQJSLKMWPEsAFdELMoo6J9j6rFUJjovJevrjrbdj7pUd9oGcAhgu69ijWZDWh9",
  "key9": "2bJAfhBeiR6aWrehERC4ywbmX5Gh1FtQVmYisxEH76aPWH9CnJmm1BqJC1h5oK9VT5CfsooKsqXBLHhF2KgWTVxC",
  "key10": "4ns67Wp4QTTMv4y3zxCNj2Xxnm9Zd4DD4aNJD7S3sxoBuXjm3xLpjQ9gPakV9tvTKVsLwRmTupRcNH4FWCYSSnVY",
  "key11": "5pMed2Jyw1EhLVvoLjzzjSPR16xCVGKhhNZvXy5JiC7m3vhMwj6sC9BUfBAAGEnqLJkTf7eXghpUjFRxLeNV1Ho8",
  "key12": "5D1AzmPUFGSfbM8MNnH4jPeDpm6DGP4ABarBshVQKugTh2ZgLo4qtDERnAC1HCyqbsBoGRjaQonRMHEFHtZ6wTyn",
  "key13": "4AjBPqUCs5DpAczCUqZN8ZKjH7s85FBaBFihPwTTwR5M3rNjENsAHYDETE1gRUEw836ow9qk6dKthf1krQ3CCwAP",
  "key14": "2RhV1cQxwcFyWe5665x5aShywx4NtbBcQMLjb2uRqUZAAnhsycPftSshfhV7c9fQFgk5PPZHaCKhn2Cy9eYZKsZr",
  "key15": "2wSmYqv9GkDE3DZZG8sL5qQg2VWeajdShdHawDqHxSKXoFzGmGwQFy3NosxuyvVJJan2pND9ti4rVzDYpMY7W7Ay",
  "key16": "4f4B99hYrAkcoGtMScpT5bk7RMcDeQgV9uS4DbF1oEW5JKqjcXBcLKCitszaAkmkzcZ5ZA9aV1ApHJsAgZDqrWHW",
  "key17": "5vV8o7yaFMTebsMZL5Q4W26khfftM42F7zBdJMRk1FkcniBMjAaSbQfh9ZQRYSHjZQWyPB4abT9f9j8qNqpTnJKQ",
  "key18": "5Lg6F9bvmqp3PbYNwP6kCEw5p3wLzpqFRzwjV42EBBfbGkeeahyztfSA1RZHU4sZN3HpRQ6gSMdepQa6dHwDRp7L",
  "key19": "2URz3DiWLzHPzgTcjkksLCXEvwhQmNCNvn59J2vwC4NFyeBReWon91H5mpJ66DjqJGTEviRi6Tjkeq2GWTxbBpef",
  "key20": "GpwaW5vpxcfy4u6swi4XN7XhnykwAdoBbNayEYyboMPruqSmXRuabLogfkj6mK6QRJsAyg1VA6a2gQwgCMgkS5a",
  "key21": "39wW5k2QecNR4hGQfdNtgS7f2EkfVYeV55b7DfLT5JJuYbdzYDsPy8kCLCjKcMkrwWaS5kEHadccHMWbgoBUvciG",
  "key22": "5AG3wjpXay3q6MkaLSrfuozKQ6FfWujBd6nvtfbUXB3W7BpJ4Q2WLgRAkB8fg338Ma8gZs5LoShAb1CqkxqqgGiB",
  "key23": "2EjKKgyJpJKXcDfRGvMVgFztwjvArfLDFPngcFaeqsvA88FnveKUVQ9P8tqSSG8d5YrTZn5P2teJmSqdJFWvj3u4",
  "key24": "4U9rsL6Prj8jBMg2kfvoLPh3sPHHsAFPt6yo6i2UsRCXg2ZP7sW2c7xkQDJDj44J2hQFSySpvZ8Qg2BE8UcCHZvW",
  "key25": "S4bJpg3KBVeweCsRZeHtUrF5qEpuSTvD8onSkduGhNRvQQb12H5fYLKx4jMRoSykmQTQTDyNfw9N8KWbkN5ndR9",
  "key26": "5czDhRwYHpBAjsYysh2LJfzXiPGvAxJdJZpMGWus5iM6FBqU9YsVFadEa9rvmj5mxaFhfRhFiUvAm3PtDeV1Hask",
  "key27": "3NKYMSV7WFymB9ronE17fFdVV451uo8mcBkAwNbPpierUgLTojebmcnW44qzN4BPXS6k8H5o8qa9s4hfNRVTkCr6",
  "key28": "5b26QUpXE2inBLXuTjfG7e6yhGyhdJ3wu5RiEZPQua6wUtkWB3wxCDWxAokCdJviBQ1Cy6hM2g6UKnnjzR7ebMA",
  "key29": "2G6wwaw2UKmaaKFxu9xnsioZEUsBptCuPVvMdJkzkLbzodDkUZkq6t5CpJcFhuSwVvzhpe59KydG5XtfhXeN2wWE",
  "key30": "2TsmG3MvsTiaYcQcoWrY8Mp2nViU585GGon3A4p4XERbiAAJqY8pJQKxakj5uXeb9V3HLiHFyMHFS6L4dqcwpbeZ",
  "key31": "4qB8ArrAQpq9XvJsBWJ3g3dWWQ7p7hRWA7TDYocoTKM8bJL687sd4TJeB6w9rThtKwy822SWNLq9cDGZMhrQrMr6",
  "key32": "2MHBpzo4xWPLSLG52ZQVYATYu7oDRREE9M86Z3GmeCzWYaSYjgTLpk411UoQTMt5y86USBxcZWmetRgcaJroeWEG",
  "key33": "VRrsduQcYJcvVwPezb2P2rp5y8V2hL7aTUgrnNSHXrqq8FSP9EAvjhKeBCEgMG414VEF9HHNqsQx5vW6BVtRxmp",
  "key34": "24GZUeV6Tn7u86a1FVKzVuLbaApp93VAuV3MaWGYkuWQzaw2TRM3VpMSVM35Y9NvFJrajsJ5r1R33hdUJXnC2LXS",
  "key35": "3PLm5VRfxT5qsz3JUV8zvD2e3v8Ub8ijdLyreVXcBvvmqJCGHjqGBEP9cjUs7nGHHXyzk5rMbyn1WaEsx8jxF8cV",
  "key36": "2dJivPpruUbTRM3ESSR4CS8qqsLn8weKfTjoftTqqzXp24sExaLvCRTuVpT8dWyCvo2thcLotNbhjx7sU1pCTAgS",
  "key37": "4iKa8HqFb1a1GhVVEN1V6sstaQ3JhyjHAnavBjFuefizfTYdDsygztWM72ZvLTmwaptos8XpxV4dHCC1K3ji2ARj"
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
