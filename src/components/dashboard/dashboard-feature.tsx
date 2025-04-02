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
    "7aTjFV4J9D89ryLaUKBv85NEa25munfKt3zjD1bfrjCDBfwjDMJ87D4rCtoMKcqLVyGAvrwWVLh2mPM3fcYTEYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iiLd4Ttdsurp6MvLFQcY1sofgjeqz9rG5NwABBzwxAJv58dLPRkLQfqjS4g3SgW7rc6RTgvihsYdA3crj1fKu5H",
  "key1": "5rBU8krUcWhW7hPFNPxHbk2YYEtx6MRHLeevqgXHzUw1QwNL2DcjeXx8BZQUcUuCiDj2VA6hkLVAXRpz5kvYDAP9",
  "key2": "RVWN5pB5UWk9aRvZUG3CshSjx5q63vDirrMSsTVrRZqxj9vfpVpmTR1GpgynJmonSQKuMaMvX2TJT14JGV7Nr1j",
  "key3": "38JiubzdDbWhSn4HAMYMgfZfsxVzYutwHkx4XKkd2kTPBahQ42AYDDWUGBVFcWoGsuVZoDXYm1W1j3mirpvzSTfW",
  "key4": "3DWiGyRiMCZGXoaPsAuFPNKMTjKMzTrnqwWDSyyi3z9qSirpqZDWfhkFB87GxxdcBZxUJe6XUQNjnNZhCii6AqV2",
  "key5": "4S6scXgEdcfEPhSTFZmhmyYCjCrvWnd6FsNSH8Nt9bp6DbNdkCPUns7uGCdDD9Uv15nmbGc3QfPMnkrBF27ofvbo",
  "key6": "8gtAxJwt9837qNnCkYTeZA5F7QJys76Xs7Bau9VgPnLhEpWKnYA2PVLA9ypGV8ygjBApBYzNuusKfQRjqwRuFhK",
  "key7": "GRzjYHQgfbYKFJ1SJ1ywfeZB7bCMZvftF65ZSEKJYaqzobAeE7PKSvV4aDxpyxCRA9XH2HMiGui42v5vzRDBU4M",
  "key8": "2ys6PiVipup4t4dGP8TWKjxcU5FA9KGQXLFqcgR6Qrnp2dj34xskXVbBbff9yeU5SkQy1wy4iPYVCdZ17pcZifpV",
  "key9": "23dabW2rvsewAfnxKeBXfKz4S5ZCqJczj5XE1k931ZKbQR8ZuM62YWy5rXTtPRGS3PnM9Cec5D9vupD2qQN4eXAH",
  "key10": "5AJBntNZpcervuW2LK28WRdcH7dG2iPND567o2oETed5H2w9ZuSz81T7J1oaVuL16qhzTZRC85Q5JnoMGuMeu6Fy",
  "key11": "3UfxpzSNo19AembjxYKGuFgR1XoceXCyuqGkPoRT9EZUonDnYz9mzdUU8uYArYbqquZTTERyDz5grrCuPiHAB5hp",
  "key12": "4FaGhUFuJ8aQ9noW6r3do4vSE7BSAhiz8iDKrNd9j21Vz4ZqVT4iCfgv59YL127Xnm8L2FYFnrLn2E5ZHwHfMeUm",
  "key13": "2oG5xSEoY9QPCjv3QLuMptzggXDhCTykhVXA6SP2FiwtmnTsxsZMk1xSRAP2SpehF96twWF7Hppmrot1PHLk5Qjs",
  "key14": "2NS7yvZdwAyKK9ZH9riCL8QntpRQea7dfyh6ftncv3ifQXCPnnCpedLzYHSD57AxwyapUHtr7TTmzMugb9ViUkcr",
  "key15": "5ddgpbe4GnxfUHiPjCPCx8xyFs48Z13ntgXwnhQzHtXqVAYoZQxT5Pf5vSRfXycu75cXYZiZS68D7k5cdwfFYYn2",
  "key16": "4FY7S4cGTpagnBmpgfR9dUadRJALvhKbrNrxhNvSEVtXBiTGykyS3Ga8WqGyALPBeKJVuMqZLvMpe7PwQtYM6aVr",
  "key17": "59C6kRSf76oa3RvmAQWy7TDfcipNm6YwvVaVRFaVUcfXPuzx3e9MsSay1zVTNKdgikLLqKqKSC9cP5LtrGvHbjtB",
  "key18": "94n6xdcXzncHQWoAMRUxwkaKRwjx2VuSdYGX4SMTDLwmM8qmonvLydqufp43sbZ4FFn39GbYKeLUKsADwkWUrjp",
  "key19": "2n42Ue2CiLLhBQkErWTzpPNq4yeNL5FEhwP1fB8RZWpqkqjUPVS1wRM6xWdfyeVthYn4dY4m7pcPAWVssT1jRjwV",
  "key20": "3bAPmGy1UiZcqwrtN3nBKgTYMpnrPztLFmhTvwvVDgRMVWL4NiWTJhkQ9YkMpdM92NqdFnRCyGtR7JfcFEt6imRc",
  "key21": "4FPMCzuKguW1dHjV62wDVgGCYqf4VzJbMQ4CzY6jGWGuRhcVz3BxhWPe63bBhQmBC5oSqGWoFRTpvHvw8Mhnx5Hv",
  "key22": "5VVwAS4KuXhpBoBQxfzSvp27CGd6NyxxPceUoHU7EFC9ytTZmJGP9eD2k7Ey4jynZ1mLP5fBjsvthJnAAn3VuhMu",
  "key23": "YnVcQpbMVLz3cD9WfdeEdNBb1z1Uvhm5LgVqKX1s4wf3knmFzSxB8fSo7VWPHM93WHQhjRpHdVCHyH9yhXnLkYT",
  "key24": "GmfBeLacnk3if7Wy7VhBU4fmwpmiHyC3CrpwKz56y6XLHnSA9f8hrrWyrTde2onTUm9ZMfFmp5Q2PtMXsZMLDk5",
  "key25": "59C2TA1eLxEVSJphnK2ezTqosALzf9seuYMXeropUfPHENwKMjZTZBtcAcb1vcjR9neL2MXvj7uNoqLXJ7vBjiDq",
  "key26": "2W5BkbfB6k3izHJ1hq9JLVQY1kRvp1sqXLgumCJiWKUgVrcSknvVTtNgKxKFXEMxywCWAQ4tfqVDtX5UcqkoApVg",
  "key27": "3UZ9kXpvkbgtQKNWuzeq6bTU2WMUzjhtuWFYknkjbEBRqgAGpDWA35pgbp3LBzXNnsAnUja76QYrGXfViD8H7k7J",
  "key28": "31maxEReZMv6SDAbua2UkYf4FjPtanbfKVoXyMqSSXzpC6UDaz95L4pSwerP7dmkJ7XThEmxFZydmPEKy3A8DuVR",
  "key29": "65YDMEoUYW5DPj8ZvXGj1NmM8KvE8tmMwiZwDxxf9iBiod7WFw3e2WXpuZbtL3MQCxW4KfUc7yvFsCu47Vwnt7yX",
  "key30": "5FMVupVNdPJXEJHvLzBKk7NU4LDXibxUvd7oD6jG3W1pbvJphyV6UWWYCjB5AmXjWzxgDr9cCfYr3RD4sW691r4t",
  "key31": "59NWUjezjivENtjth7mKEm4Gp6nyna3E5Ln5JWf2ZUL2iLEndkFT2xKSYKEcNYMWCR9rLKFjCWmc5LUhNXgeQ1gz",
  "key32": "4pLRUkTnevz23s6dk9zMkfFpGegqPuctoBycpD9Ys3jVBNdSPVZEfnCisfGwpegwo7DPXMeBYSRAazq8AvaxnvxL",
  "key33": "2cnBFPQo5hqiBNnUjeoHpHsW8wq85AuLbAPCUHWKTZVNgvWgrvYEnpCE2pk5fiFbFCJLbwMRUtV7uP7L353YRRyR",
  "key34": "3HMrbmzuGMoEJq9w7wbn1pbXxPCbWtjC7ShyuxvJtcoyeemrFZRBeTvP6UyKLyNohhYm68vEvwWMBz4o8YmLft6U",
  "key35": "3ZAMtpUEk35bKJ41YPhiaNTTPqSy5DzywECSZfL14t1uWkHvV6jdqmeXEnUZThXUrfSwoj1vj4jSebZicNxRnqoj",
  "key36": "3TSBaJ1tP8zFp2HypxSH4y3YM5ft6YteHfo4vEq1xVmRfoKd6wsPnQTuELs7mA526AY9zYYkzkp6fak2iQbbJif6",
  "key37": "Vu879XWfammNDLKw7ZRMKcAyzWzAs5ZUXuFVpsyk8NEaVpBE7NMUy1zHDzDGwG54ghYaH4XitpETiWLhmuP4Y3h",
  "key38": "3B9bCxSpM9Vr6C3VRHYz5ayvd1PUNYSooFPoaW12wMWsK8mLEVWSBjBSELDC46PgY4B3EdnLuZukeqA5PDgy2qUB"
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
