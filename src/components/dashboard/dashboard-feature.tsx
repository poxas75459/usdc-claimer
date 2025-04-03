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
    "2aTVtU684ReCHgYnv32q7xYpkRnvJyPoBcrkAWR6Grm1cHLbDtMcn8sMRGLDEvDuqbcPx2SDsBmFG71NKqKvdSrH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ueJ8euWdp338WgS1LvpJQdSAfJDrxD2At59RbP9tWFMnMBsB6grnCia6Rhvxo8bv68Q1A4ykz1XYKgZaC1sGJSc",
  "key1": "21ne4DYqUFLsJG97msZrm3REsybpPaJG5yVuXnAWPi5nbSEzhzquy8BjSTtD4n6mhMGYN1M2zbWkUgboq63o3gwN",
  "key2": "5AoKx9ARk3cw8T2CXmQcH7oJtFcRNsVHHAa1FMeoY6yEdrct8VkB5AUFKYBwYDdfY4eXUofguGrLYNk3xNM4bvg2",
  "key3": "62bRohsNy6Bd13NS1U4GDLbjmPjY6bFtqGouRBZpA1FSvy9hWmxpw1euqDVTJbi2gA2nMLtJkpgRvd51HQ7N5JAy",
  "key4": "2urad3ba3ihgGREcSMyM4oiFGnsn9UsoJzSZNoqjwh6NEQv3xfQWbmiFktYqzbvdVBqkBqTtxEUZ6hKp2ffNVix4",
  "key5": "36k4YJsdBJG9LptbGBtCoMPo2xKX8bW8afZTFAzLBCafW1ou9MACKjngG1GWqo9EqE7wREoMjSQkySPU6m5gquHe",
  "key6": "1zTKGNan8aff1RioRmWbV3Fav2i21wYCPhasAdEZq1RrxzwTy67BR8e3tJp1FqmdWGkaEY6TEXboz3qfnLE9XAG",
  "key7": "B5JvEoB6CAXCFkaUF62b6jU9TFQ1Qro1qNsMgy53f8zS5JcnvvFqWGWPiYTq1GreuLdq1DoXQTwb6X5HFdbt3ce",
  "key8": "hMDjxCWV3i8DeYvuxczvvAXXiRR6wGS1q9b1S15RtT6WgswjwpX9YmQgWtMPSPNDFaV6S8p3VpPE2zyfunSQVRp",
  "key9": "3vV6vv97NYLruC4QgYYpNmP6Q9CVZfKSMJn6wytW7JvPXVLtCiZgQqKfoojf9yuNdQBFVCaQeyxVLrGUSHRCrqfb",
  "key10": "43YANQc7B1ac2LokjpYrxvyMNKgJaKvqs7d1ihJburaFsdVhiaVrabY4z8EeC49D3KKtS7oJsJ1mZd5kouCRDKW1",
  "key11": "3eqn9Lj3Ts8rVGHvpWLEFTYUMzmoQAZFnAUMgd5QeLRoCbUnGgLvicnP1jJUt6QgbhpjgdyaxGVLwe1fju7hVtmz",
  "key12": "4GKNz2KxCcd1JKWy6EbXAgTociAu6fga5665T3jhZqddVWeU4yUSpE35RskN2umvPA27JVKbwvv3cQpRg4rpYmP4",
  "key13": "ZFScRVQDt33VBbVXisLtW7W1ZAxomnTbeHsorsEk7tk3Gaf3uGyEtYvoMiL4tbh8KK9bbZKDTMCs9g5mQTvAsa8",
  "key14": "2NDMjwqdpWTBUNUVnpnmurt7tutfpopEbmwFcyJwmGBiP9EyDLPzyd7hRVwDdU1oBob5qJ9KGgH6hCN1vMED7i8e",
  "key15": "3T2roWAhYGwYt7RET2ExFiWRjZF1EFL1CQ8gDZkDbu4wREhXf42bSJR3r89EfyQTiHLzrPRQbyVSyv4z5sYjZ4pJ",
  "key16": "4JGXJ91EZu4hdVoGpkuwR1jfeXK1i2y9o8qZg48Zr7fdGse16bqWxnhSZcvDZZzLu3vNiBFADrY8KNWT5pJjBUxy",
  "key17": "4QmRKvAyoyMn5Nt4jLzo7hxKsgRUXLRgiTsjnVGhR2zWeeDQV7iUCyism3X2eANWipvrWiBiCHet856jfXMNDiRG",
  "key18": "4EVbRpBwh3EY55pbBhVKyyJBVjioX3kFLD8rLFfPfyN77JXKAu43ALSZuqgfu24BPtPkn5fXGfeCHeDPq3LgqwCF",
  "key19": "4i2dG5sFTQHdKBcfJBxXZasWR5wdRp2q3pMpcajkfLWUBqJUEWjuBz9QYamsDBuxXs3hafc6GYNxVkNfTtctPrtz",
  "key20": "2vAHoaJMVn8SaAmNrjNMungTntYpZjFkDbgBSs1WEuw2DRHxETJa1ZUzvkLTdYdGhwve61Hq6RQM4U3ZxxJY8JtZ",
  "key21": "5dk8FWDPL1JpWLpKBtiGNUMgn1Z6V16xYgNHSSoDXw4xiH5UnJe9jydUkVAaSXZvPivq7D7yFRsyesqpNs2354Gz",
  "key22": "3AzrTG6mdrTQNJNgsRNSRTfjcoAQGaL9KtS3ULoFb9mytG7WCPjXrGeeDas6Tvtgx4Prnwj7YoQs9Sx7yUWQwXxE",
  "key23": "2njAP3s1ib3d8kGjh4UTXkp2UbXtX1J6FTjvTPYHg1o9YQkAf4sLoZ4sxiiBUErBvfqWmYjAsrGptYL9QAgQrtHh",
  "key24": "2vT8poKWewQiexiCKeenfPGLnFwjrbMF32914yn747KJT3gyGKQ1qTxqDeThsNdcZaNhTa9JnT51B4UM3nkUzkMK",
  "key25": "5eaLFZfMh5ZgNt3xwc1R1M9MC1XZXQxW29YKsHSsaVpmQbRQREG2zhfQwrbkoKpAwxsFBHb2hcHVAzcm59Ky48fc",
  "key26": "aK6PwrCx3iNt5hrNinPwKC8i1SeY6X3xtnE9ZmUrK1QMepMySXwtLEpGoBVvcMat1qyZPPEVqLBvZxF3yNXzf2S",
  "key27": "22QBqKxUW6rjRxZpJ73ybB7mbydPFX1AsucREdmgthfxmaLGntzm6dZQKmDbQVqabvbx9AgPCisoasrmenUQESUL",
  "key28": "4repjUMSqtimUAub8L8oQDMZEhPrRPSrpgXWj4PFV2wYeqzrtm7VJZw6oGWTfFzt6qrSviRMh3QvJGdpiKWgTHfk",
  "key29": "2R4CERZDemTW9BYJ6Fb3xJS27ao8taiEbBKhThweVZe1C8W6B8aAzvF7j7RuL4AV7bPpwowLCL92DM3KdJqTumnC",
  "key30": "5ecYA7tjte3iQBZ7vSUsSGzXFBnjDfm1VTrDxvNDwywvBLFxTjYm8RGsJwCvSiACfTvqsX2xiJN12MZaitr3NrHW",
  "key31": "z1C1KGu9BXZuu98Ahv5q9djx3HEK5Npqsu4u8s28TkTERoES3xNmz4QAS7NffM3dQbSwbumfrn1MbXzQ2fZJLw3",
  "key32": "CHu6mhfCByv4xABXNTQy7ALhakvTZckff7J7W38RrBrRxR6myuw19CmXCtBiKAg9JGJ45EbL6T7M8zz7vVGBjK2",
  "key33": "we2AhqciJj7nfxecCAFRCDSASiLjRnAyJB8vPgVQzbqbyk2zpu6yNTFV1Qr7urMogBon3vzCryomV9EUunh3jUC",
  "key34": "4CbnZ2x9G39Jz9UsZtrR4EFvWyoBGhTXiK6ZRSXaaLz3vd1V7tNFdfGCYDrKt8qGMuXuVC16q54X3G9fjTkZpWjX",
  "key35": "4DGg6Muh3D3fvGqpJjVTNMap9hjUZ6jkzXXziJrv1hsXgCcrS6ieEXmt6z8uDsaGk1oq3Eo2MfzzMJmFZMUXqBhY",
  "key36": "3npvGmsacpFPSdvxnkqLax2vypzsyKvdLoNjQMZrKPLCtdWPGJzVBkCEMiMLdahaB153Y7hhtS9u633YdWNMnhaw",
  "key37": "4LvJctmRSyZWATvkGtABpJxPQ6LRPsEwAd9hbp5NF6YEQ38Kzmeu2e7eLaM6pgrM5HirTTWsGS1ngYaS44emqEbg"
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
