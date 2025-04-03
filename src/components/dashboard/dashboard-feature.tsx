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
    "66KkNougYTo5G2CqasK1YtPa5fYkaJpN6pEZJtiwXcqV8sPcgeqf1pLNq6tBvQbwPSByJ9zUou7dgfnYSzCXTLj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZEa6AEZhReFBTzhKfSdJ681b2LNtRwGerHLieVSdKodBLasTprDujwtQex3Xw4XixbWrtR13rutVDJHG3D6oP2D",
  "key1": "46yR8JkeCbRPFsM88bmvuzRLq6TgBnBdfZHGHSK1R3g4vfgZmvr39cAJsLf2sbdy1HEGxHWDJAE2DCCXwiLDjnW6",
  "key2": "5Eq6h245QhfXTTKFvKjAzuCpZgcMiU1cWxRmL7i5RyJow8nbonaY7vDmrLirzuxoSoeMd9y4H7osjfEQcb4xuN9D",
  "key3": "2KmKeMGaxYjaESh4qzP2Fwb9x9tSF6wHLfT51c1JQ9xnAWo7innG9MzguyPqY9nnD9H7rCKtxW4mLCUNSMHAUitQ",
  "key4": "8xMLvpqaC9qe65L7rTm9MRpJcgpZXH65BcvUezDFXbP7xVKzFxmd8Q7g3teaSCZtSgGUKAAaCGCcXhdKwHpxLpQ",
  "key5": "4w5BVYzZWcRayoWEat3WYbGzfbtwFVoLkVcT7PVkRGYwPn1562TtYNMDHPkHSQJStEa1HCTSJXyR5wVxi3cum7Xn",
  "key6": "oBSSCGLN8QMDtFrBptL6o1DicSwsxa4ps4z9tkMNUP1azCgxnwBqpRZmZKb9mH9jzvauBogm4LrsXm9RdVnm92u",
  "key7": "3mhvN3dK6EW5qSWc6B49rPuq9PiyNu39RrricivvRY6RXdpCyf4sxqm9ZWu4p6YkrWbpi2TFE43H68EbzcegDgaW",
  "key8": "5fZovMvT97MNow74ZsgXTmaDsqeXwuoD5GBLoMjKcp5XkbCgZLJyVRodYEA89U8AD2qtC65bABxu91rDsgYUFB1Q",
  "key9": "EKhbqQUrDU6PyBYJzdMsvU4sYdkuu6yh1KuTcKBrJPd66fHuSbsVdPfM8UpXZGBNzbGrahgfvt12Wy54Ea9U9tX",
  "key10": "66tP6ouNEkAM7MxPzyeHzCkPucMxXunTUuGdMLjUctcZQdEBVok3QfaHPmK63aWXFBABrBiWCSpb6GRYbsQxzDoZ",
  "key11": "43X26EXmi6Y45RrfHCGYYaX8vrygDqZD5XxDGwthcshcMPo1M4MCwCfWrw74VhwERRheacZvUhPiWiETPw7Nn2kh",
  "key12": "3ywuQ1VZQWccJxMHT8deRknuFVZSK5Y62ohfBTjeWdquAtds9FpJrqTZUU8zZSeMqeN7RHUrc4oRFgAeZTDUE69a",
  "key13": "5bVrjZfcUbhUkAaKaugQX9kwWJXaiFPhBpCrzQSbAYqSQHzv9A36s1t2NsDPNKj7zptBZw67Pd7TiKbsjBE4RKXv",
  "key14": "5NDfrnr9XZoBnTWivRpjkefhwkRNruVJuvMuCF61w2taBFAcukXdJubnLuWyXakqhv1iguScNRqzCkpPuRsyYizy",
  "key15": "5jBustNtj7k3kj116FudjVSJkRbsZc9qGi7VEhqqbfU245ddVc7T1it1PiMAp3vkScfhhh8U1Da67EvNQj5m3nmv",
  "key16": "36pcjmVeBxhjvhnbSg8HutjCeDwEobyvmzYXxUdJn9WG8shDAfB3fBwMAUSewDZnB6s2Gqvv4V2nSRQKVcyxTuXX",
  "key17": "5BqhWcbF5yZSzDVX9iHPQgCCiNv8iX2CSSfozbzhMpbFgDyj7EvGkpR8dTjY3tAr9ypK9DpogVsawBFe7zZBKeDV",
  "key18": "xgGwrp9KxUEmbRF2GkUWdmUViyyveGpcBrnz4gcoPs3KwwrrDHpZw4bFbpB4NhVm2sJenhiRcaGMYtdvvB7jzma",
  "key19": "3EkmE7c1K6V4TDceXEzNFkqbq7uSurfPUnWmaE878K7Vy3nvKRoNeJ4VySBm2FH4yNNRWFwa6xpwkt9V4NJHdh84",
  "key20": "3uvr32t2m866UMsHJTDfFNsyrLtTHu5b9F1HdZuPuq4DyECzCZcFsAULTfqVdhfrC5D8UGD2aASkpYLGf3XqhJA",
  "key21": "45Hm7MY4Gut5ub6mUUcdhZYDHKDZs6d8oxGoQkPmgWvfUBhBKnmWna5PjNQzJDsfeQVyWwJYzKpeR6yviUD3oD4a",
  "key22": "4KFKn4FbrVWYkcz8dW78rZqosN4qPpG1LaP26ttMDXtscguLiWTDTNyxQKx2kQBemVdACoHPbZGPiPfcZrDYoeRX",
  "key23": "6XzY6ijMQdr7VXVj9A1bDMnAjkvcnudmxirgeCLx4TCiYKCG7MCStpqZg8VraeCbF56NPCVDgLW9jiJZCCLY4aW",
  "key24": "53vJibJfN2afQWLzHjLxouKGidL3zfUquMRJXvUGfBzUs4RDtgGfPT15BagVqG4gdHrPtEt4xJahwFiTCBYX7BKE",
  "key25": "5S5UaLr76DXCvhxnWEmh3g5XznTXcABd5YxUyHE5ZG8npF9PEwNqzndAbuhjMmdcnrQFSZgQhMtY4Vd61KLDpBSE",
  "key26": "4ak3Bd4Ez9xm9ANk6rcNEBLrGWS6rYczrxgEekFKW7SefXHwov5TAk6kxV2NuhixCvVnxhe3m8bWdoazYSKhVnY9",
  "key27": "CzrvJNiFAEc7mCFbF6E6v9DqKmJvJqdXm13kBc5HQsBmR7dPr8VCgofkpEftcZX8wYi3rmML6iLtWVtZww43S4Q",
  "key28": "5tZ5cGW816YJ2LC1hX5i8zkrEJHHSkxRBLtaWg1qChCEDWj9h3dNqkLHcyNhg7kfMZbMK1RvNfvsqodLt9mthpLn",
  "key29": "22b3LzP8Kyg7DVhFfyx8jMqG6VUpRWSetxeDAMdLDJxB6GbszXWfqYvLK9ToDTARGE3gwAsqqB34Dr4nS5SfXzq3",
  "key30": "59DxuVMGUz5e7TMnUeCV7MfLFDyGD4v8hjPttMUtt1TagsURztU1jDuPmMxounQ1CJdQMM9B9f9yA7sddNuxF4ek",
  "key31": "4VZ7d6jYsfH4yxMNdd1LfpLoSnKwovSSbdKaNUkbJm6JKv3d8DBfBhgMHyWMoqoBojCFaNZvrVxuV9YgyCWiiJN9",
  "key32": "4LxD8PURUbKMFwWDrjhPZcpcDHbL2aavYjkS8PfEGBXNkHvKkzPZ1QpDPDKoGuQE37zQwrSx7Bax4zctFV9bJjfs",
  "key33": "JYjhu7pBmXTPThuNMAh9FGEyhnQfSrqjhvoEQcnKkAvZ6gGboWuhfXA81ooAx8n2JECVZaDEKJHAu9iLfCcQYth",
  "key34": "z4yt8u7TJAa9Ng9dGiczBCydNH7zHL7hiLQDQ9WmfqiaFowHHHhYAwZiNSfRUWh4WPaDtoy4zN8Q1tXCu245RSm"
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
