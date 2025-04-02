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
    "5ErAgD9k9nanPZACbcqMcYfC1uzmvPPbZjwrF3nXrzmEQ375a66AHwvKmT8MyEgpjQVDysFwRYqWhoXN8rDKr3Rc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xi1XhjkzALnjDBzSyGnSA6M72d5nwvBDWooqsN62M8y2u2UpCi14hofybWSVwfXhz3ozXAxQhXdMPLVXyRvNb7L",
  "key1": "3cTJWedaJzrMMXP8fot2HELTfYyCNYNz36zCAzFnnksSo5SiADFiHcAC1JNcZCR48tPWVTGYa9vdRpLaNhP6J3e",
  "key2": "W8xe3ayrHZdPeYZ1MfxBCawjHg1bbBiGT5KCuXvsJ7AmHFdJV4m2x9L2v3hBj2Qo2XyW5ZcY1YHh32Po38SZtJr",
  "key3": "3QDFPWyPG6ECfx5kVs2ZxqoPFkqufJZ25N3DZ4AN7etouxG2b7phCwSWqp9j2eTkx6HiucZ2fZH68Wtej4oyJyb8",
  "key4": "3df8em2gK1pikhrXaWa21ZVzfy2SU2tgqgBrrU9Jo5bLhFhCuVUaGom7Mpm71rmsyWjDj9c7RyTVi5CZuKeSo8z7",
  "key5": "3XvE6bYRLXCdo5yeFdjkKPkChUNfUiBn2WqDjoPF2SFMMmSLVG4PFUpNEz7yBKcjtd2Y8jQRvMPpV4yMZXuFbZru",
  "key6": "5UL15vrLR9zq9N87zsnhexMLiPyRfCzpGcdfGUVHAKF2eXFRFY6yVEVGUii8u2qPwfCLSq2qimJxZKW2guoaAjRt",
  "key7": "5cHjf1WYZzUUw8c3RQTZvACR93o5K94NHTv7ewjYN3jwgDCVo9pYvxe9hNcek77gifEUTw2JzwQ4be7v36B3WjHQ",
  "key8": "4RPynVCu9ASVV59ZNvkqc7E2JhEQ3ZFBgaiguXz1GvtXdicGrxqbogTBwqjQpc9GbXy2ZgBMrbBp91eJpsyWxpPy",
  "key9": "o4b5fvVRiLfgxNXrw7zY71FtwGAsEmKdXeevBYGDDBzFw2Erk4HsBqyksMvC6tDHESo6MWhMG1nrwQZyauhjQ2M",
  "key10": "4v9Z5CR1oh6mq983CwJ4YLJnc5pLrneoN8uZwuKuhjuFK15tsc1TgzKfUUfyo8gjH4rrsAq3tkZzMbjoKDuPZTGU",
  "key11": "25FdefZK5FV65NBvjpNu38xqHpm9CEvsCsYimqfA8gg27bNNxxDk5ovJqn41uVgfuUaJePiENfgrrwmEuTqMi2pT",
  "key12": "2tkgHMMRd1U7sLWLJx7Ssft4eNAj9Na5kUSWbKrNEk7HvtMDuwkzaPTkSGVjjs4bGAmUFvS2CwRNADMYjPKPQq42",
  "key13": "22HGPSGmzER1LjXPvSpAfekQU3KcJCbs1oNCx38zHfqvPEeT45x8wXqGW9aL3DiQ4qW24ukL39xbzPh7Uv38tRK2",
  "key14": "38iZHcMfa7TpCZ1iwTHqDkbmmnS4dtqD7EXnGnya1BRDU7bLy8c5Gwg8vo3FUkvZcyCR4ax2VxwxhTaDBYu1Gc6X",
  "key15": "4pGu4Y8XgwJ1bsMBu99EfvYSweuvbrYdLBGYJBSYd3miyziQr67s78EG3V1rbbzjUK8vzeDEnEPoVbV8Fxa5FoTS",
  "key16": "5YphzXiCH28jerpd1eSR39DBq4rp4PSVscwhDCSAEDQdpHnMFjHTwYZW1Hkyz5r9E8APDHSwRnXshnXdDG6iUbH3",
  "key17": "2voCsegkJ3Wy3rPr5N7DTkibA3K7BccugJXH1qcW1nTCvpEVsocfh92J7LaG8aKbAoHwHeabVKxSPJtybQ8zpSuW",
  "key18": "3tsn3fPaCyPYCDCSKLcAvUdn18xNQoseVBun9PxL6HugtgUv7j2LvhWnaCrDjSgmhaJDKigBh89akM7oTh52mjNQ",
  "key19": "5GAJzPn9ZbDAcQPkaXNBjeauftznLfpc4fPP2WR9dnuVLRuFoa31NLu8bGq3FDV3DdyVWRYRxaSWZrjVjLwNg2AA",
  "key20": "4EnHMpTes1yhPyuVph1UvnhM8zphXcbn5sNis5FoqLXuM4H3qAqZvEUo8R89EKc4DQbYegYE3nCzJZ1VxdesDFhF",
  "key21": "2tKVdUteFUbaMmdcn8NqXNN7FYHLBtQfJf11uiS3wVYryZya6jaSS16QERmYjFkvbVRYAFsz6mhe3nBthQkA1MF6",
  "key22": "5VnuENniWB844BiguJrfx1rJfsGj6zWQ9R4fBtbo8arvjbNjTBXPLKFK9fZWN86bvMJuYCYsrm48EhkZEy2JqpQY",
  "key23": "2pTTLs4H5c8yhodchFiRmTKPmJAigeEKbzkgfvbY6D3AaURNxWuitMcd9paP54e2vjfyAcAR7zYiXUWeDpyBdJDq",
  "key24": "3EDyNpyYiWbf4a5QPV8od31NPyxRjnGHyrLMEhS8JrZd3XXjKftYMRrbaeZVsghFVbW4hWww95DMnvpdmGuHn1My",
  "key25": "FhfFdGemDx4mYzL6jFiVSxQTUksV1RBnYNgMG7TfTFqRhjEBqWWDm6tJc8PQEGhDRoufQjXZbUCCDdaegWxooM8",
  "key26": "3EY8AbggK5dB7gpkeDKGLbbkHZ19bMeF9tjdFE6M7LJMWsdkgKC6qUNaEgXSC9nSKCe7fWP9q17N4Dujo9sb6SCM",
  "key27": "52MoFecyZZmBFUC37N2GLz4nJbwsSAt6mPUMThToPGghc39rcnKNQwv7ucA2bEVTNsakRD9w5BN1K6U3Dct2uZab",
  "key28": "4pRVmBHVvSkjYtt52YqAdj1JAuxodLxJvXAqXNVjmxz8J3y5KczE5UrL49LfATdQTZXCaKgAAdhPRJ7L38V7HLGL",
  "key29": "5oi4tKWRWooR7hwFv1VPnVyhWsAKMsxBvrDeMjrF5JZyusGLpq8KbtCx2BvEsi5TtMt7zWGuaS13RKPvvGQPzWiT"
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
