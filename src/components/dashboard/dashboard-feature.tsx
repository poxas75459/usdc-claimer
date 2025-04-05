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
    "2kiSivKVqAGvK3SNoFuXHquiLJ18Mr2HAR1vgYPkjWhE2sKiWZ3An4kXwiDWD7ScyBuwmXJ91yTGGxXUGpTx3Fwm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cB6KX57fx6Y2aQb1MNLT2JuuQpnxaJpLrJaq4Ce8ji68qpE9WgdvyYC3uN91nDjXazXFVeFHm9nMoUE78nAY6Lb",
  "key1": "2jxEiASMvhLbjas7QCcjxWGZegYMu4JmsFwMPirK3PZnFwsweXmUtaSZ7V5gAkeEAqAPx9okeDzPjpMQ2rxaDLPq",
  "key2": "3VTgH1uGngNwC9unKkLDMB1yYkQdDy8sENrya2eAqM7jj3pF23YJ39R1eEvf4fGVxVY8Xh2gZWTVgvMvCDySyDTv",
  "key3": "3SjmL6WqtsZTt3Zjeg8YFkfb3QfebHY6u87Fahan3GYoNePkELioJkUwoLN8pBedDBivZDuiurJvWCrPqZUmeS6U",
  "key4": "49nCNY61Mq42paPWvkC6F3zFg9kFDmrzcZHTCFRBMrnHMhSZMN43XAGD6HmLMfeiZG8kDbsiWACNGrM2SzyYjBpj",
  "key5": "2S8TxN8pCgVzPTsWuyGS5gNYSPM5C9owYpVxspfRtA4hGPLekZ6XTwH4m88dGtYhYDWA6CpkYFWdpBnn7xmGk4JR",
  "key6": "2Y1K8dkEEcvqGxPUhF2QJVML2wqNshVwayYQ35iKLrQKrUabPac1hUxwzdgyxipsRY3s6Q9TWqPyJThqy2jGLDuh",
  "key7": "2km6sZ3QoqZWExBsgsfPCXecif5jkAbGSUvgzbnRXfzqepJQuEUyXiS1JZS5XSeMacHQWdoJT1tHHSC1F1NhBemB",
  "key8": "9rwyaiHav2ZHb7Q2AcApwSwGw7YfXziT3D3wdQb6Gz3S3St1jXp8iKGQeYUfqSD8A8SR5KRReRJ7SBsV7LugLHp",
  "key9": "pCph4f51tAJqe9yAniWC5gVvMWxVT8hEj9fc1ZnCDiyJk8UrHFZBSyxVBf9SfrAWgRHPUfhNnt7Kae9kXCNem3J",
  "key10": "33XL5e7hGnuGmJmT5EqPDvgNbos69Gs6jSnryFEftoAPrWPQYX59LURLp8DuEMyagd5GupEjcKZ6gK7tVtm52Hkc",
  "key11": "AEaUA1KWKDVPvgUv14AYnVYEgYbPBrUs3jKhQPCXBtgtL2nmr1JywgTtUH57dm13VvvGRAvnc4snpR2Xo4Gbcfd",
  "key12": "2QfNbMSPogrEV9ENMtAmmEmS4gxre7UG6Tf27mXER3ZJdsNEVAQBoRwKcstPZn1aWRnrhzd8NfMhcxa57MBBjvYy",
  "key13": "XWbffQrmaEeqt5eABLtd7QuTeXnrRjw3QpeqXBtZyQp8L2cTUNNeoSo6iaszR7NYVsBzZVyKhfLkf9NYxURAeGV",
  "key14": "AggUubftJQU4yv7SwrkCHuJWjMoQJbARmCq27T3VDV5e2Eqdkbcxwr3JsNNfkyBgbVRuBo8kZDRwS52MWnXyJNM",
  "key15": "2PDVuCUmj33BNMJENegi8h55p8tEy4fX941jKu9BBT8tvUpBjX4b7o5k3JUVUVxaBP5G3PNszZVqoSMXRvrrQivx",
  "key16": "5b1TUSWyKaj3ofnWY9NChwLjjUUxDzZhsgoSawitkLSkWUKhPAi3P21dcWvH1jFCMo1Y4YotSjozAfoxN7onVxKD",
  "key17": "2iGY7HPCYK9oyHL3JxEexBJQQphsUp6nJ4WjdcXq3AwNE2iSqHApHE3zp3EMteaMum3hQQ8B2JJd3sGi9yr1iYuY",
  "key18": "2c6jmeBUy8y7h9smqZZ6uL5aGbTUfs5nVyCbhqsPuKiSzocL5xLGBYPco8ZuMa3bZpJdoTADSAsm9n7yo4EuFTXG",
  "key19": "34w6nvfazmgWBqUdgtJGAmbRPMsQ9nhoSuLvzP847bxmwZTTF6WrgzNVdBENpT6djHKBQJuS7LFGYBmT9Sx4ABCS",
  "key20": "5qFanUi4EPaX3h2jHyT66sYB2hEWxzJGaqDB4LikNTkzJr9hMSke5gUiog5PUSQB7ZZPfsZyoFJMCaNyijSKCi18",
  "key21": "5En53uLoywtsNkEzt7gjeEo97tCzT8vGXEr7uWhZ6iscEwSRqoWBif9A6AaeZJ4jLGc7yK5pXboRoQGP1tbwexjL",
  "key22": "3Jq7dBiGK3zbXNf6LDs8bKDcw4iFvwTnn1QjZ7KqAuBCGRiA82KKk6n94FuhkPy9a6AgqFK5PansJmJBVu3ANq8y",
  "key23": "2jgzZhQHBs6ZTxmA3XwgBV2tbFQmwKwyNzTiRjDrUEoTkD67PCGhrdFRSQFs5pWoCedXgUf7c1Qvqe1ZacaUmQLZ",
  "key24": "5isQ2TZq6BMG44kh7XFLyyhGRgJij7uaNm8bDjAygbrXm5v43c2JUvZTCfCfvaSPZt6aB2oWw3PomJsfym4JLq2b",
  "key25": "4SFK8jg52nDwx3jLGqAF7HcqnMxRbERYJyhnmF2PhHET4Q7x3RPpCzcqjyYTeVfL5HnYXg1sP2uru6qL3MwkBQR",
  "key26": "2GyxRXKvH38NQzXdUq2mCrFu68TWshn75cZBnQZHPKNuMC86e9CkAx2DZqNDZHo6day4Kg2vdGx3fzwHbFQ4vcRA",
  "key27": "3ivHNAbfSkuno7bCzsNYHZWeJWbBy1ffYukEAqQEfL7rbP4Ajik3t2CV27USiQdVt8dz6Fr1zfBjLXZ5JJnvzLLW",
  "key28": "Px24xySX18TyqGUyjhMFfdQx249Zh2A7PQfQUAh6MwZCM5yAVzKmVaFfw6GDtZtMuAWFwpVee8PRVERog6iG2NY",
  "key29": "5E4hv8kQrC9d519bCPQKrhtyykkmiha5eoa5TqJvX5hCWTey3jCUa5FLFJjrGuA8btKUrMhg3HgNdU4eis8V6q3K",
  "key30": "5TzMxUiQxmRn4zh75Mu7ZsoKP3mLq56VQiXV3mNrqm17JLB56yTLNx9b1fyMirgTrMPqpJNifnGF4f4mucXTVrjR",
  "key31": "i466LsYGJJJ8QY8yK9cyusD2kzJ7h9sRxxrYCujVRGvsaU8UbLPUXwdAeZTyf1GpwNgCW5vy88WNdkTErsEwoCY",
  "key32": "2oy8f9MT1Xvn8xXL1PfbXEJMAb5hXaNAiWwweayFzr44LuqqisUs25284AsJLzNYzb6VUWQfWbJ13PBzL5gimrKa",
  "key33": "2QonQprC42QhiU9eRoxmbmSZT8EsHHmi6CAkGzifNCt5LjALHaJcjpQkzmDymCsNwsVNjizPYoozLk6BSVPdFxe6",
  "key34": "4TTJDUEkxLeH98YmBhvCTFXeYC2qZqpdXAqQNHTw6dbr2SmSWK4FfbzNgtrXMzjG4N2d6dkXaVjNcngcBGPYxW4P",
  "key35": "PevEZSFcz5A1qhAyZ9PBvHzu4TwyXTySuVTtkjoZzor7LdKn4SAWRVkmbi8xiFa3Tvh14iTmhe1kHDQBUjSXcCB",
  "key36": "nHHodHTzuERyhshnTuyKJSf3AZ7Sao8QfU2ZLMXouzERWZqMB3suYUpYh81hqonKTUa8nMmrcFE4CzK6eppdBsd",
  "key37": "3KekzFvdUW3hKEmE8WjfJiRWjMMNjKmQpYMNayYcSBs48xUfczLQjCZce9YrigcaUJKuYYZg9xHbiWLeUESigpyg",
  "key38": "2wxyRFcsjzi5U8G1JHpB7tAgqUVG7Mh6Atp7BayKYi27yAP8TFpbRmbJu1fe5DkSTURykHawFRc22pxxBKuiio8F",
  "key39": "3pZBLmS19jrCzmUAY57dJG8nHhBRUcY8ivdCdov2viWeJLGyMqq54pqJxAaxJL1RUBrYeEgX2CuyduZKNPfCcwzD",
  "key40": "4AbjKNboKBfbf48Nv5HU6xET7tZ44GLCkimCwY3kR9L4kAyjSYnjY1FniBjW584p4kfLwqBWcDv9Fu2y2rG2GZ8o",
  "key41": "3m9S6oqBq1D9rLqoKTvy6kB6LEP7vVSuKnyR8t2ZGw8gUMkJGmmhrsyUZVoDnuD8YFs8pF3eEnehyM2roUDbRssv",
  "key42": "5qXxLZHktXrgahHABejqLatK6uz5jjbVR44myFTtukQUR7d95sBfXWC27WYsq3emgJMRyMRS86vdnGfNfMzj9Fnu"
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
