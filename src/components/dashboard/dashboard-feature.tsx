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
    "3fP8dEAvaThMpYmhY66R2myapZqjJJfuqoAqWKyWUCcU2G4Qj8btUdMDEF8VEDmVkJcX31uYfVxH8ejnnhVvigWW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45WEsyZSNpoht7Gfha3KbmVEj3cDjnjcGixgBHAxsNBEsJJbjsQymvugDCvVcfyEJzZGFpojPVmFgEoWRQFsFYkx",
  "key1": "2dkSeEpYG9RjwHbWYE7MfjM25nCu9QWuXMtCdAxHcbmopMtKTeA7K4vB3H2wtVGJ7jDBNLDNBNXSn86StbpSCjqx",
  "key2": "46eftBB2RLRTu2LVtyosyiqeqjFzd5Z6bW7K8U6uQbUGUHdKwpejPhrXZjrUQ5Qaj2BMUevU9Y6PrXZMmd4BcKii",
  "key3": "P6RMKnYQWnHbEwzR1FXEYWgupbEfa6DimhvgkgbWTyVwSqXFhegprfKb1qxUuTKPudsBNSA1spAJbFPmUo2pdtZ",
  "key4": "btHZtxnoLLJDPV326gUno52zzD5f7epMRLhuj1FZ6Uo9vZYsEQed9398jMBKjZBiTohfc5UVGueehY5kjkS69xc",
  "key5": "65AS4Ev5ykj5ggM5KHwRSpmHU7KDk4NwzhkhQTUFoYtZaFEbKU6U9B8epFNN7nrz3sQhG85uxQEZD4aRDr8tQszE",
  "key6": "45bHcx3jWZbkrju6NwUvC6E1QsQK2YYZb8fHsjjH2b2NYrGFtHG57oayFsKnzZNvfqAQCv3JvYMBG1KuLJn2pRmA",
  "key7": "5dNy3o4TrRCRDQcNRphfzVWwekvRWCAbJwTqk6pJZpKEV2orBabkaKNqDwiuVW9LPpZDySpQh1YRbmDykqNYo961",
  "key8": "5VZ83BvfvpGRPcBWdiVU3uq5itjXMgxvDKczRKASP6Mh3d5d3X17HdbKaCe2XiLJWcqKYSi7UCFxVMJn6Lk6A1qk",
  "key9": "2XLBj7aLb9M87KvHMGrTHGpJyCGqkBDJxUXLBgW99b8ny5uRxdxdjTCnVPmmKAgg1ntt3B1q7SzYXez7p3PAUAJo",
  "key10": "3CqD4TEdyryEwukHcQvULTAPshZhYTreHwpmiAcCYwmC4uXQjEesX1fNEAufERtkof9pzS5Wn1zhigGsc86uZnKE",
  "key11": "aiaAU7ZrsdKgvXenTMRwBYyxL1snGJUDURpGXf8dAqeUjg1xz2dARfLLjXoxFMdMKtJf7ARYsH2FiA7Wb36ejm5",
  "key12": "5eM7KrJnmevKVqfyySXafctRMWX8CJo3cqY3VAZWQtpx6CubV3k8qykcawtBcSEdzAk73HnLDiTsVYQucwejZ6WF",
  "key13": "312KyDFLkAi1q9DKH3gELPVPWnMYcVF4L6BHUTV4gehru7E44k5CGKRawRuSiQDQoHArTi29i4R9Pz47KQH3PQHV",
  "key14": "2i8sdxQwcQJso2fZHvTYQJQBFsoNJtjyxjdcoUFpQAaBuM3jatz7hneoCMtKKmZ2vb4rZXbtAJga91EgyupS1tQN",
  "key15": "645hUMyjzFBH9FtNgcUZjNVAJuvkuMoCsdd5RbyARqTRRCfGPJYQTrKzb3TTHFGumxvKys4emkjbpPUtjeEzM897",
  "key16": "2Bzwj9DRzrzGwvG9W2zbBBQJrffkpqL7o6njaKJPbQw23ZvaA7aSXGR99HSHQiunWjjdvTwHkiFH11wofgrD1G6R",
  "key17": "4cbyy6EXMsiyk4TWrkJ3GsQDw9Y4SRH4qAxFWYifngxTqcF4M7vQVzgVDJypg5esdWHLqczNZarzXhN6n9mcTRzp",
  "key18": "22RXe1Jko34bd1zZFe8QmXBqSJUs6G9nMHHM86aE55mELeMmmK4FFqGHbK6GRwEFc4fveYRUzjQLeRWgv5qmUJuM",
  "key19": "4ALBAPZdD8sr9VpeBU55aoNRSrtm4Zsay5AR67BRgLRq9GuybYc6PGCKMxjc14JwjFTZdPgHUyBL9QwWvH2YWfGP",
  "key20": "XaDbtgbw6C5QyzQ74hrVH1C1pCbo22hjWjqcKfpqWKitCk2rzb2YgHntoBkoaoYJZeZ7Y78TodD6x7p91WpdTsw",
  "key21": "2ChJVfGEcg7nb6Qq8SFkMdnnqc37Nhmd6U1zWEksXwEfr6194yFuttygBX2ME8qpZYacRLSt8puSFHBm49MJwdX7",
  "key22": "tmqUaL8XD8G51oNaX2YF124DB6hJ2NmFC4qX6U7DRkMvF6nPNtoV4JQSUKVt7XzzSgktSfKPTh7sRbDeeKVo1fR",
  "key23": "5X3tJAJJYUTgqR54SvZbbEq36SpVzVxUn95BmzaCkFUsUNb1ehJSrrWDowgqZyJHvvVkvzvRBAW4NWnsDHgbV7fF",
  "key24": "4N2DETw3ZP2o6witg5Hm6kYiMdpqTr5kUwR6LEM7M8idMAoSKGbfJAidCyFjFhNMzr9ozhXt166Z5M3u2Hw6XTCf",
  "key25": "2fGsNRUKAkGBQVSqW6iQX3KLcfYRXSr2zJjaBvkN6Jmxbcks4eJBNU139seMBWLBTowna2rM6jYZmVnH6RPewUmf",
  "key26": "4Enq8B2Ho2hpQHefeuWzXmGCaif4DynbnRPhWTPz2ymtp7zeoAfKxuDfWsPWBdedgkJaLji5ZLjQfgu39CF77CzR",
  "key27": "9KT3CAxomDaVCsrP2RKEG2wAn15c5LBMaPafWwT6YwdqhwSGJY8Pwpb6cAEKWDfHE44Ywui4nitEWYxDpxYVTJg",
  "key28": "5qiHf4BRsmoe1Sr5AswbHg2LcoDXRFZGV9Lpoho1UL5VhZTXh8AENHbR8ApeMs4kBccDvGHBvJTzNYBTgw5RuU3f",
  "key29": "4tb9UDTMuTgoRTj2pz2Kv1dGyhWK6fhFb5FVRY1cTmuHashRmaBgt2wMJvASjBPrBEg2DqW9HbMVDd7mdpPL7P8E"
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
