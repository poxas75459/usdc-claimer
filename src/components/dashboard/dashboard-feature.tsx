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
    "2tRywAG9LWnpy7gaFTB3jeKQYr5s1QRgyyAhdf5tVKMBoLWtehYtPjbZWKLKKSVL7Xz264ADXvT7JZ5RPsQVwAQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pqf3qGi8VHgeMvKKs6AcJ9ELGSnTFPBF22FibLpuL1cKqXjMWqyevq59kRabrmyFLUJAW1NKhCbMiDXzq2GY5Tu",
  "key1": "3Uphp5BjugLp6NmXcyGGUHzxKeFF9W5wu2kFaAbj6bWyPLkNwPJyZ6X6e9vJSpYTWabztsME8WrnwcvBvqjCSi7v",
  "key2": "yydzVgSz1LaoBjUoiFnTDiYrqaFxaLGCkYVKvk2MYnE5dy1D1xrrgWGuh7DwjxTJHK3dWT1eBDZy4xhXJ5f7WtL",
  "key3": "3PACFkaqqAkN7kKLCWQ5moNVGETmNmQdWSLuL3YpaCyaGA2fXKjXztdW6Ero1QN6Vq56Vnu2hJhF9Hc9rDPZJ7gF",
  "key4": "61jPnXQMkT73f5373fHvgEpvs18MXv1cZtij2rRQgHt1ihLRQY1oz7nwgJgK6emkgEYpASNQm24F7fe4RLKvPtsY",
  "key5": "2myCwA82988SgjFnh4BRSdpppcC8pcofHdDc3JJVuJ8Q86kRogrNHGU1fJzYTgZn3LGpxVTQAasjjcDY6o872Kit",
  "key6": "4fKVHHD1tDLZDJvFeGQQiWWfHdsqyag33C6zTsfipJ9y4eMzy36faXr1viZWV2CGCEs96iKoQDTW6mESdNLWaNox",
  "key7": "5mtaigwas7LDRWuGeRpAxBnZ1qD2SGRfPjc91qozSJhFda5YSRFqYT2LHk3hK8CfqkhZssRU4SyB8PuhY5HxtzTc",
  "key8": "4tH7xhoxezBRcEioiarQWkzqAwFNV9h8kv9S9FyPJXuVpVN4c7Yo8py6PNyQSuqa2PjYUBtRfRcvytQFk28SBc1u",
  "key9": "4KmWqnoCV8y5as8cFiRo4Nthor73icx7oCWczxzEXTveJPg4KEHBuQgqZsq3bSxak5UZPnguB2iaBAKqHGpEooSD",
  "key10": "2uYgwdHLPC6bzoMLjf9RjPdzRGj7UPmHRFuEyrvBXPB8ijy2HhFT57tCMUysqH2UwwLy7kzBaiYtEMtLt3UutMXp",
  "key11": "3u4Tjbysuj3igg96mKXahatJzmB9PWX9xD19T3WKEnhSmx8yC2uWqAKdGdY5M7rV41favBGM9JhTF7r6FRMrNfbS",
  "key12": "2ASDDqR8uyrLjvvoEjNwrkYEdmbVqaywvus9uYr5CMDi2NWfgc9KXDHBUoC6ZRkQz9B3dRCNCBHUS7mVKSRuWUgr",
  "key13": "3Bq4xb6JSqNNScYqFWb8tcSnLwqwagnAHnx5CgZMXsWGVVqpbCGnLsGWrE7usjMRM5XcctQyVccdQc6yoaPB79gQ",
  "key14": "42GfGb7J5wZCph44LNJN14Cny3NWi6X46V7SRncMQGKT5D7XPZpNeBnCYFHqxAkbEASon8wxpePesjWUUjm2Ec54",
  "key15": "4Tramao6q6QhGqyayZq4UnVQMEQWEdh2gBvHQknevAjqgFYSvAZQxRKoZd9uzoT74pGvhYz3ZphQUQDYtoaddZvm",
  "key16": "5ZefUZWrsF1gD2LfeaFg3vwGiZujqjotmYvaW5e9x8WgQfBArAU4rFbx2TTd4sQkksqw9DFQbkNpSBBQc7JtCCc5",
  "key17": "2KjBdibit56ZRjRQqeSqXgtnjE4H35pAGhSnYRV9Qn3UfXwLhBZtsSMMCnWe3oAkrrkoYMbcMk1riWjGntGbs2Jy",
  "key18": "58iRMQWErysDCijLvyiXkz2ZSTKLHHSDARappkfK2qfCLtmv35KY7t5mRcJn1xB8uqw3cU4pQZmSDAfwcSYEmsBb",
  "key19": "4fN9HZomkSRKmdc1F9oUVBn9psjPXoVzuThgnqrJwww5E3bkyiwM3aVGByZpz9aXmGefhCywN8wXTHed1rG7Fv9n",
  "key20": "2MQa8VT6UeF2WUNzy9FaiEQrmwaMZmgvBcuL17ufS9sZ44eJfwM7W7iPZ4HYkeFhdEpmtV87dRwGNBKnfAXEQHkY",
  "key21": "4keXwToL8nj9Vnovfg5LNHZG9wJ8JEkHS2UV4AXdYg1iLqE9rzfuYTeobP29vdZX25jdNb2eCxhNRio73CjL6FXj",
  "key22": "tsn6yNYXGCyUKXTXP5Wt55G9ttJCSdq6N2CFYw7QJ4t6WUBZraxxbLiZYRqjzp2oPPPbtr2XcLUvCtprFu1mi2K",
  "key23": "27wk7qdm65NTCS2uoWyt4VmZMgnsGLkY6k6jtxtGEeyHNC6xzAB1aFFaPxWYZZNTfKhK3KXtHzJBSH1RFh6AwqAD",
  "key24": "5nDsvDtcu6qQQuEL3jSNx8B5o3NdDidZLHp7jHp366rweXaNCGGzTeYPTuDfvn7dN9rrrYQrauEu1bDHYsrcyVJM",
  "key25": "377yv437jtjkBDpc5kJFnbtqDR1jFFNf3EeL9vVyJyZkBXvWFG4LwDBSzD3XKH1RQHWgiJYCmKfCCKnsCptTitPi",
  "key26": "2x2ao8vNtNGpB7FNqALp1d6J9YSGsnqhAu9ds9qGNUeFFfn91itF3fsfG2qrujDAnnoC3JdGL1UBL15o6F5Pc6VS",
  "key27": "3DGq2JpRgSeeJoVS8pGd4tQMRfuAud3Ls9rc1irTmt198BDtEMwx9e9DfRPgmf3hHZdaARN2pNtCVtU74tGDCEfQ",
  "key28": "4we6MFdKCkwPbw49qgNXtTQGZ1FcFoRf25DV79VLRjYfqf1xyCWpRoFfXqAjAMYzAPqjKENTcQnZ3KPXuk6nT8S5",
  "key29": "5WQZSMF3ix68QZhRmTc972iNDhGVfkZysVUdAYzqfs2ifSUGxneYCWr5yFm1m82krvg9mtbyC1Lniammw62PDxoM",
  "key30": "3coRZuJZJc4wBd62gpxopWKAbUDwxfwqgW5VQ8LDCMM5rVRfSZbiJMi8eaci3N7C3QRcXRzaUbRGcqtSRf4QSkRr",
  "key31": "EBqoBjPkSntyKvCNsyNgZfqNXgVmoFYoncRzAe2LhDSMAyCXJ2it6yYfkjgmuerLGwzNCvAPX3W4muiXorWQDqf",
  "key32": "26GgiM6vdBrXyQYb6XYKnYgMWFhx2Ynyce5ipxtj7FaSoLd7j7pby6FthP8RrTgdUcrjBBZ88Tz2dmrGRS1p8XuP",
  "key33": "2bNrbe1zWm3aWSkN6CSeVpZ4UuMhGDs4g9CFgmAiu4taUTiMhoUuXuJuRypKsHVPAE7FZbn9s45j5jQ17WzScum4",
  "key34": "5gsUDohT3qA4Lx5GTqm2aq5U7hk5CbqnfRJKRidihyzDFj6r8RBRpXFyDj7LRXbkAWNzUMt5uVmfjQj69asLit9a",
  "key35": "4YxjSXJyfsCcQ9z2JuMLTgrpA2jHMMSeJiPPWTDBSWtjLL42QGRUi97g39hTXiwEJtbA9ZvcGEyuHh5Q9oFLx7h3",
  "key36": "2Ev8Jkkfixv7MKbbz4GjeGhzgx7oK2MDRzhLuuuwkxDQoLJpA48LC5ZUGwzLwx1iteNERuirBDfJVKdHjwT9zDvx",
  "key37": "3268dkCfQU3U1TqLJBFtWmHvQ9MEQhwZEj31t93e7Knxj9evH8vVS4DL8GjVw7RiuGr4tYvESZCMTWVTyDopKRHR",
  "key38": "5VyXuxtuw9Fit5ovaSrwaoynn5mQskFwqj3CJKcQgDXdSMSPz6HmAhZRb9xk7sbLxygCq9MY2i2yq4meXzP5VFec",
  "key39": "WYXmx3ivujunLH53BXaAUgsaZRYzq2CP2vDcKpYMeAsFr38BzbtGTRnVMs872zXSPmKAPy8tTfbHTQTVxDht6t9",
  "key40": "5CcbuM7kP5f6nQ3MbRTspoLtiq5tMKTsp5eKFkTt1WtsPmYG1i64ZcChREPXZCovxHEbYEU5L3frrFeTDM6JAmWK",
  "key41": "4ZGr17FRDLpQsy5yM83f9EbVVnxDtQLp7Jq4uRn7sQkt7YSC8fzdTov7hnwxiz93o9g8B5FVJUozTWbgRyFFzR5j"
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
