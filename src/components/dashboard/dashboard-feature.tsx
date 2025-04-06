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
    "31NpLtRvQpEYkXmcPahuTCYRcJFaqPLc6deWoiksbfHSEdbh5RjXjsrjzrtTTsPqvgqXFcQcdGuJ2CbvtY2eRKRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aXq3dZNv1k6Zkbmw8FJD8TNmfgcJFsb3YjomAXKdguTfG6rdir1oiD7s7Br7ekKVb3RWVQn9pFVYyo8FwLEnVnv",
  "key1": "3tnCgPevsJgX8YkrwpJgjstByiFCPokCy5d1VpRisbLWSf5HhhS9YY1g4HUTHtSSsLoAYhnN9boA9ZV4DDhUHufT",
  "key2": "5iA1Fze6btsnqSqX7Lxk4xmVojrMKgkpdJACv1LEu58m7tant5asBr5gn4orTozUoa5T5iXqwH5aPkFBJSAkrTNM",
  "key3": "3QCxQJsZFNdNd5zB92wRedvPHMB38Tptj6rTATKcRtCV2Sh5ZZbgqJvFDPWwLxJRMMFeTzn2auDR6BdoECKNdtCf",
  "key4": "3gA6zbo9EVRm9N6TSu6EUs1yYF3DumZWvWkN753XUypzgMCVYQqWonnRr3sBVoQLaSmoSpV6hWg41WTjcfg6EXP8",
  "key5": "4AnaoB5MW2ELKHFCYCuYe3nTVLceZFJefV2zBBofXq8RefYuGvQ7H1yhwVCzvNUhPGiXzzAjKyoBSAG97DCAN19Z",
  "key6": "5jqXc6p3Sudc2dwn42HmLyHWqjhKefvMVUXkjyNm184AJn2kXTS6fsuqQEfPutB7KsBd6zWkeEtNRV5xZTWK1EzT",
  "key7": "5wYPDuYTcxoVjDPc7h6opBaNpAtMY31BogXqurDQTqCsAhmjRibNZEm46y5xnsHyvexFmWC2oab3N8xiab4rbaz",
  "key8": "5iJEnNg1RxShvhoXxjajucJwLYtpPP3AuR9ipUBsTCVFmK461QyNr8GJEPijTDLm5HuMVnWvPSx1KHjVM1ekAsC7",
  "key9": "2stFco3XWRh5YP2BAL1fck1X3QHyPqT1rrU3wcQvu9YRQkpqgveymEMd8JHdNjJrhjX3MUiNZKs9tPugKAggvdZB",
  "key10": "eV58sr8YksCHPtoSpukbdfUz5y2N9i7bYKjaeUMuWdrUNuR5urfb8m4ZM7ahySGmrKvPDWrC7WuiYs8WACZ2i7Y",
  "key11": "NQLCrUu3mzmwNtabHrA9MnCiJEpBsfLC5HmL45W9rnLPWA3XNDHP3u73X15JadTHAEs8g8WWghuELQ2YgeYEnwe",
  "key12": "5V1reabNiDfCsDMkk9mL7o6bXp7FErpXbuqCGbMWRtrnqbVpcuc9BAAKjzxk85a3UoZx5L2pKq2VYi5wWV77MYmQ",
  "key13": "26t1bBCJfuNiqysx8mMGJrxVdassWyYY59yDFWPSy6ivVX8XJw7QQ2QBkuUApmEoQGVY7RtXaLikHPtwpg3U7D4t",
  "key14": "5JZ58G2QBamDrnyfXbzCiQY1Kjknc7dHRgxqdC1ooQs9kjeJ7mKQ8Kp44VdmbDWChHYneUEvFXGHQ9dndQrQRsuC",
  "key15": "546Xb5mP6T1wnMZBjJ6gAXpWZvZUis4zzJ1DuBkydRr2oU4a3Z7bdSQ8UV7U6Puk3nubskMPe3gVeEDPEkRFed7Q",
  "key16": "2HrtSufReGXuGYkauya6zCZQsuTbsQZctE2QWQcPJyYCWAkv7qtCFUqPQzLWRy4jcRnTg3Etwi9Y2LBmLVUjF9LK",
  "key17": "5AxcSu8yriU3DDRjjfgav5s57kcEGA1kGPJXqW9V5Ej1deWnCthdR8Q38BHRvPAXvWGBpPrEmN5uiHdzkJeob1wM",
  "key18": "NARxoSQwgC9ZPUm1djhiPX8VPcRFT7951oQ7fU79UoSbF7HmX6FxAyiGZ5NRbJ26yGhBLRwFfWYDbPGsjd5AA7E",
  "key19": "1jCjGpc5uoSWeosgMi9o3dnQ4mzmoYEyq3viz9oepQjmwV5QNhhgGJ8xpJ7TbLLDRYFuMJfSUnGoxKGV4VgWH5q",
  "key20": "ffrbcMBBvkx58bEmoRdXa62dFfJxUhqqpqPDpydjoBFsrBQiNcd19jmyaZDkpXwkw49CD9P2Qi5SNZy97fKoBD1",
  "key21": "56fXgscLD71YcviKkQiwru86yvvvKzbtD5EGVuVviF9jHaieNk1NEMGuyCbgg7HWmr4KuLN99CFTJYbKFuLmvuau",
  "key22": "2VxFULkGmt2i33K8vKCbAhrXtMd4xUYVG6xy39YaSTXWYeHwvt88Uz7kfZjXDiAgaPWTBBcjEFRHo1mxsxxJ9gNZ",
  "key23": "3GjNXPjxVKE4Efjef52opNPrtH7ijjQDb4Dc2B2FmLz6oQezt85YuwP9okQxmij6SjiM3cbWwQEauCgye1AEqwSE",
  "key24": "5kjAnsbLiMpS9SY9KxBuqgmgqygWfmGBJMYirdtAucaFzErBKD5FEKxGVH32QJ39Dk13kUMJLXgtLhRcL2omak4A",
  "key25": "4e5tEQvVh4yPPVAB7xbMJX8f3m77SzqFXkwfFGAfeXkY9eGSruMbqcvaY7c2z1GqRsmZW4puuPb5NLxBxCQgZkAi",
  "key26": "5sefpAiRcVTNCMkxCRD6F9FWz76yPJ4K4WZpxoLKV9phYjGCLUk2fSr1qrApRedtoX2ry96JVFmhCC9W8XztYput",
  "key27": "41ikbL5L23H7GbUUQfVmjUtrXmHqVj173NXwqUKrzWKE3TeihRLz8ZfxHcxyhkguTA9HNEMnXbvyVjYRbQQ8xJDs",
  "key28": "52DdfVPuzmzHzeG2NXDpwV7ujviPmLKrgQc4PDAWMUaAkTNyPffhpHRfdv1uP2jNnzxzksp332UAuHjD86uwwLQ4",
  "key29": "CUiaM9uW9hMygNAYG9QSAfnQFicNNKKr94wwLPkRkP7BA3JRmdjkZuH2qQ5fwqM1Xr2H2ekidQoYmAhngDAYyAb",
  "key30": "SjdL6NsXQgTp6PaXDMFEAoZ1L7QaXsgm5gxvEm38VkUf1xafH2Bp76pg4YQQ7BfkDzknWSqneazrptdQ5GxwHmr",
  "key31": "5Bxj5vUCABGeYQjXacEDdLBF8G5NuWQmd5rKRxTcJ3JYiZF8Z1zyLg4pYLaVnwfF2xaPD32ddNGdMqihKEWhkrvS",
  "key32": "4LoD7ndhKK9N4Yekj6hDpxnH3VKho4avtM2445dmdEyZccdnLdyuigxX8dJQcEotimfdWMXXnCH3Z3afyu3fe5ga",
  "key33": "65hXMzrQXDEmJYJART8bngWypdmJj374eUUimVvvMrvdzSx7c4h5HUuaCZWuCNj3LGqkRetsFULNKSM3gkxkvEhn",
  "key34": "4bVWauUJ9RDyZUFrY5sUFEXAkjzzedabw7fanF8j6j7VwdzteHWkes8dJLkgKJkenpWGLJYYiLDnU1NdY1FcPfzZ",
  "key35": "2t9PAnVpJug3NUVzajfdmB2XyQd93yZcSd3gevNXpN7DwvUMnTB3K1s9kyZiAr5HfRmYprn65hzQZEkccSfAUr8N",
  "key36": "2bCxFJT8uphkzm2Bm6sLvGvSVChL5eQ54ob2TdGyrWLqk13w5A4e1UbU32vfbWedyoj5KmCU8qfi8qTSU5pyzSa1",
  "key37": "4Qv1cuWsXHjJPfuF8AzF3D4Sn6mP1wLvWeGadyc5uWGgKoJk1u46x7bpCKBcroxhsT2cQF3iVbUjXdHtQku72GPa",
  "key38": "3bgY1dgagg8bYp8JeCbpxWeZfhFycLvEm21tmWZ3SEntnFry5GzKk55Lt1gmz5ZjZuRtNxpHkiRmqPRHn1xAzieV",
  "key39": "3awAwpfhknkQgwYwZFnXjREP6R7gxMdM12VBtyvyvUZWCMbCQCtMummKV7yCtx947h6HGw8v5KL6pvUaXbvT2gYA",
  "key40": "G6ctLNaLKdPDczKnJipdq9Bw8ZioPHDZkjrGL4Exhjgf71NfvWDZy1vB9Rwi5JDvjXoRJhkdry8BTjuYgUQ3GBb",
  "key41": "3phL9bHkCPNQGCBh8uMhJJ1nX57xXv9X8dLUNRu44DBPgPLjEByBYwWNUwQVDdvbzadjSvDmCB8VVY2AzRP9qgi6",
  "key42": "4SwWhGSVViAaExQypbcSfd4mn4jKfW8A2ee6CLeq72zK3PQTGo6DpduwKKxhWbx4Ppssd2rDGPRZQ8mJU9Phpw4B"
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
