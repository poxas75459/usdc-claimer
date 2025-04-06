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
    "2xLoNuCXXaS7xjybt8Bva9yTufDeFJjxSxyEZK1sZLcM81qwfzznHAVbASe6piRvZVpKUuohHwi2z1SNLr2y9hWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XKg9UgRCYrzg12sapL8orYiZQ4VjiMHqLKAwc9twddXvGLtaCnzbTsGvYqomdsN1FQpLb1qFRhbWJzVqq866CGj",
  "key1": "istyYrcXHZSce7TG4yvr6wwbA5v8wRZyt8zuPsxDHgF8AKmeoy9Qecg9HChD7motx6vB5Q2cMGCdoo6HouXzjCT",
  "key2": "5HyAzzG9NexXTbcTpMHoTPNmsY9tGMnBKjpKh8HnL1C3oUnwB8VLL91gL5cgB7zgrYwp6kr3upafSK35CPLjWni4",
  "key3": "2RVdaKc1dbr9RrMqictyyqrakVf2DFFwqBZCtimV3CJpquazuZLk9SP1JzUJ8cBnYgGF5zPhBdxMG8XjF94wzTF6",
  "key4": "37MWjYwHBH6uPYtvu27LYKTn8jAfK4adMEYZYQBXHwnPK7cHE21GvFSrmykFNrpHFEmi2EN6ThkapM1g8ZmY8mdT",
  "key5": "2LSxUxRyTykXjSzVcfW1H5t59YdBCxZVguhAxPKut69F4ipep52vkxfC4vJA8VUd5a3hvv5s1hM4PCiAW1nXLZFQ",
  "key6": "5opEetc1CPNQ85kpPETp6mPpr2WDxTTCwgHkq24NMt1aTPJwvkGiQiLoeRn7KzSZQhS9gPmjc8cYygM69yeDn9Uz",
  "key7": "3hf4i8nKJwpnHt5DjLx6Tbhu491MvrTDwJJvxqAgdro2jX1RJfnYdPjxeW1Z3SURKMuyHAZEUBei7WrpAzDjR89U",
  "key8": "5mRf8iapmWVAmhwBbxbvDhR9onkYQhKQB457bLkWLbxMzeNZGWapTX9bmYiEUBQ9uFxXn2pD26HKZ4q5hUQcEVNg",
  "key9": "EPVVtCk3SHrDwaJzPWZSA7bqzHVgNiCbBdxcuWTCNd5P9HPLgytdFwxYvMB9pSskd9KQMhqdhdHqw6JxXcBZx7x",
  "key10": "4mz8DnV1G4b7UaH4EzCBL8itNvNoyMddBJjgChsx6Y9jfYLjuR5tpbhrF2eZd4LYthxuvJbZyXcATVbXordNgyxw",
  "key11": "goXVqEQUsArPojjr9tivEFoSohCAUeNsCuSpz9dT7ptmm1wGHtzHYWr1DELfPPW8UUGTBe76UeVecwCmPWxhGB2",
  "key12": "5F5Xh8q1Qg2Mhsk7uZL9dGZHyMqKzKDwRzn2ptGqVYEGqaxmQpP4CR1FmwnfTBSyd3MLMvy4BR8LrPuWWEd6RDMn",
  "key13": "2RYLHimGYZuz5eEv5Y1dDsoXdoqLj9itvaa8stxrhc22P5BPaevjAVPdQSMBVvXEVpEhMyrPwpy5J6zvND4bwp4F",
  "key14": "KB3ivsBFj9rRG86TWvcpwD8jgnjC4PYSbmPx43fyoxivEQ8hxm57VzGLhVLubrTuMz6bGAHZp5bzXcN8Mg1edNL",
  "key15": "3JGD2Timrtyg3rdU5GvnoXTpnxKA8vMXn798DA5tZCuXktRXAk12a6JsjCxGwo564NKvbJXPLV1wA8bM4dQMMSHK",
  "key16": "3EjsyfqaJtpf5uVCEb71qb2phkuiQASmFddtUxPatLXYwWUjidDKDw9xNEPW36HV9Pp7W9EaCfQHiBP6Hu4VPoaJ",
  "key17": "5bxKxfSE3B1FKTmduoBFcbcnVoYpnDqTHuDJLJYM24sAWHAMxrh81vUnmJMsKUA1QNKr9BeJ1CqB1K6Ajtr1kw6J",
  "key18": "3FqbcWphqF1CBsu7TiUB49UJKsEatN6gDkT2JLghrofQRyyezuGYvKnHdukWPjoNvmHgp4E2WSGYiaqyazzGNTJ4",
  "key19": "SbAU9vr5xjTFKyXj3YqMjNPu1XeT1rcaiYwdan8QkyoxjsAgr5GVxwKcWQoCvbtoPpdPHDxuMJej9N911xR6eE2",
  "key20": "4dLBov1zV64VFpTqbYQRP31FrcqMTgPMQeUo79CDbMgQfbMrbTJ2CTn16BdixSVSKVjgs5yXTAJXRcmJZ3Q8TfiX",
  "key21": "2A9dRQffPy7XkcBJF3Qbf8SjdGzRRTCGinroaXA6Qi7Hw6ynCAgyGiquWeJBxVVv95YfpbeopeXVUCyQTGwH1Mkf",
  "key22": "Pjsxq8ambF7KyNFRdVinYixnftNSD9LsE92ijKPWYh6iQeSA2XUKFqJeX8Qe3mAprv9Uwj1vFjZRVd5AQeLavet",
  "key23": "2X1WPsd1pS88Yzn2kfGULUKEGwhqLafyVSKavQbasJ3t7ESH6g3Jduda6hnhxtW8y7CLqBJcWYdTeUVqC4x3FeYd",
  "key24": "2LD8kpr85VrKmfiTzo7uxntBGFtDCgSMuHJSezyYLwaD51g4Fyf5KWX7wamHDroLoCZv98Zkufgquqf6uE1dfcBi",
  "key25": "4kCqemGgRnTKW8YvSgXdM5r5sGHqLeBBrtPAwqEQzUdwSQVX9KJdLzUix5hoFkofVmbifL4r5fTNSCcev3s3r682",
  "key26": "2sJt4eYh87BVRqtCuiiNGzeCtVGRnh8gRrna4QSjvRRbec9Aije2XogUfzRarvccFUcRuawbZSQBH99BtbX2EF9C",
  "key27": "3HMc8iVx4dBXEi2KZmijqB8a8cMvdft1AR5BkGaGRfHJaRSG8AKP2RRnXp8bHYL77258tWJCbFXziTTQC1spFkhT",
  "key28": "CQF9Sx8cUsThg8YJ1tkEV8Gq4Cn7tCC28xeZ1knyjLWo15z1dUueGaPGnMjT7usJXp6UvbGDvQf7iEAb51bHysH",
  "key29": "3XsBCmMFTZcRWyoCQUCR8wUzw76grijAeoWATP3PaUwKzPNwYLWqEpmfkHgyhnzYGD14MvDYo9Tr8MqqDaMGPqQY",
  "key30": "22KCT3w7Fa6feNTXNAxjZJyjbSYLiykXhSWiTP1a3ZbbHWUipXJqodDDZFHsY2mJTowcGNJRdjqY1SJyt2Fi1Xvn",
  "key31": "3ysbgATF9oFAxZpodSXg6QSWLbzavzuFoGoft9vnAuYpLJK3kQ7MSs7M8FN37QsKtv5CLPiBWTqzjMcBvvbQVmAh",
  "key32": "35NKKTTv3j2eZBy2NcL6x43GgAASHXfCrZJy12wQPJ2Aoi8Wyui163VX6ZaeAzkUyTq4deiX6piw7fngUyQGfsY7",
  "key33": "2Z4R2JiHArc1Jy8W7ath2WpgFNRqy5UgpWqzVfsAuCVcotZycCsQ2y1ihTzohvb74V6y1Hp3YWNBLZt6bLidweaZ",
  "key34": "E1AHVV6pu7tkskCz93EpaEH7VzfKShHjUVN2z4UALiFBXnZni6cragotEuH3aHYH4BuiNH1X8NiSzeDo8awdTqm",
  "key35": "2GcPPBvYAGC4izDhY5yXhC2ZRYUbygudDaVbwWuW3cR9fQjdieNquvxL4v1RJ9Epvi7J7E9xjL9M18LGf3TPW3Wb",
  "key36": "2bt5YvGD5U2APdX21FBBocNjJLaBupkke1T2ibwKJoqKXLHTZXeZv2DiVSFLfTZ4dTQc7ci6MF2zEuFpjwv5ayxy",
  "key37": "HQdgqEHZLH8uZ9HqC7rZ4v4nyYKy5hTaoNtzjU3HSmFoZdhCjpMKG68R5FtU2sPdZzrXjwy3MswtiVVyd9J63rc",
  "key38": "5PybriTHKVJZA63KH4Dgqx9DdAFaX9QtCtb5n81K7jFEqqBYt21vsEsrtA1Sn1jLXMwuN7QHRoHkXTYGFPxDUvCd",
  "key39": "3RtFGpQcDWuJ4rhnZeR77n6PXmbCWabGCxt5REwuqMLc8KwSFLrG4kAw8Yug5iB5GrYaW4wLfA5JX9PMsMcaGJYG",
  "key40": "42WCCMRkRp4SzPbMk7kYWdJ9v2xD2Nzg5aiZkYuvVs7juh33a78LZk6qeYhJxYBPkFBTe1Ak4w9bmPWFJwQwq5fA",
  "key41": "2i2JMNNrcoiqDRqnR6CTGzUcMo7tcwkDoCM9cXZySVtWFFLSJr97Wr23KbbytArFBWp4ifxmkiQAbbVHUFGUcJTd",
  "key42": "468rkbbFsHsQzhiRd3fV5ku2wDaF5SxWyxCi8hWUxyEVburQcTN7vs3knR6dfFXBiTdyMWUsjMKfiCTwyyCK4LWS",
  "key43": "3TTLiVsKs3638qfS7azvpWcJ8uNShgQ36KRf13488ZTgJpBvrPXUb7e9A94AxxLQUKbXLLLqGBaqoKuxTXdoYDQm",
  "key44": "62uVm1BcxEUqxHDmeAxXpPjgZ4JXN5HheLKGoFG5XBDbit75ESRc87y9DFgbXjUGR8vaZCRBfuE8DAV89bC6DLHd",
  "key45": "2hbYA7KQNLfSnGJzr5H6EioEi5VyKnt9SZ5FsC4y14i6Qgqwbi5kWEqNybiPqJz3sN4YsrmZXDLqM8uZTeAVWMXZ",
  "key46": "QoZXWiVV9rEWiUU9JreeZiUgZF7o18cVTnopn8BDqmsFtsVjDYNniMoYitSb5jeVDpK3CX4Lxy1bu94MxcJQVsW",
  "key47": "5XwsTHwEo45c3iM4wBtdSRuX8mGECQLZg5JN7U8QQb2D1vEW6RvNYh7xAe2qiBHXCjiSCHbeHeLm2Gbg186rVdLR",
  "key48": "SZrawb4a2FP9J6dmRaWM1FkdYBijbDxuQtHrZ7BvazMNR1Zv28kV35tsovtDmMg5EJuGWw6eAKDF3cMTfNnPq4G"
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
