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
    "5cr1hgC84fV97Da1ssMj6gU6CEZzUanZrXCfVWtbnNfksY82zrAyCQ4hoQYayHkdeHbj4ph7Y2wt3bShMcAN5KTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DtwYPcCAerfQc53mhGx6umWzpPPaqmHHwhPqzs6266UFCDmAPT8jG8kut6rfExxMymYvvreexou9gbiTBWY4ERk",
  "key1": "467nFnTqdqYz4m3CAhVUWJiDuLm62hRZAdtKaSsz71dk4u8bZc5xHZRivQFpBjsrXdsVR5LPuCV4fTXo6AYP12vY",
  "key2": "2j2ZdavQ92SVmLGoQqa3FphZmnyQnjx7EvdnvrDe7egWiuYEEM9uUvJrXWHGybMmLcKgG3W81skoroRyjVmVZSqC",
  "key3": "2QLcVeQ3w5Loix8wFaKSL4Phg6rZLd9h2fknCngLdg7ZGYmDZ6H9eitcXMCrAyBwumDuoWVuwhUfFDCamUgM2aQN",
  "key4": "5hivWnTBzpCxhkJBr1ed8uaTNKbtnNzxoWNs7guZtd5eXdLBSYMtJVHin25JhtYBy3zdB1egEkANiNxYDLBGAVTD",
  "key5": "ucupDWjRnFSNAorfQAsmwQrWBYPtxBjGrkqKcjfRAGXycNb3P5aVT7xVVCLL729KpdTycE7NxyfU1QdbBurvuwQ",
  "key6": "4QYmRWePjJog3pj8cydDvWreegTyrrvp3dJsMuYEAatoGsd11YHi2EanAXfy3ZPZn2sxKSMUNj9d7evHhcS5BLpx",
  "key7": "2CuK5rAaimUewj2jjHTnUJhUGF9vahaikqQd8PPiAGCwzsyvEYtbnggzf7tAWjv96oDCBDLpLmoCd9BUsnRL2sgp",
  "key8": "2jJotDheKYb43aV5r5mF925kn6iVPXMCAHVYF8swwJngW2AvZzsxvhWk3QfjMztCZ4dKqEeMf3aZhNAAyCSy3zKK",
  "key9": "2aaTrMFtUvpPX7nV3SPFgYm69vUUTPB14TZMJFETnqxfFfpQeqWs3NXtwaU2YV4T9SXtr9Tq9GgJVCaHgC2CnjRA",
  "key10": "4sPtYRNMhr8CX5mzLpMSVjU95wBivx6QasJrh9dtb7V7Doh58aRcYhKgsrrduSdd5ZfUHbmDcAaBdpkYf8XyiWe3",
  "key11": "2bqMJ3Bb6iQ79tW6QCjwAYRNqwdAZFBtzt1nKsDKfZWabK3ZFYqFbVjvk1iAGCx8tMZAVJ8QP7yvQf7fMz4yNNei",
  "key12": "5mxj2CeWj8xcdpXVyGoBd9wGaJb2m7GYUF2tcSHVNk8sbxAG5FBs9iANSknuNLCoAmVSq36vAKmcQ2UCXZszLzeu",
  "key13": "P6VCi3HeFB3qEZJvp7SShdog6LFENLWejLpTfBDUJVXhjNn5ULQyUFauxWPWf6HudedpBwQo41d7NVw42msQ49E",
  "key14": "eoJySK5i8ai1PpLNnd9KAZZhGVveyXAJdn8UDQCiRtxH852Ae1JB4DHCvNcJvzuLjopBGBRB7HbYTfpxMeCtPE7",
  "key15": "2azvCS8362MGeh1kXrqT5v2oK4sURXzpAAc4M9g69N8oaKZmnhsAvDzj3KUD4PfpoiKpaVyBFD24hXPqGiDf3JH5",
  "key16": "4thvJktutQyKZnKMiCgiPBjhRD8RVDuuNWDLfi2TksuXtwQsA3Xi4NNc2tRygqdbCyeQh9BhWEvYEMaArC5YNzm4",
  "key17": "fwFRugYVrQAkZWuP89m8cgxfJ5bH5EHg4orW1N2wBnV2XBE6NXjU3DLf8tiyFSzVf7HJCc16vXtTt8UeEe3QMYU",
  "key18": "4B2SWYqjRy8BkqUAYTq2VpTgKax9DLr2791WwXs1JabQ2zxDcpRfHq4BmJ2yrwDb9xeFgsmZqzJedAwKNyN27tXM",
  "key19": "4ERHg6kanvvRtcLfv7b7wZd52n9TnE6A3Re1HQ4xyaA4HuWWKpPbRUx5woB7buWAUZU9kj2XskfQXtGFfhsoWgwP",
  "key20": "3DvdNFv7erFLTie6cMz5fAAhtExhDUhXNuVxA9pfkoeL28GryZXTg9zrAbdK5Co2wyLwGj4rFD3zxsJ4mH3zj3a5",
  "key21": "62fxEXpoa7Wt7q3kKgfbVL1BWdaJNnBugH27iWwnsrXUkEzTuieJ3BVoWNbLAtaootSVqGqZGKtqpeZEMJTAERim",
  "key22": "3aqSb42spN5RAgVs1J9fQnzZEax2vN4zyjrPyGFh5DsUJ2zSoh743uqtFJfC1JmdGK7iMrXtK33rqS4s5bbvGSwR",
  "key23": "4Tp5sMtEG1CdDSaQui8owqghebFjnRaHEU6Nabtt6PrpC5dRqyDFxVRUhxxSzZtahemXSfayB5hPLqFntzeuFLHT",
  "key24": "Hfandeuaj6EEGU8nH3bnSGYZCgqNQcTaVWVQzbGVhnB4G9Hq6ycqAfdimm9rvhGYhqo1kCCy25veh9LdYEzcLAS",
  "key25": "32BQsnNb7LgzmksEMmLgt2mg1W3awBrhzoCmn2RpkXbSm6AD6Zcfwq9tdM648CM7zBYaykhJ49pLSt8EA5LqdpUz",
  "key26": "677gummX6BDZH4jcKruQceQuHGuEsf2DNtKMY8T8i9Ns45ozDPHb9K39eR3UEXzk27U98gK2j2qQKA7GbdPBrQ2i",
  "key27": "2bzy6TF2Bk8D4yUqaFKTrdKFXn6MhzJRUcExLY4XYBFo841QtahTrfQSA5YXkKrUhKktUrsjs8zyyFGPqhTyUTp1",
  "key28": "2DLEozZiHw1ZVFWu4RRM14Ji2d4XogXRyNDEypNjSY5jDfAjtV9oaC73rZZmskyk7vFM2NkSc1CMhoF9PAe3oRDt",
  "key29": "5wyoPameqeHVWpGsZ4nxjCZUwfZdaMn3BsPpoXnh7J5EtqsnH5iZ92GrY89Yvx5EnWawaUSmwJBvZ5GPsvcesukp",
  "key30": "664scWddEyk7ZJM9TjtjYjbDFBh37XCFZW5Nn61tzv8tCpgSGh6mCkWm6byftPYS95MwBA9BHZpoNeMejwSnti3S",
  "key31": "5QUe5w84WgCvsGxzbvLycCNSy7dEdC5n6K6e5fTTeQN9T2JuTfmSU76FYYSQqXNenSC9omMjkuzVHWiH2PMmtenN",
  "key32": "4Wob5mxEgoxSL4c7pGThKhctQvaiipmY13beT2M8ECV1HP3JwVK21Bv8kyPUJocu1wyFsFeeWrB9ExMCQxCuFJN1",
  "key33": "4e6W6yGLqUAdYj5bGXuYuckkGMvtNYibmGz8YddcTKMFpGxndQG6SNMHYFHRzPCYEV83so3e7Tf3dzWYFBobHDSr",
  "key34": "5iXzvPHcZq8dsX82Psa927Ev2UngDQteSVH8oQqjuK8Euojk3rMdaspjsqC7HoSqruzML5sdTnr7vVuA3sNg7dbU",
  "key35": "7YtSHNHvM7F9mF1N9bCGaw3p2ASAttPqQvNGRREav8GPZKu1myNyouxbYsXEWN5qWQT1GpxAaVdPFBf2EuN3xEn",
  "key36": "2kWgDEpYyUMa2iMmir1RCf2bD9PmyjhvdKwvgPjB1GoHBXoGcshRF7B6srJiqbxNV2Ca6HHWGg1vnVY9N7RJCHhH",
  "key37": "3XtYwDqZX1hi76Qivjah4RBHj7tB61D3u5LSPb5abfyx7wpWafMtsxE1tjHvkZhJPPbGHG8qnXqmBZFJes62sRnm",
  "key38": "67FbwHMV4HryF22UsRWT3UyFzYY5Ldc8CwtB9vxSyGDyDa1AqwKH2dYUdvX7UoxrUQjby3qUEyPm8yKW7EnAGVFg",
  "key39": "25Ss63BE2nK4idxr2thmBG2n9qkdk3nw9PGWvXFwgQpfrLqE7YaFwezT7Tz9gc2Jux1375zdSaa8Hbid7FbfpYJE",
  "key40": "2qh7CwzQBfuTzKUudx6J92feteXVwuhXzMfXmF4hym5WyvcoS553szs7odxCix5qfiJ4ZxFh6kjQVY45Ub4sx3n2"
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
