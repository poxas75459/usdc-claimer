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
    "2jFPh5W3wMK9n8iccYZtpPHcE6XoF7QGqYnJmExS5RNfW9Nf1XfexXctPRJegYLkDkeFN89TmULVqmUWdyPpTNEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ds9H9nCsofapCDiz5HmSyPdRb1xtahHWiuNhmCCvaKjzgNyQHjjFUyWDHmaG1H9MVXH2BHqtd4vbUT38aBMAxN7",
  "key1": "UvtuDHAnMkpoZAe49cpuPYECCUDzyq1rF2mZwrooCgJAMDVUHqMDUr3FCw43LuBhcjer1QqARekYhMMjqRFVvJm",
  "key2": "3qWYK3GMHKFkbJ5Cm9gg8yfEfCN5rgPqsdstNv4CmquaM4t5AmPFn6FeTTZqp3ZCdZqsCqGGfTX5ws1EbSgxdAey",
  "key3": "5WeJaWDV5SvgvAwHF26uTFrFYjx3DyeHjTC6rYJzXJVMDsicFwK8ZkZR2t8GyMRSE47P5s5RSCmQdN9enb523bsD",
  "key4": "avyE8HDLn61mCCDShDXqUmKTcESJha3GBeHtxEoB2Lk1fHWmybnzjP5izBGtXgKDJTU1qmE9eZQVompcgAnQ8An",
  "key5": "3FXoqEcqncrM3uCsSGnUht4LjkmYGVEs2d4w68vBGywyokzdxyy7Yk9YCvHP5W9hrtdgMHzFN3Qgb2p49WuYrxme",
  "key6": "3BXhxMKkiahKtmE8icWoHSHm9HYNNGWkXMWTi7fpGcBnFYku67bXzMokndoBBv18auyjJvUyDak9D5hvyKBWG4rV",
  "key7": "45HcU5AQqqB5Vr66TeExpcAukHvF4fy4g1vt36npaKRa7DEYgrp3sdCUHvbtfzwe3b2SP6tFDf7r3xqzdsrXMfuQ",
  "key8": "4AgoDQ7CZy6oimbaujeMLVGhaZid2z22VWg6cz8BUAebs8cHojcdrexvqQ59vbDJz7QhFicTzfVqnM4TsC9MAPuE",
  "key9": "3NkDoc9Az1B6kRcpDvJFrJDi239EF5N3j5ey8miNw67Q1oXmkWc69WhvKLratQyf1KvrueThCTne89UuUyZSgD7y",
  "key10": "AmRdPmHFvtxfVHysM12ESDtTkmAyJBvrZr21aJzw8kKX7rJzWQRTDeKNBF2dTZpVUj9UPGL9V9UPvvWgCFL7DKJ",
  "key11": "5jhHohLT1LnMaSAoLE1gfy1KKS8GpaUmseZvmxqRjGdZHCVSo26hnXGLYFCrgrqT5n9kEEJiagxmvmY6ukJBPbNK",
  "key12": "4QWFnBvQt4aWLAJuPoJSDRvNEurgjjPfxSYn2A8Yv4mgqPwAMYVLCvZ66e2abJDrKjEgiFjYquGeQkE6Ao51pnoG",
  "key13": "5Ee9iV6x2MMPMfu7XHYtzyjBLKWMikgzFKnNXvkXTZZqd8v9NhihxxLhLWJqhpLAHZtNYjQhSV1GyCMGKUdveQFr",
  "key14": "2Mi3yij5gNW53FviY4qoo1yYUe7oi7UoZoiaryGBCrsrhjCZhydjkQuBtMjkeoxPKkdoxE3nhMXTUbxFjb8ZKbsy",
  "key15": "3hfTuDWZEsQwAWA3y8K5bqeGUTtWTD2u4z8qm2WgARc4PVSftKXeZsa6sC4gLkj4PWy814zrW1FETPdG2JRc1jZx",
  "key16": "5WgXvM4YviRsMa3h1eiuxSnF3CgrodHNffc9F3Fc3CzVc7odDLcWvCpB9sBVEsEWp6MaPhRAAEPS3tchQaem5gHc",
  "key17": "58jEf1qwJH1cz6kYmTwU44wxn8FBsDLbo3UPBZVskoEsP2vZBM3zgEMCp69GLCwrdvTqu8H2fLKrYQPMVoFhYjVb",
  "key18": "5V6RimykTRitqPEB3dacFnhHaEcQsVXCnkAu6yLhfsfvrasSWhTdRemoqJLrrn27PNDRMooCMXd3WT6jWwbq95nv",
  "key19": "5EjixbFTdkuFQf2L7WYkqP7rsfakk2yUhfQ7bW8Bm5hiHSNwpbxSDt5SBpZGUhRGLbkyYwKFCE9kYAoVroBMxgZj",
  "key20": "2mXW6hik4PGv58Xwy3q7yuA1fCSbYWYQAE2MeHpSxg2FzQfCPnQKAM4cPy65j9wgYw4isG3ptFzEuXMi3TG6hRrL",
  "key21": "2jrpg3cncW26AeY5dVDMYt6vbdZFa7usYbhqbN8niuDG6mB3mRuBCTM59NqhTtNYkARYE84y9YXpucB5y1qGLNdC",
  "key22": "2tgMWC9aMHrmR7YJFw6tnbQwwYP9YY5cAkocfHrkx2m9bikouup4vTv7iH3iHTVuFZBPRattzndME7a5iBD1hyBn",
  "key23": "47SfsdUBzHTiJawKZbHncSLLFKwCf59pFeH7Jap6q2QCzvs6NJvGTSMiBMK5R3yqsLnDoFe5Fo7axKgU8SWBXq2y",
  "key24": "Zwv1xJpiZsuk6L3zF2n7diQ4nbwKQ8Gjh3DFfqYGUNx1o9VK72hGqZUYkENuajKEGsaFmG4f9JCmYg2QYwbw67i",
  "key25": "3ekam4ZPsmegRQPazYwRCawyVnR7rRabtP8ZYmEYuRAgCYTeva6EXdWXfcbqtvVeSNYuwL8dANeE34tjBnyiRchV",
  "key26": "59mKK2T8yvitpv8ZPidk1abwzPMQZgMcxmWimKSxw5ixKCxqTRTRgzbj15gms2BV3g6WfkCsYcLSnNgRjhuzbezp",
  "key27": "4FsSmaij6SK7PtgGxP3VxXifeAMdv6Rg3VdcRZNTqzrmiKKBuuB3j25EwsEPUiFmCVgU57aq7SwZLsAsNQajte9z",
  "key28": "2gwqVDJwMnYFy94E91fYoG3sgM2MT3bcC1hfNwYacDw4PsuZqAG6u1RGj2QahRw5j4P2TwK9RMFLJDVe6ShMctYr",
  "key29": "2ie7ZyiDFy3Xn6K5H1JqZxdcDsWAM7EMn21sk3jiLgq6VJxGpZzDLUa9nsicqXeVra8T5EYDjavZe3zKASGXHK4Z",
  "key30": "5ub7RyfEpnjJU3Z63k1cuhijfn4dNq4CZUH8Ym4De8TrGqCpWwcFziVWTh1gWupbiw9LFsH2o9YNvLTypWCbkY3D",
  "key31": "375xrawY529k6gvcJFdcy1fSgdJvkknjyeC2oeFkKTigxjmX4UnDmkm3PmwCVr7zZvbY2Y7EiuKDek6RgE6cXk15"
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
