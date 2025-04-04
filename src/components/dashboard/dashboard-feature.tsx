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
    "ojhGZnSUzNzG6sKaWdTpxM1vAKLMfb7dSq9YDG3EAzc5Lj9gbrFhnJQTnF4RSdUEn1YHC7aBNSu9quStXHX51jM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fnWFKNJCV5GAmajj3cM1CoMnty151KjpE4qvHSgxZhpQJDQoErCwm2wSgrBKqbEkB3ErTPDDWihhe84v9LAwVTC",
  "key1": "5VDLezGyLpchntuLW2FFD4CHLmesimMG5VeR433DVbYjwfd3B7epzfNx8ei7WVwSmkG5arxyRV3hBu2DCpghdiPq",
  "key2": "TLkizg6UC7Qr4cVHcbXqp9kjv8GW6xBXky8U3n5VrAfZjzYsTo95jc7tFtEQtYyYNpn8qzTsRkBgzkx3FVBtoAT",
  "key3": "c9XRBHxzN4qZaBhCUPgsUWYQMVAamKwQyABNEGf1L5s8e5hQo22nuE6Q1HcACfHqqjsWV5WEH3ENsCSzdXgxH5k",
  "key4": "3pW5hqEwHz2aYD8BvvprfLjMGhDu9eQEbuCzDQJFisTqXXXBLqsv5p7pPvo8Cd9o8KtVdKsG6vTnyG8CGCpW6w1o",
  "key5": "5eRcrzbXnzhKfGjNnbiPpmAAjrmstdfPJmX1Gz7EGgzHNV8RvzwD74eeuw1hSmKekDcbHNcVsvdx3RT1dtzvAB4w",
  "key6": "3xjDdpZNoRoXrcnTSaCX5ja3LmbNvxShGPNWGsL7uwJjqdkYNeZgBHXu3ZLJmWc4GLVsqyT4gJKatuY94S9PDDs8",
  "key7": "4GWX35AhPfxKACoeWuKvSmEyvPeaXxuikVajAMkB9DuzxjQC2ZkvJMYoGDiwrmQUrveDYjWfv5h9p7aNdsew1t2e",
  "key8": "BRDcWSFg25eF2gMa5H3RuWdiRRDokYvrWJMaAoFqB6wGWKpXR4Z8DKV6tDfnsvnDargnvTX5DiEPMsaFMrye7uW",
  "key9": "TPcyFQzKRVix4k8wkr4D7a52c1dpmoUQeGiTxnwtiZzNRq2TWa9npRMNZuvCRHTnb8ki4v1k98x4HV8g5yEEqZr",
  "key10": "J3TB1yvh7ioaNeT6qWXTjhqn5jnaKiQVMztKUN8A5ARig2xofzomYQnVgU9DX3roiTNeffyrqaA2jf9PLjPgfvT",
  "key11": "HWVytBLgz9cwBxJexqx9QUMNd899izTbrawSScvpty7ty1psyBJ9NrUu3eDRQJUapXS8CmMAoNupoMT4UrJK6eX",
  "key12": "5MKYpc4eZMQ2rtLPbDZNUpMTnT6WALKDLGpyiz1ecm5yzKwifcXRswK3JZzfp74MSGopm2FMQwCEy9dn1AMzuoyf",
  "key13": "5Pq9zi3GQ1HPgcjHizMagZmnoqgbm9tCQwGqfBGFR1oo97GbEebT7R3PAgh15JRPGvWSwxAkNXFsDtsMnr32UyMW",
  "key14": "WJ4ctf1oaTt3JWQinwPkmSpiYwznifGst2WD8gYc9FTY4RJK2z6J2bxSTobcUfEx3bk4GZBJQ2UqYiJzgmT7FbY",
  "key15": "52xsZNKsJ9UNVq7H7NqSVNPV6yQQAK5vhGNa6dytNLEXBNaBHCN7yw4QEJiSHy6mdbTtRVtw1Hhw2yYj97BkCCGv",
  "key16": "5h6AQUhMVs9nQ8XcXVG5GxhMtcLbj1jcpDaZpk3XCjXYXSazeGinXcnj8nnbQ3e2LzV8dg3tYZSG8MxxKo3zH3Na",
  "key17": "5NxUAFzkf3Rr7B1rg9cEYEN2Ay3YPvigiUrmP5VjF1TmWYMGNU3pwcCP1YSBAyJ6vFdzEDZEjMN1LqtVG9MQ1ZGF",
  "key18": "srdJXtTMG1NuVz5Mt1Mjx4yuBCZa2sYzpbKuGkd4QmNcgoBoTtnMDnrdhe4mt9k5t1FR5fDAvUpRrUrVBJ6JpxJ",
  "key19": "3qVP4wcsGsktasPRWzUfiLC95itXUNXJQdUPSaurzMd96var6xBhZZK1cBnc1UFioy3S73m2G5ZEGAmkfLwdqUKQ",
  "key20": "3WbLkyWbpNFqcuQgRZWfSKXuwfz1V7T1aZ6oCenpMBEo1Jns1UNVkKSTgzbSH2iPcsUCSL2Tws6Rbbk6dSQrDcdj",
  "key21": "3wgzDpJbAWtTXCudvdLixYqtegKCDF3ARGujxVQwt6JqUbddY1ChYfSJ1tc36SKYtdWaxg6URzvAfpPpoSr9Hk6s",
  "key22": "2Bi4GtrH3fjz87G7CFuUY5Ejie5Msk4pU6bJSGHydbMVY3V8k6PCTUVyTUsESqR77mgs2NDY8M2kTzhjSGaJyQuA",
  "key23": "31zBSm2dTNhto3UPhRodFWYKdMafSNX5P5JYEq9n3AqCYbeWtWcKKSUxBPndF8j8yDNtnuQLw5vpTAHTvgaA2dtr",
  "key24": "4C74zyWzbxBuTK8Upxh6Rahh7Ngy6N7chJfkfWxZym5oLjx7bK4k1MgxUBPkqKuaLoN6hDze9i9CLnwbSi3Rpr6D",
  "key25": "5HiictnF1KaAGCDuyTGU7tqwi66G16GNTZq8U6gayjGrnZMuwMtENEZeZyBC4tejGYhBYtJ7M7HckYM9FVceCb7N",
  "key26": "46pqy8BWyb5yPMcAy8HkcmPyiW1APYFAhVmA4LqKpJUoVoxncnLproGPabvLPrEptCvKAWqPKPHw1n8JWP8erQfK",
  "key27": "kqMjoyFKRhFpEuV9qBzmPz6Dy9K5M45RvFmrR7EBXjT1wTQmbzHDjfCH9oKp717bwuf7FdcVz4nFyVgtSpSvG8y",
  "key28": "3N6kNvqJKKYHPad2M3AweVPkftj3rtdCagrsunhWjJrKULsWdNWk5RZ42Le1tZUzD2iz6CgRU4cdqTTG8GKGDnAK",
  "key29": "2rXZC1Jo1eXTa3UyWWHUkdFfYZvyMQx5F8ypUg3ciT615z7v9uddbSeiou49TuJU5XMoWP9vCVLAhq4FLB3X9fMd",
  "key30": "5r2aB6SEa5JstVUZM3bzV28jGivRGpAqF8mdyZR7yQdkahyN6ck8gn5x55595vi9LZPKfMH253ZCorUboEamTnGr",
  "key31": "4saKTqpLumvGf1pswQu5HDmpSm2ufrCWJRjBJZeiJrsxu1n6gzXLstABL97mQELCQqL7prWrxah2fVUiMmAN6LdX",
  "key32": "4Mh5uhSPzfvrZXDZCQ3b4raqTon3NRfaHNK33CsvCXNgfmLzSXUJDGb83X2REFRv8Cfmh8VhH1u8xgDx2EfNQCPJ",
  "key33": "uKWXnraQWiZJzLkLdQwi8gH6dstHnaNHN7sKeiDM9xhfdqg1HkuqzgTLE15yYQhs2kmWooSwYokRDkwvEhbgZAN",
  "key34": "2nKaQ1TnNNyXBWZkbQVYDd57PupVHH8sT7Sigs2mpTYvwjo9QL8PSkgs1TVBJf8tWqPnseWGwHddcXWp2NTJcRb",
  "key35": "4cQeKcPVsWjem6X4YnCLBpNVtkgWrkH5mA9HZiTMgTynm38oxDBJYMzPBsuEx8HcJDbPYT3nTQyb7q7EeQCmMg3W"
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
