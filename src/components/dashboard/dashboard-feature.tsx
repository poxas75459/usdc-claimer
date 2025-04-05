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
    "4kKSyi2xfKQ5Mtzzv4BioEfDhXsXmShrVnQPWNei3JELPdrfHpTQtVEsn5CwafK4pq7xUFGQuxnyzKYd8VqWUxHu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UwgNnFchuXYdCuqyqQGvUJQE8i92AJvgUJ43hV4KaZs1H3Abz19HHBxqR8z8N8ZDMkhvf3bvHiR2hbysg2rV4kG",
  "key1": "3XSX298kq1wFuzmwEgWrfLjoJmgHj1WHTHDbw13Cibc5WEiivPmenwNheu7BiUQPc8dWSxWL98sL9CzUrdJYP1FW",
  "key2": "3bbqGFhwCwoFZNBPMAX57weABZQiSmSTHXGzdPFoAUxuBZwz8bFJtfegJAFPo8ddiSvVCoWzCpBRenkCbryELq6L",
  "key3": "3M6d5YVukKWkrSZf3iruww17vtKoJKDVs8NVCEaWAgQU2jnUDSVwtsJ8ia34AQEmxT8wJv2Sj8eChkhTU9mrajM5",
  "key4": "2VJ2snGH1u3T4h5VSLBqwHxpfRT9ZDUBmpy99BcCHCDdF8yaWEZ5A4funfgsAojawbhbtLZpSk2PMzE3KoPbynHH",
  "key5": "5R41hcuRMHvGSR5sVUbj9YnzjYS9LdV7dSiKrnKqWXWybJmgNb5tRtSs96jYqt71fDUQqb7s6KXs7nFVskmVQGYs",
  "key6": "5AgyegxXTwAZWyuhsiqGJxgzsfub9KiJfhTwHCq4sxvF9Tv8AfUGpkiVb5ZHp3E9UpQ7FzMat73zV8QG24ybDK2T",
  "key7": "5t8xLzFprUxGnJC55QW3TvBfbhvbAQYVBwpfMGB8si54xrjsjvvuuQSSPsQR5GW2TBanntWRpLqJFuAyPXWNy4tU",
  "key8": "2QoTRAN88gr4uT4JxVA4VatKrkDJYSD6TPinTZUFZz3fPoXbQRcSWc58zKw1aHkouvucJWp9KjkVSjr8q5UHiqVM",
  "key9": "4St5XuxSSM8kzwzYrLLnPm8eFHFZoL5mha4epFEwX9RcEJxgjikmPDTTL9cE9MiYog5aMjudDxn3zmfsdE3Aoujz",
  "key10": "5KshN3K1Lp67UNE9PfFt8afTHm9a48ySh81U3WeEEm7pgnsAcS9PHwo7RDQxk26XCaTerRzCXHmc1GytvmLdYWKa",
  "key11": "yQwjGxYq1zMqkv6XmAN3uyCwsc8NwKwrXsq3xv1wcRw4gceD81Wsmjr1UQeLfbwYzEYsXsFXyybUcFX6p5QcRNG",
  "key12": "3nUz3dqjBYFnWYjAmtebNnrQRHdZDGWCR3cgsNsUWsNsRpknD7UumJEejzsmJbTajuVRyPb6A7jrR4EKSpQ3xEU",
  "key13": "PckJNWqTns6fiCkNEb9iAde8H8dGoje6ADwQj6PepLcNUEiF6XhZYYjfgESn48PiCWP5X4zJzwk8vGY1SKj7sMC",
  "key14": "2Mwi1tNXyhZWXRQvbBoMMtbYS3CqVNyBczASiFCfh8KWPf16WkAiWcWJtD5k1EJ8VTKbWRq4Zu5fL1NhNjq1bYx7",
  "key15": "3noSJXqkJc9yNYPXfNup5wjC91rtkZHGTAQG4h5KGN5ixLc1Jm7WJt1LjQm6nQY7d2ipDMq3dt94HvavTtiLtoXs",
  "key16": "FtezJCnbxEGMQQbNjdkV6xoKpX2gmUJCKRjoapQmqLQxVcLyr9hkwU64tUKs7jCPZvYCL37Et4XT4u96WTKNAGi",
  "key17": "3Q1cSmVoMcSAuCz6iZJvbdBtt8rH6BujCRzu3y25UB63nrpY434thaNFwcs6hNbZQKLrNjArokCodDeZNMkV6DSn",
  "key18": "37MbFSQBxUY6MewP9Q2MsDJT8TS45T5m14ANXQ93AWT3hqhUUV5RopyD8afo8ryK8DjWseeApr1qqLCdcVgF61NS",
  "key19": "3tgiF3jquhoFKRospfk29SxNamvnfYpuuyv5KXbg7h7KgdF9h7nsgmDauFaJXu1kstqdSKKF6Qd9X6cUSUNUqiiQ",
  "key20": "XADpy6AM29Q86ZjrFkm3jzDDua692pf43yY4m48CTkk5K3v6XyPAQFoWHxpZmAQfKYWMPTxV1VNAiYfGdoyBcui",
  "key21": "2nWoHFiKLqQCtQdKTEK9Zp8spMamHCL3GMszrcsFNPCR9MrgokNr2U3BMb2enLjo2YnxaFge3aKvYVUPRaH5JA3Z",
  "key22": "5UQASraLHmL16Am39H1FtXxFDkaCLMhHXtKAnqd2as4bsdjMSbeGDdMe2zJWMnYVoFJDZeVqfy1ASLxAiD9KXdin",
  "key23": "27AwN6tTnrLTiAs4YwNRQRdqWy1NA78Fmi1bLE3iUHQN5QsrpcruRi4KtMiZf9mij1FmSaUKwjGbqMou9YfBsGNK",
  "key24": "5isq12BGxpTHZW4CVE9dX5vQTV2zUwstZXKf7ML7YThnVHm5haAsDRiu9N27yxm8zxL8Zaj5bBFQFacQj1huF3Ag",
  "key25": "YTratRSDina7YQp8zWetvNAomWFhWhu9AuLr4AftELXWLC1ETHu2hwdUSY5d5HrW2C3seSLKmCxcWah8n4TSFzh",
  "key26": "3NKbo3GXsTC5ViANrXpgdMyHKxv1SVhDmmf4uLkCFMecmNrLzFyitNeCsm68kMZwq1nL3nuXx52EJquhgn8Hftr8",
  "key27": "4Qf9k3KivsH5emRGKRv4DMqMRVrjMjH6Fh6gJDCoxF6f3GJRexGAcdMaJuLeehquEmoxRkbbx4PZh6EiP4EDFDJg",
  "key28": "2368KoauPSsqjMjQZroF7yGRybPimh9U3umXEWfcAWYGZYCWQKzr1Y71x5pneqZ4brA6CaAuSSoChYM8fVkEF4ha",
  "key29": "4JZpEvCRNWAPx8iG38LEcgaiFG3rtK8ScevupZVv7sETgBkxVe6hzojbauVUFYSL9mYMRC5sM5Kf7HyfLMsAAVh4",
  "key30": "5K4rYCRnH3qq6YXXS8yATULxp1iy99925CgQU4VJ4bY42eNmo7nDkpg8V3gdAxZ3ZKMxd2huGrpGK2SgjhsuhxZv",
  "key31": "4XQZxBgVEykNxRMHQxe6SzXYGtzis4nJyGqBhht8TvehAXCGvVs4oka5KQdHaW1B78kcTD5wz7GNB6aJGUc2hpmY",
  "key32": "3ynmrGrwZDjQ2aR4fYtgrX7CVWA171JsfmL5pciKhWzwtjJ5WmCkzB9NHPCddq4bKaf9LMwY9udjMvTQW3pGoXEP",
  "key33": "5cFyw5vJgskajtxdok2V6ikS3pDSE6PdX9bJEJNKvTg76MmXrZYdnL7ifryPAw1Jrbc3eXwyUZhAQbXPU5Ui8QuL",
  "key34": "4wzpYreM9zghxXBTWP3TfrngX8ERN3kwKyD8fT7aFM5YVTt6Pu4tzDKsq6vFfA1NHEZ8GfyWZ5h48NLqsUUBUGDd",
  "key35": "4DjbLyp4GBcH9hJcz4UoFbwv5629TjZoA99uRdcDEKM3vrxXgeG6acgvJ224D64S5Nhy2VLEHdHWy2guP6Mwvo6R",
  "key36": "PVFZkJaq7N9stJj5iUvBRtJJx5B2KzKr4XP7mRvAS6xhov774G9iycb7UAjYi55HhtCbjCVNb5cfpe7vgZe3RYd",
  "key37": "UZ6pCQJByCw3FQN7nnmHgvoXSRBtdh15F4xt6EfFWzxkDbaNdaWiaxLSGCUr6YsGhaTspZYFJmajJGY7shBLBE8",
  "key38": "3oP7tN7TNNjUyWYHzoeeJJF3jqLaoBj8g9zj35E93u6jF5STvJymuXTuE7AWbegwE7wAxQhXrr8cv3N5sWJYhCQf",
  "key39": "5Y9Qj9yfYhVa1qngVjDXVo78yrateVCHTpd33pHGtjnu3YWvPsyrQw2xQAQ6E5tH8Eyg2GkBBpjY3dE7LFcszdCS",
  "key40": "3wZHBQ3UBFCqfWTYH6R6sooii7ZZqeSwLxRRm2yPdPc9jBcy1qLZQ6onxjWHJWLShLbngGecydGURgd6WfZe3bxo",
  "key41": "4TUkWS2nx6txijKcZJhj2hftKfS19TeVuU1MyyYJCHRSpoK3fJDB1Aq3AG3WPELsJaGRptpnRGShAbFwHq43CdRC",
  "key42": "qYY9fKsU1acF77ks8t7vjtVW4GmPph8hWCTvSBXc2bxKtECaPavz2KgJDfzqcVK5zdsubFY1g35CAtsUMuixNQh",
  "key43": "4bL62fLZb1Hp7PUTdMvjDzXijDEHTL5UCeco2SKNF2L6GP5B7iac4uYoagKmhngGYk29odgUVmLT6ueDUYu9kNVk",
  "key44": "3bW6B5FvcJH4GZPfeJFhb2HLmeQWzXFr1KWAV5tCvm9piymweoSdDcoyY9Vo3fWTvfHCL8GWLYELPLGZRJfUftXq",
  "key45": "2wcrq1oyF4hpH65w6rzJH1tXAsgWu3fknCWuvbwz191MJGWgte6VK1BvSn9a7xD1w84tXu93a7iYzsrQrhk15E5c"
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
