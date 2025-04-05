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
    "2riMFJwgzssx8XZptmgrTAcHBPwAbCwVWVdmEGN12kmFLCFxMaF7DNT2hVuD1YQhC6CwpiWsj7SanVDgwL549QjG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kgP3FnJnAKGGjrJxcbN5WKuEGMihaEckc6NqX5aXzvUVamBTBxpqo1e8buNKDmWE991sGxf3WrgPcERF4ABwA7Q",
  "key1": "2DsoNsDn4bS8MtTht9deBtvFTe8cchEZzPvonYFsXuwvG1PqjpE3tk9QerpyvZ7BQAxmrqNwtj6HiEZm3X8mrvG9",
  "key2": "2v9b4z3QgHUFygAN6PejLEJr24FWnjVi2Ye6GfBH8MbatBA75sAukE81qujPwu32FVdsDUCyvTRu5XoeE2igG3NU",
  "key3": "wMzBtHshAMbvGG11Y4cWuEjAUtvoWe1vAqzYGncvfWh5QKa25Ch1PbZYNgAL1PyGtr5w5nwtFGpze12Wvu87VSC",
  "key4": "5tWeVib5aVqaymq4sa8pWqGadfXiuShWm3GgpVdRKwDra3HHXoLHbkcXWnHguTcu9mvrxZgRR9FsCkChPGmRQprD",
  "key5": "2hodiVVSUXEE4DUt7bsyjyWGkQbHCJ8EWc97F3FgBd8xbi2j2sTNcUELiyMCevuD8JcSoiduzUqcVFwHPZZVgyxQ",
  "key6": "2nsgc5Sqhnx3cv6fFg68poufaS3hckwaoabM3LUtKrRzJW53bPRC8383uwytmC63wozhzsgLvEMvV6twQXJUYdvr",
  "key7": "5JRV72f7xkKbv8g92k5BBBWd97Y7Fba5Cg4tk5NUq9VLtT3m4kLBiWfGDTxsTMvcKYN5xeco2XuWYQajLBDugQ6i",
  "key8": "TnMEHrAxfJkan6Ci5J1bhk2nsHQTzeG6UUF5dnhks6Usowz4cnYHABCBPRugmkfXyowramV3RqJEaBo2GyJHG8H",
  "key9": "5XEYUWMM4ycypRoN9EgoPARMztfMaenD7aMD37v4VDKMxPLFtQh9pKAfZbWDRqX7a31rZYo9b4stCYwpfropG24X",
  "key10": "qWRVS461LGWUzBAcPgdkun8hHWCckoCaaSgmtKygnuQsKx8mWC9AP5tBzrZhN1PEBAZZm4WsXEcGBgQHUs1KVdX",
  "key11": "5TLQso5fHSL23mUVuYHWyxVRZNtyrPf43ervpEb37P8fafxguNLYjWq9bEuf9DHR6TWXvNqShFmBPXZGXtB9SdgD",
  "key12": "2MYmDkX1CWGXwHWS92XwpVFeMpWYYAYLpe7tdULwd8Xyo3JTY93CGSEwMLRxpvkgbFzGKPYBqJvsUKLfwUXeKYez",
  "key13": "4xSsckifD2nUUPcdt6bmKnMuqtLG2WhhEB6ctJRha5M13S3u4ySoNgCqyUZfpLA6U2xAxNaPRygYR98rZgGzHSHW",
  "key14": "4H8AQbzSosr5Dinnon1Z36GZbYRtdjJrc8RCF3t6N57eHWm5t54fiJbx1J1gcBNHccE8AyjvaUaQGBVMwLaNEpYZ",
  "key15": "58dyXCdVjR7S6GyqK3BLte6DkatFqF4NUZrQqQJbHviHgacqcshJm4YqeQzG8ChPEXXiwEpUoLgkQRgQEVm1jmrM",
  "key16": "55n93AHxQ7KRH4XCVcVbkUfY62fAcRJ4GEhsnEiB5QTF8HWBPFsPQTsGgGJMd8cxv83k4f5KEdjYiM4T7gkNF2nu",
  "key17": "2NBwfVtw4G1vkeQ83P2iBg4yi26yZY1TBWNV8kLr2o8bN2nmdQqXrhXHUjMBbiz2wMQzo4yusNNJKAg5sZHcoAUd",
  "key18": "2KRNMPZD7TtViGgZY87UTu4RsasPZVDAnGJTBqKD2ML3T1F7JNa4MCxLoe8CeKkEoicx4KJp7xbWGc7RU82cwkTx",
  "key19": "65DERumvvkmqcPpjn5D5RnZiWkZve1377LP7dcbUyu9QeaLHDvzqLBigZzvhJSQkPZNhf2xVtQRV3ASPZqjottQu",
  "key20": "dMMa3UuvGvHHN7UVgq9mWK6Q65gfmQGHVgA3Wms2dGwFFFufBKWzg42Hyyr454EXPgMZw1rxiKS3KTMTGiWB8yp",
  "key21": "35e1uMxA7bAFTrAnTiQrckNaBZCnoSx2TAUBwqgskRWxhjVc8r4GxQGQ9ChCtcPX2hLPfecUHTnDtLdSerDXmNsE",
  "key22": "2d47SMB3Lq6yi7NmxjXhMUvrJVNuXz7tt1vzZEKeZE1ouQs71AmCJVcAGk3xTy4gVbvT4W73Sh42PhPRNphrf9jP",
  "key23": "64my2gBTPAeBGhDDxSRJhqUs5dPKKKegAatKUY1V4D8Y11eeAqTrH2nZy682SKorE85eiKqfBs6xuDfEmM6Tbmq6",
  "key24": "4h2igBQ9V9HEyqHfSXbBShkDKHi9ECbszsP1aq5G3s7DHmKHj8r3RVkVpt7JAmBMj6MPNoU7dUx3g43woSKHia4d",
  "key25": "ksHomgS5auffoQNf4ppkLyTJ4CGP7taYtjNeNGZqJk7y9SxMa37MPG1VLCXUmuoEhesTUwxSvQNseQhZv8MD7uV",
  "key26": "51AAYqA2PzjTDCLc7i8SWRf2Jx2yXEKFDp7BNvcKYqYB1npHr4ZXchs7RoZpLUeBy4P1RX12xAmBU6zk4PfzW8J3",
  "key27": "4rQ4yREgGpR3RBuKGFFqmBGxAF9nFx9nZJ4RwjehsSugxyuzHmJKgcq4Ms8csHe7U8g9iAKK365qDisFyqKUfJbd",
  "key28": "5UWQhmCy5hEfPtA5Fgsrryvn4r3ZgyTo9SX1b18fpWFeMCj35Xp53Fz47vee2wAkBX81j61hz7dRG522GuTHTwqn",
  "key29": "5VhsBefTjKtTEgVcMrCLfL2UB5S5oSN14xd7Mfwp7x6p2qrKWQ5wGLgnz3izAuc3JmZp8RnrRh6vSW9xGx4uAw1L",
  "key30": "5C39ZY9sFhvQYh63NC1Wk2Mm2YUkaLxN4RdWa4K3a9vFmPk3Nmq29u115nSAiajv1SnzmgoR1DQRePpSFbTGwUSg",
  "key31": "5uyrVMDh5XuKwGVkVBzRfi6DBng5Ubf59U76f1q7tCj1kgWaaoPyZgWa4tnfQRgkCzyjbWzRj6HBf75Msv11NVW8",
  "key32": "3vgGMuv5R4EeSQRa2hKvG1j3xsKW4m8FuNmqTP2KLTE1QLtad6VkT77JjF6qnwve2c11WURFqUbPiXTKoG4eb1TY",
  "key33": "3CVCjEvENfrBYxxrtzo2stnZC4CpX5xnyvu6V2avmhFSi5T7vb3MJRMd4S7LAtQwsNfHLS8sbZUhika65dmdWxPC",
  "key34": "5REhraG7V7gJh8GbRzVLFq5pGU1fywxeV8YJdB56cru8SwKfWDs7ZaGfv86Y55EJZK1gr8iYi6nme4xTeHS9ZwTo",
  "key35": "2Xtjn9sRjK2xSQXBKXu2kq8RKauhzyYz316U41NGz5StjmFWj51Sj1WzbQp3FGsd7mqWVdto4HUu8Aw2mAwEfiQX",
  "key36": "zLM3iSHyLzPwDqL9h3W3YvvGaeqUn6SD3kej592PBZ83UbH8rUb29zqPJJQeD7azLSKag7AXTG7SVCPd97FQ6oX",
  "key37": "2AKuVpAJ6TWG2HivS12WB48dZ4z6RkXGRaqpEnxxWk3z9LMRHobUCBGchmTkBxWqFHFsk4hTeqKXRfYPN5URaem9",
  "key38": "3p6hyXafDWm1fLAwj5MDRTKZZzXGsy4YTmZSoyuBiKmEdVGxTjPHejHqbDxZU9EXXWs3rb6m3oShzUCaWqt1h1Zz",
  "key39": "2HrVuGtC9WKCDSh6iQHVuZyNJUkz2X3x8crfm3QuovbG3XxngdwsvmuEGg4d8RrwiSqHxGZovSRF4kyT96oJECgT",
  "key40": "4qBHjEQRAn5ZucssRJnnBpfZgvnZjDKvjQdMp3yPHVrrU4wCPwQK3iAXXW1CHcLzvX5JXSUPsuHVZC8trj1GkDnZ",
  "key41": "34noueDiufSdSAMWFuNYwHWgBy6XUuCMb1uyF2E7VaY7zSrbXB6x7pAGqUut3kKTRAU2kVJoWBv5Wzunj1XRM3SP",
  "key42": "5gXv3kDowcHuisMWDpDkY435e5S89qE2L149vjUeAXic64aw1WscVDCTtdXRqJ6pdPtahkpMeXxgyTLy9AdZKuGT",
  "key43": "RhasUPmjRMwMpugksM6TkaRRuMv6tt9jaaZYFgTiC6VMGVcN2Bt7Z98oSMVowjX9CicNyJfhBXs3KrgDwC6QHm7",
  "key44": "4ywu9jKkt4d51mZuvac9LqRpG4QXXYRMPn9V8LNv6nrvzCbA7KPAQ17mJnB9kGgGjpqEb9Qx25XsFZfqtXuTiG4s",
  "key45": "2Dwa13ZiHAKreJeWzKmfyxagrGCCgNBazHrnAqTpkeS5rfwsVYX55bBv5woS3g9QgLg1KhfbpGXNFxGMDJaqgGFJ",
  "key46": "52h2u3NAoD3Nag18c1p3iEyqpNzYgkizAn7EdbMhDam4YgM4ZBe3fVoAEHkBNDNqG9MuxRZyDPpMDXri6MLF6hrV",
  "key47": "3FtFJsKGQBxZFH5UPL4rwwLd9g1ziwDSgYGsSUV3qcGGRa8m3RXpUiA6L56KvagbSY5LMBRh1LaWhzynw514hj3z"
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
