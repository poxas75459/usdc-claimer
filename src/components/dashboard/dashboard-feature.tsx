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
    "36o34AJg5xQWdmmnx7MMyTMXwWRu5AxHahvP2R6r3FV62UWUg3eGRvJUFtWoSPtLBLe6jSEfeuhdykkkywyp3dsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s5YP5GkdZjXZRT87pKohHwFQC6U3pwSAMmowJ7r4vfBZSGNjuKEf4EM7uqf5YZuP3T3ivAnBhs3QFmHkgyBXbTn",
  "key1": "3d1xJYhdUz1Vp44HpgpRQKPddYcrHqB4Z5TpRjunvR26x2jG41H97UjWXgAPdGzP7TY1xjUt1VyJTmwTPNFHovxr",
  "key2": "HRvwyuJwrCtL36RJCk2v5HK3m4yHSDtjiEZFAPqVvGvSQcCzv3kMLpCwVyPkZYCTyAN2r34ktAkSEMWqZ4k1dYP",
  "key3": "2HnVGVdF5pppd8apVW1sZHzCPhr4z7FSSqmP9r8k5zDvtair5HAX5btq8DL7HsczGWnB8ZR7ZR6HVhyabyeQbGLx",
  "key4": "5jhxenqYdHyxKBkoQhYaw1DUdj2rmLbRH2n9Gf1Euo1ArhQHSRu45kgguLrQrzvamnVDHusXMss7iPmnDUQ5cCZv",
  "key5": "AheBptXwKZNpieKTPrU9JY8CrH77CBPbukaiCdAab6SM2koAUo1A1Yo2huLBQyKcnGEpBS3PTwyatY6JcRLZyg6",
  "key6": "2egJikPNd1of1f9LZVbnFs8dXDoHeA9MRnNJhU8UZHAq27y1v6E9jEtSywV4D62ZtQFazmLxk6ZDCy6uJFP51mtg",
  "key7": "2mivAMfEstMc6tDB76qeMV2RxpRDMkZxwSreP9rCXSJ2rfbB4hv7Q5MQ7wAxfynoEpuHYTgaErmxGF7QswM8WNms",
  "key8": "FpyJ7dcnR4GQ6hR6t7BNJEJsSonvFaS2uoJRXPE6gebJgYrt3niSeSqCRPxHdajXBXu8QemcLEvnBivYNR8b6MU",
  "key9": "4mLtkDBkKvmuR9HfXX8seVzU5jtMdKzAV35aagJaCzhJsedx646vyzEex4W38CbEA26g6aKx4c311kiB8ukijk4V",
  "key10": "2qT9r5TJqG5tM3cuvtYNj9Hh4pyLMpe3nY3quT9kzbpweK9ui4mXrscNDgKSdtbEkcSdTMQGxND32R45abhqzcE9",
  "key11": "25pNLXo8FPEbFVs5c3PmXkw2yLXsurcqGpogangBgfkjrrJx1nQ9afnbY91pENDWvmMNEYGL5FbauGYxX9rsue18",
  "key12": "37LRbxLff7dN1CTgsyMf1N73fovEAbaqTR8N71rng5bgx9Y6bVEHQonMwSVR4opcRCUDEbD2EXLTBS7Kgk7pDXhb",
  "key13": "2WEthCLK6wDFy9cjJbByR3rr3ZsGGeXq3TNgWnRRGYPcxMyoL8dUu1r7Gm4CDtBTJGU72FggDpQ4bn5rpZUR4XLc",
  "key14": "5tmvHHbN6uUprHeSEk3EK6v42ATfTjELxnYvH2974c2cBfRigo4JUvCKsQM9VWeDUdGiuEZhEqQGX7gps3y9f5Y5",
  "key15": "5oaA1Zjf1EVnXn5s7U7bCfGFoLLZAP7kBfjQbZ5kwjWvukFGyvvYobEMvTLmhCiMWeLikiXZwAd8GgM9THLRx4gB",
  "key16": "4DEq9R4w9CgbAFWwNodDam3JEmeQPaDPwQrcywQRhZVtb4GGCrxGJ7jW54k6dDBt2fPLpA7kGpcRYWyX5BUGf6BD",
  "key17": "cKTuWKVEjYTsfBhVEy64h4MEDG2meLkCJ7LzowbKjm41ovmGPE3kpECYS7qRXFxx4qUgSXtsGeJ76TohEZLUYCK",
  "key18": "LuCCYpuFAQeQici7hhboLonN74pt4bA4gJqSKPwc3BtKSG2VB2wn4QirSzWwqQdFEq8QYE71Afju2Hht2Z7Y8PV",
  "key19": "RVRm4H9QQydvHgqr4ehxtGyNtLap49jR9xTy5b5rfbD2hrsTHe33xh8THEUPsABhKBe53jybYsB6ux3pi27z7Kh",
  "key20": "26NVVCYYkS5YqtCW2R7Ntu9MYkCc1Ld4jJLht2XCfE1ZEwnr8dB9e81uL5NGfdDNsWfryUZswRpVBLANKSuz7HzP",
  "key21": "4W54ZcThzt7GEQE2fUmiu75eKXKdS8zWGk3RtJmSTCm5zPBRZurWGqNpVHEDvjkXmN1KcnQ4LWq8RCDUpzrwB3oW",
  "key22": "4nhokh3qi4ouD1b3j7xESRQshr7dkwaMW5gQDaa7DV9MyNpQPVzsRAvqKjkZnYgzUgqzpu5N6ZZ1fmWSRJx2J6sW",
  "key23": "D7hEZzvW4oHnhUTBf5z7DGv8derqMQP76ujHPC2QVjK8fGaH3pZyVA8j4gGkCVbZru4D7m4HsscRXmzw1Xgm9ng",
  "key24": "63tn3HQHLALoDUjKwfsqVoM7gFTxF22DzoskE11xPiftQysYntkPiBJADQub1UMSZ5zPbsha98sZLFzcttYo3jqZ",
  "key25": "5oc2KCwnDehiQKnyBu7zFYao7zx6b6YTiyUb8AuFjcdwgYA7GZjpr9jr9iSobSfBBEafdNBefUdKJZKzJHfJYjse",
  "key26": "25ThnBgNmRN5ZsZGkwTyLm6cXEeQyH5RX8spbVHBFBJHxva9c4iRATuuaK5H4KxExWxvZgYt9c4RxMR7zZfUedqR",
  "key27": "5iYtk2F1z16RLjXDDrmStJTAGgc1DY9uRTsbmkwr82nXTEPdwri9yYvNcbFASRJHCg2hCGw5DPfRRnC8Wf2Nnv2u",
  "key28": "3XRSGcSV4ZCRdLDghp6G4d2MhpK6ykis8WX4cLyxv2gjzmAUn8fBdWM2CZgibEbdL1ukYFWTB6QBFbDJaeAfzfDK",
  "key29": "32bTEvKhKgshc3oPEfWxAvxGUfWiwAdq2FkVjx57xSSwk99yAJQHQXicvdrwagSyyqZePVkrSarpn77v9VBcAAy2",
  "key30": "4X7RY3FPzxtns3w8M9Cca13KUcVun2HqTh9SfAGAvyaaj9WMgEJRzfDZ727V5JQk1ZoNsh3ZKSggVLAEPNMZTBKF",
  "key31": "5RTdcFFsMgeC1JqgtyCGd2yuSU6SUSSYDpaW974ugFzipUnXf1LRphAH4xbau84motFCVi66VWSXGeJdzdbtM8qx",
  "key32": "2VVqo1ypR7hj9nRZs965Ky66j1pyFTfPtpUqpNn7zqXuwXobbBDebB3JnswnuTUygbNxiPB25rFrS9mDQStHubK6",
  "key33": "5cqGdrDgiYCGPYVRnV4BMUVAwUXcfBeAHjwqSiz4aWfoWfQN3mPETpzb782F8EjvjNMaPYcL1v7rymoywDGt8uFJ",
  "key34": "qzGudUWn69U8Pnwp7yNfaPYhWF6v8F5Ub9mgtj3HRZL9fu8ZizMJyGDdrv9sfxRvo1PGYKeMD1eJqAtBQfG4MRy",
  "key35": "5VwHYLGTTAbYJ35Jvz7SP1SjStN7AX1iMRbmaZeBv4JQiGBQeycFssTFkdGpdFvBaZUzmZQVXff8vQXbtyRJr22z",
  "key36": "31DEUW4EKF3cBKdcRzCsGJ4bAprMMQmkxGP6VGDSPbQxLcnu4RGo9uEudJWVtQdmeaDTZdRzeUEp9F3CpVSvDUd7",
  "key37": "5tj56HNcjZdXwWNXgFgNGcsjHcGL5R7B4K7RDQnEwt5puRLVk334jFbvijnXK1j7GqC55hjfqNz77T7bprrdne3H"
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
