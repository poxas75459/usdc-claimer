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
    "4CM3cWyt4YSnWocrcqyeY4q2MZzh5NcnRi8vM1VppD9VbfZX2AGgpJkT3BtUfeuu2YksdmJ1zX3JLTTaAsttNdQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E7ERdfomw2VmShSev9VtJREcaLdyWCjesCjiVVqbF2jnPQbdZkDFRfz59JE99NnrTo9k6EEydSFYjtB6WWmU8Go",
  "key1": "ZZQo3pVSqcs1SCBEkDqR6uP2X3T5uA4EFAd4dnsAqBCo9pbmeMuy5t2UiBcpbeDcDk4WfJnbdqwh4nRVLsCtHcR",
  "key2": "34j3hQFyLzWDeXc14pYYVivrAd6oypENpNMQv7NxnMgcgrmRtvDzy4YXxAkhrPAg1ySbiQJpCaG5CLfxALbP3kPY",
  "key3": "2jwRYjb9YD6SZRGtdrXB8JEJXSMwyG9SH4UytUKSjy3aS8XWUW6MgNMCyBcYUYJAzYSFcC66yw2h285fe2RywWEL",
  "key4": "41pSHF6zJTxPdwqQpXFoymxtT92Fcrt8V2QAJqVYcSRJwVJoS7HwSSAwHBUUhWdaZKMVG58hUf13aRhzpPizrheL",
  "key5": "4qbP1cS6WEJZRPHvddNXFh5SWDieR5Dhf4uZMmjmjXfTusZcTWQ68qWVhZKPu6k5MPArwRkgjsnZ3JqiR4A63YNT",
  "key6": "2qGec282pZ2VwDFTGBKq3gWUdQcTAdbFuLfCXMupK4upQNx3HfHB6saieRjFZHtgKuJuQAaZwEbyeHtT66b99JbG",
  "key7": "2PngFayAqmgXzvvhgzMdFbF4mvnWNJMHg9hN5RsxRhD5U1rdVA5ZAWMYk644dzdvLV8is374nMrcJASv1ABV2rF2",
  "key8": "4rTX2tidmik6rJ6ZzCMbh1iHYXBVZ33E9fY61JUEJDv1rQRQcp6mHtfMTuwx1HSnPy3yz7ZCqtexVC2AxuUxF2Pu",
  "key9": "3Tckieh551ExegrgRwZhZvxJrRNExBdevbWoKQCbzYsxWSTLAstXyrnfDiiKFpGv8qQcbSWLWwUv416dk8Js8aM1",
  "key10": "37FGWp1byLTubZMqZSZZGt9fv1UDqyujyQaUbk6hLUpNf8CGKQBuho8Dw1LJxL7YqMYzQaHuuTNoxDwseFpmNCpY",
  "key11": "2RhZGVwCg7D6op9zdVxyxzztMCfqXxPZrhrnxBnreVBU8bWSs9R5o1LfLWS36EYm8k64DrSxAu65DrXymbd3dWEY",
  "key12": "2PjLjpimBViqQE6fmf9rxduKop3v8Tz3urAGmNTiB5hZorZCD9JSVyKJDFkheta7dE3GMC1j2mnk1zCrupHRtfgA",
  "key13": "nrPLrvQ2HYmm4fQugJtUc2YHeBYfoYYP4vsVC3PwWnBkSyBsHNHdW5sWkAsEP6wMhwGrwr4NMbzTDpLpvUpcQKD",
  "key14": "5sn9TuL7oWP4vRcP6rtvmXNLAPxiUjAaRdhWMXRAFsTt5qtZQWiKJcc4MDWv4LeKhBfKBrX3X5ryPQLYLmTVvcrH",
  "key15": "4tgM4uyry5BQ9jVWtctYzTkCRKX3XPuhKfYoxNWusyyxEPVsULfboxVFwCGdKAd3V9xkZpmtdEnjvyVuYXeGYe9P",
  "key16": "5k357esjswKNhCWYbsdkXgacChkkoTvSPEggeatNftnq325U69baQ42khmk5NF5gRL8me3wwVN1hU32hyECANz8U",
  "key17": "33fsnZHmT9ck3BANDvBHr3oC72ceWAsgcce7nHde5VXmgmetLiiSyCthPuKkdWjkTnHvrPqN8QF2JFrFGnbpxALQ",
  "key18": "46FAkKp1wfS8oq4MbE1d7a3xxa8i6MuyUiN1UWi9QiaC7beVvGmDusvsHMKtn8i58dSaAAiLwyDQFEBJHpYVfv5U",
  "key19": "258tzY7VeE2WhZwSGn7Jm7brKLKM9cAhoMcKDhMQmJUfzm8DXMcHuoZhPx8uxM8iBgSgejmAyqtNhNmZfootYcum",
  "key20": "MSZBH3fJTQiG8MvBCajhRondXJAuETrBbPQwaqBenfuxrGJw5fGD96q17suCsj5fwX3VRGc5FcsznJf7PSCHrJ6",
  "key21": "zT238o3U2QKyvCUDEfSxUR6cQcVCpiWujk1bwo5JqMbgp2Pka87uhW3vNBCwkVMy3TjsxLnk7X4DcwDBew68fW4",
  "key22": "2Z1QCSTVqjZEKefJPxL97FSTqzR9Z63961bHPEE9mmdp7EBz3CMr5yuXQepg6TznbSEdoXWY3TTYqhQknHs3cV2L",
  "key23": "5Lo8cqa5FFBsskcJipfo6buGkzHB3iAoj8NiXH3cGbnadi9oazv2GqkMWsszhKVuAYT13WxaYs6Zmi2jNyWRtzrD",
  "key24": "ReNqXyq5SQfNgMH4HKZMagPFN7x338QpxjvX3cnZr22mWEUj73hgYG6JhWdXTXyvHHdyrSswyegtdYU6w8CQpe7",
  "key25": "dNoeUh9W65BYTFqLCyrh4kyFjPuwhirAtZSNHbP857sKPsPjN4rRbfyxScae3foCqKssMW1cf9TPxG57W15cXkT",
  "key26": "3H3kpGZHzrqCdzzqhN2H3a8Q2vCLXP1ajKQeSMNbPWnwLZe1f6VDRKXciDemfZoD8DQGM8QZDt4efin6GyCrDfih",
  "key27": "2rAigLqBuWPvA8Tz8iTV5irCVH9Z7sgJyCjT7of91JrxcnpvSQog1PD1ngDJaL4uVHi4Uat7iNoXrBvFvE7hozAq",
  "key28": "2n9AXPEbtvdr5okZsb5zVNpSaskC7nzcAUvbMwDpnhWrMUBRbDHod632W3rxN3iN7p9rtwmXda8xhCy5a9TYxYDC",
  "key29": "3cMWgBFJMQEJgbARFny9cnDMqgqGJFZoy734UH4jipS6spMoCk2gYZg9d793XJSYanwKii6mJjPVqse4tbvpsDG8",
  "key30": "4QMvMDhwbebCJdVj3UdiyiR5Nbn8SemS3D9QXtmx2QK3QDipz5S5Dua8E93n6yXmfG7iYZFnf35N5hpeiq19z1Kv",
  "key31": "4mK4zcgty6xhBfByxKHpUDUCmNZub3yfYRHqNsdkJRBNicNSs5UPQwLwxDs9QPHirDjjWoYaQu6aiBi3NwQTxPYJ",
  "key32": "3b1hxccZyfrUXxoQtHF3cKcb7jNrNbhLfxV4WS3JLQsYBGaVEK8M4fhvwLvPn3zmt2JLf7qT7kWuGUsNQVnFDjFX",
  "key33": "5qetAneSD41spBjF2aEbVAZuYKrUcttvB2KGwrF4rPf6JR6Q349UscZFRagcsgNGhQMNAVdd7gu2sELNLEbNwv62",
  "key34": "2M7X8NdmEnq3kM4UfUVnGzJ9u1hUqU5kGjdSpfHdmiiDCZFsMCFgQaMbUHVuqtHVdcc7dXe1D9mV1VNXWzptDhLM",
  "key35": "61TpKFN73NkB2u73632FjooV341wmvw71nGR9HtMLv4U5cP6rpb8htLKkJefwakLAEXZSdGq6KsYGuhEU4pfqktW",
  "key36": "kPTq1JJBWK8s28M6g6LPuNuPQs6BAWu6ZWn8A454UxDSArMWhjX3qnm12oYTQWetKgG9uLgdc5fonpcGvMaF6wr",
  "key37": "9GGxqX6YhqU2xcXNgFw9MiKsRpU6hKKNT2EaMjpqsrfgKHeYszTPmxSU8HvfmngQzLZfGuxMve9nfRjMrasbbN8",
  "key38": "3zFSDNaSu7pEEM3vSw1cPfoET5uYgnxknKckccnwmxLV4yTSkvQdeWYCcu3A6imfTNWaRM6KDFEzjKoLWymVyEv1",
  "key39": "5afM3PMsrxLmrR6wUyvZayfHLf2TivLaARnWLmwzt6ehiEsRPpDzK2dL34J2pwqchNxpJTfvrPrWZqpHRTGUCUNR",
  "key40": "4ShZkTwAb9e8kMY6ts4nRW313PUcDykfGHdPg88t2mTcT6G5zayp9CLEvxusCww6TDmXLhMPBcUpCHnTyo7oRXrN",
  "key41": "2tTM7Hq7nBuQ3VDPcM8JGcxGNY7AsPsJjYb6DNCFCrpA5y3xXwZLeHX3FciQrDVXq6EUQUY3N6n6UiMGZYdHV9vy",
  "key42": "4UaY5HeVbCRjw83JAfU4nSAeu2cexJE9o3uuAqYEvuBTc41Kkf7kiEAknkKUPVkx6TKXzFXbcVGQAd2Mzsyr76xC"
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
