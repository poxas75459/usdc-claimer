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
    "ZLxENbnWz8GFkHWe4gL1SFHCZamqLWHyLqiFpeDHTqTrodstNmfvy6g4kcFefXa8fyuyrr7AdFHBA2t4qnZ5c6S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m9XFo8CzzeiGTrJ6irEEfvn5h8fVg6wuhFGGhhDExrNYCh44qsmH4T4L4PNwPLgLgaHbTyXRvVHaw9CYjgzh9jQ",
  "key1": "h77VqMNXkznmeFtbCr8BdEXPtuSLx7pSdERJkK62W1diprG43cophhob5AB6kv6g8kwYmXxSCkRsH2hvhtDXS29",
  "key2": "5rkuLnuXiXxxuPd93iWkDe3UZDY8GR7wJ4Uz4RnJBgdNVdfDQSvo3VjUZcoEhCdomonWugEsB8Q8W6YouBrpJzjn",
  "key3": "3JNQ1hXsmMAsBmUAJzsF1ESRbpMdPhzDc9Uj9PnMCBiaViMBkCmS9wuzq1qkmnvpS9spouK1hq1X9F2zzpBBMuBC",
  "key4": "2kXomTMQaAmWA13JzenfsJu2thVVuiaWPT1GiEriDT1kAHWT6ESjzCzdKFYd9JvkDj7cFnGRZvbvJ7HPhgceRzbc",
  "key5": "4pimtg5MGPL5GKAw1uV5apihemHa8D5YaZQ8pCuopV3t3hyMU8eRfxv263atBtr9wzsVLE4K9ueMbGCj9125BCo4",
  "key6": "gScp2ucSQ42XgzpRRQcLSb7kRZ6if7mqL4gaQAHQa6YG3aUoqjEDJUYdSEhBjTHqgmJaCTDuugf1LD1LZDD4F2B",
  "key7": "319FPexUHNT1wsxAheUUb7YU4UkhJpumQB3Swq31mNAF3Fh6HbktsRW4aatBWhs9AhXwKPpsxgjvoNmTpDeTRt8A",
  "key8": "5Druw8tieW24qiYtWR8GbUVjxshhGJm3By7ihhb6zVvE6naJMQYPWdJ1WbXAHuoUMVtuyQhu6YLKFkDnyuJo4yRT",
  "key9": "2dNNrMthV19rUzu1CrJJi9sLUkQz76bGRLp9rBZTn6TGKoQiGWNLFTeRoDuPsUZvT8z4Uqdj8vq7WZVLpbFFwiD",
  "key10": "4k9DgWynQJJwcqnzFJ2G3VQuM7tiNLy5NE6cB4yjvQekvrzwGvBt4QhVCoumZ3Y8P43TVppQikfxW1R1HeKESMpf",
  "key11": "458TMfzHfzE2r2zNki4cw9NbKJUV2WErnsxGv4XZazd3DLSuPr1FgCxzYeSUg2iAxcCAUv5Uvuw78ocEU4rwYReo",
  "key12": "5YUQ4pAojts8DFF9Jp8EyrE423kG7Bcdihg6jWVWTc6MqQzfZLzTCtF5Uw2wSGMue3CL5eRHvTK2Lb1UPzBCqW7t",
  "key13": "2tUq4yZ1E1GS7s65uYneUjvPUx81eaU2D5skkcmcKCehAiAXhtQqRrGpePuqLpnfbNKZDkwKbGRo19asMd9bzRC4",
  "key14": "4kGbyzu5e7X6VLoWXuC9WSi6kcq8HfYiHxuAvbqW2Red6tgvJWMfiZpd14eKSZQcTaNoxdEogLani5Bg54uxH6eE",
  "key15": "5WEZcnNt1MnT6gvJ2iGh7if3fvf69oteqXyvGpMiFnxhmCiTpBts2amXZmvyi6LTx9azHEpBLj75KHyaw7TJGbrE",
  "key16": "5jtUYccwBAG5NnxUtSXxxP8enFFVBFMpcETyzDxzYJ6SjwfSn6JN5nh7xBoH1gQjA3iCL37k7GG4dLecnrsjet7y",
  "key17": "2t1TQHPyuwtebR3Yi1yeN5iH259xSetvegzJCj3hPsTFJgzcsTdUWPpFZfD6RQV9ikcVFssm26zRRXbCH9RTXiqw",
  "key18": "2QJfEDHyUDwdpcfGo1Etd8xUigmXrMonouQ4rXmRpsvwQJbSgxVMaQXnDtvWaXsTTAgoY5GQJx3tQP2RwoWmjAvn",
  "key19": "3NUu3vE7LNu4tHLQF3hbgt6Tgxr3x4TAAzEs82CBudXV96tyWa2VLarG8WYtfoRej2HJX4auTVGMeZpbt1GJJBHv",
  "key20": "5d7a6sq6r7psb8d8rwWtX589BTavwbSsS2tf3Yp7KiCKvGjFcRN81uKfLYcGSugmqkJmvAu3SpG5NNS2NT4JxXDq",
  "key21": "Bd7Rf4CjzVVdHEuc1YZktV5JtYjt17wjzJTm4xCEeNAEkd2LmALNhX2ma4ZdyYRUYa4tvSyHM8nSVTD6SUX9X2X",
  "key22": "3LdyKcYJ4Cge4ReL2pazNzky8iAcj5aF2HFhNwFhm2C2HLdtCsG5Pjp9t2hCkJ9ePmv45wNqvcCfrkQW4FCr4Fjw",
  "key23": "4hyfpgVaxmKJwRPZuJkbSX5rsGnjMZYEWvKcKnSkCKkmcW7M5sxWvUWsdKavoDrzTbRxgQk8eSRXk8KusrrG22ab",
  "key24": "ZMH4uzx7cyYxo4CqReWVAcmhFdX5Tsqk41ahtHVJfpfhPsxvModU4ugtBdo4FNdvGRMwko52NUxMtnPy9P7iuDS",
  "key25": "61YnYF9Gw8xmnKZuNLu6DNRvNZiAXP91KwHMEadcGFtL4p9NBocVsoNrRV1MxcUe5rspTrhNxZ5HZYQSXdjtSUed",
  "key26": "3NoCQEbs3PtvbZjjJmQwVPEFffxefn8N7EwRQMDkFWvsNEUGWLGZ1axE6jXgmpUmc88pTNMX4UCo1goXNoCHu5Nj",
  "key27": "JQ7GgmdQvVPm34RSJySyamRqMV64iBRjLmGtZ4rpYYtPnir5m6kCmqKxjfrq6t88wXsfLuJMxGkqRY8CVs285ur",
  "key28": "5FBrg7BfwGwLZTucjvdVjJDXLPVEqihSRJWSA7vyoprxNhiKRXrNRNaCyKexk7P11aqKWAa3ebZaTPDi6KPW3pxL",
  "key29": "45o6cfe5xuxsNqQ1vziE6rWyna9vEjNoK7DThRWbH3G4q6LaLYdYAESyBX67zduME1uqog3m3AgH9wAQWgk1YNjH",
  "key30": "cEW32Z3TafahKo33K3jxtwftAFWoFisEdsX1LBNP2jw6MR97pTtjVjF3PDW7MR8goVh5iD9WqT8LR4Tf4DDjhs5",
  "key31": "2jznZABvpAQa722rkRDXM2LBFbP2oUBSfNcFMrsMLyiyeRDCVeKXhLQ4KHXzbfcJniL8Pbauncxo6kCewjXJthfS",
  "key32": "3Lcf96oJWo3uyaKXW3M6v4mdxPcsG1qdQHRCoKfjzEHvarGxq54XKHXEhNHyDpMyBMfBsmKTv2CngwRm4mhxKSaC",
  "key33": "5HfD7RRLJDS4kE1jaNbnYJG8YanAzgtgN9AHbn87j8JunrcsfGsLUtE6up3FYX9tpjFkhX8TJsG4svs4nV2J1VXD",
  "key34": "5fQbatHSRuLP9RxPduoM3f256vJccErNB93xNYG2YA6TQqakCavvWHSYUoUKpHochrxpe8MYgvLTViHEgWkq5twj",
  "key35": "3Bn7kNt8PPhJXXLWhJzZJ2TeJSJzPnoLwiapaYabjEQsh4V4vU22E4hHye3K8DAXa5quf4SLwTEtJiEXvrLun4BN",
  "key36": "2qMt12ngej5j1vd99e7TRqv52Mgkiz93w9aTjM6ULAv74dLh4UXt3Kqtgkh9PpYoPC1yFfbEhGj2bndGxESemhmq",
  "key37": "rs6UNKGYd6FHNrcNvqP8seyL7Gd79E3C2b7GhtKCrsErTuBXdLikiRUXpMPK1VtnxuU8NKcnos1ty7BQqDU22ud",
  "key38": "2Pb1EtfmnKKjNiQPzLx143cdqVjKsg5M8X4HTeP9bMmXFxZUbwkV78veo8WGXFP4AGBh8jf8rajmBEuXG1SoxNha"
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
