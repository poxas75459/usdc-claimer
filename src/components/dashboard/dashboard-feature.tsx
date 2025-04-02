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
    "3VNjz6JUCFwzYr5SzR8eGkUEJ8ap6e7xnM8UuSgXft1EAyUWiXaMipgjTdkPhNGmgUUPaaCZSTLHJew1GTPUXKnG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33AgBGYoRRi3S8bB8hDyUruzsCCkoWz2oRf7sJFA2bAvKZcrLp4rbpxRGiSkjcs5Hj4uVNhZk5V7LMEXkrwyqeaP",
  "key1": "R2YezrmKVtJ234WznTbiFQ9mVjmQEAJugm2M8fDBpYjrkWtLXHVYra7h9TLXhsUuqikp7q31JWHwFDvxq6X82qs",
  "key2": "2jvXWgdTgK5M3MCSSAWcLmTHVfjbBZ3HCX9FbgiLWct6oLYwixQqEmBQd8dicqmSh7CvmMqZWKhJx74CZFuCskxW",
  "key3": "je9VfT1f4fPxAr1Zh3F5XcFVhQHtmqZHKDg7BDbSAUD2ipQ9pSYd5qXgjhiC9Typ9wWBd27xCHsTVm1u6yNoPrF",
  "key4": "5mk9bakDFrsA6kF8YfGWHZSVhVxb2jS52fVtrawqiTesauQ2sWCMLxbjiiyNMToVJFoS9uzJAx1b8syq6HV8NxPJ",
  "key5": "3Dz6RCaXpnDoxTBtSrBuuNNsnTi5WwoSb86ok3NwyvmBrhWt4zTnsGCDBaLLTne72qzuAi5o4T6TdA4TC1MPv4iQ",
  "key6": "3FWacdf8YWt9FuLShspALmDo4pkKWizEPWTutzhsKLyVAYVtA2QTFX1g5mAPYyT55Vg1Z3xbM2gXvLzDtksMzZ7i",
  "key7": "5tk9UVxuL45YaBapWcpJaHwYRrEW8ThJCKnczdemHzAW7HVuF34aRAhrGvqrwsEiqi18DAe6hrECmjqHuhrBddHe",
  "key8": "5brmKXU1MXg9myxMdMKTnKJ18rw6wJ2XeT2NB1KCqr8yCioQKNvwHRgGRJDjko8kk4nCHN1WQCWm1Wtb35ZFarnL",
  "key9": "4tz4hpJtVxLKAU5reUC9AbDW68cuGfnFPZGSS5ud5FLFMNibUXmpd3eaG1ziZGwhFGHt7vAJ7S6Px96tZV4q3GB1",
  "key10": "668R56LckWs9GyTpN53qvDy5rNN6LA4cHH7vmS3owtVXV5NMDcEmhwehiLH8Ak3QLpbj6Aa83YY6A3ijmpwCTTKN",
  "key11": "3RjRJ8JQ56p4QycE1PQKj69H1UAh4MKsRCU4duPeWW5z4i588eQ8SSQbJMHRHxQSYWWx8xZuGpPJCHVzwMF6nRts",
  "key12": "5JmGcbTiM8DZynasXZvZeDATeGCfLFyi6KVtJwN4cQnVqRNswaTkCRst77UhG7rxcDqrsg6W9B4cQC4vWiPHhFCw",
  "key13": "2DjcRrQ9RxuzUHv5Bd9Hm1zdYo9Ldbkqb2k2cfV3LJkK2e6GDsKJqbhYGxrMKZh9AgEpfNcqnAvevoS2QnWBpqtM",
  "key14": "53EVtWPYSbeafDNA6kQr6rd7GXpAyANBJ9eFUuDUtxHPbTDEXYkg3pPFcmhMXyzc92SW5c6aueej5fG31wG7Mz9Z",
  "key15": "5znq7aqFNe1vp1LqGsxE9B1gw4BuutV7Bz15AosaWXF37QVTzYTCjCMehTSuU1QVJRioLGa5y5C4suHhSRgb3yYM",
  "key16": "3ZxoiTrqGwrHR6r3L7dhdCb25TFX3eLCBMemCvrwAm9dCu2U9MX2peqyMhXy5yHydN4ucUyWzw1fB2wZbsqiZ6fm",
  "key17": "5tT41RfnZkN7F7iunHMoxsf29xrYGEVXQgtv5JNpTzKVAw8TPpQmzmhQFj3wcy423typpCBiA839BNNHWnvskzSu",
  "key18": "3dausJb2edy3tDCUaDBVQtDS9GPDNahXB9Kyq9qVs8ihUW2zjMEyq4tXpZ1Tind26rqRiiZuxmUBVEfWS55aMKKU",
  "key19": "5rYZkCnwi2AAWkMWTaFj4yjhuoGxvjZ8b739kLf86BmEj48AvCpdzXw5MfsBaMTWTu2MvRt9UChCrcoaMUHZdDdK",
  "key20": "3xapAnCYFNVPYPoKtr4gG6SaXtJCvssrGdiA9L8qHvJjGtSV1TswALPRd17eA5AN2hAq9mY5SCMgRcx76z1yLqpi",
  "key21": "3R3G2LDUqni6SJaMytHATG7uUyiGRbZ1wBeJYURqtsehZZHXMu9pkbCHNs8zzXViKGUbibRn1dnmaxKwXUhHZrPi",
  "key22": "43ViXVcUUGBNC6A2a5asgDTqdCZgetxcfRYW83jtqu1i6NPYxzHTyqyYzdidAYNU2Xb6stFbY1EWmk5LZ7KhdaUY",
  "key23": "3LxrbLeLxrUGZdcYPLReEu9pVzGkWvHgfyePM4Ywn1vbhwdi7KP6YS9SBsJdoo5Eosy81nVswqwQ6hZj13e5tuLe",
  "key24": "5wERM63Gk9oY3WS5LrHstutLkzRPU7JX96paGxTthDZpQ48omhGRu8HSCEwPpWxyo9jF8NpyEVk8BL8pYv3iLBBD",
  "key25": "4RZw8tbA4t9cNbAtBRWVxEZa7KixjhVivh11uWwC3tUUWNJS4XQS4s1Z4VdEYHwCt3aH5MYQgFhTLMbE7Ua2zyLh",
  "key26": "67GBdjvRK33Bh1JjaC2571sJZV47mCVaqvmYTGK7rYAT646FyDxhEY8kK77iPUgQJDZcyaiwyeXZ5b31HX3dKTmf",
  "key27": "4crNun8pNr87MNaynom57QsBVmrh8DEoz3XjmvkGjSZkg2qKoJvKw8xuk1KLpbgsq7kMxaTHbqCfJnrdXEGo2EHJ",
  "key28": "hCqGsHKwfiXRCbAGTXuJaMuXTU47ojHZdjKi88dYqFfwQYJekusJa2dR58ZakAQKsPVQEEjqi5TA87SG4GEH6qJ",
  "key29": "67GaGppHHNjATYSui3B7qxwbL59dDMUuv4zmjKNN2bmBh2V5jM5XjE4CVPoR5KHJcbJaMW3TQnK7ESk7YHKj6Pr7",
  "key30": "4w55QfyJkahFsMqmu5wUQ1vorUUP2jfycshktMJtcKr8EWSxhr6zZf4gb6khQdyL9MzHvGX4zLwgJ8j64whNDngi",
  "key31": "2J2UNEbjHWQRDoF5HgVNwR7pj53KT8fYcbY6xr7M1PHi7HTAvEJtvr1qc7Dsprz1noKbZNLK1KkzgXksopHGDD8T",
  "key32": "2SViYftZLjWLMRYqE1kmAkYrcsZ2G6gNG7af6n3vdgLdUCX5nL9UwfTQAtTH4CBCEJG7ptHrur2zn1zTK7kAHqya",
  "key33": "3eFHF8QLVWBchpqd7QsWaYVX1GQsUCsvbVpAUu3JVPYeFUoz2LgHJKJETZdVreyYv4FRD2mbJgxNNCC7WukzUWeh",
  "key34": "6ka2d8NxMNrC8MHb9rinWyBwGMPnnske9uYLTJrnPKSgU9qWU6LsL2eUBfUwvGM7ypXu912WgKjxnq6U3bPx1Tm",
  "key35": "3o3cYYFq7wZeDN857dqBSs1VrgGn1yVj6J9CUfe5cm6cMLJCxZ8qQQxGJU3kcTrRe7zzCxhcDNgrMsbjEvKtjRkH",
  "key36": "2ZngeY115orjtvtEFK4c2yS6SLUa6TWJ6knANR465wBsbUVSTBFsueBfY6sWZBXii95CG9VMpSx9VM5uNvn738Kv",
  "key37": "56HiCWvhyfmxbLfjDQQDGzjjirwXg4ZfdMTMD8Rxn9wTpQhZ2EBKrM7UAdYtm1WcAFaNwDpfzgX5Tx91mtDNrfa5",
  "key38": "4ytgsKMXG4Po5zEUqRePnA5Y7R4xgq3mdRtUXAJwPdGdFP364Rb42dEcjQxyRsd9Y5Vno5UYHgZPJJDtgDpn2J9k",
  "key39": "5rv1sGWWQdGjraQfAtSy1fdAn14PMQyeJt8xMg93MfLRsTwFVQcwDDRUyC66HSfBTY1CJMAqv2HkURXQUfoArswk",
  "key40": "3eqHhbiYUK2yhFTwr9X7DuzGPgvHK8Tiv5ZKyUUZBM4rWd1cmQmtnAFyT5BKH1gzMGKVenVfC2pC28Y5mnfAzqL",
  "key41": "5pN3LS6PkBTD3UmDTKe3EMjEUJmHjnDuJE5QnhbK9nBzFYk5PWZGLCSvk2eTSfXgVEFkLa4UemxzAW2SK855mpxo",
  "key42": "3Djv5q9tcb3LLPYiZsBCy4GyqwrNpu2frYJgRwyuERSD275HEExrVdeZEwGpvWvNaLfQEXaBLzmmNSS96mJxFyMw",
  "key43": "245y2MZahbtgd5uxxaGAV5sBzgYeKcad4G5DNdQZrjUs3gXW5hy99ziiAy8DcrRLb2BoiR2T1ooRMoijFpa2CJRM",
  "key44": "4FBfPoo1u8EX3RRKjVAPMoqN2tQUTvTDQzoYxwAmCMdV3bscjUaLjy9mALsReKj2DqE6TJgJmy5Phj1ZZsaXjFg5",
  "key45": "5cXXGu4kgLxTZBhWQVLoJAa3ebFeWS7MjmRBJr41NmE3VZUQ1GTc9F3vkiEmZr8sLScRkFoLhLQxx3uk3zwbncST",
  "key46": "5yfEXsbv3htgjKdhykcpxCabGqTppHv4PAXjfAV4xhEYVzj23hcxQpLuzWk3QWAPCa4oBvXYi8Pg1xtv3cs1sPp5",
  "key47": "CAi8S9eVkjPznnQSPELenyZz4fL4DVKpztKUMu4KqR4seaXA4Bu1RrZF66RVJFJrPW9ZDuwKvKn84XWCxX2QFRt",
  "key48": "5hcxQxdrtCJnpxJJh5hdtXR3GbvRDDD6Jnyi631CcB2rPamvVnWa19bGyhNshcD1KmR2BYq7a6jG3WK6r5CKsmaC",
  "key49": "dNzVqCk7HhG8YTAhEjPtgEkvHb3JiDd5yuJWUBvtB3LUXhSqkTVNMv6TAarkNBZdmAR8vuPHyBrhmEA8LdDCipN"
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
