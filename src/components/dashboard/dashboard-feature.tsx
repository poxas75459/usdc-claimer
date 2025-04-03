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
    "3pS33gnCPwPpJ2fyd3N7sudAS8Jd9wNCRPkTFftvNcjRSFyM5iG5JVium6T2hukPZsmM4bBXEHZxKFVcjjr9eKp4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rmrtKwGWbTh865YqRUJvPz6SsNKtnskySqMYwGZ6A855bhwMSGsNAF4pCxURhXRaGx3CBTEq8Tt3kXSeDzU4fEX",
  "key1": "2nAGtVX6QnQ4BjnFZ1XpEMNrqBFDX8rP92p6CGcdwUe1ivmhXtG9jZQTNiCDZKqkf8cFXBmfZYZzcSfoy6bSyZkX",
  "key2": "5SbgdLUxZRSD9hsSfAtqAwb1bLeNVDpSQmAFs2GbdXP5GdgfPuAHcDtRowFtS75bXkmGeKQK7Fz3e5hzDfcesPJg",
  "key3": "2dCii4NyzavhZvpoZVXDCuCoN7C2vekay8Rx942meYXnPs71UJ7eoUXgzLMc6TASMqtUBAe7KAuqCq1LRjUZ6BuC",
  "key4": "2SB3dhvfyY3a9nwNcstsoDWfCAJ7RWfaoUxGAS8JyWvf7g1MPSbRxTtM4VHmtKdJGWcwDp5TfdoDkdCfY2EkXSnz",
  "key5": "dmuJN1koNZp9QV52VkbcQSRXgBu4S3QVML5zFwp5oeP9BtFXJGJGeQwfZqd7HzgDuY2wEhScvYYSFSepSrj6SNe",
  "key6": "41843uLmhkyZ95Vp7GeEDZbfB24JXPtQgTseDRPfsVr1FjHZHnEXqbcFYtQNu9mJuMSEREhtUeCEjNVcZ883UvnK",
  "key7": "3fNyjyaF6YVJ6QgeAXVK8PxLJ4LiMWHeTMvP4gf8FsBn8UkcHhASs7ERSLEZU6dyuzvPU3XCBU59gmBrkYQxGDRx",
  "key8": "3aQn9j1HHDkp3hY4sVu4fKHCkDDSaaCWuD4uy1WgPH8rrizdjUae29dDUBXRF8YP2UVPHUaeZdSpewdyii6jYJVd",
  "key9": "pEGLoVcV9tDPCPJBj91BrFWCeBax8NCcrMupaqqoHqX1GCKEaQsG7EtH9sfzcpbMUMrc2pJfajDo17zoYQoomJ4",
  "key10": "4YQa2kcuU6i4PiPppWML1TCp2bhV8hWNWkzKJLJ8kEtxiEo9TGrXcNgrEmRztLE4oW7fG3E3kK2SmXZq2ygZExNs",
  "key11": "3GUdZnHEb72RdRnKSnR84FkkvNQzPUsBUePaDZjp6BcjKqnfv1onEhexQ51AA6A3tdH91KJSHKtN5fZaCanmJ2UP",
  "key12": "4ExPkspoLB4gQR3Fy9yXWNaMFJdawu9WAWv7Sj8bgxGM9dYD4xjzgoAcW1RL9MV31FBmdMP6MhbZFbVjz3fsCtJB",
  "key13": "5NFJ5iXXpjddvxQosuwbYUUGfiKQu9Sqyxhdffqx55XY6LNP337omMr6R9fPGVfjFiacAyqcDJHzCs4JE8eou3Bm",
  "key14": "eZEUSaPXG2L8oK4BMNdAaVg8Svuxd4SaVoEHNHCGV5i7r8UJ7uLBGes5yWccCVVpJJkHJMEB13g1fLfw5Ytr5Mh",
  "key15": "57GChUPT5FVem6D6fNRCWYxZhVVNiLUDYB5vHJX2a8brJbYenvy4tLzsF1J41hf3KjEHhBQdMHfDLgU9dUpi19GJ",
  "key16": "4uSQjX25rHcSwBeD36hbkQ3BzeWfkFQW6DPgPCg7XCUDBCpvWxTyGp9bV5vTuJ4qVT1n3YbMKsLVqavbmubLPiwV",
  "key17": "5H8pEtshZ4zFGUJiZagvpJPV8BDVCKRhr1mPdDf7HRxdmorfdvbvPQScqEQcUjwwyLSJXrsazRnWPHcB72xRFq9e",
  "key18": "5scmmcXdwwbKLavCpsE572c5UnmEfUbkf4rX1juoSrMzeUJWnzoee62fjtE68dFXJybjeDoSz5QedtQSG1Km4qXc",
  "key19": "3G7ZtiEmXhqwtBFka1F1nmUMWjM6oG13ojhiYYrZwWXg781orTY4M9oh9fXH8HcL6DRGLJVc93iSkZaP8c458BG",
  "key20": "2URCm9uukzScL4HKzj914qSB7BuwsaFQqnGaV2wFevDqEe1QbcnCW3kVGyuf8V8MZSrAmsAafauPgf5nQuU7U35h",
  "key21": "jgoHz7Pv7vYe63ocsrRG4J5muwQQbnyAdXXoKageZs95BJECTdmoFHoZczQbpG4hUTPGiNnJhQVdPaMG6QhayG3",
  "key22": "b9iVRNrBRhR4PGzE4v2CM9THZm9Nrf71G94gGBTakmbPAKJKtr2NBmwK2J9TQgtkivvCUQHUKZVs1nyVgkHb8mE",
  "key23": "5HyiyegZi6eKZjjXCziD3L1VAyVrdtnEatu2hTFfQczWRmFhA2fu2TZjDw6H3NTgXDaTNSMEoRVveM6JZwi7Nr7f",
  "key24": "67VBkeNAsrGt9okNtZFxTpHQCcCB6E4MGsy1PQwmo1cozkX99WLG9WSASNiA7ayGN4mf7fvhvf5FqH1FQ3BihKP6",
  "key25": "4Ugbgii5DmrjkMxzc6tbPDdFak3gZifGXgN3GDPhzNpdeBmQkA5rtiRJHuZ6vWmaJyUZqFvsoKSd2V3uRM5GgRxJ",
  "key26": "64x8Yk4vEEXAhh4SMa7DUa5ju3hAdGdfFFonPfnij1cycCxNJw2VhGJjtGf3cAgEabqZx1ShucuL4BrzAEVf8Nvk",
  "key27": "2irNxvCQzJrpSHFddZ9XQjBeS1bXerfMRZKF1TygUGuV3qF7LFPsJTq9RvZ1HReUfGXXwuyZXpWzdWF36vPKRX7P",
  "key28": "yWVMZzsvyDdf6edbqooVNheb4vfDiiwp6AqGSddWWytmuLPpDGcERCyg9Amppa1nfYGdaVH4YVRfNuTbCAkgo69",
  "key29": "4QsdFsGZ7uXuTMsPsrTcoRqyNfAHr2uHZovs6pnn9Mb7cfN7BvcXGBtSPqUp3tef5u216MMVdg81kVwYCBM22jq7",
  "key30": "EM4r97HQo7AavsnV8NvA5WwXpM6a3E8Fuv8h9j2ay3Lz4ZGsjXMY7yY7P9P3268qabA43QwDb9RkUvsGiiD1k4K",
  "key31": "2MENgMZB2TS3wjuhvicgNJfGecDvcxLjGieHsJnQmiC4HyeBXkcu5TeM2ARj8MktEwcK43RorP7FUh9V7bi6y3nU",
  "key32": "2cBw1cAEpca9Y741ED38G8P4fEx2E3tuXpYnDatMxw9WjGEzU68AeX9o9qcRnjECJfrngVm9MLnWb5ZXXRibte5o",
  "key33": "23yhPtAfoujyHn3k8edRmNHe9esTfZmKwYa5VGtUuMZ1HEx2opx8dhXp7gVhA3Mb11QBjaTrD2nDtwjdoNvHujBM"
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
