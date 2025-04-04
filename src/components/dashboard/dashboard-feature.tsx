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
    "5k9HDBJk8okVNamJoy1JHtBmvdctrhc291FjcGuXXQi2NY6SjpcryL8YdtDND2vg2PkedY6LSs9t6NWWQXMjmVYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VLSPn8w984PJ9LfKxKPj2jR568aGeMLfYV1EQKmT1fsuc5k4wpnuYPkv1czkQaLXVZ76YSJuVxGHbxoUXn2hivB",
  "key1": "3jsz52kSjqDQseLGrqNvHP9HhWcmEaNw3BYRa6UzDizy3pUYCi1vqMy5XyudktzbfqssN8pKjw9dDwgBAivj3WVk",
  "key2": "5Xe8m9Yd5754wkb4ZDb7VXWJUv4tRhMpEj7FQsQC5jsXA7soKj5gLZxk1grPSufkzE6KVnRHDjzcJHV8vqTYa2eV",
  "key3": "3LyrLTumYryi8Ug72kFnPeCkDByyhT6ApdHRk7W1CrLC1ZupqUPvqhpVUXYC8iKknHNUnaST1RxM7de9SvHRYGpL",
  "key4": "4sDuReKnEA6bdgrAoLMy41WnLa57nFUkYRHvsvTsnwrXbr3dWCXVR4nHYNGBf6Li5RitqHJ1PAR77Wc2hcsfP3ti",
  "key5": "44TVmqGaGfWThQoQG75JbLhgC6dqLXnVyL11Mzxf2VV29hP6nUdnqVVn5NnAbzuBVVwV6ja2Sbjgxwmf3ZGhFX6y",
  "key6": "2yCVD3ZL7CNHPyUXoKU8KxCBPFyyELjcLtPB4LJnP1KUFhFqrpPXETQFNcTJimtB1PFovu5wnvZK3hM86q5KuLhb",
  "key7": "2uqDRzipyBiuTVNPkSheiDMukLDJa7tcHWUmkeo4VasqMRiZjbh8HDtT216hHDh3CquwEinRLycsKcqwoJ6N1wUT",
  "key8": "2snjyovSXzDczViQ8zruMfNTAWp9A8USqdSCRCXCpwseuY6WVJdfrt9u93dyx3CvFCRCHRoMHMEX2tFCzhREFnrB",
  "key9": "5u4DkHtv9S3ykFqCuJ1HyYrnYD4L14BvNGCD6UpviasCEArohVLMhqTFGD17LZghnhCiUxKWVpNWCwKvSkxNoSri",
  "key10": "46QRFN15yD2V4yiiPc8AU1JYwopJeQNV7uPMYVnybKFgnXFnTeoR4CaziCvatGxs43EVCwjDSi2VFGtQmoNH5Knp",
  "key11": "67eNmVvCEUejX4QFpEMquGSce9PsvKdW7NBWp938S4GYEGjVd5SrGXiUSnEXMZSZoa88jDVHGLX2rahRAWp1h3pU",
  "key12": "YhwtvkeBenG4zoi7PPN8az7Z2jdjDW6gWMgRfeFLPnULHDBHD8XkspudFebEhZNpZxm9mfUVxLM2ZPxRVzypvH5",
  "key13": "pdqMHSjDNmcU14xP8gwtz1oLbg4Wgn5tfn6K4WEoFg1r4wf9vF7zF4eH1qxtgF4Rs9eMmQgMEZRwA2fC9nyY5eE",
  "key14": "4gLspNp5YJNvAi36LkMBN7ac1FYczC57QeEv5CEhDVBHTB3P7P2ghzcXv6Y82XxBPa27m7m5tqq2dtacrGMX3QJM",
  "key15": "5BpB8tSGxY7Rv7G4M5YqQgUcEH2TH1Vx8ob117VrSsivopFDi4XP9zCzFm7FUkqK1VN42gpKF2Rq7EhdAR6jzpw8",
  "key16": "3EZ3htMX3o71ZXTABPp4aWAqpZbyu3NftyRabd3e5PinCHmhCaPFGWUDkhcYvz7xe5kMLMg12RjNATWjbGaMAn9k",
  "key17": "4nJ8zdJPxh5tGbPM5Pu4GGhiMEqr6gHTVZteCtE6zF95LwPfrupJcn6paWjUrMCYZA3SsAxq2KRsRr2v7vZrzQ9B",
  "key18": "3V7nYaFmesQbaNu6T3zr7NaSFcUDmzJLQA4MTdT8HHUDA1xJpYStow4LeRQrvnTvuMU8kobCfSMMnnz4Jry1fbvh",
  "key19": "65VWwBwdSQ9BxwaX8ACtei6mqG2LURiC95EtnCDJBQqYvhEH3q8C4wa1fq3i4fttgC65zqKUjCUZYASiECM2Go5w",
  "key20": "DzpFWiub6DdHXe4EPJGj4i5qdU7gcoofMmdsnUV4fqNGNLrJMhfMAJGLA7sVUpxdKVzzv9Df85speVF5K5vF4ca",
  "key21": "AorVgYgRt8uRYfanEhCVf12LjKE4Hzs2srCeuLczXsUUA2jviJCVhCbvzrdnBgj2Ev99ZiCi62ET9fySFWNkNXp",
  "key22": "3jR5Rz3vpny2Kh8canHjjmT5dHLRkaQ2LEBynmofW4NGMCbYXJRYnuXT88uEsudTLCsFUb2o416pSdpdQHiMyxRi",
  "key23": "5gRtepknfgrRmPHUoD9YNfrZnD38DdNsXxBhb6GVaCBUFQNzPgDhFaQKzS2iYzon3rMbgoM8eWw7fygRfFxms72k",
  "key24": "jg5qs6Fbcwtx7fBy3q6CMUmgx3ZyC7Cr4rAN3gXCFfzPpLFDswzSapaUxUvSoHfdrs7m4HT5jooVM3B9JzLWWt3",
  "key25": "3DD8YK2AY8ti1cNzr3ydnw7r1HBok3fLTQi5Qqu9YPmpN8QJFAV3vNshG8veExyVD6CEBQU7K3rz1SMtutfcNUmk",
  "key26": "5guig9sxjQFp4R9w6VhMPsrzk6jZtUfusi3U7qSavS3mwoVztvZMYDxWppTphH8nkFp8Stq4TTFdXJZTrBxpYKoo",
  "key27": "57DjC3wnGDmhAMn3uT2AffpuBtF1693BAUd41ucASDfix63DjmtfHqm1tj6EB1z6ytxt6JCuEnacNKxTEQAG9JZE",
  "key28": "92raboucCXZUA1DJ3M4EaWSNnbUniBWRJHs56sjDUVte2wRYtYDhtZmaZrM1BUjJFjsFYLvTVVamtWZYkYxj5VG",
  "key29": "43YTwNPHowoSgbMVjUuffACaao55dfTgSfvf8PnMzZVt6FdSyNe7BaarEgm5WrDvj1UMheTkWZKhPeen3FBqFnkr",
  "key30": "xFtvz9L4as5VDbyJ1ysmsMnxWiTMvGKa7JmvW9b4AGRwvWu3P5tg6XXwvRv7g8pc4ZPqgjQERfjhz4YvaD7Qnq4",
  "key31": "3D12W2rh4jMuNufu1uxFYm2AB91J2PtXmEwgacdinbMduQZ2XMYtZSRehfadGiFvcVyS8euaT2t4TdJMr8xdpVpV",
  "key32": "4MegYMa3aQg1AETFtJBC7fnnyJi5zeMZG1pXzz6BDMyPmjs4Sq4VddvYFPFwwPMCkpGhRDDnC2UjK9PFRq3V6Qei",
  "key33": "2vss28kBTUg9S1KKDQKNPTy572xwT9mXGEtAR8SXWhMC8LC47vSCphRay69XPddpYnKuZR3h8irYDXRLjCHfw1q5",
  "key34": "4zWnXk6LqKL6cNy5FQWnh2TRBTNbCM9f4epEUYeK2qxrC1p9c4dZ4VEiPCDJftjDmDXMFShQ7VZS3PYzU2XbM9pN",
  "key35": "4aTZ5vLj2aHHFqA3gSrXVynrbs8uGYaLvfcdwvEWYueNzHAuwXL2e1C5wRUmHjzfS6dFNBrBTC71Bffcxk7yLdhT",
  "key36": "5ujByuM2j1YRkgSP3wtixu9vkNvsiqDhnRgi8VG5hR8hFA4JXWDKhS4fk5Gv7hHguEj6SzEx3EoCkwjWJbETKvmi",
  "key37": "5q9sgFTXtR4AuWbDmaNeJk3KSVpgwiaKniqVxVLFTgAxJ9CLDatb3rSNjWtA6F71qWr1r3AvcVkrbuuQKsTJCyna"
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
