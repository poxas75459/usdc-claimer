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
    "mx1aFUAZTfLNNZ1ssG1nEUaPWPLYdA4GhdYb3pL5owzH8sZMkZqqu9YfpWprabPDxuaWdALXv5wsYd6Se7q3zQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V4hWWenWtnYpMc9zP4u2anufCUJcEjQGTkNEdmpajqmRgoS35PQA1DVTbxrQAtLh45vKsWVjCNYbE4YGb5UTLJb",
  "key1": "n7aBijCw4Ah2VSpuYQMGiiSNQRGLj9nibxyUzgT2QaHbU3BAwfCvCEMTay6cJ9pnoajQoHyC6NGzUEqBH7aYkek",
  "key2": "Tic68huSNhip82zPmMEnz2SvsPVkxHN9ypY9wjBW8awmWDTcZpK286gXpe8PQEinCXqseDo2sVXtU543euYpnhN",
  "key3": "2P9STVVnxBW2ecjEdfSsdw5Py1DiLazdQWA1bu6RTCJfbAZVXvYrHGzCiqPXzENxMzSLeBzHE9rBgtrQFCJ5ZnRM",
  "key4": "4bJYzq9Xysw8w3HxfFkYkfMasLktNTgDjLEkQyHFZhB134V3gwoTw38ybM5Uok7pXDbh9HomMn5AZe59aadkqMoN",
  "key5": "3dUJA8aR1911mvAoA8yprypS2gsizpMqeRkJRVsrGSuwcpW1ab4yXfEW7Ki38Aniq1JL4yVWVgjktWwUPqH4Fby6",
  "key6": "5Awg2ew89YPMmDoiJjjCD2enDF5j3VAax7JtAAtoTPL9TYjuk1CyanUyoVgYRGmPMG3rsPSqXECpuv6yVFK8RxRc",
  "key7": "3Mk12bVpnrmdGuEh8UT4xy8x9EyJwujPau5pKD6vaBqVk8qj7PXEBn6Hs68FWsaYCU82NB7oSQXZWPBw5wgPKCZa",
  "key8": "4J1zjJx5gVFyhLfmEVomveD8L7ukgkMht8L91h6KHVdTDZEtig26cS5rr4bxJvvifE5EuS6JNFiDn4Rb8ucjiRdD",
  "key9": "4jBqmj1vT8vez4XkFACTpsKDqTxTLgFs6hzYcUeBvXqpJyKS8TMNrRKT73ToHaRbEVkfbXbCfy2AJV3ds7fVQhXL",
  "key10": "2YjezXkSTuuqfdvahvuXRr9SwHbmfVC7LeojGVZHxWH98iHPucvS1EUzYXi263ie9veVuSoabyrod5rkWwNXwX1F",
  "key11": "3ffRM1znqfS3vJXbpZLkTEeUP8dTBte8m2AdxQegKsk9wkFrSXfgB2oDBS5yKmmgKnkvuJFqFLEyRzFScCG9puAC",
  "key12": "57GmRKNh541z4k4Dk7pZU2cSkZhwPhHHNr7xj3hQAtb5qypGTpRStXSmyLMXQaHAmvYjG2L1wbEPraLb8FXjjQ2X",
  "key13": "3Qf9pUfHboZMeqfBJ4vrszGqpAAm3HWNizk5rUxB5xVGGnMPrSzVa6inDetfzoUkGQbybaNCcew3ek9GbQFg31cW",
  "key14": "5shFSubYza2BNj5fgKXnuzgZFKxEHN82poYT15p6uefsYG1egzJ5V2WY4HTm4VVmpotzCgPXF18REeFj7sDgs1p7",
  "key15": "4cRDQc5Sf76kgwXZVxMFoujWkKKMth8dmLGXsikTWBb24mNeWftaMNoGx3VoE3XH5riwmC7LhjqDTwY3Qo3Bie5k",
  "key16": "2JzdWStLysAhabBf7CVh97dpVLUL6br6xQptPCNDvH3iVPkc5SuqYQxz4HjzNA7K52rXaCCrqyVhqoKG9toKKeWp",
  "key17": "317kCtvHkM3KYuPHQQ8ri3NQqkYzkuh8Ak4yoqkh8XdmviL93UrvR3bVdw3mNjSGJPzTzetnHVVNPiPQy7FVRMHT",
  "key18": "4STn7DpzwkCSsMZi7tpgbLYbfv4T7s5waPGDVUcqJKE89cRX6xnQt3aZmvGXbytgRCyFbS6NEPGfDFuQtjAj6YtA",
  "key19": "4GjZGETiGzQZWQo893sVS654me3AM97unuwSxzBzr9ixonVhKfgV6zPsMF1ckihrWLhj4paYWmmCvPwib9LUZv9K",
  "key20": "3NiBjRyUCpaywazyyWpq5BMYSvxg4iHj8XVzGBg414Yim8f3b3vP8YSUWTJQk15hmvFFEGmXkGmEvB9dK664ZzrK",
  "key21": "UZrJoempMewHcLDvycRBQcvaySzWBRVZFXZjqB1zJPfNvPcMbtdFPQLtNy3wBYpZ5vbcc51rMjG6gqyZU1Unmwm",
  "key22": "2konpoSNBGPa6e89sMJBenNCzDCQFNAZmg2WR8vkaqWfUpzM4LwMDdH7hHhUDrNHChRAmr3jKvMpkQPn68ACUVRS",
  "key23": "4vv27LYx4YH8iS5D14ookfQKk3N4gG5fgxD7kCA3hQUG223AXqr7uP12Mak4vYRMLtKy9zEMcoQuhEih6i5LEBMs",
  "key24": "4fhSZT5PkucNX5sDDt8fjvXe7p2HdpDNiCxK3Jc6uqtmhSzgzsnCf1LKADXLYBTVxn7zULNcXWZuUktVErHeH7r5",
  "key25": "4BKBuaEj45J1TMXetxn2UYpdadePBy6B16mcgEj7vyzziNDw9Jc8mcrJMHPVoeNE7oTAX6fEn5K29eRkEy8UrBts",
  "key26": "39c8dSdM4774vT8RdkZF4pdqHLPtA8joS5BBkz55RTnz3WeQ6KL4geGYzJyNT1xgmfEnvjZpqr5i2Ttm49QgHvwt",
  "key27": "sxkY8gd8WK4vShTHe31NX1cwqQPyw5eAGByVhZtsGzR8BzTfoHAGFYmCZkjBv41dQTBygbguDiz3oXbvdVwE9gg",
  "key28": "38oiKN81FYNUnkEbuwCxkG6j2cjX1EdzMgPBhAy1KCNRRjjP2DtoSJNGYpbjBJb9XUJjRASpswzpET69CtyCPqWC",
  "key29": "4LdnybgkAYvJQ8Rn1Rm7dbszx2xiQZbFNUnA677SrTKmzcSkDFP3DQApqSXZQ72Kx9Che6s2eLGVCQLJi3FMaR5r",
  "key30": "d28Gz4eZasPn2nVautytz4J9UEKRi53jAFxgfcBQ2PNKK3fVzKtoEwYZ8cBGamg27fdKFiofKGiScPKmtEGncno",
  "key31": "3UyVRLNcSNgFH4ggTQYSG4JQ7PYp2BeBctiN6NX7K3WV7UYWevM7Maws5u1kfhJMEFdDvFFnnj6C36SQwxeuB8po",
  "key32": "4TLQPM3pxEhZcsHkdn9dbRMuJxZ72KuQRXDEgRP5Qzpz99phbGxuMkm2pfWKwiP7ANhQ2eJ2AXxXqsekJg73JBfr",
  "key33": "4Kmuoup7u2WzKviDg5H7y8xvpSNiezLczP1NChst1yxYZ7DGeZWVm3tzZyVb5toscrEFc3RQSXKaga91jHNrfm9A",
  "key34": "fnKea9cMM9MYNgZRrsCT2GCSuX8fB51GwE5vyGhNhSNPLfbxDRougLm63DDhmocHj4AKids9oq3TzzLjmuw6oDT",
  "key35": "4qA3eQePzvCkTDEF7q7gisCiU6eKdQp5oMX92Hr81dDCY7KbXQAgn1casLpyyX4JK3MupEi51WxaiYkM3HijGxQ3",
  "key36": "4nid2BXsBUzcnWFrvXpSGPM9H4HQbaGTVQx9L6tsRbyDqe11FZuwuZQLkgpGhumPCfudR2YmudzWmfg1Yc1KmZ6k",
  "key37": "2dnLjRukmvzo9D2vg2pUURdmhfGTXoyyBpptrph9FY7vaZ4JVXznayrNhyEvFkCuFpA2fkn8z1qakHYwtkqRjRCW",
  "key38": "fSxVYpbVcQDHcVnqJNp8JvfTARoSeULfFYRPMEFtbw7omqR4GoyQFrZUZSHdmXAck52EbSSgV8WdKttNcjvp5k9",
  "key39": "4BgUVAFZouEjdDSrtXN3eKHF9yY8SvdpCnqKGWLmTtX9Fd67E1VgTLmCMiC78BBnNx7to2nj5rwhnjbY2Yijb8e",
  "key40": "66Fv3bfmKM4otf6acZZRCcEUMXFGYwvAE1UXU81Qj2K8ef15k6cJAGpgA9Xk9AkvURhbPnKSuyJCVgQLvfo5hnR",
  "key41": "64XS3LfQJuN6d5r6dfJnSJd2UMwfmTr2fptmry4hKkeSnXxN62ttSDKarBWxzYERWPpEjojS9kYCj4XtSz38J7Mk"
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
