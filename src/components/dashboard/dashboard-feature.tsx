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
    "5hPy5nSsgCY9GLQi4A9Cvm7q2X3xNmCfczYnpgaanK7V9TjraZrbhdxXztQEeQpFVQDBRS9QvnuakaWn7T1WJYEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26kT3kmHC3hwvje3fMqDQFZM89xR52MrWsLShXQL6u8rvvuK8sNY5X5CCtqUw7ziMUVpe2X2X4cDu5eMVBrTHHrE",
  "key1": "3WoCsqbGs5tE5cHQjzYX8daikHszN1NCJTAMRuva5iVmRLSHgK5TADVo4xZmaauT9H76GSNxTtUo9fR6Gr1iaCuB",
  "key2": "4vaPoSXaRQkpVN7e4WptjKGByGopZiS6MTnCyPb34rguSyRFJhYBdnT3MLwBzfLYHVsb6yJNaR2K58G68NMrBnLR",
  "key3": "64Zp1KV2ezegsV9Li9YYNH6dEVRnwacc6kpaFqymrrFYnx5QKyvPoWhifonLnDaRVwySpQvQiyEdJ41WsimypEZT",
  "key4": "4nXJqQMCBzn6aJTbp2Ypg1waSejMFJaiLaKPG14R8k8mZYuaVsm5HhVbSuyMKMSPu4tvjaiQRGt4HEPYW9g4euRT",
  "key5": "TbDFW5QHdNgVY1epiHqqWDFaXKZMetfdegDRjs4ueeYQUH2RSy3ucq9rxUbmoXRQqckj6WMWwN2Ms66PqzAWMVq",
  "key6": "4T4iQawnsyqhCT7BAEZSLEtnLwwpPBVj6mg5138AEsYK72SSkk3CA7SYGoPnUMxKpZfhp2muZGrnmenKvY9rafvf",
  "key7": "dt3haXCbkxisbvtCkNCPHi9j5x9WiHApW1bx2vipgTjwDXwmr4Sp9ugs2F8D9mJhs2rZohi3JSSf3f4nM8bCU51",
  "key8": "5C6DctJ6BvjdXS5iJCut4JV4PSiEcWKJjZsumtuPcj5UG6YBSynQSeUt6NHoQ7t1nhYh8gEBdiG5GPMzVgBHSW1U",
  "key9": "37UdXKcRuhLm3AqPaG6u477hnvMwAMMBdaEwsWU9S6zDDDs6u7xuiRecx3FRwtJLaM36kSNN2FeK97c8Riu7hUhS",
  "key10": "2QMgQhcgEvKrQuiU7y9TqFMcupukgDHeKyMkoZwKij9fPbpzG9ihov2Y9CJYjjKKVQEjj8rrRtGwzQSqMyHpwj52",
  "key11": "3xfmUwBQTYaPMS7h8CJq7aYJWuqVbcQyrMksEQFmDVSMYZjhaFWFV9cYYHTgN917vdbeZdvJUj4SFhsTMX5Cnhnf",
  "key12": "2m6QjonGu1fTbywmAUEF4xoZ5VJmM1j2Z4BzrVFEct4tzfMFAfg5WyRqV6Rm18oeLcvE5e6RNuJnXPoia24T39iG",
  "key13": "xnKKw7jW4TztPK5B1nTLDK6kd49NZ3oA5H62uU2EyESJwCx9niCnXAzqomcp7CaAPwmWdJnLFSXcDYnG2f74bGy",
  "key14": "5aSoD14hnRCSdARSb3FYm6aMPhb7tbi1KZeFvopWuDmkCQUqgWfjL8w8MyXMUZFqbiK2zqwJskijMCttvnzkdXJQ",
  "key15": "26QkkyMd7Q1Z1R7gwjFc13vLJHFzquKWtSXCMFsfcnWAiG6UwVfYRUnFMqhrD6oUf1x9NbM5yYBkWgj5Sdrui2FQ",
  "key16": "4kgz8zBy27xhKU7iewVEzWu6DaKKNSwwtoz2Vt341kRddjN4xUTByZabMK9otFQmysM3uWwAFfY2jZiBQ4nMnUHa",
  "key17": "58kYK6UKFXhnoF7DPw8eyHB3eW3QwptXHfuTiA3m978wNxoujsVQ5WWCgQWMTruPqfZFwCTtc2DB8YXfKBnF4DCy",
  "key18": "3gY1yWdE7eBF4e2uBNyNVUXZ65WUk23jnRgpvB2g5vDD6S3WmvfNXqoLY53JMev4UKKJYGGtihpXYHWPYg9AufRM",
  "key19": "3XTEhyYKs5iktZ5tqqTPP77pb9K3geDdW3esqGduUCY3bc97Uwyfu74jAQ6juwPjzkm12DWTiTrRm8fjiFbV4srb",
  "key20": "5BCS3y2tn9pSeFrc6R3xLT4WUaanUTTTySz7HccsNV6hCqNSQ7A7Ez4SVPHQJas6xngVgPbh4aGnKXLpk73yo6cj",
  "key21": "AViNaqyQtoYmMGhTMyBFNz6Q3RKbXMBx2fLhg1LoWj246KUQB6Cw4Ye2gJDxHxQEUL22Rw3gfVm4YUvKYTgngzr",
  "key22": "4jG7Awmyr7LYmqtDei8a1tyR5pZrkYs3DQBTWvVa7ScsgmcLXkKt8p8zwfFv2taSGByLTQ9dpeN7EutfQQbLGYWT",
  "key23": "3FRNnJE9J9W3YXS9nkqiqDaFbRQjiFKS7GHRAsWNt5Krcsd9oBpXeQQhdhLK5JpqHcVx9p9gxfzW7JJpftDjnUd7",
  "key24": "2jKXoovPzK3EVQWr5sNRCSdTScne4ihD4okaYPK9qX7CoWhzFPo8b2Ptspi4CV45cHiGhnfspEB3ejb8Pz7ZdPNs",
  "key25": "5k1kkd7pLBwgEu5rQHo2kk14qGZbeJcSykcbyUbg4kQU8FMdFEQN4xmQ5933Mrcey7HEznWyQj866WraJgLRhDLR",
  "key26": "5nrQFuFkwzSD3V7zy858yjCTzCC2UZD62hNuCMZGx9pY6j5Cdv54zPH2Sbgd24w6osjRDjAzjxV1XSXgqynWfQjQ",
  "key27": "XH8kUP63StnSjYoxet61wM1eNzLovcD5ygRYde1JyhTjaak8um8dya2d13cP4mVxiHeyZ5yMLeLrNwFF9x2W8xt",
  "key28": "4aqpGFgjyCwEmVtsi77rdTJQ5diB9js83GWFoMbkSWC9EJUrKh7P9XWF9azqCx75YZr2eFMfPg1rmHZSHn4jaJnz",
  "key29": "2dbyPMsBGqARdE45wsn64BGPfszidqXrXhgJXJJvu2Qz2HxziQcH5Kv1Wo9VjeYaEtSuzaiw1pRAzBGyVUwqW4fr",
  "key30": "PJMKLMyZVXETFy5awEmyeUJYgzqftisL3wjim5AoNW8ReYWHQBsQ1Ebz3JqADQrx5TF7CkNRqiWm56A7y1Y6xeJ",
  "key31": "4dUVnbYfVp2HVjYvx8aNBBfFxKVcSKbYAAja1hx3tVwAPerQZM5J7xzaWEanLfiqBW88aRfj2nXx3Bsqp2Byfatg",
  "key32": "26sajNP9a4Nm3u6Vpg47K6btuFTmUE3Vs6LPUeM2U3YEhNahNve8ZQCcfHWa42npghAUCT8knjDXSwWgNokdS1Q6",
  "key33": "s51JmtrPFxFAvQCKaju7mCYGRMc3uqDcToqVpqiYJfv4rraJkyAGD6irEVasmnsrvKWe4Hvip7YAGPK3rrSfwFz",
  "key34": "3sxAP79HSkA6YaMBMoVDkTZcihGMH1bLDkrDE58RvkKawPwDZ8FX5pZhdLFR6c9kaksEmH4Xv2Rez1docKCDDedQ",
  "key35": "46aBaYL9Bb88MCPQ1qswWuSA3K9UeWwfV7R9DhVUTBS13ddxBNkvQCgLLrKaTc2Cm79hQWmRKmfuNmuR6x8snfxq",
  "key36": "4fN1JpFaXrSuezGmrMSdMaVJJxWvqFawL3YjxDE44LRZqM4UtMwQBimMboFK9HbQKYz7DjP7fvbAoiKUGtcQaEnY",
  "key37": "42Rrfoa8g5LZWnXqu6JNyTpZYSaNSDL5PUhM9DerBM5nTDHVNJBKdUvsR5GocBk8pbKZcSxMxv13JoRYc11PsGsq",
  "key38": "4y3SeuMmAPp5oMoabWPB9FotjSesv5ja8qdDDpQbfb9nTuB9HWvN7MYCGNSFo8xxyQyvkGbsS2Kf9VJktwdhSQ7P",
  "key39": "3HYTwZCTBdyanmHmytKmw5cAc782iEGyYSJoRYHs4YsJdvNNrUC2Ky4CC5i6kswGkH8LX9qmkq2CXNDrtLFPeN8h",
  "key40": "MjboHyfXdCRUNrcz8Tm912TVAJhigXJPbeWwGwt5hH3NVjUBWE3aEtDmS5FgHYpJopUCUUo6TEJ8pVWxFAZtHnU",
  "key41": "4CjLAA3efWfYDFp1W1h5JsL5EqWgw88vrY8fnkVYh85GYRysbomi3LYzxAN629rV2weU9hhUYoo1shVCSwfRFk5a",
  "key42": "64cbFzcVR4DkcZdDAJSmV2tUET9yAU1z2JViiQjVJv68w5SiQXtHXGQMnhxfw7SQREaw4vnn82PmWKuKXEz2h8Pj"
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
