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
    "4byTRFPyDTZq7UDjLdcDD6sbwoT2T15r34oJXNc22oBse8KHQWUyPVXWby2DGKgRUoVhXgfeaezDKRTEM5hS66Rh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s6AgQXRwL9C6ta4rB6GUZ96W9opF8wmzxtKJ7cxw9e4rMvwjoB9EwS6aFNedg8kuQmLSW6XjFKGFbZiLHYZn29J",
  "key1": "2fBh7WMo5Skk4oDrS39anPirvEv6MKbiZBrXjAPAGBQiS8r8zysYFGeEamswbcpsSQ1vThkHpQzCwKaU6Fa8K6od",
  "key2": "2iB7aomi5J9bbsR7MnT4MUxf3j27kGhejPobbf75Mk3G79ZG6V4oiTzChT965oSfcg1HGqfSePn8YJ2h4ux13iAD",
  "key3": "5cXB3HTjoDDimaF7LLFFfFkv2S3cJVaHvXG5BPCdqpyZ2kBhX6ZPbvYPMP5Gp2oyvKospLMcsK7U2NTPJ1iB5g53",
  "key4": "3YLVJs29ASiRRNRGJnmyjHSHjdgQ66ANfq83Snfuy5arqr6AvNN1B2w1rnfc6o9oYnpF6uqiHEety2jmMfg5W4h2",
  "key5": "3BLGg81xwDe9YLQNA23a74AfRVWAugVwYutEj3wfWfCzzYicC28f764cf4aQEtELMDKVHyddbo1UoMjfXR53jQRw",
  "key6": "2MwDzqdLTDr2aedLenDVVjsym6oyJtopK7ta1mA4kjsH9PxGi3geygTm1yAdRwwSB4wTenSDnvM95xYQbKgseoRz",
  "key7": "2yr7aXgp4pK4UfUJEXKBJhyESfr9n7GifSL2Ummoe4Sat3nYHEpJ4W3yh3Gde6mNjBDFoWUxQVNeBEx7B3h1Yqrx",
  "key8": "2ABT5e4k4Byz7Vsi6F7WQA275gdz9pLwpb5dyF9dnEsRbrGsEBp1zkmwbFtBc3ZcqkoKkJ7mZ2EPUEbdNGGPzHb6",
  "key9": "3kXkegedLuDfBaSpfGq9JZz8xGJvmbEQcZJ5tqBv7nadcaSuBp5m64RfArveDc62C7AuJMvQK18QitDTgVTQ4PkM",
  "key10": "5zuJbTY4ERrPnM7FsHGFBG5hLehRqV4LPArF1PBWzygYH7UQxWQc89FtxPT9LuRmDtYW68sr9oxGNqtwoDYeWXvw",
  "key11": "4zNP8ThD6nxqEFnwByLf547pWf6XQoXo89AudDL9udLMEk7JEHEMMMxMUrdUywxqUkuRgjg9WXZZVMgjzH7zMN83",
  "key12": "2cYPeq9ib6z4dEUBiiiUmtW4DTW6j4yqzmGxU6wLoDrvY11WRNXNJjqd5i7Gi7qJX5naDCXM7toiwMmFjMp1UmZn",
  "key13": "33NpNns8GdqUG6ZEJdXKLxrGGEmazbXBHgvg19ndLAAyAuCufCozBNx1jRFAE9dBHn1M1vxAWTsJvZocuU3WPwQE",
  "key14": "5MnadamFLSudqPhZqymeYGMAai6UGiaTAgB8jHBTQ4tDidiG5GkzUzgTbGTPbkaxjBNvQv9RJfy35c2kXEKAeehx",
  "key15": "2te316ABHfcXib4P2NxtW98qcurKThhr4dQfGr94fw9giuNCDp3pr6iBnrv7JFc76wwRcLs2namaNVcDNembyn2Q",
  "key16": "5DyitPhfLDJD3mYM9KaJzXZ8uGEXTS9Mh7XnnzAVBd3EpHcMYrDd3beysVFGQS4fYgeuNNpC3wAc65B5HVhmDyup",
  "key17": "99gUAp8Y3UCwC6b2hhYXR1KS3qWQc8pq3PmRCZPDTUvDEefi8CeBaiHbCp31oNwb8P7fS7c53P9CvR6VTeYXP4P",
  "key18": "2BikxiRirvCfbqAoGUibaDoqE9DPwBm9nA33S9B1chwaC8UA72knKSMGFWKwBjeE5QGVnRVNKPZD1YnDgNT5MENM",
  "key19": "2PmXzfJCjqrQzUz6CokZnqXmeVCcy6poLbkuY24a3WpQp3jUuu21A3WRgvyApEVcFVF89L1cXc99YLw7KetUwMYf",
  "key20": "fdoRL2dYu7V8XQzPHYGtKxq86FYxPGHgs9QP3KfBTUVjWvNGPQDroxSEdZshsAtktV7mPDje1ATaSYGVM2LnCYv",
  "key21": "3bAKd4fUtnno6hDz8ixUge2JFGYLRnfhnqLRnwNaWFnvGyFwTmh2tAWpodby1BzrTibPUSvcP5U9wEJgE9vZQRy3",
  "key22": "27eQwyNtt9GqMUysRGpVZTAzbuviUe8kuBFBka1xidvqsqkCChsghLbiECi91uFNAXvLg8WFE7GdbJJiCmYyB4TJ",
  "key23": "5p8tvJBFdTND29ynKZHN9fFPNrFKgCzEFbkbUgtxShA2HYEw4ybTbnZq6b5JnZAtQxLA7xrwjrXtxGs7fQJdnZ2c",
  "key24": "65wsCNVrHBw6Aw7PW5drGxBvQ9z3RB1c48N8nwHGb8tonZtvLmSvwrUA1gkEpU5iQEFTnpa4KLrWPnWcuACBmnuN",
  "key25": "2CjcKKztahWntcoHco9jZYUjEtDnzbMF25RPnokZcTYfK8AV9tF23bvDhJV4wmFTRUzSB5bdDUo38NJQ4RE7g5PC",
  "key26": "65kRwtwjnrFcgvddcqg7LToeJgbq8max6jpoKby8ERHqQJTa4WkrVTw2KryU6TGj52yxSKdyDaY8xCC5MCBZ39so",
  "key27": "2t5vE3hwjENRPJ8rnR2h7bwZEuMY7D6cD1b1CfYLrY3b5vY84FmymUf6Q7YMMxARcqZfjYLaYQorA6yYqVmhiM7M",
  "key28": "5NrCdtRMekzdg5RndndbddEt7dfQNigyEa442aSZD56DzUyXxSHqKnzhyCaPrSRiahxR2Y8dg7PgXa3FYt6NuvWU",
  "key29": "59J6He78NDcpZXESH1YSV8DVbM1UpfDfagJi7BMs89YAxoAMVEySJ5UWLXPJQzdQhjHAMLrMjCxNCKKLS7s9AaV8",
  "key30": "2f7BjAvDuTx8JnGBx6WZtxxW2EWWip29JsodVTyffWcv3J3xtWT7nXpmsZBFHQLxjje1U9H4pzNa3aaGoznXanBU",
  "key31": "3BLxzYMXauViJ4zcJEqX1sLv2rA7aXhe5eiEP3YT6VbBQWZwRGZV9vNmyHPTDEiD4f3XFuMCVdk8UtZWUPv8NUH2",
  "key32": "M2z5r2pQoTWhrJakeQQ8sbVUXY92Ms6St1rfeaWbM4QyjyZS2xoPhEPQSJHULdwoQt79PGLJPyUUNnrJHXnbHDw",
  "key33": "3Ssvzt7Wt2Bsw9gbgKZvDesuX1U8tXw7Ru741GnYYFofkbcXF9mzNoG3L4og9c688K4NiLVv5nteQkHzBcKmGhdg",
  "key34": "3xdPFbDyNciEG3wtHPoa5W7666FKcUGGb1zS9t9rSS6o6KxydeQSzdh1isq5jB9jDcnxfrvnov5KKBLfrABTLRn",
  "key35": "5ArqJV3jZEXuxVkDjJffPavBJm9JHMsjnXMhnMErrYk2d2YvwchPkd8eLCrgBz5EMYxP2VhgqTaULbEUhucPdYNH",
  "key36": "5apnSwzGnVMvDo12XhVxTCNcMUsWqjiWFGv8H31XkpBHDh7ck39i41bYpUrreaPr6yjHrLzuoUDaPGRvDeQZeUTE",
  "key37": "4jwR1teGaZJ5ejyCfWZtoaT2fx1hMQ5ofKDcRqF2MqJ3pkoMkS68JUHgDqNjpiMcL8BrDHqVyfd9hYiEJGELLYoB",
  "key38": "3jyFTCSmnpQED3k2oDmFwnR8auQzsZ3XhrUSbZrWZBGUvKjCM92TRX4BsZDKjQKRP7jq34Sf8yx7wUiaYSDp8dBt",
  "key39": "3e5aaKPRojrrEJ7j27ekXDeVCQ9AY4xb3bCixuqRbssSwEPAxbA1tmNXLPv7VNSGuWqP84xRgXJGrvhwMDebDray",
  "key40": "2MwSijwvoeaxXLmoUwncQnT5YfbHtowLXMK1EDvVE42NSESsJjqi2gLBbmpDdiVUuUHejASR4kqUHBSDNYKE3vZT",
  "key41": "2rtAVgugufNsvrF93bB6nA5vn8yTffePq4b6QHKVb2KXfNmhCsn94tqykP5VGEKEWjeh8P4hpctLTu5jk2hBojQk",
  "key42": "2GUyUo3s4gMPpRfLBnqpaHUBRi3GoTmv48GV683ENEr5JzMmYD7jjYUuL12fDQZXNzHxqhTd4tUSvdDoJKBqVzyA",
  "key43": "VMMYn3oQVkQhPpJL3xMy2J4mPCQ8JNmcxAp3zoytYQWvVeACporzFYzQcFfNv1w5svgoEfgt9zA8kDdDsBjmqk2"
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
