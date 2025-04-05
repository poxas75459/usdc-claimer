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
    "3hAZca9n5jFB5wBQ7xKPoFp7RW9A5NJQMJVKeP753L1dAZ1jS325UYHQTcZs8DnpcUh42PAviVX9mwdMvgmPJNpV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29BmQndsthAuf4nWGj6A3VNHrhMWibJHGwdCoi5jBft5hQhE1GJbfSr4GBgyAYVT72MYrAyS6oyEH8nSwU9bVABp",
  "key1": "mXRPUvB6pMmDXokYgoqeRNKaz5XR83DA9YMvnv31F2bBfEmBrrUf2kYYibTDSX7p2JYNDbwoCE4dvLmqZeTPpHp",
  "key2": "4dEQo4p8QDhbo9ZgQdxVWZ9RiCZwrJmG5RRKq3qNRvoEZ8sgPd2CmwZyHaZ9fX5SNNcuTq6VkyosHep28MNkgXK4",
  "key3": "3WLAWGpkY7hdQwRb3U2r2VhSxaHqEEud4Qy483Jq8rsWVyGicNz7VDvmoihW9t2RmyiM8DJQzGoskFcjA5BVAxp1",
  "key4": "2JLz4mKZiHz9bMAoS6zunoHDc8t1g7YSZMTZPXJ3tQigJDtaNoWYkRjnHcViRS9WjtsZSFpC64bjgMAYRJeJcbbt",
  "key5": "129Xqfupw9cSYjnRjeVncwW5vntYqvuUFRAwQqABKNEzREgQqipHU1cdkqGwyHo43drmJpQampStwNwtU8wYHYa3",
  "key6": "YbCasMusfpTwHTeR1cdCMoF2qz9MB1CgERs8H7YrcQ4EUMtyCKdpw8hdjViuEBYPrf6jC6hmBUUn44vJfUTALCE",
  "key7": "VR8rvULRUvUkqganSggmXhFk5yb5o9JWUjLHAJyeJhdsLJZS9arMGzr62yWv2RttgEYbCbJeA8NwG6bbc9dgTGW",
  "key8": "2sUVo48pJEfP2WyUx3VxBBVmA1B4FodVtayWDKLx62Y2S1vzWKseAqB1v1JNhz213dntTZxrBKfd8AbCwdWtQaCE",
  "key9": "38TP6eGVLGiiSzfn1ehLhZt6Fukz3mFkJqoezZXYkzxY7bRgokg8c4P3vdWM4A9tjignMFPFNoSp8Km78jRdzrFh",
  "key10": "536U9dpWMgV1Gn4ZwXeKFwhf5ZTtAfBK211UWMfEMjiPLFBpA8erGf7TbGZewxEnirQtq9HLRZaxwbygtPj9xWgf",
  "key11": "5syarm6uUo9jhUgLzgwqkDH2C539hb8M1Q98Qf3uLejjLBmeUJKnLFXAmWe1HnhSrZswxbthXuSNbg482PwAMFTH",
  "key12": "3asGx6nJHYzZVmD2X7BVbbtt98tLt62nW7E8gPS3m5bRTxYkY4Y72dSZLTvS3pckTXEaweSwZCXyokW9uN4bNSro",
  "key13": "5Xy4ikCxeC3sD6LLftjoQu8vr4ZQzCMuPuKxXovGeEaEBJY5b7xH8WD8rsFLFxUVBMSiCKtj7UiQBLPvBLaj2J1F",
  "key14": "3Sn3G3NCWnMC9tgPG6kVn8vP5f3bKvFiKro1wYMTCv1K6PoTFyu566UU2o5xmcexQPmFjAsFHx3fHDcowGXkQCRA",
  "key15": "2jJZdAxrcopgmrBD8T2THLQK9uHBf6vRGjUNay4ubVY2xtS3Tc4AC3H47vNF416w5VecGePFwivduHU9SzRXSCJ",
  "key16": "3kizFxmZLREtqnPpkTjUfHeu2WZFaje2ubdVeXtjxuicay8vxZTHbapeVDiZUxrYA8uX6DJUeTqcPt43SdDDRbRm",
  "key17": "2HysPP4e7k3eZajpg79AMMahHLqW9zJjbcDL1XWgAjBRXfvADJzP77Dw2nuYC2wAVu6aa66yJasT8ZL7f4KLEZbo",
  "key18": "4ggCC5nVgRifVdjV9uURSdmc6jpPTdMvZupGEexFccJ8y2gAnkfmhPFVR63qks6H3igRyj1jYkVbtQFbYyy8AFH",
  "key19": "4vUqjyFuGqT4YhqQ8LNmiJSiuty1EPoYtKc8QDWYehAWcH9wGoXVXLVVti7NuUaYxiLGqszPbLY22smnddc9WB2z",
  "key20": "642692JmfdW3tvCds7GKGt2yurDkg1zm5HL9xLtrarpbqNt2zCZ2L44yMKBx1u6RgMGfQUh5DL3uCDqf8MQRNxbC",
  "key21": "3YzJv3pSZv65wGLcssXS3bwGszp6qh9ecx5KzsxyQv2LsctZAtBkvnng1tmBwLm9ZC9Z1tKeRvzwp2kR8bqiYa2C",
  "key22": "RMYZbTSAAUz12wWfdCmzQPSem5JXSHTETUTDuQe2WiPjSgR4BnnMHJ2RSknF8JBLqMPRGkfQRRoEnvMkqzJsmnD",
  "key23": "3juexTRBuyCPT8UoKJVEMPmNE9wxWfLevFugnTDoq7fna2nsWiPxGgNpXJd6GwstxnmJG9vHvdWLcFEsh6c9zxy9",
  "key24": "RjqyvMnavDziVY3fikqzsvBTXpkAnUwXzkgeTQyrgs5LhxZGkCCsmF8hv5Q4Nno2xsyyE1nfx9PZyHHe2erwHHC",
  "key25": "5iDCV8zoABdpqNvp2JMKnbWov1XBGLjkYFCveh8zYm9eBF5aeHRvLJVSeMgKqQrtWQgJcfX6wWNJAwx4hk39t7wy",
  "key26": "3dyVdC4w5xYSw9QndNePhUQvZbDU6vokP2UYxGFu2rq7GFsf81XBfmk52q29YSnb5jD3VHEEoYLkJaedreKvFQTp",
  "key27": "3vZN5wM3p8PQYKrkmYmZxTnszfQn5oqGetJ3u6bZ2XVKw37EgFzrvqEB4aVexgwpuwi5mi4b52WwttkCs31TC8E",
  "key28": "7iVcWMNdZThdthP6noynbxAvpdfAVto7wuhb7pD3stpBJhdgtQ978j65fdhA8pvXheFgM9KQGMLUbCBz1Lu84eM",
  "key29": "2CvXKisFoCyRLtMYB8PfkT4cceCrvPN3Q5GvoV7yTKaxDArvUNCc7y5TMWKP42KELDxJuHjeVx6EYsSAgw9p34o8",
  "key30": "35Xjj6Smat6L2HcdkZUPW8D2FztCxKTtQyqFNjhSNfkhapkL2wqPjJhZJ6TpL73pxduVSvM5VuK5sQ7kHoLt8MTN",
  "key31": "2NzzZkPenWd1kcceSoyPBKAxS6n5n3aWNBaxFZxMeP2o4fbWS3dzxJsh9LKc8dasjri1XsMdoCzZd2vzBqiszDsV",
  "key32": "hu9PH1wQoaRvhGC1BS5EtV8ZR5h26W5eC1R2ZTCsvGdm6kuYEqnQaRMDKyarZFf1mjoHbKGmjvWWTLbSif1YNTy",
  "key33": "5W4Hv8KfHgBjLhAj2sTNWDWoS9STmXAH7CbWUcvnPjaQNuE1b7jAD2tTiTnkG9oAcs2ruziH36ynmApUp7jBF2qL",
  "key34": "4Yvffc9VqE9v26vg91GQEjJkGJ6nwPzSAttGbA3NnHJgU5bXBuVNWdwpMVeuFu49TPdnttNYh7cPvPZNzFwLf9yd",
  "key35": "3aim5k3CF2yd7XgP4D7ty68fT2Ls5W1Qo5kB6bGn1udk2qAmN6gh6mb8ZfX1LzyUmEgkVaUk1xUS4yaAaS5fzP86"
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
