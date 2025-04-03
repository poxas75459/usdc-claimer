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
    "2qkweMt6UKVLPTiDBqpQo96UHRS9YvHy8ATv5t2wHLbR2wkRRBe3R9offrkS1iXnu23Gq3LkEAymxD2qnhSCnaxb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MkuxuxTJbe5Y1ES152yjuVioY6ETzNZagzEPDsHLAmJqjoSSat4z23z5N8yYRVSfQj3E3jrSS9L2s9FwvbqGTob",
  "key1": "48vnKsgzTUWeDp6No2zuszYTfMjkuz6jjcv6Z8XwU8XtCzG8C1hBiSr32f2Qk7WkgsgvoqvHYaCbZ1VnN4PDfPVQ",
  "key2": "67A9fTdn2bbtuGxFSxYYTwx7R4kudBYMHN8xYi3xCCMDwjGZmWW6996cP4YVuBJ3CQFtTvVUNH3RTaGde2b2LDXd",
  "key3": "597Gz8CycbL7FKWkUXrC9eYAmxz62XZv8zs7UqeGYY7ymmFoZg9UtPXe19aABeoUTcgJft7HmwV2CqSfg6nBfUBZ",
  "key4": "5sRMS5Ei12HmHxoBakXZVAEmYWN2sfCPgrbEWqFng8xfmx85YanQG5SkMJ4ckwC3Q7uBuPMHk39f1CE926hxUsmG",
  "key5": "5bmbnQBcmm61b7U1Qf5chR5RLv11VQ4ot6aekhFgzRGq9P2XHhLrd9ChmZspYn4SUSWgynQyPvw2tYQXuXaqQ9H2",
  "key6": "3g6Mp9zLQZa4JQ1emDSF6t7po4zasQWoro5NvcUyYrLrucEgXhShKfKppcmYmirAVkhrobu9dKf54e1RP6j1dYzH",
  "key7": "56WYLKjVavb98KmCQNuaV4cBqkfA1aiwP6zHZLfAJdJyoJMoC92keS839mGWzfcn5EWJBqFuwpt6kGDWC9p5fWrB",
  "key8": "5aarRXw8aPUA777U359gjkGMZniVdPbeGqkMYRVSP8hExYZB4ekVa1orc5cAA9WPPcavdrzL45W2gemsnpcXtrUX",
  "key9": "5bvVxbxvkVEj9Ajxf4u1AoVwW1bv5qKMfqyBNu8n3BXeuPodXfdiHypMQKunYiv9bSc6ianveEQJsMaM3Z2JU5NF",
  "key10": "2cspDQK427WhzZxUz9vzvTnN4vEvbUKbNp7YbXeaU16m4UTdcyV4RLrAQEYaRttFpVWmLNeJpSqoMVqWGrY9Qvm",
  "key11": "32ZM3SN6riaZKvhziCkhn3y9JokUrRiFVSm4ZD6jGs42YaXntZvgET5yM4W7kfHWnNwueKUZTUpTHsnae2g9cFif",
  "key12": "qpeeLsohCbXD27UAoTHs3E2gUz48HRGboz65x9St4S8Zp17Zv8RBKorMCqDQLexeG1e635gzfBPkGtiE3xorBBS",
  "key13": "54QfavnrR4JP2ocLSMdbkFptWf7oyGBFioiu1LvuhAG9SasXxx1gMtNsPfi1Rm9Nn9YqNVZVHwdFwaRLVXpLh5Fv",
  "key14": "4NfTDBE7T4ZQCPQ3iekvoQv22fqa5xtzBw7tETXABERqEgxRsncYNVvVjapH36d8ZeP4dokmUNamD2WvHPERGHn7",
  "key15": "2tMoaCs5jDgL8d9ALNLPjYnhApTEM82iv8PBonSpHdqMtfnAzcj3M9a2Gpa4yPSVupfH9mAZ9oU4XQUujZE7Vw94",
  "key16": "4SSCsYxhYsv86d5wXJDntDgRFEWqPreaeGsuxcuxwFvLrtk4aPxMKsZFH3MNHzpzjHBZa4JSTxJKdbxS5hQwY19j",
  "key17": "3bvgsHg2mA3jhc1WvvzkfNE6iYTwxpjJ6n58SXoQavb9ymxKMvNhF8NDMzUVtXTtqF9YoJr8GAqt1gaYzj1pW8GR",
  "key18": "2gGn7Lp4cEh4ARsF3xK9CYfvthPsdhAffVVTQJtZ9Pwu1LXJ66b96sLh5YVGciYcKkFteMoaprxa1HrrUfd9Fdqh",
  "key19": "2ff23W42Zuj3m1CjmaG9jaViM5VCWKyPor9ehjCLb45gxQfxiPxWBE6fAgA2KT3bfo2EeuMPUg6SBwHLzfoJBx61",
  "key20": "5R9kniTacK2Aw37RhpAHwjXmLmns5ym4H9SymvLArDQZhr6pkU4G864weg6ZQfhHuxCZ3GTXuTZ4Ca6dFyS6EX2B",
  "key21": "3EXES3AHzG5ZhpNwmHxnK5ATekNF1P15LJ6MXGGJSqxhCWGCir2wZtn4jVc9umfamaqm6YQDroMYKhVkH5cTMKsd",
  "key22": "rRTtE8McLABaCAQnnvYq2ZJ8dB55esm26a1Vjv3VjM82uV92bnDAhFPkRmTD7Lr73gtg683wujbvKioLAfjJTpc",
  "key23": "4E4u2wsZarJfzuWxSWMYGRD1V9kWRyJaYrcMX3suHqzEKuPqCtTHXpst75VYEdp1gQLJtNuN5ELLyNZUTJtUT2px",
  "key24": "Qqf7AwXoPFBRUpdai5Uw9SZefNmnRMaL82Qwm7yJakFs4cN1cMn14hFkgViTf73KWTg6iZw5eFzRM8Td3Ym6MSX",
  "key25": "5stxX5yrPcqsfJBXyRkqcmJrFJe2TcTvft5ZehqWGmeVGr6pFR8rb58XLVjwzc4wwrfHPqqjzSxAK2wrsyLKCbrb",
  "key26": "2uxbSYy5kkuarL8N7i72tYMsQHbTrUYcwds2W16WZXi4tsJKhLmRwTDo54q4MHdhxefbETbJx8Etr4SZe3hfzFgq",
  "key27": "2YJXuBRumYpv65LQHdyccChcamSMf9fw1UZZxrDo9p1nMz8432mRrc7ZgUBRqRZzpowd1fXnpPyGQC9kdqkCDsgk",
  "key28": "cKMPKby5Hkwhgu9zSwkS6Af7B3BtTRYMcnw7pv2myspWkxmw81Mb4NAjKW49VUXNVQ12m1DpPbKmRtPY7GbLLrC",
  "key29": "5GZ6rp42aZWHCtE9GRjPLPoAdQzWz4nyuk2SiMP38bg34kqbPQ1tF1BrL4j2xMptEcUqX7eN98YVkxjwBtkc4qyV",
  "key30": "JrngVytqYUVugV388bbY8wusL6udBcxfTKmVH22BppwUTFzDAjfWQJitbeczVt1ZAJCFL4TX2znFc2Z3oQhBLqi",
  "key31": "3zj7AN7JAs9BHHEcfxyTTPrv1LaxtNok8SaZgS2yg7W6shc9as5NhKLkeyWZT4t6g8u7m1DbD7jNPN9pS8NCXgnj",
  "key32": "65LkvC4p8xDFu8GwcwYhwCqCxvyUNobFHwvBPAeHdGLaSnxxyuMNzq9ydJ5n5U8bW4xYrSmU9bzupCgvocMtXTRR",
  "key33": "4eKDZTwj7vucX6GmtU2tWWZrVAERLVnsVsqJzbPf3xhYfRtRvqbGJVD4YUJ3jtb3XfVrMdoDQmkinQA39TqQ2NmJ",
  "key34": "4hkD1VtHWvWZnsYDqH41bCnk1CwKiPoSG2svyrvdK5MDFRMnpkhpxL6rzJEfqEyerEYCjJXQMspyxtFZKCHLvv9K",
  "key35": "4xmTyr9fqK94D7tU2fN5JbdM2gSFQWVJyJd4npBNeQL8KCJFBYzHBaEQfiHtuaKr5zut5bohHKubNF8r6UYx8nQK",
  "key36": "3PGyg492FJtTdTsAxuRRwU2xiZoK28RES2AkXefXzTWGZTVJjUjz2pJ89fRoDfvLXrEiivtvwkq8H4n5exJcZxex",
  "key37": "31gdQd1RrejY5JdFG4Ugk8oixLQspmHugiFW7GwYBBE91xwRz5ekM63AM4biDY6Y9aBTLMyvRsuyurXcYFwaRL7g",
  "key38": "3PRp5VNLY7dsyj6fDAPCLjUPwcqEGG5SQmodRb9wgJXwt8uTvZLUAgryVRnTea2es1AGe1sbxNPwawfP2U2pwjPB",
  "key39": "48FV1WRdqVgFTcrN7LmQ8HG61u1q1M5ndBLESxaGN8hXgYB5uMs197RKymAWVJqHqESjbuLwnfmumnVA2h8DiTD1",
  "key40": "4izA3Dg8DCUJrWoysVYRhprBN5aRVq9aw1DG5qgvQ3Wpi3WHytaBokQ262sowRGw6MMFYHPKLFjaJTm6E9bghw1r",
  "key41": "GhpP4RxaGzmS6HbRUuFhvZqLrneYCUThB4KA6CKmDZs5Heub1VhW1mkNFsKyjR5Jh4pK9Ddfkkq8zQ3rSr56KrG",
  "key42": "5rpHJVRkvuEBXC52B1YfshiDHaHBaVw35k5r19wkvfJsoW5zFFzM3Fsnkx2kAm8CsFQZH6x9X9bbaVJTM8WwCNZB",
  "key43": "gPxdMVayBGSiFktDB1R1zc8D2H5imPQ7itWV74X7HiDwbdMHK7bH89wAKzm6CuPNVUVk8tqHv9rx7sMejzd5xaE",
  "key44": "4L9rxXwHjvS56Xek9Bbp8FqJFdNfQcgoCbD8jjjYm7BN46kpVY3QyqBXPASnygg8LVHB8ShZiFfBBHMhEG6vPZ9f"
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
