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
    "2DPaBrdaeSU8GmbPGGRX6rpRmzasu23RAzmU6jn1F6bzxGAyxzkmwGYDFpPgZPDuimeRB7hket6xSWsv2LQ5epmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h39hRgcXnnNrM7vLXtoif3TsTUKUPxc3Tjx7f8F1xzDYHzHnkB45UKFK9WqBGPEKHuqZBvdXkH4oNZkjZg9AFMN",
  "key1": "5Tygj52SMHMHva9PRbSiCXTVGw2TMQJRYnxVoADhRCZGUxF9moXNs9D5eAP1vnPMz6CMzH1U2KLXYiEie9ZB3wLj",
  "key2": "39nuTm5ECw82RtjYoZgEd61vi4ABUptBb29C8TG9rsB7cNCKmzYgQFbfnm91LddPuFRujwtgGJqLfSmUawmpgs21",
  "key3": "66bjnzUtpaA96h2rnK3NvqrDVbsw8j7RCNrnUZkQgZz7Twe5UjSR4JPuVFcX4qsF8CJciXU7peB31uAG51QZJ3Ne",
  "key4": "2SDs4jNviQ1WwXdZiLBsb2aATWs2J9MTiKMwNJELq9AaJmmnzFAqS7t6agvYoKsizJaemxsdALSPvbWyWugB61uk",
  "key5": "2fsx63ovL39SeKaxkortyw9QExuVAdeRTv5n18th9FWnuyicfxKxm7mxBJCnKecSpRxhCepmePk274eq4HtKSyY9",
  "key6": "3R99QbduHNbAdenogtYvHxPN6mwttaCobHawSEMUe9Havvb42X6WQyntogUL7Bj1GYYkXuc9NSYy9eQetmfhRPuG",
  "key7": "4CXuFCBH7bhpW3RaB3wENv1rC7ZKuS3ZP2aoPLBND9Jug98kX8eMKyCQG7JFmMMw45wbZbGLKrv4hjFwPQdJB43n",
  "key8": "4tZ1vtjfTpCm82wkYBu5UWNFJTgwYkEdpMJkFgRj9L1XEtCuRyYCUJJVAr4Nwj14RVaTjxLthuUd8AkZ7jFawmSr",
  "key9": "3iGUnbvVVkabXUaij8Js2yMTkkDSmMAfjxEREK4CtK4gfcrzKHJCP4rreQqArYM8xMd5oWaqPeqMsh8TAMQqK55E",
  "key10": "2yz8C4SaXmpeRMiDokDye4LV9KyYdzhDYoaZ4aLFdCqfpahAzeWuFAptLdtHckUB93NR6zG72vy7M2mP9QNz6eeg",
  "key11": "2UcmBDngVdjkqw2bJtKXCCnKQJNEA2PFCr9NUsPFLBVgLDwu7tb1FJSD6NrxTiRW5LtASK8PBQ646bFxqnBwvusj",
  "key12": "52RidHmqoTYcEjXo7bmwHmPcAE2U7HAUSP2eX2BV9FFj82aGVbSFcKt9h6bGaRCneEWkzVxQQpTBNHDvMdjukBy6",
  "key13": "64hXj1B6zipKtqpS6FwcNLwhTfm2v6T183JC1D5p8SdruNbY4qjHxAwrrt4hq87XmSmDqBz7es6Qqo74Gx17UWjs",
  "key14": "2MFG3BoyQuySt2StXj9TNraqNgz5fb8LWFrG3AVTa8r1txyP1oZQXH5xPbXDKzZS97o3a7CLirKv2Hd6UAyGMdS2",
  "key15": "3nFexJYfxGNGgVchWE2TJPEiUoQUxBupKirkgMDtdMRDkdFkA8cmJzQKFtr88jun9MGyzxqg97TZujdNN4X6Sumu",
  "key16": "2Yffx8DM3Wj18YXjMo8zxNGkFYTypkfXejct4UE38s2CkqdWcnXMn8pfpvsyXbH9oFtTG9YsmB7pbnkQfpZUpPgR",
  "key17": "4JaNxRqmkvHbJKmq1m2jq8HxbaYF1sQQ28JsjHaPYgzLVNSUfTHPmcbAVfCfTLiqrGY3oRXTUJC2uiEcsG2cKuBS",
  "key18": "4PuAbSxpUecbQDEBmfvvReUvLhd5CtEMsYaBkHxKR3dv5NoKaxiQECYM6mEFgfXKgyyNE1pRrt2uhwKitAjjHEJu",
  "key19": "5cxkTtENaVokzvKMWZQRL9gp9Trhba9dd3WNm2ckEX1XVrYbEvLRvvyBhexcJw1oeUZ7d8ZE1vUma77vGvnHqPSj",
  "key20": "3SV8z6h7umXMDuQ1DPdE44ZpqbyoWmEf7EzRwG2ov9Nwvg44o4ZpBeHxHDYfkYwjWL5mPPbY2HQMg7XMpESCDDw7",
  "key21": "3EW4afdFm5Tdbhc1jQNyYGcdbioXSfqjJLcMcMLoE2GaJ38Kfst5yXuJ6K2ZsXZ7uDBuXgxo8bpxz4XUfnTQCJgc",
  "key22": "5hyT65WuxMS3V67UyhxKhh7Q4DbH7yYWfL3jK3YYJMVpSP8b16YJrm9RF73GnW1con2RNJGSzVUzJkE5WjoqsZBT",
  "key23": "3HPKUdP9KP8zJYzPRMs9nAFWqKAoZGsSoRznff254raDiZ5ytPAm7hGP6RZ8xuAUnRHYQ2u69SJ37f7ZyZys8HxK",
  "key24": "5xVbRzJEX2Tagm7FyfPWkTpT8vPwQ7GBQQ89jimgLPoZsQcacMWBRmyp6KPDjsXHfytMBzHLrxBjHjUfbnJtrDhb",
  "key25": "45jXh9gLuJXUTdHRMNJuvAR8wN6v1EcrAzPcKjbB6My95uKc85BsrQZs9Qv5dYpiENMCcbB7bSoWqygW2UHfJNHf",
  "key26": "5x6L5cX1kmdWNZ9WDfFZZhNfmNScfNvK6SnTWnQtMmdquGNiVv4Aefyd1qw7Re8EZRSt8CUUC8ykbwXjiNdykjLQ",
  "key27": "49sjn3UDw4PR5bSnCKrkpL7XfwfWAkqLo5ojFTdak7vpwC3ULF5TDXHUTNr8ZDDgES73w5Xd4bgheyQYhuKBFNjG",
  "key28": "55ubuAJL2Hau8mfPFvLR3VPYvbkvuWLVqsqC7TyARkFZiMyvv1waEhmVf8EVEfAqFX5JP8X9xEP6naAPoPEentHi"
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
