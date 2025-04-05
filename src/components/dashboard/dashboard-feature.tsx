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
    "D48syjnvUdNUjw1RRPZNwtkoEPLFBKXxW4CN6wA9UVEuLai3mtBAAJVq2UyJ26gcVBgNFkMCNYGTTMFhBSpWxBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V8cWB9KqehSB5fbD8iuj1wwtTEv1myYyt8iDjKNTKNPsGyZyND6NEUErWkqk5FqDEgC4NAyCx1zJqmxXxQK8dZM",
  "key1": "3qoJE4cHcdZ7XLx6RXGtmis7a8d5PpHZ2fQZTCMXxvBsLYihyRWrVReWB4o3Ek2ZjTb4Hb3JoBNotytvjjoSiBgZ",
  "key2": "4mynKNWgUBZKRUoezRWtAHNPwn3rKNyGf6nJDnnGHU5ktYK1DdLgqDtW1Hv8Cn2h3vDBhGNtEufJ5xW9XJfrfV1Y",
  "key3": "4Bs9hXo29CJv6si1y5Xnyqq5mcvjSqfC6bUBURDorTGPLtE7vEdc76zifoY2CvzFV7TL8AtpCyDMVqYATUEbL35L",
  "key4": "4KSnFoZRHn5G7j473b9X3hNmqVVykuVM1GgmX69ofp5D5d9HhR2q1BcRKvQt4psScR2B1HcWrvtsB6dffVeJjr7V",
  "key5": "26tV2TPgk3s23AMLj41HckhP3JLBgPfYzAPfzfy5sdQuVUP9zSkpw5HAj29okDuMHmpLCFreT3cvu62bZCDT8rWD",
  "key6": "61rNw6MdVMGQwdBRXigy9KyJGx9AJ2gtHXugNyq8T2SQTZdGDuUh2c2YZEyQ3aKa6KYL3d2pLicSEULSBdKV2b23",
  "key7": "2dtLQ5Ui76gveGF1Wxc24cqGfc45s8PVMN2s9LnVhj6h914mV58dbuZjy74H8kY7zCNjPZVXQ97Ec7TusxfzxVpd",
  "key8": "2V1hU1zc4BKZQqW13jmb1RXb1M8T6R2NmHkQyRxmMK9HS2PaRZ5wUXKsbdK2j9mPGZ3kAjrjf5h6gD88quBMb1y7",
  "key9": "53ahgh9XTVmMiUagrCtAJm7ajHHLSnRGHQx4t2wNjEoGyTLk3mUd9rWrUDD2Yj4nSJzpSXvK7AVkrLHwnkgKrqVk",
  "key10": "3AqGjGvECndqkgumPKgCgz7dM4zXEcz2q5jksUPRqitVgRsi6bN8CAPPYvP8pApkmiioWVnSe79aNeU5pJTwRudr",
  "key11": "4oHTt9xEBcrnFduzhQjfuMggJ3UupyU2KVtLoB5tDRDTRNpBZN7HdijwWRQsY5jX4YUwuUQyX2kmswbZKmkF2xAX",
  "key12": "2smHTqAoeFHHPcrWAGCydXdAfLxJWG3TFGoQxw6W7wbmXaTEYBVX1js4GJMopWdcyTdXKm9aNszBdffGYoPzo296",
  "key13": "4Hx8jhcJut2a95FaCTrhCTWb1fcgyR23MWYuyM2Sr7q1EqUCp25FQvbD3uqiGHeata9Gu35doEnHi3w5tRoBSqtd",
  "key14": "4g3WJ1d4djnphyGLBRi6bZesTDpeiDsT2wnivYQRVWhbLTAU83M733Vij2s4DqpfxfYEWQzVJjzMVJLVn1yTChSu",
  "key15": "3QRbcWXfQji7V3QP79hvFbkAVvqKYUvkEvFYM8WbpKrtwwJ46dCnuGVMgrxsAuhVJzVUwviGo7Kuw6fFzksRZz1",
  "key16": "27FvVcSSLai5vzAKb2oL4iVtX82L5LQDSjkMgd8DhM4qCB26N41QfQm3J4jbFsqmKz5f1H7fkGuqmWhe1NPbVPrH",
  "key17": "2fRKivhA1oSAHfM1eheKa4GSw88EEV5uSFMn5h8VfdfcyUAs63dDzmi4azC43QkJ7UdP4dFv9JmWFyYs62JpB4Gz",
  "key18": "4bmqAGmrdgEoNA6AVQyv8ZTqBU6BkgfHge3A3xiZJgoftZUaTyAV4QU1XAX5rrcYhncYWZY1oap6Ynk6FWzkdjfE",
  "key19": "3c3Lr5FxkMSkEX8njKkce79qQD5WwfH9RjREQ2GSUwfwD2R8TWs5MkAdwZjrNEvRLH3CK1tanytpFa8RJxzCGr96",
  "key20": "4zyEMTkXMHqcpyQBKs1tu9P2AshdfsVHzfCoYePygmK7Ur9ZvcF6EkbWsJHHa7Z4YvrpbFE13vW4tb7j1afZ2zyD",
  "key21": "4ydd9BMtXBdVoKdDNRj88qpDQBonEwzHvj94jDE1awrz4WFAy55SovB2K5DyzNBuZkv1NjRwstrWXpj5Kmx1KpYA",
  "key22": "4orKPzkTwhnq7kArZ4qQrfGksHg1KPYhfZDkFBmUrmZhVo9ozKtuJamttpexgrYu3cTHGpuntArKFy96ViWGq6iw",
  "key23": "3muDKjT8CdV656ECqvbdEv8RsTiKCM1jKKoP5Xt4fVMubB2qucJk9Jb99HoivficSyQVtvDr7mNrsMrNWKy2qn8Y",
  "key24": "4Cg2gJAg8UfcDJ1c2CM9mcYyvfq5jJo1o1duMCHpFmE6936uotpo2EmSqVZVPwWLC6u6oUSUQQFc52Ej2RqQAAnR",
  "key25": "5ZwKseeonGPoBS628SXTGApSEG6QTCBjwMnvtmRh8WCdiYL1vknzn6LH1JKDooDZjoZuXgrQVQfGTGP86xbLpw7t",
  "key26": "5DrzyMcLbpH15TpeYH964DXotCYqmToJPPhjqhYsPbm89VJfbC3pg2zXaG882qWY87sUXx3LGEccMCE1ZMiFQ5Ww",
  "key27": "4csJUS49MuKgmKkVSLfDr8S6rizJR3yPyB9jhqUPFTMcvzQNE8wf8hhaMLB3b5iEnFWgCbsEn6T1mduxhTZ1gRUG",
  "key28": "5Ft79KnnZVBDTASye9pXJ1anedkpM6zJaKYdSDESxbkyE8k6tBYNsY8wiqDmgCZNdWPKCndAjRiWdEKmnswTscED",
  "key29": "4hmYHqhLk5i5cLEs5nNMyxa3HEWJaEcTTNSSjucTfy3J7NN5mhCn2F42gXhqTGZBNjM1xqUH8Ci6sfVtij9r954Q",
  "key30": "choRZfqKFMVXZvmQC6USNrvVJVFCPVYDpSHGBMFqHLguycEsQvDfzdjVC9j7Fa29hebML54JEyZYZc5fRmMQrX2",
  "key31": "qboEJLbN1EGhWMBV9SFxiGjWh4K3b6d4rXybQbnBNccDvAZ3aLU2tzTcQQb6fbxdJk9ci9TiGq9fopc2BSuH5CJ",
  "key32": "3LfRWaZ52PnDhTna33AuVW2sAwWUKxQFBLLMTe9aC1aGHnnLeA74d84bzobWxNv6sjE4qDRxWNg5mB6yhx2FZyxF",
  "key33": "37kh7j63nZqd92ijBSQBGin3ZMiob4XaHcXGy4WLjKajh8GPBGMTpMsafEEJKfvgEYbW2M3mm6BKhoTe2Qn2CRne",
  "key34": "4CEQg6QNtMKqG2z8PbFJ4tEL1DgtKBeaFzwrCgLfGebq8Ve5rnuddTwuJNqDLjDg3AwbBx8ztnnkEHP4FV9ZPDWn",
  "key35": "5u4WFxisSuwZ3bUvZfNe8YBdPek6Sxs7bvNitevE4AUT4aZ4abxdG2jPYYVHVcs4jrhZKyUo7LYPJDKuJvLJgwrG",
  "key36": "38ZCXRfjo5Hrwc8Geor4dED1gce51BEmQQZUhbZE7PV7GkAyQSPt6QUQzuQy2CgPMXBW5b4FvHyqrLRp3tmb1dNN",
  "key37": "5WfCUkEpUN2hSzaUVPmFg3kd37SDgc3YeapKtJYhaUZMFZCcWxNgYLmD8CQ4cTYYEXzaAYR81n247ZUuxQukUvbr",
  "key38": "46eQiJuoBHerPXPi6EutLcun9pnFYcnMfjVYHsLs5tUuoRYKWyPmLR6BVHCPbzE8tx15hqzQFY3f3LzJVuDEvBB4",
  "key39": "4rFC2W9q2GZSyS3HLBXDXhHEQz6pkHJCPr72ybLE9t7y8UCotJvTyFaY1NgxDWdV8Sur9qPh651CG89yt2rVe3jv",
  "key40": "3NoLgh9VjVnrsf2neiRTfpjeeTmkRocbeuMxq5gDDSLkXqLTKurgN775wt7CtaMM72jEJwfF3ctigf46J77bmDpR",
  "key41": "LrkzQGnro9fxErEdZDQBZANStgUvXWNz23NRFsNB3SinzSAMxv6wMY6w6GV2V1R6P9GdhwiSrPKLBfa33KDqxQi",
  "key42": "2TrVxHA2pxB2W27KBjmmeQA8Wj4SF2io8R5vH9YhMHvvshGBtPEokE2vi2K8NSDGiWAq15jDF5BnmkiBezeEMrYW"
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
