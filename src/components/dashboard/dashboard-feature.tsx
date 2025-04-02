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
    "54UCno61FcBGCG8DaVDJQY65gLP9uEAA2fHsXJ7HjM4mL7hkNH3k75PCcRrHpY7K9CgoJNFWjRESHdMyBPoqmTgK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tPqvGwsMMF5dDa5bp1g2H4jHJUzd8r8zGenED99sn1enAyYJrCr2Nd4zzv45t8rMbMv3dMbavqXNyPXUdEYuj5V",
  "key1": "4tdjhdRudibqDL2HaovCEi11ZebijMeDcgE3ssr6ceJCAhni67Ey1VxgqTM6pvWTvDMSm8gLQMBpiTYzjCxptopi",
  "key2": "48vjcNF4k5fqvzeDnBXDzdFneuerfkxqTwXhHZ4sR3YR1oX5fLob8XViQ3HdyqxM3qfeSNd8BJrbfQC7LChoXTmW",
  "key3": "4yAsVGzwFX7n9BTsiwQugPPu5ck3wY9DZmqoo3MLcgPYoZmPXQFL5BsPb7nqs4F517i2pw8vcknZdgK7vTETTjqT",
  "key4": "5F81k4daBFg6eYpzsxecA4v7tMLn37oRDKUY5GKAVcHK8f3GzhLKGz95XUNtu5b36Tf3d5tg1fyTsqSpSeVosRRB",
  "key5": "52MwpDDH1owoRYRwSPXDFuSJG1eWxg6D21HkKzMxjWjkQLMbMs8ZGqxUZ9hBLq1MQdAE9vsb8Ruh1oG8R9TdCfRj",
  "key6": "htsQJHAG4fk3hprmRjxf5EoacXCmiid9a3niKCgeyNaWLDQhJSr9GKNDGiiArp7KEHRWjeqhjcMbDRgnz6vYmWv",
  "key7": "iNojvTcuWWVe2kgRpsdkUzUTRisL8o5UsSgoVjmmovU4tiFaAU5PW3eh9fr1m2MpAvsU2SsCBCRcjtjQpJVdAjM",
  "key8": "cfCBPbQL4Jmetkp6nNqpQ9QcZPcEKWaoYCshLiyLnDYtHhMAv5EJ58KT42NAQuG286UNCB3qW3X35p12QR1nceT",
  "key9": "58e9WqUKK3MFp9k2ewCNsZwm3Ldjc2fiek8Ncbu2TEMSZCHjSjzpZXDmt8QLqKbmikRZs5k3KichW6JmKhgxhJaz",
  "key10": "4Hd8Wk7VsBAf2VWASJubQyC2Db8szEWM7ATwXHJLWYmrKbo74pn1d7mmnNo9Zmc35ry6sdokmyAMLKxDtzWUmaof",
  "key11": "5cN4YfXpFbNTEWGTDXpPXjj1yEJLaKHYXanxyBtgHUQSDcrwx16XuiM1jkoJoBJq8UUZrvDhtco7hTneEo5nNcSm",
  "key12": "zbZoT2oNE5dvL9j3R5eAF3PqePsqmxzTTpmrATParfnjx8psys9bffJAJpSmurJ774edLE3WBp6fu2UgFUS25CF",
  "key13": "5wPy1yqJ31jM6CdJCcegnffFut4eNgLaTSdFNudAkALTjKTkA2c12vuH4jq7RbEfZrU81SxfvcvwGQUt4yug7zTe",
  "key14": "4KphigDsyFXcsnZyGcbjVMmV2SKbowEY7gU8nGmXppseLgJ9HWeuaYAdt4itzTUFL58TQcnkKmYBKLJ4KeDtZYyn",
  "key15": "5rkPcfc1QnZwz5v8z7qeLkrseSgPb8harTNLbMVt6ng7NwThDY4q6mACCYaLrQQ5HUMsFEiGCrGkFWK4KdceEf98",
  "key16": "5K6WE2zcahU74kR2ABkAK7cPVLy3Vo3e2jo4aTtJjXyJ5T2TfA9jKdAoKJTpAUvKViRUzUSoAsb5xcqtDa9T22DH",
  "key17": "5yb8NZLkdTBFzE4Dm8ThecsB5Bw79qvd4ik7vt5GmkBdEj9Z2VMWhkz8JMZLtjynh3MzjkaEaeP7fU5Siyaxo5XM",
  "key18": "5fyWsdap39cn3DKKYNazJMxZpsMXQcXRjCbrNUVtA4WSdHZAPambnK1BPGEA4JaqpwP6yGtj45WihY4jWm2oqTwd",
  "key19": "QuYyyYpFPss6cmcTmPqsiNy1SMJgJJTnNvSTSnmVeXwiyUXnfWEZEQXm4BAJvmJh54MhoWzRATeWWY6Yj5vJMW3",
  "key20": "5qaGnNRD1zEGkEdiNZUQVYSeLD7eFnXgAkWtUgiWx27jR5hdV6V6r6V2mKzAxQjPjNHnSobNC8wNV9UhUqamsf5b",
  "key21": "2Zzo68YmaLgGqr4yRxHt82KMQ1s4tEuGxAE8VbzwL7uM8gFpJjNpoCo5etaBr7tTEPL5GpJvCDUCjQShA5hETEHd",
  "key22": "4L1uNM6e969TP1AdjNXNuK3W3PBMpKEbKwLTvzLF6WESpt2c28KsYas4s3FMPWC7izNur445RzJ3sBypbLJ91FqE",
  "key23": "56VMUYA2STKuH58gNURdEwDq7nszoivFmubNG9UVKtXMWGQQTaEzbjENuyjgqDpGf2j2ytg67EJdaYEisRh9iX7C",
  "key24": "4DXhAibtZZQXAru5nrMiPSeVZfVzUAiqFV6j9c8fq7e5S9E7NFapqVBT3h3g1G3z624Lgmi2tFvkbhvyUcP36DeL",
  "key25": "46g9M4MnZFh8tQxBHHyBNdq6sdmrDuCdUewqxL17bDMSNcnoN5iTRrLNcYuXyCmpL3oP25NqpPbvMLNKp4VMXUpr",
  "key26": "5UTenrGE81e8gfGJCqjkshVjLvQeAjhA85f3dTzA2sbtKn8Pnyo9FL7scpmwNMFrBKbjPGb5h8qchG7eMg94YEA",
  "key27": "4Dg6FzWVVeEpNVitfEbkY5RCoTYRsgxobFniXZAvZSw2eQZV43pVvzc5DGHRD8jte4uEePAFzNjvSdE6aCvx8EMs",
  "key28": "5XGZaGqmUBtsazZearoJDQQidEk7xq4W9sv1DnXZ3Rj11WAAFQxMxDTU598q4GYZ5y6feawWedMZ4JLkmdqM8GCx",
  "key29": "54zJycKuHRUU7Avk4BSC5RDrbHqK3PwBeg7mBbTbkjSAG2vMnu4CwUPV26KG1bMRkMZDNVxz94Dqo6eyPuPzXWdk",
  "key30": "cXrgiNTAnUvR1QAusmp4LTBPwxHKYgrfpZhtKXwqBQ6A49hiHyea4fwfCP9GjEktskwwRU1Apvdoj7hDes7dfs1",
  "key31": "2SjtnhENHcCp5GjqwjwGaD9wvk4vsgPiaPMjGM5pyn6iqLPcM7iei8GpJy1oGJNu3wZyjDgu2o7KdqEWCFBbtVRv",
  "key32": "21boK9p75h9cZwVGBEQZmgn8rUgsyyd14oP9HPMC5NpcZkgwNYyeFJVuzZarX1QEzxzPqBJkrXHvxZg2X5UzrUfo",
  "key33": "3PyaJMY2JVH8XpvQHaupuiSPnB5nnkUPRy1zzy9B3nmZAMUCQ2QXcPxYUGMqUm6N22PtNYJ9yGnBborpxeCVmiPM",
  "key34": "5CJPB6g3ssz8Dxknom6vqReMTSJ93mBtMSMHaaKum2VSdh4tk9igFKF2AL9S8NGUyGAWAcFRLmotVyJcPzDou8at",
  "key35": "2E2XBguLTS6Vfi6ibtvPnv7mqZYfD8kuNiQaH4BhJcrjnJ1gEQakB3K4D1Fm8R9Kmv6CQ6tgzoybCxgMDRjydr9H"
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
