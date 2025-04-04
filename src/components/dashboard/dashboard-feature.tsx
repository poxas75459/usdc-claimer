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
    "513erwR6QiArvfrFjC7noUia6SgqAQHT4LQEKGq3iEMoeZBs3rKRoFNQf2E8U1bZcHemp2quJCKfNFuDFGnHoYtE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bhMzQ6HTqvZxyk3gbRgW9fSNu563u1cy5GbVxGKpJNrA7iHLtumDJMXFKGt9rZJ5zc2mB7mw7pX4aqjwu2ftpFZ",
  "key1": "2Q68u5JnqtRLVshAitVnojSqCArmcoNZVHxSQj2oZRFwVjz8LkqFRL4QFdRhz5szfTuyP2B6ghDzq1ZJ2tHD9wo6",
  "key2": "4SU7rgvQ1MyMDpMcq1y6T7kpiAUZUZ3N8iCgD3kBYZ5EYm5ggrznR9ZbSZ1xZah9juuQ4j77pVyxYLADFufYHH39",
  "key3": "5Bu9KwDfrAtHn76SPZvxJ4zmpBStUa3MnFD7cR29GvQCigt6Ex7JHaA13arC66Q238HndqF6xCumHDMSTQCq9reW",
  "key4": "2oToUv9Dx83ekqzNdXoeWTypaJTQELjYHn54RZhuXAdEVZQGTxvQyN8DFXVqh27vBPDdU7CWpTmZxToT8iGusewt",
  "key5": "3Cq7eABRmboAJxrGRAHnene51ApbfL8CC1a2U9pn7Y9TLa7RkPk3zfoACAe8kKnfSEZzY8nEd9EjDwpMCS6XDVPa",
  "key6": "3KrquXmv6LGjUk4kYGQgNw3JxT182jticS2zAxPxhdV8DGqmDwRQ5Vh2NTFtD3nhnWXei3iVj7XYD48WhMBfajod",
  "key7": "5qgs3uHrRuPoQqAiCKCFM1dS8bYBXsFTXJUuGy8MA8248Qt2y8jwwbNzCa4y9Rhvp7KMxGjr5kqSaG29fMmejnUT",
  "key8": "53qBy41oJ8ZXnEavsNrnitPBtPv7Vvi3DsL79fT3GYB8L9T2im5Bk4euTgLbLsnA4DVwcoaBV4rsEdiBYKETdg2z",
  "key9": "4VspqU4J1YD5JZmcVMq8WJngNqJMG1ZcugdKub5Es9HH9J6CxHhzQ7FnbVAKg5KGJk6qLM9bQuRPEEZQZWHBd7X3",
  "key10": "3Rg1U3LNKT4WaXL73z7CJhJm5UxTdGqDXp8RQuUYJA2FnLHGSFpM23U83Lisr3m2EDcEkCb8iQvMiLYmGpt7WDEn",
  "key11": "3sS593eHtGk6WELkkKNtVnLYKQk7wgAeLcoMRf1zdyp8fZvTKfztzc6njiT181gEvLpoVZ2zkwW8ccTNVVftd9Te",
  "key12": "5B6RWyJyXHdZSWNjTQKC5whmbBrofMF16RLtFFJjDkAJLv7gjMgaNWnNpvMHzAB7L7oMhwLeuYbnHKCnhj4ZxHqr",
  "key13": "4qLWhv1GnTUNzz6us8SKZLeH8HCQ6c1zv7ZJJbBC99nku42SHtT2bZ1jbgXu9tiPz5cd5Di9sYfdSKdWqcJNJ7vi",
  "key14": "VP8cL9igsH6UpvGk7CUCCBuC3wbnByBsMvUfHMdLDKnjXKPfVZS7BjvAZxWeNsqiqsT9CwFKySnJPyVJPGBJF6s",
  "key15": "apyD1HqUHau2ddNywrd6sdHNS71z99ygXoGYd7WuxTeJWBqkpVLDZSTQzt8CHWbGAMwEPzBdVTCiBdSGFRKrQW9",
  "key16": "42DLTJUXxGwp7LK1DE4q5ZQH67NFoykAbd995X3aS9WoM1iJ9SXoQZxt2VKc869YqmuRieSpnMMmhM1PL8iE3g6y",
  "key17": "441jEKECSbhXbdhBrJMeMZpXh3bVyBCtBWQr7BJXyHQhY2KUbmtDdLd6XPMsFgkK7f5PGkpD11gNHQUVfNhVPCmh",
  "key18": "2s7hsZH2uqQVszbakVDefp8LMLixW6gvBWLbC9nAZGjwBFoyftHQEckqmJiG6DJtjwDXmTj49qpGJVo9QN61Byz7",
  "key19": "5x9nApfFAXXG9opmvTasoP2ok1jZFVvTfRCvSwrVQtSdSyKeurzbRiDZAcsPJnJYHKU9P8nocPEqCfACd74yA2sT",
  "key20": "4ok1kRpeMUxPmnx9Ds6qRz4GEc3w2mRr3Bi1F3kH9hC5uYMXT74HJo275F4KhtHzkfic6AUQhDUeYCq5R1KDfgBn",
  "key21": "3qkG5hH2zoUbLbn8yr6Qx5a6UDfSs35tChwKAYxA44MwSWqzSyEq1kP6fpTYiy8ipnpA72ALzZDAT4x4gm9YYCQ6",
  "key22": "37uw86FDhRyUbSVu6QzbsFAt5NNASKuAGZAC1aiDJEPTXp4APJRPDbL3jpuFDKBSqZLFytBp3bbKLJvXySbBNgJg",
  "key23": "8SRdjYWq1azar3AmX17tHNhr3wcoeR4LotBMqe1cQWjY7i28pWvRUbg9EEjRfsKPHCgruaj9DsdnKRreg4kUukE",
  "key24": "44yLcBdBNWFRA2PTZVDaBNd4HceTAy9C7158FMgdNjQXzivyqSWDdAdyCzn7SfqWDbJL8SUdgTEex2UbuxDg3Cbt",
  "key25": "3WMr1Kx8rfXeftpyhEjRwmdPe1DwgmApf1nzfZqtSkXD2V6n9U4cViYkWE6zmHjwUm52Z6xaWK2x1xLaDcrEnWfV",
  "key26": "jKv9PdGwe7XfKte2Rr1H56wCj1f9dXbQH2BTno1L8ep4t4L6sJcy3siYK6j8ZaQWAwkpc2N6CznHpY6RkSA9mwD",
  "key27": "5bo6VtBSb4jCDUmp7PEwKc5xNLB3hEqucgunAmTtqScpqy3FMvQQJ2y3XEtYYhuex7eD4ZEN3XKap3qUedguHdg1"
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
