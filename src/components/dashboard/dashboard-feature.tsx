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
    "3rwUzoxsZ9dsXwMwNow1H1NzKRwxQ7tcW6mKp4HA3JoNVRgLWu3Dy21apeYreYs5yHsV2JkazEAXcCbzJ3KC41R1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52nPe3P6SWpYQTSw4RwC16UVTnKRMYHjZZZujhEfn2FHjZGjVzREtBKoSWd4RFD66nzbRtbC7gFVtmKTNFfp2vnn",
  "key1": "66cFKSvTJPJbLQx3Nfi37BhiZs5SV1nBmBuSUsForAWrS1LFm1MLm5RyojQJqFGXyjhhivBMwh7LoiHSgKbzmAnh",
  "key2": "4yTCFMPHfirieQFFD6jxFJYBLnYEXXgfokc3h4L6kQSW1Lqu9Uaf2zsDdEYvnA5KBLuw79AXVgbzP9kySoZUDthC",
  "key3": "2FjgM3wN8h9XjsCyYYpaqv9NxhML4Xj68uXAQbMKJrhE79o77mpCZb4dNGqWgC6PEc9cXPZjpjBaLCLvCowRKkhM",
  "key4": "ZSQdiPmSYneoDG9dE1GBDtcLVCrxWReVWz9G2TLWvxuoVJMmdaBwqFoSXzGp6KsZWFQGKkASTkU8RMeCCj5VXWS",
  "key5": "2yhWcZNxgP4ZYVvackpebFrrofKzi8CKE6GGFnofWNEwYiSG3wgx3QvN2pi9HPTnht4NVkgHpbz8RPt6xUTKrhpJ",
  "key6": "5GLNQwz9gmG1kcs8CV2EW6vgP8JEi96WzAt1uRVY7auQ2TvnnRv6vzohBGZsMFaHM952xqMKf8eDN68G8Nig7ger",
  "key7": "L4wshwZfCA617i7PNJBJkeWjFMexeiXbovDrhc6B4sg1QXeojdoAWFgm3gFYBhwyJ9Dye6ACYB9rjD4VzXHbVZK",
  "key8": "4SkrUtWPjzKCqvmS4wpv4AitcBB94qLWbXg9PukwKUwUjCdstSyBQgmF1gCWD7Lqc92SwSKXntRjCkEfEBvzqF9N",
  "key9": "3EGJSH3cKbaroReQv9iTAELsz4KL9r8GDp5hEz8a7BDe5TUmcpPVpBTznZpLrHucPbigL12PTtW5AxN6d8ZenApy",
  "key10": "3DLVY7gtdfVgxjQaaKPJnri87UnxnGjyNdEsZoS12cGGybFYGAmnjoe1fETQQw876wSpVqTEsjxeEm74qhMbDXP1",
  "key11": "2zZ7XjskHe8qpgMBXs26z4U152WE9EsHwZBss67UVJ6mP7uxHRDVpwZBeEVdgLomGPjvfS4a3UMB2fo8PdpVrt2X",
  "key12": "jjJaY9pnsGd8ykWXifqnLKXT8jNuUjmQ116AWqVC6Q6P6smzHdvP9xtF18ZN7TueFvg25aSp7pcXNyjJjR2SqHE",
  "key13": "5JpE95tT1XYU7CDpAHHmMjSqdfL3ykYi5a2En5y4tsfs4ddfWLnTSC6xfSDJBnEvCUaAU3G9AQfbdMXanTmFDGYv",
  "key14": "dJoRbnbY5jr1xfGMWdYadokmM8azy4H4xWdRhQsGFS5BvmaM4bELFpfUsddLCdiDVBXMAXV1hogUCgVUKS5U2mj",
  "key15": "bjPoe2x5uwMamgLRpdtKXsxLSAqLwXkeHfsYTbcRUbYGX8vF2ahoipwQqhovi9WRRXho4nucCkfMKVH2L5uYiBY",
  "key16": "63HLDFoUFFipP8v8d5Ptqu825RQ5JY3GEeW46xu6pX6am688NizSHEJP3gXHm3665yVckAwH6zftdJ9AFhFFATtT",
  "key17": "nHbrm2N8X8tdrSrKFyF1w1MUtH6E7bMj86cszSJxJbgdXqgu6rLK2XRrXHE3yAj3RSrEZ4PWtzD5LxdDKDEB6NP",
  "key18": "2ACNEPLbT3SEj2BX5mrjSNeWAeZgXDEFCAL9FGtUmXjx2CB5nCvLaGHRYDw5GoA7uXob9ppfcBi65d71UTmXRxYF",
  "key19": "iJ1Lkeh81JGmyEYrLX4ZqUyxnnxxkh1FwbUbyaD9xUZ8wpXGovwrqra5RWLH7QWSQijqxXZn5ZDPem7jDT3HSQt",
  "key20": "2D8joaN6FQy3GpXJA5wPr7EGkxti5cLBxpZnjiG94NM8LAuxDDcY9mEMzWVaMv678n9y8PS3XJ5cfLwSkTD5HUG2",
  "key21": "yEJNv5B9rf2eDiUHhkBqt8sMD5T8K9ywx91JM1vYbQgYU6Va9Fkp2pgafGLVh7oBvz9Q1Rty6ctueHxSweYAtGW",
  "key22": "4HFsRyH1F7Kdv63RnBW4bGbKLCAozoRuXGcSXGLXUmHPjy8p82S7ShPnNmhxfSPvsApwgMm617Da9bEQXKEMLpE",
  "key23": "2NtKijoREvbcwXvjHGBZk6ooY2coVracdSERqm291VyQpzGZXLTowdxXcyaJ2Vvy8oC8zaNFHkLrQGR65j5hd7e1",
  "key24": "3XysrgLUG5WBRCsfDHTDmic7xnwgXMBWVU2zVdNx78tbbGiFTBrBNHg6iWKTApNSA2mrgWk1URzDWR89U6jWtwpm",
  "key25": "Dttk333hKRue9SEZT6pgPkjhMzSbNCp61wd3PCQT56NUc56BqKSsKd7g8cNRFaMHxuLgUpVasDz5rNCPMTzxsNw",
  "key26": "2uLhPDvqRQaKvC2Yf7sXbzKLoxkA6b8EPNCiEd7wtRqHM6rTS7mv9tSFNj24hFXrm5uP6qV7k6pvuCMtUG4XKZ7V",
  "key27": "EKxQQPGN4xZmVbQJGTRjzVYbm9wfjd18ycn5vu395paY1b8fvRHCSF4zRQGXvKr6PN5AVXwc3TaP8tyxSmA3RhL",
  "key28": "4Xw6E5xDmp1esLdXDsEV56VTxcBk7uz3YQPF36LPV2TLWTFjy29Hsbd4dExbKuy5YqAU74swX3kaFPKiwnNhdBfq",
  "key29": "5W8hJY14sxE64CUP7m2A5tAaQMv5weUYmrSbDLzguSgrAiZbnT8oH4BChHpg3ndVxuWxsjwSffpxz6utuw9LLFHs",
  "key30": "3JjV4stPrhgYXVTQUd9EXW8gcQSUw5fBB78dNBqG9DewcP8mRjSjSAVMDmBYWJeu9ygEFShGBMQHJZYxFDCrjM51",
  "key31": "5gGEdrmrhr25mtq2vj22F5qm4G4V4pYYdHZWqELqcvjT86MyoegDR64Cmee6c752pZiVKtbztVUUsRKtrsv9goRV",
  "key32": "5cSuQcaahhwZtoewu34ybLo6e8spHcnAmBzZ8Rfn5Nxus5z5aUcZGmQRrjmcCSVEoVMYr6rfQnTSmPBWk5xJoBwG",
  "key33": "4SiSJ4qrmbZAFqvomdgT6RN5TyYANctjZHE13RmjZknxnBrC9DbinwA3Q9dmMVFDpjKoUWnAZfDUmtghtYrag1t7",
  "key34": "3qq91Pdn4BPjpnFmVLLLAuUFi73x2D4M2kWwjfdCBiTv5THGanmTGtth1nVth1twSBfdFF7xrtHoUP3ugXyKpNNS",
  "key35": "5S7WC9R4xMr2NM4ACqamCikUtgyf9gVzw6PUZyVfzu9X3MP6SZtn4ojQW5ZMjGobWYQCHMaZQ5kdJcFSTcXeqx9s",
  "key36": "2UHCg8Mm55LYnYFsWY4bgSC67kLTSwC7cyYFDDpr3oTdSeyaYzqBAceu5oKdHC2YUQXZVLpx92dy3g6S724j6eE6",
  "key37": "25ddpBHhPQYgLDSrZ7Bwx18vNpvjHtQXaWwaooYGeLw3XsdBU1PpAyLJSUKrcCBPhFXnfNPjqtVY6tMP6kTf3xeR",
  "key38": "4t4u7GBPEe9YFshRdTk9brXomfbPL2pUwhQoGT8oHWG7hPUDvzvLPD8qW6uuZ82U11vWwEvxrdxCb5rqiBcsN35k",
  "key39": "36qHNMAcr11A9QXvccY4gRJET3EwFfDpry58WbpVc8HpwR9vqNAzSD2hEM4qknDtbGVxCuV58aVtFRraMxPFh8gE",
  "key40": "4BZdbmv43H9RsX93xZH4gTFRTJQk58tJ86hY4vKF4griWfgkXGG4oKdkTe3rUrogqENkTC3e44d8rperWTZzcMcd",
  "key41": "4cAiY3trU19iafh27CmtEJYjoFp4o4pZZpjqVZfCYYwXwrD6feczcG3AbWG8LU54uuhqy7FvjfnMWS3VAWXv3FRN",
  "key42": "2EeK3NMFC6aUi8ShWK6rjEahmqGD3Z1as1PkUvFvNfoUo4SyNEKXeN9AEaJg17E13RjRbLqc8X4o7ZvM3kyqdbve",
  "key43": "2QdhpkV6qJv252NX31NyVHdJsoVryvUzh4VZjpHiWdGTM1dtPELU2zN1XxZYZhDsrnWa8MGJ2FL4CNE9YvQ3Lcob",
  "key44": "29M95i4BD4AcJYbZPNgXaRP3VX6vyahcJ82kCrL4RgoiCtVXWkxh5TxtpvEHCkxGu4ofeWUiJVk7iVStX4AUpPbA",
  "key45": "9TnWExX3ybzszDroWZz6jKnKWLAq5uXXgV8qmskqpw6WfjgW7qzkEbuJQNFogBoT4puKkbKAGLtqAj9GxdEVxEb",
  "key46": "2R1m3DCb1LMpU6jdZELXtmNuP4hEcqqsBHgAHhZjSRcRkiBuBaDKa1w9dJjV8ERB7CbxV4SdJprMLwRda8ZVGCKS",
  "key47": "5xKJRxXNdU9htyx8NAFwfMNZ46EJXnD9opMNJCKdTS8wNi1JBXNxFgyQJMYDEBQSHcqVrC2XwR1YjACj7zy83Rv",
  "key48": "3VCAh5HqSxEv4DpCTtQgUL4UYRJzxwtbzGF72JdWAVJRrA9yx9cnco6a9kYsL2cUEBeN1qNKuP2DYpyAdh3eLuNC"
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
