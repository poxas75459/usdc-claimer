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
    "2m9tabgVGVeFPcBdSc3a8K5ii3bnqdd5u6kcWbUKeqdfbjg8behKurZggZuRQYy1UqqT4rYre3octSsm9wxBcrnQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64nZ6ZUXXKWyyz2AvbmnX9voRuH4rdRicWhWy3FmmhvUncmPKJ9NQ8ZWKB7dhkikmmbhSomWG7PpokSt7UYYEzxE",
  "key1": "4nsSgLMK4yDDzBTiyNkqL8XPkbrXmq3pr7DKSwNQ4bDuYg1weX2vkqZEXeHuPbwALH53iFTbkYacejzKzWcS9tJP",
  "key2": "AGsdTrCfyhC6Fm4G6MC6CXWLsYdoheLdtgGww92uai4c3YrBEFztAAg1hmfaX5syt35bipxP6mLQfuBRbNnLYdh",
  "key3": "38drb6BnN1TrspVHs1ETtrbxUVpzZz36piPauPHWcSE3ggJ92g7k8T3p5aaouLnADxPWxSJrBkrMJwH1hZVg3qwX",
  "key4": "4zEVpxENsWG3nzRs4Vzf5Wfky4xU7mWx9BDbop2ohbZkCBnN7gMNqeqoya5vbTfdXJhWTfjyYz85b7NKX7yjgfAa",
  "key5": "2u7E3Gp4pe8ExQNjDMPtgPmMq4nh1WZrg1CP3SJQ38f4PMGURHAd8eDve9MSJpfYrENu8SR8PuLAq86rtxbMrqqt",
  "key6": "trb1DVdqbzdGEEgeNkkqH3sWt8wfeqBKySXSZ6wsoX7pPeGj5y3cyvpkLRuRMLhFj9rrVYiYduM2zzKicRBUd1b",
  "key7": "5pnUoEqgh5LdYFHbm64mgCdUzWst8Q8rE17Nao7c31iZwsgqECHkFTLJM4RBmv2oWkqd1aXNCNHEa75kWh6QRtgH",
  "key8": "3VX9gqz2Xsozpwt3rhWmVwedbcg4y2zxoNv2aJ7DUFLjzTo9rZsybGnhuUcvxC7XHCbrn3Ep61qSCuSDUPTWA9zW",
  "key9": "4ZrdLHirjZ8itHmxL6LoYar8PjB8wrp2FwPZZYRmkojRTAzWQK1ewGVwaoNHqZgxdRsQmPh4LCYNpAL87zYZLrXz",
  "key10": "2Deq4qgNUA85qR4NbyzuTg27hDQAdLV5F4EBGebV7BTsEAZmT5P4QmKuX7sSuwhVAzD4LpVht7aDfDnpx1Hb5mym",
  "key11": "3Ej8jxFVLxgaq2jXwmLQzuuCbU9KDUiHdHhUwxtHHbzBijg3RNY5bp2BzkNM32osNeUSK7nKrKoW5Xv4VdLLoDLr",
  "key12": "5G2L4HgRjjUUevihqUZHb3zNYPPRtZJ6UrtoQZwisocuFMuFtWStqjYjakeQ2vgJi2kMh5sH7LLCeXWrMKJLrSfX",
  "key13": "66RYesGcuZSLMNu7ezHTJcwQzUH1zo58bMUPJ99bAsq34pci9tajrTmf6rHg8AWT3H4cXJNxYpUWmfbLECjX88av",
  "key14": "3D1dwkMRk75PDvnGBc3eRc259gFFkS4HnDzpfXqAsrM4inCTQeomUNvgfX4zir7sURnJT7AsyG81bz62GJ6ezqUE",
  "key15": "3LnXCknzKPa9eZC2yWvUPsDCV2kzqAuFs5UpAyWgr8sgSt6mZsJJCphgpvoDXwMbUDE5yhejEZ7bnr68zHLSvoAA",
  "key16": "2tsxyxMNVEwjUdZMAkaxZmoZVQBEp7tAnw2im9nJBnMkUv4mg2ySJ29Earuf68eER93cW7Abno2zs7xfwqVatX64",
  "key17": "2Srg19oHqjrqPcFegb47gxqnkpGD4EfTP5tyG7fjn6mgguRKjVFRzgPvVpRzJSbj3qbCkRE8joZtFidaLEFwLXuc",
  "key18": "2DmfP8h5vLWM3QpEWDGqYnGhpdu5CgWqGLnk5weycrz4ryj7xrQJMzs38Xa3yEvcjzQikkzLFyvqEkgqzGamhKmP",
  "key19": "MBHMRpdpxVY1L9EtTHq47fHRim4LMhGM3CtotNQktPqtgqB5vSXpDVzizowCfNuv3YJJpVS63hjyQ2EG2ak5G4y",
  "key20": "2JVSeWNwW7UfC86wx7buwQd9rGCM64FgmDn1ML8RZM44AdUJdpoT5ZG1RDZf7eK53PSUG43opTRRyxeD9xjBUHTa",
  "key21": "65Jm1sTe2gRYWKcKNXXUgwWt8VQ5FUnotFSVxM6kY2guzuzCfUgBkxdskNzDiqWEc1w6ZYr9sFudrjGNSkBPUvw6",
  "key22": "2wFAkaYyiu4EdDXHy56WNDQABqGSrwroHbHBqoX8ufvwnAUMVxpsSdJH4uDRQjhUfnBsM6Sxb1Gc4m91qZm4YRcs",
  "key23": "2MCsKUee75hYnAc8AhXmWS687GK9p81v3JUY9norh9GqmNeSSf73MMxawa25V87PhiRhdVRK3KNhJEhndezRV9EG",
  "key24": "2nYobZ75EabdMAq2QpPAQ9SFo7eLNAinRPS42AiYPXaCyfZ31W63zxaDmQLZUreK8WBKqBoVfeCWmNXvrryTDkH4",
  "key25": "3i9k8RzJU3DZqK8GL5L38VecbanxzJ63uALU8Smx8fNLpkH8RgcPhneYXaHsuTRm2HUQyNsBgsWodEFfcQJM4kq5",
  "key26": "3T2xr9Az92RezbZuuCUgUYY7VXtZseFR7Ke53aNQcvsUNMXDfVcWur1712gqmbb9zGCEf1cMJKWE5Zy7W6mNbodQ",
  "key27": "2WZyzyPgsycFC8efLrcjeXPNL3pYCy1fLHZZyoBWkn9xSwNzUoVzfuKYP5SsH6wffJQthDibBLQy6fo1hMYojXfY",
  "key28": "4pvchHqdRQAqEL889CicDgZswTmzRvxZTaz9UZNaf2LHGF8jCFNpJvwoyrA8qAb1Tb4eYtdrYqSjYcLf5Gfv8xiq",
  "key29": "4RDYo1YZX2u7rWULVkVrH9yfMrWL6Hd2ryiDz27yH4q4XsjiXJgMWXv2x2iwLniLE6aKztGhdf23RMFvaMwu8J35",
  "key30": "2LBV8DoraE6jEJjxwmogtFYtgu7uZJe935zyBsJSzPJ2yLGmwPHDTtsU18xjDdXvfi3sg9KpANsEBLWPiHutE713",
  "key31": "4AoDV5iB2QxbT65LspneqCyunCqxkz2Kgukt9bxDK6QQHQWDEeQbGMEFH7S47SkdqHvA2W4fwZJHCKi677WQV2YC",
  "key32": "3v3bVfuGAEZQyrudvwtcjfK691Bh3AzWj4ESaUBVDgT7otqd9nJND5vS9hjhSkRLjrgc11gQCZLayDTkWPMWpK4u",
  "key33": "4hx2ddJJPDAVMo9hARrYKNAirUcH2mv7wffGabP79we6YVy66nJPkQvXcGxyGwZnPnzvSN1xa8n6681EhgbDhonk",
  "key34": "3CscpFuHR6NxbR6on4hnnN25knjSC3EFcEDH7dp7M2c54tH6RAbdMxqS13BXfzTMhERXHL7A5LtgEeUpuwLLd8pe",
  "key35": "2P9G3tDzaVY8RRnYgMwrN43GpvFLht2v9mUEA7HgdREmeLGcEZFCGy631g6Rtj3Z5mMagui2nUna5gvDxNoA7xis",
  "key36": "5rDX23mLoVbMcqxoZcXfqFUidoagKTkHa9q1WezGDgJ1nASUgXEwqWyCcPvNsZj8wQXZQa8ZowncgM8EMz29KsAd",
  "key37": "3jpe5NWTB2S5LPr28Y8wzdUw1uroofgXJkAeCXBuiwPxnR5SJ6KiV6oGo5kQzbJKQjoMr8gbR7MtKDvTgv7Pe5BA",
  "key38": "388uXdEvzHZJWr5AcuvaHpy2CLUshyKbqGo3R25fwDbrSSW4kq3uB2pPyX1Y1s4mqbYeW3LSkiC8fw8Gw1hsezgV",
  "key39": "464UiZjVwWRy5TwBkHdrAWzW627AAPcJCojZmeBJdmJBTeA7hLLES8HJdSSbzvP7QtLjGaba6kfkceungYDihXM",
  "key40": "3e7Nt4wKscU9mtswHjfJhyH1ZEozRc6dfXjuHMxaPnnQ9SxQf6oovh32EF2qcdm7LuvtuPkwce8kRLPwYBqKgzrV",
  "key41": "fBRKezsJVkPovwUh6oa5E6jKzrQxZLehVT5Cnf5aj4WA4sVe6YRizHucdaiKiuWhq3NRyjjTppAqV4Ri5UWWmfE",
  "key42": "29R4XN49kR9MKyc3BVut8Ma7xz666wQHfhRUiNKXnopWSD5NK4KBuT9V4wYP9TJHAbQsHCv69t4HZfwWaUkBRJjd",
  "key43": "3qD4BtxzPyUq7J8fNyssXfjb7r9iRo9WLpZZ1mRcQfrHM1yBY8u1CxRgNM48zKDVc3M6nRch4x4jrZptMkoLPZct",
  "key44": "3q2HFDDbvtnFuia6wrN1THKibTA4HfmWyYpaA6dR6VRJTKXhtWomHYoRMu4y3f44oqM4dhxSv8gV5tYtgDaZvczS"
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
