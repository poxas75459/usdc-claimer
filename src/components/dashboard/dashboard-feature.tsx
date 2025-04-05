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
    "5XsjZq3xRtght9LhUYNjK91bhwCZJA4y8BqNj8Ks2KJ5881xYKCH9f3MRYEB6bvD4uiqQLLDxLmgqABmDV8m57Hq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nUGxBMYQ2KS24TGRXkkUzHbgQD61QyZik34icYyMKpy6VE5z7qytQfkqoK5ZJqPPEfPJ1PcZj3z8eUzk5EeVyog",
  "key1": "5GbrVeaJg2SfW3qFtUodBnomUutcWjjfNEBZzqYRuKwV89UqBn3CSY1vhPvAbB1JZSUHCVSY9LRThSC5QGidCqWR",
  "key2": "2Dh1MgvD8qCS6k3VhdaKUUrCPzKDCMdWA6whGDAUkJAEUstgf6kNGmEdcMn3MKvgPKzqBXKQW1AkfjAzAfATdSXk",
  "key3": "3gL3SNcLyP1ykeBDVyQ3oGk961YRo2DwZsvLMEhGSZtnUjZkh9ALo3PAWfhFYWqasU9uzNkb4oy1ots314HAUnTg",
  "key4": "2GCwnivhxKFiK8p537D73CqKYxjJMpHcFJDSUrHkKcKD7qoaUPMzWAm2heFhYbDLNPqekRDsmvrmdYH59vbaJau2",
  "key5": "3KkjUrDiAV1EMCZAxUAP7kzvNxQDD3ZRJNP5AYfzY8edAMyG8CUhYpiQiWTeCxv4Gpcv7otBHNypx9dRmJRLtZi2",
  "key6": "2mMJEFDQbMDGpfjbxpNhTJUikw5VzGXDo5srXiCLMokhEt6rhH18mm7FYijfw92r4ScC7fB5QiJ8FVTEt4Uv3VoY",
  "key7": "5bhWX4RSFvP8Ff7rYRkA35cRQuVTb5ZZoeG73JF1fT8APSRpWnYhXzzbZJKaJBJRtNEj2auVxFtuGtoCEniN6F38",
  "key8": "5VshF7Lbv6Ra62mG69NpBzPruBUhdA7fp6pgp349GCdH7DuGKNuAaH8iF5vw1EQu8DaecBc3frK7LTYmaYBjevec",
  "key9": "4K6VNpWMJgfRcvJwMtojZnygyeU6vNnhEULKJgJmTzZxNk1Qhj1uL7r9nqaMEkMqjW2PmaRv3UgA8m95ak4m2zQt",
  "key10": "fYzVLkd4jDGirWqgmqTjXcU9WhS6Dbq8FY6Cb4xodTBzPBc2mxNJZgFb1focnh9qf6g1LNeQGswi4jwsvgp76N5",
  "key11": "3DdfNbZjDKbfUbWTFBcxK6WQtxvUb3dgce4CmUr7uepwuqirUgVetojwCEfFfaDMR3iAZpeCut28ZqHeTLHg4mHP",
  "key12": "NJw8ucp82bu7nuQN9xiGrfhQ1GhTb3dqotZRbTyeqh5NT274bBsNLc8p63Tw6fYGw11VvPPrQyEuiskBLj2XLWq",
  "key13": "3czSkH21RBmsuj814LUfcMigKXyqHQrZkBxdhpBAsqfCjCqQ6TzoRWUrM6ybokFhU2NGKWkPExKLvy2zJt3oiSSh",
  "key14": "5cHBXbRbN6gb4tpY4QF8DaX4CMoWsFMegvH4k5HuswyJ9QDvHWRkrb5HzhiqWDr2zbQk9MCqqZyetjcuNB9Jbtd",
  "key15": "3j7uqZPeWWgjSNFWSP9isPgjtbufLxkTwdC6XUn6vSKuhcceD9qHeDautRoyzK5J4ukS3oskfJbb9TjL1sHydp4m",
  "key16": "4aWoqemcZqJRYrRGLt9PG2GqqYCEZZwvSKrhYhKHfmSt29JT2x1pMDePhdPEA2dYVHKuh1zChvRst1USsJgnaPYz",
  "key17": "2qWenCA49N4S7x7WmMrh8Mib1KtUGTQCxGf3EbcLb3BkN81VXD5AaWSR3CvHVWawG3hHCjSfhuwqT3FHBa7iwZ2X",
  "key18": "5ZiekFEeUMBHB9XSqj2vtgpPcMjrrN6kkEeCJFQeqFQAy5jGXHmK8m2bdTS9sqRdHzFMiZEN9PNZyaUtqY4ehMvP",
  "key19": "2mPpFTdh7qfVJpxkrk2reqd8yxYT5sk1Jfiq3UKkeLrYVu4JphVcSbBDqY7dPZof34DE72MWmVEv38mKSzenUjgG",
  "key20": "3LQrJuXasmcyoKHh2gf46PW8RfznxsFKoCSLBQ6v6Fbr5gmrKsgcYwPfaq7QWZf6wNBzrQoifKekxM3yVu4Zj9xy",
  "key21": "RtejY2M2rT7QoMufZ2TUKgzsJk4g7JwyAJg1nuL5wn8kNVj7JVjAjvWoGQgYmsy19qRfDHuuMtMx4CtukhrwRrT",
  "key22": "4kZrU5yQRRNJUD5jsfCZ9t7P324v4srmRH5NntpZj4MJdB4eXN1JaAg2z1hcWAbUUeXQet7X8ZgDx8aNPWu7kz9U",
  "key23": "votBNBbb2QB6F5U3vQUai5mA4AE7dA9TxxwaAKF3R6Djdp2teHC6PxSryAYQhjoWJDoJNvFLjq9xNECn3V7oyVb",
  "key24": "hDZtqXY5RamaQ2ooZFX8KrvhumVeV8sz1Q2ubL8vKta5cyA9b9gh6EGCVoR4BGucnPgkRbmhch2YG5SzANPXrik",
  "key25": "7ckwZiWhwokYESxxJkFPrZMmU6Ax2fyXuLb4UYVYH2KTCemsXJdseKA1exX4tSDZYii1uniecigYyTS2HTeGxje",
  "key26": "6tjH3UmwdDjyM2wqsKHb8qnzjwPkSV6ZJ2oMAEUbPP6uVm9MpGLSDSSQYmQJzswcMt6J9eYi1x9Adcmu5aozp4P",
  "key27": "R9M8JsfagWwQSCnM9g5nVq1uTqF3CAT1jsHW4L66eKWwfpc9LPDvkpEJSTf2ZwDBbLCKeRoz8893ZvTnHMnxjCb",
  "key28": "61cGBFqKaumw6bWBcubsjWZZHBWQW72XR3qW9jtsVfq3gUWRfihEZyD18ZZKXjYqzrjAfh3NdEAT54x5jmj7NNwH",
  "key29": "5BtPrPKkLwTm5pSKJd6LPXhb4xw79ZCXttoTByHDjQxYmKHrCWvdapUvt6WS8ECNmV8SydPmzu7V5bFBui4TRLTP",
  "key30": "4QX2rp2ddmoxBxLx3RZh1EsD1HgiXBEQYYEjTMD4F9XvY51aUvqsLQXBQm1Ns3BUeGnduTCNm4BKGCVP23dE5i8b",
  "key31": "2HuHcymaN6r7c9ZWXgKFAeLAZW9NmeCYsCMNgCN6PHwv2dBPXC6DN2wyJL5mLCgUjrmrh2bQiqJNGWkfXA6qaRB5",
  "key32": "5qgqY9383PeN1oV3noThojmvtnCDZBjZenVVEQX6htWwUs3nyRA8gB3XCGXAHi3T54PJ5HYKJ5ghXxKFfaqZAwbW",
  "key33": "5Psu5cd7JbVJGi8fc1oiaYjEUznbVZnEFw8zSiNFvaad3mkd1t8ukafXMDisnBb7csiZrv7JEDYvCbWo9XyuZ8nT",
  "key34": "5nZsSSLHavqihQuSvRpStbTMXVupxq6iMdWvRSJZaH9Ekujgs8mM719H8ZweRV2Fkp7XZv7ny9hGiHhoaxuUtnHS",
  "key35": "4uef5cz4jEk2pdr46VQnk329fKFBsoeNp2rQmHMqiAj8rdwHH7iWZh9FxSsRiz992yaKAqheZyuKKuGVhbe8YHcs"
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
