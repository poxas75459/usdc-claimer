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
    "7NBoXG13GpJhDK2fZ6KJ2qJgcktgBMzqbNs5BXzuEraeZqGzNd1kkgaHQsC9aYzVhNAaEZ6VtaHFjHp9FUb8HZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z5QfNNfgUoPeKH53mGpetDi4jKAru98JiHRUJ138PaPKvwLpd8dzqLhAn4D62X39AbQi1zH4WRSBGHQ2f2MhM2w",
  "key1": "4fLVs5k9rg3LXkxwSLhVQA12EwZcGQdEkbQ456HKnp1QvZrqAwc6xub4xDwnFtAscwb6NapRpQMoHigiJHAmD6d1",
  "key2": "5uPjZhd2aphvd6CoFhL18HZPfUSTws8NaJxHPnsn4MneNafcTAMDH1u8meDxeQNgkc5KXef9mUFPmW9qUNxy3c3w",
  "key3": "oYZhkW9XGKeKRM9nvmUicntrKQBSrq9T72TaxhcT98mq9TjzuNHd2KgiN1QeR8Ar5jWPkit4Q9KHP2ykxC5DhbC",
  "key4": "4w49yydYLCgTu2WYwRAahFB9MsrgoGhPTFijDcpYY538aDxNvbYZFEVRZYPesR2a7QtbwWr7QtcqCHLo5Y6KupaP",
  "key5": "4jvtPfqgp59mja3mkD9gTpH6MNzn17cXGWrFN9FRxQtpUb3bG7DzdRvQDNedhL5QinXX56WzpB3JxMRjWqBNXTX5",
  "key6": "61HkMYvQaoqrcqCJvy4WaLMxkMFx7B8J6QQpgM6bvvCzmYyfoQMk6KTet87pRQa4aadwjaRHywkV78ZxQZVUm3Pm",
  "key7": "3ybRgXwc1TH4e569TfrZRTByk62vcsa9YkdQrCuBbkFK1KxnsYUFNeSTSnPEyMtTRFqWh8T1Esfrb9TehFefM9BF",
  "key8": "ztaTvymJzZ4zssbxSrzUjDwY4dLRG5bztKybGKHoFscr7vBGenUaUGwpAcDFsJjdzGNLwMisdcTNdvBvcr1pNsA",
  "key9": "2ruUKDxkaNrUAYdWfwYRQTZVtYv9148ZPFJUq3N1YTY9L8ZqPwWBGz2PcoFn3fHFqFqGshBzoGcekZb1k6msGFrd",
  "key10": "4rxsKJMkj4R52tEmFtApRTMLR3zGbpVMQAfWAxy6dhLRdE5W6emUuzEJC5PYMEmqVorLzQbZaf4yMo4gJRxEd125",
  "key11": "55YjY3kBvTuiFrvbHCnnRdB9LFnAu14je1Tbs9HHBXBVni8XVyToQR7GKjF6AWo8qyWS7pxzNpQLVCThtz8TDLWe",
  "key12": "3RoEpjpoWxs79WHdk7LRGkAZ3dreVU98CVRmK4vrVVheLGyHjFcQ6x79uxrTSpHdznDCNwpsEsRisf2K4TZ52qCM",
  "key13": "UjquZjTnbHWKRKHfwcRv7ovnwSEjjy9qPGqHmD2QsS477eNfE6MtA6dvmRfG7K5MQM7Rm4mS9sR1kP4AkQkPsTF",
  "key14": "4oKMdn5M6D8xYao8Ny4qg5kTagspgM7xZkZQYjr1q54M5opgpRD69ehczRnQRcVrcrKCPu1hCX9ypMN3j6GE4urC",
  "key15": "9YVUbSwVUwT4rNGTnGX1JJSBbec4VzXbEnsSCyQcVxpfnaRie44ZyyTCRtM2cjYKuthcMWEd3frvCTLkxQvBLCe",
  "key16": "44qpG24NaArqxYCSfcoy61bKPzNhbFG9A5KsLmhvYqoDJ37yMDHgXobvGikssvKpMtbY7bydvb9tvPAcTFGBiX2J",
  "key17": "U7A8QGt7oVAwiJ3zdPj9WryFswHi1GJKKHRfc7cji2i739FZng7CTYDUSWX2s9MX3LASqdm2ixdShNUb7B9ECHL",
  "key18": "5q9NjE4SDzHPhCmukn3n64S7R3GsRnHYnR7w6P7ejMhm95CP411cyxmD9dKDHTEJAf3Uwk3aC3vvBJtkv2e6sAvi",
  "key19": "56BEoPvrbUXpinFqDpgpxRUt7jGEDh5nxEMD6Ne16MohzF1MBRxW6zW4HCn9G6zYymAe8PvYQuFXDzpGxU6V3Zgr",
  "key20": "2uvdpFMV6SjERZcTEcvnhWHKwbp2okPkeuRSXdo4dNSCjAo1QM3aBd6yowEwLWjHNLMmp8UXkc6hHVniUdBK6rtA",
  "key21": "3DSD9NYczVC535FKgPWCK9zPnr6NqSqB7KmHt3R9NENQkyrZ1D16GJ9Z8DtvuvcAbGbpwVLbk2xTDJTYUCeGRiEx",
  "key22": "5gaeZmrYfYTQSjrAzuzwbEJzRBnWS2cNCnhpe9reanfuYD1k9jT2snYHA1EpTqpq6QedTWD3VGhgsAXPEENjzMyJ",
  "key23": "2bXPKAxsuwRCdVVtuQPiTputLmacaqjcmisDqc8fhYJLDtxJxCdiTppJV17WPxym8FDv9mf7BCiKja1pAqHJyxF",
  "key24": "3XTrFJEGWerNCJRQm9KKXvu8tnrsH1qWGsypnvPLpS32uzq83iQC1WnhVUffnniWvNRexteQbB1krfwQmJvYr4Ps",
  "key25": "34uAogQsr2AXGdb3TqvvatodxM1WGX3ayUunMPshu9yrjdrwCub8Pk2pQvUBnQvT9wgmZfmByWNpPfvRiNSndusy",
  "key26": "5ZCs43cKcV4jv3thNMJHgczsV2DVStTh4TmEDfadVWR1mNzcWaArsod4EzwnS9X8RW3VeRZ5tBTBq55Pexw1zuHQ",
  "key27": "2cZKTZoYYk4ia5uqbGEskiUtTPanA83xsaHgNvpzSEAp3zAB5NbEba85yY2Z5nRLCJVvtMTigNdhv8pW56GJ4qQR",
  "key28": "3UkNFXWART7F8uxwapTGTLwmXNBYnoXnK8dZ589WN6wSATvUWaPE9thFK6sKADV43pbSDSycD2TWZdnQbpLARf1C",
  "key29": "2krCTGNPnWWZYugtoZ8zn1QodhoPSPuU6C2aEabveWKddziCg7bKh98isAScza3z7UUK5Lhq4siQFM5Dw4C33EEU",
  "key30": "481JQ8xRT2RKyCpdR56SfdjQuW6X82Csh7sEvjSZbFnoRf3BBtPPctuDtFu8DgbEu4isHVQjKwSzSi7Xd3hECNDi",
  "key31": "3eTxHZdu8kHcm1XBG4Kcy6UH8stEnK85gyZFah3QrDgHbr9ipVBScJfKeFNiNzt7sDLZHfJRM5PDaJXWBhavhExX",
  "key32": "4kzx2sLrAsydcR8ZeRTX191qxEupLgmowpMPmpgCv7aUCNjpG3ueeSiUw3n4BrtZxj9Yp6fuB8WqpveXGxFiECX1",
  "key33": "5j7hjNKhoP23n5h4KTmuamSL1dhrhv46fKtEQFbZEED4FV8FHRxZyK3wM5oA91XPcjJVj1MKwiZVGaT46XNFX3zS",
  "key34": "4Dyykd3DyZUZWVdGXhzGXbW9wQFtipfVK5Dt6xdFdWoRW5Y9c7m2LLKvRzz8DpyP9WumyecnGEbNEzwrSvmCeuND",
  "key35": "38ctyXhxZxtCYXR43S8gxmzoK8HLxLSz4PAS8ywvyCCBT3K6fFH6NVsD8x88Zst3KwvEQiQGmPeFcpyuHJzvATPn",
  "key36": "4Uohe1yL64rGLD2eForzru85Jus4hsK5Pcv5JTYRUHgNf8d4wPxvr3rTZb2X5W1vbEhUmj1s7JCVGshetLwa89Eh",
  "key37": "3FEoPiQEd1LvS4AbcoYaCiJja6UP1hRuzNSLSaTQJUR6XRDPKVFsZ2WXFoykbh8MjnmdqUzsV787p5hcPjG1B8bv",
  "key38": "53WgqswBXDcbv9u1Dpu1fbjuiQGU4ckS5LG5uNgEAYAj9gWvRmpWUQ8AGPYRBPf4Vq1Kowx5rryUWzFnM1gzEmzV",
  "key39": "5hwGASMVecDwSztEVWPLQ8PvD3ME6KYB9ChQBbzyQLrvzvBz5ok3Knuvx99WWwhxxvZaj4vrJthRWpU9GKp2A6bP",
  "key40": "2eLwsDKYqK8wKATRBmnBaupURMqXhhYfGL8JU2f3SiwRctjj9GVthmMfuUrkZKA1Wd4caDVH7T1NV6ttEQgq6AVm",
  "key41": "2Ciwtgz7hwDqQR5ysvkwqhrfPYLDEhh32V5jUbw8hKbXn5YpeCHQt5hbErPJsJAJDwpXwseHj7dog3AeGHV3uQ9i"
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
