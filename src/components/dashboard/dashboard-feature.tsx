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
    "4zTe67AybTJKv1LGjHRzbzirBrRySDLrxuoVGtzXJU4hrErYRH6RPHGQT7neh5AzLxqm2MQ7F9D1vrbNN4hdW2nS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TyY2GpDxwvhpoW1NjJVEyJH4Jk1G4xBoxJyVWbFcDP56b8CLYJjytSDh7QwYYnUtVbGKYzqFfR8ay4FqKbmutmY",
  "key1": "znqJMgCvmqza1CBqzEDyLACnvLS98PWcyAPvWs6FmSyjXvvUTatRoD9XF2F4P6gpt9NCA7BXTtYMUUM2WoyKAQH",
  "key2": "3nHcMNmt3fc8f9NPbWWffexWz4dHW4LtLxydLn36rpayoKzEacxueVppVschao1ZpiRzhUGCQpzBkHr3VZn13Tjq",
  "key3": "52BkjPKpN3oyahZMSFVUc3FhjZLJVz6dS3EDFBNfZ8BePGnV99ubeE8WshAh7fKeQajs9Md7J6FA84wLRupTSVci",
  "key4": "nPBKBwf4gNWDLoEJkwJgf8faAKbky5V8JhQ3tQEjR7E4wBCy1Tj5WcKjzysAgpTCAX5rXn4BozugWjNco2XeMBM",
  "key5": "2huuG3xtJCgvw6a3zRoKYr7Ssuiy84MzxWxSYuW788XFCAPFcFYvjRTzQ6Pq1srxuse7qiMoFa3ZwNV9dxyrFqV1",
  "key6": "2kXe68mVEhensQu8Xb1xgtd3GPsdPhdDCGBx2amhj7stN8hiwxpPDrvS5HwSYtMtA3vFifMsMTNoRVFJauR4VHJs",
  "key7": "42zef8WbTSt7Jd8sJRGbVRyqJHYrb9y2A1SxDQciAkMkdYwpWbCDzPDkvcodj3Bfr81sMx9j1GgaHfGq9NMZCEjQ",
  "key8": "3cwgh9ik74ZoFzJNnPBkSwxF4R8Rv7Zx4vp29ah486fWmaYcSvAgdpxAn51tuFJvMsSi6XaKPeXCnNqNAsf3NFoS",
  "key9": "5RKo7Zpq2BRMJkQfD1xCcFSZwhnh9eHMFyZx7aJcyr85zFYVakpG3SkoHBZGxnbLka6n9uYH4mtzLazVQDzBAxGH",
  "key10": "3R64B6UYKyDjeSVUG7ZHfMGjYd6SiEksKXGdds27cUybPSjU1BqyfRAEtufE2eQrmhfFihtStW4Tq1bVE662qz7D",
  "key11": "2cwJuuvHfwP14Ne3fkwSCyZdkZppk15se8obKZwF1xqGwSqHsbVWrsCT9Z7xd9vwo2D5eB6sybuzP8ewaM1kt7yV",
  "key12": "5s8JgVofWnXUVmZNYhwtEAzHVtVxbWggoxFAwiBJoxJvSMYgELRf639rtaTUjrr4ReaK8zbjebGvXbNP9bN2DqnK",
  "key13": "4zZ42fNwMB9kw8tF28D9nzZrJTLhj267oAfutpYW9gAwGvNBwTCKmvTBowmPHoKTRffkNaCAtyNJzw6fDmswx8Hf",
  "key14": "z3wJSGjJrMrjdhqKMbmRmrmrTEfwszZYGkcMCjVtg7i3PnQ9ux9UBBZaaWBTDkcVWJXiWNPixgz3F6ptgZ8rNC5",
  "key15": "2SLA8JVC2i3iSpJDWjDBuq3kvTHZCSPbCTANEusCdSh96nYSWTESfsTJgADLkDWpM4Ma23uWXFg7DUa2x8CGLD2j",
  "key16": "464a3ag4SvR6X1gPWU1LApk9ttBhbMCk54QSoMh7vwpy9pAGKYdxQJ4jc9iVxm82n1A62xDgWSma1oYYTjUZzDsG",
  "key17": "57pAMSuCit2JLTgxdfMvJLqhKhnDFj4ZSUdq2HmPH3xijY7FGhWbCQnYDBgqnmPmsWT9dtYPcSz4yP9V6At3iZrF",
  "key18": "H1kZbGpp3qeZvXNffp262w1qsnMtbzqs8oQaYPnJES7d8TBzfUoLbgoHMiT25PnSzzhbWKF5Q3FLKWGwSFcLEXk",
  "key19": "5bg6oG1vgcX4MpDUUaffxJ4bkmvfQtDNqcenXRzSkb7GqXVFziSUtavnkGte81HD9yJp6p6RTsiX6jfroonYn8rD",
  "key20": "2VeMK1x8ofHX3gynyxNLcwPjiFmpWi4XEibDvtGXdJ5FxyhDS2WwSGfsmLPUWZ7XPPf52de3TcMrCMuYxTbVZJs8",
  "key21": "2M4ynpMcUGUzfAJccf5neCMvvbRtnNCCuQ5KoDGrNHZH4jVUVeH68t9fPMtoqGKMkfyiRDcV8LYTwxvTw35wW6KH",
  "key22": "2LpovWvEd1wScpvWDso7QvaZyz2oCCQ1VHwxNyGW1gDSdg9YWvgtpNpg6znj2pF9o3yaiAUoLiXVtASWB43DbQGQ",
  "key23": "2Sd5QawtrGwCU3TR1auuYuYsXPgxczpbLVnHR9yobKZ4wRtQ3c5EsNgbgbzCwYcN9NzxKTXdYiXvH5EvbdqeLUN5",
  "key24": "43cHDsDbTugmxHGS9Phy6HSfCsTb1jJyW4fL7uUriDggyZc6T47nnwF9qV7P35HUmGUZh3FACjahGY2FHRr4vqRz",
  "key25": "2W2upgctXUsFbkvLNyM4QRQ6NNKzEWvgXbwV25WptSxH6FDY1p6uSRZdH8pYz6z73v8MsPMN63vQKWp9o6zqNzYw",
  "key26": "3ak9vcAHEzwysKWS2Xstf4HtRbP86P8LtvwzyZodd3SRKphEqVfpC5JGxxGD1mDGRBcZZmN9ki7vCvuheWrnv1pt",
  "key27": "5DhKb3mqqtfqzXQermBMCFyEeGQ6J8izatwjAbz5XuxwPkD3VwDP5JF1ekXBBEx3CF42mS3GcaHLjeEfGkGkL5ws",
  "key28": "5i78aZwinwmEvLfbNQKCKhzcW5MjJKXdEKzxHBtrs5uu8usQb54YRgsUw9YMBWBxsEJKiDNjj9UkFGroNpCEhthq",
  "key29": "326qUGq5RNTirxnWLmrbs95ECynimvUAqSifwjVur6WwWyetzrdYuVHFVTNXSx5ZK6sEYhPdmFJe4bwJhcaGajs6",
  "key30": "XJwHjXAKqYWsB16pFpidpTjdFd6uj8PcstBhUbW4q94ZGuduXHv8QWUHq1FdVPC6VtmhBK9fvsgAgkfs1EpMbf6",
  "key31": "4S2LAgb4CzJRKaZhd6szY9TrfvyZThCikWLHSvjeaCJAyLvAz2qjY3paQtydpxbw5VQuZKsUW23dbMLZZxmqSf5R",
  "key32": "9xz65qMMSVeMmmakqFiqA2vxbCaMX57TQ34qQTPqckNxB2tu9r4T9jzYrckZir2X4vxd2zEg31bG945bjop3tF5",
  "key33": "4SLa1FAdXgypCqjzbMiUyJZFVB3vzK76tmHoEzXFCWdvqyyhKAQ4b7vf9iKiSKCRRmAtcDRTT5gEwM7ZYrwhp34m",
  "key34": "4VrT7J5QYtVykzmrpRo6pXehMBK8xUF4tPMJcGNsQHhRFJjCissaAqSogVzCt5iY6birmGYuQ8c7Ee9rcLnDWSRs",
  "key35": "fQRSgdZKdLzNiwVFiPNxytFdVT1Di1CYEMfMXfhzv6eHZNWfCDd8EFnK9aRUMurn8UpA5WijF3o4VJSNznJN7BN",
  "key36": "3s2L2E44ddpbTTLqM1sUGjSZMVVN6zCyLuqFuFupS3DjjX4tU6Rbz236hJk4Dr3QvkRi8m6cD1TqAiqBG3Z7Eucq",
  "key37": "2egG8HDqNaVcGy7WDYpLeFA7hREUiyQtfFUaoSQ7769G9uFZTQ3gJS9upzen6XkK1LjJZCL3iqp8jiDVpVB2jivy",
  "key38": "3SUNwY7KxH3jwMr4oNHqsoXQBfqGMdW16tJrYjDdFigeptbYaVCj4yUszy2WMZRmYjgRxrMGtZFy9jAqoXzJrgiW",
  "key39": "4AamDAaJEnU1g1Mf2gkWn9LBwaicRgQDqJGxD9yJZpWdXBJDo2jnZMwfesiGCEknyK2q8bhvaNQBeRmWEdm7g5Xy",
  "key40": "3zeEpbsRDbMM9TMijifDqGx7MGib8Z1KacQCkiYT3gvz4GsvKQp3DAsB4daWhWid7pW6yukdts2QUTu9Y4GPxhsy",
  "key41": "5nbirn2yK2tZXEV7QjevpHRoXTLSYhN8Meb2GgEVsTyaeJnusZgEnTeo4AhY89AmnwNDGa9WwqTQkGyv1VfKR4gv"
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
