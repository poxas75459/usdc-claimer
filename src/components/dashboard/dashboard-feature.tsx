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
    "2U5AdrgCXRtdkcxYfgkig3NPmWea55sRKncLHfvA6fTBXzG5SwuswN4Z2BU4jPzUAqZfSuN8NcLqyiwcFfd6eUsH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65KyQ69MCje6veVYwzYN7F4sJBPQWW7G8geuGYqh6ZRJ8U7pxptQ566nqgBLKe28EBF63YYzUsgJnf85w6hmWNQn",
  "key1": "6HpbxtzrMaUWvfPvs3u9rzo6Kgz5oB3APiCLwfz25wmhcWnBMoNHJoqmTFi6BLqX2raNi5U6yAUubzM2JbucaDW",
  "key2": "4oRGcf1pGfjbnBJRvmJMcU78DCKwSwihggoyG5bmkKnXSJUE71SwvRcBfM8xPPrp5UooxvW4fN2o2StJy3RmLjgV",
  "key3": "3ibzotXsZrGaKZSpbGnmwPqFaMjJWshniWN7RQeVNVRu4Eww6DGMJxatKhfuFfEdCukuPUzExym6rbqzp3b6g86C",
  "key4": "659qjPVi5TV8o7T1YQN6kVsyd54Q3y45othCX97XRuCKSfKJkkqM36zuvNwayYScyXVsE3aunMYti276tCVQwKAa",
  "key5": "2rE8EySHtDjvKnxEU2jXm7CCgUSiLnR5WjHwKZMTQ2Rh8baBzXiiEHFk7ZTuvVtmRUd5pQujqD6jbc3i6gpcgpug",
  "key6": "2w6c7DF2PD4E3nnPZ44ZXnzkD3MrHs5iZUvysebeqhabrssgSMDPknW2Ltc9StzJRekCnd4ExXrYNr4TXETnhRZt",
  "key7": "44rjUtdj8BuegXwkqsCBDNuyLZEezXRjkhx5rWrGxin3aBD1jv37WtedZEj3Z43go5nvKL1Gzrui1F29vLXGkpyB",
  "key8": "UQVQsrXEZkiXKifZLZHGUroHhhJdcEHLJUpGBHYVNuJzSX3EJAzkLak8Vj5TY4hVMn32EPGMYvBKCsuvBAQkvK1",
  "key9": "3nvEWopS6466arwjahTAcTDTPiizJW7gxRiphfnX6MZpCoDi5jggfomWcY7fYtrE7injy36Vao92pP7ZmXU92hL9",
  "key10": "53ny75m2dfxEdCihjr5kEps5JbCAgG7xie6jZuCRhFSgNEQBQ392uwPMk9z4eBo6ughyTCYK3reZtdS8quNHqKNq",
  "key11": "2sxTZLuaXDEuoz9DQvBSJDG9oxawvbmmp8buVFnhS1p5ZT5qVxQx4gb4o513gJXkabkyViB7D47H3zKVK3LkNCgR",
  "key12": "5nNDssHMkT8M7m419mjCUUr9bvEpDTrwHf6AHBMAJ9EDVijNZWwG3MVTtRR629iu3p7CsReDtkh7pDMRvKESqpo4",
  "key13": "3jtJe1cUxXAkVc4xPNKKPu5r6E65b1y1T6vukvuTbQzuZRq7wBDJWgbeJdLg5tAh3hfg6uCtHRtQyUUX7ZNz4wV3",
  "key14": "2eu2FqFK8kUrqrktKhVhmXaMRydsy63dAcjeCjZnXFzihm6PKyqh78Hq1sNETtnWLGegMvAjsHMKoXVciXCinETe",
  "key15": "8YqdM9NxtiGtHJL64T7kjvZ6s7wz5aBHy4VhJZb3dfZdN5sK9g8fCfxFQpyd5M4Dx9SgLtzsWGEHnZ655Lo1rt7",
  "key16": "5BR3L5CsoUCQq9Vo8bR1acGeqtkBNcL7H5K6SzH7QNnXvbBygBRMqYzRZJii6xZW8R3dKje3qgXMMqAC5hW3Rr6t",
  "key17": "3nGMsWVwG4rT3MELPCWHePDbmBaupqG9qmEAmWW86ng8AehP6aXn1hwanoAyEimXLUwCj8AeBzBeDv6FFJLEbJ6P",
  "key18": "3MYmLA7zLobEHrxorEnrbrDiu1EF5ssxGiSRASJZcaqE32N4ht6BuGcteNDybvX2WBCnfVQodjEBhDjsSpgg7YyZ",
  "key19": "aNzH4e64abhCbgv4enrf6wEHUTERTPwhCpK8ECZHduDQNQtouyL39tdQGC7Uypxz8izbTiShaMg5xyD3MKiEfPT",
  "key20": "2DHihF2my1FKHKsKfsF5bJhYwa62m12Jdn1mJv7ffaUPPEhRP83tAft4g4MVJBDH8uFGf1Lyq9E3tzetYgSyXj1x",
  "key21": "32MTNwJWxetCYSJWxgiqeYdygLYDkpEgPzpg9c4uNG2Zsmr3eSrKE83qiejfExYh2qToF2mvLHyTsgzCQZ34Mhsw",
  "key22": "45Hay9x8MNuGNBhwk4zcLLAKKChZa4DfDWSiwSbGBxCuwxYkK31VDBQC8Vvdc64yitK6tfpt9QVudeSPECJ6WsRj",
  "key23": "3hzqh1MdNofJMg2S85EiBWLRaiedvxEzc2WM6mQn6bLXWGGtnbmSiMaTYYiAoA6xs9ogP5qW2boxUPCrGZoqWvqs",
  "key24": "5L1H5EhkuGHf7MHHZDdNWgRj9R65MtxRkDdxLJBgYhF9w4bHAn3vU9NtmTtRM2QeaN2Jd73rsXt164d9kr8vKGqU"
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
