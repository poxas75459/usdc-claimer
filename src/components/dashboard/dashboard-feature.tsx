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
    "5NKqKonQ2xsFdT9eUTeLQtZ3QZmXm2eADLB3Jd7T3DjjeP1P25M8ZPznYjRm2CibunXkocmNA6mwEZsYz4zNbo2S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QRDPTiGHE7XiWQJyGKgb5E9NmJZAD7VN8L1fFS3JiMSgxXNm6U15UcKNsMjUA7raUqyLbd6zjaCeZvnvaNCLxzk",
  "key1": "4J5gTh3yCMT4YPn74agMrNnPperKjMqNHLtG8FRa7fk7ARGUvAJ266RN5hkHNduDPe6DZLYDD3oXPbtdXBe8Kaqo",
  "key2": "5K5K2H1xHXNHsvw7TJZUDZUz6xyGVjJ2sdE4MkvUHMiZwAhFhCWYiT5gZzHqse2B88q4vMK5CpGGwYChAcWQ6p2N",
  "key3": "F26n86QSm1gzV42JX3Qb3dP6jeCEDbKu1RdFWggtHLEHx5LRGTAXKZsraoETQ7rPenQViBMFRj3dAD2PaPd7LQp",
  "key4": "2tYowassULvBCUSyAYxDeHJDpJJFahBGFR436BhKaDMHQGmfT1g8fm59KnPvRhCxCTHiaeFkBxiXSDySethCLEoE",
  "key5": "6nVjcZVKxpwNqNyqBRc7QdAjUMF4kgvWpCgnBMBc4VCqTrn2xdxqD4JGfSzPEAwGazsZhyMquYVNUtRHPBxAppE",
  "key6": "4BftyQz32ik5MmKCG2SkohS4gWUt4wyDtnnBD66s1k5qFeSMNPXZYCbEyHCHxpATciv7yCy1YcBogPfkB6keibeC",
  "key7": "4WAxJDkvhiKtiLBXNikunJZPfjYmE6ypncUztCGFJBoXNWVkcjWG841AJqphEQxGVVm2BWAwqX6EwUbdWAhtTGVS",
  "key8": "3suvcsNBYeXDpZaGwBtAwgDLdw4K8TCAMWMifMqJB5iPuYLQooFeJuuLmESWLV7nDHYGR8hKaLp3bw2jpvAjeFyJ",
  "key9": "2z1JTFT73Mzw85DbjLebLQiFQbrJ4hUB7zpW72RrLNM1g6SgwL3HkXgrHfzxY3P2UJBqkM8PujAn8R77f8PU7Uto",
  "key10": "3Xet6RyE9JXjkw3xJkk7G1Sr91sHGtZkQyGmhvcs1PR3auqBosYGpEcu47SBn6spcxenp72GB8QoSnvV6fw7E933",
  "key11": "2YN2qt4RjGMexN2M3uxXHefhwg7n6ySsajVUkGHsL6iW4YusMApbgpQkKp3yYckdrjeF2WthcjBHS1H6wi1F4mX1",
  "key12": "2piwrckJbZidjUYpiiYY3CGTrJbsHTdj7xxdSybzriYYsxKJ1EjE7cGp8GdavZJUVt9TT3rnvfSk8QbhGCYeQ8QG",
  "key13": "3Mz136X8tah99bAw1GXqgo1wjVUXqSfiGiJrm3t8FfbGy4SSi9ji1BKQ3guxNUzbr6QLbuChCNqAySzWz2B2YUpe",
  "key14": "5YtmbMh3NNRWCu3i1Gv6ADUGkwpruuM4RoGr1tf1YMMvGqXvYdXD8Jzmq42dHZ1oDufuPzoVmNZ8Ep3Xr9ANgcos",
  "key15": "4mn4KG9w3EukdHwxA8WB6ZCNA65Hju67HrzgqUdYKmWk9L4sg9cHg7MMW7r9ik9qehTAL8zyn9yt8KcKBA8anESx",
  "key16": "29kxLZS81tUVRezHmKjbM46ofzuDdK13ry9ntJNi97gVU9VY2orXzNKstoMfQ4A96enAmST58fZa8qRKfZxi5bKL",
  "key17": "2hFDxR3PBZxtK6fdvTpd5xHiAcTc1NtiaHo3uNPeJc55pEGFp2ghcfNSrjfn1XS8RBt7sfE5W7GQ92NNvBW58PQr",
  "key18": "64odMbyPdMY1JUzSvtWusbyPsn62PExBk9RGFVTqSLxZCucYNL9iimLwH2xaw8gaf9BGZ6xgEz28z5jEUxijNUMs",
  "key19": "5UzKfHYt7kNpnoUC24pqcXumBmRjCrhT3vrXkfKTgq7q5oqHvPDypQ6VuAbcjyNWXy71WAqCcshyaP81yeA1EWYb",
  "key20": "3Mtydyeb78hXew8pQbCw5r1sfVvJVGM9oHNr9cSBKrGNny2RwskbsLKoKW3Tp6Wa2rMVeegtNXEYJw3TTDKafEXq",
  "key21": "2p4d6fQoqPUKu1xh4N7q1dWxnwmR5jNTVEB6GRmcX4VAqEfsgB97vyNQaTeDMkxiM8Bs2hS8hBG7JRwt61z82NeD",
  "key22": "4RffPGNGD3GnXnCBiyuucDxWRS3WswB4ExhjqgZg8eLFZwcAewwSkxFpHjUWgp4MqgVY3NKDUfqpdv5NT4pavMAw",
  "key23": "29Sryn6zUBSGeowXZrFMcrUmkA7emuYHr4TC8vwxpPBZacCpMETtRcuJYxjJrMh4KxMC8Pan5vXn5sR8V1VzbxH2",
  "key24": "3tUa4HNADeNyHhyseF4aseGhVvZeFK5B8eztbt97akKGeoHnrCNtGQCi6ACXwb3gCVXVJyDJYFQAehTeVjTJZHjW",
  "key25": "35ZLcRy6RtrBmg5DT72o5gymt3n5LiQvJ3EaWqehngh5LwiGVDizeVgTdDjwJg1zzLcd4Vzv7BwgpskK5BRiUSeX",
  "key26": "4vLifqj1b6CSW6oUAAjPWRBK7q3vbNcaA6De2G7xhj6uP8XQekSueRTQewnVNTgu3mTbR7vxegSqMjjsP5JQHSi7",
  "key27": "2Abhxd9TA2pXFuK5SaJ6FQp2NckSjvbxZtbnNpxxHRH8kqGhU4F1rx95a4QLLH5YmTdFeYg1o43VF3FxTjP976d5",
  "key28": "4Uhp7HxScevXvwuyYactEHXhxDYMzxic96aRXNUJJhYYGWiZ9zTyXXGSPc1uKpkTyvhe6uQwavriESUYngNPHmkh",
  "key29": "5SbEmRcR9sPeyWAnHMCfpVatFp36DFoXK6yWrsZbocgz4FjKDwA1BVHE6oMP5GQBVe6YKgqXVtG9j8o1jZpEAsBD",
  "key30": "5p2EeDmoBBkxiqboYvGuuxXLuYa8HV497iGBhAht8feTjo1bEz5BmDm8XVc4d3R1VYQp9qocztCkWEh9Ex6cMRvB",
  "key31": "3aWgbUrAmhWX39djSzwqQV3X7fVr9a6v8rz852uvSEPzto31TtuybsEZYECxCP12PGHwZ82AnTpA9mgCxFVS5P8r",
  "key32": "5kbL9r332VPkr2BBkWXwrQVmrMshAKXXyk1j8tatDd3pnZbRLcK73sAFRpkoTAr2RsTs86NBBYDnPJfMqQ2nmm8V",
  "key33": "2U3x4Qz2i9JmpiQ7KA8z8wHnia2kgTCeSZrGZjA9U8kfdFp1xBr32fZseNSM4xyoCtbfVyCxsaRfiXWon11RR4GZ",
  "key34": "4jPJQ5bsc5xG3W4Jwk7rKSxrQk7Vg6QqnXx1MygbBkrygi6KTxik6kq3gEEdjmzWRMDmWuayZ2rc6CmZRiZRvMuq",
  "key35": "3XyomVQH5iTfNP4HPw1TnQ44aB3DtY5FRgGXjsfGj6usAhc3AsNrkYSLtR3Mh6EShiJ6ohBm8EBHbG7u6gH8MzV3",
  "key36": "2yhnZiqrKNorJpJaHTmYya3qj87PJkTNY2fPDzzeegyhDxun5Le1ZuDfFRo4W1rukScrt7RXttzgCVmaUSiQeYUG",
  "key37": "3tv282SjP5hUfRqDnWZTYxHLi1jYkE2V1cDhDSRGtHXPt8DVB8xiL6s3Av4ET9L9ZPYrtQToSzcRZ4McfZHyBwSF",
  "key38": "2Q2hhXU6qpy1N7n61mPcGsHSxB4C6zb18e3UeV9cbdFHhxb9cbQ5DpxdeUD9v8oe5Ue5FaHzWXGY7SfCQS45FfBH",
  "key39": "629k1FD2SqCahkxT6sxFaUbqwnEhpSUwv37b6vHRki5m6c8K8RghSmQQDXco2sK1GLKRMad18VPSvSJuBZKo7LSv",
  "key40": "2Uw5Ds6TESHaCG99ExJV4Pv8ZLk13wJsN7oYurwbEDJkQKr2X8Z7GhKoWRoTnrUmRu13i8seVx55NEduSix2yRYG",
  "key41": "5phwYm2kqrxoGYCD9gYFbY8PUWVcesXZm4ZUKVK1KST7oBRQa6AyeyDDmeuhRMqCu2ZHFnTgiBCmczGBzuQpmBvU",
  "key42": "616HNttK4E82HdC2jyKBEbVT2umqBQJwnmAJ7jiuqQwoacbXBX3VAXxGExFExzxVdU2YesPcpyQfFhTKyN9FEr5K"
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
