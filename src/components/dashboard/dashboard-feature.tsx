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
    "3VT49evSTDi79UoCCcadHK9NVVjvcxxqeoPE6UaxNR3jCWp845yE7uSFQQFLRfSdv5rnpTgGEtxP1qEBt27MdwQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HwrwpY4f3e5paJrPCDVZ5tppNMFFXiuz9BVTaGQ5fBgxZvy85HCtbxNcjo65wq4oJSXsrsXWH4yEk2xzGVXAWrm",
  "key1": "5Fm3C2Mmie2hNYC1JnXVNyFXigFQPD3WcwQkCpN156wJZ5QBnYQH99AY5R2tjMVaFwHDg5jsx9PBwAnTMiD8BjNy",
  "key2": "3pV1MzRAKxdr99QYJVH28TRQ29AxvHQmNGsLUahXZATcN1BkYXTYBYTcLsVBJWSyktyRwh56qvwQ2tY8P3B462iZ",
  "key3": "2xVa1wMypgrmS89pb4M6w5mgq3NeNaKyHK7SyJ2QVeWb8VbimPnkWtbt2dxr4rXWxkowdHCJouXD7x6THKsrB5RQ",
  "key4": "2qRLa2951GaK3BRE9cHR23U2t5CNDuWwkiu6VWE2RQ7mcJADPubTezfsdjGCrJqJHLkJZCYTaBydBMvco3HCngrr",
  "key5": "5QK2Q19XCH16Kz5phqipUAjuaDj997JoZcpug6UUscqFmhTfPYgUQmg4MzVmVwocsmkLqVfrg9cGuRbPbVWUKiuT",
  "key6": "4Zpo6qVpgxbazosZxFHDmrvhxiudiiGDsg9bFyHPCfJXQqepPd6RbGQAfwfAqLs9PJqNZEGgSmX7pxEdtwnJyQzE",
  "key7": "2ypB4SssX47Dy6VkDcyRiuDJmDHofCYKP4T5ByjGqL6A34KLtYahLEzA6MJRLungyGCCkzfWqbWzie4fcLJJRt9e",
  "key8": "cFxf8E7DjWqJwruHMn3U31tSxBhtKRLEqUS6NjbVgfHsbKqM9ozHkBQNibvaASLHdVqYQcovPPLnUqueSpNHc19",
  "key9": "2eNZnHbJcK7An19DNNpshVBp9crpsTsTvX5xFtQamQTXDZmj2a5wzdj9pttVKWniERveqoSFGXPVXhSg2E9eJrt7",
  "key10": "4yWACUbvKeNq9ECNbPQQtDFnh6eFWcenxgsSQ8b5xBNVPMH3fe6h4FvuFaGTiT5wmf9Fkidc7H5xjqH75LNEiapn",
  "key11": "31JtfipnbwVBHdCTvyWUuNcfqhcBeS6ANotGZ7DDG7Lam9Dkw3JdFJM8ecrSPW3gHj8X4eMfXKYaoxmKoLEGRX4z",
  "key12": "3A6ZfEiTnYKcukKUgK6AQ9nhCUzp48mxmLwBg9Nk2zeFnCchDKYs6XpQ7kSvFC4HUutAFrPxw3q1WWad7vJkrUc2",
  "key13": "3vnpb1hweGRCRCrEXwPsU6813zxousfArRxfALE8GKFW93XvwTWcw4NXAzrXsSePX7AKnrbYaBR9Tokzx4r1jMrA",
  "key14": "2gqp6sr8iLrcNN8xdztCDhT3q9PKemfQpedzb21LottsuhDkXNZSuArBv4hhXCC6iErZMwjDG2Rb5EDUHqYBjDRk",
  "key15": "3VgDkJDd7vqkTrbC1mWbkNYaYeBaw9pF2AA3eTwcySUn8XcRSVYjCmNcnn42GKcDtxswYfEuaTQsFNXw8RD24UBj",
  "key16": "2L6gdxL4X32grRVsj7gKdUpZHwmkfBkRqhdXWL2YSBXDEte5AZHaHA1y2qwcYWZWNfkeWfNMLzUEHwxSqyo2g6om",
  "key17": "5tWDY5kPpgt8jbCYADjxMsZcvkTovzrFjbcqxNLKKMDxW2eAdrxYT8R2Xwawgf8j3SzbcJPu19owG33uMEUkCeQX",
  "key18": "5RbbXuWANTH11mTMadtF5tZDxm2gxebmXMe9mppDd9XPbfXHUjX8qDD9HPw2Yxr8Rj7gTAKzD2xps99gBCRSbbfY",
  "key19": "39G1seQmBWTspXHicGEfv7ESvHeirJKeJRCPzW199evn6vkGoKRVf1Ku6WFBR7ydCcuvKFaXbEhMaxPEUYRmzitM",
  "key20": "62D4FBE4fyTBNQDTQiwWJdZBj77noUzPaw8zuGT8pu6ZZGSCc5LU3CJCEZn3o9qN3jyHCa6yM2emkWsjQopSASeb",
  "key21": "2SbG9r3zDC5qdscJ6rXYsb6qaYmbtu6izEGgoodxzwJN2az8jCw6Es3WLNN9ZgFskxZYEQKdn3kvt3RdbdvntjmR",
  "key22": "2baHR3ejeh1CjHE1wrK8uNHoA4SGKnNKvBgGNaVBz8D86wtwLxz7oaP7vsSdwD1F3LciKzFtxB433pvvdaJZTHNd",
  "key23": "2LBzZZCbdQUiXsJCX2GgCk8RRrPirJ43EVdPEhRzmU3gSnsfa8hQ2io5LhD1MPXcHwY2wx5HS8oahYon1ZcAxx71",
  "key24": "2LXUULGvw716qCi9fhedGUEa4YBNL4PWnEvehuCncKuHXkUfjQfzz5X6wXUws6y2pzZiaQ3Uy3D2hYnqPQFHukRf",
  "key25": "QLnBTYrHZ1GHvSRCqVVbXas5mGp3MdFbhRsZqf2dZxKnoivpbPQs8TWAUmv2QfXVMX9HF48YCCKSSaHML6Rpo15",
  "key26": "4vWUemzmMoy4ivQ4dDxC4ZLWUouYUVrs5Cz3k1vxtUqZx9soozxRsf5NnxBEAwtCM6jHrHKzCJbb5JBTAymdbiBL",
  "key27": "4RtQ8J4XB1aqDaoAYdKRqP75VHxtCC5yhApJ2hy7YhcX8CcoVy7McaJkhqN7p1TyXkrbxUzr2ipWP8QmDfSwys24",
  "key28": "3F3CW6hvfYCYPfqchqbD32GD3vnNeV4T9hntPwKFb4xw1HunxYoGaXRPNNCxeNnDhSW7r9ZQknp53K4FSVRV1Dbk",
  "key29": "bozTMpEypZiWVzMfKogGve2Sp4Sxfh9VBME1Gxp6PeZKfwFUGHG1p7GXfu7HmodkbgyT9K7acAEpMEdvBQjogNi",
  "key30": "2QbsRHXeQQKbzaaAGjiYdaWYZAY8o8nPuuQLb6pr6Sh3Vfuxtq523DtjxahUb3XzEjhyKjPzV7uPjh2DCG3DvnGr",
  "key31": "5krQuvoxFLwGkv6cXtxoaM7u8pT6zNxhBHuxn4de4YxY53SP4krMZRkjdKUdPy5q6TdiCqSKB3akLNYdvuRaJHCt",
  "key32": "21dTCDsVUvDDg1VbATW9q8hct8Ayhp8aS3c2wQJB8WTtQLeGceVeWfAwchuCrSsk25rsfKpjB1H6AgN2EDARHyGG",
  "key33": "5jvmX3wD9LBXtTu3bFEQ5pUxQuTrKWskiJqe2WCsNtaKyvrUuQ5A1o41oCZidQDLqQof3eAJW6sPp6tED48pd3X1",
  "key34": "4zDLYme23PT8nLhyYDB4jGdY2DmskkD5epVjZ3dtVPjhSevM8WDSzdSm2pkjgvdVoXLWcgmZToMKJYAdaViX5yQq",
  "key35": "27g7Ptau7BVP92pWC9bH9T3sMhz1y7jzND7s6ePnxAHdSv36oUijngpyGXrhPN1rPHfzzkVHryqcFrk4x6ToN6d1",
  "key36": "4FFKqMLk1aT6cz8AmCfNTgixNmVAUJBhEfPqAZyDwVyr6zUsumEf8XWmY4beYmChzUk2skVmYjMynv4vBFmHV9io",
  "key37": "5YQc4oKS1dDoxHgyR3ERBKf2VBLGpCqjiixZ7xMQKMtERtS4UkRjpDsLN9bSjqjGMqC7wS9FwcY1iCD8esc8dM3w",
  "key38": "3MCCmUARCMEw7KkibVYbYRrGGBcwmNL3dAxtHXQKBBpJ4ENtDcnph7FqGiC71jXJG4uhxKY1hChCQKiURd93AW7g",
  "key39": "61uvzHaXjy7ULDnQpp6Fmq678u6LyP3KvV5u7VtQJ51keQzFXR5Xs7HnEHHWEmsxjHZEUec621ZQ2dVLtqYFdixt",
  "key40": "22m4EccC3jFgE6aLW6ydJzjMHrZFboUB6K8YSgXCHnnMGUMBxyri1fGJQirNGziqRM8HuQsGg2dbou8XY31fjKgJ"
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
