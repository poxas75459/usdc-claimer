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
    "JdgbfnxS8Zmk54xvcM5P4BPRpxhTbv7x1jGrHEo2J8KAEVUGa5QPwUUZBWgqW8QmZ5cNah5xPRiuEM9c7Yaj3m6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uNb3ctuVPwhjbbvEf9Vir4U973EC9MnZVTWPgzmxpbakRoDwAxL62MoEWDU7ySnCr7mfmNv8D7n6WKYXFy6WSCB",
  "key1": "3UMsN2gaFZSphQi3FJG7B5Ust2VpM5hV33f5aAGV79Xz122Jdr6AuDhVwukM2US3zbR77YG4QMPDcS3yevrBdUEU",
  "key2": "4XRr16DiRC5XyjUfExgqEpFvbvTD99YBV8gfUjtSrSuHKmH1nn1nUYoYYwQ4CZJTFPofdmkiLWjaGgJ69yqk1kzy",
  "key3": "5LNHY9gHTcnrMzJ58trYmNrzGmjbioume1mKQ19f84jWRSXhMF3SEx2WbFjs7bzgopxbD9Q4WNMDkx2eKZJ2M9CJ",
  "key4": "3Zr7vvfaz5epkehD1QdE5HNWgjjFWesKFWLZboSuHfVEfdztZLkCCLqjBpy3Q82NuchX6UYF2wQAhvdWupCAJJTT",
  "key5": "ec8uFrWEFgJupx9UvJmogWDdunrTeF8T1WwZNbpXDGBXnxzJB2HwXDDVr8zhJxSxj5RGkAvPBzke8AUgy2u4T88",
  "key6": "3jZ3eiaQYQn92trShVnMcCTSUMsSQQ8ACnDyMX9gFsZNsZA4duvxbkgLdzYBBUqankHgoMersMJVRFNtTwaQtjAy",
  "key7": "4Nr5b8dThwbnddb6kKVdad9KrbFtzz7dAzc8dLnKwTzCWENFXtHPVo93runamtuQ8a29JMxR3heMbCdaEpHxKe73",
  "key8": "5a4nMN3s4mX34y4oaBfogCD1McsAcx46RTKYFUmErdbDFFeDYMz3vR9TFHZabaCycHoU22DvVCfqnDqvTHbjcReV",
  "key9": "3SaWMcTXAAHddmr2bJpCqk9Xvh5g3XisaN1Ez8sSHcwgx59tuUTL2foHMBqQzfQsrin5LB2nmGBfNLL7Kr5vWxcK",
  "key10": "2rBBJMSftW12NjsRJfgajsqSZs7hMRDZrodsfvDeJDhWgCLrUQSesc7GAcbAwapr9Bp4oHDCUhCuG2bZtXEAtY7f",
  "key11": "5dkw9Gi48ViMWbUZ6B41gSpK3BF8nGR8wtR8hJ9trcHXFdyw4Kqki2LUn4NyD3b2bJbu72GUNBRDT6yBcCJV8kYx",
  "key12": "3YQGbzLVTDArC55WAaHheGbAo4Yu5fVbeFbTx9bgQXvHrQcsubygMNdesPFPuwkSH88Re3Eq1htgiK6Auht8uiGm",
  "key13": "5jEbFD2iM6D6n1cza2e56egY7czSj2KaXmPjYnnXKnQ6yLNFkpokmSR4EqivNRzszR9e1XxsYWa29xyUv2WxLHnt",
  "key14": "tL5D3KPZHnDB8GSU7AFtuKPvPn8f7AcLXTfdTrZsGYhn6G3ZK7Gq1BXAG6aokqgNpDEvMvGBpRLKkTMBskxugkG",
  "key15": "4G5ihjPqZZzg5RR2jzBZvb3Fogv9bwk9Gf2hLG3PXgFz5J6MYRKTBuXSF9yeo8cxcJBo4seZfvB2Y4Sd3KpACFYy",
  "key16": "ikhRHDCg9AZ2nZzXXwZmHB3XxceXF3Veka5UwCiKdSmmBtYHa77Bd1Cm1fE3uz85EUymfdjhiMk2AM63ysmCv9u",
  "key17": "67Dnej2nCBkomNKN37QyyhBq37WUj4SZRCU9Lgwxj9b2aDgFqnpWWRfaYCEz2mPoFuTYHbHAvh91F8YnqGR8DUw2",
  "key18": "iGm3EcM3HFZvKSaXNUrFU6KuKfm6nRxndZYApaCEPRdR7qjPaCEUASZ4bV4ySv1Uby1fA5YdhLGmd4X2poBNw45",
  "key19": "4gDsY6cJaCGAVLekSDr7u5DyGQmSm6vEKbjCjiEo9YwqN4KzZ1e4h9QrQVqkpucePJ8ooWMgeKEi6u3PzysbpxMW",
  "key20": "4N5QtZDPQRh8Zjd27dGKaqmUKWbrpzDejCu1J8PaAdRVxy9452DwiGDtHF7Nobxo4eawXn9c4aiucG87njF19iL2",
  "key21": "4aWhSmwmLoPHtGdCWEtSVvLKCDtJ98FgrjVhkrgGmmHc69A6fJCFavAPLZmTPrucbRC4knmmvDW79Re5F6GjakLc",
  "key22": "5oSKoRMBwbJCxBsBmfk7bJUSf6nDH27Gbqenr9zDCwjdpKAcwGaE8p2tfvAaHfXH2H65rLNz58X9EeSzFQUxsFEZ",
  "key23": "2iz9RqV2djXHC7MTtVAu84GDxnAzHFxVVefLAakVaPwockVPUdQEgWb5ztsTZMfEaQzvDAFikLd7kjQfSseFsJkY",
  "key24": "EoK77Kd8YG5wWnp8HQL78WVjbWbxu2cCBhCJQFYushA3cZ8yKjBMhn8d2NwK3SyPRWeP5BeVMPbXjxZuQe1p3Xh",
  "key25": "DhJLQVQj641gw6zzxX6GJLiy5PFKHbviUGWfExgU35RkkhKgg7yGUPDoCcrAgfmmUhXk2jgihcr9BMZtzQ3oHjb"
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
