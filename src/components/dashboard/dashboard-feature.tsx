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
    "4E38YWUfKsXCnR3sMPs1vvK1zoxzXotb8TRrCLP2C9YSvkLLKiBqr2xpM5SmcuYRnV1vPnRqxRWzkXr5HXEr2xaV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qjHbcnpwoyRwpUEwj6NTRLregDgSDduBJYszj2UTPf1X8DPndc3Fz2KphTnJwAsMEUzh4w3ipDAgX2eMw2aCNad",
  "key1": "pQrYVYQBLCivvWTgD2x64gvgHMgFh2SB9rbqD1Anm26Qim3WmX3ASwvZNtuPGvHXyhNAFvWhxcKtR7HNrA9FhH2",
  "key2": "2J23mzimZWSqEBxG8uVsSQS6YSpG22cbXpbtphMkYK2DqwPw6qKRFw1AjB8aXSGq5an8JMw4in8zpFE6KCZzSd5s",
  "key3": "4NUMrJTHts6cQ6Sg1qww1jf4FwAvDhrZiLew6j86SjxaH6UaBExRJ5JGxkwq173naAywe9BjepjKvaMhCVFGuAet",
  "key4": "2jthCMhpakYPE4KNACjnE76CfCamTNeuabUV9kmyY9XUfjeXSdPwPJQp3oQmexAPc5YFW9SBZ6QKFmzmShsnpiuB",
  "key5": "hBCdeqggNZC2NVke3PDpVAFnZMhDwtSHXvyNc51YLwKAszwxVHan3nkFnp1nBYxYcuaMMqnK9m4aKAmUKTvLn1p",
  "key6": "3t2dKD6n5FudVvHxzZH5FpuHAerbLeTvCwLmfjfkPnsyPm6A6oyNXN23jP2dAaEKRLUVjTL28Wq8Qc2fDhZTaw3V",
  "key7": "4FCkXpBkiADtEUMQSq7or9ozFDqhxH4u55tjewkfgn2ot92yLeoNymtk9Zm618WfqhZHB1gqy4Ry8oDq55TeBm8t",
  "key8": "4rUvEtQXr961nMdrj1k5jtMve9y8pzmEkuxHUMsAEf1ccYMgeHTcgVYR2wb2c6pAJ92ii2kdwVHVMGyQvgaooHPx",
  "key9": "1HMQ3W3AmjtourQ1MUby7Y4LF1MjceZu4D277sWxqN8W2jgYms9N3NcJ1udbnt3FDVLDTfYcRKiM5BFUBskeVdL",
  "key10": "4Fez9FUKp6X5tJFCEhYQ4PaVBJ9kYMrHU2ajoMz5f9dWi61aWL1u7Rdk54p4YQXiR1XLaTFghJntXpvmXT622MDB",
  "key11": "4T77TaCx9Dc27MNLBbvjqLEd8QyEsYyqCnpR4gX1jCF5WHkmJHAgwiruVngz8HroqQkg5dgb8smsXRUG4JkJ88dX",
  "key12": "55W4JpHYTG3Kc32KvUeEbBFKbgLsR8ciJVyaLmS4wecpv1ANAiXHSjKmxC4SVRg8dd9M8iZ1b4vkHBg7dzGRSkWA",
  "key13": "4RD63LFvfpGAK5HYXKCpTLArFyXPCJxYTy6vkfbFLDUsnbbTUSeXbrDLWGM7i8BvcK73gkHkCtioNTFbEVTGUV5p",
  "key14": "52JnZbXwy6g9E5LS1wx4Z4NCeRkWXNLDBPTjAWTJ2W3DMbHcxmJir7KSJkvp8yA1dVAFd3kF3iTjkKUf8y8XjCqF",
  "key15": "2v2ezbPp6dp1qrRjWUnrqCp8eMnEwTdzyaKC9NkNej4kfje3Nqf3k2cDPHZ2x9ACVpbX3qxBuu1gKETrTjJSy7Mt",
  "key16": "4fc2R8QUURTAppEZs8eYWQjBMomKgpPdrXuqLQUurfY4dMsjAHTpPeTWHi32NQ3QiimDFznsrsZjYqxzDgYZ7XPj",
  "key17": "5YWYKnYyLbobhyi9sZVDTZjTTphD2dqzirxPTnWnW1ii131AD9iXJwJDvqTsbNPRk59XM6btDV17KR9AfF2yxyNe",
  "key18": "22nWDjRgamtVHdsRD8rDXyBQayPr19JQcJdDQ66N6MRQXEfKy3ZUUoDqSbe8BTzrWXnTf8UnKL8pY9Gjmd29aTWf",
  "key19": "5zxMx3qDnJ74nCZK6knY5zabDYK17PdphhU6Kb9922TNGScTVa3SgCKjNmg9MhV3oxjNMMQJNPjpgLxuQxtTuF69",
  "key20": "5uNWd5vAQVAUAShb83CZB8my154qmEDbBbZ4Qs8p9sKBPA6mwBGjyhZVYH9TAxukxdvUxgY89xZph623r6csx75E",
  "key21": "4WVHYQDHfu4yzM7V4JjZCVkMcafk4Mq5dp5PkR2eESJe6VnXws9nm1ETd96opYqviZymNzVdEZiXUoNViz2JU1P4",
  "key22": "2bRXni98gVQzT8MQpK3eyXxn9RF7LqUYU7bctQYewHVZQFMptZdx2QcrrB44356eoYkbRL8HEjBxd9jrWyhiBbX6",
  "key23": "2epxUP5ZiiVY2NLQDffn7NfoaaVUmfDLr8hJBUpmZScJw1uUKz4ftqJpHBBXB3CDRHPibkqJCMZbJcNmEhBT5ydU",
  "key24": "597kgekp8a2zoeZYGqDC9wrfH7wcYgr8Sj9Uu2wviMDgidrtjVTKY9dHT2SvHAkGgPifTsncVgXhWg5CGSj7aKXT",
  "key25": "272JcjBbJJWbdoXZeAbzamoPdGWrZF9LyDsH64Eay8DSE64aj54etHLcMG5FzRDH6iptzZTX82QL4YMdM1xFKgTL",
  "key26": "21sznGHAiXxmQWtYy7FjZcCJMPo5R9d9C3doKzCNB9AvXazbLdJDnskfhqyz7N9Xda3tJUY8Y7XVWKpnmMcdrmTJ",
  "key27": "2kkjHDDHY8oeA2MdoNbWVj7TAdsXnhiGkPiszKmkQk52CkMUB3d3ZN1sci56WczwrLgFHTmaLMR4tFUn6MQ5hPrK",
  "key28": "3nRPoacA1hUM4NgC8YWUac2HtFgT6XaHMkq8FT76ZekoBJ6XF1WVyquwVmWatuz9oG2W824efRayvntEWu6K6jGw",
  "key29": "ZHg26B6fpNB2x7emAbYWEn235CFR2qPxRUeMF9MZktQDoM2ADXQinAuHJPFEej3UregcnxET4QgufCcWDudt5xg",
  "key30": "5YSArPxysmf9YjxK2iKAeaLNRZr3fy56qM1Fjs7M9GYvp4RWKuMwp8z8GxQkeGusLAdhgZaUvpZAkw8zGSgbEXwE",
  "key31": "4tu3V1dF2bdjw3dvxZ4d3AfhT5USZUoXNXD2zzyTXWEfx5RTdVVyM9THSzkdxD6oitnjZQXGSHgXtm4XU3f1pfoD",
  "key32": "59YkkqWCXtKhJsQXjnU9QhFq8wVBvFsSKAGctUWtCG92dJYLvArzCFQSQso4okJ8ojzHvQNKyjfarduFitetHyqV",
  "key33": "4AtLqSHo9mM3H5w388bPVDgAbauHKEuqvp6zVnicDNXcG5En6pjuqM6pCTzvPtwrWp6kdpXUBN4FFsmdfH8125y9",
  "key34": "ZuqeUfqcxux1V4NG7zDhtcRg6WgDGD3btDcghgofjzMQNjusNmjEP899RVNsWVXBUtivPvEQNAHr9vrwLs6g9Rs",
  "key35": "2dgw1kT33ycB4T6arrTKJD62EbzZhipU8Z2sPdhnUCGxMk38N4F8TNL7Qe6jU9W3JgPvWVxuA96kLgcDgjxpEaui",
  "key36": "bwSPsne8HiiQTtzePQdckezSKAcSwKh6Apmv1b8Zi5kCFSMhbxmGdNwYUuRTgxuvfR5Lt1qYBG3kdgjgTLb6xsB",
  "key37": "36rXd7QDywzb8JUFwAsrCczffKTaQ5XVgWoaNctsSPxMn8uWeyC81g2mYboQGkimu5zdk7JnAsifbrjwqvE7Uchd",
  "key38": "RsaNZ2GyzH56XasgiRci1nTcTnyXDZ3NDArgVV6i8r1YYewy84k8zkURxFBTFdCxcLaZ1WMqgd8FccJsAxmJX7f",
  "key39": "45rRhFYgz5GgtX4a3UJAt3cvnj2rSKwVamq1RmGpSYq6NCaquayFsiJs9xuq3by7tgmRGRFQLZB1YedAQ9MavtyJ",
  "key40": "3dNUnXsWWKrc7ftKpKRzYuZUdXBS2qzATu4JYosUHduZfj9E9kcDJtNCwjsjT1fGr9j3CnwXAFrS5aNa6N15D9su",
  "key41": "LUGbhtzCXitk2mnxGqEeQcbg85w4hXp64YB3YAWGNkPZDhrxWgvBoPu5W9ptJaAWMQ1Buas9kuktPEVx1ajLKTr",
  "key42": "5aQY6aHvmF8vAB6TYiVF5P4pdE5wmDuQSdnEMDJBvBrnc3YC316miXXkJFNRqTcfyiw6H2KyiABqbFomksHGkE2h",
  "key43": "5SoMU8FzYuHYNwNNV2TVTgstnTCJEvRAQ1GzvBXjBdP3oujCMvfVN72ntEe3ebS6osQoTPZiVGHvXUQh5SW9xFNb",
  "key44": "2rkZVbUh6RE8J94FvispERkcr6RF99stjVQhApRguynWkAdpQHP89USgFkokDrSS39qMsFBt1i8ECPvWV2XZynUz",
  "key45": "3ugSdYjpt9WKF7Rf8Qe1Pet8xS8RvFN3qb1ntVfKQLGEz3XsYnDSzioiYjDJ658zEegJ9iHfPShiDk8tAa43mZps",
  "key46": "zGsMFSbYddRkp2YZFU2kNCabb5oDfusgfp5jro2T3EBU7g7rhk12aUWSX1a4j8KDV8DqBJVuHDKaFdWju8yM7U8",
  "key47": "2VR5ZEbPtf23zr2naRFtwZCS66XTkgYDEYFG7vEiPnGaZrASMqUwFExezRxPjswJeXydAGbkmoKhu7TDybU1nQJx"
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
