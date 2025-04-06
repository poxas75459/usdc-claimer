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
    "3iZweBwsGsf86CB2grzuwm3uF4Fia3BtLQiv3G3cKjKW15M7UbomVSdv2Spyn1m7pev5vkxcwzTCufDMpNSEJ5fR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kWoZXNQ5KfYrZrm7De3KYtyxqZsSEtPhiyMxg5W5ZY77CWqBrUifMJoLiEFPv81jDo2iKbZKpdiffhgqExHzTxg",
  "key1": "2S455nUG6ESU4thAriSUSd1KBJaGiBsdhj4bBzUvCZSkcSNP28kbwkEZc1Luv9NJePS89GJ4M7GNN1zLwnzDNTqy",
  "key2": "3EL4TTcniK8LVom2oZsUYrMkrSJTCLHGHMwK93u81TFYdqYyLASmwsQfWrxnjBBpmDY8LGEP3Mu3eF2qrpje9qh8",
  "key3": "3HWSBoSDWTvFpxUNsPySqU4nUGhpbhZCQUZrQRFU4wTq18PHmsTSqAR7NYWZoSSzYfbvNyCTnQnmuvtxJnmZJPTi",
  "key4": "4qMCEzLkcTLkCDUoN17RwNfEgSypF8bBC4aHJ6DQoBgKL5hApuLDkwjUBVKCnU1pRgxJPxphgEUJSvVz8weSLSXu",
  "key5": "4s21KyNiZYbfMEcdve6GRHfYMz1QDK3TcusHTMo3EGWhFB5rZC1pxJqQxJTy2r8Ei6fPxjJvJs3Wa3cBWoiXuhAJ",
  "key6": "5sgFKvXEa8f3mx4ck5T8rdWj3Ar33oQ4tnexuHrZm6EaryYDxTbcnpFWLeuBA5T71GeUVmVWJnr7kGvj1zzHBKFx",
  "key7": "5hrSR7F8uFNk7gL2DMwxF8kbQdbdVkD5XqTQVoErbTdfGTKqMJkVL1jRAk2ogZfm26TGo1utAE8NKUCvfNaNFKgZ",
  "key8": "4GjJ76963Nf9objRuvSnWpSBhR529uvySfTASJm98wQokYob1oTrD8EoVmqmEYyAocMaXSca9JnxLwSSP5gx5DjP",
  "key9": "23dXfKt2WP3fAkf4VhdV6ozPD2tdsZPBhRNtSMMV6ro5x8FsKbNridsgqz132i4KzeMfnmRDupVU6Psd9Z6hdLZ1",
  "key10": "3CAqLJHUJfpBgNy4bteJK7JCf8qsLYquLsVN8jtSfnkQ83JotNycPexsCqKg6rhtYYj9krpfZVUQ5aGHLfCBhn16",
  "key11": "5xdRPcGSgHg2fLNNrEeLSX78j6BoLFQCV5nTD2mk7Uncp4ZHTLVuCu3cLnFpyduyFuYh6TUCXHs9edTAX8WZ9ghY",
  "key12": "ETUrjeAas9JqBsM3xAcDhcTtvCcLxp3MoVS38JDd2pVkgYSuxuNmsCh5Ufehz5asa8d3yot7gaB3NtBrcYjPX9K",
  "key13": "2wYtn7ZEWQ6iHLm49meaGKAem4YCpshXDNEUPLdraXbzPwA9Gnyx6164BEm4aqEJdfkA2nSFWidAgvz1XCthKiXq",
  "key14": "2ZbktNNGRG4n54yK2vZ2AfavdpdhD8ATKFyQWJTsWbW9AA2MnJAH4pbtefBuw3n68S5WaXRiS1xzyy5Eeaox4gqj",
  "key15": "5B3CENyYuFX7w9eJZKdJYZYvAR635c5aLEFgbpuF88WxgDs2LXAjPUo4j7mDBx8HJJg7fokD95LYkKF9HUD2oNVw",
  "key16": "55XNAg1YPxSVHT4j8zgzYvzCtwGipHBpnrYR5XBJyY2X2hDtxEY9cyzmTHs6UDQRpFQfuJZNZiSiC1VBtPXtkEan",
  "key17": "4yTUjMQDc74PLmAo19rVA7t4GymYhrjDCJnkWVvv7J7HyydD7CAr3zpg5gQWY5oi1G7FuBMYEvwF5MR8fAFbQwut",
  "key18": "3RRQrmw6q3iema4jAsAciBH77tnTVgM71LkuXnkNKEUiAkWpDLHBXZBt3D9XVmytphU1B1PC7tGHqvX4mvbjnheQ",
  "key19": "4Ab7sctdE5J6yCUb6e49nZFSZfgSCMYbtwg8tXUt6q9y4886zd4hauEwAXXdu7PVreunSFCVSUEkhNkpbJVQsBDm",
  "key20": "2WLipCkBM6JKfVhWku4X3tJ9H7zLMbGHwp21L2iH7xScB5miYD2meYDbxYADb1HCdm7Tvzp3BYs7x7LaEY2KmhAf",
  "key21": "PtgViNBf2k6gN8RwVDMszDm7HzTr8tzdA6AtZLKrhjF4NUBwXEzkPBA7VTzSpkm8z66Yu382daC5PrXH463qPMn",
  "key22": "5mZQAHgLYTnGJgGuFQLR8aEtaG2koyQwWKbCuqG7D4uu7ZwWHWtt4ff3hRtojuvePipAD8ryh4S2X5aPuA2C3Mhp",
  "key23": "5jPY5Bs1RTHmPaaBzVT611DHy6twHsbRvXi7dL6cJHwRMC49zpc2fCbsE8dwabUBLZDc2GixTNXYtngR6J8PmpFu",
  "key24": "5qVB4S3HqByVpB4bT46J5s8hnnAN6L7VFvNvCzBPjBgvudT6QZ43BvTknzqX7Hx1vAPUFMnrmmDwxhnC1qTgPFpU",
  "key25": "49d8ZXwoFFqdMGinv7N7tDXmx3DW4T5rZFWpbvUMEbff5wWVCqXN86rRuP7yx5odVXPUFLTub2Yor9PrBkNy93UY",
  "key26": "47xWXi3pUtufmt1Mf1evzjYeSVawJzvMrxjeQbKkFVABrjGkD9ELg5EHNDc4QHPATNWxK3Fe33k5VYRY3zg1SekC",
  "key27": "3kwjFS5hqXz4nqWpt1SVto2GkPMkVW75KnZ5oxUsu6ADskBZn7TXmnvWoevEiiRwqMpMn7Qozvx3GxRpTuPSFUdA",
  "key28": "cTp8jLMAkJfH62UPeYn8DPk7KKKHsNC3HSNQpZmx7y1e7ksPQE5byDt42Z5Pme22K4GgATGDHcJ37Y37Zrovwqm"
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
