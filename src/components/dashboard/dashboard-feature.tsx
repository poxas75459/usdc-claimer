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
    "4v1TYKSXVfmMPZoHo5rginmDboi2jqgRos97K4VDskCT8dkNWfwdq3dLff1daEgPHkYAgbi22arZHBi6WuRpqfxU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37MZChstf1KJ9E6jo26icxTqfA8W3jaLvqfzxgrc6SgtVHK56hcBUPbUrPgMDkEgzREPuuZQY8FcZAgvnZpCbn18",
  "key1": "5EGwTEr9JRP7ZUH9jnpXGPMTye7Uh6TSVuaTkqomxzJ1sQ8Vo5sZV1PrqpvmVWJzyzR7525iyBakAdgyjQbfr8rC",
  "key2": "5RxjB1usbEmdSCKV9Wcqz8a6rZn2Mor4qq2vnsYrkMVBdtvDX4VYzd2135F3NyYT92VFBYyRNmysTXekXo9U5miS",
  "key3": "rcsogqyP5VwutHfMTnoWCQKyHrswEpJgcm3RzyKPjsFizhvVhiCJMmRHL9sxKoR4Johv3YvQwGw4DaoPUXwf9Cz",
  "key4": "yHoTsELrUgsYPLMZm9eVKvjFXwY83EL6DwmSGYhs6wLJPf3E6mpbct5h2GUEfZb4UZcPKPPXaDLNboQadZtGT34",
  "key5": "2BqoZqxir1FJXYtQub3kzXqiApVzJwGmPTzkyUbzyqmctgHdqdYcjMEm77odqL7chHzZ28AC72cces6E44hGnnNt",
  "key6": "3McoS5S49Gg5S3a7rsckcRzxFWZ4tmMntTv84WagRwdheDg1TSWFo2PJBCuYVdaBMY9zHkkeGVuPwsoi9THqWZbG",
  "key7": "3ssYvpZfrShAkoQFVgTsnF9kWke5VJZKKogBLf2pduFDRuxVBUm3EXhmaX1kiSUZmmtdPQppxXrJjdy4Ukq2pMor",
  "key8": "53wqyJmCR2AcJSAn2rf9n2ox6CauPwGHBiDKLAZ4NF3CBHDTxiWz8zxh6czMkGnvUMKdF7hwwbg57oMwjF1deP6q",
  "key9": "2qig4cSybffHvCaMHKxZpEhsGoeGjegHidCqTwvkUdKzg82ti8XQf7hviDcqHc5wRWDQjPzdry6SXBBV1Mr5gAvJ",
  "key10": "58HiFqpQ8RyrQZkfmgEuoST73z9Yw3HqnU2pZN5Apeo1JNWwasTAnDmFEUFcMDnpNSTXNi4xMU8pYKrYWPDa8b9U",
  "key11": "5TCzpNTuHEbaAGm1WuHt2orwepH7BNvTTGmdCRyFKcuTmhBibwv1zD5NJEnDdKt3w936UBUxM735i7A6ZN1G4smY",
  "key12": "4swDP9ba4Ybr7Q3S1AP6n4tgrQU3YNDNybKzDVvYD7NtVbek7zde2ryr5Ukerwc8PVAnCwbX896tSAT6tUHjdERb",
  "key13": "nnh4xMzp8eCHtuFMM5MDK2Zs9YpvKoKWcHgANiAK7KzabN61JMR5i93Qk18QjGxXdjpsh3riAcHYPewQ4Gb27cb",
  "key14": "2UBKcZ6qXewDa7N7X6z9Fm4PRbGikZ9gn7hZfz3ftNLPLisFDqFCn7TDLpZCJvLodpeDuGJrW77QM2gApyRQL72y",
  "key15": "aKTPgdb5LYyBfMZHi9LpZJwy2oKCEdBkAtjM4bUKfUiR6svHbZ2ANxrRMZK7yPrB9ma69KRGZn1pojA9yB5noTY",
  "key16": "2HBUCeW5UfGang8sxJxZdSGpM8inRLsrY81q4JzyQWg3Qk8ewn3GzrmaVVXTshEz9z6p5MzVWNMR3oe4SgijogFL",
  "key17": "4JX5G32x1W8Jg5grfnZEopZqbLE8zqbH3tL7hGRm2wtkM2ZsGipyFDL8BDzsvQMSvgPNr6gUG26SB4rzuRiKFBRd",
  "key18": "28nJZeFceee9WrY6aev8LYHAVm9chqWCPZJmAqFiqfq3tAQeAVWNThZ9JZru31UBpSYfrodVh7iVSUyKkSi39K5T",
  "key19": "64QBrUdUARqHAs3v7QNMtErBjzKeiahMJjDUwo2uUjNDf8pTfzsUcL9GDNa2qWkSaUE6i2NxfHxgVtjjcRmYkRAZ",
  "key20": "2cUR6iGDeaATFjbwSYfzA637G6Rc1a6XKpTJfBhkQaR7FW8ZfBVfzh4r6LHppzQ2uqT2Vw9NERSTAJe7Xcd8Ct5M",
  "key21": "4qGGosDJsCMisWSEHGxw6gGtFpPmbdkmvgdPwNnSMLMcoJb5WNyFK3tap9kZQuR99w5ykxrq5TLSTg6DnF8cfQoN",
  "key22": "3N2mWMYgRcEe249s2D4L2qZSY75cgCv2Gx2wmtXgerXgKvrDTdvyBageZkisTnBE1ubohyiAdY6DbtCFFjessJsD",
  "key23": "4uGQNRGxSaK4HUgLgH29vNgqLsBcw6LqTGrSitcAWxGX6wXi5yxf8Yje8hn8oqcKpq1rS6b6ExfrmbJb561aAWQ9",
  "key24": "fJ6AwKJQtPrxQyLys1JWnkY15fsd5kuEkYM5PQj9UYgkXhUFqSRP7v6CgRXpTwzvtdDVH9WaRMsm5NFo6G3xQJq",
  "key25": "3nKFeVX1ZMGydSRrjBMVnDsVo6vN9HYDiMZfRV3WqKPd476cBZuYjJ5uLbQ8G9sH2EfiJXhBHbhWnQH5wm4TEgc8",
  "key26": "PNWwQyk5DT4RnFWazXUPc9npdkn1tn1yibtnxVG1LX9HKm9vuqFwnDEjNifrFakdp3NaaJYCvM747TbowkBJKcK",
  "key27": "4gqaqePY4VMvnuHQ16hudb75LBqsQG9diS9pQKtYDn79ReKb7mzqE9eZ7dExRbc2dnagpTBcPyJFKA6CajMNK6MP",
  "key28": "3XcspviaFDzFGzLEWvc1ceKc7hnm8Xfinb4S8EdPitCoRFL2PfHxpvTUnYQUfWSCtib5vCPNu856jeDQX5ykfV7D",
  "key29": "39GAGa3ybu9ZWVZEtfimT44PaBRDhRaQmr9D1giH7RWPU2JvNVJtoVHTPKGJAK9yjzEvyTpAgPJb1ANU9wu9nrz2",
  "key30": "KZB5FXSuxVtr8pr1oKq8SHEjAai4STqnKiCPXEiCkGHRWuJdChAmRknqLVktSroUSDwPCb8qu1U7BQoK6BiCNrh",
  "key31": "kwg8WyhvJ4BCtQTnvphPVet8Ecj6829wUbWZBKprARGwgAHq1KjdqRAZs6wCy4BHtKNQZmgotoRtpVsz8eQz9p1",
  "key32": "3WkhdxZeX8527Ps4sBixSnMkhHqQpk3RUcvVT69ut9xsdfibSw2Gqi4GSGSThLZ5nKKSvrrP1sogprJZMu2eYeuW",
  "key33": "5Eik3qh5rLmonZ8mep5o49fBiR1gnKtUKGiSy3yE3DnYCqWjsWwANzwsdpcwTBQdVEMHFTZDDFHMuBpqhU6CErLz",
  "key34": "2cWBNxjCYF8Qpp9qpEnarWRByy4zxenXn4hp2UGrN3oz5te1HENLFaDL82whJTmAipxmEzhQh3PEPxqXGgcPuS7s",
  "key35": "2b9moYZTSHPKhkRSL21kR1aC5W3u1AKwFrWFAsxK3i2sv19p4cYm3Rn11GHsRSb9ovkUoX6RaQvxdpq6yrvXmPv9",
  "key36": "4x5T69zSUP7vq89DjSKpNutpwCeQ3AQEjwqq3p7QcZasqNRSGj9T2BVRvDoHpqk7HcFzwnXRRx9AfQUL2o2ZU1MD"
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
