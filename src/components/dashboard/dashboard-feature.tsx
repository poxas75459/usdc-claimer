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
    "5j9Z4PTxsErhA2UCRDdmndxoL3wAmpSjUzFia8bhuF95dw78dqbS3npaa7AbWHTx92a112ffjVEwGm9TV3nP6iNb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HeUANnhn8oY9XJyDUeutbz7TGqMUrkizGEESngAnrhane3q7nhq4C6qfR8YUuRfUg4bxAWSJwMBUMWyFfZgj8VB",
  "key1": "qCquoPEwxappo6U39KQSgS9CueJeUhAttHTQ7VUYwc4ErksFq11kfo7nFhRGMehn2pNUGgjYicgpFnTtpA3qMGM",
  "key2": "2qC5S1csWFkEe6xM66smRe2fpyQ6z5h6dSkihcWHiuHWwwQmmJ4B5ndC3WRN58erGRogHQjTtuLLmYSdSLcWoz4q",
  "key3": "4RiBvbwDCvXVcFrunWdbJZRc8AiAfSG59uhLxqRXhcDCnG2zecJfmUP3Chy64RSRink2ppZpsad3sMcecLJLbGX2",
  "key4": "5i2ouR1a3wLVTFyZ8LACdyx2mycCxB6WB9KTYzTLUsfLzhRGQ7EeuAFqo7zNoJrNNp5LQ7otpbaYyKPzEkueZyyQ",
  "key5": "4tsgWLmsi6cpUkRb4ZH5ZbDjYPfhKKaNVqLW65dSiaydqqxMUttrf2fon5HXNBocKXtFxnEqNsvQbYWfWDrUi2oA",
  "key6": "PTJkUCuVyd9BUKT81ehgU715AWThwwArhgQQngv9GMTmb6NsVRr7ifESVk6BiqaHk6WqAXFQm8wpHwRGYMvQhQJ",
  "key7": "4KniGUi56ETR8X9sw5j5krGNwqjPMM1TriN37gBm51Hmaonv2YVhtDueaiC73tfBQS2gvZPV3jo6m3VKsjiQsJvD",
  "key8": "42KVwkVWGL3yYaxbGi6vbz7AVwPNHqt8arzEoJLB4RxKwcK18X7gStX6rXvYDRach51X2yuRWpy4yZm5zo2JdTwk",
  "key9": "2cFJP1RSsFgiL4jPjVunZDB8VSQ2694jvSPAY2V3W3Pzp265QHC6PZxUCnKVtigV8jHNPKcjKEFXewxHK9BHEQwZ",
  "key10": "rNmZWrT7zB93j222pHeMBUNPjFQHrNR59K8iomQK3m3Z4L4GrzKiMRkXHRno6dtq6VMBv4Nq6Tw8Bi4KEXwu8hH",
  "key11": "zKABNkAq6NKyrftkwV1A6BpqmQHLtL9MALBHWi4WE4nPWJ9u1UNVqRgHtimpKKAPWLLJL7Zr9F4GjkCBVTRQmMu",
  "key12": "5QLqb4NuReJ2hpNrYsQzcAXQf4jC8hKHdwEUaBRYQWrr8HcyQM6vXhjoP6jCMfPRTKG4WezhK7paFbohkeCNUHho",
  "key13": "47xEVrBY3YmJRWN71c2sXiuAtxfXw87t53JjCdVnkF1V1scUvpmDmUb3DiS4eD1irbUMpHxZudfzEZmDJRtGbjvd",
  "key14": "3HaPBmLXuY1nq4Qs9EjZ4BJq8zGy21JXK56zEJCncMuakbtqBwmrwgUhog6EBSNeK1Leotf4s3fbtuz7Nom5AbHr",
  "key15": "3muF4My9tTCSbN1nAsdms6aXaHUYAtgkHkH8e8zKMk7CfuENXjuMkBYnxuPnLxVSWrwjmkruRt7aF2xwdWTQUZeK",
  "key16": "4raVHs6qHNCWeuFnhfkPVvSs8qdW3285TRDA43vgkbF3NTcmakHeWmtb6yJYf39CUaoMQgEHGbAJswPkNeYSDS31",
  "key17": "9rXPyEDerTqrYfzq35kdYtJbzRQkag7ydAAShiCLs59yk8a2B47qaYDEb2WkkMBydLjEQBERgfTrCxMTj78XKec",
  "key18": "3d9NtEcPmSrRSLKiFVkuFuCkL4R6km6qR6RzGeLwtqNqARmLvXgEgPsR3zSj5WpmFzo9z1uEUiFT8hUs2P6RvvSj",
  "key19": "3Yw57GvE49j8LtRa9u3eFKyDr81Crkw7brPeJN3kAgpL1p3DPEBRmZnr5nC3ZV1zHppvZRemmknZEE8iF4jHMmE7",
  "key20": "3GQCxXwrp2dCEd4doSZBjdh3zFFS8QZfWktmygrhEiWgX1Jjm8duDqKmudgv2wCyfFWjCg3nJ2APX6TVpEJ8VES3",
  "key21": "Vrsm9Zh6nygRt4uFYcSAcoDcUHQe4H8gnP25mxzM6XhyQfZemrG8HgDTqRg3UKyFbXPTRMPXVofC53f9Fw4NFqb",
  "key22": "5s3MwGj2Lxd9J6vTBUC42DEHQXLNcDTTpEi11zAU4CuRxwNrHNaCfjf3xbXtqxyBf11QHfMp9EskVvxFx9bVSbqe",
  "key23": "2H2kiH8jDHSnJmcVVgN4BnL5KfyEc1JKa3si5pjiSnJteQZzr9ExcVAm8SWWzVsEC27smrnCEaVVWaFjVBLHRej",
  "key24": "7hqkeAE88iHo9DsP215YptiMj4LzNDUdPqxQZMWBfQBoCHwFEfP9UvpxNiZj6PULQbG82urkijcNeYidiQUzybx",
  "key25": "45cLyuxC4nkP5xrMrX6t9veqgqWQMq5qtXfKGBM1nTRESamgD1N3siH5ZtLNKBuzCVaSQ6LW7tmBkgqHSsxjpyBN",
  "key26": "66R41N6fRS1Mg8GZR8dr8ezLadUFQnqmwaRsUTKPzV7T5U5Fph7m7RQQ4ACmV7Paq82o3HCyHa3LAdfuurMKj2V7",
  "key27": "64Y4u99yQCa1LX6UkfsaExo3rxntT5d1E1A7ZRditpd9ZJDWmidHuwCuU8MJZeM1hiwEmsw1vQbgnfkAHL2Eah9p",
  "key28": "2EyP2F8gk1PQEzBDGuNHsaQxqp2SQbxe4veHxd54XKXHpa6wLXeoc3x2hSvrXCkwoA3x2Jxr48SoPFMdzxz2mGTZ",
  "key29": "4Zfdo8e7v14PtK6W9yNtUnwxhf3XzwWV44JpA4TWgDiYffVwjPhtdNQWZZ45DJ8GDuc9mWhQnzXRP4QvRwLMSJv4",
  "key30": "39eM6C2ZELm6vkfQzaPeBnsCG5otrnSNTD7tso19jA9MXSCNz9vFr6k5xuRpY6aCWEi9VDF6tcqGAr9x5r7nmgDQ",
  "key31": "21Zkp13M9XG4RtqVjb4egQYMK15L8TppYi69krTjEiUhuYWXmeZyhtAT4JhYXGGZDoYxSv9K4YnKyqes2qy32Ga9",
  "key32": "64DTHV5DG36NrKqpjBDZjMtMjtWkRdTkkCskxftWSpPmhYZwSWPShNuiAmpV7H865VkjntvHvevSnv1CwGs4HQcP",
  "key33": "49aqXrmFzPjjmzbWNtNj6LhMuzeg956GXqNvjuUoBtsGnhPhBxTkT2wGmMNux4fqK3ZTWnB8mccm1GFA62WrS2L6",
  "key34": "422bLq7vGf3Dhsig65c9BN6B3xLzMA3imAwMSVqobPGbUhoXAC3wshDfU7rvbuuqa2HYN37FCjk3i6aGZwyG3M6f",
  "key35": "2kiMKj3xmoQxGaHj26haAp75qWuhyLcsqFXzAiACEtmsGAs1vm3F7CgYa1LgRM8dYjVE4P5EtuhfYWMcQMW3tK7j",
  "key36": "4MBn1guqeEHnkBXVbuV6ketoWdTfBUeCeoEQArik4HZ71MsTKZb7yTKhgg8cUSEVGPCifJNb5z3LhWrf8ywnK18A",
  "key37": "3ZDviiDWaQhmkzUyo7RHP9FFFfir6DPnGBdTETLoEcH4wZMmfFnufd3AxvbMeAtMFQ5kQYgKnT9XE4P9FaimiedG"
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
