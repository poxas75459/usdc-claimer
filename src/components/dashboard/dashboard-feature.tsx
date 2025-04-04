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
    "pgVN5RR5Rpz7aZn3HQLr4FznGdb6a6V1GhNpmAq1UPP5f9LW2p8zxXQiTQtMtL9gEGgmA3wdUN9F8SzwFR1Mqtc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XG3jtJCaYtE1pR9Mzn54fo1Kz2ESWhR9FJByp5NGxk6pvqTUyKFcSwLxQMGbE3i7ez1gvgfBT3cL8DuMwTLFb1S",
  "key1": "q82QQFXaquQE1pzTbnrawvjABYoozQdHMKCbM3fGkcHmUA3RL21S1U3fSqoFVfLsn24f9ayFoE4B9G3C3oPWjpB",
  "key2": "2qW5SBaoRQqFgazKruM82ENZPiekdxGiX7M5NofvMgEq8Vu48RgX9YKYe6NTcShuxPPDVXgbSgxLFTEQaT3SiKzr",
  "key3": "4UQLoDAR69nEqUaywsj3tiRh47CQd93YA3B7oroEF2B9TaVQTaTSmg3xjn2bfmBouaspZZTmmammcuswCWqpa39g",
  "key4": "4VVBHwaLBFjuuvrzRKR5ge295AqEi1dfL3zN5p5FDMxDipcTHLeG3hugWEysP1KjY9Bm6pWXd3N6RssNvEUdqBMA",
  "key5": "3TMZsoCmxpmgJrYGPBTjFSGsRU12kR6zvTACHS1WjVkMb8BQzy8yzgAbMASs1KcvDUjWNpZQRG34CGKdKmpkhh4T",
  "key6": "qeG3m6S3nn7kSEBmb7tB3yMSv9APX9q7CSwNN1jTmZgV4yYiRRfEnB9LnAX5Bj9yXBZcoX5i6A8UiLkC3J7wcuS",
  "key7": "XoqWwnLp7DJpKcZsz3h6Eh9JxiWsaDJK8u4wshA1QrrY9CuVcLDmP9VjZTBf22ybhVgQDi2XChVZMNbBRk9CRgW",
  "key8": "5Z1G5iTbPhtwofnqBANDvMogjPxGR6BdAMs9TWTVeE5iLsWv8TFiTZh6CRSfx5rjWamX5ztqm7CMwinBZE6eU7WB",
  "key9": "61JZN7iTpkjqzZMRCXkq1GER8v78CdFs6o233RoyQqdSPNBLPMkFY1c1CUmC4b6ADmVkUdPGyA2ioqWTxPk5gesG",
  "key10": "32DDdKJ7KhuRX2hWF4PUtRifQjA1yCN73RXeqABr2xhs3EfwT4FMSxvjFqpCEHjjebWg7ziJa7D4m26qqyYBztCk",
  "key11": "2WVaHZQhYF6mAvQUV1tQdwaaHW6nHqx95X6GwpNAbw52Kv8ZBQzoiqjBx8M1e57DEr6cqQVZdAubUe2YESWkiooa",
  "key12": "BjZMHRdftu7gn7M6RfZUgyQXBvFXoZhD1xkzgB5Tdc2w18vVHQLY4wD9rFugN3DMWj9jPfAo1tvRFzRSdHiFjha",
  "key13": "624Lzaj6dS565BUReM7ihphB26SosqA8hDaradiVzHUebicqXQymuagZNGEbKUNUpunwKVrrdeNvdcY8fytaJDQ",
  "key14": "4KicSTwcw28hsvC1uuANHoDbLepYcbaBSSmGLMeNXnREbicTcK35JwYMExBW2GaKmn4Ya4vVXs2mCHX5tUMFUJXH",
  "key15": "5KkUBUESQUzi7qsrRHZgEPpnrN6xQ16XF9bTQWiGN7cgdFjdD4iTdrL5N6FimUnCG8EYczyS6PGG8GsBBhH65V6B",
  "key16": "3f2tF4QA7hr4D1bEAXKE2Ljp1nZRhpVa8vYMyBff8Asqu4YsWGu1MPFsKtWWffBnZabQJMBDWLt3MUBSd6NDsz12",
  "key17": "dDDZWH9UKrGXRhwk23n4GG71ScBowhbpJhiH4bmxZJK9HnrdYx7cKusfdSQaNuLd7eh8VzLMhmeeGSuovBpvo7e",
  "key18": "2r6qV64WV5kHxUUoGb4LSihT15mQKoeoSCpyztydo5Pqhg2Y6SyxVMrv6gC41NvXEXukq9wg1Zz5nHTne9NdERG5",
  "key19": "tREUkAZAtYCxf5kcYy7EbGZyKrFuf8qq2wUaxdDtLt7Cij7jPLGE57Zxcgraa89sansaQwsPxptmpkS2UdC4t8c",
  "key20": "5YinfCYTkrLbkexmr5H82Znh75KBEP7xK13uG29LBD2VK7NnMRPYkj8ZNDjq6nwxuUQhPNdkr6LzrSGwkKDPD9Cn",
  "key21": "5k9LuucW95yR2i3YDpz9dHzr873wLFKUXYppH6C7rWLPtGEsUU4YHiypjvoN1okPCvCorLTZUQ6Eb2frb5Gbt4RH",
  "key22": "25q4cfnEX9Lfo2Z3btJPmHTC3KpmZSpueejUTbWsQFZb6ZpaSxeFvGejb6qD57CRzYFfMWM68KJmA12ttRckf2aM",
  "key23": "2cpmy8QNHvJWtm1fRHWCQJc8dbG91mCPzw8QVRXYPhVyP8rjyMaW3osny3jQWZDADodfCPseKttzGLa9Xr3KMcAc",
  "key24": "bC9epSXqw3NYSy9jUXjZ6v7cNKhuTuFRtnU7kYpNbUMwz7ZsAWzWaaorsLu3bVLLTBDMqBpri76sgqXWCyiMbcc",
  "key25": "73K8Wa3iV9VKdhXqBvzUeKX9eeuVHyuLcwg1xh9mnWvro8dnRuyzCHBDNqfVuWzpgQciP2k1thTc4JEyWDf91yW",
  "key26": "4e5J5BRevvN6gX2GfQis9Mqa5Go4KfaNGv4FnTsA4WsYxeYLovbefgykqPZmbcjoHPhd7TjGqStjx17xnRsQ7cEc",
  "key27": "5DDK7Dbv5t1Tr1DyUuriWp9UBh5XZ98jGks1QsabewrwVeYNeBPX4Jdm3Pq2azTgmbe6h6qsdEHYZkYjwnMGzHzf",
  "key28": "3jR5B6GsufYpafvbMTyjNY2poRKVN9dmgsRZ9UbdmtxHRG43U8NsX4g6fX1FDvAeL3zQjR7WARrHykysMzarP327",
  "key29": "x5aHSNsE4r8e2pwWRnm1C1z3CyfBpA63y1HXtPXMrYRGCb75QMXDfa9EypmBJdrptUdwGKk7ehkPhERPyeEBVr4",
  "key30": "4fhpdNM94weJ58Ysrz8o4x2MsQGRe9nbD8yT5kNoRx8RD42UWGonREHRrkqzby4qAhygMQ5R1xJpkuoMwHh68SL2",
  "key31": "3r6eUKFyAkiXGgxu3taoCSUpyrg1z7Cn9NuWaEmLmqY3sLZ1GbEqtjN1HMXH3MN9BKN3C9uSCNwuWvC8WpCD5rD6",
  "key32": "3kKFxJNJc7cKqgsrdV6Px9aBCWZMfTQX99beQGz5hUvMwhxvik94BeYR27gZnetYZrNbEyUyEgh6pcQraSmHnamU",
  "key33": "4iC3PVDHnz7gisiYLa8d4W9MLzn5Tvy3uoY2MrRRnhQHHNpmrBVTivMPtRvjc2mxHjVpPYyTWpL3jmzRRGhkupWR",
  "key34": "WPm7UzVSthiqpz5PNze6wjaZir9zGheFQmWJR9cypRDQNR72pzND7qcE3pbzyMDeux5gw6BxaFoKLP7W8nc4kqZ",
  "key35": "33QUwrt4cVuDnfqSJTjQ2oDd7VrR7K7PcwZC2Y6SrktD9YaZuHZ87yiCsi4oFwXi3K8wyFG7FJioypk64mtmnoWf",
  "key36": "2cZZVyCYvKX5NHygmRT559F7Hc6Ky73xDSeygbpTyeyJCqerUZYZPtqfaVbRzCrzWsdrVAnf8T2BdGjPZWeaXVvK",
  "key37": "4MDQQb6BQdSkfEVrVayubBBYeT578a1sDbjSzhg2mytFF5Hau3sLXDNZTzEmrTi95WhN7KpTats13CzXavD6ntY2"
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
