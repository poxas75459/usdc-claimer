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
    "5Rjwy93abo3CcTpmNY5HC8yZAZRxcPjCtMcGN9nZ99yfTGvCXRpVGHSpP84T7UJWKLi8DAGBETvJZm31jexo8vDf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rXtAgy8yfsY88gupyJm5mrCzXEHWX5f9obbEjjQxbrKZ1aogDQq5PoGJ4MpPayrv75cgNcmGvk1jTnNTXLmFQd4",
  "key1": "43Zqx8AvLHFbmUaCa2yE681p5YUCvEB8CJFVgjQvkFAnyDCCaUC6pVkJxGZk3ZhguweDKXqGcoGtnFAAh4WphyEG",
  "key2": "3wxNrb2Wbr9rS8FbTrgpVwdXokeGdRhDaFmu1NpGPNepf3DgGTAxTSGqkWg7ricmt71s6TsJ7fDGHBFKjFsXQaZT",
  "key3": "2Sd8kWaxtDapoedPyk1EJ9ps1hTQwLQbDAcVMWZdN8p7XJXQaJscXirrkbNEsmHDBPB914brit56rjVMdPSGePiF",
  "key4": "5shADWwm3hCZzLFh9DQi1KH1vTeNoSdR3t1gmfELo8x4qvoTPJgxs49H4pg9mjW12DczyQ1zsuv5DqhEEhC3GyGH",
  "key5": "3f8iFiEBBm3PHpS6FDZSH7TMF8Ms3G9DtJLqqbjuPnJDxgXdtaDcHZxrpWz7qmkNZQskucHXR3Aiq1hXhALfyGoH",
  "key6": "3B46Uzt3RxM3JRxoikzZQVFUjWtstmbSK4MaZq93Lzr4oLe9RjQoQVFDBCKNWFSjbccnaXu34viSzB5L9gAp5JSW",
  "key7": "27uenfHynjatcFd9CMa8RQSpTH6EXzjHwupPnA4EimgghTc8oU3fH5hBPJDjThygQv2AzbWgMXN8wSnGei6ZZRUZ",
  "key8": "xUUnJHRAnqfqV36oG5bm9TPtavV5tTT9f5BSxxnWVoxvfbAaNTYmLRyHeCwqWwv8LwWi6rcPbe1YUjg53vNLrkA",
  "key9": "4HffJfMyqJqLxcKa2cujqPzQ84fUBfo6Gog7wavwEXDUxKf83NJZEAU2WXTzKJj4sEZrpWtKxQLviuSz9FuG6v62",
  "key10": "4A74miG6XakCTPpqogBD2PZChm7KB6JQ542Y2TmRmChJJYpsGfGU4iy92SrvUdivMt4TdEoNQJz6adgQhPmBXv4d",
  "key11": "wHSUJ3xKEqK9HVaBuvTbmFKPw3Fw1XmzHKmH7UAFeJ7WdMrQ7GZzCtaaQb3A1UiZPzs4o4Ve8pwXKKCdfvii117",
  "key12": "3bACZnP5djFkFd1MXYKaRWhRfTibvAzrHzCanknByKcAC2eDrSfLhuRdTR9wPQGGQfzUAW5AviXCvs3HB2yt4fdE",
  "key13": "3bs6Pn9Y1Q2ZNbZiXF1T8ATmL6Hd2qpu7zqChL19nJhtNdA2t5J6XkNWeoSLd1akr9gZs8JwBrrazEf6HYt7K4pm",
  "key14": "4BZNr6dQgewPhLDxo28FTLDKihChoisALKE57tvxT1SuG9oDYT727QfHNG1EWRywCNoDwBpgwNr3bXJuZnE9TpeK",
  "key15": "5XuDzoPwoW2aa6H3Vnjy1KoX79DwirNSPZqK91UCDXXS1WPi9jJyUrf3W2F7Rba4Yej2JzLpPZACo5KKy9FAr8Du",
  "key16": "56wpSVdwfsQUbbMAu351RUn66mdFocF4v5RdPSiASSPjfqcjeab2b7SiwWVPzMBPMYQbv6uwJpMJCkaaw4GyHQ54",
  "key17": "3o6go2ZXKdPACWPmVcaAdZo7FwJRK6DmHcS2YHV6yCc3D88NKwKf2JuWa2yNAmjtkyTWt7Ds4tXosPmas4cF5nKZ",
  "key18": "3NiRsKeFY2qzXf8rWpdLPtaq2HtjwoGtEy2HahRBhA1fhw62GG8BGxVazBp2bfB5Ah2E29m6AceuJKuskYgZwjuc",
  "key19": "4YtEcecNQ8otDpPkyJCMahjZ3hb6BBfmvVFx3P13tW2LTC4NJF6PQvXaY3JYnCEgauTJR39gtt893YqYWmjXxm7q",
  "key20": "9nwLUHr7JmoFHwyQXdsNk3MK398zwabeA7DBHWejjGWqTHpFAmfrW61uxrdAGBN5x44wagRgSBiUAd2UuxxEgVt",
  "key21": "2DvTxygyftPyRAPZBBLc7y7tkSbUwivF1Mb2a94CqrLZxFw1bEJnmK7f8fWSpp3CmEE1WvU8AL1FTKcrxiDjNt6k",
  "key22": "2ExCgK5v1Ye8A3xSETXfwzLwyq3LTvfSN8tGGguoineVEUzFrvjAWCMQfdKDYzKxd5d1H7vGZGTrN7GfVESFBYdD",
  "key23": "54za9MgHYB4GVJyMXkWE6UXtkC32grSR2RmCu5VHpL7qX2nGKyj5KX9nHrZpqxmNDvVxtAoNBSVw816aCFWwsnrC",
  "key24": "eS5twupDwMESbFtctJcqLWCjhibxbY2T4n8c9DCvVWkiaD2J5DpJVJrLQRkVMEiwviE1dBTUa65SW9rAqt5brs3",
  "key25": "4k2vRc9APobkNH22YECnrsLn5kpnCiN3j5dLSZQt7Svh79cQd98GApiz6T65ccAKDGkzK67c1QxGHHpB2i87dhmj",
  "key26": "Hfo5KHtUxddSje67ncY67wUyBvT6GtEtZzfk7Hgcne6dCKwSLsL7QwPtkkSU2hfgbcLqhCLDYaigNShCdT271ty",
  "key27": "CF6dwLZy4KdKfnjdXni9BtSr2TRVUsWLd2z2uT7dnu9xGURrTx6CuMREP9fAxD8FpK1eNebZWwfdcDKvCH5HMkV"
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
