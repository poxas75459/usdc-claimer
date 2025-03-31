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
    "SiUYWoadgZqzz4zhQe1Wpx5GtkFE7hxHAbxe1V1WbdNrDNHXnqpNi97tWqT3DHGxrWwPfEQ6Q4fQg761xr8iEuU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35XocyECfyPmcw7BTegNtJsStNfEN2B281VznMidUCDEUHd3x3u36vRndg7xc4wJxL1mUVQbZjpPPbK8ZyL5a6uH",
  "key1": "Gc54b5qB8ogbXzFXKLf5HwfffUoMiHGAaN6dn9m4gfTjupS5MQw8tc5VzJUWUxGunrqwU23ouBPTCbnEtmmFGCQ",
  "key2": "5AqymvnaWAjwu3kX3ybBTwXynBenMgisnxQ2yjEfZF292tauMYiACKHCwDo42wFF8SgBNTtgxK1MgGfgzX24cBqh",
  "key3": "5hPhWbPWbntjG8cZfYknXmXPnjcZ2gPPupeCh3TbMJZzhpszRUtSh3DhLN3Yk19oeY6NtCBKNiywjyyUKsPCtuWN",
  "key4": "4g3qvWVwbkrGDpFsuK3oChvd2Wsbv43FqeNvbkofPT7xajBVUMjkBPKzWbvqoZYeQAzmXjFMzBA17bLKBWxQLYfG",
  "key5": "4rsKRyhvMfsCe5p77XLMi7FYRGEtqx3SD7mMBsC36RpQFzWhuHbNCJgUxHjJxzcx1dKSRG2gxxdS9cpJ7Lg4wetY",
  "key6": "Ft9NrRV3HCWjJeP55GqWfWSqP6rVv8ZEist8zx8oxDHRk2GMzZyjYA9Fu1LSvA8yrL7VKXwqGwTYCZDpJdFFpS7",
  "key7": "4cMMLd6fioopuoKqWLhSifQezFp9NFXu9H7fgsi8jZkgeiENfmdo12LtwFVDc6s1RmM8wN23kaFCENoCvNLgU7oL",
  "key8": "4Agg6zzNpH4WmsKtpazCSGMqtWxtQtmVgHuJRMEkiBdNUnrwVXVkEyi5LpCaoGzA6MWDkEYdh8kDCpqzbtUmacn2",
  "key9": "27kpKShWpyaN98gDqV35cudM7hULpcmNcH8vLYbYBgtTkJ3JHDF1xraPN2wfQVWM6imDJdzp2JMLvtsx8kBYKgkY",
  "key10": "3EPdgMx7yaTQrGu626pcpbmnws3ot5YFQWJdPmbnELKEn8Pa1RRsyS9KPec8aWzazBipDDRUQhm2obkCpXuCVuXS",
  "key11": "4BHniqpY38tMiw8ctcpY2NySFDD2HrePb5Vk3f4sVUxQJ1cJbYU4c3ERrpS5ZvJ8Hm6FgcLdp1QgfQ8VRiEdLaZ3",
  "key12": "4ESJrEMq6kqqFnBc2eFadd9SMRc2bL1qLiUqk5wCeTmiHtx8ejLmQqkGKZ2phvZhQN12FS12RLix2ZaxePyAFn8B",
  "key13": "2wAqMFatZ9nnf2oTuH4BLpNFHDUUv5Lyr8GnQUnaWAqXe7zj137ToGze1hU9NHEcHhwFgqg3sPcc8sCujVmvFh6m",
  "key14": "Esj6GtGDf2AnacJfZWjNcC1nmRcqzAJBrJjnPHr9PKVtB9R42N6SQCVdrkRxpWzZ92yv4QvFPuDJVBCu4ma4Sgk",
  "key15": "5emsqiM12y3dpPfhQUARxwWT9nqkfRk3uJwmAz597LuUZDEVTr4bmczR8NCqzvDGEQjcqQNfW5733jkCcX5fF1uS",
  "key16": "2QQhExzhm73sVsYwYQ2Uc7ux2qFUP1sXDjTk4c2VmnL3Cgxbnwo4k5cSSSJ15oiQYd2YucxNKWGK5bKnCw7pjgjk",
  "key17": "3G2pMGregHSUpR4mUJRZTADMjxVqdG64v9KDuP7wkQ5yh6Ackq2i5KSQjmkqPVfKBJDoWrFBJsi7amRLgyg8URpa",
  "key18": "2tmJot5z5rkTrR8jMPYobdTCgggScZiD7NUjoXMK1hN7ZJYagFsgzZfFrYSxdsMqayQAo8zLwc6ZtPyYcSL7QuCX",
  "key19": "4oJvP7k6eRfYf5k9oGSs5EZArSEC2Exo27m7vAZMbFxvXBva4RnVFPQeq9JZcvrkiysC8aocbF5h4yD8z4dYQLxN",
  "key20": "BMcKfjjz3doLi25BNvCsk443dxfg9FbeLQLh8D1TvgaapzfJfirsE1ueVs4DxeVLHcgtFYWg2TqEFoYLJSdnqJ1",
  "key21": "pLaTp9rpTGo4bcXiUcWQnoA44igUT5RqqR3JRjdTiABmzoTrstt2po4Ct6VPg6vAce7FvQv94jvU3UCKoKWJEub",
  "key22": "3aofHCZJ3R2REpyZo7ct4sgm42MjgXoZEVQeF1yy6C3yu2XKqUZG8GSyX3cH6GSJXWEUuYYr5v8WK9BWA8p9VdFp",
  "key23": "36xi9t6vhrrtBERdkB5YVp6zkb48yD366DvDwFvD5NmLDWQCxGKj5j1BtRTxHz66b5CVexH1uhnHejAW1U3zpzt3",
  "key24": "2HF8CVqbtkNXTMPmx4P2omeqc8qNGdFA89ET6FLEupiMAgyaEJ36FKvmhyZQ1VBx5QhGtVGwvokqKVVQtysufX1b",
  "key25": "55FjhngVuVuP1XqDBQdsTcVUmYBamQ264NHe3hicPqMm9iqzEYwqtuoK43GtNBFm5pboM7Ry1FRYBXgWZ1D2ZTZZ",
  "key26": "32FQbeaw2dzfLAu39LDLUp8M9RFJH99z6Zac3G4iADrBhqtovzBxtanZpNWV2FRzXqYkwok8TpUBsyr8tcTKXYQ2",
  "key27": "ScUbCvBuP4ueFS8c9Uu17Pcs6XqY8YdLKUexMNB94xkTbtiqHXWaJ9xrLFhpgzxXA46poMVEYKuafN3FKBPa1yK",
  "key28": "21m6dsWe1BJHVo8zNWiDdxDXe57MAbz792gWVzLhkuPijVjHMYksGJUq8d1DxECEKmCBvHamb3LW49ePZMmmDFaw",
  "key29": "4k8kbCJjcyry3U5RaMvLRQ8fTXJTxZVW5yi1ZC781tSxLHGqapFbVGCL9it9jXaUjHa68KnT2e18M2oLxXo8qMZr",
  "key30": "4gdV5gTN2goowVyMqyWctXM7kxcPhCtXSPrZkryFtQ656zqjcqknbAMbmbNqtG9YCCVmZXcPo8Qb6MZeWqmMT6iU",
  "key31": "2xEazmUgkhnucg3dRBgKfVEHoWkNCiRx8v79hCTmeBi88HU2TrtAPsq9nFdgs9imTFsZbKfD6cAECWkk6UyiH3Kc",
  "key32": "4MS7tmDWLbWT18KhK81jSv59JqpwXFksFJFE4eGgLHxuXEW8zzu452ezX3biodVeNLVbv89S5x33mkCBEh8JyUFp",
  "key33": "2LJZsD2qjvk8oHmRa3Th1Bh2jMqCzAaBnpM8WNhQjfBdPmLxxXk5wci549qs6q4NAw2kZoHC9a8aTcrbQXosfW1f",
  "key34": "5BxVPtonc7hUKsLnBp3U93QeZMhJ9hUkwgzs7XPGb46ihyeby4DmzBkBi1tVSBCjD5dtgrSPfyyjhezsxcHbKR24"
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
