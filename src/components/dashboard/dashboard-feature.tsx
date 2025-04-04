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
    "3huEpMMrJUtoyNNCZCdZ9xpFTCph3raE4xB75DU4NFTk9QAftzRTBDj7fjs9aHc2VEhvsHyDbxfSipionPqbQEfp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BdyVgiyDLdRFaso62McJ4N6ajURMqdpwhdQQudMJ9zvzP3jr3Tu8oNzWHfDyBb6SypSVZM775HsbFPnCRQB966M",
  "key1": "2zKzG2y4FiKLLHBNsno9Vq3Eu88peovpmvbHhc8oZWLFkWx8iTYF1aHKpkyK4RHNgpXDebs5VRZg6XQi9kD1T7af",
  "key2": "2KNTGePKHTQb8odBDPEuszwpmiNv29zUrrVx6yFkqKE9ZAqzBx52ViVbsctBpVkL9sVtzzHXYiB2YPUba5GDAcQC",
  "key3": "2NHnbx9dZV5Un4iJTsGXpgSFYMmniMcG3qVUBqArMGeDaagjjqERpxdd6NG256QvGKRXsnJrw9r5PReu1AEL5zJe",
  "key4": "3C4M3bTtHi9BZys5pvaKyPJAzXXFuqpWJcXwrVm4gLXZXJG864abZwK3Z3RM1zM2MBNBWnt6SXiddkVKHXVpFxQi",
  "key5": "35KGwPrVKBgtZhPVBPkJD1EJ9oHFTzBnkNNuT2Yv9EQfk9tHEsFNaMQsAJKFR3RaqrEUA8gc3kLAePqYdKg7wXLs",
  "key6": "5J2m7WkmgJiCHqGUe9TDxcqFVZ2ry3oyzvpLTFQyviFJ5FNboJxdc6NPghbtsJRe18eQoFRWGd9uZneNV1ziL6em",
  "key7": "qg3hrcbcni4AYji78DWPAxMxiQ3wa5GFUvL6si6aNjdMYdvyXj31mvqVU9BnQXm1v6mAXkCcZkGWDRUv74Ekg8D",
  "key8": "2xPRvpwNgf53qDsqbS6rtQqWtz7zUhjKn9h9DP4GeCi4qw9Y8cdaCXoGTgNWGn7Vqm5tLQ1EXrzdrWYYykKMTzXy",
  "key9": "b3jAob8d3qZReq7nnQmej1obzMYZTRoUbm3iSJjkNCqLyHJGoU7s1Ham5MdiKGUQzoDJH3rz4KPUpntUZaou3qv",
  "key10": "3UfouJWx3szVeBMHAuS591jmkGcbWsmqfchmJ8c1EA8Vif4cbNgVhNtcGw8Wfkqe21UTVBLFMEY24dt39NoVRRHL",
  "key11": "4ewXomsCUTXgz7TpbAv1XqPkEw8Ch9nHKbz1dCMYLjE8FyVhhvGbJHpRS5bcFGBZQQesPpEHJjFReKhAUmyJNu4U",
  "key12": "zuLhD9wyHzkCpMqEgYoiU7bB5LgTKDVuTCcYEMTQnT1DEkPSirmsvp1mMy5H6DUDj9xWxqck3h1FCNjZvB72J7V",
  "key13": "3wW77eD826R6AjY7rPBbqb4LDL3XTcyFrRAGBFY9Kr5ywgVG5qHgSvA6choLU6mGotFw9FzDSo6eengFfC1Kvc8c",
  "key14": "5NWyRgtXmbUFdS82JiTRBrM5c8Y6yFAGd8bm8j5rvzuccJ6KVwtEaemHg9Hwwi7ArAbfWDKJEBJQ7GcZsaaYFYwU",
  "key15": "3UrT8Hp9gotSgksVSwxiytMgDtwaST6XuyhWc4XunwDvnCRHViofFv4LbwcgBBnjQeNLaFgTDbAa8tLbUaaHzusx",
  "key16": "3TmVVmRwgre96Xb5mDzWqyeNEKSwLCESP9BcFcJRmso42U63JwxN1oUG9dQC3So4JPy9jQJX4Te39FpJEhqR8xen",
  "key17": "3T5DLkKYsCfMnPBLsj7LqBdX12sAGGr361p7v3QdZR6fZtV1AQqfEjNX43rGe6qAAfxDzjRvwt1htFKwH2h3ZgWf",
  "key18": "2BasJTqWVEj1xHW3ZdEuocBCUyFQ3xpucR8Ka87uKDjCDqozYApx4mruT7RBYACa6KnbWk5F4twgjZrptY8GhQcs",
  "key19": "4z2yXxJo2QEFjTMQbzsgWz6XHFjJ62mFA1KqG97Nhjkxf4KUcGswaFFjzJL2dn8AiB5bNUR8hJgYDN4nmWRJHX1Z",
  "key20": "56Brjy9gWURLUhx3KaT5BD1Yjb9BkKXnBwNRoeF29fQ1swBpCpaiSkKGnzdNhibaWNip6zAmzd4sWGcxnLKfn2ey",
  "key21": "4av3P6Cq5LFuWspWjXiLWkSQJAyP3vUaboeWkVTf3CuXb5yVMvrVPvyN6pwkH8VyyVz7GB4YE8kY4iDR78dcRrMp",
  "key22": "TAtu4ETFzypAgyGdXwf83CAUsp53Cz8jYs34bfrVnRrAoTAkcwoyusbCkgqtD99RwwmkPTyGdpH2E6aiR2v8YV2",
  "key23": "4XQFp8Z5kM17eb6iiJL7SNBeearikAVbDMio34hyEPtdE9VhJvGLFu3jWSyuGbUPzPhf4L45aqE2YxPUCek9TApR",
  "key24": "dtCRepKbCo2jTChx4W4iiHwwozFWFmwYYax33dGQsmGjESQUzWtRBQaNefTppcwCmMCh45yENGNGqaEtkq5NvMP",
  "key25": "2CR1kVqj351tfqaATJ9QQdR1GTYTuKQfZxZnEUBCsXfrybjBMEdwvi9af2N9fSFocK7LrQ54UGV54U61h9ey6R3b",
  "key26": "gVFpvniSq2wJXZP3mNfPCoXyFJ3m1K1QDqRRmLb8zxEGXmCs8aTF9tJR8fZmtdZaUsmueCBu39tawhUBvZcXWwZ",
  "key27": "Xk2okEWgWcrcKo1NbQXWw9HatJnh8PbP4jRhTy53CL2Uv53hKZyTaRxB7J8gHceZeAH1bahuaFGceDK7LVsyRLj",
  "key28": "6h5shXGZdKSYECfcXwJUwfdfTPWcA92J8kUwCa5ApTYcFNZfxGZrs4Z2pUrc9KWuA9JUipLU1eXVG5XrbkeVgkg",
  "key29": "CKKcnnpMxoSJexNyZSb4AMzLFaqFaP5zv8vAvuaYc7Y322bpgomM1VxTPWtNXwkKQLbrpc2KmuHYUaviGuo11J1",
  "key30": "66cFvXXGHKQWeGeXMFQWGAsWKcLX79JY9A4uKQnxViLiFFTRJecUofcW1izFsT4wZjNpBywzwnfPnpG8g3Rfp7p9",
  "key31": "2MG1T1toSqsPJEkwXqXeQt5GWPX1fhAu7be9L8xHtjK9LnXfkG8EXgnK5i87wZKvWxx3f7gA3D8zMm4NMMx7Xbed",
  "key32": "5mNDPj7Wb6nTifPQk2ZjkuzqtftkgFHNCziNVkTZGzg86jrohD2GNeF9ogUUeRstjkfAc4mpYAPJfjQDJRkH8iaM",
  "key33": "3urNS2CRRuzHeEqVMdwPGkqDbbEJpSa9Xjk3VQer8jkAw1ycWMgLxH2ct4f6wxsyp3fV4LutDXCiAfYzqL8vcq31",
  "key34": "2j9qWXTuY3MssvQdnG2pWQeqyKy5DJuj3s3mRCieQV9YBUVWPjtsQDWGBdYupNABBikGqL88SuYBYqV1sheCVPuk",
  "key35": "3MXSeAfa5mzu98EBHQZQYfp2pNCQ3ciSQG8aEkEmB1D3kwopXGPPUgyGsYhwF6JYbwczwC6Tu1TB7ZoSWY5qU6ZX",
  "key36": "5uWCG9GPhwcBx33ieKV461ZYesKT5UoaGvaNQNjvCDSe7YGZqLuRhS5wUs9dmR6HiF1mt3K1xJenXWEdQ2fe6HKj",
  "key37": "QLUf7U6YT2YdtUuAmSFEH4zZgZEQ3xw6VRgo5wkqRRNLeUjK4EvZGTdXzFJoHvf8Q2Gt1qKVKMKd4THyf9jzo6a",
  "key38": "26RnomBWfiAvSJcB9PZFKRVME3PZayXibXQbCU4FWsP1ptJahfn45DdU32Yaom8PMXbpGo67bLMVwjPd5aj6vA7m",
  "key39": "4g91FnPS8BXyhah1zM8aHu5SDvpSP5cwCVhcTWWphtGBiKXzaSFTa84sAkMjBFWTZU46caRs6T2Bd6m1oAQ9ssKR",
  "key40": "3huEarQ4YL26tnuG7XJVwNcmbobeqSvrcTMgUeR7XfD92kuqsw3HJM8HinegxMvVgGTJoxAJUdnVW5ywwhDhmaiH"
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
