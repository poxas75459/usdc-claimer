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
    "hkKsFYt5qxSYZidtBMmt6Dkmuv3Qxqn2HH53bhDbSLdmVDX9GCaLuQKRK41GVpjWhZsQw8KaEBCEodz2U66PL34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E8CYsD7dwhwjK8kUKRUpuiNCCv6b529zC5N2Ud52x4jEawJ5qobCwwNsSJMv5PiMrPDhJBe7BPDpUbhZcyLWBv4",
  "key1": "5UarFi3CvgbG3D7xq8sFnoSzRhyrJyktyKw1TaC2z9yAWHsqa7YsVt94FcCe2fweMQtRpCKZxfLZ2fd6WDZRY2yt",
  "key2": "5ASkNKpgYqrwfYM8fNBVFRFEvNZqLjudKo6FEykUPtsJ4jTC6vXTCybH7RKs4cjpCEbVWf3RmStGR8JdB465K8kW",
  "key3": "5Hz7zRGVp2QJ75NxUxacJi1A9UJ3U5S6kVGH3fRaCgo7Jnyssum9WV16WPnfxgtKfwFzQRYGZeLp16fvtqZgFuoY",
  "key4": "4HowxJhohHN4sQivMxV8TEq8xFuCFnbJBzeEg7dcqwDy5twupLa7fhY9CWy6HeciXdKqzYAUCb2TmnV2yyuTB6FW",
  "key5": "38wfxi9nnzTdLaaVp3KVF3F93rd2ppwG7hPUikcAWX9XSaZUo5evfEn3YohSDRszxoayF6xLooiZ5qpUULJSxfDq",
  "key6": "2SWyDgXNrBH4eWZCquMXUwrywuig6wBCc8ipe9HWPTD8AYDQZX4rsAvBnURhKSiY5Nq3ettwkhwtgjGiw2gHtdLp",
  "key7": "3MvEXuniT5xyS1yc6XaEhyswzGigXCbAmKKiop6EVpqXbLiBnaByTJ4hXontdUcgGvWUFTqUuaFtXgjpBx4dA4GU",
  "key8": "4n2X6ztdfE4XcHLv2RpEEWiUHZAeh8b8wqfTYc4MsRKBZR2PsnJNPjwTtPZFveedizWtQWU4YpzqbfAzUa3TPidY",
  "key9": "4M7nYiF4qXBzENhFxD2MbGHXLUbRK3usSnGvzB5ikkn9ZD7UCfSzNTvgmE9RwystLWxKtNvCapbNEuyVv6qZrNYu",
  "key10": "2412RKmvps3upK1KX5Xhcr7SEmm5GpyazRkcczdhSc9ND46ogv2eAxaTJK7H5QMc9LYm39uupTYMQmrxz6TagEgi",
  "key11": "4wiYzrq6cvhWnwYagYtuQrMsuLJDFcRhSBeDDfCqYWoNz8hXcnXCWDnAUQJgTPmQt5Y5FgWF3wgMVkrAqQwsk2yH",
  "key12": "5c9a59uGjXeiJewrbEfBR4LX7EZeXT9JDJARN2Zm1JokHoH3BRBDmmRpGJaTjoVFTLL4NCLrP63YAC4R6YatqiD2",
  "key13": "4Sz4ME23hz4PJiwLhbYd7hHELs7a977BheJA2t5JUvrJjxzxdTRtt4PD4ikEnx3uzJYyDYD1RpXwTzs9GuJ3a6yu",
  "key14": "4rxDD2mYo4whN2FvHXEmksEQCYRu5cVirgdnDMzSkN9UgMf35bj62AB1DDYuxgRuv2TpMZ3zsNVqQoMbdHzChtDi",
  "key15": "9G4GcDF7FfCyenTVPNgZuzucxmU38Y8A89zErzNotH1Lt5nc1Gj3g2QfodTvSnZW3zxzMx3355Aj7reU7fBGPkT",
  "key16": "5PWNNRzBGoVMwjSdFuSZoQxdjrqjHdU1rpvkWK3upeFCtZmfafLo3akRd4s3G5hT9c6Lc6dEv7FG528LPahqJ8Zb",
  "key17": "2EcSHS44VHUsreoMtCTG4zUejXZdJ12WHU6y9HffP4VVnWr3pAU3yAB9SDgpDdxUir4E2TSWJ8DvDA3fF17wm5xV",
  "key18": "2D4kS4SM37GcHKRyrDhfvinGtr9o2h38UD4siJQe6FEPfHELwcv88yhXUoyTrgRJHS9YzbTJg6GjkJg5rNcLnoMi",
  "key19": "uRGDBGtmvgAHNmJ5LURvX9akpkhBXXAABhzL4DtERN5K5yctZVAQQZdG7r2jFyRdCnFQnUqKZXiuWmDu5Vm8rv6",
  "key20": "3rtn6pZdXWk7ChzS4HVSnpcWENJN8SguQcKWiZv6T2LN2zdbus5vC7uRQc11Lj4W9fBQ21CSNUNDSVw4pVN55qYq",
  "key21": "4RK8bsxy6yMYD3VgViw9zoJCAndLCBE3ZaSVtf9jxxTgBfwtEVdJiAVjdRBN36jKS8vuma7b6XtZzpHxjH245fh9",
  "key22": "3u7WTS6m9dLc96JpWsnPfV8rPPFtjskUTuNHTo9khd7dnAHUFeJfwy957Pzsz3GUCoZKip5oPrNaXrX99CdNsYgS",
  "key23": "5S2L26Fa8ro2B2kao8EVLUsPmnR5YWFAyKy7h73RSHjM3P9ArcSncmEpRMSkBzx1fGtVwTBfnrhnt5zJT3BQdWSJ",
  "key24": "T6FG558zsYtnjMnLhafA8wAYkKZmj12F9duvyNkYuK8hmQiQLtpJXihV5ZK5i8GK6YAkPmS8cdJQAx4tiBMsu2z",
  "key25": "4CTwy7MSfBoUHgVaXMowuTsSweejzMmtZNNE3yASSBiMeNYp46bSD3vyk38VAVBPAkXQ6kzCYKEKFR2YYwZfsM4P"
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
