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
    "2UYecCoj7LedCCfFZrWTAuifXhgxJgsYbk1TyDBfzx9F6gt8UawTUMJbx7ptps5BEEPHiFKfNxKo3bBggCB2otHa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YPdRnvP1jC3tPqyPqxfZ4HepDwVLHRqxwPGRtGaEEgmqYLisvhg59tPFDL15BwhjnnoHGdFtigvTtPr94CHaC28",
  "key1": "3xJEvJGFX4zAvok35TqkBv1F5acVbbvXvZTx81RhLkP1H1JZkEM2PnLHn7N7whBysm3fL9GBjbQs2923YhM3yypk",
  "key2": "98cWyEC29nAxaPxjazjL4JzHgC1BzBvGxJEeechG6dqeWpnJDir6kWBnDk9ChT8e3LBK2Kp23ZQZ2WzW1UobxrT",
  "key3": "PhspKa64C12Kypa6GN9WRen4nretNFcnxVT4m8VdcMhssoZUT8ybeimBmb8JsbJTGXewZMdGrxwfF2qE1BYY1r5",
  "key4": "4Vur3beyaKTJzcZdac9zAVNx9fiera77QZ6S3Du4bfRToX34PUqGL54oCnFm6Nq7c8GcDwfmp38iuYHPs5NSwNP3",
  "key5": "FLNDhutWVrhZWyxpfApXFbm3TdtEJ8JAjSacxjbnuKxZsH2grXYEtY9dKCVzwkFKHjSkAmpNm2KcycBadhnvGaQ",
  "key6": "4D8bVKohSmdsA92pYpKLtgnt5m4fFJGfnHP5CUb5eB7xmXUfk4HX7dB4a5XELVb7FoC3b5p3RFV3gw99hw8vmjxV",
  "key7": "2ByvqLpmC9tazEKxVvbyLuKcsbJpXdZLHf72JoJjCghE3NF93MFuH2xhT8zTMEs6muNXZmhN46FhtnRy4wAVSX9u",
  "key8": "4BF459S5bdwgSoo7SxrEED5d2Q11yxftft7bbDmpuhoFfVVvtdPqnwvjQTB9z1q7hKdYpdpS3ptDDE5e8UMbB3aU",
  "key9": "3tBUNTXyhV25dHqf1R8QbrLjCofnzZmQZTbV9wmsSaN2nHVrZtxATtnse5oGLMMWCm5Wwkfkv2i7NazrJbScL2wt",
  "key10": "32ECJvsqdMxpmUz3Phmt8kZtwHJGEmrgnU2PQ3jR4f22ggfdevvUmPxkLXg8eH85pndStn82G4HjhXjX5eD3pREh",
  "key11": "2sRpyT4vdxbeUHW5AubukPBJw3nqJWugGHccJRH7WbtiwPsG5b7ipNM5u7vG4coeU1ad7xZb6TxMV8gcz9ykgeDN",
  "key12": "4F6Y8CE6m4YYABBGzLSRspHXNGyj4njQecNceafJ1M3EyZ6FxPEiQbQuTNbEJKc3LyjXiv8x4GpHQg6QiNAqH3bQ",
  "key13": "4JYN6teJhxmvMCe8vjMiP6K7LeiHHMLFMjtQjMwNqLqmZnivNXyFhP5U4DVpgF5Dspdk5ERzrXoSBYbyaQ6gPDUC",
  "key14": "38htoePiq3MLdVHALSUmKJ5BrKTGYFLiBWEzQB7NJJgtCJNpKctehnc7gjkXrvduP8Ngwi3Angu6SPkkiVH6veP9",
  "key15": "LV56KKu1zgzRQ95nxTpqvSvhuFjMg75H1yqMSwCjDWYZ9vCYRcWcfXU9UWSUbEct281yHTSzjXMkuCa9qq1cp6t",
  "key16": "3Z6g8M6PDUyJYQ1r39nFtftSz9Lbpwd8LSros9dJx2UyQbu1ztgzsCkBezZtv2Gb1Ngf1VVopB2MFE3EicTqnePo",
  "key17": "2bdNzj1pSgTB6AUTFvLk7Dho2ZV99HoFw2J6yPmKR7mZ5GvLavefyfceEX1yFUszh1yZyow3FkRNcboRahRbMNxC",
  "key18": "2rWL4r36VB9BpRjtcARjGkXKsv8CKK4qSW9MsYQSCG5hK2sZy1h4WuF9WmayuGrX5VhU7ZemgTZs5vtwgfvMSX5Q",
  "key19": "5FgYDyaLfwaMhpvf89Cot7tCrX4s4hT5WMS2ndGvbvdNGGn2nVS4ttfGBrS9CgYgDySkz7miCPm89PWKQdNJqLpE",
  "key20": "5RKZAry9p8T8k4adnSxpRurowhsH39DeQ1yNwbedHRBm2kSXfrydcTbeHjLHbbzb5PCtWYMLNNMUuQwxcvLA94iJ",
  "key21": "4EBiERVVvmdiRrJSFF63xam2Lvg3MpSX4aEMFzDSjjMiyA1rL5L1KqD6Jc6K4aULgVBD78pnNtv6DqeqU6tkzcsn",
  "key22": "4AJsVmSrDFbNW1iPdbhVHxi678KXEfVkHE3QBy8M4dbEv4weLXKdTJ535L6LdbYPZDdtqrUr54R9AKSY8QWpBmDe",
  "key23": "Z2G3hNYyPmEuuq2PWeGgiK6r3PzUWfngLEAEABkKTwfE7k8cpffFitWmLtd1MsQ74jBrQ4s2xPHfYiJXdhKbifW",
  "key24": "4jGAZGM7rbP1sdG4Xu6JC77diXedBCKgQ6kHuXeZsBe6qD2KP8NYT2UTUdak1gs85U48FrRpXSBeFojMbbAHNdDf",
  "key25": "EhKojYR8uq2a8sLMzAWX3satNXtiCyrKT7JvUJzG843j7jzjauCiPeeT1QMgdcQRZPwCimjiLVyJ4n4iFUAFwgc",
  "key26": "445bwfQQnzttjKYU2727fYvZWCpUpeu9PPxZm3aAufjduit9jrLgm7eDkEShZaejwxYET5BN1adfPpyd76U3Jpyo",
  "key27": "5J6hu1WfMBnQpmbrcjuPedqmzuCxUNEgEywf8hrnq1kQFaJjzPE87Zb7Y8WvB4bW9uvbvr6x7PwE9Ls2Vjpc6qvU",
  "key28": "3CgGTgW7SeWqRAz7v654UQUYnSnBfghsnruhh9vnqVd3H1gsw4favHfovKojRE9nhq2FZ3k9eBMDsHjuhrqcvnau",
  "key29": "25hMDwSaNe6i1rJY3joYq4qd3xPAeBER6jinP51VKqmJxFSTkFasmoq3V6JmjRiYePWY3kBZQyXrbwboDLLj1CEA",
  "key30": "5qFFPq3syqsZUX8LrbfhawvMpRBGg5DfcvxREwr7a4gp6TWjYiuBHu8TQmXpR2g5r1vwjvMMwYEvAzKSF7b558Vj",
  "key31": "3FqyvkvtzXwoTRpG9JvBZHNTukoaJvVku39zVUyoKibC4ueEdQs4495K7R2ESRjpcLW5pwXusymA1ciiwvmm9GR7",
  "key32": "54ESPnbxxtUHmWyddUmqkrFWkUZyBBNkr4ACSRsUN3XE7C56FzjGUuB4Y8Q31o8ZwTj9xBcGgdenYNpfSq3a2MtY",
  "key33": "2MMjU61576SJ4fwBSJ87AmPC8zwpggNCVjP3dqio4bHRmVygnu4kAYhKMvphrF1iManx2x42dpu7KSLVaDicDbtj",
  "key34": "3igEbiLEf2okiSEw2kWCk97kwsQo1dcaMhV17AnYkxdh6wzcdGyzPkQbicCM1HHvgLcHbWRzmZdsfdNfZ6LjMYf6",
  "key35": "2YzXQtAk2CbeBJtSCmWn1gpsZEEWQYT5vWfYMsAAYYUPtcJTweFHEE3P6JAdBMHY3Ud1KZcyRH1o8dtBbq4cvP4A",
  "key36": "4t2TCn5RnMLodzmJQLheyRsU6U3texfnwXdijCqvWGfpJemPvwU8CytuEYAz5Xym57zvbHARV5rh5ZnnxyWFkuUE",
  "key37": "4VGrDiYzEsvvt69jFv72rrtowRCqhRmtafd476iJ8xo89kL7cx7PwVKUf7Fy7YcHAJpyFhYVeE2qXwE9dbLSAg4V",
  "key38": "2M4JkFDQwnQRtErbE3i9iuwo4UsW8RYv2Z6Dw7KB76enGvecNPdm5b25eJXEefrbmbjj1qwKAdQpPf9MiztYs5j",
  "key39": "xxHR1viLQqfFGjaXDPCyey73eubAYdanQr6fHVtFddtLVVBZKjj2rYoqUz8DDHw7vnWWTYUa6qYxYqsa77BA1Q4",
  "key40": "64f9vGLr612ABhct7rGX4PUCGjM3sRZfbXJjqPk3tEpGHWxL8R4HUTpuC5q2HrTRqVgyxozcntwiBXN6RpTf1U83",
  "key41": "4KU5LMfE7V2YLQv13Wk9uiLErPW16jjHRfPAxELsrAN3XX4oa3NgeuF5DxMcjidL5JgBEduNuJrJbxLkmHdjqKAi",
  "key42": "4bLeU1nrrvFDJZhXhUvExEUtbBtU4jZyZy5AFBLeNJLbnRoM3fDKt6HQbv6m3JmFxBN1h2PuvCUBSgwREzJKfXoh",
  "key43": "4msH3PtVU2Xpd42TrXiz3ZEJ2jDMiq8PFejBzf9y13BBdMvqt8ieK2trU4rEdoGQMV7ciQzXkdVkhmFVk5PaRriY",
  "key44": "37RAMQWQV3Hos3psXRE6qMzwAvW13kWrPihf8ZVeojByDpBwjEUwAmcWUg7CHWKUgzG972URNXWKV6N2Vf7GPUUF",
  "key45": "39kLE1B31PWfVCYnDuYPGZZiKDFLp3XQFeTVi65mMrFd4VWpYA8zwSqP3ZjTSSS4j85TCjzwiebQFXmgfZ7H8RSX",
  "key46": "2qz8UiKKnRiF7UybpkN6s97Vp5rJGxfSE1gd8eAgvR4QpvckYQXeQDuK7thfVZLYdD43QYQrpUqpbmi7jYBUwrrn",
  "key47": "4q2PUZ5CiHbcbVBtxdvF9S9mN4bfsiXqQA8oRsn1FaNwbN13wd8B9nkJ6brGsXuroj6LoHPFDFzWQ5wkN9GTunHK"
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
