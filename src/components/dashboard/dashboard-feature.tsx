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
    "67rVtxaejmznZy5GaSLcBacHS2QNwQtRP5fEzxTiZyYqKPjYPr97pqayLRczCBuvMALnLAHp9TzbiyhAJm4g741Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "481CxWEBieJDGd7NcMWzWnVTpJs1g8ZynqUzitixWyVg6qSBPMuKzmsWs8BhGvwgJoNiN9RKJ7MYUq4ixxCD4dsf",
  "key1": "2xtH8JA3m4xpbi1rAPzS9eESXcfrexUJnqu5LU2bbqoDxyfYZM2KwLCcycAoYd3YcmAJWQU2YRkt1noMd7wLcS6Q",
  "key2": "WZJmnEvWziEKxQxKtuNTZhmyREqbkoq5sn42fK996WiDSAsbHMKe3wySrbgeZxazup1kiE63nx3MHQMNT5rQ7gu",
  "key3": "67QZMmdspknD9WHNxoaARQzj4Y2g4A1dW4DAp47JHjJXvPFfUXkgSY4SRGQFmb5VZqdjZc6zEFaTUyN3QCgiVcvy",
  "key4": "5fWX9JygJchQoX6cK25KAFSpoJZbbfgm4c9vYQ7FAU52yDjzUApqNyn1jJcMvSHHs6jfk13SPyVBa7nys7dqmdxq",
  "key5": "nJgQm8jnTiyv2gQ6UDf9jHsKYYiPz4MnSGjEWJ86iRUBLSodVN3goz8XMXGUrsE9EXQy6UarN9RX1HhPAW24ibZ",
  "key6": "57PrdVeVCET9kiZTNu7SXTNTpZGfBxp5CwphwDpKsoRYCQV4phEMecMzKqt4YACFeg6jXQiP4Lqud4vSsD5iftUP",
  "key7": "58igtGqVyhw4AWVFAeoZkp5T4raxB4rFdFBREZR6ib856J6ZEPCftwVyKPV29y2HRzNA6QX3aEiQD9EJqfxYKmTJ",
  "key8": "2t2H7QgaPL9ZFinsoBZnVvTcDWB6paqfmQuMr23S7NP179Tyvg1GHXaKt6KbJmwBh2E29iLBhJkaHsdB2EZhM99c",
  "key9": "67o5tH3ruU18jPcfMSUixNvZYp8Dpg5fEM7hExUQ9zieDNY4iQxJrAowLcypogKhhuDpeDKCsewuuyeyMiAsxYLo",
  "key10": "4fkXruWE4tVuYRtWsX9aZZzR1cwFb3zgXJrhX2Mcz4EMo4ZVJXcpjH342YpkyzwBMUfYzxvfJwNmAbGrdMaEEaQL",
  "key11": "49k4ZVUPvq2n3zgGn2aKbYVMbqoNGSibKHmMt9HrY3bgh3uUZkC9srkjvQRU3E1Pic25p5nEEMB3zFMsdg38BLDg",
  "key12": "3qntBiZcFZHPUFN9QP4u9nMbd9UrMM3vhFC3C5FCDyBQvY6zgj5hw3fJJGk6CC5rNtauj3F3x1kJvuo7suzM2wBs",
  "key13": "PaStwfDymg6YeNyQ4PmZXQkVczfDSEwayuRsEuL2vQ72srscPsDWGQiZraUATNg4ufS5gN2XKwXB4X4z3VnKNzN",
  "key14": "2j3kdZmk9pW6VcxdfJJksrkjMmcko6UDs3akurfcJdYj8cUeWZGf63N7jgLzd39gYTwANmH3v2qT3ckDUkAZ3PMF",
  "key15": "2dQGAwLaLnTMvtW5czvyrnAyHLAmtBLmsdMci6HPqanGQU8zV38s4TzkAhSt4wWXE2HAaytE9Nz5x1DvvrAHxgsM",
  "key16": "5bnXbZD1z2dKpTa59ptkYHGS2ej3bZDdkzyUnG3DgbZnuYQZKk4vAh6vepYdzuy97MQXrzPnjKpukTWZ7v6wPGiY",
  "key17": "3Gif4DDkJxWJKiULpsZHD33vXmpyk8joeqnYKXTQw38bgwPrKK2ZMntZaxVz6XM71s1c1qu2v9MzXECVZYs1vVkU",
  "key18": "3zwELncakbq8PXrP7GBce5tffi5YiEMWyPoTVK1fPuChFZ6ZybX7PuSsdVpSwjeF8hzWwWFsNCD5m3nmWdFfkABo",
  "key19": "4W2o7h5HExay4srX5w9tKNyPd6k4DK7hjdTDo633VVDHuW4jY65wij1FoGzZdtFbhBnZw7Lxu69kY9E9bXGzqmbP",
  "key20": "3hU672eF5W1LBnGbENWiCRHgvBMyDMwahiMj2rVZkrHkfz4L5FGJBqUzezndnJ1V6QQVZgkKWXa9TzTY713yamX4",
  "key21": "j3LJrCKKNKWiuhimanbmDhMCZnBgS2Kfb94WkK64TzCNJXBuX5ANVR2Mzjcx27KWT9ie6eRGHnzaX32TcMSu17u",
  "key22": "MApkaCsoJbRhB9ZRPaxwfs9efEWVqHGMiCRN6J6iQ58gYRTFuGvW2274yVw2ANsQJw7Zdip4EdoydPyLK4UJpqJ",
  "key23": "4V6fYq3WqSUiaWbXzq4D4j4Dskqw9YhpCBumfgv9VJUdoW9nPMCHvdAZRevV4kfmvcfx5HFmyr3sodGdfKL2tkih",
  "key24": "2wgKWp2jvyCyGczCmRmd6WTYLAxHX3Pb3frUGrvezfYifhTn3ZiBohFLXPsi3CCZ6fBy6ykCD1FNYLAt698XgQJ7",
  "key25": "4p6EMmkbGYQhrqKBFo9Ym3xphtHprEAGMHa718aqySCuWLcMMfwAbTuoyCKm7K5chKsb9y8h2gw9ZtU7MGgC2eN8",
  "key26": "4rvp9uVkUF2TuaRRaHxxQCTbJrmmMUkegL86MmZsqGcL9g5fniRpQ6Txon2XHEyS8yDh4q9uLkmPwbjTPiYVcNxx",
  "key27": "4osEVoS8ij6Qza3PxoGrBu9iX2z9maVUumbSxuRAbnW7Q4AdLWdoSHUwUuyumidjtCmpmA39AZyzVcs5QZEBiRC4",
  "key28": "21HNpVoigWzHwtAfp1yBiAt8LoqMBmiVSbZwZxHK3iTopMosPQihc4fBbGD8XH8h4edXtUQcKYXmBW8A1srk3f67",
  "key29": "4QtXdW8vfM2w3gPuF4A8uYP1w5PoV3e23bABMeopqU6wPP8Hx5uUanLjKq7x29uLWQMFcR3CLMrBQr63fMKTELGF",
  "key30": "en728DKn9W2k6YEEmBQcjxMd5MbAkrKfHeYvkb2KdQYCLyb1kk2SNQgU6TnFNY79E8JH9KMNum4RtZfupGa1WUb",
  "key31": "5kLRwWubEFG2BpKJvAqExhokt5o86Na2scRjz4YHv98reKSgveSCD4MC6kQBhPa2wA9tbhV5uJnR2LKg18xrCDgi",
  "key32": "2WNAkd3QD4uo39NJpUL6N8vcJyX4EMTzWPXGsHZa4sytK7uu3BiBxwBaCVpegCi6EiReFndqGNeZfgC2qgP89oKA",
  "key33": "2DDUWKP8bMjxBdmxTYbDeLGTmikr77mcZSTskkiczRAwax3Ddyp77x2ps1zyk8JVk88xQFxLpL3Jnh4CBnckW9AA",
  "key34": "2UCar2umsMgkgR5YAV7wttvNGDWs6GrcsnJc9epbAW3kM4nC1MUa9DampxoPzGUgMWKPM4zrHpTEB82dMqwNLxh6"
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
