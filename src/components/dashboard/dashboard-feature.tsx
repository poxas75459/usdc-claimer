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
    "5dSiSAuJoXHPeEM2mGAqXS8R5oqKZ5vwCE6GJLYHTnqAxFU24e5vM6rnwoa3rLQAgKZthCgRttqgkWqpfmLpQ1k3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ci1sPo2RzUy65dZ2Az3VKXjCwLMgyJvrELcU1U64P5oD3WHDKu8wKzSFgmB3h5KbBPkq4E1T6sevfx5zEQTFDvv",
  "key1": "32fAf5aHuRhKLSMjzJNY48dzj23gc9LZQvPKjXmUqExSkLoB7UZFdTPgADofkjy9LATn37tuBXieWBNWmjB26vAY",
  "key2": "vPif8qNZDUqGcrjUYKjvGStDUoxjNSbwDyWgYvAf3YbtZsFB4jyoTGvCc6L5367jVVMDtxopNmXrZkZZzZknMPe",
  "key3": "3KsBqUgMamdtaxRLhFz2XvARrx28bWVMKLqQ4t7doxesyQ9B9pmv4E9LYeChfVvffeJfjHYnTzWUKpXgpkNEAx4q",
  "key4": "31ufduDCuVrJaSeGaEUrKwjBG9DjxVxhKAoxDWfuvxEgCYKH8x6MSHGfZfPsxjrXZgFgLKQK2KYez98Rin1uyywG",
  "key5": "2ck3J9AaLZrLYqvaza4LuUVpSDtQPjiQeAA4ShXuYj3uxCz2j88WXdi6wcrV4pxNV2bVm937t6KZfPH5PEAAKCHV",
  "key6": "Gm64sYde9yQg7dicMdGwtmHXBkppEi6xTjWxH1S8U5ARSkvB8nCT5fGR3LtCJVo2YvGQ5v4Wn4ZASkaxYHFV7w4",
  "key7": "4gJZLDdSmNb2zETfnTYhDuEBGbqGRw4jAtj4eeut9s1QzZWp6S6uTxcEu1cCkEku9pWV96zRzM7poT1V9GSPfgQG",
  "key8": "3ZPfMFbCbmF2ByMvuKSFHoWYUzipCiytFp5SLAoeeSqhJGLSZN4qZuPP2FvGW8Jmj3sV12pk1nym8y4oViDTVLfe",
  "key9": "39JRdhdAfvZySdnmzWSDeFxmEULc1FwADxNb6qdo2Zu5ZFgH5dLr9K8K5SSgZ3eAmWzegw4uQeUxAFVtbQ6mMh9Q",
  "key10": "3wKi88qFfetCpkPTz8jBuqanmA1oi7c42M4qobdmrbqEU7BPX1jQEjeKkvs7sBhjLt93tQntfhq1sg883zniYfqb",
  "key11": "53deStME8Hsx1hVmnC6iNmVWK2yZDMVKT6J8w4esPJovWjqRtdEQwTYsqZVchgdbQ1zXVR1v7NexEj3xwRQ7Ttuj",
  "key12": "4YqBC2RVCctweYxuVsDNhtJrDUxRRWVKiVQzLN8oeshTrMxVPDdDnPXZk352B1Umw3ZhLGgz4mNFSjBP1iKfNbBW",
  "key13": "RoXwynQLs9BEdFju5gA2uwHai9heg9WvZ6Caw4nhPgp1y56rFhoCQchL6MuH1TfPBBMMoDxvVctRHdswgeimLcd",
  "key14": "4dNfFkuNf7rnUPRUL9QQKN7JcuJCR8RptbtwABPEKWSDovhmZrMH2bGAJ5R3x5jeVF9nSTJpcagad5EMSDUyVcNh",
  "key15": "4iuBoVYvymTJLMPc7bxvSLUGoWP8bS8sPUhwzwe5MANT9FhZBP6JLqwTTJr7JFAARgYyed8XMjJBkrSR9o1Ayvhx",
  "key16": "tg3nkJQ3HBmaUZUTVRvXf5BGbUBYFEBF8LYQTUMnvE1SDhpwdD2Nz2bjmaX9MDYwioLdhsg4hVL9ZmLCaKmv5pk",
  "key17": "4CkgmgfYphCGNgPafyZ2oLXBkwFygikXLJhM5b8F9NNQSUYRD9x2uwwnN7iD1PMV7mWrFt7ErZ55Zpxy27sJ2RWG",
  "key18": "Azh2tWvXppHRsJJ6ti2L4v1Xw3Ta7981wKuYyMZB5V9GLapSSj9MiDfKSufMsgE37bD39LPShC8tchgm9cXuNT3",
  "key19": "4rhND8U3Mcj7sSDnPXbRLwYMdopNQNT7ax8t5TmtBamnx5zeVerhx8B9xfeW1hxjWmoU5hfdQMBMeMryDt3sei49",
  "key20": "2ta6LhQEYKcGPn6YXSAizvz1V8vPz5xFYVMFqkLc4PiuwWWMVXnvhnsm27p5dMRwtkc2a6s2CrPRDVo5dJBbZcPv",
  "key21": "35k98sn4PymZ3bH8uo1PYC9T3hk9WWMvUdSK3La38k6R3xQ7aJMzukMhDnbYj5QgYXBTWNFSL4KyKgUBK88Vmzag",
  "key22": "3H6KNnxS7Tb67772kDaWJ3zkJPGdtzCZkH8oG6A3ZHrjApbP6umx58X5bskhBkjx56EVtQKeCiWZ1Q1ADaAtpJDF",
  "key23": "4KjRp7vVNLFUzu4pTxXoS31QP3gzZmqW6X2o1FSREt1jpRbB7aQ3PU6YT59ysZ938LjPvi9iVJykeLxHrdHKE7zs",
  "key24": "wHLf4mxfDZDscu713g1nk62WpqQ1pt7u3z5LLbfT27QfFsM5iSCtAxcNG6pfxFXzf4ZVtU8Ejv7fvNvx87J17rU",
  "key25": "4rQuCwUJXSu5L62kgBDzxfwqMPnP235mnVVdpaAM5yDo5KnkZK5a3jMN7iCTLd2W9RwHPgNDbshR6EvPGtaP1z5k",
  "key26": "5pBp5pbrsGKHhU4Qp9Rm6b4EQ9rb58g5d76tXoo3c5D4QU8n6NMqLa2niAaJFn5Pv9mLDWg6UZRVx4n2UrMiXxFC",
  "key27": "5JkDU76My13bM2uyP95icP3zTmEDHw3C66FweQkKD4xDVeLDHEph9j9N4vsGDxuXzK9QYkJvX5n5xU7azFsJUyhS",
  "key28": "D6LWH8zGgxVfvgs6X4HqrVaYWsuWu7wLjHxwgaSyuXUFM6Eq8GCcBrqnRdmcyQwoYNkweDd66qR8oYcuLeSsE65",
  "key29": "5t4NWggstdRa1wh43EAZrHt54z97UHNMMeJybhNkF6CMAYHgnnsQW7EQApXvyDyCNrsD7zR8KbiYGphzXLrzwg9m",
  "key30": "2yDHaiJY4TmD5uhCGtH4STj8vTVURmFKZhG6iFPkcr9UXv4ztJfEUPhVheZU8L8dZqKdYyaq2Pnr7AhF8t7fD3WR",
  "key31": "5iVyUPEKmzR5Asgp33QzcnqoPjV7rdBY7Au27X15Nuf6nvVgKoUWxwbJC6E2CUQCan8ir1u8uVopXB7rhQXgzq88",
  "key32": "dGvh5gJEL41LJCt1Q2wqciSBLdh3mZ8uPT6fj9SoLiLWTHvnkmeuiFfa2anqGxgRNzsCfJ4F9Kg96dxBQVVgRp2",
  "key33": "3RjxXJn1KyFLS26V6DmQiUaB1oNM6u9B6zjHUYKzaPxSBFZmLd3womr6jbaYCY3kMJ8ba3RrE4AX6QDDauVfppg9",
  "key34": "cKbBWQHwWfbbYykqN1skXxnvHtJiiQmmP6PfELdw7PnzD9wKvJ8zGFaekgtDArXmnRAzh3AEHGd5bZ5B78kHYza",
  "key35": "4XQmeKJvuhtqYheKfFJ5nxozncZLrUxYRa5MvzxytXk1xoEvUBGmVfzXQ6WJbTvdZ8h9c8thE4iNLTLYuJ1qWFVJ",
  "key36": "5f1RRXRzG5vPRaz9AEHyCSqiUU3NaCT2tabbF4K885PepnepipAC1G6dsSzmfJuMjYSY59fihxxrexNvLCtPm6GW",
  "key37": "2ta8y7ocjxuwXGMmo6qRtBsQMoyu66SNbLcdQQXHFZDGmJR3dMFxRne2YCR1VKv4vXPeSVUen6QdPRWGB1LaPCpW",
  "key38": "5ZDouaWcFL1yfjeWupfbPCrPgGGFpgSwPEQaT5gxpMe66NodgczvkvdgyTm13ScFZay7YRqcULKeZ1kAf2VE7WZL",
  "key39": "4tuiqBnxeZNDwcLRDjY2fNzhm2AQwDZKAhHQTHtSYzSq6Xthjf9AwG2w59PBaTjareS1TduNkcXHCcfRNEc26uFc",
  "key40": "4WkHcZaSVrYTmK3uNKeYV1Zk27C4KQBbWgnQkQNwR3CtWTgYuRFPes7MojhfXyHQJYyjHrU5ZBHmFLhpR2x6zEKj",
  "key41": "hj7vkz7p91Gu55MTtZWrXkCXCvXrkQqPaBWsT3jF4KiSe93xcwPxXAphKvooJ2Kv3dDDSzksuR9DfmXNhFJoBK9",
  "key42": "4vrhJr8msXmsqbuXyspUnTh1Q6fay88qkENF5iqnmuKZRH4RCTRnSUktaQ6NKN3wQzwJBRoFQBuWkWCMNNxGfjXW",
  "key43": "5BXJjYHYCythBtpFrHJJ9otvz1MY7keUPKEMVN7kNVmYVaEexwSvnqSn66KGQmQpHBdnQyjbxcL2crZ27SUHUnL7",
  "key44": "4Qif8jAy8Hfi4HZd4EQZBqor54c9LwXDLD2Kg6YpaB8XZS7HzZhwy6St6Wqfnt7vZg22dky3kujSUEwMSU3GqhxS",
  "key45": "3aQGjacgJ6gH7gmzqSqWdjJqrZe2Svey41J755ry87beVHgwtJdzAu7EKW2f3X2XDJvDjmdkhjPzFMV5Eusyos5g",
  "key46": "agW52zEJPGrNvBrvwD3hZue5sgGnb4bFfgFT3GvUgJ6w3KbW1DiZYYzJGUM5Wjxt5VRWRYLLdcnto7h76NenUGg",
  "key47": "5F6okdJGThmnkbLEHdHm2BwW8haGnQPX95XPc697gCMxNDUVAeQ1Sb2p7FKRAw4LB1sEKzSAkWp39D9E5ZebpGbV",
  "key48": "5CEe5xFuAiMJieS5tL5DkvMN65kfJivhmZyCGbZNmAgiW75HmYsmsP8XRpWgPy4SEYbijVXaZa5NLGDabAD3nq3F"
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
