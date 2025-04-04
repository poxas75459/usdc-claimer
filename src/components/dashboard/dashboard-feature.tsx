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
    "2mLcqVBGf267WXZ3jS8W2UpHdeyNhFG6c4FTUqMVfmieoKZDXHpMcFKosprz9BbaDLdKdS5KymBAFx9rJGftb1Pv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ipPiiFV31z97siWoDHgMPkU5EFXvmZYmu72hxSDzp9WDCGATJ8tGjHZLC6EXf26eqQkKyuHRz9pmXCqUS81cxBV",
  "key1": "3oP3wiW2UQkEuEWfZzDG41TyKe7qmEnuVBsmqPV6zfwRF2fKhUydNUtKmH4cZGw2jj8gywNuR4xJpxzkfg9F6srV",
  "key2": "35Asye7h1sTvYXbR2xzifBmcgbjWm9vTcgCLBWrfJ8ogEN5GrXemuwRK2ncYcSC3oXWNhqWJVPH3CZ3csid9Mjbo",
  "key3": "332kZmsnDfTovXuU7PSSYH3GzdY7oQ4brQDy917CrQe76Wjz8kYpqNJQJ5NeTuEdDdxUMYBXX4YcsBC1TtMomZdD",
  "key4": "4MvfoUCDe2YJWcymnGgpw1VQWBVsMBEXpz78cqBTERE16LdqmDP5z6ndS1EQNntZw6WrMJ2qiMJPDoD9WBvBZ4Gm",
  "key5": "Q6WK21gH3yfxQqHCtHM7eeKhG9Y7kA92J5jmhLKPWxA4gNmX6mNquY1q4AWDwqabvtBPhv59wMAb74o9bkBJg5Z",
  "key6": "4iLgkHnHQjdyDGAmsGACzEKVaDyWs9fWb8y9k6QHNoKMR5E1o15odszHc22ZPv3JZPS3Mo4jUmfDkit1aWsLtddg",
  "key7": "Fj4pdekz57iGLiHYJURLZDBYks4zh51X7gqCwKT15wbuzhZTG29Z5qSfSqSKdS9znb8Rj6s99VhPpkvZF2bbMbL",
  "key8": "2SWfnXvR7qxbaaBMSYUmzQZHD1JkY6oai7o6EtYBbEdQKgxwejCbmZ65moxXLyPRZHuxqR2Ta6xFUw2qgfEN3iA",
  "key9": "ZisrsTqo8ePqgqEwLDLpofemr2R3dGkeP3cptvd4URmBr9WUGhmhJGzTBVtbWm7pP69u4a76UPbM5dfHTLCUmAM",
  "key10": "4CyG167grum6Kcd8GJ5xLKxL7H3oev1XhA8PxnxTyssQnGALadEbZQYPPyBuWc6mgALr4vRVVem75QfN1QPrnDpD",
  "key11": "3z9S1GMPUaLzetB57E3EoSrLGW5EKTfNpW9AeM4PMheCXtV5g3zjrriMjf8YdhKnkjEicnbRcChoEnk9f2zCp8ZJ",
  "key12": "4pcFqt7a7k2dukg1yyRxaDsbg9rNbMhhVUPFYy4NutyWDxCujMmgC6eXnuEX7jQQft9efekjoa5HNGGZFcjxwbZ4",
  "key13": "2z5HpuKJiikh8MxppGSeYHEQ4NbWGLjEzNx4m4XVtBkMrWic92jv4zwcUbpvQjKtjAY3ypHHhcGnuJao41dpPw9f",
  "key14": "cFkbsH9t6XZte4r8TaERGC4DBBden6Q5yC8ndyWuvJfacv3b3ff9HgGs2BULTC1CKLma69SsqJ2YxfK2u8Cak29",
  "key15": "2tQT3eUNT3k6VFEFwVjVCHHdADZVQUtAKtUqx7Tad4szmfVLXSThiho7HESW7yygbQDhxPi1ewWPbCYBjSR574H3",
  "key16": "41cbwBKGqo9LSsthPTrAJVJxszsq7ULSYV82SN8VqD7QyhRhVXRmMCWoBFdC9JQBvkQqBKTTszzrMJfr7LqiUHzs",
  "key17": "4LmyN1MRa7o5dbWTVdw5YjzBYRJwWkr7hfXqpxoDBnDYZAo63v7jx8jJPk7bzr6P3hhgi6P8vSRbMxFZpissngmu",
  "key18": "Hkejdny3DLzMbe2tyPETJo6WrkhEcVt5dwrg1pzySiBxKF4Hv7SDm7CFxkXw5HcaYTpVPtGFQmKVr4ok4yRG7Cu",
  "key19": "3ob95denDrsMVU6ugHA8sXpq5LYLhbDogpYDqPKAQgCGhCcZurq14cRiPhPiZvtnhAJDb2aYbfwSNkXaEkYgNtPT",
  "key20": "5tqmMYLKwvRwL7eXHHsBUaJPVV1bGaB9qkXsYccK9tHq7TuVW1B1GdDFk5PibQTAnJcAdGMV6DbeZrTfkzp76Vz1",
  "key21": "5Ei9BE6U7p5rgAjsne6s1W4xxw1RYR9W7rsf6j6ERhQAdqpLqw53SYpp9AxXvW4ADmvFWMKUjXSWi1tYNFsnXy2S",
  "key22": "26Ybra1etCXVmuK582GcR5E8X3FY4f8GzC9D3okY8kKudimSwR1QZUck5DazLKAYGhpTBFx9KMRQ4SLVNMUXQd4U",
  "key23": "42HhfmyiCkdq4K1WkktRcKXPyBJ2uZAfi3rgCQw3BReHWGi5QKjrzYU3BQjKsopV522KJ4fqR9LEkNBBzumrghrp",
  "key24": "5wfjjtmJsNUY8FpH9wzVPJr3eYhf9998yfpRMoTFZjxH7RXesWSJTtrwmYckiBiVsmvkCofr2cMBijRB3NeMo3mu",
  "key25": "tP5UfMiE8daoxt4tPeFtVhmZrSjuCj4Z5tUC74qVo7SJfiUzbAtCiiTmBVWpwymuYGb9KZ9b69wqxakZHujnVRM",
  "key26": "3CVobbM5vdsihT7MxcJzKCeiRzdQjZvKkwNZEUXMyHFAg2HPJLJxYyoaBYMnG8T71PZHHaciywPVzNtNQFH64MHp",
  "key27": "iavujt15yYrocfc8ybMbYxs6695BvXkqtN2bZivMQyh2tAqWm3fXadDDgE2S85SybbQKWNRPkBbjZZKknKHDELi",
  "key28": "5CjkFH7ZZcwR2g8JsXBxbrDfA5bxsDnNwyUArnxy26YxaPPSr5McEhoipGDG1h9Xcsk1L6G5S77jhaWfByMWHayU",
  "key29": "3574TTxASJvLkWUgLRkXVV9NzU214YD6XXq9Z1ZrqmZgpHeDgkcCTwXRcj5bExSBnCedcuaK72KDi4Es7yDVMrtN",
  "key30": "3TCfAYTkTKzmUPkM3M85yy8Sf9gsZjJyzgdtAQBeDys98sxjrMpX8xqKz9ukiDvVpyWj75zCrQhVDDmqkBsG4Kuc",
  "key31": "hvZBC6TMunbWsWBUmnXEp5kpPH6NSLkFQqhF1gzkM9ZUse6yFPkeuQM5Lkf2RYQG5djuBXyjsRrAn4ResvuCziM",
  "key32": "5pnkazAmdZy6a8wYPFAZ64xoS2V6DCAKidjpTFVfqUCq21Smb4n2bGiHs4oJXQRrRAVp9shFCBhv6p7pBnvYYkkA",
  "key33": "4MbiCui4vN1fzQjEVQhC9vo4FsErULbkMkmLta3tqNFterx74p3MUfeeBeJJMmCxzJNcgRsuujDXguRdKfvB5xEd",
  "key34": "5NNhL7FAEm5g6vQUboY9aC8MCs4tv52Fw6wBkc9CfodBykfw3ArYWL6SACbFT2a8PaicTiGZNAg5qXZzkRChcXPi",
  "key35": "387feCiPtFbPEgAZKHJaUashQriZyjKc56jun8ie6wt7uuy7qhobzdwPACdA4zJPYkAm87WV36MR8ZUWoKQDRMnu",
  "key36": "2o4X8bhcGSA7X9WQXaF3rCmqzHUziBPp2664JcLnFawVjT3KfDePLLt96UwrnpP8WCKYUSW4on6AM1MbUoRB9eL5",
  "key37": "41kynQ8SUvbHAggUrhSrZbrh2i9fybnv8KUdvZWAE7nz5eTS9GxsRpbnBMFu3bQHjNyaVa1ojXbz4G4YMD31r7Wa",
  "key38": "1cpHg6EgWTQ6HwUKA7mQTW7GoNMqdZGWLMEWUg5scHMxQd6XgD8xq4WEq8GqFrJ6GEZeRpyX2dLrKWeAagJySD7",
  "key39": "5DMneQMpMfjUHKTB6PCSUJmjQY6uDmTjbPjoHYVRxpbcVZG92NVUYZH5kB21rbpYNvEPDiij2vRrNx8Z7tfwyTde",
  "key40": "5b5trEAexPWt2B1kXo22MmU3tbmfPLyvu8SmHdkKgfoZAQGqQaxy3jzzBgU8XCATpHs2tToHLXgUT9JBgZeuLWgm",
  "key41": "n3UBkQRT46cYdiTmoeUJzKgzi7HauiiRv4ZrRKnpDA3VBkiM4Z1aGJDshSSkv8bjLDEFEMrzgaPU9KtHtJ69jYP",
  "key42": "4sPL5pYYtujxWDR14YUQKEhnEQjuDEJun9c4icDkXrtjmJCbfApqF5o9ciSCPiZLfeVSNaWvxeQE3p6uvWFWUZxk",
  "key43": "2vZjNvsmXtw2eqQfmP9Gw9tBVXDED2sikMCTCbgNbSXVNo7XoqFouwCD8po5eXMY4V8KnSPhDN4y5mNgKMh9gN3n",
  "key44": "2dZycsMxGo2rKn8LDQPaonao4EDaRU3wX9MpV3iw9sWXX3snTLcwNosAxMwKu9VNHTYDitC53PK4noyMbuSLmsPU"
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
