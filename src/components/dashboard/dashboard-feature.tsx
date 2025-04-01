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
    "4VvTAaix2nh2SUkJ7QRdrGmtrLAaRqVYZpUC8KaQLSwoPr5kjMXiBVcwmZPNqzMFiziaxRi4cLo8PriMKfFnGGT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dCry89SnNX8v7XKp3D7tKRmD9SqfhH4VXhin48c4wsqgqB3jLzkjz7YkhtjCnuP1BXMV9paLCaTQnABo3huYbT6",
  "key1": "5M6sEj2pY7i39PZ67mzEa36qghSQmF7Y8NvQAj7FP1yX5nwAAT4egp8Wr73rAdfs499vvrg6ELBkjBjA8b1dYBx8",
  "key2": "3Nm8ipkp45oPBfbzfgY595aKkzMR56H3oX3FLDRHLky4YN94jEaCXhhfPvU2eSsvxsaTManBrysKeNwbmiRY22DH",
  "key3": "5sZnjeqdS8M7LG79nCyRoSkDtgB7NLMtCmp7EoELiz7Jfos1Q47QsDUrMxZWV9U3i3hVCgVQmiGNwjyNVdi1jPB3",
  "key4": "55EPbWF3Dqf9EXjxzDE79qnB9v1eK7GWXsLMSB4xpMEU3ktWZPTBvazb5KD25Ey2zrDfkpoDmfFYJ8TZuouXMdij",
  "key5": "4uM7s9V2WRuGE5qCWNwmywJKfdZhb63RqsAv8XK6RHLsWSYEHeMBdFRc8XEKy5pnZhdM5HC9pkHNTJdb1UfdMYCz",
  "key6": "36hweFbhn4dUQW3b7gkGWGdk7gJdwyUVZChVUKTPKnvwCghuCCiXfTWZ6WwSH3DX7e6gpkWt3RjDSy9dfFsi3DoB",
  "key7": "hLT6ggfwMadEjyK6VzbUnziC13yvorh7g49qtSkYrrXD6VVfZXQJT57y887b4p4Gmxpb7Z9z9iVpd19ydRJtFS6",
  "key8": "617CH4HkQMVounrd257U6L5AqTtJ1b5vEjBtPGxy3dMKrimEWQ1B2fV9PaiNsM3f734EoTnG7ng7GJzojTFGVh1a",
  "key9": "34RZt3XAWyZfeHykn2pV97DfdmRbEPmSXybLdSdQk4PAkBqZ5dQmQvaCUN2hjcgZgAbBRBzuzfagtCZw9SEjqfJM",
  "key10": "3xdG2otDiU7cL74HYZJdrB2tnoGKN2KhEG47GYrxSCY58UwkvGVkxV6gQUZickTbQEGdbPMr6R7qE58vdu3W2gsQ",
  "key11": "5uQjYmoE36YZn2PU67ZX7yCjpfYyxCXrmWm54zQufifRg7hYNxWyvcN2kPz6nk15Wky4FiDAjdKmXF3B4ZbarpmT",
  "key12": "52EaUQWzcwtgd3StSHrviQV6GDMEoEdK1dLPUrnAGGWNqwT2ogMLrBbbCinivKxaarWPy9ybMrwANv3QqF8HjyY4",
  "key13": "3UTPeYkBzN19QYn2S5QvDFtt2TMQvHPQEv3a3323hooKvWN569WwzoWc3PPeLBA1dGh9TthzFVd5pgLTUWRYHMpk",
  "key14": "5nFVT1wS6Wfc2H2wb9YCvw2dsC8f6XwUNT6rZY8UQVHAuCMkrWjM3jYyrCEdLBFATtjEzRGJrDJoT2V4yj996p1E",
  "key15": "5yU8uv6btzyeTvCHoW4mayDJWwdP4PmSr5kG6UMPiCLTgM5nksZDRKeL3UTeNjqj1sizSvwiTkWFWarDvPfyemfW",
  "key16": "4C5PCYzf6ejoPq5kzS9naqUiN4NJooLbecK5QqU9mBqcoXaH9gYy2qHEaLBjqDWDAuTzW1dWD56X8JvnSVv4YzLc",
  "key17": "2ECaibbNS5zkMN4RKJz5wjMKcPrXaGYfEvhiuALtAGmNhmth9frjSoPeSfjoGtznaypA642ywxHpQNk1yQoeRW9r",
  "key18": "5mF19yHWAozYWgrp21agQet86nmQXRaUpDFSiXpQAYBNN2YcJg3fZy3VL2mHhiqvosy8iQrkfShTg13kCrqUdb2T",
  "key19": "4ZTuWhZSMLineeHj5nszHG9rXuw9P8U8hCUVb199s4b4Z4ReNSxfDgGNfW3ZnzrxUxzkpfaX4vVUNM368Vgp9kGK",
  "key20": "3VbdQs7GeiDZRziXHn3Z14v2ogwV5qqjdkMv4Ex13hudTeYrrextpiJ1ZSDPzL31zT5eormNinodp9wTS47Xcir7",
  "key21": "5o7io3o7Td6YRrPsbh6X3MHxsiFVUBgJkX7zDo4hyCf6oW8PYUUrt6p9nXtjZuV78hFsVLiJUFMQGKxtgYiTa69s",
  "key22": "38gbr1UKiLVa4kaXWy8nszWw2RuYCuf6BibCzddkRidWen6bnLXrBiX7FuMFRQCuCqTgiW5yRzWC7XCcXqnA3q1F",
  "key23": "3y5JGF6EjW8QccMyvLPuacnRZdD19Wnt1x3FDJLfgLynjr2d3W1AMfMqEG1PhmWz8YMx3kQBt7CMyGu8TQghBZec",
  "key24": "5NcRZpET7JijZxm4gX7cEziq8ZCMTQLr7YtNbTNqprKMG22jmJMxKiaC1zqt6W5diArLoa6YiPRJWop1QMWNnqqy",
  "key25": "4pFyFiQeiazQ378mSHQErHMKjWtQEip2ShvQ8jHBBMhsSXLwhnguKwqKYgkskkBfA34LrWxjJfujdrg6f1EhPZD1",
  "key26": "4sHZQjdNYtKigvhFmCEm3TVs3ractu2vyCMJtomDWN1jLJXQWarBaA2Hya5Rf3dY39LwzsYQQ4mdUB7e3rZmCtj5",
  "key27": "2nLqdJ827oSKNVRPth77Ju9xC28gRGEo8VMz9tcnQgwDtW15SwEk7eewo3eLoj5kdUArKyFdm8mCkW2TRPYeDWY7",
  "key28": "2anjTV5JzxQ4jnBth4fo36fp7di7NbEZZvmDVWXz5owCintGe4aMMaANuC3co3ASHwzptHmkAYuMWAeGBcPikoTq",
  "key29": "2JFNP8B1jHJTpEfdAdWhFAmopwp8NvxAiKWCbkxpNy4ZR1aBr19ZvdoCAdbir4FpSdR2yoFpdeDHDREAa7CCjfyD",
  "key30": "44vVSvmoruLV5XSAGhzqBqNoYb2nKHXyAeTXvxXGjBhSsW9eEgSy8s3rqnRjmf52ZbmoUr2rGFHxsEdb53kFAeHo",
  "key31": "3DhjF2nRnYNqWizHHKG5xsnjSLNJ8HE3HEXkqt5phjcDPmDuyErNk6yKgaXNyyzKopsQNRnU5Hs3YXMQBNWT2ff6",
  "key32": "5TM2iQZsADRD8c2xHYYyuLNasXV2E7kfXGt2ZNkUvEJFQpt74dTzmjgiqqHNQKzb62XakM8Q1WBGoJVnyJsW42T1",
  "key33": "3qnjogzzpmNVpUNvvHcoiwER7uXcCth3C8BMW4VefMmbVwiJLameghaEDRJWhmSWZVQ5gQzgQW1gz2c1hiYkVvLY",
  "key34": "3XkH4ZdqWU3PcCzseXiZWqXDVgxLXcCmrdtg2afdLyidwcPABqmxaDR69Fdd8JAfz3nNUba4FSC1CC1PrWiRpjrS",
  "key35": "AVRP6oidTQiEJDrHadG1ugF1ZEXHtNfJzW3HeavWLUwhsG38qGkDKVpRNNbQU6f5EHfJscHfvoZfRgLbk4Voe6J",
  "key36": "3sgbpPR2gT3D6iJ6WQiK188uk9dJpoSBBfyviRvgAokTUcyXYwuvrh7bDFP8hWREta52bPcw9ruUHeJ3D9D6hZLD",
  "key37": "sQBeTjAqppqZ1qeTUNJ5a6iugjN3bJ1FaqRAWVwZQijwf4oEvasDu1zc5bMnJooWZDXoNHTzv4uhY3HEMk5CiAa",
  "key38": "2yCpqijxvVaTrQAQ4qfryLGBPzzXrAWn2iTp88TAcVLJM2j6nGkKU3gyjzwTAeCvy9EGzoSysDCswZDEZUFPoorw",
  "key39": "3XdoiTmDPWmjhaEn5tdvNbJfpF91F6LQsJmKwKkcijJxBmxSdeY6RxW5vWV4ysRJxywZuiy7upkZHvnZiMt7JTZy",
  "key40": "XoNnvGtL6MiEiQBoWQsXWSZN2BMgYd9gWHer4HETMNmHx3Kt2bim8YtLK59LeEfD4izv26MUuJkGui5ATv2qc2E",
  "key41": "53g4uMZL9LbqgM3GCua55FQg7eamLYsFPXWHfu9U9yqPmAVmmSKsbTRGPcJ5HBxVEtK4PXZbe2uknyncx2q6KL4o",
  "key42": "5ZMSNpweDx7wGWKaVVAQ4ttqkB9MoYRwShdH3BESKXhW6ZQrZVqJGvjzMwMCKXPEf3MScpC1okKTLQsDKad4sTug",
  "key43": "oQQNZBkc59GzAmA939FDzdkLJvoxTCg57wBSwe5PibPPwqVHHopF7bYmjuwSwj4vwkRuRVjs4fwgQcMs4A3b9eN",
  "key44": "5ScHizc8nxswsqXghwDaJzfyXTY6Gh6XGcUL8vTNBP5VfPacQV4n3FdKTabAhXb6t32EvrLb26MiK8kmqNKxkzuU",
  "key45": "128UY4AvHnpAtyNv54Mo19T1jyhPxP87kvx6EDMv1xcHvrGQokUxy6ZwpAyaLMCZMEBZyWd6hk5XmvRgCwsZzTaw",
  "key46": "8cXFhWtdo2kJcBcoPJ8dM7S1h8pr6iTifq4c7kN64uBd13Quh7SSpCepX1bTHhXAzfLvXtEWTvk5VFZ2vjvGz3d"
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
