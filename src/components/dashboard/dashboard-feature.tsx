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
    "4f5cKkuAyt6FXAvDX4y8Ra6VHHMLTidQyeK7nnwJ82NLe6nACrBnqM5ZvgWamq3nf9R2pZhQQJYjpeWaeVh9fbrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bV5iYtzhcWqhuyb65wcxxDC4carL2WYTZikUgsTdUzBi837iG3vQ1WF8SFhhPJVWiJshN2V3cyY1wih785hAKxr",
  "key1": "5Anw9W191WgcpWjBNkpvfV8r1tWfhmrKWUWNTmF7xdi2eSzCzgbFqQ5KSXA9NWBinN5CvEXCU5m8iJZb8xXUhb3h",
  "key2": "65HaSVWDmCu2XfgTMSCrZNfsZJRas27bwuk9WPXxpxUQM1RjfjnwrfmAnXq87FTKgmUeo8chjdeta5rMnVkCvbyj",
  "key3": "3dk8tUBcax8sSTMKXTiPRAS8eWmWBeK8PYFB4ECnhX89gg8MxrwFBLdwkDKKZVKmj78MkmYW4bd6oJHaoKs6Qigi",
  "key4": "4G93AMM99mpa12LgXDJpaL3RYdWRhnrryMH9Pu8kUQbqxuzVWuHDikG13J3weKJGv5dHvGYevNAm3ES4HmpM1ZEn",
  "key5": "66v1ZtpPxTfSdtbQEYY3gy1W3fB58BuqpKieZhBLHPc9fQydhHi1rVKV4WgBtGQpjnV6hodPSfTJDJTLgDigU1CM",
  "key6": "3R5ogrb2YeKDZVWAYKDrQ55C1ZgjAcHwx7X8BPHu8YY9rFhLemV8k8DS2T2N4i8Dk2e9XRLcXuWmDFNuE2qg55wi",
  "key7": "4x5ig9AXpX2hMVonj2dMg7cnTibVULLxYhwMR3iECKWqEQrv9wnd5FR2XSm5sTPyY3sK3uTFuY81wHVSVH35d2DP",
  "key8": "49T9g9hUWGX5yQyAmjQjhUp7PgiTNnQKbEBjwCWRzBG5KV4EG12ug2vApx4ZibzkHw8RPFNw5fVgrp2vVQAWZQ2D",
  "key9": "37r3WfwEkKM1m9MYNas2XaWyygx1mk8QhCNny8hQL2SKwYcwFRXHFnmuoow9BHVYDBeNECLEHXb4DFY1wi7fe21Q",
  "key10": "4AwCDowJdzzrtU63SmsjDpdikkvYyjRsyaiQobxZQWwd3L1mp6vyGJCc6RBZYUrPjCosZnqfJSLPDe4CmmHxNLYo",
  "key11": "2RvdAgK4rUxRYBVJ4Msp19gf3iMR81d9VPCfky8qaomPSsVeyC4B7wQtcWQJRpshkZKcnmQv5uYdmUQCSoSP4izR",
  "key12": "623pH1NMgMVeWVQKJFVatRMSdXeCR55JR7uWkJLX19SmTuAB62awcmX66bVVxFSfxrgFJcFawRxtBLBZTrjJzn9N",
  "key13": "gFbsCafPyKFNWgM2Lp9WjY8QT4uWdibWwHRFfCAytRDJNFsSdTY5Pqottrq7kso257aYYL3QYXZfXxd6EjDnbAd",
  "key14": "3hVQ4ZShQjywfYB9RSfivXYwi1CraGXm2XW8UUji6yzYA36Qqv54aw9V1gdBtzYQutGQ62ybPF4Bu2i1jjeVe145",
  "key15": "5r8G5R447rK2TSxfnp1joeCUcV52TSwJGt6hayDRyiFHAkN6tXZz9ptoDsf1Sse6zCmN84qteqqdMMfEMEi51ZAn",
  "key16": "2Tm74CgtPnzdBf1GsWAwAYUmaEWmdrMDStyXyKvxwEMWG6NEW2VfqxVhchgENDDh1rh9TFNJW9t4oUrbToQiByQo",
  "key17": "7oMHLGn6vPPaPVGWN9UDmJd6RaSyqcqaLzGWKcAAtcfUp5SL5m1ubozALoeyxS9qTyqg2oxHnh8MjoXH1ZgvrbR",
  "key18": "5K8Boeb4dVudUnxat7RNmVYwXxmsYV7Jmbj2WfnbWiUHUmwBUUwvt4v1oXo2MzfVHCFW5vzdWZK9NSVC2aof9ZXZ",
  "key19": "2haJoQXxqeDkLfDsiYQ3WU4Rtgoy6KiQNwjy6eLwJeULkKdGhkWWvFzNUhZgMamtmic2x9sAcmS248cKZGejhJWR",
  "key20": "4Snr5REKnDDK3xzUtVSAvr74QYBk2Z2K9sxwVSC9oSdQUvSy577GGAhgJmrSpL7xwyxEAA62jU3BxsoHHwvvr8Eq",
  "key21": "2X1MttBM9ey1nMRdD4Pawtr3X7cwbfC3wU6Vu9fzGruFN3jyBd5Hqr8zs1ZouNLkBAXqJsqn5ZyECLcdYTXejMFv",
  "key22": "2Sy4stzvEHtYsox4MsBQef5i2i5dv2mwjZjm8oS9RwMoRt3DhiU8wzdZk34TYrBCXcot2v7EnKL7inHbar13TF52",
  "key23": "57tKB5XhuXgodFCCYJvd2RKcffsA2j4n6oGRwkt1Kcpb4j1BmZBpgz5nXDjqgCw5Xna5fQy2k1rbneVHbFKNV58t",
  "key24": "64NGzSJzm3Q7DGmny1CCPvwQH8eWA9DKCPo2YKj2kQzxW1pjYGcCQbq43K3PFmoeGrzr4DauUC698eWUt8qZU2YH",
  "key25": "3KrLhjAGfyqiYbfS2Rg9UqKV4Mg2N2A9WH5cFs4ruZAZxaUA3HNyahQi2mjaXLmV1ZGQuGrCdot5c6Drda1atWaR",
  "key26": "DL7zMrckebDzJEL9Mjab7yrMnP7zrZpseM3Er2DXNSnhh5wexyKkmx115iHmpv5gNhmGZH4DQudR5Hxjv9Mhmof",
  "key27": "3kqYbryDLignoMyfKbaJJc5VA3sR8ohn9H3EBYWAaqCDY3agdtukVPbTdkejx7fWT6duFKgj91AAZCWLXtMWbTn5",
  "key28": "5bfwTNV2p6cYNeu3qZn5DT7gdPssypVcPVBgZv821CrUg1t9g4R74oKQuVgoo6ztDLoRPtu6txKv5sZFS1X181vQ",
  "key29": "5a3nNw7UWAMSgSjVi4L6PZD7a1tT5BaSpb2V9caJrdsqNdUCjR2brPhSefVv4BjXtbv5AKGuQ5WbnNeVacCzUR6Z",
  "key30": "pyS2d5rG9desjSgQVCHRpJbgXACGefvG6pXo1mUxX5yduFHqrGp8mRjASYBbpBWPeKLB2Hp5Yhj33kAqmU5feCx",
  "key31": "26ZnDrQwmAv9TkNqQ74pMroLQHHjpv5Jfb3oLoPneXsqBMRZN56yFuLqtJu3gjqCvcu91QidowGhz5F2tVnaFWjB",
  "key32": "3pXEXf6nFX6AiV2UjgNz85eGRNkJwnFeU2QBkEdXRdx95yhLEUB5kTQvjs2MYKS4SP4TvgGrngx3gFkyQ45AkF3r",
  "key33": "3PGzU9JbtxbmubgfCMn6ASUCVVEJaA9U1jYpRCS421yKNsySbLygnJgEaN368qWcDiHY2v4QFuxH7nNyhkF5xmCy",
  "key34": "5eJZpQzEABFBKso31Z4SLkgXSzFnuDrLsYdexJafFTodb5DUHtnYmvjy1F2Yot45tSYctVQXUuV5zN9zjZ7ypm9c",
  "key35": "51z1mMAAu8EoxcfdyVhzMX4CwsH39yV2UEVgsJcKDTMLmvoVYNd65S9fVwsS3iwPdAWgobf2dZ62Pbk1nuWWiBip",
  "key36": "v4KM2LJ8SbJGnDub1EkVnV5P5bih92E3oDiVGN44yFcuS1cdkFukoH5k6gKtaYfntFAqMMDeyrjWzDETEki9cyB",
  "key37": "5fZT9FXhEa6jiv5W7zKSyWNHnMiGA6uEyMNhZmdNkPs5Wen3kSXDVBpqu8nW9i1NbgKL32Vna2GVPLkcPY9iA2Su",
  "key38": "4dJAfogQpKWGTekTk2rtZoU9j5RjBqzwi9nCuKdNsdZ4nw9j1E3x3ZWLMADgd5nQhjPMo78aQux31qt4gwnhQNUS",
  "key39": "4mCobWTCnG8nBAmGVkvmPJ4F8YHDS2rAoNaKbEoQgHMpgTz4JPHs1wkWTZC2J2SxzYveYS9ctPWVNuK9eTPf8tTg",
  "key40": "mVvcM5kApd7Q3MPmdyw9ZqxnUo5AEDuzSoZsJ3xw4tbmGo77ppPnQZ69SPiD6XKMH8iL2a1TVv8xgteaf2hPuja",
  "key41": "2Lk2BmJ3XQnLfZpNNCZxmwYvFe7aTBakEP6bXoqC2pPtV86qsdgGHCF33o9nUmgj2gh1RWrhtFPBZ7sGdbgvSwzP"
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
