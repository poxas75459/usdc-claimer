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
    "2wtPsAZicTVeR95eh9Jjppqu9dqyR1TzcN3BSMhMJbQ2cBa3a5bLmmVdPMymmWXqdSn58nhYXdfkG7B3X5vp2xZa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xwkFGbm1m8e2yKTjAvqocEUTn7CKRhi1YsSkUv5ayjAFRXonRpsHLVaRyxbvQvr2k3SmeMB2796QjwJu381ijCf",
  "key1": "5iYiyPr9zzQfb9SQsPdqrdxswuYWmuouTViD3UMGAhvdHAzBX8xEvXwVJZBF6R8MPixcH15BpKVzQ8yQubkgBtXC",
  "key2": "2csGNLQTKmonLnVw3pGMUX2NRyfCYjPZLvugdZ2fVzco1bmiejtqGfQDxUnypxhxmbUGfy1LfzPDZeTEFFPrmdFK",
  "key3": "5UuuwC8xTyRrju7YeVTZNBWup18Ghu6SBABUU3Y7k8UD6k9SdxRqTnnWdMoVUj1xDPQtBX6kGBiKLJPw22DJSsAy",
  "key4": "5x5RBERPnFhhmhNiADUsz6HKqbtsb9B3C9Y2AechWxa5myigzbgcW4ryXzKuFqiigJGAeVkMkLg8zCvwR4t8VEBV",
  "key5": "zbbzUzyoYZfW7UeBjmaDQGx2cYnSBBedybWSG6gaPpJUy2JBKjA7PwngCBtZ72nWWgvzQciaWX138HPeQin1bAN",
  "key6": "129vavYAu8A7kEREe8D6TjwUmPnRj2662eaP3L8hQ4oc4GsxpLEt9P5UZNpjwBcaSHCLgDmdWH5fU9cikYTSmiAq",
  "key7": "3q3Yh3tWajKHPuuLzZaPsQg2vXfqCeJs7fFENB6BWt6ACgxHvnXpH4sKL2vANo6gvQgyGk8rXoMaiT9aZ4Fk1vst",
  "key8": "3PboxhXoRQCzSAM46B1MMq1jnJdTdb6Z9CxyADf1P7TRVXJnaqV3r6YpBBMCziD2w9jfVsUUUy6ScCJ7rhZUnnTS",
  "key9": "42w4uFrQV47b8aSpYF7NKGnXU6Gm6wXVAjyg8yBfeBtd5dHFpC7p5zsw5CvKuMegsZG2HNpKZ4ZtuPyJFQ6Nk5rg",
  "key10": "32LmAn8S7CC7r3yCV3LMwy8RsTT2gydXanSzNKPwXsgUfa9qqzyyTErdivx4DEf2etUxSZacASBUfNRr7LAygsKw",
  "key11": "33SSrYBaDzpy44TtGAziixRRiroR7PPbiwqfkZusiZ3qGUmCyq1QjfbWqLMEvdVWxiy2ngAENgCQSD8mC5yFi3gS",
  "key12": "5tJVSmKd4gzekQNRoehQs78fARdT9EWbjXPT6wUtsUvkkVNuym4t7qDxVR3KCrVcwi7KK2mWtWAiPsGLg4px7otr",
  "key13": "4CwTMi8Zedpvw62RaLsUaxTLUk6JjeKq5qNuLEbeWTDiHJzJrGvWi9BCHmKSGuVPoUrgh9224Gx3SBhAib9Z9VVh",
  "key14": "3xiCt8oEP5ukqcTjVKJb1wPcfxsuvcBxpetU7STVGDL6oYg5WtLPwTcXwiEeg36XbiBSxKLDP4WuZ17NZ2dTeYjY",
  "key15": "5rsdmrfSrv3nDJMQbAAxhSsuijvd8659FLHEtcHoLreRCv7geEEtGKQNDvyG9NV8iAvVS4QTsz43f7xv4f5roy5k",
  "key16": "zjWqX5UfsUFum8umfkjxPLWsinkD9HcUgYxhxQeHqrboE4MsZEg8fsARYsr9Cj3ibjZcix7CgehRRJnrGj3jbrC",
  "key17": "29JWCgyYcSxGGmCBeq2rC3nEm2uh3DMrashpaZehYvYbPDDGXFVFgs5sTkVVXKJbfzCsui4WouPcZXqFnWqo7dgw",
  "key18": "cX4Cx46hVp35dcNQKXsCj6xQWHmMvo4j3t4y4xPDziRGmTgNqtdtfsYkyT3pRTrdr9mUKhkMzHTgmCg6gDjK16K",
  "key19": "2t8RyTpcBFSh7eopFWAxd53AkRgpKjsBGYPG7fv8MDWiiuQGkxnuhCoD7wviss5wZ6gQREVD35czTiPkgAALCZSN",
  "key20": "5N2ftCUyeYynR9fGP76SYeKK9YdFnmdYJG8mVePzFnpKAkNLr768A7ysszrxHupYkWfpu53Y5XGb5ST7zkTuMtKY",
  "key21": "4CrgvdY4v7ZyDySnrHLchcoMXYG7zfU4NVwJrgotfAB5UEsb4FM1KtHofXqr7tQCMDSovvVD1tMgcqakzPCzWv9J",
  "key22": "LJGDj2YR9njYxCKFxzYKQsfCBTeuUNTV9KcAwXSgwasqqph7GPNVVdzBM7uBwYCw8WMMRx9eY3oTcLaqcR76iMs",
  "key23": "4mqVLaSimQRXDUAdvw8VfTFH41s8Mio4k6Zyrr6pyJ2o2hbrb6Pdf9LSm9udwUrkWVMm1UYzpWZWDrQP13rC8m4k",
  "key24": "2BPpKVcHQAGHxttg5ZHYQ3VKdK1SaZbXVoYRJUbsJrgdLegRyg22ewGYADnbguQKLA6hxyGNf5cMkhUKY6YH7t7g",
  "key25": "4xQoqXGyMP8ApMQaNutL24FjCmKEvPQ1NkCLyDQuTCobyXVvPqozN3Pcijz2i6wyKCmvFmSvwL7ifenW8EtZ2Ngs",
  "key26": "4oSFJy1yAEVPpHiuuhcszggiqCvR7M21KTbET9eRmgUC4vpXL4rMu8Wy7GA6gYNnUbcaQJZRgMFAdsJ7KHpCzL2n",
  "key27": "nKi6SnbBinnvZzkRrGFjteSNxfcfFV5EQYtximuw2AgwnM3w6jZeV5HekLCcM5sh5HJToBgvrRs6U98UBmpzv9H",
  "key28": "2aTKSPuVPyiLz2qaSexvqsmY6a7jfz2y3bWtjmXENXBquzyPGUKwsHZEwFq8Ya71oLm4BvSJQuRFFVtnco2rgCAE",
  "key29": "3j1Uf8KJXhf649BmGeaEkP19buPKWJcurQtQ724JZ4UReLTf1MFGtvsTUvFZh5Lt6XR7oioopMGM1U9t35g7ivhv"
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
