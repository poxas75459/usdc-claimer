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
    "5tX4tBZWZAvQCjeA27fd1Qic6B2nMcDCYnipF9UmNpSfPj5VB1Six2af1N2czrNSzrdSFhSQ9bRxpyGtSQpy4yHe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wS9dDdGwtzYq6y1EcFHduv6Kqq3VcGLj5VBE5psyFHk3GfxanzbCdRYGS3c2Htub2RtdC7yDGVSsGfTqNwU6DBS",
  "key1": "JPsSo6fT8MT8MhkfCHgLTjXAWuumGhJP4HgaujDsUhWqq5t6qt8oTzUzb86VU9ZPL9dYRmzsRb1BXVsJVnWJNfC",
  "key2": "4tTqePjhjcWAY4oBLzsfXyowNN4mNLu5e1TYirrvbSZQT21gDKQQzetoZKtn3FhLbtCmT38A8ALSidkH2tMNmZAW",
  "key3": "3jNkFdMTPwYwwxu9WCF91FWeXjkeLFuUijCCt3AKAHRXvhZXVcQgczENJohXbmrgqqWBRJ8bCEo1KGPa2mkKEkC2",
  "key4": "2rxWNxyUxwkqcePdgAbBca4HTVnLDVGMj2RcPt9LAuZsmmhNVxrVGAzVxcJ2WApnoYHsUcoHSr1vdJTyuDtCsrgJ",
  "key5": "rChtSodVbhCZYebpDU2u4cZeQty1zkPFYfCXhiEF2G8Vq7nKwkqFrWM9MkDjU9TSpMKSPW5Jn1nd6nJAN4BWXVr",
  "key6": "2LXJWZP7iHW9r6PMeBRuTJRuTmWuT4BcfSmRXiMvTeHxg7ho38qXfX9VA62fbs6ZV5y6CFdazDYj9aymFTwY7kDm",
  "key7": "1PgCp6RCNPm5Reip2QRL5EqkdmH8yEgWxjhydEuW5zyxuuK5qqYj3aLYktEpswZEGJcyjndKmzrahQk5SYyQmGP",
  "key8": "5FDeZBzpGNmZ5Swy8Vzqa4mmC3cTdgwWKfBk924pu3khK9MuJwzZXRSH7FjoMS3U6eYZ8Fn3ZHFXyFWcDzK9qFqj",
  "key9": "4tpFL11Wu5agzKQuJrzacNtDBwBXHmDKAfEiPaFbpabevQFQXS19LfVawiyW3cNsAAFpPNqBsn1m2U53n1dTpgcY",
  "key10": "5X1uMvqVSsrFWod4ksxUnA1NxcDXgRnjUyH827s855bwkBujU5M5m1xcheiqpRKcBXETVhQxrByQw61zC8Q8kQej",
  "key11": "3dq8Dt11NQnG3c7UgYhBqagiVvW9AEfcJ2uLkvGSybtkqNvZLxkh9FCSkgirC5HbGruyVDS5yDwFQRGtzb5UsV2Q",
  "key12": "5Mbut7971L3paD7R3JqM32fxKV3DzJoMnKKU2zQQvv4wq3NNWvJZhdNmcBQM7jLY2yqKJ7wwdA9AGk18Xx9dbr5i",
  "key13": "5FUtCWUxJEVG9tKzg3pLeN76Kr1ksdczA5DLhEz6QvWL43qiLigQYaSmqjxPmqdN12imvBXbHcmfAhyt8EPHimmv",
  "key14": "5FgsLjaBLkv1eFwaUbGwRL6Wdn8g2fZYhpjvHZRz2wrzqE16CxB2FUAm9WjAzc7BSCwZkJ5nx4g3yUTNRediAYS1",
  "key15": "5S41XitXwRgdP5oPmPM9vtQvVjt59n5pXyESs4JTmJzDZTxC5sURK8S2sLzXuDz8HaDCeCHmQagx8CHmpfsrHMQa",
  "key16": "5cJuQnYoNReM9KNExKKWuFuiRPgNUgx9QJUReaWe9WtB4VXSq2GTmMbxdJw4iaEDUmSX7LrWC9Rt8VtS8eBvqQFn",
  "key17": "kNjaKxpJ17RBPK4xoq4gJa5gsYwQEkBr9cpJUCtg7hJorZK6onaPmpBHQR9FNnPuHxPSRHc3BUvrLRo92dzmzTE",
  "key18": "5mDw2XYVukeSpTSHFWmD7iBHJZUM5tqhu99uB86GqCPBMuKAA7qZYvsUnxYxih7pRTPFXvxg8cFEKDTLuDQXgkWX",
  "key19": "5M2SCG9QfSo4GznGTnEouov9iFBAJBELB76Giswu6qXLf2cfoBAzkG6Je33xQZzZooyoCRdaZrdZ7aAGLVgPXhus",
  "key20": "25EyH6tQindneSgARe9enZsxZmUuhcB1aqye7dBGSC3kMb876fhT1W9ncEj1jhrNe6wAgTx7CYb4drHrPEo1A4is",
  "key21": "4iiZpWZKWWLDAnkUrprGyz1qhNWDbLQfTJdQM2Uz46wDZanj83yPTi8J1wsyASs4TFJYqzptaadZDikNKbyDHmqy",
  "key22": "41pkxfeWVPhXzvmDKQjvQbxFhS6yJDDM7tP3bTeUo4tm813thY96AgLdgYCM9D4t8zZjhizTKjpd4GYsL7cdU8C",
  "key23": "65N5MCz5YFdU7vqia9GiLHg9oLbV1rGZnzZezcqP2jc2QYv85CaM7TbJj7GrN1aqKLth4QpNistLUBJsU1nzp5ai",
  "key24": "47xxDww1hAzCEPcb9Q4N3VMmBLupdVjV7cKeoQPB7VX2yDqt85deuTfa7CCidotaaNQrwDufTQ617nfm4zreh9Hd",
  "key25": "4gm9Dshw16xuwdGBbuJFeaB8NpSJUhDAsh7JSxhAFNh6CzRmYAjBarmxu2dhfsd2vjkMjFuSnJirrnpcDF4NuHXn",
  "key26": "5GeVyaaX6c28tLqiKHitL6sN71kntPMJb7tNssDrmeDagcVZ8SJcPq5CrzxyhBYvc3RWofAtVa1hp9JStD8MFEKV",
  "key27": "YbC1c5dK7ydiAYosBpenGsMrkqMM9BH8dc8jzagQoCxERu5bZwfvv9cYZRCT1Uj4SA1Wk7Yrn3TJVuBa6Doy1SX",
  "key28": "2kNwXCdcNG7MmJAPJH5GWE3QYTxovTiMepjCqkjZsFHm1XyuLE5KgncXt8nKS2CkaKVf7DxH165qwsGpXCKdno8E",
  "key29": "4fcSfyC2uGNizme5c7LThYcQDBMCPWYP9UztnNCKaKU2UTueXyE9n3oi9DhBQLSQdrpfagXbAhQThGAqMUH1a8m8",
  "key30": "2LSsiPK7u942tRN3UKPMaRykWU8uofANdjxYJ6mboUJNFCWnM4Fr1jNrCRPHf3EagafQAwzBx8YjC8BM2gAcADau",
  "key31": "4KZxRQSVNUVgaehwkZvLNCj9dwDgEddWya2qPnqSpaSFH2JX5mcDLRzCV6XUAvdwdNzv2AEUjnY6kwU5rfRrTJiz",
  "key32": "4Nth5EAqLAsKfA9zW9puhkk6RP4q39kmRG1whAZX93o5mh1DKCkzDdHHgGSqXsp9a2tjQ9A6DqzjSd69oCdhM2kj",
  "key33": "5SJRiE65KhATqj1CcEyGBSkiDnfhewzPDszBLpwVFFRft4WafcznKrBXA72MZJQKy38kixymUtZrQ7AhvJ5zarFJ",
  "key34": "5ZtTzwF9itGC6PfA4zMVBFgU596vZEX5CiDz61AqtmksFV3qhHzHdYGdyCBbZjgUoKrBbrJFmmGHyCFDfBQWAo5y",
  "key35": "2owLDiaYuLUCD7sNwvdRQ6XyJrRoE3kuWJLLN9w9XWxWCcsDKUtquYMTAE29BV3rvykyUmvc1AbW1hfemhAMpfxm",
  "key36": "3Ga8bZDhcq5S2Zhwcn7y1CHQ83ZYVfLQmvQY5mrkCnK6T83yH4bgkaXCEMMzCpFZFMaSmjZsa8dbw7H33HnDGqMA",
  "key37": "SeLa5XW4tJhgDHoUwGz9DPbszZ7qdrUdkMzezXTWdf45h75GEWqsa9AcXumZBkQAKfrNbEios9tUx8zd8sbmVDL",
  "key38": "VeVBkAYcCNy2h8cCprzpa6gh7nUnCq93NYWq1gBYHTn51iw1F8aerW8iGtfLYhQHCabiYjR1sTfX6MoW8Hus2Vs",
  "key39": "3tzuWQ4Z8BLUfGWAKBMGv9aY8FedqvgFmXTyHeEn4uCWrqUvByC4dFjKgp3Ca7BudiUEcCmQnVibBPwUYVe1KVCJ",
  "key40": "3Vgq8UwF9i4LcSEP7br8jyxG6Jpzruqq69PyVGbAYzLdjpe5v5xGXxHDvB1fnpsYT5cp5ngFwsbxCf5o1SUw3cVi",
  "key41": "MXetiitQdFyEHyVf6epBB4GNSaG6paCoLMBCa4fVXraHpTTsSqUTxd7pxN1QgHPNEvAvbEoNx9KQ12oVkpVGKcd",
  "key42": "18GavtcXajpRmVvX8uFmSmS3CAUQScv5hdLjyG8jyzNSY8DXJbw5do3Uagr761HFvts2pkUNhcU21Gpom1qcpg2",
  "key43": "5Y2Y2LknopysMmwMmj1bHCJzpoJmcn3nRFFYNw3RZR67K1RGHJtEk7nHg6FbfeAFRaq2DdSaTZwFeVg1hpKbD5BH",
  "key44": "5QeY6NJjCC5RtiVhLxx4ECdfFB3vHZ77Vvscce5hJSkiSbBocJUe5SRoquMxzWtP3fKVUXrSpXh3bAKCoEQJi8o"
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
