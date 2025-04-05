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
    "5mFLmvw8HAMDR1ge75Q6XvaEEMYpjrGrhoXmFdgeZzBNufjTMfvNgfrk2dJF6hrvvHDLwRRyGtWUQBJXGqAvrS1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BTMdts3c24mPLCFs8bvDVEsVxoyt4rWLfiYApNhVtK9H6zFJ7ep9pRf2YbovCo9UXWJaUqHHUgbVAWcr8BKg99m",
  "key1": "2eXhdkzKEUYjzgzkK5wQAi84u9gfJuTAYmTNY2CTPZ4LpcvDryUQCS9B1GbwhpYRqYJNMvbmSyNLDYQK4WD14Kr7",
  "key2": "3Pmf7myWQUNB9xaVo9LYtS6KoUqESFUYsgo4RtSkLdDE3BJuENj2onCuJQAD2QmRHuSww1UFcxkVJXKK9h1hEMrv",
  "key3": "51eqi8at1wiQcXf4DBK3SfWxMz6q4YzXex74ebRVzhsef97WfvvnwFuMBDbGxjc5XBmNQ1xK8nYEybn9Cvjk79Ef",
  "key4": "39EtnbYqN9o6NKQ5REoFGPa5jQxRrZ1hh3gX71ynYioXzdj7MbsT9wX39wbEVLHsM3UpeXah49Y9Cn12xZyZwttY",
  "key5": "v4sTxxnErtS2jNJF27aF7ZYyGPjTUPEsfzvoceXvic1xzqvMc4f5uVU9W6JUbW1Cts6JBMznSaVswqtF2d6HRfx",
  "key6": "4z9Cjb98gN5tLtwm2vWjpbH9m82mDrcEo4DrJQNSNNnpNwD5313mangnovr7ho6HMuhEeofypAeA96tSkZnU38Nn",
  "key7": "2W65vW536wc7iApK7XB2W5phHV3hUJyiBpYwpXAsgyjnkb4M7ZWL8KHLVr5EosuwyN18E3wArhQajtdNHDH6Aves",
  "key8": "4hwGK1nxoLiJjx7ygtUDVgVACrLHHPiphQCxdNVS2iBrFNyXb7F1AyqFdRMQnW29MwMbGYVvXqsqBAURFS8gkVcZ",
  "key9": "4LhVtfApbTE32oWEf962c6RKBiYrs6gjdB5yvrAB2hS1QCrniXFWuyzyxPrHdGUHAcYRotD6An5ZgmUodwXXyz5W",
  "key10": "3DNaDhXYijiPL4mFN2gVTWUuJWamhfyi57JUQkKMnn8hQVYK7VdPjuthEPLKMea4y7eAaRMMgdjvGS8niuYxdJ7t",
  "key11": "TgMFWib6TvvdgCaHWpXjhe3GgGNFg68azL77G28BR7fhRC1VvNS7DPyaJCZg6bjNQXfo43hzANmTg2nUjhBpcA1",
  "key12": "3B2UbGc9udWer9aUP6DyjRu5Toa82byeesTN7WRZDa9aLsm7wosQcyoupkULAyCZAWfgvntB1C3gj4PqB6888L8o",
  "key13": "2iy4WBXoeEQMAUtk1KGx9JWykak5wquGg5vjZte8JkUEG5q4rWg8kZc9SFZfBnL1V4ZTNoap5UWGj5ajAUvJAKT6",
  "key14": "5GwVu4osohn8FEPie66SCH9WNgsqwUFNxbnz64rxozNErJ5y7pMJb8ojkzczTFz3rzSu9VmvnTtqEz9HGsir7jyW",
  "key15": "2gHZU1G1YKAck4tHSmJyBfnCxk55qbiPYAez7d3oieqs5uG8owr39HeWBz1zoLrWP5C4poxdBKcugCp6RquVdLfA",
  "key16": "3pNPehsKmCf56PqDRWBu9YUGKVx7ymSbdyvbKU8k1sN9qhucybeX4RjcKMVNr6T5p4yu5sRpwapiqM7Bn3xb3oww",
  "key17": "Dtx3DcBu6mAV9rwd3Uw2gkzk3eCecu5VTvsqG7kL4vm49NL6Td6YG1824surFYsRK7vBfQH7JUcKQ8rSjrEtReK",
  "key18": "2UnrWNDiRNx1fMp6HjF4xVRqqyEVgohMwQ2nkMPn6CT9pnnzeP2YNLzdtjXQ2Hk8tS5KoBB3YfKQVDVNSTmFBiJ8",
  "key19": "4aCoRNAHppV4Mn5bhkKMfYV9hTen9nJdafBDU79iXoPdY6oCU7xYX417YtjStWqi3cQq7UfwMkxfDqgkyNpL6uW3",
  "key20": "5wyoSdmLamKfxPESx45WDzU39KF1rvNTQm3RiRjvARLmCwerKZGNVrY3MZuaBhB4f6i1K6fbY7mHDashimXx4LeR",
  "key21": "afEHnxk79swUXA5MU8Yqtc89gNPCQ7KvdSmuQ8q1Av1VyxwreqPQjk3EXZJavJ3jmW2JbQhPmWmW1kJB4xYLFiB",
  "key22": "35zcthhETJyDBZ7YDFWWciWepoT8Unc16QfQVec7JeCZ8yzkxgV4aqoQJYgjVfGfLQTbkvHZjjFCPwNdzPVvytAv",
  "key23": "21pLh3NMMVy56vRb9BjbHzVGA6EXiB7477J2z6SNrFixYy9rFyRt9ELiFqyG4i8zLP9psah3q3zRA4wzYU9QHNNP",
  "key24": "yzKpp9v8purm9sL6qLsLv9pcmMqnWVzEMy2ckxwd5rkMXvw5BdnhR44TAB1uLD2YCMZcYwCMWtLUmFj1QVrB8Ku",
  "key25": "2LfhxV5nvjN4VSPzoF3RSWZvyvURbgfy3d6336TVeLVRPSgHFoLWmoXxD1d8hNtLG9BD1zLf3nSbbubbnZZVeJWY",
  "key26": "2xzyNmbuwWfMbZDpUuMtquJ7d5m3UaGdnGxvzqiFeis561tq7UUH5PVem3UVAozFZjx6jLrBAzKBkUd28dGAKtBt",
  "key27": "45wi3a812quWUB6Vvf7QuPvHrejwVqJGrST9HWzqMBEE8ye2UXTRqVLhW7pfoHmYZ18hDT9cuFGGB2cLbmAzV8si",
  "key28": "512VVBrGebh1NHXWbE8HyczV1o59hzafAYt3gJcSJAyCUL25AH2kcT8N4hfXHTt83iJ2BQon1wrXJmGkae5UZn3y"
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
