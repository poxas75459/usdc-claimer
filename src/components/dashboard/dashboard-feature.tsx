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
    "4TRpaiMnCwvSFaNA1a5R5MwosxeH1cRV2HirWBa2h86E9WvHoSdEmeBnz4nzNF1FK6ph3HgzFmeCdAPMMkVPtGAr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GB22NAvrSrMBvaJ6LMvHzSFdJ9h6EPVUkejxrLa522A16CA7TBbqREL13pspLjJd2vSkKNf5f2xGiu5XiTh2iB5",
  "key1": "4fQ6CkXdpddaEUmvAEUDRxkYfCw7ap1xuJoaAT66CygQCxrMJieg2k1yDG7jB6Tzw9tX9d1RC59FAR9xtjBPBzei",
  "key2": "3tZrWrk94pLdHeyGFUykHR7PniUU2vPBRiY66x9yFY1ZKn6gZYqRXMc12hsaKy1zF8jE2SFrUp1E7RpueGyyL7xL",
  "key3": "zHD5Fgtu6HEsdYrH23Dr9ZnNYAxKF2RPEVf5cMuoNfM99RNpAA8EDgVwN6rxyAsoUhKhhHua17dnc7X6RwXPU1B",
  "key4": "66TCPmvRAufdLYmxeTnzmu1hjaQh7kQaPgC2VTDaDWpYYgLBHvMRV8G5ha83kUwnNH7d6ymbb68uPaWMyJprcVFL",
  "key5": "4JRhoZEYtGthD6XwVZ1oxx2NbraFFydixJcu6tYdRUdijZi8YBJS35a7Gv5nocbLz8sipHyW6iPTzb9bd219udv",
  "key6": "o5QwD4YpmAnXdAEdhACEn5FxgK2pw6fEWHPmuy5xUzvgH9Kj9VaTXZFHM4eBSKcZ78uvZ1Rv2cvhdQMzdctFvgH",
  "key7": "2kqHcBkAFmvEXjNqeBdmoyE9iUUiMF9kjTB8W2pFj66omKKmR3vCE1vmB84g6yDAe9YLUKUPZcMBPZSBp1j3LBpb",
  "key8": "4xg1gftSHzvSG1RzgKgLYZpmbK44rRW6DC1JZjQb3g5BEgLXgxCi6bc2qk1hZc4t7of79Uoy5Am6qUu5wywqYaJ8",
  "key9": "46SPSQeAV8GKWeByqFgzDnbcB5EpgkxR7JtzHxymF5c4jAoQCTkgvhLFyyM86huyA5jE2TTcqP1aFjTnUtMURyGx",
  "key10": "5twvAsTH65aSpxzkf2uWvAmJmY6rSPUTLpE3Ms6E3ugQNMePyfD34MCDo3yW51YUwTYjU5TQiK2uQAkMvpz1BDS4",
  "key11": "5NAL44o21NER1JkT3Ap67pmmVw17A6uKMVGGnvYe24bgJ4AXR7LxFmQeMiYgnHwZcb6CRktiYpseAzCbZ7Tirfws",
  "key12": "66QGF91pjqqGbnqaW8vHPLp8QXywEvh78cZAvs1WMVX7NoXrdHXp34b15N97yCYSmvQrDf5yjSzRDZXuuqh3uZmU",
  "key13": "5GMSSLic9D9UyhrjPt5hGfXZRwccjfYPGyVtrkPxmjJj6pC3KPi4cetpeaDBZpS1x5EQB1YUwTACHvucCmQGt3m1",
  "key14": "44U9PT5sVBsvje4p85RgMBgHBETyaLofBHe4T3vrUqhq6jvm75GztqLmRnHSNdwn8qBY83LNtPHwsvEusMkwda1W",
  "key15": "dm2SzC4d18vA6yFCm7yVPW4z3LFDfN5kPrhHhnSMvB51KP3VYYYAL8JfA9DbtGFREfqfMAyF6YCjdUU343cypfy",
  "key16": "3rnwGrA6baGxVmLuyVHp2CwDN5XbmwAsi2BeP7UP9ZQfjJubHoBcX7aTAV1tq6w5FF5QW1PUaAVD3rWfboqkA1rZ",
  "key17": "55uRncH6AKAYe1NkHKtnJZH1pD1Ga55XVrLgnmDW9XoKRViGmvxd6T6nZfJXNFHLdwbMtpoZon64tcXCf6Sku6Rh",
  "key18": "54toYe7eRigkpXPzaYuqKMPYE9WaMU3cBfgHoTARrrrQxTRXUV74QojswLGmgskgbcjH8fWj7PNHxgAABynT2kVf",
  "key19": "4n37MtGAzrLjCghnn2NWqCGCGkL6BhcWmYTiBnSDjaCs5RHTETuTsaq7oZaox14yrXMwcY8fWGTWcBpmDLB5DTLp",
  "key20": "2wqZcPzQazRJAVSV5tf9W4yot6W6629bLCGiemNaNDemuof3ex3ZioTp5qf9nYBhd4SELiza2k2KoyWy9qAZnLSz",
  "key21": "vF9wetyzNesuVYFETfXmNkxHJnRMMnLSDWDGnZdp324iDmDUscR54bLznvzoXoWzr5gaeY6aeECRX3gtF7EXfLi",
  "key22": "2VuXv6fKCszBA9zaWcYSTh8JTh6ATPtX7ag2y5iD8fjjveACLSQ76Q8wTnzQapJ4G27tERt2ut33YKYBNPt4ikp1",
  "key23": "5ZXjezop7sgWgxKfDR2P4khZyAmFrCa2a6YHJjpPceWZszdBnKqnK2wHjDBZt3EaUAUrr2SrJPRhXAt5vX6tk7Kd",
  "key24": "29ST3cnWC6orupD5SGDrqZ7qvYGEjaMXkLJ3XRK7sKWzsB2j6cSbDAhLJA2Xw4mXQZAgcix7w7pqbUNYR9Ff9TJA",
  "key25": "5DQsMg3oUAyBXqqChT3DSBp1Xc4aNUrjuE9QATUKNUwcMbBkapqMGxpHWBMpHHPNBu3hy6AT39fpYPsUxUpCTepg",
  "key26": "4imYVMEsQ2THLiEg4USFwND27mzU7EWXUoZ4gNtcLUp5Myz99aPLkYYXoEr9AEoS5gGTHRtykLCXK7J5Nae3eJH7",
  "key27": "61ATB7a4pnCZ4n9hJEEVYJQqM7JZT74DJhxx8AqgwoJTvqqNxdxgumsVSHsKAuigST9NFywaK3Q5bN1nYtiCddCZ",
  "key28": "3ugiMXAoqBDyY4U126hWEAtuAUQ6ryLWyuCeyA8YFNEGiLmT9L9HvnmHTmzKhhVBtaw71CKT3qPFaoF4o88v3M3E",
  "key29": "5k7W9QQX4uw3idPzFCf2FUFJc7r2GAq9ytFJDjf7EngmwiVakJrMn82pd12tXXhLoCoyTnnnBiVpeyzCUNLaTvSQ",
  "key30": "5BiGdsrHnTDRkVvYaFkiPekBmDzGcZcYNr78G6oFybKP5961k2ogW5GaZb29Dnzb8osD5zcv11h4Z6nWNU1U31kZ",
  "key31": "4QM5Bmf3LGxVuDysEzomVCto2QFCsbVL46DTwctjAVk7jTXg75eE3uYgHJzqh1Y8yo7jwwhepUTyakGMMJmz8Yr9",
  "key32": "4cuW9smcbz1LW91Y6Xx7jeLnQq8wuVB8YJ6RwgecVEhbejgKW1aJcc2C2Tdh4LUYv59opaVNc6GdaLRm1a8rBmLS",
  "key33": "3Qff6yGxVK8zULPr35d3HhYFBJqTPnyyQhhf9V6TgjjqXjx5LzpB6yDYQ7qs1YrE1N3HEt6vgjS4QMURQiZusRfh",
  "key34": "5dMQNxUq2qEqDnMqSdMzeLNZdnGiHihpv7MuyCDNLvBeXCKxa6Qpk8iH445o52D4oKknAFNa1PHCkd2gqSEoa6Z8",
  "key35": "3htvezfc3tsLQsY4Vm3TYy6uzqBpaCLATGdpdWhugMJ35RG5hx3SbTE9ScSfAQ4Gz8pbwfpuU3QUQzL7hh1DHo5f",
  "key36": "64XiPcQrjzXMwL21uLvbmj5k2NLSjch2TYAtzwVYmZC1iP56MqahagkVfhpLyZqR8G3pEH1KeoyKSb8MqnoaEPpZ",
  "key37": "65yH9rpabw1F9VrwjeJGzpoikM6WWgkSN4Tc29hUYhstzUYvxZNt52iaHE3KvrY3836VCbzJHgbvhM29YQsBJ98P",
  "key38": "4cAvAAeyAurR5dUVF6uvmBoyU3H92gRaX23EVvN9NA4XZ1orza9bfHPeH6JNzCn6KbygHmf8k93SDxL9d4keEFo6",
  "key39": "4m13r8bv1ijmcE6NVvipEoWHCkbyu2Ue9UHymWMv1SrUi9XsCYGnSJLE7hCiQHuZwgM1pUj7U1ZkhdjZqw6uuzjs",
  "key40": "gua3t9R6SsNejnMhsfoSsUrkzBiwFxrAdZHbRmnGsKMb1nnnX7iH6nBfcR7URcpvihLUiPMpVEp3UMpagG39rRy",
  "key41": "2RzT9it186yJY93kgP8ND5Z4uzoSoqGBmwS17EG7Fx9J9RdE5KHqSFXkGbuoyZ8oZx7q74kuJKZ6NtCmwTwuH9UW",
  "key42": "5aXJ5fnjqAV12HjKczbEqcqfqhoMkwp4YRCQTVLEdxDGKoFTf69hRHoawtaWvH3YEEVbSyJ9mwCxrgL3RAdjS4FE",
  "key43": "2MHEcArYVuhWPCXcy6txgJcNhRLuEpWVowdDXMXN5eAiVrFQRwoYp1fRNv48LkC2YMeoSpaNt8te7pK8ozfZFYaQ",
  "key44": "3hzxgHq2h6MUxLvU2JSTHmkjCpNzRbQT83vdYDXJVWMn6qBEV3wLnBhpdfsVsc3aVyMyKLQdUvpn4XaGGifqsRJZ",
  "key45": "428MwtUYEaD8y25mcbaYGDgZgB5gnvqm5MdKxZG4MsEv2rFGXeGiQFP9YjYaWGebwM5zeS2CD13iYE9RqqWCMCCF",
  "key46": "563f7eDJNpvnuufezVJPExVuFUqb29LLkR1x7akSWEMSrX9DJ6RWraFYZRF9881K4P6Db5Jp67fv4xU5ZbSUqzFG",
  "key47": "5CTzd61HYKcc72NFqy6KUbNDdxtUcG72KHejiPToBpGG4MjWCHaqCdpydc1M2X5fGUF3oAkqhBYgd4kkta9UVi4k",
  "key48": "4H3j7wt622kYSUGkqnnHToxg8RrGL2PeBx8ZiiQz51t8svwo9xTVxy47ooUy5BqDkxrP8a5VLNMrAbgwAkmFwWzT",
  "key49": "eBczY1S8uxHcNp2qHq8DCJbXN4863M5iPM9kLkHRBebbTYxGzoNQSsJcsWcKBjPdAcTkSLkAcVNBdGweYsE89gg"
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
