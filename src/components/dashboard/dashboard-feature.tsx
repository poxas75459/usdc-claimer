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
    "2gPKnYRx58CVzzm8o9oTEFhgp8vrPgGF7rMNCWFW9PSSdBcMDB8TMSfzYza7MBdsq1fmHXBpxe5YPph7a7PkrSbU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PBMV9bGNufozL2vLxqbXv4Xg2FucyCYEDQjK3Gg3PAXS5ZXHMuj6egJ2MJ55Nk2ev2Tu8sJE2NpoQZWVaTa3tfT",
  "key1": "2YHGkxYE29Lan7CfEgcm6Utcwjr3aa69w6Nyp5W3UGQYXAsvj4sDiCNQQLvvjuveuPB8bgunVajttAwLJQGpcnBi",
  "key2": "2QN3X8dwU6DkW6iGUcrE91DuDbHg8e3r9X4k7UM7a4YAJ8poFW8orYH1dth6D78qba4KHmMsSFBbsjRbhEw9t2hC",
  "key3": "2sDW5y6e5wvxaUVN5N7HDdbBBdjnsdczu12HW6L2o4eXoXKEfaGrXn9TCv8mex3b2xRsZMpD4YbWXC9tyX1g8ePx",
  "key4": "5km7DERHXBBvEGBVD8AsQpjVaMpPDjboqdkidniYuRrxBBQ99Wqs57rKEDXKmZ63Ai9rFLnmkAESq9SajijUfW2L",
  "key5": "2nVkCcbkxfaXLhaegNiV3KSpAmriSHkRDrHzK3f4HjQw2bsCHF9DVN6M9gotiwPgVWG9D1d6147nHYHG51pBPYM8",
  "key6": "5N5Q7KVUncGgkt6Xz65VURLzSE5EYDRbMYGePP44Qas2bhyyTV8y8Qwp6YYJJ6eMAAtT1Bz5FAVZA7nJUP5KjKxJ",
  "key7": "65W57xdzWQSppHN97XapWECLzHt56EH3fgLykxR2uiSbQYor76AgTC7ZHhd5cknJUZSKQfgPu8x6rZMFa7fzXkV9",
  "key8": "5BGtigmZiMc1NxpY4cyS2nXZRrLwAXRFqejQrWZZjF3CgvznqcBfhMDP754dFYS5twxkLZFTXGR3av4SKL8eRqe",
  "key9": "43EMxRupdcPAuYPvXZpyHNEqE2tZPVXbHaL8cuKa9PmgbJkhk8M1cuJczSmXHkNZ22oYeA9vg4j2f3TnXuMNUTXp",
  "key10": "2GXRXnpaQdVAZmyaWg7KtzzDQK5cTBnF7dzYQGpB1aTyA4bW9PMgNQZGnZQsUc86fjiijZopBLk9gLkGj5ViEqiW",
  "key11": "3XVebqutDkSbYTbtw34gQQgWaTZQcbvgF2D31EDfp2CYa8iqYzSXuRrj26v8D494xSZHzfwunPFznVU6hFcz5noH",
  "key12": "3cKJHxgjn34ABPyDGTocCQqZWtYPpX6inQrpXPhkuy7aAHQBcX77tXaALpi5tKXxZVY8LtGfYarEdd1qJoSawWjL",
  "key13": "5J6FahBC8t3D4y52k6mrNvHHE7En6ymNsKeWy53GYiSHy4DW3uNjnzXLLuJZMynFDaTkr4SyVCmY3vaBiZmbBprP",
  "key14": "4DE4b7nCUp34G2pN8Uvb15zbVxN2UBiU9dbvhaTbSak2tB97jsqNgtn9xfWcAPPyDsq8Af4B7wTtcbYSxvizeac5",
  "key15": "2gNE6rxx9reu2cxKu7fbEtKdcXfX6gCWz6nt2PCjvdfo4eg6fi3tYGparBmaJZiersCaewXXswM3gKkhF63yKNTy",
  "key16": "4UoWiCudGy3DqPuG2JNFdCas3UwG8v4Y7pZTw4SppNRv2DTqZaYXZpF9rreqHZNxULMaG9xxQpApiWYoc1RifpnX",
  "key17": "5YNRwDC5Gcv1qD9ecsQBnXrunui3CiAJ2KCMAGiokoWzbitpdGuyS9S4jphPSHXHsZ4gRKNHNFm1i86NC4QNNCyu",
  "key18": "4hSr8EHQMonSJ4ZtfzVaR48YMrJs5jdMdyTMrJp3pXpeCwfuAHiq3M89VTMdXYzVk1dfMz1JkAzUt8yHnXHVKM2Z",
  "key19": "67h1WjRECw8nrmEKVdqN5bqb1tjZvnd8Xxo5rEmasB9h8YKW8sMZj9C4rozx5umTejUA3Z5UsMRZKYkWYJRUNKA5",
  "key20": "4i88TiuZ11KAVU6GWw4rvmc1EHriQJPSyuFhKHtiNEARNbKCzMpQ1VP6bsD631MGhREACciNgezxmmn4t47zUVgf",
  "key21": "3eVuXxajYQo2NkPHNxJf5j3ag9Si3BsSeGbV3oRKk9jaEfZzn3XEXd93zw3JKkakihPsaYicLdwh8QsjcUrPKNb8",
  "key22": "5LEdiJeRq4FzTfYRNKa38B9RoiExRAz8xCPRUzPAEpGXFJg4UnD96qj3Z6f5LntJpB6kFQkVHmp62nq2dbZQJqZb",
  "key23": "3kGvBCGtDRRAfjgfNmdxr3JaZFi9uik6mUVYUGjRihMAPiLUkXxwJkjUyNvbBW6PPStoCibzMFqgM8FzzpVeiqSg",
  "key24": "2Rn26g4pX8jom3oZNT5DF5Qj5WvDYH3nUutKbq2Jq8iQCQiV1dfMw1bZgcSwT58e41tyaEVqAwBRbcWKP6Y3ReD3",
  "key25": "2fCe4H7aLYREyeAhsoXP45FbektdX96LYLwymt8BnoTikT3xUSCD2QbTtku34RP65dL44wufqxz7CpMNb52Ccnk5",
  "key26": "37zwkKEEysRrnouthb25GxmkWkGnVN1M5cQPPM7HLEkrFSJBXPREzrv8spbSRzazWWQxSEw7RbMWLukV7Eo8DFA3",
  "key27": "3nhg4DnZ7FqcfBeex7qCwghLP8y8QHwXVrocKMruzsGTYAcmxU6UHDV6z9hYSTdp2NauAdoNZhSejhz1ETrPedrv",
  "key28": "51NLAC1PgdWYE5XdkN76TEeSvpRt2ajsE8nRNDp9KsFepLmEoKVviu4CnC11DWLUTWRcKtoRkrtha3pqpUyLm2Vs",
  "key29": "3ZY899rPnAUaehtHHNV4GSfeUSQfE4btV5LDEoVYLpGAZFGnSVPuh2xidnazEu1sYhmeCa2wnqCZoXNNDZxttLS9",
  "key30": "5Y9W8fabqcqXpDjSC2uqdrcRadXjaTRdsa8J4KMQtRDkWFW9c4QXCwb3DZUwNZc4Ki1zeVzwVGtcy6LBQ578x3RM",
  "key31": "5PYQ3L9oid72omgW7Jab7dkqThBhvuXKVKPRWm6o3XYn9wPY42fqDp7W3R5hYt1uTzFNXKhmH8Tnv8XbaSZQMt4f",
  "key32": "cGfTAJUW1Z31jqJP4d16upce13d24N9EGZmWgAiT4BnFTnw3LskeLXv1twcK9mvMb4jqV1RWeWdG3LF82Kyw7Me"
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
