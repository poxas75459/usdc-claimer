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
    "3DcgKn57zbReJEYbdV1D9Ss38ADrDmr6oobBZLPvEw3ndboFxpJaiCE5KkpXHmLLXagv3RK5dRbQNkD4htxbntzq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gy1E2ZgEAAvh5DreJ7mp2JghN3eGVu8mDY9Zubay7BDqupBPzaysr882iuyYvybd376BHsYvhtv9gc9LgepsAjL",
  "key1": "5GzD3Ze7Hb3fZtmQonvmjEKfVvRHZyqn2ZpBXcs8r3jt5JgYkVGu65S6z4gSnXPnsv2nEyVbDxvtuJwpCoq3yakL",
  "key2": "4zezMG13scntMucmoixc9Xd5xm7Hu49yMRUSg52fxejWnAjWomQgEgYsQACW5xmzmQ5Ld7u4cXibVRUowGnnAr2P",
  "key3": "5bHpTP5b6L5S2GuE6CTA5GyMcKZPTVzqrA7NXdjsY78dVjv1xt2LYU2ZxviS2n533vEVpMcvCquSmXXLC1RWbhXR",
  "key4": "4Y2CPXWLmijoP5bXBqK5jwkTLtwdKLy3NWFr7TNETi8fTRP3kKMRnhgf6qVkr6r3XJiYjmUJjDuK8BMg494f6ApA",
  "key5": "iF7pQRy2os429oGokyfSPFfAk8wBgpACJSGNE21DBd1NBhCjRbgERh8jt3fp4636jFzKBNu8ecjc4CfzAFntMwu",
  "key6": "2iLMuHzGi6q8VZZ95ErxsNB6ANRsZhMHVqTK3rnoMhEUJtcvoA8cqYptziYByxaLiGwdXWbJGKimUfKhQJdeA1Vf",
  "key7": "4XEJeiNzaJJmobyRJWD2fZL5itCdoV8aXhL9jJenAsawELXytXyorUK7bXSV5Xfhx8oju5AnxfokXKC97pnBWKLD",
  "key8": "UvzCwwPrJbVM39GR8i468LH6fnMdgqeipU6w5REw2eJytTvVwTaK6CwWEHPhfm1mwzcZhncDKo5PGpk1kanu2Bg",
  "key9": "HJfU96WKxKAbBPinBaDbNd6tyCr51WiY8DCj6P7xvz6BB5X73BXQ8mPM26zhrc4EboHwiu9CecZv4mBRnjX91CM",
  "key10": "DGEVLDFcYkEMkekrwEzqVekapnL1yVABqwaVq32mkyUpFpB6fWoeykAZaozNALiCa6x92M3afpfDfT5A14Yo3pr",
  "key11": "o86HJbAVh1kvykuYGT4ZMPx6bPcrx6doK5hVXTca42T7LhPpcpVNjrR3nyBho3yiza34Z4zteNRtwtGJQ2AJNnE",
  "key12": "5fxB4RZXLT3UC4hgVYKkgPJby3mTPmTYexutSwFm89Bf8nY7rEGbE8uFVjbAzkv8wKhk8dorsnXbcUjKWLNmxQcS",
  "key13": "5hVEakptVwmjFLC7wK8VNiji9ajLPwLzmXDeuwp4Yz4EEceMtBoD2dYZ2TfJPQYN3TfT4Hxm2AC8vLgzN9htUGbY",
  "key14": "41mamH2yKLKnQvACWLWeTUp2FdDGytpm5fJdpD7zWn7hEBwb8qg1jQRonzcba1idrbVgYoHAu3wBgZUgy7H11J3Z",
  "key15": "hqnc1umZhcYmiuKFDsSFdWvgDZeUGdEd8mbRhtFnBYYwQHvV2UoAAtfsi3CsN7tzCEo3DAG4KrXB2TyQcj3xfgr",
  "key16": "wYx2ZfYHmY9SkpN1AaUzA1KtzHs8cBM8cy8gbEUgYFgtj2iTLCDwxBQJ5w9B7zM2HBFFqzPSmzBE9uxXt78G1HP",
  "key17": "2QUwcFy7QbN2p6UB1dv5DwV4fWTiizTQgrCsUxs1XZHFL5X9Hy9Gg5XaUrSAc9eqr3ESvRr2dspjLjfgnpkNj5nF",
  "key18": "2kfymAyG6rXj3GuN6pSyb1cXa6xeXgy9am72QcYvPQ429WG4kLr93dfkE4H3VZKgGNmwMXrCqTyBmuGzsX7sfzG5",
  "key19": "4HpzZescVGJ8Lb9QnAKKWzJjtYj9gh9mH8tK1sAJbnaM7M7pjBww3bNezysPyMiLTsb2FeMhXkkCT1XfQif7ZzZH",
  "key20": "FgodbSrfysuRRL5Gcdeym45pLkc3Fju6g1drWogZ8jwDRqZJFukD1Gze8eeLXyig7u7MqL4Kktydmg3RkG9n5P2",
  "key21": "3j74CHx2jagUmZmd8QPoDNGsXfvaZj4b5hycgqa56iJJDKLmUSUZw9Xhwup35dQ71hPuAntnz9uQtwjEt5cQG3qy",
  "key22": "55UPYXuSh8PfTdxkYGiLQcSYjwX3MDPtPCkHTqftYm9RzZBVTXj2TcmZAkYKyyEFWd7RnCzXCMuXBX2MaksqXcit",
  "key23": "5awb9zRk497eQodtN5vMYnJ7WywwQBxDVb5oENwgJ1Za2jGpaLackYsnPf86zz81QrJRDUZSGsp5q2V5b1DUyKZB",
  "key24": "ztqWgtKR4Bp1sfEYeeYFPLFtQeRzfCCKUSnpeTrcfZuAYMEEWmNAsMGRh29FTBoUPFrb8UVegcmap2j9iD9DRNC",
  "key25": "5kKDtF96d52L9rm6XVK9TcV8XjoFehsN9Ky7vvzwJhAT8o995bj3r9h9kbqmNcTAgxFQMoYENVgMGFiYwPSBXFJd",
  "key26": "4d7YeKzBpanz8vYnpt9fJfPmbX5xDCNX8mbMiYTzJafLcUJNafMNQvv9mcA88XnoWhbZDVi9opceBYF1J97EFcJ6",
  "key27": "57adMch3MLcTYQYAo9KdgU1x76g8UBm2xQzHG8zPhxizP5fhgkaZsyo6yEhPQUH9owktjTmMdmoQWf8qtKfHUUUQ",
  "key28": "5VCJhoJUFr7HSC6ChpqBhankgra7qkgcQDayoeQRiQ8EvaBvie2MXYW77b6kUKBLAMLME4YV87VEHyjFNhueSReN",
  "key29": "5Nxu8oPJ43Hp3yotG1Kq5cEArvzc9KfLaAFzjefuw5G6EyGiVheyug4CamBy5jq4gexVve2XfoXbisurvgtZBXvu",
  "key30": "2mZJvQj5nzQUm4DE8pxmoW9A6ZNNuTQBUuLkpLuBSLd2CZ19EU8cwvpjLyTcsjdbK8w9Ao973Z8LUyb2wdaVhJ5L",
  "key31": "5CPXxaNFrqVXuVFHrnpvYZba1erFdBwagPyoXRnHhaAhm2dFEkazsw6tXUEf15mACZDghFwHpe3CdN3jrUZZcVJw",
  "key32": "5Fg9AtTksqwsd4UmaQB9Qiki98kJJmAfyqomrDW54wVsifqXGQcsoaQn9tzPdR8gFFDrELnRQo7a6saUBvvcELCf"
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
