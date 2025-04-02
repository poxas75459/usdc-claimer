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
    "2vqM2NHLKvRbGCCccG6BK4ZqRfkovZ8dVhAyfUkCFy7hNTNQjQFJfBLWHQgzWs5QoUygJtwtNCk9XNumaNrnWAqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z6oiVuuAUnkyEBAHd3GUm1N2J5FP43eqbgr4GaZnPzuFdSRNXtCQfnkYBm5r5UcwXJ9p5y7c9UnLviMeMPMFiNB",
  "key1": "4uQZoNwgnPViwxqcWFs9453koegZYpduzaiGH2yzwdxP9Ag9t8ex4wWyTa3B99gimj1tjeT4qjjThCwrpUNzF6h1",
  "key2": "615UZNfEnB6KvdQpSN7tVKpK26PZziFBBCYduGc2yXdcDq1j7vqzJd4YtJYLM9UjAXnUV1VNVmhaWr8SA8NS9WmM",
  "key3": "3Jts34kFbyjTzkdF9Amih29UkZ4BQADTx9VSWTExS9khei4N7KePjmUrYr7yKj69KeKBj1TSWZUTvduTTkKG6MCb",
  "key4": "4hdkGe6wmn3TynN9fNJPCfduMtF34D9jy4VBdg85vBx8tuHdE5KHrmbMkKMgDud4bCLWgLQhcfeTehujDsrHSkG3",
  "key5": "3AmHe1vtfJNFVyEpcSTcDesrofphVjczMMEAmvgoteo8riszeUN2cvknbVA4f5Ux8U5GpNh2bb3WSzmhytw44jwW",
  "key6": "4UTrCVpPHNQpyETCQg6dcJ8AzR3ez7TdCMF49iczsa7khHmkj82ZwbncRopWdveACVYpUq9vracCxAnguXwVyxXM",
  "key7": "3DSdQ2UKzLs8dtyeMhSenRYtF1oaBE6iTz6Mx2RHNBenwp4qhv7T9ufaMKi4Cw2BvFWUXj7MZJuzBFXUNoaRZNfJ",
  "key8": "57GBj7kZUy6JZD9TpY4yN9m9joxDsiNBbS3MHDatZpHUow5uM2mvGCcTt8HYNvuWouLCtpkAm15T1jN4KSyoygGE",
  "key9": "4ZYz8URj9A49jdrHGfKLWdxYHb3Phto1NnCGzgyLa6yCoMSKpAdXU8gKfFpQt4Dn42wiA2c9ntDaxmtRKSBWkvcN",
  "key10": "37TfrwnjKB89jU4EickgF6tXVt2aCGMVWY1nU3xDfYsqznfLw2GYP4Fa7ztbMv9rhuTBVUkNUmaUuBNdN4461ysY",
  "key11": "KCURRGj6cWdrnNcYqU6Pvd8VVuxerc8CQes1Psci98sjgK7yZHyq9EJ2KZZj3RNhCe265Qq2NXLtVT8g8iFV94b",
  "key12": "3SU28X4EM9f6THZFLvF8KYZcm2ZYSpr32U2GSn1DUmxintkALucXWjtWHXfrhPvEXX9v4PVE4budXeevVShCoEDz",
  "key13": "2CC6fss8Pb47Qkf22khAUwqmtKG224o7NfFrf8Qg5XRjVYHyJeN75Q33n8xVPa59rbXMJqzNbJV5V43g71AafVcE",
  "key14": "2j1Kf8oQ3CmYDaQVD9SrRw5Q5JNwm1NsTgjCpQfb3VjBsG52VSmg51U7Ndk7ZpbaR1JD3geXb9zfUoog9D4DVbND",
  "key15": "3rRUUCRdr31hLWS49JSbqy93izGzGnyoh81nCc1D9pbkYv64YLn29ajP4VyCxiRSt7KdrRjeHMXJF9rMBK3GMMjg",
  "key16": "JfHCVup8hZWnUjN7admVSywDAuLAUf5TzEsrbkmUw8BE4C1UetojXpapKVxjrFdLsgCUZfwcPKjLH7dkCTkuY3M",
  "key17": "2eGTtnny4eavtQ2RVhk9dv3eqVmxZezj4LrydC5wJC4XC5DK6J6pNKZiFN7kJh6znphT5P3sv7C5pSRC1gYiuvoi",
  "key18": "3ixfZW2zTDyNByk1SNo2eYcaFmAKYu2eqUoooJBZESWTM57XuCodPSwie7JD9BufqBEyhPbW257eXX5GJtY6WVF3",
  "key19": "5nx2RjPJqDqQReLZxAhZTFffXSC7QbA99btrgmAWcfZNMh8zW48jq2gRCE4B9stoHyHXAvtg8tL6fDjQ4hm8cck4",
  "key20": "giQxSiPisUNMNZSFREPPT3zY5c3aMAi9kkLxw6mX9UP7j9wR427LFE8HuG8r1AbDkYyQc6LH7yJpnNtxxH6bU44",
  "key21": "36F1s42ifyQM64zjW27aZkknssLuo7CieieeNFA9WaArVtfbahgBbxAZvWzBGYay6unSomX65aVpqczxHJHLPf5b",
  "key22": "22vbu7xYmzKPPrNxwHJM3X3bqzncaZaAbRX5iY5qFe6R1qbpj21gnYUqpEiBBREzcGj8KkGNE5W4h7r5Zc7o8Trj",
  "key23": "54HkZ74vrPAX4sC59r8bq7o3hKpT5MrgfqgoF15ZTsEEhXPx5y5dBMfKJ8YiCkD5hFbospGEA4YKvk1sXHg2tvNc",
  "key24": "4yJ4Ph2Lnx4fpY24Pd536bg1LJAfX32TsdmSmFaNtBNBYUJQT3JZU3rEVZsvdb6A66qLXZsSBUtpdT5ppaBxM1bJ",
  "key25": "zdJ9uyteKGvcSnoy7M6qDKyLqw8n8eipJYjbw4mhp3n6WXHnpyqHiujbcmbyithoU1sJxvatCfM97bTA7ipFQSb",
  "key26": "DFWbZTj6uRssDFymPxYWhACjBNxtxxfMVXsFUZMNFALxWm9Lyaxawd1zByoe8iQkdVLVHHQuARVtPeLMvnnG8mw",
  "key27": "3aDCqfB2hD9wx9A5n7sJCuXHUwDug492nd9Vn1KDubwsw2Qai3oC9HE7iztKSKpYsGFFhBqGrJBVv92ipkufGZ66",
  "key28": "3RAQwA2Ca2NDq3S3Sw6M4a5dN91paKZHVyiGuY7KvDQL6Y5gPT717RJDz33sVZqnk9nX8a8qkvePsDQNu7XdXCYz",
  "key29": "2SXSXf8xhWFKh1ShrgzJS2bSsKQFNYES7u44yVMUhi1UZur7GhVysZUK4SwEjHpJ9QajHz1CW1iwDJ8Qx5j6HNTX",
  "key30": "SJKpJ9sdbvi7sKfzJzcpHoeDkcxWXPHqQodGgP7nsNSUWXAfvyYqx1Rhx6snXj5uEYdm5AC2wYkQ8PhSzRNVhM1",
  "key31": "3GWZJ8dFPza1xoG6N6q44z3fjGJMba6kMWBHBUNX1Z2sLo8e6doWBDmPLkH3Juvv9M7YEmhkhcHLYAXZmFUPsRrf",
  "key32": "26UwXSdYJBYorVyJn7gTsXGGsch2J13RJV7yKyn7HaJXPLooM8KPFfZHKiDwe2F6vvyekbfL9sSF6DGR7UraEzt6",
  "key33": "4icYkTXy4j6ubzXtUVnde7zL8sbFSyqfKc3gW46jPoz5iJVwstBDP7x9hv7mn8kMMhQc9Gkmt2n31c2Yv2z2Nhuz"
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
