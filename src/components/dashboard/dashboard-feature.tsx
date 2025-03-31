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
    "2Si2HZ2gFsFwdoNF23FzUJBsgTiCEqMSBDt3M2Mv6CHdnwtCEygbBgpz9CrdXuz4XbQnt9KnjgxHBEo4m6WBmmEF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "493jT1koSAq66RS47q12YKfKW3myz94SZYV6dUtCf1Gq9wm2XdNz1H6iPA1o27fNH2RooRAQxwJwA3gBwuGBwc4Q",
  "key1": "5bQRCjfchBWXVLvyGS1JgYaMtGSVow5r9wLfpYjBMmRmmjUhh9F6ZsrQtMD1biPdBzxVPB87mNDsnJsBpbCTtmvJ",
  "key2": "N3RRmYoKeNtkT8z4uC1qjosJ13vCmvppBCtQd9jKwzF9zoZspHRaFRoBcsnrKskynfRRpij43Eo5w3XRbBiT7T6",
  "key3": "2VE1Z9mPSKqgXy6DnjhpUcF1cE9fCSGkh3BBVJzrTQWFLBY21K5GBnmrqs1mGeffp3feYMqfTZq2EeJrHV2wivja",
  "key4": "2oYNkfEbmLVvLF7wFuNxzsUTKAgdKQrjxi4qmJdzMm52zL89uG3LmzY2eh8JhmDfpTchH2GzptM7j5gTn5VK42E3",
  "key5": "2b4x5CVk8Kxvh1BGwvJm1soXv1arv7nGH4H5wExBzbPtyq4qVSaHufJg4A4qYLqbn944usAwtLAh6R4VqgjJa2tH",
  "key6": "5LEszaAE7kAcghZCMN85HKVTatJEBLtwESwsFP74dUaauzN4ixvmDsNQFiBgQPom9TrkFMjyN8nnk2VajE89zEp4",
  "key7": "3V7qUrU83zAHA6KwJVuvJbxxuMRZV3JxTxMkWGpBggYaK2Vr2TPsLQ61Rd1EUEGFKTarT86bVqyMB9QvoWXprrWc",
  "key8": "e5q4minDUyBqoH2xnS6q1HXKHNEbuzAkBruPxZ2J6vkCmaqVX7JxRRRK2kbvYKWeTpJDkWrnt7cwFSBPtpVknQx",
  "key9": "jipLqBdHGSWBT3SYWXqGcxkvjiumotjVY14LyRfF5jdBkYxrwSXFQE2Ln1P6bSgsX7UCgVwMoHCgEDjCRfGcihG",
  "key10": "zVFxtoPRcLyHi7EcuHFXhks8vfWKVrgrGAT1sotUZoRcnfsRjZPpuUWkDC6aa8MCwWJ4CDMpdeRrF7rxRgSu2bA",
  "key11": "w3fVixzbk5wUt3ARt4JMSJZpCCVyiBBUYPrpULiisyFuGcsiTNoLieXJ2K5LMRcsYRkn2gVoiVjT7dXFiago2mF",
  "key12": "5esDSjzBLkTiPt8raKUULfsQYMi8sj5M9pGGTx6tSAF8Cd1RvJbP5dg3R6zTb9ftaNPVkZ8cy1N65HY3mZw9w4tv",
  "key13": "46SMhW3GvKsWEqWzgPnnZUT5L7MgoX9tE3WCevxqTQRiBn5hr3g9SASXwXzUzNivJ2ji3x49wmJCzE6dzYuMMkXF",
  "key14": "2S71Bz7xcDvKZovWQdLaCqQnFGdff6j5kSg1X4dh5uYnrKC2GJwbAhFk5RnBWLvPG8Em5MURd3fAUvUchsYQM8tP",
  "key15": "3qFKGfcjRxQofGDyQAeSAQ9Y8dseucPzb3Uen7ovCPkgYC2CB8thrAb9uzU2DkAhudCR5mT3YBHqst8PAoEsKFZq",
  "key16": "2D5wweSdmJLit7QccjgztCWxUQPD8HFcJARJbPjvLxmnrNaDtLF5gUQuUEVbSMM9SzEHMijJe2RpaLhQ9VT4yGCw",
  "key17": "28exvBnHMQqqmNNv4VAwYnTxAKAbVnNpzfWqVev4cmEmFghFg65z2bj3F3jo5mX8r5yFemwnW4MBR5cPRJ29HAu5",
  "key18": "Dtz9FrjvMTUURipdyo4SZM1yVL1SCgJ51uqZYX8Doe2Do12FJm7NyRZq1AHmAWuZRx9mJhw5KUiZYndgJUFrCrw",
  "key19": "aKD3NLv2wxiCGpctNR6iWxoaoYo7pzvFApzWiuAxgEnbvEdQ8Mc8YaDx73tpy4Xm7uNme1d337yvxFyL9JtdWqT",
  "key20": "3R15FG8z6YePMKZDw9Digb2afSJ3RWrcqohBJMt2bfmbnx8eB1YQQPC8eFgXVdAbxo2cePiqimeA51U8Zeaowd4v",
  "key21": "3GUVkUyrdM5zS3v8sYzMG61w8hx6iHDT9VGid63ZQmXBPiZqp6KGCWivDXBwu35vUK28vjYFDJU94TBzE8mMKtNE",
  "key22": "49w7TfXNc1rjsgR7N4nvj63cKmmtUpNV1AzY9PJXms87DR5N7drt92QDFLokayCLg3Pp2ycdpLZGHLYw45MCAFso",
  "key23": "5n6eoP92DT1RXttppXwHrHS4kVU954HGZ4Jd9iqNojgb3M7B3jqmn8iXTeCSR9w5dh5UBePwENydh9ZVHq9f8wKd",
  "key24": "3kcrexu6GSCsW4D5knUf6CKp6ecRn2y9MHAhqZQAy1dg6tK2DUHH8WNaWMKDVkgALUqBeSQt6FBkCyv3K8sEoNGQ",
  "key25": "45usiuBLBvDN1NjdEacChD87YVN5dxFre9ZLb6kpWmZSXJcxW1maiTQSweGAiEwuNpMQZxZDfJ9ianYT7YFc1uPg",
  "key26": "3JgK6sZ4bgmajxdWZZLMdNwdphHHBEpnSvqKaZU8eHqTfiYp8i97DqbtsxcmqUGc42jhXxFhN6zqwZPDEW1Xn2HE",
  "key27": "7s69K3nn8biEEH4Fpe6uwb8rS4jkE37RAZdEVThbLSTQTp1JnJK1Z3iT4uoznBuGom3ERi9rjyprZe8bk9nb2uw",
  "key28": "22rXufuuxD2BBr7aE35C4cx7UVE69fTmjB2y7Md5FzvirvmzmtU149CxFGrwD23shJ1bvH1sFnmKbavPYWwUavez",
  "key29": "2mPBHFC6Ctx8FGKDHE4KXBrKnw4FghyERPYr7FYYNwzi45yPqhH9BEiUQYDoJkHegKW8o5aNAxW9yxyNs24NPXaC",
  "key30": "3aukKAG9DGm7AygB8azXSrW4xEDub95cZAum5V7DJ72ypBAXDmVPWSwfJxjaHgi7pJTFZCuuaLm9jA91D4DnzhLH",
  "key31": "2y7HQgqd9bHYQfgzAjMuKAaJDxJwyfV93mBLBNwkx3kxrjdGctm9nkP7AJ2BLyekm83iDMQnGtq87b42c9A6Ff35",
  "key32": "2SSH3Cn4MwES6e8gpno9SkEnujJgWEopN3UsZTxJtAa1jtwMTHabvTbqiXEG5gbdJbcYRKvpaZfvTfWHGVJtqMKo",
  "key33": "5nWuqFVQqodgdSUyfHZiMyx3UdEnowU31sXmbm6oHgSf8zSqobtMNiaPg9QtRnTKdGfUqzvFAFgaQjE6D168fFL9",
  "key34": "63XCw9XVCgNXMM3N8XBRmrbf1GZfwVQuDa9UMNPjzyk6cBVMAoBdX8qvz6Xv78z2uLGnXMEGqgwpcqL4yiNHLbv1",
  "key35": "b2Jxf7XCVwP7GyHRNFnSdZxym3yWdh3TRxZvzJnVuVgupghGbz9TxFoxLJWHWFiLshEYR67tqq4wtnh6ZxgkmTR",
  "key36": "9QogGmEtwrX2uhu86Ca4az4oBLE4e9WAXqMFFLZpbeP6WmtD2qsVm9YptWohb3EcbdPFhM99oREgq1kJdhxM6Yk",
  "key37": "4kuA6j174NGLHTcKHm32MW6sqJ8md829xiTNzAAFj8SqzbavscQTEwPVS62z7CQVcup4F1nicif4SWXwPBkVkf3s",
  "key38": "3noMGZcEBq9cYqkLZcxsK4DpJLUBVhZqJkde4ZsugZovcytGnpDEAXvuRn4eSREZrpuhV6vTWLykeZiCEsPNSBrQ",
  "key39": "22UCLPcqgR2irmxiXvrMgzVFuCEjH2kVU8hSxned47kj9SWAK9y3QrTDrcG8dUP2n8Z8C5kZzfjMCKDMJMPqHCRS",
  "key40": "e9zJgPFdMxCAPxFFggmVCi35EhSDRtJSJubgn8RHi2xgZeXCo8ZB6XXcHfRZUTKS1mTVkWH1tuCtvMsYGFGfFYd",
  "key41": "2Pw7oHKzpNAK7jNnSdYikDP5zSpBxmPL8ZutxnwdBXbVyzvnrC9i2rHezNCA7gSTmgzyJVrzajt952bD8pyxULTj",
  "key42": "4RWiAWCfBYcMwiYETukHhp6V5bovZGDgFQ2wGS1nsUQLoyF9KoknGsoZe7gRCiXHB1yfLMccdp6Mtjpqxrh4n6UL"
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
