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
    "4mh3HG4xU1qbLeZqhqfuvyKCz9Njf69v4ngfDBa29kByUcfNtxi7zxCpvJnGLaCJxqpg1EYzSD7VAm6GDFnqMivE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "266c99nbCbB4egGYqmTpEmeJDRX3p6qfNDdQHPvHRfNzfDXreiE7MDu46g9VbHEWgMjTZKfMgA26PUxUaSVymfXq",
  "key1": "5v4xEdX5svpeYFDoKF9zuAq9eCrVyTHAQjoci1Xp7rUJ595jwvocanREFaTD6MTYnBLiDSP5MZYETZgibFsjXzdb",
  "key2": "rdoVS7nitozmPWKy5VTSv1eUGUnVBVouGv7Am4Nn6bP7jzFgqrs1cbszhu1XLoMbqMw8jbvboYe7khGnDJf1mC7",
  "key3": "22HcbpW13bVYtDG74NrtJ3K9xQUb1YGsbd9uS1JDST9Z8r1SqxzFYMApAK27J3YdheDyZ3ceZGLAv7rUzs64tK22",
  "key4": "c2iSzpp63ssPjRf1ber2AiDK1nWDsP3a4Rh6DPwt9tEvTsDtJQa8G7wrEYZnhQu5U9jdoZGHCF6ZMgJUVSe6jKQ",
  "key5": "mwBj3eapwAVG8mcaeU2YeVmMLYfDjBaDrr8Tvv6jscUor6bmAMUUif8CqrEwQBKj8qV4vLvMbcGWpevTGRMk5YH",
  "key6": "5HuCoT7e3Tb3FRcUaodtN9mMSR8Sjng9CVPCjcnyJK9aRHLK6QuJvchWh53PKU93NwFAyXdYFiAhqHDMRJGmepZ8",
  "key7": "FnSEdipo44rqR9PdLhJLUQVAnKPCNGZiwSp2cD5VWGPKPn1RvxqkYzqYKPtxfCnJRCrK5nUxwrGPrmY3C8kZJ4J",
  "key8": "XaebqddC6G13SdAvxfjQgr1h9EqvY6X7kXEYgXHyxR6JzAryMdP4Vy3UDAuw6uMvML1Va7foDuiGGwYggGh4u3n",
  "key9": "3B8o2NLFuvgKkd1KBqASFsjZE2PXJytBh2n9B15AgWNxtDcFGmc4q2nu2jd1g5Jrk9DPBJ92wQkd7jXxJXDVEtvb",
  "key10": "4ZKysWXHv56aryG6vzH3qvnpR4BTuVaTpRETJAnjfW85mHjgGjyPCejFxvmbXsrwztQajAA5J97FnyEVnTSGscX9",
  "key11": "3GnYwgSbvhNJ4xsJeLAeEW7E3zZMori96BuEDX1SyTkGoCG9VS3Fx7oYjZgjHmTtdkDz8XtGnAojm1Si3Y97DCak",
  "key12": "3qUfeH7hFbUBivvmmGQxPYB5pW17RWzWKDnmyVQfiBksw3D7TvTKCLkJmf7FVGvurnP5iWCE3ZyFdnbinCC61RiZ",
  "key13": "4HAKAkcfPPRtY6sjfq9N6ba4xZQPxetYyVVaDYajyFKmvpYetqoqBC2kpjUnv1o5HKDwP5jdtG9qcQYSz6NHJhC5",
  "key14": "2mLNW3QcAxKCEdLDNi5PpNoBeCTPTKX3BHLzTCxz4APa6rUpB8JoqbUBRJrmeTaWvP4H6gZGoYFzHfLNPNLFz7vr",
  "key15": "5F6EakLfnNRCrUwR5b2GH3aJZ7Sn5BStCa1kbfSheS6Kma2vLCfKj9xjhHNoJFQiR8aAzexndUM4QUZEG5waCJBX",
  "key16": "4aVBTN1nLni4TmcWFMvpn3TNfqWQ4UJaz2PVkUSsuXt2XmpZMAN6SCKPaHy9xoRnAn3FiJZz9Sh2wzd1iuYxpgnD",
  "key17": "7JK8j52MmKm8337VSZdu7UK9r5BBTdaVW5BmxxdDxT8oJq23s4GZ8Y9eeH5UwZjtnGnerDpW3L3EXqiSaRF6vU2",
  "key18": "2ZaTfczmbBUNuGFGisD17gTVrDdwWquDdn2yuGHTrtQHczzAxMKjWhSSC2eCwE5wHoVhbiPi2D4VummVPmFRdCHK",
  "key19": "61rXHzj1PaukQfbCk6soc3K4RL2BHNYkk5PaBb88xkPLFh988uoFSn9ks1JHP3sSBBZ1TPdNojLwuEuLz1Yo4Xhx",
  "key20": "MCEE3cZRQUDkj4BW6aZx4mHUzifLtJSYBgcbL1hNqKJf6MztxBBzixAKieG6FyMBHRk9UK5kW8Rx4UeCE7XEA9u",
  "key21": "3ahMu3jfjUFoRJ5Az2mxKTzEorwKmy6qeZVhoL1L6mYuWaimAP9NNSX75pbugzTErUQ52MxM56jyzHv7ATQ64NWW",
  "key22": "hxQStPti1kda9CwJgiv8r2pBLpzBmterNurnZE1oBoSoXjGTjFHNBQ14kb7xUeSgMrMSxs9t2eXHWNGdpcU7Uzv",
  "key23": "3EpDauDgRwbi4aJXNazJFGQFy9ywjrYTUGyzJ8c4eqiqm1WuVP1dxwQGTZdenL3YaGd6KyuQF2sEyEdPp97gVTaH",
  "key24": "3Ydjkk5r8zRzANHgQifDAZcgk8VNBGCpMZRBbqpCLPy6i7v6rAnaxYKzbf4dEJ2npaRkV4hFiY852HSa42x9Q8xr",
  "key25": "5i2WwB38co9EeseWGKpPSzGEQ3tp9ZdeGmKWkT9XKhGgeG4aEFLiaZgBpoUkDKX9Xiex1iWLBE7NzKLSJnLMVSwg",
  "key26": "3tRwuT16tuwr21KSAGE6hKV4arz5PtdaZu2kjJ8YYCL2AUkL5zK2E12SQDuycPaHuuzdhmtHQYUKBDNozEc8Roo4",
  "key27": "4bHRAC7phUVzVEuaqrk6GyUYCYbDPMMGnnrmKHu2k6Dm8UCKsEjjmLZVAzBYZw1G3JyaEHGF9ogcXtLZx4iEiip2",
  "key28": "5eCC6GL92ZQmzTeByaNFa94Bg5B9bdvcvs6AQCJcdJCxvXL8bnPe8zYuuPnkJrbPqz3cx1TF4YspDecqrExqikvu",
  "key29": "5phaegULRx4ckqhBzLH27DjxBFjn75udJYCVe8D8TFBH5JdVFg9A9BwdZWL3zPcTSnqWCnRHfTPrKUM6STzBcE1g",
  "key30": "5ZqP7XZU5HRD2d8UBGpjgNi3f9tYutrdioArkaouUYSvqtKRudwuyez5tbZopX8DuUxAPaNB8y4Y8ipiCWgratWh",
  "key31": "4VhnBcNLA4mJfzaLt7Dgj4zeaHV84Cw2z8iFxaghVhw8QVRTxKyMLLRHfayyvt3Q4GyDiNqpNGU6K6hwiACEzwNN",
  "key32": "F5UVZrWf5LNFvPTsmPEgN8En9BLyvJ4XjmGbpLnaVNsMKs9LpvDDiugc5xgPmzEwq7Vs3i4sqErAEiQptjW14WN",
  "key33": "4mjC1p8DdTsVYG65pwjteyTchZ9p3c5Jsr2EuCffKaP6Ru24m1DUN549A7fgRpE4z6RouPMkmjjFvsJBiMs3c9Gm",
  "key34": "5bNwFssecc5xBcNyfUaoDzeXzbLFgUoHf58kN7BBX7rAN79cm9mPC9tawNT4LYQePYu91qFqRW8u6vFyZFVXcPzz",
  "key35": "2xH9nKywHMdGvDbcAhsC61umxh1nVmqhj8QbNrpieYWGvdFsnJNjgBViuu6UbiUtUTmWaJjVSW3PoyFbgt1AaGwu",
  "key36": "5VfqfMbpK3uKMy7Cew2sRGf6gPAVWpViVLjWB8DsKiofSKF6csYCJ2EEYgKrsx28iziLnYzfhB1UrTtHjsSE8rVT",
  "key37": "5zmgSH1va2HADJhyAS872GvYHhPeouyzMTtbcpdR3rZGWgXB3tTAX8y9RdiHyZSRYg1Dn5BrgDvNNkRDP2sAdvfQ",
  "key38": "jPdKKsnpqzeatCtfkgVXttsaErkknVBEYHqdE49HjLo4G7FXsENjHrkEqpJPJHRc1N6CeE3VyT6CGZiLJPGSqc4",
  "key39": "P5s9LRSyatVjKVeXipkMsNPGBSXDWTG41KcSbhd7UuekCWCM4X2kA1sCZBJbBXwBdcnPN4U14mHCPCN9daQ7JAm",
  "key40": "2MXsPVexmsrVREeFuMFGHd6XW39DDqTAkVY5W8F8uhGhfX7KYPguojov9SSCcYeJvaZX8EMQ9Y6Hg8b5i1vCm159",
  "key41": "5zejTumaEFpB3mqXrdQsHTVP88sLdJ3kSd1XmXx4LiUvTyjwTXghACJBYZ59PE2re9qkSGM2DLdzDLYW8vejDE1p",
  "key42": "gyHUMyPdgfUHkyY4EPtpjt4u35XnbKLMF367W7v648heYzotWKMJ1ay4zgESuUs72dYYwRdJdCQT4dyoDzjYPE6",
  "key43": "2FLmnr5cfiQLoq4DFUF286n2ZN1qd4TEAfaP5PnKYNS2aKXrzDsKqoi6PpJRGSBi6dJ5A1CqFm2uW6A9wSnmimup",
  "key44": "4jYw2vLKHS2urxjSnEu3azQ7gjeBaJbYszs4LDAx6n6gk9wFj3Z3qVZBgGWYm4A8akpVqgfCYW1aHo35LUYLGBYW",
  "key45": "2affJ9DjYF1z9nBiuKkz9Zn15ArbeWqsMD8Z9Bw8GkxrrEad8t5nuNwtR2voUjxfJYcPkzBQ25ugd6WSjbiABuqL"
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
