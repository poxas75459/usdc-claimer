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
    "4wLznnFhk5V5XFoPSuEjnPHA2pSLMKdsQ2n4NYehc2dpxkYboy7rj4tp9oSBQ4N1vmWwqzfKq4wya1DPF5YTLcb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42DgfFj2WXqBEskLt5BjdWbuiPbcfpX67YqcUY1BLDruxYkQBKoxJNpUgwhC4TJY8YPQG7fYQqgbsBewJ7p7jjDe",
  "key1": "5pUsN1S5zcPkS5wRs4xTLecwPHBxsk8ozTu8Vrs983jRP3LbndjyL3pZjMkfJ9hv6RVK287CL6oW6zA28YpwXGrm",
  "key2": "3h3rkSuJPcBZFnwYqqSiZw5GskN6PTinv3DVZa5hTqjmyjv9iHGZt4uNvP3XvMqWWKjrvXN19BDGx7D3nfYT1hWP",
  "key3": "59idsgenyEqXQeuG7S1wm4mttmWGzBcRWjKxhqmJatSK873qrcYpELsViW7jytFqCwcDGYvs2ZnysV59Jemyhmi3",
  "key4": "49XEsHHFTvJJkJpcVsJcLH6v19kr34B9Ekkmi8wxm9BwXjqB4MdqmX1RJb7KxJebiWGWJ96c36ScHnZeTWuYdNZk",
  "key5": "2mSvRG2LNmhxT8QRvHC93GiNUGVovDx6nzunHAxBGnfaojVVN8W8kWmTJr1Q9Qscm2sG5gMGpD2EQT4rr7rwAqZw",
  "key6": "5zhpqgBBmDfXFuAUSEsZPHypXygLMMZ4z4oXHeyxhjRz9XjhsPydfFUFUtyHYTpKiL4Gf6RHM1eAcQprVqeAKQ9L",
  "key7": "4z1VprviX2hJr2Trr2VdRGKQWF9nbjE4RmVhGBkwPtWhgBV1rFAayCruaWWuifVEw57GRXFYM452HkZ7JkBk5teD",
  "key8": "2LYEPN4njXmnpZegKvhsYpNE8XMsFjpwL9KH1Ff1NeApmFPMFaGDEhpwYHi32iM1KqewHfKCwPdKQNnZfhynpJhf",
  "key9": "5ddcEFMfpDinWsZPVGQ8x9j1eWY8ngA9RL9UMGqj3ikCVet6VLXkFqJcRMj7aM6916CaVKpHz3fr3xnJGBkrfNWf",
  "key10": "5fjNXCucvBt3eRMyWzhKvdtoUSrDg64YZuZRjxWWHwMLNCXW9oyHSmrfCfQAbwVa9HdVeMZci8EyqLesTvauYU9r",
  "key11": "2kCJTCZcTrL1mcKsPfPN9fQWvraWMzAeMxC74mJXAuCyRnfKLgcS6QZoue3PZb6syo3Bg8Up1tDBHZtsL8VHgo2g",
  "key12": "62HXrWdo9kJaTFBkN3GrnvM2G8SLNWj1BaMgiz48b6nd8zUmTMAKEkoH49RXsazf4usr8iKpy2m3phALE5jowMU",
  "key13": "3jvpd76wyDxTPxpWKeetGwUNBCVQ6tGMQXhpDZzgV8oE8TECWKqv2qH4i2dVTnuwTW1TTGxDqh4WmVNsxaE8pm3m",
  "key14": "Kgzdi1J57kCisiWuUKJWEuQW1gYp3RxjKVQfbumgLSBp5Cq3FjYscxLaLHhXYbHSPEj5UsJ1s1C4uvaP6RuqYWr",
  "key15": "3d5WgnyRebSkCdfzLkhr1Avff4v9eVp3o7td6D9fj1GvA8EgjFr1TpasmEQJWVBdVarxZ8zAxeVv4295SckzKVQU",
  "key16": "4pyKZtzL5KnS9B3sWGUVTvq3aLhmGKwuBLZVFr8wMc24VJBpLxFVEw2fgBpm9nCYYTXGBeQX7vPV4RVBgFLAXxYU",
  "key17": "JCktaBubfSaVtbPJzcU3YjUjaNxdXut9aSbKHmK2dxgJNT6Uwr25cBRSyUYrvJy3Kq5Y5gcuJ5A5Lcm5a5Fvr1H",
  "key18": "5XYkWkwTqvBLu8pkYPNZYGJzbabKR4h2Fkeuo6yA2fxNT561XKnbu2escvkoPcSPwSvyZN4c8s6zq4vSK6oDksBL",
  "key19": "3MTew8XGtfTT8iZvo7xm87P3U7FYU6VQ5AwDFeaU6rf65B28PfuAZgiQPMuvgT3QiJDCc832mezVyAg4MPBqjK94",
  "key20": "5n3nPSzsUoNDMAS4FSTwaadwYy9w99TohRUxmY4FgH91949XWV8VzTsmyQx8yZCfcXYF9F2y7XXPYPmoM7hXZYa1",
  "key21": "4fQvLvskGaTYCyuJ5x3RKQpa5YGhbQjzUVMTdsdk1xUvCikbNmyrAKSmQp1YWvDEhDZuuAjvCQFtEks5sNSFMsbo",
  "key22": "4MegV9qNWGV2hp2aadfjCnsSLnxCLS7g5J2y394g1M2QWnMEdWHgjCC1e8XLiQsd6QQPm17v4SREMdC4oqSFSynL",
  "key23": "5oMv3Jprd4o2r7xx5mopkLbjJxdLrDST9d4TpH5NK4piz5S27ec5GfEQwvUcggW8dL2P4sSm4CVA5BVJB87jw653",
  "key24": "4KqnYiuDCFMFaSHNXJK1aSiY92KYaMUTmEcwoGSgbAww66z5RUTT8qot4DRmRyoxYrtTKHHouDR8sivNJzKJbB5v",
  "key25": "2ry4ioZzJdUmduGwQTU6c87D9xDKJHdN46Nx5TTZSAhiwh3tY8aEzg3UtoWfhxjxALCLfHYDZYzn8tCydyXJgQJg",
  "key26": "ZCiALzneTZUmhqa9LWvLnjvtqjiSnhu7gTw5u5PiYuH4UzVLDRGBqQMatrssxizTu5hqmrncJ8cEiMTdo1M1vty",
  "key27": "V9DeWacKrKY6d2UoL8XwY73Dn5DAPrLRtwZrwkfoofYEQF1dsrTHJUmVD6pBPGPEaHzLchb3HCk84zJhXzvNBo1",
  "key28": "9K7aTU1ec8UhdYmrdGzLfZ7QLmiCvgosP11yMxmwjGkDsjvqeH47GfQb9r5gZy9Y9iimojxsJxQiJZydTQsBCZA",
  "key29": "58KDdvK76QUWJaerJzsyjD9LzB52d2qv9Pb9AsedbGeKB1Tjib2tFUW1aWEjE6w3ekRdAFvM4oHGnWsCCukJJNsK",
  "key30": "21ouhqu7qp3F4KWotojo38q2YL3B1Zy1VJjaG5f44abcaGGL12pwK3KEM67EzwZspf6TMuw71ah6Ny3RgMfzusWg",
  "key31": "5uNVT467BxCyTZBcLc5B1rR2uKnQeoHpzN53qM98sWcWUj2QrFiN8Ynuo5A7xPmr5ciiYxDRbBZeSCp4czfisoXk",
  "key32": "5KXUYXAX9Gbdv2hDYTxeKqhdahkaELfztJ6PfPCCc69SPcus3HELo9UARo5U8tebgj6co8Notwzepstn1HuiEMD1",
  "key33": "pggJruyWP8epKwE5QG43cXwX1DE4XAu9M2ye6554ViTLR1DMpRx5XZQmKty1qB7HLShfVTwv6LPRqJEFVwYEaVU",
  "key34": "4B36AgdDhTV2QDz8hfH1kdAojbH1C95ZhcP2nP7wcioKdJniAfbsH89BxWnCEj4xzR2JSdLNNm7fqHfSiRhmCQj1",
  "key35": "5AKxrqn57EpuPBQyzdhd8dBUUwFhk6oQRkBJXJ4Aob7otMixDoH6a7LKTEiQ46GyZSk8KgMzrd33f4ZjwSHr4pEB",
  "key36": "cYtGncffkvAxgcnutTiujUxJzB3Bt31n21MAmwj4fCdjJaibdUsnikiUNBLcLK6hp24pTyv8qXohEUKoNS1Cqhv",
  "key37": "5xAEQWiZ1R3rZWLVs6co8iVoTZJGSNttAP9L1f3eDJUrEwv5UsnUCuuSd3heSeBTPC8Sg9q1r6Chx73WgbYXjSH6",
  "key38": "2KnNkkumq53SWy7xC9nU8kDV1oWxiXhFwXvPht4opFD93AoUp1nqFJfjprQ5Cq27rV6EqBFddbqiQx7BLyk9Y28r",
  "key39": "51XGJYZWf9jynCtZBqjzQffUevWFAmLXykd3XU8SP6BC8TB9FCQTwh4WVx2mxnYBiXS92LiKQ2ZALduBvfHPJC6A",
  "key40": "VkyNfYxe43D6Cy9uocNZA9vEoccZ7bam9Ram2ioPd9M15jrvPnLsdMHgpETu64gxpsi8PSX7NCDRxofGFfpTd4E"
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
