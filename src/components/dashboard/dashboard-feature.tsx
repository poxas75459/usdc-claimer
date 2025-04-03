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
    "bXJpKke6K1YAMgqq2FELnraZbCwGtyx5piePULpbWUER1ecCfUKVMth4a7FwpxqwZ6i8b2J99TLBUqQVtcvGW7T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eAGtZWjTKARXHi9LoyxraEZMyaD3twj5MRBhfNJTinnRt2UXDju6HrZUdqz3fy3RzoGFHDuu6VwohvDEERukFDE",
  "key1": "5Xwh57D9yDPCBfqvqHcwUbMvFq6UeW2o5Zqm4AXcTtJLTs8DbNNFShMbSAQhVC8D5P9jo3prTuiX9Sfq7CcdfYAg",
  "key2": "5LuYtGFdwQonvC3tx9U5SMU5g9siqfSKS3vS17FXi8Kfxi4gde7PXvse6XG65AdPD3nV8FY6pM5qoAyyKf8MREqw",
  "key3": "3ny2ccpb9WrysphU11CvPzJ2cieBhi1dFZFTguqWasgTPjoxStu3oP2WopTwP8q44s4nQsb1GtcgrZxUecvbEWPX",
  "key4": "sZ7KdjeFD9huvp3KmZYzbiizbsbidnP1z9hWmRxMaEQJwJNxh93mU7Y9bbHFRUxYJsfjWsTHTaE2Twfp9Wr343f",
  "key5": "3qhufuYKTCvVVZBQzRiqf7pq6kTmmnMHBxL11AFwi9RhRhSjpDySJqEuDBV9GAyPfyMwriRqbADvFrXfC2Qr5ifL",
  "key6": "5uKmci7e2EqqLrRtQMWyEaXAwGvn5fP2725Q1JnoURobWbcTRZvwzYtnaHyUTNAcvqqRi75E63rx2632LbcZiNsZ",
  "key7": "2uM1JHs1AXkY8BeBQRrgQcC52dVfSpd4AHu3hzj66p7tm5foLmEQD8FPjrpS4YMBcM9LeQUGApo5CUUggSm8x5jd",
  "key8": "kjUGu3HTTA9sWd5KJKxKhcFNrBDUE3Vr5ejeENVNvhXQmvvg92zKn82Q2DW97yKnvzqRiEm7myKXuXLyzkRKhBv",
  "key9": "otDFS3Dqnuivrn3PJnyi1SfTsR7crdqDqQJdWemCD4rrNf6grffZQ1cXkkBc5Y68Gj2ry927M3yUXjVH7JioxVd",
  "key10": "5BxCatE4XUJ1X5mYCsZU9n1eBVrVh22yfAcwkYrNE6gmSizFRxXwgRcGxkniyp2uy6HmmbM35tb14bCHb2Ed58KV",
  "key11": "7qxwMRHBAuSixmkugcfLmAPwZccd9TmMUPM3eg1xMQvXCrpFUic8jUDVa7Ucr7D4o14SRgvVi8Xg9N6QxmCde5A",
  "key12": "5jKLRR4N2UfGWdGoxmHUVSTGhTireSMHPF6YWb9frnquo3eDcATuWtAz8QyWinctNma54Fixs1iuwiGeVQnWNx93",
  "key13": "4T1MMSEfZTqaULKcnjEma2SL2sQtiG7bGg8iGbkpQdjPwbfSNDZPfjCn5hwqCreeTpjvgh7aHaK4A7wwENrDcWiN",
  "key14": "2d4XCQgmeH1ns2aDQsQjtHUU7JLrr2kiRTRL1CQNBFFrGS9yb8nSddoGo7NAR2vyyzph8Qp4dUtTk3p95TnwMnNZ",
  "key15": "A1oPf4Nf891GCTHa76stxrysiBKT3Br6bjkCYUsMCv1jSHgvQazDwas2Ty7UQK44awA1HmfrjeEgssVQrkLgmmQ",
  "key16": "ubS78zDkLsnW9AoXgekhjmMUD51ZhZuq7823jNdDZcFwcQa2a2jZRmof4pdEktSK7KNxReHNgNRrYU1MNgoo14u",
  "key17": "NdxGthtGfCwy8uXj1b3pBkuqUxznMVTqAf4UEsn2coYYHXN2hbZcW2vWMbcUehNw9SHRw7eAYH9rzX4pWwrWHYF",
  "key18": "494vMy9W2GTQYmUGBJWE13uAGgViJnxdBpVAWzM9H3fhBMjR7AiUafAH17MXwR6ssynWri6qMECTzN2HgPc2jn7y",
  "key19": "2Ucf3iupXAgu7cpc7gemT7uJ5pXfwniWcwJ5S5YHTRBzw8VkhpLjoWqq81Qwm78bf6NMN2YJU21htaDdriitFjJD",
  "key20": "2YQBRbm45YEL7GQhAbkmi9X7xDBCwNMWs8EtMBkuX8cb68NT6idPuWWq8fzeef64rPMedKgJD4cvwGG2kB87Y6nC",
  "key21": "43KsijqyhezGjZkHg84RU8RZkqiYfjWKuiQ9FKQevqVqXB77yaFoD91MUPowZ2gwRkP9Fca2GaRWfY6SK8wUYg5k",
  "key22": "kc9g1mavsEBqATA8dmGbjHxCCfc85SNFumikJJT3rTXAdShYqnJSwPkyMZDZWq84nKpNE6tbiN7uKbDbomaEhfq",
  "key23": "5BCgvcTZcjWteL47GTQbneeQBY9HmZXWQnThWiwbn5guy4naPgJNw6FxpkEhtLHgBiAzRBDeyaJwJ3X7F21a5o5J",
  "key24": "5uhTPDWtMpuB3CTjmrpGpoUna5XK8cufYHj6AB8zHUWjQATnVzHbhrTvNxdAmkzd8JLQnYCsv8BvdTQreTd2dCJ6",
  "key25": "K7WwxWWDoPbXbUQv1b9saVLst1qyszWJaSx5mGsoqnDVsWdVoXjXHJPHu2iQtW72P7AsurZTLv52ALUSaDdXVpT",
  "key26": "5TcvhcHH91QBNBiFpj3WVHrC2q1uiLX1STuMA75ombXSmgzA8T2JE7S7a1HtCF5R2fXz1MdMqeq3C15ZCfiKsjYw",
  "key27": "5MiDPXpuGrnsv3YcGu1QrbacWq3642Zt8depA9yJBLQYUv7yi1fTJ4JX9FA5qQ5kUrNYXDSzXjpVCZzi8c57Vakk",
  "key28": "5mYtV1v1kKNcGgeiFSh8JX22KuqijA5h6mWV49xVezadNdiCrsEZBUmrzXZqhXd7jFtb5ms4tEyNvE35guAa3vMU",
  "key29": "5HDnKDCJis3kkxUXQRCix5wFJu2sZwx4gGX6W22LYcXg3kwqTuCy5cZTKKDXMxBMzJe9Z8ccZQzfs1oxeDLPGuqT",
  "key30": "3iMB1Yr2a5ora7CbD64tfC4hvYffT2YNNtXc8pfxzWg8Z9jb6rtKQynBKgb1KKZnCU5ouVc7UU4xTTeJhadpZHt8",
  "key31": "41EnyeK9yyy1QnHc3wKf7cAm1PpG4bvwCpRpY7wWvxDf9zcfUYN2LbzLmK28aH799X5nxLMQBeDEacrTifMNiLcd",
  "key32": "5bRL35JyM5fwmkrNVAFUCHaQBVgebkHhT1Zux3hnBGonXNhu34wBVSKsyypPEfK7NzpkoFkHdEj1jL54kHB4Cebk",
  "key33": "3YXwqABSU8oQpJGo5gaeT84byR3dy3EPGQHre94DcN6zdzLn7qbrb4rcuXehzQWTU6qfcSbANEwi7ijcKazyHTP9",
  "key34": "5pqKJuD5e6bnY89vN3yzZPwzrrLM87Z2AwtoAuj9q9mx17DrMyJZtLhAQMNfyzuWDEPzbnzbDWCg1XBUszwBZdjn",
  "key35": "2vCfQPd6hxfHV8tz7z1QEeFTdPnsBfScN8r8XUcmsdBZQ2hpJ76Cy1zvrcXDJMgAGWKXCY59a7KxsWUNGFCUVwEP",
  "key36": "5rwBzQUg7gD2h32h8B2TYDtntmUuajy77d78eqfWB76pXiHto9oWWUY6KBTmkzhcHPcmWCxzicdFCkS1mNMhjsNi",
  "key37": "3WWcTpEzYKDjNSJk8annUogGTKT9obSTxYSXwpRJVq7cVqUkYthNcU5u1zqMfY1ZoweshUgopZg99418DPBRmjXf",
  "key38": "fEsAFxTuDnnjdw6tdHay1pQdkeqozpeYTri7HsgzKAekRENC97zDNX2LiTNysf6zFTTCQpr6GPwARpgsiqSiC63",
  "key39": "4cwgJPgBZaXKux1KqUVEX5Kn1RQfxB7MBy8hA2ycvUxWL3uAQVK1eN3WnBirGagbbZP1BBkXKnuhtS3KHrcbLV3o",
  "key40": "211KmFUT2KBA6pjvqYvVk9XqGGPTbZyk1vyfo2t6kHStQ24Wbn4ttpb4h9aXcsLr2cLSTmNF9MGYaJV6M6zZoKTP",
  "key41": "49svFf586b26PBqsLVzZfNaZt2y77tLk3hfFXFYg5iq48uMU8xX3amv3GCBc3SYe9deq3P62hQYzEu7VnfZkgfpp",
  "key42": "3ruSPJ3Ln6ftvHYpt5rD1tyyhqn3yWXPTsnxX4KqC8PyLNvVCRizEYWLs6AJW9aWzVmRndHNRDkJmQv3EXhnahGu",
  "key43": "4Cuio4Jj4WPEUgRptVNA9QfjCKrpgDppEdViNQgazjiH9ykDzfsBjD6TBKfp8sZW4GS6Q5TMWuE4Hb8GxNXs5dDL",
  "key44": "Zckxha7qzMcMfKTVmWSRnHbb8ExwTpg42KAbUNrmYGehf7jRirMHQGGDfPKiGmhrBTps6dfeFPz5WaAfJpHGTFQ",
  "key45": "1TqfemtUVwjmzMyhv7iJR13J2yQdFqZQXSBU4rRf9QpdmNrmTTGWbSu11Dt69Eo4w81LFKg5ShhvwPpApz1G8JM",
  "key46": "5sTxmmfK9ySSzpNSU8qWb4kHemL2M9a4SKmDH5AmMg8LN3Jpr6pmojqzRw716PgztUKwx6dmiMjug5CG4Jj2svnk"
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
