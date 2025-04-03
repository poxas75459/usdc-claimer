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
    "5srrGvy36HP9hVNXeLTcK2hKEMbeKAzVVENhdYkxPFm7GfYez86CQR5WrVLuyD1aJs8AMm7iEopLnBYGFsJJpCst"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64it3uzPb33jVevftTLcUVUKvY2BpNNHZJPUbhbNDEfvZDxRtCBzYBEnPXczciARdRopCAKXSQ8oYWbJirBm73A7",
  "key1": "4PZrZEgmk9mFM2qzeHCT5Py32pKaRP959zUgPxLTUdccPZBjaQTBL8axRFxpHwbp8gZx1PVCe8QNSHY4o2BdvjqW",
  "key2": "2ijL9EUcvTSzME2VmNiWMwc8mBdGn3nD9KHXjR1vuEwxfoxavqkjUGwZadpBupiqUy1a3C8oMpLa2RhFudrCpPxN",
  "key3": "2xgNska5jyoK1xeSGQvJEKSGfDSjFTRuY14gFE1YfwvYFpkiLoQajt37USBvEXeeZ9GgaW7qEgGS4BXtTNHf7u3T",
  "key4": "28Yri2qYHzUFStCTcDyFDNkW7nPiX6L6za5Ru2WFQm6ZJ9kTLc3gQqhgq6GyjEQDdFeGgPFDQmu8Ux2NhTz4BoYP",
  "key5": "4CAqQwMw8wS4HYcG1s2kfRGmH1TEeDsKNQYgAMQ8FX4LLxLDKt8Pyz6R68WW4nbKXf3LapAC3vDNJhdsNWYHNvh2",
  "key6": "rbUdD5a9Dn5ekLzdia3mwDMh2APn3pFmYugabKR9PJYyRuHCTLqW9zqjDS2u1eG5aBg13gumUpHMhj711QpTh5n",
  "key7": "4gWSZx7hFemYP13zEnXEZvHeUwnfCU6r5fHrkB4e8X2fAWBxgKRA1W2JH6TGEEyHdmYYbm3pwGawf6ehvXzg2Ko8",
  "key8": "o1ZWTo4CxAZFctCekhWo6hhmbCZTcPL245bzEvrNT52j4Mfk4q9aiAxuyRMabELPNxRcLEdHnVpX686ki4LrwLf",
  "key9": "5vnFXhBBYN1pp851HgBkafyFM8WgGsS5UGSGWtjChAUrqVXXuxKbiCacPGaXZkaR5gThcYpNK7dKgVyuxwtFfrfp",
  "key10": "5Q4jjmL4cvHQ1PRiD5D2zTkjy9ohtVf8XbrzftGBx9zB7jksFABmP3mBD1gQjqpi4BwsGFwLcmiHreCZZmPuQk1z",
  "key11": "RZQH1qudU9PGW5ieL5Kne1k3rAfYPtsEJPKkvNCLJwYnNDJYDMbGZKNjhfZNUVrhC1NgJfFUkFEN3af8qbuRLcW",
  "key12": "4LKGPB2k7w4iq1uXZyAAX9531QxZ8ihZBKjjygDbTQ8utSFMyQ5ZAvaaXaTUgsLmEBcG9B4AHkVnK6GPSHDY19jp",
  "key13": "6BpsK8Q9xoix9xKNspMax8edXTxndHtniSy4Bwd2nsY4ZrEn2moczdDyBCDDUKqn9pVkHrZFzKz6f7Ck5njHenJ",
  "key14": "4XKpJSWdzuUmd1szCizFZVC6ZaT7fWcmnXubEGr1Sh3NEusg2SsxHCeeVESuoAyYAsKBMzBpzn75pSduKTmC7tKL",
  "key15": "2wdy4T72KFAt9R2xh7Cz8yPQ85evWGn4nEjnxSsZAcEbGFKfdnADQ2YsgQ8nn9rQCPZWgmhJenKPmrrvDRqFV7TW",
  "key16": "2U8Zw1aBJr3kSEctHZ2scbTi1QTQzLKy6j4K1nKSguMLw2fvcNUBfhsWVzY69tFGhEwhfiujxLSNPoDfKDFx2VSQ",
  "key17": "3VWehwKKrNYSDxbbFXjPH1vHa1fifq4PYiT2dtkz4W4MMDR7BH2xZVrWHD46hvHnmaU5rKPL1r1tqGMUXSM1cZbW",
  "key18": "2KX1mJJ3bQa4mDQEmE8kPrKKw88pdMmgjYatWPpFKHjiG8vunLFgcVin3MmfPRgTjRtxyJDCDYtYtTyTvmfSAChR",
  "key19": "ksrDQ3GmTC3D8BWUQskQ9BPG9RxpKKQsSbzTcmr14hikDCPNVZqEUgk7mmCnoLsdvN7UP2ah7CH8Dk7HnqPecx8",
  "key20": "27pxXbdGzAWPeWm4Co9YiJzFqvJU64nwKVQPaNCjj2jwyvBg3ZpTRLGji4gHHxHE88FkPDT8QRRYKnMMqQYMs6oz",
  "key21": "GoxiycxSenhtHJ6PhAGi46j7s2JSd7Y9ThrUcBCsYdcSKSXN2gqyevDjxXPjs7xdHYPp2dKgavAmoUWagHTReJr",
  "key22": "4PQ9kzsJg3hxmhpdRSF9FrW6oiMjXXq32vBUmBPueGxsvGguxd7eyBmSiEzXBb7UMsxeQmnMRq5P73HSr2CmYB5P",
  "key23": "57v9EFj4e3is7nMdANEe6i9UNjApfPxv1DyygDux3nhu5AnTyprP6ZSu4CS8JHmCBzoifYUpTV71zp3okHN9fYky",
  "key24": "2tZ34xZ5E6ZpkhzaT8j1zBCAVjRBwhNxyHGN8jsfB4MxGyUVb4dtL83spKippwQPJZqnLAXwoEdxNmCTmfqvkJQS",
  "key25": "44ub5LY6h9WRcSok8uET98AcLwMd3FamqVnEbqc2ZQE9kD2C1Jtg2XAEiQLNxizYPWERYvX5bkxtoZd47ppQYhC8",
  "key26": "5KKuyS3bgGn88r3rbDtUmwK7KzCHz83sEbyDK2FjGnghhuzdqdAz1AHZmHhN8niGqqs3oVVdtgiXv17ecZytepD4",
  "key27": "66CmWF4qdox2zE72ZTdf62gbSwc3B5UuMRLFPY68DUqaYCodjoCmjcHYHf5nFKr4zr2RAy9XBiUtSX65vCvLLwc5",
  "key28": "58PK9pA242S7WRZwuguMXGVymmYjvJEmYogN6foYjDRaXgSpTe2vtH6JjkfgNBBh2E8MjgsXfBn5NMXJH5DwjFFa",
  "key29": "5tFbiCo41CizrzWMZmGHBZRJRVE3ajc68P2oWJEjNaUnYHcNtYqd6j5VmFZWfCYxMTNRMfBB3eGuXUETo5SMEpLP",
  "key30": "4CY9Y2BWmxAM5gjiopyMnxh6T3wr1GwM4TToBK8HTZqv4iXWafRZDkPAVy6cra3znfcCTxhyJK2JSmCarGR7Reyu",
  "key31": "nap2R8NuE4ELz1e6Qeh52voTMQs7VNUfUmx49SYZTyKmtkpACjXZ1iuVufQU8v5EekMUvFs8wavy19hvoD79hTs",
  "key32": "4fPShcbEhcvis9omCvQYPcpuiFnBR8TJRQar3ma5anuJvSZrXLMTuSSFC3E1PwFtzPkAuWqCJUndn71GRrA8pnDk",
  "key33": "9aPefLMNWqAXQQXMzmZxJj44sV3DTsy4SNiUyvdmnCfzeP2y2s4x51NsXfmJBYc6f3UDBJBKgeSyeT5FKR1rUwm",
  "key34": "41NR4QoHvSZiGjvx6jMe2D1RvfDSm6Tv4GToVBAftLQjTZFBnWjfN6CvaBme1g5iizFXm9vRpsWaMUVpDzGPWrUN",
  "key35": "4ohHXcdQnLKmMaAo1RtAi9WtZEPsS5Dwa3h5g257yUF4mFp1auZaLTGgJAFNhQkDtHs3SrwbXEnTmKAygfLLsprB",
  "key36": "2aeQyQDH1KAiwrRKikiSqBfTi7R1iHAXnk5SCqvRTKuZLuC69JUH6x83W5XVR9htpkCjuNpMbU375tgxKtDnvbxF",
  "key37": "2Hdi89dngC1Zpgp33kSR9UT8sg63Pui4JQuDUPa9Sp52LgG6HoAh5WnUnCT6bkeFBiPPTEu4F8CMQ7pude8MMhgF",
  "key38": "45mJzWSZ1Yrs5RPmvV4uQSYuMKz3hsHQHThVgd9dYQUwnZ7G2qrjofrMsRDUptVFBQdcdZF5icXvPRyEHu9YMSup",
  "key39": "31hbvXF7YY8sN4cEz1tMq5pGmg8ertBn9gou6CRcFJKcKJUgsfbMmWyDAdrrvbZQARs73Tuerxuq7cq6asayM7Q5",
  "key40": "4eWuAPFLiHznKhdYKifNXVBHn7LYSwL8KM6M8ybGL83DKiuthvm6oyhhQTqc1orunvgBWRt1vmwfxF7j4bfsh33R",
  "key41": "64MBWvhRZdq9P93rqB5Euyqh7WRyKExzTQRTz6veeFEWB7P7YswzgdkLdYhKsVA3w69trWuWHZvgQ1dwESr6dAQ7",
  "key42": "GJMKsJ8H93zbEt65cKK9ogAaDP76WtrprugSAoEmyRtZuAULaC6FzTWhHrdsmovZAZ9pKQjitu1nv8mhvnVkaro",
  "key43": "5qC7F9JgmEG9iJWy88HSx6ZZw3JVzZ9CW4NueFtosbAcAwsUt4h47fN41dXotN67Hs1y5cpr9HHpZAhfxyvUvhQb",
  "key44": "41NbFgbPAyYRqYiyDZXiU6ADLsjmhmwK7FeA4sKQZL928oneJeGyrCyrWjgLA3Vnc3cdpJc6uEVbcXbYKrfvGFe1",
  "key45": "2YKYwnJ9JJpBKiTXH6RxyUfeDhsheaixbR99nynrncMHksDPrjE7nvWGrmcrb2PV3FEVEnPNJK6qMbpSbmfW1oSo",
  "key46": "2cDgiu7gQGFacs3rqgXYg8sNy54nWMpBEHfXRQXSxQypKzCxpBKtytyDEKwFhjLJT5Ki1J98NW1VPUUR5vunbsf7",
  "key47": "2qBqZ7KsmbR3hUKxxKKBn1n4bugg3en7cic6Bo66cp9rFt5wpg6uBsgKp4fDRFTv6fG8Xt2X3rLYMd7G3uzkYRk3",
  "key48": "2sfgw92CQB2na2NZqukLzZ2a7PkZ2uGG7egJYj2DKcjPWA5KFRHFb3F9wx5zX2tG8bBB3neMeUtmxAGHgY3qQpPv",
  "key49": "5dZXQShXUVmifXcJQFnwywBAfeHSENTWmiwGe4TYw1n5J1gtZ4gE26hGgZ4FsDqPpPzGimiAnKEaRVLV8mqWjkdN"
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
