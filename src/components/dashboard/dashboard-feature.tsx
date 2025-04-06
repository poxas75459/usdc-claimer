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
    "27SAGxtgcyKmdHbE8kAiNTGsvnghahMdHhTSmKxvVV8kUDe5MQ6mxrLZYCnnM4Nm8zz77SDTowUAWNuJG8Etdjt6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RdLYjCAuKpeFaQZqJLMxLcAq2F7YAeHGpbEzAyswoJWdAba9kwd13kTJGxNZUUF7x9aoj87DDz6aoBgVFuromzj",
  "key1": "3pJwEx4ej4TCAFWN9NemAzgBPHSQBmruXVBKZj9E2kES5zon2bf5HAZgSZvwYKmWGUbifTCjaVcU1c1WziMKTDT8",
  "key2": "4e1RV4h6nKQ2YNHRPFLhtAZhe3ms44Z81zrxYeRcUNLbinm44Tx8macwSLgdCz4kefTjkDoQtA3cWB7ksMqZY1Eo",
  "key3": "2TPer3tgM8J5mAojGTH37Q8fuBnd8FN4wxdhguQueraq6y6Tqq6WWgEh7RdGH9ymjcXmpsDwWbr98JKGUUNsNWc5",
  "key4": "58L2JqydH9eQWGYYCWkV3Bw8sxjgN9mWzFyy5W7Uo76zFQYFX1DGUKg8C1QvmG38adwwXuD7DmwpDqZwQyafDmHK",
  "key5": "5AnuVNzvLfzKCMsF53XiggUPNtzG4AUjc8S7bg8LzymehYYUieUt8RFyHVXocQH67hj3hc9nwoonY8dRu9bbG1ev",
  "key6": "4ivMUMfkcjrYowLxDvUED46ua74BRYtnJM98bghnDsLF6acCKNjz6KfAoYPoQEuRhKWobwsCUGy419Z5cyapK9oA",
  "key7": "TUkKsQhHZUtf8nR1WTk1jAJBL25gDX8w7SxGx5D9H9a5NUQcNgC1rwspaTTCEqLFq2bSRiZXtBc1pR9pwsVfjh7",
  "key8": "4jbBtv3ozX2BvSDcRcBWBu3wVkZDTkcuQ1xpaM8vjBYkQur95S7zLmVFWVJZWfchtuDhTt3XDR4gGEqafDNLvWmX",
  "key9": "44hr9FHRvUEWv8byva8P5SF9NUhMpKUTCT9kYdn6w3oseVgNrYZpdii5ergA8zS3XLqowVhzcc7cifSZqDaEedYv",
  "key10": "4VDRRMqY1M5Esc6xsCJShvsgoBudrSx356oN58ztNQqpzrMsjFLmPgPZP9UkMUh2WZdduZc7j2AbXQbKahyEi1Lj",
  "key11": "vdEUj55S8SFEGhVVXAdqGdzn5FoiMaEN1xCfzDH9kJKTqdcbCSsVcGwo7RTkhLkwoGesJR6JtnyAjsV8G2nxxBw",
  "key12": "5QkrMk8Wpu2HVj6eP5k5eE1vW89thD2FVXMDZkAcDZ2gqZJbMLv8oKTqcJPYkqvdsQguVopSYHhoomafewVnA9xg",
  "key13": "61VhaUxxFHhGSe3UkdpnhjgjBnBaLmxvUpYNk3wYRHN1wFgHTzLd3qgmZ9ddqhAYmmhM3hPKcMc2UDQRGJ3KBfSy",
  "key14": "5mgFQW3M7ewYCvJUBqCKhtCBF14zHVXgVCkpbTTRJpCMMPoUiRnkJ6XSwi6Tu28K6V8rXQ7bHf3BiDQuZh4gQF2p",
  "key15": "4bqNQriMcY8CVXHd1yr5J4DsqRZUTjV5TZweVWK3zLkpsiad3xqAZmjvizpuU6Jp6ZNKzaXA9bHu7F4EeYCMoE1",
  "key16": "nCAx1WzfdTxAqFx7pWNuebUfyLRaUA6GbwmEFG11XN2VTM9G7ePuEsCV5cdYZRSEr6g9THWt2ERWqmARLATBG8u",
  "key17": "4x1guWYaJMX8wjhdHbAgnw1kXkfZWLyidfw63JwtgX1MGgQ7taaPqLjgNXaE7GSWe5RBbxh8gdXFfisJU27QbLb4",
  "key18": "22jhVQCRvVgzSsptwq9mMa5YHhsBAkhMrnCsRqSR2Pm6FyYgfK6pztNscY2vE41PUQrBugGHxAC3fSZ32b51gGp6",
  "key19": "3empuRMwbjLvfrz5aDhTfBQhNQM5uBpXDxWyHWtwn3FFzqpBiRATzJ622RVaHQ8nya3Lr9yJfhevbXfqPAdn8gWr",
  "key20": "4J3C79ovxj9Cc9nmQJEHutXeGnZYsfq3CtZBgyiMoCroc3Wv1Bt19r8bdjKVrZ98vgEeRdXoZCUNaMyWsP6ECE43",
  "key21": "4xWiaJytnsJ1SgqKyrbJ6KUdqCymfFgu4QSh5jfiFo6c6ZXq6gj8c5QSJgAanojDR42guWKhCebYGEbZYozYRt4K",
  "key22": "2yxrytc166L74vZY55TnENUQN9hyocDnMc5E8aJBSZngSRLB1VtoRbrxBkRKTkR7uq1PpY1bXJp4hgk8jMW7eRNz",
  "key23": "4FNynBYej11PzRUNbwgH3eRxLiLe19rmUq8WR9EA4wnETRNLKBowzC1RqJzeceQXDWmg3fRTZ9vx5aAhopuWsBWe",
  "key24": "4zoa5kQDhAriNjYPwQGPbSd5doSLDpDLqRYwcMQkquZfXhcg6oyjBm8bpJbg7wPEMyGkSwAeUQXX94tziLYTJkHc",
  "key25": "3WecgEBQEF161vjB1zfk3jX1rNaAxa9Cv3fPwo7o3vRBSkCbpJk9JYcCeLftaEC8SFcWvMy2btTV3KB7BZFjNzLM",
  "key26": "62cickh8jicoAyYXCVSB6fjopoeQpQdNUWk4Pkz7yEWZ67azaEuko1nPLZnts8JAjsivgh9TeKaGWeRroHSC5ZpW",
  "key27": "2Yk5pbypbWpgw5hxjcFrF8bhSKnnrW7kadYR94kbJJZyiY5CJbNWG9DSLuHT2oVJGD54S7BtUMUNzfQmfBAFK6q4",
  "key28": "4UHw6qdgAvMX1XeZVXNGVrgqEY9Q8Cnh2tf6abNhQWfuSSznrzGo4vvf3KdBr6MiUBwaTPmbxSsLZx7AjaGWgw1",
  "key29": "595Vq8pR4cPoErgu3WSupqLYU4RfZaWhWm8QEdAZMNraZBmCoXE5WS9SA9aUh8D3xW3HgfDp7qF2QtU81fPTdmWH",
  "key30": "3rzqCUgWbnE4xgQsxyNhBwa5onWU4AQKWCnUpgtUeU1yA4H3hSokpaafjCVTAVMzmdSVgdBMeG18Vrz3WrFMSZwn",
  "key31": "43HgN4tBy4g7GYvfAeZ5LiFqbR6L9Wafwn6Fwur4Ag1koqX3oKKsEc5EkSUZabEje7UmdgPsoVqpGdsDrRnPsSYv",
  "key32": "5kMEGvb9R1bpX25fUXEaujF5qjfNaNzgrB6xcD66YjPbExuugD363uAVqXJed12zwYYWYVsG545f5swo4girMTUi",
  "key33": "sq1cFrwRacAa5VqKd25RSNvpUTzCxESen7ydj3D9VKnXNt883dDxr1zay8YDY1HLw3ycrUBn7BHns542onMHRv5",
  "key34": "4sV1PX9j7daaQHZixvVhzZfNQgWiPBReWbHMEcQU8xdh9PifF66f5spBHNPXFf4WUxnC6sxnVc5m1k5z9FF1jff1",
  "key35": "2oC3KmBwa5F23FgdvjGaupKyMb2WRRakmjEyYTgTB7UKcsuvPLudo2iGpoa249vkeA9yPGyBpkoPQEdqAxWAA2n",
  "key36": "2UE5Aj2qy1E4KigXu5qkDMv24MjzsjKMUiCtCoz12hkjC7yipedoegHE9eNpptH2E9qRqVAkaxRnmi5bHswNLzrJ",
  "key37": "53gzLZGdRnWzyW8qNtxQBkvPRzxAiTcVWd9fNLhJvmvKJzY32XjMuBp4gxL3tkmJQkzkVntCuEKbE55MoHKJCg8k",
  "key38": "5L5J4xPNUEYhXFV8DF2H8Pzy8HFSF5bzXG3h9ABSfH2ccXNiDPQfn1jtxdfeUpuukq4oBu4FLReVuttsY4HtCAsk",
  "key39": "1V1ybFnBSa18crWbpo7Qax2ZKpg8ZjeAD2ZH8DCkzEiutyaW1Vdoz7L2SKDVJutUXcVMw6jTuXwBkoBmLXvDDF5",
  "key40": "oEziJyhXDAWiL7LQ7gdsNNQsTy1sbGSrFvbCyj5CsnggSK7EAfHSM1ZnUMnQ7TfzE5KdasRGgXpzqqgRbTh5SCb",
  "key41": "tGTnqAhH9fFqTagQKUw58ziUBHybn7R5nVZ68gDzbF1CaxeZDUnsDf8bjyadbG6AvqHrjsE84SV4GuCco39Webm",
  "key42": "4o7umL2StBXTYAVU1nvK1tiF5riSpqmoEG1ZovHso8iZg6ja9wyPzkXorcA75R2VFfpxu9QA4Pi2rZTEHDU1SwBa",
  "key43": "65jnz8Dm5mTiv9YEfNo1JkriJZy9Mg3KCT34tvtJ2UHqvgoPDf4YAe4D1trdkrZxTvuToGMrrAnNXznTzehtZxYS",
  "key44": "2FpHbLWP25ktydySoLxnZsTqe4stCgMmCG2P7ZrRvu9pfnbzCk2msX1DmYLZurmcuGwWDAR2TVuh3VLXxrDtUmbp"
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
