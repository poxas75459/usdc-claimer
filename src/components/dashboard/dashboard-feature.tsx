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
    "4iLZheEtQNuYXrvWKMon46UbPvchi2kkqbaCdAXCHdUnaLTeZ9fm9zmLZa793btreYVx5pSic26Ezyxc5HBmkzbo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XAVPH4n8ccbKoReqZi82imTQnFDdhRu4g154kaYZGY5magWpavAV8DDYuL4vqGxTtzVchCkudDWKmcGqhPvQi3t",
  "key1": "4ipGU6s36qEDvddGe2nosbvmJzkR3QtoChpBJpRKjfhkKYVbmxWahmoyBXoSoxq8Fkn1tUCQb4Gw8tYoVK1GyTsN",
  "key2": "4GSV6Yxh3KjLvpPqYXHNRxAeTSFjFuScBsAEBndFLvsZNi4GkvGo9zQY2nqErb2xJN3r7Rizxf7hGtLig5J4WaNB",
  "key3": "3AJA7vqudUL2bEqKWTXERzYU8doAApZwsTffRdnp1V29bMCdv5SRLn9iQ74o183SqGhUxJDahv4dTK573o7moo3x",
  "key4": "3L9HNH3NLJMxXDyg841ZkF5cwi1zAePTErJVzxnxbT8xTqqLfnZbiYfHHVd6ABmVt2P76fsaysw6eu9n4a87pvP6",
  "key5": "4uEDfGDHVAv9QzWZKwuwLB7XwvL7GS7GddDkrLpHZzxPtbHGFWd3bEHbfZ9g4qKw4jcCZqyxZ9SE1MbdU51GVT9B",
  "key6": "N9DUHATA671LFxMdX9sY1aEboiJzoPDM45bu1Hp4teLYpY454duAkcYkwjqwcSyDKTNuSxiWSYQq3mAb7imqmug",
  "key7": "2hkRNRSBD68CxWrAW6EFJvHSHuVM2z9x5mQPJEzVzqH5ePgRmKfvwcwKW1sDxoFVkUUuvHiKWbuQ72Y2vQ6D772N",
  "key8": "3LxMf435Av5Eq7Mw8V6zDC6XztjZdWPExEeR8j6rDQvPxjmpTLXovxv8hE51FC2CWVTqA7q3jVzBNDhfMphmAXmv",
  "key9": "595RwhyXzNQScRuSJVCr1E5WpstF7q47T7UTnjHBk9ghux8wXhjJ8oaAzQNcxWvG6tnZEFtF421B2MTpfgf9ZaMo",
  "key10": "3SZpuWJHNzpeCdNFZSaRRwQ1S6rkzydxKgiGxs5icxFzMadk2Drs7emGrGYJNq8aXou2MPhouZ2wW6QXUJJDYw4G",
  "key11": "2wxMmk1yaZXjn6Z3qWRZriLMfuYa329ZEh6KZGqkyVjpwVLoeYVd7GMqa87KFAcgvjR1MDj2xYcLM7SNLZbek7Pf",
  "key12": "4RR28tMoFk57nwYGMZdPfS7EZ8vatU1SRGAX7DxrREx9SwYUThYgnSa78nhW91bARFb5sRnPhLwr2q2YQRULSjpp",
  "key13": "4kLXsE3Pyz3EVxRbKH8z3UGap1wmU9WJ7Y9ze9jpQXivksszv5boBKBcX4Ztn9MvUnkVS6B7LaBhGBZ5bj4fBKpK",
  "key14": "3ihYsEdMoYMGuAFQX97WPC8CNNe9ADP7HSNZNzwAnBMYDdMT6b8iUDBrqsfZdxJEvhbX1fshNJWpJAbMFvavdFb4",
  "key15": "3CWidiZdG1W64KFjJ5k2kTwspiFShCNVnQVRAPVuLNNVd3RuuSzLkoSsiKt4X9gsgwB1t36R8Y4XeyzUgqRywFwc",
  "key16": "xp65B5Bpv5M1bxwGRx6ks83Y9iGXSEYN6cpYTk1qLsxEYLdnX6kqKHu8Zr58vXnzL3PhRX3iZgxjiJ62v5bFd6D",
  "key17": "2cf268jzvH77TCKTiv9sjmbpMvFFMgaHeaskY1xVBBuDZKNZEDdtYfc63e6EW4rX8gEw5SaxNm5gupd7GkaceXd",
  "key18": "3P1ZPYKKnRbFg3DdkQyQg6tHCfPPHBe6n9N86Ng33Qt9QLUBZzM86jXmi8GYW3X3g1MD1P3pPEXRksCBusx6xwSs",
  "key19": "2XxWPid5iV7powJg3UsN6juhebhGGcVAzaL6WpxMfPycj1DhZgUuGYrYEB4uAUFrXU3DqTWQdtfpZa82HpBRVzHN",
  "key20": "3qaAYYy8zcZVQHqmSXzZNrCLYdLgzMyjfdyYPK5REda4nBhvjyhWV2i3ELrVannnXggkccUdmRYACaSoyM5gdVag",
  "key21": "2w8kysvLz6SayYouSSbahPYG23VgfCR2P5UY63yahMSzuB7eahTWGV5YoZb2CaR7cfrYS4mYejH5boaNb9f8pRU9",
  "key22": "4tRYmdzsErQwsLigo3gLj3tB9nLCKNd2XcCBmCJ4VuhpGqJTXyigFcDgzFC25R7R5GFwbm1y1qrotTeewgtu7cQe",
  "key23": "3PDBRyMhVZ2oK4AmAXnndAcmo32TZGVFgZZCexV9xYsPpkJHmCGbR7xqiDkUwKfN4GNn2LuuxSS5JUghtJES21N3",
  "key24": "kjETEfC1johQqfcZjZzjcKX6C4S8eCe1tdwbfx4nxvePLF2A2woaGBQYCngDg389xaqjcTFZ4LVm8BKoquD6EkH",
  "key25": "2irTc5SAgYeNbWDRmYaf3qHrqmHsQZoDfGTNCngnnbtm2kiwCG2vk3ouGuCoCLvBqUsFRRzG3JeiD256bMAoiQin",
  "key26": "dCPHNKU95ssS5Z6ckFofgSAhWFoWgQRmVBF76iyNdS1RCE8oh5thLgf5zynSp56TV4ebyqezWZ2DwyQkeQsBBcJ",
  "key27": "2pVHzgwM4dgTbBCTtJ9Jyh1gQKZ3Am15kMf3j8q9cLxYiFcmpu7TuPwKofLqJjxEgVEap7T8jVKPM1snAEW128J",
  "key28": "5pnfy2E3GgFU8pV7JwrXCpbrPksf7or94AUdwXW8nt2JuEXwmx212hvRqLs9iZ42ccGQbj5PQo4CchVwPbcKCdaa",
  "key29": "2HBcjqXRusLNfTxyb6m81GjsJkRPgi8zewBHjKzv7qD8cGwsV75G6teq98LqMTutsSiTePx8PDgWnpg3TapCQfYr",
  "key30": "3bdMqPYbhk8L3E9Luibq8YjMuESY3fDqi8ZCMBEF7aqL6F4rPKDdUFn668WHossQh2CSKkertw1YJQgdNLc3Y2P",
  "key31": "4GebmjABmAA1sU1DE8FC9X5pbwGT7v4NWZaCRH5N2WBXoaJt68B2ip6YhQMYAtzbBMqWtveKP2nr9Z5MMCvmpPto",
  "key32": "5iWaXhXnsZpoz3Q9EaATbL7UAQhqNva5LoBkD6BjEUSann7qa4n6gUa5epwBLzRy2w6x2u5MuUzeoq8QXGmTBTja",
  "key33": "gqkdjMu1GmFUj2XuPfPmTC9NPNixV1sC1A4NwamUbavjyPEXciGjcNzfDmbLBDwei7dFkZudZVQQcv9S8byBHES"
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
